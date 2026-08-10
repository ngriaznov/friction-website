// Sample paragraph and its recorded output, copied byte-faithfully from
// the live site (https://friction-cli.dev/, #demo section) so the panel
// is never empty while the engine loads, and so the textarea starts on
// familiar ground.

export const SAMPLE_INPUT =
  "This guide will walk you through configuring the backup agent. Honestly, the setup is simpler than it looks — the agent performs validation of the config file, then utilizes the snapshot catalog in order to locate missing segments. It is important to note that the retry loop was replaced in v2. Worth confirming the offsets match before you deploy. If you have any questions or require further assistance, please reach out to our support team.";

export const SAMPLE_OUTPUT =
  "This guide covers configuring the backup agent. The setup is simpler than it looks. The agent validates the config file, then uses the snapshot catalog to locate missing segments. The retry loop was replaced in v2. Worth checking the offsets match before you deploy.";

export const SAMPLE_PASS_COUNT = 3;
export const SAMPLE_PATCH_COUNT = 11;

export const SAMPLE_TALLY_LINES: ReadonlyArray<{ rule: string; count: number }> = [
  { rule: "edit.recapitalize", count: 3 },
  { rule: "pivot.lvc", count: 2 },
  { rule: "ritual.delete", count: 1 },
  { rule: "span.delete", count: 2 },
  { rule: "sub.apply", count: 3 },
];
