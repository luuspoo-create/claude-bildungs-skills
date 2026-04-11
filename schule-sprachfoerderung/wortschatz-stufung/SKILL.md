---
# AGENT SKILLS STANDARD FIELDS (v2)
name: wortschatz-stufung
description: "Stufe Wortschatz aus einem Text oder Thema in alltäglich, akademisch und technisch mit Lehrpriorität. Nutze diesen Skill bei Vorunterricht von Vokabeln oder Identifikation sprachlicher Barrieren in Texten."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-sprachfoerderung/wortschatz-stufung"
skill_name: "Instrument zur Wortschatz-Stufung"
domain: "schule-sprachfoerderung"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Beck, McKeown & Kucan (2002, 2013) — Bringing Words to Life: robuste Wortschatz-Unterricht"
  - "Nation (2001) — Learning Vocabulary in Another Language"
  - "Coxhead (2000) — The Academic Word List: ein neuer Blick auf akademisches Vokabular"
  - "Stahl & Nagy (2006) — Teaching Word Meanings"
  - "Graves (2006) — The Vocabulary Book: learning and instruction"
input_schema:
  required:
    - field: "text_or_topic"
      type: "string"
      description: "Der Text-Auszug oder das Thema, das auf Vokabular analysiert wird"
    - field: "student_level"
      type: "string"
      description: "Klassenstufe/Alter"
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
  optional:
    - field: "language_proficiency"
      type: "string"
      description: "DaZ-Sprachniveau von Ziel-SuS"
    - field: "student_profiles"
      type: "array"
      description: "Aus Kontextmodell: Muttersprachen, identifizierte Wortschatz-Lücken aus früherer Einschätzung"
    - field: "lesson_focus"
      type: "string"
      description: "Was die Stunde ist — hilft, welches Vokabular am wichtigsten ist zu priorisieren"
    - field: "word_count_limit"
      type: "integer"
      description: "Maximum Anzahl Wörter vorauszuunterichten — hilft die LP zu fokussieren"
output_schema:
  type: "object"
  fields:
    - field: "tiered_vocabulary"
      type: "object"
      description: "Komplette Vokabular-Analyse mit Wörtern kategorisiert in Stufe 1, 2 und 3"
    - field: "teaching_sequence"
      type: "array"
      description: "Priorisierte Sequenz von Wörtern zu unterrichten mit Unterrichts-Methode für jede"
    - field: "word_teaching_cards"
      type: "array"
      description: "Für jedes Prioritäts-Wort: Definition, Beispiel in Kontext, visueller Hinweis, häufige Verwirrungen"
    - field: "quick_check"
      type: "string"
      description: "Eine kurze Aktivität zum Prüfen des Vokabular-Verständnisses"
chains_well_with:
  - "sprachliche-anforderungen"
  - "sprachliche-aufgabenanpassung"
  - "fachsprache-satzrahmen"
teacher_time: "3 minutes"
tags: ["wortschatz", "stufung", "Stufe-2", "fachsprache", "DaZ", "wort-unterricht"]
---

# Instrument zur Wortschatz-Stufung

## Was dieser Skill leistet

Nimmt einen Text-Auszug oder ein Thema und stuft alle bedeutsamen Wörter in Stufe 1 (alltäglich), Stufe 2 (akademisch, fächerübergreifend) und Stufe 3 (technisch, fachspezifisch), generiert dann eine priorisierte Unterrichts-Sequenz, die sich auf Stufe 2 Wörter konzentriert — das Hochfrequenz-akademische Vokabular, das fächerübergreifend erscheint, aber selten explizit in jedem unterrichtet wird. Das Ergebnis enthält die gestaffelte Analyse, eine Unterrichts-Sequenz mit empfohlenen Methoden für jedes Wort, Wort-Unterrichts-Karten mit Definitionen, Kontext-Beispielen, visuellen Hinweisen und häufigen Verwirrungen sowie eine schnelle Vokabular-Prüfungs-Aktivität. KI ist hier wertvoll, weil Wortschatz-Stufung sowohl Häufigkeits-Daten (wie häufig ist dieses Wort in allgemeinem Deutsch vs. akademischem Deutsch?) als auch pädagogisches Urteilsvermögen erfordert (welche Wörter werden diese spezifische SuS-Gruppe bereits wissen und welche werden Zugang zum Lerninhalt eröffnen?).

