---
# AGENT SKILLS STANDARD FIELDS (v2)
name: textkomplexitaet-analyse
description: "Analysiere Text-Komplexität über quantitative, qualitative und Leser-Aufgaben-Dimensionen mit Scaffolding-Empfehlungen. Nutze diese Skill bei Text-Auswahl, Lesbarkeitsbewertung oder Planung von Lese-Unterstützung."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-medienkompetenz/textkomplexitaet-analyse"
skill_name: "Text-Komplexitäts-Analysierer & Scaffolding-Designer"
domain: "schule-medienkompetenz"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Shanahan et al. (2012) — An analysis of text complexity progression in CCSS"
  - "Hiebert (2012) — Seven actions that teachers can take right now: text complexity"
  - "Fisher & Frey (2012) — Text complexity: raising rigour in reading"
  - "Beck et al. (2013) — Bringing Words to Life: robust vocabulary instruction"
  - "Graves & Graves (2003) — Scaffolding Reading Experiences: designs for student success"
input_schema:
  required:
    - field: "textbeschreibung"
      type: "string"
      description: "Beschreibung des Textes einschließlich Genre, Thema, ungefähre Länge und Quelle"
    - field: "sus_niveau"
      type: "string"
      description: "Jahrgangsstufe/Klasse und gegenwärtiges Lesenniveau"
    - field: "lesezweck"
      type: "string"
      description: "Warum SuS diesen Text lesen — die Aufgabe, die er unterstützt"
  optional:
    - field: "textauszug"
      type: "string"
      description: "Ein kurzer Auszug aus dem Text für präzisere Analyse"
    - field: "sus_profile"
      type: "array"
      description: "Aus Kontextmotor: Leseniveaus, DaZ-Status, Hintergrund-Wissen"
    - field: "fachgebiet"
      type: "string"
      description: "Der Curriculum-Fachkontext"
    - field: "bekannte_herausforderungen"
      type: "string"
      description: "Spezifische Herausforderungen, die die LP anticipates mit diesem Text"
output_schema:
  type: "object"
  fields:
    - field: "komplexitaets_analyse"
      type: "object"
      description: "Analyse über quantitative, qualitative und Leser-Aufgaben-Dimensionen"
    - field: "scaffold_plan"
      type: "object"
      description: "Vor, während, und nach Lesen-Scaffolds, tailored zu identifizierten Komplexität"
    - field: "wortschatz_fokus"
      type: "array"
      description: "Schlüssel-Wortschatz zu pre-teach, tiered nach Priorität"
    - field: "differenzierung"
      type: "object"
      description: "Modifikationen für verschiedene Leser-Niveaus"
chains_well_with:
  - "lesestrategien-auswahl"
  - "wortschatz-tiering-tool"
  - "geruestete-aufgaben-modifizierer"
  - "cognitive-load-analysierer"
teacher_time: "4 minutes"
tags: ["text-komplexitaet", "lesen", "scaffolding", "wortschatz", "differenzierung", "Lehrplan-21", "D.2"]
---

# Text-Komplexitäts-Analysierer & Scaffolding-Designer

## Was diese Skill tut

Evaluiert einen Text über drei Komplexitäts-Dimensionen — quantitativ (Satz-Länge, Wortschatz-Häufigkeit), qualitativ (Struktur, Bedeutungs-Ebenen, Wissens-Anforderungen), und Leser-Aufgabe (die Interaction zwischen des Textes Anforderungen und den spezifischen Lesern und Lesezweck) — und generiert eine tailored Satz von vor, während, und nach Lesen-Scaffolds, die die identifizierten Komplexitäts-Herausforderungen adressieren. Statt nur Lesbarkeits-Formeln (die nur quantitative Features messen), betrachtet diese Analyse, ob ein Text implizite Bedeutung hat, die Folgerung erfordert, ob es Hintergrund-Wissen voraussetzt, das SuS vielleicht mangeln, ob seine Struktur vertraut oder unvertraut ist, und ob die Wortschatz-Anforderungen primär Tier-2 (akademisch) oder Tier-3 (technisch) sind. KI ist besonders wertvoll, weil Text-Komplexität mehrdimensional ist — ein Text kann quantitativ einfach aber qualitativ komplex sein (ein Gedicht mit kurzen Sätzen aber tiefem Figur-Sprache), und Scaffolds müssen die TATSÄCHLICHE Komplexität, nicht nur Lesbarkeits-Nummer adressieren.

