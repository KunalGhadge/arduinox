import z from "zod"
import { Tool } from "../tool/tool"
import { Instance } from "../project/instance"
import path from "node:path"
import { Arduino } from "../util/arduino"

export const ArduinoSketchNewTool = Tool.define("arduino_sketch_new", {
    description: "Creates a new Arduino sketch folder with a blank .ino file. Use this at the start of a new project.",
    parameters: z.object({
        name: z.string().describe("Name of the sketch, e.g. 'visitor_counter' or 'temperature_monitor'")
    }),
    async execute({ name }, ctx) {
        const sketchDir = path.join(Instance.directory, "projects", name)
        const result = await Arduino.run(["sketch", "new", sketchDir])

        if (result.code === 0) {
            return {
                title: "New Sketch",
                metadata: { success: true, path: sketchDir } as any,
                output: `┌─ arduino_sketch_new ──────────────┐
│  📁 CREATING: ${name.substring(0, 22).padEnd(22)}│
│  ✅ Sketch created at:              │
│  📍 ${sketchDir.substring(0, 33).padEnd(33)}│
└────────────────────────────────────┘`
            }
        } else {
            return {
                title: "New Sketch Failed",
                metadata: { success: false } as any,
                output: `┌─ arduino_sketch_new ──────────────┐
│  ❌ Failed to create sketch          │
│  ${(result.stderr || result.stdout).toString().trim().substring(0, 35).padEnd(35)}│
└────────────────────────────────────┘`
            }
        }
    }
})
