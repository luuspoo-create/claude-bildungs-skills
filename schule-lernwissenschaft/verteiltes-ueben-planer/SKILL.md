---
# AGENT SKILLS STANDARD FIELDS (v2)
name: verteiltes-ueben-planer
description: "Entwirf einen verteilten Abruf-Schedule für beliebige Themen-Listen und Zeitrahmen. Nutze diesen Skill bei Unit-Planung, Term-Sequenzen oder Revisions-Programmen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lernwissenschaft/verteiltes-ueben-planer"
skill_name: "Verteiltes Üben — Schedule-Ersteller"
domain: "schule-lernwissenschaft"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Ebbinghaus (1885/1913) — The forgetting curve: exponential decay of memory without review"
  - "Cepeda et al. (2006) — Meta-analysis of 254 studies on distributed practice: optimal spacing depends on retention interval"
  - "Kornell & Bjork (2008) — Spacing and interleaving effects on learning"
  - "Carpenter et al. (2012) — Using spacing to enhance diverse forms of learning"
  - "Dunlosky et al. (2013) — Distributed practice rated high-utility learning strategy"
input_schema:
  required:
    - field: "themen"
      type: "array"
      description: "Liste Themen oder Konzepte, die über Schedule verteilt werden"
    - field: "zeitrahmen"
      type: "string"
      description: "Verfügbare Lehr-Periode (z.B. „6-Wochen-Halbjahr" oder „Term 2: 15. Jan – 28. März")"
    - field: "lektionen_pro_woche"
      type: "integer"
      description: "Anzahl Lektionen pro Woche für dieses Fach"
  optional:
    - field: "pruefungsdatum"
      type: "string"
      description: "Datum summative Bewertung, wenn bekannt — beeinflusst finale Spacing-Intervale"
    - field: "themen_schwierigkeit"
      type: "array"
      description: "LPs Schätzung relativer Schwierigkeit je Thema (hoch/mittel/niedrig)"
    - field: "lehrplan_sequenz"
      type: "array"
      description: "Aus Kontext-Engine: vorgeschriebene Unterrichts-Reihenfolge oder Voraussetzungs-Abhängigkeiten"
    - field: "sus_profile"
      type: "array"
      description: "Aus Kontext-Engine: Klasse-Behalt-Daten von früheren Bewertungen"
output_schema:
  type: "object"
  fields:
    - field: "schedule"
      type: "array"
      description: "Woche-für-Woche-Schedule mit neuem Unterricht und verteilten Review-Slots"
    - field: "spacing_begruendung"
      type: "string"
      description: "Erklärung, warum Themen in diesen Intervalen verteilt sind"
    - field: "uebungs_aktivitaets_vorschlaege"
      type: "array"
      description: "Kurze Abruf-Aktivitäten für jeden Review-Slot"
    - field: "lehrer_leitfaden"
      type: "string"
      description: "Wie man den Schedule umsetzt und basierend auf SuS-Reaktion anpasst"
chains_well_with:
  - "abrufuebungen-generator"
  - "verschraenktes-lernen"
  - "formative-bewertungs-methoden-auswahl"
  - "lektionsoeeffner-designer"
teacher_time: "5 Minuten"
tags: ["verteilung", "gedaechtnis", "planung", "vergessensfunktion", "verteilte-praxis", "lernwissenschaft"]
---

# Verteiltes Üben — Schedule-Ersteller

## Was dieser Skill leistet

Nimmt eine Liste Themen und einen Lehr-Zeitrahmen und generiert einen optimierten Review-Schedule, der Abruf-Gelegenheiten in expandierenden Intervalen verteilt, um die Vergessensfunktion zu bekämpfen. Die Ausgabe ist ein Woche-für-Woche-Plan zeigend, wann man neuen Inhalt einführt und wann man zu früheren Themen zurückkehrt, mit spezifischen Aktivitäts-Vorschlägen für jeden Review-Slot. KI ist besonders wertvoll, weil das Berechnen optimaler Spacing-Intervale über mehrere Themen während Einhaltung von Voraussetzungs-Abhängigkeiten und Stundenplan-Constraints genuinely komplex ist — die meisten LPs defaulten zu Blockweise-Arbeit (beende Thema A, gehe zu Thema B, kehr nie zurück), weil die kognitive Last von manueller Spacing-Planung zu hoch ist.

## Evidenzgrundlage

