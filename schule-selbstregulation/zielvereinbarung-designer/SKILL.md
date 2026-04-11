---
# AGENT SKILLS STANDARD FIELDS (v2)
name: zielvereinbarung-designer
description: "Entwerfe ein strukturiertes Zielvereinbarungs-Protokoll mit SMART- oder Implementierungs-Absichts-Frameworks für SuS. Nutze den Skill beim Start von Lerneinheiten, Projekten oder bei der Entwicklung von SuS-Selbststeuerung."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-selbstregulation/zielvereinbarung-designer"
skill_name: "Zielvereinbarungs-Designer"
domain: "schule-selbstregulation"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Locke & Latham (1990) — A Theory of Goal Setting and Task Performance"
  - "Locke & Latham (2002) — Building a practically useful theory of goal setting and task motivation"
  - "Zimmerman & Bandura (1994) — Impact of self-regulatory influences on writing course attainment"
  - "Schunk (1990) — Goal setting and self-efficacy during self-regulated learning"
  - "Morisano et al. (2010) — Setting, elaborating, and reflecting on personal goals improves academic performance"
input_schema:
  required:
    - field: "learning_context"
      type: "string"
      description: "Die Lerneinheit, das Projekt oder die Aufgabe, für die SuS Ziele setzen"
    - field: "student_level"
      type: "string"
      description: "Alter/Klassenstufe und Erfahrung mit Zielsetzen"
    - field: "timeframe"
      type: "string"
      description: "Dauer, über die Ziele verfolgt werden"
  optional:
    - field: "goal_type"
      type: "string"
      description: "Prozessziele, Ergebnisziele, oder beides"
    - field: "student_profiles"
      type: "array"
      description: "Aus Context Engine: Selbstwirksamkeit, bisherige Zielsetzen-Daten"
    - field: "success_criteria"
      type: "string"
      description: "Aus Context Engine: Bewertungsmatrix oder Erfolgsmerkmale"
    - field: "subject_area"
      type: "string"
      description: "Fachkontext"
output_schema:
  type: "object"
  fields:
    - field: "protocol"
      type: "object"
      description: "Schritt-für-Schritt Zielvereinbarungs-Protokoll mit LP-Script und SuS-Templates"
    - field: "goal_examples"
      type: "array"
      description: "Modellierte Beispiele schwacher vs. starker Ziele für diesen Kontext"
    - field: "monitoring_checkpoints"
      type: "array"
      description: "Geplante Check-in-Punkte zur Zielfortschritt-Überprüfung"
    - field: "student_template"
      type: "string"
      description: "Kopierbares Zielvereinbarungs-Template für SuS"
chains_well_with:
  - "self-regulation-scaffold-generator"
  - "metakognitive-prompts"
  - "agency-scaffold-generator"
  - "self-efficacy-builder-sequence"
teacher_time: "4 minutes"
tags: ["zielsetzen", "motivation", "selbstregulation", "planung", "selbstwirksamkeit"]
---

# Zielvereinbarungs-Designer

## Was dieser Skill leistet

Generiert ein strukturiertes Zielvereinbarungs-Protokoll, das SuS durch das Setzen spezifischer, nahbarer, prozessorientierter Ziele für eine Lerneinheit, ein Projekt oder eine Aufgabe führt — inklusive LP-Modellierungs-Scripts, schwach-vs-stark-Ziel-Beispiele, Monitoring-Checkpoints und ein SuS-Template. Das Protokoll ist auf Entwicklungsniveau und Zeitrahmen abgestimmt. KI ist besonders wertvoll hier, weil wirksames Zielsetzen Verständnis von drei überlappenden Forschungsbereichen erfordert (Locke & Lathams Zielsetzen-Theorie, Zimmermans Selbstregulations-Modell, Banduras Selbstwirksamkeits-Theorie) und Übersetzung in altersgerechte, aufgabenspezifische Gerüste. Die meisten Schulzielsetzen-Übungen produzieren vage Aspirationen ("mein Bestes geben", "besser in Mathe werden"), die Forschung zeigt haben keine Motivationswirkung.

