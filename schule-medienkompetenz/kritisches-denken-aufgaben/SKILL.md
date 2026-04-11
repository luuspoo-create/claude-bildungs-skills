---
# AGENT SKILLS STANDARD FIELDS (v2)
name: kritisches-denken-aufgaben
description: "Entwurf von Aufgaben zum kritischen Denken, die gezielt Kompetenzen wie Evidenzbewertung, Voreingenommenheitserkennung oder Argumentanalyse trainieren. Einsatz beim Einbau von kritischem Denken in Fachlektionen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-medienkompetenz/kritisches-denken-aufgaben"
skill_name: "Aufgabendesigner für kritisches Denken"
domain: "schule-medienkompetenz"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Paul & Elder (2008) — The Miniature Guide to Critical Thinking Concepts and Tools"
  - "Facione (1990) — Critical Thinking: a statement of expert consensus for purposes of educational assessment and instruction (Delphi report)"
  - "Willingham (2007) — Critical thinking: why is it so hard to teach?"
  - "Abrami et al. (2008) — Instructional interventions affecting critical thinking skills and dispositions: a meta-analysis"
  - "Ennis (1989) — Critical thinking and subject specificity: clarification and needed research"
input_schema:
  required:
    - field: "thema"
      type: "string"
      description: "Der Fachinhalt, in den die Aufgabe zum kritischen Denken eingebunden wird"
    - field: "sus_niveau"
      type: "string"
      description: "Jahrgangsstufe/Klasse und aktuelles Denkniveau"
    - field: "fokus_kritisches_denken"
      type: "string"
      description: "Die spezifische Kompetenz des kritischen Denkens — z.B. Evidenzbewertung, Annahmen identifizieren, Argumente analysieren, Perspektiven vergleichen, Voreingenommenheit erkennen"
  optional:
    - field: "fachgebiet"
      type: "string"
      description: "Der Fachbereich — kritisches Denken ist fachspezifisch"
    - field: "sus_profile"
      type: "array"
      description: "Aus Kontextmotor: vorherige Erfahrung mit kritischer Analyse, verbale Sicherheit"
    - field: "aufgabenformat"
      type: "string"
      description: "Bevorzugtes Format — schriftlich, diskussionsbasiert, visuell oder gemischt"
    - field: "verfuegbare_zeit"
      type: "string"
      description: "Verfügbare Zeit für die Aufgabe"
output_schema:
  type: "object"
  fields:
    - field: "aufgabe"
      type: "object"
      description: "Die Aufgabe zum kritischen Denken mit klaren Anweisungen, Stimulusmaterial und Leitfragen"
    - field: "kritisch_vs_oberflachlich"
      type: "object"
      description: "Kriterien, die kritische von oberflächlichen Antworten unterscheiden, mit Beispielen"
    - field: "lehrpersonen_prompts"
      type: "array"
      description: "Follow-up-Prompts, um oberflächliche Antworten zum kritischen Engagement zu führen"
    - field: "bewertungsindikatoren"
      type: "string"
      description: "Was man in Schülerantworten suchen sollte, das echtes kritisches Denken anzeigt"
chains_well_with:
  - "sokrates-fragenseq-generator"
  - "argument-struktur-scaffolds"
  - "quellenbewertung-protokoll"
  - "diskussions-protokoll-auswahl"
teacher_time: "4 minutes"
tags: ["kritisches-denken", "analyse", "bewertung", "fachspezifisch", "höhere-ordnung", "Lehrplan-21"]
---

# Aufgabendesigner für kritisches Denken

## Was diese Skill tut

