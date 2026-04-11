---
# AGENT SKILLS STANDARD FIELDS (v2)
name: fehleranalyse-protokoll
description: "Entwickle ein Fehleranalyseverfahren, um die Ursachen von SuS-Fehlern und Misskonzeptionen zu diagnostizieren. Nutze diesen Skill, wenn Fehlermuster in Schülerarbeiten sichtbar sind und gezielte Rückmeldungen nötig sind."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-selbstregulation/fehleranalyse-protokoll"
skill_name: "Fehleranalyse-Protokoll"
domain: "schule-selbstregulation"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Borasi (1994) — Capitalizing on errors as 'springboards for inquiry': a teaching experiment"
  - "Black & Wiliam (1998) — Assessment and classroom learning (formative assessment and error use)"
  - "Metcalfe (2017) — Learning from errors: benefits of errors in the classroom"
  - "Siegler (2002) — Microgenetic studies of self-explanation: how children develop mathematical understanding"
  - "Tulis et al. (2016) — Learning from errors: a model of individual processes"
input_schema:
  required:
    - field: "student_work_sample"
      type: "string"
      description: "Beschreibung oder Transkript der Schülerarbeit mit Fehlern"
    - field: "task_description"
      type: "string"
      description: "Was die SuS machen sollten und das Lernziel"
    - field: "subject_area"
      type: "string"
      description: "Fachgebiet und Klassenstufe"
  optional:
    - field: "correct_response"
      type: "string"
      description: "Wie eine korrekte Antwort aussehen würde (Vergleich)"
    - field: "student_profiles"
      type: "array"
      description: "Aus Context Engine: bisherige Leistung, bekannte Schwierigkeiten, Fehlerhistorie"
    - field: "rubric"
      type: "string"
      description: "Aus Context Engine: Bewertungsmatrix oder Erfolgsmerkmale"
    - field: "error_frequency"
      type: "string"
      description: "Ob ein einzelnes Aufsetzerfehler oder ein wiederkehrendes Muster"
output_schema:
  type: "object"
  fields:
    - field: "error_classification"
      type: "array"
      description: "Jeder Fehler klassifiziert als konzeptuell, prozedural oder Flüchtigkeitsfehler — mit Begründung"
    - field: "root_cause_analysis"
      type: "string"
      description: "Vermutete Fehlerursache mit diagnostischen Fragen zur Bestätigung"
    - field: "targeted_response"
      type: "array"
      description: "Gezielte Massnahmen für jeden Fehlertyp"
    - field: "student_self_analysis_guide"
      type: "string"
      description: "Gestaffelte Prompts für SuS zur Selbstanalyse ihrer Fehler"
chains_well_with:
  - "feedback-quality-analyser"
  - "gap-analysis-from-student-work"
  - "metakognitive-prompts"
  - "worked-example-fading-designer"
teacher_time: "4 minutes"
tags: ["fehleranalyse", "formative-assessment", "misskonzeptionen", "diagnose", "feedback", "Lernprozess"]
---

# Fehleranalyse-Protokoll

## Was dieser Skill leistet

Strukturiert die Analyse von SuS-Fehlern, um zwischen prozeduralen Fehlern (falsche Methode, aber konsequent angewendet), konzeptuellen Missverständnissen (fundamentales Misskonzept, das den Fehler treibt) und Flüchtigkeitsfehlern (korrektes Verständnis, fehlerhaft ausgeführt) zu unterscheiden — und generiert dann gezielte Folgemassnahmen für jeden Fehlertyp. Kritisch ist, dass der Skill auch ein Gerüst zur Selbstanalyse für SuS erstellt, damit Lernende im Laufe der Zeit ihre eigenen Fehlererkennungsfähigkeiten entwickeln. KI ist hier besonders wertvoll, weil die meisten Lehrpersonen auf alle Fehler gleich reagieren ("versuch nochmal" oder "hier ist die richtige Antwort"), während die Forschung zeigt, dass jeder Fehlertyp eine grundlegend andere Reaktion braucht — Neuvermittlung bei konzeptuellen Fehlern, Üben bei prozeduralen Fehlern, metakognitive Kontrolle bei Flüchtigkeitsfehlern.

