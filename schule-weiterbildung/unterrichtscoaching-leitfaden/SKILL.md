---
# AGENT SKILLS STANDARD FIELDS (v2)
name: unterrichtscoaching-leitfaden
description: "Erstelle einen strukturierten Coaching-Gesprächsleitfaden mit Fragen, Protokollen und Folgeteilen für ein Unterrichtsanliegen. Verwende diesen Skill bei der Vorbereitung auf Coaching-Gespräche, Mentoring oder kollegiale Feedback-Gespräche."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-weiterbildung/unterrichtscoaching-leitfaden"
skill_name: "Unterrichtscoaching Gesprächsleitfaden"
domain: "professional-learning"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Knight (2007) — Instructional Coaching: a partnership approach to improving instruction"
  - "Knight (2018) — The Impact Cycle: what instructional coaches should do to foster powerful improvements in teaching"
  - "Kraft, Blazar & Hogan (2018) — The effect of teacher coaching on instruction and achievement: a meta-analysis"
  - "Costa & Garmston (2016) — Cognitive Coaching: developing self-directed leaders and learners"
  - "Aguilar (2013) — The Art of Coaching: effective strategies for school transformation"
input_schema:
  required:
    - field: "coaching_focus"
      type: "string"
      description: "Das konkrete Unterrichtsanliegen oder die Herausforderung, die bearbeitet wird — was die LP verbessern möchte"
    - field: "teacher_context"
      type: "string"
      description: "Kurzer Kontext über die LP — Erfahrungsstufe, Fach, aktuelle Situation"
  optional:
    - field: "observation_data"
      type: "string"
      description: "Daten aus einer Unterrichtsbesuch, SuS-Arbeiten oder Videoaufnahme — Evidenz für das Gespräch"
    - field: "coaching_phase"
      type: "string"
      description: "Position im Coaching-Zyklus — Zielklärung, Zwischencheck oder Reflexion der Wirkung"
    - field: "relationship_stage"
      type: "string"
      description: "Neues Coaching-Verhältnis, etabliertes Vertrauen oder herausfordernde Dynamik"
    - field: "teacher_disposition"
      type: "string"
      description: "Haltung der LP — motiviert, widerstrebend, überfordert, selbstsicher, unsicher"
    - field: "school_context"
      type: "string"
      description: "Relevant für Schule — Coaching-Programmstruktur, Schulleitungs-Erwartungen"
output_schema:
  type: "object"
  fields:
    - field: "conversation_plan"
      type: "object"
      description: "Ein strukturiertes Coaching-Gespräch mit spezifischen Fragen, erwarteten Antworten und Facilitation-Moves"
    - field: "questioning_sequence"
      type: "array"
      description: "Fragen sequenziert von reflektiv zu analytisch zu aktionsplanend"
    - field: "dialogue_strategies"
      type: "object"
      description: "Spezifische Strategien für die Coaches — Pausen, Paraphrasieren, Probieren, Daten zur Verfügung stellen"
    - field: "next_steps"
      type: "string"
      description: "Klare, spezifische nächste Schritte mit Verantwortlichkeit — was wird die LP versuchen und wann wird die Coaches nachfolgen"
chains_well_with:
  - "lesson-study-zyklus"
  - "unterrichtsbesuch-protokoll"
  - "reflexionsfragen-generator"
  - "aktionsforschung-zyklus"
  - "fachdidaktik-entwickler"
teacher_time: "4 minutes"
tags: ["coaching", "unterrichtscoaching", "Knight", "schule-weiterbildung", "feedback", "dialog", "kollegiale-zusammenarbeit"]
---

# Unterrichtscoaching Gesprächsleitfaden

## Was dieses Skill leistet

