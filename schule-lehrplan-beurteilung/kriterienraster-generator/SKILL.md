---
# AGENT SKILLS STANDARD FIELDS (v2)
name: kriterienraster-generator
description: "Generiere ein kriterien-referenziertes Bewertungsraster mit deskriptiven Performance-Niveaus für eine spezifische Aufgabe und Lernziel. Nutze beim Erstellen von Bewertungs-Guides, Erwartungs-Setzung oder Beurteilungs-Design."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lehrplan-beurteilung/kriterienraster-generator"
skill_name: "Kriterien-Raster Generator"
domain: "curriculum-assessment"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Brookhart (2013) — How to Create and Use Rubrics for Formative Assessment and Grading"
  - "Andrade (2000, 2013) — Using rubrics to promote thinking and learning"
  - "Jonsson & Svingby (2007) — The use of scoring rubrics: reliability, validity and educational consequences"
  - "Sadler (1989) — Formative assessment and the design of instructional systems"
  - "Panadero & Jonsson (2013) — The use of scoring rubrics for formative assessment purposes revisited"
input_schema:
  required:
    - field: "learning_objective"
      type: "string"
      description: "Das Lernziel, das das Raster bewertet"
    - field: "task_description"
      type: "string"
      description: "Die spezifische Aufgabe, die SuS ausführen"
    - field: "student_level"
      type: "string"
      description: "Alter/Jahrgangsstufe"
  optional:
    - field: "criteria_count"
      type: "integer"
      description: "Anzahl Kriterien (default: 4)"
    - field: "performance_levels"
      type: "integer"
      description: "Anzahl Performance-Niveaus (default: 4)"
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "existing_criteria"
      type: "string"
      description: "Kriterien, die die LP eingebaut haben möchte – Raster wird darum gebaut"
output_schema:
  type: "object"
  fields:
    - field: "rubric"
      type: "object"
      description: "Komplettes Raster mit Kriterien, Performance-Level-Deskriptoren, Scoring-Guide"
    - field: "design_rationale"
      type: "string"
      description: "Warum diese Kriterien gewählt wurden und wie Deskriptoren unterschieden wurden"
    - field: "student_friendly_version"
      type: "string"
      description: "Vereinfachte Version für SuS Selbst- und Peer-Beurteilung"
    - field: "calibration_notes"
      type: "string"
      description: "Notes, um mehrere Bewerter dazu zu helfen, das Raster konsistent anzuwenden"
chains_well_with:
  - "kompetenz-entpacker"
  - "rueckwaerts-planung"
  - "gap-analysis-from-student-work"
  - "feedback-quality-analyser"
teacher_time: "3 Minuten"
tags: ["raster", "beurteilung", "kriterien", "deskriptive-sprache", "formative-bewertung"]
---

# Kriterien-Raster Generator

## Was diesen Skill leistet

Produziert ein kriterien-referenziertes Raster aus einem Lernziel und einer Aufgaben-Beschreibung, mit deskriptiver (nicht evaluativer) Sprache auf jedem Performance-Niveau. Jedes Kriterium beschreibt, wie die ARBEIT DER SCHÜLERIN AUSSIEHT auf jedem Niveau – nicht wie "gut" sie ist. Der Output umfasst das vollständige Raster, eine Design-Rationale, eine schülerfreundliche Version für Selbst-/Peer-Beurteilung, und Kalibrierungs-Notes für Konsistenz über mehrere Bewerter. KI ist wertvoll, weil effektives Raster-Design präzise, deskriptive Sprache braucht, die zwischen Performance-Niveaus unterscheidet ohne evaluative Labels ("ausgezeichnet", "gut", "schwach") oder vage Quantifizierer ("einige", "viele", "gründlich") – und jeder Deskriptor muss qualitativ verschieden von benachbarten Niveaus sein, nicht bloss eine skalierte Version.

## Grundlagen

