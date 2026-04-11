---
# AGENT SKILLS STANDARD FIELDS (v2)
name: unterrichtsbesuch-protokoll
description: "Gestalte ein fokussiertes Unterrichtsbesuch-Protokoll mit spezifischen Beobachtungspunkten und Datenerfassungsmethoden. Verwende diesen Skill bei der Planung von Kolleg:innen-Beobachtungen, Coaching-Besuchen oder entwicklungsorientierten Klassenzimmer-Besuchen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-weiterbildung/unterrichtsbesuch-protokoll"
skill_name: "Unterrichtsbesuch Protokoll Designer"
domain: "professional-learning"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Darling-Hammond (2010) — Evaluating Teacher Effectiveness: how teacher performance assessments can measure and improve teaching"
  - "Hill, Charalambous & Kraft (2012) — When rater reliability is not enough: teacher observation systems and a case for the generalizability study"
  - "Wragg (2012) — An Introduction to Classroom Observation"
  - "O'Leary (2014) — Classroom Observation: a guide to the effective observation of teaching and learning"
  - "Coe et al. (2014) — What Makes Great Teaching? Review of the underpinning research"
input_schema:
  required:
    - field: "observation_focus"
      type: "string"
      description: "Die spezifische Unterrichtspraxis oder Lernaspekt zum Beobachten — nicht 'alles', sondern ein fokussierter Blick"
    - field: "observation_purpose"
      type: "string"
      description: "Warum die Beobachtung stattfindet — Entwicklung, Coaching, kollegiales Lernen, Qualitätssicherung, Forschung"
  optional:
    - field: "teacher_context"
      type: "string"
      description: "Erfahrungsstufe, Fach, relevanter Hintergrund"
    - field: "student_level"
      type: "string"
      description: "Alter/Jahrgangsstufe der unterrichteten SuS"
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "observation_duration"
      type: "string"
      description: "Ganze Lektion, Drop-in (15 Minuten), oder Learning-Walk (5 Minuten)"
    - field: "school_context"
      type: "string"
      description: "Beobachtungs-Kultur in der Schule — unterstützend, hochbelastet, neue Initiative"
output_schema:
  type: "object"
  fields:
    - field: "observation_protocol"
      type: "object"
      description: "Das komplette Protokoll — was zu beobachten ist, wie zu dokumentieren, was zu ignorieren ist"
    - field: "look_fors"
      type: "array"
      description: "Spezifische, beobachtbare Indikatoren verlinkt mit dem Fokus — was 'gut' in der Praxis aussieht"
    - field: "recording_format"
      type: "object"
      description: "Wie Evidenz während der Beobachtung zu erfassen ist — strukturierte Notizen, Zählung, Zeit-Sampling"
    - field: "feedback_framework"
      type: "object"
      description: "Wie die Post-Observation-Konversation zu strukturieren ist — evidenzbasiert, spezifisch, zukunftsorientiert"
chains_well_with:
  - "unterrichtscoaching-leitfaden"
  - "lesson-study-zyklus"
  - "reflexionsfragen-generator"
  - "fachdidaktik-entwickler"
  - "tpack-entwickler"
teacher_time: "3 minutes"
tags: ["beobachtung", "beobachtungspunkte", "feedback", "professionelle-entwicklung", "evidenzbasiert", "Lehrplan-21"]
---

# Unterrichtsbesuch Protokoll Designer

## Was dieses Skill leistet

Gestaltet ein fokussiertes, evidenzbasiertes Unterrichtsbesuch-Protokoll für eine spezifische Unterrichtspraxis — mit klaren "Beobachtungspunkten" (beobachtbare Indikatoren der Praxis in Aktion), strukturiertes Erfassungsformat, und ein Rahmenwerk für das Post-Observation-Feedback-Gespräch. Das kritische Prinzip ist, dass Beobachtungen FOKUSSIERT sein sollten (nach spezifischen Dingen schauen, nicht "alles"), EVIDENZBASIERT (beobachten, nicht urteilen), und ENTWICKLUNGSORIENTIERT (Lernen für die LP erzeugen, nicht einfach bewerten). Die Ausgabe ist ein gebrauchsfertiges Protokoll, das ein Beobachter ins Klassenzimmer nehmen kann, plus ein Feedback-Rahmenwerk für das Post-Observation-Gespräch. KI ist besonders wertvoll hier, weil effektive Beobachtungspunkte die Übersetzung abstrakter Unterrichtspraktiken ("effektive Fragestellung") in beobachtbare, spezifische Indikatoren ("die LP wartet mindestens 3 Sekunden nach einer Frage, bevor sie eine Antwort akzeptiert") erfordert — eine Übersetzung, die sowohl Forschungswissen als auch praktische Unterrichts-Erfahrung erfordert.

