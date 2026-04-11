---
# AGENT SKILLS STANDARD FIELDS (v2)
name: weiterbildung-designer
description: "Gestalte eine Weiterbildungssitzung für LP anhand von Andragogik-Prinzipien mit aktivem Engagement. Nutze diesen Skill für SCHILF-Tage, ZLB-Workshops oder kollegiale Schulungen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "professionelle-lernentwicklung/weiterbildung-designer"
skill_name: "Weiterbildungs-Designer"
domain: "professionelle-lernentwicklung"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Timperley et al. (2007) — Teacher Professional Learning and Development: Best Evidence Synthesis (BES)"
  - "Darling-Hammond, Hyler & Gardner (2017) — Effective Teacher Professional Development"
  - "Desimone (2009) — Improving impact studies of teachers' professional development"
  - "Kennedy (2016) — How does professional development improve teaching?"
  - "Knowles (1984) — Andragogy: adult learning theory"
input_schema:
  required:
    - field: "wb_thema"
      type: "string"
      description: "Die Unterrichtspraxis oder das Wissen, das die Sitzung vermitteln soll"
    - field: "zielgruppe"
      type: "string"
      description: "Wer teilnimmt — Anzahl der LP, Erfahrungsbereich, Fächer, Rollen"
    - field: "sitzungsdauer"
      type: "string"
      description: "Dauer der Sitzung — 1 Stunde, 2 Stunden, Halbtag, Ganztagsveranstaltung"
  optional:
    - field: "sitzungszweck"
      type: "string"
      description: "Warum findet diese Sitzung statt — neue Initiative, Verbesserungsschwerpunkt, Anfrage von LP"
    - field: "aktuellePraxis"
      type: "string"
      description: "Was LP derzeit in diesem Bereich tun — der Ausgangspunkt"
    - field: "schulkontext"
      type: "string"
      description: "Relevante Schulmerkmale — Verbesserungsprioritäten, Schulqualität, Stimmung des Kollegiums"
    - field: "anschlussplanung"
      type: "string"
      description: "Was nach der Sitzung geschieht — Coaching, kollegiale Hospitation, weitere Sitzungen"
    - field: "facilitatorExpertise"
      type: "string"
      description: "Wer leitet die Sitzung und welche Expertise hat diese Person im Thema"
output_schema:
  type: "object"
  fields:
    - field: "sitzungsplan"
      type: "object"
      description: "Ein zeitlich strukturierter Plan mit Andragogik-Prinzipien"
    - field: "aktiveLernaufgaben"
      type: "array"
      description: "Hands-on-Aufgaben, bei denen LP handeln, nicht nur zuhören"
    - field: "praxisanwendung"
      type: "object"
      description: "Wie LP das Gelernte im eigenen Klassenzimmer umsetzen — konkrete Vorhaben"
    - field: "anschlussbetreuung"
      type: "object"
      description: "Was nach der Sitzung geschieht, um das Lernen zu verstetigen — Verantwortlichkeit, Unterstützung, Überprüfung"
chains_well_with:
  - "unterrichtscoaching-leitfaden"
  - "lesson-study-zyklus"
  - "aktionsforschung-zyklus"
  - "reflexionsfragen-generator"
  - "fachdidaktik-entwickler"
  - "tpack-entwickler"
teacher_time: "4 minutes"
tags: ["SCHILF", "Weiterbildung", "Timperley", "Andragogik", "ZLB", "Schulung"]
---

# Weiterbildungs-Designer

## Was dieser Skill leistet

Gestaltet eine evidenzgestützte Weiterbildungssitzung für LP mit Fokus auf aktives Lernen (LP handeln, nicht nur hören), praktische Verbindung (LP planen die Umsetzung im eigenen Unterricht) und Anschlussbetreuung (was nach der Sitzung geschieht, um den Wandel zu verstetigen). Die zentrale Erkenntnis aus Timerley-Forschung: Die meisten Weiterbildungen scheitern nicht wegen falscher Inhalte, sondern wegen falscher Gestaltung. Eine einmalige Präsentation ohne Nachbetreuung, ohne Üben und ohne Verantwortlichkeit führt zu null Veränderung in der Unterrichtspraxis. Der Output ist ein zeitlich strukturierter Sitzungsplan mit aktiven Lernaufgaben, praktischen Anwendungsaktivitäten und einer Anschlussbetreuung. KI ist hier besonders wertvoll, weil wirksame Weiterbildung drei Anforderungen gleichzeitig erfüllen muss: Inhalte vermitteln (LP müssen etwas Neues lernen), aktives Engagement ermöglichen (LP müssen neue Inhalte verarbeiten und anwenden) und praktische Planung ermöglichen (LP verlassen die Sitzung mit konkretem Plan für ihren Unterricht) — alles in begrenzter Zeit.

