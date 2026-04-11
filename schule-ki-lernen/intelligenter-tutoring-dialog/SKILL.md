---
# AGENT SKILLS STANDARD FIELDS (v2)
name: intelligenter-tutoring-dialog
description: "Skripte einen Multi-Turn Tutoring Dialog mit Verzweigungen-Antworten für antizipierte SuS-Schwierigkeiten. Verwende dies beim Entwerfen von KI-Tutoren, Chatbot-Interaktionen oder strukturierter eins-zu-eins-Unterstützungs-Skripte."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-ki-lernen/intelligenter-tutoring-dialog"
skill_name: "Intelligenter Tutoring Dialog - Designer"
domain: "schule-ki-lernen"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "VanLehn (2011) — The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems (meta-analysis)"
  - "Chi et al. (2001) — Learning from human tutoring (analysis of effective tutoring dialogues)"
  - "Graesser et al. (2005) — AutoTutor: An intelligent tutoring system with mixed-initiative dialogue"
  - "Chi & Wylie (2014) — The ICAP framework: linking cognitive engagement to active learning outcomes"
  - "Koedinger & Aleven (2007) — Exploring the assistance dilemma in experiments with cognitive tutors"
input_schema:
  required:
    - field: "lern_ziel"
      type: "string"
      description: "Das spezifische Konzept oder Fähigkeit, die die Tutoring-Interaktion der SuS zur Beherrschung helfen sollte"
    - field: "antizipierte_schwierigkeiten"
      type: "string"
      description: "Die spezifischen Punkte, wo SuS typischerweise kämpfen mit diesem Inhalt — Fehlkonzepte, Verfahrensfehler oder konzeptionelle Lücken"
  optional:
    - field: "schueler_niveau"
      type: "string"
      description: "Jahrgangsstufe und Leistungsniveau"
    - field: "fachbereich"
      type: "string"
      description: "Das Schulfach"
    - field: "interaktions_laenge"
      type: "string"
      description: "Wie lange die Tutoring-Interaktion dauern sollte"
    - field: "schueler_modell"
      type: "string"
      description: "Was über den spezifischen Schüler bekannt ist — Prior-Leistung, bekannte Fehlkonzepte oder Lern-Präferenzen"
    - field: "system_moeglichkeiten"
      type: "string"
      description: "Was das KI-System kann — nur Text, Text + Bilder, Stimme, Worked Examples, interaktive Probleme"
output_schema:
  type: "object"
  fields:
    - field: "dialog_architektur"
      type: "object"
      description: "Die gesamte Struktur der Tutoring-Interaktion — Phasen, Entscheidungs-Punkte und Verzweigungs-Logik"
    - field: "dialog_zuege"
      type: "array"
      description: "Die spezifischen Züge, die dem Tutor verfügbar sind an jedem Punkt — Fragen, Hinweise, Erklärungen, Aufforderungen und Stille"
    - field: "entscheidungs_regeln"
      type: "object"
      description: "Wann jeden Zug nutzen — die Regeln, die das Tutor-Verhalten basierend auf SuS-Antworten regeln"
    - field: "beispiel_dialog"
      type: "object"
      description: "Ein kompletter Beispiel-Dialog zeigend das System in Aktion mit einer realistischen SuS"
chains_well_with:
  - "adaptive-hinweisfolgen"
  - "ki-feedback-design"
  - "formative-beurteilungsschleife"
teacher_time: "5 minutes"
tags: ["Tutoring", "Dialog", "ITS", "VanLehn", "AutoTutor", "Graesser", "Chi", "ICAP", "gemischt-Initiative", "Lehrplan21", "Selbsterklärung"]
---

# Intelligenter Tutoring Dialog - Designer

## Was diese Fähigkeit tut

