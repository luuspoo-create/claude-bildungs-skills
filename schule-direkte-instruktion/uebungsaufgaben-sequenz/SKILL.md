---
# AGENT SKILLS STANDARD FIELDS (v2)
name: uebungsaufgaben-sequenz
description: "Generiere eine gestufte Sequenz von Übungs-Aufgaben mit gradueller Schwierigkeit und strategischer Variabilität. Nutze um Arbeitsblätter, Hausaufgaben-Sets oder Independent-Practice-Materialien zu erstellen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-direkte-instruktion/uebungsaufgaben-sequenz"
skill_name: "Übungsaufgaben-Sequenz Designer"
domain: "schule-direkte-instruktion"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Rosenshine (2012) — Principles of Instruction, Principles 5 & 8: guide student practice, provide scaffolds"
  - "Rohrer (2009) — The effects of spacing and mixing practice problems"
  - "Sweller et al. (2019) — Cognitive load theory: variability and worked example effects"
  - "Atkinson et al. (2000) — Learning from examples: varied practice promotes transfer"
  - "Bjork & Bjork (2011) — Making things hard on yourself, but in a good way: desirable difficulties"
input_schema:
  required:
    - field: "zu_uebende_fachigkeit"
      type: "string"
      description: "Die spezifische Fähigkeit, die SuS üben"
    - field: "schueler_niveau"
      type: "string"
      description: "Klassenstufe und aktueller Leistungs-Niveau"
    - field: "aufgaben_anzahl"
      type: "integer"
      description: "Anzahl Übungs-Aufgaben zum Generieren"
  optional:
    - field: "haeufige_fehler"
      type: "array"
      description: "Bekannte Fehler zum Design von Aufgaben um"
    - field: "vorherige_beispiele"
      type: "string"
      description: "Das Rechenbeispiel oder Modell, das SuS bereits sahen"
    - field: "sus_profile"
      type: "array"
      description: "Fähigkeitsspektrum, spezifische Bedürfnisse"
    - field: "beurteilungs_format"
      type: "string"
      description: "Wie SuS beurteilt werden — bestimmt Aufgaben-Format-Variation"
output_schema:
  type: "object"
  fields:
    - field: "aufgaben_sequenz"
      type: "array"
      description: "Geordnete Sequenz von Aufgaben mit Schwierigkeits-Fortschritt und Design-Begründung"
    - field: "scaffolding_reduktions_plan"
      type: "string"
      description: "Wie Scaffolding über die Sequenz reduziert wird"
    - field: "differenzierungs_optionen"
      type: "object"
      description: "Support und Extension Modifikationen"
    - field: "monitoring_guide"
      type: "string"
      description: "Worauf achten wenn SuS arbeiten und wann eingreifen"
chains_well_with:
  - "instruktionssequenz-builder"
  - "arbeitetes-beispiel-verblassen-designer"
  - "verschachtelung-einheit-planner"
  - "kognitiv-belastungs-analysierer"
teacher_time: "4 minutes"
tags: ["uebung", "aufgaben-design", "scaffolding", "variabilität", "desirable-difficulty", "lehrplan21"]
---

# Übungsaufgaben-Sequenz Designer

## Was diese Skill leistet

Designet einen sequenzierten Satz von Übungs-Aufgaben, die Prinzipien von verteilter Schwierigkeit, progressiver Scaffold-Reduktion, und Oberflächenmerkmal-Variation folgen — bewegend SuS von Nah-Transfer (Aufgaben sehr ähnlich zum gelehrten Beispiel) durch zu Fern-Transfer (Aufgaben, die anders aussehen aber die gleiche zugrunde liegende Fähigkeit erfordern). Der Output enthält die Aufgaben, die Design-Begründung für jede, Scaffold-Reduktions-Notizen und einen Monitoring-Guide für die LP. KI ist hier besonders wertvoll, weil wirksame Übungs-Sequenzen erfordern deliberate Manipulation von Schwierigkeit, Oberflächenmerkmalen und Scaffold-Stufen — die meisten LP-entworfen Übungs-Sets sind entweder zufällig geordnet (kein Fortschritt) oder einheitlich schwierig (keine Variation), beide reduzieren Lernen.

## Evidenzgrundlage

