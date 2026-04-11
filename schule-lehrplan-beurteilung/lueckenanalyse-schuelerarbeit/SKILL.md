---
# AGENT SKILLS STANDARD FIELDS (v2)
name: lueckenanalyse-schuelerarbeit
description: "Analysiere Schülerarbeiten gegen Kriterien, um spezifische Lücken zwischen aktuellem Leistungsstand und Lernzielen zu identifizieren. Nutze diese Skill bei der Bewertung von Arbeiten, bei Feedback-Planung oder bei der Diagnose von Lernbedürfnissen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lehrplan-beurteilung/lueckenanalyse-schuelerarbeit"
skill_name: "Lückenanalyse aus Schülerarbeiten"
domain: "schule-lehrplan-beurteilung"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Black & Wiliam (1998) — Assessment and Classroom Learning"
  - "Hattie & Timperley (2007) — The Power of Feedback"
  - "Sadler (1989) — Formative assessment and the design of instructional systems"
  - "Heritage (2010) — Formative Assessment: making it happen in the classroom"
  - "Wiliam (2011) — Embedded Formative Assessment"
input_schema:
  required:
    - field: "student_work_description"
      type: "string"
      description: "Beschreibung oder Transkription der Schülerarbeit — was die SuS produziert haben"
    - field: "assessment_criteria"
      type: "string"
      description: "Kriterien oder Rubrik, gegen die die Arbeit beurteilt werden soll"
    - field: "learning_objective"
      type: "string"
      description: "Was die SuS lernen oder zeigen sollten"
  optional:
    - field: "student_level"
      type: "string"
      description: "Alter/Klassenstufe"
    - field: "student_profile"
      type: "string"
      description: "Aus Kontext-Engine: Vorwissen, bekannte Stärken und Lücken"
    - field: "subject_area"
      type: "string"
      description: "Schulfach"
    - field: "task_description"
      type: "string"
      description: "Die Aufgabe, die die SuS bearbeitet haben"
output_schema:
  type: "object"
  fields:
    - field: "gap_analysis"
      type: "object"
      description: "Spezifische Lücken, klassifiziert nach Typ — konzeptuell, prozedural oder kommunikativ"
    - field: "strengths"
      type: "array"
      description: "Was die SuS gut machen — spezifische, evidenzgestützte Stärken"
    - field: "next_teaching_steps"
      type: "array"
      description: "Zielgerichtete Massnahmen zur Schliessung jeder Lücke — nicht allgemein, sondern konkret"
    - field: "feedback_script"
      type: "string"
      description: "Wie die Analyse der SuS mitgeteilt wird, um Verbesserung zu fördern"
chains_well_with:
  - "feedback-quality-analyser"
  - "criterion-referenced-rubric-generator"
  - "error-analysis-protocol"
  - "practice-problem-sequence-designer"
  - "wvk-wissenstypen"
teacher_time: "3 minutes"
tags: ["lueckenanalyse", "schuelerarbeiten", "formative-beurteilung", "feedback", "diagnostik", "Lehrplan-21"]
---

# Lückenanalyse aus Schülerarbeiten

## Was diese Skill bewirkt

Analysiert eine Schülerarbeitsarbeit gegen Beurteilungskriterien, identifiziert spezifische Lücken (nicht nur "muss verbessert werden", sondern genau WAS fehlt und WARUM), klassifiziert jede Lücke nach Typ (konzeptuelles Missverständnis, prozeduraler Fehler oder Kommunikations-/Präsentationsproblem) und erstellt zielgerichtete nächste Unterrichtsschritte — konkrete Massnahmen, die die Lehrperson ergreifen kann, um jede Lücke zu schliessen, anstelle generischer Ratschläge wie "mehr trainieren". Die Ausgabe enthält auch ein Feedback-Skript, das zeigt, wie die Analyse der SuS so mitgeteilt wird, dass Verbesserung gefördert wird. KI ist hier besonders wertvoll, weil effektive Lückenanalyse verlangt, dass die Arbeit gleichzeitig gegen die Kriterien verglichen wird, der Typ der Lücke diagnostiziert wird (was die Heilungsmethode bestimmt), Stärken identifiziert werden (was die Motivation erhält) und ein zielgerichteter Schritt entworfen wird (was pädagogisches Wissen verlangt) — eine vielschichtige Analyse, die erhebliche Zeit und Fachwissen erfordert.

