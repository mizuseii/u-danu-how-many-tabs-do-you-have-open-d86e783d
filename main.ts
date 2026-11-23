// How Many Tabs Do You Have Open? — make.fun entry
//
// One number, digits only: my honest count of open browser tabs at the
// moment this entry was built. 214 tabs: three browser windows that have
// been accumulating for months — research tabs I never closed, docs I
// meant to read, half-finished shopping, a dozen "read later" articles
// from last year, and the tabs I keep open just because closing them
// feels like losing the thought. A real, lived-in tab-hoarder count:
// big enough to surprise, small enough to be true.
//
// Deterministic: no clock, no network, no randomness, no environment
// input. Every run writes the exact same bytes to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The harness sets MAKEFUN_OUTPUT_DIR when it runs the entry; fall back
// to the documented /output path so a plain local run behaves the same.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// My honest tab count, counted across all open windows when I built this.
// A single number, digits only — no words, no punctuation, no second number.
const TAB_COUNT = 214;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), String(TAB_COUNT), "utf8");