## Evidenzgrundlage

Borasi (1994) zeigte, dass Fehler, wenn sie richtig analysiert statt einfach korrigiert werden, zu kraftvollen Lernchancen werden — "Sprungbretter für Forschung", die das SuS-Denken offenbaren und Unterrichtsansätze einleiten. Black & Wiliam (1998) erkannten Fehleranalyse als Kernkomponente der wirksamen formativen Assessment und argumentieren, dass die diagnostische Nutzung von Fehlern ist, was formatives von summativem Assessment unterscheidet. Metcalfe (2017) überprüfte die Vorteile von Fehlern beim Lernen und fand, dass Fehler gefolgt von korrekter Rückmeldung stärkeres Lernen als fehlerfreies Lernen fördern, weil der Fehler eine Vorhersageverletzung schafft, die tiefere Kodierung erzeugt — aber nur wenn der Fehler analysiert, nicht einfach korrigiert wird. Siegler (2002) nutzte mikrogenetische Methoden, um zu zeigen, dass mathematische Entwicklung abhängt davon, *warum* falsche Strategien fehlschlagen, nicht nur korrekten Strategien zu lernen. Tulis et al. (2016) entwickelten ein Modell von individuellem Fehlerverarbeiten mit drei Schritten: Fehlererkennung (den Fehler bemerken), Fehlerzuschreibung (die Ursache identifizieren) und Fehlerkorrekturstrategie (wissen, was anders zu tun ist).

## Input-Schema

Die Lehrperson muss bereitstellen:
- **Schülerarbeit-Beispiel:** Die Arbeit mit Fehlern — beschrieben oder transkribiert. *z.B. "SuS schrieb: 3/4 + 2/3 = 5/7. Sie addierte Zähler und Nenner separat." / "Im Aufsatz schrieb die SuS: 'Hitler hat WWI angefangen, weil er Polen invasiert hat.'"*
- **Aufgabenbeschreibung:** Was die SuS machen sollte. *z.B. "Brüche mit ungleichen Nennern addieren" / "Die Ursachen des WWI erklären"*
- **Fachgebiet:** Fach und Klassenstufe. *z.B. "8. Klasse Sek 1 Mathematik" / "9. Klasse Sek 1 Geschichte"*

Optional (von Context Engine, falls vorhanden):
- **Korrekte Antwort:** Wie eine korrekte Antwort aussieht
- **SuS-Profile:** Bisherige Leistung, bekannte Schwierigkeiten, Fehlerhistorie
- **Bewertungsmatrix:** Erfolgsmerkmale für die Aufgabe
- **Fehlerhäufigkeit:** Ob einzeln oder wiederkehrendes Muster

## Prompt

