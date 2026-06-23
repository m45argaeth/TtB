# 💻 TtB — Text To Binary

> **To a computer, every letter is a number.**
> **Bagi komputer, setiap huruf adalah angka.**

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel)

🔗 **Live → [ttb-playground.vercel.app](https://ttb-playground.vercel.app)**

</div>

---

## 🌐 Overview

**TtB** is an educational web playground that shows you exactly how text becomes binary — step by step. Type any character and watch it transform through ASCII/Unicode into its binary representation, with visual explanations at every stage.

No server. No uploads. 100% client-side.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔤 **Character Inspector** | Click any character to see code point, hex, binary, bits, and UTF-8 bytes |
| 🔢 **Step-by-Step Conversion** | 4-level cascade: Text → Unicode Values → Binary → Bytes/Stats |
| 🧠 **Educational Mode** | Auto-generated step-by-step explanations of how encoding works |
| 🤖 **AI Perspective** | Side-by-side "humans see" vs "computers see" (raw binary) comparison |
| 📊 **Stats Panel** | Live character, word, byte, bit count & storage in MB |
| 🎬 **Visual Storage** | Animated memory cell visualization: text → numbers → binary → cells |
| 💡 **Fun Facts** | Random tidbits about binary, encoding, and computing history |
| 🌗 **Dark / Light Theme** | Toggle between themes with system preference support |
| 🌏 **Bahasa Indonesia / English** | Full bilingual UI with seamless language switching |
| 📤 **Share & Export** | Export conversion as PNG (pure canvas), share via URL with `?text=` param |
| 🌧️ **Binary Rain** | Matrix-style canvas background animation (respects reduced-motion) |
| 📱 **Responsive** | Works on desktop and mobile |
| 🔒 **Privacy-First** | Everything runs in your browser — no data leaves your device |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com/) |
| Components | [shadcn/ui](https://ui.shadcn.com/) (new-york style) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Icons | [lucide-react](https://lucide.dev/) |
| Fonts | Inter (sans) + JetBrains Mono (mono) via next/font |
| i18n | Custom React Context (Bahasa Indonesia / English) |
| Utilities | clsx, tailwind-merge, class-variance-authority |

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css                    # Global styles & CSS variables
│   ├── layout.tsx                     # Root layout (fonts, providers, header/footer)
│   ├── page.tsx                       # Landing page (Hero, Features, Fun Facts, CTA)
│   └── playground/
│       └── page.tsx                   # Playground page
├── components/
│   ├── playground.tsx                 # Main playground orchestrator (5 tabs)
│   ├── conversion-view.tsx            # 4-level visual cascade
│   ├── character-inspector.tsx        # Clickable char → code point detail
│   ├── ai-perspective.tsx             # Human vs Computer view
│   ├── visual-storage.tsx             # Animated memory cell visualization
│   ├── educational-mode.tsx           # Step-by-step explanations
│   ├── share-features.tsx             # Copy Binary, Copy ASCII, Export PNG, Share
│   ├── stats-panel.tsx                # Live stats grid
│   ├── hero.tsx                       # Landing hero with animated demo
│   ├── landing-sections.tsx           # Feature grid + CTA
│   ├── fun-facts.tsx                  # Computing trivia
│   ├── binary-rain.tsx                # Matrix-style canvas background
│   ├── site-header.tsx / site-footer.tsx
│   ├── language-toggle.tsx / theme-toggle.tsx
│   └── ui/
│       └── button.tsx
├── lib/
│   ├── binary.ts                      # Core engine: UTF-8 encoding, getChars(), getStats()
│   ├── i18n.tsx                       # Bilingual i18n system (id/en)
│   ├── site-config.ts                 # Site data, projects, universes
│   ├── examples.ts                    # 10 curated example strings
│   ├── export-image.ts                # Pure canvas PNG export
│   ├── share.ts                       # Share link builder & clipboard
│   └── utils.ts                       # cn() utility
└── ...
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm, yarn, pnpm, or bun

### Development

```bash
# Clone the repo
git clone https://github.com/m45argaeth/TtB.git
cd TtB

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/m45argaeth/TtB)

> 🚀 Deployed automatically to [Vercel](https://vercel.com/) on every push to `main`.

---

## 🔒 Privacy

**Everything runs in your browser.** No data is sent to any server. Your text stays on your device — all conversions happen locally in JavaScript. Even the PNG export is pure canvas rendering, no external services.

---

## 🧩 Part of the "Sini Gajelasin" Series

TtB is one of many educational playgrounds under the **[Sini Gajelasin](https://sinigajelasin.vercel.app)** hub — *Curious About Everything*.

### 🪐 EBN Universe — How Computers Process Data

| # | Playground | Topic | Status | Link |
|---|---|---|---|---|
| 1 | 🔢 **EBN** | Media → Numbers | 🟢 Live | [ebn-playground.vercel.app](https://ebn-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/EBN) |
| 2 | 🔤 **TtB** | Text → Binary | 🟢 Live | [ttb-playground.vercel.app](https://ttb-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/TtB) |
| 3 | 🔡 **Token Explorer** | Text → Tokens | 🟢 Live | [te-playground.vercel.app](https://te-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/TE) |
| 4 | 🎬 **Video Frame Explorer** | Video → Frames | 🟢 Live | [vfe-playground.vercel.app](https://vfe-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/VFE) |
| 5 | 🧠 **Embedding Explorer** | Words → Vectors | 🟢 Live | [ee-playground.vercel.app](https://ee-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/EE) |
| 6 | 💬 **Prompt Explorer** | Prompt → Tokens → Output | 🟡 WIP | — |
| 7 | 🤥 **Hallucination Explorer** | LLM Hallucination | 🟡 WIP | — |
| 8 | 📦 **Compression Explorer** | Data → Compression | 🟡 WIP | — |
| 9 | 🌐 **Internet Packet Explorer** | Data → Packets | 🟡 WIP | — |
| 10 | 🤖 **Human vs AI Explorer** | Human vs AI Processing | 🟡 WIP | — |

### 🧬 Human Mind Universe — How We Think

| # | Playground | Topic | Status | Link |
|---|---|---|---|---|
| 11 | 🔍 **Bias Detector** | Cognitive Biases | 🟢 Live | [bd-playground-snowy.vercel.app](https://bd-playground-snowy.vercel.app) · [GitHub](https://github.com/m45argaeth/BD) |
| 12 | 🧠 **Memory Explorer** | Memory Systems | 🟡 WIP | — |
| 13 | 🌀 **False Memory Explorer** | False Memories | 🟡 WIP | — |
| 14 | 👁️ **Attention Explorer** | Attention & Focus | 🟡 WIP | — |
| 15 | 💊 **Dopamine Explorer** | Dopamine Loops | 🟡 WIP | — |

---

## 👤 Author

**Arga** — [GitHub](https://github.com/m45argaeth) · [Twitter/X](https://x.com/sinigajelasin) · [Blog](https://www.kompasiana.com/argacahyanugraha6628)

Made with ❤️ as part of **[Sini Gajelasin](https://sinigajelasin.vercel.app)** — *Curious About Everything* 🔍
