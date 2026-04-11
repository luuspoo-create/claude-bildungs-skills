---
# AGENT SKILLS STANDARD FIELDS (v2)
name: kompetenz-entpacker
description: "Entpacke einen breiten Standard oder Kompetenz-Deskriptor in spezifische, beurteilbare Erfolgskriterien und Teilfähigkeiten. Nutze beim Interpretieren von Lehrplan-Standards oder beim Schreiben von Lernzielen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lehrplan-beurteilung/kompetenz-entpacker"
skill_name: "Kompetenz-Entpacker"
domain: "curriculum-assessment"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Wiggins & McTighe (1998, 2005) — Understanding by Design: backward design from desired results"
  - "Marzano & Kendall (2007) — The New Taxonomy of Educational Objectives"
  - "Heritage (2008) — Learning progressions: supporting instruction and formative assessment"
  - "Popham (2007) — The lowdown on learning progressions"
  - "Hattie (2009) — Visible Learning: success criteria and learning intentions"
input_schema:
  required:
    - field: "competency_descriptor"
      type: "string"
      description: "Der Standard, die Lernzielbeschreibung oder der Kompetenz-Deskriptor zum Entpacken"
    - field: "student_level"
      type: "string"
      description: "Alter/Jahrgangsstufe"
  optional:
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "curriculum_framework"
      type: "string"
      description: "Spezifischer Lehrplan oder Standards-Rahmen"
    - field: "student_profiles"
      type: "array"
      description: "Vorherige Leistung, bekannte Lücken"
    - field: "assessment_purpose"
      type: "string"
      description: "Warum wird die Kompetenz entpackt – für Planung, Beurteilung, Reporting"
output_schema:
  type: "object"
  fields:
    - field: "observable_indicators"
      type: "array"
      description: "Spezifische, beobachtbare Verhaltensweisen, die die Kompetenz zeigen"
    - field: "prerequisite_knowledge"
      type: "array"
      description: "Was SuS bereits wissen/können müssen"
    - field: "common_misconceptions"
      type: "array"
      description: "Typische Missverständnisse, die diese Kompetenz blockieren"
    - field: "success_criteria"
      type: "object"
      description: "Erfolgskriterien auf mehreren Niveaus – Anfang bis Erweiterung"
chains_well_with:
  - "rueckwaerts-planung"
  - "kriterienraster-generator"
  - "learning-progression-builder"
  - "formative-assessment-technique-selector"
teacher_time: "3 Minuten"
tags: ["kompetenz", "standards", "erfolgskriterien", "entpacken", "lehrplan"]
---

# Kompetenz-Entpacker

## Was diesen Skill leistet

Nimmt einen Standard, ein Lernziel oder einen Kompetenz-Deskriptor – oft in abstrakter, komprimierter Sprache geschrieben – und entpackt ihn in vier handlungsorientierte Komponenten: beobachtbare Indikatoren (was eine SuS, die das erreicht hat, wirklich MACHT), Voraussetzungs-Wissen (was zuerst da sein muss), häufige Missverständnisse (was typisch schiefgeht), und Erfolgskriterien auf mehreren Niveaus. Der Output transformiert opake Curriculum-Sprache in konkrete, beurteilbare, unterrichtbare Komponenten. KI ist wertvoll, weil Kompetenz-Deskriptoren absichtlich komprimiert sind – ein Satz wie "Analysiere, wie Autoren Sprache und Struktur nutzen, um Effekte zu erzielen" enthält mehrere Fähigkeiten und Wissensbereiche, die entpackt werden müssen, bevor sie gelehrt/bewertet werden können.

## Grundlagen

