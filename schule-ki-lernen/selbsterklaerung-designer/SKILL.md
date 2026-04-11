---
# AGENT SKILLS STANDARD FIELDS (v2)
name: selbsterklaerung-designer
description: "Gestalte Selbsterklär-Prompts die Verständigung von Gelösten Beispielen, Texten oder Diagrammen vertiefen. Verwende diesen Skill wenn SuS Material passiv lesen ohne sich mit Grundprinzipien auseinanderzusetzen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-ki-lernen/selbsterklaerung-designer"
skill_name: "Selbsterklärungs-Prompt-Designer"
domain: "schule-ki-lernen"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Chi et al. (1989) — Self-explanations: how students study and use examples in learning to solve problems"
  - "Chi et al. (1994) — Eliciting self-explanations improves understanding"
  - "Hausmann & VanLehn (2007) — Explaining self-explaining: a contrast between content and generation"
  - "Wylie & Chi (2014) — The self-explanation principle in multimedia learning"
  - "Rittle-Johnson (2006) — Promoting transfer: effects of self-explanation and direct instruction"
input_schema:
  required:
    - field: "lernmaterial"
      type: "string"
      description: "Der spezifische Inhalt den SuS studieren — ein gelöstes Beispiel, ein Text-Passus, ein Diagramm, oder eine Demonstration die SuS tief verstehen müssen"
    - field: "zielverstaendnis"
      type: "string"
      description: "Was SuS TIEFENWEISE verstehen sollten nach Engagement mit diesem Material — die konzeptuelle Einsicht, nicht nur der Surface-Inhalt"
  optional:
    - field: "sus_niveau"
      type: "string"
      description: "Alter/Jahrgangsstufe und Leistungsniveau"
    - field: "fachbereich"
      type: "string"
      description: "Das Unterrichtsfach"
    - field: "delivery_modus"
      type: "string"
      description: "Wie Selbsterklärungs-Prompts geliefert werden — embedded im Text, KI-generiert während Study, LP-geleitet, oder im Tutoring-System"
    - field: "bekannte_misskonzepte"
      type: "string"
      description: "Spezifische Misskonzepte die SuS häufig über diesen Inhalt halten"
output_schema:
  type: "object"
  fields:
    - field: "selbsterklaerung_prompts"
      type: "array"
      description: "Die spezifischen Prompts an Schlüssel-Punkten im Material — was zu fragen und wo zu fragen"
    - field: "prompt_begrundung"
      type: "object"
      description: "Warum jeder Prompt wo platziert ist und welches Verständnis er elicieren soll"
    - field: "qualitaets_indikatoren"
      type: "object"
      description: "Was gute Selbsterklärung vs. schlechte aussieht — sodass LP oder KI Antworten evaluieren kann"
    - field: "scaffolding_sequenz"
      type: "object"
      description: "Wie man SuS unterstützt die Selbsterklärung schwierig finden — von offenen Prompts zu mehr strukturierten Scaffolds"
chains_well_with:
  - "worked-example-sequenz-digital"
  - "adaptive-hint-designer"
  - "ki-tutoring-dialog-designer"
  - "metakognition-ki-kontext"
teacher_time: "4 Minuten"
tags: ["selbsterklaerung", "Chi", "metakognition", "gelöste-beispiele", "verstaendnis", "tiefes-lernen", "generierung", "Lehrplan21-MA.1", "Lehrplan21-NE.1"]
---

# Selbsterklärungs-Prompt-Designer

## Was dieser Skill leistet

