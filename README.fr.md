<p align="center">
  <a href="https://arduinox.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="ArduinoX logo">
    </picture>
  </a>
</p>
<p align="center">Le premier assistant de codage par IA agentique au monde, conçu spécifiquement pour **Arduino et le développement matériel**.</p>
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

## ⚡ La Révolution : L'IA au service du matériel physique

Par le passé, le développement embarqué nécessitait la consultation manuelle de fiches techniques, une cartographie complexe des broches et un débogage fastidieux. **ArduinoX change la donne.** En comblant le fossé entre le raisonnement par IA de haut niveau et l'exécution physique de bas niveau, nous avons transformé la façon dont le matériel est conçu.

- **Intelligence orientée matériel** : Il ne s'agit pas d'un simple LLM générique. ArduinoX comprend les schémas de circuits, les registres de capteurs et les abstractions de périphériques.
- **Exécution physique en "boucle fermée"** : ArduinoX ne se contente pas d'écrire du code ; il peut compiler, téléverser et surveiller la sortie série pour corriger les bogues en temps réel.
- **Résolution de problèmes agentique** : Dites-lui *"Construis-moi une station météo avec un DHT11 et un écran LCD"*, et il planifiera le circuit, écrira le C++, et vérifiera la construction.

---

## 🆚 ArduinoX vs. l'IDE Arduino traditionnel

| Fonctionnalité | IDE traditionnel | ArduinoX |
| :--- | :--- | :--- |
| **Génération de code** | Manuelle / Extraits statiques | **Programmation en binôme dynamique par IA** |
| **Installation** | Installateur manuel et pilotes | **Installation zéro (CLI portable intégrée)** |
| **Débogage** | Surveillance série manuelle | **Auto-débogage assisté par IA** |
| **Interface** | GUI basique | **TUI premium haute performance** |
| **Intelligence** | Aucune | **Agentique (Construction, Planification, Recherche)** |

---

## 📥 Installation (Pour les utilisateurs)

ArduinoX est conçu pour être **portable et sans dépendances**.

### **Windows (Ligne de commande unique)**
Ouvrez PowerShell et exécutez :
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install.ps1 | iex"
```

### **macOS / Linux (Ligne de commande unique)**
Ouvrez un terminal et exécutez :
```bash
curl -fsSL https://raw.githubusercontent.com/KunalGhadge/arduinox/main/install | bash
```

---

## 🛠️ Utilisation de base

### Commandes fréquentes

| Commande | Description |
| :--- | :--- |
| `arduinox run` | Démarrer la session interactive TUI IA (Commande principale) |
| `arduinox auth login` | Connectez-vous de manière sécurisée à votre compte ArduinoX Cloud |
| `arduinox models list` | Afficher et basculer entre GPT-4, Claude et Gemini |
| `arduinox --version` | Vérifier la version actuelle |

### Opérations spécifiques à Arduino
Dans le TUI ou le CLI, vous pouvez utiliser des déclencheurs matériels spécialisés :

- **Détection des cartes** : `arduinox board list`
- **Gestion des bibliothèques** : `arduinox lib install <nom>`
- **Téléversement en un clic** : `arduinox upload --board <fqbn>`

---

## 👨‍💻 Construire et Contribuer (Pour les développeurs)

Nous accueillons avec plaisir les contributeurs ! ArduinoX est un monorepo haute performance construit avec **Bun** et **TypeScript**.

### 🛠️ Configuration du développeur
Assurez-vous d'avoir installé [Bun](https://bun.sh).

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/KunalGhadge/arduinox.git
   cd arduinox
   ```

2. **Installer les dépendances**
   ```bash
   bun install
   ```

3. **Exécuter en mode développement**
   ```bash
   bun run dev
   ```

### 🛡️ Lignes directrices pour la contribution (Stabilité avant tout)
Pour que l'application reste stable pour des milliers d'utilisateurs :
- **Pas de push direct sur la branche principale** : Utilisez toujours des Pull Requests.
- **Sécurité des types** : Exécutez `bun run typecheck` avant tout commit.
- **Intégrité de la marque** : Conservez la marque « ArduinoX » dans toutes les chaînes de caractères destinées aux utilisateurs.
- **Préservation de l'interface utilisateur** : Ne modifiez pas le design CSS ou TUI sans discussion préalable sur Discord.

---

## 🤝 Contributeurs

*Nous recherchons nos premiers contributeurs communautaires ! Soumettez votre première PR pour voir votre nom ici.*

---

## 📣 Communauté & Support

- [Discord](https://arduinox.ai/discord)
- [X (Twitter)](https://x.com/arduinox)
- [Documentation](https://arduinox.ai/docs)

---
<p align="center">Construit avec ❤️ pour la communauté matérielle.</p>
