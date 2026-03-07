<p align="center">
  <a href="https://arduinox.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ArduinoX logo">
    </picture>
  </a>
</p>
<p align="center">The open-source agentic AI coding assistant built for <strong>Arduino & hardware development</strong>.</p>
<p align="center">
  <a href="https://github.com/KunalGhadge/arduinox/releases"><img alt="Download" src="https://img.shields.io/github/v/release/KunalGhadge/arduinox?style=flat-square&label=download" /></a>
  <a href="https://arduinox.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://github.com/KunalGhadge/arduinox/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/KunalGhadge/arduinox?style=flat-square" /></a>
  <a href="https://github.com/KunalGhadge/arduinox/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/KunalGhadge/arduinox?style=flat-square" /></a>
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

## 📥 Download & Install

### Windows
Download [`arduinox.exe`](https://github.com/KunalGhadge/arduinox/releases/latest) → Run it. That's it.

### macOS / Linux
```bash
curl -fsSL https://github.com/KunalGhadge/arduinox/releases/latest/download/arduinox -o arduinox && chmod +x arduinox && ./arduinox
```

### Run from Source (any OS)
```bash
git clone https://github.com/KunalGhadge/arduinox.git && cd arduinox && bun install && bun run dev
```
> Windows users: run `.\setup.ps1` instead — it auto-installs Bun for you.

---

## 🧠 What Makes ArduinoX Different

ArduinoX is not a generic AI chatbot. It is a **hardware-aware agentic coding assistant** that understands physical electronics.

### 🔩 Structured Hardware Knowledge
- **`hardware.json` registry** — Every component (sensor, display, motor) has a structured JSON definition with exact pin maps, voltage specs, and library requirements. The AI reads real data, not guesses.
- **`SKILL.md` per component** — Deep engineering wisdom: known bugs, wiring gotchas, voltage limits, library conflicts, and troubleshooting steps. The AI knows what can go wrong before you do.
- **Physical pin layout awareness** — Knows that Arduino Uno right header is RX0→SCL (18 pins) and left header is A5→5V (13 pins). Not an approximation — exact pin-by-pin.

### 🔌 Board & Connection Intelligence
- **Board type detection** — Identifies Arduino Uno, ESP32, Nano, Mega and adjusts pin mappings, voltage logic, and library recommendations automatically.
- **COM port conflict detection** — Warns if Pins 0/1 (TX/RX) are occupied before upload, preventing the classic "upload failed" error.
- **Auto-installs board cores** — Detects missing AVR/ESP32 board packages and installs them via Arduino CLI.
- **Voltage clarification** — Asks "Is this a 3.3V or 5V sensor?" before generating wiring instructions. Prevents fried components.

### 🛡️ Safety & Guardrails
- **Current limit warnings** — Flags when a component draws more than 40mA (Arduino pin limit) and suggests transistor/MOSFET switching.
- **Voltage mismatch protection** — Warns about 5V→3.3V connections and recommends voltage dividers or level shifters.
- **Power budget tracking** — Calculates total current draw and warns when exceeding USB power limits (~500mA).
- **Flyback diode reminders** — Automatically suggests protection diodes when motors, fans, or relays are used.

### 🔄 Staged Workflow
ArduinoX follows a structured build pipeline:

```
Brainstorm → Plan → Connect → Build → Verify → Debug
```

1. **Brainstorm** — Understand what the user wants to build.
2. **Plan** — Select components from the hardware registry, map pins, check compatibility.
3. **Connect** — Generate step-by-step wiring instructions with pin tables.
4. **Build** — Write C++ code using correct libraries and pin assignments.
5. **Verify** — Compile, upload, and monitor serial output.
6. **Debug** — Auto-debug loop: read errors → diagnose → fix → re-upload.

### 🔁 Auto-Debug Loop
- Reads compiler errors and serial output.
- Diagnoses common failure patterns (wrong pin, missing library, baud rate mismatch).
- Applies fixes and re-uploads automatically.
- Can fix connection issues (loose wires, wrong I2C address, contrast potentiometer misconfiguration).

### 🎨 Premium TUI Experience
- **Minecraft-style block logo** with themed rendering.
- **30+ color themes** (Vercel, Dracula, Catppuccin, Tokyo Night, and more).
- **Multi-model support** — GPT-4, Claude, Gemini, and open-source models.
- **`/paste` command** — Paste clipboard content directly into prompts.
- **Arduino-specific tips** — Contextual tips about hardware, wiring, and debugging.

---

## 🆚 ArduinoX vs. Traditional Arduino IDE

| Feature | Arduino IDE | ArduinoX |
| :--- | :--- | :--- |
| Code Generation | Manual | **AI-powered, hardware-aware** |
| Wiring Help | None | **Pin-accurate wiring tables** |
| Debugging | Manual Serial Monitor | **Auto-debug loop** |
| Component Knowledge | None | **Structured `hardware.json` + `SKILL.md`** |
| Safety Checks | None | **Voltage, current, pin conflict warnings** |
| Board Core Setup | Manual install | **Auto-detection & install** |
| Interface | Basic GUI | **Premium high-performance TUI** |
| Multi-Model AI | ❌ | **GPT-4, Claude, Gemini, open-source** |

---

## 🛠️ Supported Hardware

| Component | Type | Status |
| :--- | :--- | :--- |
| Arduino Uno R3 | Board | ✅ Full pin layout |
| ESP32 WROOM 32 | Board | ✅ Full pin layout |
| IR Sensor (TCRT5000) | Sensor | ✅ Active LOW, 3-pin |
| DHT11 | Sensor | ✅ Temp & humidity |
| HC-SR04 Ultrasonic | Sensor | ✅ Distance |
| SG90 Servo | Actuator | ✅ PWM control |
| 5V DC Fan | Actuator | ✅ Transistor switching |
| 16x2 LCD (HD44780) | Display | ✅ 16-pin raw + I2C |
| I2C LCD Adapter (PCF8574) | Adapter | ✅ 4-pin |
| Mini Breadboard | Prototyping | ✅ 30-row layout |
| 1kΩ Resistor | Passive | ✅ |

> More components are added continuously. Each includes `hardware.json` + `SKILL.md` with engineering wisdom.

---

## 👨‍💻 Build & Contribute

ArduinoX is a high-performance monorepo built with **Bun** and **TypeScript**.

### Developer Setup
```bash
git clone https://github.com/KunalGhadge/arduinox.git
cd arduinox
bun install
bun run dev
```

### Build Standalone Binary
```bash
cd packages/opencode
bun run build --single
# Output: dist/opencode-windows-x64/bin/opencode.exe
```

### Contribution Rules
- Always use Pull Requests — no direct pushes to main.
- Run `bun run typecheck` before committing.
- Maintain "ArduinoX" branding in all user-facing strings.
- Do not modify TUI layout without discussion.

---

## 📣 Community

- [Discord](https://arduinox.ai/discord)
- [X (Twitter)](https://x.com/arduinox)
- [Documentation](https://arduinox.ai/docs)

---

<p align="center">Built with ❤️ for the Hardware Community.</p>
