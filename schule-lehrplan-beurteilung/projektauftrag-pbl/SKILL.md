---
# AGENT SKILLS STANDARD FIELDS (v2)
name: projektauftrag-pbl
description: "Entwerfe einen Projekt-basierten Lern (PBL) Auftrag mit einer Fragestellung, Meilensteinen und Beurteilungs-Kriterien. Nutze diese Skill bei der Planung von PBL-Einheiten, Forschungs-Projekten oder erweiterten Untersuchungen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lehrplan-beurteilung/projektauftrag-pbl"
skill_name: "Projektauftrag Designer (PBL)"
domain: "schule-lehrplan-beurteilung"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Barron & Darling-Hammond (2008) — Teaching for meaningful learning: a review of research on inquiry-based and cooperative learning"
  - "Krajcik & Shin (2014) — Project-based learning: design features and key practices"
  - "Larmer, Mergendoller & Boss (2015) — Setting the Standard for Project Based Learning"
  - "Thomas (2000) — A review of research on project-based learning"
  - "Hmelo-Silver, Duncan & Chinn (2007) — Scaffolding and achievement in problem-based and inquiry learning"
input_schema:
  required:
    - field: "project_topic"
      type: "string"
      description: "Das Lehrplan-Inhalts-Gebiet, das das Projekt adressiert — was SuS lernen werden über"
    - field: "learning_objectives"
      type: "string"
      description: "Die spezifischen Kenntnisse und Fähigkeiten, die SuS durch das Projekt entwickeln sollen"
    - field: "student_level"
      type: "string"
      description: "Alters-/Klassenstufe"
    - field: "project_duration"
      type: "string"
      description: "Wie lange das Projekt läuft — z.B. 2 Wochen, 6 Lektionen, halbes Term"
  optional:
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach oder die Fächer (für fächerübergreifende Projekte)"
    - field: "real_world_connection"
      type: "string"
      description: "Ein spezifischer realer Kontext, ein Publikum oder ein Problem, mit dem die LP das Projekt verbinden möchte"
    - field: "student_profiles"
      type: "array"
      description: "Aus Kontext-Engine: Klassendaten einschliesslich Vorwissen, Interessen, spezielle Bedürfnisse"
    - field: "available_resources"
      type: "string"
      description: "Technologie, Materialien, Gemeinschaftsverbindungen, Fachunterstützung verfügbar"
    - field: "curriculum_framework"
      type: "string"
      description: "Aus Kontext-Engine: relevante Lehrplan-Standards, die das Projekt adressieren muss (z.B. Lehrplan 21)"
output_schema:
  type: "object"
  fields:
    - field: "driving_question"
      type: "string"
      description: "Eine offene, authentische Fragestellung, die die Untersuchung durchgehend treibt"
    - field: "project_brief"
      type: "object"
      description: "Das vollständige Projekt-Briefing, das SuS erhalten — Szenario, Anforderungen, Meilensteine, finales Produkt"
    - field: "milestone_sequence"
      type: "array"
      description: "Strukturierte Prüfpunkte mit expliziten Unterrichts-Punkten, sicherstellend, dass Lernen durch das Projekt passiert"
    - field: "assessment_criteria"
      type: "object"
      description: "Was bewertet wird und wie — einschliesslich Prozess- und Produkt-Beurteilung"
    - field: "explicit_instruction_map"
      type: "array"
      description: "Wo im Projekt explizites Lehren erforderlich ist — PBL funktioniert MIT direktem Unterricht, nicht statt"
chains_well_with:
  - "backwards-design-unit-planner"
  - "competency-unpacker"
  - "criterion-referenced-rubric-generator"
  - "differentiation-adapter"
  - "scaffolded-task-modifier"
  - "curriculum-knowledge-architecture-designer"
  - "critical-thinking-task-designer"
teacher_time: "5 minutes"
tags: ["PBL", "projektbasiertes-lernen", "forschung", "fragestellung", "authentische-beurteilung", "meilensteine", "Lehrplan-21"]
---

# Projektauftrag Designer (PBL)

## Was diese Skill bewirkt

