/**
 * Skill-Loader: Liest SKILL.md-Dateien, parst YAML-Frontmatter,
 * extrahiert Prompts und registriert Skills.
 *
 * Unterstützt zwei Ordnerstrukturen:
 * - Flach: domain/SKILL.md (z.B. schule-kommunikation/SKILL.md)
 * - Verschachtelt: domain/skill-name/SKILL.md (z.B. schule-ki-lernen/adaptiver-tutor/SKILL.md)
 */

import { readFile, readdir, stat } from "fs/promises";
import { join, relative, dirname, basename } from "path";
import matter from "gray-matter";
import type { SkillMetadata, LoadedSkill } from "./types.js";

/**
 * Findet alle SKILL.md-Dateien rekursiv in einem Verzeichnis.
 */
async function findSkillFiles(dir: string): Promise<string[]> {
  const files: string[] = [];

  async function walk(currentDir: string, depth: number = 0): Promise<void> {
    // Maximal 3 Ebenen tief suchen
    if (depth > 3) return;

    const entries = await readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith(".") && entry.name !== "node_modules" && entry.name !== "mcp-server") {
        await walk(fullPath, depth + 1);
      } else if (entry.isFile() && entry.name === "SKILL.md") {
        files.push(fullPath);
      }
    }
  }

  await walk(dir);
  return files;
}

/**
 * Extrahiert den Prompt-Abschnitt aus dem Markdown-Content.
 * Sucht nach ## Prompt, ## Instructions, oder dem grössten Abschnitt.
 */
