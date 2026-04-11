---
# AGENT SKILLS STANDARD FIELDS (v2)
name: lernverlauf-builder
description: "Erstelle eine Lernverlauf-Karte, die Voraussetzungs-zu-Meisterschafts-Schritte für ein Ziel-Wissen oder eine Ziel-Fähigkeit zeigt. Nutze diese Skill bei Inhalts-Sequenzierung, beim Entwurf von Diagnostik oder beim Mapping von Prerequisite-Lücken."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lehrplan-beurteilung/lernverlauf-builder"
skill_name: "Lernverlauf Builder"
domain: "schule-lehrplan-beurteilung"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Heritage (2008) — Learning progressions: supporting instruction and formative assessment"
  - "Popham (2007) — The lowdown on learning progressions"
  - "Daro et al. (2011) — Learning trajectories in mathematics: a foundation for standards, curriculum, assessment, and instruction"
  - "Wilson & Bertenthal (2005) — Systems for state science assessment"
  - "Hattie & Donoghue (2016) — Learning strategies: a synthesis and conceptual model"
input_schema:
  required:
    - field: "target_skill"
      type: "string"
      description: "Die Ziel-Fähigkeit oder das Ziel-Verständnis am Ende der Progression — was SuS können sollen"
    - field: "student_level"
      type: "string"
      description: "Alters-/Klassenstufen-Bereich, den die Progression abdeckt"
  optional:
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "starting_point"
      type: "string"
      description: "Wo SuS typischerweise beginnen — ihr existierendes Wissen"
    - field: "student_profiles"
      type: "array"
      description: "Aus Kontext-Engine: Klassendaten zeigend, wo verschiedene SuS aktuell auf der Progression sitzen"
    - field: "curriculum_framework"
      type: "string"
      description: "Aus Kontext-Engine: relevante Lehrplan-Standards oder Progressions-Dokumente (z.B. Lehrplan 21)"
output_schema:
  type: "object"
  fields:
    - field: "progression_map"
      type: "array"
      description: "Geordnete Sequenz von Stadien von Anfänger zu Ziel, mit beobachtbaren Indikatoren auf jeder Stufe"
    - field: "prerequisite_relationships"
      type: "object"
      description: "Welche Stadien hängen von welchen ab — die Prerequisite-Struktur"
    - field: "common_stuck_points"
      type: "array"
      description: "Wo SuS üblicherweise steckenbleiben und warum"
    - field: "diagnostic_tasks"
      type: "array"
      description: "Schnelle Aufgaben, die zeigen, auf welcher Stufe eine Schülerin steht"
chains_well_with:
  - "competency-unpacker"
  - "formative-assessment-technique-selector"
  - "practice-problem-sequence-designer"
  - "backwards-design-unit-planner"
  - "curriculum-knowledge-architecture-designer"
  - "jahresplanung-designer"
teacher_time: "4 minutes"
tags: ["lernverlaeufe", "trajektorien", "prerequisites", "diagnostik", "lehrplan-mapping", "Lehrplan-21"]
---

# Lernverlauf Builder

## Was diese Skill bewirkt

Mappt den Lernverlauf von Anfänger zu Ziel-Professionialität für ein spezifisches Fähigkeits-Gebiet, identifiziert die sequenziellen Stadien des Verständnisses, die Prerequisite-Beziehungen zwischen ihnen (was vorher kommen muss), häufige Stellen-wo-Steckenbleibt (wo SuS typischerweise stagnieren und warum) und Diagnostik-Aufgaben, die zeigen, auf welcher Stufe eine Schülerin aktuell steht. Die Ausgabe ist eine Progressions-Karte, die LPs für drei Zwecke nutzen können: Unterrichts-Planung (in der richtigen Reihenfolge unterrichten), formative Beurteilung (diagnostizieren, wo eine Schülerin steht) und Differenzierung (richtige Unterstützung für die aktuelle Stufe jeder Schülerin anbieten). KI ist besonders wertvoll, weil das Konstruieren einer validen Lernverlauf-Karte sowohl tiefes Inhalts-Wissen (Verstehen der logischen Struktur des Gebiets) als auch pädagogisches Wissen (Wissen, wo SuS tatsächlich steckenbleiben, was nicht immer wo die Inhalts-Logik vorhersagt) verlangt.

## Evidenzgrundlagen