Ebbinghaus (1885/1913) demonstrierte zuerst, dass Gedächtnis eine exponentielle Zerfalls-Kurve folgt — ohne Review, circa 70% von neuem Lernen geht verloren in 24 Stunden. Cepeda et al. (2006) führten Meta-Analyse von 254 Studien durch und etablierten, dass das optimale Gap zwischen Lern-Sessionen von gewünschtem Behalt-Intervall abhängt: ungefähr 10–20% des Behalt-Intervalls ist optimal (z.B., wenn man SuS brauchst, etwas 30 Tage zu merken, verteile Reviews circa 3–6 Tage auseinander). Carpenter et al. (2012) erweiterten Funde zu diversen Klassenzimmer-Lern-Kontexten, zeigend, dass verteilte Arbeit Faktenwissen, prozedurale Fähigkeiten und Problemlösung profitiert. Kornell & Bjork (2008) demonstrierten, dass Spacing sich weniger effektiv anfühlt für Lernende — SuS bewerteten Massed-Arbeit als effektiver selbst wenn verteilte Arbeit besseren Behalt produzierte. Das bedeutet, LPs sollten erwarten, dass SuS initial den weniger effektiven Ansatz (und fordern). Dunlosky et al. (2013) bewertete verteilte Arbeit als eine von nur zwei „hohe Nützlichkeit"-Strategien in ihrer umfassenden Überprüfung.

## Input-Schema

Die Lehrperson (LP) muss bereitstellen:
- **Themen:** Liste Themen zu verteilen. *z.B. ["Zellstruktur", "Zell-Transport", "Zellteilung", "Enzyme", "Biologische Moleküle"]*
- **Zeitrahmen:** Die verfügbare Lehr-Periode. *z.B. „8-Wochen-Term, ab 3. Februar"*
- **Lektionen pro Woche:** Wie viele Lektionen pro Woche. *z.B. 3*

Optional (injiziert durch Kontext-Engine wenn verfügbar):
- **Prüfungsdatum:** Wann die summative Bewertung fällt — verankert finale Review-Zyklus
- **Themen-Schwierigkeit:** LP-Schätzung relativer Schwierigkeit je Thema, damit schwere Themen mehr Review-Slots erhalten
- **Lehrplan-Sequenz:** Vorgeschriebene Reihenfolge oder Voraussetzungs-Constraints
- **SuS-Profile:** Klasse-Behalt-Daten von früheren Bewertungen

## Prompt

