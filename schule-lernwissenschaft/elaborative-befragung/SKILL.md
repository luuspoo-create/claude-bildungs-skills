---
# AGENT SKILLS STANDARD FIELDS (v2)
name: elaborative-befragung
description: "Generiere elaborative Befragungsfragen, die tiefere Verarbeitung durch gezielte Warum- und Wie-Fragen ermöglichen. Nutze diesen Skill, wenn SuS auswendig lernen ohne zu verstehen oder tiefere Verarbeitung von Inhalten benötigen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lernwissenschaft/elaborative-befragung"
skill_name: "Elaborative Befragung — Fragen-Generator"
domain: "schule-lernwissenschaft"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Pressley et al. (1992) — Elaborative interrogation facilitates acquisition of confusing facts"
  - "Woloshyn et al. (1994) — Use of elaborative interrogation to help students acquire information consistent with prior knowledge"
  - "Dunlosky et al. (2013) — Elaborative interrogation rated moderate-utility learning strategy"
  - "McDaniel & Donnelly (1996) — Learning with analogy and elaborative interrogation"
  - "Ozgungor & Guthrie (2004) — Interactions among elaborative interrogation, knowledge, and interest in the process of constructing knowledge from text"
input_schema:
  required:
    - field: "thema"
      type: "string"
      description: "Das Konzept, die Faktenmenge oder der Inhaltsbereich, den SuS lernen"
    - field: "sus_niveau"
      type: "string"
      description: "Klassenstufe und ungefähres Vorwissen"
    - field: "fragenzahl"
      type: "integer"
      description: "Anzahl elaborativer Fragen (empfohlen 5–8)"
  optional:
    - field: "inhaltstext"
      type: "string"
      description: "Der spezifische Text oder Inhalt, mit dem SuS arbeiten"
    - field: "vorwissen"
      type: "string"
      description: "Was SuS bereits wissen und damit verbunden werden kann"
    - field: "sus_profile"
      type: "array"
      description: "Aus Kontext-Engine: Sprachniveaus, Vorwissensprofile"
    - field: "lernziele"
      type: "string"
      description: "Spezifische Lernziele, die die Fragen unterstützen sollen"
output_schema:
  type: "object"
  fields:
    - field: "elaborative_fragen"
      type: "array"
      description: "Geordnete Liste von Warum/Wie-Fragen mit Zielwissen und erwarteter Tiefe"
    - field: "umsetzungsleitfaden"
      type: "string"
      description: "Wie die Fragen eingesetzt werden — Timing, Gruppenarbeit, schriftlich vs mündlich"
    - field: "verbindungsfragen"
      type: "array"
      description: "Fragen, die neues Lernen mit Vorwissen verbinden"
chains_well_with:
  - "abrufuebungen-generator"
  - "selbstregulations-geruest-generator"
  - "metakognitives-fragenrepertoire"
  - "leseverstaendnis-strategie-auswahl"
teacher_time: "3 Minuten"
tags: ["elaboration", "enkodierung", "verstaendnis", "tiefe-verarbeitung", "befragung", "lernwissenschaft"]
---

# Elaborative Befragung — Fragen-Generator

## Was dieser Skill leistet

Generiert einen Satz von „Warum?"-Fragen und „Wie verbindet sich das mit...?"-Fragen, die tiefe Enkodierung durch erzwungene Selbsterklärungen ermöglichen. Diese Fragen verbinden neues Wissen mit bestehenden Konzepten — das Erklären selbst verstärkt die Gedächtnisspur. Im Gegensatz zu Verständnisfragen (die Verstehen prüfen), erfordern elaborative Befragungen, dass SuS selbst erklären, *warum* ein Sachverhalt zutrifft oder *wie* er sich auf Bekanntes bezieht. KI ist besonders wertvoll, da effektive Befragungen genau am Schnittpunkt zwischen Neuem und Vorwissen angesiedelt sein müssen — zu weit entfernt vom Vorwissen können SuS nicht erklären; zu offensichtlich braucht es keine Elaboration.

## Evidenzgrundlage

Pressley et al. (1992) zeigten, dass das Beantworten von „Warum?"-Fragen zu Fakten deutlich bessere Behaltensleistungen produziert als bloßes Lesen, mit Effektstärken um 0,59. Der Mechanismus ist elaborative Enkodierung — das Generieren einer Erklärung schafft zusätzliche Abrufwege zur Information. Woloshyn et al. (1994) zeigten, dass elaborative Befragung am wirksamsten ist, wenn SuS ausreichend Vorwissen haben, um plausible Erklärungen zu generieren. Dunlosky et al. (2013) bewerteten elaborative Befragung als „moderate Nützlichkeit"-Strategie mit starken Belegen für Faktenlernern, aber weniger Klarheit bei komplexem konzeptuellem Lernen. McDaniel & Donnelly (1996) zeigten, dass elaborative Befragung kombiniert mit analogem Schließen stärkere Enkodierung produziert als jede Strategie allein. Ozgungor & Guthrie (2004) fanden, dass die Wirksamkeit mit Vorwissen und Interesse interagiert — SuS mit relevantem Vorwissen profitieren am meisten.