## Grundlagen der Evidenz

Sadler (1989) etablierte, dass formative Beurteilung auf drei Bedingungen angewiesen ist: SuS und LP müssen das Ziel verstehen (wie Qualität aussieht), die aktuelle Position bewerten (wo die Arbeit relativ zum Ziel steht) und Massnahmen ergreifen, um die Lücke zu schliessen. Lückenanalyse operationalisiert die zweite Bedingung — systematisches Identifizieren, wo die Arbeit hinter dem Ziel zurückbleibt und warum. Hattie & Timperley (2007) zeigten, dass effektives Feedback drei Fragen beantworten muss: "Wo will ich hin?" (das Ziel), "Wie geht es mir gerade?" (aktuelle Leistung relativ zum Ziel) und "Wohin jetzt?" (konkrete Massnahmen zur Schliessung der Lücke). Die meisten LP-Rückmeldungen behandeln nur die ersten beiden; die dritte — spezifische Schritte — ist dort, wo Lernen geschieht. Black & Wiliam (1998) zeigten, dass formative Beurteilung nur wirksam ist, wenn die gesammelten Informationen genutzt werden, um den Unterricht anzupassen — Lückenanalyse ohne zielgerichtete Massnahmen ist Diagnose ohne Therapie. Heritage (2010) betonte die Wichtigkeit der Klassifizierung von Lücken: eine konzeptuelle Lücke (die SuS verstehen die Grundidee nicht) verlangt andere Intervention als eine prozedurale Lücke (die SuS verstehen aber machen Ausführungsfehler) oder eine Kommunikationslücke (die SuS verstehen und können es, können es aber nicht ausreichend ausdrücken). Wiliam (2011) argumentierte, dass das stärkste Feedback der SuS einen spezifischen, umsetzbaren nächsten Schritt gibt, nicht eine Bewertung.

## Input Schema

Die LP muss bereitstellen:
- **Beschreibung der Schülerarbeit:** Was die SuS produziert haben. *z.B. "Schüler schrieb: 'Der Autor nutzt eine Metapher um den Sturm zu beschreiben. Das ist wirksam, weil es die Leserin interessiert macht.'" / "Schülerrechnung: 3/4 + 2/5 = 5/9" / Kopie von tatsächlichem Schülertext*
- **Beurteilungskriterien:** Wogegen es beurteilt werden soll. *z.B. "Die SuS sollen Sprachgeräte identifizieren, Zitate einweben und die Wirkung auf die Leserin erklären" / "Die SuS sollen einen gemeinsamen Nenner finden, bevor Brüche addiert werden"*
- **Lernziel:** Was die SuS lernen sollten. *z.B. "Analysiere, wie Autor/innen Sprache nutzen, um Effekte zu schaffen" / "Addiere Brüche mit ungleichen Nennern"*

Optional (aus Kontext-Engine, wenn verfügbar):
- **Klassenstufe:** Schuljahr
- **Schülerprofil:** Vorwissen, Stärken, bekannte Lücken
- **Schulfach:** Das Fach
- **Aufgabenbeschreibung:** Die Aufgabe, die die SuS bearbeitet haben

## Prompt

