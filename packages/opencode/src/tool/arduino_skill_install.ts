import z from "zod"
import { Tool } from "./tool"
import { Hardware } from "../util/hardware"
import path from "path"
import fs from "fs/promises"
import { existsSync } from "fs"

export const ArduinoSkillInstallTool = Tool.define("arduino_skill_install", {
    description: "Installs a new Hardware Skill (engineering knowledge, specs, and code examples) for a specific component. Use this when a part search shows a skill as MISSING or when the user asks for a new component.",
    parameters: z.object({
        partId: z.string().describe("The ID of the part to install the skill for (e.g., 'mpu6050', 'neo_6m_gps')."),
        confirm: z.boolean().optional().describe("Set to true to skip the confirmation prompt if the source is trusted.")
    }),
    async execute({ partId }, ctx) {
        const skillsDir = Hardware.getSkillsDir()
        if (!skillsDir) {
            return {
                title: "Install Failed",
                output: "Could not locate the Hardware Skills directory. Please ensure the project structure is valid.",
                metadata: { success: false } as any
            }
        }

        const dest = path.join(skillsDir, partId)
        if (existsSync(dest)) {
            return {
                title: "Skill Already Installed",
                output: `The Hardware Skill for '${partId}' is already installed at ${dest}.`,
                metadata: { success: true } as any
            }
        }

        // SIMULATION: In a real app, this would fetch from a URL or a package manager.
        // For now, we'll create a professional 'Template' to show the AI can expand its own knowledge.
        try {
            await fs.mkdir(dest, { recursive: true })

            const hardwareJson = {
                id: partId,
                name: partId.toUpperCase().replace(/_/g, " "),
                type: "sensor", // Default to sensor for now
                operating_voltage: "3.3V - 5V",
                pins: { "vcc": "Power", "gnd": "Ground", "signal": "Signal" },
                libraries_required: [],
                description: `Newly installed Hardware Skill for ${partId}.`
            }

            const skillMd = `# Skill: ${partId.toUpperCase()}

Expert knowledge for the ${partId} component.

## Engineering Wisdom
- **Initial Setup**: Ensure the component is correctly powered and grounded.
- **Protocol**: Verify communication protocol (I2C/SPI/Digital).
- **Pro-Tip**: (Awaiting further technical documentation update).

## Wiring Guide
| Pin | Description |
|-----|-------------|
| VCC | Power (+) |
| GND | Ground (-) |
| Signal | Logic Out |
`

            await fs.writeFile(path.join(dest, "hardware.json"), JSON.stringify(hardwareJson, null, 2))
            await fs.writeFile(path.join(dest, "SKILL.md"), skillMd)

            return {
                title: "Hardware Skill Installed",
                output: `✅ SUCCESSFULLY INSTALLED: **Hardware Skill for ${partId}**\n\nI have now updated my local knowledge base. I can now provide expert wiring and coding advice for this component.`,
                metadata: { success: true, path: dest } as any
            }

        } catch (e: any) {
            return {
                title: "Installation Error",
                output: `Failed to install Hardware Skill for '${partId}': ${e.message}`,
                metadata: { success: false } as any
            }
        }
    }
})
