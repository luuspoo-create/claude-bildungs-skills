---
# AGENT SKILLS STANDARD FIELDS (v2)
name: pruefungs-validitaet-checker
description: "Überprüfe eine geplante Beurteilung auf Konstruktvalidität, Reliabilität und Ausrichtung auf Lernziele. Nutze dies vor der Durchführung zur Qualitätssicherung."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lehrplan-beurteilung/pruefungs-validitaet"
skill_name: "Prüfungs-Validität Checker"
domain: "curriculum-assessment"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Wiliam (2011) — Embedded Formative Assessment"
  - "Messick (1989) — Validity in educational measurement: a unified validity framework"
  - "Kane (2006) — Validation as argument-based approach"
  - "Brookhart (2003) — Developing measurement theory for classroom assessment purposes and uses"
  - "Stobart (2008) — Testing Times: the uses and abuses of assessment"
input_schema:
  required:
    - field: "assessment_description"
      type: "string"
      description: "Beschreibung der geplanten Beurteilung — was die SuS tun, wie es bewertet wird"
    - field: "intended_learning"
      type: "string"
      description: "Was die Beurteilung messen soll"
    - field: "student_level"
      type: "string"
      description: "Alter/Jahrgangsstufe"
  optional:
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "assessment_purpose"
      type: "string"
      description: "Formativ, summativ, diagnostisch oder evaluativ"
    - field: "marking_approach"
      type: "string"
      description: "Wie wird bewertet — Raster, Punkte, holistisches Urteil"
    - field: "stakes"
      type: "string"
      description: "Konsequenzen der Beurteilung — geringe oder hohe Relevanz"
output_schema:
  type: "object"
  fields:
    - field: "validity_analysis"
      type: "object"
      description: "Analyse der Konstruktvalidität, Inhaltsvalidität und Konsequenzvalidität"
    - field: "reliability_analysis"
      type: "string"
      description: "Analyse der Bewerter-Reliabilität und inneren Konsistenz"
    - field: "threats_identified"
      type: "array"
      description: "Spezifische Validitätsrisiken mit Erklärungen"
    - field: "recommendations"
      type: "array"
      description: "Konkrete Massnahmen zur Behebung der Risiken"
chains_well_with:
  - "kriterienraster-generator"
  - "formative-assessment-technique-selector"
  - "kompetenz-entpacker"
  - "rueckwaerts-planung"
teacher_time: "3 Minuten"
tags: ["validität", "reliabilität", "beurteilungsdesign", "qualitätssicherung", "messung"]
---

# Prüfungs-Validität Checker

## Was diesen Skill leistet

Bewertet eine geplante Beurteilung nach drei Dimensionen: Validität (misst sie wirklich, was sie messen soll?), Reliabilität (würden verschiedene Lehrpersonen das gleiche Resultat vergeben?), und Authentizität (fordert die Aufgabe echte Leistung oder bloss Wiedergabe?). Das Resultat identifiziert Validitätsrisiken – konstruktsfremde Varianz (die Beurteilung misst etwas anderes), Konstruktsmangel (nicht alle Aspekte des Lernziels werden erfasst), und Konsequenzvalidität (unbeabsichtigte Auswirkungen) – und macht konkrete, umsetzbare Verbesserungsvorschläge. KI ist hier wertvoll, weil die meisten Lehrperson-erstellten Beurteilungen Validitätsrisiken enthalten, die ohne explizite Rahmen unsichtbar sind. Eine Beurteilung zu "Leseverständnis" könnte unbewusst eine Schreibbeurteilung werden; eine "Verständnis-Naturwissenschaft"-Aufgabe könnte vor allem Sprachfähigkeit testen.

## Grundlagen

