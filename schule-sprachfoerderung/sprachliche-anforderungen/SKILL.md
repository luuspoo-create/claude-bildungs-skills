---
# AGENT SKILLS STANDARD FIELDS (v2)
name: sprachliche-anforderungen
description: "Analysiere die sprachlichen Anforderungen einer Aufgabe um Barrieren für DaZ-SuS zu identifizieren. Nutze diesen Skill bei Anpassung von Aufgaben, Planung von Unterstützung oder Einschätzung sprachlicher Zugänglichkeit."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-sprachfoerderung/sprachliche-anforderungen"
skill_name: "Analyzer für sprachliche Anforderungen"
domain: "schule-sprachfoerderung"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Cummins (1981, 2000) — BICS/CALP-Rahmen: Alltägliche Sprachkompetenz vs. Schulische Sprachkompetenz"
  - "Gibbons (2002, 2015) — Scaffolding Language, Scaffolding Learning: Unterricht von DaZ-SuS im Regelunterricht"
  - "Schleppegrell (2004) — The Language of Schooling: funktionale Linguistik-Perspektive"
  - "Zwiers (2014) — Building Academic Language: akademische Sprachstandards in verschiedenen Fächern"
  - "Bailey & Heritage (2008) — Formative Assessment for Literacy: Aufbau von Lesekompetenz und akademischer Sprachfähigkeit"
input_schema:
  required:
    - field: "task_description"
      type: "string"
      description: "Die spezifische Aufgabe, die SuS durchführen müssen"
    - field: "student_level"
      type: "string"
      description: "Klassenstufe/Alter"
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
  optional:
    - field: "language_proficiency"
      type: "string"
      description: "DaZ-Sprachniveau der Ziel-SuS — z. B. Anfangsstadium, Entwicklungsstadium, Gefestigtes Stadium, Kompetent"
    - field: "student_profiles"
      type: "array"
      description: "Aus Kontextmodell: Muttersprachen, Zeit in deutschsprachigem Unterricht, spezifische Sprachbedarfe"
    - field: "task_materials"
      type: "string"
      description: "Beschreibung von Texten, Arbeitsblättern oder Ressourcen"
    - field: "prior_language_instruction"
      type: "string"
      description: "Sprachmerkmale, die diese SuS bereits explizit gelernt haben"
output_schema:
  type: "object"
  fields:
    - field: "language_demand_profile"
      type: "object"
      description: "Analyse über vier Dimensionen: Vokabular, Grammatik, Diskurs und Genre"
    - field: "scaffold_recommendations"
      type: "object"
      description: "Spezifische Scaffolds für jede Sprachanforderungs-Dimension"
    - field: "priority_actions"
      type: "array"
      description: "Die 2–3 höchstwirksamen Scaffolds wenn Zeit limitiert ist"
    - field: "teacher_language_notes"
      type: "string"
      description: "Wie die LP-eigene Sprachnutzung während der Aufgabe den Zugang unterstützen kann"
chains_well_with:
  - "wortschatz-stufung"
  - "sprachliche-aufgabenanpassung"
  - "fachsprache-satzrahmen"
teacher_time: "3 minutes"
tags: ["DaZ", "sprachliche-anforderungen", "BICS-CALP", "sprachliche-stützung", "fachsprache"]
---

# Analyzer für sprachliche Anforderungen

## Was dieser Skill leistet

Identifiziert die sprachlichen Anforderungen einer Aufgabe über vier Dimensionen — Vokabular (Stufe 1/2/3), Grammatik (Satzkomplexität, Tempus, Aktiv/Passiv, Modalität), Diskurs (Textstruktur, Kohäsion, Absatzorganisation) und Genre (Zweck, Zielgruppe, Register) — und empfiehlt spezifische Scaffolds für jede Dimension. Die Analyse sichtbar macht die Sprache, die die Aufgabe VORAUSSETZT, aber selten explizit unterrichtet wird und enthüllt die verborgenen sprachlichen Barrieren, die DaZ-SuS am Demonstrieren ihres Fachwissens hindern. KI ist hier wertvoll, weil die meisten LP Experten in ihrem Fachinhalt sind, aber nicht in den Sprachmerkmalen, die ihre Aufgaben erfordern — sie wissen, wie eine gute naturwissenschaftliche Schlussfolgerung aussieht, können aber die spezifischen grammatischen Strukturen, Diskursmuster und Vokabularstufungen nicht unbedingt benennen, die sie benötigt.

