"use client";

import * as React from "react";
import { Copy, Image as ImageIcon, Link2, Check } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { toBinaryString, toDecimalString } from "@/lib/binary";
import { buildShareLink, copyToClipboard } from "@/lib/share";
import { exportPng } from "@/lib/export-image";

export function ShareFeatures({ text }: { text: string }) {
  const { t } = useI18n();
  const { resolvedTheme } = useTheme();
  const [done, setDone] = React.useState<string | null>(null);
  const disabled = text.length === 0;

  const flash = (key: string) => {
    setDone(key);
    window.setTimeout(() => setDone((d) => (d === key ? null : d)), 1600);
  };

  const handleCopyBinary = async () => {
    if (await copyToClipboard(toBinaryString(text))) flash("binary");
  };
  const handleCopyAscii = async () => {
    if (await copyToClipboard(toDecimalString(text))) flash("ascii");
  };
  const handleShareLink = async () => {
    if (await copyToClipboard(buildShareLink(text))) flash("link");
  };
  const handleExport = () => {
    exportPng({ text, dark: resolvedTheme === "dark" });
    flash("png");
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyBinary}
        disabled={disabled}
      >
        {done === "binary" ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        {done === "binary" ? t.share.copied : t.share.copyBinary}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyAscii}
        disabled={disabled}
      >
        {done === "ascii" ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        {done === "ascii" ? t.share.copied : t.share.copyAscii}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleExport}
        disabled={disabled}
      >
        <ImageIcon className="h-4 w-4" />
        {t.share.exportPng}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleShareLink}
        disabled={disabled}
      >
        {done === "link" ? (
          <Check className="h-4 w-4" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
        {done === "link" ? t.share.linkCopied : t.share.shareLink}
      </Button>
    </div>
  );
}
