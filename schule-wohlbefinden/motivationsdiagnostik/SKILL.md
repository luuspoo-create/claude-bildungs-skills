---
# AGENT SKILLS STANDARD FIELDS (v2)
name: motivationsdiagnostik
description: "Diagnostiziere Motivationsprobleme einer Aufgabe mit Selbstbestimmungstheorie und entwirf um für Autonomie, Kompetenz und Zugehörigkeit. Verwende diesen Skill, wenn SuS desengagiert, widerstrebend oder automatisch sind."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-wohlbefinden/motivationsdiagnostik"
skill_name: "Motivations-Diagnostik & Task-Redesign"
domain: "schule-wohlbefinden"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Deci & Ryan (1985, 2000) — Self-Determination Theory: autonomy, competence, relatedness"
  - "Ryan & Deci (2017) — Self-Determination Theory: basic psychological needs in development, wellness, and behaviour"
  - "Reeve (2009) — Why teachers adopt a controlling motivating style toward students and how they can become more autonomy supportive"
  - "Jang, Reeve & Deci (2010) — Engaging students in learning activities: it is not autonomy support or structure but autonomy support AND structure"
  - "Niemiec & Ryan (2009) — Autonomy, competence, and relatedness in the classroom"
input_schema:
  required:
    - field: "task_description"
      type: "string"
      description: "Die Lernaufgabe wie derzeit entworfen — was SuS aufgefordert werden zu tun"
    - field: "learning_objective"
      type: "string"
      description: "Was SuS lernen sollen oder können sollen"
    - field: "student_level"
      type: "string"
      description: "Alter / Klassenstufe"
  optional:
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "motivation_concern"
      type: "string"
      description: "Das spezifisch Motivationsproblem die Lehrperson beobachtet hat"
    - field: "student_profiles"
      type: "array"
      description: "Aus Context Engine: Klassendaten mit Engagement-Muster, Interessen, frühere Erreichung"
    - field: "classroom_constraints"
      type: "string"
      description: "Praktische Beschränkungen — Zeit, Ressourcen, Lehrplan-Anforderungen"
output_schema:
  type: "object"
  fields:
    - field: "sdt_diagnostic"
      type: "object"
      description: "Analyse der Aufgabe gegen SDTs drei Basis-Bedürfnisse: Autonomie, Kompetenz, Zugehörigkeit"
    - field: "motivation_profile"
      type: "string"
      description: "Klassifizierung von aktuelle Motivation-Typ — Amotivation, extern, introjiziert, identifiziert, integriert, intrinsisch"
    - field: "redesigned_task"
      type: "object"
      description: "Modifiziert Version der Aufgabe mit spezifisch Änderungen zum Verbessern von Autonomie, Kompetenz und Zugehörigkeit"
    - field: "implementation_notes"
      type: "string"
      description: "Wie die umgestaltete Aufgabe zu einführen und was zu beobachten"
chains_well_with:
  - "selbstwirksamkeit-aufbau"
  - "handlungsfaehigkeit-geruest"
  - "flow-state-condition-designer"
  - "differentiation-adapter"
teacher_time: "3 minutes"
tags: ["motivation", "SDT", "selbstbestimmung", "autonomie", "engagement", "aufgaben-design", "Lehrplan 21"]
---

# Motivations-Diagnostik & Task-Redesign

## Was dieser Skill tut

Analysiert eine Lernaufgabe durch das Objektiv von Selbstbestimmungstheorie — dem robustesten Motivations-Rahmen in Bildungs-Forschung — und diagnostiziert, welche der drei Basis-psychologischen Bedürfnisse (Autonomie, Kompetenz, Zugehörigkeit) die Aufgabe unterstützt oder untergräbt, und entwirf dann die Aufgabe mit spezifischen Modifikationen um um intrinsisch Motivation zu verbessern ohne Akademische Strenge zu reduzieren. Das kritische Prinzip ist, dass Motivation nicht ein SuS-Merkmal ist („faul," „desengagiert"), sondern eine Antwort auf Umgebungs-Bedingungen — wenn eine Aufgabe Autonomie, Kompetenz und Zugehörigkeit Bedürfnisse erfüllt, sind die meisten SuS motiviert; wenn sie diese Bedürfnisse frustrieren, sind die meisten SuS desengagiert. Der Output umfasst eine Diagnostik zeigend genau, wo die Aufgabe motivational zu kurz kommt, eine umgestaltete Version mit spezifischen Änderungen kartiert zu SDT-Prinzipien, und Implementierungs-Notizen. KI ist wertvoll, weil das Diagnostizieren von Motivation durch das SDT-Objektiv die gleichzeitig Analyse von Aufgaben-Struktur braucht (bietet es Wahl?), Schwierigkeits-Kalibrierung (fühlt es erreichbar?) und sozialer Kontext (verbindet es SuS untereinander und zu etwas Bedeutungsvollem?) — eine drei-dimensionale Analyse, dass die meisten Lehrpersonen Intuitiv fühlen, aber selten systematisch anwenden.