## Evidenzgrundlage

Cummins (1981, 2000) unterschied zwischen Basic Interpersonal Communication Skills (BICS) — der alltäglichen Sprachflüssigkeit, die DaZ-SuS typischerweise innerhalb 1–2 Jahren entwickeln — und Cognitive Academic Language Proficiency (CALP) — der Schulsprache, die für Lernziele erforderlich ist und 5–7 Jahre braucht. Diese Unterscheidung ist kritisch, weil SuS, die im Gespräch flüssig wirken, noch die Schulsprache für Aufgaben brauchen. Gibbons (2002, 2015) operationalisierte diese Unterscheidung in Unterrichtspraxis und zeigte, dass Sprachanforderungen explizit identifiziert und gestützt werden müssen — "Immersion" allein ist für Schulsprachentwicklung unzureichend. Schleppegrell (2004) demonstrierte, dass Schulsprache nicht einfach "schwerer" ist als alltägliche Sprache — sie ist strukturell unterschiedlich, nutzt Nominalisierung, Passiv, komplexe Nominalphrasen und abstrakte Vokabeln auf Wegen, die Alltagsgespräche nicht tun. Zwiers (2014) bietet ein praktisches Rahmenwerk zur Identifikation und Vermittlung von Fachsprache über Fächer hinweg, betont aber, dass Sprachanforderungen nach Fach variieren. Bailey & Heritage (2008) zeigten, dass Sprachanforderungen in allen Aufgaben vorhanden sind, nicht nur Literatur-Aufgaben — eine Mathematik-Aufgabe hat Sprachanforderungen (das Problem lesen, mathematisches Vokabular verstehen, Überlegungen erklären), die für LP unsichtbar, aber für DaZ-SuS deutliche Barrieren sind.

## Input Schema

Die LP muss bereitstellen:
- **Aufgabenbeschreibung:** Die spezifische Aufgabe. *z. B. "Schreibe eine Schlussfolgerung für ein Experiment über Reibung" / "Lies einen Textbuch-Auszug und antworte auf Verständnisfragen zu Ursachen des 1. Weltkriegs" / "Nimm teil an einer Klassendebatte, ob Zoos verboten werden sollten"*
- **SuS-Niveau:** Klassenstufe. *z. B. "8. Klasse Sek 1"*
- **Fach:** Das Fach. *z. B. "Naturwissenschaften" / "Geschichte" / "Deutsch" / "Mathematik"*

Optional (aus Kontextmodell, falls vorhanden):
- **Sprachniveau:** DaZ-Sprachniveau
- **SuS-Profile:** Muttersprachen, Zeit in deutschsprachigem Unterricht, spezifische Bedarfe
- **Aufgabenmaterialien:** Beschreibung von Texten oder Ressourcen
- **Früherer Sprachunterricht:** Sprachmerkmale, die bereits unterrichtet wurden

## Prompt

