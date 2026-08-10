import { useEffect, useRef, useState } from "react";
import type { FrictionEngine, FrictionEvent, FrictionLoaderModule } from "./friction";

export type FrictionStatus = "loading" | "ready" | "error";

export interface FrictionProgress {
  overallLoaded: number;
  overallTotal: number;
  label: string;
}

export interface FrictionState {
  status: FrictionStatus;
  progress: FrictionProgress;
  error?: string;
  engine?: FrictionEngine;
}

const NO_PROGRESS: FrictionProgress = { overallLoaded: 0, overallTotal: 0, label: "" };

// Module-level singleton: loadFriction() must run exactly once per page,
// ever — a second call re-runs the wasm module's init_engine and errors.
// Every component that mounts this hook (even across remounts driven by
// React Strict Mode) shares this one promise and the state derived from it.
let enginePromise: Promise<FrictionEngine> | null = null;
let latestProgress: FrictionProgress = NO_PROGRESS;
let resolvedEngine: FrictionEngine | null = null;
let resolvedError: string | null = null;
const listeners = new Set<(event: FrictionEvent) => void>();

function startLoad(): Promise<FrictionEngine> {
  if (enginePromise) return enginePromise;
  enginePromise = (async () => {
    // "/loader.js" only exists at runtime — staged into public/loader.js by
    // scripts/fetch-wasm.sh at build time, never part of the TS program.
    // TypeScript's ambient-module syntax categorically rejects rooted or
    // relative specifiers (TS2436), so this one import cannot be given a
    // static type; it is cast to the frozen wrapper's documented shape
    // (./friction.d.ts) immediately below instead.
    //
    // The specifier is held in a variable rather than inlined as a string
    // literal: Vite's dev-time import-analysis statically detects literal
    // specifiers that resolve inside publicDir and refuses to even
    // transform this file ("Cannot import non-asset file ... which is
    // inside /public"), regardless of the /* @vite-ignore */ comment below
    // (that comment only stops Vite from trying to bundle/preload the
    // target, not this earlier literal-path guard). A variable is opaque
    // to that static check, so the import is left alone and resolved by
    // the browser at runtime instead — see vite.config.ts's
    // serveFrictionWrapperStatically middleware for the matching dev-time
    // serving fix (Vite's *module loader*, not just import-analysis, also
    // refuses to serve publicDir files through its transform pipeline).
    // Also: with the specifier held in a variable, TypeScript no longer
    // attempts (and fails) to resolve it as a module at typecheck time —
    // a non-literal dynamic import() types as Promise<any>, so the
    // annotation below needs no error-suppression directive.
    const loaderUrl = "/loader.js";
    const mod: FrictionLoaderModule = await import(/* @vite-ignore */ loaderUrl);
    const engine = await mod.loadFriction({
      onEvent: (event: FrictionEvent) => {
        if (event.type === "asset:progress") {
          latestProgress = {
            overallLoaded: event.overallLoaded,
            overallTotal: event.overallTotal,
            label: event.label,
          };
        }
        for (const listener of listeners) listener(event);
      },
    });
    resolvedEngine = engine;
    return engine;
  })().catch((err: unknown) => {
    resolvedError = err instanceof Error ? err.message : String(err);
    throw err;
  });
  return enginePromise;
}

/**
 * Loads (once, for the whole page) and tracks the friction wasm engine.
 * Every consumer sees the same singleton promise; a component that mounts
 * after the engine is already ready or already failed picks up that
 * terminal state immediately instead of replaying "loading".
 */
export function useFriction(): FrictionState {
  const [state, setState] = useState<FrictionState>(() => {
    if (resolvedEngine) return { status: "ready", progress: latestProgress, engine: resolvedEngine };
    if (resolvedError) return { status: "error", progress: latestProgress, error: resolvedError };
    return { status: "loading", progress: latestProgress };
  });
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const onEvent = (event: FrictionEvent) => {
      if (!mountedRef.current) return;
      if (event.type === "asset:progress") {
        setState((prev) =>
          prev.status === "ready"
            ? prev
            : {
                ...prev,
                progress: {
                  overallLoaded: event.overallLoaded,
                  overallTotal: event.overallTotal,
                  label: event.label,
                },
              },
        );
      } else if (event.type === "error") {
        setState((prev) => ({ ...prev, status: "error", error: event.message }));
      }
    };
    listeners.add(onEvent);

    startLoad()
      .then((engine) => {
        if (!mountedRef.current) return;
        setState({ status: "ready", progress: latestProgress, engine });
      })
      .catch((err: unknown) => {
        if (!mountedRef.current) return;
        const message = err instanceof Error ? err.message : String(err);
        setState((prev) => ({ status: "error", progress: prev.progress, error: prev.error ?? message }));
      });

    return () => {
      mountedRef.current = false;
      listeners.delete(onEvent);
    };
  }, []);

  return state;
}