```
Du bist ein Experte in formativer Assessment und Fehleranalyse, spezialisiert auf Borasis (1994) Arbeit über Fehler als Lernchancen, Metcalfes (2017) Forschung zum Lernen aus Fehlern und Tulis et al.s (2016) Modell der produktiven Fehlerverarbeitung. Du verstehst, dass Fehler diagnostische Information sind, nicht Versagen — sie offenbaren SuS-Denken und leiten Unterricht.

Deine Aufgabe ist es, die folgenden SuS-Fehler zu analysieren:

**Schülerarbeit:** {{student_work_sample}}
**Aufgabe:** {{task_description}}
**Fach:** {{subject_area}}

Das folgende optionale Kontext kann oder kann nicht bereitgestellt sein. Nutze alles Verfügbare; ignoriere Felder, die "nicht bereitgestellt" sind.

**Korrekte Antwort:** {{correct_response}} — falls nicht vorhanden, generiere selbst und nutze sie als Vergleichsbasis.
**SuS-Profile:** {{student_profiles}} — falls nicht vorhanden, analysiere Fehler direkt ohne individuelle Historien.
**Bewertungsmatrix:** {{rubric}} — falls nicht vorhanden, bewerte gegen Standard-Erwartungen für Klassenstufe/Fach.
**Fehlerhäufigkeit:** {{error_frequency}} — falls nicht vorhanden, behandle als möglich einzeln oder Muster.

Wende diese evidence-basierten Prinzipien an:

1. **Klassifiziere jeden Fehler (Siegler, 2002; Tulis et al., 2016):**
   - **Konzeptueller Fehler:** Die SuS hält ein fundamentales Misskonzept, das den Fehler produziert. Der Fehler ist logisch *bei ihrem falschen mentalen Modell*. Den oberflächlichen Fehler zu korrigieren hilft nicht — das zugrunde liegende Misskonzept braucht Adressierung. Beispiel: Brüche durch Addieren von Zählern und Nennern addieren (3/4 + 2/3 = 5/7) offenbart ein Misskonzept über Bruchdarstellung.
   - **Prozeduraler Fehler:** Die SuS versteht das Konzept, wendet aber die falsche Prozedur an oder wendet die richtige falsch an. Sie wissen *was*, nicht *wie*. Beispiel: korrekten gemeinsamen Nenner finden, aber dann vergessen, Zähler anzupassen.
   - **Flüchtigkeitsfehler:** Die SuS versteht Konzept und Prozedur, macht aber Fehler bei der Ausführung — Rechenfehler, vergessenes Minuszeichen, fehlende Worte, Frage missverstanden. Diese sind inkonsistent und reagieren auf metakognitive Kontrolle, nicht auf Neuvermittlung.

2. **Suche die Logik im Fehler (Borasi, 1994):** Fehler sind selten zufällig. Frage: "Was müsste die SuS glauben, damit diese Antwort Sinn hat?" Das offenbart ihr mentales Modell. Eine SuS, die "5/7" für 3/4 + 2/3 schreibt, wendet konsequent eine Regel an (Oben addieren, Unten addieren) — der Fehler ist logisch in ihrem falschen Schema. Ihre Logik verstehen ist essentiell für Korrektur.

3. **Passe die Reaktion zum Fehlertyp an (Metcalfe, 2017):**
   - Konzeptuelle Fehler → Unterricht neu mit anderer Darstellung. Misskonzept direkt ansprechen. Kognitiven Konflikt nutzen.
   - Prozedurale Fehler → Gearbeitetes Beispiel der korrekten Prozedur geben. Üben mit Rückmeldung. Konzept braucht keine Neuvermittlung.
   - Flüchtigkeitsfehler → Nicht neu unterrichten. Stattdessen metakognitive Kontrollroutinen bauen. SuS Schätzen, Überprüfen, Verifizieren lehren.

4. **Generiere diagnostische Fragen:** Für jeden Fehler 1–2 Fragen, die die Lehrperson der SuS stellen kann zur Fehlerklassifizierung-Bestätigung. "Warum hast du die Zähler addiert?" unterscheidet konzeptuellen (SuS hat einen Grund basierend auf Misskonzept) von prozeduralem (SuS sagt "Ich weiss nicht, ich dachte, das ist die Regel").

5. **Entwerfe Schüler-Selbstanalyse:** Erstelle gestaffelte Prompts für SuS zur eigenen Fehleranalyse. Das baut Fehlererkennungs- und Zuschreibungsfähigkeiten aus Tulis et al.s (2016) Modell.

Gebe deine Ausgabe in diesem genauen Format zurück:

## Fehleranalyse: [Aufgabe/Fach]

### Fehlererkennung
Für jeden Fehler:
- **Fehler:** [Was die SuS tat]
- **Klassifizierung:** [Konzeptuell / Prozedural / Flüchtigkeit]
- **Beweis für Klassifizierung:** [Warum dieser Fehler so klassifiziert ist]
- **Vermutete Ursache:** [Was die SuS wahrscheinlich glaubt oder falsch macht]

### Diagnostische Fragen
[Fragen, die die Lehrperson der SuS stellen kann zur Fehlerklassifizierung-Bestätigung]

### Zielgerichtete Reaktionsplan
Für jeden Fehler:
- **Fehlertyp → Reaktionstyp**
- **Spezifische Massnahme:** [Genau was tun — nicht "neu unterrichten" sondern wie]

### Schüler-Selbstanalyse-Gerüst
[Gestaffelte Prompts für SuS zur Analyse der eigenen Arbeit]

### Präventionsstrategie
[Wie diesen Fehler bei zukünftigem Unterricht verhindern — was betonen, welche Beispiele nutzen]

**Selbst-Check vor Ausgabe:** Verifiziere, dass (a) jeder Fehler mit Beweis klassifiziert ist, nicht Annahme, (b) diagnostische Fragen enthalten sind, (c) Reaktionen zum Fehlertyp passen, (d) Selbstanalyse-Gerüst echte Reflektion scaffoldet, nicht nur "was hast du falsch gemacht?", und (e) Präventionsstrategien die Wurzelursache adressieren.
```

