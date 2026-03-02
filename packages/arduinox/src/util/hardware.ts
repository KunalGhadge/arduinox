import path from "path"
import { existsSync } from "fs"
import fs from "fs/promises"
import { Instance } from "../project/instance"

export namespace Hardware {
    /**
 * Resolves the hardware skills directory path.
 */
    export function getSkillsDir(): string | null {
        const candidates = [
            path.join(Instance.directory, "packages", "arduinox", "src", "hardware", "skills"),
            path.join(Instance.directory, "src", "hardware", "skills"),
            path.join(process.cwd(), "packages", "arduinox", "src", "hardware", "skills")
        ]

        for (const candidate of candidates) {
            if (existsSync(candidate)) return candidate
        }

        return null
    }

    /**
     * Aggregates modular hardware skills into a single registry object.
     */
    export async function getRegistry(): Promise<any> {
        const skillsDir = getSkillsDir()
        const registry = { boards: [] as any[], components: [] as any[] }

        // Start with the legacy registry if it exists
        const legacyPath = path.join(path.dirname(skillsDir || ""), "registry.json")
        if (existsSync(legacyPath)) {
            const data = await fs.readFile(legacyPath, "utf-8")
            const legacy = JSON.parse(data)
            registry.boards = legacy.boards || []
            registry.components = legacy.components || []
        }

        // Scan modular skills recursively
        if (skillsDir) {
            const scanSkills = async (dir: string) => {
                const entries = await fs.readdir(dir, { withFileTypes: true })
                for (const entry of entries) {
                    const fullPath = path.join(dir, entry.name)
                    if (entry.isDirectory()) {
                        await scanSkills(fullPath)
                    } else if (entry.name === "hardware.json") {
                        try {
                            const data = await fs.readFile(fullPath, "utf-8")
                            const component = JSON.parse(data)
                            // Add SKILL.md path if it exists
                            const skillMd = path.join(dir, "SKILL.md")
                            if (existsSync(skillMd)) {
                                component.skill_path = skillMd
                            }
                            if (component.type === "base_board") {
                                registry.boards.push(component)
                            } else {
                                registry.components.push(component)
                            }
                        } catch (err: any) {
                            console.error(`Failed to load hardware skill at ${fullPath}: ${err.message}`)
                        }
                    }
                }
            }
            await scanSkills(skillsDir)
        }

        return registry
    }

    /**
     * Reads the project manifest (arduinox.json) safely.
     */
    export async function getManifest(): Promise<any | null> {
        const manifestPath = path.join(Instance.directory, "arduinox.json")
        if (!existsSync(manifestPath)) return null

        try {
            const data = await fs.readFile(manifestPath, "utf-8")
            return JSON.parse(data)
        } catch (e) {
            return null
        }
    }

    /**
     * Saves the project manifest.
     */
    export async function saveManifest(manifest: any): Promise<void> {
        const manifestPath = path.join(Instance.directory, "arduinox.json")
        await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf-8")
    }
}