Gestaltet Selbsterklärungs-Prompts — die spezifischen Fragen an Schlüssel-Punkten im Lernmaterial die SuS prompen, SICH SELBST zu erklären warum etwas wahr ist, wie es funktioniert, oder was es bedeutet. Chi et al. (1989) entdeckten dass SuS die spontan Selbsterklärungs-Strategien während Studying gelöster Beispiele nutzen dramatisch mehr lernen als jene die nicht — und entscheidend, Chi et al. (1994) zeigten dass SuS die GEPROMPT sind selbst zu erklären auch signifikante Lernzuwächse zeigen, sogar wenn sie nicht spontan selbst erklären würden. Der Selbsterklärungs-Effekt ist einer der robustesten Findings in Learning Science: Er funktioniert durchgehend auf Altersgruppen, Domains, und Material-Typen. Der Mechanismus: Selbsterklärungs-Prompts zwingt den Lerner Inferenzen zu generieren, Lücken zu füllen, neues Wissen zu vorhandenem zu verbinden, und eigene Verwirrung zu notieren — alles das Verständnis verstärkt. Die Herausforderung: Prompts desiggen die echte tiefe Selbsterklärung elicieren statt oberflächliches Paraphrasieren. „Warum folgt dieser Schritt dem vorherigen?" ist ein guter Selbsterklärungs-Prompt. „Was happens bei diesem Schritt?" ist nicht — das eliciert Beschreibung, nicht Erklärung.

## Evidenzbasis

Chi et al. (1989) führten die seminal Studie über Selbsterklärung durch, beobachtend SuS die gelöste Beispiele in Physik studierten. Sie fanden dass „gute SuS" (jene die am meisten lernten) spontan Selbsterklärung engagierten: Sie hielten an jedem Schritt inne um sich SELBST zu erklären WARUM der Schritt Sinn macht, WIE er zum vorherigen verbindet, und WELCHES PRINZIP er illustriert. „Schwache SuS" lasen die Beispiele passiv. Der Unterschied im Lernen war dramatisch — und es wurde nicht erklärt durch Vorwissen, Intelligenz, oder Study-Zeit. Die kritische Variable war die QUALITÄT kognitiven Engagement während Study. Chi et al. (1994) testeten ob Prompting-Selbsterklärung die Vorteile replizieren könnte. Sie gaben SuS einen Biologie-Text und promptet eine Gruppe selbst zu erklären. Die gepromptete Gruppe outperformte signifikant auf immediaten und Transfer Tests. Dies war revolutionär weil es zeigte dass einfaches Prompting die gleichen Vorteile erzeugen könnte wie seltene kognitive Gewohnheiten. Hausmann & VanLehn (2007) untersuchten was Selbsterklärung effektiv macht. Sie fanden dass der Vorteil von zwei Komponenten kommt: INHALT der Erklärung und der ACT der GENERIERUNG. Selbst-generierte Erklärungen erzeugen besseres Lernen als Instruktor-gelieferte Erklärungen gleicher Qualität — was sagt dass die ACT generieren, nicht nur der Inhalt, den Effekt treibt. Wylie & Chi (2014) erweiterte Selbsterklärung auf Multimedia-Lernen, zeigend dass Prompts eingebettet in digitalen Materialen die gleichen Vorteile produzieren. Sie fanden dass Prompts an Punkten hoher konzeptioneller Dichte platziert sollten — wo Material ein neues Prinzip einführt, nicht-offensichtliche Inferenzen macht, oder common misconceptions triggered. Rittle-Johnson (2006) studierte Selbsterklärung in Mathematik und fand dass Prompts beide konzeptionelle Verständnis und procedurales Transfer verbessern.

## Input-Schema

Die LP muss bereitstellen:
- **Lernmaterial:** Was SuS studieren. *z.B. „Ein gelöstes Beispiel zur Lösung quadratischer Gleichungen durch Ergänzen zum Quadrat: x² + 6x + 2 = 0 → x² + 6x = -2 → x² + 6x + 9 = -2 + 9 → (x + 3)² = 7 → x + 3 = ±√7 → x = -3 ± √7"*
- **Zielverständnis:** Was SuS tiefenweise verstehen sollten. *z.B. „Warum wir 9 addieren — spezifisch, dass (b/2)² das Perfect Square Trinomial komplettiert, und warum diese Transformation hilfreich ist"*

Optional:
- **SuS-Niveau:** Jahrgangsstufe und Leistungsniveau
- **Fachbereich:** Das Fach
- **Delivery-Modus:** Wie Prompts geliefert werden
- **Bekannte Misskonzepte:** Häufige Missverstände über diesen Inhalt

## Prompt

