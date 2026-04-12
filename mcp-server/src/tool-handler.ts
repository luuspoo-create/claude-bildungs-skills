/**
 * Tool-Handler: Prompt-Assembly und Meta-Tools.
 *
 * - assemblePrompt: Ersetzt {{Platzhalter}} mit Nutzer-Input
 * - Meta-Tools: list_skills, find_skills, suggest_skills, get_skill_details
 */

import type { LoadedSkill, BundledSkill, SkillMetadata } from "./types.js";
import { DOMAIN_LABELS } from "./types.js";

type AnySkill = LoadedSkill | BundledSkill;

/**
 * Ersetzt {{Platzhalter}} im Prompt mit den übergebenen Argumenten.
 */
export function assemblePrompt(skill: AnySkill, args: Record<string, unknown>): string {
  let prompt = skill.prompt;

  // Platzhalter ersetzen
  for (const [key, value] of Object.entries(args)) {
    const placeholder = new RegExp(`\\{\\{${key}\\}\\}`, "gi");
    const strValue = Array.isArray(value) ? JSON.stringify(value) : String(value);
    prompt = prompt.replace(placeholder, strValue);
  }

  // Nicht ausgefüllte optionale Platzhalter markieren
  prompt = prompt.replace(/\{\{[^}]+\}\}/g, "[nicht angegeben]");

  // Lehrer:innen-Input als Zusammenfassung anfügen
  const inputEntries = Object.entries(args).filter(([_, v]) => v !== undefined && v !== "");
  if (inputEntries.length > 0) {
    const inputSummary = inputEntries
      .map(([key, value]) => {
        const label = key
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        const strValue = Array.isArray(value) ? JSON.stringify(value) : String(value);
        return `**${label}:** ${strValue}`;
      })
      .join("\n");

    prompt = `${prompt}\n\n---\n\n## Eingaben der Lehrperson\n\n${inputSummary}`;
  }

  return prompt;
}

/**
 * Rahmt den assemblierten Prompt für die Tool-Ausgabe.
 */
export function framePrompt(skill: AnySkill, assembled: string): string {
  const meta = skill.metadata;
  const evidenceNote = meta.evidence_strength
    ? `\nEvidenzstärke: ${meta.evidence_strength}`
    : "";
  const sourcesNote = meta.evidence_sources?.length
    ? `\nQuellen: ${meta.evidence_sources.join("; ")}`
    : "";

  return `ANWEISUNGEN: Du führst jetzt einen Bildungs-Skill aus.

Skill: ${meta.skill_name}
Domäne: ${DOMAIN_LABELS[meta.domain] || meta.domain}${evidenceNote}${sourcesNote}

<skill_anweisungen>
${assembled}
</skill_anweisungen>

Erstelle nun die vollständige Ausgabe gemäss den Skill-Anweisungen.`;
}

// ─── Meta-Tools ───────────────────────────────────────────────

/**
 * list_skills: Listet alle Skills gruppiert nach Domäne.
 */
export function listSkills(skills: AnySkill[]): string {
  const grouped = new Map<string, AnySkill[]>();

  for (const skill of skills) {
    const domain = skill.metadata.domain;
    if (!grouped.has(domain)) grouped.set(domain, []);
    grouped.get(domain)!.push(skill);
  }

  const lines: string[] = [
    `# Bildungs-Skills (${skills.length} verfügbar)\n`,
  ];

  for (const [domain, domainSkills] of grouped) {
    const label = DOMAIN_LABELS[domain] || domain;
    lines.push(`\n## ${label} (${domainSkills.length})\n`);

    for (const skill of domainSkills) {
      const meta = skill.metadata;
      const evidence = meta.evidence_strength ? ` [${meta.evidence_strength}]` : "";
      const time = meta.teacher_time ? ` · ${meta.teacher_time}` : "";
      lines.push(`- **${meta.skill_name}** — ${skill.description}${evidence}${time}`);
    }
  }

  return lines.join("\n");
}

/**
 * find_skills: Sucht Skills nach Keyword, Domäne, Evidenzstärke oder Tag.
 */
