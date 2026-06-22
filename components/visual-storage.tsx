"use client";

import { ArrowDown } from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { toDecimalString, type CharInfo, type TextStats } from "@/lib/binary";

export function VisualStorage({
  text,
  chars,
  stats,
}: {
  text: string;
  chars: CharInfo[];
  stats: TextStats;
}) {
  const { t } = useI18n();
  const cells = chars.slice(0, 64);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{t.storage.heading}</h3>
        <p className="text-sm text-muted-foreground">{t.storage.subtitle}</p>
      </div>

      <Row label={t.storage.text}>
        <span className="break-words text-xl font-semibold">{text || "—"}</span>
      </Row>
      <Step />
      <Row label={t.storage.numbers}>
        <span className="break-words font-mono text-sm text-muted-foreground">
          {text ? toDecimalString(text) : "—"}
        </span>
      </Row>
      <Step />
      <Row label={t.storage.binary}>
        <span className="break-all font-mono text-sm text-muted-foreground">
          {cells.map((c) => c.binary).join(" ") || "—"}
          {chars.length > cells.length ? " …" : ""}
        </span>
      </Row>
      <Step />
      <Row label={t.storage.memoryCells}>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            {cells.length === 0 ? (
              <span className="text-muted-foreground">—</span>
            ) : (
              cells.map((c, i) => (
                <span
                  key={i}
                  title={`${c.display} = ${c.codePoint}`}
                  className="flex h-8 w-8 items-center justify-center rounded-md border bg-secondary font-mono text-xs animate-bit-pop"
                  style={{ animationDelay: `${Math.min(i, 30) * 25}ms` }}
                >
                  ■
                </span>
              ))
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {stats.bytes.toLocaleString()}{" "}
            {t.conversion.bytes} ·{" "}
            {stats.bits.toLocaleString()} {t.storage.bitsLabel}
          </p>
        </div>
      </Row>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-card/60 p-4">
      <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      {children}
    </div>
  );
}

function Step() {
  return (
    <div className="flex justify-center text-muted-foreground/50">
      <ArrowDown className="h-4 w-4" />
    </div>
  );
}