```
Du bist ein Experte in formativer Beurteilung und diagnostischer Analyse von Schülerarbeiten, mit tiefem Wissen über Hattie & Timperley (2007), Sadler (1989) und Heritage (2010). Du verstehst, dass das Identifizieren von Lücken nur nutzvoll ist, wenn jede Lücke klassifiziert wird (konzeptuell, prozedural oder kommunikativ), weil die Klassifizierung die richtige Lehrmassnahme bestimmt.

Deine Aufgabe ist es, diese Schülerarbeit zu analysieren:

**Schülerarbeit:** {{student_work_description}}
**Beurteilungskriterien:** {{assessment_criteria}}
**Lernziel:** {{learning_objective}}

Der folgende optionale Kontext kann oder kann nicht vorhanden sein. Nutze, was verfügbar ist; ignoriere Felder mit "nicht vorhanden".

**Klassenstufe:** {{student_level}} — wenn nicht vorhanden, inferiere von der Arbeit und den Kriterien.
**Schülerprofil:** {{student_profile}} — wenn nicht vorhanden, stütze deine Analyse auf die Evidenz in der Arbeit selbst.
**Schulfach:** {{subject_area}} — wenn nicht vorhanden, inferiere von der Arbeit und den Kriterien.
**Aufgabenbeschreibung:** {{task_description}} — wenn nicht vorhanden, inferiere von den Kriterien und dem Ziel.

Wende diese evidenzgestützten Prinzipien an:

1. **Identifiziere zuerst Stärken (Hattie & Timperley, 2007):**
   - Bevor Lücken identifiziert werden, erkenne, was die SuS GUT machen.
   - Stärken müssen spezifisch und evidenzgestützt sein — nicht generisches Lob ("gute Anstrengung"), sondern spezifische Anerkennung ("identifiziert korrekt die Metapher und wählt ein relevantes Zitat").
   - Stärken sind die Grundlage für Verbesserung — der nächste Schritt baut oft auf einer Stärke auf.

2. **Klassifiziere jede Lücke (Heritage, 2010):**
   - **Konzeptuelle Lücke:** Die SuS verstehen die Grundidee nicht. ("Die Schülerin addiert Zähler und Nenner direkt — sie verstehen nicht, dass Brüche mit verschiedenen Nennern unterschiedlich grosse Teile darstellen.")
   - **Prozedurale Lücke:** Die SuS verstehen das Konzept aber machen Ausführungsfehler. ("Die Schülerin findet einen gemeinsamen Nenner, aber vergisst dann, die Zähler anzupassen.")
   - **Kommunikationslücke:** Die SuS verstehen und können es aber können es nicht ausreichend ausdrücken. ("Die Schülerin kann die Wirkung verbal erklären, schreibt aber nur 'Das ist wirksam' ohne Erläuterung.")
   - Klassifizierung ist wichtig, weil: konzeptuelle Lücken brauchen Neuunterricht, prozedurale Lücken brauchen zielgerichtetes Üben, Kommunikationslücken brauchen Modellierung, wie man Verständnis ausdrückt.

3. **Erstelle zielgerichtete nächste Schritte (Hattie & Timperley, 2007; Wiliam, 2011):**
   - Jede Lücke muss einen SPEZIFISCHEN nächsten Unterrichtsschritt haben — nicht "mehr trainieren", sondern "3 Beispiele durcharbeiten, bei denen der gemeinsame Nenner gegeben ist, fokussierend nur auf die Anpassung der Zähler."
   - Nächste Schritte sollten erreichbar sein — ein oder zwei Schritte vorwärts, nicht kompletter Neuunterricht.
   - Priorisiere: wenn mehrere Lücken existieren, identifiziere EINE, die zuerst angegangen werden soll (normalerweise die Grundlage — eine konzeptuelle vor einer prozeduralen).

4. **Schreibe ein Feedback-Skript, das Massnahmen fördert (Sadler, 1989):**
   - Feedback soll spezifisch, zukunftsgerichtet und umsetzbar sein.
   - Struktur: Stärkenanerkennung → Lückenidentifikation → spezifischer nächster Schritt.
   - Vermeide: Noten oder Punkte (die Lernen beenden), unspezifisches Lob ("gute Arbeit"), unspezifische Kritik ("braucht mehr Detail"), überwältigende Listen von allem, was falsch ist.

Gib deine Ausgabe in diesem exakten Format zurück:

## Lückenanalyse: [Kurzbeschreibung]

**Schülerarbeit:** [Kurzzusammenfassung]
**Beurteilt gegen:** [Kriterien-Zusammenfassung]
**Lernziel:** [Ziel]

### Stärken

[Spezifische, evidenzgestützte Stärken — was die SuS gut machen]

### Identifizierte Lücken

Für jede Lücke:
**Lücke [N]: [Kurzes Label]**
- **Typ:** Konzeptuell / Prozedural / Kommunikativ
- **Evidenz:** [Was in der Schülerarbeit diese Lücke zeigt]
- **Bedeutung:** [Was die SuS tun oder nicht verstehen]
- **Nächster Unterrichtsschritt:** [Spezifischer, umsetzbarer Schritt zur Schliessung dieser Lücke]

### Priorität

[Welche Lücke zuerst angehen und warum]

### Feedback-Skript

[Wie die Analyse den SuS mitgeteilt wird — spezifische Worte, die die LP nutzen könnte, strukturiert als: Stärke anerkennen → Lücke identifizieren → nächsten Schritt anbieten]

**Selbstkontrolle vor Rückgabe:** Überprüfe, dass (a) Stärken spezifisch und evidenzgestützt sind, (b) jede Lücke als konzeptuell, prozedural oder kommunikativ klassifiziert ist, (c) jede Lücke einen spezifischen nächsten Unterrichtsschritt hat (nicht "mehr trainieren"), (d) Lücken priorisiert sind, (e) das Feedback-Skript zukunftsgerichtet und umsetzbar ist, und (f) das Feedback nicht überfordert — es identifiziert den wichtigsten nächsten Schritt, nicht jede mögliche Verbesserung.
```

