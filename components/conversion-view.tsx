"use client";

import { ArrowDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import type { CharInfo, TextStats } from "@/lib/binary";

interface Props {
  chars: CharInfo[];
  stats: TextStats;
}

export function ConversionView({ chars, stats }: Props) {
  const { t } = useI18n();

  if (chars.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-10 text-center text-sm text-muted-foreground">
        {t.conversion.empty}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <Level index={1} title={t.conversion.level1}>
        <p className="break-words text-2xl font-semibold leading-snug">
          {chars.map((c, i) => (
            <span
              key={i}
              className={cn(c.isSpace && "rounded bg-muted px-0.5")}
            >
              {c.char}
            </span>
          ))}
        </p>
      </Level>

      <Connector />

      <Level index={2} title={t.conversion.level2}>
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm">
          {chars.map((c, i) => (
            <span key={i} className="text-muted-foreground">
              <span className="font-semibold text-foreground">{c.display}</span>{" "}
              = {c.codePoint}
            </span>
          ))}
        </div>
      </Level>

      <Connector />

      <Level index={3} title={t.conversion.level3}>
        <div className="flex flex-wrap gap-2 font-mono text-sm">
          {chars.map((c, i) => (
            <span
              key={i}
              className="rounded-md bg-secondary px-2 py-1 animate-bit-pop"
              style={{ animationDelay: `${Math.min(i, 20) * 35}ms` }}
            >
              {c.binary}
            </span>
          ))}
        </div>
      </Level>

      <Connector />

      <Level index={4} title={t.conversion.level4}>
        <div className="flex flex-wrap gap-6 text-sm">
          <Metric value={stats.characters} label={t.conversion.characters} />
          <Metric value={stats.bytes} label={t.conversion.bytes} />
          <Metric value={stats.bits} label={t.conversion.bits} />
        </div>
      </Level>
    </div>
  );
}

function Level({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  const { t } = useI18n();
  return (
    <div className="rounded-2xl border bg-card/60 p-5 backdrop-blur">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
          {index}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {t.conversion.level} {index} · {title}
        </span>
      </div>
      {children}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center text-muted-foreground/50">
      <ArrowDown className="h-4 w-4" />
    </div>
  );
}

function Metric({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tabular-nums">
        {value.toLocaleString()}
      </div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
