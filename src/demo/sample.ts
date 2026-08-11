// Sample paragraph and its recorded output, byte-faithful to what the
// shipped engine produces (validated against the release binary before
// every update), so the panel is never empty while the engine loads and
// the textarea starts on ground that shows the engine's range: paired
// substitution, the light-verb pivot, ritual and span deletion, the
// participial-closer split (tense-agreeing), a ladder substitution, and
// a jargon metaphor left for the residual suggest line.

export const SAMPLE_INPUT =
  "This guide will walk you through configuring the backup agent. The agent performs validation of the config file, then utilizes the snapshot catalog in order to locate missing segments. v2 replaced the retry loop, allowing the agent to resume after a crash. This will streamline their deployment and untangle the dependency jungle. It is important to note that offsets should match before you deploy. If you have any questions, please reach out to our support team.";

export const SAMPLE_OUTPUT =
  "This guide covers configuring the backup agent. The agent validates the config file, then uses the snapshot catalog to locate missing segments. v2 replaced the retry loop. That allowed the agent to resume after a crash. This will simplify their deployment and untangle the dependency jungle. Offsets should match before you deploy.";

export const SAMPLE_PASS_COUNT = 4;
export const SAMPLE_PATCH_COUNT = 9;

export const SAMPLE_TALLY_LINES: ReadonlyArray<{ rule: string; count: number }> = [
  { rule: "edit.recapitalize", count: 1 },
  { rule: "pivot.lvc", count: 1 },
  { rule: "restructure.participial_closer", count: 1 },
  { rule: "ritual.delete", count: 1 },
  { rule: "span.delete", count: 1 },
  { rule: "sub.apply", count: 3 },
  { rule: "vsub.streamline", count: 1 },
];