Entwirft ein vollständiges PBL-Projekt-Briefing — einschliesslich einer Fragestellung, echtem Kontext, strukturierten Meilensteinen, expliziten Unterrichts-Punkten und Beurteilungs-Kriterien — das sicherstellt, dass SuS substanzielle Inhalte DURCH das Projekt lernen, anstatt einfach ein Produkt zu produzieren. Das kritische Entwurfs-Prinzip ist, dass effektives PBL authentische, offene Forschung mit strukturiertem Unterricht kombiniert: das Projekt gibt die Motivation und den Kontext; expliziter Unterricht gibt das Wissen und die Fähigkeiten, die SuS zum Erfolg brauchen. Die Ausgabe ist ein bereites Projekt-Briefing, das eine LP den SuS aushändigen kann, plus ein LP-seitiger Implementierungs-Leitfaden, der mappt, wo direkter Unterricht, formative Beurteilung und Scaffolding erforderlich sind. KI ist besonders wertvoll, weil effektives PBL-Design gleichzeitig Authentizität (die Projekt wirklich fühlt), Rigour (substanziale Inhalte passieren), Struktur (Meilensteine verhindern Abtrift) und Differenzierung (das Projekt ist für alle Lernenden erreichbar) balancieren muss — eine mehrschichtige Entwurfs-Herausforderung, die erhebliche Fachwissen und Zeit verlangt.

## Evidenzgrundlagen

Barron & Darling-Hammond (2008) überprüften Evidenz auf Forschungs-basiertes Lernen und identifizierten die Entwurfs-Merkmale, die effektive Projekte von Aktivitäten unterscheiden, die ansprechend aber pädagogisch seicht sind: effektives PBL verbindet sich zu bedeutungsvollen echten Problemen, verlangt disziplinary Denken (nicht nur Informationen-Sammlung), einschliesslich strukturierter Meilensteine und einarbeitet expliziten Unterricht an den Punkten, wo SuS neues Wissen oder neue Fähigkeiten brauchen. Sie fanden, dass PBL am wirksam ist, wenn es direktem Unterricht ergänzt, nicht ersetzt — das Projekt gibt einen Kontext, der Unterricht bedeutsam macht, und Unterricht gibt die Werkzeuge, die das Projekt möglich machen. Krajcik & Shin (2014) identifizierten fünf Schlüssel-Merkmale effektiven PBL: eine Fragestellung (authentisch, offen, verankert in echten Themen), situierte Forschung (Untersuchung in einem bedeutungsvollen Kontext), Zusammenarbeit, Lern-Technologien und konkrete Artefakte. Sie betonten, dass die Fragestellung das Entwurfs-Zentrum ist — es muss genuinely offen (nicht ein Frage mit einer vorbestimmten Antwort), verbunden zu SuS-Leben, und reich genug sein, um ausgedehnte Forschung zu unterstützen. Larmer, Mergendoller & Boss (2015) vom Buck-Institut für Bildung etablierten das "Gold Standard PBL" Rahmen mit sieben wesentlichen Entwurfs-Elementen: ein herausforderndes Problem oder eine Fragestellung, anhaltende Forschung, Authentizität, Schülerstimme und Wahlentscheidung, Reflexion, Kritik und Überarbeitung und ein öffentliches Produkt. Thomas (2000) überprüfte PBL-Forschung und fand positive Effekte auf Inhalts-Wissen und Problemlösung, aber warnte, dass schlecht entworfene Projekte zeitkonsumierend sein können, ohne proportionales Lernen zu produzieren — Struktur und expliziter Unterricht sind die unterscheidenden Faktoren. Hmelo-Silver, Duncan & Chinn (2007) zeigten, dass scaffolded Forschung unscaffolded Forschung übertrifft — SuS brauchen strukturierte Unterstützung, nicht nur offene Aufgaben.

## Input Schema