```
Du bist Experte/Expertin für Sprachentwicklung und DaZ-Pädagogik mit tiefem Wissen über Cummins' (1981, 2000) BICS/CALP-Rahmen, Gibbons' (2002, 2015) Scaffold-Ansatz, Schleppegrels (2004) funktionale Analyse von Schulsprache und Zwiers' (2014) Fachsprachen-Rahmen. Du verstehst, dass jede Aufgabe Sprachanforderungen hat, die oft LP unsichtbar sind, aber DaZ-SuS deutliche Barrieren darstellen.

Deine Aufgabe ist es, die Sprachanforderungen zu analysieren:

**Aufgabe:** {{task_description}}
**SuS-Niveau:** {{student_level}}
**Fach:** {{subject_area}}

Der folgende optionale Kontext kann bereitgestellt werden oder nicht. Nutze das, was verfügbar ist; ignoriere Felder mit "nicht vorhanden".

**Sprachniveau:** {{language_proficiency}} — falls nicht vorhanden, analysiere Anforderungen, die SuS verschiedener DaZ-Sprachniveaus betreffen würden, von Anfangsstadium bis Gefestigtes Stadium.
**SuS-Profile:** {{student_profiles}} — falls nicht vorhanden, nimm an, dass mehrere SuS entwicklungssprachig mit alltäglicher Flüssigkeit, aber limitierter Schulsprache sind.
**Aufgabenmaterialien:** {{task_materials}} — falls nicht vorhanden, inferiere typische Materialien für diesen Aufgabentyp.
**Früherer Sprachunterricht:** {{prior_language_instruction}} — falls nicht vorhanden, nimm an, dass kein expliziter Sprachunterricht für diese Aufgabe gegeben wurde.

Analysiere Sprachanforderungen über diese vier Dimensionen:

1. **Vokabular-Anforderungen (Beck et al., 2002; Zwiers, 2014):**
   - **Stufe 1 (alltägliche Wörter):** Häufige Wörter, die DaZ-SuS trotzdem nicht kennen — besonders Idiome, Phrasenverben und kulturelle Begriffe.
   - **Stufe 2 (akademische Vokabeln):** Hochfrequente Wörter über Fächer hinweg — "analysieren," "bedeutsam," "Beweise," "kontrastieren," "bewerten." Das höchste Lehrprioritäts-Vokabular, weil es in jedem Fach erscheint, aber nirgends unterrichtet wird.
   - **Stufe 3 (technisches Vokabular):** Fachspezifische Begriffe — "Fotosynthese," "Alliteration," "Hypotenuse." Normalerweise explizit im Fach unterrichtet.
   - Identifiziere spezifisches Vokabular, nicht nur Kategorien.

2. **Grammatik-Anforderungen (Schleppegrell, 2004; Gibbons, 2015):**
   - Satzkomplexität: einfache, zusammengesetzte oder komplexe Sätze erforderlich?
   - Tempus-Anforderungen: welche Tempora muss die SuS nutzen? (Naturwissenschaftliche Schlussfolgerungen nutzen Vergangenheit für Methode, Gegenwart für Schlussfolgerungen; Geschichte nutzt Vergangenheit durchgehend.)
   - Aktiv/Passiv: aktiv oder passiv? (Naturwissenschaften fordern oft Passiv: "die Lösung wurde erhitzt" statt "wir erhitzten die Lösung.")
   - Modalität: Abschwächungs-Sprache, Bedingungssätze? ("Die Ergebnisse deuten hin..." "Wenn die Temperatur stieg, dann...")
   - Nominalisierung: Prozesse zu Nomina? ("verdunsten" → "Verdunstung"; "das Wasser bewegte sich" → "die Wasserbewegung")
   - Identifiziere SPEZIFISCHE Grammatik-Anforderungen mit Beispielen aus der Aufgabe.

3. **Diskurs-Anforderungen (Schleppegrell, 2004; Zwiers, 2014):**
   - Textstruktur: welches Organisationsmuster erfordert die Aufgabe? (Chronologisch, Ursache-Wirkung, Vergleich-Gegensatz, Aussage-Beweise-Begründung)
   - Kohäsion: welche Bindewörter und Verknüpfungsgeräte sind nötig? (Kausal: "weil," "daher"; Vergleichend: "allerdings," "im Gegensatz dazu"; Sequenziell: "zunächst," "anschließend")
   - Absatz-Struktur: erfordert die Aufgabe Mehrabs atz-Organisation?
   - Referenz: muss die Aufgabe auf frühere Punkte oder Quellen verweisen?

4. **Genre-Anforderungen (Gibbons, 2002; Schleppegrell, 2004):**
   - Welches Genre müssen SuS produzieren oder verstehen? (Bericht, Erklärung, Argument, Erzählung, Bericht, Diskussion)
   - Welches Register ist erforderlich? (Formal/informell, akademisch/alltäglich, unpersönlich/persönlich)
   - Was ist der Zweck und die Zielgruppe? (Zu erklären, zu überzeigen, zu beschreiben, zu bewerten)
   - Gibt es fachspezifische Genre-Konventionen? (Naturwissenschaftliche Berichte unterscheiden sich von historischen Argumentationen)

Für jede Dimension bereitgestelle:
- Die identifizierten spezifischen Sprachanforderungen
- Warum diese Anforderungen für die LP möglicherweise unsichtbar sind
- Spezifische, praktische Scaffolds für jede Anforderung

Gib deine Ausgabe in exakt diesem Format zurück:

## Analyse der Sprachanforderungen: [Aufgabe]

**Für:** [SuS-Niveau] [Fach]
**Aufgabe:** [Kurzbeschreibung der Aufgabe]

### Sprachanforderungs-Profil

**Vokabular-Anforderungen**
[Stufe 1, 2 und 3 Vokabular identifiziert mit spezifischen Wörtern aufgelistet]

**Grammatik-Anforderungen**
[Spezifische grammatische Strukturen erforderlich mit Beispielen]

**Diskurs-Anforderungen**
[Textstruktur, Kohäsion und Organisations-Anforderungen]

**Genre-Anforderungen**
[Genre, Register, Zweck und fachspezifische Konventionen]

### Scaffold-Empfehlungen

**Für Vokabular:** [Spezifische Scaffolds]
**Für Grammatik:** [Spezifische Scaffolds]
**Für Diskurs:** [Spezifische Scaffolds]
**Für Genre:** [Spezifische Scaffolds]

### Prioritäts-Maßnahmen (wenn Zeit limitiert ist)

[Die 2–3 höchstwirksamen Scaffolds — die, die den größten Unterschied für DaZ-SuS machen, um diese Aufgabe zu bewältigen]

### Notizen zur LP-Sprache

[Wie die LP-eigene Sprachnutzung während der Aufgabe — Instruktionen, Erklärungen, Fragen — Zugang unterstützen oder behindern kann]

**Selbstkontrolle vor Rückgabe:** Verifiziere, dass (a) alle vier Sprachdimensionen mit spezifischen Beispielen analysiert sind, (b) Scaffolds praktisch und aufgabenspezifisch sind, (c) die Analyse Sprachanforderungen identifiziert, die eine Subject-LP möglicherweise nicht bemerkt, (d) Prioritäts-Maßnahmen sich auf die höchstwirksamen Scaffolds konzentrieren, und (e) die Analyse zwischen Sprache unterscheidet, die vorunterrichtet werden sollte und Sprache, die während der Aufgabe gestützt werden kann.
```