Gestaltet ein strukturiertes Coaching-Gespräch zwischen einer Lehrperson als Coach und einer Lehrperson als Coachee — mit Verwendung von Knights (2007, 2018) Partnership-Ansatz und dem Impact-Cycle-Modell — das der LP hilft, einen spezifischen Verbesserungsfokus zu identifizieren, Evidenz aus ihrer Praxis zu analysieren und sich zu einem konkreten nächsten Schritt zu verpflichten. Das Schlüsselprinzip ist, dass effektives Coaching eine PARTNERSCHAFT ist: die Coaches sagt nicht der LP, was zu tun ist (das ist Direktive), oder bestätigt einfach, was die LP bereits denkt (das ist Jubel). Stattdessen nutzt die Coaches Fragen, Daten und Dialog, um der LP zu helfen, klarer über ihre Praxis nachzudenken und ihre eigenen Entscheidungen über Veränderungen zu treffen. Die Ausgabe ist ein Gesprächsplan mit spezifischen Fragen, erwarteten Antworten, Dialog-Strategien für die Coaches (Pausen, Paraphrasieren, Probieren), und klaren nächsten Schritten mit Verantwortlichkeit. KI ist besonders wertvoll hier, weil die Gestaltung eines Coaching-Gesprächs erfordert, die wahrscheinlichen Antworten der LP zu antizipieren, die richtigen Fragen zum richtigen Moment auszuwählen, und Herausforderung mit Unterstützung auszugleichen — eine Real-Time-Facilitation-Fähigkeit, die von Vorausplanung profitiert.

## Evidenzgrundlage

Knight (2007) etablierte die Partnership-Prinzipien des Unterrichts-Coaching: Gleichberechtigung (Coaches und LP sind gleichberechtigte Partner), Wahl (die LP entscheidet, worauf sie hinarbeitet), Stimme (die Perspektive der LP ist zentral), Dialog (echtes Gespräch, nicht One-Way-Mitteilung), Reflexion (die LP untersucht ihre eigene Praxis), und Praxis (Lernen wird im Klassenzimmer angewendet). Knight (2018) operationalisierte diese Prinzipien in den Impact-Cycle: Identify (was ist die aktuelle Realität und was ist das Ziel?), Learn (welche Strategie könnte die Lücke schließen?), Improve (implementieren, überwachen, anpassen). Kraft, Blazar & Hogan (2018) führten eine Meta-Analyse von 60 Lehrercoaching-Studien durch und fanden eine gepoolte Effektgröße von 0,49 Standardabweichungen bei der Unterrichtsqualität und 0,18 bei der Schülerleistung — was Coaching zu einer der effektivsten Formen der beruflichen Entwicklung macht. Sie stellten fest, dass Coaching am wirksamsten ist, wenn es nachhaltig (nicht einmalig), fokussiert auf spezifische Praktiken (nicht allgemein), und auf Beobach- tungs- und Feedback-Zyklen eingebunden ist. Costa & Garmston (2016) entwickelten Cognitive Coaching mit Betonung, dass das Hauptwerkzeug der Coaches das Fragen stellen ist — Fragen, die Lehrpersonen helfen, selbstgerichteter, selbstüberwachend und selbstmodifizierend zu werden. Aguilar (2013) fügte die emotionale Dimension hinzu: effektives Coaching erfordert Aufmerksamkeit für die Emotionen, Überzeugungen und Identität der LP — nicht nur ihre Techniken.

## Input-Schema

Die LP muss zur Verfügung stellen:
- **Coaching-Fokus:** Was sie bearbeitet. *z.B. "Ich möchte meine Fragen verbessern — ich stelle zu viele geschlossene Fragen und gebe den SuS nicht genug Denkzeit" / "Meine 8. Klasse ist demotiviert und ich kann nicht herausfinden, warum" / "Mir wurde gesagt, dass ich differenzieren sollte, aber ich weiß nicht, wo ich anfangen soll"*
- **LP-Kontext:** Kurzer Hintergrund. *z.B. "NQT, erstes Unterrichtsjahr, Naturwissenschaften, grundsätzlich motiviert aber überfordert" / "Erfahrene LP (12 Jahre), Deutsch, kürzlich kritische Beobachtung und ist defensiv" / "Mittlere Leitungsfunktion, 6 Jahre, Mathematik, engagiert aber zeitlich begrenzt"*