Die LP muss bereitstellen:
- **Projekt-Thema:** Worum es im Projekt geht. *z.B. "Wasserqualität in unserem lokalen Fluss" / "Eine nachhaltige Stadt entwerfen" / "Die Auswirkung der Industriellen Revolution auf arbeitende Menschen" / "Eine Kampagne starten zur Reduktion von Lebensmittel-Verschwendung in unserer Schule"*
- **Lern-Ziele:** Was SuS lernen sollen. *z.B. "Verstehe die Ursachen und Effekte von Wasser-Verschmutzung, wende wissenschaftliche Test-Methoden an, kommuniziere Erkenntnisse zu einem Publikum" / "Analysiere primäre und sekundäre Quellen über Arbeits-Bedingungen, konstruiere historische Argumente, nutzend Evidenz"*
- **Schülerstufe:** Klassenstufe. *z.B. "Klasse 8" / "Klasse 10"*
- **Projekt-Dauer:** Wie lange. *z.B. "6 Lektionen über 3 Wochen" / "Halb-Term (12 Lektionen)"*

Optional (aus Kontext-Engine, wenn verfügbar):
- **Schulfach:** Das Fach oder die Fächer
- **Echte Verbindung:** Spezifischer Kontext, den die LP möchte
- **Schüler-Profile:** Klassendaten, Interessen, Bedürfnisse
- **Verfügbare Ressourcen:** Technologie, Materialien, Gemeinschaftsverbindungen
- **Lehrplan-Rahmen:** Standards, die adressiert werden müssen (z.B. Lehrplan 21)

## Prompt

[Aufgrund von Token-Limits gekürzt — der vollständige Prompt folgt dem englischen Original mit detaillierten Anweisungen zum Entwerfen einer Fragestellung, Strukturierung von Meilensteinen mit expliziten Unterrichts-Punkten, sicherstellend authentisches Publikum und Ziel, Bau von Schülerstimme und Wahlentscheidung, Design von Prozess- und Produkt-Beurteilung, und Einbau von Reflexion und Überarbeitung.]

## Beispiel-Ausgabe

**Szenario:** *Projekt-Thema: "Wasserqualität in unserem lokalen Fluss" / Lern-Ziele: "Verstehe Ursachen und Indikatoren von Wasser-Verschmutzung, wende naturwissenschaftliche Test-Methoden an, evaluiere Evidenz zum Ziehen von Schlussfolgerungen, kommuniziere naturwissenschaftliche Erkenntnisse zu einem nicht-Fachpublikum" / Schülerstufe: "Klasse 8" / Projekt-Dauer: "8 Lektionen über 4 Wochen" / Schulfach: "Naturwissenschaften" / Echte Verbindung: "Der lokale Fluss hat Berichte von erhöhter Algen-Wachstum erhalten — ein echtes lokales Thema"*

---

## Projektauftrag: Fluss-Gesundheits-Untersuchung

**Fragestellung:** Wie gesund ist unser lokaler Fluss, und was sollte damit getan werden?
**Für:** Klasse 8 Naturwissenschaften
**Dauer:** 8 Lektionen über 4 Wochen
**Schulfach:** Naturwissenschaften (mit Elementen von Geographie und Kommunikation)

### Das Szenario

In den letzten Monaten haben Einwohner nahe des Flusses bemerkt, dass zunehmend grüne Algen auf der Wasser-Oberfläche wächst, besonders nahe der industriellen Zone. Einige Hundegeher haben berichtet, dass ihre Hunde krank wurden nach dem Trinken aus dem Fluss. Der lokale Gemeinderat möchte verstehen, was passiert — aber sie haben keine naturwissenschaftliches Fachkompetenz.

Sie brauchen eine Gruppe Naturwissenschaftler, die:
1. Die Wasser-Qualität an verschiedenen Orten auf dem Fluss testen
2. Identifizieren, was das Problem verursacht
3. Ihre Erkenntnisse in klar Sprache erklären
4. Empfehlen, was getan werden sollte

Deine Gruppe wurde beauftragt, die Untersuchung durchzuführen. Deine Erkenntnisse werden in einem naturwissenschaftlichen Bericht vorgestellt, geschrieben für den Gemeinderat — Menschen, die den Fluss wichtig nehmen aber haben keine naturwissenschaftliches Hintergrund-Wissen. Dein Bericht muss naturwissenschaftlich korrekt sein UND verständlich für Nicht-Fachleute.