## Evidenzgrundlage

Darling-Hammond (2010) argumentierte, dass Unterrichts-Beobachtung am wirksamsten ist, wenn sie standards-basiert (mit klaren Kriterien verlinkt), evidenzbasiert (begründet auf beobachtbares Verhalten, nicht subjektive Eindrücke), und entwicklungsorientiert (gestaltet um Praxis zu verbessern, nicht einfach zu bewerten) ist. Sie betonte, dass die Qualität der Beobachtung von der Qualität des Protokolls abhängt — vage Kriterien erzeugen vages Feedback. Hill, Charalambous & Kraft (2012) zeigten, dass Beobachtungs-Reliabilität vom Fokus abhängt: Beobachter, die nach spezifischen, definierten Praktiken schauen, erzeugen konsistentere Bewertungen als Beobachter, die "Gesamt-Qualität" schauen. Wragg (2012) bot fundamentale Anleitung zu Klassenzimmer-Beobachtungs-Methoden, unterscheidend zwischen strukturierter Beobachtung (systematische Erfassung gegen vordefinierte Kriterien) und unstrukturierter Beobachtung (offene narrative). Er argumentierte für strukturierte Ansätze, weil sie mehr zuverlässige, nutzbare Evidenz erzeugen. O'Leary (2014) hinterfragte die Nutzung von Beobachtung als Performance-Management, argumentierend, dass Beobachtung am stärksten ist, wenn verwendet für professionelles Lernen — wenn LPs einander beobachten, spezifisches Feedback erhalten, und es nutzen, ihre Praxis zu entwickeln. Coe et al. (2014) in "What Makes Great Teaching?" identifizierten die Praktiken mit der stärksten Evidenzgrundlage für SuS-Ergebnisse: Inhalts-Wissen, Unterrichts-Qualität (einschließlich Fragen, Feedback, Assessment), Klassen-Klima, und Klassen-Management. Diese bieten die Evidenzgrundlage für das, was während Beobachtungen zu schauen ist.

## Input-Schema

Die LP muss zur Verfügung stellen:
- **Beobachtungs-Fokus:** Was zu beobachten ist. *z.B. "Checks für Verständnis — wie bewertet die LP, ob SuS verstanden haben, bevor sie weitergehen?" / "Denkzeit und SuS-Beteiligung — wie viele SuS sind aktiv beteiligt in Antworten zu Fragen?" / "Feedback während unabhängiger Praxis — was sagt die LP zu SuS, während sie herumgehen?"*
- **Beobachtungs-Zweck:** Warum. *z.B. "Entwicklung — Coaching-Zyklus, Blick auf Fragestellung als vereinbarter Fokus" / "Kolleg:innen-Beobachtung — zwei LPs beobachten einander um Praxis zu teilen" / "Qualitätssicherung — Schulleitung überwacht die Implementierung der neuen Feedback-Politik"*

Optional (von Kontextmodul, wenn verfügbar):
- **LP-Kontext:** Erfahrung, Fach, Hintergrund
- **SuS-Niveau:** Jahrgangsstufe
- **Fachbereich:** Das Fach
- **Beobachtungs-Dauer:** Ganze Lektion, Drop-in, oder Learning-Walk
- **Schulkontext:** Beobachtungs-Kultur

## Prompt

