<p align="center">
  <a href="https://arduinox.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ArduinoX logo">
    </picture>
  </a>
</p>
<p align="center">**Arduino와 하드웨어 개발**을 위해 특별히 설계된 세계 최초의 에이전트 AI 코딩 어시스턴트.</p>
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

## ⚡ 혁명: AI와 물리적 하드웨어의 만남

과거에는 임베디드 개발을 위해 데이터 시트를 수동으로 검색하고, 복잡한 핀 매핑과 지루한 디버깅이 필요했습니다. **ArduinoX가 이를 바꿉니다.** 고수준 AI 추론과 저수준 물리적 실행 사이의 간극을 메움으로써 하드웨어 구축 방식을 혁신했습니다.

- **하드웨어 인식 지능**: 단순한 범용 LLM이 아닙니다. ArduinoX는 회로도, 센서 레지스트리 및 주변 장치 추상화를 이해합니다.
- **물리적 "폐쇄 루프" 실행**: ArduinoX는 단순히 코드를 작성하는 데 그치지 않습니다. 실시간으로 빌드 및 업로드를 수행하고 시리얼 출력을 모니터링하여 버그를 즉시 수정합니다.
- **에이전트 중심의 문제 해결**: *"DHT11과 LCD를 사용해 기상 관측소를 만들어 줘"* 라고 말하면 회로 계획, C++ 작성, 빌드 검증까지 수행합니다.

---

## 🆚 ArduinoX vs. 기존 Arduino IDE

| 기능 | 기존 IDE | ArduinoX |
| :--- | :--- | :--- |
| **코드 생성** | 수동 / 정적 스니펫 | **동적인 AI 페어 프로그래밍** |
| **설정** | 수동 설치 프로그램 및 드라이버 | **제로 설정 (포터블 CLI 내장)** |
| **디버깅** | 수동 시리얼 모니터링 | **AI 기반 자동 디버깅** |
| **인터페이스** | 기본 GUI | **프리미엄, 고성능 TUI** |
| **지능** | 없음 | **에이전틱 (빌드, 계획, 연구)** |

---

## 📥 설치 (사용자용)

ArduinoX는 **포터블하며 종속성이 없도록** 설계되었습니다.

### **Windows (한 줄 설치)**
PowerShell을 열고 다음 명령을 실행합니다:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install.ps1 | iex"
```

### **macOS / Linux (한 줄 설치)**
터미널을 열고 다음 명령을 실행합니다:
```bash
curl -fsSL https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install | bash
```

---

## 🛠️ 기본 사용법

### 주요 명령

| 명령 | 설명 |
| :--- | :--- |
| `arduinox run` | 대화형 AI TUI 시작 (주요 명령) |
| `arduinox auth login` | ArduinoX Cloud 계정에 안전하게 로그인 |
| `arduinox models list` | GPT-4, Claude, Gemini 표시 및 전환 |
| `arduinox --version` | 현재 버전 확인 |

### Arduino 관련 명령
TUI 또는 CLI 내에서 특수한 하드웨어 제어 명령을 사용할 수 있습니다:

- **보드 감지**: `arduinox board list`
- **라이브러리 관리**: `arduinox lib install <이름>`
- **원클릭 업로드**: `arduinox upload --board <fqbn>`

---

## 👨‍💻 빌드 및 기여 (개발자용)

기여를 환영합니다! ArduinoX는 **Bun**과 **TypeScript**로 구축된 고성능 모노레포입니다.

### 🛠️ 개발자용 설정
[Bun](https://bun.sh)이 설치되어 있는지 확인하세요.

1. **저장소 클론**
   ```bash
   git clone https://github.com/KunalGhadge/arduinox.git
   cd arduinox
   ```

2. **종속성 설치**
   ```bash
   bun install
   ```

3. **개발 모드로 실행**
   ```bash
   bun run dev
   ```

### 🛡️ 기여 가이드라인 (안정성 최우선)
수천 명의 사용자에게 안정적인 서비스를 제공하기 위해:
- **메인 브런체 직접 푸시 금지**: 항상 Pull Request를 사용하세요.
- **타입 안전성 확인**: 커밋 전 `bun run typecheck`를 실행하세요.
- **브랜드 정체성**: 사용자용 텍스트에서 'ArduinoX' 브랜드를 유지하세요.
- **UI 보존**: Discord 논의 없이 CSS나 TUI 레이아웃을 변경하지 마세요.

---

## 🤝 기여자

*첫 번째 커뮤니티 기여자를 찾고 있습니다! 첫 PR을 보내고 여기에 이름을 올려보세요.*

---

## 📣 커뮤니티 및 지원

- [Discord](https://arduinox.ai/discord)
- [X (Twitter)](https://x.com/arduinox)
- [공식 문서](https://arduinox.ai/docs)

---
<p align="center">하드웨어 커뮤니티를 위해 ❤️로 제작되었습니다.</p>
