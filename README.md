<p align="center">
  <a href="https://arduinox.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ArduinoX logo">
    </picture>
  </a>
</p>
<p align="center">The open source AI coding agent.</p>
<p align="center">
  <a href="https://arduinox.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/arduinox-ai"><img alt="npm" src="https://img.shields.io/npm/v/arduinox-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/arduinox/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/anomalyco/arduinox/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a>
</p>

[![ArduinoX Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://arduinox.ai)

## What is ArduinoX?

**ArduinoX** is a state-of-the-art, open-source AI coding agent specifically optimized for **Arduino and hardware development**. 

Built for the terminal and designed to feel premium, it bridges the gap between high-level AI reasoning and low-level hardware execution.

### Key Features:
*   **Hardware-Centric Intelligence**: Tailored for embedded C++, circuit planning, and sensor integration.
*   **Portable "Zero-Setup" Mode**: Bundles the **Arduino CLI** directly, allowing you to compile and upload code without manual installations.
*   **Provider Agnostic**: Use built-in **ArduinoX Zen** models, or connect your own keys for Claude, GPT-4, or Google Gemini.
*   **Deep TUI Experience**: A blazingly fast Terminal User Interface with rich aesthetics and real-time "Vercel" dark-mode styling.

---

### Quick Start

To start an interactive AI session and begin building:

```bash
# Start the TUI
arduinox run
```

---

### Usage

ArduinoX is primarily driven through the **Terminal User Interface (TUI)**. Once you run `arduinox run`, you can:

*   **Ask Anything**: Type your hardware or code questions directly.
*   **Switch Agents**: Press `Tab` to switch between **Build** (Full Access) and **Plan** (Read-Only) modes.
*   **Run Commands**: Use the terminal within the TUI to compile for specific boards.
*   **Configuration**: All settings are stored in `~/.arduinox/config.json`.

#### Common Commands

| Command | Description |
| --- | --- |
| `arduinox run` | Start the main AI session |
| `arduinox auth login` | Log in to your ArduinoX Zen account |
| `arduinox models list` | See all available AI models |
| `arduinox --version` | Check your current version |

---

### Installation

#### One-Liner (Recommended)

**Windows (PowerShell)**:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/anomalyco/arduinox/main/install.ps1 | iex"
```

**macOS / Linux (Bash)**:
```bash
curl -fsSL https://raw.githubusercontent.com/anomalyco/arduinox/main/install | bash
```

#### Package Managers

```bash
npm i -g arduinox-ai@latest        # or bun/pnpm/yarn
scoop install arduinox             # Windows
choco install arduinox             # Windows
brew install anomalyco/tap/arduinox # macOS and Linux (recommended)
sudo pacman -S arduinox            # Arch Linux
mise use -g arduinox               # Any OS
nix run nixpkgs#arduinox           # or github:anomalyco/arduinox
```

> [!TIP]
> Remove versions older than 0.1.x before installing.

### Desktop App (BETA)

ArduinoX is also available as a desktop application. Download directly from the [releases page](https://github.com/anomalyco/arduinox/releases) or [arduinox.ai/download](https://arduinox.ai/download).

| Platform              | Download                              |
| --------------------- | ------------------------------------- |
| macOS (Apple Silicon) | `arduinox-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `arduinox-desktop-darwin-x64.dmg`     |
| Windows               | `arduinox-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm`, or AppImage           |

```bash
# macOS (Homebrew)
brew install --cask arduinox-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/arduinox-desktop
```

#### Installation Directory

The install script respects the following priority order for the installation path:

1. `$ARDUINOX_INSTALL_DIR` - Custom installation directory
2. `$XDG_BIN_DIR` - XDG Base Directory Specification compliant path
3. `$HOME/bin` - Standard user binary directory (if it exists or can be created)
4. `$HOME/.arduinox/bin` - Default fallback

```bash
# Examples
ARDUINOX_INSTALL_DIR=/usr/local/bin curl -fsSL https://arduinox.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://arduinox.ai/install | bash
```

### Agents

ArduinoX includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full-access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

Learn more about [agents](https://arduinox.ai/docs/agents).

### Documentation

For more info on how to configure ArduinoX, [**head over to our docs**](https://arduinox.ai/docs).

### Contributing

If you're interested in contributing to ArduinoX, please read our [contributing docs](./CONTRIBUTING.md) before submitting a pull request.

### Building on ArduinoX

If you are working on a project that's related to ArduinoX and is using "arduinox" as part of its name, for example "arduinox-dashboard" or "arduinox-mobile", please add a note to your README to clarify that it is not built by the ArduinoX team and is not affiliated with us in any way.

### FAQ

#### How is this different from Claude Code?

It's very similar to Claude Code in terms of capability. Here are the key differences:

- 100% open source
- Not coupled to any provider. Although we recommend the models we provide through [ArduinoX Zen](https://arduinox.ai/zen), ArduinoX can be used with Claude, OpenAI, Google, or even local models. As models evolve, the gaps between them will close and pricing will drop, so being provider-agnostic is important.
- Out-of-the-box LSP support
- A focus on TUI. ArduinoX is built by neovim users and the creators of [terminal.shop](https://terminal.shop); we are going to push the limits of what's possible in the terminal.
- A client/server architecture. This, for example, can allow ArduinoX to run on your computer while you drive it remotely from a mobile app, meaning that the TUI frontend is just one of the possible clients.

---

**Join our community** [Discord](https://discord.gg/arduinox) | [X.com](https://x.com/arduinox)