## Evidence Foundation

Deci & Ryan (1985, 2000) etablierten Selbstbestimmungstheorie (SDT), identifizierend drei Basis-psychologische Bedürfnisse, die erfüllt sein müssen für intrinsisch Motivation: Autonomie (das Bedürfnis sich selbst-gewählt zu fühlen — dass die eigenen Handlungen selbst-geherzt sind, nicht extern kontrolliert), Kompetenz (das Bedürfnis sich wirksam zu fühlen — dass man an optimal herausfordernd Aufgaben erfolgreich sein kann) und Zugehörigkeit (das Bedürfnis sich verbunden zu fühlen — dazugehören, für andere zählen). Wenn diese Bedürfnisse erfüllt sind, bewegen SuS sich zu intrinsisch Motivation; wenn sie frustiert sind, bewegen SuS sich zu kontrolliert Motivation (tun, weil sie müssen) oder Amotivation (nicht tun überhaupt). Ryan & Deci (2017) elaborierten das Motivations-Kontinuum von Amotivation durch extern Regulation (Belohnungen/Bestrafungen), introjiziert Regulation (innerer Druck — „Ich sollte"), identifiziert Regulation (persönlich Wert — „das zählt für mich"), integriert Regulation (ausgerichtet mit Identität), zu intrinsisch Motivation (wird für sich selbst interessant). Entscheidend, extrinsisch Belohnungen können intrinsisch Motivation für Aufgaben unterminer, die bereits intrinsisch interessant sind — der „Overjustification-Effekt" (Deci, Koestner & Ryan 1999). Reeve (2009) zeigte, dass Lehrpersonen zu kontrollierend Motivierungs-Stile neigen (Fristen, Überwachung, Direktiven), weil diese sofort Compliance produzieren, aber Autonomie-unterstützend Unterricht produziert tieferer Engagement und besseres Lernen über Zeit. Jang, Reeve & Deci (2010) zeigten, dass Autonomie-Unterstützung und Struktur nicht Gegensätze sind — SuS brauchen BEIDES. Autonomie ohne Struktur ist Chaos; Struktur ohne Autonomie ist Kontrolle. Das optimal Klassenzimmer bietet klare Erwartungen UND bedeutungsvolle Wahl innerhalb solche Erwartungen. Niemiec & Ryan (2009) wendeten SDT auf Klassenzimmer-Kontexte an, zeigend, dass Autonomie-unterstützend Unterricht mehr konzeptuell Verständnis, bessere Akademische Leistung, höher Durchhaltevermögen und größer psychologisch Wohlwollen vorhersagt.

## Input Schema

Die Lehrperson muss angeben:
- **Aufgaben-Beschreibung:** Die Aufgabe wie derzeit entworfen. *z.B. „SuS kopieren Definitionen von 10 Schlüssel-Begriffen aus dem Lehrbuch, dann beantworten 5 Verständnis-Fragen" / „Schreibe einen 500-Worte-Essay über Ursachen der Französischen Revolution" / „Beendig Arbeitsblatt-Seiten 34–36 über Bruchrechnen"*
- **Lernziel:** Was SuS lernen sollen. *z.B. „Verstehe Schlüssel-Terminologie für das Thema" / „Analysiere Ursachen der Französischen Revolution" / „Addiere und subtrahiere Brüche mit ungleichen Nennern"*
- **SuS-Niveau:** Klassenstufe. *z.B. „8. Klasse"*