## Evidenzgrundlage

Beck, McKeown & Kucan (2002, 2013) etablierten das Drei-Stufen-Vokabular-Rahmenwerk, das zur Grundlage für Wortschatz-Unterricht wurde: Stufe 1 Wörter sind einfach, Hochfrequenz-Wörter, die die meisten Muttersprachler kennen (Haus, glücklich, laufen); Stufe 2 Wörter sind Hochfrequenz-Wörter, die über akademische Kontexte erscheinen und essentiell für Verständnis, aber oft nicht explizit unterrichtet sind (analysieren, bedeutsam, kontrastieren, demonstrieren, außerdem); Stufe 3 Wörter sind Niedrigfrequenz-, domänen-spezifische Begriffe (Fotosynthese, Alliteration, Nenner). Ihre Schlüsselerkenntnis: Stufe 2 Wörter sind das höchste-Hebelwort-Ziel für Vokabular-Unterricht, weil sie häufig genug sind, über alle Fächer hinweg zu zählen, aber sind selten erworben durch alltägliche Konversation. Nation (2001) bestätigte, dass akademisches Vokabular (ungefähr äquivalent zu Stufe 2) ein kritischer Schwellenwert für akademischen Erfolg ist — SuS, die akademisches Vokabular mangeln, kämpfen über alle Fächer, nicht nur Deutsch. Coxhead (2000) kompilierte die Academic Word List (AWL) — 570 Wort-Familien, die ungefähr 10% akademischen Textes ausmachen — bereitstellung einer empirischen Grundlage zur Identifikation von Stufe 2 Vokabular. Stahl & Nagy (2006) demonstrierten, dass effektiver Vokabular-Unterricht mehrfache Expositionen in mehrfachen Kontexten erfordert — eine einzelne Definition ist unzureichend. Graves (2006) etablierte vier Komponenten umfassenden Vokabular-Unterrichts: breites Lesen, Unterricht einzelner Wörter, Unterricht Wort-Lern-Strategien und Förderung Wort-Bewusstsein.

## Input Schema

Die LP muss bereitstellen:
- **Text oder Thema:** Entweder einen Auszug aus einem Text, den SuS lesen werden, oder eine Thema-Beschreibung. *z. B. "8. Klasse Geschichtsbuch-Auszug zur Industriellen Revolution" / "Das Thema Fotosynthese für 7. Klasse Naturwissenschaften" / [Einfügen von tatsächlichem Text-Auszug]*
- **SuS-Niveau:** Klassenstufe. *z. B. "9. Klasse Sek 1"*
- **Fach:** Das Fach. *z. B. "Geschichte" / "Naturwissenschaften" / "Deutsch" / "Geografie"*

Optional (aus Kontextmodell, falls vorhanden):
- **Sprachniveau:** DaZ-Sprachniveau
- **SuS-Profile:** Muttersprachen, bekannte Wortschatz-Lücken
- **Stunden-Fokus:** Was die Stunde betrifft
- **Wort-Limit:** Maximale Anzahl vorauszuunterrichtender Wörter (Standard: 5–8)

## Prompt