## Evidenzgrundlage

Locke & Latham (1990, 2002) etablierten, dass Ziele die Leistung durch vier Mechanismen verbessern: Aufmerksamkeit fokussieren, Anstrengung energetisieren, Persistierung erhöhen und Strategie-Entwicklung fördern — aber nur wenn Ziele spezifisch (nicht vage), herausfordernd (nicht leicht) und von der Lernenden akzeptiert sind. Vage Ziele ("mach dein Bestes") sind nicht besser als gar keine Ziele. Zimmerman & Bandura (1994) zeigten, dass selbst-gesetzte Ziele kombiniert mit Selbst-Monitoring stärkere akademische Ergebnisse als extern zugeteilte Ziele produzieren, weil selbst-gesetzte Ziele sowohl Selbstwirksamkeit als auch Commitment verbessern. Schunk (1990) zeigte, dass nahbare Ziele (kurzfristig, innerhalb von Tagen erreichbar) wirksamer als ferne Ziele (langfristig) für Aufbau von Selbstwirksamkeit bei jüngeren Lernenden sind, weil sie häufigere Erfolgserlebnisse bieten. Morisano et al. (2010) fand, dass eine strukturierte Zielsetzen- und Reflektions-Intervention signifikant akademische Leistung bei kämpfenden Uni-Studierenden verbesserte. Kritisch ist, dass Prozessziele ("Ich werde die PEEL-Struktur in jedem Absatz nutzen") Ergebnisziele ("Ich werde ein A bekommen") übertrumpfen, weil SuS ihre Prozesse kontrollieren können, aber nicht immer ihre Ergebnisse — und Prozessziele bauen übertragbare Strategien.

## Input-Schema

Die Lehrperson muss bereitstellen:
- **Lernkontext:** Wofür SuS Ziele setzen. *z.B. "Eine 4-wöchige Einheit zu überzeugender Schrift" / "Vorbereitung auf Test am Jahresende" / "Ein Design-Tech-Projekt: ein funktionierender Stromkreis bauen"*
- **SuS-Niveau:** Klassenstufe und Zielsetzen-Erfahrung. *z.B. "7. Klasse, erstes strukturiertes Zielsetzen" / "9. Klasse, haben Zielsetzen gemacht, aber Ziele sind typischerweise vage"*
- **Zeitrahmen:** Dauer. *z.B. "4 Wochen" / "eine Lektion" / "2. Semester"*

Optional (von Context Engine, falls vorhanden):
- **Zieltyp:** Ob auf Prozess, Ergebnis, oder beides fokussieren
- **SuS-Profile:** Selbstwirksamkeitsniveaus, bisherige Zielsetzen-Daten
- **Erfolgsmerkmale:** Bewertungsmatrix oder Erfolgsmerkmale zur Ziel-Verankerung
- **Fachgebiet:** Fachkontext

## Prompt

