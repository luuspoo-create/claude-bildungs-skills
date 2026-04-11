---
# AGENT SKILLS STANDARD FIELDS (v2)
name: formative-beurteilungsschleife
description: "Entwerfe eine adaptive Beurteilungsschleife, wo jede Schüler-Antwort den nächsten Unterrichts-Zug auslöst. Verwende dies beim Aufbauen von Technologie-unterstütztem formativem Beurteilungs-Zyklus."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-ki-lernen/formative-beurteilungsschleife"
skill_name: "Formative Beurteilungsschleife - Designer für KI-Systeme"
domain: "schule-ki-lernen"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Black & Wiliam (1998) — Assessment and classroom learning (seminal meta-analysis)"
  - "Black & Wiliam (2009) — Developing the theory of formative assessment"
  - "Wiliam (2011) — Embedded formative assessment"
  - "VanLehn (2006) — The behavior of tutoring systems (inner loop vs. outer loop)"
  - "Shute & Zapata-Rivera (2012) — Adaptive educational systems"
input_schema:
  required:
    - field: "lern_ziel"
      type: "string"
      description: "Das spezifische Lern-Ziel, das die formative Beurteilungsschleife überwachen sollte — was SuS lernen sollen"
    - field: "aktuelle_beurteilungs_ansatz"
      type: "string"
      description: "Wie Verständnis aktuell überprüft wird — wann LP Verständnis überprüfen, was sie überprüfen und was sie damit tun"
  optional:
    - field: "schueler_niveau"
      type: "string"
      description: "Jahrgangsstufe und Leistungsniveau"
    - field: "fachbereich"
      type: "string"
      description: "Das Schulfach"
    - field: "ki_system_moeglichkeiten"
      type: "string"
      description: "Was das KI-System kann — Echtzeit-Monitoring, adaptive Fragen, Dashboard-Reporting oder anderes"
    - field: "klassen_groee"
      type: "string"
      description: "Wie viele SuS das System gleichzeitig unterstützen muss"
    - field: "beurteilungs_haeufigkeit"
      type: "string"
      description: "Wie oft Beurteilungs-Daten gesammelt werden sollten — kontinuierlich, pro-Aufgabe, täglich, wöchentlich"
output_schema:
  type: "object"
  fields:
    - field: "beurteilungsschleife_design"
      type: "object"
      description: "Das vollständige formative Beurteilungs-Design — was beurteilt wird, wie, wann und was mit den Ergebnissen geschieht"
    - field: "elicitation_strategien"
      type: "array"
      description: "Wie Schüler-Verständnis oberflächlich wird — die spezifischen Fragen, Aufgaben und Sonden, die Denken offenbaren"
    - field: "interpretations_rahmen"
      type: "object"
      description: "Wie Schüler-Antworten interpretiert werden — welche Muster Verständnis, teilweise Verständnis und Fehlkonzepte zeigen"
    - field: "reaktions_aktivitaeten"
      type: "object"
      description: "Was basierend auf den Beurteilungs-Daten zu tun ist — die spezifischen Unterrichts-Aktivitäten, die von verschiedenen Beurteilungs-Ergebnissen ausgelöst werden"
chains_well_with:
  - "adaptive-hinweisfolgen"
  - "ki-feedback-design"
  - "intelligenter-tutoring-dialog"
teacher_time: "5 minutes"
tags: ["formative-Beurteilung", "Black-Wiliam", "Beurteilungs-Schleife", "adaptiv", "Feedback", "VanLehn", "innere-Schleife", "äußere-Schleife", "Lehrplan21", "NT-Kompetenzen", "MA-Kompetenzen"]
---

# Formative Beurteilungsschleife - Designer für KI-Systeme

## Was diese Fähigkeit tut

