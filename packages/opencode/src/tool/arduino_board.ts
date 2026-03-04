import z from "zod"
import { Tool } from "../tool/tool"
import { Arduino } from "../util/arduino"

export const ArduinoBoardTool = Tool.define("arduino_board", {
    description: "Scans all USB ports and lists connected Arduino boards with their port addresses and FQBNs. Use this to detect what hardware is available.",
    parameters: z.object({}),
    async execute(_args, ctx) {
        const result = await Arduino.run(["board", "list", "--json"])

        if (result.code === 0) {
            try {
                const stdout = result.stdout.toString()
                const parsed = JSON.parse(stdout)
                const ports = parsed.detected_ports || []

                if (ports.length === 0) {
                    return {
                        title: "Board Scan",
                        metadata: { success: true, count: 0 } as any,
                        output: `┌─ 🔍 SCANNING USB PORTS... ─────────┐
│  📭 No Arduino boards found         │
│  💡 Make sure your board is          │
│     plugged in via USB               │
└────────────────────────────────────┘`
                    }
                }

                let out = `┌─ 🔍 SCANNING USB PORTS... ─────────┐\n`
                for (const port of ports) {
                    const addr = port.port?.address || "?"
                    const boards = port.matching_boards || []

                    if (boards.length > 0) {
                        for (const b of boards) {
                            out += `│  ✅ Found: ${(b.name || "Unknown").substring(0, 24).padEnd(24)}│\n`
                            out += `│  📍 Port:  ${addr.padEnd(24)}│\n`
                            out += `│  🏷️  FQBN:  ${(b.fqbn || "N/A").padEnd(24)}│\n`
                        }
                    } else {
                        out += `│  📍 Port:  ${addr.padEnd(24)}│\n`
                        out += `│  ⚠️  No board identified             │\n`
                    }
                }
                out += `└────────────────────────────────────┘`

                return {
                    title: "Board Scan",
                    metadata: { success: true, count: ports.length } as any,
                    output: out
                }
            } catch {
                return {
                    title: "Board Scan",
                    metadata: { success: true } as any,
                    output: result.stdout.toString()
                }
            }
        } else {
            return {
                title: "Board Scan Failed",
                metadata: { success: false } as any,
                output: `┌─ 🔍 SCANNING USB PORTS... ─────────┐
│  ❌ Scan failed                      │
│  ${result.stderr.toString().trim().substring(0, 35).padEnd(35)}│
└────────────────────────────────────┘`
            }
        }
    }
})
