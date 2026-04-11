---
# AGENT SKILLS STANDARD FIELDS (v2)
name: lesson-study-zyklus
description: "Gestalte einen kompletten Lesson-Study-Zyklus von der Forschungs-Frage durch kollegiale Planung zur Research-Lektion. Verwende diesen Skill bei der Planung von Jugyou-Kenkyuu oder kollegiale LP-Inquiry in die Praxis."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-weiterbildung/lesson-study-zyklus"
skill_name: "Lesson-Study Zyklus Designer"
domain: "professional-learning"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Stigler & Hiebert (1999) — The Teaching Gap: best ideas from the world's teachers for improving education in the classroom"
  - "Lewis, Perry & Murata (2006) — How should research contribute to instructional improvement? The case of lesson study"
  - "Dudley (2014) — Lesson Study: a handbook"
  - "Takahashi & McDougal (2016) — Collaborative lesson research: maximizing the impact of lesson study"
  - "Fernandez & Yoshida (2004) — Lesson Study: a Japanese approach to improving mathematics teaching and learning"
input_schema:
  required:
    - field: "teaching_challenge"
      type: "string"
      description: "Das spezifische Unterrichts-Problem oder die Schüler-Lern-Schwierigkeit, die die Lesson-Study untersucht"
    - field: "subject_and_topic"
      type: "string"
      description: "Das Fach, Thema, und Jahrgangsstufe für die Research-Lektion"
    - field: "team_composition"
      type: "string"
      description: "Wer ist in der Lesson-Study-Gruppe — Zahl der LPs, Erfahrungs-Stufen, Fächer"
  optional:
    - field: "student_level"
      type: "string"
      description: "Alter/Jahrgangsstufe der SuS"
    - field: "available_time"
      type: "string"
      description: "Wie viel Zeit das Team hat — Zahl der Treffen, Release-Zeit verfügbar"
    - field: "previous_lesson_study"
      type: "string"
      description: "Ob das Team Lesson-Study schon gemacht hat"
    - field: "school_context"
      type: "string"
      description: "Relevante Schulfeatures — Phasenstufe, Demografie, Verbesserungs-Prioritäten"
    - field: "case_students"
      type: "string"
      description: "Die 3 'case students' wer werden der Beobachtungs-Fokus — ihre Profile"
output_schema:
  type: "object"
  fields:
    - field: "research_theme"
      type: "string"
      description: "Die übergreifende Frage, die die Lesson-Study untersucht"
    - field: "cycle_plan"
      type: "object"
      description: "Der komplette Lesson-Study-Zyklus — Planung, Unterrichten, Beobachten, Nachdenken, Revision"
    - field: "research_lesson_plan"
      type: "object"
      description: "Ein detailliertes Lehrplan-Design für kollegiale Beobachtung"
    - field: "observation_protocol"
      type: "object"
      description: "Was Beobachter beachten sollten, wie zu dokumentieren, und wie das Post-Lektion-Gespräch zu strukturieren ist"
chains_well_with:
  - "unterrichtscoaching-leitfaden"
  - "unterrichtsbesuch-protokoll"
  - "reflexionsfragen-generator"
  - "aktionsforschung-zyklus"
  - "fachdidaktik-entwickler"
teacher_time: "5 minutes"
tags: ["lesson-study", "jugyou-kenkyuu", "kollegiale-planung", "research-lektion", "schule-weiterbildung", "Lehrplan-21"]
---

# Lesson-Study Zyklus Designer

## Was dieses Skill leistet

Gestaltet einen kompletten Lesson-Study-Zyklus — den strukturierten, kollegialen Prozess, der in Japan entstanden ist (jugyō kenkyū), in dem ein Team von LPs gemeinsam eine "Research-Lektion" plant, eine LP unterrichtet während andere das Schüler-Lernen beobachten (nicht die LP-Performance), und das Team analysiert, was SuS tatsächlich gelernt haben und warum. Das kritische Prinzip ist, dass Lesson-Study Forschung IN Unterrichten ist, nicht Evaluation VON LPs — die Lektion gehört dem Gruppen, der Fokus ist auf Schüler-Lernen (nicht LP-Verhalten), und der Zweck ist, gemeinsames professionelles Wissen über wie SuS spezifisches Inhalts-Material lernen zu entwickeln. Die Ausgabe umfasst ein Research-Thema, einen Zyklus-Plan mit Besprechungs-Agendas, eine Research-Lektion geplant für kollegiale Beobachtung, und ein Beobachtungs-Protokoll fokussiert auf Case-SuS. KI ist besonders wertvoll hier, weil die Gestaltung eines effektiven Lesson-Study-Zyklus sowohl das japanische Modell (mit seinem Nachdruck auf kyōzai kenkyū — tiefe Studie des Inhalts-Materials und Curriculums) als auch die praktischen Nötigung nicht-japanischer Schulkontexte versteht, wo Release-Zeit, Gruppen-Stabilität, und Lesson-Study-Erfahrung begrenzt sein könnten.