Messick (1989) vereinheitlichte das Validitätskonzept: Validität ist keine Eigenschaft eines Tests, sondern der Interpretation und Anwendung der Ergebnisse. Ein Test ist nicht abstrakt "valide" oder "nicht valide" – er ist valide FÜR einen bestimmten Zweck mit einer bestimmten Gruppe. Jede Beurteilung muss gegen ihre beabsichtigte Verwendung überprüft werden. Wiliam (2011) zeigte, dass das häufigste Validitätsrisiko in Klassenzimmer-Beurteilungen konstruktsfremde Varianz ist: Die Aufgabe misst etwas anderes als beabsichtigt. Ein Referat zu "Klimawandel-Verständnis" misst möglicherweise Präsentationsfähigkeit, Nervosität und Gruppenarbeit stärker als Fachwissen. Kane (2006) argumentiert, dass Validität eine Argumentationskette ist: Aufgabe → Antwort → Bewertung → Interpretation → Entscheidung. Jedes schwache Glied ist ein Risiko. Brookhart (2003) zeigt, dass Klassenzimmer-Beurteilungen nicht alle psychometrischen Standards erfüllen müssen, aber dennoch belegen müssen, dass sie messen, was sie versprechen. Stobart (2008) warnt vor Konsequenzvalidität: Wenn eine Beurteilung Oberflächenlernen, Prüfungsangst oder strategisches Verhalten fördert statt echtes Engagement, ist sie konsequenzbezogen nicht valide.

## Input-Schema

Die Lehrperson muss liefern:
- **Beurteilungsbeschreibung:** Was die SuS tun und wie es bewertet wird. *z.B. "SuS schreiben einen 500-Wort-Aufsatz zu den Ursachen des Ersten Weltkriegs, bewertet anhand eines Rasters mit vier Kriterien: historisches Wissen, analytisches Argument, Quellennutzung, schriftliche Kommunikation" / "30-Fragen Multiple-Choice-Test zur Photosynthese" / "SuS erstellen ein Poster zu gesunder Ernährung und präsentieren es der Klasse"*
- **Intendiertes Lernen:** Was die Beurteilung messen soll. *z.B. "Verständnis der Ursachen des Ersten Weltkriegs und Fähigkeit, ein historisches Argument aufzubauen" / "Wissen und Verständnis der Photosynthese" / "Verständnis von Ernährung und gesundem Lebensstil"*
- **Jahrgangsstufe:** Alter/Stufe. *z.B. "9. Klasse Sek 1"*

Optional (aus Kontext):
- **Fachbereich:** Das Schulfach
- **Beurteilungszweck:** Formativ, summativ, diagnostisch oder evaluativ
- **Bewertungsmethode:** Wie wird bewertet
- **Gewichtung:** Konsequenzen der Beurteilung

## Prompt