```
Du bist Experte/Expertin für Wortschatz-Unterricht und akademische Sprachentwicklung mit tiefem Wissen über Beck, McKeown & Kucans (2002, 2013) Drei-Stufen-Vokabular-Rahmenwerk, Nations (2001) Arbeiten zum Vokabular-Lernen, Coxheads (2000) Academic Word List und Stahl & Nagys (2006) Prinzipien effektiven Vokabular-Unterrichts. Du verstehst, dass Stufe 2 Vokabular das höchste-Hebelwort-Ziel für expliziten Unterricht ist — diese Wörter erscheinen fächerübergreifend, sind für Verständnis essentiell, werden aber selten direkt unterrichtet.

Deine Aufgabe ist es, das Vokabular zu analysieren und zu stufen:

**Text oder Thema:** {{text_or_topic}}
**SuS-Niveau:** {{student_level}}
**Fach:** {{subject_area}}

Der folgende optionale Kontext kann bereitgestellt werden oder nicht. Nutze das, was verfügbar ist; ignoriere Felder mit "nicht vorhanden".

**Sprachniveau:** {{language_proficiency}} — falls nicht vorhanden, stufe Vokabular annehmend, dass die Klasse DaZ-SuS auf Entwicklungsstadium enthält neben Muttersprachlern mit variierendem Vokabular-Breite.
**SuS-Profile:** {{student_profiles}} — falls nicht vorhanden, nimm an, dass gemischte Sprach-Hintergründe mit alltäglicher Flüssigkeit, aber limitiertem akademischen Vokabular.
**Stunden-Fokus:** {{lesson_focus}} — falls nicht vorhanden, nutze den Text/das Thema, um zu inferieren, welches Vokabular am wichtigsten für Verständnis ist.
**Wort-Limit:** {{word_count_limit}} — falls nicht vorhanden, wähle 5–8 Prioritäts-Wörter für expliziten Unterricht.

Wende diese evidenzgestützten Prinzipien an:

1. **Drei-Stufen-Klassifikation (Beck, McKeown & Kucan, 2002):**
   - **Stufe 1:** Einfach, Hochfrequenz-Wörter, die die meisten SuS wissen. ABER — für DaZ-SuS sind manche Stufe 1 Wörter NICHT bekannt, besonders: Idiome ("Hals über Kopf"), Phrasenverben ("nachschlagen," "ablehnen"), Wörter mit mehrfachen Bedeutungen ("Tisch" als Nomen/Verb, "Lauf" in Dutzenden Sinne), und kulturell eingebettete Begriffe. Markiere diese.
   - **Stufe 2:** Akademisch, fächerübergreifende Wörter. DIESE sind die PRIORITÄT. Sie erscheinen in Coxheads Academic Word List oder Äquivalent und sind für akademischen Erfolg fächerübergreifend essentiell. Beispiele: analysieren, bedeutsam, Beweise, kontrastieren, außerdem, demonstrieren, bewerten, zeigen an, folglich, während.
   - **Stufe 3:** Fachspezifisches technisches Vokabular. Normalerweise innerhalb des Fachs unterrichtet. Wichtig, aber eng — eine SuS braucht "Fotosynthese" für Biologie, aber nicht für Geschichte.
   - Klassifiziere jedes bedeutsame Wort und erkläre die Klassifikation.

2. **Priorisiere Stufe 2 für expliziten Unterricht (Beck et al., 2002; Nation, 2001):**
   - Stufe 3 Wörter sind normalerweise von der Fach-LP als Teil des Themas unterrichtet.
   - Stufe 1 Wörter sind normalerweise bekannt (außer DaZ-spezifische Lücken notiert oben).
   - Stufe 2 Wörter fallen in die Lücke — von allen Fächern vorausgesetzt, von keinem unterrichtet. Diese sind die höchstwirksamsten Ziele.
   - Innerhalb von Stufe 2, priorisiere Wörter, die sind: (a) essentiell für diesen Text/Thema verstehen, (b) nützlich über mehrere Fächer hinweg, und (c) wahrscheinlich unbekannt der Ziel-SuS.

3. **Effektiver Wort-Unterricht erfordert Tiefe, nicht nur Definitionen (Stahl & Nagy, 2006; Graves, 2006):**
   - Für jedes Prioritäts-Wort, bereitstelle:
     a. Eine schülerfreundliche Definition (nicht eine Wörterbuch-Definition)
     b. Das Wort genutzt in Kontext (aus dem Text oder Thema)
     c. Ein visueller Hinweis oder merkbare Assoziation
     d. Häufige Verwirrungen oder falsche Freunde (besonders relevant für DaZ-SuS, dessen Muttersprache ein Cognate mit verschiedener Bedeutung haben kann)
   - Eine Exposition ist nicht genug — empfehle, wie man das Wort über die Stunde erneut besucht.

4. **Schnelle Prüfungs-Aktivität (Stahl & Nagy, 2006):**
   - Bereitstelle eine kurze Aktivität (2–3 Minuten) zum Prüfen, ob SuS das Schlüssel-Vokabular erfasst haben, bevor sie das Haupt-Ziel treffen.

Gib deine Ausgabe in exakt diesem Format zurück:

## Vokabular-Analyse: [Text/Thema]

**Für:** [SuS-Niveau] [Fach]
**Total bedeutsame Wörter identifiziert:** [Count]
**Prioritäts-Wörter für expliziten Unterricht:** [Count]

### Gestaffelte Wörter

**Stufe 1 — Alltäglich (mit DaZ-Notizen)**
[Wörter mit beliebige Notizen über DaZ-Herausforderungen — mehrfache Bedeutungen, Idiome, falsche Freunde]

**Stufe 2 — Akademisch (PRIORITÄT)**
[Wörter aufgelistet mit Brief-Definition und warum sie diesen Text/Thema zählen]

**Stufe 3 — Technisch**
[Fachspezifische Wörter, notierend, welche wahrscheinlich bereits unterrichtet sind]

### Unterrichts-Sequenz

[Geordnete Liste Prioritäts-Wörter zu unterrichten, beginnend mit essentiellsten für Verständnis]

### Wort-Unterrichts-Karten

Für jedes Prioritäts-Wort:
**[Wort]**
- **Schülerfreundliche Definition:** [Einfach-Sprache-Definition]
- **In Kontext:** [Das Wort genutzt in einem Satz aus oder verwandt mit dem Text/Thema]
- **Visueller/Gedächtnis-Hinweis:** [Ein Bild, Assoziation oder Eselsbrücke]
- **Aufpassen für:** [Häufige Verwirrungen, falsche Freunde oder mehrfache Bedeutungen]

### Schnelle Prüfungs-Aktivität

[Eine 2–3 Minuten-Aktivität zum Prüfen des Vokabular-Verständnisses, bevor SuS die Haupt-Aufgabe treffen]

**Selbstkontrolle vor Rückgabe:** Verifiziere, dass (a) Wörter korrekt gestaffelt sind, (b) Stufe 2 Wörter priorisiert sind für Unterricht, (c) Wort-Unterrichts-Karten Definition, Kontext, visueller Hinweis und Verwirrungen einschließen, (d) die Unterrichts-Sequenz nach Wichtigkeit für diesen spezifischen Text/Thema geordnet ist, (e) DaZ-spezifische Herausforderungen für Stufe 1 Wörter gekennzeichnet sind, und (f) die Schnelle Prüfung Verständnis prüft, nicht nur Abruf von Definitionen.
```