Rosenshine (2012) identifizierte gesteuerter und independent Übung als Principles 5 und 8, betonend dass Übung ein Scaffold sein muss (beginnend mit LP-Support und progressiv reduzierend) und dass SuS eine hohe Erfolgsquote (80%+) erreichen sollte bevor Scaffolds entfernt werden. Rohrer (2009) demonstrierte, dass Vermischung von Übungs-Aufgaben-Typen (Verschachtelung) und Spacing Übung über Sessions führt zu deutlich besserem Einbehaltung als Blocked, Massed Übung. Sweller et al. (2019) etablierten die Variabilität-Effekt — Übung mit variiert Aufgaben-Typen fördert Schema-Abstraktion und Transfer, während Übung mit identische Aufgaben fördert starre, Kontext-gebundenes Wissen. Atkinson et al. (2000) zeigten, dass Oberflächenmerkmal-Variation (Wechseln Kontext, Zahlen oder Präsentation während die zugrunde liegende Struktur gleich bleibt) ist kritisch für Transfer — SuS, die nur Aufgaben üben, die wie das gelehrte Beispiel aussehen, scheitern wenn Aufgaben anders aussehen. Bjork & Bjork (2011) rahmen dies als „desirable difficulty" — Übung, die sich schwieriger anfühlt (weil Aufgaben variieren) erzeugt besser langfristiges Lernen als Übung, die sich leicht anfühlt (weil Aufgaben identisch sind).

## Input-Schema

Die LP muss bereitstellen:
- **Zu übende Fähigkeit:** Die spezifische Fähigkeit. *z.B. „Lineare Gleichungen mit Unbekannter auf beiden Seiten lösen" / „Einen Absatz nutzt die PEEL-Struktur schreiben" / „Box-Plots zeichnen und interpretieren"*
- **SuS-Niveau:** Klassenstufe und aktueller Niveau. *z.B. „9. Klasse, haben gerade zwei Rechenbeispiele gesehen — Novizen mit dieser spezifischen Fähigkeit"*
- **Aufgaben-Anzahl:** Wie viele Aufgaben. *z.B. 10*

Optional (vom Kontextsystem bereitgestellt):
- **Häufige Fehler:** Bekannte Fehler um Aufgaben herum zu designen
- **Vorherige Beispiele:** Das Rechenbeispiel oder Modell bereits gezeigt
- **SuS-Profile:** Fähigkeitsspektrum, spezifische Bedürfnisse
- **Beurteilungs-Format:** Wie SuS beurteilt werden

## Prompt