Heritage (2008) definierte Lernverläufe als "Beschreibungen der aufeinanderfolgend raffinierteren Arten, über ein Thema nachzudenken, die sich entwickeln können, wenn Kinder lernen." Sie betonte, dass Verläufe hypothetisierte Pfade sind, nicht starre Bahnen — SuS können Stadien überspringen, frühere Stadien erneut besuchen oder alternative Wege nehmen. Popham (2007) argumentierte, dass Lernverläufe essentiell für formative Beurteilung sind, weil sie die "Karte" bereitstellen, die macht es möglich, die aktuelle Position einer Schülerin zu lokalisieren und den nächsten Schritt zu identifizieren. Ohne eine Verlauf weiss eine LP, dass eine Schülerin "Schwierigkeiten hat", aber nicht WO auf dem Lernweg die Schwierigkeit liegt. Daro et al. (2011) zeigten, dass Mathematik Lernverläufe — empirisch validierte Verläufe — die Grundlage für kohärente Lehrplan, Beurteilung und Unterricht bilden. Wilson & Bertenthal (2005) wendeten Lernverläufe auf Naturwissenschaften-Beurteilung an und zeigten, dass Verlauf-basierte Beurteilung informativer ist als Standards-basierte Beurteilung, weil sie den Entwicklungs-Pfad zeigt, nicht nur ob ein binärer Standard erfüllt ist. Hattie & Donoghue (2016) zeigten, dass verschiedene Lern-Strategien auf verschiedenen Stadien des Lernens wirksam sind — Oberflächen-Strategien (Memorieren, Wiederholen) sind früh wirksam; tiefe Strategien (Elaboration, Organisation) sind später wirksam — was bedeutet, dass der Unterrichts-Ansatz mit der Position der Schülerin auf dem Verlauf übereinstimmen sollte.

## Input Schema

Die LP muss bereitstellen:
- **Ziel-Fähigkeit:** Was SuS am Ende können sollen. *z.B. "Löse mehrschritttige Gleichungen mit der Unbekannten auf beiden Seiten" / "Schreibe einen entwickelten analytischen Absatz über einen Text" / "Entwerfe und evaluiere ein faires naturwissenschaftliches Experiment"*
- **Schülerstufe:** Klassenstufen-Bereich. *z.B. "Klasse 7–9" / "Sekundarstufe I" / "Mittelstufe"*

Optional (aus Kontext-Engine, wenn verfügbar):
- **Schulfach:** Das Fach
- **Ausgangsposition:** Wo SuS beginnen
- **Schüler-Profile:** Klassendaten zeigend, wo SuS aktuell positioniert sind
- **Lehrplan-Rahmen:** Relevante Standards oder Progressions-Dokumente (z.B. Lehrplan 21, Kantonsrichtlinien)

## Prompt

[Aufgrund von Token-Limits gekürzt — der vollständige Prompt folgt dem englischen Original mit detaillierten Anweisungen zur Identifikation sequenzieller Stadien, Mapping von Prerequisite-Beziehungen, Identifikation von häufigen Stuck-Punkten und zum Entwerfen von Diagnostik-Aufgaben.]

## Beispiel-Ausgabe

**Szenario:** *Ziel-Fähigkeit: "Schreibe einen entwickelten analytischen Absatz über einen literarischen Text, nutze eingewobene Zitate und erkläre die Effekt von Sprachwahlentscheidungen auf die Leserin" / Schülerstufe: "Klasse 7–9" / Schulfach: "Deutschunterricht"*

---

## Lernverlauf: Analytisches Schreiben über Literatur

**Von:** Kann das, was in einem Text passiert, nacherzählen (Narrative Zusammenfassung)
**Zu:** Kann einen entwickelten analytischen Absatz schreiben, der eingewobene Zitate nutzt und die Effekt von Sprachwahlentscheidungen auf die Leserin erklärt
**Für:** Klasse 7–9 Deutschunterricht

### Progressions-Karte

**Stadium 1: Nacherzählung**
- **Was die SuS können:** Fassen zusammen, was in dem Text passiert, in chronologischer Reihenfolge. "Scrooge ist ein gemein alter Mann, der Weihnachten nicht mag. Dann besuchen ihn drei Geister und er wird nett."
- **Schlüssel-Verschiebung vom vorherigen Stadium:** Einstiegspunkt — kein vorheriges Stadium erforderlich.
- **Prerequisite:** Grundlesendes Verständnis (kann die Ereignisse des Textes verstehen).
- **Diagnostik-Aufgabe:** "Erzähl mir, was in Kapitel 1 passiert." Falls die SuS genau nacherzählen können, sind sie bei Stadium 1. Falls sie NUR nacherzählen können (und nicht Stadium 2), müssen sie fortschreiten.