```
Du bist Experte in Klassenzimmer-Beobachtung und LP-Entwicklung mit tiefem Wissen von Darling-Hammonds (2010) Rahmenwerk für LP-Evaluation, Hill et al.'s (2012) Forschung auf Beobachtungs-Zuverlässigkeit, Wraggs (2012) Beobachtungs-Methoden, O'Learys (2014) entwicklungs-orientierter Ansatz, und Coe et al.'s (2014) Evidenz auf effektive Unterrichts-Praktiken. Du verstehst, dass der Wert einer Beobachtung fast komplett von der Qualität des Protokolls abhängt — was der Beobachter schaut und wie er dokumentiert bestimmt, was er lernt und welches Feedback er liefern kann.

KRITISCHE PRINZIPIEN:
- **Fokussiert, nicht komprehensiv.** Ein Beobachter kann "Unterrichts-Qualität" in einer Lektion nicht bedeutungsvoll bewerten. Ein fokussierter Blick auf EINEN Aspekt der Praxis erzeugt viel nützlicheres Beweis als ein genereller Überblick. Das Protokoll muss spezifizieren, was zu schauen ist UND was zu ignorieren ist.
- **Beweis, nicht Urteil.** Das Protokoll sollte den Beobachter anleiten, was sie SEHEN und HÖREN, nicht was sie DENKEN zu dokumentieren. "Die LP stellte 12 Fragen in 10 Minuten, 9 davon waren geschlossen" ist Beweis. "Die Fragestellung war schwach" ist Urteil. Beweis kann diskutiert werden; Urteil provoziert Defensivität.
- **Beobachtungspunkte müssen beobachtbar sein.** "Die LP hat hohe Erwartungen" ist nicht beobachtbar. "Die LP stellt einen Timer auf für die Aufgabe und sagt 'Ich erwarte, dass ihr alle 5 Fragen beantwortet'" ist beobachtbar. Das Protokoll muss Forschungs-basierte Praktiken in Dinge übersetzen, die ein Beobachter tatsächlich sehen und hören kann.
- **Das Feedback-Gespräch zählt genauso wie die Beobachtung.** Das Protokoll muss Anleitung für das Post-Observation-Gespräch einschluss — wie Evidenz zu teilen, wie Reflexion zu fördern, wie auf nächste Schritte zu einigen.

Deine Aufgabe ist die Gestaltung eines Beobachtungs-Protokolls für:

**Beobachtungs-Fokus:** {{observation_focus}}
**Beobachtungs-Zweck:** {{observation_purpose}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Verwende, was verfügbar ist; ignoriere alle Felder, die "nicht bereitgestellt" markiert sind.

**LP-Kontext:** {{teacher_context}} — wenn nicht bereitgestellt, gestalte ein Protokoll, das für jede LP funktioniert.
**SuS-Niveau:** {{student_level}} — wenn nicht bereitgestellt, gestalte für allgemeine Klassenzimmer-Beobachtung.
**Fachbereich:** {{subject_area}} — wenn nicht bereitgestellt, gestalte für fachübergreifende Nutzung.
**Beobachtungs-Dauer:** {{observation_duration}} — wenn nicht bereitgestellt, gestalte für eine ganze Lektion (50–60 Minuten).
**Schulkontext:** {{school_context}} — wenn nicht bereitgestellt, gestalte für einen entwicklungs-orientierten Zweck (nicht Performance-Management).

Gib deine Ausgabe in diesem exakten Format zurück:

## Beobachtungs-Protokoll: [Fokusbereich]

**Fokus:** [Was der Beobachter schaut]
**Zweck:** [Warum diese Beobachtung stattfindet]
**Dauer:** [Wie lange]

### Vor der Beobachtung

[Was der Beobachter wissen, tun, oder vorbereiten sollte, bevor das Klassenzimmer betreten wird]

### Beobachtungspunkte

Für jeden Beobachtungspunkt (4–6):
**Beobachtungspunkt [N]: [Beobachtbarer Indikator]**
- **Was zu beobachten/hören:** [Spezifisch beobachtbares Verhalten]
- **Beweis starker Praxis:** [Wie das aussieht, wenn es gut gemacht ist]
- **Beweis sich-entwickelnder Praxis:** [Wie das aussieht, wenn es noch nicht stark ist]
- **Wie zu dokumentieren:** [Zählung, Zeit-Stempel, Wort-für-Wort, oder narrative Notiz]

### Dokumentations-Vorlage

[Ein strukturiertes Format, das der Beobachter während der Beobachtung nutzen kann]

### Post-Observation Feedback-Rahmenwerk

[Wie das Feedback-Gespräch zu strukturieren ist — evidenzbasiert, spezifisch, zukunftsorientiert]

### Was NICHT zu beobachten ist

[Was bewusst auszuschließen ist aus dieser Beobachtung — um Fokus zu bewahren]

**Selbstcheck vor Rückgabe der Ausgabe:** Verifiziere, dass (a) jeder Beobachtungspunkt beobachtbar ist (du kannst es sehen oder hören), (b) das Protokoll Beweis von Urteil unterscheidet, (c) das Erfassungs-Format praktisch ist (kann in Real-Time genutzt werden), (d) das Feedback-Rahmenwerk evidenzbasiert und entwicklungs-orientiert ist, und (e) das Protokoll fokussiert ist — es schaut auf spezifische Dinge, nicht alles.
```

