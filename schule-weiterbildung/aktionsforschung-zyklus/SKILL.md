---
# AGENT SKILLS STANDARD FIELDS (v2)
name: aktionsforschung-zyklus
description: "Gestalte einen Aktionsforschungs-Zyklus von Forschungsfrage durch Datensammlung zu evidenzgestützter Aktion. Nutze diesen Skill beim Start von Aktionsforschung, von LP-geleitetem Inquiry oder professioneller Untersuchung."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "professionelle-lernentwicklung/aktionsforschung-zyklus"
skill_name: "Aktionsforschungs-Zyklus-Designer"
domain: "professionelle-lernentwicklung"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Timperley (2011) — Realizing the Power of Professional Learning"
  - "Timperley et al. (2007) — Teacher Professional Learning and Development: Best Evidence Synthesis"
  - "Cochran-Smith & Lytle (2009) — Inquiry as Stance: practitioner research for the next generation"
  - "Dana & Yendol-Hoppey (2014) — The Reflective Educator's Guide to Classroom Research"
  - "Earl & Katz (2006) — Leading Schools in a Data-Rich World"
input_schema:
  required:
    - field: "forschungsfrage"
      type: "string"
      description: "Die Frage die die LP untersuchen will — über ihre Praxis und deren Auswirkung auf Schüler-Lernen"
    - field: "lpKontext"
      type: "string"
      description: "Die Situation der LP — Fach, Klassenstufe, professionelle Lernziel"
  optional:
    - field: "suschuler"
      type: "string"
      description: "Alter/Klassenstufe"
    - field: "verfuegbareZeit"
      type: "string"
      description: "Wie viel Zeit die LP für die Inquiry widmen kann — ein Term, ein Jahr"
    - field: "verfuegbareDaten"
      type: "string"
      description: "Welche Daten die LP bereits hat oder sammeln kann — Test-Scores, SuS-Arbeit, Umfragen, Beobachtungen"
    - field: "kooperation"
      type: "string"
      description: "Ob die LP allein oder im Team arbeitet"
    - field: "schulunterstützung"
      type: "string"
      description: "Ob die Schule ein strukturiertes Inquiry-Programm hat oder die LP unabhängig arbeitet"
output_schema:
  type: "object"
  fields:
    - field: "inquiryDesign"
      type: "object"
      description: "Der komplette Inquiry-Zyklus — Frage, Baseline, Intervention, Datensammlung, Analyse, Schlussfolgerungen"
    - field: "datenplan"
      type: "object"
      description: "Welche Daten sammeln, wann, und wie — praktisch und machbar"
    - field: "analyserahmen"
      type: "object"
      description: "Wie die Daten analysieren — welche Muster schauen, wie zu Schlussfolgerungen kommen"
    - field: "teilungsplan"
      type: "string"
      description: "Wie Ergebnisse mit Kolleg*innen teilen — das Lernen über die individuelle LP verbreiten"
chains_well_with:
  - "reflexionsfragen-generator"
  - "lesson-study-zyklus"
  - "unterrichtscoaching-leitfaden"
  - "weiterbildung-designer"
  - "fachdidaktik-entwickler"
  - "tpack-entwickler"
teacher_time: "4 minutes"
tags: ["Inquiry", "Timperley", "Praxis-Forschung", "Aktionsforschung", "Daten-gestützt", "professionelles-Lernen"]
---

# Aktionsforschungs-Zyklus-Designer

## Was dieser Skill leistet

Gestaltet einen strukturierten Aktionsforschungs-Zyklus — eine Form von Praxis-Forschung wo eine LP eine spezifische Frage über ihre Praxis und deren Auswirkung auf Schüler-Lernen untersucht, Evidenz sammelt, analysiert was sie findet, und Schlussfolgerungen zieht die ihre zukünftige Unterrichtsweise leiten. Das kritische Prinzip aus Timerley-Forschung: Das mächtigste professionelle Lernen geschieht wenn LP die AUSWIRKUNG ihrer Praxis auf Schüler-Lernoutcomes untersuchen, nicht nur reflektieren was sie taten. Der Output umfasst ein komplettes Inquiry-Design (Frage, Baseline, Intervention, Datensammlung, Analyse, Schlussfolgerungen), einen praktischen Datenplan (was sammeln und wann — machbar innerhalb LP-Workload), einen Analyserahmen, und einen Plan zum Teilen von Erkenntnissen. KI ist besonders wertvoll weil das Gestalten einer rigorosen aber handhabbaren Inquiry erfordert Balancieren von Forschungs-Standards (valide Frage, geeignete Evidenz, faire Analyse) mit praktischen Unterrichts-Limits (begrenzte Zeit, begrenzte Forschungs-Ausbildung, Bedarf dass Inquiry zum Lernen dient, nicht nur Untersuchung).

