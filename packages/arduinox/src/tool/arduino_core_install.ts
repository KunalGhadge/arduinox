import z from "zod"
import { Tool } from "../tool/tool"
import { Arduino } from "../util/arduino"

export const ArduinoCoreInstallTool = Tool.define("arduino_core_install", {
    description: "Installs board platform support (e.g. ESP32, STM32). Required before you can compile/upload for non-Arduino boards.",
    parameters: z.object({
        core: z.string().describe("Core identifier to install, e.g. 'esp32:esp32' for ESP32 or 'arduino:avr' for Arduino AVR")
    }),
    async execute({ core }, ctx) {
        const result = await Arduino.run(["core", "install", core])

        if (result.code === 0) {
            return {
                title: "Core Install",
                metadata: { success: true } as any,
                output: `┌─ arduino_core_install ─────────────┐
│  📦 INSTALLING: ${core.substring(0, 20).padEnd(20)}│
│  ✅ Platform installed successfully  │
│  ${result.stdout.toString().trim().substring(0, 35).padEnd(35)}│
│  💡 You can now compile for this     │
│     board platform                   │
└────────────────────────────────────┘`
            }
        } else {
            return {
                title: "Core Install Failed",
                metadata: { success: false } as any,
                output: `┌─ arduino_core_install ─────────────┐
│  📦 INSTALLING: ${core.substring(0, 20).padEnd(20)}│
│  ❌ Installation FAILED              │
│  ${result.stderr.toString().trim().substring(0, 35).padEnd(35)}│
│  💡 Run update index first:          │
│     arduino-cli core update-index    │
└────────────────────────────────────┘`
            }
        }
    }
})
