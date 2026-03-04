<p align="center">
  <a href="https://arduinox.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ArduinoX logo">
    </picture>
  </a>
</p>
<p align="center">Der weltweit erste agentische KI-Codierassistent, der speziell für **Arduino und Hardware-Entwicklung** entwickelt wurde.</p>
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

## ⚡ Die Revolution: KI trifft auf physikalische Hardware

In der Vergangenheit erforderte die Embedded-Entwicklung das manuelle Suchen von Datenblättern, komplexes Pin-Mapping und mühsame Fehlersuche. **ArduinoX ändert alles.** Durch die Überbrückung von High-Level-KI-Logik und Low-Level-Hardware-Ausführung haben wir die Art und Weise, wie Hardware gebaut wird, transformiert.

- **Hardware-Bewusste Intelligenz**: Nicht nur eine generische KI. ArduinoX versteht Schaltpläne, Sensorregister und Peripherieabstraktionen.
- **Physikalische "Closed-Loop"-Ausführung**: ArduinoX schreibt nicht nur Code; es kann in Echtzeit kompilieren, hochladen und serielle Ausgaben überwachen, um Bugs sofort zu beheben.
- **Agentische Problemlösung**: Sag ihm *"Baue mir eine Wetterstation mit einem DHT11 und einem LCD"*, und es plant die Schaltung, schreibt das C++ und verifiziert den Build.

---

## 🆚 ArduinoX vs. traditionelle Arduino IDE

| Merkmal | Traditionelle IDE | ArduinoX |
| :--- | :--- | :--- |
| **Codegenerierung** | Manuell / Statische Snippets | **Dynamisches KI-Pair-Programming** |
| **Setup** | Manuelle Installation & Treiber | **Zero-Setup (Portable CLI integriert)** |
| **Fehlersuche** | Manuelle serielle Überwachung | **KI-gestützte Fehlersuche** |
| **Schnittstelle** | Einfache GUI | **Premium, Hochleistungs-TUI** |
| **Intelligenz** | Keine | **Agentisch (Bauen, Planen, Forschen)** |

---

## 📥 Installation (Für Benutzer)

ArduinoX ist so konzipiert, dass es **portabel und ohne Abhängigkeiten** funktioniert.

### **Windows (One-Liner)**
Öffnen Sie die PowerShell und führen Sie aus:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install.ps1 | iex"
```

### **macOS / Linux (One-Liner)**
Öffnen Sie das Terminal und führen Sie aus:
```bash
curl -fsSL https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install | bash
```

---

## 🛠️ Grundlegende Bedienung

### Häufige Befehle

| Befehl | Beschreibung |
| :--- | :--- |
| `arduinox run` | Startet die interaktive KI TUI (Hauptbefehl) |
| `arduinox auth login` | Melde dich sicher bei deinem ArduinoX Cloud Account an |
| `arduinox models list` | Anzeige und Wechsel zwischen GPT-4, Claude und Gemini |
| `arduinox --version` | Überprüfe deine aktuelle Version |

### Arduino-spezifische Operationen
Innerhalb der TUI oder CLI kannst du spezialisierte Hardware-Trigger verwenden:

- **Board-Erkennung** : `arduinox board list`
- **Bibliotheks-Verwaltung** : `arduinox lib install <name>`
- **Ein-Klick-Upload** : `arduinox upload --board <fqbn>`

---

## 👨‍💻 Bauen & Beitragen (Für Entwickler)

Wir begrüßen Mitwirkende! ArduinoX ist ein leistungsstarkes Monorepo, das mit **Bun** und **TypeScript** erstellt wurde.

### 🛠️ Entwickler-Setup
Stellen Sie sicher, dass Sie [Bun](https://bun.sh) installiert haben.

1. **Repository klonen**
   ```bash
   git clone https://github.com/KunalGhadge/arduinox.git
   cd arduinox
   ```

2. **Abhängigkeiten installieren**
   ```bash
   bun install
   ```

3. **Im Entwicklungsmodus ausführen**
   ```bash
   bun run dev
   ```

### 🛡️ Richtlinien für Beiträge (Stabilität zuerst)
Um die Anwendung für Tausende von Benutzern stabil zu halten:
- **Keine direkten Pushes auf den Hauptzweig**: Verwende immer Pull Requests.
- **Typsicherheit**: Führe vor dem Commit `bun run typecheck` aus.
- **Markenintegrität**: Behalte die Marke „ArduinoX“ in allen benutzerseitigen Zeichenfolgen bei.
- **UI-Erhaltung**: Ändere CSS oder TUI-Layout nicht ohne vorherige Diskussion in Discord.

---

## 🤝 Mitwirkende

*Wir suchen unsere ersten Community-Mitwirkenden! Reiche deinen ersten PR ein, um deinen Namen hier zu sehen.*

---

## 📣 Community & Support

- [Discord](https://arduinox.ai/discord)
- [X (Twitter)](https://x.com/arduinox)
- [Dokumentation](https://arduinox.ai/docs)

---
<p align="center">Gebaut mit ❤️ für die Hardware-Community.</p>