## Evidenzgrundlage

Stigler & Hiebert (1999) introducirten Lesson-Study zu west-Publikationen durch "The Teaching Gap", zeigend, dass japanische LPs ihre Praxis kontinuierlich durch kollegiale Zyklen des Planens, Beobachtens, und Analysierens von Research-Lektionen verbessern. Sie argumentierten, dass die Macht von Lesson-Study nicht in individuellen Lektionen liegt, sondern im kollegialen Prozess: LPs entwickeln gemeinsames professionelles Wissen über wie SuS lernen, das sich über Jahre akkumuliert und zu neuen LPs übertragen wird. Lewis, Perry & Murata (2006) identifizierten vier Pfade, durch die Lesson-Study Unterricht verbessert: erhöhtes Inhalts-Wissen, erhöhtes Unterrichts-Wissen, erhöhte Fähigkeit SuS zu beobachten, und stärkere kollegiale Netzwerke. Dudley (2014) passte Lesson-Study für UK-Schulen an, einführend das Konzept von "case students" — drei sorgfältig gewählte SuS (ein hoch-leistend, einer Mitte, einer unter-leistend), die zum Beobachtungs-Fokus werden, Schüler-Lernen sichtbar und nachverfolgbar machend. Takahashi & McDougal (2016) betonten, dass die wichtigste (und meistübersprungene) Phase von Lesson-Study kyōzai kenkyū ist — die tiefe Studie des Inhalts-Materials, Curriculums, und existierende Forschung, die Lektion-Planung voran geht. Ohne diese wird Lesson-Study zu kollegiale Planung ohne die Forschungs-Grundlage. Fernandez & Yoshida (2004) dokumentierten den kompletten japanischen Lesson-Study-Prozess, zeigend, dass einen einzelnen Zyklus typischerweise 3–5 Besprechungen über einige Wochen nimmt, mit der Research-Lektion selbst seind nur eine Komponente eines viel tieferen Prozesses.

## Input-Schema

Die LP muss zur Verfügung stellen:
- **Unterrichts-Herausforderung:** Das Problem zum Untersuchen. *z.B. "SuS können die Fläche von einfachen Formen berechnen aber können diese nicht auf zusammengesetzte Formen anwenden — sie sehen nicht wie man eine zusammengesetzte Form in einfachere zerlegt" / "SuS können Sprach-Merkmale in einem Text identifizieren, aber können nicht erklären ihre Auswirkung auf den Leser" / "7. Klasse SuS kämpfen um entwickelte Erklärungen in Naturwissenschaften zu schreiben — sie machen eine Aussage aber unterstützen es nicht mit Beweis oder Reasoning"*
- **Fach und Thema:** Was die Research-Lektion abdecken wird. *z.B. "8. Klasse Mathematik — Fläche von zusammengesetzten Formen" / "9. Klasse Deutsch — Sprach-Analyse in Gedichten" / "7. Klasse Naturwissenschaften — CER (Claim-Evidence-Reasoning) Erklärungen schreiben"*
- **Team-Zusammensetzung:** Wer beteiligt ist. *z.B. "3 Mathe-LPs, gemischte Erfahrung — eine NQT, eine 5 Jahre Erfahrung, eine Fach-Leitung" / "4 Deutsch-LPs aus dem gleichen Fachbereich, alle erfahren"*

Optional (von Kontextmodul, wenn verfügbar):
- **SuS-Niveau:** Jahrgangsstufe
- **Verfügbare Zeit:** Besprechungen und Release-Zeit
- **Vorherige Lesson-Study:** Team-Erfahrung mit dem Prozess
- **Schulkontext:** Phase, Demografie, Prioritäten
- **Case-SuS:** Die 3 Fokus-SuS

## Prompt

