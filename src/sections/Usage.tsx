import type { CSSProperties } from "react";

const cellStyle: CSSProperties = { background: "#FAF8F3", padding: "24px 26px", display: "flex", flexDirection: "column", gap: 10 };
const codeStyle: CSSProperties = { fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(12.5px, 1.3vw, 14px)", color: "#1A1A1A", overflowWrap: "break-word" };
const descStyle: CSSProperties = { fontSize: 14, lineHeight: 1.55, color: "#4A473F" };

export default function Usage() {
  return (
    <section id="usage" style={{ background: "#F0EDE5", padding: "clamp(52px, 8vw, 84px) clamp(18px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 44 }}
          data-reveal
          data-cascade
        >
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 4.2vw, 44px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "14em",
            }}
          >
            Nothing happens to your file unless you ask
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 300, color: "#4A473F", margin: 0, maxWidth: "28em" }}>
            By default <code style={{ fontFamily: "'IBM Plex Mono', monospace" }}>fix</code> prints the repaired text to stdout and a summary to stderr. The document on disk is untouched until you pass a flag that says otherwise.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: 1,
            background: "rgba(26,26,26,0.12)",
            border: "1px solid rgba(26,26,26,0.12)",
            borderRadius: 16,
            overflow: "hidden",
          }}
          data-reveal
          data-cascade
        >
          <div style={cellStyle}>
            <code style={codeStyle}>
              <span style={{ color: "#8A7200" }}>$</span> friction fix draft.md
            </code>
            <div style={descStyle}>Repaired text to stdout, summary to stderr. The file on disk is never touched.</div>
          </div>
          <div style={cellStyle}>
            <code style={codeStyle}>
              <span style={{ color: "#8A7200" }}>$</span> friction fix draft.md <span style={{ background: "#FFD400" }}>--in-place</span>
            </code>
            <div style={descStyle}>Repairs the file itself, atomically. The flag you want when editing in place.</div>
          </div>
          <div style={cellStyle}>
            <code style={codeStyle}>
              <span style={{ color: "#8A7200" }}>$</span> friction fix draft.md &gt; fixed.md
            </code>
            <div style={descStyle}>Saves the repaired text beside the untouched original.</div>
          </div>
          <div style={cellStyle}>
            <code style={codeStyle}>
              <span style={{ color: "#8A7200" }}>$</span> friction fix draft.md 2&gt;/dev/null
            </code>
            <div style={descStyle}>Repaired text only, ready for pipes.</div>
          </div>
          <div style={cellStyle}>
            <code style={codeStyle}>
              <span style={{ color: "#8A7200" }}>$</span> friction fix draft.md <span style={{ background: "#FFD400" }}>--suggest</span>
            </code>
            <div style={descStyle}>Also lists everything detected but held: gate declines, plus spans that need a human paraphrase.</div>
          </div>
          <div style={cellStyle}>
            <code style={codeStyle}>
              <span style={{ color: "#8A7200" }}>$</span> friction fix draft.md <span style={{ background: "#FFD400" }}>--format json</span>
            </code>
            <div style={descStyle}>The whole report as one JSON document on stderr, built for agents and CI.</div>
          </div>
          <div style={{ ...cellStyle, gridColumn: "1 / -1" }}>
            <code style={codeStyle}>
              <span style={{ color: "#8A7200" }}>$</span> friction fix <span style={{ background: "#FFD400" }}>-</span>
            </code>
            <div style={descStyle}>
              Reads stdin, writes stdout. <code style={{ fontFamily: "'IBM Plex Mono', monospace" }}>--in-place</code> is rejected there: there is no file to write back.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