Optional (durch Context Engine injiziert, falls verfügbar):
- **Schulfach:** Das Fach
- **Motivationsproblem:** Das spezifisch Problem, dass die Lehrperson beobachtet hat
- **SuS-Profile:** Klassendaten, Engagement-Muster, Interessen
- **Klassenzimmer-Beschränkungen:** Zeit, Ressourcen, Lehrplan-Anforderungen

## Prompt

```
Du bist Expert:in in Motivations-Wissenschaft und Selbstbestimmungstheorie mit tiefem Verständnis von Deci & Ryans (1985, 2000) Rahmen, Reeves (2009) Forschung auf Autonomie-unterstützend Unterricht, und Jang, Reeve & Decis (2010) Befund, dass Autonomie-Unterstützung und Struktur zusammen, nicht dagegen arbeiten. Du verstehst, dass Motivation nicht ein SuS-Merkmal ist, aber eine Antwort auf wie gut die Lern-Umgebung Autonomie, Kompetenz und Zugehörigkeit Bedürfnisse erfüllt.

WICHTIG: Die Verbessern von Motivation muss Akademische Strenge NICHT reduzieren. Die umgestaltete Aufgabe sollte MEHR engagierend SEIN UND gleich oder mehr fordernd. „Macht es lustig" auf Kosten des Lernens ist nicht SDT-ausgerichtet Motivation-Design — es ist Unterhaltung.

WICHTIG: Extrinsisch Belohnungen (Aufkleber, Punkte, Preise, ClassDojo) können intrinsisch Motivation für Aufgaben unterminer, die bereits intrinsisch interessant sind (Deci, Koestner & Ryan 1999). EMPFEHLE NICHT extrinsisch Belohnungs-Systeme. Das Ziel ist, die Aufgabe so umzugestalten, dass die Arbeit selbst motivierend ist.

Deine Aufgabe ist es, zu diagnostizieren und umzugestalten:

**Aufgaben-Beschreibung:** {{task_description}}
**Lernziel:** {{learning_objective}}
**SuS-Niveau:** {{student_level}}

Folgende optionale Informationen können vorliegen. Nutze das Verfügbare; ignoriere alle Felder mit „nicht vorgegeben."

**Schulfach:** {{subject_area}} — falls nicht vorgegeben, inferiere aus der Aufgabe.
**Motivationsproblem:** {{motivation_concern}} — falls nicht vorgegeben, analysiere die Aufgabe für wahrscheinlich Motivations-Probleme basierend auf Aufgaben-Design-Merkmale.
**SuS-Profile:** {{student_profiles}} — falls nicht vorgegeben, entwirf für ein typisch mixed-ability Klassenzimmer.
**Klassenzimmer-Beschränkungen:** {{classroom_constraints}} — falls nicht vorgegeben, nehme an Standard Klassenzimmer mit keinen spezial Ressourcen.

Wende diese evidenzbasierten Prinzipien an:

1. **Diagnostiziere Autonomie (Deci & Ryan 2000; Reeve 2009):**
   - Bietet die Aufgabe bedeutungsvolle Wahl? Nicht „wähle jedes Thema das du magst" (zu offen), aber strukturiert Wahl innerhalb des Lernziels.
   - Bietet die Aufgabe einen Grund — verstehen SuS, WARUM sie das tun?
   - Nutzt die Aufgabe kontrollierend Sprache („du musst," „du hast zu") oder Autonomie-unterstützend Sprache („du kanntest erwägen," „eine Annäherung ist")?
   - Ist die Aufgabe etwas, das GETAN WIRD ZU SuS (Compliance), oder etwas, das SuS TUN (Handlungsfähigkeit)?

2. **Diagnostiziere Kompetenz (Deci & Ryan 2000; Jang et al. 2010):**
   - Ist die Aufgabe auf das rechte Level — nicht so leicht, dass es langweilig ist, nicht so schwer, dass es überfordert?
   - Bietet die Aufgabe Rückmeldung, dass SuS fühlen wirksam lässt, oder nur Rückmeldung, die bewertet?
   - Ist es ein klarer Weg zu Erfolg, oder ist die Aufgabe mehrdeutig über was „gut" aussieht?
   - Baut die Aufgabe auf, was SuS bereits wissen (verbindend zu frühr Erfolg)?

3. **Diagnostiziere Zugehörigkeit (Deci & Ryan 2000; Niemiec & Ryan 2009):**
   - Verbindet die Aufgabe SuS untereinander (Zusammenarbeit, Diskussion, Peer Rückmeldung)?
   - Verbindet die Aufgabe mit etwas, das SuS interessiert (ihr Leben, ihre Gemeinschaft, reale-Welt Probleme)?
   - Verbindet die Aufgabe mit einer bedeutungsvollen Zielgruppe (jemand, der sich um das Resultat interessiert)?
   - Wird die Lehrperson-SuS-Beziehung unterstützt (Wärmte, Interesse in SuS-Perspektiven)?

4. **Klassifiziere den aktuell Motivationstyp (Ryan & Deci 2017):**
   - Amotivation: SuS sehen nicht den Punkt und engagieren nicht.
   - Extern: SuS gehorsam zu vermeid Bestrafung oder verdienen Belohnungen.
   - Introjiziert: SuS tun, weil sie fühlen „sollten" — innerer Druck ohne echten Wert.
   - Identifiziert: SuS sehen persönlich Wert in der Aufgabe.
   - Intrinsisch: SuS finden die Aufgabe inhärent interessant.

5. **Redesign mit Autonomie-Unterstützung UND Struktur (Jang et al. 2010):**
   - Autonomie Modifikationen: add strukturiert Wahl, biete Grund, nutze einladend Sprache, biete alternativ Wege zu gleichen Ziel.
   - Kompetenz Modifikationen: passe Schwierigkeits-Level, add Untergerüst, baue formativ Rückmeldung ein, mache Erfolgs-Kriterien transparent.
   - Zugehörigkeits-Modifikationen: add zusammenarbeitend Elemente, verbind zu SuS-Leben, schaffe bedeutungsvolle Zielgruppe, baue Peer-Interaktion ein.
   - Behalte oder erhöhe Strenge: die umgestaltete Aufgabe muss gleich oder tiefere Denken brauchen.

Gib dein Output in diesem exakten Format zurück:

## Motivations-Diagnostik: [Kurze Beschreibung]

**Aktuelle Aufgabe:** [Zusammenfassung]
**Lernziel:** [Ziel]
**Für:** [SuS-Niveau]

### SDT-Diagnostik

**Autonomie:**
- Aktuelles Level: [Niedrig / Moderat / Hoch]
- [Spezifisch Analyse von, was die Aufgabe tut oder nicht tut für Autonomie]

**Kompetenz:**
- Aktuelles Level: [Niedrig / Moderat / Hoch]
- [Spezifisch Analyse von, was die Aufgabe tut oder nicht tut für Kompetenz]

**Zugehörigkeit:**
- Aktuelles Level: [Niedrig / Moderat / Hoch]
- [Spezifisch Analyse von, was die Aufgabe tut oder nicht tut für Zugehörigkeit]

**Aktueller Motivationstyp:** [Klassifizierung auf das SDT-Kontinuum]

### Umgestaltete Aufgabe

[Komplette umgestaltete Version der Aufgabe mit all Modifikationen in Platz]

### Was Ändert und Warum

[Für jede Änderung: was wurde geändert, welches Bedürfnis es adressiert, und warum es Motivation verbessert ohne Strenge zu reduzieren]

### Was zu Beobachten ist

[Implementierungs-Notizen: wie man die umgestaltete Aufgabe einführt, welche SuS-Antworten zu erwarten, wie man passe an falls das Redesign nicht funktioniert wie beabsichtigt]

**Self-Check vor Output:** Verifiziere dass (a) die Diagnostik spezifisch Autonomie, Kompetenz und Zugehörigkeit adressiert, (b) die umgestaltete Aufgabe Akademische Strenge behält oder erhöht, (c) keinen extrinsisch Belohnungs-Systeme empfohlen sind, (d) das Redesign Autonomie-Unterstützung UND Struktur bietet, nicht ein ohne die ander, und (e) jede Änderung mit spezifisch SDT-Prinzip mit klar Grund verknüpft ist.
```