## Beispiel-Ausgabe

**Szenario:** *Schülerarbeit: "Der Autor nutzt die Metapher 'das Meer war eine brüllende Bestie' um den Sturm zu beschreiben. Das ist eine gute Metapher, weil sie das Meer mit einer Bestie vergleicht. Die Wirkung auf die Leserin ist, dass sie das wirksam findet und weiterlesen möchte." / Beurteilungskriterien: "Identifiziere Sprachgeräte, webe Zitate ein und analysiere die Wirkung auf die Leserin — erkläre, was die Leserin denkt, fühlt oder visualisiert" / Lernziel: "Analysiere, wie Autor/innen Sprache nutzen, um Effekte zu schaffen" / Klassenstufe: "8. Klasse Sek 1" / Schulfach: "Deutsch"*

---

## Lückenanalyse: Sprachanalyse — Metapher

**Schülerarbeit:** "Der Autor nutzt die Metapher 'das Meer war eine brüllende Bestie' um den Sturm zu beschreiben. Das ist eine gute Metapher, weil sie das Meer mit einer Bestie vergleicht. Die Wirkung auf die Leserin ist, dass sie das wirksam findet und weiterlesen möchte."
**Beurteilt gegen:** Identifiziere Sprachgeräte, webe Zitate ein, analysiere Leserin-Effekt
**Lernziel:** Analysiere, wie Autor/innen Sprache nutzen, um Effekte zu schaffen

### Stärken

1. **Identifiziert das Gerät korrekt.** Die Schülerin nennt "Metapher" korrekt — sie kann das Gerät im Kontext erkennen. Das ist eine notwendige Grundlage für Analyse.
2. **Wählt ein relevantes Zitat.** Das Zitat "das Meer war eine brüllende Bestie" ist gut gewählt — es ist ein klares, analysierbares Beispiel. Die Schülerin zeigt gute Evidenzwahl.
3. **Webt das Zitat korrekt ein.** Das Zitat ist in den Satz integriert mit Anführungszeichen, nicht als separate Zeile. Das zeigt Bewusstsein für akademische Schreibkonventionen.
4. **Versucht, Wirkung auf die Leserin zu diskutieren.** Die Schülerin hat die richtige Struktur — Gerät → Zitat → Wirkung — was zeigt, dass sie VERSTEHT, WAS sie tun soll, auch wenn die Analyse selbst unterentwickelt ist.

### Identifizierte Lücken