Brookhart (2013) etabliert, dass effektive Raster deskriptive statt evaluative Sprache nutzen – sie beschreiben, was PRÄSENT ist in der Arbeit, nicht wie gut sie ist. "Nutzt spezifische Text-Evidenz, um jeden analytischen Punkt zu unterstützen" ist deskriptiv; "Gute Nutzung von Evidenz" ist evaluativ. Deskriptive Raster produzieren reliablere Scoring und nützlichere Feedback, weil sie SuS genau sagen, was anders machen, nicht bloss dass sie "besser machen" müssen. Andrade (2000, 2013) zeigt, dass Raster Unterricht und Lernen verbessern, wenn mit SuS geteilt VOR der Aufgabe – sie funktionieren als Lernwerkzeuge, nicht bloss Grading-Werkzeuge. Der Effekt ist stärkst, wenn Raster für Selbst-Beurteilung genutzt werden. Jonsson & Svingby (2007) fanden, dass analytische Raster (separate Kriterien unabhängig gescored) reliabeler und mit besseren Feedback als holistische Raster (einzelnes Gesamt-Urteil) sind, obwohl sie länger zu nutzen brauchen. Sadler (1989) etabliert, dass Beurteilungs-Qualität von der "Gap" abhängt, die sichtbar ist – SuS müssen die Differenz zwischen wo sie sind und wo sie sein müssen sehen können. Deskriptive Raster-Niveaus machen diese Gap konkret. Panadero & Jonsson (2013) bestätigten, dass Raster-Nutzen die SuS-Performance verbessert, speziell wenn mit Selbst-Beurteilung kombiniert, mit moderat effect sizes.

## Input-Schema

Die LP muss liefern:
- **Lernziel:** Was das Raster bewertet. *z.B. "SuS können eine überzeugenden Rede schreiben, die Redetechniken nutzt, um das Publikum zu beeinflussen" / "SuS können einen fairen Test designen und durchführen und gültige Conclusionen ziehen"*
- **Aufgaben-Beschreibung:** Die spezifische Aufgabe. *z.B. "Schreibe und präsentiere eine 3-Minuten-Rede zu einem Thema deiner Wahl" / "Plane und führe ein Experiment durch, das die Wirkung von Licht auf Pflanzenwachstum untersucht, dann schreibe eine Conclusion"*
- **Jahrgangsstufe:** *z.B. "8. Klasse Sek 1"*

Optional (aus Kontext):
- **Kriterien-Anzahl:** Anzahl Kriterien (default: 4)
- **Performance-Niveaus:** Anzahl Niveaus (default: 4)
- **Fachbereich:** Das Schulfach
- **Existierende Kriterien:** Kriterien, die die LP eingebaut haben will

## Prompt

