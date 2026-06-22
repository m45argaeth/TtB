"use client";

import Link from "next/link";
import { Binary, Heart } from "lucide-react";

import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Binary className="h-5 w-5" />
              </span>
              <span className="text-base font-semibold tracking-tight">
                Text To Binary
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">{t.footer.exploreHeading}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/playground" className="hover:text-foreground">
                  {t.footer.playground}
                </Link>
              </li>
              <li>
                <Link
                  href="/playground?tab=perspective"
                  className="hover:text-foreground"
                >
                  {t.footer.perspective}
                </Link>
              </li>
              <li>
                <Link href="/#fun-facts" className="hover:text-foreground">
                  {t.footer.funFacts}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">{t.footer.aboutHeading}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t.footer.aboutEducational}</li>
              <li>{t.footer.aboutClientSide}</li>
              <li>{t.footer.aboutNoData}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} Text To Binary · {t.footer.tagline2}
          </p>
          <p className="flex items-center gap-1.5">
            {t.footer.madeWith}{" "}
            <a
              href="https://x.com/sinigajelasin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground hover:underline"
            >
              Ga <Heart className="h-3.5 w-3.5 fill-current text-red-500" /> |
              Curious About Everything 🔍
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
