export default function Footer() {
  return (
    <section style={{ background: "#262626", padding: "0 clamp(18px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <footer style={{ display: "flex", alignItems: "start", justifyContent: "space-between", gap: 48, flexWrap: "wrap", padding: "64px 0 56px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 18, height: 18, background: "#FFD400", borderRadius: 5 }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 15, color: "#FAF8F3" }}>friction</span>
            </div>
            <div style={{ fontSize: 13, color: "#7A756B", maxWidth: "26em", lineHeight: 1.6 }}>
              MIT or Apache-2.0, at your option. The vendored corpus is third-party material under its own licenses; every document's provenance is recorded in{" "}
              <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>manifest.jsonl</span>.
            </div>
          </div>
          <div style={{ display: "flex", gap: "32px 56px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A756B", marginBottom: 2 }}>
                Commands
              </div>
              <a href="https://github.com/ngriaznov/friction" style={{ fontSize: 14, color: "#C9C4B8" }} data-h="h4">friction fix</a>
              <a href="https://github.com/ngriaznov/friction" style={{ fontSize: 14, color: "#C9C4B8" }} data-h="h4">friction check</a>
              <a href="https://github.com/ngriaznov/friction" style={{ fontSize: 14, color: "#C9C4B8" }} data-h="h4">friction explain</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A756B", marginBottom: 2 }}>
                Data
              </div>
              <a href="https://github.com/ngriaznov/friction" style={{ fontSize: 14, color: "#C9C4B8" }} data-h="h4">inventory-v1.toml</a>
              <a href="https://github.com/ngriaznov/friction" style={{ fontSize: 14, color: "#C9C4B8" }} data-h="h4">register-v1.toml</a>
              <a href="https://github.com/ngriaznov/friction" style={{ fontSize: 14, color: "#C9C4B8" }} data-h="h4">attestation-v1.toml</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A756B", marginBottom: 2 }}>
                Project
              </div>
              <a href="https://github.com/ngriaznov/friction" style={{ fontSize: 14, color: "#C9C4B8" }} data-h="h4">GitHub</a>
              <a href="https://github.com/ngriaznov/friction-skill" style={{ fontSize: 14, color: "#C9C4B8" }} data-h="h4">friction-skill</a>
              <a href="https://github.com/ngriaznov/friction" style={{ fontSize: 14, color: "#C9C4B8" }} data-h="h4">Research notes</a>
              <a href="https://github.com/ngriaznov/friction" style={{ fontSize: 14, color: "#C9C4B8" }} data-h="h4">License</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