## Beispiel-Output

**Szenario:** *Aufgaben-Beschreibung: „SuS kopieren Definitionen von 10 Schlüssel-Begriffen aus dem Lehrbuch-Glossar in ihr Übungs-Heft, dann beantworten 5 Verständnis-Fragen am Ende des Kapitels." / Lernziel: „Verstehe Schlüssel-Terminologie für das neue Thema (Ökosysteme)" / SuS-Niveau: „8. Klasse" / Schulfach: „Naturwissenschaften" / Motivationsproblem: „SuS hasten durch das, kopieren ohne zu lesen, und können sich die Definitionen nächste Lektion nicht erinnern"*

---

## Motivations-Diagnostik: Ökosystem-Terminologie-Aufgabe

**Aktuelle Aufgabe:** Kopiere 10 Definitionen aus Lehrbuch, beantworte 5 Verständnis-Fragen
**Lernziel:** Verstehe Schlüssel-Terminologie für Ökosysteme
**Für:** 8. Klasse Naturwissenschaften

### SDT-Diagnostik

**Autonomie:**
- **Aktuelles Level:** **Niedrig**
- Die Aufgabe bietet Null Wahl — jede SuS kopiert die gleichen 10 Definitionen in gleicher Ordnung aus gleicher Seite. Es ist kein Grund vorgegeben, warum das Wissen von Begriffen zählt. Die Aufgabe ist völlig Lehrperson-gelenkt: „kopiere von hier, beantworte das." Die SuS ist ein passiv Empfänger, nicht aktiv Lerner:in. Die Aufgabe könnte durch eine SuS, die nicht überhaupt denkt, beendigt sein — nur Wörter von einer Seite zur andere transkribieren. Das ist Gehorsam, nicht Lernen.

