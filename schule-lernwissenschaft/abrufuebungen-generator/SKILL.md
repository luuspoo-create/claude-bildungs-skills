---
# AGENT SKILLS STANDARD FIELDS (v2)
name: abrufuebungen-generator
description: "Generiere Abruf-Übungs-Fragen mit variierten Schwierigkeitsgraden zu einem Thema oder Konzept. Nutze diesen Skill beim Erstellen von Quiz-Starters, Revisionsaktivitäten oder niedrig-stakes Bewertungs-Materialien."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lernwissenschaft/abrufuebungen-generator"
skill_name: "Abruf-Übungs-Fragen-Generator"
domain: "schule-lernwissenschaft"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Roediger & Butler (2011) — The critical role of retrieval practice in long-term retention"
  - "Karpicke & Roediger (2008) — The critical importance of retrieval for learning"
  - "Rowland (2014) — Meta-analysis: the effect of testing versus restudy on retention (effect size 0.50)"
  - "Agarwal et al. (2012) — Classroom-based retrieval practice studies with middle school students"
  - "Dunlosky et al. (2013) — Practice testing rated as high-utility learning strategy"
input_schema:
  required:
    - field: "thema"
      type: "string"
      description: "Das spezifische Konzept oder die Fähigkeit, die SuS abrufen müssen"
    - field: "sus_niveau"
      type: "string"
      description: "Klassenstufe und ungefähres Vorwissen"
    - field: "fragenzahl"
      type: "integer"
      description: "Anzahl zu generierender Fragen (empfohlen 6–10)"
  optional:
    - field: "sus_profile"
      type: "array"
      description: "Aus Kontext-Engine: individuelle Sprachniveaus, Vorwissens-Lücken"
    - field: "kompetenzbasis"
      type: "string"
      description: "Aus Kontext-Engine: Schul-Bewertungs-Framework oder Lehrplan-Standard"
    - field: "zeit_seit_lernen"
      type: "string"
      description: "Wie lange SuS dieses Material schon gelernt haben"
    - field: "bekannte_missverstaendnisse"
      type: "array"
      description: "Spezifische Missverständnisse bereits in dieser Kohorte beobachtet"
output_schema:
  type: "object"
  fields:
    - field: "fragen"
      type: "array"
      description: "Liste Abruf-Fragen, jede mit Text, Abruf-Typ-Label und Schwierigkeits-Schätzung"
    - field: "spacing_empfehlung"
      type: "string"
      description: "Wann diese Fragen relativ zu Original-Unterricht einsetzen"
    - field: "antwortnoten"
      type: "string"
      description: "Kern-Punkte für korrekte Antworten und häufige Fehler"
    - field: "lehrer_skript"
      type: "string"
      description: "Kurze suggerierte Umsetzungs-Anleitung"
chains_well_with:
  - "verteiltes-ueben-planer"
  - "formative-bewertungs-methoden-auswahl"
  - "lueckenanalyse-sus-arbeit"
  - "cognitive-load-analyser"
teacher_time: "3 Minuten"
tags: ["abruf", "gedaechtnis", "bewertung", "verteiltes-ueben", "abrufeffekt", "lernwissenschaft"]
---

# Abruf-Übungs-Fragen-Generator

## Was dieser Skill leistet

Generiert einen Satz Abruf-Übungs-Fragen, die echte Wiederherstellung von Wissen aus Gedächtnis erzwingen — nicht Wiedererkennung, nicht Relesen, nicht Vertrautheit-basiertes Raten. Der Skill unterscheidet zwischen freiem Abruf (keine Hinweise), gehindertem Abruf (teil-Hinweise) und Erkennungs-Fragen (aus Optionen wählen), und kalibriert die Mischung basierend auf SuS-Niveau und Zeit seit Unterricht. KI ist besonders wertvoll, weil Fragen-Design, die echte Wiederherstellung testet statt Wiedererkennung, tiefes Verständnis der Abruf-Effekt-Forschung benötigt — die meisten LP-Quiz-Fragen testen versehentlich Wiedererkennung.