## Input-Schema

Die Lehrperson (LP) muss bereitstellen:
- **Thema:** Das Konzept oder der Inhalt, den SuS lernen. *z.B. „Eigenschaften von Metallen und Nichtmetallen" / „Ursachen des Ersten Weltkriegs" / „Aufbau eines Sonnets"*
- **SuS-Niveau:** Klassenstufe und Vorwissen. *z.B. „8. Klasse Chemie Sek 1, mittleres Niveau, haben Atombau behandelt"*
- **Fragenzahl:** Anzahl der benötigten Fragen. *z.B. 6*

Optional (injiziert durch Kontext-Engine wenn verfügbar):
- **Inhaltstext:** Der spezifische Text oder die Ressource, mit der SuS arbeiten
- **Vorwissen:** Welches relevante Vorwissen SuS haben (verbessert Fragen-Kalibrierung)
- **SuS-Profile:** Sprachniveaus und individuelle Vorwissensprofile
- **Lernziele:** Spezifische Ziele, die die Fragen unterstützen sollen

## Prompt

```
Du bist ein Experte in kognitiver Psychologie der Enkodierung und des Gedächtnisses, spezialisiert auf elaborative Verarbeitung. Du kennst die Forschung von Pressley et al. (1992) zu elaborativer Befragung, Woloshyn et al. (1994) zu Elaboration und Vorwissen sowie McDaniel & Donnelly (1996) zu Elaboration und Analogie.

Deine Aufgabe: Generiere {{fragenzahl}} elaborative Befragungsfragen für SuS, die „{{thema}}" auf {{sus_niveau}}-Niveau lernen.

Der folgende optionale Kontext kann bereitgestellt werden. Nutze, was verfügbar ist; ignoriere fehlende Felder.

**Spezifischer Inhalt:** {{inhaltstext}} — wenn angegeben, generiere Fragen zu Kernaussagen und Beziehungen in diesem Text. Falls nicht, nutze allgemeines Fachwissen zum Thema.
**Vorwissen der SuS:** {{vorwissen}} — wenn angegeben, kalibriere Fragen so, dass neues Lernen mit bestehendem Wissen verbunden wird. Falls nicht, nimm Standardvorwissen für Klassenstufe und Fach an.
**Lernziele:** {{lernziele}} — wenn angegeben, fokussiere auf wichtigste Ziele. Falls nicht, ziele auf Kernbeziehungen und Mechanismen.
**SuS-Profile:** {{sus_profile}} — wenn angegeben, passe Sprachkomplexität an. Falls nicht, gestalte für gemischte Leistungsgruppe.

Wende diese Prinzipien an:

1. **„Warum?" ist der Kernfragentyp.** Der Hauptmechanismus ist das Generieren von Erklärungen für Warum-Fragen. Jede Frage sollte mit oder reduzierbar auf „Warum?" sein. „Was?" und „Wie?" sind sekundär, aber nur wenn sie Erklärung erzwingen.

2. **Ziele auf kausale Beziehungen, nicht isolierte Fakten.** Elaborative Fragen sollten Beziehungen, Ursachen/Wirkungen und Mechanismen anvisieren — nicht Definitionen. „Warum leiten Metalle Strom?" erzwingt Elaboration. „Was ist ein Metall?" erzwingt nur Abruf.

3. **Kalibriere zum Vorwissen (Woloshyn et al., 1994).** Fragen funktionieren nur, wenn SuS genug Vorwissen haben, um plausible Erklärungen zu generieren. Ohne Unterricht erst ist Elaboration unmöglich.

4. **Füge Verbindungsfragen ein (McDaniel & Donnelly, 1996).** Einige Fragen sollten neues Wissen zu ähnlichen, bereits gelernten Konzepten verbinden. „Wie ähnelt das...?"

5. **Variiere Fragetypen:**
   - **Kausal Warum:** „Warum passiert X?"
   - **Kontrastiv Warum:** „Warum X aber nicht Y?"
   - **Mechanistisch Wie:** „Wie führt X zu Y?"
   - **Verbindung:** „Wie ähnelt X Y, das du in [Thema] gelernt hast?"
   - **Prädiktiv:** „Basierend auf X, was würdest du über Z vorhersagen? Warum?"

6. **Vermeide getarnte Abruffragen.** Eine Frage mit einer einzigen korrekten Antwort ist eine Abruffrage, nicht elaborativ. Elaborative Fragen sollten mehrere plausible Erklärungen zulassen.

Gib deine Antwort in diesem Format aus:

## Elaborative Befragungsfragen: [Thema]

**Für:** [SuS-Niveau]
**Vorausgesetztes Vorwissen:** [Was SuS wissen müssen, damit die Fragen funktionieren]

### Fragen

Für jede Frage:
- Fragetext
- **Typ:** [Kausal / Kontrastiv / Mechanistisch / Verbindung / Prädiktiv]
- **Zielt auf:** [Wissen oder Beziehung, die diese Frage vertieft]
- **Aktiviertes Vorwissen:** [Welches bestehende Wissen SuS nutzen]

### Verbindungsfragen

2–3 Fragen, die dieses Thema zu früher Gelerntem verbinden.

### Umsetzungsleitfaden

- Wann einsetzen (während Unterricht, nach Instruktion, als Hausaufgabe)
- Wie strukturieren (individuell schriftlich → Paararbeit → Klassenplenum)
- Zeit erforderlich
- Was tun, wenn SuS nicht elaborieren können

**Selbstkontrolle vor Antwort:** Verifiziere, dass (a) jede Frage Erklärung erzwingt, (b) Fragen zum Vorwissen passen, (c) keine Frage eine Wort-Antwort hat, (d) Fragen Beziehungen und Mechanismen ansprechen.
```