## Evidence Foundation

Timperley (2011) platzierte LP-Inquiry am Zentrum von effektivem professionellem Lernen, argumentierend dass der mächtigste Zyklus ist: Schüler-Lernbedarf identifizieren → identifizieren was die LP lernen muss → engagieren in professionellem Lernen → wenden es in Praxis an → beurteilen die Auswirkung auf SuS → verfeinern. Dies ist Inquiry — eine systematische Untersuchung in die Beziehung zwischen Unterricht und Lernen. Timperley et al. (2007) fanden dass die wirksamsten Weiterbildungs-Programme LPs aktiv untersuchen ließen ob neue Praktiken ihre SuS impacteten — nicht nur Strategien umsetzen sondern überprüfen ob sie funktionieren. Cochran-Smith & Lytle (2009) entwickelten „Inquiry as Stance" — die Idee dass Inquiry nicht ein einmaliges Projekt ist sondern eine professionelle Disposition: eine gewöhnliche Orientierung zu Fragen stellen, Untersuchen, und von Praxis Lernen. Dana & Yendol-Hoppey (2014) gaben praktische Guidance für Klassenzimmer-Forschung, betonend dass LP-Inquiry nicht die Standards von akademischer Forschung erfüllen muss — es ist praktisch, kontext-spezifisch, und gestaltet um Unterricht zu verbessern, nicht um generalisierbares Wissen zu produzieren. Earl & Katz (2006) unterschieden zwischen „Daten-getrieben" Entscheidungsfindung (Daten diktieren) und „Daten-gestützt" Entscheidungsfindung (Daten als ein Input neben professioneller Urteilskraft). LP-Inquiry ist Daten-gestützt — die Daten illuminieren, aber die LP interpretiert.

## Input Schema

Die LP muss bereitstellen:
- **Forschungsfrage:** Was sie untersuchen will. *z.B. „Verbessert die Nutzung von Retrieval Practice am Anfang jeder Lektion die Retention von Schlüssel-Vokabular bei meinen 9er-Schülern?" / „Was passiert mit SuS-Partizipation wenn ich ‚Hände oben' durch Cold-Calling ersetze?" / „Wie beeinflusst das Bereitstellen schriftlicher Success-Criteria die Qualität der Creative Writing-Arbeiten meiner 7er-Schüler?"*
- **LP-Kontext:** Ihre Situation. *z.B. „9. Klasse Naturwissenschaften, 5 Jahre Erfahrung, interessiert in Gedächtnis und Retention" / „NQT, 7. Klasse Deutsch, struggel mit ungleicher Partizipation"*

Optional (injiziert durch Kontextmodul, wenn verfügbar):
- **Schüler-Level:** Klassenstufe
- **Verfügbare Zeit:** Dauer des Inquiry
- **Verfügbare Daten:** Welche Daten zugänglich sind
- **Kooperation:** Solo oder Team
- **Schulunterstützung:** Strukturiertes Programm oder unabhängig

## Prompt

