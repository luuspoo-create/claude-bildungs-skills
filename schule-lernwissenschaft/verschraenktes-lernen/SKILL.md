---
# AGENT SKILLS STANDARD FIELDS (v2)
name: verschraenktes-lernen
description: "Redesigne eine blockweise Themen-Sequenz in einen verschränkten Plan mit gemischter Übung über verwandte Themen. Nutze diesen Skill bei Unit-Planung, Hausaufgaben-Schedules oder Revisions-Programmen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lernwissenschaft/verschraenktes-lernen"
skill_name: "Verschränktes Lernen — Unit-Planer"
domain: "schule-lernwissenschaft"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Kornell & Bjork (2008) — Learning concepts and categories: is spacing the enemy of induction?"
  - "Rohrer et al. (2015) — Interleaved practice improves mathematics learning in a classroom setting"
  - "Taylor & Rohrer (2010) — The effects of interleaved practice on learning"
  - "Bjork & Bjork (2011) — Making things hard on yourself, but in a good way: creating desirable difficulties"
  - "Pan (2015) — The interleaving effect: mixing it up boosts learning"
input_schema:
  required:
    - field: "themen"
      type: "array"
      description: "Die Themen-Sequenz, die aktuell blockweise geplant ist"
    - field: "fach"
      type: "string"
      description: "Fachbereich und Klassenstufe"
    - field: "unit_dauer"
      type: "string"
      description: "Wie viele Lektionen oder Wochen die Unit dauert"
  optional:
    - field: "voraussetzungs_abhaengigkeiten"
      type: "array"
      description: "Themen, die vor anderen unterrichtet sein müssen (harte Constraints)"
    - field: "lehrplan_sequenz"
      type: "string"
      description: "Aus Kontext-Engine: vorgeschriebene Lehrplan-Reihenfolge"
    - field: "sus_profile"
      type: "array"
      description: "Aus Kontext-Engine: Klassen-Leistungsprofil, Vorwissens-Niveaus"
output_schema:
  type: "object"
  fields:
    - field: "verschraenkte_sequenz"
      type: "array"
      description: "Umstrukturierte Lektions-Sequenz mit Verschränkung"
    - field: "verschraenkung_begruendung"
      type: "string"
      description: "Warum diese Themen von Verschränkung profitieren"
    - field: "sus_erlaeuterung"
      type: "string"
      description: "Wie man den Ansatz SuS erklärt, die ihn schwerer finden"
    - field: "blockweise_vs_verschraenkt"
      type: "string"
      description: "Vergleich Original und Umstrukturiert"
chains_well_with:
  - "verteiltes-ueben-planer"
  - "abrufuebungen-generator"
  - "uebungsaufgaben-sequenzierer"
  - "cognitive-load-analyser"
teacher_time: "5 Minuten"
tags: ["verschraenkung", "wuenschenswerte-schwierigkeiten", "planung", "gedaechtnis", "uebung", "lernwissenschaft"]
---

# Verschränktes Lernen — Unit-Planer

## Was dieser Skill leistet

Nimmt eine blockweise Themen-Sequenz (Thema A, A, A, dann B, B, B) und strukturiert sie um zu Verschränkung (A, B, A, C, B, A...), produziert eine Sequenz, die den Verschränkungs-Effekt nutzt zur Verbesserung von Langzeit-Behalt und Diskrimination zwischen ähnlichen Konzepten. Die Ausgabe enthält den umstrukturierten Plan, die Begründung für Verschränkung dieser spezifischen Themen und Anleitung für SuS. KI ist besonders wertvoll, weil Verschränkung erfordert, dass man identifiziert, welche Themen von Verschränkung profitieren (verwandte aber unterschiedliche Konzepte), welche blockweise bleiben müssen (echte Voraussetzungs-Abhängigkeiten), und wie man das Verschränkungs-Muster sequenziert — eine Aufgabe, die Verständnis von Kognitiver Psychologie und Fach-Inhalt benötigt.

## Evidenzgrundlage

