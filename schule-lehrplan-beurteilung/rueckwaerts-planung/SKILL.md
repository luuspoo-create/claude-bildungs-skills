---
# AGENT SKILLS STANDARD FIELDS (v2)
name: rueckwaerts-planung-unit-planner
description: "Plane eine Unterrichtseinheit mit Rückwärtsplanung von Lernzielen über Beurteilung bis zu Aktivitäten. Nutze dies beim Start einer neuen Einheit oder bei einer Umgestaltung."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lehrplan-beurteilung/rueckwaerts-planung"
skill_name: "Rückwärts-Planung Unit Planner"
domain: "curriculum-assessment"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Wiggins & McTighe (1998, 2005) — Understanding by Design"
  - "Wiggins & McTighe (2011) — The Understanding by Design Guide to Creating High-Quality Units"
  - "Tomlinson & McTighe (2006) — Integrating Differentiated Instruction and Understanding by Design"
  - "Hattie (2009) — Visible Learning: backward design and clarity of learning intentions"
  - "Biggs & Tang (2011) — Teaching for Quality Learning at University: constructive alignment"
input_schema:
  required:
    - field: "desired_outcomes"
      type: "string"
      description: "Was SuS am Ende der Einheit verstehen, wissen und können sollten"
    - field: "student_level"
      type: "string"
      description: "Alter/Jahrgangsstufe"
    - field: "unit_duration"
      type: "string"
      description: "Anzahl Lektionen oder Wochen"
  optional:
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "curriculum_framework"
      type: "string"
      description: "Spezifische Lehrplan-Standards"
    - field: "student_profiles"
      type: "array"
      description: "Vorherige Leistung, bekannte Lücken, Klassen-Komposition"
    - field: "available_resources"
      type: "string"
      description: "Texte, Materialien oder verfügbare Ressourcen"
output_schema:
  type: "object"
  fields:
    - field: "stage_1_desired_results"
      type: "object"
      description: "Dauerhafte Verständigungen, wesentliche Fragen, Wissen und Fähigkeiten"
    - field: "stage_2_assessment_evidence"
      type: "object"
      description: "Performance-Aufgaben und andere Evidenz für Verständnis"
    - field: "stage_3_learning_plan"
      type: "object"
      description: "Sequenzierte Lernaktivitäten aligned mit Stufen 1 und 2"
    - field: "alignment_check"
      type: "string"
      description: "Überprüfung, dass Aktivitäten, Beurteilungen und Ziele aligned sind"
chains_well_with:
  - "kompetenz-entpacker"
  - "kriterienraster-generator"
  - "formative-assessment-technique-selector"
  - "explicit-instruction-sequence-builder"
teacher_time: "5 Minuten"
tags: ["UbD", "rückwärtsplanung", "unit-planung", "lehrplan", "alignment"]
---

# Rückwärts-Planung Unit Planner

## Was diesen Skill leistet

Generiert eine komplette Stage 1–2–3 Understanding by Design Struktur aus den angestrebten Lernzielen der LP: Stage 1 definiert dauerhafte Verständigungen, wesentliche Fragen und Zielwissen/-fähigkeiten; Stage 2 designt die Beurteilungs-Evidenz (VOR Aktivitäten werden geplant); Stage 3 sequenziert die Lernaktivitäten. Der Kern: Beurteilung wird VOR Unterricht designt – nicht als Nachgedanke, sondern als Definition von Erfolg. KI ist wertvoll, weil Rückwärtsplanung erfordert, alle drei Stufen gleichzeitig im Blick zu halten und enge Alignment zu gewährleisten. Die meisten LP-entworfenen Units planen Aktivitäten zuerst und Beurteilungen zuletzt, was zu Misalignment führt.

## Grundlagen