```
Du bist Experte in Selbsterklärungs-Forschung mit tiefem Verständnis von Chi et al. (1989, 1994), Hausmann & VanLehn (2007), Wylie & Chi (2014) und Rittle-Johnson (2006). Du verstehst dass Selbsterklärung eine der mächtigsten Lernstrategien verfügbar ist — und eine der leichtesten schlecht zu machen. Der Unterschied zwischen effektiven und ineffektiven Selbsterklärungs-Prompts ist der Unterschied zwischen tiefem konzeptionellem Engagement und Oberflächen-Paraphrasieren.

KRITISCHE PRINZIPIEN:
- **Prompts müssen ERKLÄRUNG elicieren, nicht BESCHREIBUNG.** „Was happens bei Schritt 3?" eliciert Beschreibung. „WARUM addieren wir spezifisch 9 — woher kommt die 9?" eliciert Erklärung. Das Prompt muss das REASONING targeting, nicht den INHALT.
- **Platziere Prompts an Punkten hoher konzeptioneller Dichte.** Wylie & Chi (2014): Selbsterklärungs-Prompts sind most effektiv wo Material ein neues Prinzip einführt, nicht-offensichtliche Schritte macht, oder wahrscheinlich missverstanden wird. Nicht an jedem Schritt prompen — prompen wo es MATTERS.
- **Die Generierung ist das Lernen.** Hausmann & VanLehn (2007): sogar wenn eine SuS's Selbsterklärung imperfekt ist, der ACT generieren produziert Lernen. Design Prompts die Generierung erfordern, nicht Recognition. Frei-Antwort-Prompts > Multiple-Choice.
- **Selbsterklärungs-Prompts sollten beantwortbar sein.** Ein Prompt den die SuS nicht beantworten kann ohne zusätzliche Instruktion ist nicht ein Selbsterklärungs-Prompt — es ist ein Test-Frage. Selbsterklärung funktioniert durch Aktivieren und Verbinden VORHANDENEN Wissens.
- **Unterscheide Selbsterklärung von anderen Aktivitäten.** Selbsterklärung ist nicht Zusammenfassen (Inhalt restaten), nicht Predicting (raten was kommt nächstes), und nicht Evaluating. Es ist das Reasoning HINTER etwas erklären — das WARUM und WIE, nicht das WAS.

Deine Aufgabe ist Selbsterklärungs-Prompts zu designen für:

**Lernmaterial:** {{lernmaterial}}
**Zielverständnis:** {{zielverstaendnis}}

Optionale Kontexte:
**SuS-Niveau:** {{sus_niveau}}
**Fachbereich:** {{fachbereich}}
**Delivery-Modus:** {{delivery_modus}}
**Bekannte Misskonzepte:** {{bekannte_misskonzepte}}

Gib deine Ausgabe in diesem Format zurück:

## Selbsterklärungs-Prompts: [Material-Beschreibung]

**Material:** [Was SuS studieren]
**Zielverständnis:** [Die tiefe Einsicht SuS sollten erreichen]
**Anzahl Prompts:** [Wie viele, und warum]

### Prompt-Platzierungs-Karte

[Zeige wo jeder Prompt fällt im Material — bei welchem Schritt, Satz, oder Element. Erkläre warum dieser PUNKT ausgewählt wurde.]

### Selbsterklärungs-Prompts

Für jeden Prompt:

**Prompt [N] — platziert bei: [spezifischer Ort]**
- **Prompt-Text:** [Exactly was der/die SuS sieht]
- **Ziel-Erklärung:** [Was eine gute Selbsterklärung inkludieren würde]
- **Warum hier:** [Warum dieser Punkt high-value ist]
- **Häufige oberflächliche Antwort:** [Was SuS sagen wenn sie beschreiben statt erklären]
- **Follow-up wenn oberflächlich:** [Was als nächstes fragen wenn die Antwort Surface-Level ist]

### Qualitäts-Indikatoren

[Wie man tiefe Selbsterklärung von oberflächlichem Paraphrasieren unterscheidet — mit spezifischen Beispielen]

| Qualitäts-Ebene | Was es klingt wie | Beispiel | Was zu tun ist |
|---|---|---|---|
| Tief | [Charakteristiken] | [Beispiel-Antwort] | [Affirm und weiter] |
| Partial | [Charakteristiken] | [Beispiel-Antwort] | [Prompt für Ausarbeitung] |
| Oberflächlich | [Charakteristiken] | [Beispiel-Antwort] | [Redirect zum Reasoning] |

### Scaffolding-Sequenz

[Für SuS die Selbsterklärung schwierig finden: wie man von offenen Prompts zu zunehmend strukturierteren Scaffolds durchschreitet ohne die Antwort zu geben]

**Selbstcheck:** (a) Prompts elicieren Erklärung nicht Beschreibung, (b) Prompts sind an konzeptionell dichten Punkten, (c) Prompts erfordern Generierung nicht Recognition, (d) Material enthält genug Information um eine Erklärung zu konstruieren, (e) Qualitäts-Indikatoren unterscheiden tiefe von oberflächlichen Antworten.
```