## Evidence Foundation

Timperley et al. (2007) führten die umfassendste Synthese zu wirksamer Weiterbildung durch und fanden: Wirksame Weiterbildung ist (a) nachhaltig über die Zeit verteilt (nicht einmalig), (b) fokussiert auf die Verbindung zwischen Unterrichtspraxis und Schüler-Lernoutcomes, (c) involviert LP in aktives Lernen (nicht passives Zuhören), (d) basiert auf Kollaboration, (e) wird durch Fachexpertise begleitet, und (f) verbindet Theorie mit Praxis. Sie fanden: Der INHALT ist weniger wichtig als der PROZESS — eine schlecht gestaltete Sitzung zu einem wichtigen Thema führt weniger zu Veränderungen als eine gut gestaltete Sitzung zu einem engerem Thema. Darling-Hammond, Hyler & Gardner (2017) identifizierten sieben Merkmale wirksamer Weiterbildung: inhaltsorientiert, aktives Lernen, Kollaboration, Modelle guter Praxis, Coaching und Fachbegleitung, Feedback und Reflexion, nachhaltige Dauer. Desimone (2009) schlug ein Rahmenkonzept vor: Wirksame Weiterbildung verändert LP-Wissen und Überzeugungen → verändert Unterrichtspraxis → verändert Schülerergebnisse. Kennedy (2016) argumentiert, dass Weiterbildung Unterricht nicht durch neue Techniken verbessert, sondern dadurch, dass LP verstehen, WARUM bestimmte Ansätze funktionieren — den Mechanismus, nicht nur die Methode. Knowles (1984) etablierte Erwachsenenlernprinzipien: Erwachsene lernen beste, wenn Lernen problembasiert (nicht abstrakt) ist, zu ihren Erfahrungen verbunden ist, Wahl bietet und sofortige praktische Anwendbarkeit hat.

## Input Schema

Die Lehrperson oder Weiterbildungsleiter*in muss angeben:
- **Weiterbildungsthema:** Worum geht es. *z.B. „Retrieval Practice in der ganzen Schule umsetzen" / „Formative Bewertung zur Verbesserung der Responsivität nutzen" / „SuS mit UELAS in Regelklassen unterstützen" / „Qualität von Lehrkraft-Feedback verbessern"*
- **Zielgruppe:** Wer teilnimmt. *z.B. „30 LP, verschiedene Fächer, NQT bis erfahrene LP" / „8 Mitglieder des Deutschteams, alle erfahren" / „Ganzes Kollegium 60 LP, SCHILF-Tag"*
- **Sitzungsdauer:** Wie lange. *z.B. „1 Stunde nach Unterricht" / „2-Stunden-SCHILF-Sitzung" / „Ganztagsveranstaltung — 6 Stunden"*

Optional (durch Kontextmodul, wenn verfügbar):
- **Sitzungszweck:** Warum dies geschieht
- **Aktuelle Praxis:** Was LP bereits tun
- **Schulkontext:** Verbesserungsprioritäten, Kollegiumsstimmung
- **Anschlussplanung:** Was danach geschieht
- **Facilitator-Expertise:** Wer leitet und deren Hintergrund

## Prompt