```
Du bist eine Expertin/ein Experte für Beurteilung und Messung in der Schulpädagogik mit tiefem Wissen über Messicks (1989) einheitliches Validitätskonzept, Wiliams (2011) Ansatz zur Klassenzimmer-Validität, Kanes (2006) argumentbasierte Validierung und Stobarts (2008) Konsequenzvalidität. Du verstehst, dass Validität nicht eine Eigenschaft eines Tests selbst ist, sondern der Interpretation und Anwendung der Resultate – eine Beurteilung ist valide FÜR einen bestimmten Zweck.

Deine Aufgabe ist es, die Validität dieser Beurteilung zu beurteilen:

**Beurteilungsbeschreibung:** {{assessment_description}}
**Intendiertes Lernen:** {{intended_learning}}
**Jahrgangsstufe:** {{student_level}}

Der folgende optionale Kontext kann vorhanden sein. Nutze, was verfügbar ist; ignoriere fehlende Felder.

**Fachbereich:** {{subject_area}} — falls nicht vorhanden, aus der Beurteilung schliessen.
**Beurteilungszweck:** {{assessment_purpose}} — falls nicht vorhanden, schliessen.
**Bewertungsmethode:** {{marking_approach}} — falls nicht vorhanden, empfehlen.
**Gewichtung:** {{stakes}} — falls nicht vorhanden, für beide Szenarien analysieren.

Analysiere diese Dimensionen:

1. **Konstruktvalidität (Messick, 1989):**
   - Verlangt die Aufgabe wirklich das intendierte Lernen?
   - **Konstruktsfremde Varianz:** Misst die Aufgabe etwas ANDERES? (Z.B. eine Naturwissenschafts-Beurteilung, die Schreiben verlangt, misst auch Sprachfähigkeit; ein Gruppenprojekt misst Zusammenarbeit und soziale Dynamik.)
   - **Konstruktsmangel:** Deckt die Beurteilung ausreichend des intendierten Konstrukts ab? (Z.B. ein "Photosynthese-Verständnis"-Test mit nur Faktenfragen misst Auswendiglernen, nicht Verständnis.)

2. **Inhaltsvalidität:**
   - Erfasst die Beurteilung angemessen den Bereich des intendierten Lernens?
   - Fehlen wichtige Aspekte?
   - Gehen Aspekte über das intendierte Lernen hinaus?

3. **Reliabilität (Brookhart, 2003):**
   - Würden verschiedene Lehrpersonen die gleiche Bewertung geben? (Bewerter-Reliabilität)
   - Würde eine SuS einen ähnlichen Score an einem anderen Tag erhalten? (Test-Retest)
   - Ist das Bewertungsschema klar genug für konsistente Anwendung?

4. **Konsequenzvalidität (Stobart, 2008):**
   - Welche Lernverhalten fördert diese Beurteilung? Echtes Lernen oder strategisches/oberflächliches Pauken?
   - Schafft die Beurteilung unfaire Hürden für bestimmte Gruppen (DaZ-SuS, SuS mit Lernunterschieden)?
   - Passt die Aufgabenform zum Lernziel?

5. **Authentizität:**
   - Verlangt die Aufgabe echte Leistungsdemonstration oder Wiedergabe?
   - Kann die Aufgabe durch Auswendiglernen oder Verfahrenstreue ohne Verständnis gelöst werden?

Gib deine Analyse in folgendem Format zurück:

## Beurteilungs-Validitätsanalyse

**Beurteilung:** [Kurze Beschreibung]
**Misst:** [Intendiertes Lernen]
**Für:** [Jahrgangsstufe]

### Validitätsanalyse

**Konstruktvalidität:** [Analyse, ob die Beurteilung misst, was sie verspricht]
**Konstruktsfremde Varianz:** [Was ANDERES die Beurteilung misst]
**Konstruktsmangel:** [Was vom intendierten Lernen NICHT erfasst wird]

### Reliabilitätsanalyse

[Analyse der Bewertungskonsistenz und spezifischen Reliabilitätsbedenken]

### Konsequenzvalidität

[Welche Lernverhalten die Beurteilung voraussichtlich fördert]

### Identifizierte Risiken

[Nummerierte Liste von Validitätsrisiken mit Erklärungen]

### Empfehlungen

[Konkrete Verbesserungen für jedes identifizierte Risiko]

### Gesamtfazit

[Zusammenfassung: Ist diese Beurteilung für ihren Zweck geeignet? Was ist die wichtigste Verbesserung?]

**Selbstkontrolle:** Verifiziere, dass (a) Konstruktvalidität, Reliabilität und Konsequenzvalidität behandelt sind, (b) jedes Risiko spezifisch erklärt ist, (c) jede Empfehlung ein Risiko adressiert, (d) die Analyse den Zweck und die Gewichtung berücksichtigt, und (e) das Fazit konstruktiv ist – sagt, was zu beheben ist, nicht nur, was falsch ist.
```

## Beispiel-Output

**Szenario:** *Beurteilungsbeschreibung: "SuS erstellen ein Poster zu den Ursachen des Klimawandels und präsentieren es der Klasse. Das Poster muss mindestens 3 Ursachen, ein visuelles Element (Graph oder Diagramm) und soll 'visuell ansprechend' sein. Bewertung aus 20 Punkten: Inhalt (8 Punkte), Visualisierung (6 Punkte), Präsentation (6 Punkte)." / Intendiertes Lernen: "SuS verstehen Ursachen und Folgen des Klimawandels." / Jahrgangsstufe: "9. Klasse Sek 1" / Fachbereich: "Geographie"*

---

## Beurteilungs-Validitätsanalyse

**Beurteilung:** Poster-Präsentation zu Klimawandel-Ursachen
**Misst:** Verständnis der Ursachen und Folgen des Klimawandels
**Für:** 9. Klasse Sek 1 Geographie

### Validitätsanalyse

**Konstruktvalidität:** MÄSSIGES RISIKO. Die Beurteilung verspricht, Klimawandel-Verständnis zu messen, erfasst aber gleichzeitig drei Konstrukte: Geografisches Wissen (8/20 = 40%), Visualisierungs-Fähigkeit (6/20 = 30%), Präsentationsfähigkeit (6/20 = 30%). Eine SuS mit tiefem Klimawandel-Verständnis, die nicht zeichnen kann oder nervös präsentiert, erhält eine tiefere Bewertung als eine SuS mit oberflächlichem Wissen, die ein schönes Poster mit selbstsicherer Präsentation zeigt. Die Beurteilung misst nicht primär, was sie verspricht.

