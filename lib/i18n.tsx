"use client";

import * as React from "react";
import type { TextStats } from "@/lib/binary";

export type Locale = "en" | "id";
export const LOCALES: Locale[] = ["id", "en"];
export const DEFAULT_LOCALE: Locale = "id";
const STORAGE_KEY = "ttb-locale";

const en = {
  header: { home: "Home", playground: "Playground", tryIt: "Try It" },
  hero: {
    badge: "To a computer, every letter is a number.",
    title: "Text To Binary",
    subtitle:
      "See how computers transform human language into numbers and binary data.",
    tryIt: "Try It",
    randomExample: "Random Example",
    humanText: "Human text",
    numbers: "Unicode values",
    binary: "Binary",
  },
  landing: {
    featuresHeading: "Everything is just ones and zeros",
    featuresSubtitle:
      "Text To Binary makes the invisible visible — watch your words become numbers, then the pure binary a computer actually stores.",
    features: [
      {
        title: "Live conversion",
        body: "Type anything and instantly see it travel through four levels: text, Unicode values, binary, and bytes.",
      },
      {
        title: "Character inspector",
        body: "Click any character to reveal its code point, hexadecimal, binary, and exact bit count.",
      },
      {
        title: "The computer's view",
        body: "Compare what humans read with the raw binary stream a machine has to process.",
      },
      {
        title: "Storage, visualized",
        body: "See how characters fill memory cells and how many bytes and bits your text really costs.",
      },
    ],
    ctaHeading: "Ready to see your words as binary?",
    ctaBody:
      "Paste a sentence, a name, or an emoji. The playground does the rest — instantly and entirely in your browser.",
    ctaButton: "Open the playground",
  },
  playground: {
    title: "Playground",
    subtitle:
      "Type or paste any text to watch it become numbers and binary — instantly, and entirely in your browser.",
    placeholder: "Type anything...",
    convert: "Convert",
    randomExample: "Random Example",
    clear: "Clear",
    shortcut: "⌘ / Ctrl + Enter to convert",
    examplesLabel: "Examples",
    tabs: {
      conversion: "Conversion",
      inspector: "Inspector",
      perspective: "Computer's view",
      storage: "Storage",
      education: "Explanation",
    },
  },
  conversion: {
    level: "Level",
    level1: "Human Text",
    level2: "ASCII / Unicode Values",
    level3: "Binary",
    level4: "Bytes",
    characters: "characters",
    bytes: "bytes",
    bits: "bits",
    empty: "Your conversion will appear here.",
    clickHint: "Tip: open the Inspector tab and click a character.",
  },
  inspector: {
    title: "Character Inspector",
    empty: "Click any character above to inspect it.",
    character: "Character",
    unicode: "Unicode",
    hex: "Hex",
    binary: "Binary",
    bits: "Bits",
    bytesUtf8: "Bytes (UTF-8)",
    pickPrompt: "Pick a character",
  },
  stats: {
    heading: "Stats",
    characters: "Characters",
    words: "Words",
    bytes: "Bytes",
    bits: "Bits",
    storage: "Storage",
  },
  perspective: {
    heading: "How Computers See This Text",
    humansSee: "Humans see",
    computersSee: "Computers see",
    explanation:
      "Computers cannot directly understand letters. Everything must ultimately become binary data — long sequences of 0s and 1s.",
    sentencePlaceholder: "A sentence with meaning.",
    binaryPlaceholder: "01001000 01101001",
  },
  storage: {
    heading: "Visual Storage View",
    subtitle: "From readable text all the way down to physical memory cells.",
    text: "Text",
    numbers: "Numbers",
    binary: "Binary",
    memoryCells: "Memory Cells",
    bitsLabel: "bits in memory",
  },
  education: {
    heading: "What just happened?",
  },
  funFacts: {
    heading: "Did You Know?",
    facts: [
      "The letter A is stored as 65 in ASCII.",
      "Lowercase and uppercase letters have different codes — 'a' is 97, 'A' is 65.",
      "Emoji require multiple bytes — a single 😀 can take four.",
      "Computers only store two states: 0 and 1.",
      "A space is a real character too — it is stored as the number 32.",
      "Eight bits make one byte, and one byte can represent 256 different values.",
    ],
  },
  share: {
    heading: "Share",
    copyBinary: "Copy Binary",
    copyAscii: "Copy ASCII",
    exportPng: "Export PNG",
    shareLink: "Share Link",
    copied: "Copied",
    linkCopied: "Link copied",
  },
  footer: {
    tagline:
      "Every email, article, photo caption, and message on your device ultimately becomes binary data before a computer can store or process it.",
    exploreHeading: "Explore",
    playground: "Playground",
    perspective: "Computer's view",
    funFacts: "Fun facts",
    aboutHeading: "About",
    aboutEducational: "Educational demo",
    aboutClientSide: "100% client-side",
    aboutNoData: "No database",
    tagline2: "Humans read letters. Computers read binary.",
    disclaimer: "Encoding shown is UTF-8 — the standard for modern text.",
    madeWith: "Made with",
    by: "by",
  },
};