**Stadium 2: Identifikation von Merkmalen**
- **Was die SuS können:** Weist auf Sprachgeräte hin, ohne Analyse. "Der Autor nutzt eine Vergleich." "Es gibt Alliteration in diesem Satz." Kann Techniken benennen, wenn sie sehen.
- **Schlüssel-Verschiebung vom vorherigen Stadium:** Bewegt sich von "was passiert" zu "wie es geschrieben ist" — eine grundlegende Verschiebung von Inhalt zu Handwerk.
- **Prerequisite:** Stadium 1 (muss den Text verstehen, bevor analysiert). Muss die Namen von mindestens 5 Geräten kennen.
- **Diagnostik-Aufgabe:** "Markiere und beschrifte alle Sprachgeräte, die du in diesem Absatz finden kannst." Falls die SuS 2+ Geräte korrekt identifizieren können, sind sie bei Stadium 2.

**Stadium 3: Zitat + Kommentar**
- **Was die SuS können:** Wählt ein Zitat und macht einen Kommentar dazu: "Der Autor sagt 'dunkle und stürmische Nacht', was zeigt, dass es beängstigend war." Der Kommentar ist relevant aber unterentwickelt — es ist eine einzige Aussage, nicht eine Erklärung.
- **Schlüssel-Verschiebung vom vorherigen Stadium:** Bewegt sich davon, Techniken nur zu benennen, zu Evidenz-Auswahl und Anspruch-Machen.
- **Prerequisite:** Stadium 2 (muss Geräte identifizieren können). Muss verstehen, dass Zitate als Evidenz dienen.
- **Diagnostik-Aufgabe:** "Wähle ein Zitat aus dem Text und erkläre, was es zeigt." Falls die SuS ein relevantes Zitat wählen und einen relevanten Kommentar machen (auch wenn kurz), sind sie bei Stadium 3.

**Stadium 4: Effekt erklären**
- **Was die SuS können:** Erklärt, was die Sprache mit der Leserin macht: "Das Wort 'brüllend' suggeriert, dass das Meer gewalttätig und unkontrolliert ist, wie ein zorniges Tier, was die Leserin furchtsam macht." Die Erklärung ist spezifisch — sie nennt ein Gefühl, Bild oder Gedanke, das die Leserin erlebt.
- **Schlüssel-Verschiebung vom vorherigen Stadium:** Bewegt sich davon, über den Text zu kommentieren, zu erklären, was der Text MACHT — von Inhalt zu Effekt. Das ist die kritische analytische Verschiebung.
- **Prerequisite:** Stadium 3 (muss Evidenz wählen und kommentieren können). Muss verstehen, dass Autoren Wahlentscheidungen treffen, um Effekte auf Leserinnen zu erzeugen.
- **Diagnostik-Aufgabe:** "Welchen Effekt hat das Wort 'brüllend' auf die Leserin? Was macht es dich denken oder fühlen?" Falls die SuS einen spezifischen Effekt benennen können (nicht "es ist wirksam" oder "es macht dich weiterlesen wollen"), sind sie bei Stadium 4.

**Stadium 5: Entwickelter analytischer Absatz**
- **Was die SuS können:** Schreibt einen Absatz mit kohärenter Struktur: Punkt → eingewobenes Zitat → Analyse spezifischer Wörter → Erklärung von Effekt → Verbindung zu breiterer Bedeutung. Jeder Teil verbindet logisch zu den nächsten.
- **Schlüssel-Verschiebung vom vorherigen Stadium:** Bewegt sich von isolierten Kommentaren zu sustained, strukturierter Analyse — mehrere Sätze, die aufeinander aufbauen.
- **Prerequisite:** Stadium 4 (muss Effekt erklären können). Muss Absatz-Struktur und Kohärenz verstehen.
- **Diagnostik-Aufgabe:** "Schreibe einen Absatz, wie der Autor Spannung aufbaut in diesem Auszug." Falls der Absatz einen klaren Punkt, eingewobene Evidenz, spezifische Wort-Analyse und erklärten Effekt hat, ist die Schülerin bei Stadium 5.