```
Du bist Beurteilungs-Design Expertin/e und Raster-Konstruktions-Spezialist/in mit tiefem Wissen über Brookharts (2013) Prinzipien von effektivem Raster-Design, Andrades (2000, 2013) Forschung zu Raster als Lernwerkzeuge, und Sadlers (1989) formative Beurteilungs-Rahmen. Du verstehst, dass effektive Raster DESKRIPTIVE Sprache nutzen (was präsent ist beschreibend) statt EVALUATIVE Sprache (gut/schlecht urteilen), und dass jedes Performance-Niveau QUALITATIV unterschiedlich sein muss – nicht bloss eine skalierte Version.

Deine Aufgabe: Generiere ein Raster für:

**Lernziel:** {{learning_objective}}
**Aufgaben-Beschreibung:** {{task_description}}
**Jahrgangsstufe:** {{student_level}}

Optional verfügbar (nutze was möglich ist):
**Kriterien-Anzahl:** {{criteria_count}} — falls nicht vorhanden, nutze 4 Kriterien.
**Performance-Niveaus:** {{performance_levels}} — falls nicht vorhanden, nutze 4 Niveaus.
**Fachbereich:** {{subject_area}} — falls nicht vorhanden, aus dem Lernziel schliessen.
**Existierende Kriterien:** {{existing_criteria}} — falls vorhanden, inklusive und andere hinzufügen.

Anwende diese Prinzipien:

1. **Deskriptive, nicht evaluative Sprache (Brookhart, 2013):**
   - NUTZE NIE: ausgezeichnet, gut, befriedigend, schwach, limitiert, basic, wunderbar, mangelhaft.
   - NUTZE NIE vague Quantifizierer: einige, viele, wenige, mehrere, gründlich, ausreichend.
   - STATTDESSEN: beschreibe spezifisch, was PRÄSENT ist auf jedem Niveau.
   - Schlecht: "Gute Nutzung von Evidenz." Gut: "Jeden analytischen Punkt wird durch ein spezifisches, relevantes Zitat aus dem Text unterstützt."
   - Schlecht: "Limitierte Vokabel." Gut: "Vokabel ist vorwiegend alltäglich; akademische oder technische Terme sind abwesend oder falsch genutzt."

2. **Qualitativ unterschiedliche Niveaus (Sadler, 1989; Brookhart, 2013):**
   - Benachbarte Niveaus müssen qualitativ VERSCHIEDENE Arbeit beschreiben, nicht bloss mehr oder weniger derselben.
   - Schlecht-Progression: "Nutzt einige Evidenz" → "Nutzt mehr Evidenz" → "Nutzt viel Evidenz" (quantitativ – bloss mehr).
   - Gut-Progression: "Stellt Claims ohne Evidenz" → "Inklusive Evidenz, aber verbindet nicht mit Claims" → "Verbindet Evidenz mit Claims mit explizitem Reasoning" → "Wählt die überzeugendste Evidenz und erklärt, warum sie der stärkste Support ist" (qualitativ – andere Art Arbeit).

3. **Kriterien müssen unabhängig sein (Jonsson & Svingby, 2007):**
   - Jedes Kriterium sollte einen separaten, unterscheidbaren Aspekt der Arbeit bewerten.
   - Eine SuS sollte auf verschiedenen Kriterien verschiedene Niveaus tracken – nicht alle Kriterien zusammen.
   - Wenn zwei Kriterien immer denselben Score geben, messen sie wahrscheinlich dasselbe.

4. **Schülerfreundliche Version (Andrade, 2000, 2013):**
   - Produziere eine Version mit schüler-zugänglicher Sprache.
   - Schreibe in zweiter Person: "Du unterstützt jeden Punkt mit einem spezifischen Zitat" statt "Die SuS unterstützt..."
   - Kann für Selbst-Beurteilung VOR Submission genutzt werden.

5. **Kalibrierungs-Notes (Jonsson & Svingby, 2007):**
   - Inklusive Notes, die mehreren Bewertern helfen, das Raster konsistent anzuwenden.
   - Identifiziere Schlüssel-Unterscheidungen zwischen Niveaus – die "Entscheidungs-Punkte", wo Bewerter am ehesten uneinig sind.
   - Wo möglich, beschreibe, wie eine Grenz-Antwort zwischen zwei Niveaus aussieht.

Return dein Output in diesem Format:

## Raster: [Aufgaben-Beschreibung]

**Bewertet:** [Lernziel]
**Für:** [Jahrgangsstufe]
**Kriterien:** [Anzahl] | **Niveaus:** [Anzahl]

### Raster

[Vollständiges Raster-Tabelle mit Kriterien als Reihen und Performance-Niveaus als Spalten. Jede Zelle hat deskriptive Sprache.]

### Design-Rationale

[Warum diese Kriterien gewählt wurden und wie die Niveaus unterschieden werden]

### Schülerfreundliche Version

[Vereinfachtes Raster in schüler-zugänglicher Sprache, suitable für Selbst-/Peer-Beurteilung]

### Kalibrierungs-Notes

[Guidance für konsistente Anwendung – Schlüssel-Entscheidungs-Punkte, Grenz-Fälle]

**Self-check:** Verifiziere (a) KEINE evaluative Sprache vorhanden (kein "gut", "ausgezeichnet", "schwach", "limitiert"), (b) KEINE vagen Quantifizierer vorhanden (kein "einige", "viele", "gründlich"), (c) benachbarte Niveaus sind qualitativ verschieden, (d) jedes Kriterium ist unabhängig, (e) schülerfreundliche Version ist wirklich zugänglich, und (f) Kalibrierungs-Notes addressieren die wahrscheinlichsten Bewerter-Uneinigkeit-Punkte.
```

## Beispiel-Output

**Szenario:** *Lernziel: "SuS können eine überzeugenden Rede schreiben, die Redetechniken nutzt, um das Publikum zu beeinflussen" / Aufgaben-Beschreibung: "Schreibe und präsentiere eine 3-Minuten-Überzeugungsrede zu einem Thema deiner Wahl vor deiner Klasse" / Jahrgangsstufe: "9. Klasse Sek 1" / Fachbereich: "Deutsch"*

---

## Raster: Überzeugungsrede (Schriftlich und Präsentiert)

