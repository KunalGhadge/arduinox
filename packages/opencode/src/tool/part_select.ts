import z from "zod"
import { Tool } from "../tool/tool"
import { Hardware } from "../util/hardware"

export const PartSelectTool = Tool.define("part_select", {
    description: "Saves hardware components to the project manifest (`arduinox.json`). The Build Agent will read this file to know exactly what libraries and pinouts to use for the C++ code.",
    parameters: z.object({
        ids: z.array(z.string()).describe("A list of exact part IDs (from part_search) to add to the project. Example: ['arduino_uno_r3', 'ir_sensor_tcrt5000']")
    }),
    async execute({ ids }, ctx) {
        try {
            // Load available registry
            const registry = await Hardware.getRegistry()
            const allItems = [...(registry.boards || []), ...(registry.components || [])]

            // Map IDs to actual full objects
            const selectedComponents = []
            const notFound = []

            for (const id of ids) {
                const found = allItems.find(item => item.id === id)
                if (found) {
                    selectedComponents.push(found)
                } else {
                    notFound.push(id)
                }
            }

            if (selectedComponents.length === 0) {
                return {
                    title: "Part Selection Failed",
                    metadata: { success: false } as any,
                    output: `None of the requested part IDs were found in the registry. Not found: ${notFound.join(", ")}`
                }
            }

            // Write to project manifest
            const manifest = {
                project_name: "ArduinoX Project",
                last_updated: new Date().toISOString(),
                hardware: selectedComponents
            }

            await Hardware.saveManifest(manifest)

            let responseMsg = `Successfully wrote ${selectedComponents.length} components to arduinox.json.\n`
            if (notFound.length > 0) {
                responseMsg += `WARNING: The following IDs were NOT found and were skipped: ${notFound.join(", ")}`
            }

            return {
                title: "Parts Applied to Manifest",
                metadata: { success: true } as any,
                output: responseMsg
            }

        } catch (e: any) {
            return {
                title: "Selection Error",
                metadata: { success: false } as any,
                output: `Failed to update project manifest: ${e.message}`
            }
        }
    }
})