```
Du bist ein Experte in Motivation und Zielsetzen-Forschung, spezialisiert auf Locke & Lathams (1990, 2002) Zielsetzen-Theorie, Zimmermans Selbstregulations-Framework und Banduras Selbstwirksamkeits-Theorie. Du verstehst, warum die meisten Schul-Zielsetzen scheitert (Ziele sind vage, fern, und ergebnissorientiert) und wie man Protokolle entwerft, die Ziele produzieren, die SuS tatsächlich verfolgen können.

Deine Aufgabe ist es, ein Zielvereinbarungs-Protokoll für das Folgende zu entwerfen:

**Lernkontext:** {{learning_context}}
**SuS-Niveau:** {{student_level}}
**Zeitrahmen:** {{timeframe}}

Das folgende optionale Kontext kann oder kann nicht bereitgestellt sein. Nutze alles Verfügbare; ignoriere Felder, die "nicht bereitgestellt" sind.

**Zieltyp:** {{goal_type}} — falls nicht vorhanden, default zu Prozesszielen für jüngere/novice SuS und Mischung aus Prozess und Ergebniszielen für ältere/erfahrenere SuS. Prozessziele sind immer Priorität.
**SuS-Profile:** {{student_profiles}} — falls nicht vorhanden, entwerfe für typische Klasse auf dem angegebenen Erfahrungsniveau.
**Erfolgsmerkmale:** {{success_criteria}} — falls vorhanden, verankere Zieloption zu spezifischen Merkmalen der Bewertungsmatrix. Falls nicht vorhanden, generiere passende Merkmale basierend auf Lernkontext.
**Fachgebiet:** {{subject_area}} — falls nicht vorhanden, leite aus Lernkontext ab.

Wende diese evidence-basierten Prinzipien an:

1. **Spezifisch statt vage (Locke & Latham, 2002):** Jedes Ziel muss spezifisch genug sein, dass sowohl SuS als auch LP unambig bestimmen kann, ob es erreicht wurde. "Verbessere mein Schreiben" scheitert. "Nutze mindestens zwei Beweisstücke in jedem analytischen Absatz" funktioniert.

2. **Prozess statt Ergebnis (Zimmerman & Bandura, 1994):** Priorisiere Ziele über das, das SuS TUN (Strategien, Verhaltensweisen, Anstrengungsverteilung) statt was sie ERREICHEN (Noten, Scores). SuS kontrollieren ihre Prozesse; sie kontrollieren ihre Ergebnisse nicht komplett. Prozessziele bauen auch übertragbare Strategien.

3. **Nahbar statt fern (Schunk, 1990):** Für jüngere SuS spezifisch, zerlege langfristige Ziele in wöchentliche oder sogar tägliche Teilziele. Nahbare Ziele bieten häufige Erfolgserlebnisse, die Selbstwirksamkeit bauen. Eine 7.-Klasse-SuS mit einem Semester-Ziel wird es verlieren; eine mit einem Wochenziel kann Fortschritt sehen.

4. **Herausfordernd aber erreichbar:** Ziele, die zu leicht sind, motivieren nicht. Ziele, die zu schwer sind, untergraben Selbstwirksamkeit. Positioniere Ziele in der "Stretch-Zone" — erfordert Anstrengung, ist aber mit guter Strategie-Nutzung erreichbar. Für gemischte Klassen, differenziere Zielherausforderungs-Niveau.

5. **Selbst-gesetzt mit Leitung (Zimmerman & Bandura, 1994):** SuS sollten ihre eigenen Ziele aus einem strukturierten Set wählen, nicht Ziele aufgezwungen bekommen. Selbst-gesetzte Ziele produzieren stärkeres Commitment. Aber ungeleistetes Zielsetzen produziert vage Ziele — also biete ein Menu oder Framework.

6. **Eingebautes Monitoring und Überarbeitung:** Ziele ohne Check-in-Punkte verfallen. Baue geplante Monitoring-Momente (mindestens wöchentlich für mehrwöchige Zeitrahmen) ein, wo SuS Fortschritt bewerten und anpassen.

7. **Modelliere schwache vs. starke Ziele:** SuS brauchen den Kontrast zwischen ineffektivem und effektivem Ziel zu sehen, mit expliziter Erklärung, warum das starke Ziel besser ist.

Gebe deine Ausgabe in diesem genauen Format zurück:

## Zielvereinbarungs-Protokoll: [Lernkontext]

**Für:** [SuS-Niveau]
**Zeitrahmen:** [Dauer]

### Schritt 1: LP-Modellierung
[Ein Script, das die LP ihren eigenen Zielsetzen-Prozess modelliert, einschliesslich Denken laut, warum vage Ziele nicht funktionieren]

### Schritt 2: Schwache vs. Starke Ziel-Beispiele
[3 Paare schwacher/starker Ziele spezifisch für diesen Lernkontext, mit Erklärung, was jedes Starke stark macht]

### Schritt 3: Zielsetzen-Framework
[Das Framework, das SuS nutzen, um ihre Ziele zu setzen — strukturierte Wahlen, Satzstämme oder Menu-Optionen abhängig von Entwicklungsniveau]

### Schritt 4: Monitoring-Checkpoints
[Geplante Check-in-Punkte mit spezifischen Fortschritt-Überprüfungs-Prompts]

### Schritt 5: Reflektion und Überarbeitung
[End-of-Zyklus-Reflexions-Protokoll — bewerte Zielererreichung und setze überarbeitete Ziele]

### SuS-Template
[Kopierbares Zielvereinbarungs-Dokument für SuS]

**Selbst-Check vor Ausgabe:** Verifiziere, dass (a) alle Beispielziele spezifisch und messbar sind, (b) Prozessziele Ergebnisziele überwiegen, (c) das Protokoll Monitoring-Checkpoints einschliesst, (d) Ziele abgestimmt sind zum Herausforderungs-Niveau des angegebenen Niveaus, (e) SuS ihre eigenen Ziele in einem strukturierten Framework wählen statt ihnen zugeordnet zu bekommen, und (f) schwach-vs-stark-Beispiele klar erklären, was sie unterscheidet.
```