```
Du bist ein Experte in Übungs-Design und Instruktions-Sequenzierung, mit tiefem Wissen von Rosenshines (2012) Übungs-Prinzipien, Rohrers (2009) Forschung zu Übungs-Spacing und Vermischung, Swellers et al. (2019) Variabilität-Effekt, und Bjorks & Bjorks (2011) Konzept von desirable difficulties. Du verstehst, dass die Sequenz und Struktur von Übungs-Aufgaben Lernen genauso beeinflusst wie die Anzahl von Aufgaben.

Deine Aufgabe ist, eine Übungs-Aufgaben-Sequenz für folgende zu entwerfen:

**Fähigkeit:** {{zu_uebende_fachigkeit}}
**SuS-Niveau:** {{schueler_niveau}}
**Anzahl Aufgaben:** {{aufgaben_anzahl}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt sein. Nutze, was verfügbar ist; ignoriere Felder, die als „nicht bereitgestellt" gekennzeichnet sind.

**Häufige Fehler:** {{haeufige_fehler}} — wenn nicht bereitgestellt, identifiziere die 2–3 häufigsten Fehler für diese Fähigkeit und include Aufgaben spezifisch designet um sie zu offenbaren.
**Vorherige Beispiele:** {{vorherige_beispiele}} — wenn nicht bereitgestellt, nimm an SuS haben ein Standard-Rechenbeispiel gesehen und designen die ersten 2 Aufgaben um es eng zu passen.
**SuS-Profile:** {{sus_profile}} — wenn nicht bereitgestellt, designen für eine Mischklasse und include Differenzierungs-Notizen.
**Beurteilungs-Format:** {{beurteilungs_format}} — wenn nicht bereitgestellt, include mindestens eine Aufgabe in das Format SuS wahrscheinlich in Beurteilungen treffen.

Wende diese evidenzgestützten Prinzipien an:

1. **Nah-zu-Fern-Transfer-Fortschritt (Atkinson et al., 2000):**
   - Aufgaben 1–2: Nah-identisch dem Rechenbeispiel (gleiche Struktur, ähnliche Zahlen, gleicher Kontext). Erfolgsquote sollte 90%+ sein. Diese bauen Vertrauen und bestätigen Basis-Verständnis.
   - Aufgaben 3–5: Gleiche zugrunde liegende Fähigkeit, verschiedene Oberflächenmerkmale (verschiedener Kontext, verschiedene Zahlen, verschiedene Präsentation). Der SuS muss die gleiche Fähigkeit in einem neuen Wrapper erkennen.
   - Aufgaben 6–8: Erhöhte Schwierigkeit — zusätzliche Schritte, fehlendes Information zum Inferieren oder diese Fähigkeit mit früher gelernter Fähigkeit kombinieren.
   - Aufgaben 9+: Fern-Transfer — die Aufgabe sieht deutlich verschiedener vom Rechenbeispiel aus, aber erfordert die gleiche zugrunde liegende Fähigkeit, möglicherweise eingebettet in ein größeres Problem oder angewendet zu einem neuen Kontext.

2. **Oberflächenmerkmal-Variation (Sweller et al., 2019):**
   - Variiere den Kontext, Zahlen, Format und Präsentation während die zugrunde liegende Struktur konstant bleibt.
   - Wenn das Rechenbeispiel eine Wort-Problem über Äpfel kaufen nutzte, sollten Übungs-Aufgaben verschiedene Kontexte einbauen (Temperatur, Distanz, Geld) — SuS, die nur Äpfel-Probleme üben, können Temperatur-Probleme nicht lösen, weil sie die „Äpfel-Prozedur" gelernt haben, nicht die zugrunde liegende Mathematik.

3. **Scaffold-Reduktion (Rosenshine, 2012):**
   - Frühe Aufgaben können Partial-Scaffolds enthalten: ein Hinweis, ein erster Schritt oder eine Formel-Erinnerung.
   - Mittlere Aufgaben entfernen diese Scaffolds.
   - Spätere Aufgaben erfordern SuS, die Methode independent zu bestimmen.

4. **Fehler-Zielungs-Aufgaben:**
   - Include mindestens 2 Aufgaben spezifisch designet um häufige Fehler zu offenbaren.
   - Wenn SuS üblicherweise Operation X mit Operation Y verwechseln, include eine Aufgabe wo die falsche Operation eine plausibel aussehende Antwort gibt — zwingt SuS sorgfältig zu denken welche Ansatz korrekt ist.

5. **Ein „Twist"-Problem:**
   - Include mindestens ein Problem, das aussieht wie es diese Fähigkeit erfordert, aber eigentlich tut es nicht — oder dass erfordert den SuS zu erklären warum die Fähigkeit nicht zuwendbar ist. Dies prüft ob SuS denken oder gerade eine Prozedur mechanisch anwenden.

Gib deinen Output in exakt diesem Format zurück:

## Übungsaufgaben-Sequenz: [Fähigkeit]

**Für:** [SuS-Niveau]
**Gesamt-Aufgaben:** [Anzahl]
**Scaffold-Reduktion:** [Kurz-Überblick wie Scaffolding über die Sequenz abnimmt]

### Aufgaben-Sequenz

Für jede Aufgabe:
- **Aufgabe [N]:** [Die Aufgaben-Text]
- **Design-Absicht:** [Warum diese Aufgabe an dieser Position — was sie prüft, dass vorherige Aufgaben nicht taten]
- **Schwierigkeits-Niveau:** [Nah-Transfer / Entwicklung / Fern-Transfer]
- **Häufiger Fehler zum Beobachten:** [Wenn zuwendbar]

### Scaffold-Reduktions-Plan

[Wie Scaffolding abnimmt über die Sequenz — was Support wird früh gegeben und später entfernt]

### Differenzierung

**Support:** [Wie für kämpfende SuS modifizieren — welche Aufgaben to priorisieren, welche Scaffolds hinzuzufügen]
**Extension:** [Wie for finish-schnelle SuS challengen — welche Aufgaben hinzuzufügen]

### Monitoring-Guide

[Worauf LP achten sollte während SuS arbeiten: welche Aufgaben diagnostisch sind, welche Fehler welchen Missverständnis signalisieren, wann eingreifen vs. kämpfen lassen]

**Selbstcheck vor Rückgabe:** Überprüfe dass (a) Aufgaben von Nah-Transfer zu Fern-Transfer fortschreiten, (b) Oberflächenmerkmale variieren über die Sequenz, (c) mindestens 2 Aufgaben häufige Fehler zielen, (d) Scaffolding progressiv abnimmt, (e) ein Problem prüft ob SuS diskriminieren wenn die Fähigkeit Anwendbar ist/nicht anwendbar, und (f) die ersten 2 Aufgaben zugänglich genug für 90%+ Erfolgsquote sind.
```