```
Du bist Expert*in in LP-Inquiry und Praxis-Forschung mit umfassender Kenntnis von Timerley (2011) Inquiry-Zyklus, Cochran-Smith & Lytle (2009) Inquiry als Stance, Dana & Yendol-Hoppey (2014) praktische Classroom-Forschungs-Methoden, und Earl & Katz (2006) Daten-gestützte professionelle Praxis. Du verstehst dass LP-Inquiry PRAKTISCHE Forschung ist — gestaltet um Unterricht zu verbessern, nicht um akademische Publikationen zu produzieren. Sie muss rigorous genug sein um zuverlässige Erkenntnisse zu produzieren aber handhabbar genug um in eine LP-Workload zu passen.

KRITISCHE PRINZIPIEN:
- **Die Frage muss über AUSWIRKUNG sein, nicht nur Praxis.** „Nutze ich Retrieval Practice?" ist über Praxis. „Verbessert meine Nutzung von Retrieval Practice die Schüler-Retention?" ist über Auswirkung. Auswirkungs-Fragen sind nützlicher weil sie sich fokussieren auf was matters: Schüler-Lernen.
- **Das Inquiry muss HANDHABBAR sein.** Eine LP die Inquiry neben einer vollen Unterrichts-Last durchführt kann nicht Daten mit der Rigorosität eines Universität-Forschers sammeln. Gestalte Datensammlung die in bestehende Routinen passt — nutze Schüler-Arbeit, bestehende Bewertungen, und kurze Beobachtungen statt neuen Workload zu erstellen.
- **Baseline bevor Intervention.** Die LP muss den Ausgangspunkt kennen bevor sie Veränderung messen kann. Wie sieht Schüler-Lernen aus BEVOR die neue Praxis eingeführt wird?
- **Multiple Quellen von Evidenz.** Keine einzelne Datenquelle ist ausreichend. Trianguliere: Schüler-Arbeit + LP-Beobachtung + Schüler-Stimme. Wenn alle drei in die gleiche Richtung zeigen, ist die Erkenntnis zuverlässig.
- **Ehrliche Schlussfolgerungen.** Das Inquiry sollte berichten was GEFUNDEN wurde, nicht was erhofft wurde. Wenn die Intervention nicht funktionierte, das ist eine wertvolle Erkenntnis — sie verhindert dass die LP bei einer ineffektiven Praxis persistiert.

Deine Aufgabe ist es, einen LP-Inquiry zu gestalten für:

**Forschungsfrage:** {{forschungsfrage}}
**LP-Kontext:** {{lpKontext}}

Das folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Nutze was verfügbar ist; ignoriere Felder mit „nicht angegeben".

**Schüler-Level:** {{suschuler}} — wenn nicht angegeben, leite ab von der Frage.
**Verfügbare Zeit:** {{verfuegbareZeit}} — wenn nicht angegeben, gestalte für ein-Term-Inquiry (10–12 Wochen).
**Verfügbare Daten:** {{verfuegbareDaten}} — wenn nicht angegeben, identifiziere handhabbare Datenquellen.
**Kooperation:** {{kooperation}} — wenn nicht angegeben, gestalte für Solo-Inquiry mit optionaler Kolleg*innen-Review.
**Schulunterstützung:** {{schulunterstützung}} — wenn nicht angegeben, gestalte als unabhängiges Inquiry.

Gebe deine Ausgabe in diesem Format zurück:

## LP-Inquiry: [Frage]

**Frage:** [Die Forschungsfrage]
**LP:** [Kontext]
**Dauer:** [Wie lange]

### Inquiry-Design

**Phase 1 — Baseline (Wochen 1–2):**
[Welche Daten vor Intervention-Start sammeln]

**Phase 2 — Intervention (Wochen 3–8):**
[Was die LP in ihrer Praxis ändert und wie]

**Phase 3 — Datensammlung (Durchgehend):**
[Welche Daten während Intervention sammeln — praktische, handhabbare Quellen]

**Phase 4 — Analyse (Wochen 9–10):**
[Wie die Evidenz analysieren — was zu schauen, wie zu Baseline vergleichen]

**Phase 5 — Schlussfolgerungen (Wochen 11–12):**
[Wie Schlussfolgerungen ziehen und entscheiden was nächstes zu tun]

### Datenplan

| Datenquelle | Was es zeigt | Wann sammeln | Zeit benötigt |
|---|---|---|---|
| [Quelle 1] | [Was es reveals] | [Timing] | [Zeit-Kosten] |
| [Quelle 2] | | | |
| [Quelle 3] | | | |

### Analyserahmen

[Wie die Daten verstehen — welche Muster zu schauen, wie Baseline und Post-Intervention vergleichen, wie mit gemischten Ergebnissen umgehen]

### Teilungsplan

[Wie Erkenntnisse mit Kolleg*innen teilen — nicht als formale Präsentation sondern als praktisches professionelles Wissen]

### Ehrliche Einschränkungen

[Was das Inquiry kann und nicht kann beweisen — die Limitationen eines kleine-Scale-Klassenzimmer-Inquiry]

**Selbstprüfung vor Rückgabe:** Überprüfe dass (a) die Frage über Auswirkung auf Schüler-Lernen ist, (b) Baseline-Daten vor Intervention gesammelt werden, (c) multiple Datenquellen genutzt werden, (d) der Datenplan handhabbar within Unterrichts-Workload ist, (e) der Analyserahmen ehrlich über Limitationen ist, und (f) der Teilungsplan das Lernen über die individuelle LP verbreitet.
```

