/**
 * Vercel Serverless Function: HTTP-Transport für den MCP-Server.
 *
 * Endpunkt: https://claude-bildungs-skills.vercel.app/mcp
 *
 * Nutzt pre-bundled skills.json (generiert beim Build).
 * Stateless — jede Anfrage ist unabhängig.
 */

import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer } from "../src/server.js";
import type { BundledSkill } from "../src/types.js";
import type { IncomingMessage, ServerResponse } from "http";

// Skills beim Cold-Start laden
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const skillsPath = resolve(__dirname, "..", "src", "skills.json");
const skills = JSON.parse(readFileSync(skillsPath, "utf-8")) as BundledSkill[];

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  // CORS-Headers für Cross-Origin-Zugriff
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, mcp-session-id");
  res.setHeader("Access-Control-Expose-Headers", "mcp-session-id");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const server = createServer(skills);

  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // Stateless
  });

  await server.connect(transport);
  await transport.handleRequest(req, res);
}