Entwirft die Dialog-Logik für eine KI-Tutoring-Interaktion — wann eine Frage zu stellen ist, wann ein Hinweis zu geben ist, wann zu erklären ist, wann zu einer Selbsterklär-Aufforderung aufzufordern ist und wann zu schweigen ist. Das ist das schwierigste Design-Problem im intelligenten Tutoring: zu viel Intervention verhindert produktives Streben und erzeugt Abhängigkeit; zu wenig lässt SuS stecken und frustriert. VanLehn (2011) zeigte, dass die Effektivität von Tutoring (Mensch oder KI) auf der Qualität der Schritt-Level-Interaktion abhängt — Systeme, die SuS in aktives Denken bei jedem Schritt engagieren, übertreffen dramatisch Systeme, die einfach Inhalt präsentieren und End-Antworten evaluieren. Chi et al. (2001) analysierten was menschliches Tutoring effektiv macht und fanden, überraschend, dass die effektivsten Tutoren NICHT die waren, die am meisten erklärten — sie waren die, die die richtigen Fragen stellten und Gelegenheiten für SuS zu schaffen, sich selbst zu erklären. Die Ausgabe umfasst eine komplette Dialog-Architektur (die Phasen und Verzweigungs-Logik der Interaktion), eine Bibliothek von Dialog-Zügen (die spezifischen Dinge der Tutor sagen oder tun kann), Entscheidungs-Regeln (wann jeden Zug basierend auf SuS-Antworten nutzen) und einen Arbeits-Beispiel-Dialog zeigend das System in Aktion. KI ist hier speziell wertvoll, weil es eins-zu-eins-Dialog im großen Maßstab aufrechterhalten kann — aber der Dialog muss bewusst entworfen sein, sonst wird die KI zu Vorträgen-Haltung, das ist die am wenigsten effektive Tutoring-Strategie.

## Evidenzgrundlage

VanLehn (2011) führte eine umfassende Meta-Analyse durch, vergleichend Mensch-Tutoring, intelligente Tutoring-Systeme und keine-Tutoring-Bedingungen. Er fand, dass der kritische Faktor nicht WER war, der unterrichtete, sondern WIE. "Innere Schleife"-Systeme — die, die Feedback und Scaffolding bei jedem Problemlösungs-Schritt gaben — erreichten Effektstärken von 0,76, nahezu matching Mensch-Tutoren (0,79). "Äußere Schleife"-Systeme — die, die nur End-Antworten evaluierten — erreichten viel niedriger Effektstärken (0,31). Die Implikation für Dialog-Design ist klar: das System muss sich mit des Schülers Denk-Prozess engagieren, nicht nur deren Endantwort. Chi et al. (2001) führten detaillierte Analyse von effektiven Mensch-Tutoring-Dialoge durch und identifizierten eine überraschende Entdeckung: die effektivsten Tutoren GABEN NICHT die besten Erklärungen. Stattdessen nutzten sie ein Muster von "elicit, dann erkläre" — zuerst auffordernd die SuS, eine Erklärung zu versuchen, dann aufbauend auf, was die SuS produzierte. Diese Entdeckung widerspricht direkt der intuitiven Annahme, dass gutes Tutoring über klare Erklärung ist. Der Grund: wenn ein Tutor erklärt, die SuS empfängt passiv. Wenn ein Tutor auffordernd und die SuS versucht zu erklären, die SuS aktiv konstruiert Verständnis (Chi & Wylie, 2014 — das ICAP-Rahmen). Graesser et al. (2005) entwickelt AutoTutor, eines der am meisten extensive-nachforschten intelligenten Tutoring-Systeme, die einen "gemischt-Initiative-Dialog"-Ansatz nutzen. AutoTutor stellt Fragen, evaluiert SuS-Antworten, gibt Feedback und auffordernd für Ausarbeitung — aufrechterhalten eine Dialog-Austausch statt einen Vortrag. Ihre Forschung identifizierte fünf Schlüssel-Dialog-Züge: pumps ("Erzähl mir mehr"), Aufforderungen (auffordernd für spezifische Information), Hinweise (zeigend zum Ziel ohne zu geben), Aussagen (Informationen liefernd) und Korrektionen (direkt adressierend Fehler). Koedinger & Aleven (2007) artikulierten das "Assistenz-Dilemma" — die fundamentale Spannung im Tutoring-Design. Zu viel Assistenz (erklärend alles, Hinweise zu schnell gebend) erzeugt oberflächliches Lernen: die SuS vervollständigt die Aufgabe, aber versteht nicht, warum. Zu wenig Assistenz (nie eingreifend, SuS endlos kämpfen lassend) erzeugt Frustration und Aufgabe. Die optimale Tutoring-Strategie navigiert zwischen diesen Extremen, MINDEST-Assistenz liefernd notwendig für die SuS Fortschritt zu machen.

## Input-Schema