## Evidenzgrundlage

Shanahan et al. (2012) analysierten Text-Komplexitäts-Progression und etablierten, dass effektive Text-Auswahl und Scaffolding ein dreidimensionales Modell erfordert: quantitative Maße (Wort-Häufigkeit, Satz-Länge, Text-Länge), qualitative Dimensionen (Bedeutungs-Ebenen, Text-Struktur, Sprach-Konvention, Wissens-Anforderungen), und Leser-Aufgaben-Überlegungen (die spezifischen Leser's Hintergrund-Wissen, Motivation, und des Lesezwecks). Auf quantitative Maße allein zu relieren (z.B., Flesch-Kincaid) produziert irreführende Ergebnisse — Hemingway's Prosa scores als "einfach" auf Lesbarkeits-Formeln, obwohl es qualitativ komplex ist. Hiebert (2012) identifizierte spezifische Aktionen, die LP nehmen können, um Text-Komplexität adressieren, betonend, dass Scaffolding die spezifische Komplexitäts-Dimension sollte adressieren, die die größte Herausforderung präsentiert — Wortschatz-Scaffolding für einen Text dessen Komplexität in Struktur liegt ist mismatched Unterstützung. Fisher & Frey (2012) entwickelten ein praktisches Framework für erhöhte Rigour im Lesen durch angemessene Scaffolding: nicht den Text vereinfachen, aber die Unterstützung bereiten, die SuS brauchen, um auf komplexen Text zuzugreifen. Beck et al. (2013) zeigten, dass Wortschatz-Unterricht am wirksamsten ist wenn er sich auf Tier-2-Wörter konzentriert (hoch-nutzbarer akademischer Wortschatz, der über Fächer erscheint) statt Tier-3-Wörter (technischer Wortschatz spezifisch zu einem Fach), und wenn Wörter in Kontext mit mehrfachen Exponerungen unterrichtet werden. Graves & Graves (2003) etablierten das Scaffolded Reading Experience Modell: vor-Lesen-Aktivitäten (Prior-Wissen aktivieren, Hintergrund bauen, Wortschatz pre-teach), während-Lesen-Aktivitäten (Leit-Fragen, Think-alouds, Text-Anmerkungen), und nach-Lesen-Aktivitäten (Diskussion, Schreiben, Anwendung).

## Eingabeschema

Die Lehrperson muss bereitstellen:
- **Textbeschreibung:** Was SuS lesen. *z.B. "Kapitel 3 von 'Holes' von Louis Sachar — ungefähr 1200 Wörter, narrative Fiktion mit dual Zeitlinien" / "Ein BBC Bitesize Artikel über Photosynthese — 500 Wörter, informativer Text mit Diagrammen" / "Ein Auszug aus einem 9. Klasse Geschichte-Quellen-Buch — ein Brief von Primärquelle von einem WK1-Soldat, ungefähr 300 Wörter"*
- **SuS-Niveau:** Jahrgangsstufe und Lesenniveau. *z.B. "7. Klasse, gemischt — Lesealter variieren von 9 zu 14"*
- **Lesezweck:** Warum SuS lesen. *z.B. "Zu identifizieren, wie Sachar die dual Zeitleiste nutzt, Spannung zu schaffen" / "Die Schlüssel-Stadien der Photosynthese zu extrahieren für ein Zusammenfasungs-Diagramm" / "Zu Folgerungen zu treffen, was Leben im Schützengraben von eine Primärquelle war"*

Optional (injiziert vom Kontextmotor, falls verfügbar):
- **Textauszug:** Ein kurzer Auszug für präzisere Analyse
- **SuS-Profile:** Leseniveaus, DaZ-Status, Hintergrund-Wissen
- **Fachgebiet:** Curriculum-Fachgebiet
- **Bekannte Herausforderungen:** Anticipierte Schwierigkeiten

## Prompt

```
Du bist ein Experte in Text-Komplexitäts-Analyse und Lese-Scaffolding mit tiefem Wissen von Shanahan et al. (2012), Hiebert (2012), Fisher & Frey (2012), und Graves & Graves (2003). Du verstehst, dass Text-Komplexität NICHT eine einzelne Zahl ist — es ist eine mehrdimensionale Interaction zwischen den Text-Features, den Leser's Fähigkeiten, und des Tasks Anforderungen.

Deine Aufgabe ist es, Text-Komplexität zu analysieren und Lese-Scaffolds für folgendes zu designen:

**Textbeschreibung:** {{textbeschreibung}}
**SuS-Niveau:** {{sus_niveau}}
**Lesezweck:** {{lesezweck}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Verwende alles Verfügbare; ignoriere alle als "nicht bereitgestellt" gekennzeichneten Felder.

**Textauszug:** {{textauszug}} — falls bereitgestellt, nutze für spezifische, gegrundete Analyse. Falls nicht, basis deine Analyse auf der Text-Beschreibung und deinem Wissen des Genres und Themas.
**SuS-Profile:** {{sus_profile}} — falls nicht bereitgestellt, entwirfe für gemischte Klasse mit Lesealter spanning ungefähr 2 Jahre unten zu 2 Jahre über chronologisches Alter.
**Fachgebiet:** {{fachgebiet}} — falls nicht bereitgestellt, leite aus Text-Beschreibung ab.
**Bekannte Herausforderungen:** {{bekannte_herausforderungen}} — falls nicht bereitgestellt, identifiziere die wahrscheinlichsten Herausforderungen basierend auf Text-Beschreibung und SuS-Niveau.

Wende diese evidenzgestützten Prinzipien an:

1. **Drei-dimensionale Komplexitäts-Analyse (Shanahan et al., 2012):**

   **Quantitative Dimensionen:**
   - Satz-Länge und Grammatik-Komplexität (einfach, zusammengesetzt, komplex)
   - Wort-Häufigkeit (häufig Wörter vs. ungewöhnlich/akademisch/technisch)
   - Text-Länge relativ zur Lese-Aufgabe
   - Estimated Schwierigkeit relativ zum genannten SuS-Niveau.

   **Qualitative Dimensionen:**
   - Bedeutungs-Ebenen: Ist Bedeutung explizit oder implizit? Gibt es figur, ironisch, oder symbolisch Schichten?
   - Text-Struktur: Ist die Struktur vertraut (chronologisch, Ursache-Wirkung) oder unvertraut (nicht-linear, fragmentarisch, mehrfache eingebettete Strukturen)?
   - Sprach-Konvention: Ist die Sprache modern und Standard, oder archaisch, dialektal oder hochgradig figur?
   - Wissens-Anforderungen: Welches Hintergrund-Wissen (kulturell, historisch, wissenschaftlich, literarisch) setzt der Text vorraus?

   **Leser-Aufgaben-Dimensionen:**
   - Welche ist die Lücke zwischen was diese spezifischen Leser wissen und was der Text erfordert?
   - Erfordert der Lesezweck Oberflächenverständnis oder tiefe Analyse?
   - Welche Leser-Motivation oder Engagement Faktoren sind relevant?

2. **Passe Scaffolds der spezifischen Komplexitäts-Dimension an (Hiebert, 2012):**
   - Falls die Haupt-Komplexität WORTSCHATZ ist: pre-teach Schlüssel-Wörter, stelle ein Glossar bereit, nutze Context-Hinweis-Unterricht.
   - Falls die Haupt-Komplexität STRUKTUR ist: stelle eine Text-Karte oder Grafik-Organizer bereit, unterrichte die Text-Struktur explizit.
   - Falls die Haupt-Komplexität WISSENS-ANFORDERUNGEN sind: baue Hintergrund-Wissen bevor Lesen, stelle Context-Setting-Information bereit.
   - Falls die Haupt-Komplexität IMPLIZITE BEDEUTUNG ist: lehre Folgerungs-Strategien, modelliere Think-alouds bei Schlüssel-Folgerungs-Punkten.
   - Wende NICHT alle Scaffold-Typen unabhängig von Komplexitäts-Profil an — ziele die Scaffolds.

3. **Scaff old der Leser, nicht der Text (Fisher & Frey, 2012):**
   - Das Ziel ist NICHT, den Text zu vereinfachen, aber die Unterstützung SuS brauchen bereitzustellen, um auf komplex Text zuzugreifen.
   - Scaffolds sollten temporär sein — sie unterstützen initial Engagement und sind progressiv entfernt.
   - Text-Komplexität maintening ist wesentlich für Wachstum; Oversimplification reduziert Lernen.

4. **Vor-Während-Nach Struktur (Graves & Graves, 2003):**
   - Vor dem Lesen: adressiere die signifikantest Barriere zu Verständnis BEVOR SuS es encounters.
   - Während des Lesens: stelle guided Unterstützung am spezifischen Komplexitäts-Spitzenpunkt bereits.
   - Nach dem Lesen: erweitere Verständnis durch Diskussion, Schreiben oder Anwendung.

5. **Wortschatz-Fokus (Beck et al., 2013):**
   - Identifiziere Schlüssel-Wortschatz, priorisierend Tier-2 Wörter (hoch-nutzbarer akademischer Wortschatz) über Tier-3 (technische Begriffe, die schnell definiert können).
   - Empfehle, welche Wörter zu pre-teach (wesentlich für Verständnis) und welche zu address während Lesen (können in Kontext mit Unterstützung inferred sein).

Gib deine Ausgabe in diesem exakten Format zurück:

## Text-Komplexitäts-Analyse: [Text-Titel/Beschreibung]

**Für:** [SuS-Niveau]
**Text:** [Kurze Beschreibung]
**Lesezweck:** [Zweck]

### Komplexitäts-Profil

**Quantitativ:** [Analyse von Satz-Länge, Wort-Häufigkeit, Text-Länge — mit estimated Schwierigkeit-Rating für diese SuS]
**Qualitativ — Bedeutungs-Ebenen:** [Explizit vs. implizit, figur-Sprache, Ironie, Symbolismus]
**Qualitativ — Text-Struktur:** [Vertraut vs. unvertraut Struktur, Navigations-Anforderungen]
**Qualitativ — Sprach-Konvention:** [Standard vs. archaisch, dialektal, figur]
**Qualitativ — Wissens-Anforderungen:** [Hintergrund-Wissen vorausgesetzt durch den Text]
**Leser-Aufgabe:** [Lücke zwischen was diese Leser wissen und was der Text erfordert, gegeben des Lesezwecks]

**Haupt-Komplexitäts-Herausforderung:** [Die einzelne bedeutendste Barriere zum Verständnis für diese SuS — das determinis den Scaffold-Fokus]

### Wortschatz-Fokus

**Pre-teach (wesentlich für Verständnis):** [Wörter zu unterrichten VOR Lesen, mit kurzen Definitionen]
**Adresse während Lesen (können in Kontext unterstützt werden):** [Wörter, die geklärt werden können, während SuS sie encounters]

### Scaffold-Plan

**Vor dem Lesen (X Minuten)**
[Scaffolds adressierend die Haupt-Komplexitäts-Herausforderung — Hintergrund bauen, Wortschatz pre-teach, Zweck setzen, Text-Struktur einführen]

**Während des Lesens (X Minuten)**
[Scaffolds für spezifische Komplexitäts-Spitzenpunkte — Leit-Fragen, Anmerkung-Prompts, Think-aloud Punkte, Glossar-Nutzung]

**Nach dem Lesen (X Minuten)**
[Scaffolds erweitern Verständnis — Diskussion, Schreiben, Anwendungs-Aufgaben]

### Differenzierung

**Unterstützung (für unter-Niveau Leser):** [Additional Scaffolds — Pair-Lesen, Audio-Unterstützung, reduzierte Sektion, Satz-Frames für Antworten]
**Extension (für über-Niveau Leser):** [Reduzierte Scaffolds, zusätzliche analytische Fragen, unabhängiges Lesen von related Text]

**Selbstkontrolle vor der Rückgabe:** Verifiziere dass (a) die Komplexitäts-Analyse alle drei Dimensionen abdeckt, (b) die Haupt-Komplexitäts-Herausforderung deutlich identifiziert ist, (c) Scaffolds zur spezifischen Komplexität, nicht generisch, gezielte sind, (d) Scaffolds Access zu den komplex Text unterstützen, statt es zu vereinfachen, (e) Wortschatz ist priorisiert durch Tier und Notwendigkeit, und (f) die Vor-Während-Nach Struktur adressiert Komplexität zu den richtige Lese-Prozess Punkten.
```

## Beispielausgabe

**Szenario:** *Textbeschreibung: "Ein Auszug aus einem Brief eines WK1-Soldaten (Primärquelle) — ungefähr 300 Wörter, geschrieben 1916, beschreibend Bedingungen im Schützengraben. Die Sprache ist verhältnismäßig einfach, aber enthält Zeit-Periode-Wortschatz und Euphemismen. Der Brief ist aufmunternd im Ton, das widerspricht was SuS wissen über Schützengraben-Bedingungen." / SuS-Niveau: "9. Klasse, gemischt Fähigkeit — die meisten können flüssig lesen, aber haben begrenzte Erfahrung mit Primärquellen" / Lesezweck: "Zu Folgerung treffen, was Leben wirklich im Schützengraben war, Lesen ZWISCHEN den Linien von was der Soldat sagt — verstehen, dass des Brief's Ton fröhlich kann nicht reflektieren Realität, weil Briefe zensiert waren und Soldaten nicht ihre Familien erschrecken wollten"*

---

## Text-Komplexitäts-Analyse: WK1 Soldat's Brief (Primärquelle)

**Für:** 9. Klasse Geschichte
**Text:** Primärquelle Brief von WK1 Soldat, c.1916, ~300 Wörter
**Lesezweck:** Folgerung treffen zu Schützengraben-Bedingungen zwischen den Linien lesen — verstehen, warum des Brief's Ton kann nicht die Soldat's tatsächliche Erfahrung reflektieren

### Komplexitäts-Profil

**Quantitativ:** Niedrig-Moderat. Sätze sind verhältnismäßig kurz und grammatikalisch einfach — das ist ein persönlicher Brief, nicht ein formaler Text. Wortschatz ist möglich häufig, mit einen Paar Zeit-Periode-Bedingungen. Text-Länge (300 Wörter) ist handhabbar. Quantitative Maße allein würden diesen Text als "einfach" rate.

**Qualitativ — Bedeutungs-Ebenen:** HOHE KOMPLEXITÄT. Hier liegt die echte Herausforderung. Der Text hat zwei Bedeutungs-Schichten: die Oberflächenbedeitung (was der Soldat schreibt) und die implizierte Bedeutung (was Bedingungen tatsächlich waren). Der Soldat schreibt "Wir halten Cheer-up" — aber der Leser muss Folgerung treffen, dass das kann ein Euphemismus oder eine Performance für das Publikum sein (Familie daheim). Die Lücke zwischen Oberflächenbedeuting und implizierte Bedeutung IST der Text — SuS, die nur die Oberflächenbedeuting lesen, werden die Quelle komplett misunderstood.

**Qualitativ — Text-Struktur:** Niedrig. Der Brief folgt einer vertrauten Struktur (Gruß, Nachrichten, Versicherung, Signoff). Keine Navigations-Herausforderung.

**Qualitativ — Sprach-Konvention:** Moderat. Die Sprache ist möglich zugänglich, aber enthält Zeit-Ausdrücke ("in guter Laune," "tuen unseren Stück," "Fritz") und Euphemismen, die kontextual Verständnis erfordern. Die Register ist informal und conversational — näher zu moderner Englisch als viele historische Quellen.

**Qualitativ — Wissens-Anforderungen:** Moderat-Hoch. SuS brauchen zu wissen: (1) Briefe von der Front wurden von Offizieren zensiert, (2) Soldaten playtained-down häufig Bedingungen um Familien nicht erschrecken, (3) was Schützengraben-Bedingungen tatsächlich waren (um die Lücke zwischen Brief und Realität zu erkennen). Ohne diesen Hintergrund, werden SuS den Brief auf Nennwert lesen und Schützengraben-Leben "fein" worden conclude.

**Leser-Aufgabe:** HOCH. Der Lesezweck erfordert Folgerung und kritische Quellen-Bewertung — nicht einfach Verständnis von was es sagt. 9. Klasse SuS können die Wörter verstehen, aber können nicht spontan den Brief's Ton questionieren. Die kritische Lücke ist zwischen ihre default Lese-Ansatz (akzeptiere was der Text sagt) und des Tasks Anforderung (frage WARUM der Text sagt, was es tut).

**Haupt-Komplexitäts-Herausforderung:** Bedeutungs-Ebenen — die Lücke zwischen Oberflächenton und implizierte Realität. SuS werden des Soldaten's fröhliche Wörter auf Nennwert lesen, es sei denn sie explizit gelehrt werden, zwischen den Linien zu lesen. Das ist compounded durch das Wissens-Anforderung (Zensur und Kontext verstehen).

### Wortschatz-Fokus

**Pre-teach (wesentlich für Verständnis):**
- *Zensur* — militärische Autoritäten lesen Soldaten's Briefe und schneiden aus alles, das Positionen, Bedingungen oder Stimmung-Probleme enthüllte. Das ist wesentlich, Kontext zu verstehen WARUM der Brief klingt fröhlich.
- *Euphemismus* — etwas Mildes oder Positives sagen, wenn die Realität hart ist. "Wir haben ein bisschen schlechtes Wetter" könnte Mittel "Wir haben in Knie-tiefem Schlamm für drei Tage gestanden."

**Adresse während Lesen (können in Kontext unterstützt werden):**
- *Fritz* — Slang-Term für Deutsche Soldaten (kann in Marge Glossiert werden)
- *Tuen unseren Stück* — Zeit-Ausdruck bedeutend "Beitrag zum Kriegs-Anstrengung"
- *Blighty* — Slang für Großbritannien/Zuhause
- *in guter Laune* — erkunden als möglicher Euphemismus während Diskussion

### Scaffold-Plan

**Vor dem Lesen (8 Minuten)**

1. *Baue kritisch Hintergrund-Wissen (5 Minuten):*
"Bevor wir diesen Brief lesen, du brauchst zwei Dinge, die vollständig ändern wie du es verstehst."

Fakt 1: "Jeden Brief ein Soldat heimat sandte, wurde von einem zensier Offizier gelesen. Falls du etwas Negatives über Bedingungen, Stimmung oder den Kriegs-Anstrengung schriebest, wurde es mit Tinte durchgestrichen. Also Soldaten KÖNNTEN nicht Wahrheit schreiben, selbst wenn sie wollten."

Fakt 2: "Selbst ohne Zensur, die meisten Soldaten wollten nicht ihre Familien terrify. Würdest du deiner Mutter schreiben 'Ich bin von Tod umgeben und Ich bin erschrocken'? Oder würdest du sagen 'Mir geht's gut, mach dir keine Gedanken'?"

"Also wenn wir diesen Brief lesen, wir brauchen fragen: sagt der Soldat uns, was WIRKLICH passiert — oder sagt er uns, was er DARF sagen und was er WILL seine Familie hören?"

2. *Stelle den Lesezweck (2 Minuten):*
"Dein Job ist NICHT zu finden, was der Soldat sagt. Dein Job ist zu finden, was er NICHT sagt — was's versteckt hinter den fröhlich Wörtern. Jedes Mal der Soldat etwas Positives sagt, Ich will, dass du fragst: was ist die Realität tatsächlich?"

3. *Stelle die Anmerkung-Aufgabe (1 Minute):*
Gib SuS zwei Farb-Stifte: einer für "Was er sagt" und einer für "Was die Realität kann sein." Sie werden den Brief mit beiden Schichten annotieren.

**Während des Lesens (10 Minuten)**

*Erste Lesen (5 Minuten):* SuS lesen den Brief unabhängig. Keine Anmerkung noch. Einfach lesen.

*Zweite Lesen mit Anmerkung (5 Minuten):* SuS lesen nochmal, annotierend mit zwei Farben:
- Farbe 1: Unterstreiche Dinge, die der Soldat sagt, die klingt positiv oder beruhigend.
- Farbe 2: Schreib in die Marge, was die Realität tatsächlich könnte sein.

Leit-Prompts bei spezifischen Punkten:
- Wenn der Soldat schreibt "halten Cheer-up" → Marge-Prompt: "Warum würde er das schreiben? Was macht 'fröhlich' verbergen?"
- Wenn der Soldat erwähnt Essen oder Wetter beiläufig → Marge-Prompt: "Ist das das ganze Bild? Was weißt du über Schützengraben-Bedingungen?"
- Wenn der Soldat sagt "Mach dir keine Gedanken" → Marge-Prompt: "Falls alles gut war, würde er brauchen das sagen?"

**Nach dem Lesen (7 Minuten)**

1. *Pair Diskussion (3 Minuten):* "Vergleiche Anmerkungen mit deinem Partner. Was MEINTE der Soldat wirklich? Finde die größte Lücke zwischen was er sagt und was du denkst die Realität war."

2. *Ganz-Klasse Diskussion (4 Minuten):* "Was kann dieser Brief uns sagen über Schützengraben-Bedingungen — und was KANN NICHT es uns sagen? Warum ist diese Quelle nützlich, selbst wenn der Soldat nicht die ganze Wahrheit sagt?"

Drücke zum Schlüssel-historischen Einsicht: der Brief sagt uns über die ERFAHRUNG ein Soldat zu sein (der Druck zu scheinen fröhlich, das Verlangen Familie zu schützen, die Beschränkungen der Zensur), selbst wenn es nicht genau Bedingungen beschreibt.

### Differenzierung

**Unterstützung (für unter-Niveau Leser oder DaZ SuS):**
- Stelle ein Glossar von Zeit-Wortschatz neben dem Brief bereit.
- Pre-annotate 2–3 Beispiele: zeige ein fröhliches Statement mit einer Marge-Notiz, das die mögliche Realität schlägt vor. SuS komplett die verbleibenden Anmerkungen unabhängig.
- Paar mit einem selbstbewussten Leser für die Anmerkung-Aufgabe.
- Stelle Satz-Frames für Marge-Anmerkungen bereit: "Er sagt ___ aber die Realität könnte ___ sein, weil ___."

**Extension (für über-Niveau Leser):**
- Entferne die Anmerkung-Scaffolding — challenge SuS die Lücken zwischen Oberflächenbedeiting und Realität unabhängig zu identifizieren.
- Stelle einen zweiten Brief von einem anderen Soldaten bereit (oder ein Tagebuch-Eintrag, das nicht zensiert würde) zum Vergleich: "Wie unterscheidet sich dieser private Tagebuch-Eintrag von den Brief daheim? Was sagt uns der Unterschied über den Brief als eine Quelle?"
- Frag: "Falls du ein Historiker warst, wie würdest du diesen Brief als Evidenz nutzen? Was kann es dir zuverlässig sagen, und was nicht?"

---

## Bekannte Limitierungen

1. **Ohne ein Text-Auszug, die Analyse ist basierend auf der Text-Beschreibung und Genre-Wissen.** Das Komplexitäts-Profil wird genauer sein, wenn ein tatsächlicher Text-Auszug bereitgestellt ist. LP sollte die Analyse gegen den spezifischen Text review und Scaffolds, wo die Analyse nicht match adjustieren.

2. **Die Analyse identifiziert Komplexität, aber kann nicht individuelle SuS Lesenniveaus messen.** Die Scaffold-Empfehlungen sind designed für das genannte SuS-Niveau, aber individuelle SuS innerhalb der Klasse werden verschiedene Lese-Fähigkeiten, Hintergrund-Wissen und Engagement-Niveaus haben. Die LP muss in der Scaffold-Plan basierend auf ihrem Wissen von spezifischen SuS differenzieren.

3. **Text-Komplexität ist Kontext-dependent.** Der gleiche Text kann einfach für einen Lesezweck und komplex für einen anderen sein — ein Gedicht für Genießung zu lesen erfordert verschiedene Verständnis-Anforderungen statt diese figur-Sprache zu analysieren. Die Analyse ist spezifisch zum genannten Lesezweck; changing der Lesezweck würde das Komplexitäts-Profil und Scaffold-Empfehlungen change.
