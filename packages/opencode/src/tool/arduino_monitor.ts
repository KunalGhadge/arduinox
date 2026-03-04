import z from "zod"
import { Tool } from "../tool/tool"
import { Instance } from "../project/instance"
import { Arduino } from "../util/arduino"
import { spawn } from "node:child_process"
import { Buffer } from "node:buffer"

export const ArduinoMonitorTool = Tool.define("arduino_monitor", {
    description: "Opens the serial monitor to read output from the connected Arduino board. Shows Serial.println() data. Captures output for 10 seconds then returns.",
    parameters: z.object({
        port: z.string().describe("The serial port to monitor, e.g. 'COM3' or '/dev/ttyACM0'"),
        baudrate: z.string().optional().describe("Baud rate for serial communication. Default: 9600")
    }),
    async execute({ port, baudrate }, ctx) {
        const cliPath = Arduino.getCliPath()
        const baud = baudrate || "9600"

        return new Promise((resolve) => {
            const proc = spawn(cliPath, ["monitor", "-p", port, "--config", `baudrate=${baud}`])
            let output = ""
            let lines = 0
            const MAX_LINES = 100
            const TIMEOUT_MS = 10000

            proc.stdout.on("data", (d: Buffer) => {
                const text = d.toString()
                output += text
                lines += text.split("\n").length - 1
                if (lines >= MAX_LINES) {
                    proc.kill()
                }
            })

            proc.stderr.on("data", (d: Buffer) => {
                output += d.toString()
            })

            // Auto-stop after timeout
            const timer = setTimeout(() => {
                proc.kill()
            }, TIMEOUT_MS)

            proc.on("close", (code: number) => {
                clearTimeout(timer)
                const trimmedOutput = output.trim().substring(0, 4000)

                if (trimmedOutput.length > 0) {
                    resolve({
                        title: "Serial Monitor",
                        metadata: { success: true } as any,
                        output: `┌─ Serial Monitor ──────────────────┐
│  🧩 Port:   ${port.padEnd(23)}│
│  📶 Baud:   ${baud.padEnd(23)}│
│  📄 Lines:  ${String(lines).padEnd(23)}│
└────────────────────────────────────┘

--- Serial Output (Snapshot) ---
${trimmedOutput}
--- End of Transmission ---`
                    })
                } else {
                    resolve({
                        title: "Serial Monitor",
                        metadata: { success: false } as any,
                        output: `┌─ Serial Monitor ──────────────────┐
│  📡 PORT: ${port.padEnd(26)}│
│  ⚠️  No output received (10s)       │
│  💡 Check board is running code     │
│  💡 Verify Serial.begin(${baud})     │
└────────────────────────────────────┘`
                    })
                }
            })
        })
    }
})
