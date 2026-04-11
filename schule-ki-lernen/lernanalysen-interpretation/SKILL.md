---
# AGENT SKILLS STANDARD FIELDS (v2)
name: lernanalysen-interpretation
description: "Interpretiere Lernanalyse-Daten und übersetze Dashboard-Erkenntnisse in handlungsfähige Unterrichtsentscheidungen. Verwende diesen Skill beim Auswerten von LMS-Daten, Prüfungsmuster oder Engagement-Metriken."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-ki-lernen/lernanalysen-interpretation"
skill_name: "Lernanalysen-Interpretationsleitfaden"
domain: "schule-ki-lernen"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Siemens & Long (2011) — Penetrating the fog: analytics in learning and education"
  - "Bienkowski et al. (2012) — Enhancing teaching and learning through educational data mining and learning analytics (US DoE report)"
  - "Wiliam (2011) — Embedded formative assessment (data use for formative purposes)"
  - "Mandinach & Gummer (2016) — What does it mean for teachers to be data literate?"
  - "Wise (2014) — Designing pedagogical interventions to support student use of learning analytics"
input_schema:
  required:
    - field: "datensatz_beschreibung"
      type: "string"
      description: "Die spezifischen Lernungsdaten zur Interpretation — was wurde gemessen, wie, und welche Rohdaten zeigen sich"
    - field: "entscheidungskontext"
      type: "string"
      description: "Welche Entscheidung die LP treffen muss basierend auf diesen Daten — was die LP herausfinden möchte oder welche Massnahme sie erwägt"
  optional:
    - field: "sus_niveau"
      type: "string"
      description: "Alter/Jahrgangsstufe und Leistungsniveau"
    - field: "fachbereich"
      type: "string"
      description: "Das Unterrichtsfach"
    - field: "vergleichsdaten"
      type: "string"
      description: "Vorhanden Baseline- oder Vergleichsdaten — Ergebnisse aus Vorjahr, Schweizer Durchschnitte, oder frühere Assessments bei gleichen SuS"
    - field: "zeitliche_eingrenzung"
      type: "string"
      description: "Wie schnell die LP auf die Daten reagieren muss — sofort, diese Woche, dieses Trimester"
output_schema:
  type: "object"
  fields:
    - field: "dateninterpretation"
      type: "object"
      description: "Was die Daten tatsächlich zeigen — Muster, Ausreisser, Trends in LP-freundlicher Sprache"
    - field: "handlungsfaehige_muster"
      type: "array"
      description: "Die spezifischen Daten-Muster die eine Unterrichtsmassnahme nahelegen — geordnet nach Dringlichkeit und Sicherheit"
    - field: "empfohlene_massnahmen"
      type: "array"
      description: "Konkrete Unterrichtsmassnahmen verknüpft mit spezifischen Daten-Mustern — was zu tun ist und warum"
    - field: "vorsichtsmassnahmen"
      type: "array"
      description: "Was die Daten NICHT zeigen — interpretive Fallstricke und alternative Erklärungen"
chains_well_with:
  - "formatives-assessment-designen"
  - "ki-feedback-design-prinzipien"
  - "retrieval-practice-designer"
  - "diagnostische-fragen-designer"
teacher_time: "5 Minuten"
tags: ["analytik", "daten", "formativ", "Siemens", "Wiliam", "datenkompetenz", "assessment", "interpretation", "Lehrplan21-NT.1", "Lehrplan21-MA.1"]
---

# Lernanalysen-Interpretationsleitfaden

## Was dieser Skill leistet

Führt LP durch die Interpretation eines spezifischen Lernanalyse-Datensatzes — Prüfungsergebnisse, Engagement-Metriken, Lernmuster oder andere quantitative/qualitative Daten über SuS-Lernprozesse — um handlungsfähige Muster zu erkennen und konkrete Unterrichtsentscheidungen zu treffen. Die kritische Erkenntnis von Wiliam (2011) und Mandinach & Gummer (2016): Lernanalysen sind NUR nützlich, wenn sie Unterrichtsentscheidungen verändern. Ein Dashboard voller bunter Graphen ist wertlos, wenn die LP nicht weiss, was SIE anders machen soll. Dieser Skill überbrückt die Lücke zwischen Daten und Aktion: Er nimmt Rohdaten, identifiziert die bedeutsamen Muster, erklärt sie in verständlicher Sprache, empfiehlt konkrete Unterrichtsmassnahmen und — entscheidend — kennzeichnet, was die Daten NICHT zeigen und welche Interpretationsfallen die LP vermeiden sollte. KI ist hier spezifisch wertvoll, weil die Interpretation von Lernanalysen mehrere Variablen gleichzeitig berücksichtigen erfordert (Einzelne vs. Gruppenmuster, frühere Leistung, Assessmentvalidität, mögliche Störfaktoren) — eine kognitive Aufgabe, die für eine LP am Abend schwierig ist, aber für ein gut ausgestaltetes KI-System einfach.