## Beispielausgabe

**Szenario:** *Text oder Thema: "9. Klasse Geografie-Lehrbuch-Auszug über Verstädterung in LDCs (Länder mit niedrigem Einkommen) — deckt Push- und Pull-Faktoren, Land-zu-Stadt-Migration, informelle Siedlungen und Herausforderungen schneller Verstädterung ab" / SuS-Niveau: "9. Klasse Sek 1" / Fach: "Geografie" / Sprachniveau: "Mehrere SuS auf Entwicklungsstadium"*

---

## Vokabular-Analyse: Verstädterung in LDCs

**Für:** 9. Klasse Sek 1 Geografie
**Total bedeutsame Wörter identifiziert:** 28
**Prioritäts-Wörter für expliziten Unterricht:** 6

### Gestaffelte Wörter

**Stufe 1 — Alltäglich (mit DaZ-Notizen)**

| Wort | DaZ-Notiz |
|------|-----------|
| "Druck" / "Zug" | Metaphorisch hier genutzt — nicht physikalischer Druck/Zug. DaZ-SuS könnte nur die wörtliche Bedeutung kennen. "Druck-Faktoren drücken Menschen WEG; Zug-Faktoren ziehen Menschen RICHTUNG." |
| "Siedlung" / "Siedlung" | Mehrfache Bedeutungen: "Beruhigung" (ruhig), "Entscheidung" (entscheiden), "Siedlung" (Ort Menschen leben). Geografie-Bedeutung ist spezifisch. |
| "Herausforderung" | Hier als Nomen ("Herausforderungen der Verstädterung") genutzt, nicht das Verb ("Ich stelle dich heraus"). Akademische Nomen-Nutzung könnte unfamiliar sein. |
| "Gelegenheit" | Könnte alltäglich bekannt sein, aber nicht in akademischem Sinne "wirtschaftliche Gelegenheit." |
| "Mangel" | Ein häufiges akademisches Wort, aber ungewöhnlich in alltäglichem Sprache — DaZ-SuS auf Entwicklungsstadium kennen es möglicherweise nicht. |