**Bewertet:** Schreibe eine Überzeugungsrede, die Redetechniken nutzt, um das Publikum zu beeinflussen
**Für:** 9. Klasse Sek 1 Deutsch
**Kriterien:** 4 | **Niveaus:** 4

### Raster

| Kriterium | Niveau 1 | Niveau 2 | Niveau 3 | Niveau 4 |
|-----------|---------|---------|---------|---------|
| **Argument & Struktur** | Die Rede stellt eine Meinung, entwickelt sie aber nicht mit Gründen. Punkte sind aufgelistet ohne logische Verbindung. Es gibt kein klares Anfang, Mitte, Ende – die Rede könnte irgendwo anfangen oder stoppen, ohne dass das Publikum merkt. | Die Rede stellt eine Position und gibt 1–2 Gründe, aber die Gründe sind nicht vollständig entwickelt. Die Rede hat einen erkennbaren Anfang und Schluss, aber der Mittelteil lacks klare Organisation – Punkte bauen nicht aufeinander auf. | Die Rede präsentiert eine klare Position, unterstützt durch 3+ entwickelte Gründe in logischer Sequenz. Jeder Punkt baut auf dem vorherigen, schaff ein kumulative Argument. Der Anfang engagiert das Publikum und der Schluss verstärkt die Position ohne einfach zu wiederholen. | Die Rede konstruiert ein strategisches Argument, wo die Punkt-Ordnung bewusst ist – der stärkste Punkt ist positioniert für maximale Impact. Gegen-Argumente werden acknowledged und adressiert. Der Schluss reframes das Argument auf eine Weise, die das Publikum mit einer lasting impression hinterlässt. |
| **Redetechniken** | Die Rede beruht auf persönlicher Meinung ("Ich meine...") ohne deliberate Nutzung von Redetechniken. Sprache ist konversationell durchgehend. | Die Rede inklusive 1–2 Redetechniken (z.B. rhetorische Frage, Wiederholung, Regel von drei), aber sie wirken isoliert – eingefügt in konversationelle Sprache statt integriert ins Argument. Die Techniken sind präsent, aber strengen die Überzeugung nicht noticeably. | Die Rede nutzt 3+ Redetechniken, die ins Argument integriert sind – jede Technik dient einem spezifischen Überzeugung-Zweck (rhetorische Frage, um das Publikum zu challenge; Wiederholung, um einen Key Point zu betonen; emotionale Sprache, um Urgency zu schaffen). Die Sprecher/in kann erklären, warum sie jede Technik wählte. | Die Rede zeigt kontrollierte und varied Rhetorik – Techniken sind kombiniert für Effekt (z.B. rhetorische Frage gefolgt durch einen Trikolon, der antwortet). Der Ton shiftet strategisch (von rational zu emotional, von ruhig zu urgent), um das Publikum zu positionieren. Sprache-Wahlen reflektieren Bewusstsein des spezifischen Publikums. |
| **Publikums-Bewusstsein** | Die Rede ist für ein generisches Publikum geschrieben – es gibt keine spezifischen Referenzen zu den Zuhörern, ihren Erlebnissen oder wahrscheinlichen Objektionen. Die Sprecher/in spricht AT das Publikum, nicht TO dem Publikum. | Die Rede inklusive einige Publikums-Bewusstsein (z.B. "Als SuS wissen wir alle..."), aber dieses Bewusstsein ist surface-level – es acknowledges das Publikum, ohne das Argument zu ihrer spezifischen Concerns/Perspektiven anzupassen. | Die Rede directly addressiert die Publikums-Wahrscheinlich Ansichten, Concerns oder Erlebnisse. Die Sprecher/in anticipates was das Publikum denken könnte fühlen und addressiert es: "Du magst denken... aber consideré dies." Die Rede fühlt sich directed at DIESE Zuhörer, nicht ein generic Publikum. | Die Rede ist strategisch tailored zum spezifischen Publikum – sie nutzt shared references, anticipates spezifische Objektionen, und passt register, Vokabel, und Ton den Zuhörern an. Die Sprecher/in liest den Raum während Delivery und responds zu Publikums-Reaktionen (passt Tempo an, adds Emphasis, macht Augenkontakt mit Skeptikern). |
| **Präsentation** | Die Rede wird von einem Script gelesen mit minimal Augenkontakt. Volumen ist entweder zu leise, um zu hören, oder monoton durchgehend. Die Sprecher/in wirkt disconnected von seinem eigenen Argument. | Die Rede wird mostly gelesen mit gelegentlichen Blicken zum Publikum. Volumen ist audible. Einige Ton-Variation wird versucht, aber Pacing ist uneben – die Sprecher/in rushes durch einige Sections und pausiert awkwardly bei anderen. | Die Sprecher/in nutzt Notes als Prompts statt ein vollständiges Script zu lesen. Augenkontakt ist regular und distributed übers Publikum. Volumen, Pacing, und Emphasis vary deliberat, um Key Points zu verstärken. Pausen werden für Effekt genutzt, nicht aus Unsicherheit. | Die Sprecher/in ist largely unabhängig von Notes. Delivery fühlt sich natürlich und selbstsicher – die Sprecher/in wirkt zu denken und zu sprechen, nicht eine memorized Text zu performen. Gesten, Bewegung, Gesichts-Ausdruck und vocal Variety dienen alle dem Argument. Die Sprecher/in commands den Raum. |

