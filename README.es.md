<p align="center">
  <a href="https://arduinox.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ArduinoX logo">
    </picture>
  </a>
</p>
<p align="center">El primer asistente de codificación de IA agentic del mundo diseñado específicamente para **Arduino y el desarrollo de hardware**.</p>
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

## ⚡ La Revolución: La IA se encuentra con el hardware físico

En el pasado, el desarrollo integrado requería la búsqueda manual de hojas de datos, un mapeo de pines complejo y una depuración tediosa. **ArduinoX cambia el juego.** Al cerrar la brecha entre el razonamiento de IA de alto nivel y la ejecución física de bajo nivel, hemos transformado la forma en que se construye el hardware.

- **Inteligencia consciente del hardware**: No es solo un LLM genérico. ArduinoX comprende diagramas de circuitos, registros de sensores y abstracciones de periféricos.
- **Ejecución física de "circuito cerrado"**: ArduinoX no solo escribe código; puede compilar, cargar y monitorear la salida serial para corregir errores en tiempo real.
- **Resolución de problemas agentic**: Dile *"Constrúyeme una estación meteorológica con un DHT11 y una pantalla LCD"* y planificará el circuito, escribirá el C++ y verificará la construcción.

---

## 🆚 ArduinoX frente al IDE de Arduino tradicional

| Característica | IDE tradicional | ArduinoX |
| :--- | :--- | :--- |
| **Generación de código** | Manual / Fragmentos estáticos | **Programación en pareja de IA dinámica** |
| **Configuración** | Instalador manual y controladores | **Configuración cero (CLI portátil integrada)** |
| **Depuración** | Monitoreo serial manual | **Auto-depuración potenciada por IA** |
| **Interfaz** | GUI básica | **TUI premium de alto rendimiento** |
| **Inteligencia** | Ninguna | **Agentic (Construir, Planificar, Investigar)** |

---

## 📥 Instalación (para usuarios)

ArduinoX está diseñado para ser **portátil y libre de dependencias**.

### **Windows (Una sola línea)**
Abra PowerShell y ejecute:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install.ps1 | iex"
```

### **macOS / Linux (Una sola línea)**
Abra la Terminal y ejecute:
```bash
curl -fsSL https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install | bash
```

---

## 🛠️ Uso básico

### Comandos comunes

| Comando | Descripción |
| :--- | :--- |
| `arduinox run` | Iniciar la TUI de IA interactiva (Comando principal) |
| `arduinox auth login` | Inicie sesión de forma segura en su cuenta de ArduinoX Cloud |
| `arduinox models list` | Ver y cambiar entre GPT-4, Claude y Gemini |
| `arduinox --version` | Verifique su versión actual |

### Operaciones específicas de Arduino
Dentro de la TUI o CLI, puede utilizar disparadores de hardware especializados:

- **Detección de placa**: `arduinox board list`
- **Gestión de librerías**: `arduinox lib install <nombre>`
- **Carga con un clic**: `arduinox upload --board <fqbn>`

---

## 👨‍💻 Construir y contribuir (para desarrolladores)

¡Damos la bienvenida a los colaboradores! ArduinoX es un monorepo de alto rendimiento construido con **Bun** y **TypeScript**.

### 🛠️ Configuración del desarrollador
Asegúrese de tener instalado [Bun](https://bun.sh).

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/KunalGhadge/arduinox.git
   cd arduinox
   ```

2. **Instalar dependencias**
   ```bash
   bun install
   ```

3. **Ejecutar en modo de desarrollo**
   ```bash
   bun run dev
   ```

### 🛡️ Pautas de contribución (estabilidad primero)
Para mantener la aplicación estable para miles de usuarios:
- **No realizar envíos directos a la rama principal**: Utilice siempre Pull Requests.
- **Seguridad de tipos**: Ejecute `bun run typecheck` antes de realizar un commit.
- **Integridad de marca**: Mantenga la marca "ArduinoX" en todas las cadenas de cara al usuario.
- **Preservación de la interfaz de usuario**: No modifique el diseño de CSS o TUI sin una discusión previa en Discord.

---

## 🤝 Colaboradores

*¡Estamos buscando a nuestros primeros colaboradores de la comunidad! Envíe su primer PR para ver su nombre aquí.*

---

## 📣 Comunidad y soporte

- [Discord](https://arduinox.ai/discord)
- [X (Twitter)](https://x.com/arduinox)
- [Documentación](https://arduinox.ai/docs)

---
<p align="center">Construido con ❤️ para la comunidad de hardware.</p>
