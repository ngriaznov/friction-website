import type { CSSProperties } from "react";

const cardStyle: CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(26,26,26,0.1)",
  borderRadius: 16,
  padding: "28px 26px 26px",
  display: "flex",
  flexDirection: "column",
  gap: 16,
};

const badgeStyle: CSSProperties = {
  fontFamily: "Poppins, sans-serif",
  fontSize: 13,
  fontWeight: 600,
  background: "#FFD400",
  width: 26,
  height: 26,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const opCodeStyle: CSSProperties = { fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#8A8478" };

const h3Style: CSSProperties = {
  fontFamily: "Poppins, sans-serif",
  fontSize: 21,
  fontWeight: 600,
  letterSpacing: "-0.02em",
  margin: 0,
};

const pStyle: CSSProperties = { fontSize: 14.5, lineHeight: 1.6, fontWeight: 300, color: "#4A473F", margin: 0 };

const exampleStyle: CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: 13,
  lineHeight: 1.7,
  background: "#FAF8F3",
  borderRadius: 10,
  padding: "14px 16px",
  color: "#4A473F",
};

export default function Operations() {
  return (
    <section id="operations" style={{ padding: "clamp(56px, 9vw, 96px) clamp(18px, 4vw, 40px)", maxWidth: 1240, margin: "0 auto" }}>
      <div
        style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 48 }}
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
            maxWidth: "12em",
          }}
        >
          Seven operations edit text
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 300, color: "#4A473F", margin: 0, maxWidth: "28em" }}>
          Six remove or rewrite machine framing. The seventh is the only one that can raise a construction rather than remove one: a construction that is <em>missing</em> has no span to detect.
        </p>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 20 }}
        data-reveal
        data-cascade
      >
        <div style={cardStyle} data-h="h3">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={badgeStyle}>1</span>
            <span style={opCodeStyle}>ritual.delete</span>
          </div>
          <h3 style={h3Style}>Ritual deletion</h3>
          <p style={pStyle}>Sentences matching ritual frames are removed whole.</p>
          <div style={exampleStyle}>
            <span style={{ textDecoration: "line-through", color: "#8A8478" }}>"…please reach out to our support team."</span>{" "}
            <span style={{ color: "#1A1A1A" }}>→ gone</span>
          </div>
        </div>

        <div style={cardStyle} data-h="h3">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={badgeStyle}>2</span>
            <span style={opCodeStyle}>span.delete</span>
          </div>
          <h3 style={h3Style}>Gated span deletion</h3>
          <p style={pStyle}>A filler span goes only if the resulting seam is attested in human writing and the sentence keeps a finite verb.</p>
          <div style={exampleStyle}>
            <span style={{ textDecoration: "line-through", color: "#8A8478" }}>"It is important to note that"</span> the agent →{" "}
            <span style={{ color: "#1A1A1A" }}>The agent</span>
          </div>
        </div>

        <div style={cardStyle} data-h="h3">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={badgeStyle}>3</span>
            <span style={opCodeStyle}>sub.apply</span>
          </div>
          <h3 style={h3Style}>Paired substitution</h3>
          <p style={pStyle}>A slop frame becomes its plain-register counterpart from a versioned, audited inventory.</p>
          <div style={exampleStyle}>
            "in order to" → <span style={{ background: "#FFD400", color: "#1A1A1A" }}>"to"</span> · "leverages" →{" "}
            <span style={{ background: "#FFD400", color: "#1A1A1A" }}>"uses"</span>
          </div>
        </div>

        <div style={cardStyle} data-h="h3">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={badgeStyle}>4</span>
            <span style={opCodeStyle}>pivot.lvc</span>
          </div>
          <h3 style={h3Style}>Derivational pivot</h3>
          <p style={pStyle}>A licensed light-verb construction collapses to its root verb, inheriting tense and agreement.</p>
          <div style={exampleStyle}>
            "we made the decision to switch" →{" "}
            <span style={{ background: "#FFD400", color: "#1A1A1A" }}>"we decided to switch"</span>
          </div>
        </div>

        <div style={cardStyle} data-h="h3">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={badgeStyle}>5</span>
            <span style={opCodeStyle}>frame-gated</span>
          </div>
          <h3 style={h3Style}>Frame-gated just-deletion</h3>
          <p style={pStyle}>Rhetorical "just" goes only where a frame licenses the deletion. The question it hedges is never touched.</p>
          <div style={exampleStyle}>
            "is provenance <span style={{ textDecoration: "line-through", color: "#8A8478" }}>just</span> metadata, or…?" →{" "}
            <span style={{ background: "#FFD400", color: "#1A1A1A" }}>"is provenance metadata, or…?"</span>
          </div>
        </div>

        <div style={cardStyle} data-h="h3">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={badgeStyle}>6</span>
            <span style={opCodeStyle}>913 rules</span>
          </div>
          <h3 style={h3Style}>Frame rewriting</h3>
          <p style={pStyle}>Corpus-adjudicated rules with measured rates rewrite machine phrasing into what a person writes. The rates are below.</p>
          <div style={exampleStyle}>
            "We utilized the cache" → <span style={{ background: "#FFD400", color: "#1A1A1A" }}>"We used the cache"</span> ·{" "}
            "Honestly," → <span style={{ textDecoration: "line-through", color: "#8A8478" }}>deleted</span>
          </div>
        </div>

        <div
          style={{
            gridColumn: "1 / -1",
            background: "#1A1A1A",
            borderRadius: 16,
            padding: "clamp(24px, 3vw, 30px) clamp(22px, 3vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={badgeStyle}>7</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#7A756B" }}>register.passivize</span>
            </div>
            <h3 style={{ ...h3Style, color: "#FAF8F3" }}>Register rephrasing</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, fontWeight: 300, color: "#A9A498", margin: 0, textWrap: "pretty" }}>
              Language models under-produce the agentless passive relative to human technical writing (consistently, across every model measured), and no amount of deleting fixes an under-use. It fires only while the document sits outside a band measured from human documents, and stops at the band's edge rather than its centre: every document landing on the same coordinates would be a tell of its own. Roughly one machine document in ten.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13.5, lineHeight: 1.7, background: "#262626", borderRadius: 10, padding: "14px 16px", color: "#C9C4B8" }}>
              "as you make changes" → <span style={{ color: "#FFD400" }}>"as changes are made"</span>
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13.5, lineHeight: 1.7, background: "#262626", borderRadius: 10, padding: "14px 16px", color: "#C9C4B8" }}>
              "how we handle code reviews" → <span style={{ color: "#FFD400" }}>"how code reviews are handled"</span>
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13.5, lineHeight: 1.7, background: "#262626", borderRadius: 10, padding: "14px 16px", color: "#C9C4B8" }}>
              "the integration of SQS" → <span style={{ color: "#FFD400" }}>"integrating SQS"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