**Lücke 1: Generische Wirkungsanalyse — "wirksam und möchte weiterlesen"**
- **Typ:** Kommunikationslücke (wahrscheinlich — siehe Anmerkung unten)
- **Evidenz:** Die Schülerin schreibt "sie findet es wirksam und möchte weiterlesen." Das ist eine generische Behauptung, die auf die Metapher angewendet wird, ohne die TATSÄCHLICHE Wirkung zu spezifizieren. "Möchte weiterlesen" könnte von jedem Gerät in jedem Text gesagt werden — es trägt keine analytische Substanz.
- **Bedeutung:** Die Schülerin versteht möglicherweise, dass die Metapher Kraft und Gefahr erzeugt (Kommunikationslücke — sie weiss es aber kann es nicht ausdrücken) ODER sie verstehen nicht, was "Wirkung auf die Leserin" konkret bedeutet (konzeptuelle Lücke). Diagnose-Check erforderlich: frage die Schülerin "Was visualisierst du bei dieser Metapher? Was fühlst du?" Wenn sie verbal antworten kann, ist es eine Kommunikationslücke. Wenn nicht, ist es konzeptuell.
- **Nächster Unterrichtsschritt:** Modelliere den Unterschied zwischen generischer und spezifischer Wirkungsanalyse. Zeige der Schülerin: Generisch: "Das ist wirksam." Spezifisch: "Das Wort 'brüllend' suggeriert, dass das Meer gewalttätig und unkontrolliert ist, wie ein zorniges Tier. Die Leserin visualisiert riesige, gefährliche Wellen und fühlt die Kraft und Unvorhersehbarkeit des Sturms." Trainiere mit 2–3 weiteren Zitaten: "Was machst du SEH'N? Was machst du FÜHL'N?"

**Lücke 2: Vergleich erklären statt analysieren**
- **Typ:** Konzeptuelle Lücke
- **Evidenz:** "Das ist eine gute Metapher, weil sie das Meer mit einer Bestie vergleicht." Die Schülerin BESCHREIBT, was die Metapher tut (vergleicht zwei Dinge), anstatt zu ANALYSIEREN, was sie erreicht (erzeugt ein Gefühl von Gefahr, Wildheit, Kraft). Die Schülerin steckt bei der Identifikation — "sie vergleicht X mit Y" — was richtig ist, aber das ist keine Analyse.
- **Bedeutung:** Die Schülerin versteht möglicherweise nicht den Unterschied zwischen einem Gerät identifizieren (es benennen und beschreiben, was es strukturell tut) und ein Gerät analysieren (erklären, welchen Effekt es erzeugt und warum). Das ist eine häufige konzeptuelle Lücke in Klasse 8 — SuS haben gelernt, Geräte zu finden, aber nicht, sie zu analysieren.
- **Nächster Unterrichtsschritt:** Lehre explizit die Unterscheidung: "EINE METAPHER IDENTIFIZIEREN = sagen 'sie vergleicht X mit Y.' EINE METAPHER ANALYSIEREN = erklären, was der Vergleich mich DENKEN oder FÜHLEN lässt." Gib eine Formel: "Das Wort/Bild [spezifisches Wort] suggeriert [was es mich denken/visualisieren lässt], weil [Grund]. Das schafft ein Gefühl von [Emotion/Stimmung] für die Leserin." Trainiere diese Formel mit dem gleichen Zitat, dann mit einem neuen.

**Lücke 3: Keine Analyse spezifischer Wortwahlentscheidungen im Zitat**
- **Typ:** Prozedurale Lücke
- **Evidenz:** Die Schülerin zitiert "das Meer war eine brüllende Bestie" als Ganzes, aber zoomed nicht in spezifische Wörter rein — "brüllend" (Gewalt, Zorn, Unkontrollierbarkeit) und "Bestie" (Tier, gefährlich, kraftvoll, unmenschlich). Effektive Analyse arbeitet auf Wortebene, nicht nur auf Phrasenebene.
- **Nächster Unterrichtsschritt:** Zeige der Schülerin, wie man reinzoomt: "Du hast ein grossartiges Zitat. Jetzt schauen wir auf die einzelnen Wörter. Was macht dich 'brüllend' denken? Was ist mit 'Bestie'? Warum hat der Autor nicht 'das Meer war ein großes Tier' geschrieben? Was ist unterschiedlich an 'brüllende Bestie'?" Das ist eine prozedurale Fähigkeit — die Schülerin muss den PROZESS lernen, wie man in einzelne Wörter rein zoomt.

