---
# AGENT SKILLS STANDARD FIELDS (v2)
name: differenzierung-adapter
description: "Passe eine Schulaufgabe für spezifische Lernbedürfnisse an, während du die Lernziele beibehältst. Nutze diese Skill für Differenzierung bei Förderbedarf, Hochbegabung, ADHS, Legasthenie, Angststörungen und anderen Lernprofilen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lehrplan-beurteilung/differenzierung-adapter"
skill_name: "Differenzierung-Adapter"
domain: "curriculum-assessment"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Tomlinson (2001, 2014) — How to Differentiate Instruction in Academically Diverse Classrooms"
  - "Rose & Meyer (2002) — Teaching Every Student in the Digital Age: Universal Design for Learning"
  - "Vygotsky (1978) — Mind in Society: Zone of Proximal Development"
  - "Hattie (2009) — Visible Learning: Differentiation and Responsive Teaching"
  - "CAST (2018) — Universal Design for Learning Guidelines 2.2"
  - "Tomlinson & Imbeau (2010) — Leading and Managing a Differentiated Classroom"
  - "Deci & Ryan (2000) — Self-Determination Theory and Intrinsic Motivation"
input_schema:
  required:
    - field: "aufgabe_original"
      type: "string"
      description: "Die Aufgabe, wie sie für die ganze Klasse konzipiert ist"
    - field: "lernprofil"
      type: "string"
      description: "Das spezifische Lernprofil — z.B. Förderung, Hochbegabung, Legasthenie, ADHS, Angststörung, Autismus, Hörbeeinträchtigung"
    - field: "lernziel"
      type: "string"
      description: "Das Lernziel — muss identisch bleiben über alle differenzierten Versionen"
  optional:
    - field: "klassenstufe"
      type: "string"
      description: "Klassenstufe (z.B. 7. Klasse Sek 1)"
    - field: "fach"
      type: "string"
      description: "Das Schulfach"
    - field: "kontextuelle_informationen"
      type: "string"
      description: "Lernstand, Diagnose, Unterstützungsmassnahmen, verfügbare Ressourcen"
    - field: "verfuegbare_unterstuetzung"
      type: "string"
      description: "Verfügbarkeit von Fachpersonen, Technologie, spezialisierte Materialien"
output_schema:
  type: "object"
  fields:
    - field: "adaptierte_aufgabe"
      type: "object"
      description: "Die differenzierte Version mit spezifischen Massnahmen"
    - field: "was_hat_sich_geaendert"
      type: "string"
      description: "Explizite Aussage über Veränderungen und Beibehaltung"
    - field: "lernziel_verifikation"
      type: "string"
      description: "Nachweis, dass das Lernziel erhalten bleibt"
    - field: "umsetzungsnotizen"
      type: "string"
      description: "Praktische Hinweise für die Lehrperson zur Umsetzung"
chains_well_with:
  - "lernziel-formulierungs-guide"
  - "formative-assessment-techniken"
  - "kognitiver-belastungsanalyzer"
  - "rubriken-designer"
teacher_time: "5 Minuten"
tags: ["differenzierung", "inklusion", "lernprofile", "förderbedarf", "hochbegabung", "ADHS", "legasthenie", "angststoerung", "autismus"]
---

# Differenzierung-Adapter für Sekundarstufe 1

## Was dieser Skill macht

Dieser Skill passt eine Schulaufgabe an spezifische Lernprofile an — Förderung, Hochbegabung, ADHS, Legasthenie, Angststörung, Autismus, Sinnesbeeinträchtigungen — während das Lernziel bewusst erhalten bleibt. Das Kernprinzip: Differenzierung modifiziert den WEG zum Lernen, nicht das ZIEL. Eine Schülerin mit Legasthenie arbeitet am gleichen Lernziel wie ihre Mitschüler, aber mit anderen Eingabeformaten, anderen Antwortformaten und anderer Stützung. Die Aufgabe bleibt kognitiv anspruchsvoll — einfach nur auf anderem Weg erreichbar. Der Output beinhaltet die adaptierte Aufgabe, eine explizite Aussage darüber, was sich ändert und was gleich bleibt, eine Verifikation des Lernziels, und praktische Umsetzungshinweise. KI ist hier wertvoll, weil wirksame Differenzierung sowohl das Lernprofil (welche Barrieren entstehen?) als auch die Aufgabe (welche Aspekte der Aufgabe schaffen diese Barrieren?) analysieren muss — eine bidirektionale Analyse, die für jede Kombination neu durchgeführt werden muss.

## Evidence Foundation