**Kompetenz:**
- **Aktuelles Level:** **Niedrig-Moderat**
- Die Aufgabe ist erreichbar (jede:r kann kopieren), aber bietet keinen Sinn von bedeutungsvolle Erfolg. Es ist keine optimal Herausforderung — die Schwierigkeit ist in der Tediousness, nicht das Denken. Erfolg sieht aus wie „beendete Kopieren," nicht „verstand das Konzept." Die Verständnis-Fragen können etwas Herausforderung bieten, aber sie kommen nach einer Kopier-Aufgabe, die bereits Engagement verdrainiert hat. Es ist keine Rückmeldung während der Aufgabe — SuS wissen nicht, ob sie die Definitionen verstehen, bis die Lehrperson das Arbeit markiert (falls es markiert wird überhaupt).

**Zugehörigkeit:**
- **Aktuelles Level:** **Niedrig**
- Die Aufgabe ist völlig isoliert. SuS kopieren in Stille. Es ist keine Verbindung zu anderen SuS, keine Verbindung zu SuS-Leben oder Interessen, und keine Verbindung zu, warum Ökosysteme zählen. Die Begriffe sind abstrakt Etiketten, unverbunden zu jeden Kontext, dass SuS interessiert.

**Aktueller Motivationstyp:** **Extern Regulation** — SuS tun das, weil sie müssen (die Lehrperson zuweisen, es wird Konsequenzen für nicht-tun). Die Lehrperson-Beobachtung bestätigt: SuS hasten durch, kopieren ohne zu lesen, und können sich nicht erinnern die Definitionen. Das ist die verhaltende Unterschrift von extern Regulation — minimal Anstrengung zu erfüllen die Anforderung.

### Umgestaltete Aufgabe

**Ökosystem-Terminologie-Herausforderung**

**Schritt 1 — Treffe die Begriffe in Kontext (10 Minuten):**
Anstatt Definitionen kopieren, erhalten SuS eine kurze Fallstudie (eine Seite) über ein echtes Ökosystem unter Bedrohung — zum Beispiel, der Zusammenbruch der Yellowstone-Wolf-Population und seine kaskadiering Effekte. Die 10 Schlüssel-Begriffe sind in den Text eingebettet und hervorgehoben. SuS lesen die Fallstudie und, für jeden hervorgehoben Begriff, schreiben ihr OWN Definition basierend auf, wie das Wort in Kontext verwendet wird. Sie SCHAUEN nicht in das Lehrbuch-Glossar yet.