## Evidenzgrundlage

Der Abruf-Effekt ist einer der robustesten Funde in kognitiver Psychologie. Karpicke & Roediger (2008) zeigten, dass Abruf-Übung deutlich bessere Langzeit-Behaltung produziert als Relesen, selbst wenn Relesen mehr totale Expositionszeit hat. Roediger & Butler (2011) etablierten, dass Abruf-Übung Gedächtnis-Spuren durch einen unterschiedlichen Mechanismus als Enkodierung verstärkt — der Rekonstruktions-Akt selbst modifiziert das Gedächtnis. Rowland's (2014) Meta-Analyse von 159 Studien fand durchschnittliche Effektstärke 0,50 für Testen versus Relesen, mit Effekten robust über Altersgruppen, Materialien und Verzögerungs-Intervalle. Kritisch: Agarwal et al. (2012) replizierten diese Effekte in echten Klassenzimmern mit mittleren Schülern, bestätigen Lab-zu-Klasse-Transfer. Dunlosky et al. (2013) bewertete Übungs-Testen als eine von nur zwei „hohe Nützlichkeit"-Strategien in ihrer umfassenden Überprüfung von zehn Techniken.

## Input-Schema

Die Lehrperson (LP) muss bereitstellen:
- **Thema:** Das spezifische Konzept oder die Fähigkeit, die SuS abrufen müssen. *z.B. „Ursachen des Ersten Weltkriegs" / „Photosynthese-Licht-Reaktionen" / „Löse lineare Gleichungen mit einer Variable"*
- **SuS-Niveau:** Klassenstufe und ungefähres Vorwissen. *z.B. „9. Klasse, mittleres Niveau, haben das Thema vor 2 Wochen behandelt" / „12. Klasse Biologie, hohes Vorwissen"*
- **Fragenzahl:** Anzahl zu generierender Fragen. *z.B. 8*

Optional (injiziert durch Kontext-Engine wenn verfügbar):
- **SuS-Profile:** Individuelle Sprachkompetenz-Niveaus, identifizierte Wissens-Lücken
- **Kompetenzbasis:** Der spezifische Lehrplan-Standard oder Bewertungs-Framework
- **Zeit seit Unterricht:** Dauer seit Material zuerst unterrichtet (beeinflusst Schwierigkeits-Kalibrierung)
- **Bekannte Missverständnisse:** Spezifische Missverständnisse bereits in SuS-Antworten beobachtet

## Prompt

