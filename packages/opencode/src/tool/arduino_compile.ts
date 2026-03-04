import z from "zod"
import { Tool } from "../tool/tool"
import path from "path"
import { Arduino } from "../util/arduino"

export const ArduinoCompileTool = Tool.define("arduino_compile", {
    description: "Compiles an Arduino sketch to verify syntax and check for missing libraries. Does NOT upload to board.",
    parameters: z.object({
        fqbn: z.string().describe("Fully Qualified Board Name, e.g. 'arduino:avr:uno' or 'esp32:esp32:esp32'"),
        sketch_path: z.string().describe("Absolute path to the .ino sketch file or its parent directory")
    }),
    async execute({ fqbn, sketch_path }, ctx) {
        const result = await Arduino.run(["compile", "-b", fqbn, sketch_path, "--json"])
        const sketchName = path.basename(sketch_path)

        if (result.code === 0) {
            let sizeInfo = ""
            try {
                const parsed = JSON.parse(result.stdout.toString())
                if (parsed.builder_result?.executable_sections_size) {
                    const sections = parsed.builder_result.executable_sections_size
                    for (const s of sections) {
                        sizeInfo += `│  💾 ${s.name}: ${s.size} bytes${" ".repeat(Math.max(0, 18 - String(s.size).length - s.name.length))}│\n`
                    }
                }
            } catch { }

            return {
                title: "Compilation",
                metadata: { success: true } as any,
                output: `┌─ 🔨 COMPILING ────────────────────┐
│  📄 Sketch: ${sketchName.substring(0, 23).padEnd(23)}│
│  📦 Board:  ${fqbn.substring(0, 23).padEnd(23)}│
│  ✅ Compilation PASSED              │
${sizeInfo}└────────────────────────────────────┘`
            }
        } else {
            const errorDetail = (result.stderr || result.stdout).toString().trim()
            const errorLines = errorDetail.split("\n").filter(l => l.includes("error:"))
            const errorSummary = errorLines.length > 0
                ? errorLines[0].substring(0, 60)
                : errorDetail.substring(0, 60)

            return {
                title: "Compilation Failed",
                metadata: { success: false } as any,
                output: `┌─ 🔨 COMPILING ────────────────────┐
│  📄 Sketch: ${sketchName.substring(0, 23).padEnd(23)}│
│  📦 Board:  ${fqbn.substring(0, 23).padEnd(23)}│
│  ❌ Compilation FAILED              │
├────────────────────────────────────┤
│  📍 Error:                          │
│  ${errorSummary.padEnd(35)}│
├────────────────────────────────────┤
│  💡 Common fixes:                   │
│  • Check for missing semicolons     │
│  • Use /install-lib for missing libs│
│  • Verify pin numbers match board   │
└────────────────────────────────────┘

Full error output:
${errorDetail.substring(0, 500)}`
            }
        }
    }
})
