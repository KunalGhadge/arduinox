# =============================================================
#  Arduinox Quick Setup Script (Windows PowerShell)
#  This script sets up Arduinox from source for users who
#  don't have the standalone .exe binary.
#
#  Usage: Right-click this file -> "Run with PowerShell"
#         OR open PowerShell and run: .\setup.ps1
# =============================================================

$ErrorActionPreference = "Stop"

function Write-Header {
    Write-Host ""
    Write-Host "  ╔══════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "  ║         ARDUINOX - Quick Setup           ║" -ForegroundColor Cyan
    Write-Host "  ║   AI Coding Agent for Arduino Hardware   ║" -ForegroundColor Cyan
    Write-Host "  ╚══════════════════════════════════════════╝" -ForegroundColor Cyan
    Write-Host ""
}

function Write-Step {
    param([string]$Step, [string]$Message)
    Write-Host "  [$Step] " -ForegroundColor Yellow -NoNewline
    Write-Host $Message
}

function Write-OK {
    param([string]$Message)
    Write-Host "  [OK] " -ForegroundColor Green -NoNewline
    Write-Host $Message
}

function Write-Err {
    param([string]$Message)
    Write-Host "  [ERROR] " -ForegroundColor Red -NoNewline
    Write-Host $Message
}

Write-Header

# -----------------------------------------------------------
# Step 1: Check if Bun is installed
# -----------------------------------------------------------
Write-Step "1/4" "Checking for Bun runtime..."

$bunPath = Get-Command bun -ErrorAction SilentlyContinue
if ($bunPath) {
    $bunVersion = & bun --version 2>$null
    Write-OK "Bun $bunVersion is installed."
} else {
    Write-Step "1/4" "Bun not found. Installing Bun..."
    try {
        Invoke-RestMethod https://bun.sh/install.ps1 | Invoke-Expression
        # Refresh PATH
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
        $bunVersion = & bun --version 2>$null
        Write-OK "Bun $bunVersion installed successfully."
    } catch {
        Write-Err "Failed to install Bun. Please install manually: https://bun.sh"
        Write-Host "  After installing, re-run this script." -ForegroundColor Gray
        Read-Host "  Press Enter to exit"
        exit 1
    }
}

# -----------------------------------------------------------
# Step 2: Install dependencies
# -----------------------------------------------------------
Write-Step "2/4" "Installing dependencies (this may take a minute)..."

try {
    $projectRoot = Split-Path -Parent $PSScriptRoot
    if (-not $projectRoot) { $projectRoot = $PSScriptRoot }
    if (-not $projectRoot) { $projectRoot = Get-Location }
    
    # Try to find the project root by looking for package.json
    $searchDir = Get-Location
    while ($searchDir -and -not (Test-Path (Join-Path $searchDir "package.json"))) {
        $parent = Split-Path $searchDir -Parent
        if ($parent -eq $searchDir) { break }
        $searchDir = $parent
    }
    if (Test-Path (Join-Path $searchDir "package.json")) {
        $projectRoot = $searchDir
    }

    Push-Location $projectRoot
    & bun install 2>&1 | Out-Null
    Pop-Location
    Write-OK "Dependencies installed."
} catch {
    Write-Err "Failed to install dependencies: $_"
    Read-Host "  Press Enter to exit"
    exit 1
}

# -----------------------------------------------------------
# Step 3: Info
# -----------------------------------------------------------
Write-Step "3/4" "Setup complete!"
Write-Host ""
Write-OK "Arduinox is ready to run."
Write-Host ""

# -----------------------------------------------------------
# Step 4: Launch
# -----------------------------------------------------------
Write-Step "4/4" "Launching Arduinox..."
Write-Host ""
Write-Host "  Tip: Next time, just run:" -ForegroundColor Gray
Write-Host "    cd `"$projectRoot`"" -ForegroundColor White
Write-Host "    bun run dev" -ForegroundColor White
Write-Host ""

try {
    Push-Location $projectRoot
    & bun run dev
    Pop-Location
} catch {
    Write-Err "Failed to launch: $_"
    Read-Host "  Press Enter to exit"
    exit 1
}
