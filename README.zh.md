<p align="center">
  <a href="https://arduinox.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ArduinoX logo">
    </picture>
  </a>
</p>
<p align="center">全球首款专为 **Arduino 和硬件开发** 设计的智能 AI 编码助手。</p>
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

## ⚡ 革命：AI 与物理硬件的碰撞

在过去，嵌入式开发需要手动查阅数据手册、复杂的引脚映射和繁琐的调试。**ArduinoX 改变了这一切。** 通过将高层 AI 推理与底层底层物理执行相结合，我们彻底改变了硬件的构建方式。

- **硬件感知智能**：不仅仅是一个通用的 LLM。ArduinoX 理解电路图、传感器寄存器和外设抽象。
- **物理“闭环”执行**：ArduinoX 不仅仅是编写代码；它可以实时编译、上传并监控串口输出以修复错误。
- **智能问题解决**：告诉它 *“用 DHT11 和 LCD 给我做一个气象站”*，它将规划电路、编写 C++ 并验证构建。

---

## 🆚 ArduinoX vs. 传统 Arduino IDE

| 功能 | 传统 IDE | ArduinoX |
| :--- | :--- | :--- |
| **代码生成** | 手动 / 静态片段 | **动态 AI 配对编程** |
| **安装** | 手动安装程序与驱动 | **零设置（内置便携式 CLI）** |
| **调试** | 手动串口监控 | **AI 赋能自动调试** |
| **界面** | 基础 GUI | **高端、高性能 TUI** |
| **智能** | 无 | **智能代理（构建、规划、研究）** |

---

## 📥 安装指南（面向用户）

ArduinoX 旨在实现 **便携且无依赖**。

### **Windows (一键安装)**
打开 PowerShell 并运行：
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install.ps1 | iex"
```

### **macOS / Linux (一键安装)**
打开终端并运行：
```bash
curl -fsSL https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install | bash
```

---

## 🛠️ 基本用法

### 常用命令

| 命令 | 描述 |
| :--- | :--- |
| `arduinox run` | 启动交互式 AI TUI (主命令) |
| `arduinox auth login` | 安全登录您的 ArduinoX 云账户 |
| `arduinox models list` | 查看并切换 GPT-4、Claude 和 Gemini |
| `arduinox --version` | 检查当前版本 |

### Arduino 特定操作
在 TUI 或 CLI 中，您可以使用专门的硬件触发器：

- **板卡检测**: `arduinox board list`
- **库管理**: `arduinox lib install <name>`
- **一键上传**: `arduinox upload --board <fqbn>`

---

## 👨‍💻 构建与贡献（面向开发者）

我们欢迎贡献者！ArduinoX 是一个使用 **Bun** 和 **TypeScript** 构建的高性能单仓项目。

### 🛠️ 开发者设置
请确保已安装 [Bun](https://bun.sh)。

1. **克隆仓库**
   ```bash
   git clone https://github.com/KunalGhadge/arduinox.git
   cd arduinox
   ```

2. **安装依赖**
   ```bash
   bun install
   ```

3. **在开发模式下运行**
   ```bash
   bun run dev
   ```

### 🛡️ 贡献指南（稳定性第一）
为了保持应用程序对成千上万用户的稳定性：
- **禁止直接推送到主分支**：请始终使用 Pull Request。
- **类型安全**：在提交前运行 `bun run typecheck`。
- **品牌完整性**：在所有面向用户的字符串中保持 “ArduinoX” 品牌。
- **UI 保持**：未经 Discord 讨论，请勿修改 CSS 或 TUI 布局。

---

## 🤝 贡献者

*我们正在寻找首批社区贡献者！提交您的第一个 PR，并在此处看到您的名字。*

---

## 📣 社区与支持

- [Discord](https://arduinox.ai/discord)
- [X (Twitter)](https://x.com/arduinox)
- [官方文档](https://arduinox.ai/docs)

---
<p align="center">由 ❤️ 为硬件社区打造。</p>