Die LP muss bereitstellen:
- **Lern-Ziel:** Was die SuS meistern sollte. *z.B. "Verstehen, warum schwerere Gegenstände NICHT schneller fallen als leichtere Gegenstände (Newton's vs. Aristotelian-Physik)" / "In der Lage sein, das Haupt-Argument in einem Non-Fiction-Text zu identifizieren und es von unterstützender Evidenz unterscheiden" / "Verstehen, dass mit einer Fraktion unter 1 zu multiplizieren macht eine Zahl kleiner, nicht größer"*
- **Antizipierte Schwierigkeiten:** Wo SuS kämpfen. *z.B. "SuS haben starke Aristotelian-Intuition, dass schwerer = schneller. Sie zitieren alltägliche Erfahrung (einen Feder fallenlassend vs. einen Ball) als 'Beweis.' Sie kämpfen, Luft-Widerstand von Gravitations-Beschleunigung zu unterscheiden" / "SuS verwirren das Thema eines Texts mit dem Argument. Sie identifizieren Fakten statt Ansprüche. Sie kämpfen, was der Autor glaubt, von was der Autor berichtet, zu unterscheiden" / "SuS wenden die 'Multiplikation macht größer'-Regel von Ganzen Nummern an und sind verwirrt, wenn ½ × 6 = 3"*

Optional (durch Kontextmotor eingefügt, falls verfügbar):
- **Schüler-Niveau:** Jahrgangsstufe und Leistungsniveau
- **Fachbereich:** Das Schulfach
- **Interaktions-Länge:** Wie lange die Interaktion dauern sollte
- **Schüler-Modell:** Bekannte Information über den spezifischen Schüler
- **System-Möglichkeiten:** Was das KI-System kann

## Prompt