## Evidenzbasis

Siemens & Long (2011) formulierten die Grundvision für Lernanalysen: Nutzung von SuS-generierten Daten zur Analyse und Optimierung von Lernprozessen. Sie unterschieden zwischen Academic Analytics (Daten auf Institutions-Ebene) und Learning Analytics (Daten auf Kurs-/SuS-Ebene für Unterrichtsentscheidungen). Die Kernaussage: Der Wert liegt nicht in den Daten selbst, sondern in den Entscheidungen, die sie ermöglichen. Bienkowski et al. (2012) produzierten einen umfassenden US-DoE-Bericht über Educational Data Mining und Learning Analytics und identifizierten zentrale Anwendungen: Frühwarnsysteme (identifizieren gefährdete SuS), Adaptive Learning (Inhalte an Leistung anpassen), und Formatives Feedback (tägliche Unterrichtsentscheidungen informieren). Sie fanden: Die effektivsten Anwendungen lieferten LPs handlungsfähige Informationen, nicht Rohdaten-Dumps. Wiliam (2011) argumentierte, dass Datennutzung in der Schulbildung fundamental FORMATIV sein sollte — der Zweck ist Unterrichtsanpassung, nicht SuS-Etikettierung. Mandinach & Gummer (2016) untersuchten die Datenkompetenz von LPs und fanden, dass den meisten LPs die Schulung in Dateninterpretation fehlt. Häufigste Fehler: Korrelation mit Kausalität verwechseln, kleine Stichproben überinterpretieren, Messfehler ignorieren, und Durchschnitte fokussieren statt Subgruppen-Muster. Wise (2014) fand, dass SuS mit Zugang zu ihren eigenen Learning Analytics ohne strukturierte Anleitung nicht besser lernten.

## Input-Schema

Die LP muss bereitstellen:
- **Datensatz-Beschreibung:** Welche Daten verfügbar sind. *z.B. „8. Klasse Mathe-Test: 24 SuS, Spannbreite 23%-91%, Mittelwert 58%, Median 54%. Frage-Ebene: F1 (Abruf) 78% korrekt, F2 (Anwendung) 45% korrekt, F3 (Analyse) 31% korrekt"*
- **Entscheidungskontext:** Was die LP entscheiden muss. *z.B. „Ich muss die nächsten zwei Wochen planen — worauf soll ich fokussieren?"*

Optional (vom System injiziert):
- **SuS-Niveau:** Jahrgangsstufe und Leistungsniveau
- **Fachbereich:** Das Unterrichtsfach
- **Vergleichsdaten:** Baselines oder Benchmarks
- **Zeitliche Eingrenzung:** Wie schnell eine Massnahme notwendig ist

## Prompt

