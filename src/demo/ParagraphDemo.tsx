import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { useFriction } from "./useFriction";
import type { FrictionCheckSpan, FrictionFixResult } from "./friction";
import { SAMPLE_INPUT, SAMPLE_OUTPUT, SAMPLE_PASS_COUNT, SAMPLE_PATCH_COUNT, SAMPLE_TALLY_LINES } from "./sample";
import { byteExcerpt, countWords, diffWords, formatMB, pluralize, tallyFromFired } from "./utils";

const DEBOUNCE_MS = 400;

const mono = "'IBM Plex Mono', monospace";

const panelLabelStyle: CSSProperties = {
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: 18,
};

const codeStyle: CSSProperties = {
  display: "block",
  fontFamily: mono,
  fontSize: "clamp(13px, 1.4vw, 14.5px)",
  lineHeight: 1.85,
  margin: 0,
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
};

/**
 * Renders the "one paragraph, run through the engine" live demo: an
 * editable input paragraph, the engine's fixed output (or a line diff of
 * the two), and the fired-rule tally the CLI itself prints. Standalone —
 * mounted by the site's Demo section with no props.
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
  const firstRunRef = useRef(true);

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
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {statusLine && <div style={{ fontSize: 13, fontFamily: mono, color: "#A9A498" }}>{statusLine}</div>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 24,
        }}
      >
        <div style={{ background: "#1F1F1F", border: "1px solid rgba(250,248,243,0.09)", borderRadius: 16, padding: "28px 30px 32px" }}>
          <div style={{ ...panelLabelStyle, color: "#7A756B" }}>
            Input — machine draft, {inputWords} {pluralize(inputWords, "word", "words")}
          </div>
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            spellCheck={false}
            rows={9}
            style={{
              ...codeStyle,
              width: "100%",
              resize: "vertical",
              background: "transparent",
              border: "none",
              outline: "none",
              padding: 0,
              color: "#C9C4B8",
            }}
          />
        </div>

        <div style={{ background: "#FAF8F3", borderRadius: 16, padding: "28px 30px 32px" }}>
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
                fontSize: 11,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                background: view === "changes" ? "#FFD400" : "#1A1A1A",
                color: view === "changes" ? "#1A1A1A" : "#FAF8F3",
                border: "none",
                borderRadius: 999,
                padding: "6px 12px",
                cursor: "pointer",
                marginBottom: 18,
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

      <pre
        style={{
          fontFamily: mono,
          fontSize: 12,
          lineHeight: 1.85,
          color: "#C9C4B8",
          background: "#1F1F1F",
          border: "1px solid rgba(250,248,243,0.09)",
          borderRadius: 16,
          padding: "26px 18px",
          margin: 0,
          whiteSpace: "pre-wrap",
        }}
      >
        {patchCount === 0
          ? "friction fix: no patches applied — clean"
          : `friction fix: ${passCount} pass(es), ${patchCount} patch(es) applied\n` +
            tallyLines.map((line) => `  ${line.rule}: ${line.count}`).join("\n")}
        {result && `\n  suggest: ${findings.length} finding(s) remain`}
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
    </div>
  );
}
