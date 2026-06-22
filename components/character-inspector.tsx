"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import type { CharInfo } from "@/lib/binary";

export function CharacterInspector({ chars }: { chars: CharInfo[] }) {
  const { t } = useI18n();
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    setSelected(0);
  }, [chars]);

  if (chars.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-10 text-center text-sm text-muted-foreground">
        {t.inspector.empty}
      </div>
    );
  }

  const active = chars[Math.min(selected, chars.length - 1)];

  const rows = [
    { label: t.inspector.character, value: active.display },
    { label: t.inspector.unicode, value: String(active.codePoint) },
    { label: t.inspector.hex, value: active.hex },
    { label: t.inspector.binary, value: active.binary },
    { label: t.inspector.bits, value: String(active.bits) },
    { label: t.inspector.bytesUtf8, value: active.bytes.join(" ") },
  ];

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {t.inspector.pickPrompt}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {chars.map((c, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(i)}
              className={cn(
                "flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg border px-2 font-mono text-sm transition-all",
                i === selected
                  ? "border-foreground bg-primary text-primary-foreground"
                  : "bg-card hover:border-foreground/30",
              )}
            >
              {c.isSpace ? "␣" : c.char}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex items-center justify-center rounded-2xl border bg-card/60 p-8">
          <span className="text-6xl font-bold">
            {active.isSpace ? "␣" : active.char}
          </span>
        </div>
        <dl className="divide-y rounded-2xl border bg-card/60">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 px-4 py-2.5"
            >
              <dt className="text-sm text-muted-foreground">{row.label}</dt>
              <dd className="break-all text-right font-mono text-sm font-medium">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