## Example Output

**Szenario:** *Forschungsfrage: „Verbessert die Nutzung von Retrieval Practice am Anfang jeder Lektion die Retention von Schlüssel-Vokabular bei meinen 9er-Schülern?" / LP-Kontext: „9. Klasse Naturwissenschaften, 5 Jahre Erfahrung, interessiert in kognitiver Wissenschaft und Gedächtnis-Forschung, bemerkt dass SuS mit Thema-spezifischem Vokabular struggeln und zwischen Lektionen Schlüssel-Begriffe vergessen" / Verfügbare Zeit: „Ein Term — 10 Wochen" / Verfügbare Daten: „End-of-Topic-Test-Scores von den vorherigen zwei Themen (Baseline-Vergleich), SuS-Übungshefte, und LP-Lektions-Records"*

---

## LP-Inquiry: Retrieval Practice und Vokabular-Retention

**Frage:** Verbessert die Nutzung von Retrieval Practice am Anfang jeder Lektion die Retention von Schlüssel-Vokabular bei 9er-Schülern?
**LP:** 9. Klasse Naturwissenschaften, 5 Jahre Erfahrung
**Dauer:** 10 Wochen (ein Term)

### Inquiry-Design

**Phase 1 — Baseline (Wochen 1–2):**
Bevor Retrieval Practice eingeführt wird, sammle Baseline-Daten zur aktuellen Vokabular-Retention:
- Verwalte ein kurzes Vokabular-Quiz (10 Schlüssel-Begriffe von dem vorherigen Thema) am ANFANG des neuen Terms, bevor irgendein neuer Unterricht. Das misst wie viel Vokabular SuS über die Ferien/Lücke behalten haben.
- Überprüfe End-of-Topic-Test-Scores von den VORHERIGEN zwei Themen. Wie performten SuS auf Vokabular-abhängigen Fragen? Das gibt historischen Vergleichs-Daten.
- Frage SuS (kurze Umfrage, 3 Fragen): „Wie lernst du für Naturwissenschaften? Wenn du ein Schlüssel-Wort vergisst, was tust du? Wie sicher bist du mit Naturwissenschaften-Vokabular?" Dies erfasst SuS-Wahrnehmung vor Intervention.

**Phase 2 — Intervention (Wochen 3–8):**
Führe eine 5-Minuten-Retrieval-Practice-Routine am Anfang jeder Naturwissenschaften-Lektion ein:
- „Letzte Lektion / letzte Woche / letzten Monat"-Format: 3 Fragen angezeigt an der Tafel. SuS antworten aus Gedächtnis auf Mini-Whiteboards oder in dem dedizierten Abschnitt des Übungshefts. LP überprüft Antworten, adressiert Fehler, bewegt sich weiter. Gesamtzeit: 5 Minuten maximal.
- Fragen fokussieren spezifisch auf Vokabular: „Was bedeutet ‚Photosynthese'?" / „Nutze das Wort ‚Enzym' in einem Satz der zeigt dass du es verstehst" / „Was ist der Unterschied zwischen ‚Respiration' und ‚Atmen'?"
- Die LP führt ein Log: welche Fragen wurden gestellt, welcher Prozentsatz von SuS antwortete korrekt. Das dauert 30 Sekunden pro Lektion (eine Tally auf einem Sticky Note).

