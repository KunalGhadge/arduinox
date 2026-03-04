import z from "zod"
import { Tool } from "../tool/tool"
import { Hardware } from "../util/hardware"

export const PartSearchTool = Tool.define("part_search", {
    description: "Searches the hardware parts registry to find available boards and components. Always use this during the planning phase to find valid components before writing any code.",
    parameters: z.object({
        query: z.string().describe("A keyword to search for, e.g., 'sensor', 'esp32', 'lcd', or leave empty for everything."),
        type: z.enum(["all", "base_board", "sensor", "display", "actuator"]).optional().describe("Filter by part type.")
    }),
    async execute({ query, type }, ctx) {
        try {
            const registry = await Hardware.getRegistry()
            const allItems = [...(registry.boards || []), ...(registry.components || [])]
            let filtered = allItems

            // Apply type filter
            if (type && type !== "all") {
                filtered = filtered.filter(item => item.type === type)
            }

            // Apply query filter
            if (query && query.trim() !== "") {
                const q = query.toLowerCase()
                filtered = filtered.filter(item =>
                    item.name.toLowerCase().includes(q) ||
                    item.id.toLowerCase().includes(q) ||
                    (item.description && item.description.toLowerCase().includes(q))
                )
            }

            if (filtered.length === 0) {
                return {
                    title: "Part Search Results",
                    metadata: { success: true, count: 0 } as any,
                    output: `No parts found matching query: '${query}' ${type ? `of type '${type}'` : ''}`
                }
            }

            // Format for the LLM
            let out = `Found ${filtered.length} parts:\n\n`
            for (const item of filtered) {
                out += `ID: ${item.id}\n`
                out += `Name: ${item.name}\n`
                out += `Type: ${item.type}\n`
                if (item.skill_path) {
                    out += `🧠 Hardware Skill: AVAILABLE (Path: ${item.skill_path})\n`
                } else {
                    out += `🧠 Hardware Skill: MISSING (No engineering wisdom yet)\n`
                }
                if (item.fqbn) out += `FQBN: ${item.fqbn}\n`
                if (item.libraries_required?.length > 0) out += `Libraries: ${item.libraries_required.join(", ")}\n`
                out += `Description: ${item.description}\n`

                if (item.pins) {
                    out += "Important Pins:\n"
                    for (const [pName, pDesc] of Object.entries(item.pins)) {
                        out += `  - ${pName}: ${pDesc}\n`
                    }
                }
                out += "\n---\n"
            }

            return {
                title: "Part Search Results",
                metadata: { success: true, count: filtered.length } as any,
                output: out
            }

        } catch (e: any) {
            return {
                title: "Registry Error",
                metadata: { success: false } as any,
                output: `Failed to search hardware registry: ${e.message}`
            }
        }
    }
})
