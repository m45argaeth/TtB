"use client";

import { useI18n } from "@/lib/i18n";

export function PlaygroundIntro() {
  const { t } = useI18n();
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t.playground.title}
      </h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        {t.playground.subtitle}
      </p>
    </div>
  );
}
