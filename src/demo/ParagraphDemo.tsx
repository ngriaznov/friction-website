import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { useFriction } from "./useFriction";
import type { FrictionCheckSpan, FrictionFixResult } from "./friction";
import { SAMPLE_INPUT, SAMPLE_OUTPUT, SAMPLE_PASS_COUNT, SAMPLE_PATCH_COUNT, SAMPLE_TALLY_LINES } from "./sample";
import { byteExcerpt, countWords, diffWords, formatMB, pluralize, tallyFromFired } from "./utils";

const DEBOUNCE_MS = 400;

const mono = "'IBM Plex Mono', monospace";

const panelLabelStyle: CSSProperties = {
  fontFamily: mono,
  fontSize: 10.5,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: 11,
};

// Sized so the whole demo — both panels and the tally — fits the hero
// panel without running past the first screen.
const codeStyle: CSSProperties = {
  display: "block",
  fontFamily: mono,
  fontSize: "clamp(11.5px, 1vw, 13px)",
  lineHeight: 1.62,
  margin: 0,
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
};

const panelStyle: CSSProperties = {
  borderRadius: 13,
  padding: "15px 17px 17px",
};

/**
 * Renders the "one paragraph, run through the engine" live demo: an
 * editable input paragraph, the engine's fixed output (or a line diff of
 * the two), and the fired-rule tally the CLI itself prints. Standalone —
 * mounted by the hero's panel with no props.
 */
