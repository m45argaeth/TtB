"use client";

/** Build a shareable URL that encodes the given text in the `?text=` query. */
export function buildShareLink(text: string): string {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.origin + "/playground");
  if (text) url.searchParams.set("text", text);
  return url.toString();
}

/** Read the `?text=` query param from the current URL, if present. */
export function readSharedText(): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  return params.get("text");
}

/** Copy a string to the clipboard, returning whether it succeeded. */
export async function copyToClipboard(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}
