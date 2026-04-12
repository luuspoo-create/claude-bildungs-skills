# MCP Server — Claude Bildungs-Skills

MCP-Server für 87 Schweizer Bildungs-Skills (Lehrplan 21). Jeder Skill wird als MCP-Tool registriert, das Claude direkt aufrufen kann.

## Für Nutzer:innen

**Installation in Claude Desktop / Claude.ai:**

Füge diese URL in deine MCP-Settings ein:
```
https://claude-bildungs-skills.vercel.app/mcp
```

Fertig. Alle Skills sind sofort verfügbar.

**Was du bekommst:**
- 87+ Bildungs-Skills als aufrufbare Tools
- 4 Meta-Tools zum Suchen und Entdecken:
  - `list_skills` — Alle Skills nach Domäne gruppiert
  - `find_skills` — Suche nach Stichwort, Domäne oder Tag
  - `suggest_skills` — Beschreibe ein Problem, erhalte Vorschläge
  - `get_skill_details` — Vollständige Details zu einem Skill

## Für Entwickler:innen

### Lokale Entwicklung

```bash
cd mcp-server
npm install
npm run dev          # Startet stdio-Transport
```

### Build & Bundle

```bash
npm run bundle-skills   # Parst alle SKILL.md → skills.json
npm run build           # Kompiliert TypeScript → dist/
```

### Deployment (Vercel)

```bash
vercel deploy --prod
```

### Architektur

```
mcp-server/
├── src/
│   ├── index.ts          # Entry Point (stdio)
│   ├── server.ts         # MCP-Server-Registrierung
│   ├── skill-loader.ts   # SKILL.md Parser (YAML + Prompt)
│   ├── tool-handler.ts   # Prompt-Assembly + Meta-Tools
│   ├── types.ts          # TypeScript-Interfaces
│   └── skills.json       # Pre-bundled (generiert)
├── api/
│   └── mcp.ts            # Vercel Serverless (HTTP)
├── scripts/
│   └── bundle-skills.ts  # Build-Script
├── vercel.json
└── package.json
```

### Skill-Format

Jede SKILL.md braucht YAML-Frontmatter mit mindestens:

```yaml
---
name: mein-skill
description: "Was der Skill macht"
skill_id: "domain/skill-name"
skill_name: "Mein Skill"
domain: "schule-ki-lernen"
version: "1.0"
input_schema:
  required:
    - field: "thema"
      type: "string"
      description: "Das Unterrichtsthema"
tags: ["tag1", "tag2"]
---
```

## Lizenz

CC BY-SA 4.0 — Lucca Spohn