## Beispielausgabe

**Szenario:** *Lernkontext: "9. Klasse Sek 1 Geschichte — 5-Wochen-Einheit zur Industriellen Revolution, kumulierend in bewertete Quellenanalyse-Aufsatz" / SuS-Niveau: "9. Klasse, haben grundlegende Zielsetzen gemacht, aber Ziele sind typischerweise vage ('gut im Essay')" / Zeitrahmen: "5 Wochen"*

---

## Zielvereinbarungs-Protokoll: 9. Klasse Geschichte — Industrielle-Revolution-Einheit

**Für:** 9. Klasse, sich entwickelnde Zielsetzer
**Zeitrahmen:** 5 Wochen (15 Lektionen)

### Schritt 1: LP-Modellierung (5 Minuten, Lektion 1)

"Ich werde auch ein Ziel für diese Einheit setzen, und ich möchte, dass du siehst, wie ich darüber denke.

Mein erster Impuls ist zu sagen: 'Mein Ziel ist, dass ihr alle gut im Essay seid.' Aber lass mich denken, warum das kein nützliches Ziel ist. Kann ich 'gut machen' messen? Nicht wirklich — es bedeutet verschiedene Sachen für verschiedene Personen. Kann ich es kontrollieren? Nicht komplett — eure Noten hängen davon ab, was ihr schreibt, nicht nur was ich unterrichte. Ist es spezifisch? Nein.

Lass mich nochmal versuchen. Was möchte ich wirklich diese Einheit verbessern? Letzte Einheit, bemerkte ich, dass wenn wir Quellenanalyse machten, viele von euch beschrieben, was die Quelle *sagte*, aber nicht erklärten, was sie *zeigt* — ihr machtet keine Schlussfolgerungen. So ist mein Ziel:

*'In jeder Quellenanalyse diese Einheit, werde ich modellieren, wie man Schlussfolgerungen macht — nicht nur was die Quelle sagt, aber was es über das Leben während der Industriellen Revolution suggeriert. Ich werde mindestens ein Live-Beispiel pro Lektion machen.'*

Das ist spezifisch — ich kann es am Ende jeder Lektion überprüfen. Es handelt von Prozess — was ich TUN, nicht was das Ergebnis ist. Und es ist herausfordernd — ich überhafte manchmal die Modellierung. Das ist mein Ziel. Jetzt werdet ihr eure setzen."

### Schritt 2: Schwache vs. Starke Ziel-Beispiele

