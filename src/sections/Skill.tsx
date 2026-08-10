export default function Skill() {
  return (
    <section id="skill" style={{ padding: "clamp(56px, 9vw, 96px) clamp(18px, 4vw, 40px)", maxWidth: 1240, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "clamp(32px, 5vw, 56px)",
          alignItems: "center",
        }}
        data-reveal
        data-cascade
      >
        <div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A7200", marginBottom: 14 }}>
            New in 0.6 — Claude Code skill
          </div>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(28px, 4.2vw, 44px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: "0 0 22px",
              maxWidth: "13em",
            }}
          >
            Your agent can run it too
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, fontWeight: 300, color: "#4A473F", margin: 0, maxWidth: "34em", textWrap: "pretty" }}>
            <a
              href="https://github.com/ngriaznov/friction-skill"
              style={{ color: "inherit", textDecoration: "underline", textDecorationColor: "rgba(26,26,26,0.3)", textUnderlineOffset: "3px" }}
            >
              friction-skill
            </a>{" "}
            teaches Claude Code to run friction on the technical prose it writes: apply the deterministic fixes, then revise the constructions friction can only detect, and converge before presenting.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "#1A1A1A", borderRadius: 14, padding: "22px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
            <code style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(12px, 1.3vw, 13.5px)", color: "#FAF8F3", overflowWrap: "break-word" }}>
              <span style={{ color: "#FFD400" }}>&gt;</span> /plugin marketplace add ngriaznov/friction-skill
            </code>
            <code style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(12px, 1.3vw, 13.5px)", color: "#FAF8F3", overflowWrap: "break-word" }}>
              <span style={{ color: "#FFD400" }}>&gt;</span> /plugin install friction-skill@friction-skill
            </code>
          </div>
          <div style={{ fontSize: 13, color: "#8A8478", lineHeight: 1.6 }}>
            The skill invokes <code style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#4A473F" }}>npx friction-cli@latest</code>, so it needs no local install and always runs the newest release.
          </div>
        </div>
      </div>
    </section>
  );
}
