/**
 * TypeScript-Interfaces für den Bildungs-Skills MCP Server.
 * Basiert auf dem Schema von GarethManning/claude-education-skills,
 * angepasst für deutschsprachige Schweizer Bildungs-Skills.
 */

export interface SchemaField {
  field: string;
  type: string;
  description: string;
}

export interface InputSchema {
  required: SchemaField[];
  optional?: SchemaField[];
}

export interface OutputSchema {
  type: string;
  fields: SchemaField[];
}

export interface SkillMetadata {
  // Agent Skills v2 Standard Fields
  name: string;
  description: string;
  "disable-model-invocation"?: boolean;
  "user-invocable"?: boolean;
  effort?: string;

  // Skill-spezifische Felder
  skill_id: string;
  skill_name: string;
  domain: string;
  version: string;
  evidence_strength?: "strong" | "moderate" | "emerging" | "original" | "practitioner";
  evidence_sources?: string[];
  input_schema: InputSchema;
  output_schema?: OutputSchema;
  chains_well_with?: string[];
  teacher_time?: string;
  tags: string[];
  license?: string;
}

export interface LoadedSkill {
  metadata: SkillMetadata;
  prompt: string;
  description: string;
  filePath: string;
  toolName: string;
}

export interface BundledSkill {
  metadata: SkillMetadata;
  prompt: string;
  description: string;
  toolName: string;
}

/**
 * Domänen-Mapping für die deutschsprachigen Kategorien.
 */
export const DOMAIN_LABELS: Record<string, string> = {
  "schule-direkte-instruktion": "Direkte Instruktion",
  "schule-erfahrungslernen": "Erfahrungslernen",
  "schule-fragetechniken": "Fragetechniken & Diskussion",
  "schule-interkulturelle-paedagogik": "Interkulturelle Pädagogik",
  "schule-ki-lernen": "KI-gestütztes Lernen",
  "schule-kommunikation": "Schulkommunikation",
  "schule-lehrmittel": "Lehrmittel",
  "schule-lehrplan-beurteilung": "Lehrplan & Beurteilung",
  "schule-lernwissenschaft": "Lernwissenschaft & Gedächtnis",
  "schule-medienkompetenz": "Medienkompetenz & kritisches Denken",
  "schule-selbstregulation": "Selbstreguliertes Lernen",
  "schule-sprachfoerderung": "Sprachförderung & DaZ",
  "schule-weiterbildung": "Weiterbildung & Professionalisierung",
  "schule-wohlbefinden": "Wohlbefinden & Motivation",
  "dokument": "Dokumenterstellung",
  "content": "Content-Erstellung",
  "system": "System & Workflow",
};
