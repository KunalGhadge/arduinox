import z from "zod"
import { Tool } from "../tool/tool"
import { Arduino } from "../util/arduino"

export const ArduinoLibSearchTool = Tool.define("arduino_lib_search", {
    description: "Searches for available Arduino libraries by keyword. Useful for finding the correct library name before installing.",
    parameters: z.object({
        query: z.string().describe("Search keyword, e.g. 'DHT', 'LCD', 'servo'")
    }),
    async execute({ query }, ctx) {
        const result = await Arduino.run(["lib", "search", query, "--json"])

        if (result.code === 0) {
            try {
                const parsed = JSON.parse(result.stdout.toString())
                const libs = parsed.libraries || []
                const top5 = libs.slice(0, 5)

                if (top5.length === 0) {
                    return {
                        title: "Library Search",
                        metadata: { success: true, count: 0 } as any,
                        output: `┌─ arduino_lib_search ──────────────┐
│  🔎 SEARCH: "${query}"${" ".repeat(Math.max(0, 22 - query.length))}│
│  📭 No libraries found              │
└────────────────────────────────────┘`
                    }
                }

                let out = `┌─ arduino_lib_search ──────────────┐
│  🔎 SEARCH: "${query}" (${libs.length} total)${" ".repeat(Math.max(0, 14 - query.length - String(libs.length).length))}│
└────────────────────────────────────┘\n\n`

                for (const lib of top5) {
                    const name = lib.name || "Unknown"
                    const ver = lib.latest?.version || "?"
                    const sentence = lib.latest?.sentence || ""
                    out += `📦 ${name} (v${ver})\n`
                    out += `   ${sentence.substring(0, 60)}\n\n`
                }

                if (libs.length > 5) {
                    out += `... and ${libs.length - 5} more results\n`
                }

                return {
                    title: "Library Search",
                    metadata: { success: true, count: libs.length } as any,
                    output: out
                }
            } catch {
                return {
                    title: "Library Search",
                    metadata: { success: true } as any,
                    output: result.stdout.toString()
                }
            }
        } else {
            return {
                title: "Library Search Failed",
                metadata: { success: false } as any,
                output: `❌ Search failed: ${result.stderr.toString().trim().substring(0, 100)}`
            }
        }
    }
})