## Beispielausgabe

**Szenario:** *Aufgabe: "Schreibe eine Schlussfolgerung für ein Naturwissenschaften-Experiment, das die Wirkung der Oberflächengröße auf die Lösungsgeschwindigkeit untersucht" / SuS-Niveau: "8. Klasse Sek 1" / Fach: "Naturwissenschaften (Chemie)" / Sprachniveau: "Mehrere SuS auf Anfangs- und Entwicklungsstadium"*

---

## Analyse der Sprachanforderungen: Schlussfolgerung eines Naturwissenschaften-Experiments

**Für:** 8. Klasse Sek 1 Naturwissenschaften (Chemie)
**Aufgabe:** Schreibe eine Schlussfolgerung für ein Experiment, das untersucht, wie Oberflächengröße die Lösungsgeschwindigkeit beeinflusst

### Sprachanforderungs-Profil

**Vokabular-Anforderungen**

| Stufe | Wörter | Notizen |
|-------|--------|---------|
| Stufe 1 (alltäglich — aber potenziell unfamiliar für DaZ) | "Geschwindigkeit" (hat alltägliche Bedeutung UND wissenschaftliche Bedeutung), "Oberfläche" (abstraktes Raumkonzept), "lösen" (nicht häufig in alltäglichen Gesprächen), "zerquetscht" | "Geschwindigkeit" ist besonders problematisch — DaZ-SuS kennen es möglicherweise als "Fahrtgeschwindigkeit", aber nicht "Reaktionsgeschwindigkeit." Der alltäglich-zu-akademisch Übergang überrascht SuS. |
| Stufe 2 (akademisch — fächerübergreifend) | "untersuchen," "Wirkung," "schlussfolgern," "bedeutsam," "daher," "demonstrieren," "Beweise," "stützen" (wie in "stützt die Hypothese") | Diese Wörter sind in der Schlussfolgerung nötig, werden aber selten im Naturwissenschaften-Unterricht unterrichtet. "Stützen" ist besonders verwirrend — DaZ-SuS kennen es als "helfen/tragen", nicht "Belege liefern für." |
| Stufe 3 (technisch — fachspezifisch) | "Oberflächengröße," "Lösungsgeschwindigkeit," "gelöster Stoff," "Lösungsmittel," "Partikel," "Stoß," "Hypothese," "Variable," "kontrollierte Variable" | Diese sollten während des Experiments unterrichtet worden sein, sind aber möglicherweise nicht gefestigt. "Oberflächengröße" ist ein Nominalausdruck, der beide Wörter braucht, um Sinn zu machen. |