function extractPrompt(content: string): string {
  // Suche nach ## Prompt oder ## Instructions Abschnitt
  const promptHeaders = [
    /^##\s+Prompt\s*$/im,
    /^##\s+Instructions?\s*$/im,
    /^##\s+System\s*Prompt\s*$/im,
    /^##\s+Anweisungen?\s*$/im,
  ];

  for (const headerRegex of promptHeaders) {
    const match = content.match(headerRegex);
    if (match && match.index !== undefined) {
      const afterHeader = content.slice(match.index + match[0].length);
      // Alles bis zum nächsten ## Header oder Ende
      const nextHeader = afterHeader.search(/^##\s+/m);
      const section = nextHeader === -1
        ? afterHeader.trim()
        : afterHeader.slice(0, nextHeader).trim();

      // Code-Block extrahieren falls vorhanden
      const codeBlock = section.match(/```[\s\S]*?\n([\s\S]*?)```/);
      if (codeBlock) return codeBlock[1].trim();

      return section;
    }
  }

  // Fallback: Gesamten Content als Prompt verwenden (nach erstem Header)
  const firstHeader = content.search(/^#\s+/m);
  if (firstHeader !== -1) {
    return content.slice(firstHeader).trim();
  }

  return content.trim();
}

/**
 * Extrahiert eine kurze Beschreibung aus dem Content.
 */
function extractDescription(content: string, metadata: Partial<SkillMetadata>): string {
  // Zuerst aus Metadata
  if (metadata.description) return metadata.description;

  // Dann aus ## Was dieser Skill leistet / ## What This Skill Does
  const descHeaders = [
    /^##\s+Was dieser Skill leistet\s*$/im,
    /^##\s+What This Skill Does\s*$/im,
    /^##\s+Overview\s*$/im,
    /^##\s+Übersicht\s*$/im,
  ];

  for (const headerRegex of descHeaders) {
    const match = content.match(headerRegex);
    if (match && match.index !== undefined) {
      const afterHeader = content.slice(match.index + match[0].length);
      const nextHeader = afterHeader.search(/^##\s+/m);
      const section = nextHeader === -1
        ? afterHeader.trim()
        : afterHeader.slice(0, nextHeader).trim();
      // Ersten Satz nehmen
      const firstSentence = section.split(/[.\n]/)[0]?.trim();
      if (firstSentence) return firstSentence;
    }
  }

  return metadata.skill_name || metadata.name || "Bildungs-Skill";
}

/**
 * Generiert eine skill_id aus dem Dateipfad, falls nicht im YAML vorhanden.
 */
function deriveSkillId(filePath: string, baseDir: string): string {
  const rel = relative(baseDir, dirname(filePath));
  return rel.replace(/\\/g, "/");
}

/**
 * Generiert einen Tool-Namen aus der skill_id.
 */
function buildToolName(skillId: string, existingSlugs: Set<string>): string {
  const parts = skillId.split("/");
  const slug = parts[parts.length - 1];

  if (!existingSlugs.has(slug)) {
    existingSlugs.add(slug);
    return slug;
  }

  // Bei Duplikaten: domain__slug
  const fullName = parts.join("__");
  existingSlugs.add(fullName);
  return fullName;
}

/**
 * Erstellt Standard-Input-Schema für Skills ohne YAML-Schema.
 */
function defaultInputSchema(): SkillMetadata["input_schema"] {
  return {
    required: [
      {
        field: "aufgabe",
        type: "string",
        description: "Die Aufgabe oder Anfrage an den Skill",
      },
    ],
    optional: [
      {
        field: "kontext",
        type: "string",
        description: "Zusätzlicher Kontext (Fach, Klasse, Niveau)",
      },
    ],
  };
}

/**
 * Domänen-Prefixe, die NICHT als MCP-Tools exponiert werden.
 * System- und Dokument-Skills sind persönliche Workflow-Tools
 * und nicht für andere Nutzer:innen gedacht.
 */
const EXCLUDED_PREFIXES = ["system-", "dokument-", "content-", "buch-"];

function isExcluded(skillId: string): boolean {
  const slug = skillId.split("/").pop() || skillId;
  const domain = skillId.split("/")[0];
  return EXCLUDED_PREFIXES.some(
    (prefix) => domain.startsWith(prefix) || slug.startsWith(prefix)
  );
}

/**
 * Lädt alle Skills aus einem Verzeichnis.
 * Schliesst System-, Dokument- und Content-Skills aus.
 */
export async function loadSkills(baseDir: string): Promise<LoadedSkill[]> {
  const skillFiles = await findSkillFiles(baseDir);
  const skills: LoadedSkill[] = [];
  const existingSlugs = new Set<string>();

  for (const filePath of skillFiles) {
    try {
      const raw = await readFile(filePath, "utf-8");
      const { data, content } = matter(raw);
      const metadata = data as Partial<SkillMetadata>;

      // skill_id ableiten falls nicht vorhanden
      const skillId = metadata.skill_id || deriveSkillId(filePath, baseDir);

      // System-, Dokument- und Content-Skills ausschliessen
      if (isExcluded(skillId)) {
        continue;
      }

      // Input-Schema: vorhanden oder Standard
      const inputSchema = metadata.input_schema || defaultInputSchema();

      // Tags ableiten falls nicht vorhanden
      const tags = metadata.tags || [metadata.domain || skillId.split("/")[0]];

      // Vollständige Metadata zusammensetzen
      const fullMetadata: SkillMetadata = {
        name: metadata.name || skillId.split("/").pop() || "unknown",
        description: metadata.description || "",
        "disable-model-invocation": metadata["disable-model-invocation"] ?? false,
        "user-invocable": metadata["user-invocable"] ?? true,
        effort: metadata.effort || "medium",
        skill_id: skillId,
        skill_name: metadata.skill_name || metadata.name || skillId.split("/").pop() || "Unknown Skill",
        domain: metadata.domain || skillId.split("/")[0],
        version: metadata.version || "1.0",
        evidence_strength: metadata.evidence_strength,
        evidence_sources: metadata.evidence_sources,
        input_schema: inputSchema,
        output_schema: metadata.output_schema,
        chains_well_with: metadata.chains_well_with,
        teacher_time: metadata.teacher_time,
        tags,
      };

      const prompt = extractPrompt(content);
      const description = extractDescription(content, fullMetadata);
      const toolName = buildToolName(skillId, existingSlugs);

      skills.push({
        metadata: fullMetadata,
        prompt,
        description,
        filePath,
        toolName,
      });
    } catch (err) {
      console.error(`Fehler beim Laden von ${filePath}:`, err);
    }
  }

  console.error(`${skills.length} Skills geladen aus ${baseDir}`);
  return skills;
}
