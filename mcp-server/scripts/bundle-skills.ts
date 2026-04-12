/**
 * Bundle-Script: Parst alle SKILL.md-Dateien und generiert skills.json.
 *
 * Wird beim Build ausgeführt (npm run bundle-skills / prebuild).
 * Vercel kann zur Laufzeit keine Dateien aus dem Repo lesen —
 * deshalb werden alle Skills vorab in eine JSON-Datei gebündelt.
 *
 * Nutzung: tsx scripts/bundle-skills.ts
 */

import { resolve, dirname } from "path";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { loadSkills } from "../src/skill-loader.js";
import type { BundledSkill } from "../src/types.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  // Skills aus dem Repo-Root laden (eine Ebene über mcp-server/)
  const repoRoot = resolve(__dirname, "..", "..");
  console.log(`Lade Skills aus: ${repoRoot}`);

  const loaded = await loadSkills(repoRoot);

  // In BundledSkill umwandeln (ohne filePath, da zur Laufzeit nicht relevant)
  const bundled: BundledSkill[] = loaded.map((skill) => ({
    metadata: skill.metadata,
    prompt: skill.prompt,
    description: skill.description,
    toolName: skill.toolName,
  }));

  // Statistiken
  const domains = new Map<string, number>();
  for (const skill of bundled) {
    const domain = skill.metadata.domain;
    domains.set(domain, (domains.get(domain) || 0) + 1);
  }

  console.log(`\n✓ ${bundled.length} Skills gebündelt:\n`);
  for (const [domain, count] of [...domains].sort()) {
    console.log(`  ${domain}: ${count}`);
  }

  // JSON schreiben
  const outPath = resolve(__dirname, "..", "src", "skills.json");
  await writeFile(outPath, JSON.stringify(bundled, null, 2), "utf-8");
  console.log(`\n✓ Geschrieben: ${outPath}`);
}

main().catch((err) => {
  console.error("Bundle fehlgeschlagen:", err);
  process.exit(1);
});