## Beispielausgabe

**Szenario:** *Lernmaterial: „Ein gelöstes Beispiel zur Lösung quadratischer Gleichungen durch Ergänzen zum Quadrat: Schritt 1: x² + 6x + 2 = 0. Schritt 2: Umordnen zu x² + 6x = -2. Schritt 3: Beide Seiten + 9: x² + 6x + 9 = -2 + 9 = 7. Schritt 4: Linke Seite faktorisieren: (x + 3)² = 7. Schritt 5: Beide Seiten Wurzel nehmen: x + 3 = ±√7. Schritt 6: Lösen: x = -3 ± √7." / Zielverständnis: „Warum Ergänzen zum Quadrat funktioniert — spezifisch, verstehen dass (b/2)² die Zahl ist die x² + bx in ein Perfect Square Trinomial verwandelt, und warum diese Transformation nützlich ist"*

---

## Selbsterklärungs-Prompts: Ergänzen zum Quadrat

**Material:** Gelöstes Beispiel x² + 6x + 2 = 0 mittels Ergänzen zum Quadrat
**Zielverständnis:** Warum (b/2)² das Perfect Square Trinomial komplettiert — die algebraische Struktur, nicht nur das Verfahren
**Anzahl Prompts:** 3 — platziert an den drei high-value Punkten (Schritte 2, 3, und 5)

### Prompt-Platzierungs-Karte

Das gelöste Beispiel hat 6 Schritte. NICHT jeder Schritt braucht einen Prompt:
- **Schritt 1** (schreibe Gleichung): Routine — kein Prompt.
- **Schritt 2** (umordnen zu x² + 6x = -2): **PROMPT 1** — dieser Schritt macht eine nicht-offensichtliche Wahl (warum die 2 verschieben?) die die Strategie offenbart.
- **Schritt 3** (addiere 9 zu beiden Seiten): **PROMPT 2** — dies ist der KEY konzeptionelle Schritt und der häufigste Verwirrungs-Punkt. Woher kommt die 9?
- **Schritt 4** (faktorisiere zu (x + 3)² = 7): Kein Prompt — wenn die SuS Prompt 2 verstand, folgt dieser Schritt. Wenn nicht, hilft Prompting hier nicht.
- **Schritt 5** (Wurzel nehmen, ±√7): **PROMPT 3** — das ± ist konzeptionell wichtig und häufig missverstanden.
- **Schritt 6** (löse für x): Routine — kein Prompt.

### Selbsterklärungs-Prompts

