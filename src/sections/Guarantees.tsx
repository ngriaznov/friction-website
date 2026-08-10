export default function Guarantees() {
  return (
    <section id="guarantees" style={{ background: "#FFD400", padding: "clamp(52px, 8vw, 84px) clamp(18px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 52 }}
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
            }}
          >
            Guarantees, not intentions
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 400, color: "#4A3F00", margin: 0, maxWidth: "28em" }}>
            Every edit passes a stack of hard gates before it is applied. When a gate says no, the candidate is kept verbatim and reported as a suggestion: doing nothing is the designed fallback, not a failure mode.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: 1,
            background: "rgba(26,26,26,0.18)",
            border: "1px solid rgba(26,26,26,0.18)",
            borderRadius: 16,
            overflow: "hidden",
          }}
          data-reveal
          data-cascade
        >
          <div style={{ background: "#FFD400", padding: "32px 34px" }}>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(20px, 2.4vw, 24px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
              Deterministic
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 400, color: "#4A3F00", margin: 0 }}>
              Same input, same pack, same bytes. Always. No model runs at fix time: everything is offline, table-driven, and byte-deterministic.
            </p>
          </div>
          <div style={{ background: "#FFD400", padding: "32px 34px" }}>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(20px, 2.4vw, 24px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
              Idempotent
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 400, color: "#4A3F00", margin: 0 }}>
              A second pass may clean up after first-pass deletions; a third changes nothing. Enforced by a CI canary over fixtures and real corpus documents.
            </p>
          </div>
          <div style={{ background: "#FFD400", padding: "32px 34px" }}>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(20px, 2.4vw, 24px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
              Closed
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 400, color: "#4A3F00", margin: 0 }}>
              No code path can insert a searched-for word. Content words are input-derived; function words come only from a fixed set declared per operation:{" "}
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 14 }}>was, were, is, are</span>, and nothing else.
            </p>
          </div>
          <div style={{ background: "#FFD400", padding: "32px 34px" }}>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(20px, 2.4vw, 24px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
              Near-no-op on human text
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 400, color: "#4A3F00", margin: 0 }}>
              Under 1.87 edits per 1000 words on curated human writing, recalibrated whenever the packs are rebuilt and cross-checked against a sealed holdout that never feeds back.
            </p>
          </div>
        </div>

        <div
          data-reveal
          data-cascade
          style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: "#4A3F00" }}
        >
          <span style={{ border: "1px solid rgba(26,26,26,0.25)", borderRadius: 999, padding: "7px 14px" }}>span-honest byte ranges</span>
          <span style={{ border: "1px solid rgba(26,26,26,0.25)", borderRadius: 999, padding: "7px 14px" }}>code spans, links, numbers untouched</span>
          <span style={{ border: "1px solid rgba(26,26,26,0.25)", borderRadius: 999, padding: "7px 14px" }}>negation &amp; modals off-limits</span>
          <span style={{ border: "1px solid rgba(26,26,26,0.25)", borderRadius: 999, padding: "7px 14px" }}>quoted text is someone's example, not your register</span>
          <span style={{ border: "1px solid rgba(26,26,26,0.25)", borderRadius: 999, padding: "7px 14px" }}>prose blocks only — never headings or tables</span>
          <span style={{ border: "1px solid rgba(26,26,26,0.25)", borderRadius: 999, padding: "7px 14px" }}>SARIF 2.1.0 output</span>
        </div>
      </div>
    </section>
  );
}
