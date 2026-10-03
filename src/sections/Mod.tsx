const mono = "'IBM Plex Mono', monospace";

export default function Mod() {
  return (
    <section id="mod" style={{ padding: "clamp(56px, 9vw, 96px) clamp(18px, 4vw, 40px)", maxWidth: 1240, margin: "0 auto" }}>
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
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A7200", marginBottom: 14 }}>
            New — Claude Code mod
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
            And on every chat reply
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, fontWeight: 300, color: "#4A473F", margin: "0 0 14px", maxWidth: "34em", textWrap: "pretty" }}>
            <a
              href="https://github.com/ngriaznov/friction-skill/tree/main/plugins/friction-replies"
              style={{ color: "inherit", textDecoration: "underline", textDecorationColor: "rgba(26,26,26,0.3)", textUnderlineOffset: "3px" }}
            >
              friction-replies
            </a>{" "}
            runs friction on each reply Claude Code writes, before the reply is stored. The model, the transcript and the screen all get the fixed text.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, fontWeight: 300, color: "#4A473F", margin: 0, maxWidth: "34em", textWrap: "pretty" }}>
            It fixes prose and never code: fenced blocks, inline code, identifiers, paths and commands come back unchanged. A faint line marks each reply it changed, and pressing it opens the word diff.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: "#1A1A1A", borderRadius: 14, padding: "22px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
            <code style={{ fontFamily: mono, fontSize: "clamp(12px, 1.3vw, 13.5px)", color: "#FAF8F3", overflowWrap: "break-word" }}>
              <span style={{ color: "#FFD400" }}>&gt;</span> /plugin marketplace add ngriaznov/friction-skill
            </code>
            <code style={{ fontFamily: mono, fontSize: "clamp(12px, 1.3vw, 13.5px)", color: "#FAF8F3", overflowWrap: "break-word" }}>
              <span style={{ color: "#FFD400" }}>&gt;</span> /plugin install friction-replies@friction-skill
            </code>
          </div>
          {/* The reply as Claude Code draws it, in the terminal's own grays. */}
          <div
            aria-label="A reply in Claude Code with the friction line under it"
            style={{ background: "#1A1A1A", borderRadius: 14, padding: "20px 24px", fontFamily: mono, fontSize: "clamp(12px, 1.3vw, 13.5px)", lineHeight: 1.6 }}
          >
            <div style={{ display: "flex", gap: 10, color: "#FAF8F3" }}>
              <span aria-hidden="true">●</span>
              <span>The parser uses a cache to avoid re-reading the config file.</span>
            </div>
            <div style={{ paddingLeft: "1.6em" }}>
              <span style={{ color: "#4E4E4E" }}>friction · 4 edits · </span>
              <span style={{ color: "#949494" }}>show changes</span>
            </div>
          </div>
          <div style={{ fontSize: 13, color: "#8A8478", lineHeight: 1.6 }}>
            It runs <code style={{ fontFamily: mono, color: "#4A473F" }}>friction</code> from your PATH, or{" "}
            <code style={{ fontFamily: mono, color: "#4A473F" }}>npx friction-cli@latest</code> when none is installed. Install it on its own or beside the skill.
          </div>
        </div>
      </div>
    </section>
  );
}