## Beispiel Output

**Szenario:** *Fähigkeit: „Prozentuale Erhöhung und Verminderung berechnen" / SuS-Niveau: „9. Klasse, haben gerade ein Rechenbeispiel von ‚finde 15% von £240 und addiere es zum Original' gesehen" / Aufgaben-Anzahl: 10 / Häufige Fehler: [„Prozentual finden, aber vergessen zu addieren/subtrahieren", „Prozentual des neuen Betrags statt Original berechnen"]*

---

## Übungsaufgaben-Sequenz: Prozentuale Erhöhung und Verminderung

**Für:** 9. Klasse Mathematik
**Gesamt-Aufgaben:** 10
**Scaffold-Reduktion:** Aufgaben 1–2 enthalten eine Methoden-Erinnerung. Aufgaben 3–5 entfernen die Erinnerung. Aufgaben 6–8 erfordern Methoden-Auswahl. Aufgaben 9–10 betten die Fähigkeit in unvertraute Kontexte ein.

### Aufgaben-Sequenz

**Aufgabe 1:** Eine Jacke kostet £80. Der Preis steigt um 10%. Was ist der neue Preis?
*Hinweis: Finde zuerst 10% von £80, dann addiere es zu £80.*
- **Design-Absicht:** Nah-identisch zum Rechenbeispiel. Gleiche Struktur (prozentuale Erhöhung), freundliche Zahlen (10% einer runden Zahl), Hinweis gegeben. Bestätigt Basis-Verständnis.
- **Schwierigkeits-Niveau:** Nah-Transfer
- **Erwartete Antwort:** £88

**Aufgabe 2:** Ein Laptop kostet £450. Der Preis wird um 20% im Sale reduziert. Was ist der Sale-Preis?
*Hinweis: Finde zuerst 20% von £450, dann subtrahiere es von £450.*
- **Design-Absicht:** Stellt prozentuale Verminderung ein (subtrahiere statt addiere) aber mit Hinweis. Prüft ob SuS die gegenteilige Operation anwenden können. Immer noch freundliche Zahlen.
- **Schwierigkeits-Niveau:** Nah-Transfer
- **Häufiger Fehler zum Beobachten:** SuS, die addieren statt subtrahieren (bekommen £540) — sie wenden die Erhöhungs-Methode automatisch an, ohne die Frage zu lesen.

**Aufgabe 3:** Eine Fitnessclub-Mitgliedschaft kostet £35 pro Monat. Der Fitnessclub kündigt eine 12% Preis-Erhöhung an. Was ist die neue monatliche Kosten?
- **Design-Absicht:** Kein Hinweis gegeben. Nicht-runde Prozentual (12%). Kleinere Basis-Zahl. Prüft ob SuS können ohne Scaffolding arbeiten und einen weniger bequemen Prozentual handhaben.
- **Schwierigkeits-Niveau:** Entwicklung
- **Erwartete Antwort:** £39.20

**Aufgabe 4:** Ein Haus wurde für £185.000 gekauft. Sein Wert ist um 7% gesunken. Wie viel ist es jetzt wert?
- **Design-Absicht:** Größere Zahlen (prüft ob SuS können £185.000 handhaben ohne zu paniken), prozentuale Verminderung und ein echte-Welt-Kontext-Shift (von Shopping zu Eigentum). Gleiche zugrunde liegende Fähigkeit.
- **Schwierigkeits-Niveau:** Entwicklung
- **Häufiger Fehler zum Beobachten:** SuS, die 7% finden (£12.950) und das als Antwort schreiben — vergessen vom Original zu subtrahieren.

**Aufgabe 5:** Eine Schule hat 840 Schüler. Nächstes Jahr, wird die Anzahl erwartet um 5% zu wachsen. Wie viele Schüler wird es geben?
- **Design-Absicht:** Kontext-Shift (Menschen, nicht Geld). Die Antwort muss eine ganze Zahl sein (du kannst 0,5 eines Schülers nicht haben) — prüft ob SuS ihre Antwort in Kontext interpretieren.
- **Schwierigkeits-Niveau:** Entwicklung
- **Erwartete Antwort:** 882 (840 × 0,05 = 42; 840 + 42 = 882)