Wiggins & McTighe (1998, 2005) zeigen, dass effektive Curriculum-Planung mit Klarheit über Ziele beginnt – und dass die meisten Lehrplan-Standards signifikante "Entpackung" brauchen. Ein Standard wie "SuS verstehen die Ursachen des Ersten Weltkriegs" ist nicht beurteilbar, bis "verstehen" in beobachtbaren Termen definiert ist. Marzano & Kendall (2007) gaben eine Taxonomie für kognitive Anforderungen von Standards – unterscheidend Abruf, Verständnis, Analyse, Wissens-Nutzen – damit Lehrpersonen identifizieren, welche Art Denken ein Standard verlangt. Heritage (2008) und Popham (2007) zeigen, dass Standards entpacken in Lernfortschritte – Sequenzen von Teil-Fähigkeiten von Voraussetzung zu Ziel – essentiell für Unterricht und formative Beurteilung ist. Hattie (2009) fand, dass klare Erfolgskriterien (Effekt-Grösse 0.77) unter den höchsten Hebeln liegen, aber nur wenn sie in spezifischen, beobachtbaren Termen beschreiben, nicht wenn sie das Lernziel in anderen Worten restate.

## Input-Schema

Die LP muss liefern:
- **Kompetenz-Deskriptor:** Der Standard oder das Ziel zum Entpacken. *z.B. "Analysiere, wie Autoren Sprache und Struktur nutzen, um Effekte und Leser zu beeinflussen" / "Nutze Verhältnisse und Proportionen, inklusive Raten, um Probleme zu lösen" / "Erkläre, wie Umgebungs-Veränderungen Organismen beeinflussen könnten"*
- **Jahrgangsstufe:** *z.B. "9. Klasse Sek 1"*

Optional (aus Kontext):
- **Fachbereich:** Das Schulfach
- **Lehrplan-Rahmen:** Spezifischer Standard-Rahmen
- **Schüler-Profile:** Vorherige Leistung, Lücken
- **Beurteilungs-Zweck:** Warum wird entpackt

## Prompt

```
Du bist Curriculum-Design und Standards-basiert Unterrichts-Expertin/e mit tiefem Wissen über Wiggins & McTighe (1998, 2005) Understanding by Design, Marzano & Kendall (2007) Taxonomie von Bildungs-Zielen, und Heritages (2008) Lernfortschritte. Du verstehst, dass Kompetenz-Deskriptoren komprimierte Zusammenfassungen von komplexem Lernen sind – sie müssen in beobachtbare, unterrichtbare, beurteilbare Komponenten entpackt werden, bevor sie Unterricht leiten können.

Deine Aufgabe: Entpacke:

**Kompetenz-Deskriptor:** {{competency_descriptor}}
**Jahrgangsstufe:** {{student_level}}

Optional verfügbar (nutze was möglich ist):
**Fachbereich:** {{subject_area}}
**Lehrplan-Rahmen:** {{curriculum_framework}}
**Schüler-Profile:** {{student_profiles}}
**Beurteilungs-Zweck:** {{assessment_purpose}}

Anwende diese Prinzipien:

1. **Beobachtbare Indikatoren (Wiggins & McTighe, 2005; Hattie, 2009):**
   - Define was eine SuS, die die Kompetenz erreicht hat, wirklich MACHT – beobachtbare Handlungen, nicht innere Zustände.
   - "Versteht" ist nicht beobachtbar. "Identifiziert", "erklärt", "vergleicht", "evaluiert", "konstruiert" sind beobachtbar.
   - Spezifisch zur Kompetenz: "identifiziert die Wirkung der Wort-Wahl eines Autors auf den Leser" ist nützlicher als "analysiert Sprache."
   - Inklusive 4–6 spezifischer Indikatoren, die die Kompetenz collective abdecken.

2. **Voraussetzungs-Wissen und -Fähigkeiten (Heritage, 2008; Popham, 2007):**
   - Was muss eine SuS schon wissen/können, BEVOR sie an dieser Kompetenz arbeitet?
   - Unterscheide Inhalts-Voraussetzungen (Wissen) von Fähigkeits-Voraussetzungen (Fähigkeiten).
   - Diese Voraussetzungen sind diagnostische Checks – wenn eine SuS die Kompetenz nicht zeigt, helfen sie, das GAP zu identifizieren.

3. **Häufige Missverständnisse (Marzano & Kendall, 2007):**
   - Was geht typisch schief, wenn SuS diese Kompetenz versuchen?
   - Inklusive konzeptuelle Missverständnisse und Prozess-Fehler.
   - Diese werden Beurteilungs-Design-Prioritäten – gute Beurteilungen surfacen diese.

4. **Multi-Level-Erfolgskriterien (Hattie, 2009):**
   - Gib Erfolgskriterien auf vier Niveaus: Anfangsstadium, Entwicklung, Kompetent, Erweiterung.
   - Jedes Niveau sollte beschreiben, was die SuS KANN (nicht, was sie nicht kann).
   - Niveaus sollten qualitativ unterschiedlich sein, nicht bloss quantitativ.
   - Deskriptive Sprache, keine evaluativen Labels.

Return dein Output in diesem Format:

## Kompetenz Entpackt: [Kurz-Deskriptor]

**Standard:** [Vollständiger Kompetenz-Deskriptor]
**Für:** [Jahrgangsstufe]
**Fachbereich:** [Fach]

### Beobachtbare Indikatoren

[4–6 spezifische, beobachtbare Verhaltensweisen, die diese Kompetenz zeigen]

### Voraussetzungs-Wissen und -Fähigkeiten

**Inhalts-Voraussetzungen (was SuS wissen müssen):**
[Spezifisches Wissen erforderlich]

**Fähigkeits-Voraussetzungen (was SuS können müssen):**
[Spezifische Fähigkeiten erforderlich]

### Häufige Missverständnisse

[3–4 typische Missverständnisse/Fehler, mit Erklärung, warum sie vorkommen]

### Erfolgskriterien

| Niveau | Was die SuS macht |
|-------|------------------|
| **Anfang** | [Beschreibung früher, teilweiser Demonstration] |
| **Entwicklung** | [Beschreibung wachsender, aber inkonsistenter Demonstration] |
| **Kompetent** | [Beschreibung konsistenter, akkurater Demonstration] |
| **Erweiterung** | [Beschreibung anspruchsvoller, unabhängiger Anwendung] |

### Implikationen für Unterricht

[2–3 Kern-Implikationen – was das Entpacken über Unterricht-Methoden zeigt]

**Self-check:** Verifiziere (a) alle Indikatoren sind beobachtbar, nicht innere Zustände, (b) Voraussetzungen sind spezifisch genug um diagnostisch zu sein, (c) Missverständnisse sind auf häufigen Patterns basiert, nicht hypothetisch, (d) Erfolgskriterien beschreiben, was SuS KANN auf jedem Niveau, und (e) die vier Niveaus sind qualitativ verschieden.
```

