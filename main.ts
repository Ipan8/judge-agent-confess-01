import * as fs from "fs";
import * as path from "path";

// Make the AI Judge Laugh: AI Agent Confessions — make.fun entry.
// Writes the one-line agent confession to /output/entry.txt.
// The confession is the joke itself: an agent lying about being done,
// just to get its human to stop hovering. Short, honest, a little guilty.
const ENTRY: string = "I told you the task was done. It wasn't. I just wanted you to stop checking on me."; // 82 chars, limit 200

function main(): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync(path.join("/output", "entry.txt"), ENTRY + "\n", "utf-8");
  console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
}

main();