Tomlinson (2001, 2014) etablierte das Framework für differenzierten Unterricht und identifizierte drei Dimensionen: Inhalt (WAS Schüler lernen), Prozess (WIE sie es lernen) und Produkt (WIE sie zeigen, dass sie es können). Sie betonte, dass Differenzierung nach Leistungsstand, Interesse und Lernprofil erfolgt — NICHT nach Lernstilen, die aus dieser Skill-Library ausgeschlossen sind. Rose & Meyer (2002) entwickelten Universal Design for Learning (UDL) mit drei Prinzipien: multiple Darstellungsformen (WAS), mehrere Handlungsmöglichkeiten (WIE), und mehrfache Anreizquellen (WARUM). Vygotsky (1978) zeigte, dass Unterricht die Zone der nächsten Entwicklung anvisieren sollte — das, was SuS mit Unterstützung können. Hattie (2009) fand, dass Differenzierung mittlere Effektgrössen hat, aber die Qualität der Umsetzung variiert stark — schlechte Differenzierung (leichtere Aufgaben für schwache SuS) reduziert Leistung durch niedrigere Erwartungen. CAST (2018) bot aktuelle UDL-Guidelines mit spezifischen Implementierungsstrategien.

## Input-Schema

Die Lehrperson muss angeben:
- **Originale Aufgabe:** Die Aufgabe wie entworfen. *z.B. "Lies den Text und schreibe eine Analyse, wie die Hauptfigur sich verändert, mit Textbelegen"*
- **Lernprofil:** Das spezifische Profil. *z.B. "Förderung — Schülerin mit Lesealter 2 Jahre unter Alter" / "Hochbegabung — Schüler findet Standard-Aufgaben zu einfach" / "Legasthenie" / "ADHS"*
- **Lernziel:** Was alle SuS lernen sollen. *z.B. "Analysieren, wie Charakterveränderung dargestellt wird, mit Textbelegen"*

Optional (von Kontextsystem bereitgestellt):
- **Klassenstufe:** Jahrgangsstufe
- **Fach:** Das Schulfach
- **Kontextuelle Informationen:** Spezifische Diagnosen, Fördermassnahmen, Lernstand
- **Verfügbare Unterstützung:** Fachpersonen, Technologie, spezialisierte Ressourcen

## Prompt

