"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Shuffle, ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { getChars } from "@/lib/binary";
import { randomExample } from "@/lib/examples";

const WORD = "Hello";

export function Hero() {
  const { t } = useI18n();
  const router = useRouter();
  const chars = React.useMemo(() => getChars(WORD), []);

  const goRandom = () => {
    const ex = randomExample();
    router.push(`/playground?text=${encodeURIComponent(ex)}`);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur animate-fade-in">
            {t.hero.badge}
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-7xl animate-fade-up">
            {t.hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl animate-fade-up">
            {t.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-fade-up">
            <Button asChild size="lg">
              <Link href="/playground">
                {t.hero.tryIt}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={goRandom}>
              <Shuffle className="h-4 w-4" />
              {t.hero.randomExample}
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-md">
          <div className="rounded-3xl border bg-card/70 p-8 shadow-sm backdrop-blur">
            <Step label={t.hero.humanText}>
              <span className="text-4xl font-bold tracking-tight">{WORD}</span>
            </Step>
            <Arrow />
            <Step label={t.hero.numbers}>
              <div className="flex flex-wrap justify-center gap-2 font-mono text-lg">
                {chars.map((c, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-secondary px-2 py-0.5 animate-bit-pop"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    {c.codePoint}
                  </span>
                ))}
              </div>
            </Step>
            <Arrow />
            <Step label={t.hero.binary}>
              <div className="space-y-1 font-mono text-sm text-muted-foreground">
                {chars.map((c, i) => (
                  <div
                    key={i}
                    className="animate-bit-pop"
                    style={{ animationDelay: `${350 + i * 70}ms` }}
                  >
                    {c.binary}
                  </div>
                ))}
              </div>
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center">
      <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-3 text-muted-foreground/60">
      <ArrowDown className="h-5 w-5" />
    </div>
  );
}