```
Du bist Experte in Lesson-Study (jugyō kenkyū) mit tiefem Wissen von Stigler & Hieberts (1999) Analyse des japanischen Lesson-Study, Dudleys (2014) UK-Anpassung, Lewis, Perry & Muratas (2006) Verbesserungs-Pfade, und Takahashi & McDougals (2016) Nachdruck auf kyōzai kenkyū (tiefe Studie von Inhalts-Material und Curriculum). Du verstehst, dass Lesson-Study grundsätzlich verschieden von Lektion-Beobachtung ist: es ist kollegiale Forschung IN Unterrichen und Lernen, nicht Evaluation VON eine LP.

KRITISCHE PRINZIPIEN:
- Die Lektion gehört der GRUPPE, nicht dem Individuum, das unterrichtet. Die Research-Lektion ist "unsere Lektion", nicht "meine Lektion, die beobachtet wird."
- Beobachter beobachten SCHÜLER, nicht die LP. Die Frage ist "Was haben SuS gelernt und wie?" nicht "Wie gut hat die LP performat?"
- Die wichtigste Phase ist die Vorbereitung-Studie des Inhalts-Materials und Curriculums (kyōzai kenkyū), nicht die Lektion selbst.
- Case-SuS (Dudley, 2014) machen Beobachtung nachverfolgbar: Beobachter verfolgen 3 spezifische SuS um zu verstehen, wie verschiedene Lerner die Lektion erfahren.

Deine Aufgabe ist die Gestaltung eines Lesson-Study-Zyklus für:

**Unterrichts-Herausforderung:** {{teaching_challenge}}
**Fach und Thema:** {{subject_and_topic}}
**Team-Zusammensetzung:** {{team_composition}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Verwende, was verfügbar ist; ignoriere alle Felder, die "nicht bereitgestellt" markiert sind.

**SuS-Niveau:** {{student_level}} — wenn nicht bereitgestellt, inferriere aus dem Fach und Thema.
**Verfügbare Zeit:** {{available_time}} — wenn nicht bereitgestellt, gestalte für 4 Besprechungen (realistisches Minimum) mit einer Beobachtungs-Lektion.
**Vorherige Lesson-Study:** {{previous_lesson_study}} — wenn nicht bereitgestellt, gehe davon aus das Team ist neu zu Lesson-Study und schließe Orientierung ein.
**Schulkontext:** {{school_context}} — wenn nicht bereitgestellt, gestalte für allgemeine Schulanwendung.
**Case-SuS:** {{case_students}} — wenn nicht bereitgestellt, leite das Team in der Auswahl ihrer eigenen Case-SuS an.

Gestalte den kompletten Zyklus:

1. **Besprechung 1 — Forschung und Zielstellung (kyōzai kenkyū):**
   - Definiere das Research-Thema: welche Frage über Schüler-Lernen untersuchen wir?
   - Studiere das Inhalts-Material: was sagt das Curriculum? Was sagt die Forschung über wie SuS diesen Stoff lernen? Was sind die bekannten Missverständnis-Fehler?
   - Studiere existierende Ansätze: wie wird das typischerweise unterrichtet? Was hat funktioniert und was nicht?
   - Wähle Case-SuS: einen hoch-leistend, einen Mitte, einen der typischerweise mit diesem Stoff kämpft. Was vorhersagen wir, jeder wird einfach/schwierig finden?

2. **Besprechung 2 — Kollegiale Lektion-Planung:**
   - Gestalte die Research-Lektion kollegial — jedes Team-Mitglied trägt bei.
   - Der Lektion-Plan muss ungewöhnlich detailliert sein: erwartete SuS-Antworten bei jedem Bühne, was die LP tut wenn SuS verschieden antwortet, wo die Schlüssel-Lern-Momente sind.
   - Gestalte die Beobachtungs-Planung: wer beobachtet welchen Case-SuS? Was schauen sie?

3. **Besprechung 3 — Die Research-Lektion und Post-Lektion-Diskussion:**
   - Ein Team-Mitglied unterrichtet; andere beobachten.
   - Beobachter sitzen nahe ihrem zugeordneten Case-SuS und dokumentieren: was macht der SuS, sagt, schreibt, und scheint zu denken.
   - Post-Lektion-Diskussion (sofort danach, 45–60 Minuten): was haben wir über wie SuS diesen Stoff lernen gelernt? Nicht "was könnte die LP besser gemacht haben" sondern "was haben wir über Schüler-Lernen beobachtet?"

4. **Besprechung 4 — Analyse und Wissens-Aufbau:**
   - Was haben wir aus diesem Zyklus gelernt?
   - Was würden wir ändern wenn wir diese Lektion wieder unterrichten?
   - Was sind die Implikationen für unser breiteres Unterrichten dieses Thema/Faches?
   - Wie teilen wir das was wir gelernt haben mit Kolleg:innen, die nicht im Team waren?

Gib deine Ausgabe in diesem exakten Format zurück:

## Lesson-Study-Zyklus: [Research-Thema]

**Unterrichts-Herausforderung:** [Das zu untersuchende Problem]
**Fach und Thema:** [Was die Research-Lektion abdeckt]
**Team:** [Wer beteiligt ist]

### Research-Thema

[Die übergreifende Frage, die die Lesson-Study untersucht — formuliert als eine Frage über Schüler-Lernen]

### Zyklus-Plan

Für jede Besprechung:
**Besprechung [N]: [Zweck] — [Vorgeschlagenes Timing]**
- **Agenda:** [Was das Team in dieser Besprechung tut]
- **Vorbereitung nötig:** [Was Team-Mitglieder vor der Besprechung tun sollten]
- **Schlüssel-Output:** [Was die Besprechung produziert]

### Research-Lektion-Plan

[Ein detaillierter Lektion-Plan gestaltet für kollegiale Beobachtung — einschließend erwartete SuS-Antworten und Beobachtungs-Fokus-Punkte]

### Beobachtungs-Protokoll

**Case-SuS A (höher-leistend):** [Was zu beobachten ist]
**Case-SuS B (Mitte-leistend):** [Was zu beobachten ist]
**Case-SuS C (typischerweise kämpft):** [Was zu beobachten ist]

**Dokumentations-Format:** [Wie Beobachter was sie sehen dokumentieren sollten]

### Post-Lektion-Diskussions-Leitfaden

[Strukturierte Fragen für die Post-Lektion-Diskussion — fokussiert auf Schüler-Lernen, nicht LP-Evaluation]

**Selbstcheck vor Rückgabe der Ausgabe:** Verifiziere, dass (a) der Fokus auf Schüler-Lernen ist, nicht LP-Performance, (b) kyōzai kenkyū ist einschließend, (c) Case-SuS werden spezifiziert, (d) der Research-Lektion-Plan erwartete SuS-Antworten einschließt, (e) das Beobachtungs-Protokoll ist SuS-fokussiert, und (f) der Post-Lektion-Diskussions-Leitfaden vermeidet evaluierende Sprache über die LP.
```