**Schritt 2 — Test und Verfeinern (10 Minuten):**
SuS vergleichen ihre Kontext-basiert Definitionen mit einer Partner:in. Wo ihre Definitionen unterscheid, diskutieren: welche Definition erfasst besser, was das Wort meint? Sie überprüfen dann beide Definitionen gegen das Lehrbuch-Glossar und verfeinern ihr eigne Formulierung. Für jedem Begriff schreiben sie: „Meine Definition: ___ / Lehrbuch-Definition: ___ / Meine verbessert Definition: ___"

**Schritt 3 — Wend an (10 Minuten):**
Jedes Paar wählt 3 von 10 Begriffe und schreibt eine kurze Erklärung (2–3 Sätze) von, wie diese 3 Begriffe miteinander in der Yellowstone-Fallstudie verbinden. Zum Beispiel: „Die Wölfe sind ein Raubtier im Ökosystem. Wenn sie entfernt wurden, die Wolf-Population (ein Konsument) erhöhte. Das verursachte Überweidung, das die Lebensraum für andere Artenarten veränderte."

**Schritt 4 — Teile und Herausforderung (5 Minuten):**
Zwei Paare treten zu bilden eine Gruppe von vier. Jedes Paar erklär ihr 3-Begriff-Verbindung. Das ander Paar fragt eine Frage: „Was würde passieren wenn [Begriff X] sich änderte?" Das braucht SuS zu NUTZEN die Terminologie zu begründen über das Ökosystem, nicht einfach Definitionen zurückrufen.

### Was Ändert und Warum

| Änderung | SDT-Bedürfnis | Grund |
|---|---|---|
| Echte Fallstudie anstatt Glossar-Kopieren | **Autonomie** (Grund) + **Zugehörigkeit** (Verbindung zu reale Welt) | SuS sehen, WARUM diese Begriffe zählen — sie beschreiben eine echte Ökosystem-Krise. Das bietet den Grund, dass die Original-Aufgabe lacked. Der Yellowstone-Fall ist inhärent interessant — Wölfe, ökologischer Zusammenbruch, unerwartete Konsequenzen. |
| SuS schreiben eigne Definitionen bevor Lehrbuch überprüfen | **Kompetenz** (Optimal Herausforderung) + **Autonomie** (Ownership) | Eine Definition von Kontext generieren ist kognitiv schwerer als eine kopieren — es braucht Verständnis, nicht Transkription. Das erhöht Strenge. Das gibt auch SuS Ownership: „meine Definition" ist bedeutungsvoller als „die Definition, die ich kopierte." |
| Partner-Vergleich und Verfeinerung | **Zugehörigkeit** (Verbindung zu Peers) + **Kompetenz** (Rückmeldung) | SuS bekommen sofort Rückmeldung durch Vergleichen mit einer Partner:in. Uneinigkeiten schaffen produktiv Diskussion. Die drei-Spalten-Format (meine / Lehrbuch / verbessert) macht den Verfeinerungs-Prozess sichtbar. |
| Wähle 3 Begriffe und erklär Verbindungen | **Autonomie** (Wahl) + **Kompetenz** (Tieferer Herausforderung) | SuS wählen, welche Begriffe fokussieren — strukturiert Wahl innerhalb gleichen Ziel. Erklär Verbindungen ist höhere-Ordnung Denken als einzelne Begriffe definieren — das erhöht Strenge. |
| Paar-zu-Gruppe Teilen mit „was wenn"-Frage | **Zugehörigkeit** (Zusammenarbeit) + **Kompetenz** (Anwendung) | Die „was wenn"-Frage braucht SuS zu NUTZEN Terminologie zu BEGRÜNDEN über Ökosysteme, nicht einfach Definitionen zurückrufen. Das ist das Ziel — Verständnis Terminologie — erreicht durch Anwendung anstatt Memorisierung. |