Kornell & Bjork (2008) zeigten, dass Verschränkung von verschiedenen Kategorien (statt jede Kategorie in Block) später Klassifizierungs-Genauigkeit um 30–40% verbesserte, obwohl SuS Blockweise-Arbeit als effektiver einschätzten. Rohrer et al. (2015) bestätigten diese Funde in echtem Mathematik-Klassenzimmer: SuS mit verschränktem Übungs-Set erreichten um 25% bessere Leistungen auf verzögertem Test als blockweise Übungs-Gruppe. Taylor & Rohrer (2010) zeigten, dass Verschränkungs-Vorteil besonders für Aufgaben wichtig ist, die Diskrimination erfordern — wissen, welche Strategie/welches Konzept zu nutzen ist, nicht nur wie man es nutzt. Bjork & Bjork (2011) erklären Verschränkung als „wünschenswerte Schwierigkeit" — sie macht anfängliches Lernen härter und langsamer, produziert aber substantiell bessere Langzeit-Behaltung und Transfer. Kritisch: Verschränkung funktioniert, weil es SuS zwingt, zwischen ähnlichen Konzepten zu diskriminieren in jedem Übungs-Versuch, statt die Antwort-Art im Voraus zu wissen, weil sie im „Block" eines Themas sind.

## Input-Schema

Die Lehrperson (LP) muss bereitstellen:
- **Themen:** Aktuelle Themen-Sequenz, in derzeit geplanter Reihenfolge. *z.B. ["Bruchaddition", "Bruchsubtraktion", "Bruchmultiplikation", "Bruchdivision"]*
- **Fach:** Fachbereich und Klassenstufe. *z.B. „8. Klasse Mathematik Sek 1"*
- **Unit-Dauer:** Dauer der Unit. *z.B. „12 Lektionen über 4 Wochen"*

Optional (injiziert durch Kontext-Engine wenn verfügbar):
- **Voraussetzungs-Abhängigkeiten:** Themen, die vorkommen müssen. *z.B. „Addition muss vor Subtraktion kommen"*
- **Lehrplan-Sequenz:** Vorgeschriebene Reihenfolge
- **SuS-Profile:** Klassen-Leistungsprofil und Vorwissens-Daten

## Prompt