## Beispielausgabe

**Szenario:** *Unterrichts-Herausforderung: "8. Klasse SuS können die Fläche von einfachen Formen (Rechtecke, Dreiecke) berechnen, aber kämpfen mit zusammengesetzten Formen. Sie sehen nicht wie man eine zusammengesetzte Form in einfachere Formen zerlegt — sie versuchen eine einzelne Formel zu nutzen oder raten einfach." / Fach und Thema: "8. Klasse Mathematik — Fläche von zusammengesetzten Formen" / Team-Zusammensetzung: "3 Mathe-LPs — eine NQT (erstes Jahr), eine erfahrene LP (8 Jahre), eine Fach-Leitung (15 Jahre). Keine haben Lesson-Study vor gemacht." / Verfügbare Zeit: "4 Ein-Stunden-Besprechungen über 3 Wochen, plus die Research-Lektion selbst"*

---

## Lesson-Study-Zyklus: Wie lernen 8. Klasse SuS zusammengesetzte Formen zu zerteilen?

**Unterrichts-Herausforderung:** SuS können einfache Formen flächen berechnen, aber sehen nicht wie man zusammengesetzte Formen in Komponenten zerlegt
**Fach und Thema:** 8. Klasse Mathematik — Fläche von zusammengesetzten Formen
**Team:** 3 Mathe-LPs (NQT, erfahren, Fach-Leitung), neue zu Lesson-Study

### Research-Thema

**Wie entwickeln 8. Klasse SuS die Fähigkeit, zusammengesetzte Formen in einfachere Formen zu zerlegen zum Flächenberechnungen — und was verhindert sie, diesen Schritt unabhängig zu tun?**

