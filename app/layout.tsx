import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BinaryRain } from "@/components/binary-rain";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Text To Binary — Bagi komputer, setiap huruf adalah angka.",
    template: "%s · Text To Binary",
  },
  description:
    "Playground edukatif yang membantu kamu memahami bagaimana komputer menyimpan dan memproses teks menggunakan biner. Saksikan kata-katamu berubah menjadi angka dan deretan 0 dan 1 secara real-time.",
  keywords: [
    "binary",
    "ASCII",
    "Unicode",
    "UTF-8",
    "text to binary",
    "encoding",
    "education",
    "computer science",
  ],
  authors: [{ name: "Text To Binary" }],
  openGraph: {
    title: "Text To Binary",
    description:
      "Lihat bagaimana komputer mengubah bahasa manusia menjadi angka dan data biner.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text To Binary",
    description:
      "Lihat bagaimana komputer mengubah bahasa manusia menjadi angka dan data biner.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans",
          inter.variable,
          jetbrainsMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <I18nProvider>
            <BinaryRain />
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