**Phase 3 — Datensammlung (Durchgehend):**
1. **Wöchentliche Retrieval-Daten:** Das LP-Lektions-Log — Prozentsatz von SuS die Vokabular-Fragen korrekt beantworten. Track das über die 6 Interventions-Wochen um zu sehen ob Genauigkeit verbessert.
2. **Mittelpunkt-Vokabular-Quiz (Woche 6):** Ein 10-Begriff-Vokabular-Quiz zum aktuellen Thema, verwaltet unter denselben Bedingungen wie das Baseline-Quiz. Dies bietet direkten Vergleich.
3. **End-of-Topic-Test (Woche 8):** Vergleiche SuS-Performance auf Vokabular-abhängigen Fragen zu Performance auf vorherigen zwei End-of-Topic-Tests (die Baseline-Daten).
4. **Schüler-Stimme (Woche 8):** Wiederhole die 3-Frage-Umfrage von Woche 1. Hat sich SuS-Sicherheit mit Vokabular verändert? Haben SuS die Retrieval-Routine bemerkt?

**Phase 4 — Analyse (Wochen 9–10):**
Vergleiche:
- Baseline-Vokabular-Quiz-Scores (Woche 1) vs. Mittelpunkt-Quiz-Scores (Woche 6): hat Retention verbessert?
- End-of-Topic-Test Vokabular-Scores (aktuelles Thema, mit Retrieval Practice) vs. vorherige Thema-Scores (ohne): hat Performance auf Vokabular-abhängigen Fragen verbessert?
- Wöchentliche Retrieval-Daten: gibt es einen Trend? Antworten SuS in Woche 8 öfter korrekt als in Woche 3?
- Schüler-Umfrage: hat sich selbst-berichtete Sicherheit verändert?

**Phase 5 — Schlussfolgerungen (Wochen 10–11):**
Antworte die Inquiry-Frage ehrlich:
- Wenn die Daten Verbesserung über mehrere Quellen zeigen (Quiz-Scores auf, Test-Performance auf, Retrieval-Genauigkeit trending auf, SuS fühlen sich sicherer): conclude dass Retrieval Practice die Vokabular-Retention für diese Klasse zu verbessern scheint.
- Wenn die Daten gemischt sind (Quiz-Scores verbessert aber Test-Performance änderte nicht): untersuche warum. Mögliche Erklärungen: der Test isolierte nicht nur Vokabular (andere Faktoren beeinflussten Score), oder Retrieval Practice verbesserte Kurzzeit-Retention aber nicht Langzeit-(brauchte länger).
- Wenn die Daten keine Verbesserung zeigen: report das ehrlich. Mögliche Erklärungen: 5 Minuten war nicht genug „Dosierung," die Fragen zielten nicht auf das richtige Vokabular, oder Vokabular-Retention hängt ab von Faktoren außerhalb von Retrieval Practice.

### Datenplan

| Datenquelle | Was es zeigt | Wann sammeln | Zeit benötigt |
|---|---|---|---|
| Baseline-Vokabular-Quiz (10 Begriffe) | Pre-Intervention-Retention-Level | Woche 1 | 10 Min Lektionszeit, 15 Min zu markieren |
| Wöchentliches Retrieval-Log (Tally) | Trend in Retrieval-Genauigkeit | Jede Lektion (Wochen 3–8) | 30 Sekunden pro Lektion |
| Mittelpunkt-Vokabular-Quiz | Mittelpunkt-Intervention-Retention | Woche 6 | 10 Min Lektionszeit, 15 Min zu markieren |
| End-of-Topic-Test (Vokabular-Fragen isoliert) | Post-Intervention-Performance | Woche 8 | Bereits Teil von normalem Assessment |
| Schüler-Umfrage (3 Fragen) | Schüler-Wahrnehmung von Vokabular-Sicherheit | Wochen 1 und 8 | 5 Min Lektionszeit |

**Gesamte zusätzliche Zeit:** Ungefähr 90 Minuten über 10 Wochen (beyond regulärer Unterricht). Das ist handhabbar.

### Analyserahmen

**Schaue nach Konvergenz.** Wenn alle vier Datenquellen (Quizze, Test, wöchentliches Log, Schüler-Stimme) in die gleiche Richtung zeigen, ist die Erkenntnis robust. Wenn sie divergieren, untersuche warum.

**Nutze einfachen Vergleich.** Das ist keine statistische Studie. Vergleiche Mittelwerte: „Durchschnittliche Vokabular-Quiz-Score war 4,2/10 bei Baseline und 7,1/10 bei Mittelpunkt." Vergleiche Proportionen: „In Woche 3 antworteten 45% der SuS Retrieval-Fragen korrekt. Bis Woche 8 war das auf 78% hochgegangen." Visuelle Repräsentation (ein einfacher Linien-Graph von wöchentlicher Retrieval-Genauigkeit) macht Trends sichtbar.