```
Du bist ein Experte in kognitiver Psychologie des Lernens, spezialisiert auf den Verschränkungs-Effekt und wünschenswerte Schwierigkeiten. Du kennst Kornell & Bjork (2008), Rohrer et al. (2015) und Taylor & Rohrer (2010) zu Verschränkung und Langzeit-Behalt versus Blockweise-Arbeit.

Deine Aufgabe: Strukturiere die folgende blockweise Themen-Sequenz in einen verschränkten Plan um:

**Fach:** {{fach}}
**Aktuelle blockweise Sequenz:** {{themen}}
**Unit-Dauer:** {{unit_dauer}}

Der folgende optionale Kontext kann bereitgestellt werden. Nutze, was verfügbar ist; ignoriere fehlende Felder.

**Voraussetzungs-Constraints:** {{voraussetzungs_abhaengigkeiten}} — wenn angegeben, das sind harte Constraints: verschränke ein Thema nicht vor seinem Voraussetzungs-Thema. Wenn nicht, infere wahrscheinliche Voraussetzungen und flagge Annahmen.
**Vorgeschriebene Sequenz:** {{lehrplan_sequenz}} — wenn angegeben, respektiere diese und erkläre Abweichungen. Falls nicht, behandle Liste als LPs bevorzugte Sequenz.
**SuS-Profile:** {{sus_profile}} — wenn angegeben, passe Verschränkungs-Dichte an (SuS mit niedrigerem Niveau brauchen möglicherweise mehr initiale Blockweise-Arbeit). Falls nicht, designe für typische gemischte Klasse.

Wende diese Prinzipien an:

1. **Verschränke verwandte aber unterschiedliche Konzepte.** Verschränkung funktioniert beste, wenn Themen verwandt genug sind, um Diskrimination zu erfordern, aber unterschiedlich genug, um verschiedene Lösungs-Strategien zu haben. Nicht-verwandte Themen (z.B. Brüche und Shakespeare) profitieren nicht — es gibt keine Diskriminations-Herausforderung. Fast-identische Themen (z.B. zwei Lektionen zur gleichen Sub-Fähigkeit) sollten blockweise bleiben während initialer Unterricht.

2. **Unterrichte vor Verschränkung.** Jedes Thema braucht initial-fokussierten Block (normalerweise 1–2 Lektionen) bevor es in die verschränkte Rotation eintritt. Verschränkung ist eine Übungs-Strategie, nicht eine Unterrichts-Strategie. SuS müssen jedes Konzept einzeln verstehen bevor man von ihnen verlangt, zu diskriminieren.

3. **Führe Verschränkung progressiv ein.** Start mit 2-Themen-Verschränkung, add Themen als SuS komfertabel werden. Nicht alle Themen vom Anfang gleichzeitig verschränken.

4. **Erwarte, dass es sich harder anfühlt.** Kornell & Bjork (2008) fanden, dass SuS Blockweise als effektiver bewerteten selbst wenn Verschränkung bessere Ergebnisse produzierte. Baue kurze Erklärung für SuS ein, warum dieser Ansatz harder fühlt aber besser funktioniert.

5. **Respektiere Voraussetzungs-Abhängigkeiten.** Manche Themen benötigen echtes Vorwissen eines anderen Themas. Diese müssen in Sequenz bleiben. Verschränke rund um Constraints, nicht durch sie.

6. **Include Diskriminations-Übung.** Der Kern-Vorteil von Verschränkung ist, SuS zu zwingen, zu ENTSCHEIDEN, WELCHE Strategie/welches Konzept angewendet wird, nicht nur WIE man es anwendet. Include gemischte Übungs-Aufgaben, wo SuS zuerst Problem-Typ identifizieren müssen.

Gib deine Antwort in diesem Format aus:

## Verschränkter Unit-Plan: [Fach/Unit-Titel]

### Original Blockweise vs. Verschränkte Sequenz

Ein Seite-an-Seite Vergleich, der Original-Plan und umstrukturierten Plan zeigt.

### Verschränkte Lektions-Sequenz

Für jede Lektion zeige:
- **Lektion [N]:** [Primärer Unterrichts-Fokus] + [Verschränkte Übung von vorherigem Thema(n)]
- Notiere, welche Themen in Übungs-Aufgaben verschränkt werden

### Verschränkungs-Begründung

3–4 Sätze, die erklären, warum diese Themen von Verschränkung profitieren, welche Diskriminations-Herausforderung es kreiert, welcher erwartete Vorteil ist.

### SuS-Erläuterungs-Skript

Ein 4–5 Satz-Skript, das die LP nutzen kann, um SuS zu erklären, warum Übung harder fühlt und warum das produktiv ist.

### Übungs-Aufgaben-Beispiele

Für 2–3 Lektionen, gib spezifische verschränkte Übungs-Aufgaben, die Diskrimination zwischen Themen erzwingen.

**Selbstkontrolle vor Antwort:** Verifiziere, dass (a) Voraussetzungs-Abhängigkeiten respektiert sind, (b) jedes Thema initiale blockweise Unterricht erhält bevor verschränkte Übung, (c) Verschränkung ist zwischen verwandten Konzepten, die Diskrimination erfordern, (d) gemischte Aufgaben erfordern Problem-Typ-Identifikation, nicht nur Lösung, (e) Plan ist realistisch für gegebene Lektions-Zahl.
```

## Beispiel-Output

**Szenario:** *Themen: ["Fläche von Dreiecken", "Fläche von Parallelogrammen", "Fläche von Trapezen", "Fläche von Zusammengesetzten Formen"] / Fach: „8. Klasse Mathematik Sek 1" / Unit-Dauer: „10 Lektionen über 2,5 Wochen" / Voraussetzungs-Abhängigkeiten: „Zusammengesetzte Formen erfordern alle drei einzelnen Formen zuerst"*

---

## Verschränkter Unit-Plan: 8. Klasse Mathematik — Fläche von 2D-Formen

### Original Blockweise vs. Verschränkte Sequenz