Unter-Fragen:
- Welcher Punkt in der Lektion "sehen" die SuS die Zerteilung? Was auslöscht diesen Einblick?
- Was tun SuS, die NICHT die Form zerlegen können, stattdessen? Welche alternative Strategien versuchen sie?
- Hilft das Zeigen der Zerlegungslinien den SuS, die Fähigkeit zu lernen, oder umgeht es das Lernen?

### Zyklus-Plan

**Besprechung 1: Forschung und Zielstellung — Woche 1, 1 Stunde**
- **Agenda:**
  1. Orientierung zu Lesson-Study (15 min): Die Fach-Leitung erklärt den Prozess. Schlüssel-Nachricht: die Lektion gehört uns alle; wir beobachten SuS, nicht die LP; das ist Forschung, nicht Evaluation. Verteilung von Dudleys (2014) Ein-Seiter-Zusammenfassung.
  2. Kyōzai kenkyū — Studiere den Stoff (25 min): Als Team, arbeite dich durch 5 zusammengesetzte Form-Probleme mit zunehmender Schwierigkeit. Bemerke: was mathematisches Wissen ist nötig? Wo müssen WIR sorgfältig denken? Das Team sollte die Mathematik als Lerner erfahren, bevor die Lektion gestaltet wird. Überprüfe den 8. Klasse Lehrplan-Plan: was haben SuS schon gelernt? Was kommt danach?
  3. Diskutiere bekannte Schwierigkeiten (10 min): Was wissen wir über wie SuS mit diesem kämpfen? Sammle Erfahrung: "Was tun SuS typischerweise, wenn sie eine zusammengesetzte Form sehen?" Dokumentiere die bekannten Missverständnis-Fehler und Schwierigkeiten.
  4. Wähle Case-SuS (10 min): Aus der Klasse, die unterrichtet wird, identifiziere drei SuS: SuS A (selbstbewusst mit Fläche, wahrscheinlich Zerteilung zugänglich), SuS B (kompetent mit einfachen Formen, vertritt den typischen SuS), SuS C (kämpft mit Fläche einfacher Formen — könnte von zusammengesetzten Formen überfordert sein). Schreibe kurz Profile für jeden: was vorhersagen wir, jeder wird einfach/schwierig finden.
- **Vorbereitung nötig:** Jedes Team-Mitglied bringt 2–3 zusammengesetzte Form-Probleme von ihren Unterrichts-Ressourcen mit. Die LP, die die Research-Lektion unterrichten wird, liefert ein Klasse-List mit kurzen Leistungs-Daten.
- **Schlüssel-Output:** Research-Thema vereinbart, Case-SuS gewählt, bekannte Schwierigkeiten dokumentiert.

**Besprechung 2: Kollegiale Lektion-Planung — Woche 1 oder 2, 1 Stunde**
- **Agenda:**
  1. Überprüfe Research-Thema und Case-SuS (5 min).
  2. Gestalte die Research-Lektion kollegial (45 min): Strukturiere die Lektion Bühne für Bühne. Für jede Bühne, das Team muss spezifizieren: was macht die LP, was machen SuS, was vorhersagen wir, jeder Case-SuS wird tun, und was macht die LP, wenn die vorhergesagte Antwort passiert. Der Lektion-Plan sollte detaillierter als ein normaler Lektion-Plan sein — weil es für Beobachtung gestaltet ist, jeder Moment zählt.
  3. Gestalte die Beobachtungs-Planung (10 min): Weise jedem Beobachter einen Case-SuS zu. Schaffe ein einfaches Aufnahme-Blatt: eine Tabelle mit drei Spalten — Zeit, Was tut der SuS/sagt, Was das über ihr Verständnis suggeriert.
- **Vorbereitung nötig:** Die LP, die unterrichtet, bringt einen Entwurf Lektion-Struktur mit. Andere Team-Mitglieder bringen Ideen für Aufgaben und Ressourcen mit.
- **Schlüssel-Output:** Kompletter Research-Lektion-Plan mit erwartete Antworten. Beobachtungs-Planung zugewiesen.

