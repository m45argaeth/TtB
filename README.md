# 💻 TtB — Text To Binary

> **To a computer, every letter is a number.**
> **Bagi komputer, setiap huruf adalah angka.**

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel)

---

## 🌐 Overview

**TtB** is an educational web playground that shows you exactly how text becomes binary — step by step. Type any character and watch it transform through ASCII/Unicode into its binary representation, with visual explanations at every stage.

No server. No uploads. 100% client-side.

🔗 **Live:** [ttb-playground.vercel.app](https://ttb-playground.vercel.app)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔤 **Character Inspector** | Click any character to see its code point, ASCII value, and binary |
| 🔢 **Step-by-Step Conversion** | Watch each character convert from letter → decimal → binary |
| 🧠 **Educational Mode** | Guided explanations of how encoding works |
| 🤖 **AI Perspective** | See text the way a computer "sees" it |
| 📊 **Stats Panel** | Byte count, character count, encoding info at a glance |
| 🎬 **Visual Storage** | Animated visualization of how text is stored in memory |
| 💡 **Fun Facts** | Random tidbits about binary, encoding, and computing history |
| 🌗 **Dark / Light Theme** | Toggle between themes, with system preference support |
| 🌏 **Bahasa Indonesia / English** | Full bilingual UI with seamless language switching |
| 📤 **Share & Export** | Export your conversion as an image, share via URL |
| 🌧️ **Binary Rain** | Matrix-style background animation |
| 📱 **Responsive** | Works on desktop and mobile |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Components | [shadcn/ui](https://ui.shadcn.com/) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| i18n | Custom (Bahasa Indonesia / English) |

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── playground/
│       └── page.tsx
├── components/
│   ├── ai-perspective.tsx
│   ├── binary-rain.tsx
│   ├── character-inspector.tsx
│   ├── conversion-view.tsx
│   ├── educational-mode.tsx
│   ├── fun-facts.tsx
│   ├── hero.tsx
│   ├── landing-sections.tsx
│   ├── language-toggle.tsx
│   ├── playground-intro.tsx
│   ├── playground.tsx
│   ├── share-features.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   ├── stats-panel.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── visual-storage.tsx
│   └── ui/
│       └── button.tsx
├── lib/
│   ├── binary.ts
│   ├── examples.ts
│   ├── export-image.ts
│   ├── i18n.tsx
│   ├── share.ts
│   ├── site-config.ts
│   └── utils.ts
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

---

## 🔒 Privacy

**Everything runs in your browser.** No data is sent to any server. Your text stays on your device — all conversions happen locally in JavaScript.

---

## 🧩 Part of a Series

TtB is part of a collection of educational playgrounds exploring how computers represent data:

| Playground | Topic | Link |
|---|---|---|
| 🔤 **TtB** | Text → Binary | [ttb-playground.vercel.app](https://ttb-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/TtB) |
| 🔢 **EBN** | Media → Numbers | [ebn-playground.vercel.app](https://ebn-playground.vercel.app) · [GitHub](https://github.com/m45argaeth/EBN) |

---

## 👤 Author

Made with ❤️ by [Arga](https://github.com/m45argaeth) · Curious About Everything 🔍