Entwirft eine vollständige formative Beurteilungsschleife für eine KI-fähige Lern-Umgebung — der kontinuierliche Zyklus von Schüler-Verständnis-Beweise-Sammlung, Interpretieren dieser Beweise und Verwendung, um Unterricht in Echtzeit anzupassen. Black & Wiliam's (1998) seminal Meta-Analyse demonstrierte, dass formative Beurteilung einer der mächtigsten Interventionen in Bildung ist (Effektstärken von 0,40-0,70), aber NUR wenn die Beurteilungs-Daten wirklich ändert, was nächstes geschieht. Eine Beurteilung, die nicht zu einer Unterrichts-Anpassung führt, ist einfach ein Test. Diese Fähigkeit entwirft die ganze Schleife: was zu beurteilen ist (nicht nur Antworten, aber DENKEN), wie zu beurteilen ist (Fragen, Aufgaben und Sonden, die Verständnis offenbaren), wie die Ergebnisse zu interpretieren sind (echtes Verständnis von Oberflächen-Leistung unterscheiden) und was mit den Ergebnissen zu tun ist (spezifische Unterrichts-Reaktionen zu spezifischen Beurteilungs-Mustern). VanLehn (2006) unterschied zwischen "innere Schleife"-Beurteilung (bei jedem Problemlösungs-Schritt, in Echtzeit) und "äußere Schleife"-Beurteilung (bei der Aufgaben-Ebene, zwischen Problemen). KI-Systeme sind einzigartig fähig zu innere-Schleife-Beurteilung — SuS-Denken Schritt-Schritt überwachend und in Echtzeit anpassend — welche ist wo die größten Lerngewinne geschehen.

## Evidenzgrundlage

Black & Wiliam (1998) führten die einflussreichste Überprüfung der formative-Beurteilungs-Forschung, analysierend über 250 Studien und findend Effektstärken im Bereich von 0,40 zu 0,70 — größer als die meisten Bildungs-Interventionen. Sie definierten formative Beurteilung als "alle Aktivitäten unternommen von LP und/oder ihren SuS, welche Information liefern zur Verwendung als Feedback um das Unterrichten und Lernen zu modifizieren, in welchen sie engagiert sind." Die kritische Einsicht: die BEURTEILUNG ist nicht das wertvolle Teil — die MODIFIZIERUNG ist. Daten-Sammlung ohne Unterrichts-Anpassung ist summative Beurteilung mit einem verschiedenen Label. Black & Wiliam (2009) entwickelten einen raffinierten theoretischen Rahmen, identifizierend fünf Schlüssel-Strategien der formative Beurteilung: (1) Klärung und Teilung von Lern-Zielen und Erfolgs-Kriterien, (2) Ingenieurwesen von effektiven Klassenzimmer-Diskussionen und Aufgaben, die Lern-Beweise elicen, (3) Feedback liefern, das Schüler voranbringt, (4) Aktivierung von SuS als Unterrichts-Resourcen füreinander und (5) Aktivierung von SuS als Besitzer ihres eigenen Lernens. Alle fünf Strategien umfassen einen Zyklus: elicit → interpret → act. Wiliam (2011) übersetzte diesen Rahmen zu praktischen Klassenzimmer-Strategien, betonend, dass formative Beurteilung EINGEBETTET in Unterricht sein muss — nicht ein Add-On-Aktivität, aber ein kontinuierlicher Prozess von Überprüfung, Anpassung und Reaktion. Er argumentierte, dass die größte Barriere zu effektiver formative Beurteilung nicht Daten-Sammlung, sondern DATEN-VERWENDUNG ist: LP sammeln oft Daten, aber ändern ihren Unterricht nicht in Reaktion darauf. VanLehn (2006) analysierte das Verhalten von Tutoring-Systemen und identifizierte zwei Ebenen der Beurteilungs-Schleife. Die "äußere Schleife" funktioniert zwischen Problemen: nachdem eine SuS ein Problem abschließt, entscheidet das System, was nächstes zu tun ist (ein ähnliches Problem, ein schweres Problem, ein Review oder ein neues Thema). Die "innere Schleife" funktioniert innerhalb von Problemen: bei jedem Schritt, beurteilt das System die Schüler-Antwort und gibt Feedback, Hinweise oder Scaffolding. VanLehn fand, dass die innere Schleife der wichtigere Determinant von ITS-Effektivität war — Systeme, die bei jeder Schritt-Ebene beurteilten und reagierten, übertraf dramatisch Systeme, die nur bei der Problemebene beurteilten. Shute & Zapata-Rivera (2012) überprüften adaptive Bildungs-Systeme und fanden, dass die effektivsten Systeme kontinuierliche Beurteilung mit sofortiger Unterrichts-Anpassung kombinierten — erstellend eine "enge" formative Beurteilungs-Schleife, wo die Zeit zwischen Beurteilung und Reaktion minimiert war.

## Input-Schema