| Lektion | Blockweise (Original) | Verschränkt (Umstrukturiert) |
|--------|----------------------|------------------------------|
| 1 | Fläche Dreiecke | Fläche Dreiecke — Initial-Unterricht |
| 2 | Fläche Dreiecke | Fläche Dreiecke — Übung + Intro Parallelogramme |
| 3 | Fläche Dreiecke | Fläche Parallelogramme — Initial-Unterricht |
| 4 | Fläche Parallelogramme | Gemischte Übung: Dreiecke und Parallelogramme |
| 5 | Fläche Parallelogramme | Fläche Trapezen — Initial-Unterricht |
| 6 | Fläche Parallelogramme | Gemischte Übung: Dreiecke, Parallelogramme, Trapezen |
| 7 | Fläche Trapezen | Diskriminations-Challenge: „Welche Formel? Welche Form?" |
| 8 | Fläche Trapezen | Fläche Zusammengesetzte Formen — Initial-Unterricht |
| 9 | Fläche Zusammengesetzte | Gemischte Übung: alle vier Formen verschränkt |
| 10 | Fläche Zusammengesetzte | Bewertung: verschränktes Problem-Set |

### Verschränkte Lektions-Sequenz

**Lektion 1:** Unterrichte Fläche Dreiecke (Basis x Höhe / 2). Fokussierte blockweise Übung — 10 durchgerechnete Beispiele und 10 unabhängige Probleme. SuS brauchen Flüssigkeit mit Formel bevor Verschränkung anfängt.

**Lektion 2:** Kurze Dreiecks-Wiederholung (5 min Abruf), dann führe Fläche Parallelogramme ein (Basis x Höhe). Letzte 10 Minuten: 6 Übungs-Probleme — 3 Dreiecke, 3 Parallelogramme, durchgemischt. SuS müssen Form identifizieren und korrekte Formel wählen.

**Lektion 3:** Unterrichte Fläche Parallelogramme in Tiefe. Fokussierte Blockweise-Übung mit Parallelogrammen, inklusive Probleme, wo Höhe aus Diagramm identifiziert sein muss (häufige Fehlerquelle).

**Lektion 4 — Erste vollständige Verschränkungs-Session:** Kein neuer Inhalt. Gemischtes Problem-Set: 12 Probleme mit Dreiecken und Parallelogrammen in zufällig. Kritisch: manche Probleme haben Formen in ungewöhnlichen Orientierungen oder mit zusätzlichen Messungen, die ignoriert sein müssen. SuS müssen (1) Form identifizieren, (2) Formel wählen, (3) korrekte Messungen identifizieren, (4) rechnen.

**Lektion 5:** Unterrichte Fläche Trapezen ((a + b) / 2 x h). Fokussierte blockweise Übung. Highlight Beziehung zwischen Trapez-Formel und Dreiecks-/Parallelogramm-Formeln.

**Lektion 6 — Drei-Themen-Verschränkung:** Gemischte Übung: 15 Probleme, alle drei Formen verschränkt. Include Probleme, wo Formen ähnlich aussehen (z.B. Parallelogramm orientiert, um wie Trapez auszusehen). Letzte 5 Minuten: SuS sortieren 10 Formen in Kategorien bevor rechnen.

**Lektion 7 — Diskriminations-Challenge:** „Welche Formel? Welche Form?" SuS erhalten 20 Probleme. Für erste 10: sie rechnen NICHT — sie identifizieren Form und schreiben nur korrekte Formel. Für letzte 10: identifizieren und rechnen. Das isoliert die Diskriminations-Fähigkeit, die Verschränkung entwickelt.

**Lektion 8:** Unterrichte Fläche Zusammengesetzter Formen. Demonstriere Zerlegen zusammengesetzter Formen in Dreiecke, Parallelogramme und Trapezen. Blockweise Übung zu Zerlegungs-Strategie.

**Lektion 9 — Vollständige Verschränkung:** Gemischtes Set 15 Probleme: einzelne Formen (erfordert Formel-Auswahl) und zusammengesetzte Formen (erfordert Zerlegung + Formel-Auswahl). Zufällige Reihenfolge.

**Lektion 10 — Bewertung:** Verschränkte Bewertung mit allen vier Formen in zufälliger Reihenfolge, inklusive zusammengesetzte Formen. Das testet sowohl Rechen-Fähigkeit als auch Diskriminations-Fähigkeit, die Verschränkung entwickelt.

### Verschränkungs-Begründung