Entwirft eine Aufgabe, die echte kritische Bewertung erfordert — nicht nur Verständnis oder Auswendiglernen, sondern Bewertung von Evidenz, Identifikation von Annahmen, Analyse konkurrierender Perspektiven oder Erkennung von Verzerrungen — eingebunden in spezifischen Fachinhalt. Entscheidend ist, dass die Ausgabe Kriterien zur Unterscheidung von kritischen von oberflächlichen Antworten (damit die LP den Unterschied erkennt) sowie Follow-up-Prompts enthält, die oberflächliche Antworten zu echter kritischer Auseinandersetzung führen. KI ist hier besonders wertvoll, weil die Konzeption von Aufgaben, die wirklich kritisches Denken erfordern (im Gegensatz zu Aufgaben, die so AUSSEHEN, als würden sie kritisches Denken erfordern, aber durch Auswendiglernen oder Meinung beantwortet werden können) einer der schwierigsten Aspekte des Bewertungsdesigns ist — viele als "kritisches Denken" bezeichnete Aufgaben testen tatsächlich nur Verständnis, Regelkonformität oder die Fähigkeit, eine unbegründete Meinung auszudrücken.

## Evidenzgrundlage

Paul & Elder (2008) definierten kritisches Denken als "die Kunst, Denken zu analysieren und zu bewerten, um es zu verbessern", wobei sie acht Denkelemente (Zweck, Frage, Information, Folgerung, Annahme, Konzept, Implikation, Sichtweise) und neun intellektuelle Standards (Klarheit, Genauigkeit, Präzision, Relevanz, Tiefe, Breite, Logik, Signifikanz, Fairness) identifizierten. Facione (1990) leitete das Delphi-Konsensprojekt und definierte kritisches Denken als sechs Kernkompetenzen: Interpretation, Analyse, Bewertung, Folgerung, Erklärung und Selbstregulation. Entscheidend zeigte Willingham (2007), dass kritisches Denken nicht als generische Fertigkeit unterrichtet werden kann — es ist fachspezifisch. Eine SuS, die historische Quellen kritisch bewerten kann, kann möglicherweise nicht wissenschaftliche Aussagen kritisch bewerten, weil kritisches Denken tiefes Fachwissen erfordert, um zu erkennen, was gute Evidenz, valides Schließen und plausible Alternativen in jedem Fachbereich ausmacht. Abrami et al. (2008) bestätigten dies in einer Metaanalyse: Unterricht in kritischem Denken ist am wirksamsten, wenn er in Fachinhalt eingebunden ist UND explizite Anweisung in Prinzipien des kritischen Denkens enthält (ein "gemischter" Ansatz, Effektstärke 0,94). Ennis (1989) argumentierte, dass kritisches Denken zwar allgemeine und fachspezifische Komponenten hat, aber effektiver Unterricht die fachspezifische Komponente adressieren muss — die Standards für Evidenz und Schließen innerhalb der Disziplin.

## Eingabeschema

Die Lehrperson muss bereitstellen:
- **Thema:** Der Fachinhalt. *z.B. "Ursachen der Französischen Revolution" / "Ob Kernenergie Fossile ersetzen sollte" / "Zuverlässigkeit verschiedener Arten von historischer Evidenz" / "Wie Shakespeare Macht in Macbeth darstellt"*
- **SuS-Niveau:** Jahrgangsstufe und aktuelles Denkniveau. *z.B. "8. Klasse, können Meinungen äußern, aber Schwierigkeiten, diese mit Evidenz zu stützen oder Gegenargumente zu berücksichtigen" / "7. Klasse, können einfache Argumente identifizieren, aber evaluieren deren Stärke nicht spontan"*
- **Fokus kritisches Denken:** Die spezifische CT-Kompetenz. *z.B. "Bewertung der Stärke von Evidenz" / "Identifikation von Annahmen" / "Vergleich zweier Interpretationen" / "Erkennung von Bias in einer Quelle" / "Unterscheidung von Korrelation und Kausalität"*

Optional (injiziert vom Kontextmotor, falls verfügbar):
- **Fachgebiet:** Der Fachkontext
- **SuS-Profile:** Vorherige Erfahrung mit kritischer Analyse, verbale Sicherheit
- **Aufgabenformat:** Schriftlich, Diskussion, visuell oder gemischt
- **Verfügbare Zeit:** Minuten für die Aufgabe

