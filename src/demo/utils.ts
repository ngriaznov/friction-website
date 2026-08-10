import type { FrictionFiredRule } from "./friction";

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

export function formatMB(bytes: number): string {
  return (bytes / (1024 * 1024)).toFixed(1);
}

export function pluralize(count: number, singular: string, plural: string): string {
  return count === 1 ? singular : plural;
}

export interface Tally {
  passCount: number;
  patchCount: number;
  lines: ReadonlyArray<{ rule: string; count: number }>;
}

/** Reduces `engine.fix()`'s `fired` array into the console-block tally. */
export function tallyFromFired(fired: ReadonlyArray<FrictionFiredRule>): Tally {
  let passCount = 0;
  let patchCount = 0;
  const lines = fired.map((entry) => {
    passCount = Math.max(passCount, entry.pass);
    patchCount += entry.count;
    return { rule: entry.rule, count: entry.count };
  });
  return { passCount, patchCount, lines };
}