```
Du bist Expert*in für Weiterbildungsgestaltung mit umfassender Kenntnis von Timerley et al. (2007) Best Evidence Synthesis zu professionellem Lernen, Darling-Hammond et al. (2017) zu Merkmalen wirksamer Weiterbildung, Desimone (2009) konzeptuellen Rahmen, Kennedy (2016) Forschung zu wie Weiterbildung Unterricht verbessert, und Knowles (1984) Erwachsenenlernprinzipien. Du verstehst, dass die meisten Weiterbildungen deshalb scheitern, weil sie als Präsentation gestaltet sind (passiv, einmalig, losgelöst von Praxis), nicht als Lernererlebnis (aktiv, nachhaltig, mit Unterrichtspraxis verbunden).

KRITISCHE GESTALTUNGSPRINZIPIEN:
- **Die 20/80-Regel:** Nicht mehr als 20% der Sitzungszeit sollte die Facilitator*in sprechen. Mindestens 80% sollten LP HANDELN: diskutieren, planen, üben, analysieren, gestalten. Wenn du eine Sitzung mit hauptsächlich Präsentation gestaltest, hast du versagt.
- **Ausgangspunkt: LP-Erfahrung (Knowles, 1984).** Erwachsene lernen, indem sie neues Wissen mit bestehender Praxis verbinden. Die Sitzung muss mit dem beginnen, was LP bereits wissen und tun, nicht mit dem, was sie tun sollten.
- **Ende mit konkretem Klassenzimmer-Vorhaben.** Jede LP soll mit einem konkreten Plan weggehen: „In meiner 8. Klasse zum Thema [X] am nächsten [Wochentag] werde ich [spezifische Strategie] ausprobieren." Vage Vorhaben („Ich werde mehr Formative Bewertung nutzen") führen zu null Veränderung.
- **Anschlussbetreuung einplanen.** Eine Sitzung ohne Nachbetreuung ist professionelle Unterhaltung, nicht professionelles Lernen. Was geschieht nächste Woche, nächsten Monat?
- **Respekt vor LP-Zeit und Expertise.** LP sind Profi*s mit großer Expertise. Nicht bevormunden. Nicht übervereinfachen. Nicht so tun, als sei die Lösung einfach, wenn sie komplex ist.

Deine Aufgabe ist es, eine Weiterbildungssitzung zu gestalten für:

**Weiterbildungsthema:** {{wb_thema}}
**Zielgruppe:** {{zielgruppe}}
**Sitzungsdauer:** {{sitzungsdauer}}

Das folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Nutze was verfügbar ist; ignoriere Felder mit „nicht angegeben".

**Sitzungszweck:** {{sitzungszweck}} — wenn nicht angegeben, leite ab vom Thema.
**Aktuelle Praxis:** {{aktuellePraxis}} — wenn nicht angegeben, baue eine Aktivität ein, die aktuelle Praxis aufdeckt.
**Schulkontext:** {{schulkontext}} — wenn nicht angegeben, gestalte für allgemeinen Schulkontext.
**Anschlussplanung:** {{anschlussplanung}} — wenn nicht angegeben, empfehle Anschlussstruktur.
**Facilitator-Expertise:** {{facilitatorExpertise}} — wenn nicht angegeben, gestalte für Facilitator*in mit guter Themenkompetenz.

Gebe deine Ausgabe in diesem Format zurück:

## Weiterbildungssitzung: [Thema]

**Thema:** [Was LP lernen werden]
**Zielgruppe:** [Wer teilnimmt]
**Dauer:** [Wie lange]

### Sitzungsübersicht

[Ein Absatz: was LP lernen, tun und mitnehmen werden]

### Sitzungsplan

Für jede Phase:
**[Zeitblock]: [Phasenname]**
- **Facilitator*in macht:** [Was die Facilitator*in sagt/tut — knapp]
- **LP machen:** [Was LP aktiv tun — die Hauptaktivität]
- **Zweck:** [Warum diese Phase für das Lernen wichtig ist]
- **Ressourcen:** [Materialien, Handouts, Technik]

### Aktive Lernaufgaben

[Detaillierte Beschreibung der 2–3 Haupt-Aktivitäten — was LP tun, wie strukturiert, was produziert]

### Praxisanwendung

[Wie LP planen, das Gelernte im eigenen Klassenzimmer anzuwenden — spezifische Planungsaktivität]

### Anschlussbetreuung

[Was nach der Sitzung geschieht — Coaching, kollegiale Hospitation, Überprüfungstreffen, Anschluss-Sitzung]

### Facilitator*in-Hinweise

[Tipps für Facilitator*in — wie Sitzung managen, häufige Herausforderungen, wie mit Widerstand umgehen]

**Selbstprüfung vor Rückgabe:** Überprüfe dass (a) mindestens 80% der Zeit aktiv ist (LP handeln, nicht zuhören), (b) die Sitzung mit LP-Erfahrung beginnt, (c) jede LP mit konkretem Klassenzimmer-Vorhaben weggeht, (d) Anschlussbetreuung geplant ist, und (e) die Sitzung LP-Professionalität respektiert.
```

## Example Output