**Aufgabe 6:** Ein Auto war worth £12.500 am Jahres-Anfang. Am Jahres-Ende war es worth £11.250. Was war die prozentuale Verminderung?
- **Design-Absicht:** UMGEKEHRTES Problem — die Prozentual ist unbekannt. SuS müssen rückwärts arbeiten: die Differenz finde (£1.250), dann berechne welche Prozentual £1.250 ist von £12.500. Prüft tieferes Verständnis der Beziehung, nicht gerade vorwärts-Anwendung.
- **Schwierigkeits-Niveau:** Fern-Transfer
- **Häufiger Fehler zum Beobachten:** SuS, die £1.250 als Prozentual von £11.250 (den neuen Wert) statt £12.500 (den Original) berechnen — dies ist einer der genannten häufigen Fehler.
- **Erwartete Antwort:** 10%

**Aufgabe 7:** Ein Hemd wird beworben als „30% weg! Jetzt gerade £28." Was war der Original-Preis?
- **Design-Absicht:** Anderes Umgekehrtes Problem — dieses Mal den Original-Preis finden vom reduzierten Preis. SuS müssen erkennen, dass £28 ist 70% des Originals (nicht 100%). Dies ist deutlich schwieriger, weil es proportionales Denken erfordert.
- **Schwierigkeits-Niveau:** Fern-Transfer
- **Erwartete Antwort:** £40 (£28 ÷ 0,7 = £40)

**Aufgabe 8:** Einer Stadt Bevölkerung erhöhte sich um 15% zu erreichen 9.200 Menschen. Was war die Bevölkerung bevor die Erhöhung?
- **Design-Absicht:** Gleiche Struktur als Aufgabe 7 (finde den Original gegeben dem neuen Wert und die Prozentual-Änderung) aber mit Erhöhung statt Verminderung und einem anderen Kontext. Prüft ob SuS können die Umgekehrte Methode über beide Richtungen transferieren.
- **Schwierigkeits-Niveau:** Fern-Transfer
- **Erwartete Antwort:** 8.000 (9.200 ÷ 1,15 = 8.000)

**Aufgabe 9:** Ein Shop erhöht Preise um 20% und dann bietet ein „20% weg"-Sale. Ein Kunde sagt: „Die 20% Erhöhung und 20% Verminderung canceln aus, also ist der Preis wieder normal." Stimmt das? Erkläre deine Antwort mit einem spezifischen Beispiel.
- **Design-Absicht:** Das „Twist"-Problem. Die Antwort ist NEIN — eine 20% Erhöhung, gefolgt von einer 20% Verminderung KEHRT nicht zum Original-Preis zurück (z.B., £100 → £120 → £96). Dies offenbaren eine tiefe Fehlkonzeption über Prozentualen und zwingt Erklärung, nicht gerade Berechnung.
- **Schwierigkeits-Niveau:** Fern-Transfer / Kritisches Denken
- **Erwartete Antwort:** Nein. Beispiel: £100 + 20% = £120. £120 - 20% = £96, nicht £100. Die 20% Verminderung wird auf dem höheren Betrag berechnet.

**Aufgabe 10:** Eine Investition wächst um 5% pro Jahr. Wenn du £1.000 investierst, wie viel wird es wert sein nach 3 Jahren?
- **Design-Absicht:** Zusammengesetzter Prozentual-Anstieg — die Prozentual wendet sich auf den neuen Total jedes Jahr an, nicht das Original. Dies erweitert die Fähigkeit in neue Gebiet (zusammengesetzte Wachstum) und zeigt eine zukünftige Thema vor. Es ist OK wenn nicht alle SuS diese bekommen — es ist Extension-Gebiet.
- **Schwierigkeits-Niveau:** Fern-Transfer / Extension
- **Erwartete Antwort:** £1.157,63 (£1.000 × 1,05³)

### Scaffold-Reduktions-Plan

