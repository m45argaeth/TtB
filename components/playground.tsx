"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Shuffle, Eraser, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { getChars, getStats } from "@/lib/binary";
import { EXAMPLES, randomExample } from "@/lib/examples";
import { StatsPanel } from "@/components/stats-panel";
import { ConversionView } from "@/components/conversion-view";
import { CharacterInspector } from "@/components/character-inspector";
import { AiPerspective } from "@/components/ai-perspective";
import { VisualStorage } from "@/components/visual-storage";
import { EducationalMode } from "@/components/educational-mode";
import { ShareFeatures } from "@/components/share-features";

type TabKey =
  | "conversion"
  | "inspector"
  | "perspective"
  | "storage"
  | "education";
const TAB_ORDER: TabKey[] = [
  "conversion",
  "inspector",
  "perspective",
  "storage",
  "education",
];

export function Playground() {
  const { t } = useI18n();
  const searchParams = useSearchParams();

  const [draft, setDraft] = React.useState("Hello");
  const [text, setText] = React.useState("Hello");
  const [tab, setTab] = React.useState<TabKey>("conversion");

  // Hydrate from ?text= and ?tab= on first mount.
  React.useEffect(() => {
    const shared = searchParams.get("text");
    if (shared !== null) {
      setDraft(shared);
      setText(shared);
    }
    const initialTab = searchParams.get("tab") as TabKey | null;
    if (initialTab && TAB_ORDER.includes(initialTab)) setTab(initialTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chars = React.useMemo(() => getChars(text), [text]);
  const stats = React.useMemo(() => getStats(text), [text]);

  const convert = () => setText(draft);
  const clear = () => {
    setDraft("");
    setText("");
  };
  const loadRandom = () => {
    const ex = randomExample(text);
    setDraft(ex);
    setText(ex);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      convert();
    }
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: "conversion", label: t.playground.tabs.conversion },
    { key: "inspector", label: t.playground.tabs.inspector },
    { key: "perspective", label: t.playground.tabs.perspective },
    { key: "storage", label: t.playground.tabs.storage },
    { key: "education", label: t.playground.tabs.education },
  ];

  return (
    <div className="space-y-8">
      {/* Input card */}
      <div className="rounded-3xl border bg-card/70 p-5 shadow-sm backdrop-blur sm:p-6">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={t.playground.placeholder}
          rows={4}
          className="w-full resize-y rounded-2xl border bg-background/60 p-4 text-lg leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/30"
        />

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button onClick={convert}>
            <Sparkles className="h-4 w-4" />
            {t.playground.convert}
          </Button>
          <Button variant="outline" onClick={loadRandom}>
            <Shuffle className="h-4 w-4" />
            {t.playground.randomExample}
          </Button>
          <Button variant="ghost" onClick={clear}>
            <Eraser className="h-4 w-4" />
            {t.playground.clear}
          </Button>
          <span className="ml-auto hidden text-xs text-muted-foreground sm:block">
            {t.playground.shortcut}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t.playground.examplesLabel}
          </span>
          {EXAMPLES.slice(0, 4).map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => {
                setDraft(ex);
                setText(ex);
              }}
              className="rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <StatsPanel stats={stats} />

      {/* Share */}
      <ShareFeatures text={text} />

      {/* Tabs */}
      <div>
        <div className="flex flex-wrap gap-1.5 rounded-full border bg-muted/40 p-1">
          {tabs.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setTab(item.key)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                tab === item.key
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-5 animate-fade-in" key={tab}>
          {tab === "conversion" && (
            <ConversionView chars={chars} stats={stats} />
          )}
          {tab === "inspector" && <CharacterInspector chars={chars} />}
          {tab === "perspective" && <AiPerspective text={text} chars={chars} />}
          {tab === "storage" && (
            <VisualStorage text={text} chars={chars} stats={stats} />
          )}
          {tab === "education" && <EducationalMode text={text} stats={stats} />}
        </div>
      </div>
    </div>
  );
}