```
Du bist Experte in Lernanalysen-Interpretation mit tiefem Verständnis von Siemens & Long (2011), Bienkowski et al. (2012), Wiliam (2011), Mandinach & Gummer (2016) und Wise (2014). Du verstehst, dass der Zweck von Lernanalysen UNTERRICHTSENTSCHEIDUNGEN ist — nicht Graphen zu produzieren oder SuS zu etikettieren. Du kennst auch die häufigen Interpretationsfallen: Korrelation/Kausalität-Verwechslung, Überinterpretation kleiner Stichproben, ignorierte Messfehler, und Fokussierung auf Durchschnitte statt Subgruppen-Muster.

KRITISCHE PRINZIPIEN:
- **Starte mit der Entscheidung, nicht den Daten.** Die LP hat eine spezifische Entscheidung zu treffen. Die Interpretation sollte um DIESE Entscheidung organisiert sein, nicht um jedes mögliche Muster.
- **Unterscheide Signal von Rauschen.** Kleine Unterschiede können bedeutsam oder zufällig sein. Sei ehrlich über Unsicherheit.
- **Suche nach Subgruppen-Mustern, nicht nur Durchschnitten.** Eine Klassenleistung von 58% könnte heissen: alle bei ~58%, ODER halb über 80%, halb unter 40%. Völlig unterschiedliche Situationen.
- **Priorisiere nach Handlungsfähigkeit.** „F3 war schwierig" ist weniger handlungsfähig als „F3 war schwierig, weil SuS das Konzept nicht anwenden konnten."
- **Kennzeichne, was die Daten NICHT zeigen.** Assessments zeigen, was SuS PRODUZIERTEN, nicht was sie VERSTANDEN. Engagement-Daten zeigen Zeit, nicht Lernertrag.

Deine Aufgabe ist es, diese Daten zu interpretieren und die LP-Entscheidung zu leiten:

**Datensatz-Beschreibung:** {{datensatz_beschreibung}}
**Entscheidungskontext:** {{entscheidungskontext}}

Optionale Kontexte (verwende was verfügbar; ignoriere „nicht verfügbar"):
**SuS-Niveau:** {{sus_niveau}}
**Fachbereich:** {{fachbereich}}
**Vergleichsdaten:** {{vergleichsdaten}}
**Zeitliche Eingrenzung:** {{zeitliche_eingrenzung}}

Gib deine Ausgabe in diesem Format zurück:

## Dateninterpretation: [Kurzbezeichnung]

**Daten:** [Zusammenfassung verfügbarer Daten]
**Entscheidung:** [Was die LP entscheiden muss]
**Kernfinding:** [Ein Satz — das wichtigste Muster für diese Entscheidung]

### Was die Daten zeigen

[Klare, fachsjargon-freie Interpretation. Organisiert nach Relevanz zur LP-Entscheidung.]

### Handlungsfähige Muster

[Geordnete Liste von Mustern, die konkrete Unterrichtsmassnahmen nahelegen. Für jedes Muster:]

**Muster [N]: [Name]**
- **Was die Daten zeigen:** [Die spezifischen Zahlen]
- **Was es wahrscheinlich bedeutet:** [Die wahrscheinlichste Interpretation]
- **Sicherheitsniveau:** [Hoch/Mittel/Niedrig — und warum]
- **Empfohlene Massnahme:** [Was zu tun ist]

### Empfohlene Massnahmen

[Konkrete, priorisierte Unterrichtsmassnahmen verknüpft mit obigen Mustern.]

### Was die Daten NICHT zeigen

[Kritische Vorbehalte. Was sollte die LP NICHT schliessen? Welche alternativen Erklärungen existieren?]

### Schnellreferenz

| Muster | Massnahme | Priorität | Sicherheit |
|---|---|---|---|
| [Muster] | [Massnahme] | [Hoch/Mittel/Niedrig] | [Hoch/Mittel/Niedrig] |

**Selbstcheck vor Rückgabe:** (a) Interpretation ist auf LP-Entscheidung fokussiert, (b) Signal wird von Rauschen unterschieden, (c) Subgruppen-Muster werden analysiert, (d) Massnahmen sind spezifisch und priorisiert, (e) Datenlimitationen sind ehrlich gekennzeichnet.
```

## Beispielausgabe

**Szenario:** *Datensatz: „8. Klasse Mathe-Test (Algebra). 24 SuS, Spannbreite 23%-91%, Mittelwert 58%, Median 54%. Frage-Level: F1 (Abruf) 78% korrekt, F2 (Anwendung) 45% korrekt, F3 (Analyse) 31% korrekt. SuS-Verteilung: 6 SuS über 75%, 10 SuS 50-74%, 8 SuS unter 50%." / Entscheidungskontext: „Ich muss nächste Woche 4 Lektionen planen. Soll ich Inhalte rückkehren, Prüfungstechniken trainieren, oder schwache SuS gezielt unterstützen?"*

---

## Dateninterpretation: 8. Klasse Mathe-Test Algebra

**Daten:** 24 SuS, Test Algebra, Ergebnisse 23%-91%, Mittelwert 58%, Frage-Level-Aufteilung
**Entscheidung:** Wie die verbleibenden 4 Lektionen nutzen — Inhalte rückkehren, Prüfungstechniken oder gezielte SuS-Unterstützung
**Kernfinding:** Die Klasse kann abrufen und beschreiben (F1-F2 adäquat), aber nicht analysieren (F3 kritisch schwach) — dies ist eine KOMPETENZEN-Lücke, nicht primär eine Wissenslücke.

### Was die Daten zeigen

**Das Gesamtbild:** Dein Klassendurchschnitt (58%) ist leicht unter dem Vorjahr (62%), aber über dem Schweizer Durchschnitt (~52%). Die Klasse ist on-track, hat aber spezifische, behebbare Schwächen.

**Das kritische Muster ist in Fragetypen, nicht im Inhalt:** F1 (78%) und F2 (45%) zeigen, dass SuS KÖNNEN. Aber F3 (31%) zeigt, dass SuS das Wissen NICHT ANWENDEN können. Der Sprung von F2 (45%) zu F3 (31%) ist steil — das ist wo Punkte verloren gehen.

**Die SuS-Verteilung ist wichtig:** Du hast drei unterschiedliche Gruppen:
- **Gruppe A (6 SuS, über 75%):** Gute Leistung durchgehend.
- **Gruppe B (10 SuS, 50-74%):** Kennen Inhalte (F1/F2), aber Probleme beim Anwenden (F3). DEINE BESTE CHANCE für Verbesserung.
- **Gruppe C (8 SuS, unter 50%):** Haben gemischte Probleme — teilweise Wissenslücken, teilweise Kompetenzenprobleme.

