export default function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px 20px",
        flexWrap: "wrap",
        padding: "14px clamp(18px, 4vw, 40px)",
        background: "rgba(250,248,243,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(26,26,26,0.08)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 22, height: 22, background: "#FFD400", borderRadius: 6 }} />
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 17, fontWeight: 500, letterSpacing: "-0.01em" }}>
          friction
        </span>
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            color: "#8A8478",
            border: "1px solid rgba(26,26,26,0.14)",
            borderRadius: 4,
            padding: "2px 6px",
          }}
        >
          v0.6
        </span>
      </div>
      <nav style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "12px 22px", fontSize: 14, fontWeight: 400, color: "#4A473F" }}>
        <a href="#demo" style={{ color: "inherit" }} data-h="h1">Before / after</a>
        <a href="#operations" style={{ color: "inherit" }} data-h="h1">Operations</a>
        <a href="#rewrites" style={{ color: "inherit" }} data-h="h1">Rewrites</a>
        <a href="#speed" style={{ color: "inherit" }} data-h="h1">Speed</a>
        <a href="#usage" style={{ color: "inherit" }} data-h="h1">Usage</a>
        <a href="#skill" style={{ color: "inherit" }} data-h="h1">Skill</a>
        <a href="#attestation" style={{ color: "inherit" }} data-h="h1">Attestation</a>
        <a href="#guarantees" style={{ color: "inherit" }} data-h="h1">Guarantees</a>
        <a href="#limits" style={{ color: "inherit" }} data-h="h1">Limits</a>
        <a
          href="https://github.com/ngriaznov/friction"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#1A1A1A",
            color: "#FAF8F3",
            padding: "9px 16px",
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 500,
          }}
          data-h="h2"
        >
          <span style={{ color: "#FFD400" }}>★</span>Star on GitHub
        </a>
      </nav>
    </header>
  );
}