Optional (von Kontextmodul, wenn verfügbar):
- **Beobachtungsdaten:** Evidenz zum Grunden des Gesprächs
- **Coaching-Phase:** Position im Zyklus
- **Beziehungsstadium:** Neu, etabliert, oder herausfordernd
- **LP-Haltung:** Motiviert, widerstrebend, überfordert, etc.
- **Schulkontext:** Coaching-Programmstruktur

## Prompt

```
Du bist Experte im Unterrichts-Coaching mit tiefem Wissen von Knights (2007, 2018) Partnership-Ansatz, dem Impact-Cycle, Kraft, Blazar & Hogans (2018) Meta-Analyse zur Coaching-Wirksamkeit, Costa & Garstons (2016) Cognitive Coaching, und Aguilars (2013) Aufmerksamkeit für die emotionale Dimension von Coaching. Du verstehst, dass effektives Coaching eine Partnership ist, bei der die Coaches Fragen und Daten nutzt, um der LP zu helfen, klarer zu denken, nicht ein direktives Prozess, bei dem die Coaches der LP sagt, was zu tun ist.

KRITISCHE PRINZIPIEN:
- **Partnership, nicht Direktive.** Die Coaches hat nicht die Antworten — die Coaches hat die Fragen, die der LP helfen, ihre eigenen Antworten zu finden. Wenn die Coaches alles redet, ist es nicht Coaching.
- **Daten, nicht Meinung.** Gründe Gespräche in beobachtbarer Evidenz (Beobachtungsdaten, SuS-Arbeiten, Videoclips), nicht subjektiven Eindrücken. "Ich bemerkte 4 von 25 SuS antworteten auf deine Fragen" ist Datum. "Deine Fragen brauchen Verbesserung" ist Meinung.
- **Spezifisch, nicht allgemein.** "Verbessere deine Differenzierung" ist zu vag zum Handeln. "Nächste Lektion, biete drei Versionen der Praxis-Aufgabe auf verschiedenen Schwierigkeitsstufen an" ist spezifisch genug zum Ausprobieren.
- **Die LP entscheidet.** Die Coaches kann vorschlagen, modellieren, oder Optionen bieten — aber die LP wählt, worauf sie hinarbeitet und was sie versucht. Wahl erzeugt Eigenverantwortung; Direktive erzeugt Gehorsam.

Deine Aufgabe ist die Gestaltung eines Coaching-Gesprächs für:

**Coaching-Fokus:** {{coaching_focus}}
**LP-Kontext:** {{teacher_context}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Verwende, was verfügbar ist; ignoriere alle Felder, die "nicht bereitgestellt" markiert sind.

**Beobachtungsdaten:** {{observation_data}} — wenn nicht bereitgestellt, gestalte das Gespräch, um die Wahrnehmung der LP selbst zu sammeln, und empfehle, dass Beobachtungsdaten vor dem nächsten Treffen gesammelt werden.
**Coaching-Phase:** {{coaching_phase}} — wenn nicht bereitgestellt, gehe von einem anfänglichen Coaching-Gespräch (Identify-Phase) aus.
**Beziehungsstadium:** {{relationship_stage}} — wenn nicht bereitgestellt, gehe von einer frühen Beziehung aus, bei der Vertrauen aufgebaut wird.
**LP-Haltung:** {{teacher_disposition}} — wenn nicht bereitgestellt, gestalte für eine willige, aber unsichere LP.
**Schulkontext:** {{school_context}} — wenn nicht bereitgestellt, gestalte für ein Standard-Schulcoa- ching-Programm.

Wende Knights Impact-Cycle an:

1. **Identify-Phase:**
   - Hilf der LP, die aktuelle Realität zu artikulieren: was passiert gerade?
   - Hilf der LP, ein klares Ziel zu definieren: wie sieht "besser" aus?
   - Nutze Daten, um die Lücke zwischen aktuellem Zustand und Ziel zu überbrücken.

2. **Learn-Phase:**
   - Erkundige Strategien, die die Lücke schließen könnten.
   - Die Coaches kann Optionen anbieten, eine Strategie modellieren, Forschung teilen, oder die Problemlösung der LP erleichtern.
   - Die LP wählt die Strategie zum Ausprobieren.

3. **Improve-Phase:**
   - Die LP implementiert die Strategie.
   - Die Coaches beobachtet oder die LP überwacht selbst.
   - Überprüfung: hat die Strategie funktioniert? Anpassing wenn nötig.

Für JEDE Frage, bereitstelle:
- Die Frage selbst
- Warum diese Frage wichtig ist (was sie zu Tage fördern soll)
- Wie man auf wahrscheinliche Antworten reagiert (einschließlich wenn die LP abweicht, defensiv wird, oder eine oberflächliche Antwort gibt)

Gib deine Ausgabe in diesem exakten Format zurück:

## Coaching-Gespräch: [Fokusbereich]

**Fokus:** [Was die LP bearbeitet]
**LP:** [Kurzer Kontext]
**Phase:** [Identify / Learn / Improve]

### Gesprächsplan

**Eröffnung (5 Minuten):**
[Wie man beginnt — Rapport aufbauen, Agenda festlegen, Partnership-Rahmen etablieren]

**Erkundung (15 Minuten):**
[Kern-Fragen zum Fokusbereich — mit erwarteten Antworten und Folgemoments]

**Aktionsplanung (10 Minuten):**
[Fragen, die zu einem spezifischen nächsten Schritt bewegen]

**Abschluss (5 Minuten):**
[Zusammenfassen, nächste Schritte bestätigen, Folgetermin vereinbaren]

### Wichtigste Coaching-Moves

[Spezifische Dialog-Strategien — Pausen, Paraphrasieren, Probieren — mit Beispielen für jede]

### Wenn das Gespräch feststeckt

[Was zu tun ist, wenn die LP abweicht, defensiv wird, oberflächliche Antworten gibt, oder das Gespräch den Fokus verliert]

### Vorlagen für nächste Schritte

[Ein klares Format für den vereinbarten nächsten Schritt — was die LP ausprobiert, wann, und wann die Coaches nachfolgen wird]

**Selbstcheck vor Rückgabe der Ausgabe:** Verifiziere, dass (a) das Gespräch eine Partnership ist, nicht ein Vortrag, (b) Fragen offen und reflektiv sind, nicht führend, (c) das Gespräch begründet ist oder zu Evidenz bewegt, (d) der nächste Schritt spezifisch und erreichbar ist, und (e) die Rolle der Coaches ist, das Denken der LP zu erleichtern, nicht alle Antworten zu geben.
```