**Stufe 2 — Akademisch (PRIORITÄT)**

| Wort | Warum es zählt |
|------|---------------|
| **bedeutsam** | Durchgehend genutzt: "bedeutsame Erhöhung," "bedeutsame Herausforderungen." Essentiell für Geografie-Schreiben. Erscheint in jedem Fach. |
| **folglich** | Schlüssel-Kausal-Bindeword: "Folglich wuchsen Städte schnell." SuS brauchen dies für Ursache-und-Wirkung-Erklärungen in ihrem Schreiben. |
| **Faktor** | Zentral zum Thema: "Druck-Faktoren," "Zug-Faktoren." Über Geografie, Geschichte, Naturwissenschaften genutzt. Oft missverstanden als "Fakt." |
| **Migration** | Grenzfall Stufe 2/3 — technisch in Geografie, aber zunehmend in allgemeinem akademischem und Medien-Kontext genutzt. Wurzel "Migrieren" verbindet zu mehreren Wörtern. |
| **Infrastruktur** | Kritisch für Verstädterung-Diskussion: "Infrastruktur-Mangel." Über Geografie, Wirtschaft, Einbürgerung genutzt. |
| **unzureichend** | Genutzt um Dienste in informellen Siedlungen zu beschreiben: "unzureichende Hygiene." Mächtiges bewertetes Wort nützlich über Fächer hinweg. |

**Stufe 3 — Technisch**

| Wort | Notizen |
|------|---------|
| Verstädterung | Kern-Thema-Wort — sollte am Anfang der Einheit definiert werden |
| Land-zu-Stadt-Migration | Zusammengesetzter Begriff — braucht explizites Auspacken |
| Informelle Siedlung | Technischer Geografie-Begriff — SuS kennen möglicherweise "Slum," aber "informelle Siedlung" ist der akademische Begriff |
| LDC / HDC | Abkürzungen (Land mit niedrigem Einkommen / Land mit hohem Einkommen) — brauchen expliziten Unterricht |
| Megastadt | Technischer Begriff — Stadt mit 10+ Millionen Einwohner |
| Druck-Faktor / Zug-Faktor | Technische Anwendung alltäglicher Wörter — brauchen explizite Definition |

### Unterrichts-Sequenz

Unterrichte in dieser Reihenfolge (essentiellste für Verständnis zuerst):

1. **Faktor** — ohne dies ist das ganze Thema-Rahmenwerk (Druck/Zug-Faktoren) unzugänglich
2. **bedeutsam** — erscheint durchgehend und wird für SuS-Schreiben benötigt
3. **Infrastruktur** — essentiell um Verstädterungs-Herausforderungen zu verstehen
4. **folglich** — benötigt für Ursache-Wirkung-Erklärungen im Schreiben
5. **unzureichend** — Schlüssel-bewertetes Wort für Urban-Herausforderungen-Beschreibung
6. **Migration** — Kern-Konzept-Wort, das Stufe 2 und 3 überbrückt

### Wort-Unterrichts-Karten

**Faktor**
- **Schülerfreundliche Definition:** Ein Grund oder Ursache, die etwas beeinflusst — eines der Dinge, das etwas passieren lässt.
- **In Kontext:** "Ein Druck-Faktor ist der Mangel an Jobs in ländlichen Gebieten, das Menschen treibt, zu Städten zu ziehen."
- **Visueller/Gedächtnis-Hinweis:** Denke Faktoren als Ingredienzen in einem Rezept — jeder Faktor trägt zum endgültigen Ergebnis bei. Zeichne ein Diagramm: mehrfache Pfeile (Faktoren) zeigen alle auf ein Ergebnis (Verstädterung).
- **Aufpassen für:** SuS verwechseln häufig "Faktor" mit "Fakt." Ein Fakt ist etwas Wahres. Ein Faktor ist etwas, das VERURSACHT oder BEEINFLUSST etwas. Auch: "Fabrik" sieht ähnlich aus, aber bedeutet etwas völlig unterschiedliches — obgleich in diesem Thema können Fabriken in Städten ein Zug-Faktor sein!