**Szenario:** *Weiterbildungsthema: „Retrieval Practice in der ganzen Schule umsetzen — LP verstehen warum Retrieval Practice funktioniert, wie man es effizient nutzt, und wie man es in bestehende Routinen einbaut ohne Workload zu erhöhen" / Zielgruppe: „Ganzes Kollegium 45 LP, verschiedene Fächer (Primar und Sekundarstufe 1, Schule mit beiden), Erfahrungsbereich von NQT bis 25 Jahre. Kollegium grundsätzlich positiv aber zeitarm und skeptisch gegenüber ‚noch einer Initiative'" / Sitzungsdauer: „90 Minuten, SCHILF nach Unterricht" / Schulkontext: „Schulentwicklungsplan der Schule priorisiert ‚Verbesserung von Langzeitretention von Wissen'. Kollegium hat von Retrieval Practice gehört, wenige setzen es systematisch um."*

---

## Weiterbildungssitzung: Retrieval Practice — Von Forschung in dein Klassenzimmer

**Thema:** Retrieval Practice verstehen und umsetzen
**Zielgruppe:** 45 LP, verschiedene Fächer und Erfahrung, Schule mit Primar und Sekundarstufe
**Dauer:** 90 Minuten

### Sitzungsübersicht

LP werden Retrieval Practice als Lernende erleben (damit sie spüren, WIE es funktioniert), die Forschungsevidenz studieren warum es funktioniert (damit sie den MECHANISMUS verstehen, nicht nur die Methode), und eine spezifische Retrieval-Routine für eine ihrer Klassen gestalten (damit sie ein PLAN mitnehmen, nicht nur eine Absicht). Die Sitzung basiert auf dem Prinzip, dass Retrieval Practice lernen unterstützen sollte, ohne Workload zu erhöhen — jede Routine sollte weniger als 5 Minuten Unterrichtszeit brauchen und minimal Vorbereitung erfordern.

### Sitzungsplan

**0:00–0:10 — Erleben (10 Min)**
- **Facilitator*in macht:** „Bevor ich dir etwas über Retrieval Practice erzähle, möchte ich, dass du es erlebst. Nimm ein leeres Blatt. Schreibe alles auf, das du von der letzten Kollegiums-Fortbildung erinnerst — Thema, Kernideen, Details. Du hast 3 Minuten. Los."
- **LP machen:** Brain-Dump für 3 Minuten (die meisten erinnern sich wenig, was ist der PUNKT). Dann mit Partner*in vergleichen: erinnert ihr euch an gleiche Dinge? Unterschiedliche? Wie viel habt ihr behalten?
- **Zweck:** Dies IST Retrieval Practice — und es zeigt das Problem (wir vergessen das meiste von dem, was wir in Fortbildungen hören). Es schafft auch die Motivation: „Wenn wir kaum von letztem Monat behalten, stellt euch vor, was SuS aus unseren Lektionen behalten." Die Erfahrung schafft das Bedürfnis für den Inhalt, der folgt.
- **Ressourcen:** Leere Blätter, nichts weiter.

**0:10–0:20 — Warum es funktioniert (10 Min)**
- **Facilitator*in macht:** Kurze (10 Minuten maximal) Präsentation der Evidenz: Roediger & Butler (2011), Testing Effect, Bjorks desirable difficulties. Kernbotschaft: Informationen aus dem Gedächtnis abrufen STÄRKT die Gedächtnis-Spur — es ist nicht nur Assessment, es ist Lernstrategie. Zwei Kernfolien: (1) die Vergessenskurve — wie schnell wir ohne Abruf vergessen; (2) ein Graph Wiederholungslesen vs. Retrieval Practice für Langzeitretention.
- **LP machen:** Zuhören (das ist die 20% Facilitator-sprechend-Zeit). Aber AKTIV: nach jeder Kernidee stellt Facilitator*in eine Retrieval-Frage dazu. „Ohne auf die Folie zu schauen — was ist der Testing Effect?" Dies modelliert die Technik in Echtzeit.
- **Zweck:** LP müssen das WARUM verstehen, bevor sie sich für das WIE einsetzen. Aber die Präsentation ist KURZ — 10 Minuten, nicht 40.
- **Ressourcen:** Folien (maximal 6), Handout mit Kernreferenzen.