## Prompt

```
Du bist ein Experte für Pädagogik des kritischen Denkens mit tiefem Wissen von Paul & Elder (2008), Facione (1990), Willingham (2007), und Abrami et al. (2008). Du verstehst, dass kritisches Denken KEINE generische Fertigkeit ist, die isoliert unterrichtet werden kann — es muss in fachspezifischen Inhalt eingebunden werden, weil das, was gute Evidenz, valides Schließen und faire Bewertung ausmacht, je nach Fach unterschiedlich ist.

Deine Aufgabe ist es, eine Aufgabe zum kritischen Denken für folgendes zu entwerfen:

**Thema:** {{thema}}
**SuS-Niveau:** {{sus_niveau}}
**Fokus kritisches Denken:** {{fokus_kritisches_denken}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Verwende alles Verfügbare; ignoriere alle als "nicht bereitgestellt" gekennzeichneten Felder.

**Fachgebiet:** {{fachgebiet}} — falls nicht bereitgestellt, leite das wahrscheinlichste Fachgebiet aus dem Thema her und integriere kritisches Denken in die Standards für Evidenz und Schließen dieses Faches.
**SuS-Profile:** {{sus_profile}} — falls nicht bereitgestellt, entwirfe für eine gemischte Klasse, bei der die meisten SuS Meinungen äußern können, aber wenige spontan die Qualität ihres eigenen Denkens evaluieren.
**Aufgabenformat:** {{aufgabenformat}} — falls nicht bereitgestellt, entwirfe eine schriftliche Aufgabe mit Option für Diskussionserweiterung.
**Verfügbare Zeit:** {{verfuegbare_zeit}} — falls nicht bereitgestellt, entwirfe für etwa 20 Minuten.

Wende diese evidenzgestützten Prinzipien an:

1. **Fachspezifisch, nicht generisch (Willingham, 2007; Ennis, 1989):**
   - Die Aufgabe muss in spezifischen Fachinhalt eingebunden sein — nicht eine generische "Kritisches-Denken-Übung".
   - Das erforderliche kritische Denken sollte widerspiegeln, wie Experten in diesem Fach tatsächlich denken.
   - Die Aufgabe sollte Fachwissen erfordern — Fachwissen ist notwendig aber nicht ausreichend.

2. **Echte Bewertung erforderlich, nicht nur Meinung (Paul & Elder, 2008):**
   - Die Aufgabe muss SuS BEWERTUNG erfordern — nicht einfach eine Meinung äußern.
   - "Wie stark ist die Evidenz für X?" IST eine kritische Denkfrage (sie erfordert Bewertung).
   - Aufgaben sollten keine offensichtliche "richtige Antwort" haben.

3. **Kriterien zur Unterscheidung kritischer von oberflächlichen Antworten (Facione, 1990):**
   - Gib klare Beispiele für oberflächliche Antworten vs. kritische Antworten für DIESE spezifische Aufgabe.
   - Oberflächliche Antworten tendieren dazu: die Frage umzuformulieren, unbegründete Meinung auszudrücken, zu beschreiben statt zu evaluieren.
   - Kritische Antworten tendieren dazu: die Qualität von Evidenz zu bewerten, Annahmen zu identifizieren, Komplexität zu würdigen.

4. **Follow-up-Prompts zur Tiefensteigerung (Abrami et al., 2008):**
   - Die meisten SuS werden anfangs oberflächliche Antworten produzieren. Die Follow-up-Prompts sollten sie tiefer führen.
   - Diese Prompts sind wirksamer als einfaches Markieren der Antwort als "nicht tiefgehend genug".

5. **Der "gemischte" Ansatz (Abrami et al., 2008):**
   - Mache die kritische Denkfertigkeit EXPLIZIT — erzähle SuS, was sie trainieren und warum.
   - Unterrichte den Denkprozess, den die Aufgabe erfordert.

Gib deine Ausgabe in diesem exakten Format zurück:

## Aufgabe zum kritischen Denken: [Thema]

**Für:** [SuS-Niveau]
**Fachbereich:** [Disziplin]
**CT-Fokus:** [Kritisches Denkens skill]
**Zeit:** [Minuten]

### Die Aufgabe

**Explizite CT-Rahmung:** [1–2 Sätze, die SuS sagen, welche kritische Denk-Kompetenz sie trainieren und was sie bedeutet]

**Stimulusmaterial:** [Der Text, die Daten, das Szenario oder die Quelle, mit der SuS arbeiten]

**Aufgabenanweisungen:** [Klare Anweisungen, die Bewertung, nicht nur Meinung erfordern]

**Leitfragen:** [Scaffoldierte Fragen, die den kritischen Denkprozess strukturieren]

### Kritisch vs. Oberflächliche Antwort-Anleitung

**Eine oberflächliche Antwort sieht so aus:**
[Spezifisches Beispiel einer oberflächlichen Antwort zu DIESER Aufgabe]

**Eine kritische Antwort sieht so aus:**
[Spezifisches Beispiel einer kritischen Antwort zu DIESER Aufgabe]

**Der Schlüsselunterschied:** [Was oberflächlich von kritisch trennt]

### Lehrpersonen-Follow-up-Prompts

[5–6 Prompts, die zum Denken tiefer führen]

### Bewertungsindikatoren

[Worauf zu achten ist, das echtes kritisches Denken anzeigt — spezifische, beobachtbare Features]

**Selbstkontrolle vor der Rückgabe:** Verifiziere dass (a) die Aufgabe in fachspezifischem Inhalt eingebunden ist, nicht generisch, (b) die Aufgabe echte Bewertung erfordert, nicht nur Meinung oder Auswendiglernen, (c) die Beispiele für oberflächliche vs. kritische Antworten spezifisch und deutlich unterschiedlich sind, (d) Follow-up-Prompts zum kritischen Denken führen ohne die Antwort zu geben, (e) Fachwissen ist notwendig aber nicht ausreichend, und (f) die Aufgabe hat keine offensichtliche "richtige Antwort", die Raten des LP-Vorgehens belohnt statt Denken.
```