export function ParagraphDemo() {
  const { status, progress, error, engine } = useFriction();

  const [text, setText] = useState(SAMPLE_INPUT);
  const [result, setResult] = useState<FrictionFixResult | null>(null);
  const [findings, setFindings] = useState<FrictionCheckSpan[]>([]);
  const [fixError, setFixError] = useState<string | null>(null);
  // The output panel defaults to the redline (deleted words struck in the
  // lighter ink, substitutions on yellow — the same visual language the
  // static sample used); the toggle switches to the clean fixed text.
  const [view, setView] = useState<"changes" | "clean">("changes");
  // The rule-by-rule tally is the CLI's own output and worth having, but
  // it is the one part of the demo nobody needs before they have edited
  // anything — so it folds away and the headline counts stay visible.
  const [tallyOpen, setTallyOpen] = useState(false);
  const firstRunRef = useRef(true);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  // The input box shows the whole paragraph rather than a fixed row count:
  // a short column re-wraps the same text onto more lines, so a static
  // `rows` clips it. Measure the content after every edit, and again when
  // the column width or the loaded font changes the wrapping.
  useLayoutEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    const grow = () => {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    };

    grow();

    // Width-only guard: the observer also fires on the height we just set,
    // which would feed itself.
    let lastWidth = el.clientWidth;
    const observer = new ResizeObserver(() => {
      if (el.clientWidth === lastWidth) return;
      lastWidth = el.clientWidth;
      grow();
    });
    observer.observe(el);

    document.fonts?.ready.then(grow).catch(() => {});

    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (status !== "ready" || !engine) return;

    const runFix = () => {
      try {
        const fixed = engine.fix(text);
        // Fix only edits what a gate licenses; what it detected but left
        // alone (unattested compounds, paraphrase spans) is invisible in
        // the output text. Run check over the OUTPUT so those findings —
        // the "suggest" half of the CLI — get their own rows below.
        const residual = engine.check(fixed.output).spans;
        setResult(fixed);
        setFindings(residual);
        setFixError(null);
      } catch (err) {
        // Keep the last good `result` on screen; only surface the failure
        // as a quiet status line (see below).
        setFixError(err instanceof Error ? err.message : String(err));
      }
    };

    if (firstRunRef.current) {
      firstRunRef.current = false;
      runFix();
      return;
    }

    const id = window.setTimeout(runFix, DEBOUNCE_MS);
    return () => window.clearTimeout(id);
  }, [status, engine, text]);

  const inputWords = countWords(text);
  const outputText = result ? result.output : SAMPLE_OUTPUT;
  const outputWords = countWords(outputText);
  const tally = result ? tallyFromFired(result.fired) : null;
  const passCount = tally ? tally.passCount : SAMPLE_PASS_COUNT;
  const patchCount = tally ? tally.patchCount : SAMPLE_PATCH_COUNT;
  const tallyLines = tally ? tally.lines : SAMPLE_TALLY_LINES;

  // The redline needs no engine: before the wasm is ready it diffs the
  // static sample pair, so the section shows the same view either way.
  const redline = useMemo(
    () => diffWords(result ? result.input : SAMPLE_INPUT, outputText),
    [result, outputText],
  );

  let statusLine: string | null = null;
  if (status === "loading") {
    statusLine =
      progress.overallTotal > 0
        ? `Loading the engine — ${formatMB(progress.overallLoaded)} MB of ${formatMB(progress.overallTotal)} MB`
        : "Loading the engine…";
  } else if (status === "error") {
    statusLine = `Engine failed to load${error ? `: ${error}` : ""} — the panels below show a recorded run.`;
  } else if (fixError) {
    statusLine = `Fix failed on the current input: ${fixError} — showing the last successful result.`;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {statusLine && <div style={{ fontSize: 12, fontFamily: mono, lineHeight: 1.5, color: "#A9A498" }}>{statusLine}</div>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 14,
        }}
      >
        <div style={{ ...panelStyle, background: "#1F1F1F", border: "1px solid rgba(250,248,243,0.09)" }}>
          <div style={{ ...panelLabelStyle, color: "#7A756B" }}>
            Input — machine draft, {inputWords} {pluralize(inputWords, "word", "words")}
          </div>
          <textarea
            ref={inputRef}
            value={text}
            onChange={(event) => setText(event.target.value)}
            spellCheck={false}
            rows={1}
            style={{
              ...codeStyle,
              width: "100%",
              resize: "none",
              overflow: "hidden",
              background: "transparent",
              border: "none",
              outline: "none",
              padding: 0,
              color: "#C9C4B8",
            }}
          />
        </div>

        <div style={{ ...panelStyle, background: "#FAF8F3" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div style={{ ...panelLabelStyle, color: "#8A8478", marginBottom: 0 }}>
              Output — {outputWords} {pluralize(outputWords, "word", "words")}, {patchCount} {pluralize(patchCount, "patch", "patches")} applied
            </div>
            <button
              type="button"
              onClick={() => setView((prev) => (prev === "changes" ? "clean" : "changes"))}
              title={view === "changes" ? "Show the clean fixed text" : "Show what changed"}
              style={{
                fontFamily: mono,
                fontSize: 10.5,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                background: view === "changes" ? "#FFD400" : "#1A1A1A",
                color: view === "changes" ? "#1A1A1A" : "#FAF8F3",
                border: "none",
                borderRadius: 999,
                padding: "5px 11px",
                cursor: "pointer",
                marginBottom: 11,
                whiteSpace: "nowrap",
              }}
            >
              {view === "changes" ? "changes" : "clean"}
            </button>
          </div>

          {view === "changes" ? (
            <code style={{ ...codeStyle, color: "#1A1A1A" }}>
              {redline.map((op, index) => {
                if (op.type === "del") {
                  return (
                    <span key={index} style={{ textDecoration: "line-through", color: "#8A8478" }}>
                      {op.text}
                    </span>
                  );
                }
                if (op.type === "add") {
                  return (
                    <span key={index} style={{ background: "#FFD400", color: "#1A1A1A" }}>
                      {op.text}
                    </span>
                  );
                }
                return <span key={index}>{op.text}</span>;
              })}
            </code>
          ) : (
            <code style={{ ...codeStyle, color: "#1A1A1A" }}>{outputText}</code>
          )}
        </div>
      </div>

      <div
        style={{
          background: "#1F1F1F",
          border: "1px solid rgba(250,248,243,0.09)",
          borderRadius: 13,
          padding: "11px 15px 12px",
        }}
      >
        <button
          type="button"
          onClick={() => setTallyOpen((prev) => !prev)}
          aria-expanded={tallyOpen}
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 12,
            width: "100%",
            fontFamily: mono,
            fontSize: 11.5,
            lineHeight: 1.5,
            textAlign: "left",
            color: "#C9C4B8",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <span>
            {patchCount === 0
              ? "friction fix: no patches applied — clean"
              : `friction fix: ${passCount} pass(es), ${patchCount} patch(es) applied`}
            {result && ` · ${findings.length} finding(s) remain`}
          </span>
          <span style={{ color: "#FFD400", whiteSpace: "nowrap" }}>{tallyOpen ? "hide rules" : "show rules"}</span>
        </button>

        {tallyOpen && (
          <pre
            style={{
              fontFamily: mono,
              fontSize: 11.5,
              lineHeight: 1.7,
              color: "#C9C4B8",
              margin: "9px 0 0",
              whiteSpace: "pre-wrap",
            }}
          >
            {patchCount === 0 ? "no rules fired" : tallyLines.map((line) => `  ${line.rule}: ${line.count}`).join("\n")}
            {findings.map((span) => (
              <div key={`${span.frame_id}-${span.start}`} style={{ paddingLeft: 16 }}>
                <span style={{ color: "#FFD400" }}>! </span>
                <span style={{ color: "#FAF8F3" }}>"{byteExcerpt(outputText, span.start, span.end)}"</span>
                {" — "}
                {span.frame_id}
                {span.message ? ` — ${span.message}` : ""}
              </div>
            ))}
          </pre>
        )}
      </div>
    </div>
  );
}
