/**
 * Core text → binary engine for Text To Binary.
 *
 * Everything here is pure, deterministic, and runs entirely in the browser.
 * We use UTF-8 as the canonical encoding so that ASCII, accented characters,
 * and emoji are all handled correctly (emoji require multiple bytes).
 */

const encoder = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;

/** UTF-8 encode a string into an array of byte values (0-255). */
export function utf8Bytes(input: string): number[] {
  if (encoder) return Array.from(encoder.encode(input));
  // Fallback for non-DOM environments.
  const out: number[] = [];
  for (const ch of input) {
    let code = ch.codePointAt(0) ?? 0;
    if (code < 0x80) {
      out.push(code);
    } else if (code < 0x800) {
      out.push(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
    } else if (code < 0x10000) {
      out.push(
        0xe0 | (code >> 12),
        0x80 | ((code >> 6) & 0x3f),
        0x80 | (code & 0x3f),
      );
    } else {
      out.push(
        0xf0 | (code >> 18),
        0x80 | ((code >> 12) & 0x3f),
        0x80 | ((code >> 6) & 0x3f),
        0x80 | (code & 0x3f),
      );
    }
  }
  return out;
}

/** Convert one byte value to an 8-bit binary string, e.g. 72 → "01001000". */
export function byteToBinary(byte: number): string {
  return byte.toString(2).padStart(8, "0");
}

/** Convert one byte value to a 2-digit uppercase hex string, e.g. 72 → "48". */
export function byteToHex(byte: number): string {
  return byte.toString(16).toUpperCase().padStart(2, "0");
}

export interface CharInfo {
  /** Position in the grapheme list. */
  index: number;
  /** The raw character (may be a multi-code-unit emoji). */
  char: string;
  /** A human-friendly label for whitespace / control characters. */
  display: string;
  /** True when the character is whitespace. */
  isSpace: boolean;
  /** Unicode code point (decimal), e.g. 72 for "H". */
  codePoint: number;
  /** Uppercase hex of the code point, e.g. "48". */
  hex: string;
  /** UTF-8 byte values for this character. */
  bytes: number[];
  /** Each UTF-8 byte rendered as an 8-bit binary string. */
  binaryBytes: string[];
  /** All binary bytes joined without spaces. */
  binary: string;
  /** Total number of bits (bytes * 8). */
  bits: number;
}

const SPACE_LABELS: Record<string, string> = {
  " ": "space",
  "\t": "tab",
  "\n": "newline",
  "\r": "return",
};

/**
 * Split text into an array of CharInfo objects.
 * Uses `Array.from` so astral characters (emoji) count as a single character.
 */
export function getChars(text: string): CharInfo[] {
  const chars = Array.from(text);
  return chars.map((char, index) => {
    const codePoint = char.codePointAt(0) ?? 0;
    const bytes = utf8Bytes(char);
    const binaryBytes = bytes.map(byteToBinary);
    const isSpace = /\s/.test(char);
    return {
      index,
      char,
      display: SPACE_LABELS[char] ?? char,
      isSpace,
      codePoint,
      hex: codePoint.toString(16).toUpperCase().padStart(2, "0"),
      bytes,
      binaryBytes,
      binary: binaryBytes.join(""),
      bits: bytes.length * 8,
    };
  });
}

export interface TextStats {
  characters: number;
  words: number;
  bytes: number;
  bits: number;
  /** Storage in megabytes (bytes / 1024 / 1024). */
  storageMB: number;
}

export function getStats(text: string): TextStats {
  const characters = Array.from(text).length;
  const trimmed = text.trim();
  const words = trimmed.length === 0 ? 0 : trimmed.split(/\s+/).length;
  const bytes = utf8Bytes(text).length;
  return {
    characters,
    words,
    bytes,
    bits: bytes * 8,
    storageMB: bytes / 1024 / 1024,
  };
}

/** Space-separated decimal code points, e.g. "Hello" → "72 101 108 108 111". */
export function toDecimalString(text: string): string {
  return getChars(text)
    .map((c) => c.codePoint)
    .join(" ");
}

/** Space-separated binary bytes for the whole string. */
export function toBinaryString(text: string): string {
  return utf8Bytes(text).map(byteToBinary).join(" ");
}

/** Space-separated ASCII/Unicode "X = 72" lines as an array. */
export function toAsciiLines(text: string): string[] {
  return getChars(text).map((c) => `${c.display} = ${c.codePoint}`);
}

/** Format a storage size in MB with adaptive precision. */
export function formatStorage(bytes: number): string {
  const mb = bytes / 1024 / 1024;
  if (bytes === 0) return "0 MB";
  if (mb >= 0.01) return `${mb.toFixed(2)} MB`;
  if (mb >= 0.0001) return `${mb.toFixed(4)} MB`;
  return `${mb.toExponential(2)} MB`;
}