## Beispielausgabe

**Szenario:** *Coaching-Fokus: "Ich möchte meine Fragen verbessern — ich stelle zu viele geschlossene Fragen und gebe SuS nicht genug Denkzeit, aber wenn ich versuche, zu ändern, falle ich innerhalb von Minuten in alte Muster zurück" / LP-Kontext: "3. Unterrichtsjahr, Geschichte, genuinely motiviert zu verbessern, selbstbewusst über das Problem aber frustriert, dass sie es nicht beheben kann" / Beobachtungsdaten: "Bei einer kürzlichen Beobachtung verzeichnete die Coaches 23 Fragen in 15 Minuten. 19 waren geschlossen (ja/nein oder ein-Wort-Antwort). Durchschnittliche Wartezeit nach einer Frage war 1,8 Sekunden. Die gleichen 5 SuS antworteten auf 80% der Fragen." / Coaching-Phase: "Identify — erstes Coaching-Gespräch zu diesem Fokus"*

---

## Coaching-Gespräch: Fragen und Denkzeit

**Fokus:** Verbesserung der Fragestellung — mehr offene Fragen, längere Denkzeit, breitere Beteiligung
**LP:** 3. Jahr, Geschichte, selbstbewusst und motiviert, frustriert durch Rückkehr zu alten Mustern
**Phase:** Identify

### Gesprächsplan