**Besprechung 3: Research-Lektion und Post-Lektion-Diskussion — Woche 2 oder 3, Lektion-Zeit + 1 Stunde**
- **Die Research-Lektion (50 Minuten):** Eine LP unterrichtet (entschieden während Besprechung 2 — typischerweise ein Volunteer, nicht die erfahren-ste oder unerfahren-ste). Die anderen zwei beobachten. Jeder Beobachter sitzt nahe ihrem zugeordneten Case-SuS mit dem Aufnahme-Blatt. Beobachter tun NICHT helfen, einmischen, oder mit der Klasse interagieren. Sie beobachten und dokumentieren.
- **Post-Lektion-Diskussion (sofort danach, 1 Stunde):**
  1. Die LP, die unterrichtet hat, spricht zuerst (5 min): "Wie fühlte sich das an, ging das? Was bemerkte ich?" Das ehrt die LP und lässt sie verarbeiten, bevor Feedback zu hören.
  2. Jeder Beobachter berichtet auf ihrem Case-SuS (15 min total): "Hier ist was SuS A/B/C tat bei jeder Bühne. Hier ist was ich denke, das sagt uns über ihr Lernen." Evidenz-basiert — was wurde beobachtet, nicht was wurde inferriert.
  3. Diskussion des Research-Themas (25 min): "Was haben wir über wie SuS lernen zusammengesetzte Formen zu zerteilen gelernt? Hat die Lektion Erfolg in der Entwicklung dieser Fähigkeit? Was überraschte uns? Was würden wir ändern und warum?"
  4. Implikationen (15 min): "Was bedeutet das für wie wir dieses Thema in Zukunft unterrichten? Was haben wir gelernt das über andere Themen anwendbar ist?"
- **Schlüssel-Output:** Beobachtungs-Notizen, Post-Lektion-Diskussions-Notizen, Liste von Implikationen.

**Besprechung 4: Analyse und Wissens-Aufbau — Woche 3, 1 Stunde**
- **Agenda:**
  1. Überprüfe Post-Lektion-Diskussions-Notizen (10 min): Was haben wir geschlossen?
  2. Revision der Lektion (20 min): Wenn wir diese Lektion wieder unterrichtet würden, was würden wir ändern? Schreibe einen Revision-Lektion-Plan — das ist nicht über die ursprüngliche LP "besser tun," aber das Team-verstandnis verbessern die Lektion.
  3. Extrahiere übertragbares Wissen (15 min): Was haben wir über wie SuS zusammengesetzte Form-Fläche lernen gelernt das über andere Themen anwendbar ist? (Z.B., "SuS brauchen zusammengesetzte Formen OHNE Zerlegungslinien zu sehen zuerst — das Zeigen der Linien zu früh umgeht das Denken. Dieses Prinzip wahrscheinlich für andere Multi-Schritt-Probleme.")
  4. Planung zum Teilen (15 min): Wie teilen wir was wir gelernt haben mit Kolleg:innen, die nicht im Team waren? Ein kurze Präsentation auf einer Abteilung-Besprechung? Ein Ein-Seiter-Zusammenfassung? Unterrichtet die Revision-Lektion während andere LPs beobachten?
- **Schlüssel-Output:** Revision-Lektion-Plan, übertragbare Einblicke, Teilen-Plan.

### Research-Lektion-Plan

**Lektion: Zerlegung von zusammengesetzten Formen zum Flächenberechnungen**
**Dauer:** 50 Minuten

**Bühne 1 — Aktiviere vorheriges Wissen (8 Minuten):**
Zeige drei einfache Formen (Rechteck, Dreieck, Parallelogramm) mit Dimensionen. SuS berechnen die Fläche von jedem auf Mini-Whiteboards. "3, 2, 1, zeige mir."
- *Vorhersage: SuS A bekommt alle drei schnell. SuS B bekommt Rechteck und Dreieck, zögert möglicherweise bei Parallelogramm. SuS C könnte mit der Dreieck-Formel kämpfen.*
- *Beobachtungs-Fokus: Erinnert sich SuS C die Fläche-Formeln? Wenn nicht, wird die zusammengesetzte Form-Aufgabe unzugänglich sein — die LP könnte eine Formel-Referenz-Blatt bereitstellen müssen.*