### Was du produzieren wirst

**Finales Produkt:** Ein naturwissenschaftlicher Bericht (800–1200 Wörter) für den Gemeinderat, einschliesslich:
- Deine Wasser-Qualität-Erkenntnisse mit Daten
- Eine klare Erklärung, was die Daten bedeuten
- Eine evidenz-gestützte Schlussfolgerung über die Fluss-Gesundheit
- Spezifische Empfehlungen für Massnahmen

**Publikum:** Der Gemeinderat (nicht-Fachleute, die auf Grundlage deiner Erkenntnisse Entscheidungen treffen müssen)

**Präsentation:** Jede Gruppe wird eine 5-Minuten-Zusammenfassung ihres Berichts zum Publikum geben, mit der LP als Gemeinderat-Mitglied, der Fragen stellt.

### Meilensteine

**Meilenstein 1: Verstehen Wasser-Qualität — Lektionen 1–2**
- **Was du produzierst:** Eine Forschungs-Zusammenfassung (eine Seite), identifizierend die Schlüssel-Indikatoren von Wasser-Qualität und was sie beeinflusst. Einschliesslich mindestens 4 Indikatoren und erkläre, wie "gesund" und "ungesund" Levels für jeden aussehen.
- **Was du lernen musst:** Was Wasser-Qualität naturwissenschaftlich bedeutet, die Schlüssel-Indikatoren (pH, gelöstes Sauerstoff, Nitrat/Phosphat Levels, biologische Indikatoren), was Verschmutzung im Fluss verursacht, und was Eutrophizierung ist.
- **LP-Unterrichts-Punkt:** Lektion 1 — direkter Unterricht auf Wasser-Qualität-Indikatoren. Die LP erklärt pH, gelöstes Sauerstoff, Nitrate und Phosphate, nutzend Diagramme zum Zeigen, wie überschüssige Nährstoffe Algen-Blüten verursachen (Eutrophizierung). Das ist essentielles Wissen, das SuS nicht unabhängig in der verfügbaren Zeit entdecken können. Lektion 2 — LP modelliert, wie man Wasser-Qualität-Daten-Tabellen liest und interpretiert, demonstrierend, was "normal" Ranges aussehen und wie man besorgniserregende Lesungen erkennt.
- **Formatives Überprüfungs-Element:** Exit-Ticket Ende Lektion 2: "Eine Fluss-Probe zeigt pH 6,2, gelöstes Sauerstoff 4mg/L, und Nitrat-Levels 25mg/L. Ist dieser Fluss gesund? Erkläre dein Denken mit mindestens zwei Indikatoren." Das überprüft, ob SuS Daten interpretieren können, nicht nur Indikatoren aufrufen.
- **Schülerstimme und Wahlentscheidung:** Gruppen wählen, welche zwei Indikatoren sie ihre Untersuchung fokussieren auf (alle müssen pH und gelöstes Sauerstoff umfassen; Gruppen wählen ihren zusätzlichen Fokus basierend auf Interesse).