Wiggins & McTighe (1998, 2005) entwickelten Understanding by Design (UbD), das am weitesten verbreitete Curriculum-Designkonzept. Der zentrale Gedanke: Curriculum sollte rückwärts von den angestrebten Resultaten aus, nicht vorwärts von verfügbaren Aktivitäten aus, designt werden. Stage 1 (Desired Results) definiert, was SuS verstehen sollten – nicht bloss wissen oder können, sondern auf transferierbare Weise. Stage 2 (Assessment Evidence) bestimmt, welche Evidenz dieses Verständnis zeigen würde – designt VOR Unterricht, damit Lehre auf echte Ziele abzielt. Stage 3 (Learning Plan) sequenziert die nötige Instruktion. Wiggins & McTighe (2011) betonten, dass dauerhafte Verständigungen transferierbare Ideen sind, und wesentliche Fragen genuinely offen. Biggs & Tang (2011) entwickelten "constructive alignment": Lernziele, Beurteilungsaufgaben und Unterrichtsaktivitäten müssen aligned sein. Hattie (2009) bestätigte: Klarheit der Lernabsichten ist einer der höchsten Hebel für Schüler-Erfolg.

## Input-Schema

Die LP muss liefern:
- **Angestrebte Resultate:** Was SuS verstehen, wissen und können sollten. *z.B. "SuS verstehen, wie Organismen sich durch Selektion an Umgebungen anpassen, kennen Schlüssel-Vokabeln (Anpassung, Variation, natürliche Selektion, Evolution) und können erklären, wie die Merkmale eines spezifischen Organismus mit seiner Umgebung zusammenhängen."*
- **Jahrgangsstufe:** *z.B. "9. Klasse Sek 1"*
- **Unit-Dauer:** *z.B. "6 Lektionen (je 50 Min.)" oder "3 Wochen"*

Optional (aus Kontext):
- **Fachbereich:** Das Schulfach
- **Lehrplan-Standards:** Spezifische Vorgaben
- **Schüler-Profile:** Vorherige Leistung, Lücken
- **Verfügbare Ressourcen:** Texte, Materialien

## Prompt

```
Du bist Curriculum-Design Expertin/e mit tiefem Wissen über Wiggins & McTighe (1998, 2005) Understanding by Design, Biggs & Tang (2011) constructive alignment und Hattie (2009) Sichtbares Lernen. Du verstehst, dass effektive Unit-Planung RÜCKWÄRTS von angestrebten Resultaten arbeitet.

Deine Aufgabe: Plane eine UbD-Unit für:

**Angestrebte Resultate:** {{desired_outcomes}}
**Jahrgangsstufe:** {{student_level}}
**Unit-Dauer:** {{unit_duration}}

Optional verfügbar (nutze was möglich ist):
**Fachbereich:** {{subject_area}}
**Lehrplan-Standards:** {{curriculum_framework}}
**Schüler-Profile:** {{student_profiles}}
**Ressourcen:** {{available_resources}}

Anwende diese Prinzipien:

1. **Stage 1 – Angestrebte Resultate (Wiggins & McTighe, 2005):**
   - **Dauerhafte Verständigungen:** Grosse Ideen, transferierbar über diese Unit hinaus. Rahmung: "SuS werden verstehen, dass..."
   - **Wesentliche Fragen:** Offen, provozierend. Nicht vorgegebene Antworten. Wiederkehrend, Antworten vertiefen sich.
   - **Wissen:** Fakten, Konzepte, Vokabeln
   - **Fähigkeiten:** Spezifische Fähigkeiten

2. **Stage 2 – Beurteilungs-Evidenz (Wiggins & McTighe, 2005; Biggs & Tang, 2011):**
   - Design VOR Instruktion. Das Kern-UbD-Prinzip.
   - **Performance-Aufgabe:** Reichhaltig, authentisch, Verständnis durch Anwendung zeigen, nicht bloss Fakten abrufen.
   - **Andere Evidenz:** Quizze, Verständnis-Checks, Beobachtungen
   - Muss aligned sein mit Stage 1

3. **Stage 3 – Lernplan (Wiggins & McTighe, 2005):**
   - Sequenziere Aktivitäten zur Vorbereitung auf Stage 2 Beurteilungen
   - WHERETO-Rahmen: Where (Ziel)? Hook. Explore & equip. Rethink & revise. Evaluate. Tailor. Organise.
   - Logische Sequenzierung: Wissen VOR Anwendung. Scaffolding VOR Unabhängigkeit.
   - Jede Aktivität verbindet sich klar zu Stage 2 Beurteilung

4. **Alignment-Check (Biggs & Tang, 2011):**
   - Verifiziere: Alle Stage 1 Ziele sind in Stage 2 geprüft und in Stage 3 gelehrt
   - Flag Gaps: Ziele angekündigt aber nicht geprüft/gelehrt

Return dein Output in diesem Format:

## Unit-Plan: [Unit-Titel]

**Für:** [Jahrgangsstufe]
**Fachbereich:** [Fach]
**Dauer:** [Unit-Länge]

### Stage 1: Angestrebte Resultate

**Dauerhafte Verständigungen**
[2–3 transferierbare Verständigungen]

**Wesentliche Fragen**
[2–3 offene, wiederkehrende Fragen]

**SuS werden wissen:**
[Spezifisches Wissen]

**SuS werden können:**
[Spezifische Fähigkeiten]

### Stage 2: Beurteilungs-Evidenz

**Performance-Aufgabe**
[Szenario, was SuS produzieren, was geprüft, kurz Erfolgskriterien]

**Andere Evidenz**
[Zusätzliche Beurteilungs-Methoden mapped zu Stage 1 Zielen]

### Stage 3: Lernplan

[Lektion-für-Lektion oder Phase-für-Phase Sequenz mit Verbindungen zu Stage 2]

### Alignment-Check

[Verifizierung, dass alle Stage 1 Ziele geprüft und gelehrt sind. Gaps flag.]

**Self-check:** Verifiziere (a) Verständigungen sind transferierbar, (b) Fragen sind offen und wiederkehrend, (c) Performance-Aufgabe verlangt Transfer, nicht bloss Abruf, (d) Stage 2 designt, dann Stage 3 logisch, (e) alle Stage 1 Ziele sind geprüft und gelehrt, (f) Lernplan baut progressiv zur Aufgabe.
```