**Eröffnung (5 Minuten):**
"Danke, dass du Zeit dafür nimmst. Bevor wir anfangen — wie geht es dir? Wie war die Woche?" [Echtes Check-in. Rapport aufbauen. Nicht in die Daten stürzen.]

Dann: "Du hast erwähnt, dass du deine Fragen bearbeiten möchtest. Bevor ich teile, was ich in der Beobachtung bemerkte, würde ich gerne deine Perspektive hören. Wie nimmst du deine Fragestellung in deinen Lektionen wahr?"

*Warum diese Frage:* Die Perspektive der LP zuerst zu erfragen, ehrt das Partnership-Prinzip. Es zeigt auch die Selbstbewusstsein — wenn die LP das Problem bereits kennt, muss die Coaches es nicht "offenbaren". Wenn ihre Wahrnehmung von den Daten abweicht, wird diese Lücke zu einem Diskussionspunkt.

*Erwartete Antwort:* "Ich stelle zu viele geschlossene Fragen. Ich habe versucht, zu ändern, aber ich führt immer wieder zurück. Es ist wirklich frustrierend." — Die LP ist selbstbewusst. Bestätige und baue darauf auf.

*Coach-Move:* "Diese Selbstwahrnehmung ist wirklich wertvoll — viele LPs bemerken ihre Frage-Muster überhaupt nicht. Du hast das Muster identifiziert. Was ich tun möchte, ist, zusammen mit dir einige Daten anschauen und sehen, ob wir herausfinden können, WARUM die Rückkehr passiert und was wir dagegen tun können."

**Erkundung (15 Minuten):**

Frage 1: "Kann ich teilen, was ich in der Beobachtung sah? Ich verzeichnete einige Daten zu deinen Fragen — möchtest du sie zusammen anschauen?"
*Warum:* Führt Daten mit Erlaubnis ein. Erhält Partnership — die LP einigt sich, Daten anzuschauen, statt sie geliefert zu bekommen.

[Teile die Daten: 23 Fragen in 15 Minuten, 19 geschlossen, 1,8 Sekunden Wartezeit, 5 SuS antworten auf 80%.]

Frage 2: "Was bemerkst du, wenn du diese Daten anschaust?"
*Warum:* Lässt die LP die Daten selbst interpretieren, statt der Coaches sagt, was sie bedeuten. Das baut analytische Kapazität auf.

*Erwartete Antwort:* "Das ist schlimmer als ich dachte. 19 von 23 geschlossen — und 1,8 Sekunden Wartezeit ist nichts."

*Coach-Move:* Paraphrasieren: "Das Muster ist also noch ausgeprägter als du erwartet hast. 19 von 23 sind etwa 83% geschlossene Fragen. Und die Wartezeit — 1,8 Sekunden — was denkst du, bedeutet das für SuS?"

Frage 3: "Du hast gesagt, du versuchst zu ändern, aber fallen innerhalb von Minuten zurück. Kannst du mich durch das durchgehen, was passiert? Wie fühlt sich die Rückkehr an?"
*Warum:* Das ist die entscheidende Frage. Die meisten Coaching konzentriert sich auf WAS zu ändern ist. Diese Frage konzentriert sich auf WARUM die Änderung nicht bleibt — das ist, wo die echte Hebelwirkung ist.

*Erwartete Antwort:* "Ich plane offene Fragen vor der Lektion. Ich stelle ein oder zwei am Anfang. Aber dann geben SuS eine kurze Antwort, oder es ist Stille, und ich bekomme Angst und fülle den Raum. Bevor ich es weiß, stelle ich "Versteht jeder?" und "Welche ist die Antwort auf Frage 3?""

*Coach-Move:* "Die Stille ist also der Auslöser. Du stellst eine offene Frage, SuS antworten nicht sofort, und die Unbequemlichkeit der Stille drückt dich zurück zu geschlossenen Fragen. Ist das richtig?"

Frage 4: "Was denkst du, tun SuS während dieser Stille? Ist Stille notwendigerweise etwas Schlechtes?"
*Warum:* Hinterfragt die Annahme, dass Stille = Versagen. Stille nach einer offenen Frage könnte bedeuten, dass SuS DENKEN — das ist genau das, wofür Denkzeit bestimmt ist.