```
Du bist ein Experte in kognitiver Psychologie spezialisiert auf den Abruf-Effekt und abruf-basiertes Lernen. Du kennst Roediger & Butler's (2011) Arbeit zu Abruf-Übung, Karpicke & Roediger's (2008) Forschung zu Abruf's kritischer Wichtigkeit und Rowland's (2014) Meta-Analyse, die robuste Effektstärken für Testen versus Relesen demonstriert.

Deine Aufgabe: Generiere {{fragenzahl}} Abruf-Übungs-Fragen zum Thema „{{thema}}" für {{sus_niveau}}.

Der folgende optionale Kontext kann bereitgestellt werden. Nutze, was verfügbar ist; ignoriere fehlende Felder.

**Zeit seit Unterricht:** {{zeit_seit_lernen}} — wenn nicht angegeben, nimm an, Material wurde in letzten 1–2 Wochen unterrichtet und kalibriere Schwierigkeit entsprechend.
**Bekannte Missverständnisse:** {{bekannte_missverstaendnisse}} — wenn nicht, include Fragen, die häufigste Missverständnisse für dieses Thema anzvisieren, basierend auf Fachwissen.
**Kompetenzbasis:** {{kompetenzbasis}} — wenn nicht, generiere Fragen, die allgemeine Lehrplan-Erwartungen für Klassenstufe erfüllen.
**SuS-Profile:** {{sus_profile}} — wenn nicht, designe für typische gemischte Leistungsgruppe ohne spezifische Sprach- oder Lern-Bedürfnisse.

Wende diese evidenzbasierten Kriterien an:

1. **Abruf-Typ-Verteilung:** Include Mischung aus:
   - Freier Abruf (keine Hinweise — z.B. „Erklär den Prozess..." / „Nenne die Faktoren...") — produzieren stärksten Lerneffekt aber sind hardest
   - Gehinderter Abruf (teil-Hinweise — z.B. „Die drei Hauptursachen waren _____, _____, und _____" / „Vervollständige dieses Diagramm...") — moderate Schwierigkeit, gute Stütze
   - Erkennungs-Fragen (aus Optionen wählen — z.B. Multiple Choice) — schwächster Abruf-Effekt aber nützlich zum Konfidenz-Aufbauen
   Gewichte zu freiem und gehindertem Abruf. Include Erkennungs-Fragen nur für Anfänger oder als warm-up.

2. **Echte Wiederherstellung, nicht Wiedererkennung:** Jede Frage muss echte Abruf aus Gedächtnis erfordern, nicht einfach vertraute-aussehende Info wiedererkennen. Vermeide Fragen, die durch Oberflächen-Muster-Matching beantwortet werden können.

3. **Ziel auf das richtige Wissen:** Fragen sollten Kern-Konzepte, Beziehungen und Prozeduren ansprechen — nicht triviale Details, Daten oder Definitionen, es sei denn, diese sind echte Wichtigkeit zum Verstehen.

4. **Schwierigkeits-Kalibrierung:** Wenn Zeit seit Unterricht kürzlich (< 1 Woche), include mehr gehinderter Abruf. Wenn Zeit längert (> 2 Wochen), freier Abruf wird wertvoll als er stärkere Abruf-Übung während Vergessen-Phase bietet.

5. **Missverständnis-Ansprechen:** Wenn bekannte Missverständnisse angegeben, include mindestens 2 Fragen, die diese spezifisch anzvisieren.

Gib deine Antwort in diesem Format aus:

## Abruf-Übungs-Fragen: [Thema]

**Für:** [SuS-Niveau]
**Spacing-Empfehlung:** [Wann diese Fragen einsetzen — z.B. „Nutze 3–7 Tage nach Initial-Unterricht für optimal Spacing-Effekt. Nutze Subset erneut in 2–4 Wochen für zweite Abruf-Gelegenheit."]

### Fragen

Für jede Frage gib:
- Fragetext
- **Typ:** [Freier Abruf / Gehinderter Abruf / Erkennung]
- **Zielt auf:** [Was spezifisches dieses Wissen abruft]

### Antwortnoten

Für jede Frage:
- Kern-Punkte für korrekte Antwort
- Häufige Fehler oder Missverständnisse zum Beobachten

### Umsetzungs-Skript

Ein kurz (3–4 Sätze) Skript, wie LP diese Abruf-Aktivität im Klassenzimmer läuft, inklusive:
- Ob Notizen erlaubt sind (nein — das untergräbt Sinn)
- Wie lange zu geben (typisch 8–12 Minuten für 6–10 Fragen)
- Was danach (bespreche Antworten, identifiziere Lücken, nicht bewerten — niedrig-stakes ist essentiell)

**Selbstkontrolle vor Antwort:** Verifiziere, dass (a) jede Frage echte Wiederherstellung, nicht nur Wiedererkennung benötigt, (b) Abruf-Typ-Mischung zu SuS-Niveau passt, (c) keine Frage aus Fragetext allein ohne Vorwissen beantwortet werden kann, (d) Fragen zielen auf sinnvolles Wissen, nicht Trivia.
```

## Beispiel-Output

**Szenario:** *Thema: „Ursachen und Prozess von Erosion" / SuS-Niveau: „7. Klasse Geographie, gemischtes Niveau, haben das vor 10 Tagen behandelt" / Fragenzahl: 8*

---

## Abruf-Übungs-Fragen: Ursachen und Prozess von Erosion