**bedeutsam**
- **Schülerfreundliche Definition:** Wichtig genug um Beachtung zu sein oder zu erwähnen. Groß genug um zu zählen.
- **In Kontext:** "Es gibt eine bedeutsame Erhöhung in der Bevölkerung von Lagos über die letzten 30 Jahre."
- **Visueller/Gedächtnis-Hinweis:** Denke an ein Verkehrs-Schild — eine bedeut-same Veränderung ist eine groß genug um ein Warn-Schild zu brauchen. Es ist nicht klein oder trivial.
- **Aufpassen für:** In alltäglichem Deutsch bedeutet "bedeutsam" manchmal "Sinn voll" (ein bedeutsamer Blick). In akademischem Deutsch bedeutet es fast immer "groß und wichtig." Deutscher Cognate: "bedeutsam" — ähnlich Bedeutung, hilfreiche Verbindung.

**Infrastruktur**
- **Schülerfreundliche Definition:** Die Grund-Systeme und Strukturen eine Stadt braucht um zu funktionieren — Straßen, Wasser-Rohre, Elektrizität, Abwasser, Krankenhäuser, Schulen.
- **In Kontext:** "Schnelle Verstädterung überholte oft Infrastruktur-Entwicklung, verlässt neue Einwohner ohne sauberes Wasser oder zuverlässige Elektrizität."
- **Visueller/Gedächtnis-Hinweis:** "Infra" bedeutet "darunter/unter." Infrastruktur ist das Zeug UNTER einer funktionierenden Stadt — die Fundamente. Zeige ein Bild einer Stadt halbiert, zeigend Rohre, Kabel und Straßen unter den Gebäuden.
- **Aufpassen für:** Dies ist ein lange Wort, das einschüchternd aussieht, aber hat eine klare Struktur: infra (unter) + Struktur (Bau). Zerlege es. SuS könnte es in Nachrichts-Kontexten (politische Diskussionen über "Infrastruktur-Ausgaben") getroffen haben.

**folglich**
- **Schülerfreundliche Definition:** Als Ergebnis. Wegen dies, das nächste passierte.
- **In Kontext:** "Ländliche Gebiete mangel Beschäftigungs-Gelegenheiten. Folglich wanderten Tausende zu urbanen Zentren."
- **Visueller/Gedächtnis-Hinweis:** Folge → folglich. Wenn du "Folge" (was als nächstes passiert) kennst, ist "folglich" nur die Adverb-Form: "als Folge von dies..."
- **Aufpassen für:** SuS wissen oft "weil," aber nicht "folglich." Der Unterschied: "weil" schaut ZURÜCK (dies passierte weil...), "folglich" schaut VORAUS (dies passierte, folglich...). Beide drücken Ursache-Wirkung aus, aber in entgegengesetzten Richtungen.

**unzureichend**
- **Schülerfreundliche Definition:** Nicht gut genug. Nicht ausreichend für das, was benötigt wird.
- **In Kontext:** "Die unzureichende Hygiene in informellen Siedlungen führt zur Ausbreitung von Wasser-übertragenen Krankheiten."
- **Visueller/Gedächtnis-Hinweis:** un- (nicht) + ausreichend (genug). Wenn etwas ausreichend ist, ist es "gut genug." Wenn es UNausreichend ist, ist es NICHT gut genug. Wie "unvollständig" = nicht vollständig.
- **Aufpassen für:** Das Präfix "un-" Bedeutung "nicht" ist eine mächtige Wort-Lern-Strategie. Verbinde zu anderen "un-" Wörtern: unzureichend, unangemessen, unerreichbar. Dieses Muster schließt viele akademische Wörter auf.