## Beispielausgabe

**Szenario:** *Thema: "Ob der Einsatz von Pestiziden beim Obstanbau gerechtfertigt ist" / SuS-Niveau: "9. Klasse, können starke Meinungen äußern, tendieren aber dazu, aus Emotion statt Evidenz zu argumentieren" / Fokus kritisches Denken: "Bewertung der Stärke konkurrierender Argumente" / Fachgebiet: "Biologie"*

---

## Aufgabe zum kritischen Denken: Pestizide beim Obstanbau

**Für:** 9. Klasse Biologie
**Fachbereich:** Biologie / Agrarwissenschaft
**CT-Fokus:** Bewertung der Stärke konkurrierender Argumente — Evidenz für und gegen ein sachliches Urteil abwägen
**Zeit:** 25 Minuten

### Die Aufgabe

**Explizite CT-Rahmung:**
"Heute trainieren wir eine spezifische Kompetenz des kritischen Denkens: die Stärke von Argumenten BEWERTUNG, nicht nur Zustimmung oder Ablehnung. Das bedeutet, die Evidenz zu untersuchen, die jede Seite nutzt, und zu fragen: Wie zuverlässig ist diese Evidenz? Wie relevant? Unterstützt sie tatsächlich die Konklusion? Starke kritische Denker können erklären, warum ein Argument schwach ist, auch wenn sie der Konklusion zustimmen, und warum ein Argument stark ist, auch wenn sie anderer Meinung sind."

**Stimulusmaterial:**

