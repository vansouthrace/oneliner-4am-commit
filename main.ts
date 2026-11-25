import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: deleted the bug, the fix for the bug, and the fix for the fix — it works now and I have decided not to ask why";

if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`entry must be 1-199 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