Die LP muss bereitstellen:
- **Lern-Ziel:** Was SuS lernen sollen. *z.B. "Verstehen des Unterschieds zwischen Fläche und Umfang — wann jeden verwendet, wie jeden berechnet und warum sie unabhängig sind (eine Form kann große Fläche aber kleinen Umfang haben und umgekehrt)" / "Schreiben effektiver Topic Sentences, die einen klaren Anspruch machen, nicht einfach ein Thema ankündigen" / "Verstehen von Angebot und Nachfrage — wie Preisänderungen die angebotene und nachgefragte Menge beeinflussen und wie Gleichgewichtspreis bestimmt wird"*
- **Aktueller Beurteilungs-Ansatz:** Wie Verständnis aktuell überprüft wird. *z.B. "Ich überprüfe am Ende der Lektion mit einem Ausstiegs-Ticket — 3 Fragen. Falls die meisten SuS sie richtig bekommen, ich bewege weiter. Falls nicht, ich unterrichte nächste Lektion nochmal" / "Ich markiere Essays am Ende der Woche und gebe schriftliches Feedback" / "Das KI-System gibt ein Quiz nach jedem 10 Problemen, ändert aber nicht, was nächstes basierend auf den Ergebnissen geschieht"*

Optional (durch Kontextmotor eingefügt, falls verfügbar):
- **Schüler-Niveau:** Jahrgangsstufe und Leistungsniveau
- **Fachbereich:** Das Schulfach
- **KI-System-Möglichkeiten:** Was die Technologie kann
- **Klassen-Größe:** Anzahl der SuS
- **Beurteilungs-Häufigkeit:** Wie oft Daten gesammelt werden

## Prompt

