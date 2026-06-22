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
    default: "Text To Binary — To a computer, every letter is a number.",
    template: "%s · Text To Binary",
  },
  description:
    "An educational playground that helps you understand how computers store and process text using binary. Watch your words become numbers and 0s and 1s in real time.",
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
      "See how computers transform human language into numbers and binary data.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text To Binary",
    description:
      "See how computers transform human language into numbers and binary data.",
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
