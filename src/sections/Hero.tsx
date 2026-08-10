export default function Hero() {
  return (
    <section style={{ padding: "clamp(48px, 8vw, 96px) clamp(18px, 4vw, 40px) 0", maxWidth: 1240, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "clamp(36px, 5vw, 64px)",
          alignItems: "start",
        }}
      >
        <div>
          <h1
            data-reveal
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(29px, 4.4vw, 68px)",
              lineHeight: 0.98,
              overflowWrap: "break-word",
              letterSpacing: "-0.035em",
              margin: "0 0 24px",
            }}
          >
            Strip LLM-speak<br />out of LLM output.<br />
            <span style={{ background: "linear-gradient(transparent 62%, #FFD400 62%)" }}>Deterministically.</span>
          </h1>
          <p
            data-reveal="1"
            style={{
              fontSize: "clamp(16.5px, 1.9vw, 19px)",
              lineHeight: 1.55,
              fontWeight: 300,
              color: "#4A473F",
              maxWidth: "31em",
              margin: "0 0 28px",
              textWrap: "pretty",
            }}
          >
            Point friction at a model-written README, migration guide or design note and it deletes the tells (ritual closers, filler spans, hedges, light-verb padding) while leaving every fact, number, link and code span exactly as it found them.
          </p>
          <div
            data-reveal="2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
              gap: 20,
              maxWidth: 580,
              margin: "0 0 34px",
            }}
          >
            <div style={{ borderTop: "2px solid #1A1A1A", paddingTop: 12 }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Deterministic</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#4A473F" }}>Same input, same bytes. No model runs at fix time.</div>
            </div>
            <div style={{ borderTop: "2px solid #1A1A1A", paddingTop: 12 }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Fast</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#4A473F" }}>Pure table lookups, no inference, no network. Fits a pre-commit hook.</div>
            </div>
            <div style={{ borderTop: "2px solid #1A1A1A", paddingTop: 12 }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Lossless</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#4A473F" }}>Never invents a word. Where no safe edit exists, it reports instead.</div>
            </div>
          </div>
          <div data-reveal="3" style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 520 }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "6px 16px",
                background: "#1A1A1A",
                borderRadius: 12,
                padding: "16px 18px",
              }}
            >
              <code style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: "#FAF8F3", whiteSpace: "nowrap" }}>
                <span style={{ color: "#FFD400" }}>$</span> npm install -g friction-cli
              </code>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#7A756B" }}>v0.6</span>
            </div>
            <div style={{ fontSize: 13, color: "#8A8478" }}>
              Ships with the tagger and dependency parser vendored in. Nothing is downloaded at run time. Building from source:{" "}
              <code style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#4A473F" }}>cargo build --release -p friction-cli</code>.
            </div>
          </div>
        </div>

        <div
          data-reveal="2"
          style={{ background: "#262626", borderRadius: 18, padding: 20, boxShadow: "0 24px 60px rgba(26,26,26,0.18)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "2px 4px 16px" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#4A473F" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#4A473F" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFD400" }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#7A756B", marginLeft: 8 }}>
              friction fix draft.md
            </span>
          </div>
          <pre
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12.5,
              lineHeight: 1.8,
              color: "#E6E2D8",
              margin: "0 0 18px",
              whiteSpace: "pre-wrap",
            }}
          >
            <span style={{ color: "#FFD400" }}>$</span> echo 'It is crucial that you utilize{"\n"}
            {"    "}the debug flag.' | friction fix -{"\n"}
            <span style={{ color: "#FFD400" }}>It matters that the debug flag is used.</span>
          </pre>
          <pre
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12.5,
              lineHeight: 1.8,
              color: "#E6E2D8",
              margin: 0,
              whiteSpace: "pre-wrap",
            }}
          >
            <span style={{ color: "#FFD400" }}>$</span> friction fix draft.md --format json{"\n"}
            {'{"passes":3,"patches_applied":4,'}
            {"\n"}
            {' "patches_by_rule":{"sub.apply":3},'}
            {"\n"}
            {' "suggest_count":0}'}
          </pre>
        </div>
      </div>
    </section>
  );
}