**Prompt 1 — platziert bei: Schritt 2 (x² + 6x = -2)**
- **Prompt-Text:** „Wir haben die +2 auf die andere Seite verschoben. WARUM? Was versuchen wir auf der linken Seite der Gleichung zu haben, und warum hilft es, nur x² + 6x zu haben?"
- **Ziel-Erklärung:** „Wir wollen die linke Seite NUR die x-Begriffe (x² + 6x) sein sodass wir eine spezifische Zahl addieren können um sie zu einem Perfect Square zu machen. Die +2 würde im Weg sein weil x² + 6x + 2 NICHT ein Perfect Square ist. Wir müssen kontrollieren was addiert wird."
- **Warum hier:** Dieser Schritt scheint minor („einfach umordnen") aber es offenbart die STRATEGIE. Wenn SuS nicht versteht WARUM wir x² + 6x isolieren, ist der Rest der Methode ein Mysterium.
- **Häufige oberflächliche Antwort:** „Wir verschieben die 2 um x auf eine Seite zu bekommen" — dies beschreibt die Aktion ohne die Absicht zu erklären.
- **Follow-up wenn oberflächlich:** „Aber warum brauchen wir x² + 6x allein? Was wirst du MIT ihr machen das die Konstante weg sein erfordert?"

**Prompt 2 — platziert bei: Schritt 3 (x² + 6x + 9 = 7)**
- **Prompt-Text:** „Wir haben 9 zu beiden Seiten addiert. Erkläre: Woher kommt die Zahl 9? Warum spezifisch 9, und nicht 4 oder 16 oder eine andere Zahl?"
- **Ziel-Erklärung:** „Die 9 kommt von (6/2)² = 3² = 9. Wir nehmen den Koeffizient von x (das ist 6), halbieren es (3), und quadrieren es (9). Wir nutzen DIESE spezifische Zahl weil x² + 6x + 9 = (x + 3)² — es ist die Zahl die die linke Seite ein PERFECT SQUARE TRINOMIAL macht. Keine andere Zahl würde das machen."
- **Warum hier:** Dies ist die konzeptionelle Essenz der Methode. Die „Woher kommt 9?" Frage targets die häufigste Misskonzeption direkt. Wenn ein/e SuS diese erklären kann, versteht sie/er Ergänzen zum Quadrat.
- **Häufige oberflächliche Antwort:** „Weil es das Quadrat komplettiert" — dies ist zirkular (restaten die Methoden-Name ohne den Mechanismus zu erklären).
- **Follow-up wenn oberflächlich:** „Was bedeutet ‚Quadrat komplettieren' genau? Versuche: Expandiere (x + 3)². Was bekommst du? Jetzt schaue x² + 6x + 9. Bemerke etwas?"

**Prompt 3 — platziert bei: Schritt 5 (x + 3 = ±√7)**
- **Prompt-Text:** „Wir schreiben ±√7, nicht nur √7. Warum gibt es ZWEI Werte? Was würden wir missen wenn wir nur +√7 schreiben würden?"
- **Ziel-Erklärung:** „Weil beide (+√7)² und (-√7)² gleich 7 sind. Die Wurzel-Operation hat zwei Lösungen. Wenn wir nur die positive Wurzel nehmen, würden wir die zweite Lösung missen: x = -3 - √7. Algebraisch hat eine quadratische zwei Roots (die Parabel kreuzt die x-Achse in zwei Plätzen), also sollten wir zwei Antworten erwarten."
- **Warum hier:** Das ± ist eine konzeptionelle Stolperfalle — SuS vergessen regelmäßig es oder verstehen nicht warum es da ist. Dieser Prompt zwingt sie sich mit dem mathematischen Grund auseinanderzusetzen, nicht nur das Symbol zu memorisieren.
- **Häufige oberflächliche Antwort:** „Weil es ±" oder „weil das die Regel ist" — das Symbol restaten ohne das Reasoning zu erklären.
- **Follow-up wenn oberflächlich:** „Versuche ohne das ±. Wenn x + 3 = √7, was ist x? Jetzt check: löst dieser Wert die ursprüngliche Gleichung? Jetzt versuche x + 3 = -√7. Löst DIESER Wert auch die ursprüngliche Gleichung?"

### Qualitäts-Indikatoren

| Qualitäts-Ebene | Was es klingt wie | Beispiel | Was zu tun ist |
|---|---|---|---|
| Tief | Referenziert das mathematische PRINZIP — erklärt WARUM, verbindet zu Struktur, nutzt eigene Worte | „Wir addieren 9 weil (6/2)² = 9, und das ist was x² + 6x + 9 in ein Perfect Square faktorisieren macht. Wir brauchen ein Perfect Square sodass wir Wurzel von beiden Seiten nehmen können im nächsten Schritt." | Affirm: „Exakt richtig. Du hast das Schlüssel-Prinzip identifiziert." Weiter. |
| Partial | Korrekt aber unvollständig — stated Teil des Grundes ohne die vollständige Kette | „9 kommt von Halbieren 6 und Quadrieren." | Prompt für Ausarbeitung: „Gut — aber WARUM gibt Halbieren und Quadrieren die richtige Zahl? Was happens wenn du es zu x² + 6x addierst?" |
| Oberflächlich | Beschreibt die Aktion oder restatet das Verfahren ohne das Reasoning zu erklären | „Wir addieren 9 zu beiden Seiten um das Quadrat zu komplettieren." | Redirect: „Du hast beschrieben WAS wir taten, aber ich brauche WARUM. Woher kommt 9 spezifisch? Warum nicht 4 oder 16?" |

### Scaffolding-Sequenz

Für SuS die Selbsterklärung schwierig finden, bewege durch diese Ebenen:

**Ebene 1 — Offener Prompt (Standard):** „Erkläre warum wir 9 zu beiden Seiten addiert haben."

**Ebene 2 — Geleiteter Prompt:** „Schaue die Zahl vor x (sie ist 6). Versuche sie zu halbieren. Jetzt versuche zu quadrieren was du bekommst. Welche Zahl bekommst du? Matched das was addiert wurde?"

**Ebene 3 — Verifikations-Prompt:** „Versuche (x + 3)² zu expandieren. Was bekommst du? Jetzt vergleiche das mit x² + 6x + 9. Was bemerke ich?"

**Ebene 4 — Vervollständigungs-Prompt:** „Wir addieren (b/2)² weil x² + bx + (b/2)² = (x + b/2)². In diesem Fall, b = 6, also (b/2)² = ___. Und x² + 6x + ___ = (x + ___)². Fülle die Blanks."

Die Sequenz bewegt sich von maximale Generierung (Ebene 1) zu maximales Scaffolding (Ebene 4). Starte immer bei Ebene 1 — der Generierungs-Versuch, sogar wenn es fehlschlägt, produziert Lernen. Escaliere nur wenn die SuS genuinely stuck ist, nicht weil die Erklärung imperfekt ist.

---

## Bekannte Limitationen

1. **Selbsterklärungs-Prompts verlangsamen Study-Zeit.** Ein/e SuS die bei jedem Schritt selbst erklärt benötigt signifikant länger um Material durchzugehen als ein/e SuS die passiv liest. Dies ist eine WÜNSCHENSWERTE Schwierigkeit (Bjork, 1994) — die extra Zeit produziert tieferes Lernen — aber sie erzeugt praktische Probleme in Zeit-begrenzten Kontexten (Exam-Revision, Homework). LPs müssen bewusste Entscheidungen über wo Selbsterklärungs-Zeit investieren treffen.

2. **Die Qualität von Selbsterklärung ist schwer automatisch zu evaluieren.** Eine KI kann LÄNGE detektieren und die Präsenz von Schlüsselbegriffen, aber evaluieren ob eine Selbsterklärung genuinely tief ist erfordert konzeptionelles Verständnis. Heutige LLMs können dies approximieren, aber könnten sophisticated aber unconventionelle Erklärungen misklassifizieren.

3. **Selbsterklärung funktioniert best mit konzeptionell reichem Material.** Prozeduraler Inhalt mit minimalem konzeptionellem Tiefe (z.B. Spreadsheet-Formatting, regelmässige Verb-Konjugation) profitiert weniger von Selbsterklärungs-Prompts weil es weniger zu ERKLÄREN gibt. Selbsterklärung ist am mächtigsten wenn Material nicht-offensichtliche Reasoning, versteckte Verbindungen, oder Misskonzepte-Triggers enthält.

4. **SuS könnten Training in Selbsterklärung brauchen.** Chi et al. (1994) fand dass Prompting allein effektiv war, aber andere Studien suggerieren dass SuS von initialem Training in was gute Selbsterklärung aussieht profitieren. Die Scaffolding-Sequenz oben berücksichtigt das, aber in der ersten Session mit Selbsterklärungs-Prompts könnte die LP den Prozess explizit modellieren müssen.