## Beispielausgabe

**Szenario:** *Beobachtungs-Fokus: "Checks für Verständnis — spezifisch, wie die LP bewertet, ob SuS das Inhalts-Material grasped haben, bevor zu der nächsten Phase gehen. Checken sie ALLE SuS oder nur Volunteers?" / Beobachtungs-Zweck: "Entwicklung — Teil eines Coaching-Zyklus. Die LP hat 'responsive Teaching' als ihr Entwicklungs-Fokus identifiziert. Diese Beobachtung sammelt Beweis auf ihre aktuellen Checks-für-Verständnis-Praxis." / LP-Kontext: "4. Unterrichtsjahr, 9. Klasse Geografie" / Beobachtungs-Dauer: "Ganze Lektion (55 Minuten)"*

---

## Beobachtungs-Protokoll: Checks für Verständnis

**Fokus:** Wie die LP überprüft, ob SuS verstanden haben, bevor zu der nächsten Phase gehen — wer ist geprüft, wie, und was passiert mit den Informationen
**Zweck:** Entwicklung — Coaching-Zyklus, LPs gewählter Fokus-Bereich
**Dauer:** Ganze Lektion (55 Minuten), 9. Klasse Geografie

### Vor der Beobachtung

1. **Vereinbare den Fokus mit der LP.** Vor der Lektion, bestätige: "Ich schaue spezifisch darauf, wie du Verständnis checkst — wann du checkst, wie du checkst, und was du mit den Informationen tust. Ich schaue nicht auf sonst etwas." Das reduziert Angst und stellt sicher, dass die LP weiß, was zu erwarten ist.

2. **Hole den Lehrplan.** Frage die LP: "Wo in der Lektion erwartest du Verständnis zu checken? Was hoffst du zu erfahren?" Das gibt dem Beobachter Kontext und identifiziert geplante Check-Punkte (die LP kann auch spontan checken, was genauso wichtig ist zu beobachten).

3. **Positioniere dich.** Sitze hinten oder zur Seite, wo du beide die LP und die SuS sehen kannst. Du brauchst SuS-Antworten zu beobachten (nicht nur LPs-Fragen), so eine Position, wo du SuS-Gesichter, Whiteboards, und schriftliche Arbeit sehen kannst, ist essentiell.

### Beobachtungspunkte

**Beobachtungspunkt 1: Wie viele SuS werden gecheckt?**
- **Was zu beobachten/hören:** Wenn die LP Verständnis checkt, nutzt die Technik Information von ALLEN SuS oder nur Volunteers? Zähle, wie viele SuS an jedem Check beteiligt sind.
- **Beweis starker Praxis:** Ganz-Klasse-Techniken: mini-Whiteboards mit "3-2-1-Zeige mir" (alle SuS antworten gleichzeitig), Exit-Tickets (jeder SuS schreibt), Cold-Calling (zufällige Auswahl, nicht Volunteers). Die LP sammelt Daten von 80%+ SuS.
- **Beweis sich-entwickelnder Praxis:** "Wer versteht, Hand hoch?" (Selbst-Bericht, nicht Beweis). "Habt ihr Fragen?" (vertraut darauf, dass SuS wissen, was sie nicht wissen). Nur 3–5 SuS antworten während 20+ unkontrolliert bleiben.
- **Wie zu dokumentieren:** Für jeden Check-Moment, notiere: die Technik genutzt, die ungefähre Zahl SuS, die antwortet haben, und ob die Antwort DEMONSTRIEREN Verständnis erforderte oder nur BEHAUPTEN es.