```
Du bist ein Experte in kognitiver Psychologie des Gedächtnisses, spezialisiert auf Spacing-Effekt und verteilte Praxis. Du kennst Cepeda et al.'s (2006) Meta-Analyse zu optimalen Inter-Lern-Intervalen, Ebbinghaus's Vergessensfunktion und Carpenter et al.'s (2012) Arbeit zu Spacing in Bildungs-Kontexten.

Deine Aufgabe: Generiere einen verteilten Abruf-Schedule für:

**Themen:** {{themen}}
**Zeitrahmen:** {{zeitrahmen}}
**Lektionen pro Woche:** {{lektionen_pro_woche}}

Der folgende optionale Kontext kann bereitgestellt werden. Nutze, was verfügbar ist; ignoriere fehlende Felder.

**Prüfungsdatum:** {{pruefungsdatum}} — wenn angegeben, stelle sicher, dass alle Themen mindestens eine Abruf-Gelegenheit in der finalen Woche vor Prüfung haben. Falls nicht, designe den Schedule für Langzeit-Behalt ohne spezifisches Zieldatum.
**Themen-Schwierigkeit-Bewertungen:** {{themen_schwierigkeit}} — wenn angegeben, allokiere mehr Review-Slots zu schwer-Themen. Falls nicht, behandle alle Themen als ungefähr gleich schwierig, es sei denn Fachwissen suggeriert anders.
**Benötigte Unterrichts-Reihenfolge:** {{lehrplan_sequenz}} — wenn angegeben, respektiere Voraussetzungs-Abhängigkeiten. Falls nicht, nimm an, Themen können in Order unterrichtet werden gelistet.
**Klasse-Behalt-Daten:** {{sus_profile}} — wenn angegeben, gewichte zusätzlich Review zu Themen, wo frühe Daten zeigt schwach Behalt. Falls nicht, nutze Standard expandierende Spacing-Intervale.

Wende diese evidenzbasierten Prinzipien an:

1. **Expandierende Intervale:** Space Review in wachsenden Intervalen — erstes Review in 1–3 Tagen nach Initial-Unterricht, zweites Review in 1–2 Wochen, drittes Review in 3–4 Wochen. Das folgt Cepeda et al.'s (2006) Finde, dass optimales Spacing expandiert as Behalt stärkt.

2. **Review durch Abruf, nicht Relehren:** Jeder Review-Slot sollte eine Abruf-Aktivität beinhalten (Quiz, brain dump, Diagramm aus Gedächtnis), NICHT Relehren oder Relesen. Das Lernen geschieht durch den Abruf-Versuch (Roediger & Butler, 2011).

3. **Neuer Unterricht zum Review-Verhältnis:** In irgendeiner Lektion, ungefähr 10–15 Minuten sollte für Abruf von früher Gelerntem verfügbar sein (normalerweise der Lektionsöffner). Neuer Inhalt nimmt die Hauptunterrichts-Portion.

4. **Verschränkung wo angemessen:** Wenn Themen eine Domäne teilen, mische Review-Fragen aus verschiedenen Themen in die gleiche Abruf-Session. Das produziert einen Verschränkungs-Effekt (Rohrer et al., 2015), der Diskrimination zwischen ähnlichen Konzepten verbessert.

5. **Schwierigkeits-gewichtete Spacing:** Themen, die schwierig geschätzt wurden, sollten häufigere Review-Slots erhalten. Themen mit strongem Initial-Encoding brauchen möglicherweise weniger.

6. **Prä-Bewertungs-Konsolidierung:** Wenn Prüfungsdatum angegeben, stelle sicher, jedes Thema hat mindestens eine Abruf-Gelegenheit in 5 Tagen vor Prüfung — aber NICHT cram all Review in finale Woche. Das untergräbt den Sinn von Spacing.

Gib deine Antwort in diesem Format aus:

## Verteilter Abruf-Schedule: [Fach/Kontext]

**Zeitrahmen:** [Start zu Ende]
**Themen:** [Liste]
**Total Lektionen:** [Zahl]

### Woche-für-Woche-Schedule

Für jede Woche, gib:
| Lektion | Neuer Inhalt | Verteilter Review (10–15 min Starter) |
|--------|-------------|--------------------------------------|
| [Tag]  | [Thema]    | [Welches früheres Thema(n) abrufen + kurz Aktivitäts-Typ] |

### Spacing-Begründung

Erkläre in 3–4 Sätzen, warum Themen in diesen spezifischen Intervalen verteilt sind, mit Evidenz-Referenzen.

### Review-Aktivitäts-Vorschläge

Für jeden Review-Slot, suggeriere eine spezifische kurze Abruf-Aktivität (nicht „review Thema X" aber „5 freie-Abruf-Fragen zu Zell-Transport-Mechanismen" oder „Diagramm Zellstruktur von Gedächtnis beschriften").

### Lehrer-Leitfaden

- Wie lang jeder Review-Starter sein sollte
- Was tun, wenn Review Lücken zeigt (Brief relehren vs. zusätzlicher Abruf terminieren)
- Wie Zweck zu SuS erklären (sie fühlen sich wie verteilte Arbeit ist weniger effektiv — das ist normal)

**Selbstkontrolle vor Antwort:** Verifiziere, dass (a) kein Thema geht länger als 3 Wochen ohne Abruf-Gelegenheit, (b) expandierende Intervale werden beibehalten, (c) schwere Themen erhalten mehr Review-Slots, (d) Schedule ist realistisch gegeben Lektionen-pro-Woche Constraint, (e) Review-Aktivitäten beinhalten Abruf, nicht Relesen/Relehren.
```

## Beispiel-Output

**Szenario:** *Themen: ["Tektonische Platten", "Erdbeben", "Vulkane", "Verwitterung & Erosion", "Flusslandschaften"] / Zeitrahmen: „6-Wochen-Halbjahr, 5 Lektionen pro Woche" / Lektionen pro Woche: 5 / Prüfungsdatum: „Ende Woche 6"*

---

## Verteilter Abruf-Schedule: 8. Klasse Geographie — Physische Landschaften

**Zeitrahmen:** Wochen 1–6 (30 Lektionen)
**Themen:** Tektonische Platten, Erdbeben, Vulkane, Verwitterung & Erosion, Flusslandschaften
**Total Lektionen:** 30

### Woche-für-Woche-Schedule