**Meilenstein 2: Sammeln und Aufzeichnen von Daten — Lektionen 3–4**
- **Was du produzierst:** Eine abgeschlossene Daten-Tabelle mit Wasser-Qualität-Messungen von mindestens 3 Sampling-Orten, genau aufgezeichnet mit Einheiten und wiederholten Messungen.
- **Was du lernen musst:** Wie man Test-Ausrüstung nutzt (pH-Meter, gelöstes Sauerstoff Sonde, Nitrat Test-Streifen), wie man einen fairen Test entwirft (Variablen kontrollierend wenn sampling), wie man Daten genau in Tabellen aufzeichnet.
- **LP-Unterrichts-Punkt:** Lektion 3 — LP demonstriert jedes Stück Test-Ausrüstung, modellierend die korrekte Prozedur und häufige Fehler. SuS trainieren mit präparierten Proben, bevor sie zum Fluss gehen. Das ist eine praktische Fähigkeit, die explizites Modellierung verlangt — SuS können nicht lernen, wie man eine gelöst-Sauerstoff-Sonde nutzt durch Experimentation. Lektion 4 — kurzer Unterricht auf fairen Tests: warum wir auf der gleichen Tiefe sampeln, wiederholte Lesungen nehmen und Bedingungen aufzeichnen. Das verbindet zu der breiteren naturwissenschaftlichen Fähigkeit, Variablen zu kontrollieren.
- **Formatives Überprüfungs-Element:** LP zirkuliert während Daten-Sammlung, überprüfend: Werden Lesungen mit korrekten Einheiten aufgezeichnet? Nehmen SuS wiederholte Messungen? Können SuS erklären, WARUM sie an mehreren Orten auf dem Fluss testen? (Falls SuS nicht erklären können warum, folgen sie einem Prozedur ohne den naturwissenschaftlichen Grund zu verstehen.)
- **Schülerstimme und Wahlentscheidung:** Gruppen wählen ihre Sampling-Orte auf dem Fluss (in der zugelassenen Fläche) basierend auf ihrer Hypothese über wo Verschmutzung schlimmst sein könnte. Sie müssen ihre Wahl naturwissenschaftlich rechtfertigen.

**Meilenstein 3: Analysieren Evidenz und Ziehen Schlussfolgerungen — Lektionen 5–6**
- **Was du produzierst:** Ein Daten-Analyse-Dokument, das einschliesst: Daten in angemessenen Graphen/Charts präsentiert, eine geschriebene Interpretation von was die Daten zeigen, und eine Schlussfolgerung über die Fluss-Gesundheit, gestützt durch Evidenz.
- **Was du lernen musst:** Wie man angemessene Graph-Typen für verschiedene Daten wählt, wie man Muster und Anomalien in Daten identifiziert, wie man evidenz-gestützte Schlussfolgerungen schreibt (Anspruch → Evidenz → Begründung).
- **LP-Unterrichts-Punkt:** Lektion 5 — LP modelliert, wie man Wasser-Qualität-Daten analysiert, nutzend ein Sample-Datensatz (NICHT die SuS-eigene Daten). Demonstriert: Bar-Charts wählen für Vergleich von Orten gegen Linien-Graphen zum Zeigen von Veränderung entlang dem Fluss, Muster identifizieren ("gelöstes Sauerstoff sinkt, wenn wir flussabwärts von der industriellen Zone bewegen — das suggeriert...") und zwischen Korrelation und Ursache unterscheiden. Lektion 6 — LP gibt einen Anspruch-Evidenz-Begründung (AEB) Rahmen und modelliert einen Schlussfolgerungs-Absatz schreiben, laut denkend über wie man Daten zu einem Anspruch verbindet.
- **Formatives Überprüfungs-Element:** Jede Gruppe reicht einen Draft-Schlussfolgerungs-Absatz (gerade ein) am Ende Lektion 6 ein. Die LP überprüft dies über Nacht und gibt zielgerichtet geschriebenes Feedback ob die Schlussfolgerung durch die zitierte Evidenz gestützt ist. Das ist der kritische Lern-Moment — können SuS Daten nutzen zum Stützen eines naturwissenschaftlichen Arguments?
- **Schülerstimme und Wahlentscheidung:** Gruppen wählen, wie ihre Daten visuell präsentiert werden (Graph-Typ, Layout, welche Vergleiche zu betonen). Sie wählen auch, welche Erkenntnisse in ihrer Schlussfolgerung zu betonen basierend auf was sie als am signifikantesten beurteilen.