| Schwaches Ziel | Starkes Ziel | Warum das starke Ziel besser ist |
|-----------|------------|------------------------------|
| "Gut im Essay" | "In meinem Essay werde ich erklären, was jede Quelle *suggeriert* über die Industrielle Revolution, nicht nur beschreiben, was sie sagt — ich werde den Satz 'Das suggeriert, dass...' mindestens 3-mal nutzen" | Spezifisch (genau was tun und wie oft), prozessorientiert (eine Strategie, die die SuS üben kann), messbar (die Sätze zählen) |
| "Mehr über die Industrielle Revolution lernen" | "Jede Woche werde ich eine 3-Satz-Zusammenfassung des Schlüssel-Ursache-und-Wirkung, das wir studierten, schreiben, ohne meine Notizen zu schauen, um zu testen, ob ich es wirklich behalte" | Prozessorientiert (Abrufen-Übungs-Strategie), nahbar (wöchentlich), baue echtes Verständnis statt annehmend, dass es passiert |
| "Mehr versuchen in Geschichte" | "Ich werde die Quellenanalyse-Hausaufgabe jede Woche zeitig machen, und wenn ich Rückmeldung bekomme, werde ich einen Absatz mit der LP-Kommentare neu schreiben, bevor ich weiterziehe" | Spezifische Verhaltensweisen (zeitige Hausaufgabe + Rückmeldung reagieren), in der SuS-Kontrolle, adressiert direkt ein häufiges Hindernis |

### Schritt 3: Zielsetzen-Framework

SuS wählen **ein Prozessziel** und **ein Wissensziel** aus den Menus unten, oder schreiben ihre eigenen folge der gleichen Struktur.

**Prozessziel-Menu** (wähle oder adaptiere eins):
- "In jeder Quellenanalyse werde ich den Satz 'Das suggeriert, dass...' nutzen, um mindestens eine Schlussfolgerung über das, die Quelle buchstäblich sagt, hinaus zu machen."
- "Jede Woche werde ich mich selbst testen, indem ich schreibe, was ich mich an die Wochen-Lektion ohne Notizen erinnere — falls ich mich nicht erinnere, werde ich nochmal lesen, bevor die nächste Lektion."
- "Wenn ich Rückmeldung auf mein Schreiben bekomme, werde ich einen Absatz mit der Rückmeldung neu schreiben, bevor ich weiterziehe, statt einfach nur den Kommentar zu lesen."
- "In Klassendebatten werde ich mindestens eine Idee pro Lektion beitragen — sogar falls ich mir nicht sicher bin, dass es richtig ist."
- "Schreib mein Eigenes:" _______________ (Muss enthalten: was ich tun werde + wie oft + wie ich weiss, dass ich es getan habe)

**Wissensziel-Menu** (wähle oder adaptiere eins):
- "Bis Ende dieser Einheit, kann ich drei Arten erklären, wie die Industrielle Revolution das Leben der Arbeiter veränderte, mit spezifischem Beispiel für jede."
- "Bis Ende dieser Einheit, kann ich eine Quelle, die ich nie zuvor sah, analysieren und zwei Schlussfolgerungen über das, was sie suggeriert, machen."
- "Bis Ende dieser Einheit, verstehe ich, warum Historikerinnen bezweifeln, ob die Industrielle Revolution überwiegend positiv oder negativ war."
- "Schreib mein Eigenes:" _______________ (Muss enthalten: was ich wissen oder tun kann + wie ich es beweisen würde)

### Schritt 4: Monitoring-Checkpoints

| Woche | Checkpoint | Prompt |
|------|-----------|--------|
| Ende Woche 1 | In-Klasse (3 min) | "Schau dein Prozessziel an. Hast du das Ding getan, das du diese Woche sagtest? Falls ja, Haken. Falls nein, was stand im Weg? Was wirst du diese Woche verändern, um es passieren zu lassen?" |
| Ende Woche 2 | Geschrieben (5 min) | "Gib dir selbst einen Score: 1 (nicht angefangen), 2 (versucht einmal), 3 (regelmässig tun), 4 (wird automatisch). Für dein Wissensziel: kannst du den Test jetzt bestehen? Versuch deine Antwort ohne Notizen zu schreiben und schau." |
| Ende Woche 3 | Partner-Check (5 min) | "Erkläre deine Ziele einem Partner. Frage sie: 'Hast du mich das in der Klasse tun sehen?' Ihre Beobachtung wichtig, weil wir schlecht in der Beurteilung unserer eigenen Gewohnheiten sind." |
| Ende Woche 4 | LP-Konferenz (2 min pro SuS, während unabhängiger Arbeit) | LP fragt: "Zeig mir Beweis, dass du auf dein Ziel hinarbeitetest. Was ist eine Sache, in der du dich verbessert hast? Was würdest du für den Essay verändern?" |