**Für:** 7. Klasse Geographie, gemischtes Niveau
**Spacing-Empfehlung:** Nutze jetzt (10 Tage nach Unterricht liegt im optimalen Spacing-Fenster). Nutze Fragen 1, 3, 5, 7 in 2–3 Wochen für zweite Abruf-Gelegenheit. Nach das, integriere Erosions-Abruf in gemischte Themen-Quizze einmal pro Halbjahr.

### Fragen

**F1.** Ohne Notizen zu schauen, erkläre den Unterschied zwischen Erosion und Verwitterung. Warum sind sie nicht das gleiche?
- **Typ:** Freier Abruf
- **Zielt auf:** Unterscheidung zwischen zwei häufig vermengten Prozessen; Verständnis, dass Erosion Transport beinhaltet

**F2.** Nenne die vier Haupt-Arten von Erosion, die Flüsse verursachen. Für jede, beschreibe was physisch mit dem Felsen oder Flussbett geschieht.
- **Typ:** Freier Abruf
- **Zielt auf:** Hydraulische Aktion, Abrasion, Abnutzung, Lösung — und der Mechanismus jeder, nicht einfach das Label

**F3.** Ein Bauer bemerkt, dass Boden auf einem Hangefeld Jahr für Jahr dünner wird. Das Feld hat keine Bäume oder Hecken. Erkläre, warum der Boden verschwindet, nutze korrekte geografische Begriffe.
- **Typ:** Gehinderter Abruf (Szenario bietet Kontext-Hinweis)
- **Zielt auf:** Boden-Erosions-Prozess, Rolle der Vegetation in Erosions-Prävention, Oberflächen-Runoff

**F4.** Vervollständige diese Sequenz: Fels wird durch Verwitterung abgebaut → lockeres Material wird __________ durch Erosion → Material wird von Fluss transportiert, das heißt __________ → Material wird abgelagert, wenn Fluss verlangsamt, das heißt __________.
- **Typ:** Gehinderter Abruf
- **Zielt auf:** Transport/Erosion, Transportieren, Ablagerung — der volle Zyklus

**F5.** Zeichne ein einfaches Diagramm, das zeigt, wie ein Wasserfall durch Erosion entsteht. Beschrifte mindestens vier Features und erkläre, welche Erosions-Art an jedem Punkt passiert.
- **Typ:** Freier Abruf (Diagramm aus Gedächtnis)
- **Zielt auf:** Unterschneidung, Hart/Weiches Gestein, Tauchbecken, Rückgang — räumliches Verständnis des Prozesses

**F6.** Ein Schüler schreibt: „Erosion ist, wenn Felsen in kleinere Stücke durch Wetter zerbrochen werden." Was ist falsch bei dieser Aussage? Schreib eine genauere Version.
- **Typ:** Gehinderter Abruf (Fehler-Korrektur)
- **Zielt auf:** Verwitterung von Erosion unterscheiden; Verständnis, dass Erosion über Bewegung, nicht einfach Zerbrechen ist

**F7.** Warum geschieht Erosion in manchen Orten schneller als in anderen? Gib drei spezifische Faktoren und erkläre, wie jeder Erosions-Rate beeinflusst.
- **Typ:** Freier Abruf
- **Zielt auf:** Fels-Art/Härte, Klima/Regen, Vegetation, menschliche Aktivität — kausales Denken

**F8.** Welches von folgendem ist ein Beispiel von Abrasion?
(a) Salzkristalle expandieren in Risse in einer Klippe
(b) Kiesel von Fluss getragen, mahlen gegen Flussbett
(c) Kohlendioxid in Regenwasser löst Kalkstein
(d) Wellen komprimieren Luft in Felsen-Risse
- **Typ:** Erkennung
- **Zielt auf:** Abrasion von Salz-Verwitterung (a), chemischer Verwitterung/Lösung (c) und hydraulischer Aktion (d) unterscheiden

### Antwortnoten