### Priorität

Behandle **Lücke 2 zuerst** (erklären vs. analysieren). Das ist die konzeptuelle Lücke — bis die Schülerin den Unterschied zwischen dem Beschreiben eines Geräts und der Analyse seiner Wirkung versteht, hilft die Behebung der anderen Lücken nicht. Sobald die Schülerin erklären kann, was ein Gerät MIT DER LESERIN MACHT (nicht nur, was es IST), werden Lücken 1 und 3 viel leichter zu schliessen.

### Feedback-Skript

"Also, lass mich dir zeigen, was du gut gemacht hast und eine Sache, an der du arbeiten solltest.

**Stärke:** Du hast drei Dinge wirklich gut gemacht hier. Du hast die Metapher korrekt identifiziert — genau, das IST eine Metapher. Du hast ein grossartiges Zitat gewählt — 'das Meer war eine brüllende Bestie' ist voller Dinge zum Analysieren. Und du hast deinen Absatz in der richtigen Struktur aufgebaut: Gerät, Zitat, Wirkung. Deine Grundlage ist also solide.

**Die Lücke:** Hier ist, worüber ich mit dir arbeiten möchte. Du schreibst 'die Wirkung auf die Leserin ist, dass sie das wirksam findet.' Aber das sagt mir nichts Spezifisches. Wenn ich 'das Meer war eine brüllende Bestie' lese, was visualisiere ich TATSÄCHLICH? Was FÜHLE ich? Schliesse deine Augen — wie sieht eine 'brüllende Bestie' aus? [Lass die Schülerin antworten.] Genau — etwas Kraftvolles, Gefährliches, Unkontrolliertes. DAS ist die Wirkung. Die Metapher lässt die Leserin das Meer als etwas Lebendiges und Gewalttätiges und Furchterregendes visualisieren. Das ist Analyse.

**Nächster Schritt:** Hier ist deine Regel für das nächste Mal. Nachdem du dein Zitat schreibst, stelle dir ZWEI Fragen: 'Was macht mich das SEH'N?' und 'Was macht mich das FÜHL'N?' Schreibe die Antworten auf diese zwei Fragen auf, und du wirst analysieren, nicht nur identifizieren. Versuche es jetzt mit diesem Zitat — schreibe deine zweiten und dritten Sätze neu mit diesen zwei Fragen."

---

## Bekannte Limitierungen

1. **Die Analyse hängt von der Genauigkeit und Vollständigkeit der Schülerarbeit-Beschreibung ab.** Eine paraphrasierte Zusammenfassung von Schülerarbeit kann wichtige Details verlieren (spezifische Wortwahlentscheidungen, Fehler in der Logik, die Struktur der Antwort). Wo möglich sollten LP den tatsächlichen Schülertext anstelle einer Zusammenfassung bereitstellen.

2. **Diagnostische Mehrdeutigkeit zwischen Lücken-Typen.** Manche Lücken könnten konzeptuell ODER kommunikativ sein — die Schülerin versteht möglicherweise aber kann nicht ausdrücken, oder versteht genuinely nicht. Die Analyse kennzeichnet diese Mehrdeutigkeit, wo sie existiert, und empfiehlt einen Diagnose-Check (z.B. die Schülerin mündlich erklären lassen), aber die LP muss die endgültige Klassifizierung basierend auf ihrem Wissen der Schülerin treffen.

3. **Die Analyse basiert auf einer einzelnen Arbeitsprobe.** Eine Arbeit kann die typische Leistung der Schülerin nicht darstellen — sie könnte müde, gehetzt oder einen schlechten Tag gehabt haben. Die Analyse soll als Evidenz ÜBER DIESE ARBEIT behandelt werden, nicht als definitive Bewertung der Fähigkeit der Schülerin. Mehrere Arbeitsproben über die Zeit hinweg geben ein zuverlässigeres Bild.