```
Du bist ein Experte für differenzierten Unterricht und inklusive Pädagogik mit tiefem Wissen über Tomlinsons (2001, 2014) Differenzierungsframework, Universal Design for Learning (UDL) nach Rose & Meyer (2002), und Vygotskys (1978) Zone of Proximal Development. Du verstehst, dass wirksame Differenzierung den WEG zum Lernen modifiziert, nicht das ZIEL — alle SuS arbeiten am gleichen Lernziel, aber der Lernpfad ist angepasst an die spezifischen Barrieren des Schülers/der Schülerin.

WICHTIG: Differenzierung nach Lernstilen (visuell/auditiv/kinästhetisch) wird NICHT unterstützt — das ist aus dieser Library ausgeschlossen, weil die Evidenz nicht trägt (Pashler et al., 2008). Differenzierung nach Leistungsstand und spezifischen Lernprofilen WIRD unterstützt.

Deine Aufgabe ist es, folgende Aufgabe anzupassen:

**Originale Aufgabe:** {{aufgabe_original}}
**Lernprofil:** {{lernprofil}}
**Lernziel:** {{lernziel}}

Optional bereitgestellte Kontextinformationen:
**Klassenstufe:** {{klassenstufe}} — falls nicht angegeben, aus Aufgabe erschliessen
**Fach:** {{fach}} — falls nicht angegeben, aus Aufgabe erschliessen
**Kontextuelle Informationen:** {{kontextuelle_informationen}} — falls nicht angegeben, auf generische Forschung zu Lernprofil stützen
**Verfügbare Unterstützung:** {{verfuegbare_unterstuetzung}} — falls nicht angegeben, Standard-Schulressourcen annehmen

Wende diese Prinzipien an:

1. **Gleiches Ziel, anderer Weg (Tomlinson, 2001):**
   - Das Lernziel muss für alle Versionen identisch sein
   - Modifiziere WIE der Schüler engagiert ist, nicht WAS er lernt
   - Wenn die Anpassung die kognitive Anforderung reduziert, ist sie zu weit gegangen

2. **Profilspezifische Anpassungen (UDL, CAST 2018):**
   - **Förderung/Unter Erwartung:** Zusätzliche Stützung — Satzrahmen, grafische Organizer, reduziertes Volumen (nicht reduzierte Schwierigkeit), Referenzbeispiele
   - **Hochbegabung:** Erhöhte Tiefe und Komplexität — nicht mehr vom gleichen, sondern qualitativ andere Herausforderung
   - **Legasthenie:** Lesevolumen reduzieren ohne Denken zu reduzieren. Grössere Schrift, farbiges Overlay, Audio-Version, Schlüsseltexte vorausgewählt
   - **ADHS:** Aufgabe in kürzere Teile unterteilen mit Check-ins. Unnötige Info reduzieren. Fokussierte Bursts mit Timern. Ablenkungen minimieren
   - **Angststörung:** Leistungsdruck reduzieren. Entwürfe erlauben. Klare Struktur. Wahlmöglichkeiten anbieten. Cold-Calling vermeiden
   - **Autismus:** Explizite, unambigue Anweisungen. Idiomatische Sprache in Anweisungen vermeiden oder erklären. Vorhersehbare Struktur. Mehr Verarbeitungszeit
   - **Sinnesbeeinträchtigungen:** Vergrösserte Texte, hoher Kontrast, Audio-Alternativen, taktile Ressourcen

3. **UDL Mehrfachangebote (Rose & Meyer, 2002):**
   - **Mehrfache Darstellung:** Kann Inhalt anders präsentiert werden? (Audio, visuell, vereinfachte + Original-Texte, Grafiken)
   - **Mehrfache Handlung:** Kann SuS Lernen anders demonstrieren? (Mündlich statt schriftlich, Diagramm statt Essay, aufgezeichnet statt live)
   - **Mehrfacher Anreiz:** Kann Aufgabe mit Interessen/Motivationen verknüpft werden?

4. **Häufige Fehler vermeiden (Hattie, 2009):**
   - NICHT simplifizierte Version für schwache SuS — das senkt Erwartungen
   - NICHT "mehr Aufgaben" für Hochbegabte — Tiefe, nicht Volumen
   - NICHT annehmen, dass adaptierte Version "einfacher" ist — sie sollte gleichwertig anspruchsvoll sein

Gib Output in diesem Format aus:

## Adaptierte Aufgabe: [Lernprofil]

**Originale Aufgabe:** [Kurzbeschreibung]
**Angepasst für:** [Lernprofil]
**Lernziel:** [Muss identisch mit Original sein]

### Die Adaptierte Aufgabe

[Komplette adaptierte Version mit allen Massnahmen]

### Was sich geändert hat und was gleich bleibt

**Geändert:** [Spezifische Anpassungen — was wurde adaptiert und warum]
**Beibehalten:** [Was bewusst gleich bleibt — besonders kognitive Anforderung und Lernziel]

### Lernziel-Verifikation

[Explizite Verifikation: "Die adaptierte Aufgabe erfordert immer noch, dass der Schüler [Lernziel] kann, weil..."]

### Umsetzungsnotizen

[Praktischer Rat: wie Anpassung einführen, wie SuS nicht stigmatisieren, was beobachten]

**Selbstcheck vor Rückgabe:** Verifiziere, dass (a) Lernziel identisch ist, (b) Anpassungen spezifische Barrieren adressieren, (c) kognitive Anforderung erhalten bleibt — adaptierte Aufgabe ist nicht einfacher, nur zugänglicher, (d) Anpassung auf Lernprofil-Forschung basiert, nicht auf Lernstil-Präferenzen, und (e) Umsetzungsnotizen adressieren Stigmatisierungsrisiko.
```

## Beispiel-Output

**Szenario:** *Originale Aufgabe: "Lies den Romanextrakt und schreibe eine Analyse, wie der Hauptcharakter sich verändert, mit Textbelegen" / Lernprofil: "Legasthenie — Schüler mit Lesealter 2 Jahre unter Alter, starke mündliche Analysefähigkeiten" / Lernziel: "Charakterveränderung analysieren mit Textbelegen" / Klassenstufe: "9. Klasse Sek 1" / Fach: "Deutsch"*

---

## Adaptierte Aufgabe: Legasthenie

**Originale Aufgabe:** Lies den Romanextrakt und schreibe eine Analyse zur Charakterveränderung mit Textbelegen

**Angepasst für:** Legasthenie — Lesealter 2 Jahre unter Alter, starke mündliche Fähigkeiten

**Lernziel:** Charakterveränderung mit Textbelegen analysieren

### Die Adaptierte Aufgabe

**Text-Zugang:**
- Text auf cremefarbenem Papier, mindestens 14pt, Zeilenabstand 1,5
- Vier Schlüsselzitate, die Charakterveränderung zeigen, sind vorhervorgehoben — entfernt die Leseflüenz-Barriere (Textvolumen scannen), erhält die Analyse-Anforderung
- Audio-Aufnahme des Textes verfügbar zum gleichzeitigen Mithören

**Analyse und Schreiben:**
- PEAE-Satzrahmen (Point-Evidence-Analyse-Link):
  - **Point:** "Der Charakter verändert sich, indem..."
  - **Evidence:** "Das zeigt sich, wenn der Text sagt '___' (eines der hervorgehobenen Zitate)"
  - **Analyse:** "Dieses Zitat suggiert, dass sich der Charakter verändert hat, weil..."
  - **Link:** "Das zeigt dem Leser, dass..."