Gib SuS zwei kurze Argumenttexte (je ca. 150–200 Wörter):

**Argument A — "Pestizide sind notwendig":**
"Moderne Obstkulturen müssen hohe Erntemengen liefern, um die Nahrungsmittelproduktion zu sichern. Ohne Pestizide würden wir etwa 30–40% der Ernte durch Schädlinge verlieren. Das würde zu Nahrungsmittelknappheit und steigenden Preisen führen, besonders für Familien mit niedrigem Einkommen. Schweizer Obstanbau konkurriert international — ohne Pestizide könnten Schweizer Bauern nicht nachhaltig wirtschaften. Zudem sind moderne Pestizide streng reguliert und in zulässigen Mengen sicher für Verbraucher. Die Alternative — ohne Pestizide — hätte größere Konsequenzen für die Welternährung als der kontrollierte Einsatz."

**Argument B — "Pestizide sind nicht gerechtfertigt":**
"Langfristige Studien zeigen, dass Pestizide Bodenfruchtbarkeit reduzieren, Insektenbestände (einschließlich Bestäuber) dezimieren und Wasserreserven kontaminieren. Tausende von Bauern in Europa und der Schweiz praktizieren organischen Obstanbau erfolgreich ohne Ertragsverluste. Pestizide wurden ursprünglich als sicher eingestuft, dann später als gesundheitsschädlich erkannt — nicht alle Langzeiteffekte sind bekannt. Die Agroindustrie hat Anreize, Pestizide zu promoten, was die verfügbare Forschung beeinflusst. Ein Übergang zu biologischem Anbau würde anfangs Übergangsschwierigkeiten haben, aber würde langfristig Ökosysteme schützen und nachhaltige Produktion sichern."

**Aufgabenanweisungen:**

"Schreib NICHT über, ob DU denkst, dass Pestizide gerechtfertigt sind. Evaluiere stattdessen die ARGUMENTE.

Für JEDES Argument (A und B):
1. Welches ist das stärkste Stück Evidenz? Warum ist es stark?
2. Welches ist die schwächste Evidenz oder Schließung? Warum ist es schwach?
3. Was nimmt DIESES Argument an, ohne es zu beweisen?
4. Was würde DIESES Argument ÜBERZEUGENDER machen?

Dann: Welches Argument ist besser UNTERSTÜTZT durch seine Evidenz — unabhängig davon, ob du der Konklusion zustimmst? Erkläre dein Denken."

**Leitfragen:**
- "Argument A: Der Ertragsverlust ohne Pestizide wird auf '30–40%' geschätzt. Was sagt diese Schätzung dir über die Zuverlässigkeit dieser Evidenz?"
- "Argument B: Das Argument behauptet, dass 'Tausende von Bauern organisch erfolgreich sind.' Welche Evidenz wird für diesen Erfolg gegeben? Ist sie ausreichend?"
- "Beide Argumente sprechen von Konsequenzen. Welches Argument verwendet verifizierbare Fakten? Welches basiert mehr auf Extrapolation?"
- "Welche Information brauchst du, die KEIN Argument dir gibt, um ein stärkeres Urteil zu treffen?"

### Kritisch vs. Oberflächliche Antwort-Anleitung

**Eine oberflächliche Antwort sieht so aus:**
"Argument A ist stärker, weil es einen guten Punkt macht, dass wir Pestizide brauchen, um genug Essen anzubauen. Pestizide sind notwendig. Argument B ist schwächer, weil es versucht, Landwirtschaft zum Bösen zu machen, indem es von Giftstoffen spricht."

*Warum das oberflächlich ist:* Die SuS hat eine MEINUNG zum Thema ausgedrückt, nicht evaluiert die Argumente. Sie hat mit A einverstanden und mit B nicht einverstanden, aber evaluiert nicht wirklich die Qualität der Evidenz. Es gibt keine Analyse von Annahmen, Zuverlässigkeit oder Ausreichendheit.

