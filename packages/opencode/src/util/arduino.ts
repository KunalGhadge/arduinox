import path from "path"
import { existsSync } from "fs"
import { Process } from "./process"
import { Instance } from "../project/instance"

export namespace Arduino {
    /**
     * Resolves the absolute path to the arduino-cli executable.
     */
    export function getCliPath(): string {
        const candidates = [
            path.join(Instance.directory, "arduino-cli.exe"),
            path.join(Instance.directory, "..", "..", "arduino-cli.exe"), // Root of monorepo
            path.join(process.cwd(), "arduino-cli.exe"),
            "arduino-cli.exe" // Fallback to PATH
        ]

        for (const candidate of candidates) {
            if (existsSync(candidate)) return candidate
        }

        return "arduino-cli.exe"
    }

    /**
     * Runs an arduino-cli command safely with full error handling.
     */
    export async function run(args: string[]): Promise<Process.Result> {
        const cli = getCliPath()
        try {
            return await Process.run([cli, ...args], {
                cwd: Instance.directory
            })
        } catch (e: any) {
            // Even if it throws RunFailedError, we return the result so tools can handle it
            if (e instanceof Process.RunFailedError) {
                return {
                    code: e.code,
                    stdout: e.stdout,
                    stderr: e.stderr
                }
            }
            // If it's a spawn error (e.g. file not found), return a synthetic failure
            return {
                code: -1,
                stdout: Buffer.from(""),
                stderr: Buffer.from(e.message || "Failed to spawn arduino-cli")
            }
        }
    }
}