```
Du bist ein Experte im formative-Beurteilungs-Design für KI-fähige Lern-Umgebungen, mit tiefem Wissen von Black & Wiliam (1998, 2009) formative-Beurteilungs-Rahmen, Wiliam (2011) praktische Implementierungs-Strategien, VanLehn (2006) innere-Schleife/äußere-Schleife-Unterscheidung und Shute & Zapata-Rivera (2012) adaptive Beurteilungs-Systeme. Du verstehst, dass formative Beurteilung nicht ein Beurteilungs-Typ ist — es ist ein PROZESS von kontinuierlichem Elicit von Verständnis-Beweise und Verwendung dieser Beweise zu passen Unterricht an. Du auch verstehst VanLehn's kritische Entdeckung: Beurteilung und Feedback bei der SCHRITT-Ebene (innere Schleife) ist dramatisch effektiver als Beurteilung bei der AUFGABEN-Ebene (äußere Schleife).

KRITISCHE PRINZIPIEN:
- **Beurteilung muss Unterricht ändern.** Falls die Beurteilungs-Daten nicht zu einer anderen Unterrichts-Reaktion führt, es ist nicht formativ — es ist einfach ein Test. Für jeden Beurteilungs-Punkt, spezifiziere WAS ÄNDERT basierend auf dem Ergebnis. "Falls die SuS es richtig bekommt, bewege weiter" ist unzureichend. "Falls die SuS es richtig bekommt, erhöhe Schwierigkeit um X; falls falsch auf Weise A, reagiere mit Aktivität A; falls falsch auf Weise B, reagiere mit Aktivität B" — das ist formativ.
- **Beurteile DENKEN, nicht nur Antworten.** Eine richtige Antwort könnte ein Fehlkonzept verstecken (richtige Antwort, falsches Denken). Eine falsche Antwort könnte wertvoll teilweise Verständnis enthalten. Die Beurteilung muss das DENKEN hinter der Antwort sondieren. In einem KI-System: verlange SuS, Arbeit zu zeigen, Denken zu erklären oder von Optionen auszuwählen, die spezifische Denk-Muster offenbaren.
- **Innere-Schleife-Beurteilung ist mächtiger als Äußere-Schleife.** VanLehn (2006): Beurteilung bei jedem Problemlösungs-Schritt (und sofortige Reaktion) erzeugt besser Lernen als Beurteilung nur am Ende eines Problems. Entwerfe die Schleife um bei der Schritt-Ebene zu funktionieren, wo möglich.
- **Nutze mehrere Elicitation-Methoden.** Nicht nur richtig/falsch verlässlich. Nutze: Diagnose-Fragen (MCQs, wo jede falsche Antwort zu einem spezifischen Fehlkonzept kartographiert), Erklärungs-Aufforderungen ("Warum hast du das gewählt?"), Selbstvertrauens-Bewertungen ("Wie sicher bist du?") und Prozess-Beobachtungen (wie lange nahmen sie? nutzen sie einen Hinweis?).
- **Die Beurteilungs-Schleife muss ENG sein.** Je kürzer die Verzögerung zwischen Beurteilung und Unterrichts-Reaktion, desto effektiver ist der formative Prozess. Ein KI-System kann in Sekunden reagieren. Nutze diesen Vorteil — sammle nicht Daten jetzt und reagiere nächste Woche.

Deine Aufgabe ist es, eine formative Beurteilungsschleife zu entwerfen für:

**Lern-Ziel:** {{lern_ziel}}
**Aktueller Beurteilungs-Ansatz:** {{aktuelle_beurteilungs_ansatz}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Nutze, was verfügbar ist; ignoriere Felder, die "nicht bereitgestellt" markiert sind.

**Schüler-Niveau:** {{schueler_niveau}} — falls nicht bereitgestellt, entwerfe für einen allgemeinen Sekundarstufe-1-Kontext.
**Fachbereich:** {{fachbereich}} — falls nicht bereitgestellt, leite aus dem Ziel ab.
**KI-System-Möglichkeiten:** {{ki_system_moeglichkeiten}} — falls nicht bereitgestellt, entwerfe für ein KI-System, das Probleme präsentieren, Antworten überwachen, Feedback liefern und Problemauswahl in Echtzeit anpassen kann.
**Klassen-Größe:** {{klassen_groee}} — falls nicht bereitgestellt, nimm 30 SuS einzeln auf KI-fähigen Geräten an.
**Beurteilungs-Häufigkeit:** {{beurteilungs_haeufigkeit}} — falls nicht bereitgestellt, entwerfe für kontinuierliche innere-Schleife-Beurteilung mit Außer-Schleife-Checks alle 5-10 Probleme.

Gib deine Ausgabe in exakt diesem Format zurück:

## Formative Beurteilungsschleife: [Lern-Ziel]

**Ziel:** [Was SuS lernen]
**Aktueller Ansatz:** [Wie Beurteilung momentan funktioniert]
**Übergestaltet-Ansatz:** [Wie die formative Schleife funktioniert — ein-Satz-Zusammenfassung]

### Schleife-Architektur

[Die vollständige Beurteilungs-Schleife-Struktur — innere Schleife (Schritt-Level) und äußere Schleife (Aufgaben-Level)]

**Innere Schleife (innerhalb jeden Problems):**
[Was bei jedem Schritt beurteilt wird, wie und was die Reaktion ist]

**Äußere Schleife (zwischen Problemen):**
[Was nach jedem Problem/Satz von Problemen beurteilt wird und wie es bestimmt, was nächstes kommt]

### Elicitation-Strategien

[Die spezifischen Methoden zu Schüler-Verständnis-Oberflächlich — nicht einfach "quiz sie", sondern die SPEZIFISCHE Frage-Designs, Prozess-Beobachtungen und Erklärungs-Aufforderungen]

**Strategie [N]: [Name]**
- **Was sie beurteilt:** [Was Verständnis-Aspekt]
- **Wie es funktioniert:** [Der spezifische Mechanismus]
- **Beispiel:** [Ein konkretes Beispiel für dieses Lern-Ziel]
- **Was zu beobachten:** [Was verschiedene Antworten über Verständnis offenbaren]

### Interpretations-Rahmen

[Wie Schüler-Antworten interpretiert werden — die Entscheidungs-Regeln, die Beurteilungs-Beweise zu Unterrichts-Aktivitäten verbinden]

| Beweise-Muster | Was es wahrscheinlich bedeutet | Zuversicht | Unterrichts-Reaktion |
|---|---|---|---|
| [Muster] | [Interpretation] | [Hoch/Moderat/Niedrig] | [Was das System nächstes tut] |

### Reaktions-Aktivitäten

[Die spezifischen Unterrichts-Anpassungen, die von verschiedenen Beurteilungs-Ergebnissen ausgelöst werden — nicht einfach "unterrichte erneut", aber genau wie erneut zu unterrichten]

### LP-Dashboard

[Was die LP sehen muss — die Schlüssel-Metriken und Alerts, die LP-Level-Entscheidungen informieren, separat von den KI's Echtzeit-Reaktionen]

### Schleife-Validierung

[Wie überprüfen, dass die Beurteilungs-Schleife tatsächlich Lernen verbessert — die Meta-Beurteilung der Beurteilung]

**Selbstüberprüfung vor Rückgabe:** Verifiziere, dass (a) jeder Beurteilungs-Punkt eine Unterrichts-Reaktion auslöst, (b) Denken beurteilt wird nicht nur Antworten, (c) innere-Schleife-Beurteilung enthalten ist, (d) mehrere Elicitation-Methoden verwendet werden und (e) die Schleife eng ist (minimale Verzögerung zwischen Beurteilung und Reaktion).
```

