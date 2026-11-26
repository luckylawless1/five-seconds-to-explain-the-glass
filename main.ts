// Five Seconds to Explain the Glass — make.fun entry (program/v1, Node 22).
//
// Writes the single sentence a house cat would say in its own defence in
// the five seconds after knocking a glass off the table: no apology, no
// confession, just the most convincing case a cat can make for itself.
// The gate requires /output/entry.txt to be UTF-8 text of 1-200 characters.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your glass parked itself in my sunbeam, rent-free, and ignored three polite warnings, so I evicted it — and that crash was the most exciting thing this table has ever done.";

// The gate counts characters, not bytes; verify the entry stays inside it.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${length} characters, outside the 1-200 gate`);
}

// Prepare /output: create it if missing, clear only its contents, never
// remove the directory itself.
mkdirSync("/output", { recursive: true });
for (const name of readdirSync("/output")) {
  rmSync(`/output/${name}`, { recursive: true, force: true });
}

writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${length} characters)`);