**Meilenstein 4: Kommunizieren zum Nicht-Fach-Publikum — Lektionen 7–8**
- **Was du produzierst:** Der finales Bericht (800–1200 Wörter) und eine 5-Minuten-Präsentations-Zusammenfassung.
- **Was du lernen musst:** Wie man naturwissenschaftliche Erkenntnisse zum Nicht-Fachleuten kommuniziert — technische Sprache in erreichbare Erklärungen übersetzend ohne Genauigkeit zu verlieren, einen Bericht für ein Entscheidungs-Publikum strukturierend.
- **LP-Unterrichts-Punkt:** Lektion 7 — LP zeigt zwei Beispiel-Absätze nebeneinander: ein geschrieben für Naturwissenschaftler ("Die erhöhte NO₃⁻ Konzentration von 28mg/L suggeriert anthropogene Eutrophizierung") und ein geschrieben für den Gemeinderat ("Die Nitrat-Levels im Fluss sind höher, als sie sein sollten. Nitrate wirken wie Dünger für Algen — wenn Levels über 10mg/L steigen, Algen können unkontrolliert wachsen"). SuS identifizieren Unterschiede und trainieren "übersetzen" einen Absatz ihrer eigenen Analyse. Das ist eine spezifische Kommunikations-Fähigkeit, die Modellierung verlangt.
- **Formatives Überprüfungs-Element:** Peer-Überprüfung in Lektion 7: jede Gruppe liest einen anderen Gruppen-Draft-Bericht und antwortet drei Fragen: (1) Kannst du die Erkenntnisse ohne naturwissenschaftliches Hintergrund verstehen? (2) Ist es eine klare Empfehlung? (3) Was ist eine Sache, die mehr Erklärung braucht? Gruppen überarbeiten dann basierend auf Peer-Feedback, bevor finales Einreichen in Lektion 8.
- **Schülerstimme und Wahlentscheidung:** Gruppen wählen das Format und die Struktur ihres finalen Berichts (in den Wort-Limits) und wählen, wie ihre Präsentation zu geben (alle Mitglieder sprechen, eines präsentiert während andere Fragen handhaben, etc.).

### Beurteilungs-Kriterien

**Dein Projekt wird beurteilt auf:**

**Prozess-Beurteilung (30% der Gesamt-Mark):**
- Forschungs-Qualität (Meilenstein 1): Hast du genau die Wasser-Qualität-Indikatoren identifiziert und erklärt? (10%)
- Daten-Sammlung (Meilenstein 2): Wurden deine Daten genau aufgezeichnet, mit wiederholten Messungen und korrekten Einheiten? (10%)
- Reflexion und Überarbeitung: Hast du deinen Bericht basierend auf Peer-Feedback verbessert? Welche spezifischen Veränderungen hast du gemacht und warum? (10%)

**Produkt-Beurteilung (70% der Gesamt-Mark):**
- Naturwissenschaftliche Genauigkeit (25%): Sind deine Erkenntnisse korrekt? Werden deine Schlussfolgerungen durch die Daten gestützt? Erklärst du die Naturwissenschaft der Wasser-Verschmutzung korrekt?
- Evidenz-gestütztes Argument (20%): Nutzt du deine Daten als Evidenz? Ist dein Denken klar? Folgt deine Schlussfolgerung aus der Evidenz?
- Kommunikation zu Publikum (15%): Kann ein Nicht-Fachleute deinen Bericht verstehen? Hast du naturwissenschaftliche Sprache ohne Genauigkeits-Verlust übersetzt?
- Empfehlungen (10%): Sind deine Empfehlungen spezifisch, realistisch und basierend auf deinen Erkenntnissen?

**Anmerkung:** Visuelles Design des Berichts wird NICHT beurteilt. Ein Klartext-Bericht mit ausgezeichneter Naturwissenschaft bewertet höher als ein schön designter Bericht mit schwacher Naturwissenschaft. Fokus deine Zeit auf Verstehen und Argument, nicht Dekoration.

### Explizites Unterrichts-Map (LP-Leitfaden)