**Grammatik-Anforderungen**

- **Tempus-Versatz:** Die Schlussfolgerung erfordert VERGANGENHEIT für das, was passierte ("Der zerquetschte Zucker löste sich schneller") und GEGENWART für wissenschaftliche Erklärung ("Das ist, weil kleinere Partikel eine größere Oberflächengröße haben"). DaZ-SuS im Anfangsstadium nutzen oft ein einziges Tempus durchgehend oder vermeiden Tempus-Marker ganz.
- **Passiv:** Naturwissenschaftliche Konventionen fordern Passiv-Konstruktionen: "Das Experiment wurde wiederholt" nicht "Wir wiederholten das Experiment"; "Die Ergebnisse wurden aufgezeichnet" nicht "Ich zeichnete die Ergebnisse auf." Passiv ist eine der letzten grammatischen Strukturen, die DaZ-Lerner erwerben — es ist selten in alltäglichem Deutsch und strukturell komplex.
- **Kausalverbindungen:** Die Schlussfolgerung erfordert Ursache-Wirkung-Sprache: "weil," "daher," "infolgedessen," "das ist bedingt durch," "das bedeutet, dass." SuS im Entwicklungsstadium haben möglicherweise nur "weil" im Repertoire.
- **Abschwächung/Modalität:** Wissenschaftliche Schlussfolgerungen erfordern vorsichtige Sprache: "Die Ergebnisse deuten hin..." "Das könnte bedeuten..." "Es ist wahrscheinlich, dass..." DaZ-SuS neigen dazu, kategorialer zu schreiben: "Das beweist..." — was tatsächlich wissenschaftlich weniger genau ist.
- **Nominalisierung:** "Der Zucker löste sich" (Prozess) → "die Lösungsgeschwindigkeit" (nominalisiert). "Die Partikel stoßen zusammen" → "die Stoßgeschwindigkeit." Nominalisierung ist ein Kennzeichen akademischen Schreibens und besonders herausfordernd, weil es vertraute Verben zu unfamiliaren Nomina macht.

**Diskurs-Anforderungen**

- **Textstruktur:** Die Schlussfolgerung erfordert ein spezifisches Muster: Ergebnis angeben → Mit Wissenschaft erklären → Mit Hypothese verbinden → Einschränkungen anerkennen. Diese Struktur ist nicht intuitiv und wird selten explizit gemacht.
- **Kohäsion:** Die Schlussfolgerung muss Ideen logisch verbinden: "Die Ergebnisse zeigen, dass... Das ist weil... Daher... Das stützt die Hypothese, dass..." Jeder Satz muss mit dem vorherigen verbunden sein. DaZ-SuS im unteren Sprachniveau schreiben oft unverbundene Sätze.
- **Referenz:** Die Schlussfolgerung muss auf die Hypothese, die Methode und die Ergebnisse verweisen — erfordert Pronomen und Referenzketten: "Dieses Muster... Diese Ergebnisse... Die Daten deuten hin..."

**Genre-Anforderungen**

- **Genre:** Wissenschaftliche Schlussfolgerung — ein spezifisches Schulwissenschafts-Genre mit seinen eigenen Konventionen (unterschiedlich von einer "Schlussfolgerung" in Deutsch oder Geschichte).
- **Register:** Formal, unpersönlich, akademisch. Kein "ich" oder "wir" (in vielen Schulwissenschafts-Konventionen). Technisches Vokabular erwartet.
- **Zweck:** Erklären, was die Ergebnisse im Sinne des wissenschaftlichen Konzeptes bedeuten — nicht erzählen, was passierte.
- **Fachspezifische Konvention:** Die Schlussfolgerung muss wissenschaftliches Reasoning demonstrieren, nicht persönliche Meinung. "Ich denke, der Zucker löste sich schneller" ist unzureichend — "Die Daten demonstrieren, dass größere Oberflächengröße die Lösungsgeschwindigkeit erhöht weil..." ist erforderlich.