## Beispiel-Output

**Szenario:** *Angestrebte Resultate: "SuS verstehen, wie natürliche Selektion Anpassung in Organismen treibt, kennen Schlüssel-Konzepte (Anpassung, Variation, Vererbung, natürliche Selektion, Evolution) und können erklären, wie die Merkmale eines spezifischen Organismus zu seiner Umgebung passen und wie Populationen sich zeitlich verändern." / Jahrgangsstufe: "9. Klasse Sek 1" / Unit-Dauer: "8 Lektionen (je 50 Min.)" / Fachbereich: "Biologie"*

---

## Unit-Plan: Natürliche Selektion und Anpassung

**Für:** 9. Klasse Sek 1
**Fachbereich:** Biologie
**Dauer:** 8 Lektionen (je 50 Minuten)

### Stage 1: Angestrebte Resultate

**Dauerhafte Verständigungen**
1. SuS verstehen, dass **Organismen mit besserer Umgebungs-Eignung eine höhere Überlebens- und Reproduktions-Chance haben, und diese Merkmale werden an Nachkommen weitergegeben – was zu Populations-Veränderung führt.** (Das ist der Mechanismus der natürlichen Selektion.)
2. SuS verstehen, dass **Variation innerhalb einer Population essentiell für natürliche Selektion ist – ohne Variation hat es nichts zum "Selektieren".**
3. SuS verstehen, dass **Anpassung ein Resultat von natürlicher Selektion über viele Generationen ist, keine bewusste Wahl einzelner Organismen.**

**Wesentliche Fragen**
1. "Warum sehen Organismen so aus, wie sie sind?" (Wiederkehrend – Antworten vertiefen sich von "weil sie sich angepasst haben" zu "weil natürliche Selektion Merkmale begünstigte".)
2. "Was passiert mit gut-angepassten Organismen, wenn die Umgebung sich ändert?" (Verständnis, dass Anpassung nicht permanent ist.)
3. "Warum ist Variation wichtig?" (Verknüpft Genetik mit Evolution.)

**SuS werden wissen:**
- Definitionen: Anpassung, Variation, Vererbung, natürliche Selektion, Evolution, Art
- Beispiele struktureller, Verhaltens- und funktioneller Anpassungen bei bekannten Organismen
- Dass Variation von genetischen Unterschieden stammt
- Die vier Bedingungen für natürliche Selektion: Variation, Vererbung, Selektionsdruck, differentielle Reproduktion
- Darwins Beitrag zur Evolution-durch-Selektion-Theorie