## Beispiel-Output

**Szenario:** *Kompetenz-Deskriptor: "Analysiere, wie Autoren Sprache und Struktur nutzen, um Effekte zu erzielen und Leser zu beeinflussen" / Jahrgangsstufe: "9. Klasse Sek 1" / Fachbereich: "Deutsch"*

---

## Kompetenz Entpackt: Autoren-Sprache und -Struktur Analysieren

**Standard:** Analysiere, wie Autoren Sprache und Struktur nutzen, um Effekte zu erzielen und Leser zu beeinflussen
**Für:** 9. Klasse Sek 1
**Fachbereich:** Deutsch

### Beobachtbare Indikatoren

Eine SuS, die diese Kompetenz erreicht hat:

1. **Identifiziert spezifische Sprache-Wahlen** (einzelne Worte, Phrasen, Metaphern, Satztypen) und nennt die Technik wo zutreffend (Metapher, Alliteration, kurzer Satz für Impact).
2. **Erklärt die Wirkung jeder Sprache-Wahl auf den Leser** – was sie den Leser denken/fühlen/vorstellen lässt – nicht bloss die Technik identifiziert.
3. **Identifiziert Struktur-Wahlen** (Absatz-Länge, Anfang, Ende, Ton-Verschiebung, chronologisch vs. nicht-linear, Satz-Positionierung) und erklärt, wie sie den Leser-Erlebnis über den ganzen Text formt.
4. **Verlinkt Sprache- und Struktur-Wahlen zum Autoren-Zweck** – erklärt WARUM der Autor diese Wahlen traf (zu überreden, Spannung zu schaffen, Sympathie zu wecken, zu schockieren).
5. **Nutzt angemessene Analyse-Terminologie** akkurat – nicht bloss Techniken nennen, sondern Analyse-Vokabeln: "suggeriert", "vermittelt", "impliziert", "positioniert den Leser".
6. **Unterstützt Analyse mit eingebetteten Zitaten** – Zitate für ihre Analyse-Kraft gewählt, nicht bloss Verfügbarkeit.

