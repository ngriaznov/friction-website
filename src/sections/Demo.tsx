import { ParagraphDemo } from "../demo/ParagraphDemo";

export default function Demo() {
  return (
    <section
      id="demo"
      style={{ margin: "clamp(56px, 9vw, 96px) 0 0", background: "#262626", padding: "clamp(52px, 8vw, 84px) clamp(18px, 4vw, 40px)" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 40, flexWrap: "wrap", marginBottom: 40 }}
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
              color: "#FAF8F3",
              margin: 0,
              maxWidth: "14em",
            }}
          >
            One paragraph, run through the engine{" "}
            <span style={{ color: "#FFD400", fontWeight: 500, whiteSpace: "nowrap" }}>(try it here)</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 300, color: "#A9A498", margin: 0, maxWidth: "30em" }}>
            friction edits bytes and leaves the input's own wrapping alone rather than reflowing paragraphs it touched. Struck text is deleted; text on yellow is substituted or pivoted.{" "}
            <span style={{ color: "#C9C4B8" }}>
              This is the real friction engine compiled to WebAssembly, running in your browser — every edit happens on your machine.
            </span>
          </p>
        </div>

        <ParagraphDemo />
      </div>
    </section>
  );
}
