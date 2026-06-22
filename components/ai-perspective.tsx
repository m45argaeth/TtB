"use client";

import { Eye, Cpu } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { toBinaryString, type CharInfo } from "@/lib/binary";

export function AiPerspective({
  text,
  chars,
}: {
  text: string;
  chars: CharInfo[];
}) {
  const { t } = useI18n();
  const binary = text ? toBinaryString(text) : t.perspective.binaryPlaceholder;
  const humans = text || t.perspective.sentencePlaceholder;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{t.perspective.heading}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-card/60 p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium">
            <Eye className="h-4 w-4" />
            {t.perspective.humansSee}
          </div>
          <p className="break-words text-2xl font-semibold leading-snug">
            {humans}
          </p>
        </div>
        <div className="rounded-2xl border bg-primary text-primary-foreground p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium opacity-80">
            <Cpu className="h-4 w-4" />
            {t.perspective.computersSee}
          </div>
          <p className="max-h-44 overflow-auto break-all font-mono text-sm leading-relaxed">
            {binary}
          </p>
        </div>
      </div>
      <p className="rounded-2xl border border-dashed bg-muted/30 p-4 text-sm leading-relaxed text-muted-foreground">
        {t.perspective.explanation}
      </p>
      <p className="text-xs text-muted-foreground">
        {chars.length} × 8 → {chars.reduce((n, c) => n + c.bits, 0)} bits
      </p>
    </div>
  );
}