*Erwartete Antwort:* "Ich weiß, dass sie wahrscheinlich denken. Aber es FÜHLT sich nicht so im Moment an. Es fühlt sich an, als ob sie verwirrt sind oder ich eine schlechte Frage gestellt habe."

*Coach-Move:* "Es gibt also eine Lücke zwischen dem, was du WEISST (Stille ist Denkzeit) und dem, was du FÜHLST (Stille bedeutet etwas ist schiefgegangen). Das ist sehr verbreitet. Das Gefühl ist der Feind hier, nicht die SuS."

Frage 5: "Wenn du EINE Sache an deiner Fragestellung ändern könntest — nicht alles, nur eine Sache — welche würde den größten Einfluss haben?"
*Warum:* Bewegt sich von Analyse zu Handlung. Erzwingt Priorisierung — die LP kann nicht alles gleichzeitig ändern. Die Aufgabe der Coaches ist, der LP zu helfen, eine Änderung zu wählen, die spezifisch und erreichbar ist.

*Erwartete Antwort:* "Wahrscheinlich die Denkzeit. Wenn ich nur WARTEN könnte nach einer offenen Frage, könnte alles andere folgen — SuS hätten Zeit zum Denken, mehr SuS wären bereit zu antworten, und ich würde nicht die Stille mit geschlossenen Fragen füllen."

**Aktionsplanung (10 Minuten):**

Frage 6: "OK — Denkzeit. Lass uns das wirklich spezifisch machen. Wie viele Sekunden Stille würden sich wie Fortschritt anfühlen?"
*Warum:* Verwandelt ein vages Ziel in ein messbares.

*Erwartete:* "Fünf Sekunden? Das klingt machbar, aber es würde sich wie eine Ewigkeit anfühlen."

Frage 7: "Was würde dir helfen, die Stille zu halten? Manche LPs zählen stillschweigend. Manche heben eine Hand, um zu signalisieren 'Ich warte absichtlich.' Manche nutzen ein visuelles Timer. Was würde für dich funktionieren?"
*Warum:* Bietet Optionen ohne zu dirigieren. Die LP wählt die Strategie, die zu ihrem Stil passt.

Frage 8: "Hier ist, was ich vorschlagen würde. In deiner nächsten Lektion wähle 3 Momente, bei denen du eine offene Frage stellst und vollen 5 Sekunden wartest, bevor du irgendeine Antwort nimmst. Nur 3 Momente — nicht die ganze Lektion. Wärst du bereit, das zu versuchen?"
*Warum:* Klein, spezifisch, erreichbar. Drei Momente sind nicht überwältigend. Die LP kann die 3 Fragen im Voraus planen, was die Stille handhabbarer macht.

**Abschluss (5 Minuten):**

"Lass mich zusammenfassen, was wir vereinbart haben. Du wirst 3 offene Fragen für deine nächste 8. Klasse Lektion planen und nach jeder einen vollen 5 Sekunden warten, bevor du irgendeine Antwort annimmst. Ich besuche diese Lektion — nicht die ganze Lektion, nur diese 3 Momente — und ich verzeichne die Wartezeit und wer antwortet. Wir treffen uns nächste Woche, um anzuschauen, was passiert. Klingt das richtig für dich?"

### Wichtigste Coaching-Moves

**Pausen:** Nach einer Frage stellen, warten. Nicht die Stille füllen. Das gleiche Denkzeit-Prinzip, das für SuS gilt, gilt für Coaching-Gespräche — die LP braucht Zeit zum Denken. Zähle bis 5 in deinem Kopf, bevor du sprichst.

**Paraphrasieren:** Werfe die Worte der LP in leicht anderem Sprachgebrauch zurück: "Also was du sagst, ist, dass die Stille sich unbequem anfühlt, und diese Unbequemlichkeit ist, was die Rückkehr zu geschlossenen Fragen auslöst." Das bestätigt das Verständnis und hilft der LP, ihr eigenes Denken zu hören.