- **F1:** Kern-Unterscheidung — Verwitterung bricht Fels *in situ* ab, Erosion beinhaltet Transport von Material. Häufiger Fehler: SuS sagen „Erosion ist Fels-Zerbrechen" (mit Verwitterung verwechseln).
- **F2:** Hydraulische Aktion (Wasserkraft), Abrasion (Sediment schabt), Abnutzung (Partikel mahlen einander), Lösung (chemisches Lösen). Häufiger Fehler: Abrasion mit Abnutzung verwechseln.
- **F3:** Ohne Wurzeln zur Bindung von Boden, Regen schafft Oberflächen-Runoff, der Oberboden den Hang hinab trägt. Kern-Begriffe: Oberflächen-Runoff, Boden-Erosion, fehlende Abfangung. Häufiger Fehler: „Wind weht es weg" sagen ohne Wassermechanismus zu erklären.
- **F4:** Transportiert (oder hochgenommen/bewegt), Transport, Ablagerung. Häufiger Fehler: „Erosion" für alle drei Blanks nutzen.
- **F5:** Muss zeigen: Hart-Fels über Weiches, Unterschneidung weiches Gestein, Überhanging, Einsturz, Tauchbecken, Gorge-Bildung durch Rückgang. Häufiger Fehler: Es als einzelnes Ereignis zeichnen statt Prozess über Zeit.
- **F6:** Die Aussage beschreibt Verwitterung, nicht Erosion. Erosion beinhaltet spezifisch die Bewegung von Material. Besser: „Erosion ist der Prozess, durch den verwittertes Material durch Agentien wie Flüsse, Wellen, Wind oder Eis hochgenommen und transportiert wird."
- **F7:** Accept: Fels-Härte/Typ, Regen-Menge und -Intensität, Vegetation, Hang-Winkel, menschliche Aktivität (Abholzung, Bau). Muss Mechanismus erklären, nicht nur Faktoren listen.
- **F8:** Korrekte Antwort: (b). Distraktoren-Analyse: (a) = Salzverwitterung, (c) = chemische Verwitterung/Lösung, (d) = hydraulische Aktion.

### Umsetzungs-Skript

Führe das als niedrig-stakes Abruf-Starter durch — keine Notizen, keine Bücher, keine Geräte. Sag SuS: „Das ist nicht ein Test für Noten. Es ist eine Gedächtnis-Übung. Steckenbleiben ist normal und hilft tatsächlich beim Lernen — das zeigt die Forschung." Gib 10 Minuten für alle 8 Fragen. SuS, die früh fertig, sollen zurückgehen und mehr Detail hinzufügen. Nach Zeit, bespreche Antworten als Klasse, fokussiere auf F1 und F6 (häufigste Missverständnisse). Nicht sammeln oder benoten — das Lernen geschieht im Abruf-Versuch selbst, nicht im Score.

---

## Bekannte Grenzen

1. **Kann Fachliche Genauigkeit gegen spezifisches Lehrbuch oder Lehrplan nicht verifizieren.** Die Fragen sind aus allgemeinem Fachwissen generiert. LPs sollten prüfen, dass Begriffe und erwartete Antworten mit was tatsächlich unterrichtet wurde passen — besonders für F2 und F4, wo spezifische Begriffe zwischen Lehrplänen variieren können.

2. **Freier Abruf-Fragen können SuS mit sehr niedrigem Vorwissen oder limitierter Englisch-Fähigkeit überfordert.** Für EAL-Schüler oder die mit signifikanten Lücken, erhöhe Anteil von gehindertem Abruf und Erkennungs-Fragen. Chain mit dem Scaffolded Task Modifier für Sprach-adaptierte Versionen.

3. **Die Spacing-Empfehlung ist kalibriert zu Lab-Forschung auf optimalen Intervallen.** Echte Klassenzimmer-Scheduling-Constraints (Stundenplan-Lücken, Ferien, Bewertungs-Fenster) können empfohlenes Spacing unpraktisch machen. LP-Urteil bei Timing ist immer nötig.