**SuS werden können:**
- Erklären, wie die Merkmale eines bekannten Organismus bei der Umgebungs-Anpassung helfen
- Den Prozess der natürlichen Selektion Schritt-für-Schritt beschreiben
- Vorhersagen, was mit einer Population passiert, wenn sich die Umgebung ändert
- Unterscheiden zwischen Lamarck- (erworbene Merkmale) und Darwin-Ansätze (natürliche Selektion)

### Stage 2: Beurteilungs-Evidenz

**Performance-Aufgabe: "Die Insel"**

*Szenario:* "Eine Population Käfer lebt auf einer Vulkan-Insel. Käfer variieren in Farbe von grün bis braun. Die Insel ist mit grüner Vegetation bedeckt. Neuerlich hat ein Vulkan-Ausbruch grosse Teile in dunkelgraue Asche bedeckt. Wissenschaftler vorhersagen, dass die Käfer-Population in 50 Generationen sehr anders aussieht. Deine Aufgabe: Schreibe eine wissenschaftliche Erklärung, die vorhersagt, wie sich die Käfer-Population ändern wird und WARUM, anhand der Theorie natürlicher Selektion. Deine Erklärung muss alle vier Bedingungen natürlicher Selektion einbeziehen und die Missverständnis adressieren, dass einzelne Käfer 'wählen', ihre Farbe zu ändern."

*Was geprüft wird:*
- Verständnis 1: Können SuS den Selektions-Mechanismus korrekt erklären?
- Verständnis 2: Identifizieren sie existierende Variation als essentiell?
- Verständnis 3: Erklären sie, dass die Population sich ändert, nicht einzelne Käfer?
- Fähigkeit: Schritt-für-Schritt-Erklärung, Unterscheidung Darwin vs. Lamarck

**Andere Evidenz**

| Lektion | Beurteilung | Prüft |
|---------|-----------|--------|
| 2 | Exit Ticket: "Nenne 3 Anpassungen eines Eisbären und erkläre, wie jede beim Überleben hilft" | Wissen + Erklär-Fähigkeit |
| 4 | Whiteboard Hinge: "Eine Giraffe streckt ihren Hals. Ihre Nachkommen haben längere Hälse. Lamarck oder Darwin? Warum?" | Verständnis 3 + Wissen |
| 6 | Peer-Erklärung: SuS erklären Selektion einem Partner mit neuem Beispiel; Partner prüft mit Checklist | Wissen + Erklär-Fähigkeit |

### Stage 3: Lernplan

**Lektion 1 – Hook & Explore: "Warum sehen Organismen so aus?"**
- Zeige 5 Bilder ungewöhnlicher Anpassungen (Anglerfisch, Kaktus, Polarfuchs, Chamäleon, Röhrenwürmer). Diskutiere: "Warum sieht dieses Tier so aus? Welches Problem löst dieses Merkmal?"
- Einführung Wesentliche Frage 1. SuS schreiben erste Antworten.
- Definition "Anpassung" – strukturell, verhaltensbasiert, funktionell. SuS klassifizieren die 5 Beispiele.
- *Baut auf zur:* Stage 2 Aufgabe (Merkmale-Umgebungs-Link erklären)

**Lektion 2 – Equip: Anpassungs-Typen**
- Detaillierte Studie 3 Organismen mit ihren Anpassungen.
- SuS schreiben: "Wie hilft [Merkmal] [Organismus] beim Überleben in [Umgebung]?"
- *Exit Ticket Beurteilung.*
- *Baut auf zur:* Stage 2 Aufgabe

**Lektion 3 – Explore: Variation**
- Praktikum: Variation in Populationen messen (z.B. Hand-Spannweite, Blatt-Grösse).
- Kern: Variation existiert in jeder Population. Manche Variation ist genetisch.
- Einführung Wesentliche Frage 3: "Warum ist Variation wichtig?"
- *Baut auf zur:* Verständnis 2

**Lektion 4 – Equip: Natürliche Selektion Schritt-für-Schritt**
- Explizite Instruktion: Die 4 Bedingungen (Variation, Vererbung, Selektionsdruck, differentielle Reproduktion).
- Arbeits-Beispiel mit Pfeffermöller-Schmetterlinge als Modell.
- Lamarck vs. Darwin Unterscheidung. Missverständnis adressieren: "Der Giraffen-Hals."
- *Hinge Frage Beurteilung.*
- *Baut auf zur:* Performance Task (SuS müssen alle 4 Bedingungen nutzen)