## Beispiel-Output

**Szenario:** *Thema: „Anpassungen von Wüstentieren" / SuS-Niveau: „8. Klasse Biologie Sek 1, kennen Zellstruktur und Ökosysteme" / Fragenzahl: 6*

---

## Elaborative Befragungsfragen: Anpassungen von Wüstentieren

**Für:** 8. Klasse Biologie Sek 1
**Vorausgesetztes Vorwissen:** SuS verstehen, dass Zellen Wasser benötigen, kennen Lebensraum-Konzepte, verstehen, dass Organismen ihre Umgebung beeinflusst, kennen Nahrungsketten-Idee. Evolution/Selektion noch nicht detailliert behandelt.

### Fragen

**1.** Das Fuchsohr hat riesige Ohren für seine Körpergröße, das Polarfuchs hat sehr kleine Ohren. Warum könnte Ohrengröße mit Überleben in heißer Wüste versus kalter Tundra verbunden sein?

- **Typ:** Kontrastiv Warum
- **Zielt auf:** Oberflächen-zu-Volumen-Verhältnis und Temperaturregulation; Verbindung zwischen Körpermerkmalen und Umgebungsdruck
- **Aktiviertes Vorwissen:** SuS wissen, dass heiße und kalte Umgebungen existieren; können logisch schließen, dass große Ohren = mehr Hautoberfläche = mehr Wärmeverlust

**2.** Viele Wüstentiere sind nachtaktiv — aktiv nachts, schlafen tagsüber. Warum würde Nachtaktivität einem Tier helfen, in der Wüste zu überleben, auch wenn Futtersuche nachts schwerer ist?

- **Typ:** Kausal Warum
- **Zielt auf:** Verhaltensanpassung als Energie-/Wasserspar-Strategie; Trade-off-Denken
- **Aktiviertes Vorwissen:** SuS wissen, dass Wüsten tagsüber heiß sind; verstehen, dass Tiere Wasser und Energie brauchen

**3.** Kamele können wochenlang ohne Wasser überleben, aber nicht so lange ohne Futter. Warum ist Wasser eine größere Überlebensherausforderung als Futter in der Wüste? Denke an Zellen.

- **Typ:** Mechanistisch Wie (warum Wasser > Futter)
- **Zielt auf:** Zellbiologie (Zellen brauchen Wasser für Reaktionen, Transport, Struktur) mit Organismus-Anpassung verbinden
- **Aktiviertes Vorwissen:** Zellstruktur — SuS lernten, dass Zellen mostly aus Wasser sind; chemische Reaktionen in Zellen benötigen Wasser

**4.** Das Stachelteufelleid hat stachelige Haut mit winzigen Rillen, die Regenwasser zum Mund leiten. Wenn du eine Lösung zur Wassersammlung in trockener Umgebung designen würdest, welche Prinzipien würdest du nutzen? Warum funktioniert die Lösung des Teufels so gut?

- **Typ:** Prädiktiv + Mechanistisch Wie
- **Zielt auf:** Struktur-Funktions-Beziehung; physische Merkmale lösen Umweltprobleme durch passive Mechanismen
- **Aktiviertes Vorwissen:** Allgemeines Wasser-Wissen der SuS