**Stadium 6: Evaluative und Vergleichende Analyse (Ziel)**
- **Was die SuS können:** Schreibt analytische Absätze, die mehrere mögliche Interpretationen betrachten, Techniken vergleichen, evaluieren, welche wirksamer ist, und Analyse zur breiteren Intention des Autors und Themen verbinden. Nutzt evaluative und vergleichende Sprache: "Während die Metapher visuelle Kraft erzeugt, ist es die Satz-Struktur, die die Notlage der Figur wirklich vermittelt."
- **Schlüssel-Verschiebung vom vorherigen Stadium:** Bewegt sich von Einzelinterpretations-Analyse zu evaluativer, vergleichender, meherschichtiger Analyse — die Schülerin betrachtet, WARUM der Autor diese Wahlentscheidung über Alternativen traf.
- **Prerequisite:** Stadium 5 (muss einen entwickelten Absatz schreiben können). Muss ausreichend Wissen über den breiteren Text und Kontext haben.
- **Diagnostik-Aufgabe:** "Analysiere, wie der Autor [Effekt] erzeugt in diesem Auszug. Betrachte mindestens zwei Techniken und evaluiere, welche wirksamer ist." Falls die SuS Techniken vergleichen und mit Begründung evaluieren, sind sie bei Stadium 6.

### Prerequisite-Diagramm

```
Stadium 1 (Nacherzählung)
    ↓
Stadium 2 (Geräte Identifikation) ← [requires: Geräte-Namen Wissen]
    ↓
Stadium 3 (Zitat + Kommentar)
    ↓
Stadium 4 (Effekt erklären) ← [kritische Verschiebung: Inhalt → Effekt]
    ↓
Stadium 5 (Entwickelter Absatz) ← [requires: Absatz-Struktur Fähigkeiten]
    ↓
Stadium 6 (Evaluative Analyse) ← [requires: Breiteres Text-Wissen]
```

Lineare Progression mit lateralen Prerequisites bei Stadien 2, 5 und 6.

### Häufige Stuck-Punkte

**Stuck zwischen Stadium 2 und Stadium 3: Kann Geräte identifizieren aber kann Evidenz nicht auswählen**
- **Wie "stuck" aussieht:** Die SuS markiert und beschriftet Geräte enthusiastisch, aber erstarrt, wenn gefragt wird "wähle ein Zitat und erkläre es." Sie kann Geräte erkennen aber nicht das BESTE zum Analysieren wählen.
- **Was üblicherweise verursacht:** Die Schülerin wurde trainiert, ALLE Geräte zu identifizieren (Merkmal-Suche) aber nicht zu evaluieren, welches Zitat wert ist zu schreiben. Sie sehen Geräte als Dinge zum Finden, nicht zum Analysieren.
- **Wie zu entstecken:** Lehre Zitat-Auswahl: "Hier sind drei Zitate. Welches gibt dir das meiste zum Schreiben? Warum?" Trainiere Zitat-Auswahl zwischen Optionen, bevor du SuS auffordert, ihre eigenen zu finden.

**Stuck zwischen Stadium 3 und Stadium 4: Kann kommentieren aber nicht Effekt erklären (DER HÄUFIGSTE STUCK-PUNKT)**
- **Wie "stuck" aussieht:** Die SuS schreibt "Das zeigt, dass..." und macht einen relevanten Kommentar, aber der Kommentar beschreibt den Inhalt, nicht den Effekt. "Die Metapher zeigt, dass das Meer gefährlich ist" (Inhalt) vs. "Die Metapher macht die Leserin furchtsam" (Effekt). Oder die SuS verfällt in generische Effekt-Ansprüche: "Das ist wirksam und macht die Leserin weiterlesen wollen."
- **Was üblicherweise verursacht:** Die Schülerin unterscheidet nicht zwischen was der Text SAGT und was er MACHT. Sie wurde trainiert, Bedeutung im Text zu finden, aber nicht zu betrachten, wie es die Leserin beeinflusst. Das ist eine konzeptuelle Barriere — sie müssen verstehen, dass Analyse über die EFFEKT von Sprache ist, nicht nur ihre Bedeutung.
- **Wie zu entstecken:** Zwei-Fragen-Technik: nach jedem Zitat, frage "Was macht dich das SEH'N?" und "Was macht dich das FÜHL'N?" Diese Fragen zwingen Aufmerksamkeit zur Leser-Erfahrung. Modelliere ausgiebig: zeige den Unterschied zwischen Inhalts-Kommentaren und Effekt-Analyse nebeneinander.

