<p align="center">
  <a href="https://arduinox.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ArduinoX logo">
    </picture>
  </a>
</p>
<p align="center">**Arduinoとハードウェア開発**のために特別に設計された、世界初のエージェントAIコーディングアシスタント。</p>
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

## ⚡ 革命: AIと物理ハードウェアの融合

これまで、組み込み開発にはデータシートの手動確認、複雑なピン配置、そして退屈なデバッグが必要でした。**ArduinoXはそれを変えます。** 高度なAI推論と低レベルの物理実行を橋渡しすることで、ハードウェアの構築方法を革新しました。

- **ハードウェア対応インテリジェンス**: 単なる汎用LLMではありません。ArduinoXは回路図、センサレジストリ、周辺機器の抽象化を理解します。
- **物理的な「クローズドループ」実行**: ArduinoXはコードを書くだけではありません。リアルタイムでコンパイルし、書き込み、シリアル出力を監視してバグを修正します。
- **エージェントによる問題解決**: *「DHT11とLCDを使って気象ステーションを作って」* と伝えれば、回路設計からC++の記述、ビルドの検証まで行います。

---

## 🆚 ArduinoX vs. 従来のArduino IDE

| 機能 | 従来のIDE | ArduinoX |
| :--- | :--- | :--- |
| **コード生成** | 手動 / 静的スニペット | **動的なAIペアプログラミング** |
| **セットアップ** | 手動インストーラとドライバ | **ゼロセットアップ (ポータブルCLI内蔵)** |
| **デバッグ** | 手動シリアルモニタ | **AIによる自動デバッグ** |
| **インターフェース** | 基本的なGUI | **プレミアムで高性能なTUI** |
| **インテリジェンス** | なし | **エージェント (ビルド、計画、調査)** |

---

## 📥 インストール（ユーザー向け）

ArduinoXは**ポータブルで依存関係がない**ように設計されています。

### **Windows (ワンライナー)**
PowerShellを開いて実行：
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install.ps1 | iex"
```

### **macOS / Linux (ワンライナー)**
ターミナルを開いて実行：
```bash
curl -fsSL https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install | bash
```

---

## 🛠️ 基本的な使い方

### よく使うコマンド

| コマンド | 説明 |
| :--- | :--- |
| `arduinox run` | 対話型AI TUIを起動 (メインコマンド) |
| `arduinox auth login` | ArduinoX Cloudアカウントに安全にログイン |
| `arduinox models list` | GPT-4、Claude、Geminiの表示と切り替え |
| `arduinox --version` | 現在のバージョンを確認 |

### Arduino固有の操作
TUIまたはCLI内で、専用のハードウェアトリガーを使用できます。

- **ボード検出**: `arduinox board list`
- **ライブラリ管理**: `arduinox lib install <name>`
- **ワンクリック書き込み**: `arduinox upload --board <fqbn>`

---

## 👨‍💻 ビルドと貢献（開発者向け）

貢献者を歓迎します！ArduinoXは**Bun**と**TypeScript**で構築された高性能なモノレポです。

### 🛠️ 開発者向けセットアップ
[Bun](https://bun.sh)がインストールされていることを確認してください。

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/KunalGhadge/arduinox.git
   cd arduinox
   ```

2. **依存関係のインストール**
   ```bash
   bun install
   ```

3. **開発モードで実行**
   ```bash
   bun run dev
   ```

### 🛡️ 貢献ガイドライン（安定性重視）
数千人のユーザーに対してアプリケーションの安定性を保つため：
- **メインブランチへの直接プッシュ禁止**: 常にPull Requestを使用してください。
- **型安全**: コミット前に `bun run typecheck` を実行してください。
- **ブランドの完全性**: ユーザー向けの文字列すべてで「ArduinoX」ブランドを維持してください。
- **UIの保持**: Discordでの事前の議論なしにCSSやTUIレイアウトを変更しないでください。

---

## 🤝 貢献者

*最初のコミュニティ貢献者を募集しています！最初のPRを送信して、ここに名前を載せましょう。*

---

## 📣 コミュニティとサポート

- [Discord](https://arduinox.ai/discord)
- [X (Twitter)](https://x.com/arduinox)
- [ドキュメント](https://arduinox.ai/docs)

---
<p align="center">ハードウェアコミュニティのために ❤️ を込めて構築されました。</p>