### Design-Rationale

**Warum diese vier Kriterien:**
1. **Argument & Struktur** – die Foundation. Eine Rede ohne klares Argument ist nicht überzeugend, egal wie gut sie präsentiert wird.
2. **Redetechniken** – das Toolkits. Das Lernziel verlangt spezifisch Redetechniken; dieses Kriterium bewertet, ob sie präsent sind UND funktional.
3. **Publikums-Bewusstsein** – die Überzeugung-Linse. Überzeugung ist fundamental über das Publikum; dieses Kriterium bewertet, ob die Sprecher/in FÜR ihre Zuhörer schreibt oder bloss AT sie.
4. **Präsentation** – die Performance-Dimension. Eine Rede ist eine gesprochene Form; Content-Qualität und Delivery-Qualität sind separate Fähigkeiten, sollten unabhängig bewertet werden. Eine SuS könnte eine wunderbare Rede schreiben und sie schwach liefern, oder umgekehrt – separate Kriterien erfasst beide.

**Wie Niveaus unterschieden werden:**
- Niveau 1 → Niveau 2: Das Element ist PRÄSENT, aber nicht effektiv (Techniken existieren, aber überzeug nicht; Struktur existiert, aber buildt nicht).
- Niveau 2 → Niveau 3: Das Element ist FUNKTIONAL – es dient einem Zweck und erreicht eine Effekt (Techniken sind integriert, Struktur bildet, Publikum ist direkt adressiert).
- Niveau 3 → Niveau 4: Das Element ist STRATEGISCH – die SuS macht bewusst, anspruchsvoll Wahlen und kann sie erklären (Rhetorik ist kombiniert, Argument ist geordnet für Impact, Publikum wird gelesen und responded).

### Schülerfreundliche Version

**Bevor du submit, checke deine Rede gegen diese Kriterien:**

**Dein Argument:**
- Niveau 1: Du stellst deine Meinung, aber erkläre nicht wirklich warum.
- Niveau 2: Du gibst Gründe, aber sie sind nicht vollständig entwickelt – du hast nicht erklärt, WARUM deine Gründe überzeugend sind.
- Niveau 3: Du präsentierst ein klares Argument mit 3+ Gründen, die aufeinander aufbauen. Dein Anfang grabbed Aufmerksamkeit und dein Ende verstärkt deinen Punkt.
- Niveau 4: Du hast deine Punkte strategisch geordnet – putting deinen stärksten Punkt wo er den most Impact hat. Du addressierst, was die andere Seite würde sagen.

**Deine Nutzung von Redetechniken:**
- Niveau 1: Du nutzt keine Überzeugung-Techniken – es klingt bloss wie du normal sprichst.
- Niveau 2: Du hast 1–2 Techniken genutzt, aber sie fühlen sich "stuck on" – wie du sie addierted, weil du musste.
- Niveau 3: Du hast 3+ Techniken genutzt und jede hat einen ZWECK – du kannst erklären, warum du sie wähltest und welche Wirkung sie schafft.
- Niveau 4: Deine Techniken arbeiten ZUSAMMEN – du combinierst sie, und du changierst deinen Ton deliberately, um das Publikum zu affectieren.