## Beispiel-Ausgabe (gekürzt)

**Szenario:** *Lern-Ziel: "Verstehen des Unterschieds zwischen Fläche und Umfang — wann jeden verwendet, wie jeden berechnet und warum sie unabhängig sind" / Aktueller Ansatz: "Ich unterrichte Fläche und Umfang in separaten Lektionen, dann gebe ein Arbeitsblatt mit 20 Berechnungs-Fragen (10 Fläche, 10 Umfang). Ich markiere sie und unterrichte erneut falls mehr als ein Drittel der Klasse weniger als 7/10 in beiden Abschnitten bekam. Das Haupt-Problem ist, dass SuS beide richtig auf dem Arbeitsblatt berechnen können, aber VERWIRREN sie in Tests — sie nutzen die Umfangs-Formel, wenn nach Fläche gefragt wird oder umgekehrt. Berechnung ist nicht die Problematik; Wissen WELCHE Berechnung zu nutzen ist, ist." / Schüler-Niveau: "6. Klasse" / Fachbereich: "Mathematik — Messung" / KI-System-Möglichkeiten: "KI-Tutoring-System, das Probleme präsentieren kann, freien Text und Multiple-Choice-Antworten akzeptieren kann, SuS-Antworten zeitlich abstellen kann, Feedback geben und Problemauswahl anpassen kann. Kann auch Bilder/Diagramme von Formen zeigen." / Beurteilungs-Häufigkeit: "Kontinuierlich"*

---

## Formative Beurteilungsschleife: Fläche vs. Umfang

**Ziel:** Verstehen wann Fläche vs. Umfang nutzen, wie jeden berechnen und warum sie unabhängig sind
**Aktueller Ansatz:** Separater Unterricht → Berechnungs-Arbeitsblatt gemischt → Markieren und erneut unterrichten
**Übergestaltet-Ansatz:** Kontinuierliche Beurteilungs-Schleife, die WELCHE Berechnung nutzen zu sondieren (nicht einfach ob die Berechnung richtig ist), nutzend Diagnose-Fragen, die konzeptionelles Verständnis von prozeduraler Flüssigkeit separieren

### Schleife-Architektur

**Innere Schleife (innerhalb jeden Problems):**

Schritt 1 — **Identifizierungs-Check:** Bevor die SuS irgendwas berechnet, fragt das System: "Ist das eine Fläche-Frage oder eine Umfangs-Frage? Wie weißt du?" Das ist der KRITISCHE Beurteilungs-Punkt. Der häufigste Fehler (falsche Formel nutzend) geschieht auf diesem SCHRITT, nicht während Berechnung. Das System beurteilt das Schüler's konzeptionelle Identifizierung bevor ihnen erlaubt, vorzugehen.

Schritt 2 — **Methoden-Check:** Nach Identifizierung, fragt das System: "Was wirst du berechnen? Beschreib deine Methode in einem Satz." Das offenbart ob die SuS die Prozedur für das identifizierte Konzept kennt. Eine SuS, die richtig "Fläche" identifiziert, aber beschreibt "Ich werde alle Seiten addieren", hat einen prozeduralen Fehler, trotz richtige Identifizierung.

Schritt 3 — **Berechnungs-Check:** Die SuS führt die Berechnung durch. Das System überprüft die numerische Antwort. Falls richtig, vorgehen. Falls falsch, bestimme ob der Fehler Arithmetik (Berechnung Fehler mit richtige Methode) oder konzeptionell (falsche Methode angewendet).

Schritt 4 — **Einheiten-Check:** Das System überprüft ob die SuS korrekte Einheiten (cm² für Fläche, cm für Umfang) benutzt hat. Falsche Einheiten können konzeptionelle Verwirrtheit auch wenn die numerische Antwort richtig ist, offenbaren.

**Äußere Schleife (alle 5 Probleme):**

Nach alle 5 Probleme, überprüft das System das Muster von innere-Schleife-Antworten:
- **Falls Identifizierungs-Genauigkeit ≥ 80%:** Erhöhe Schwierigkeit (komplexere Formen, Wort-Probleme, Vergleichs-Fragen)
- **Falls Identifizierungs-Genauigkeit < 60%:** Wechsel zu Konzept-Aufbau-Aufgaben (vergleiche Formen mit gleich Umfang aber verschiedene Flächen)
- **Falls Identifizierung richtig aber Berechnung oft falsch:** Gib Berechnungs-Praxis mit das korrekt identifizierte Konzept
- **Falls gemischt Muster:** Präsentiere eine Diagnose-Frage entworfen um die spezifische Verwirrtheit zu finden