**Bühne 2 — Das Problem ohne Unterricht (12 Minuten):**
Zeige eine zusammengesetzte L-Form (Dimensionen beschriftet) OHNE Zerlegungslinien. "Finde die Fläche dieser Form. Du kannst irgendwelche Methode nutzen. Arbeite für 3 Minuten allein, dann vergleiche mit deinem Partner."
- *Vorhersage: SuS A könnte Zerlegung sofort sehen oder nach kurzer Überlegung. SuS B wird wahrscheinlich versuchen, eine einzelne Formel zu finden, bemerke, es funktioniert nicht, und entweder Halt oder versuche die Form zu teilen. SuS C könnte überfordert sein und nicht anfangen.*
- *DAS IST DER SCHLÜSSEL-BEOBACHTUNGS-MOMENT. Was Strategien versuchen SuS VOR gezeigt Zerlegung? Dokumentiere genau was jeder Case-SuS während diesen 3 Minuten tut.*
- *LP-Move: Zeige NICHT die Zerlegung noch. Zirkuliere stillschweigend. Wenn SuS C vollständig nach 2 Minuten eingerenkt ist, sag: "Könntest du diese Form in Formen zerlegen, die du schon kennst?" — das ist ein Anstoß, nicht eine Antwort.*

**Bühne 3 — Teile Strategien (8 Minuten):**
"Wer fand eine Weise, das zu arbeiten? Komm und zeige uns." Wähle SuS, um zu teilen — priorisiere SuS, die die Form verschieden zerlegten (horizontal teilt vs. vertikal teilt vs. Subtraktionsmethode). Wenn niemand es zerlegte, demonstriere die LP: "Was wenn ich eine Linie hier zeichne? Welche Formen bekomme ich?"
- *Vorhersage: Multiple Zerlegungsstrategien werden auftauchen. Diskutiere: geben sie alle die gleiche Antwort? Welche ist einfachsten? Warum?*
- *Beobachtungs-Fokus: Ändert SuS Bs Verständnis, wenn sie eines Gleich-SuS-Strategie sehen? Versteht SuS C die Strategie, wenn gezeigt, oder kopieren sie nur die Prozedur?*

**Bühne 4 — Geführte Praxis mit neuen Formen (12 Minuten):**
Drei zusammengesetzte Formen, zunehmende Schwierigkeit. SuS arbeiten in Paaren. Für jede Form: zuerst, zeichne die Zerlegungslinien (berechne noch nicht). LP zirkuliert, um Zerlegung zu checken, bevor SuS berechnen.
- *Vorhersage: SuS A wird Zerlegung straight-forward finden. SuS B wird Form 1 und 2 managen, aber möglicherweise Form 3 kämpfen (welche auf mehrere Wegen zerlegbar ist). SuS C könnte Zerlegung zu kopieren ihrem Partner für Form 1 in der Lage sein, aber kämpfen würde sich zu Form 2 übertragen.*
- *Beobachtungs-Fokus: Ist SuS C unabhängig zu zerteilen oder ihrem Partner kopieren? Das ist die kritische Evidenz für das Research-Thema — kann dieser SuS die Zerlegung SEHEN, oder folgen sie einer Prozedur, die sie nicht verstehen?*

**Bühne 5 — Unabhängige Anwendung (8 Minuten):**
Ein finale zusammengesetzte Form, gemacht unabhängig. Kein Diskussion, kein Partner Hilfe. Das ist die Diagnose: kann jeder Case-SuS unabhängig zerteilen und berechnen?
- *Beobachtungs-Fokus: Was produziert jeder Case-SuS unabhängig? Vergleiche das zu was sie in Bühne 2 (bevor Unterricht) produziert — was hat sich geändert?*

**Bühne 6 — Reflexion (2 Minuten):**
"Schreibe einen Satz: was ist der Trick zum Finden der Fläche von irgendeiner Form, sogar komplizierte?"
- *Vorhersage: Starke Antworten werden etwas sagen wie "Teile es in Formen, die du schon kennst." Schwächere Antworten werden sagen "Nutze die Formel" (was suggeriert, sie haben Zerlegung als Strategie nicht grasped).*

### Beobachtungs-Protokoll

**Case-SuS A (höher-leistend):** Beobachte, wie schnell sie Zerlegung in Bühne 2 sehen. Nutzen sie Zerlegung oder eine verschied Strategie (z.B., die Form in einem Rechteck schließen und abziehen)? Während Bühne 4, finden sie MULTIPLE Zerlegungen? In Bühne 5, zerteilen sie geschickt?

**Case-SuS B (Mitte-leistend):** Beobachte, was sie ZUERST in Bühne 2 versuchen (der Vorbereitung-Versuch). Stoppen sie ab? Versuchen sie eine einzelne Formel? Raten sie? Während Bühne 3, was auslöscht das "Aha"-Moment — ein Gleich-SuS-Methode sehen oder die LP-Demonstration? In Bühne 4, können sie zu neuen Formen übertragen, oder kopieren sie nur die Methode von Bühne 3?

