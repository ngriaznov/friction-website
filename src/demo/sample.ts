// Sample paragraph and its recorded output, byte-faithful to what the
// shipped engine produces (validated against the release binary before
// every update), so the panel is never empty while the engine loads and
// the textarea starts on ground that shows the engine's range: paired
// substitution, the light-verb pivot, ritual and span deletion (including
// a negated sentence's closing "at all"), the participial-closer split
// (tense-agreeing), the additive correlative collapsed to a conjunction
// ("not only X but also Y" -> "X and Y"), "a handful of" -> "a few", a
// ladder substitution, and the residual suggest lines: an idiom the span
// deletion declines to split ("Simply put"), a corrective contrast flagged
// for a human rewrite ("isn't X; it's Y"), and a jargon metaphor.

export const SAMPLE_INPUT =
  "This guide will walk you through configuring the backup agent. The agent performs validation of the config file, then utilizes the snapshot catalog in order to locate missing segments. Simply put, a restore replays the catalog and does not touch the live database at all. v2 replaced the retry loop, allowing the agent to resume after a crash. It retries a handful of times before it gives up. The agent is not only fast but also safe to interrupt. The slow part isn't the upload; it's the checksum pass. This will streamline their deployment and untangle the dependency jungle. It is important to note that offsets should match before you deploy. If you have any questions, please reach out to our support team.";

export const SAMPLE_OUTPUT =
  "This guide covers configuring the backup agent. The agent validates the config file, then uses the snapshot catalog to locate missing segments. Simply put, a restore replays the catalog and does not touch the live database. v2 replaced the retry loop. That allowed the agent to resume after a crash. It retries a few times before it gives up. The agent is fast and safe to interrupt. The slow part isn't the upload; it's the checksum pass. This will simplify their deployment and untangle the dependency jungle. Offsets should match before you deploy.";

export const SAMPLE_PASS_COUNT = 4;
export const SAMPLE_PATCH_COUNT = 12;

export const SAMPLE_TALLY_LINES: ReadonlyArray<{ rule: string; count: number }> = [
  { rule: "con.not-only-but-also", count: 1 },
  { rule: "edit.recapitalize", count: 1 },
  { rule: "ph.a-handful-of", count: 1 },
  { rule: "pivot.lvc", count: 1 },
  { rule: "restructure.participial_closer", count: 1 },
  { rule: "ritual.delete", count: 1 },
  { rule: "span.delete", count: 2 },
  { rule: "sub.apply", count: 3 },
  { rule: "vsub.streamline", count: 1 },
];