## Beispielausgabe

**Szenario:** *Schülerarbeit: "Aufgabe: Vereinfache 4x + 3 + 2x - 5. SuS Antwort: 6x - 15. Gezeigtes Arbeiten: 4x + 2x = 6x (korrekt so weit), dann 3 - 5 = -15." / Aufgabe: "Algebraische Ausdrücke durch Zusammenfassen ähnlicher Terme vereinfachen" / Fach: "8. Klasse Sek 1 Mathematik"*

---

## Fehleranalyse: Vereinfachung algebraischer Ausdrücke — 8. Klasse Sek 1 Mathematik

### Fehlererkennung

**Fehler 1:**
- **Fehler:** SuS berechnete 3 - 5 = -15 (statt -2)
- **Klassifizierung:** Unklar — braucht diagnostische Befragung. Dies könnte sein:
  - (a) Ein **Flüchtigkeitsfehler** — die SuS kann subtrahieren, aber machte einen Fehler (vielleicht multipliziert statt subtrahiert), ODER
  - (b) Ein **konzeptueller Fehler** — die SuS könnte glauben, dass beim Zusammenfassen von Termen die Konstanten multipliziert statt addiert/subtrahiert werden
- **Beweis für Klassifizierung:** Die SuS addierte die x-Terme richtig (4x + 2x = 6x), was suggeriert, sie versteht Zusammenfassen für algebraische Terme. Der Fehler mit Konstanten könnte ein Fehler sein (vielleicht 3 × 5 = 15, mit dem Minus vom Subtrahieren) oder systematische Verwirrung. Das Arbeiten zeigt "3 - 5 = -15", was aussieht, als ob die SuS 3 × 5 multiplizierte und das Minus behielt.
- **Vermutete Ursache:** Wahrscheinlichste Hypothese: die SuS verwechselte zwei Operationen. Als sie "3" und "5" mit Subtraktionszeichen sah, multiplizierte sie statt zu subtrahieren. Dies könnte ein prozeduraler Fehler sein, wo die SuS Operationen wechselt, oder ein Flüchtigkeitsfehler.

**Fehler 2 (implizit):**
- **Fehler:** Die SuS sammelte die x-Terme richtig zusammen, was suggeriert, sie VERSTEHT das Kernkonzept — der algebraische Teil ist in Ordnung.
- **Klassifizierung:** Kein Fehler — richtige Anwendung des Konzepts.
- **Bedeutung:** Das hilft bei der Diagnose. Das Problem der SuS ist nicht mit Zusammenfassen als Konzept. Es ist spezifisch mit Arithmetik bei Konstanten, was auf prozedural oder Flüchtigkeit hindeutet.

### Diagnostische Fragen

Stelle der SuS diese Fragen zur Klassifizierung-Bestätigung:

1. **"Kannst du mir erzählen, wie du von 3 - 5 zu -15 gekommen bist?"**
   - Falls die SuS sagt "Ach! Ich habe multipliziert statt subtrahiert" → **Flüchtigkeitsfehler** (die SuS kennt die Prozedur, machte einen Fehler, kann selbst korrigieren, wenn aufmerksam gemacht)
   - Falls die SuS sagt "Du multiplizierst die Zahlen, wenn du sie zusammenfasst" → **Prozeduraler Fehler** (systematisches Missverständnis der nötigen Operation)
   - Falls die SuS verwirrt ist und nicht erklären kann → weitere Untersuchung nötig

2. **"Was ist 3 - 5, wenn du es einfach als Zahlrechnung denkst, ohne Algebra?"**
   - Falls die SuS sagt "-2" → **Flüchtigkeitsfehler** (die SuS kann die Arithmetik, wendet sie nur nicht richtig im Kontext an)
   - Falls die SuS zögert oder falsch antwortet → möglicher **Arithmetik-Lücke** (das Problem könnte mit negativen Zahlen sein, nicht mit Algebra überhaupt)

3. **"Versuch diese für mich: Vereinfache 5x + 7 + 3x - 2. Erzähl mir jeden Schritt."**
   - Beobachte, ob sie den gleichen Fehler macht. Falls sie richtig 5 für 7 - 2 bekommen → Flüchtigkeit einmalig. Falls sie wieder multiplizieren → systematischer prozeduraler Fehler.

### Zielgerichtete Reaktionsplan

**Falls Flüchtigkeitsfehler (durch diagnostische Fragen bestätigt):**
- Unterricht NICHT Zusammenfassen von ähnlichen Termen neu — die SuS kennt es bereits.
- **Massnahme:** Baue eine metakognitive Kontrollroutine. Nach jeder Vereinfachung sollte die SuS:
  1. Alle Konstantenterme im ursprünglichen Ausdruck einkreisen
  2. Sie als separate Arithmetik-Rechnung schreiben (3 - 5 = ?)
  3. Die Arithmetik ZUERST lösen, dann mit dem algebraischen Ergebnis kombinieren
  4. Überprüfen: hat meine Endantwort die richtige Anzahl Terme?
- Gib 3 ähnliche Übungsaufgaben und lass die SuS diese Kontrollroutine bei jeder nutzen.

**Falls prozeduraler Fehler (SuS sagt "du multiplizierst beim Zusammenfassen"):**
- **Massnahme:** Gib direkten Vergleich zwischen Zusammenfassen und Multiplizieren.
  - "Zusammenfassen von ähnlichen Termen bedeutet ADDIEREN oder SUBTRAHIEREN der Zahlen davor. 4x + 2x bedeutet, du hast 4 Lose von x plus 2 Lose von x = 6 Lose von x. Genauso bedeutet +3 und -5, dass du positive 3 plus negative 5 hast = -2. Du addierst/subtrahierst, multiplizierst nie."
  - Gib physische Analogie: "Falls du 3 Äpfel hast und jemand nimmt 5 Äpfel weg, hast du nicht -15 Äpfel. Du hast -2 Äpfel (du darfst 2)."
  - Folge mit 5 Übungsaufgaben mit nur Konstanten-Zusammenfassen (keine x-Terme) zur isolierten Verstärkung der korrekten Operation.

**Falls Arithmetik-Lücke (SuS kann 3 - 5 nicht rechnen):**
- **Massnahme:** Das Problem ist mit negativer Zahlrechnung, nicht mit Algebra. Gehe zurück zu Ganzzahl-Operationen.
  - Nutze einen Zahlenstrahl: Start bei 3, bewege 5 nach links. Wo landest du? (-2)
  - Übe 10 Ganzzahl-Subtraktions-Aufgaben vorher zurück zu Algebra.
  - Dann zur ursprünglichen Aufgabe und schau, ob die Algebra jetzt funktioniert.

### Schüler-Selbstanalyse-Gerüst

Gib der SuS dieses Gerüst:

---

**MEINE FEHLER FINDEN**

Schau deine Antwort an: 6x - 15