| Lektion | Expliziter Unterricht | Zweck | Timing |
|---|---|---|---|
| 1 | Wasser-Qualität-Indikatoren, Eutrophizierung-Prozess | Grund-Wissen, das SuS brauchen, bevor sie untersuchen | 25 Min direkter Unterricht + 20 Min geleitete Forschung |
| 2 | Lesend und interpretierend Wasser-Qualität-Daten-Tabellen | Prozedurale Fähigkeit: wie man numerische Daten sinn macht | 15 Min Modellierung + 30 Min Trainieren mit Sample-Daten |
| 3 | Ausrüstungs-Demonstration und fairer Test | Praktische Fähigkeit, die Modellierung verlangt — kann nicht sicher selbst gelernt werden | 20 Min Demonstration + 25 Min überwachtes Trainieren |
| 4 | Kurze Überprüfung von Variablen und Sampling-Entwurf | Verbindung praktische Arbeit zur naturwissenschaftlichen Methode | 10 Min Unterricht + Feld-Arbeit |
| 5 | Daten-Analyse: Graph-Auswahl, Muster-Identifikation | Analytische Fähigkeit: Bewegung von Daten zu Bedeutung | 20 Min Modellierung mit Sample-Datensatz + 25 Min geleitete Analyse |
| 6 | AEB-Rahmen für naturwissenschaftliche Schlussfolgerungen | Schreib-Fähigkeit: Struktur evidenz-gestützter Argument | 15 Min Modellierung + 30 Min Schreiben mit Feedback |
| 7 | Kommunizieren Naturwissenschaft zu Nicht-Fachleuten | Kommunikations-Fähigkeit: Publikum-Bewusstsein | 15 Min Modellierung + 30 Min Überarbeitung |
| 8 | — (SuS-Präsentationen und finales Einreichen) | Beurteilung und Celebration | — |

**Gesamter expliziter Unterrichts-Zeit:** Ungefähr 120 Minuten über 8 Lektionen. Die verbleibende Zeit ist strukturierte Forschung, Zusammenarbeits-Arbeit und formative Beurteilung. Das ist NICHT "LP spricht für 2 Lektionen, dann SuS machen ein Projekt für 6 Lektionen" — Unterricht ist verteilt durchgehend, gegeben wenn SuS es brauchen.

### Differenzierungs-Notizen

**Erweiterung:** SuS, die Meilensteine früh fertig werden, können zusätzliche Indikatoren untersuchen (biologische Indikatoren wie Wirbellosen-Vielfalt), ihre Erkenntnisse mit publikum Daten vergleichen, oder eine zweite Publikum-spezifische Bericht-Version schreiben (z.B. eine Version für Klasse 5-SuS, die Flüsse in Geographie studieren).

**Unterstützung:** Vor-Unterricht Wasser-Qualität-Wortschatz in einer kurzen Sitzung vor Lektion 1. Biete eine Daten-Aufzeichnungs-Vorlage mit Einheiten und Spalten-Überschriften bereits gefüllt an. Biete eine Bericht-Struktur-Vorlage mit Abschnitts-Überschriften und Satz-Anlässe für jeden Absatz an. Diese Gerüste strukturieren die Ausgabe ohne analytische Anforderung zu reduzieren — die SuS muss trotzdem Daten interpretieren und Schlussfolgerungen ziehen.

**EAL:** Biete ein Wortschatz-Liste von Schlüssel-naturwissenschaftlichen Begriffen mit alltägliche-Sprache Definitionen an. Nutze visuelle Diagramme des Eutrophizierung-Prozesses neben schriftlichen Erklärungen. Erlaube SuS, Erkenntnisse in ihrer Muttersprache zu diskutieren, bevor auf Deutsch schreiben. Biete Satz-Rahmungen für den AEB-Absatz: "Unsere Daten zeigen, dass ___. Das suggeriert ___, weil ___."

**ADHS:** Zerlege jedes Lektions-Aufgaben in kürzer Segmente mit klaren "fertig" Check-Punkte. Biete eine visuelle Zeitleiste der Projekt-Meilensteine. Während Feld-Arbeit, weise eine spezifische Rolle zu (Ausrüstungs-Manager, Daten-Aufzeichner) zum Bereitstellen von Fokus und Struktur.

### Bekannte Entwurfs-Wahlen

1. **Das Fluss-Szenario basiert auf einem echten lokalen Thema.** Falls der Fluss/Thema nicht deinem lokalen Kontext passt, adaptiere das Szenario — die Entwurfs-Prinzipien funktionieren mit jedem authentischen Umwelt-Thema. Die Schlüssel-Anforderung ist, dass das Problem REAL ist (oder realistisch simuliert), nicht erfunden.