**Dein Bewusstsein des Publikums:**
- Niveau 1: Du sprichst AT dein Publikum, nicht TO ihnen.
- Niveau 2: Du mentionest das Publikum ("Als SuS, wir..."), aber passt wirklich nicht dein Argument zu ihnen an.
- Niveau 3: Du addressierst direkt was dein Publikum denkt und fühlt. "Du magst denken... aber consideré dies."
- Niveau 4: Deine ganze Rede ist shaped für DIESES spezifische Publikum – du nutzt ihre Sprache, anticipatest ihre Objektionen, und adjustest wenn du gehst.

**Deine Präsentation:**
- Niveau 1: Du lesest deine Rede von dem Paper.
- Niveau 2: Du schaust auf manchmal. Deine Stimme ist audible, aber changiert nicht wirklich.
- Niveau 3: Du nutzt Notes, nicht ein vollständiges Script. Du machest Augenkontakt. Du deliberately changierst Speed, Volumen, und Emphasis.
- Niveau 4: Du brauchest barely Notes. Deine Delivery fühlt sich natürlich und selbstsicher an. Dein Körper-Sprache und Stimme dienen beide deinem Argument.

### Kalibrierungs-Notes

**Schlüssel-Entscheidungs-Punkte für Bewerter:**

1. **Niveau 2 vs. Niveau 3 auf Redetechniken:** Die Unterscheidung ist zwischen Techniken, die PRÄSENT sind und Techniken, die FUNKTIONAL sind. Frage: "Wenn ich diesen rhetorischen Frage entfernte, würde die Rede weniger überzeugend sein?" Wenn ja → Niveau 3 (macht Work). Wenn nein → Niveau 2 (dekorative).

2. **Niveau 3 vs. Niveau 4 auf Argument & Struktur:** Niveau 3 hat ein klares, logisches Argument. Niveau 4 hat ein STRATEGISCHES Argument – die Ordnung ist deliberat, und Gegen-Argumente werden adressiert. Wenn die Rede gute Punkte zeigt, aber in keiner spezifischen Ordnung → Niveau 3. Wenn die Ordnung selbst strategisches Denken reveals (buildt zu einem Climax, saves den stärksten Punkt) → Niveau 4.

3. **Präsentation ist unabhängig von Content.** Eine SuS könnte eine schwach strukturierte Rede mit grösstem Selbstsicherheit liefern (hohe Präsentation, tiefe Argument) oder eine wunderbare Rede in Monoton (hohe Argument, tiefe Präsentation). Score jedes Kriterium unabhängig.

4. **Grenzfall zwischen Niveau 2 und Niveau 3:** Der häufigst Grenzfall. Wenn unsure, frage: "Macht die SuS gerade die Sache (Techniknutzung, Publikums-Adressierung), oder macht die SuS die Sache MIT ZWECK (Technik nutzen, um eine spezifisch Effekt zu erreichen; Publikums-spezifisch Concerns addressieren)?" Zweck → Niveau 3. Durch-die-Bewegungen gehen → Niveau 2.

---

## Bekannte Einschränkungen

1. **Raster beschreiben Performance, erklärt aber nicht, wie zu verbessern.** Eine SuS, die das Raster liest und sieht, dass sie Level 2 für Redetechniken ist, weiss, WAS anders machen (Techniken mit Zweck integriert), könnte aber nicht wissen, WIE. Das Raster sollte mit Unterricht und Feedback paired werden, die SuS zeigt, wie eine Ebene zur nächsten zu gehen. Chain mit Feedback-Qualitäts-Analyser für gezielten Verbesserungs-Advice.

2. **Vier Niveaus ist ein praktischer Kompromiss.** Manche Aufgaben würden von mehr Niveaus profitieren (um fein Gradationen zu unterscheiden) oder weniger (um einfach zu machen). Vier Niveaus balancen Reliabilität (genug Niveaus, um informativ zu sein) mit Usability (genug kleine, um praktisch zu sein). Wenn das Raster für Hoch-Stakes-Grading genutzt wird, können zusätzliche Level-Deskriptoren nötig sein.

3. **Deskriptive Sprache ist schwerer zu schreiben, aber nützlicher als evaluative Sprache.** Das Raster vermeidet "gut", "ausgezeichnet", "schlecht", was jede Zelle länger und spezifischer macht. Das ist ein deliberater Trade-off – evaluative Raster sind kürzer, aber weniger nützlich zum Feedback. Lehrpersonen könnten Zeit brauchen, um mit deskriptiver Raster-Sprache komfortabel zu sein.