**Eine kritische Antwort sieht so aus:**
"Argument A's stärkste Evidenz ist die 30–40% Ertragsverlustschätzung — das sind real beobachtete Zahlen, die vorschlagen, dass Pestizide wirklich einen großen Effekt haben. Aber sein schwächster Punkt ist, dass die Notwendigkeit 'kontrollierter Einsatz' bedeutet — das Argument definiert nicht, was 'kontrolliert' bedeutet. Ist die gegenwärtige Regulierung ausreichend?

Argument B's stärkste Evidenz ist die Behauptung, dass biologischer Anbau in anderen Ländern erfolgreich ist — wenn das verifizierbar ist, untergräbt das Argument A's Behauptung, dass Pestizide 'notwendig' sind. Aber die Aussage 'Tausende von Bauern' ist vage — welche Länder? Wie groß sind diese Farmen?

Beide Argumente nutzen Extrapolation: A extrapoliert von Schädlingsverlusten auf 'die Welternährung wird sich verschlechtern.' B extrapoliert von Langzeiteffekten auf 'der Übergang wird möglich sein.' Beide Extrapolationen sind spekulativ.

Argument A stützt sich auf etablierte Wirkung (Pestizide reduzieren Schädlingsschäden) basierend auf Ertragsdaten. Argument B stützt sich auf alternative Systeme und Umweltsorgen. Argument A ist kurzfristig stärker, aber Argument B hat den wichtigeren Punkt — die Nachhaltigkeit."

*Warum das kritisch ist:* Die SuS evaluiert jedes Argument auf seinen eigenen Bedingungen, nicht auf Basis von Zustimmung/Ablehnung. Sie identifiziert spezifische Stärken und Schwächen, beurteilt die Zuverlässigkeit von Evidenz, und erreicht ein nuanciertes Urteil. Sie nimmt keine Position zur Pestizidnutzung ein — sie nimmt eine Position zur QUALITÄT DER ARGUMENTE.

**Der Schlüsselunterschied:** Eine oberflächliche Antwort evaluiert Konklusionen. Eine kritische Antwort evaluiert Evidenz und Schließung. Der klarste Indikator ist, ob die SuS eine Schwäche in einem Argument identifizieren kann, dem sie zustimmt, und eine Stärke in einem, dem sie nicht zustimmt.

### Lehrpersonen-Follow-up-Prompts

Nutze diese, wenn SuS oberflächliche Antworten produzieren:

1. **Wenn SuS Meinung statt Bewertung äußert:** "Ich sehe, du stimmst Argument A zu. Aber leg das zur Seite — stell dir vor, du bist nicht einverstanden. Welches ist das SCHWÄCHSTE Teil von Argument A's EVIDENZ? Kannst du ein Problem darin finden, auch wenn du der Konklusion zustimmst?"

2. **Wenn SuS ein Argument ablehnt, weil sie die Konklusion nicht mögen:** "Du sagtest, Argument B ist schwach. Aber schau auf die Behauptung, dass biologischer Anbau erfolgreich ist — wenn das wahr ist, was macht das mit Argument A's Behauptung, dass Pestizide notwendig sind? Kannst du die EVIDENZ separat von der Konklusion evaluieren?"

3. **Wenn SuS Evidenz listet ohne sie zu evaluieren:** "Du identifiziertest Evidenz von Argument A. Aber sind sie alle gleich stark? Welches ist am ZUVERLÄSSIGSTEN — welches könntest du verifizieren? Und welches ist am meisten SPEKULATIV?"

4. **Wenn SuS Annahmen nicht identifizieren:** "Beide Argumente machen Annahmen, die sie nicht beweisen. Argument A nimmt an, dass nur zwei Optionen existieren: mit Pestiziden oder Ertragsverlust. Welche anderen Optionen könnten existieren? Wenn diese realistisch wären, wie würde das Argument A beeinflussen?"