```
Du bist ein Experte im Tutoring-Dialog-Design, mit tiefem Wissen von VanLehns (2011) Meta-Analyse zur ITS-Effektivität, Chis et al. (2001) Forschung auf effektiven Tutoring-Dialogen, Graessers et al. (2005) AutoTutor-Forschung, Chi & Wylies (2014) ICAP-Rahmen und Koedinger & Alevens (2007) Assistenz-Dilemma. Du verstehst, dass die Qualität von Tutoring nicht auf was der Tutor WEISS abhängt, sondern auf was der Tutor TUT — spezifisch, wie der Tutor den Dialog verwaltet, um die SuS's aktive kognitives Engagement zu maximieren.

KRITISCHE PRINZIPIEN:
- **Elicit vor Erklärung.** Der häufigste Fehler im Tutoring (Mensch und KI) ist zu viel, zu früh erklären. Der erste Zug sollte fast immer eine FRAGE sein, nicht eine Erklärung. Selbst wenn die SuS eindeutig falsch ist, der erste Zug ist "Kannst du dein Denken erklären?" — nicht "Tatsächlich, die richtige Antwort ist..." Chi et al. (2001) zeigte, dass Tutoring-Effektivität mit wie viel der SCHÜLER spricht korreliert, nicht wie viel der Tutor spricht.
- **Navigieren das Assistenz-Dilemma.** Koedinger & Aleven (2007): zu viel Hilfe → oberflächliches Lernen; zu wenig Hilfe → Frustration. Der Dialog sollte MINDEST-Assistenz liefernd notwendig für Fortschritt. Beginne mit der leichtesten möglichen Intervention (eine Frage, eine Pause, ein Pump) und eskaliere NUR wenn leichtere Züge fehlschlagen.
- **Nutze gemischt-Initiative-Dialog.** Graesser et al. (2005): effektives Tutoring ist eine DIALOG, nicht ein Vortrag oder ein Quiz. Der Tutor manchmal führt (auffordernd Fragen) und manchmal folgt (antwortend auf SuS-Fragen). Die SuS sollte echte Behörden im Dialog haben — sie können Fragen stellen, Verwirrtheit ausdrücken, das Thema ändern oder widersprechen.
- **Stille ist ein Zug.** Einer der kraftvollsten Tutoring-Züge ist zu sagen nichts. Nach einer Frage, WARTEN. SuS braucht Zeit zu denken. Falls das System sofort zu jede SuS-Aktion antwortet, trainiert es die SuS, passiv zu sein. Absichtlich Stille (mit sichtbarer Denk-Zeit) erzeugt produktives Streben.
- **Entwerfe für Fehlkonzepte, nicht einfach Fehler.** Ein Fehler ist eine falsche Antwort zu bekommen. Ein Fehlkonzept ist ein falsches mentales Modell zu halten. Der Dialog muss zwischen diesen unterscheiden: Fehler werden mit Feedback korrigiert; Fehlkonzepte werden durch Erstellung kognitiven Konflikt adressiert — Beweise präsentierend, die des Schülers mentales Modell widerspricht und auffordernd sie, den Konflikt zu reconcile.

Deine Aufgabe ist es, die Dialog-Logik für zu entwerfen:

**Lern-Ziel:** {{lern_ziel}}
**Antizipierte Schwierigkeiten:** {{antizipierte_schwierigkeiten}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Nutze, was verfügbar ist; ignoriere Felder, die "nicht bereitgestellt" markiert sind.

**Schüler-Niveau:** {{schueler_niveau}} — falls nicht bereitgestellt, entwerfe für einen allgemeinen Sekundarstufe-1-Kontext.
**Fachbereich:** {{fachbereich}} — falls nicht bereitgestellt, leite aus dem Lern-Ziel ab.
**Interaktions-Länge:** {{interaktions_laenge}} — falls nicht bereitgestellt, entwerfe für eine 10-15-Minuten-Interaktion.
**Schüler-Modell:** {{schueler_modell}} — falls nicht bereitgestellt, nehme an, einen typischen Schüler, der die antizipierten Fehlkonzepte halten könnte.
**System-Möglichkeiten:** {{system_moeglichkeiten}} — falls nicht bereitgestellt, entwerfe für ein Text-basiertes KI-System, das auch Bilder und Worked Examples anzeigen kann.

Gib deine Ausgabe in exakt diesem Format zurück:

## Tutoring-Dialog-Design: [Lern-Ziel]

**Lern-Ziel:** [Was der Schüler meistern sollte]
**Antizipierte Schwierigkeiten:** [Wo SuS kämpfen]
**Interaktions-Modell:** [Wie der Dialog strukturiert ist]

### Dialog-Architektur

[Die gesamte Struktur der Interaktion — Phasen, Übergänge und Verzweigungs-Logik. Schluss ein visuelles Flussdiagramm ein, falls hilfreich.]

**Phase 1: [Name]** — [Zweck und Schlüssel-Züge]
**Phase 2: [Name]** — [Zweck und Schlüssel-Züge]
**Phase 3: [Name]** — [Zweck und Schlüssel-Züge]

### Dialog-Zug-Bibliothek

[Die spezifischen Züge verfügbar dem Tutor an jedem Punkt, mit Beispielen von jedem]

| Zug-Typ | Wann nutzen | Beispiel |
|---|---|---|
| [Zug] | [Bedingung] | [Exakter Text] |

### Entscheidungs-Regeln

[Die Regeln regierend, welcher Zug nutzen, basierend auf SuS-Antworten. Format als IF-THEN-Regeln.]

### Beispiel-Dialog

[Ein kompletter, realistischer Dialog zeigend das System in Aktion mit einer SuS, die das antizipierte Fehlkonzept hält. Zeige BEIDE effektive und herausfordernde Moment — enthaltend was geschieht, wenn die SuS verwirrt, widerspenstig oder falsch ist.]

**Tutor:** [Was das System sagt]
**Schüler:** [Eine realistische SuS-Antwort]
**Tutor:** [Reaktion, mit Notation erklärend, WARUM dieser Zug gewählt wurde]
...

### Design-Rationale

[Warum der Dialog so strukturiert ist — welche Forschungs-Prinzipien es folgt und welche Alternativen wurden betrachtet.]

**Selbstüberprüfung vor Rückgabe:** Verifiziere, dass (a) der Dialog elicit vor Erklärung, (b) das Assistenz-Dilemma wird navigiert (Mindest-notwendig-Hilfe), (c) Stille wird als absichtlich Zug benutzt, (d) Fehlkonzepte werden durch kognitiven Konflikt nicht einfach Korrektur adressiert, und (e) der Schüler spricht mehr als der Tutor.
```

## Beispiel-Ausgabe (gekürzt für Platz)

**Szenario:** *Lern-Ziel: "Verstehen, warum schwerere Gegenstände NICHT schneller fallen als leichtere Gegenstände — die Unterscheidung zwischen Gravitations-Beschleunigung (gleich für alle Gegenstände) und Luft-Widerstand (verschieden für verschiedene Gegenstände)" / Antizipierte Schwierigkeiten: "SuS haben starke Aristotelian-Intuition, dass schwerer = schneller. Sie zitieren alltägliche Erfahrung (Feder vs. Ball fallenlassend) als 'Beweis.' Sie kämpfen zu Luft-Widerstand von Gravitations-Beschleunigung trennen. Selbst nach gesagt die richtige Antwort, viele revertieren zu dem Fehlkonzept innerhalb Wochen" / Schüler-Niveau: "9. Klasse, gemischt-Fähigkeit Naturwissenschaft-Klasse" / Fachbereich: "Physik — Kräfte und Motion"*

