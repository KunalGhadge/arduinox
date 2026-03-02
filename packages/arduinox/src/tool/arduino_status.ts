import z from "zod"
import { Tool } from "../tool/tool"
import { Arduino } from "../util/arduino"
import { Hardware } from "../util/hardware"

export const ArduinoStatusTool = Tool.define("arduino_status", {
    description: "Shows comprehensive ArduinoX project and board status. Use this to check if a board is connected, what parts are selected, and the last compile result.",
    parameters: z.object({}),
    async execute(_args, ctx) {
        let boardInfo = "❌ No board detected"
        let manifestInfo = "📁 No project manifest (arduinox.json)"

        // 1. Check connected boards
        const result = await Arduino.run(["board", "list", "--json"])
        if (result.code === 0) {
            try {
                const parsed = JSON.parse(result.stdout.toString())
                const ports = parsed.detected_ports || []
                if (ports.length > 0) {
                    const port = ports[0]
                    const portAddr = port.port?.address || "unknown"
                    const boards = port.matching_boards || []
                    const boardName = boards.length > 0 ? boards[0].name : "Unknown Board"
                    const fqbn = boards.length > 0 ? boards[0].fqbn : "N/A"
                    boardInfo = `┌─ Board Status ─────────────────────┐
│  🟢 Board:  ${boardName.substring(0, 24).padEnd(24)}│
│  📍 Port:   ${portAddr.padEnd(24)}│
│  🏷️  FQBN:   ${fqbn.padEnd(24)}│
│  ⚡ Status:  CONNECTED              │
└────────────────────────────────────┘`
                } else {
                    boardInfo = `┌─ Board Status ─────────────────────┐
│  🔴 No Arduino board detected      │
│  💡 Plug in your board and retry    │
└────────────────────────────────────┘`
                }
            } catch (e: any) {
                boardInfo = `┌─ Board Status ─────────────────────┐
│  ⚠️  Could parse, but error in scan  │
└────────────────────────────────────┘`
            }
        } else {
            boardInfo = `┌─ Board Status ─────────────────────┐
│  ⚠️  Board scan failed              │
└────────────────────────────────────┘`
        }

        // 2. Check project manifest
        try {
            const manifest = await Hardware.getManifest()
            if (manifest) {
                const hardware = manifest.hardware || []
                const parts = hardware.map((p: any) => p.name).join(", ")
                manifestInfo = `┌─ Project Manifest ─────────────────┐
│  📦 Parts:  ${String(hardware.length).padEnd(24)}│
│  🔧 Items:  ${parts.substring(0, 24).padEnd(24)}│
│  📅 Updated: ${(manifest.last_updated || "N/A").substring(0, 22).padEnd(22)}│
└────────────────────────────────────┘`
            } else {
                manifestInfo = `┌─ Project Manifest ─────────────────┐
│  📁 No arduinox.json found          │
│  💡 Use Plan mode to select parts   │
└────────────────────────────────────┘`
            }
        } catch {
            manifestInfo = `┌─ Project Manifest ─────────────────┐
│  ⚠️  Error reading arduinox.json     │
└────────────────────────────────────┘`
        }

        return {
            title: "ArduinoX Status",
            metadata: { success: true } as any,
            output: `${boardInfo}\n\n${manifestInfo}`
        }
    }
})