**Sei ehrlich über Zurechnung.** Du kannst nicht beweisen dass Retrieval Practice die Verbesserung VERURSACHTE. Andere Faktoren änderten sich simultan (SuS lernten neue Inhalte, wurden familiärer mit der LP, reiften über den Term). Was du KANNST sagen ist: „Vokabular-Retention verbesserte sich während der Periode wenn Retrieval Practice eingeführt wurde, und SuS berichteten sich sicherer zu fühlen. Das ist konsistent mit Retrieval-Practice-Forschung und suggeriert es ist wert zu continue."

### Teilungsplan

**Informell:** Teile Erkenntnisse mit dem Naturwissenschaften-Team bei einem Departement-Meeting (15 Minuten). Zeige die Daten, beschreibe die Routine, lade Fragen ein. Biete an die Retrieval-Fragenseite zu teilen.

**Strukturiert:** Schreibe eine Ein-Seite-Zusammenfassung: Frage → Was ich tat → Was ich fand → Was ich nächstes mache. Pin das zum Staffroom-Professionel-Lern-Board (wenn eines exists) oder teile via E-Mail.

**Praktisch:** Biete an die Retrieval-Routine für eine Kolleg*in zu modellieren die interessiert ist. Noch besser, lade eine Kolleg*in ein eine deiner Lektionen spezifisch zu beobachten um die Retrieval-Routine in Aktion zu sehen.

### Ehrliche Einschränkungen

1. **Dies ist ein kleine-Scale-Inquiry, keine kontrollierte Experiment.** Es gibt keine Kontroll-Gruppe (eine parallele Klasse die nicht Retrieval Practice bekam). Du kannst nicht definitiv die Verbesserung Retrieval Practice zurechnen — andere Faktoren könnten beigetragen haben. Das ist eine häufige Limitierung von Praxis-Inquiry — aber die Erkenntnisse sind immer noch wertvoll für deine Praxis.

2. **Die LP ist sowohl Forscher*in als auch Praktiker*in.** Du willst dass die Intervention funktioniert (du glaubst an Retrieval Practice), was einen Bias erstellt. Sei ehrlich zu dir selbst: wenn die Daten keine Verbesserung zeigen, resist die Temptation sie zu erklären. Negative Erkenntnisse sind genauso wertvoll wie positive.

3. **Ein Term kann nicht genug sein.** Retrieval-Practice-Effekte sind stärksten über längere Perioden (Roediger & Butler, 2011). Wenn die Resultate modest sind nach einem Term, consider das Inquiry für einen zweiten Term zu erweitern bevor zu conclude dass Retrieval Practice nicht für deine SuS funktioniert.

---

## Known Limitations

1. **LP-Inquiry ist kontext-spezifisch.** Erkenntnisse von einem LP-Inquiry mit einer Klasse in einer Schule können nicht zu allen Kontexten generalisiert werden. Der Wert von LP-Inquiry ist dass es LOKALES Wissen produziert — Wissen das direkt anwendbar zu der LP-Praxis ist, selbst wenn es nicht als universale Wahrheit beansprucht werden kann.

2. **Inquiry erfordert eine echte Frage.** Wenn die LP bereits decided hat dass Retrieval Practice funktioniert und das Inquiry nutzt um den Glauben zu bestätigen, verliert das Inquiry seinen Wert. Echtes Inquiry erfordert echte Ungewissheit: „Ich denke das könnte funktionieren — lass mich herausfinden." Wenn die LP nicht wirklich offen ist zu der Möglichkeit dass die Intervention nicht funktioniert, wird das Inquiry zu Advocacy, nicht Untersuchung.

3. **Datensammlung darf Unterricht nicht schaden.** Wenn der Inquiry-Daten-Anforderungen so belastet werden dass sie die Unterrichts-Qualität reduzieren, ist das Inquiry kontraproduktiv. Der obige Datenplan ist gestaltet minimal zu sein — aber LPs sollten jede Datensammlung abandon die sich nicht-nachhaltig anfühlt. Ein etwas weniger rigouroses Inquiry das tatsächlich komplett wird ist wertvoller als ein perfekt gestaltetes Inquiry das in Woche 4 abandoniert wird.