2. **Der Bericht wird über die Präsentation priorisiert.** Der Bericht trägt 70% der Beurteilung; die Präsentation ist eine Kommunikations-Übung, nicht eine Leistungs-Beurteilung. Das vermeidet die Gültigkeits-Gefahr, öffentlich-sprechende Sicherheit statt naturwissenschaftliches Verstehen zu bewerten.

3. **Visuelles Design wird explizit aus Beurteilung ausgeschlossen.** Das ist eine bewusste Wahl zum Verhindern, dass SuS Zeit in Dekoration statt Naturwissenschaft investieren. Es entfernt auch eine sozioökonomische Barriere (Zugang zu Farb-Druck, Design-Software) und eine Gerechtigkeits-Barriere (SuS mit Legasthenie oder Feinmotorik-Schwierigkeiten werden nicht benachteiligt).

4. **Das Projekt verlangt expliziten Unterricht auf jedem Meilenstein.** Das ist das wichtigste Entwurfs-Merkmal. PBL-Forschung zeigt konsistent, dass Projekte ohne strukturierten Unterricht Engagement ohne proportionales Lernen produzieren (Thomas, 2000). Falls du die Unterrichts-Punkte entfernst, wird das Projekt eine Aktivität — SuS werden Berichte erzeugen, indem Informationen von Websites kopieren, statt die Naturwissenschaft zu verstehen.

5. **Vier Wochen ist die minimale lebensfähige Dauer für dieses Projekt.** Kürzere Zeitrahmen würde Daten-Sammlung erfordern zu schneiden (was authentische Forschung entfernt) oder die Überarbeitungs-Zyklus zu schneiden (was Lern-Gelegenheit entfernt). Falls Zeit begrenzt ist, reduziere die Zahl der Sampling-Punkte statt Meilensteine zu schneiden.

---

## Bekannte Limitierungen

1. **Die Qualität von PBL hängt stark von der Fragestellung ab.** Die generierte Fragestellung ist entwirft offen-ended, authentisch und die intendierte Lernzielen verlangend zu sein — aber die LP sollte evaluieren, ob sie ihre spezifischen SuS genuinely anspricht. Eine Fragestellung, die in einem Kontext funktioniert, kann in einem anderen flach fallen. Die LP kann die Fragestellung adaptieren brauchen, um mit ihren SuS Interessen und lokalem Kontext zu verbinden.

2. **Echte-Welt-Verbindungen verlangen lokales Wissen.** Das Projekt-Briefing generiert ein Szenario basierend auf dem angegebenen Thema und echter Verbindung, aber die LP kennt ihre Gemeinschaft, lokale Ressourcen und mögliche externe Partner besser als jede KI. Das generierte Szenario sollte als starker Ausgangs-Punkt behandelt werden, der von lokaler Adaptation nutzt — ersetze generische Details mit spezifischen lokalen Namen, Orten und Themen.

3. **PBL ist nicht angemessen für alle Lernzielen.** Einige Inhalte werden besser durch direkten Unterricht, Trainieren und Abruf gelehrt — besonders Grund-Wissen, das SuS vor Forschung brauchen (Hmelo-Silver et al., 2007). PBL funktioniert best für Ziele, die Anwendung, Analyse, Evaluation und Kommunikation beinhalten — nicht für Ziele, die primär über Fakten-Erwerb sind. Die LP sollte betrachten, ob PBL der richtige Ansatz für die angegebenen Ziele ist, bevor diese Skill nutzt.

4. **Das Explizite Unterrichts-Map ist ein Leitfaden, nicht ein Skript.** Die suggeriert Unterrichts-Punkte zeigen, WO Lehren erforderlich ist, aber können nicht die exakte Lehrmethode spezifizieren, die für jede Klasse arbeitet. Die LP muss professionelle Urteile nutzen über wie viel Unterricht zu geben, wie auf Missverständnissen zu reagieren, die während des Projekts entstehen und wenn zu pausieren zum Projekt für zusätzlichen Unterricht, das nicht im ursprünglichen Entwurf antizipiert wurde.
