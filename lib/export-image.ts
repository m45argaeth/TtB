"use client";

import { getChars, getStats, byteToBinary, utf8Bytes } from "@/lib/binary";

interface ExportOptions {
  text: string;
  dark?: boolean;
}

/**
 * Render the current text → binary conversion to a PNG and trigger a download.
 * Pure canvas drawing — no external dependencies, fully client-side.
 */
export function exportPng({ text, dark = false }: ExportOptions): void {
  const chars = getChars(text).slice(0, 16);
  const stats = getStats(text);

  const scale = 2;
  const width = 1200;
  const paddingX = 80;
  const lineHeight = 46;
  const headerHeight = 220;
  const footerHeight = 120;
  const rows = Math.max(chars.length, 1);
  const height = headerHeight + rows * lineHeight + footerHeight;

  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = height * scale;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(scale, scale);

  const bg = dark ? "#0a0a0b" : "#ffffff";
  const fg = dark ? "#fafafa" : "#0a0a0b";
  const muted = dark ? "#a1a1aa" : "#71717a";
  const accent = dark ? "#3f3f46" : "#e4e4e7";

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Header
  ctx.fillStyle = muted;
  ctx.font = "600 20px Arial, sans-serif";
  ctx.fillText("TEXT \u2192 BINARY", paddingX, 70);

  ctx.fillStyle = fg;
  ctx.font = "700 40px Arial, sans-serif";
  const preview = text.length > 40 ? text.slice(0, 40) + "\u2026" : text || "—";
  ctx.fillText(preview, paddingX, 120);

  ctx.fillStyle = muted;
  ctx.font = "400 22px Arial, sans-serif";
  ctx.fillText(
    `${stats.characters} characters · ${stats.bytes} bytes · ${stats.bits} bits`,
    paddingX,
    160,
  );

  ctx.strokeStyle = accent;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(paddingX, headerHeight - 30);
  ctx.lineTo(width - paddingX, headerHeight - 30);
  ctx.stroke();

  // Rows: char = code → binary
  chars.forEach((c, i) => {
    const y = headerHeight + i * lineHeight;
    ctx.fillStyle = fg;
    ctx.font = "600 24px Arial, sans-serif";
    ctx.fillText(c.display, paddingX, y);

    ctx.fillStyle = muted;
    ctx.font = "500 24px Arial, sans-serif";
    ctx.fillText(`${c.codePoint}`, paddingX + 120, y);

    ctx.fillStyle = fg;
    ctx.font = "500 24px monospace";
    ctx.fillText(c.binary, paddingX + 260, y);
  });

  if (utf8Bytes(text).length > chars.length) {
    ctx.fillStyle = muted;
    ctx.font = "400 20px Arial, sans-serif";
    ctx.fillText(
      "\u2026 truncated for preview",
      paddingX,
      headerHeight + rows * lineHeight + 10,
    );
  }

  // Footer
  ctx.fillStyle = muted;
  ctx.font = "400 20px Arial, sans-serif";
  ctx.fillText(
    "Text To Binary — To a computer, every letter is a number.",
    paddingX,
    height - 50,
  );

  // Ensure byteToBinary is referenced for tree-shaking safety in all targets.
  void byteToBinary;

  const link = document.createElement("a");
  link.download = "text-to-binary.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