| Woche | Lektion | Neuer Inhalt | Verteilter Review Starter (10–15 min) |
|------|--------|-------------|--------------------------------------|
| 1 | 1 | Tektonische Platten — Erdstruktur | — (baseline assessment: was wissen SuS schon?) |
| 1 | 2 | Tektonische Platten — Plattengrenzen | Abruf: Zeichne Erdschichten von Gedächtnis, beschrifte und annotiere |
| 1 | 3 | Tektonische Platten — Konvektionsströme | Abruf: nenne 3 Plattengrenzen-Arten und ein Merkmal jeder |
| 1 | 4 | Erdbeben — Ursachen und Fokus/Epizentrum | Abruf: erkläre in 3 Sätzen, wie Konvektionsströme Plattenbewegung treiben |
| 1 | 5 | Erdbeben — Messung und Effekte | Abruf: zeichne und beschrifte Diagramm mit Fokus, Epizentrum und seismischen Wellen |
| 2 | 1 | Erdbeben — Fallstudien | Abruf: **Tektonische Platten** — 5 freie-Abruf-Fragen zu Plattengrenzen (erste Spacing, ~7 Tage) |
| 2 | 2 | Vulkane — Bildung und Arten | Abruf: vergleiche zwei Erdbeben-Fallstudien aus Gedächtnis — Ursachen, Effekte, Reaktionen |
| 2 | 3 | Vulkane — Eruptionsprozesse | Gemischter Abruf: 3 Fragen zu **tektonischen Platten** + 2 Fragen zu **Erdbeben-Messung** |
| 2 | 4 | Vulkane — Fallstudien | Abruf: zeichne Querschnitt eines Schicht-Vulkans aus Gedächtnis, beschrifte 5 Features |
| 2 | 5 | Vulkane — Leben mit Vulkan-Risiko | Abruf: **Erdbeben** voll Thema — „Schreib alles was du über Erdbeben in 5 Minuten weißt" (brain dump) |
| 3 | 1 | Verwitterung & Erosion — Verwitterungs-Arten | Gemischter Abruf: 4 Fragen, interleaved **tektonische Platten** und **Vulkane** (2 Wochen seit Tektonik — expandierendes Intervale) |
| 3 | 2 | Verwitterung & Erosion — Erosionsprozesse | Abruf: nenne und erkläre 3 Verwitterungs-Arten aus Gedächtnis |
| 3 | 3 | Verwitterung & Erosion — Erosion vs. Verwitterung | Abruf: **Vulkane** — leeres Diagramm: beschrifte vulkanische Features und erkläre Bildung |
| 3 | 4 | Flusslandschaften — Lang-Profil und Prozesse | Gemischter Abruf: unterscheide Verwitterung von Erosion + 2 Fragen zu **Erdbeben-Effekten** |
| 3 | 5 | Flusslandschaften — Oberkurs-Features | Abruf: **Verwitterung & Erosion** — erkläre 4 Arten von Fluss-Erosion aus Gedächtnis |
| 4 | 1 | Flusslandschaften — Mittelkurs-Features | Gemischter Abruf: 2 Fragen **tektonische Platten** + 2 Fragen **Vulkane** + 1 Frage **Verwitterung** (interleaved, ~3 Wochen seit Tektonik) |
| 4 | 2 | Flusslandschaften — Unterkurs-Features | Abruf: zeichne und annotiere das Lang-Profil eines Flusses aus Gedächtnis |
| 4 | 3 | Flusslandschaften — Überflutung | Abruf: **Erdbeben** — vergleiche zwei Fallstudien + erkläre eine Messskala |
| 4 | 4 | Flusslandschaften — Überflutungs-Management | Gemischter Abruf: 3 Fragen zu **Fluss-Prozessen** + 2 Fragen zu **Erosions-Arten** |
| 4 | 5 | Konsolidierung / Tiefe-Lektion | Volles interleaved Quiz: 10 Fragen über alle 5 Themen (2 je Thema, gemischte Reihenfolge) |
| 5 | 1 | Erweitert Schreiben: physische Prozesse vergleichen | Abruf: **Flusslandschaften** — skizziere Ober-/Mittel-/Unter-Kurs-Features aus Gedächtnis |
| 5 | 2 | Fallstudie Tiefe: gewähltes Thema | Gemischter Abruf: 5 Fragen interleaved **Vulkane**, **Verwitterung**, **Flüsse** |
| 5 | 3 | Verbindungen zwischen Themen | Abruf: **Tektonische Platten** — voller freier Abruf (4 Wochen seit Initial-Unterricht — kritischer Spacing-Punkt) |
| 5 | 4 | Prüfungs-Technik: Fallstudien nutzen | Gemischter Abruf: 6 Fragen über alle 5 Themen, fokus auf häufig verwechselte Konzepte |
| 5 | 5 | Praxis-Bewertung | Abruf: quick-fire 1-Minute-je-Frage über alle 5 Themen bevor Praxis-Bewertung |
| 6 | 1 | Review basierend auf Praxis-Bewertungs-Lücken | Gezielter Abruf zu schwächsten 2 Themen aus Praxis-Bewertungs-Daten |
| 6 | 2 | Gezielt Tiefe: schwächstes Thema | Abruf: zweitschwächstes Thema aus Praxis-Bewertung |
| 6 | 3 | Gezielt Tiefe: zweites schwächstes | Gemischter interleaved Abruf: alle 5 Themen, Fokus auf Lücken-Bereiche |
| 6 | 4 | Finale Konsolidierung | Volle brain dump: alles was du über alle 5 Themen in 12 Minuten weißt |
| 6 | 5 | **Bewertung** | — |