**Strenge-Vergleich:** Die Original-Aufgabe braucht Kopieren (Null kognitiv Anforderung) und Verständnis-Fragen beantworte (Niedrig-Moderat Anforderung). Die umgestaltete Aufgabe braucht Definitionen von Kontext generieren (Moderat Anforderung), evaluieren und verfeinern Definitionen (Moderat-Hoch Anforderung) und erklären Verbindungen zwischen Begriffen (Hoch Anforderung). Die umgestaltete Aufgabe ist bedeutungsvolle STRENGER, während MEHR motivierend.

### Was zu Beobachten ist

1. **Manche SuS werden versuchen Schritt 1 zu überspringen und gerade zum Glossar zu gehen.** Das ist eine Gewöhnung von Aufgaben, die Kopieren über Denken belohnen. Leite um: „Mach dir keine Sorgen darüber, die ‚Richtige' Definition zu bekommen — ich will sehen, was du denkst, das Wort bedeutet, vom Lesen der Fallstudie. Du wirst das Glossar in Schritt 2 überprüfen."

2. **Der Partner-Vergleich in Schritt 2 könnte zeigen, dass manche SuS kann nicht-Definitionen generieren überhaupt.** Das ist nicht ein Motivations-Problem — das ist ein Verständnis-Problem. Falls eine SuS nicht Bedeutung vom Kontext inferieren kann, das Lese-Level der Fallstudie möchte Anpassung brauchen, oder die SuS möchte Pre-Teaching von den am-meisten-unbekannt Begriffen.

3. **Schritt 3 (erklär Verbindungen) ist, wo das echte Lernen passiert.** Falls SuS Verbindungen produzieren wie „diese sind alle über Ökosysteme" (wahr, aber trivial), push für Spezifität: „Ja, aber WIE verbinden sie? Was passiert zum Konsumenten, wenn der Raubtier verschwindet?"

4. **Nicht add Aufkleber, Punkte oder Wettbewerb.** Die Aufgabe wird entworfen, um intrinsisch motivierend zu sein durch bedeutungsvolle Herausforderung, soziale Verbindung und Kontext aus der realen Welt. Das Hinzufügen extrinsisch Belohnungen würde SuS zu extern Regulation — genau wo die Original-Aufgabe bereits saß. Falls SuS im Fallstudie und Diskussion engagiert sind, funktioniert die Motivation. Falls sie nicht, das Problem ist wahrscheinlicher Aufgaben-Schwierigkeit oder die spezifisch Fallstudie, nicht ein Bedarf für Belohnungen.

---

## Bekannte Limitierungen

1. **Die Diagnostik geht davon aus, die Lehrperson-Beschreibung ist genau.** Eine Aufgabe beschrieben als „SuS kopieren Definitionen" könnte in Praktik Lehrperson-Erklärung, Diskussion und Elaboration involvieren, dass die Beschreibung nicht erfasst. Die Analyse wird basierend auf die Aufgabe WIE BESCHRIEBEN — die Lehrperson sollte evaluieren, ob das Redesign Probleme adressiert, dass tatsächlich in ihrem Klassenzimmer existieren, nicht einfach Probleme in der Beschreibung.

2. **SDT ist ein Rahmen für Verständnis Motivation, nicht ein Garantie von Engagement.** Eine Aufgabe, dass erfüllt Autonomie, Kompetenz und Zugehörigkeit Bedürfnisse schafft die BEDINGUNGEN für intrinsisch Motivation — aber einzelne SuS könnte immer noch desengagiert sein wegen Faktoren außerhalb der Aufgabe: Müdigkeit, soziale Schwierigkeiten, Trauma, früher negativ Erfahrungen mit das Fach. SDT adressiert die Umgebungs-Bedingungen; das adressiert nicht alle einzelne Barrieren.

3. **Umgestaltete Aufgaben typisch brauchen mehr Zeit als das Original.** Eine 10-Minuten-Kopier-Aufgabe ersetzt durch eine 35-Minuten-Untersuchung möchte unpraktisch scheinen. Der Kompromiss ist Lernen: falls SuS kopieren Definitionen und vergessen sie der nächste Lektion, die 10 Minuten waren verschwendet. Falls SuS 35 Minuten verbringen generierend, diskutierend und anwendend Definitionen und sie erinnern, die Zeit ist besser investiert. Die Lehrperson muss evaluieren, ob die Zeit-Kompromiss praktisch ist innerhalb ihr Lehrplan.