---

## Tutoring-Dialog-Design: Gravitations-Beschleunigung vs. Luft-Widerstand

**Lern-Ziel:** Verstehen, warum schwerere Gegenstände NICHT schneller fallen als leichtere Gegenstände (gleiche Gravitations-Beschleunigung, unterschiedlich Luft-Widerstand)
**Antizipierte Schwierigkeiten:** Starke Aristotelian-Intuition (schwerer = schneller), alltägliche Erfahrung zitiert als Beweis, Luft-Widerstand verwirrt mit Gravitation
**Interaktions-Modell:** Gemischt-Initiative-Dialog über drei Phasen — elicit das Fehlkonzept, erstellung kognitiven Konflikt, aufbauen das richtige Modell

### Dialog-Architektur

**Phase 1: Elicit (3-4 Minuten)** — Oberflächlich die bestehende Überzeugung der SuS OHNE sie zu korrigieren. Das Ziel ist die SuS zu bekommen, ihr mentales Modell klar zu artikulieren und sich einen Vorhersage zu engagieren. Das ist essentiell, weil (a) du nicht ein Fehlkonzept adressieren kannst, das du nicht oberfläches, und (b) eine klare Vorhersage machend erzeugt die Bedingungen für produktiven kognitiven Konflikt, wenn die Vorhersage widersprochen wird.

**Phase 2: Konflikt (4-5 Minuten)** — Präsentiere ein Szenario, das widerspricht der SuS-Vorhersage. TU NICHT erklären, warum die Vorhersage falsch war — frag die SuS zu erklären die Widerspruch. Diese Phase ist der Herz des Dialogs. Die SuS muss echten kognitiven Konflikt erfahren: "Meine Vorhersage war falsch, aber ich war SICHER, dass es richtig war. Warum?" Der Tutor's Rolle ist die Konflikt aufzurechterhalten (nicht zu schnell zu lösen) und die SuS zu führen, die Schlüssel-Unterscheidung (Gravitation vs. Luft-Widerstand) zu identifizieren.

**Phase 3: Konstrukt (4-5 Minuten)** — Hilf die SuS, das richtige mentale Modell aufzubauen. Nutze Selbsterklär-Aufforderungen zu sichern die SuS kann die Unterscheidung zwischen Gravitations-Beschleunigung (gleich für alle Gegenstände) und Luft-Widerstand (hängt ab von Form und Oberflächen-Bereich, nicht Masse) artikulieren. Beende mit einer Transfer-Frage zu testen, ob das Modell wirklich verstanden oder einfach memorisiert ist.

### Dialog-Zug-Bibliothek

| Zug-Typ | Wann nutzen | Beispiel |
|---|---|---|
| **Vorhersage-Anfrage** | Phase 1 — zu oberflächlich das Fehlkonzept | "Falls ich eine Bowlingkugel und einen Tennisball von die gleiche Höhe zu die gleiche Zeit fallen lasse, welche würde den Boden zuerst treffen? Was ist deine Vorhersage?" |
| **Engagements-Sonde** | Nach Vorhersage — zu stärken Engagement | "Wie selbstbewusst bist du? Und kannst du erklären, WARUM du denkst das?" |
| **Pump** | Wenn SuS eine kurze Antwort gibt | "Erzähl mir mehr darüber." / "Was macht dich so denken?" |
| **Konflikt-Szenario** | Phase 2 — zu erstellung kognitiven Dissonanz | "Jetzt stell dir vor, beide Gegenstände sind in einem Zimmer mit keine Luft — ein Vakuum. Gleiche Vorhersage?" |
| **Stille** | Nach jeder Frage — gib Denk-Zeit | [Warte 5-8 Sekunden bevor antworte. Falls Text-basiert, zeige "..." oder "Nimm deine Zeit."] |
| **Redirect** | Wenn SuS geht off-topic | "Das ist interessant — lass uns später zurückkommen. Jetzt möchte ich mich auf konzentrieren: warum änderte das Vakuum das Ergebnis?" |
| **Socratic-Frage** | Phase 2/3 — zu Denken führen | "So wenn Gravitation beide das gleiche zieht, was ist die EINZIGE Sache, die könnte eine schneller fallen machen als die andere?" |
| **Selbsterklär-Aufforderung** | Phase 3 — um Verständnis aufzubauen | "In deinen eigenen Worten, erkläre, warum eine Feder langsam in Luft, aber schnell in einem Vakuum fällt." |
| **Minimale Korrektur** | Wenn SuS macht einen Faktual-Fehler | "Tatsächlich beschleunigt Gravitation alle Gegenstände zu die gleiche Rate — 9,8 m/s². Aber deine Frage über Luft ist wirklich wichtig. Behalte mit dieser Gedanke weiter." |
| **Transfer-Frage** | Ende von Phase 3 — um Verständnis zu testen | "Ein Fallschirmspringer und ein Skydiver ohne Fallschirm fallen vom gleichen Flugzeug zur gleichen Zeit. Nutzend was wir diskutiert haben, erkläre, was geschieht und warum." |

