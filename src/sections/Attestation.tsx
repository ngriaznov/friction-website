export default function Attestation() {
  return (
    <section id="attestation" style={{ background: "#1F1F1F", padding: "clamp(52px, 8vw, 84px) clamp(18px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 48 }}
          data-reveal
          data-cascade
        >
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFD400", marginBottom: 14 }}>
              New — attestation
            </div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 4.2vw, 44px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: "#FAF8F3",
                margin: 0,
                maxWidth: "16em",
              }}
            >
              Catch invented terminology
            </h2>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 300, color: "#A9A498", margin: 0, maxWidth: "30em" }}>
            Models coin confident-sounding compounds that name nothing. friction checks every metaphor-headed noun compound in your text against real vocabulary and reports the ones that aren't attested anywhere.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24, marginBottom: 24 }}
          data-reveal
          data-cascade
        >
          <div style={{ background: "#262626", border: "1px solid rgba(250,248,243,0.09)", borderRadius: 16, padding: "28px 30px" }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A756B", marginBottom: 20 }}>
              Attested — passes silently
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(13px, 1.4vw, 15px)", color: "#C9C4B8" }}>
                <span style={{ color: "#FFD400" }}>✓</span>"data fabric"
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(13px, 1.4vw, 15px)", color: "#C9C4B8" }}>
                <span style={{ color: "#FFD400" }}>✓</span>"primordial soup"
              </div>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, fontWeight: 300, color: "#7A756B", margin: "20px 0 0" }}>
              Established terms are in the table. They read as vocabulary, not as invention, and friction leaves them alone.
            </p>
          </div>
          <div style={{ background: "#FAF8F3", borderRadius: 16, padding: "28px 30px" }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A8478", marginBottom: 20 }}>
              Unattested — reported for rewriting
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(13px, 1.4vw, 15px)", color: "#1A1A1A" }}>
                <span style={{ color: "#8A7200" }}>!</span>
                <span style={{ background: "#FFD400" }}>"semantic wells"</span>
              </div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, lineHeight: 1.7, color: "#4A473F", background: "#F0EDE5", borderRadius: 10, padding: "12px 14px" }}>
                attest.unknown — compound not found in 2,026,123 concept keys
              </div>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, fontWeight: 300, color: "#4A473F", margin: "20px 0 0" }}>
              A finding, never a silent rewrite. friction has no basis for guessing what you meant, so it hands the decision back to you.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: 1,
            background: "rgba(250,248,243,0.12)",
            border: "1px solid rgba(250,248,243,0.12)",
            borderRadius: 16,
            overflow: "hidden",
          }}
          data-reveal
          data-cascade
        >
          <div style={{ background: "#262626", padding: "26px 28px" }}>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", color: "#FFD400" }}>2,026,123</div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: "#A9A498", marginTop: 6 }}>
              multiword concept keys, drawn from Wikipedia article titles and OpenAlex topics.
            </div>
          </div>
          <div style={{ background: "#262626", padding: "26px 28px" }}>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", color: "#FFD400" }}>2.2 MB</div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: "#A9A498", marginTop: 6 }}>
              a binary fuse filter, a compact cousin of the Bloom filter, packing all of them inside the binary.
            </div>
          </div>
          <div style={{ background: "#262626", padding: "26px 28px" }}>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", color: "#FFD400" }}>nanoseconds</div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: "#A9A498", marginTop: 6 }}>
              per lookup, answered offline. No index to host, no request to make.
            </div>
          </div>
          <div style={{ background: "#262626", padding: "26px 28px" }}>
            <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", color: "#FFD400" }}>0.4%</div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: "#A9A498", marginTop: 6 }}>
              false positives, which read as attested and stay silent. The filter can suppress a warning but never invent one. The build is reproducible byte for byte from checksummed source dumps.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
