import z from "zod"
import { Tool } from "../tool/tool"
import path from "path"
import { Arduino } from "../util/arduino"

export const ArduinoUploadTool = Tool.define("arduino_upload", {
    description: "Uploads compiled code to the connected Arduino board. Only use AFTER successful compilation.",
    parameters: z.object({
        fqbn: z.string().describe("Fully Qualified Board Name, e.g. 'arduino:avr:uno'"),
        port: z.string().describe("Serial port of the board, e.g. 'COM3' or '/dev/ttyACM0'"),
        sketch_path: z.string().describe("Absolute path to the .ino sketch file or its parent directory")
    }),
    async execute({ fqbn, port, sketch_path }, ctx) {
        const result = await Arduino.run(["upload", "-b", fqbn, "-p", port, sketch_path])
        const sketchName = path.basename(sketch_path)

        if (result.code === 0) {
            return {
                title: "Upload Complete",
                metadata: { success: true } as any,
                output: `┌─ 📤 UPLOADING ────────────────────┐
│  📄 Sketch: ${sketchName.substring(0, 23).padEnd(23)}│
│  📦 Board:  ${fqbn.substring(0, 23).padEnd(23)}│
│  📍 Port:   ${port.padEnd(23)}│
│  ✅ Upload COMPLETE                 │
│  🟢 Board is running your code!     │
├────────────────────────────────────┤
│  💡 Use /monitor to see serial      │
│     output from your board          │
└────────────────────────────────────┘`
            }
        } else {
            return {
                title: "Upload Failed",
                metadata: { success: false } as any,
                output: `┌─ 📤 UPLOADING ────────────────────┐
│  📄 Sketch: ${sketchName.substring(0, 23).padEnd(23)}│
│  📦 Board:  ${fqbn.substring(0, 23).padEnd(23)}│
│  📍 Port:   ${port.padEnd(23)}│
│  ❌ Upload FAILED                   │
├────────────────────────────────────┤
│  ${(result.stderr || result.stdout).toString().trim().substring(0, 35).padEnd(35)}│
│  💡 Check:                          │
│  • Board is still connected         │
│  • Port is not used by another app  │
│  • Correct FQBN for your board      │
└────────────────────────────────────┘`
            }
        }
    }
})
