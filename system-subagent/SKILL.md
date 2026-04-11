---
name: system-subagent
description: >
  Zerlege jede gegebene Aufgabe zwingend in parallele Subagents und verteile die Arbeit. 
  Verwende diesen Skill IMMER wenn der Nutzer "/subagent" schreibt, "mit Subagents", 
  "parallel ausführen", "Arbeit aufteilen", "mehrere Agents", "subagent task", 
  "multi-agent", "verteile die Aufgabe" oder ähnliche Formulierungen verwendet. 
  Auch triggern bei: "mach das mit Subagents", "nutze Agents", "parallele Ausführung", 
  "lass Agents arbeiten". Dieser Skill ist PFLICHT in Claude Cowork und Claude Code — 
  er erzwingt die Verwendung von Subagents und verhindert, dass Claude die Aufgabe 
  alleine (single-agent) löst.
compatibility: "Subagents erforderlich: Claude Cowork oder Claude Code"
---

# Subagent Orchestrator Skill

**Zweck:** Dieser Skill erzwingt, dass Claude jede Aufgabe durch Subagents löst. 
Single-Agent-Ausführung ist verboten, solange eine sinnvolle Zerlegung möglich ist.

---

## Pflichtprozess — immer in dieser Reihenfolge

### Schritt 1: Aufgabe analysieren (Orchestrator)

Lies die Aufgabe vollständig. Beantworte intern:

1. Was ist das **Ziel** der Aufgabe? (Output)
2. Welche **Teilaufgaben** sind logisch trennbar?
3. Welche Teilaufgaben können **parallel** laufen (keine Abhängigkeit untereinander)?
4. Welche brauchen ein **sequentielles** Ergebnis als Input?
5. Wie sieht der **finale Merge-Schritt** aus?

> ⚠️ **Minimum**: Mindestens 2 Subagents. Ausnahme: Aufgabe ist atomisch und nicht weiter teilbar (dann explizit begründen, warum kein Split möglich ist).

---

### Schritt 2: Zerlegungsplan ausgeben

Präsentiere dem Nutzer vor der Ausführung einen klaren Plan:

```
SUBAGENT-PLAN
═══════════════════════════════════════
Aufgabe: [kurze Beschreibung]

PARALLELE SUBAGENTS:
  Agent A — [Teilaufgabe A]
  Agent B — [Teilaufgabe B]
  Agent C — [Teilaufgabe C, optional]

SEQUENTIELLE SUBAGENTS (nach Parallelphase):
  Agent D — [Merge/Synthese/Validierung]

MERGE-STRATEGIE:
  [Wie werden die Outputs zusammengeführt?]
═══════════════════════════════════════
→ Starte Ausführung? [ja/nein]
```

Warte auf Bestätigung des Nutzers — ausser er hat bereits `/subagent auto` geschrieben (dann direkt ausführen).

---

### Schritt 3: Subagents spawnen

#### Parallele Agents (gleichzeitig starten)

Starte alle unabhängigen Agents **gleichzeitig**. Jeder Agent erhält:

```
SYSTEM PROMPT FÜR SUBAGENT:
Du bist Subagent [Buchstabe] im Rahmen einer Multi-Agent-Aufgabe.
Deine spezifische Teilaufgabe: [exakte Beschreibung]
Kontext aus Hauptaufgabe: [relevante Infos]
Output-Format: [klar definiert]
Gib NUR dein Ergebnis zurück. Kein Smalltalk, keine Erklärungen zur Methode.
```

#### Sequentielle Agents (nach Abschluss der Parallelphase)

Übergib die aggregierten Outputs als Kontext:

```
Du erhältst die Outputs von [Agent A, B, C].
Deine Aufgabe: [Synthese/Review/Formatierung]
Outputs: [vollständige Subagent-Ergebnisse]
```

---

### Schritt 4: Ergebnisse zusammenführen

Der Orchestrator (= Claude selbst, nicht ein Subagent) übernimmt den finalen Merge:

- Prüfe Konsistenz zwischen den Subagent-Outputs
- Löse Konflikte oder Widersprüche auf
- Formatiere das Endergebnis gemäss der ursprünglichen Anforderung
- Füge einen kurzen **Agent-Report** an (optional, aber empfohlen):

```
AGENT-REPORT
  Agent A ✓  [1-Satz-Zusammenfassung]
  Agent B ✓  [1-Satz-Zusammenfassung]
  Agent C ✓  [1-Satz-Zusammenfassung]
  Merge   ✓  [Wie zusammengeführt]
```

---

## Aufgabentypen und Zerlegungsmuster

| Aufgabentyp | Empfohlene Zerlegung |
|---|---|
| Dokument erstellen | Agent pro Abschnitt / Kapitel |
| Code schreiben | Agent pro Modul / Datei / Feature |
| Recherche | Agent pro Quelle / Themenbereich |
| Datenanalyse | Agent pro Datensatz / Dimension |
| Bewertung / Review | Agent pro Kriterium |
| Mehrsprachige Inhalte | Agent pro Sprache |
| Vergleichsaufgabe | Agent pro zu vergleichendem Objekt |
| Planung | Agent pro Phase / Bereich |

---

## Verbotene Verhaltensweisen

- ❌ Aufgabe alleine lösen ohne Subagents (wenn Split möglich)
- ❌ Subagent-Plan überspringen (ausser `/subagent auto`)
- ❌ Nur einen Subagent spawnen
- ❌ Subagents mit unklarem oder zu breitem Scope beauftragen
- ❌ Merge-Schritt weglassen

---

## Sonderbefehle

| Befehl | Verhalten |
|---|---|
| `/subagent` | Normaler Flow mit Plan + Bestätigung |
| `/subagent auto` | Direkt ausführen ohne Bestätigung |
| `/subagent plan` | Nur Plan anzeigen, nicht ausführen |
| `/subagent N` | Genau N Subagents erzwingen (z.B. `/subagent 4`) |

---

## Hinweis zu Umgebungen

- **Claude Cowork**: Volle Subagent-Unterstützung ✓
- **Claude Code**: Volle Subagent-Unterstützung ✓  
- **Claude.ai (Chat)**: Kein nativer Subagent-Support — Skill simuliert den Ablauf sequentiell und gibt explizit an, was in einer Subagent-Umgebung parallel laufen würde.