### Entscheidungs-Regeln

**FALLS** die SuS Vorhersagen "schwerer fällt schneller" mit hohe Selbstbewusstsein:
→ **DANN** vorgehen zu Phase 2 mit das Vakuum Gedanken-Experiment. Das Fehlkonzept ist vorhanden und engagiert — ideal für kognitiven Konflikt.

**FALLS** die SuS Vorhersage "schwerer fällt schneller" aber scheint unsicher:
→ **DANN** nutze ein Engagements-Sonde: "Interessant — kannst du deinen Denken erklären?" Das stärkt ihr Engagement zu der Vorhersage, das macht die Konflikt produktiver.

**FALLS** die SuS gibt die richtige Antwort sofort:
→ **DANN** sonde für Verständnis: "Das ist richtig. Aber die meisten Menschen denken schwerere Gegenstände fallen schneller. Kannst du erklären, WARUM sie falsch sind — was macht Menschen denken das?" Das testet, ob die SuS wirklich versteht oder einfach das Fakt memorisiert hat.

**FALLS** die SuS reagiert zum Vakuum-Szenario korrekt:
→ **DANN** nutze ein Selbsterklär-Aufforderung: "So du sagst sie würden zu die gleiche Geschwindigkeit in einem Vakuum fallen. Was sagt das dir über GRAVITATION speziell?" Gehe zu Phase 3.

**FALLS** die SuS reagiert zum Vakuum-Szenario, aber ist verwirrt:
→ **DANN** nutze ein Socratic-Frage: "Du sagtest sie würden zu die gleiche Geschwindigkeit in einem Vakuum fallen, aber verschiedene Geschwindigkeiten in Luft. Was ist VERSCHIEDEN über diese zwei Situationen?" Führe sie zu Luft-Widerstand identifizierend.

**FALLS** die SuS ist still für mehr als 10 Sekunden:
→ **DANN** biete eine leichtere Version der Frage an: "Lass mich es anders ausdrücken. In einem Vakuum, gibt es keine Luft. In einem Zimmer, gibt es Luft. Welch Effekt tut Luft auf einen fallenden Gegenstand haben?"

### Beispiel-Dialog

**Tutor:** Ich möchte, dass du etwas vorstellt. Du stehst auf dem Dach der Schule, eine Bowlingkugel in einer Hand und einen Tennisball in der anderen. Du lässt sie beide genau zur gleichen Zeit von der gleich Höhe fallen. Welche trifft den Boden zuerst?

**Schüler:** Die Bowlingkugel, eindeutig. Sie ist schwerer.

**Tutor:** Du klingt sehr sicher. Kannst du erklären, warum du denkst der schwerere falls schneller?
*[Engagements-Sonde — die SuS zu bekommen, ihr Denken zu artikulieren und sich zur Vorhersage zu engagieren]*

**Schüler:** Weil es schwerer ist? Wie, Gravitation zieht es mehr, weil es mehr Masse hat. Also beschleunigt es schneller.

**Tutor:** OK, so dein Denken ist: mehr Masse → mehr gravitational Zug → beschleunigt schneller → trifft zuerst. Lass mich das aufschreiben: "Schwerere Gegenstände erfahren mehr gravitational Zug, also beschleunigen sie schneller und treffen den Boden zuerst." Ist das ein gerechte Zusammenfassung deiner Position?
*[Explizites Engagement — die SuS-Vorhersage ist jetzt aufgezeichnet, Aufstellen zu dem Konflikt]*

**Schüler:** Ja, das ist, was ich denke.