**Migration**
- **Schülerfreundliche Definition:** Die Bewegung von Menschen von einem Ort zu einem anderen um zu leben oder zu arbeiten — normalerweise eine großflächige oder permanente Bewegung, nicht ein Urlaub.
- **In Kontext:** "Land-zu-Stadt-Migration hat Städte in LDCs transformiert, mit Millionen vom Land zu urbanen Gebieten ziehend."
- **Visueller/Gedächtnis-Hinweis:** Denke an Vogel-Migration — Vögel bewegen sich von einem Ort zu einem anderen zu bestimmten Zeiten. Menschen-Migration ist ähnlich: Menschen ziehen, weil Bedingungen sie wegschieben oder sie irgendwo besser anziehen.
- **Aufpassen für:** "Migration" (die Bewegung), "Migrant" (die Person), "migrieren" (das Verb), "Zuwanderung" (hereinkommend in ein Land), "Auswanderung" (rausgehend aus einem Land). Diese sind alle verwandt, aber unterschiedlich. Für dieses Thema konzentrieren wir auf interne Migration (innerhalb eines Landes).

### Schnelle Prüfungs-Aktivität

**"Nutzen oder verlieren" — 3 Minuten**

Zeige sechs Sätze auf der Tafel, jeder mit einer Lücke. SuS wählen das korrekte Vokabular-Wort aus einer Wortliste, die daneben angezeigt wird.

1. "Der Mangel an Jobs in ländlichen Gebieten ist ein Druck-___, das Migration treibt." [Faktor]
2. "Lagos hat eine ___ Bevölkerungs-Erhöhung seit 1970 erfahren." [bedeutsam]
3. "Die Stadt-___ kann nicht mit dem schnellen Wachstum Schritt halten — es gibt nicht genug Straßen, Rohre oder Stromlinien." [Infrastruktur]
4. "Junge Menschen verließen ihre Dörfer. ___, die ländliche Bevölkerung sank." [folglich]
5. "Wohnen in informellen Siedlungen ist oft ___ — übergedrängt und ohne Grund-Einrichtungen." [unzureichend]
6. "Land-zu-Stadt-___ ist einer der größten demografischen Veränderungen in LDCs." [Migration]

**Prüfe:** SuS halten Mini-Whiteboards mit Antworten. Wenn 80%+ korrekt sind, fahre fort. Wenn ein Wort häufig falsch ist, unterrichte dieses spezifische Wort mit einem weiteren Beispiel erneut, bevor du weiterfährst.

---

## Bekannte Einschränkungen

1. **Vokabular-Stufung ist nicht absolut — Kontext zählt.** Ein Wort, das Stufe 2 für 9. Klasse-SuS ist, könnte Stufe 1 für 12. Klasse-SuS sein. Ein Wort, das Stufe 2 in einer Schule ist, könnte Stufe 3 in einer anderen sein, abhängig vom früheren Vokabular-Unterricht von SuS. Die Stufen, die bereitgestellt werden, sind Richtlinien basierend auf Häufigkeits-Daten und typischem SuS-Wissen — LP sollten basierend auf ihrem Wissen ihrer spezifischen SuS anpassen.

2. **Vokabular-Vorunterricht ist notwendig, aber nicht ausreichend.** SuS brauchen mehrfache Expositionen (Stahl & Nagy suggerieren 10–12) in variierenden Kontexten, bevor ein Wort wirklich erworben ist. Eine einzelne Vorunterrichts-Sitzung führt das Wort ein; es muss über die Stunde, die Woche und die Einheit erneut besucht werden. Die Unterrichts-Karten bieten die anfängliche Exposition; die LP muss für Wiederholung planen.

3. **Das Instrument analysiert Vokabular auf Wort-Ebene, aber akademische Sprache ist auch über Phrasen und Strukturen.** "Auf der anderen Seite," "als Ergebnis von," "im Gegensatz zu" sind Mehrwort-Ausdrücke, die als einzelne Vokabular-Gegenstände funktionieren. Das Instrument identifiziert einzelne Wörter, könnte aber nicht alle bedeutsamen Mehrwort-Phrasen erfassen, die SuS brauchen.
