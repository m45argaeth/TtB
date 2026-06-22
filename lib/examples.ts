/** Curated example strings used by the "Random Example" buttons. */
export const EXAMPLES: string[] = [
  "Hello World",
  "ChatGPT",
  "Sini Ga Jelasin",
  "Aku suka nasi goreng",
  "Foto mantan sebenarnya hanyalah angka",
  "AI tidak membaca seperti manusia",
  "Video adalah ribuan gambar",
  "Halo dunia",
  "To a computer, every letter is a number.",
  "I \u2764\uFE0F binary",
];

/** Pick a random example that is different from `current` when possible. */
export function randomExample(current?: string): string {
  if (EXAMPLES.length === 0) return "";
  const pool = current ? EXAMPLES.filter((e) => e !== current) : EXAMPLES;
  const list = pool.length > 0 ? pool : EXAMPLES;
  return list[Math.floor(Math.random() * list.length)];
}