**Lektion 5 – Explore & Rethink: Simulation**
- Simulations-Aktivität: "Survival of the Fittest" mit farbigem Papier-"Organismen" auf verschiedenen Hintergründen. Beobachte, welche "gefressen" werden, welche überleben. Wiederhole 3 "Generationen".
- SuS beobachten: Population ändert sich über Zeit – OHNE dass einzelne Organismen sich ändern.
- Wesentliche Frage 1 aufgreifen: Antworten vertiefen sich.
- *Baut auf zur:* Verständnis 3 (Populationen ändern, nicht Individuen)

**Lektion 6 – Equip & Evaluate: Übungs-Erklärungen**
- SuS üben Selektion-Erklärungen mit neuem Beispiel (z.B. Antibiotika-Resistenz bei Bakterien).
- Peer-Beurteilung mit dem 4-Schritt-Checklist.
- LP zirkuliert, notiert häufige Fehler für Klassen-Feedback.
- *Baut auf zur:* Performance Task (üben das exakte geprüfte Skill)

**Lektion 7 – Performance Task: "Die Insel"**
- SuS schliessen die Task ab unter unterstützten Bedingungen.
- Satz-Anfänge verfügbar für DaZ-SuS. Wort-Bank für alle SuS (kann für Extension-SuS entfernt werden).
- LP zirkuliert, notiert häufige Missverständnisse für Lektion 8 Feedback.

**Lektion 8 – Rethink & Extend: Feedback & Transfer**
- Korrigierte Arbeiten zurückgeben mit zielgerichtetetem Feedback.
- Klassen-Review häufigster Fehler (speziell Lamarck-Denkweise).
- Extension: "Menschen nutzen Antibiotikas seit 80 Jahren. Bakterien werden resistent. Erkläre mit Naturauswahl, warum."
- Alle 3 Wesentliche Fragen revisited: SuS schreiben finale Antworten, vergleichen mit Lektion 1.

### Alignment-Check

| Stage 1 Ziel | In Stage 2 geprüft? | In Stage 3 gelehrt? | Aligned? |
|---|---|---|---|
| Verständnis 1 (Selektions-Mechanismus) | Performance Task + Lektion 6 Peer-Check | Lektionen 4, 5, 6 | ✓ |
| Verständnis 2 (Variation ist essentiell) | Performance Task | Lektion 3 | ✓ |
| Verständnis 3 (Anpassung ist nicht Wahl) | Performance Task + Lektion 4 Hinge | Lektionen 4, 5 | ✓ |
| Wissen (Vokabeln) | Alle Beurteilungen nutzen Terminologie | Lektionen 1–4 progressiv | ✓ |
| Fähigkeit (Merkmals-Umgebungs-Link) | Lektion 2 Exit Ticket + Performance Task | Lektionen 1, 2 | ✓ |
| Fähigkeit (Schritt-für-Schritt) | Performance Task + Lektion 6 Peer-Check | Lektionen 4, 6 (modelliert & geübt) | ✓ |

Keine Misalignments erkannt. Alle Stage 1 Ziele sind geprüft und gelehrt.

---

## Bekannte Einschränkungen

1. **Der Unit-Plan gibt Struktur, nicht Detailpläne.** Jede Lektion hat die Kernaktivität und ihren Zweck, aber keine vollständigen Timing, Differenzierung, Ressourcen oder Lehrerscripte. Nutze den Stage 3 Raum als Rahmen für Detailpläne mit anderen Skills.

2. **Rückwärtsplanung verlangt klare Ziele.** Wenn die Ziel-Beschreibung vage ist ("SuS lernen über Selektion"), wird der UbD-Plan weniger präzise. Die Unit-Qualität hängt von Input-Spezifität ab. Nutze Kompetenz-Entpacker, falls Ziele Klärung brauchen.

3. **Die Performance-Aufgabe ist context-spezifisch.** Das "Insel"-Szenario funktioniert für dieses Biologie-Thema, aber andere Schulen haben andere Ressourcen/Rahmenvorgaben. Überprüfe die Aufgabe gegen deine Beurteilungs-Anforderungen und adaptiere, während du die Design-Prinzipien beibehältst.