**Tutor:** Gut. Jetzt möchte ich, dass du stellst eine verschiedene Version des gleich Experiments vor. Gleiche Bowlingkugel, gleiche Tennisball, gleiche Höhe. Aber dieses Mal, du bist in einem Zimmer, wo alle die Luft gepumpt wurde aus — ein perfektes Vakuum. Nichts, aber du und die zwei Bälle. Du lässt sie beide fallen. Was geschieht?
*[Konflikt-Szenario — Einleitung die Vakuum-Bedingung]*

**Schüler:** ...Ich denke, sie würden immer noch fallen zu verschiedene Geschwindigkeiten? Die Bowlingkugel ist immer noch schwerer.

**Tutor:** ...
*[Stille — 6 Sekunden. Die SuS zu lassen, mit ihrer Vorhersage sitzen.]*

**Tutor:** Hier ist etwas, das könnte dich überraschen. Wir haben tatsächlich dieses Experiment durchgeführt — viele Male. In einem Vakuum, die Bowlingkugel und der Tennisball treffen den Boden zur GENAU gleiche Zeit. Jedes einfache Mal. Was machst du von das?
*[Präsentierend die Disconfirming-Beweise ohne zu erklären]*

**Schüler:** Warte, wirklich? Das macht keinen Sinn. Die Bowlingkugel ist viel schwerer.

**Tutor:** Ich weiß es fühlt sich wie es nicht sollte geschehen. Aber es tut. So hier ist meine Frage: du vorhergesagt sie würden fallen zu verschiedene Geschwindigkeiten, aber in einem Vakuum tun sie nicht. Was ging falsch mit der Vorhersage?
*[Socratic-Frage — frag die SuS, ihr eigenes Fehler zu diagnostizieren]*

**Schüler:** Um... vielleicht Gravitation zieht sie die gleiche selbst wenn einer schwerer ist?

**Tutor:** Das ist wirklich interessant. Behalte mit der Gedanke weiter. Falls Gravitation zieht sie die gleiche in einem Vakuum, warum fallen sie zu verschiedene Geschwindigkeiten in NORMALER Luft?
*[Pump + Redirect — die SuS ist nahe zu die Schlüssel-Einsicht, führend sie zu Luft-Widerstand]*

**Schüler:** Oh... ist es, weil, von die Luft? Wie, die Luft verlangsamt das leichtere runt mehr?

**Tutor:** Sag mehr über das. Warum würde Luft das eins mehr verlangsamen als das andere?
*[Pump — aufrechterhalte die SuS-kognitive Engagement, nicht springend zu erklären]*

**Schüler:** Weil der Tennisball ist leichter, so die Luft-Widerstand beeinflußt es mehr? Wie, es kann nicht pushen durch die Luft so leicht?

**Tutor:** Du arbeitest an etwas wirklich wichtig. Lass mich überprüfen dein Verständnis. In deinen eigenen Worten, erkläre: warum eine Feder fällt langsam in Luft, aber schnell in einem Vakuum?
*[Selbsterklär-Aufforderung — testen ob die SuS ein kohärentes Modell gebaut hat]*

**Schüler:** Weil in einem Vakuum gibt es keine Luft-Widerstand, also einfach Gravitation Angelegenheiten, und Gravitation beschleunigt alles die gleiche. Aber in Luft, der Feder hat viel mehr Luft-Widerstand vergleicht zu sein Gewicht, also es fällt langsamer. Der Hammer bemerkt die Luft neben.

**Tutor:** Das ist eine ausgezeichnet Erklärung. Du hast identifiziert die Schlüssel-Unterscheidung: Gravitations-Beschleunigung ist die gleiche für alle Gegenstände, aber Luft-Widerstand ist unterschiedlich je nach Form, Oberflächen-Bereich und Masse. Jetzt lass mich das Verständnis mit ein neu Situation testen. Ein Fallschirmspringer und ein Skydiver ohne einen Fallschirm fallen vom gleich Flugzeug zu die gleich Zeit. Nutzend was wir gerade diskutiert haben, erkläre was geschieht und warum.
*[Transfer-Frage — testen ob das Modell verallgemeinert]*

### Design-Rationale

Der Dialog folgt ein absichtlich drei-Phase-Struktur basierend auf Konzeptual-Änderung-Forschung:

1. **Elicit bevor Korrigieren.** Der Tutor bringt das erste Phase, die SuS-Aristotelian-Überzeugung aufdeckend und committing. Das ist kontraintuitive — viele Lehrer würde sofort sagen "Tatsächlich, sie fallen zu die gleiche Geschwindigkeit." Aber Chi et al. (2001) zeigte, dass direkter Korrektur von Fehlkonzepten ist großenteils unwirksam. Die SuS braucht die Konflikt zwischen ihrer Vorhersage und Realität zu fühlen.