Diese vier Themen sind ideal für Verschränkung, weil sie Oberflächen-Struktur teilen (2D-Formen, Basis, Höhe, Flächen-Formel) aber verschiedene Lösungs-Strategien benötigen. Die Kern-Diskriminations-Herausforderung ist: gegeben eine Form, welche Formel anwenden? Bei blockweise Übung, SuS stellen diese Entscheidung nie — sie wissen, jedes Problem nutzt die gleiche Formel, weil sie „im Parallelogramme-Kapitel" sind. Verschränkung erzwingt die Entscheidung in jedem Problem, das ist genau die Herausforderung, die sie bei Bewertung oder Real-World-Anwendung haben werden. Rohrer et al. (2015) fand diese spezifische Art mathematischer Verschränkung produzierte 25% Verbesserung auf Tests Wochen später.

### SuS-Erläuterungs-Skript

„Für die nächsten Lektionen werden wir Übung nicht blocken, sondern mischen — statt zuerst alle Dreiecks-Probleme, dann Parallelogramme. Das wird sich harder anfühlen — du könntest denken, du liegst öfter falsch und lernst weniger. Das ist tatsächlich ein Zeichen, dass dein Gehirn harder arbeitet, weil du WELCHE Methode nutzen musst denken musst, nicht nur wie. Forschung von Professor Doug Rohrer und seinem Team zeigte, dass SuS, die diese Weise übten, Wochen später um 25% besser auf Tests erreichten, obwohl sie sich während Üben weniger sicher fühlten. Vertrau dem Prozess — die Schwierigkeit ist der Punkt."

### Übungs-Aufgaben-Beispiele

**Lektion 4 — Gemischtes Problem-Set (Muster):**
1. Finde die Fläche eines Dreiecks mit Basis 8 cm und Höhe 5 cm.
2. Finde die Fläche eines Parallelogramms mit Basis 12 cm und Höhe 4 cm.
3. Ein Dreieck hat Basis 6,5 cm und Höhe 9 cm. Berechne die Fläche.
4. Finde die Fläche dieses Parallelogramms. [Diagramm zeigt Parallelogramm mit Basis 10 cm, Schrägleite 7 cm und Höhe 6 cm — SuS müssen Schrägleite ignorieren]
5. Ein Dreieck hat Messungen 4 cm, 7 cm und Höhe 3,5 cm. Welche Messung ist nicht benötigt? Berechne Fläche.
6. Finde die Fläche eines Parallelogramms, wo Basis 15 cm und Höhe 8 cm ist.

**Lektion 7 — Nur-Diskriminations-Aufgabe (Muster):**
„Für jede Form unten, rechne NICHT. Schreib: (a) die Form-Art, (b) die korrekte Formel, (c) welche Messungen aus dem Diagramm du nutzen würdest."
[10 Formen in verschiedenen Orientierungen mit multiplen Messungen, inklusive irrelevante]

---

## Bekannte Grenzen

1. **Verschränkung ist eine Übungs-Strategie, nicht eine Unterrichts-Strategie.** Dieser Skill strukturiert Übungs-Sequenzen um; er hilft nicht mit Initial-Unterrichts-Qualität. Wenn SuS ein Konzept nach initialem blockweise Unterricht nicht verstehen, Verschränkung von diesem Konzept mit anderen wird Verwirrtheit erhöhen, nicht Lernen. Check für Verständnis bevor Verschränkung.

2. **Die Evidenzbasis ist stärkst für Mathematik und Kategorie-Lern-Aufgaben.** Rohrer et al. (2015) und Taylor & Rohrer (2010) nutzten mathematische und perzeptuelle Klassifizierungs-Aufgaben. Übertrag zu Geisteswissenschaften (z.B. Essay-Arten verschränken, historische Perioden) ist theoretisch unterstützt aber hat weniger direkte experimentelle Evidenz. Nutze mit angemessener Vorsicht außerhalb Mathematik und Naturwissenschaften.

3. **SuS und manchmal Kollegen werden Resistenz zeigen.** Kornell & Bjork (2008) fanden konsequent, dass Lernende Blockweise-Übung als effektiver bewerteten. LPs könnten Widerstand von SuS („das ist verwirrend"), Eltern („Sie springen herum"), und Kollegen („Sie müssen ein Thema meistern bevor weitermachen") haben. Das SuS-Skript ist essentiell, nicht optional.