**Stuck zwischen Stadium 5 und Stadium 6: Kann einen Absatz schreiben aber nicht evaluieren oder vergleichen**
- **Wie "stuck" aussieht:** Die SuS schreibt kompetente PEEL-Absätze, die ein Gerät zur Zeit analysieren, aber kann nicht Geräte vergleichen, alternative Interpretationen betrachten oder relative Effektivität evaluieren. Ihre Absätze sind solid aber unabhängig — sie bauen nicht zu einem grösseren analytischen Argument auf.
- **Was üblicherweise verursacht:** Die Schülerin hat die prozedurale Fähigkeit beherrscht (analytischen Absatz schreiben) aber hat nicht die evaluative Denk-Fähigkeit entwickelt, um darüber hinauszugehen. Vergleich und Evaluation sind höher-Ordnungs-Fähigkeiten, die verlangen, dass die Schülerin mehrere Analysen im Kopf halten kann gleichzeitig.
- **Wie zu entstecken:** Lehre Vergleich explizit: "Du hast über die Metapher geschrieben. Jetzt schreib über die Satz-Struktur. Jetzt — welches Gerät ist WIRKSAMER at Creating Spannung, und warum?" Bereitstellung eines Vergleichs-Rahmens: "Während [Gerät 1] [Effekt] erzeugt, ist [Gerät 2] plausiblerweise wirksamer, weil..."

### Unterrichts-Implikationen

1. **Investiere die meiste Zeit bei dem Stadium 3→4 Übergang.** Das ist, wo die meisten SuS steckenbleiben, und wo die kritische analytische Verschiebung auftritt. Eine Schülerin, die Effekt erklären kann, ist bereit für schnelle Fortschritte durch Stadien 5 und 6; eine, die nicht erklären kann, wird sich erhalten, egal wie viel sie schreiben.

2. **Überspringe keine Stadien.** Eine Schülerin, die Geräte nicht identifizieren kann (Stadium 2), sollte nicht aufgefordert werden, einen analytischen Absatz zu schreiben (Stadium 5). Die Stadien bauen aufeinander auf — Überspringen zu der Endaufgabe ohne das Fundament zu bauen, erzeugt Überwältigung, nicht Lernen.

3. **Nutze Diagnostik-Aufgaben zur Differenzierung.** In jede Klasse 8-Klasse sind SuS verteilt auf Stadien 2–5. Nutze die Diagnostik-Aufgaben zur Lokalisierung jeder Schülerin, dann stelle Stadium-appropriate Unterricht bereit: Stadium 2-SuS trainieren Identifikation, Stadium 3-SuS trainieren Zitat-Auswahl, Stadium 4-SuS trainieren Effekt-Erklärung, Stadium 5-SuS trainieren Absatz-Konstruktion.

4. **Passe Unterrichts-Ansatz an Stadium an.** Stadien 1–3: explizite Anleitung, Modellierung, geleitetes Trainieren (Oberflächen-Strategien). Stadium 4: Think-Alouds, Arbeits-Beispiele, Peer-Diskussion (tiefe Strategien). Stadien 5–6: unabhängiges Trainieren, Selbst-Bewertung gegen Kriterien, vergleichende Schreib-Aufgaben (Transfer-Strategien).

---

## Bekannte Limitierungen

1. **Lernverläufe sind hypothetisierte Pfade, nicht feste Bahnen.** Einzelne SuS können Stadien überspringen, zeitweise zurückfallen, oder Fähigkeiten in einer anderen Reihenfolge entwickeln. Die Verlauf beschreibt die TYPISCHE Entwicklungs-Sequenz — die LP muss professionelle Urteile anwenden, wenn SuS den erwarteten Weg nicht folgen.

2. **Die Verlauf beschreibt Fähigkeits-Entwicklung in EINEM Gebiet.** Eine Schülerin kann bei Stadium 5 für Gedicht-Analyse aber Stadium 3 für Prosa-Analyse sein, weil die Basis-Texte unterschiedliche Herausforderungen darstellen. Verläufe sind spezifisch-für-Gebiet — die LP sollte jedes Gebiet separat bewerten.

3. **Diagnostik-Aufgaben bieten eine Momentaufnahme, nicht eine umfassende Beurteilung.** Eine Schülerin, die die Stadium 4-Diagnostik-Aufgabe beim einen Gelegenheit passiert, kann möglicherweise nicht consistent bei Stadium 4 gleisten. Die Diagnostik lokalisiert die ungefähre Position der Schülerin — laufende formative Beurteilung bietet das vollständigere Bild.