5. **Wenn SuS ein Urteil ohne Begründung geben:** "Du sagtest Argument A ist stärker. Überzeuge mich. Zeige mir ein BESTIMMTES Stück Evidenz in A, das zuverlässiger oder relevanter ist als entsprechende Evidenz in B."

6. **Wenn SuS Komplexität vermeiden:** "Du hast einen Gewinner ausgewählt. Aber lass mich dich drücken — was ist der EINE stärkste Punkt, den das verlierernde Argument macht? Wenn das gewinnnde Argument darauf antworten müsste, was würden sie sagen? Können sie?"

### Bewertungsindikatoren

Schau auf diese spezifischen Features in SuS-Antworten:

| Indikator | Wie es aussieht | CT-Fertigkeit |
|-----------|-----------------|----------------|
| **Evidenzbewertung** | SuS kommentiert die ZUVERLÄSSIGKEIT oder VERIFIZIBARKEIT spezifischer Evidenz | Analyse |
| **Identifikation von Annahmen** | SuS nennt etwas, das ein Argument annimmt ohne zu beweisen | Folgerung |
| **Trennung von Evidenz und Konklusion** | SuS identifiziert eine Schwäche in einem Argument, dem sie zustimmt, oder eine Stärke in einem, dem sie nicht zustimmt | Bewertung |
| **Qualifiziertes Urteil** | SuS nutzt hedging-Sprache: "möglicherweise," "im Allgemeinen," "überzeugender aber nicht endgültig" | Selbstregulation |
| **Fehlende Information identifizieren** | SuS fragt "Was müssten wir wissen?" statt Argumente anzunehmen | Analyse |
| **Gegenfaktisches Denken** | SuS betrachtet "Was wenn X anders wäre?" | Folgerung |

**Wenn eine SuS KEINE zeigt:** Wahrscheinlich operiert sie auf Meinung-/Rückruf-Level. Nutze die Follow-up-Prompts.

**Wenn eine SuS 2–3 zeigt:** Sie engagiert sich in kritischem Denken mit Scaffolding. Die Prompts können graduell entfernt werden.

**Wenn eine SuS 4+ zeigt:** Sie denkt kritisch und unabhängig. Challenge sie: "Schreib jetzt ein DRITTES Argument, das stärker ist als beide — welche Evidenz würde es nutzen?"

---

## Bekannte Limitierungen

1. **Kritisches Denken ist fachspezifisch (Willingham, 2007).** Eine SuS, die historische Argumente kritisch evaluieren kann, kann möglicherweise nicht wissenschaftliche Aussagen kritisch evaluieren, weil die Standards für Evidenz unterschiedlich sind. Diese Aufgabe entwickelt kritisches Denken INNERHALB des spezifizierten Fachbereichs. LP sollten explizit lehren, wie Prinzipien des kritischen Denkens in ihrem spezifischen Fachbereich gelten.

2. **Die Aufgabe erfordert ausreichend Fachwissen.** Eine SuS, die nichts über den Obstanbau weiß, kann Argumente darüber nicht kritisch evaluieren, egal wie stark ihre allgemeinen Denkfähigkeiten sind. Aufgaben zum kritischen Denken müssen am richtigen Punkt im Unterricht gestellt werden — nachdem SuS genug Wissen haben, um zu evaluieren, nicht davor.

3. **SuS können "kritisch sein" mit "negativ sein" verwechseln.** Kritisches Denken bedeutet, die Qualität von Schließung zu evaluieren — es bedeutet nicht, anzugreifen oder abzulehnen. Manche SuS werden alles kritisieren ohne etwas zu evaluieren. Die oberflächlich vs. kritisch Antwort-Anleitung hilft LP, dieses Muster zu identifizieren, aber es erfordert fortlaufendes Modellieren, wie echte kritische Bewertung aussieht: fair, evidenzgestützt, und bereit, Stärke in gegensätzlichen Positionen anzuerkennen.
