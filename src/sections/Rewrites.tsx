export default function Rewrites() {
  return (
    <section id="rewrites" style={{ background: "#F0EDE5", padding: "clamp(52px, 8vw, 84px) clamp(18px, 4vw, 40px)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(32px, 5vw, 56px)",
            alignItems: "start",
          }}
          data-reveal
          data-cascade
        >
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A7200", marginBottom: 14 }}>
              913 compiled rules
            </div>
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 4.2vw, 44px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                margin: "0 0 22px",
                maxWidth: "12em",
              }}
            >
              Rewrites, measured
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, fontWeight: 300, color: "#4A473F", margin: 0, maxWidth: "34em", textWrap: "pretty" }}>
              friction does not just delete machine phrasing: it rewrites it into what a person would have written. A compiled program of 913 rewrite rules turns "worth confirming" into "worth checking" and "just flagging" into "just noting", collapses remedy scaffolds ("The fix is to rely on the constraint" becomes "Rely on the constraint"), and removes openers like "Honestly," that people do not write.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ fontSize: 16, lineHeight: 1.65, fontWeight: 300, color: "#4A473F", margin: 0, textWrap: "pretty" }}>
              None of these rules are opinions. Each one is measured against 49.7 million words of code review written by people before ChatGPT existed on one side and a machine corpus in the same register on the other, ships with its rates on record, and compiles only while the numbers hold.
            </p>
            <div style={{ background: "#1A1A1A", borderRadius: 14, padding: "22px 24px" }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7A756B", marginBottom: 14 }}>
                "worth confirming" — rate on record
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: 18 }}>
                <div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", color: "#FFD400" }}>398</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: "#A9A498", marginTop: 4 }}>per million words of machine review</div>
                </div>
                <div>
                  <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", color: "#FAF8F3" }}>0.1</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: "#A9A498", marginTop: 4 }}>per million words of human review</div>
                </div>
              </div>
            </div>
            <div style={{ borderLeft: "3px solid #FFD400", padding: "4px 0 4px 18px" }}>
              <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 300, color: "#4A473F", margin: 0, textWrap: "pretty" }}>
                The same measurements protect your prose: "thank you for your understanding" looks machine-flavored but people write it constantly, so friction refuses to touch it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