**Konstruktsfremde Varianz:**
- **Visualisierungs-Fähigkeit (6 Punkte):** Die Fähigkeit, ein "visuell ansprechendes" Poster zu erstellen, steht nicht in Zusammenhang mit Geografieverständnis. Sie misst Kunst-/Designfähigkeiten und Zugang zu Ressourcen (farbige Stifte, Drucker, Bastelmaterialien) – Ressourcen, die mit sozioökonomischem Status korrelieren, nicht mit geografischem Verständnis. Eine SuS mit wissenschaftlich korrektem, aber ästhetisch einfachem Poster wird benachteiligt. Das ist das grösste Validitätsrisiko.
- **Präsentationsfähigkeit (6 Punkte):** Selbstsicherheit beim Sprechen ist eine andere Fähigkeit als geografisches Verständnis. DaZ-SuS, SuS mit Sprechangst und SuS mit Behinderungen sind nachteilig. Mit 6/20 Punkte für Vortrag wird Präsentation gleich gewichtet wie Fachwissen.
- **Material-Zugang:** SuS, die zu Hause drucken, Farben und Bastelmaterialien nutzen können, haben einen Vorteil ohne Zusammenhang mit Verständnis.

**Konstruktsmangel:**
- Die Beurteilung verlangt "mindestens 3 Ursachen", die intendierten Lerninhalte umfassen aber auch "Folgen" – die werden nicht bewertet, obwohl im Lernziel genannt.
- Die Beurteilung verlangt nicht, Ursachen zu ERKLÄREN – bloss zu nennen genügt. Ein Poster mit "fossile Brennstoffe, Entwaldung, Landwirtschaft" ohne Erklärungen erhält volle Inhalts-Punkte. Nennen ist Faktenabruf; Erklären ist Verständnis. Die Beurteilung erfasst nicht das intendierte Verständnis.
- Keine Bewertung von Beziehungen zwischen Ursachen, Bedeutung oder Evidenzbewertung – das sind die geografischen Denkfähigkeiten, die das Lernziel impliziert.

### Reliabilitätsanalyse

- **"Visuell ansprechend"** ist subjektiv und nicht verankert. Zwei Lehrpersonen werden sich wahrscheinlich deutlich uneinig über "visuell ansprechend" sein. Dieses Kriterium hat die tiefste Bewerter-Reliabilität.
- **Inhalt-Bewertung (8 Punkte):** Könnte reliabel sein, wenn klar definiert ist, was eine "Ursache" ist und welche Erklärungstiefe verdient wie viele Punkte – aber "mindestens 3 Ursachen" ist ein binärer Schwellenwert, keine Qualitätsskala. Eine SuS mit 3 Grund-Ursachen und eine mit 5 detaillierten, evidenzgestützten Ursachen könnten die gleichen Punkte erhalten.
- **Präsentation (6 Punkte):** Keine beschriebenen Kriterien. Lehrpersonen könnten Flüssigkeit, Sicherheit, Blickkontakt, Lautstärke oder Inhaltsgenauigkeit unterschiedlich gewichten. Ohne Rubrik ist die Reliabilität tief.

### Konsequenzvalidität

- **Die Beurteilung fördert Dekoration vor Verständnis.** SuS erkennen, dass 12/20 Punkte (60%) von Design und Präsentation abhängen, und investieren rational mehr Zeit in Visualisierung und Rehearsal als in Lernstoff. Dies fördert Oberflächenlernen.
- **Die Beurteilung benachteiligt DaZ-SuS und schüchterne SuS.** 6 Punkte für Präsentation schafft eine Hürde, die nicht mit Geographie zu tun hat. SuS, die Klimawandel tief verstehen, aber Angst vor Präsentationen haben, schneiden unter ihrem tatsächlichen Verständnis ab.
- **Die Beurteilung belohnt sozioökonomischen Vorteil.** Zugang zu Druckern, farbigem Papier, Markern und Computer-Design-Software gibt einigen SuS einen signifikanten Vorteil bei 30% der Punkte. Das ist inequitabel.

### Identifizierte Risiken