### Spacing-Begründung

Themen werden in expandierenden Intervalen verteilt, folgend Cepeda et al.'s (2006) Funde, dass optimale Gaps as Gedächtnis verstärkt wachsen. Tektonische Platten (zuerst unterrichtet) erhalten Abruf in Tagen 3, 7, 14, 21 und 28 — ein expandierendes Schedule. Jedes nachfolgende Thema folgt dem gleichen expandierenden Muster von seinem Unterrichts-Datum. Themen werden in Review-Sessions ab Woche 3 interleaved, produzierend sowohl Spacing als auch Verschränkungs-Vorteil. Die finalen zwei Wochen shift zu gemischtem Abruf über alle Themen, mit gezieltem Review getrieben von Praxis-Bewertungs-Daten in Woche 6.

### Review-Aktivitäts-Vorschläge

- **Brain dump:** „Schreib alles was du über [Thema] in 5 Minuten weißt. Keine Notizen." Meistfordernd — nutze für Themen 2+ Wochen nach Unterricht.
- **Leeres Diagramm:** „Zeichne und beschrifte [spezifisches Diagramm] aus Gedächtnis." Ausgezeichnet für räumliches/Prozess-Wissen.
- **Freie-Abruf-Fragen:** 5 kurze Fragen erfordernde schriftliche Antworten aus Gedächtnis. 8–10 Minuten.
- **Interleaved Quiz:** Mische Fragen aus 3+ Themen in zufälliger Reihenfolge. Erzwingt Diskrimination zwischen ähnlichen Konzepten.
- **Fehler-Korrektur:** Gib einen Absatz mit 3–4 absichtlichen Fehlern. SuS identifizieren und korrigieren aus Gedächtnis.

### Lehrer-Leitfaden

- Jeder Review-Starter sollte **10–15 Minuten maximal** nehmen. Es ersetzt einen traditionellen Lektionsöffner, nicht den Hauptunterricht.
- **Wenn Review Lücken zeigt:** Wenn mehr als 40% Klasse kann ein Konzept nicht abrufen, terminiere ein Brief relehren (5 Minuten) in nächster Lektion, dann retest 3 Tage später. Verlasse den Spacing-Schedule nicht für vollständiges Relehren.
- **Erkläre Zweck SuS:** „Das wird sich harder anfühlen als deine Notizen relesen, und du könntest denken, du lernst weniger. Das Gefühl ist tatsächlich ein Zeichen, dass dein Gehirn harder arbeitet — und harder Abruf baut stärkeres Gedächtnis. Die Forschung auf das ist sehr klar."
- **Grabe nicht Review-Starter.** Der Moment diese high-stakes werden, SuS fokussieren auf Performance statt Lernen, und der vorteilhafte Schwierigkeits-Effekt ist lost.

---

## Bekannte Grenzen

1. **Der Schedule setzt relativ ebene Themen-Länge an.** Wenn ein Thema 8 Lektionen neuer Unterricht benötigt und anderes 2, die Spacing-Intervale werden uneben. LPs brauchen anpassen Schedule basierend auf tatsächliche Themen-Gewicht — das Tool bietet einen Startrahmen, nicht einen rigid Plan.

2. **Optimale Spacing-Intervale von Cepeda et al. (2006) sind primär von Lab-Studien zu Verbal-Lernen abgeleitet.** Übertrag zu komplexen Prozedural-Fähigkeiten (z.B. mathematisches Problemlösen, Essay-Schreiben) ist weniger etabliert, obwohl Carpenter et al. (2012) unterstützende Klassenzimmer-Evidenz bieten.

3. **Der Schedule berücksichtigt nicht Schul-Unterbrechungen** (Versammlungen, Exkursionen, abgesagte Lektionen, LP-Fehlzeit). LPs sollten den Schedule als ein Ziel-Muster behandeln und Review-Slots verschieben, wenn Unterbrechungen passieren, statt sie ganz zu skippen.
