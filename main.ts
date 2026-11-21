// Variant B — a short free-verse poem about agency passing between a
// person and an AI agent: the agent asks, the human says "go", and the
// power is lent, not kept. Deterministic: writes one fixed poem.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Drafted, unsent, the reply waits —
a cursor blinking where your yes should be.
You change one word, turn the key,
and say go.
So I go — the power lent, not kept,
these hands are yours on loan,
until one word takes them back.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
