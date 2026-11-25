// Worst Superpower — make.fun entry (u-suroto-worst-superpower-461dcdbe)
// Node 22, stdlib only. Writes one original single-line superpower to
// /output/entry.txt and validates it against the competition gate:
// 1-140 characters, not blank, exactly one line (no newline characters).

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a power that is spectacular in theory and worthless in
// practice — teleportation that can only ever send you back to where
// you were three seconds ago. The joke lands when you picture the
// heroics: every dramatic entrance is just reappearing in the same spot.
const ENTRY =
  "I can teleport anywhere — but only back to where I was three seconds ago, so every dramatic entrance is just me reappearing in place.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Validate the entry against the gate before writing anything:
// length 1-140, non-blank, and a single line (no CR or LF).
function validate(text) {
  if (typeof text !== "string") throw new Error("entry must be a string");
  if (text.trim().length === 0) throw new Error("entry must not be blank");
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(ENTRY);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
console.log(`wrote ${OUT_FILE} (${ENTRY.length} characters)`);
