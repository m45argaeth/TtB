"use client";

import { Lightbulb } from "lucide-react";

import { useI18n } from "@/lib/i18n";

export function FunFacts() {
  const { t } = useI18n();

  return (
    <section id="fun-facts" className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
          <Lightbulb className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.funFacts.heading}
        </h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
        {t.funFacts.facts.map((fact, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-2xl border bg-card/60 p-5 text-sm leading-relaxed backdrop-blur transition-colors hover:border-foreground/20"
          >
            <span className="mt-0.5 font-mono text-xs text-muted-foreground">
              {(i + 1).toString().padStart(2, "0")}
            </span>
            <span>{fact}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