export function findSkills(
  skills: AnySkill[],
  args: { query?: string; domain?: string; evidence_strength?: string; tag?: string }
): string {
  let results = [...skills];

  if (args.domain) {
    results = results.filter((s) => s.metadata.domain === args.domain);
  }

  if (args.evidence_strength) {
    results = results.filter((s) => s.metadata.evidence_strength === args.evidence_strength);
  }

  if (args.tag) {
    const tagLower = args.tag.toLowerCase();
    results = results.filter((s) =>
      s.metadata.tags.some((t) => t.toLowerCase().includes(tagLower))
    );
  }

  if (args.query) {
    const queryLower = args.query.toLowerCase();
    const queryTerms = queryLower.split(/\s+/);

    results = results
      .map((skill) => {
        const searchText = [
          skill.metadata.skill_name,
          skill.description,
          ...skill.metadata.tags,
          skill.metadata.domain,
        ]
          .join(" ")
          .toLowerCase();

        const score = queryTerms.reduce((acc, term) => {
          return acc + (searchText.includes(term) ? 1 : 0);
        }, 0);

        return { skill, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((r) => r.skill);
  }

  if (results.length === 0) {
    return "Keine Skills gefunden. Versuche andere Suchbegriffe oder nutze list_skills für eine Übersicht.";
  }

  const lines = [`# Suchergebnisse (${results.length} Skills)\n`];
  for (const skill of results.slice(0, 20)) {
    const meta = skill.metadata;
    const evidence = meta.evidence_strength ? ` [${meta.evidence_strength}]` : "";
    lines.push(`- **${meta.skill_name}** (${meta.domain})${evidence}`);
    lines.push(`  ${skill.description}`);
    if (meta.tags.length > 0) {
      lines.push(`  Tags: ${meta.tags.slice(0, 5).join(", ")}`);
    }
  }

  return lines.join("\n");
}

/**
 * suggest_skills: Schlägt 3–5 Skills basierend auf einer Problembeschreibung vor.
 */
export function suggestSkills(skills: AnySkill[], problem: string): string {
  const problemLower = problem.toLowerCase();
  const terms = problemLower.split(/\s+/).filter((t) => t.length > 2);

  const scored = skills
    .map((skill) => {
      const searchText = [
        skill.metadata.skill_name,
        skill.description,
        ...skill.metadata.tags,
        skill.metadata.domain,
        ...(skill.metadata.evidence_sources || []),
      ]
        .join(" ")
        .toLowerCase();

      let score = 0;
      for (const term of terms) {
        if (searchText.includes(term)) score += 1;
        // Bonus für Treffer im Skill-Namen
        if (skill.metadata.skill_name.toLowerCase().includes(term)) score += 2;
      }

      return { skill, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (scored.length === 0) {
    return `Keine passenden Skills für "${problem}" gefunden. Beschreibe dein Problem genauer oder nutze find_skills mit Stichworten.`;
  }

  const lines = [`# Vorgeschlagene Skills für: "${problem}"\n`];
  for (const { skill, score } of scored) {
    const meta = skill.metadata;
    const evidence = meta.evidence_strength ? ` · Evidenz: ${meta.evidence_strength}` : "";
    const time = meta.teacher_time ? ` · ${meta.teacher_time}` : "";
    lines.push(`### ${meta.skill_name}`);
    lines.push(`${skill.description}${evidence}${time}`);
    lines.push(`Domäne: ${DOMAIN_LABELS[meta.domain] || meta.domain}`);
    if (meta.chains_well_with?.length) {
      lines.push(`Kombiniert gut mit: ${meta.chains_well_with.join(", ")}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

/**
 * get_skill_details: Vollständige Metadaten für einen einzelnen Skill.
 */
export function getSkillDetails(skills: AnySkill[], skillId: string): string {
  const skill = skills.find(
    (s) => s.metadata.skill_id === skillId || s.toolName === skillId || s.metadata.name === skillId
  );

  if (!skill) {
    return `Skill "${skillId}" nicht gefunden. Nutze list_skills oder find_skills um verfügbare Skills zu sehen.`;
  }

  const meta = skill.metadata;
  const lines = [
    `# ${meta.skill_name}`,
    "",
    `**Skill-ID:** ${meta.skill_id}`,
    `**Domäne:** ${DOMAIN_LABELS[meta.domain] || meta.domain}`,
    `**Version:** ${meta.version}`,
    meta.evidence_strength ? `**Evidenzstärke:** ${meta.evidence_strength}` : null,
    meta.teacher_time ? `**Geschätzte Zeit:** ${meta.teacher_time}` : null,
    meta.effort ? `**Aufwand:** ${meta.effort}` : null,
    "",
    `## Beschreibung`,
    skill.description,
    "",
  ];

  if (meta.evidence_sources?.length) {
    lines.push("## Evidenzquellen");
    for (const source of meta.evidence_sources) {
      lines.push(`- ${source}`);
    }
    lines.push("");
  }

  lines.push("## Input-Schema");
  lines.push("### Erforderlich:");
  for (const field of meta.input_schema.required) {
    lines.push(`- **${field.field}** (${field.type}): ${field.description}`);
  }
  if (meta.input_schema.optional?.length) {
    lines.push("### Optional:");
    for (const field of meta.input_schema.optional) {
      lines.push(`- **${field.field}** (${field.type}): ${field.description}`);
    }
  }

  if (meta.output_schema?.fields?.length) {
    lines.push("");
    lines.push("## Output-Schema");
    for (const field of meta.output_schema.fields) {
      lines.push(`- **${field.field}** (${field.type}): ${field.description}`);
    }
  }

  if (meta.chains_well_with?.length) {
    lines.push("");
    lines.push("## Kombiniert gut mit");
    for (const chain of meta.chains_well_with) {
      lines.push(`- ${chain}`);
    }
  }

  if (meta.tags.length > 0) {
    lines.push("");
    lines.push(`## Tags`);
    lines.push(meta.tags.join(", "));
  }

  return lines.filter((l) => l !== null).join("\n");
}
