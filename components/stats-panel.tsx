"use client";

import {
  Type,
  AlignLeft,
  Box,
  Binary as BinaryIcon,
  HardDrive,
} from "lucide-react";

import { useI18n } from "@/lib/i18n";
import { formatStorage, type TextStats } from "@/lib/binary";

export function StatsPanel({ stats }: { stats: TextStats }) {
  const { t } = useI18n();

  const items = [
    {
      icon: Type,
      label: t.stats.characters,
      value: stats.characters.toLocaleString(),
    },
    {
      icon: AlignLeft,
      label: t.stats.words,
      value: stats.words.toLocaleString(),
    },
    { icon: Box, label: t.stats.bytes, value: stats.bytes.toLocaleString() },
    {
      icon: BinaryIcon,
      label: t.stats.bits,
      value: stats.bits.toLocaleString(),
    },
    {
      icon: HardDrive,
      label: t.stats.storage,
      value: formatStorage(stats.bytes),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border bg-card/60 p-4 backdrop-blur transition-colors hover:border-foreground/20"
        >
          <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <item.icon className="h-3.5 w-3.5" />
            {item.label}
          </div>
          <div className="mt-1.5 text-2xl font-semibold tabular-nums">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