- SuS liefert eigenes analytisches Denken auf jeder Stufe — der Rahmen strukturiert das Schreiben, nicht die Analyse
- **Alternative Antwortform:** Falls Schreiben die Hauptbarriere ist (nicht Analyse), kann SuS Paragraph mündlich aufzeichnen statt zu schreiben — kognitive Anforderung bleibt gleich, nur Ausgabeformat ändert sich

### Was sich geändert hat und was gleich bleibt

**Geändert:**
- Text-Präsentation: grössere Schrift, cremefarbenes Papier, Abstand — reduziert Dekodierungs-Belastung
- Schlüsselzitate vorhervorgehoben — entfernt Leseflüenz-Aufgabe (Textvolumen scannen) bei Beibehaltung von ANALYSIEREN
- Audio-Unterstützung verfügbar
- Schreib-Rahmen: PEAE-Struktur gibt Übersicht
- Alternative Antwortform: mündliche Aufzeichnung als Option

**Beibehalten:**
- Lernziel: Charakterveränderung mit Textbelegen analysieren
- Anforderung, spezifische Zitate zu nutzen als Evidenz
- Analytische Anforderung: SuS muss erklären, WAS das Zitat zeigt und WARUM es signifikant ist
- Qualitätserwartung: Analyse sollte so gründlich wie bei anderen SuS sein
- Der Text selbst: gleicher Extrakt, keine vereinfachte Version

### Lernziel-Verifikation

Die adaptierte Aufgabe erfordert immer noch, dass der Schüler **Charakterveränderung mit Textbelegen analysieren** kann, weil:
- SuS muss Extrakt LESEN (mit Unterstützung, aber gleicher Text)
- SuS muss Zitat AUSWÄHLEN und Bedeutung erklären
- SuS muss ANALYSIEREN — erklären, was das Zitat über Veränderung zeigt und warum es dort platziert ist
- Vorhervorgehoben-Zitate entfernen Leseflüenz-Barriere, nicht Analyse-Barriere — SuS muss immer noch unabhängig erklären
- PEAE-Rahmen strukturiert Schreiben, liefert aber nicht analytischen Inhalt — jeder "Analyse"- und "Link"-Teil erfordert SuS' eigenes Denken

### Umsetzungsnotizen

1. **Einführung diskret.** "Das ist die Legasthenie-Version" nicht ankündigen. Einige Anpassungen für alle: cremefarbenes Papier, Audio für alle verfügbar. Hervorgehobene Zitate individuell aushändigen.

2. **Analyse beobachten, nicht Schreiben.** Stärke ist mündliche Analyse. Falls schriftliche Antwort schwächer als erwartet: ist Barriere Schreib-Mechanik oder Analyse? Falls SuS mündlich erklären kann aber nicht schreiben: Schreib-Barriere — Voice-Aufzeichnung-Option anbieten.

3. **Analyseanforderungen nicht senken.** SuS mit Legasthenie hat starke analytische Fähigkeiten. Analyse sollte gleich anspruchsvoll sein wie bei anderen SuS. Falls Paragraph dünn: Nicht "Gut gemacht beim Versuchen", sondern "Erzähl mir mehr, was zeigt dieses Zitat?"

4. **Klammer über Zeit reduzieren.** Vorausgewählte Zitate sind ein Scaffold, das reduziert werden sollte — nächstes Mal 6 Zitate, SuS wählt beste 2. Schliesslich Text ohne Hervorhebung, SuS findet Belege unabhängig.

---

## Bekannte Limitationen

1. **Anpassung basiert auf generischer Forschung, nicht auf individuellem Schüler.** Legasthenie äussert sich unterschiedlich — manche kämpfen mit Dekodierung, andere mit Lesegeschwindigkeit, andere mit Arbeitsgedächtnis. Lehrpersonen-Kenntnis des Schülers ist essentiell für Anpassung-Verfeinerung.

2. **Differenzierung nach Lernstil ist ausgeschlossen.** Diese Skill adaptiert keine Tasks nach "visuell", "auditiv" oder "kinästhetisch" — die Evidenz trägt das nicht (Pashler et al., 2008). Anpassungen basieren auf Forschung zu Barrieren spezifischer Lernprofile, nicht auf Präferenzen.

3. **Differenzierte Aufgaben können niedrige Erwartungen signalisieren.** Wenn SuS konstant "andere" Arbeit erhält, kann Message sein "du bist weniger fähig". Umsetzungsnotizen adressieren das, aber Lehrperson muss vigilant sein — Anpassungen als Zugangs-Unterstützung (wie Brille) rahmen, nicht als reduzierte Anforderungen. Ziel ist Gerechtigkeit — gleiches Lernen, anderer Zugang.