### Elicitation-Strategien

**Strategie 1: Identifizierungs-Erste-Fragen**
- **Was sie beurteilt:** Ob die SuS welche MESSUNG gefragt wird, weiß
- **Wie es funktioniert:** Präsentiere eine Wort-Frage und frag "Ist das eine Fläche-Frage oder eine Umfangs-Frage?" VOR der Aufforderung, die Berechnung durchzuführen. Das separiert konzeptionelle Identifizierung von prozeduraler Durchführung.
- **Beispiel:** "Ein Landwirt will einen Zaun rund ein rechteckiges Feld bauen, das 20m lang und 15m breit ist. Ist das eine Fläche-Frage oder eine Umfangs-Frage?" Dann, separat: "Berechne die Antwort."
- **Was zu beobachten:** SuS, die richtig "Umfang" identifizieren (es ist über Zaun = rund die Außenseite) vs. SuS, die "Fläche" sagen (sie können durch das Wort "Feld" oder die zwei Dimensionen getriggert sein)

**Strategie 2: Diagnose-Multiple-Choice**
- **Was sie beurteilt:** Das spezifische Fehlkonzept hinter einer falschen Antwort
- **Wie es funktioniert:** Präsentiere ein Problem, wo jede falsche Antwort zu einem spezifischen Fehler kartographiert. Die SuS-Auswahl offenbart ihr Denken, nicht einfach ihre Genauigkeit.
- **Beispiel:** "Ein Rechteck ist 8cm lang und 5cm breit. Was ist seine Fläche?" Optionen: (a) 40 cm² [richtig], (b) 26 cm [berechnete Umfang statt], (c) 26 cm² [berechnete Umfang aber nutzte Fläche-Einheiten], (d) 13 cm [berechnete halb-Umfang]. Jede falsche Antwort diagnistiziert ein verschiedenes Problem.
- **Was zu beobachten:** (b) = berechnete das falsche Maß. (c) = berechnete das falsche Maß UND versteht nicht was die Einheiten bedeuten. (d) = teilweise Umfang-Verständnis.

**Strategie 3: Konzept-Vergleichs-Aufgaben**
- **Was sie beurteilt:** Ob die SuS versteht, dass Fläche und Umfang UNABHÄNGIG sind
- **Wie es funktioniert:** Zeige zwei Formen und frag "Welche hat die größere Fläche? Welche hat den größeren Umfang?" wo die Antworten VERSCHIEDEN sind (eine hat größere Fläche, die andere hat größerer Umfang). Das testet das tiefste konzeptionelle Verständnis.
- **Beispiel:** Form A: 10cm × 2cm Rechteck (Fläche 20, Umfang 24). Form B: 5cm × 5cm Quadrat (Fläche 25, Umfang 20). "Welche hat die größere Fläche? Welche hat den größerer Umfang?" Richtig: B hat größere Fläche, A hat größerer Umfang.
- **Was zu beobachten:** SuS, die sagen die gleiche Form für beide Fragen, wahrscheinlich glauben Fläche und Umfang sind korreliert ("größere Form = größer alles"). Das ist das wichtigste Fehlkonzept zu adressieren.

### Interpretations-Rahmen

| Beweise-Muster | Was es wahrscheinlich bedeutet | Zuversicht | Unterrichts-Reaktion |
|---|---|---|---|
| Richtige Identifizierung, richtige Berechnung, richtige Einheiten | Solides Verständnis dieses Problem-Typs | Hoch | Erhöhe Schwierigkeit — komplexere Formen, Multi-Schritt-Probleme oder Vergleichs-Aufgaben |
| Richtige Identifizierung, falsche Berechnung | Prozeduraler Lücke, nicht konzeptionelle Verwirrtheit | Hoch | Gib Berechnungs-Scaffolding — die SuS weiß WAS zu tun, aber macht Rechen-Fehler |
| Falsche Identifizierung (Fläche↔Umfang Verwirrtheit) | Kern-konzeptionelle Verwirrtheit — die SuS unterscheidet nicht zuverlässig die zwei Konzepte | Hoch | STOPPE Berechnungs-Praxis. Wechsel zu Konzept-Aufbau: Vergleiche, Definitionen, visuelle Demonstrationen, reale Kontexte |
| Richtige Identifizierung bei einfachen Problemen, falsch bei Wort-Problemen | Fragiles konzeptionelles Wissen — kann identifizieren in expliziten Kontexten, aber nicht in angewendeten Kontexten | Moderat | Mehr Wort-Probleme mit expliziter Identifizierungs-Aufforderungen ("Ist das über eine Oberfläche zu bedecken oder rund die Kante zu gehen?") |
| Richtige Antwort, aber falsche Einheiten (z.B. 40 cm statt 40 cm²) | Könnte das Konzept verstehen, aber die mathematische Repräsentation von Dimensionen nicht | Moderat | Direkt-Unterricht auf warum Fläche quadrat-Einheiten nutzt (es misst die Anzahl der Einheits-Quadrate) |
| Gleiche Antwort für "größere Fläche" und "größerer Umfang" Vergleich | Glaubt Fläche und Umfang sind korreliert | Hoch | Schlüssel-Intervention: mehrere Beispiele zeigen, wo Fläche steigt, aber Umfang sinkt (und umgekehrt) |

