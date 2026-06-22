import * as React from "react";
import type { Metadata } from "next";

import { Playground } from "@/components/playground";
import { PlaygroundIntro } from "@/components/playground-intro";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Ketik apa saja dan saksikan ia berubah menjadi angka dan biner secara real-time.",
};

export default function PlaygroundPage() {
  return (
    <div className="container py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <PlaygroundIntro />
        <React.Suspense fallback={null}>
          <Playground />
        </React.Suspense>
      </div>
    </div>
  );
}