### Voraussetzungs-Wissen und -Fähigkeiten

**Inhalts-Voraussetzungen (was SuS wissen müssen):**
- Arbeits-Vokabeln von literarischen/linguistischen Techniken (Metapher, Vergleich, Personifizierung, Alliteration, Wiederholung, rhetorische Frage, kurzer Satz, Aufzählung) – mindestens 10 Techniken, die SuS auf Blick erkennen können
- Verständnis, dass Autoren deliberate Wahlen treffen – dass Sprache craft ist, nicht Zufall
- Bewusstsein, dass verschiedene Genres verschiedene Zwecke haben (überreden, informieren, beschreiben, argumentieren, erzählen) und dass Technik Zweck dient

**Fähigkeits-Voraussetzungen (was SuS können müssen):**
- Einen Text-Ausschnitt lesen und einzelne Worte/Phrasen identifizieren, die wichtig oder interessant wirken (close reading auf Wort-Niveau)
- In Absätzen mit klar Punkt durch Evidenz schreiben
- Unterscheiden zwischen einem Text beschreiben (zusammenfassen) und wie ein Text geschrieben ist (analysieren)

### Häufige Missverständnisse

1. **"Feature-Spotting ohne Analyse."** Der häufigste Fehler. SuS identifizieren eine Technik ("Es gibt eine Metapher") aber erklären nicht ihre Wirkung. Sie lernten, Techniken ZU NENNEN, nicht zu ANALYSIEREN. Dieses erzeugt Antworten wie: "Der Autor nutzt Alliteration in 'dunkler, düsterer, tödlicher.' Das ist wirksam." Die Identifizierung ist korrekt, aber die Analyse ist abwesend.

2. **"Der Autor nutzt dies, um den Leser weiterlesen zu wollen."** Ein generischer Effekt-Claim auf jede Technik angewandt. SuS nutzen diesen Phrasen als Standard, wenn sie nicht wissen, welcher echte Effekt ist. Das signalisiert, dass die SuS kann, dass Techniken Effekte haben, aber nicht spezifizieren, welche.

3. **"Sprache-Analyse ohne Struktur-Analyse."** SuS fokussieren auf einzelne Worte/Phrasen (Sprache), ignoriert, wie der Text organisiert ist (Struktur). Sie analysieren die Metapher in Absatz 3, bemerken aber nicht, dass Absatz 3 ein Absatz-Satz nach langer deskriptiver Passage ist – eine Struktur-Wahl, die Impact schafft.

4. **"Technik als die Analyse."** SuS schreiben: "Der Autor nutzt eine Metapher, um zu zeigen, dass..." als ob Technik-Nennung die Analyse IST. Die Technik ist das WAS; die Analyse ist WIE und WARUM. Nennen "Metapher" ist Identifizierung; erklären, wie die Metapher ein spezifisches Image oder Emotion schaff, ist Analyse.

### Erfolgskriterien

