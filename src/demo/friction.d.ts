// Type definitions for the friction wasm wrapper (web/loader.js in the
// engine repo), staged into public/loader.js by scripts/fetch-wasm.sh and
// consumed at runtime via `import(/* @vite-ignore */ "/loader.js")`. These
// types exist so that value pulled out of that dynamic import can be cast
// to a real shape immediately (see useFriction.ts) instead of staying
// `any` for the rest of the module — the module itself is fetched at
// runtime, never bundled, so this file must stay in lockstep with the
// frozen wrapper API by hand, not by importing the real source.
//
// Note: TypeScript's ambient-module syntax (`declare module "X" { ... }`)
// categorically rejects any rooted or relative specifier (TS2436 "Ambient
// module declaration cannot specify relative module name"), and "/loader.js"
// is exactly that — so there is no way to make the dynamic import itself
// resolve to a typed module. useFriction.ts casts its result instead.

/** One line of `engine.fix()`'s line-level diff, in final-document order. */
export interface FrictionDiffOp {
  type: "equal" | "del" | "add";
  line: string;
}

/** One aggregated (pass, rule) tally entry from `engine.fix()`. */
export interface FrictionFiredRule {
  pass: number;
  rule: string;
  count: number;
}

/** Structured result of `engine.fix(text)`. */
export interface FrictionFixResult {
  input: string;
  output: string;
  changed: boolean;
  diff: FrictionDiffOp[];
  fired: FrictionFiredRule[];
}

/**
 * One detected span from `engine.check()`. `start`/`end` are BYTE offsets
 * into the checked text (slice via TextEncoder, not string indexing —
 * multi-byte characters shift the two apart).
 */
export interface FrictionCheckSpan {
  channel: string;
  frame_id: string;
  start: number;
  end: number;
  line: number;
  column: number;
  score: number | null;
  message?: string;
}

/**
 * The subset of `friction check --format json` this site reads; the real
 * report carries more (metrics, tell_counts, dms).
 */
export interface FrictionCheckReport {
  spans: FrictionCheckSpan[];
}

export interface FrictionEngine {
  fix(input: string): FrictionFixResult;
  /** `friction check --format json`, parsed. */
  check(input: string): FrictionCheckReport;
  /** `friction explain --format json`, parsed. Shape not pinned here. */
  explain(input: string): unknown;
  fixText(input: string): string;
  checkText(input: string): string;
  explainText(input: string): string;
  engineVersion(): string;
  base: string;
  version: string;
}

export type FrictionEvent =
  | { type: "asset:start"; key: string; label: string; url: string }
  | {
      type: "asset:progress";
      key: string;
      label: string;
      loaded: number;
      total: number;
      fromCache: boolean;
      overallLoaded: number;
      overallTotal: number;
    }
  | { type: "asset:done"; key: string; label: string; bytes: number; fromCache: boolean }
  | { type: "engine:init" }
  | { type: "ready"; version: string; engineVersion: string; base: string }
  | { type: "error"; message: string; key?: string };

export interface LoadFrictionOptions {
  baseUrl?: string;
  onEvent?: (event: FrictionEvent) => void;
}

export type LoadFriction = (options?: LoadFrictionOptions) => Promise<FrictionEngine>;

/** The shape of the whole `/loader.js` module namespace, for casting. */
export interface FrictionLoaderModule {
  loadFriction: LoadFriction;
}