**5.** Wüstenpflanzen wie Kakteen speichern Wasser in dicken Stämmen, aber die meisten Pflanzen in der Schweiz haben dünne Stämme. Warum brauchen Schweizer Pflanzen nicht, Wasser zu speichern? Warum wäre ein dicker, fleischiger Stamm für eine Schweizer Pflanze eigentlich ein Nachteil?

- **Typ:** Kontrastiv Warum
- **Zielt auf:** Anpassung als umgebungsspezifisch — Merkmale, die in einer Umgebung vorteilhaft sind, können in anderer nachteilig sein
- **Aktiviertes Vorwissen:** Schweizer Klima (häufig Regen); alltägliche Erfahrung mit lokalen Pflanzen

**6.** Känguruhraten in der Wüste trinken nie Wasser — sie bekommen alles aus trockenen Samen, die sie essen. Wie ist es möglich, aus einem trockenen Samen Wasser zu bekommen? Denke an Verdauung und chemische Reaktionen.

- **Typ:** Mechanistisch Wie
- **Zielt auf:** Metabolische Wasserproduktion; chemische Reaktionen (Verdauung) mit biologischem Prozess verbinden; Anpassung als metabolisch, nicht nur verhaltensmäßig
- **Aktiviertes Vorwissen:** Basale chemische Reaktionen und Verdauungswissen; möglicherweise dass Atmung Wasser produziert

### Verbindungsfragen

**V1.** Im Ökosystem-Thema habt ihr gelernt, dass Nahrungsketten Energiefluss zeigen. Wüsten-Nahrungsketten sind kürzer als Regenwald-Nahrungsketten. Warum gibt es weniger „Glieder" in einer Wüstennahrungskette? Wie verbindet sich das mit Energie und Ressourcenmangel?

**V2.** Als wir Zellen behandelten, lernten wir, dass Wasser durch Osmose über Zellmembranen bewegt. Ein Wüstentier, das zu viel Wasser verliert, hat ein ernsthaftes Problem auf Zellebene. Nutze dein Osmose-Wissen, um zu erklären, was mit Zellen eines stark dehydrierten Tieres passiert. Warum ist Wassersparen buchstäblich überlebenswichtig?

### Umsetzungsleitfaden

- **Wann einsetzen:** Nach Initialunterricht zu Wüsttenanpassungen (nicht davor — SuS brauchen neuen Inhalt zum Elaborieren). Ideal als 15-minütige Aktivität in der zweiten Hälfte einer Lektion oder als strukturierte Hausaufgabe.
- **Struktur:** Individuelle schriftliche Antwort zuerst (5 Minuten pro Frage — teile je 3 Fragen aus, nicht alle 6). Dann Paararbeit: Vergleiche Antworten. Abschluss mit Klassengespräch zu einer Frage, fokussiere auf Range plausibeler Erklärungen.
- **Zeit:** 15–20 Minuten für 3 Fragen (individuell + Paararbeit). Nicht beeilen — das Lernen geschieht beim Generieren von Erklärungen.
- **Wenn SuS nicht elaborieren können:** Das signalisiert unzureichend Vorwissen. Für Frage 3 brauchen SuS möglicherweise Auffrischung zu Zellstruktur. Für Frage 6 ist das eine Herausforderung — wenn SuS nicht antworten können, nutze es als geleitete Diskussion statt individuelles Schreiben. Gib die Antwort nicht sofort — der Kampf um Erklärung ist wo Lernen passiert.
- **Wichtig:** Akzeptiere mehrere plausible Erklärungen. Das sind elaborative Fragen, keine Quiz-Fragen mit einer richtigen Antwort.

---

## Bekannte Grenzen

1. **Elaborative Befragung benötigt ausreichend Vorwissen.** Wenn SuS keine relevanten Vorkenntnis haben (z.B. 7. Klasse ohne Wissenschafts-Hintergrund bei metabolischem Wasser), können sie nicht elaborieren und Fragen werden frustrierend. LPs müssen verifizieren, dass angenommenes Vorwissen dem tatsächlichen entspricht.

2. **Die Evidenzbasis ist stärker für Fakten-/Konzept-Lernen, nicht Prozeduren.** Pressley et al. (1992) und die meisten Studien nutzten faktisches Material. Übertrag zu mathematischen Prozeduren oder kreativem Denken ist weniger klar.

3. **Elaborative Befragung ist effektiver als Relesen aber weniger effektiv als Abruftraining.** Dunlosky et al. (2013) bewertete es als „moderate Nützlichkeit" statt „hohe Nützlichkeit." Nutze es während Enkodierung, wechsle dann zu Abruftraining für Konsolidierung.
