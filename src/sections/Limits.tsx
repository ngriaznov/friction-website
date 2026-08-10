export default function Limits() {
  return (
    <section id="limits" style={{ padding: "clamp(56px, 9vw, 96px) clamp(18px, 4vw, 40px)", maxWidth: 1240, margin: "0 auto" }}>
      <div
        style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 48 }}
        data-reveal
      >
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(28px, 4.2vw, 44px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            margin: 0,
            maxWidth: "12em",
          }}
        >
          What it deliberately won't do
        </h2>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 20, marginBottom: 20 }}
        data-reveal
        data-cascade
      >
        <div style={{ borderTop: "3px solid #1A1A1A", padding: "22px 0 0" }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8478", marginBottom: 12 }}>
            Limit 01
          </div>
          <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
            English only, with no language detection
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.65, fontWeight: 300, color: "#4A473F", margin: "0 0 14px", textWrap: "pretty" }}>
            On German, Spanish, Dutch, Italian and Portuguese it is completely inert: zero patches, output byte-identical. That is the safe failure, and it is the one you get. It will still repair English sentences embedded in another language.
          </p>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, lineHeight: 1.7, background: "#F0EDE5", borderRadius: 10, padding: "14px 16px", color: "#4A473F" }}>
            <code style={{ fontFamily: "inherit", color: "inherit" }}>
              Ce document décrit le setup. <span style={{ textDecoration: "line-through", color: "#8A8478" }}>It is important to note that we utilize the cache.</span> →{" "}
              <span style={{ color: "#1A1A1A" }}>The cache is used.</span>
            </code>
          </div>
        </div>
        <div style={{ borderTop: "3px solid #1A1A1A", padding: "22px 0 0" }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8478", marginBottom: 12 }}>
            Limit 02
          </div>
          <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
            Scoped to technical documentation
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.65, fontWeight: 300, color: "#4A473F", margin: "0 0 14px", textWrap: "pretty" }}>
            The register band was measured on reference documentation. READMEs measured as a different register, so pooling was rejected. It is not for fiction, marketing, or prose whose voice is the point. It is not a detector-beater. And the gates check whether an edit preserves meaning and grammar, not whether the result reads better.
          </p>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, lineHeight: 1.7, background: "#F0EDE5", borderRadius: 10, padding: "14px 16px", color: "#4A473F" }}>
            A rewrite can be licensed, correct, and still flatter than what it replaced. Only a reader catches that.
          </div>
        </div>
      </div>
    </section>
  );
}