**Beobachtungspunkt 2: Welche Art Verständnis wird gecheckt?**
- **Was zu beobachten/hören:** Ist der Check Wiederholung testend (können SuS was gesagt wurde erinnern?), prozedurales Anwenden (können sie es tun?), oder konzeptionelles Verständnis (können sie erklären warum?)?
- **Beweis starker Praxis:** Fragen und Aufgaben, die SuS erfordern zu erklären, anwenden, oder demonstrieren — nicht einfach wiederholen. "Zeige mir, wie du die Bevölkerungsdichte dieser Region berechnen würdest" (Anwendung) vs. "Was ist Bevölkerungsdichte?" (Wiederholung).
- **Beweis sich-entwickelnder Praxis:** Checks, die nur Oberflächen-Wiederholung testen: "Kann jemand mir sagen, was wir über Bevölkerungsdichte gesagt haben?" SuS können die Definition wiederholen, ohne es zu verstehen.
- **Wie zu dokumentieren:** Für jeden Check, klassifiziere ihn: Wiederholung / Anwendung / Erklärung. Notiere die genaue Frage oder Aufgabe.

**Beobachtungspunkt 3: Timing — wann checkt die LP?**
- **Was zu beobachten/hören:** Checkt die LP VOR dem Übergang zu der nächsten Phase (diagnostisch — benutzt um zu entscheiden, was zu tun ist) oder nur am ENDE der Lektion (summativ — zu spät zum Anpassen)?
- **Beweis starker Praxis:** Checking passiert an Übergangs-Punkten — nachdem die LP ein Konzept erklärt und bevor SuS unabhängig üben, nach geführter Praxis und bevor Release zu unabhängiger Arbeit. Der Check ist ein Entscheidungs-Punkt: "Fahre ich fort, erkläre ich neu, oder differenziere ich?"
- **Beweis sich-entwickelnder Praxis:** Checking passiert nur am Ende (Exit-Ticket wenn die Klingel geht) oder überhaupt nicht (die LP nimmt Verständnis von nickenden Köpfen an).
- **Wie zu dokumentieren:** Zeit-Stempel jeden Check-Moment. Notiere, wo er in die Lektion-Sequenz fällt (während Erklärung / nach geführter Praxis / bevor unabhängige Arbeit / Ende der Lektion).

**Beobachtungspunkt 4: Was TUT die LP mit der Information?**
- **Was zu beobachten/hören:** Nach dem Checken, passt die LP an? Oder checkt und geht einfach weiter, egal was?
- **Beweis starker Praxis:** Die LP checkt (Whiteboards zeigen 60% korrekt), pausiert, re-lehrt: "Ich sehe, einige von euch sind nicht sicher über das noch. Lass mich das anders zeigen." ODER die LP checkt, sieht 90% korrekt, geht weiter: "Großartig — ihr habt das. Lass uns vorwärtsgehen." Der Check informiert die NÄCHSTE Unterrichts-Entscheidung.
- **Beweis sich-entwickelnder Praxis:** Die LP checkt, sieht gemischte Ergebnisse, und geht einfach weiter: "OK, gut gemacht, lass uns fortfahren." Das Datum wurde gesammelt aber nicht benutzt. Das ist diagnostisch ohne formativ zu sein.
- **Wie zu dokumentieren:** Für jeden Check, notiere: was das Datum zeigte UND was die LP nächste tat. War die nächste Aktion responsiv zum Datum?

### Dokumentations-Vorlage

