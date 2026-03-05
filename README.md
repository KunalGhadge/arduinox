<p align="center">
  <a href="https://arduinox.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ArduinoX logo">
    </picture>
  </a>
</p>
<p align="center">The world's first agentic AI coding assistant specifically engineered for **Arduino and hardware development**.</p>
<p align="center">
  <a href="https://arduinox.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/arduinox-ai"><img alt="npm" src="https://img.shields.io/npm/v/arduinox-ai?style=flat-square" /></a>
  <a href="https://github.com/KunalGhadge/arduinox/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/KunalGhadge/arduinox/publish.yml?style=flat-square&branch=dev" /></a>
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

---

## ⚡ The Revolution: AI Meets Physical Hardware

In the past, embedded development required manual data sheet diving, complex pin mapping, and tedious debugging. **ArduinoX changes the game.** By bridging high-level AI reasoning with low-level physical execution, we've transformed how hardware is built.

- **Hardware-Aware Intelligence**: Not just a generic LLM. ArduinoX understands circuit diagrams, sensor registries, and peripheral abstractions.
- **Physical "Closed-Loop" Execution**: ArduinoX doesn't just write code; it can compile, upload, and monitor serial output to fix bugs in real-time.
- **Agentic Problem Solving**: Tell it *"Build me a weather station with a DHT11 and an LCD,"* and it will plan the circuit, write the C++, and verify the build.

---

## 🆚 ArduinoX vs. Traditional Arduino IDE

| Feature | Traditional IDE | ArduinoX |
| :--- | :--- | :--- |
| **Code Generation** | Manual / Static Snippets | **Dynamic AI Pair Programming** |
| **Setup** | Manual Installer & Drivers | **Zero-Setup (Portable CLI Bundled)** |
| **Debugging** | Manual Serial Monitoring | **AI-Powered Auto-Debugging** |
| **Interface** | Basic GUI | **Premium, High-Performance TUI** |
| **Intelligence** | None | **Agentic (Build, Plan, Research)** |

---

~~## 📥 Installation (For Users)

ArduinoX is designed to be **portable and dependency-free**. 

### **Windows (One-Liner)**
Open PowerShell and run:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install.ps1 | iex"
```

### **macOS / Linux (One-Liner)**
Open Terminal and run:
```bash
curl -fsSL https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install | bash
```

--- ~~

## 🛠️ Basic Usage

### Common Commands

| Command | Description |
| :--- | :--- |
| `arduinox run` | Start the interactive AI TUI (Primary Command) |
| `arduinox auth login` | Securely log in to your ArduinoX Cloud account |
| `arduinox models list` | View and switch between GPT-4, Claude, and Gemini |
| `arduinox --version` | Check your current version |

### Arduino Specific Operations
Within the TUI or CLI, you can use specialized hardware triggers:

- **Board Detection**: `arduinox board list`
- **Library Management**: `arduinox lib install <name>`
- **One-Click Upload**: `arduinox upload --board <fqbn>`

---

## 👨‍💻 Build & Contribute (For Developers)

We welcome contributors! ArduinoX is a high-performance monorepo built with **Bun** and **TypeScript**.

### 🛠️ Developer Setup
Ensure you have [Bun](https://bun.sh) installed.

1. **Clone the Repo**
   ```bash
   git clone https://github.com/KunalGhadge/arduinox.git
   cd arduinox
   ```

2. **Install Dependencies**
   ```bash
   bun install
   ```

3. **Run in Development Mode**
   ```bash
   bun run dev
   ```

### 🛡️ Contribution Guidelines (Stability First)
To keep the application stable for thousands of users:
- **No Direct Master Pushes**: Always use Pull Requests.
- **Type Safety**: Run `bun run typecheck` before committing.
- **Brand Integrity**: Maintain the "ArduinoX" branding in all user-facing strings.
- **UI Preservation**: Do not modify CSS or TUI layout without prior discussion in Discord.

---

## 🤝 Contributors

*We are looking for our first community contributors! Submit your first PR to see your name here.*

---

## 📣 Community & Support

- [Discord](https://arduinox.ai/discord)
- [X (Twitter)](https://x.com/arduinox)
- [Documentation](https://arduinox.ai/docs)

---
<p align="center">Built with ❤️ for the Hardware Community.</p>