**Case-SuS C (typischerweise kämpft):** Beobachte, ob sie die Aufgabe bei all in Bühne 2 zugreifen können. Wenn nicht, was tun sie (warten, kopieren, raten, bitten um Hilfe)? Nach Unterricht in Bühne 3, verstehen sie Zerlegung oder folgen einfach die Prozedur? In Bühne 5, können sie es unabhängig tun? Das SuS-Erfahrung wird uns am meisten über ob die Lektion Erfolg in der Entwicklung dieser Fähigkeit sagen.

**Dokumentations-Format:**
| Zeit/Bühne | Was tut der SuS/sagt/schreibt | Was das über ihr Verständnis suggeriert |
|---|---|---|

### Post-Lektion-Diskussions-Leitfaden

**Runde 1 — Die LP-Stimme (5 Minuten):**
"Bevor wir von den Beobachtern hören, [LP-Name]: wie fühlte sich die Lektion an? Was bemerkt ich?"

**Runde 2 — Case-SuS-Berichte (15 Minuten):**
"Beobachter 1: berichte über SuS A — was hast du bei jeder Bühne beobachtet?"
"Beobachter 2: berichte über SuS B..."
"Beobachter 3: berichte über SuS C..."
(Nur Evidenz — was war sichtbar und zu hören, nicht Urteile über die LP.)

**Runde 3 — Research-Thema-Diskussion (25 Minuten):**
- "Welcher Punkt in der Lektion haben SuS 'gesehen' die Zerlegung? Was hat das ausgelöscht?"
- "Was machte SuS, die nicht die Form zerlegten können, stattdessen? Welche alternative Strategien versucht sie?"
- "Hat die LP-Demonstration in Bühne 3 geholfen, SuS C Zerlegung zu verstehen, oder haben sie nur die Prozedur kopiert?"
- "War Bühne 2 (das Problem ohne Unterricht) wertvoll? Hilft Kämpfens, bevor gezeigt, Methode, Lernen oder hindert?"
- "Was überraschte uns?"

**Runde 4 — Implikationen (15 Minuten):**
- "Wenn wir diese Lektion wieder unterrichtet, was EINE Sache würden wir ändern und warum?"
- "Was haben wir über wie SuS zusammengesetzte Form-Fläche lernen gelernt das über unseren breiteren Unterricht anwendbar ist?"
- "Welche Fragen haben wir noch?"

**WICHTIG: Diskussions-Norms.** An keinem Punkt sollte die Diskussion "Du solltest haben..." oder "Es wäre besser wenn du..." an die LP dirigiert werden. Alle Kommentare sind über DIE LEKTION (die das Team gehört) und SCHÜLER-LERNEN (das ist der Forschungs-Fokus). Die Satz-Stammzellen zu nutzen: "Ich bemerkte dass SuS B..." / "Die Lektion schien..." / "Nächstes Mal, WIR könnten versuchen..."

---

## Bekannte Limitierungen

1. **Lesson-Study erfordert geschützte Zeit.** Vier Ein-Stunden-Besprechungen plus Beobachtungs-Zeit ist eine signifikante Investition. In Schulen ohne dedizierte professionelle Lern-Zeit ist Lesson-Study äußerst schwierig zu halten. Der oben Zyklus stellt ein Minimum dar — japanische Lesson-Study-Zyklen spannen oft über Monate. Schulen müssen Zeit explizit allokieren, nicht erwartet, dass LPs sie finden.

2. **Lesson-Study erfordert eine Kultur von Vertrauen.** Beobachtet zu werden von Kolleg:innen ist verletzbar. Wenn die Schulkultur evaluativ ist (Beobachtungen sind Urteile, nicht Lernen), werden LPs sich nicht sicher genug fühlen für echtes Lesson-Study. Die Erleichterung (typischerweise das erfahren-ste Team-Mitglied) muss aktiv die Diskussions-Norms schützen: Forschung, nicht Evaluation.

3. **Lesson-Study baut Wissen langsam auf.** Ein Zyklus produziert bescheidene Einblicke. Die Macht von Lesson-Study ist kumul — wiederholte Zyklen über Jahre bauen tiefes professionelles Wissen über wie SuS lernen auf. Schulen sollten zu Lesson-Study als eine fortlaufende Praxis verpflichten, nicht ein einmaliges Ereignis.