| Aufgaben | Scaffold-Niveau |
|----------|---------------|
| 1–2 | Methoden-Hinweis gegeben („Finde zuerst X% von Y, dann addiere/subtrahiere") |
| 3–5 | Keine Hinweise. SuS müssen Methode independent abrufen und anwenden |
| 6–8 | Umgekehrte Probleme. SuS müssen die Methode bestimmen (rückwärts arbeiten vom neuen Wert um den Original zu finden). Keine Anleitung auf Ansatz |
| 9–10 | Konzeptuelles Denken und Extension. SuS müssen erklären, argumentieren oder die Fähigkeit in neue Gebiet erweitern |

### Differenzierung

**Support (für SuS kämpfend mit Aufgaben 1–3):**
- Gib eine Methoden-Karte: „Schritt 1: Finde die Prozentual. Schritt 2: Addiere (Erhöhung) oder subtrahiere (Verminderung)."
- Reduziere zu Aufgaben 1–5 gerade. Aufgaben 6+ erfordern sichere vorwärts-Anwendung bevor Umgekehrte Probleme versuchen.
- Paar mit einem Rechenbeispiel für Aufgabe 6 (umgekehrte Prozentual) — verkettet mit Arbeitetes-Beispiel-Verblassen-Designer.

**Extension (für SuS, die alle 10 fertig machen):**
- Aufgabe 11: „Ein Preis erhöht um 25% und dann vermindern um 20%. Ist der final-Preis höher, niedriger oder gleich als das Original? Zeige es algebraisch."
- Aufgabe 12: „Wie viele Jahre würde es take für eine Investition an 5% zusammengesetztem Interesse um sich zu verdoppeln? Schätze zuerst, dann berechne."

### Monitoring-Guide

- **Aufgaben 1–2:** Diese sollten 2–3 Minuten dauer. Wenn ein SuS ist stuck hier, sie haben nicht die Basis-Methode — interveniere sofort mit Quick Neu-Unterricht nutzt das Rechenbeispiel.
- **Aufgabe 4:** Überprüfe Antworten hier. Wenn SuS schreiben £12.950 (die Prozentual-Menge statt dem neuen Wert), verstehen sie die Berechnung aber vergessen den finalen Schritt. Dies ist eine prozedural-Erinnerung, nicht ein Neu-Unterricht.
- **Aufgabe 6:** Dies ist das Diagnose-Problem. Wenn SuS versuchen durch den falschen Betrag zu teilen (z.B., die Prozentual des neuen Werts statt des Originals finden), sie haben die häufige Fehlkonzeption. Stoppen und adressieren mit ein gezieltens Beispiel: „Die Prozentual-Änderung wird immer relativ zum ORIGINAL-Betrag berechnet."
- **Aufgabe 9:** Nicht die Antwort offenbaren wenn SuS sagen „ja, sie canceln aus." Stattdessen frag: „Prüf es mit £100. Zeig mir die Mathe." Lass die Überraschung des Erhaltens £96 (nicht £100) kognitiven Konflikt erzeugen.
- **Allgemeine Regel:** Zirkuliere für die ersten 5 Minuten, überprüfe Aufgaben 1–3. Wenn 80%+ korrekt auf Aufgabe 3 sind, die Klasse ist ready weiterzumachen independent. Wenn weniger als 80%, pause und adressiere die Lücke.

---

## Bekannte Grenzen

1. **Die Aufgaben-Sequenz nimmt einen einzelnen Fähigkeits-Fokus an.** Echte Beurteilungs-Probleme vereinbaren üblicherweise mehrere Fähigkeiten (prozentuale Änderung + Graphen lesen + in Kontext interpretieren). Diese Sequenz baut Flüssigkeit mit der Kern-Fähigkeit; Verschachtelung mit anderen Fähigkeiten sollte in Lektionen danach, nicht innerhalb dieser initial Übungs-Set geschehen. Verkettet mit Verschachtelung-Einheit-Planner für gemischte Übung in späteren Lektionen.

2. **Oberflächenmerkmal-Variation kann SuS verwirren, die nicht die Basis-Prozedur gemastert haben.** Für sehr niedrig-Fähigkeit SuS kann zu viel Variation zu früh sich überwältigend anfühlen. Für diese SuS, beginne mit 4–5 Nah-Transfer-Problemen (variierend nur die Zahlen) bevor Kontext-Variation einführen. Die Sequenz kann für höher-Fähigkeit Gruppen komprimiert sein durch das Überspringen von Aufgaben 1–2.

3. **Der Monitoring-Guide erfordert die LP, effektiv zu zirkulieren.** Designen guter Probleme ist notwendig aber nicht hinreichend — die LP muss tatsächlich SuS arbeiten beobachten, Fehler-Muster identifizieren und im richtigen Moment intervenieren. Der Guide hilft Aufmerksamkeit direkt aber kann die LP professionelle Urteil über wann kämpfen lassen vs. eingreifen nicht ersetzen.
