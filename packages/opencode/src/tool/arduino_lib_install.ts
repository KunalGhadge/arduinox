import z from "zod"
import { Tool } from "../tool/tool"
import { Arduino } from "../util/arduino"

export const ArduinoLibInstallTool = Tool.define("arduino_lib_install", {
    description: "Installs an Arduino library using arduino-cli. Use this when compilation fails due to a missing library.",
    parameters: z.object({
        library_name: z.string().describe("Exact library name to install, e.g. 'LiquidCrystal I2C' or 'DHT sensor library'")
    }),
    async execute({ library_name }, ctx) {
        const result = await Arduino.run(["lib", "install", library_name])

        if (result.code === 0) {
            return {
                title: "Library Install",
                metadata: { success: true } as any,
                output: `┌─ arduino_lib_install ──────────────┐
│  📦 INSTALLING: ${library_name.substring(0, 20).padEnd(20)}│
│  ✅ Installation COMPLETE           │
│  ${result.stdout.toString().trim().substring(0, 35).padEnd(35)}│
└────────────────────────────────────┘`
            }
        } else {
            return {
                title: "Library Install Failed",
                metadata: { success: false } as any,
                output: `┌─ arduino_lib_install ──────────────┐
│  📦 INSTALLING: ${library_name.substring(0, 20).padEnd(20)}│
│  ❌ Installation FAILED             │
│  ${result.stderr.toString().trim().substring(0, 35).padEnd(35)}│
│  💡 Check library name spelling     │
└────────────────────────────────────┘`
            }
        }
    }
})