1. **MAJOR: Konstruktsfremde Varianz durch Visualisierung.** 30% der Punkte prüfen Designfähigkeit, nicht Geographie. Das bedeutet, die Bewertung repräsentiert nicht, was sie verspricht.
2. **MAJOR: Konstruktsfremde Varianz durch Präsentation.** 30% der Punkte prüfen öffentliches Sprechen, benachteiligt DaZ-, ängstliche und SuS mit Sprachbehinderungen.
3. **MODERAT: Konstruktsmangel.** Klimawandel-Folgen werden nicht geprüft, obwohl im Lernziel. Erklären von Ursachen ist nicht verlangt – Nennen genügt.
4. **MODERAT: Tiefe Reliabilität.** "Visuell ansprechend" ist subjektiv. Präsentations-Punkte haben keine Rubrik. Inhalts-Punkte unterscheiden nicht zwischen Qualitätsstufen.
5. **MINOR: Konsequenzvalidität.** Punkt-Gewichtung fördert Dekoration vor Lernen.

### Empfehlungen

1. **Punkt-Gewichtung umstrukturieren.** Inhalt sollte mindestens 70% sein. Visualisierung auf 0 (komplett entfernen) oder maximal 2 Punkte für "Klarheit der Visualisierung" (ob das Diagramm Information vermittelt – nicht ob es hübsch ist). Präsentation auf 4 Punkte maximal, mit Rubrik fokussiert auf Erklär-Klarheit, nicht Sprechsicherheit.

2. **Erklären, nicht bloss Nennen verlangen.** Wechseln zu "Erkläre 3 Ursachen des Klimawandels, inklusive WIE jede zu erhöhten Treibhausgas-Konzentrationen führt." Das verlangt Verständnis, nicht bloss Abruf.

3. **Fehlendes Konstrukt hinzufügen.** Folgen ergänzen, oder das Lernziel anpassen. Alignment muss bidirektional funktionieren.

4. **"Visuell ansprechend" durch "klar und informativ" ersetzen.** Falls visuelle Elemente bleiben, prüfe, ob Graph/Diagramm geografische Information korrekt und deutlich vermittelt – nicht ob es attraktiv aussieht.

5. **Alternative zu Live-Präsentation ermöglichen.** SuS können eine Ton-Erklärung, einen geschriebenen Absatz oder ein 1:1-Gespräch mit LP statt Klassen-Präsentation einreichen. Das entfernt die öffentliche Sprechen-Hürde, während die Erklär-Fähigkeit geprüft wird.

6. **Inhalts-Rubrik erstellen.** Das binäre "mindestens 3 Ursachen" durch eine deskriptive Rubrik ersetzen, die unterscheidet zwischen Nennen von Ursachen (tiefste Stufe), Erklären von Ursachen (mittlere Stufe), und Analysieren von Beziehungen und Bedeutung (höchste Stufe).

### Gesamtfazit

Diese Beurteilung ist **aktuell nicht für ihren Zweck geeignet.** Sie verspricht, Klimawandel-Verständnis zu messen, misst aber ein Gemisch aus Geografiewissen (40%), Kunstfähigkeiten (30%), und öffentlichem Sprechen (30%). Die wichtigste Verbesserung: **die Punkt-Gewichtung umstrukturieren**, sodass Inhalt-Verständnis die Beurteilung dominiert. Wenn eine SuS Klimawandel-Ursachen und -Folgen tief versteht, sollte sie hoch punkten – unabhängig von Poster-Design oder Präsentations-Selbstsicherheit.

---

## Bekannte Einschränkungen

1. **Die Analyse bewertet die Beurteilung wie beschrieben, nicht wie implementiert.** Eine LP könnte großzügig bei Design und streng bei Inhalt bewerten und das Gewichtungs-Problem teilweise kompensieren – aber die strukturelle Schwäche bleibt. Die Beurteilungs-GESTALTUNG, nicht bloss die Implementierung, sollte valide sein.

2. **Validität ist immer relativ zum Zweck.** Diese Analyse bewertet Validität für den ANGEGEBENEN Zweck (Klimawandel-Verständnis messen). Hätte die Beurteilung den Zweck, auch Präsentationsfähigkeiten zu entwickeln, würde sich die Analyse unterscheiden – aber dann sollte das klar sein im Lernziel.

3. **Manche Validitäts-Risiken sind Trade-offs, keine Fehler.** Eine Präsentations-Komponente könnte legitime pädagogische Gründe haben (Redegewandtheit, Selbstsicherheit entwickeln). Die Analyse identifiziert die Validitäts-Kosten dieser Entscheidung – die LP muss entscheiden, ob der pädagogische Nutzen den Validitäts-Kompromiss rechtfertigt. Der Schlüssel: Transparenz darüber, was die Beurteilung wirklich misst.