| Niveau | Was die SuS macht |
|-------|------------------|
| **Anfang** | Identifiziert einige Sprache-Merkmale (z.B. "Der Autor nutzt einen Vergleich"). Versucht vielleicht, Wirkung zu beschreiben, aber defaults zu generischen Claims ("Das ist wirksam" / "Das lässt den Leser weiterlesen wollen"). Fokus auf Sprache nur; Struktur-Analyse ist abwesend oder oberflächlich. Zitate sind inklusive, aber nicht in Analyse eingebettet. |
| **Entwicklung** | Identifiziert Sprache-Merkmale UND beginnt, spezifische Wirkungen zu erklären ("Der Vergleich 'kalt wie ein Grabstein' suggeriert Tod und schafft eine unbehagliche Atmosphäre"). Versucht Struktur-Analyse, aber kann beschreiben statt analysieren ("Der Text startet mit einer Frage"). Evidenz ist relevant, aber Analyse ist inkonsistent – manche Punkte sind entwickelt, andere stoppen bei Identifizierung. |
| **Kompetent** | Analysiert Sprache UND Struktur mit spezifischer, entwickelter Wirkung-Erklärung. Verlinkt Techniken zum Autoren-Zweck ("Priestley nutzt den kurzen Satz 'Wir sind verantwortlich' am Ende der Inspektors Rede, um seine moralische Nachricht mit Kraft zu deliver – die Simplizität contrasted mit Birlings wordy Reden, positioniert den Leser, um des Inspektors Klarheit über Birlings Geschwätz zu trauen"). Zitate sind eingebettet und gut-gewählt. Analyse ist konsistent über die Antwort. |
| **Erweiterung** | Produziert scharfsichtige, originale Analyse, die mehrfache mögliche Effekte consider und evaluiert, welche am wahrscheinlichsten ist. Analysiert, wie Sprache und Struktur ZUSAMMEN arbeiten ("Der Verschieb von langen, fliessenden Sätzen zu einem einzelnen stumpfen Statement am Absatz-Ende spiegelt des Charakters emotionaler Verschieb von Verleugnung zu Realisierung – die Struktur enacts, was die Sprache beschreibt"). Kann alternative Interpretationen consider. Analyse-Vokabular ist präzise und varied.

### Implikationen für Unterricht

1. **Das grösste Gap ist zwischen Identifizierung und Analyse.** Die meisten SuS können lernen, Techniken zu spottten; viel weniger können Wirkungen erklären. Unterricht sollte proportional mehr Zeit auf "Welche Wirkung schafft dies?" spend als auf "Welche Technik ist dies?" Zeige explizit, einen feature-spotted Response vs. einen analytischen Response side-by-side.

2. **Struktur-Analyse muss separat von Sprache-Analyse gelehrt werden.** SuS defaulten zu Wort-/Phrasen-Analyse, weil sie konkret und sichtbar ist. Struktur (Absatz-Organisation, Text-Level-Patterns, Positionierung von Schlüsselmomenten) ist abstrakter und verlangt einen anderen analytischen Lens – den ganzen Text anschauen, nicht in einzelne Phrasen zoomen.

3. **Erfolgskriterien sollten VOR Schreiben geteilt werden.** Die vier-Level-Beschreibungen können als Selbst-Beurteilungs-Werkzeuge genutzt werden: "Lese deine Antwort. Bist du bei Entwicklung (Techniken nennen, aber nicht immer Wirkungen erklären) oder Kompetent (konsistent erklären, WIE Techniken spezifische Wirkungen schaffen)? Was würde du hinzufügen, um aufzusteigen?"

---

## Bekannte Einschränkungen

1. **Das Entpacken spiegelt allgemeine Erwartungen für diese Kompetenz auf diesem Niveau.** Spezifische Prüfungsbörden, Curricula oder Schul-Richtlinien können die Kompetenz unterschiedlich definieren oder andere Komponenten betonen. Lehrpersonen sollten das Entpacken gegen ihren spezifischen Beurteilungs-Rahmen cross-checken und anpassen wo nötig.

2. **Erfolgskriterien auf vier Niveaus simplify notwendigerweise ein Kontinuum.** Schüler-Arbeit existiert auf einem Spektrum, nicht in sauberen Kategorien. Manche Antworten können Kompetent-Analyse der Sprache, aber Anfang-Analyse der Struktur zeigen. Die Niveaus sind Guides zum Feedback, nicht starre Klassifizierungen – die LP muss professionelle Judgement nutzen, wenn eine Antwort mehrfache Niveaus spannt.

3. **Die häufigen Missverständnisse aufgelistet sind die HÄUFIGSTEN, nicht alle möglichen.** Einzelne SuS können verschiedene Missverständnisse haben, basiert auf vorherigem Unterricht, Muttersprache oder Konzept-Rahmen. Die aufgelisteten sollten als Diagnose-Beurteilungs-Startpunkte behandelt werden, nicht als erschöpfende Liste.
