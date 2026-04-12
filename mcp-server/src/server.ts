/**
 * MCP Server: Registriert alle Skills als Tools und Prompts.
 *
 * - Jeder Skill wird als MCP-Tool registriert (Claude ruft es auf, erhält assemblierten Prompt)
 * - Jeder Skill wird als MCP-Prompt registriert (für Claude Desktop)
 * - 4 Meta-Tools: list_skills, find_skills, suggest_skills, get_skill_details
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { LoadedSkill, BundledSkill } from "./types.js";
import {
  assemblePrompt,
  framePrompt,
  listSkills,
  findSkills,
  suggestSkills,
  getSkillDetails,
} from "./tool-handler.js";

type AnySkill = LoadedSkill | BundledSkill;

export function createServer(skills: AnySkill[]): McpServer {
  const server = new McpServer({
    name: "claude-bildungs-skills",
    version: "1.0.0",
  });

  // ─── Meta-Tools registrieren ──────────────────────────────

  server.tool(
    "list_skills",
    "Listet alle verfügbaren Bildungs-Skills gruppiert nach Domäne auf. Zeigt Name, Beschreibung, Evidenzstärke und geschätzte Zeit.",
    {},
    async () => ({
      content: [{ type: "text", text: listSkills(skills) }],
    })
  );

  server.tool(
    "find_skills",
    "Sucht Bildungs-Skills nach Stichwort, Domäne, Evidenzstärke oder Tag. Mindestens ein Suchkriterium angeben.",
    {
      query: z.string().optional().describe("Suchbegriff (sucht in Name, Beschreibung, Tags)"),
      domain: z.string().optional().describe("Domäne filtern (z.B. 'schule-ki-lernen', 'schule-lehrplan-beurteilung')"),
      evidence_strength: z.string().optional().describe("Evidenzstärke filtern: 'strong', 'moderate', 'emerging'"),
      tag: z.string().optional().describe("Nach Tag filtern (z.B. 'differenzierung', 'formativ', 'lehrplan-21')"),
    },
    async (args) => ({
      content: [{ type: "text", text: findSkills(skills, args) }],
    })
  );

  server.tool(
    "suggest_skills",
    "Beschreibe ein pädagogisches Problem oder eine Unterrichtssituation — der Server schlägt 3–5 passende Skills vor.",
    {
      problem: z.string().describe("Beschreibe dein Problem oder deine Situation in eigenen Worten"),
    },
    async ({ problem }) => ({
      content: [{ type: "text", text: suggestSkills(skills, problem) }],
    })
  );

  server.tool(
    "get_skill_details",
    "Zeigt vollständige Details zu einem Skill: Beschreibung, Evidenzquellen, Input-/Output-Schema, Verkettungsmöglichkeiten.",
    {
      skill_id: z.string().describe("Skill-ID (z.B. 'schule-ki-lernen/adaptiver-tutor') oder Tool-Name"),
    },
    async ({ skill_id }) => ({
      content: [{ type: "text", text: getSkillDetails(skills, skill_id) }],
    })
  );

  // ─── Skill-Tools registrieren ─────────────────────────────

  for (const skill of skills) {
    const meta = skill.metadata;

    // Zod-Schema aus input_schema bauen
    const shape: Record<string, z.ZodTypeAny> = {};

    for (const field of meta.input_schema.required) {
      if (field.type === "array") {
        shape[field.field] = z.string().describe(
          `${field.description} (Komma-getrennte Liste)`
        );
      } else {
        shape[field.field] = z.string().describe(field.description);
      }
    }

    if (meta.input_schema.optional) {
      for (const field of meta.input_schema.optional) {
        if (field.type === "array") {
          shape[field.field] = z
            .string()
            .optional()
            .describe(`${field.description} (Komma-getrennte Liste, optional)`);
        } else {
          shape[field.field] = z
            .string()
            .optional()
            .describe(`${field.description} (optional)`);
        }
      }
    }

    const evidenceLabel = meta.evidence_strength
      ? ` [Evidenz: ${meta.evidence_strength}]`
      : "";
    const toolDescription = `${meta.skill_name} — ${skill.description}${evidenceLabel}`;

    // Als MCP-Tool registrieren
    server.tool(
      skill.toolName,
      toolDescription,
      shape,
      async (args) => {
        const assembled = assemblePrompt(skill, args);
        const framed = framePrompt(skill, assembled);
        return {
          content: [{ type: "text", text: framed }],
        };
      }
    );

    // Als MCP-Prompt registrieren
    // Zod-Schema für Prompt-Argumente bauen (gleich wie Tool-Schema)
    const promptShape: Record<string, z.ZodTypeAny> = {};
    for (const f of meta.input_schema.required) {
      promptShape[f.field] = z.string().describe(f.description);
    }
    if (meta.input_schema.optional) {
      for (const f of meta.input_schema.optional) {
        promptShape[f.field] = z.string().optional().describe(f.description);
      }
    }

    server.prompt(
      `prompt-${skill.toolName}`,
      `[Prompt] ${meta.skill_name} — ${skill.description}`,
      promptShape,
      async (args) => {
        const assembled = assemblePrompt(skill, args);
        return {
          messages: [
            {
              role: "user" as const,
              content: {
                type: "text" as const,
                text: assembled,
              },
            },
          ],
        };
      }
    );
  }

  console.error(
    `Server registriert: ${skills.length} Skill-Tools + ${skills.length} Prompts + 4 Meta-Tools`
  );

  return server;
}
