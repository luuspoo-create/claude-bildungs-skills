# Claude Bildungs-Skills

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Skills](https://img.shields.io/badge/Skills-87-blue)](https://github.com/luuspoo-create/claude-bildungs-skills)
[![Based on](https://img.shields.io/badge/Basiert%20auf-claude--education--skills-green)](https://github.com/GarethManning/claude-education-skills)

Eine deutschsprachige Skill-Sammlung für [Claude](https://claude.ai) zur Unterstützung von Unterricht, Lernprozessen und Bildungsarbeit – zugeschnitten auf die **Sekundarstufe 1** im Schweizer Schulsystem (Lehrplan 21).

> **Dieses Projekt ist eine deutschsprachige Adaption von [claude-education-skills](https://github.com/GarethManning/claude-education-skills) von [Gareth Manning](https://substack.com/@garethmanning).** Das Original-Projekt umfasst 108 evidenzbasierte pädagogische Skills auf Englisch und enthält zusätzlich einen MCP-Server, eine 3-Layer-Architektur (Skill Library → Context Engine → Orchestrator) sowie ein maschinenlesbares YAML-Schema für programmatische Nutzung. Wir empfehlen, auch das [Original-Repository](https://github.com/GarethManning/claude-education-skills) zu erkunden – insbesondere die Dokumentation zu [ausgeschlossenen Frameworks](https://github.com/GarethManning/claude-education-skills/blob/main/EXCLUSIONS.md), die [Evidenzbewertung](https://github.com/GarethManning/claude-education-skills/blob/main/EVIDENCE.md) und die [Architektur](https://github.com/GarethManning/claude-education-skills/blob/main/ARCHITECTURE.md).

## Worum geht es?

Dieses Repository enthält **87 Skills** für Claude (Claude Code / Claude Cowork), die Lehrpersonen bei der Planung, Durchführung und Reflexion von Unterricht unterstützen. Die Skills decken ein breites Spektrum ab: von evidenzbasierten Lernstrategien über Beurteilungsdesign bis hin zur Erstellung professioneller Unterrichtsmaterialien.

**68 pädagogische Skills** basieren auf dem Original-Projekt [claude-education-skills](https://github.com/GarethManning/claude-education-skills) von **Gareth Manning** – einem Pädagogen und Curriculum-Designer mit 20 Jahren internationaler Schulerfahrung in 27 Ländern. Diese Skills wurden für den deutschsprachigen Bildungsraum übersetzt und adaptiert: Schweizer Hochdeutsch, Lehrplan-21-Kompetenzbereiche, Sek-1-Beispiele (7.–9. Klasse) und DACH-Schulkontext. Die restlichen **21 Skills** sind Eigenentwicklungen für den Schweizer Schulalltag, Dokumentenerstellung und Workflow-Automatisierung.

## Für wen ist das?

- **Lehrpersonen Sekundarstufe 1** (7.–9. Klasse), insbesondere in der Schweiz (Lehrplan 21)
- **Fachlehrpersonen** für Mathematik, Biologie, Chemie, Sport, Berufswahlunterricht und weitere Fächer
- **Weiterbildner:innen**, die KI-gestützte Unterrichtsplanung vermitteln
- **Bildungsinteressierte**, die evidenzbasierte Pädagogik mit KI-Tools verbinden möchten

Die Skills sind in Schweizer Hochdeutsch verfasst und referenzieren den Lehrplan 21, lassen sich aber auch im deutschen und österreichischen Schulsystem nutzen.

## Installation

### In Claude Code (Terminal)

```bash
# Repository klonen und Skills manuell in .claude/skills/ kopieren
git clone https://github.com/luuspoo-create/claude-bildungs-skills.git
cp -r claude-bildungs-skills/schule-ki-lernen ~/.claude/skills/
```

### In Claude Cowork (Desktop)

Skills können über die Projekteinstellungen als Plugin oder manuell über den Skills-Ordner hinzugefügt werden.

## Übersicht aller Skills

### Pädagogische Skills (übersetzt und adaptiert)

Diese 68 Skills basieren auf lernwissenschaftlicher Forschung und wurden aus dem Englischen übersetzt, auf den Lehrplan 21 angepasst und für die Sekundarstufe 1 zugeschnitten.

#### schule-ki-lernen (9 Skills)
KI-gestütztes Lernen und Lernwissenschaft – für den gezielten Einsatz von KI im Unterricht.

| Skill | Beschreibung |
|---|---|
| `adaptive-hinweisfolgen` | Gestaltet abgestufte Hinweisfolgen (vom vagen Tipp zum konkreten Hinweis), damit SuS bei Aufgaben nicht steckenbleiben |
| `ki-kollaboratives-lernen` | Plant Gruppenaufgaben, bei denen KI die Zusammenarbeit strukturiert |
| `ki-feedback-design` | Überprüft und verbessert KI-generiertes Feedback nach lernwissenschaftlichen Prinzipien |
| `formative-beurteilungsschleife` | Plant den Kreislauf aus Prüfen → Rückmelden → Anpassen für KI-Systeme |
| `intelligenter-tutoring-dialog` | Gestaltet sokratische Tutoring-Dialoge für KI-Chatbots |
| `lernanalysen-interpretation` | Hilft Lehrpersonen, Lerndaten (Quizergebnisse, Lernzeiten) sinnvoll zu interpretieren |
| `metakognition-ki-kontext` | Verhindert, dass SuS durch KI-Nutzung ihr eigenes Können überschätzen |
| `produktives-scheitern` | Plant Aufgaben, bei denen SuS erst scheitern dürfen, bevor die Lösung kommt |
| `selbsterklaerung-designer` | Erstellt Selbsterklärungsfragen zu Lösungsbeispielen und Texten |

#### schule-lehrplan-beurteilung (10 Skills)
Lehrplan, Beurteilung und Unterrichtsplanung – das Kerngeschäft.

| Skill | Beschreibung |
|---|---|
| `pruefungs-validitaet` | Überprüft, ob eine Prüfung wirklich misst, was sie messen soll |
| `rueckwaerts-planung` | Plant Unterrichtseinheiten rückwärts: erst Lernziele, dann Beurteilung, dann Aktivitäten |
| `kompetenz-entpacker` | Zerlegt einen breiten LP21-Kompetenzbereich in beobachtbare Teilkompetenzen |
| `kriterienraster-generator` | Erstellt kriterienbasierte Bewertungsraster mit klaren Qualitätsstufen |
| `differenzierung-adapter` | Passt bestehende Aufgaben an verschiedene Leistungsniveaus an |
| `lueckenanalyse-schuelerarbeit` | Analysiert Schülerarbeiten systematisch auf Lücken und Fehlvorstellungen |
| `wvk-wissenstypen` | Sortiert Inhalte in Wissen, Verstehen und Können (WVK) |
| `lernverlauf-builder` | Erstellt Lernverläufe vom Anfänger- zum Expertenniveau |
| `projektauftrag-pbl` | Erstellt Projektaufträge für projektbasiertes Lernen |
| `jahresplanung-designer` | Plant die Reihenfolge und den Umfang der Lerninhalte über ein Semester/Jahr |

#### schule-sprachfoerderung (4 Skills)
Sprachförderung und Deutsch als Zweitsprache (DaZ).

| Skill | Beschreibung |
|---|---|
| `fachsprache-satzrahmen` | Erstellt Satzrahmen für Fachsprache (z.B. «Die Funktion von … ist …») |
| `sprachliche-anforderungen` | Analysiert die sprachlichen Anforderungen einer Aufgabe |
| `sprachliche-aufgabenanpassung` | Passt Aufgaben sprachlich an für SuS mit Deutsch als Zweitsprache |
| `wortschatz-stufung` | Sortiert Fachwortschatz in Alltagssprache / Bildungssprache / Fachsprache |

#### schule-erfahrungslernen (4 Skills)
Erfahrungsbasiertes Lernen, Outdoor-Education und fächerübergreifende Bezüge.

| Skill | Beschreibung |
|---|---|
| `biophile-lernumgebung` | Gestaltet Lernumgebungen mit Naturbezug |
| `oekologische-forschungsfrage` | Plant ökologische Forschungsfragen als Anker für Unterrichtseinheiten |
| `faecheruebergreifende-realweltbezuege` | Verbindet Schulstoff mit realen Anwendungen fächerübergreifend |
| `outdoor-lernsequenz` | Plant Lernsequenzen im Freien |

#### schule-direkte-instruktion (5 Skills)
Wirksamer Frontalunterricht und direkte Instruktion.

| Skill | Beschreibung |
|---|---|
| `verstaendnischeck-protokoll` | Plant systematische Verständnischecks während des Unterrichts |
| `instruktionssequenz-builder` | Strukturiert «Ich mache / Wir machen / Du machst»-Sequenzen |
| `lektionseinstieg-designer` | Gestaltet aktivierende Lektionseinstiege |
| `uebungsaufgaben-sequenz` | Erstellt Übungsaufgaben-Reihen mit steigendem Schwierigkeitsgrad |
| `lautes-denken-skript` | Schreibt Skripte für lautes Denken (Modelling durch die Lehrperson) |

#### schule-interkulturelle-paedagogik (4 Skills)
Kulturelle Vielfalt im Klassenzimmer produktiv nutzen.

| Skill | Beschreibung |
|---|---|
| `kultursensible-unterrichtsgestaltung` | Passt Unterricht an die kulturelle Vielfalt der Klasse an |
| `emergentes-projektdesign` | Entwickelt Projekte, die sich aus den Interessen der SuS ergeben |
| `ubuntu-kollektives-lernen` | Gestaltet kooperative Aufgaben nach dem Ubuntu-Prinzip |
| `variationstheorie-aufgaben` | Variiert systematisch Aufgabenmerkmale, damit SuS das Wesentliche erkennen |

#### schule-medienkompetenz (5 Skills)
Lese-, Medien- und Informationskompetenz.

| Skill | Beschreibung |
|---|---|
| `kritisches-denken-aufgaben` | Entwickelt fachspezifische Aufgaben für kritisches Denken |
| `medienanalyse-protokoll` | Anleitung zur kritischen Medienanalyse |
| `lesestrategien-auswahl` | Wählt passende Lesestrategien für einen Text |
| `quellenbewertung-protokoll` | Anleitung zur Bewertung der Glaubwürdigkeit von Quellen |
| `textkomplexitaet-analyse` | Analysiert Textschwierigkeit und erstellt Hilfestellungen |

#### schule-lernwissenschaft (5 Skills)
Evidenzbasierte Lernstrategien aus der Gedächtnis- und Kognitionsforschung.

| Skill | Beschreibung |
|---|---|
| `elaborative-befragung` | Erzeugt «Warum?»-Fragen, die tiefes Verarbeiten fördern |
| `feedback-qualitaet` | Analysiert und verbessert schriftliches Feedback |
| `verschraenktes-lernen` | Verschachtelt Themen statt sie blockweise zu unterrichten (Interleaving) |
| `abrufuebungen-generator` | Erstellt Abrufübungen (Quizfragen) aus dem Gedächtnis (Retrieval Practice) |
| `verteiltes-ueben-planer` | Plant Wiederholungszeiten über Wochen/Monate (Spaced Practice) |

#### schule-weiterbildung (8 Skills)
Für Lehrpersonen, die Weiterbildungen leiten oder sich selbst weiterentwickeln.

| Skill | Beschreibung |
|---|---|
| `unterrichtscoaching-leitfaden` | Gesprächsleitfaden für Unterrichtscoaching |
| `unterrichtsbesuch-protokoll` | Erstellt Beobachtungsbogen für Unterrichtsbesuche |
| `lesson-study-zyklus` | Plant Lesson-Study-Zyklen im Team |
| `fachdidaktik-entwickler` | Entwickelt fachdidaktisches Wissen (PCK) |
| `weiterbildung-designer` | Plant Weiterbildungsveranstaltungen |
| `reflexionsfragen-generator` | Reflexionsfragen für Lehrpersonen |
| `aktionsforschung-zyklus` | Plant Aktionsforschungszyklen |
| `tpack-entwickler` | Entwickelt technologisch-pädagogisches Fachwissen |

#### schule-fragetechniken (4 Skills)
Fragetechniken und Diskussionsformate für den Unterricht.

| Skill | Beschreibung |
|---|---|
| `dialogische-gespraechszuege` | Erstellt dialogische Gesprächszüge für den Unterricht |
| `diskussionsformat-auswahl` | Wählt das passende Diskussionsformat (Fishbowl, Think-Pair-Share etc.) |
| `schluesselfragen-designer` | Gestaltet Schlüsselfragen, deren Antwort den nächsten Unterrichtsschritt bestimmt |
| `sokratische-fragenfolge` | Erstellt sokratische Fragenfolgen |

#### schule-selbstregulation (4 Skills)
Selbstreguliertes Lernen – SuS lernen, ihr Lernen zu steuern.

| Skill | Beschreibung |
|---|---|
| `fehleranalyse-protokoll` | Systematische Fehleranalyse durch SuS |
| `zielvereinbarung-designer` | Erstellt Zielvereinbarungs-Protokolle für SuS |
| `metakognitive-prompts` | Sammlung metakognitiver Prompts («Was war schwierig?», «Wo bin ich unsicher?») |
| `lernstrategien-auswahl` | Hilft SuS, effektive Lernstrategien zu wählen |

#### schule-wohlbefinden (6 Skills)
Wohlbefinden, Motivation und Handlungsfähigkeit im Schulalltag.

| Skill | Beschreibung |
|---|---|
| `handlungsfaehigkeit-geruest` | Fördert Eigenverantwortung und Handlungsfähigkeit |
| `zugehoerigkeit-klassenkultur` | Fördert Zugehörigkeit und positive Klassenkultur |
| `wenn-dann-plaene` | Erstellt «Wenn-Dann»-Pläne für SuS (Implementation Intentions) |
| `motivationsdiagnostik` | Analysiert Motivationsprobleme und gestaltet Aufgaben um |
| `selbstwirksamkeit-aufbau` | Baut Selbstwirksamkeit systematisch auf |
| `wohlbefinden-lernen-mapper` | Zeigt Zusammenhänge zwischen Wohlbefinden und Lernen auf |

---

### Eigene Schul-Skills

Diese Skills wurden speziell für den Schweizer Schulalltag entwickelt.

| Skill | Beschreibung |
|---|---|
| `schule-lehrmittel` | Erstellt professionelle, druckfertige Unterrichtsmaterialien als PDF: Arbeitsblätter, Dossiers, Prüfungen, Bewertungsraster und Informationsblätter für die Sek 1 |
| `schule-kommunikation` | Schreibt E-Mails, Briefe und Mitteilungen im Stil einer Schweizer Schulleitung |
| `buch-stil` | Stilvorlage für das Buchprojekt «KI und Lernen» |

### Content-Erstellung

Skills für die Erstellung von Social-Media-Inhalten und Präsentationen.

| Skill | Beschreibung | Einsatz für Lehrpersonen |
|---|---|---|
| `content-frontend-slides` | Erstellt animierte HTML-Präsentationen | Visuell ansprechende Unterrichtspräsentationen, Elternabende, Weiterbildungsvorträge |
| `content-instagram-carousel` | Generiert Instagram-Carousels als HTML | Schulkommunikation auf Social Media, Bildungsthemen visuell aufbereiten |

### Dokument-Tools

Technische Skills für die Erstellung professioneller Dokumente – sprachunabhängig und universell einsetzbar.

| Skill | Beschreibung | Einsatz für Lehrpersonen |
|---|---|---|
| `dokument-docx` | Erstellt und bearbeitet Word-Dokumente | Elternbriefe, Berichte, Protokolle, Formulare |
| `dokument-pdf` | Erstellt, liest und bearbeitet PDFs | Arbeitsblätter, Prüfungen, Zeugnisformulare |
| `dokument-pptx` | Erstellt und bearbeitet PowerPoint-Dateien | Unterrichtspräsentationen, Elternabende |
| `dokument-xlsx` | Erstellt und bearbeitet Excel-Dateien | Notenberechnung, Klassenlisten, Statistiken |

### System-Skills (Workflow)

Diese Skills automatisieren Arbeitsabläufe in Claude. Sie sind auf Englisch, da sie technisch und sprachunabhängig funktionieren.

| Skill | Beschreibung | Einsatz für Lehrpersonen |
|---|---|---|
| `system-wiki` | Zentrale Wissensdatenbank verwalten | Unterrichtsideen, Entscheidungen und Fachwissen dauerhaft speichern |
| `system-brainstorming` | Strukturiertes Brainstorming vor kreativer Arbeit | Neue Unterrichtseinheiten, Projekte oder Schulentwicklungsideen sammeln |
| `system-parallel-agents` | Mehrere Aufgaben gleichzeitig bearbeiten | Mehrere Arbeitsblätter oder Prüfungen parallel erstellen lassen |
| `system-subagent` | Aufgaben in Teilaufgaben zerlegen | Komplexe Unterrichtsplanungen in handhabbare Schritte aufteilen |
| `system-writing-plans` | Implementierungspläne schreiben | Grössere Projekte (Schulentwicklung, Lehrplanarbeit) strukturiert planen |
| `system-executing-plans` | Geschriebene Pläne ausführen | Geplante Projekte Schritt für Schritt umsetzen |
| `system-skill-creator` | Neue Skills erstellen und bestehende optimieren | Eigene Skills für spezifische Unterrichtsbedürfnisse entwickeln |
| `system-web-artifacts` | Komplexe Web-Anwendungen erstellen | Interaktive Lerntools, Quizzes oder Visualisierungen bauen |
| `system-schedule` | Geplante Aufgaben erstellen | Wiederkehrende Aufgaben automatisieren |
| `system-reminders` | Apple Erinnerungen verwalten | Schultermine und Pendenzen im Blick behalten |

## Evidenzbasis

Die pädagogischen Skills basieren auf peer-reviewter Forschung. Jeder Skill dokumentiert seine Evidenzquellen im Frontmatter der SKILL.md-Datei. Zu den referenzierten Forscher:innen gehören u.a.:

- **Hattie und Timperley** (Feedback), **Wiliam und Black** (formative Beurteilung), **Rosenshine** (Instruktionsprinzipien)
- **Sweller** (Cognitive Load Theory), **Bjork und Bjork** (Desirable Difficulties), **Dunlosky et al.** (Lernstrategien)
- **VanLehn** (Intelligent Tutoring Systems), **Kapur** (Productive Failure), **Chi** (Self-Explanation)
- **Wiggins und McTighe** (Understanding by Design), **Tomlinson** (Differenzierung), **Marzano** (Taxonomie)

### Evidenzstärke-Bewertung

Jeder Skill enthält eine transparente Bewertung der Evidenzstärke (übernommen aus dem [Original-Projekt](https://github.com/GarethManning/claude-education-skills)):

| Bewertung | Bedeutung |
|---|---|
| **Strong** | Mehrere Meta-Analysen oder systematische Reviews mit konsistenten Ergebnissen |
| **Moderate** | Solide experimentelle Evidenz mit gewisser kontextueller Variation |
| **Emerging** | Vielversprechende Forschungsbasis mit begrenzter Replikation |
| **Original** | Praxis-Framework; klar gekennzeichnet, nicht als forschungsgestützt deklariert |

Frameworks ohne empirische Grundlage – wie Lerntypen (VAK) – wurden bewusst nicht aufgenommen. Das Original-Projekt dokumentiert die Ausschlüsse und deren Begründung in [EXCLUSIONS.md](https://github.com/GarethManning/claude-education-skills/blob/main/EXCLUSIONS.md).

### Verhältnis zum Original-Projekt

Dieses Repository ist eine **Übersetzung und Adaption**, kein Fork im technischen Sinne. Die wichtigsten Unterschiede:

| Aspekt | [Original](https://github.com/GarethManning/claude-education-skills) | Dieses Repo |
|---|---|---|
| Sprache | Englisch | Deutsch (Schweizer Hochdeutsch) |
| Schulsystem | International (v.a. UK/IB) | Schweiz (Lehrplan 21), DACH |
| Zielstufe | K–12 / Universität | Sekundarstufe 1 (7.–9. Klasse) |
| Anzahl Skills | 108 pädagogische Skills | 68 übersetzte + 21 eigene Skills |
| MCP-Server | Ja (live) | Nein (geplant) |
| Zusätzlich | Architektur, Registry, Orchestrator | Dokument-Tools, Content-Skills, System-Skills |

Für das englischsprachige Original mit MCP-Server und programmatischer API: [github.com/GarethManning/claude-education-skills](https://github.com/GarethManning/claude-education-skills)

## Lizenz

Dieses Werk ist lizenziert unter der [Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).

[![CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/)

Die **68 übersetzten pädagogischen Skills** (alle `schule-*`-Ordner ausser `schule-kommunikation`, `schule-lehrmittel` und `buch-stil`) basieren auf [claude-education-skills](https://github.com/GarethManning/claude-education-skills) von **Gareth Manning**, lizenziert unter CC BY-SA 4.0.

Das bedeutet:

- **Namensnennung** – Du musst angemessene Urheber- und Rechteangaben machen und einen Link zur Lizenz beifügen.
- **Weitergabe unter gleichen Bedingungen** – Wenn du das Material veränderst, musst du deine Beiträge unter derselben Lizenz verbreiten.

## Mitwirken

Beiträge sind willkommen! Du kannst:

- **Fehler melden** – Erstelle ein Issue, wenn ein Skill nicht wie erwartet funktioniert
- **Übersetzungen verbessern** – Pull Requests mit besseren Formulierungen oder LP21-Bezügen
- **Neue Skills beisteuern** – Erstelle einen Fork und reiche neue deutschsprachige Skills ein
- **Feedback geben** – Wie nutzt du die Skills im Unterricht? Teile deine Erfahrungen!

## Danksagung

Besonderer Dank an **[Gareth Manning](https://github.com/GarethManning)** für die grossartige Arbeit am [claude-education-skills](https://github.com/GarethManning/claude-education-skills)-Projekt, das die evidenzbasierte Grundlage für 68 der hier enthaltenen Skills bildet.

---

Eine Skill-Sammlung für Lehrpersonen der Sekundarstufe 1 in der Deutschschweiz.