export type Dict = typeof en;

const id: Dict = {
  header: { home: "Beranda", playground: "Playground", tryIt: "Coba" },
  hero: {
    badge: "Bagi komputer, setiap huruf adalah angka.",
    title: "Text To Binary",
    subtitle:
      "Lihat bagaimana komputer mengubah bahasa manusia menjadi angka dan data biner.",
    tryIt: "Coba",
    randomExample: "Contoh Acak",
    humanText: "Teks manusia",
    numbers: "Nilai Unicode",
    binary: "Biner",
  },
  landing: {
    featuresHeading: "Semuanya hanyalah nol dan satu",
    featuresSubtitle:
      "Text To Binary membuat yang tak terlihat menjadi terlihat — saksikan kata-katamu menjadi angka, lalu biner murni yang benar-benar disimpan komputer.",
    features: [
      {
        title: "Konversi langsung",
        body: "Ketik apa pun dan langsung lihat perjalanannya melalui empat level: teks, nilai Unicode, biner, dan byte.",
      },
      {
        title: "Inspektur karakter",
        body: "Klik karakter mana pun untuk melihat code point, heksadesimal, biner, dan jumlah bit-nya.",
      },
      {
        title: "Sudut pandang komputer",
        body: "Bandingkan apa yang dibaca manusia dengan aliran biner mentah yang harus diproses mesin.",
      },
      {
        title: "Penyimpanan, divisualisasikan",
        body: "Lihat bagaimana karakter mengisi sel memori dan berapa byte serta bit yang dibutuhkan teksmu.",
      },
    ],
    ctaHeading: "Siap melihat kata-katamu sebagai biner?",
    ctaBody:
      "Tempelkan kalimat, nama, atau emoji. Playground akan mengurus sisanya — instan dan sepenuhnya di browser-mu.",
    ctaButton: "Buka playground",
  },
  playground: {
    title: "Playground",
    subtitle:
      "Ketik atau tempel teks apa pun untuk melihatnya menjadi angka dan biner — instan, dan sepenuhnya di browser-mu.",
    placeholder: "Ketik apa saja...",
    convert: "Konversi",
    randomExample: "Contoh Acak",
    clear: "Hapus",
    shortcut: "⌘ / Ctrl + Enter untuk konversi",
    examplesLabel: "Contoh",
    tabs: {
      conversion: "Konversi",
      inspector: "Inspektur",
      perspective: "Sudut komputer",
      storage: "Penyimpanan",
      education: "Penjelasan",
    },
  },
  conversion: {
    level: "Level",
    level1: "Teks Manusia",
    level2: "Nilai ASCII / Unicode",
    level3: "Biner",
    level4: "Byte",
    characters: "karakter",
    bytes: "byte",
    bits: "bit",
    empty: "Hasil konversimu akan muncul di sini.",
    clickHint: "Tips: buka tab Inspektur dan klik sebuah karakter.",
  },
  inspector: {
    title: "Inspektur Karakter",
    empty: "Klik karakter mana pun di atas untuk memeriksanya.",
    character: "Karakter",
    unicode: "Unicode",
    hex: "Heks",
    binary: "Biner",
    bits: "Bit",
    bytesUtf8: "Byte (UTF-8)",
    pickPrompt: "Pilih karakter",
  },
  stats: {
    heading: "Statistik",
    characters: "Karakter",
    words: "Kata",
    bytes: "Byte",
    bits: "Bit",
    storage: "Penyimpanan",
  },
  perspective: {
    heading: "Bagaimana Komputer Melihat Teks Ini",
    humansSee: "Manusia melihat",
    computersSee: "Komputer melihat",
    explanation:
      "Komputer tidak bisa langsung memahami huruf. Semuanya pada akhirnya harus menjadi data biner — deretan panjang angka 0 dan 1.",
    sentencePlaceholder: "Sebuah kalimat yang bermakna.",
    binaryPlaceholder: "01001000 01101001",
  },
  storage: {
    heading: "Tampilan Penyimpanan Visual",
    subtitle: "Dari teks yang terbaca hingga sel memori fisik.",
    text: "Teks",
    numbers: "Angka",
    binary: "Biner",
    memoryCells: "Sel Memori",
    bitsLabel: "bit di memori",
  },
  education: {
    heading: "Apa yang baru saja terjadi?",
  },
  funFacts: {
    heading: "Tahukah Kamu?",
    facts: [
      "Huruf A disimpan sebagai 65 dalam ASCII.",
      "Huruf kecil dan besar punya kode berbeda — 'a' adalah 97, 'A' adalah 65.",
      "Emoji membutuhkan beberapa byte — satu 😀 bisa memakan empat.",
      "Komputer hanya menyimpan dua keadaan: 0 dan 1.",
      "Spasi juga karakter sungguhan — ia disimpan sebagai angka 32.",
      "Delapan bit membentuk satu byte, dan satu byte bisa mewakili 256 nilai berbeda.",
    ],
  },
  share: {
    heading: "Bagikan",
    copyBinary: "Salin Biner",
    copyAscii: "Salin ASCII",
    exportPng: "Ekspor PNG",
    shareLink: "Bagikan Tautan",
    copied: "Tersalin",
    linkCopied: "Tautan tersalin",
  },
  footer: {
    tagline:
      "Setiap email, artikel, keterangan foto, dan pesan di perangkatmu pada akhirnya menjadi data biner sebelum komputer dapat menyimpan atau memprosesnya.",
    exploreHeading: "Jelajahi",
    playground: "Playground",
    perspective: "Sudut komputer",
    funFacts: "Fakta seru",
    aboutHeading: "Tentang",
    aboutEducational: "Demo edukasi",
    aboutClientSide: "100% di sisi browser",
    aboutNoData: "Tanpa database",
    tagline2: "Manusia membaca huruf. Komputer membaca biner.",
    disclaimer:
      "Pengodean yang ditampilkan adalah UTF-8 — standar untuk teks modern.",
    madeWith: "Dibuat dengan",
    by: "oleh",
  },
};