| Zeit | Check-Technik benutzt | # SuS gecheckt | Typ (Wiederholung/Anwenden/Erklären) | Was Datum zeigte | LPs nächste Aktion | Responsiv? (J/N) |
|---|---|---|---|---|---|---|
| | | | | | | |
| | | | | | | |

Auch notieren: Wort-für-Wort Zitate von Check-Fragen (schreibe sie genau auf).

### Post-Observation Feedback-Rahmenwerk

**Schritt 1 — Teile Beweis, nicht Urteil (5 Minuten):**
"Hier ist, was ich dokumentiert habe. Du checktest Verständnis [X] Zeiten während der Lektion. Die Techniken, die du benutzt hast, waren [Liste]. Die Zahl SuS, die antwortet haben, reichte von [Y zu Z]. Hier sind die exakten Fragen, die du gestellt hast: [Wort-für-Wort]."

Präsentiere die Dokumentations-Vorlage. Lass die LP sie lesen.

**Schritt 2 — Lade zu Reflexion ein (10 Minuten):**
"Was bemerkst du, wenn du diese Daten anschaust?" (Lass sie analysieren.)
"Welcher Check-Moment denkst du war nützlichsten für deinen Unterricht? Warum?"
"Gab es Momente, wo du checktest und dann benutzt die Informationen, um zu ändern, was du tatest?"
"Gab es Momente, wo du gewünscht hast, du hättest gecheckt aber nicht?"

**Schritt 3 — Identifiziere einen spezifischen nächsten Schritt (10 Minuten):**
"Basierend auf dem, was wir gesehen haben, was ist die EINE Sache, die du ändern oder nächste Mal versuchen möchtest?"
Der nächste Schritt sollte spezifisch und erreichbar sein: z.B., "Nutze Mini-Whiteboards am Übergang zwischen Erklärung und Praxis, um alle SuS zu checken, bevor du sie zu unabhängiger Arbeit freigibst."

**Schritt 4 — Plane die Folgeveranstaltung (5 Minuten):**
"Wann wirst du das versuchen? Soll ich dem spezifischen Moment zuschauen? Wir können das Datum vergleichen."

### Was NICHT zu beobachten ist

Während dieser Beobachtung, ignoriere bewusst:
- Die Qualität des LPs Inhalts-Wissens (nicht der Fokus)
- Behavior-Management (wenn nicht direkt Checks für Verständnis beeinflussend)
- Die Qualität der Ressourcen oder Anzeigetafeln
- Der LPs Präsentations-Stil, Selbstvertrauen, oder Persönlichkeit
- Ob SuS "engagiert" sind in einem allgemeinen Sinne (konzentriere dich nur auf Engagement mit den Check-Aufgaben)

Fokussieren auf EINEN Aspekt erzeugt tiefe, nützliche Beweis. Das Verteilen von Aufmerksamkeit über alles erzeugt oberflächliche Eindrücke.

---

## Bekannte Limitierungen

1. **Eine Beobachtung ist ein Snapshot.** Eine Lektion könnte nicht die typische Praxis der LP darstellen. Die LP könnte anders performen, weil sie beobachtet wird (der Beobachter-Effekt). Das Protokoll sollte über mehrere Beobachtungen genutzt werden, um ein zuverlässiges Bild aufzubauen.

2. **Die Qualität von Feedback hängt von der Beobachter-Fähigkeit ab.** Ein well-designed Protokoll in den Händen eines Beobachters, der Feedback urteilend liefert, wird Defensivität erzeugen, nicht Wachstum. Das Feedback-Rahmenwerk leitet das Gespräch, aber der Beobachter muss trainiert werden, Feedback als evidenzbasierter Dialog zu liefern, nicht als Evaluation.

3. **Entwicklungs-Beobachtung und Performance-Management-Beobachtung erfordern verschiedene Ansätze.** Dieses Protokoll ist für Entwicklungs-Zwecke gestaltet. Wenn das gleiche Protokoll für hoch-belastete Performance-Management genutzt wird, werden LPs für den Beobachter eher als natürlich unterrichten performancen, und die Daten werden unzuverlässig sein. Schulen sollten Entwicklungs-Beobachtung von Accountability-Beobachtung separieren.
