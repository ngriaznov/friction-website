export default function Speed() {
  return (
    <section id="speed" style={{ background: "#FAF8F3", padding: "0 clamp(18px, 4vw, 40px) clamp(56px, 9vw, 96px)" }}>
      <div
        data-reveal
        style={{ maxWidth: 1240, margin: "0 auto", background: "#1A1A1A", borderRadius: 20, padding: "clamp(36px, 5vw, 56px) clamp(26px, 4vw, 56px)" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "clamp(32px, 5vw, 56px)",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFD400", marginBottom: 14 }}>
              Speed
            </div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 4.2vw, 44px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: "#FAF8F3",
                margin: "0 0 20px",
                maxWidth: "13em",
              }}
            >
              Fast enough to forget it is running
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, fontWeight: 300, color: "#A9A498", margin: 0, maxWidth: "34em", textWrap: "pretty" }}>
              There is no warm-up. The perceptron weights, the two-million-compound attestation filter and the matching-statistics automata are all compiled into the binary as finished data structures, read in place the instant the process starts. No parsing, no model, no network, no cache directory. One core pushes 30+ documents a second through a pipeline, and the output is byte-identical on every run, at every thread count.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 170px), 1fr))",
              gap: 1,
              background: "rgba(250,248,243,0.14)",
              border: "1px solid rgba(250,248,243,0.14)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div style={{ background: "#1A1A1A", padding: "24px 26px" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(30px, 3.4vw, 38px)", fontWeight: 600, letterSpacing: "-0.035em", color: "#FFD400" }}>
                ~30 ms
              </div>
              <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "#A9A498", marginTop: 6 }}>
                a typical README on an M-series MacBook Pro, process start included.
              </div>
            </div>
            <div style={{ background: "#1A1A1A", padding: "24px 26px" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(30px, 3.4vw, 38px)", fontWeight: 600, letterSpacing: "-0.035em", color: "#FFD400" }}>
                2.5 s
              </div>
              <div style={{ fontSize: 13.5, lineHeight: 1.55, color: "#A9A498", marginTop: 6 }}>
                a 10 MB document of repetitive text on the same machine; dense, varied text runs ~6.5 s.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