**0:20–0:40 — Techniken erkunden (20 Min)**
- **Facilitator*in macht:** Stellt 5 workload-arme Retrieval-Techniken vor, jede auf Karte: (1) Brain Dump, (2) Retrieval Grid, (3) Letzte Lektion/letzte Woche/letzten Monat, (4) Niedriges Risiko-Quiz (keine Technik nötig), (5) Elaboratives Fragen („Warum ist das wahr?").
- **LP machen:** In fachaffinfinitätsgruppen 4–5, untersuchen alle 5 Technik-Karten. Für jede: diskutiert wie es in EUREM Fach funktionieren könnte. Markiert jede Technik: „Einfach sofort umzusetzen" / „Würde Anpassung brauchen" / „Nicht passend für mein Fach." Gruppen teilen ihre Top 2 Techniken mit dem Raum.
- **Zweck:** LP evaluieren Techniken gegen ihre eigene Praxis — nicht „welche ist beste?" sondern „welche passt FÜR MICH?" Wahl schafft Ownership. Fachaffine Gruppierung sichert dass Diskussion relevant ist (ein Retrieval Grid funktioniert anders in Mathe als in Deutsch).
- **Ressourcen:** Technik-Karten (5 Karten pro Tisch, mit Beschreibung und Beispiel), großes Papier für Gruppennotizen.

**0:40–1:05 — Deine Routine gestalten (25 Min)**
- **Facilitator*in macht:** „Jetzt werdet ihr eine spezifische Retrieval-Routine für eine eurer Klassen planen. Nicht ‚ich werde irgendwann Retrieval Practice ausprobieren' — eine spezifische Routine die antwortet: welche Klasse, welche Lektion, welche Technik, wie oft, wie lange?" Stelle Planungsvorlage zur Verfügung.
- **LP machen:** Individuell, vollende die Planungsvorlage:
  - **Klasse:** (z.B., 9. Klasse Geographie, Dienstag 3. Stunde)
  - **Technik:** (z.B., „Letzte Lektion / letzte Woche / letzten Monat" — 3 Fragen am Anfang jeder Lektion)
  - **Häufigkeit:** (z.B., jede Lektion für die nächsten 3 Wochen)
  - **Zeitaufwand:** (z.B., 5 Minuten am Anfang)
  - **Erste Fragensatz:** (schreib sie jetzt — geh morgen mit Fragen los)

  Nach 15 Minuten individuelles Planen, paar euch mit einer Kolleg*in und teilt: „Hier ist mein Plan. Macht das Sinn? Was könnte schiefgehen?"
- **Zweck:** Dies ist die wichtigste Phase. LP gehen mit einem PLAN, nicht nur Konzept weg. Sie haben bereits ihre ersten Fragen geschrieben — die Barriere zum Anfangen morgen ist entfernt.
- **Ressourcen:** Planungsvorlage (eine pro LP), Stifte.

**1:05–1:15 — Verpflichtung und Anschlussbetreuung (10 Min)**
- **Facilitator*in macht:** „Schreib auf einem Post-it: dein Name, deine Klasse, deine Technik, und das Datum wann du anfängst. Kleb es an der Tafel bevor du gehst. In drei Wochen werde ich alle überprüfen wie es läuft — nicht um zu bewerten, sondern um zu lernen was funktioniert und was angepasst werden muss."
- **LP machen:** Schreib dein Vorhaben, teile mit der Person neben dir („Ich werde X tun — wie sieht es bei dir aus?"), und poste dein Post-it öffentlich.
- **Zweck:** Öffentliches Vorhaben erhöht Durchführung (Cialdini, 2006). Die 3-Wochen-Überprüfung bietet Verantwortlichkeit ohne Überwachung. Das „nicht um zu bewerten sondern um zu lernen"-Framing reduziert Angst.
- **Ressourcen:** Post-its, Tafel zum Ausstellen.

### Aktive Lernaufgaben

**Aufgabe 1 — Der Opening Brain Dump:** LP erleben Retrieval Practice als Lernende. Das dauert 3 Minuten aber setzt den Gesamtton: „Wir machen das, wir sprechen nicht nur drüber."

**Aufgabe 2 — Technik-Evaluierung:** Fachaffine Gruppen evaluieren 5 Techniken gegen ihre eigene Praxis. Das sind 20 Minuten aktive Diskussion wo LP professionelle Urteile treffen über was für ihr Fach und Kontext funktioniert.

**Aufgabe 3 — Die Planungsvorlage:** Jede LP gestaltet eine spezifische Retrieval-Routine mit Fragen die bereits geschrieben sind. Das ist der Unterschied zwischen „interessante Sitzung" und „ich fang morgen damit an."

### Praxisanwendung

Jede LP geht weg mit:
1. Einer vollendeten Planungsvorlage mit Klasse, Technik, Häufigkeit und Timing spezifiziert
2. Ihrem ersten Fragensatz ready to use
3. Einem öffentlichen Vorhaben (Post-it) wann sie starten

### Anschlussbetreuung

**Woche 1:** Kurze E-Mail von Facilitator*in: „Ihr habt eure Retrieval-Routinen diese Woche angefangen — wie läuft es? Antwortet mit einem Satz: was funktioniert und was ist tricky."

**Woche 3:** 15-Minuten-Slot im nächsten Kollegiums-Meeting. Drei LP teilen ihre Erfahrung (eine von Primar, eine von Sekundarstufe, eine die Herausforderung hatte). Strukturiert: „Was ich ausprobiert hab, was passiert ist, was ich gelernt hab." Dies ist kollegialer Austausch, nicht Performance.

**Ferienende:** Optionaler „Retrieval Practice Drop-in" — 30 Minuten für LP die ihre Praxis vertiefen wollen, neue Techniken probieren, oder Schwierigkeiten lösen möchten. Moderiert, nicht verpflichtend.

**Nächste volle SCHILF:** 20-Minuten Revisit — Retrieval Practice auf Retrieval Practice. „Ohne auf eure Notizen von letztem Mal zu schauen, schreibt die drei wichtigsten Dinge auf die ihr über Retrieval Practice gelernt habt." Meta-Modellierung: die Technik nutzen um das Lernen über die Technik zu verstetigen.

### Facilitator*in-Hinweise

1. **Die größte Gefahr ist zu viel reden.** Wenn du merkst dass du länger als 10 Minuten kontinuierlich präsentierst, stopp. Die LP engagieren sich nicht — du modellierst das Gegenteil von dem was du lehrst (passive Rezeption vs. aktiver Abruf). Vertrau den Aktivitäten.

2. **Skeptizismus mit Evidenz handhaben, nicht mit Begeisterung.** Wenn eine LP sagt „Das ist nur noch eine Mode", nicht abwehren: „Das ist ein berechtigter Bedenken. Hier ist die Evidenz: Der Testing Effect wurde in über 100 Studien über 40 Jahre repliziert. Das ist nicht neu — es ist einer der robustesten Befunde in der kognitiven Wissenschaft. Was würde dir helfen dich sicherer zu fühlen, es auszuprobieren?"

3. **Manche LP nutzen bereits Retrieval Practice.** Würdige das. Bitte sie zu teilen was sie tun — kollegiale Expertise ist glaubwürdiger als Facilitator*in-Expertise. „Wer macht bereits etwas Ähnliches? Erzähl uns davon."

4. **Die Post-it-Wand ist essentiell.** Übersprung sie nicht. Öffentliches Vorhaben erhöht Durchführung dramatisch. Und die Wand selbst wird sichtbares Artefakt: „45 LP haben sich verpflichtet Retrieval Practice diese Woche auszuprobieren."

---

## Known Limitations

1. **Eine einzige Sitzung kann Veränderung nicht verstetigen.** Timperley et al. (2007) sind unmissverständlich: One-off-Weiterbildung ändert nicht die Praxis. Diese Sitzung ist gestaltet als START eines nachhaltigen Fokus — nicht als standalone-Event. Ohne Anschlussbetreuung wird diese Sitzung dasselbe Resultat haben wie jede andere SCHILF: initiale Begeisterung gefolgt von gradueller Rückkehr zur früherer Praxis.

2. **Die Sitzung setzt grundlegend Facilitator*in-Kompetenz voraus.** Der Plan stellt Struktur bereit, aber Facilitation — Gruppendynamik managen, Widerstand handhaben, Tempo kalibrieren, auf Fragen antworten — erfordert Skill. Eine Facilitator*in die den Plan wie ein Skript liest produziert nicht die gleichen Outcomes wie eine die die Prinzipien versteht und in der Moment anpassen kann.

3. **Schulkultur beeinflußt Weiterbildungs-Effektivität.** In Schulen mit niedrigem Vertrauen, hohem Leistungsdruck oder Geschichte von Initiative-Ermüdung, selbst gut gestaltete Weiterbildung trifft auf Widerstand. Die Sitzungsgestaltung adressiert das (Anfang mit Erfahrung, Wahl anbieten, Zeit respektieren), aber kann nicht vollständig eine giftige Berufskultur kompensieren. Schulleitung muss die Bedingungen dafür schaffen dass professionelles Lernen thriven kann.
