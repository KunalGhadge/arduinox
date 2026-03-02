# ArduinoX Windows Installer
# Usage: powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/anomalyco/arduinox/main/install.ps1 | iex"

$ErrorActionPreference = "Stop"

$app = "arduinox"
$repo = "anomalyco/arduinox"
$installDir = "$HOME\.arduinox\bin"

Write-Host "ArduinoX Installer" -ForegroundColor Cyan
Write-Host "-------------------" -ForegroundColor Cyan

# Ensure install directory exists
if (!(Test-Path $installDir)) {
    New-Item -ItemType Directory -Path $installDir -Force | Out-Null
}

# Determine Architecture
$arch = if ([System.Environment]::Is64BitOperatingSystem) { "x64" } else { "x86" }
if ($arch -ne "x64") {
    Write-Error "ArduinoX only supports 64-bit Windows."
    exit 1
}

# Get Latest version
Write-Host "Checking for latest version..." -NoNewline
try {
    $releaseUrl = "https://api.github.com/repos/$repo/releases/latest"
    $release = Invoke-RestMethod -Uri $releaseUrl
    $version = $release.tag_name.TrimStart('v')
    Write-Host " v$version" -ForegroundColor Green
} catch {
    Write-Error "Failed to fetch version information from GitHub."
    exit 1
}

# Download URLs
$filename = "arduinox-windows-x64.zip"
$downloadUrl = "https://github.com/$repo/releases/download/v$version/$filename"

$tempPath = [System.IO.Path]::GetTempFileName() + ".zip"

try {
    Write-Host "Downloading ArduinoX bundle..."
    Invoke-WebRequest -Uri $downloadUrl -OutFile $tempPath -ShowProgress
} catch {
    Write-Error "Failed to download ArduinoX from $downloadUrl"
    exit 1
}

# Extract binaries
try {
    Write-Host "Extracting binaries..."
    $extractPath = Join-Path $env:TEMP "arduinox_install"
    if (Test-Path $extractPath) { Remove-Item -Recurse -Force $extractPath }
    Expand-Archive -Path $tempPath -DestinationPath $extractPath -Force
    
    # Copy both arduinox.exe and arduino-cli.exe
    Copy-Item -Path "$extractPath\arduinox.exe" -Destination "$installDir\arduinox.exe" -Force
    if (Test-Path "$extractPath\arduino-cli.exe") {
        Copy-Item -Path "$extractPath\arduino-cli.exe" -Destination "$installDir\arduino-cli.exe" -Force
    }
    
    Write-Host "Installation successful!" -ForegroundColor Green
} catch {
    Write-Error "Failed to extract or copy binaries."
    exit 1
} finally {
    Remove-Item $tempPath -ErrorAction SilentlyContinue
    Remove-Item -Recurse $extractPath -ErrorAction SilentlyContinue
}

# Update PATH
$currentPath = [System.Environment]::GetEnvironmentVariable("Path", "User")
if ($currentPath -notlike "*$installDir*") {
    Write-Host "Adding $installDir to PATH..."
    [System.Environment]::SetEnvironmentVariable("Path", "$currentPath;$installDir", "User")
    $env:Path = "$env:Path;$installDir"
    Write-Host "PATH updated successfully. You may need to restart your terminal." -ForegroundColor Yellow
}

Write-Host "`nSuccessfully installed ArduinoX!" -ForegroundColor Green
Write-Host "To get started, open a new terminal and type: arduinox run"