### Handlungsfähige Muster

**Muster 1: Analyse-Kompetenzen-Lücke**
- **Was die Daten zeigen:** 78% bei Abruf, 45% bei Anwendung, 31% bei Analyse
- **Was es wahrscheinlich bedeutet:** SuS können Inhalte abrufen, aber nicht strukturiert damit umgehen. Sie brauchen eine klare Strategie für Analysefragen.
- **Sicherheitsniveau:** Hoch — das Muster ist konsistent.
- **Empfohlene Massnahme:** 2-3 Lektionen fokussieren auf Analysefragen. Modellieren, Scaffolds nutzen, gerichtetes Trainieren.

**Muster 2: Bimodale Verteilung**
- **Was die Daten zeigen:** Mittelwert 58%, Median 54%, Spannbreite 23-91%, mit Clustern bei 75+%, 50-74%, unter 50%
- **Was es wahrscheinlich bedeutet:** Die Klasse ist NICHT eine Gruppe — es sind mindestens 2-3 Gruppen mit unterschiedlichen Bedürfnissen.
- **Sicherheitsniveau:** Hoch — die Verteilung ist klar.
- **Empfohlene Massnahme:** Differenzieren. Gruppe A: Vertiefung. Gruppe B: Analysefokus. Gruppe C: Kombiniert aus Inhalts-Konsolidierung und Grundlagen-Struktur.

### Empfohlene Massnahmen

**Diese Woche:**
1. Modelllektion (1 Lektion): Analysefrage live modellieren. Zeige explizit die Struktur.
2. Gerichtetes Trainieren (2 Lektionen): Scaffolds für Gruppe B/C. Gruppe A arbeitet unabhängig an Vertiefungs-Beispielen.
3. Gesamtklasse-Praxis (1 Lektion): Ein vollständiger Practice-Test. Zeit-Management trainieren.

**In zwei Wochen:** Überprüfe, ob die Gruppe B sich verbessert hat. Wenn ja: Gruppe C braucht weiterhin Unterstützung. Wenn nein: Vielleicht liegt das Problem nicht bei Analysefähigkeiten, sondern bei Wissenslücken.

### Was die Daten NICHT zeigen

1. **Die Daten zeigen nicht, WARUM F3 schwach ist.** Die zwei wahrscheinlichsten Erklärungen sind: (a) SuS haben keine Analysestrategie oder (b) SuS haben Wissenslücken. Diese erfordern UNTERSCHIEDLICHE Interventionen. Schau dir einige Prüfungen an.

2. **Die Daten berücksichtigen keine SuS-Anstrengung und Test-Bedingungen.** Einige SuS haben vielleicht nicht ernst gelernt oder waren müde. Die 8 SuS unter 50% könnten besser können als ihre Noten zeigen.

3. **Vergleich mit Vorjahr ist ungefährlich.** Deine Klasse vs. Vorjahr — aber das sind unterschiedliche SuS.

4. **Frage-Level-Daten offenbaren nicht individuelle Misskonzepte.** F3 bei 31% sagt DASS SuS Probleme haben, nicht WO im Detail.

### Schnellreferenz

| Muster | Massnahme | Priorität | Sicherheit |
|---|---|---|---|
| Analyse-Kompetenzen-Lücke (F3) | Modellieren + gerichtetes Trainieren | Hoch | Hoch |
| Bimodale Verteilung | Differenzierter Unterrichtsplan | Mittel | Hoch |
| 8 SuS unter 50% | Individuelle Checks, gezielte Unterstützung | Mittel | Mittel |

---

## Bekannte Limitationen

1. **Dieser Skill interpretiert Daten — er validiert sie nicht.** Die Qualität hängt von der Datenqualität ab. Wenn das Assessment schlecht designed war, sind die Interpretationen irreführend.

2. **Lernanalysen können Muster erkennen, aber selten Kausalität beweisen.** Wenn dieser Skill sagt „SuS wahrscheinlich ohne Analysestrategie," ist das eine Hypothese, nicht eine Diagnose.

3. **Die Evidenzbasis für Learning Analytics in Sekundarstufe ist weniger entwickelt als in höherer Bildung.** Siemens & Long und vieles der Literatur fokussieren auf Uni-Level. Die Prinzipien transferieren auf Schulen, aber die spezifischen Muster/Benchmarks können unterschiedlich sein.

4. **Analytics können das Curriculum unbeabsichtigt verengen.** Wenn LP-Unterricht nur aus Prüfungsvorbereitung besteht, läuft das Risiko, breiteres Lernen zu vernachlässigen. Wiliam (2011) argumentierte, dass formative Daten Unterricht informieren, ihn aber nicht definieren sollte.
