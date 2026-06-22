"use client";

import Link from "next/link";
import {
  ArrowRight,
  Zap,
  MousePointerClick,
  Cpu,
  HardDrive,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const ICONS = [Zap, MousePointerClick, Cpu, HardDrive];

export function FeatureGrid() {
  const { t } = useI18n();

  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {t.landing.featuresHeading}
        </h2>
        <p className="mx-auto mt-4 text-balance text-muted-foreground">
          {t.landing.featuresSubtitle}
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.landing.features.map((feature, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div
              key={feature.title}
              className="rounded-3xl border bg-card/60 p-6 backdrop-blur transition-colors hover:border-foreground/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function CtaSection() {
  const { t } = useI18n();

  return (
    <section className="container pb-24">
      <div className="relative overflow-hidden rounded-[2rem] border bg-primary px-8 py-16 text-center text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 select-none break-all font-mono text-[11px] leading-5 opacity-[0.07]">
          {"01010100 01100101 01111000 01110100 ".repeat(80)}
        </div>
        <div className="relative mx-auto max-w-xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {t.landing.ctaHeading}
          </h2>
          <p className="mx-auto mt-4 text-balance opacity-80">
            {t.landing.ctaBody}
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/playground">
              {t.landing.ctaButton}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