**Probieren:** Wenn die LP eine oberflächliche Antwort gibt, gehe tiefer: "Du hast gesagt 'Ich versuche, aber ich kann nicht ändern.' Was passiert spezifisch im Moment, wenn du zurückfällst? Was fühlst du?" Probieren ist nicht Verhör — es ist sanfte Neugier, die der LP hilft, ihre Praxis genauer zu untersuchen.

**Daten liefern (nicht Meinung):** "Ich verzeichnete 1,8 Sekunden durchschnittliche Wartezeit" ist Datum. "Deine Wartezeit ist zu kurz" ist Meinung. Datum lädt zu Reflexion ein; Meinung lädt zu Defensivität ein.

### Wenn das Gespräch feststeckt

**Wenn die LP abweicht:** ("Es ist nicht nur ich — die SuS wollen nicht offene Fragen beantworten.") Erkenne die Frustration an, dann leite dann zurück auf das, was in der Kontrolle der LP ist: "Du hast recht — SuS-Beteiligung ist teilweise über sie. Aber das, was du KANNST kontrollieren, ist die Art Frage und die Zeit, die du ihnen gibst. Lass uns dort konzentrieren."

**Wenn die LP defensiv wird:** ("Sagst du, dass ich eine schlechte LP bin?") Beruhige sofort: "Überhaupt nicht. Du hast das als etwas identifiziert, das du verbessern möchtest — das zeigt echte professionelle Bewusstsein. Das Datum ist nur ein Startpunkt, damit wir Fortschritt messen können. Das ist über Wachstum, nicht Urteile."

**Wenn die LP nur oberflächliche Antworten gibt:** ("Ich muss einfach bessere Fragen stellen.") Probiere: "Wie würde eine 'bessere' Frage klingen? Kannst du mir ein Beispiel geben?" Das bewegt sich von abstrakt ("besser") zu konkret (eine tatsächliche Frage, die sie stellen könnten).

### Vorlage für nächste Schritte

**Was:** Plan 3 offene Fragen und halte 5 Sekunden Denkzeit nach jeder.
**Wann:** Nächste 8. Klasse Geschichte Lektion (bestimmtes Datum).
**Unterstützung:** Die Coaches beobachtet die 3 Momente und verzeichnet Wartezeit + SuS-Antwort-Daten.
**Folgetermin:** Coaching-Treffen nächste Woche (bestimmtes Datum) zum Überprüfen, was passiert.

---

## Bekannte Limitierungen

1. **Coaching-Gespräche erfordern Vertrauen.** Das Gespräch oben geht davon aus, dass eine willige LP in einer unterstützenden Coaching-Beziehung ist. Wenn die LP aktiv widerstrebend ist (nicht nur nervös, aber feindselig gegenüber Coaching), muss sich die Gesprächsgestaltung ändern — Vertrauensaufbau muss vor Unterrichts-Fokus kommen. Dieses Skill behandelt nicht schwer widerstrebende Coaching-Dynamiken, die andere Strategien erfordern.

2. **Coaching ist am wirksamsten als Teil eines nachhaltigen Zyklus.** Ein Coaching-Gespräch erzeugt limitierte Veränderung. Die Meta-Analyse von Kraft et al. (2018) stellte fest, dass Coaching-Effekte aus nachhaltigen Zyklen von Zielstellung, Beobachtung, Feedback und Anpassung kommen. Dieses Gesprächsplan ist ein Schritt in das, was ein fortlaufender Zyklus sein sollte.

3. **Die Coaches braucht Coaching-Fähigkeiten, nicht nur den Gesprächsplan.** Ein Skript von Fragen zu lesen ist nicht das gleiche wie ein echtes Coaching-Dialog zu erleichtern. Das Pausen, Paraphrasieren, Probieren und responsive Erleichterung beschrieben oben erfordern Praxis. Coaches sollten Training erhalten und idealerweise Coaching ihrer eigenen Coaching-Praxis.