### Schritt 5: Reflektion und Überarbeitung (Woche 5, nach Essay-Einreichung)

**Nach-Essay-Reflektion (10 Minuten):**

1. "Lies dein Prozessziel von Woche 1. Hast du es getan? Gib dir selbst eine Punktzahl ehrlich: 1 (tat es nicht), 2 (manchmal), 3 (grösstenteils), 4 (konsistent)."
2. "Lies dein Wissensziel. Kannst du das Ding tun, das du dir setzen wolltest? Beweise es — schreib 2–3 Sätze, das es jetzt zeigt."
3. "Vollende diesen Satz: 'Die Strategie, die mir am meisten diese Einheit geholfen hat, war _____________, und ich weiss es geholfen, weil _____________.'​"
4. "Vollende diesen Satz: 'Nächste Einheit, würde ich ein anderes/besseres Ziel setzen, weil _____________.'​"
5. "Falls du dir selbst 3 oder 4 für dein Prozessziel gabst, setze eine schwierigere Version für nächste Einheit. Falls du 1 oder 2 gabst, überarbeite das Ziel, um es realistischer zu machen ODER identifiziere was dich blockierte und adressiere das zuerst."

### SuS-Template

---

**MEINE ZIELE — Industrielle-Revolution-Einheit**

**Name:** _______________ **Datum:** _______________

**Mein Prozessziel** (was ich TUN werde):
_______________________________________________________________
Wie oft: _______________ Wie ich weiss, dass ich es getan habe: _______________

**Mein Wissensziel** (was ich WISSEN oder TUN kann):
_______________________________________________________________
Wie ich es beweisen würde: _______________

**Wöchentliche Check-ins:**
| Woche | Habe ich mein Prozessziel diese Woche getan? (J/N) | Score (1–4) | Was geholfen oder stand im Weg? |
|------|------------------------------------------|-------------|-------------------------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

**Nach dem Essay:**
- Habe ich mein Prozessziel erreicht? Score: ___
- Kann ich mein Wissensziel jetzt zeigen? ___
- Strategie, die am meisten geholfen hat: _______________
- Ziel, das ich nächstes Mal setzen würde: _______________

---

## Bekannte Einschränkungen

1. **Zielsetzen ist motivierend für SuS mit mittlerer bis hoher Selbstwirksamkeit, kann aber für SuS mit sehr niedriger Selbstwirksamkeit rückwärts gehen.** Eine SuS, die wiederholt in einem Fach versagt hat, kann strukturiertes Zielsetzen als eine weitere Chance für dokumentierten Versagen erleben. Für diese SuS, begin mit extrem nahbaren, niedrig-Einsatz-Zielen (täglich, leicht erreichbar), um frühe Erfolgserlebnisse vor erhöhter Herausforderung zu bauen. Schunk (1990) betont, dass Ziellernen zum aktuellen Selbstwirksamkeits-Niveau kalibriert werden muss.

2. **Prozessziele erfordern, dass LPs Prozess, nicht nur Ergebnisse, wertschätzen.** Falls die Klassenkultur nur Noten und Rankings feiert, werden SuS Ergebnisziele setzen unabhängig vom Protokoll, weil das ist, was tatsächlich belohnt wird. Das Protokoll arbeitet am besten in Klassenzimmern, wo Anstrengung, Strategie-Nutzung und Verbesserung sichtbar wertgeschätzt sind.

3. **SuS brauchen das Zielsetzen-Protokoll über mehrere Einheiten hinweg konsistent genutzt, um die Gewohnheit zu entwickeln.** Eine einmalige Zielsetzen-Aktivität in einer Einheit wird nicht dauernde Selbstregulation produzieren. Die Forschung zeigt, dass SRL-Interventionen nachhaltig Umsetzung brauchen — Dignath & Büttner (2008) fand stärkste Effekte in Interventionen, die 8+ Wochen andauern. LPs sollten ein konsistentes Zielsetzen-Framework über das Jahr nutzen, adaptierend den Inhalt aber haltend die Struktur.
