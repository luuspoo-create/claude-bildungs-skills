/**
 * Entry Point für den stdio-Transport (lokale Nutzung).
 *
 * Startet den MCP-Server, der alle Skills aus dem übergeordneten
 * Repository-Verzeichnis lädt.
 *
 * Nutzung: node dist/index.js
 */

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { loadSkills } from "./skill-loader.js";
import { createServer } from "./server.js";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  // Skills-Quelle bestimmen: Pre-bundled JSON oder Live-Dateien
  const bundlePath = resolve(__dirname, "skills.json");
  let skills;

  try {
    const raw = await readFile(bundlePath, "utf-8");
    const bundled = JSON.parse(raw);
    console.error(`Verwende pre-bundled skills.json (${bundled.length} Skills)`);
    skills = bundled;
  } catch {
    // Kein Bundle vorhanden → Live-Laden aus dem Repo
    const repoRoot = resolve(__dirname, "..", "..");
    console.error(`Lade Skills live aus ${repoRoot}`);
    skills = await loadSkills(repoRoot);
  }

  const server = createServer(skills);
  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error("MCP Server läuft (stdio-Transport)");
}

main().catch((err) => {
  console.error("Server-Start fehlgeschlagen:", err);
  process.exit(1);
});