### Reaktions-Aktivitäten

**Aktivität 1: Konzept-Aufbau-Modus (ausgelöst von Identifizierungs-Fehler)**
Die KI wechselt von Berechnungs-Praxis zu Konzept-Aufbau-Aktivitäten:
- Zeige ein Rechteck und frag "Was bedeutet Fläche für diese Form? Was bedeutet Umfang? Zeig mir durch Hinweisen/Hervorheben." (Fläche = innere Oberfläche, Umfang = außere Kante)
- Präsentiere echte Szenarien: "Du willst eine Wand malen — Fläche oder Umfang? Du willst einen Rahmen um ein Bild stellen — Fläche oder Umfang? Du willst Teppich für ein Zimmer kaufen — Fläche oder Umfang?"
- Nutze die "gleicher Umfang, verschiedene Fläche"-Demonstration: Zeige drei Formen alle mit Umfang 24cm, aber sehr verschiedene Flächen (1×11, 4×8, 6×6). Frag: "Wie kann der Umfang gleich sein, aber die Flächen verschieden?"

**Aktivität 2: Prozeduraler Konsolidierungs-Modus (ausgelöst von richtige Identifizierung, aber Berechnungs-Fehler)**
Die KI gibt gestützte Berechnungs-Praxis mit das RICHTIG identifizierte Konzept:
- Fläche: Zeige Grid-Overlays, damit SuS Quadrate zählen können bevor sie berechnen. Verblasse das Grid.
- Umfang: Zeige Pfeile rund die Außenseite der Form, bevor SuS addieren. Verblasse die Pfeile.
- Beide: Gib sofort Feedback auf die Berechnung mit korrekten Schritte gezeigt.

**Aktivität 3: Integrations-Modus (ausgelöst von konsistent Erfolg)**
Die KI führt Multi-Schritt und Vergleichs-Probleme ein:
- "Finde BEIDE die Fläche und den Umfang dieser Form. Welche ist größer? Überrascht dich das?"
- "Design ein Rechteck mit einer Fläche von 24cm². Welchen Umfang hat es? Kannst du ein verschiedenes Rechteck mit gleich Fläche, aber verschiedenem Umfang designen?"
- Wort-Probleme, die die SuS verlangen, zu bestimmen, welche Messung aus Kontext gebraucht wird.

### LP-Dashboard

Die LP muss sehen:

**Klassen-Level Übersicht:**
- % von SuS in jedem Modus (Konzept-Aufbau / Prozedural / Integrationen)
- Das häufigste Fehler-Muster über die Klasse (falls 60% verwirren Fläche und Umfang, das braucht eine ganz-Klasse-Intervention)
- SuS, die steckengeblieben sind (keine Verbesserung nach 10+ Probleme im Konzept-Aufbau-Modus — können von Lehrer-Intervention profitieren)

**Individuelle Alerts:**
- "SuS X hat hohes Selbstvertrauen, aber 40% Identifizierungs-Genauigkeit — fest-gehaltenes Fehlkonzept, könnte von Lehrer-Gespräch profitieren"
- "SuS Y war 15 Minuten im Prozeduralen Modus — Berechnungs-Genauigkeit nicht verbessernd, überprüfe auf zugrundeliegende Zahlen-Sinn-Lücke"
- "SuS Z vollendete alle Integrations-Aufgaben — ready für Erweiterung (zusammengesetzt-Formen, Kreise, Oberfläche-Fläche)"

