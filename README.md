# Text To Binary

> To a computer, every letter is a number.

An educational playground that helps users understand how computers store and
process text using binary. Type anything and watch it travel through four
levels — human text → ASCII/Unicode values → binary → bytes — all in real time,
entirely in your browser.

## Tech stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** + **shadcn/ui** primitives
- **next-themes** for light/dark mode
- No database · 100% client-side · Vercel ready

## Features

- **Playground** with a large input, Convert / Random Example / Clear actions.
- **4-level conversion view**: Human Text → ASCII/Unicode → Binary → Bytes.
- **Character Inspector** — click any character to see its code point, hex,
  binary, and bit count.
- **Stats panel** — characters, words, bytes, bits, and storage size.
- **How Computers See This Text** perspective mode (humans vs computers).
- **Visual Storage View** — text → numbers → binary → memory cells.
- **Educational Mode** with auto-generated, locale-aware explanations.
- **Fun Facts** (“Did You Know?”).
- **Share features** — Copy Binary, Copy ASCII, Export PNG, Share Link.
- **Bilingual UI** (English / Indonesian) via a lightweight i18n provider.
- Subtle **binary rain** background, smooth animations, fully responsive.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

Push the repo to GitHub and import it on [Vercel](https://vercel.com/new).
No environment variables required.

---

Made with ❤️ by Ga | Curious About Everything 🔍