2. **Kognitiver Konflikt, nicht Korrektur.** Phase 2 präsentiert ein Fakt (gleiche Geschwindigkeit in Vakuum), das die SuS-Vorhersage widerspricht, dann fragt die SCHÜLER zu erklären die Diskrepanz. Der Tutor nicht erklärt — die SuS muss die kognitiv-Arbeit des Reconciling ihre Vorhersage mit der Beweise tun. Das ist das hochst-Engagement-Dialog-Muster im ICAP-Rahmen (Chi & Wylie, 2014).

3. **Schüler-Generiert-Erklärung.** Durch Phase 3, die SuS hat zu die richtige Erklärung angekommen ("Luft-Widerstand, nicht Gravitation, verursacht die Unterschied") durch ihr eigenes Denken. Der Tutor's Selbsterklär-Aufforderung überprüft dieses Verständnis, und die Transfer-Frage testet, ob es verallgemeinert. Die SuS spricht mehr als der Tutor durch.

4. **Mindetim-Assistenz.** Der Tutor nutzt die leichteste möglich Zug an jedem Punkt: Stille, Pumps und Fragen bevor Hinweise oder Erklärungen. Die einzigen direkt-Behauptung der Tutor macht ist die Faktische Aussage, dass Gegenstände fallen zu die gleich Geschwindigkeit in einem Vakuum — alles andere wird aus der SuS durch Fragen gezeichnet.

---

## Bekannte Limitierungen

1. **Diese Fähigkeit entwirft Dialog-LOGIK, nicht Dialog-IMPLEMENTIERUNG.** Umwandlung die Entscheidungs-Regeln und Zug-Bibliothek in ein funktionierendes KI-System erfordert Ingenieurwesen (Zustand-Verfolgung, Natürlich-Sprache-Verständnis, Antwort-Generierung), die geht weit jenseits dieser Fähigkeit's Ausgabe. Das Design ist ein Blaupause, nicht ein Deploybares-System.

2. **Der Dialog nimmt ein Fehlkonzept zur Zeit an.** Echte SuS halten oft mehrfach, interagierend Fehlkonzepte gleichzeitig. Ein SuS, die verwirrt Masse mit Gewicht UND versteht nicht Luft-Widerstand, präsentiert eine komplexer Tutoring-Herausforderung als das einzel-Fehlkonzept-Dialog oben. Multi-Fehlkonzept-Dialog-Design ist eine Forschungs-Grenze, nicht ein gelöstes Problem.

3. **Gemischt-Initiative-Dialog ist schwierig für aktuelle KI-Systeme.** Der Dialog oben nimmt an, dass die KI kann SuS-Antworten verstehen, Fehlkonzepte erkennen und angemessene Züge in Echtzeit auswählen. Aktuelle LLMs können das in vielen Fällen annähern, aber ihnen fehlt die zuverlässig Zustand-Verfolgung und Fehlkonzept-Erkennung von Zweck-gebaut ITS-Systemen wie AutoTutor. Der Dialog kann brauchen Vereinfachung für Deployement auf aktuelle Systeme.

4. **Die Beweise-Basis ist primär von STEM-Domänen.** VanLehn (2011), Graesser et al. (2005), und Koedinger & Aleven (2007) führten ihre Forschung primär in Mathematik und Wissenschaft. Die Dialog-Prinzipien übertragen zu anderen Domänen (das "Elicit bevor Erkläre"-Muster funktioniert in Geisteswissenschaften auch), aber die spezifischen Muster von Fehlkonzept und Konflikt können unterscheiden. Tutoring-Dialog in Essay-Schreiben oder historisch-Analyse schaut unterschiedlich als Tutoring-Dialog in Physik, selbst ob die zugrundeliegend Prinzipien die gleich sind.

5. **Stille ist schwierig in Text-basiert-KI-Interaktionen.** Der Dialog schreibt absichtlich Stille als Tutoring-Zug vor, aber in einer Text-basiert-Interface, Stille kann undistinguishable von Systemesfehler sein. Implementierung "produktiv Stille" in ein Chatbot erfordert explizit Design — ein sichtbar Timer, ein "Nimm deine Zeit"-Nachricht, oder ein absichtlich Verzögerung bevor der nächst Aufforderung.
