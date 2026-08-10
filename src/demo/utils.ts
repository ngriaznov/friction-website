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

/**
 * Slices `text` by BYTE offsets (the coordinate system of check's span
 * rows) — string indexing would drift on any multi-byte character.
 */
export function byteExcerpt(text: string, start: number, end: number, maxChars = 80): string {
  const bytes = new TextEncoder().encode(text);
  const slice = bytes.subarray(Math.max(0, start), Math.min(bytes.length, end));
  const decoded = new TextDecoder("utf-8", { fatal: false }).decode(slice);
  return decoded.length > maxChars ? `${decoded.slice(0, maxChars)}…` : decoded;
}

export interface WordDiffOp {
  type: "equal" | "del" | "add";
  text: string;
}

/**
 * Word-level diff for the output panel's redline view: deleted words come
 * from `before` (rendered struck through), inserted/substituted words from
 * `after` (rendered highlighted). Tokens keep their trailing whitespace so
 * concatenating every op of one side reproduces that side's text; equality
 * compares the trimmed word so a spacing-only change never lights up as an
 * edit. Standard LCS, fine at paragraph scale (the demo's input), not
 * sized for documents.
 */
export function diffWords(before: string, after: string): WordDiffOp[] {
  const tokenize = (text: string): string[] => text.match(/\S+\s*|\s+/g) ?? [];
  const a = tokenize(before);
  const b = tokenize(after);
  const key = (token: string) => token.trim();
  const n = a.length;
  const m = b.length;

  const dp: Uint32Array[] = new Array(n + 1);
  for (let i = 0; i <= n; i++) dp[i] = new Uint32Array(m + 1);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = key(a[i]) === key(b[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  // Walk the table, merging runs of the same op type into single spans so
  // the renderer emits one <span> per contiguous edit, not one per word.
  const ops: WordDiffOp[] = [];
  const push = (type: WordDiffOp["type"], text: string) => {
    const last = ops[ops.length - 1];
    if (last && last.type === type) {
      last.text += text;
    } else {
      ops.push({ type, text });
    }
  };
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (key(a[i]) === key(b[j])) {
      // Emit the output side's token so the equal runs carry the output's
      // own spacing.
      push("equal", b[j]);
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      push("del", a[i]);
      i += 1;
    } else {
      push("add", b[j]);
      j += 1;
    }
  }
  while (i < n) {
    push("del", a[i]);
    i += 1;
  }
  while (j < m) {
    push("add", b[j]);
    j += 1;
  }
  return ops;
}
