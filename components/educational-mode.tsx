"use client";

import { GraduationCap } from "lucide-react";

import { buildExplanation, useI18n } from "@/lib/i18n";
import type { TextStats } from "@/lib/binary";

export function EducationalMode({
  text,
  stats,
}: {
  text: string;
  stats: TextStats;
}) {
  const { t, locale } = useI18n();
  const lines = buildExplanation(text, stats, locale);

  return (
    <div className="space-y-4">
      <h3 className="flex items-center gap-2 text-lg font-semibold">
        <GraduationCap className="h-5 w-5" />
        {t.education.heading}
      </h3>
      <ol className="space-y-3">
        {lines.map((line, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-2xl border bg-card/60 p-4 text-sm leading-relaxed"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold">
              {i + 1}
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