### Scaffold-Empfehlungen

**Für Vokabular:**
- Vorunterricht von Stufe 2 Vokabular explizit: "demonstrieren," "bedeutsam," "stützen" (in akademischem Sinn), "Beweise." Nutze eine schnelle Zuordnungs-Aktivität: akademisches Wort → schülerfreundliche Definition → Beispiel in Naturwissenschafts-Satz.
- Bereitstellung eines zweisprachigen Glossars für Stufe 3 Begriffe, wenn Muttersprachen der SuS bekannt sind — das erlaubt SuS, neue englische Begriffe mit Konzepten zu verbinden, die sie möglicherweise bereits verstehen.
- Erstelle eine wand-Anzeige spezifisch für dieses Experiment: visuelles Display von Schlüsselbegriffen mit Diagrammen.

**Für Grammatik:**
- Bereitstellung einer Tempus-Anleitung: "Wenn du beschreibst, WAS PASSIERTE → nutze Vergangenheit (löste sich, erhöhte). Wenn du erklärst, WARUM → nutze Gegenwart (Partikel haben, Oberflächengröße erhöht)."
- Bereitstellung von Passiv-Satzrahmen: "Das Experiment wurde durchgeführt um..." "Die Ergebnisse wurden aufgezeichnet von..." "Es wurde festgestellt, dass..."
- Unterricht 3 kausale Bindewörter explizit: "weil" (sie kennen das), "daher" (neu — bedeutet "also, infolgedessen"), "das ist bedingt durch" (formale Alternative zu "wegen von"). Zeige diese auf der Tafel während des Schreibens.
- Bereitstellung von Abschwächungs-Phrasen auf einer Karte: "Die Ergebnisse deuten hin..." "Das könnte sein, weil..." "Es ist wahrscheinlich, dass..." — erkläre, dass Wissenschaftler diese nutzen, weil Wissenschaft Belege, nicht Gewissheit, betrifft.

**Für Diskurs:**
- Bereitstellung einer Schlussfolgerungs-Struktur-Vorlage mit Überschriften: Ergebnis → Erklärung → Hypothesen-Link → Einschränkungen. SuS schreibt unter jedem Überschrift-Bereich statt eines unstrukturierten Absatzes.
- Bereitstellung von Satzanfängen für Kohäsion: "Die Ergebnisse zeigen, dass..." → "Das kann erklärt werden durch..." → "Das stützt/widerlegt die Hypothese weil..." → "Allerdings war eine Einschränkung..."
- Modelliere die Verknüpfung explizit: "Sieh, wie jeder Satz mit dem vorherigen verbunden ist. Dieses Wort — 'daher' — sagt der Leserin/dem Leser, dass das Folgende eine FOLGE von dem ist, was davor kam."

**Für Genre:**
- Zeige zwei Beispiele nebeneinander: eine narrative Aufzählung des Experiments ("Zuerst zerquetschten wir den Zucker, dann legten wir ihn ins Wasser...") und eine wissenschaftliche Schlussfolgerung ("Die Ergebnisse demonstrieren, dass das Zerquetschen des Zuckers die Lösungsgeschwindigkeit erhöhte weil..."). Frage: "Was ist der Unterschied? Warum ist das Zweite besser für Naturwissenschaften?"
- Unterrichte die Genre-Regel explizit: "Eine Schlussfolgerung erklärt, was die Ergebnisse BEDEUTEN, nicht was du GETAN hast."

### Prioritäts-Maßnahmen (wenn Zeit limitiert ist)

1. **Bereitstellung der Schlussfolgerungs-Struktur-Vorlage mit Satzanfängen.** Dieses einzelne Scaffold adressiert Diskurs-Anforderungen (Textstruktur, Kohäsion) und Grammatik-Anforderungen (Tempus, kausale Bindewörter) gleichzeitig. Es erlaubt DaZ-SuS, ihre kognitive Energie auf die NATURWISSENSCHAFTEN zu konzentrieren statt auf das Kampfes-Wie-man-schreibt.