const DICTS: Record<Locale, Dict> = { en, id };

/** Locale-aware educational explanation for the current text. */
export function buildExplanation(
  text: string,
  stats: TextStats,
  locale: Locale,
): string[] {
  if (stats.characters === 0) {
    return locale === "id"
      ? [
          "Ketik atau tempel sebagian teks untuk melihat bagaimana komputer menyimpannya sebagai biner.",
          "Setiap karakter diwakili oleh kode angka, lalu disimpan sebagai 0 dan 1.",
        ]
      : [
          "Type or paste some text to see how a computer stores it as binary.",
          "Each character is represented by a numerical code, then stored as 0s and 1s.",
        ];
  }
  const preview = text.length > 24 ? text.slice(0, 24) + "\u2026" : text;
  if (locale === "id") {
    return [
      `Teks “${preview}” berisi ${stats.characters.toLocaleString("id-ID")} karakter.`,
      "Setiap karakter diwakili secara internal sebagai sebuah kode angka (code point).",
      `Angka-angka itu kemudian disimpan sebagai nilai biner — total ${stats.bits.toLocaleString("id-ID")} bit dalam ${stats.bytes.toLocaleString("id-ID")} byte.`,
      "Komputer hanya menyimpan 0 dan 1, jadi semua teks pada akhirnya menjadi biner.",
    ];
  }
  return [
    `The text “${preview}” contains ${stats.characters.toLocaleString()} character${stats.characters === 1 ? "" : "s"}.`,
    "Each character is represented internally as a numerical code (its code point).",
    `Those numbers are then stored as binary values — ${stats.bits.toLocaleString()} bits across ${stats.bytes.toLocaleString()} byte${stats.bytes === 1 ? "" : "s"} in total.`,
    "A computer only ever stores 0s and 1s, so all text ultimately becomes binary.",
  ];
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
}

const I18nContext = React.createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "id" || stored === "en") setLocaleState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  React.useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = React.useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t: DICTS[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}