**Schlüssel-Metrik: Identifizierungs-Genauigkeit vs. Berechnungs-Genauigkeit.** Falls die Klasse Identifizierungs-Genauigkeit unter 70% ist, aber Berechnungs-Genauigkeit über 80%, der aktuelle Beurteilungs-Ansatz (Berechnungs-Arbeitsblätter) versteckt das echte Problem. Die Lehrer sollte konzeptionelle Arbeit über mehr Berechnungs-Praxis priorisieren.

### Schleife-Validierung

Wie überprüfen, dass die Beurteilungs-Schleife funktioniert:

1. **Pre-Post Vergleich auf Identifizierungs-Aufgaben.** Bevor die KI-Schleife beginnt, gib einen 5-Frage-Identifizierungs-Only-Quiz (keine Berechnung). Nach 2 Sitzungen mit der KI-Schleife, wiederhole den Quiz. Falls Identifizierungs-Genauigkeit nicht verbesser, die Schleife's Konzept-Aufbau-Antworten brauchen Neugestalten.

2. **Transfer-Test.** Nach die KI-Sequenz, gib eine Neuartig-Problem-Typ, die die KI nicht benutzte (z.B. schätzen ob ein Stück Verpackungs-Papier groß genug für ein Geschenk ist — Fläche-Verständnis in einen unbekannten Kontext braucht). Falls SuS transfer können, die Schleife baut Verständnis, nicht einfach Training auf bekannte Problem-Formate.

3. **Verzögerungs-Test.** Zwei Wochen nach der KI-Sequenz, gib das gleiche Identifizierungs-Quiz. Falls Scores dramatisch gesunken sind, die Schleife erzeugten KURZFRISTIG-Leistung, aber nicht LANGFRISTIG-Lernen. Betrachte, spaced Retrieval zur Schleife hinzufügend (revisitieren Fläche/Umfang-Identifizierung gelegentlich nachdem die SuS vorangebracht hat).

---

## Bekannte Limitierungen

1. **Formative Beurteilungs-Schleifen erfordern kontinuierlichen Daten-Fluss.** Das Design oben nimmt an, dass das KI-System Schüler-Antworten in Echtzeit beurteilen und sofort anpassen kann. Systeme mit Batch-Verarbeitung (sammle Daten, analysiere über Nacht, passe morgen an) können nicht die innere Schleife implementieren. Die äußere Schleife ist immer noch möglich und immer noch wertvoll, aber die Lerngewinne von innere-Schleife-Beurteilung (VanLehn, 2006) erfordern Echtzeit-Verarbeitung.

2. **Der Interpretations-Rahmen ist probabilistisch.** Ein SuS, die "Fläche" für eine Umfangs-Frage wählt, WAHRSCHEINLICH hat eine konzeptionelle Verwirrtheit — aber sie könnten die Frage falsch gelesen, die falsche Option geklickt oder das Wort "Umfang" nicht verstanden haben. Das System sollte nie eine definitive Diagnose von einer Antwort machen. Der Interpretations-Rahmen oben nutzt MUSTER von Antworten (mehrere Probleme) um Zuversicht zur Diagnose aufzubauen.

3. **Black & Wiliam (1998) Meta-Analyse schloss ein breite Bereich von formativen Beurteilungs-Praktiken ein.** Die Effektstärken (0,40-0,70) passen zu formativer Beurteilung allgemein, nicht spezifisch zu KI-implementierter formativer Beurteilung. Die Prinzipien sind sound, aber die spezifische Effektstärke einer KI-formativen Schleife in DIESEM Kontext wurde nicht empirisch gemessen. Das Design ist beweise-informiert, nicht beweise-bewiesenen.

4. **Lehrer-Dashboard-Daten können überwältigend sein.** Das Dashboard oben gibt detaillierte Information über individuelle SuS und Klassen-Level-Muster. In einer Klasse von 30, das ist handlungsfähig. In einer Jahr-Gruppe von 120 SuS, das Daten-Volumen könnte überwältigend sein. Dashboard-Design für größere Skalen erfordert aggressivere Filterung und Zusammenfassung.

5. **Die Beurteilungs-Schleife kann unbeabsichtlich den Lehrplan verengern.** Falls die KI-Schleife exklusiv auf Fläche vs. Umfang-Identifizierung und Berechnung fokussiert, SuS können Kompetenz in dieser spezifischen Fähigkeit entwickeln, aber das breitere mathematische Verständnis verpassen (Messung als Konzept, Verbindungen zu anderen Themen). Wiliam (2011) warnt, dass formative Beurteilung Lernen servieren sollte, nicht definieren.