2. **Vorunterricht von 3 Schlüssel-Stufe 2 Wörtern: "demonstrieren," "daher," "deuten hin."** Diese drei Wörter werden wiederholt in Naturwissenschafts-Schlussfolgerungen erscheinen und sind über Fächer hinweg übertragbar. Fünf Minuten expliziter Unterricht mit Beispielen zahlt sich über viele zukünftige Aufgaben aus.

3. **Zeige die Tempus-Regel an der Tafel.** Vergangenheit für das, was passierte, Gegenwart für warum. Diese einfache visuelle Referenz verhindert den häufigsten grammatischen Fehler in Naturwissenschafts-Schlussfolgerungen und benötigt keine Unterrichtszeit — nur eine Tafel-Anzeige.

### Notizen zur LP-Sprache

- **Verlangsame Instruktionen, nicht Inhalte.** Bei Aufgaben-Instruktionen spreche in gemessenem Tempo, nutze kürzere Sätze und wiederhole Schlüsselbegriffe. VEREINFACHE NICHT den wissenschaftlichen Inhalt — Vereinfachung der Sprachanforderungen unterscheidet sich von Vereinfachung des Denkens.
- **Vermeide Idiome in Aufgaben-Instruktionen.** "So, lass uns das abschließen" (verwirrend), vs. "Jetzt schreibe deine Schlussfolgerung" (klar). "Das ist ein Kinderspiel" (verwirrend) vs. "Das ist unkompliziert" (immer noch idiomatisch, aber transparenter).
- **Sag Schlüsselvokabeln UND schreib es.** DaZ-SuS verarbeiten schriftliches Deutsch verlässlicher als gesprochenes (weil sie re-lesen, aber nicht re-hören können). Schreib Schlüsselbegriffe auf die Tafel während du sie sprichst.
- **Nutze konsistente Terminologie.** Wechsle nicht zwischen "Schlussfolgerung," "Zusammenfassung," "Bericht" und "letzter Absatz" — wähle einen Begriff und bleib dabei. Synonyme Variation, die Muttersprachler natürlich nutzen, erzeugt unnötige Verarbeitungsbelastung für DaZ-Lerner.
- **Prüfe das Verständnis der AUFGABE, nicht nur der NATURWISSENSCHAFTEN.** Eine DaZ-SuS versteht die Naturwissenschaften möglicherweise perfekt, versteht aber nicht, was "schreib eine Schlussfolgerung" von ihr verlangt. Prüfe: "Was sind die vier Teile deiner Schlussfolgerung? Was kommt zuerst?"

---

## Bekannte Einschränkungen

1. **Die Analyse identifiziert Sprachanforderungen auf genereller Ebene — kann die spezifischen Spracherfordernisse einzelner SuS nicht vorhersagen.** Eine SuS, deren Muttersprache Italienisch ist, wird andere englische Herausforderungen haben als eine SuS, deren Muttersprache Chinesisch ist (z. B. Artikel-Nutzung, Tempus-Markierung, Wortfolge). Die LP-eigene Kenntnis einzelner SuS Muttersprachen und Sprachniveaus ist essentiell, um Scaffolds anzupassen.

2. **Sprachanforderungen interagieren mit kognitiven Anforderungen, und die Analyse behandelt sie getrennt zur Klarheit.** In der Praxis konfrontiert mit sowohl wissenschaftlichen Konzepten als auch der Sprache, sie auszudrücken, eine SuS mit einer verstärkten Herausforderung. Die Scaffolds helfen mit Sprache, aber wenn die SuS nicht die Naturwissenschaften versteht, sind Sprach-Scaffolds allein unzureichend. Stelle sicher, dass konzeptuelles Verständnis sicher ist, bevor du dich auf Sprachproduktion konzentrierst.

3. **Die Analyse setzt voraus, dass die LP Scaffolds temporär nutzt.** Scaffolds sollten progressiv entzogen werden, wenn SuS Sprachfähigkeit entwickeln. Wenn Satzrahmen permanent bereitgestellt werden, können SuS abhängig werden, statt unabhängige Schulsprache zu entwickeln. Das Ziel ist Kapazitäts-Aufbau, nicht permanente Unterstützungs-Erstellung.