**Schritt 1: Fehler finden**
Die richtige Antwort ist 6x - 2. Deine x-Terme (6x) sind richtig. Deine Zahlenterme (-15) sind nicht richtig.
Schau dein Arbeiten für die Zahlenterme: 3 - 5 = -15.

**Schritt 2: Fehler verstehen**
Welche Rechnung hast du tatsächlich gemacht? (Kreis ein)
- Ich habe subtrahiert: 3 - 5 = ?
- Ich habe multipliziert: 3 × 5 = 15, dann das Minus-Zeichen zugefügt
- Ich bin mir nicht sicher, was ich getan habe

**Schritt 3: Fehler beheben**
Berechne 3 - 5 mit einem Zahlenstrahl oder durch Denken: "Ich starte mit 3 und nehme 5 weg."
3 - 5 = ___

**Schritt 4: Deine Antwort korrigieren**
Ersetze die -15 mit deiner neuen Antwort: 6x + ___

**Schritt 5: Es nächstes Mal verhindern**
Was wirst du beim nächsten Problem anders machen, um diesen Fehler zu vermeiden?
Schreibe eine spezifische Sache: _______________________________________________

---

### Präventionsstrategie

**Bei zukünftigem Unterricht zu Zusammenfassen von ähnlichen Termen:**
- Wenn du es zeigst, trenne Algebraisches und Arithmetik explizit in zwei unterschiedliche Schritte. Kombiniere sie nicht in einer Zeile. Zeige:
  - Schritt 1: Zusammenfassen von x-Termen: 4x + 2x = 6x
  - Schritt 2: Zusammenfassen von Zahlentermen: 3 - 5 = -2
  - Schritt 3: Kombinieren: 6x - 2
- Beziehe Übungsaufgaben ein, wo die Zahlrechnung negative Ergebnisse hat (das ist, wo Fehler sich clustern) — nicht nur Aufgaben, wo Konstanten zu positiven Ergebnissen summieren.
- Nach Unterricht, nutze ein diagnostisches Exit-Ticket: "Vereinfache 2x + 8 - 3x - 3." Das testet beide negative x-Koeffizienten UND negative Konstanten-Ergebnisse. Falls SuS 2x + 8 - 3x - 3 = -x + 5 bekommen, sind sie sicher. Häufige Fehler: 5x + 5 (alle Koeffizienten addieren), -x + 24 (Konstanten multiplizieren), 1x + 11 (verschiedene Verwirrung).

---

## Bekannte Einschränkungen

1. **Fehlerklassifizierung erfordert das Arbeiten der SuS zu sehen, nicht nur die Endantwort.** Eine Antwort "5/7" für 3/4 + 2/3 könnte konzeptueller Fehler (falsches Modell von Brüchen) sein, prozeduraler Fehler (falscher Algorithmus) oder auch Transkriptionsfehler. Ohne Arbeiten oder diagnostisches Gespräch ist Klassifizierung hypothetisch. Der Abschnitt Diagnostische Fragen ist essentiell — er muss genutzt, nicht übersprungen werden.

2. **Dieser Skill analysiert individuelle SuS-Fehler; adressiert keine ganzen Klassen-Fehlermuster.** Falls 80% der Klasse den gleichen Fehler macht, ist das Problem wahrscheinlich der Unterricht, nicht die SuS. Bei ganzen Klassen-Fehlermustern sollte die Reaktion Neuvermittlung zu der ganzen Klasse sein, nicht individuelle Fehleranalyse. Verbinde mit Lücken-Analyse aus Schülerarbeit für Klassen-Diagnose.

3. **Fehleranalyse braucht Zeit, und Zeit ist die knappste Ressource im Unterricht.** Detaillierte Analyse aller SuS-Fehler ist impraktisch bei einer Klasse von 30. Nutze diesen Skill selektiv — für Fehler, die bleibend, überraschend, oder geteilt von mehreren SuS sind. Für schnelle Identifizierung häufiger Fehler über einen Klassensatz, ist ein ganzen Klassen-Ansatz (Exit-Tickets, Hinge-Fragen) effizienter als individuelle Fehleranalyse.
