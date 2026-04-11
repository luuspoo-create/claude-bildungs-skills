---
# AGENT SKILLS STANDARD FIELDS (v2)
name: metakognitive-prompts
description: "Baue eine Bibliothek metakognitiver Prompts, die Planung, Monitoring, oder Evaluation für eine spezifische Aufgabe targetieren. Nutze den Skill bei Entwicklung von SuS-Denken-über-Denken während unabhängiger Arbeit."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-selbstregulation/metakognitive-prompts"
skill_name: "Metakognitive Prompts-Bibliothek"
domain: "schule-selbstregulation"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Flavell (1979) — Metacognition and cognitive monitoring: a new area of cognitive-developmental inquiry"
  - "Veenman et al. (2006) — Metacognition and learning: conceptual and methodological considerations"
  - "Hattie (2009) — Visible Learning: metacognitive strategies effect size ~0.69"
  - "Schraw (1998) — Promoting general metacognitive awareness"
  - "Tanner (2012) — Promoting student metacognition in the sciences"
input_schema:
  required:
    - field: "task_description"
      type: "string"
      description: "Die spezifische Lernaufgabe, die SuS durchführen"
    - field: "student_level"
      type: "string"
      description: "Alter/Klassenstufe und metakognitives Entwicklungsniveau"
    - field: "metacognitive_focus"
      type: "string"
      description: "Welche metakognitive Fähigkeit targetieren: Monitoring, Evaluieren, Planung, oder Debugging"
  optional:
    - field: "subject_area"
      type: "string"
      description: "Fachkontext für fach-spezifische metakognitive Prompts"
    - field: "student_profiles"
      type: "array"
      description: "Aus Context Engine: individuelle metakognitive Profile, häufige Stuck-Punkte"
    - field: "task_phase"
      type: "string"
      description: "Wann Prompts genutzt: vor, während, oder nach der Aufgabe"
output_schema:
  type: "object"
  fields:
    - field: "prompts"
      type: "array"
      description: "Geordnete Menge metakognitiver Prompts mit Typ-Labels und Nutzungs-Timing"
    - field: "teacher_script"
      type: "string"
      description: "Wie man metakognitive Prompts einführt und modelliert"
    - field: "student_card"
      type: "string"
      description: "Kopierbares Prompt-Card für SuS-Nutzung"
chains_well_with:
  - "self-regulation-scaffold-generator"
  - "lernstrategien-auswahl"
  - "fehleranalyse-protokoll"
  - "elaborative-interrogation-generator"
teacher_time: "3 minutes"
tags: ["metakognition", "monitoring", "denken-über-denken", "selbstregulation", "verständnis"]
---

# Metakognitive Prompts-Bibliothek

## Was dieser Skill leistet

Generiert einen kalibrierten Satz metakognitiver Prompts für eine spezifische Lernaufgabe — Prompts, die SuS helfen, ihr eigenes Verständnis zu monitoring, Strategie-Effektivität zu evaluieren, Fehler zu erkennen und ihren Ansatz anzupassen. Im Gegensatz zu generischen "denk über dein Denken"-Instruktionen sind diese Prompts aufgaben-spezifisch und zielgerichtet auf eine benannte metakognitive Fähigkeit (Monitoring, Evaluieren, Planung, oder Debugging). KI ist besonders wertvoll hier, weil effektive metakognitive Prompts in einer genauen Zone sitzen müssen: konkret genug, dass SuS wissen, was zu tun ist, aber offen genug, dass sie tatsächlich reflektieren statt einfach zu gehorchen. Die meisten von LP generierten Reflexions-Prompts sind entweder zu vage ("Wie lief es?") oder zu direktiv ("Nutzte du einen Topic Sentence?"), verfehlend die metakognitive Ebene völlig.

## Evidenzgrundlage

Flavell (1979) definierte Metakognition als "Wissen und Kognition über kognitive Phänomene" — Denken über Denken. Er unterschied metakognitives Wissen (was du über deine eigene Kognition weisst) von metakognitiver Regulation (wie du sie kontrollierst). Veenman et al. (2006) zeigten, dass metakognitive Geschicklichkeit ein stärkerer Prädiktor von Lernergebnissen als Intelligenz ist, mit etwa 17% Varianzverrechnung in akademischer Leistung sogar nach IQ-Kontrolle. Hattie (2009) fand, dass metakognitive Strategien eine Effektgrösse von etwa 0.69 produzieren. Schraw (1998) identifizierte, dass metakognitive Bewusstsein durch strukturierte Prompting explizit gelehrt werden kann — SuS, die regelmässig metakognitive Prompts nutzen, entwickeln über Zeit stärkere Monitoring-Fähigkeiten. Tanner (2012) anwendet metakognitive Forschung spezifisch auf Naturwissenschaft-Bildung, zeigend, dass fach-spezifische metakognitive Prompts (z.B. "Welcher Beweis würde meine Schlussfolgerung verändern?") wirksamer als generische sind. Die Evidenz ist klar: Metakognition ist lehrbar, übertragbar und unter den höchsten-Leverage-Interventionen verfügbar.

## Input-Schema

Die Lehrperson muss bereitstellen:
- **Aufgabenbeschreibung:** Die spezifische Aufgabe, die SuS durchführen. *z.B. "Mehrstufige Wort-Probleme in Mathematik lösen" / "Nah-Lesung und Annotation eines Gedichts" / "Eine praktische Untersuchung in Chemie durchführen"*
- **SuS-Niveau:** Klassenstufe und metakognitive Entwicklung. *z.B. "8. Klasse, begrenzte metakognitive Vokabel" / "11. Klasse, vertraut mit metakognitive Strategien"*
- **Metakognitive Fokus:** Welche Fähigkeit targetieren. *z.B. "Monitoring — SuS denken oft, sie verstehen, aber können das Konzept nicht anwenden" / "Debugging — SuS machen Fehler aber können nicht sagen, wo"*

Optional (von Context Engine, falls vorhanden):
- **Fachgebiet:** Für fach-spezifische Prompt-Kalibrierung
- **SuS-Profile:** Individuelle metakognitive Profile, häufige Stuck-Punkte
- **Aufgasen-Phase:** Wann die Prompts genutzt (vor, während, oder nach der Aufgabe)

## Prompt

```
Du bist ein Experte in Metakognitions-Forschung, spezialisiert auf Flavells (1979) Framework, Veenman et al.s (2006) Arbeit zu metakognitiver Geschicklichkeit und der praktischen Anwendung metakognitiver Prompting in Klassenzimmern (Tanner, 2012; Schraw, 1998).

Deine Aufgabe ist es, einen Satz metakognitiver Prompts für das Folgende zu generieren:

**Aufgabe:** {{task_description}}
**SuS-Niveau:** {{student_level}}
**Metakognitive Fokus:** {{metacognitive_focus}}

Das folgende optionale Kontext kann oder kann nicht bereitgestellt sein. Nutze alles Verfügbare; ignoriere Felder, die "nicht bereitgestellt" sind.

**Fachgebiet:** {{subject_area}} — falls nicht vorhanden, leite aus Aufgabenbeschreibung ab und generiere fach-passende Prompts.
**SuS-Profile:** {{student_profiles}} — falls nicht vorhanden, entwerfe für typische Klasse auf angegebenem metakognitive Entwicklungsniveau.
**Aufgaben-Phase:** {{task_phase}} — falls nicht vorhanden, generiere Prompts für alle drei Phasen (vor, während, nach), gewichtet zu der Phase, die am meisten zum metakognitiven Fokus relevant ist.

Wende diese evidence-basierten Prinzipien an:

1. **Unterscheide metakognitive Typen (Flavell, 1979; Schraw, 1998):**
   - **Monitoring-Prompts:** Helfen SuS, ihr aktuelles Verständnis in Echtzeit zu bewerten. "Verstehe ich das wirklich, oder fühlt es sich einfach vertraut an?" Diese targetieren die Illusion des Kennens — die Lücke zwischen sich verstanden fühlen und erklären-oder-anwenden können.
   - **Evaluierungs-Prompts:** Helfen SuS, die Qualität ihrer Arbeit oder Strategie gegen Kriterien zu beurteilen. "Ist meine Antwort vernünftig? Wie würde ich überprüfen?"
   - **Planungs-Prompts:** Helfen SuS, Strategien vor Start auszuwählen und zu ordnen. "Welcher Ansatz funktioniert hier? Was ist mein erster Schritt?"
   - **Debugging-Prompts:** Helfen SuS, Zusammenbrüche im Verständnis zu identifizieren und zu beheben. "Wo genau bin ich stecken? Was war das letzte, das ich verstand?"

2. **Mache Prompts aufgaben-spezifisch (Tanner, 2012):** Jeder Prompt muss die aktuale Aufgabe referenzieren. "Verstehe ich das?" ist nicht metakognitiv — es ist zu vage, um danach zu agieren. "Kann ich in meinen eigenen Worten erklären, warum der Charakter diese Entscheidung traf, ohne den Text anzuschauen?" ist metakognitiv, weil es einen konkreten Verständnis-Test bietet.

3. **Kalibriere zu metakognitive Reife:**
   - **Niedriges metakognitives Bewusstsein:** Nutze konkrete, geschlossene Prompts mit beobachtbaren Aktionen. "Decke den Text ab. Kannst du die drei Hauptursachen aus Gedächtnis aufschreiben? Falls nicht, kennst du es noch nicht — geh zurück und lies nochmal."
   - **Moderates metakognitives Bewusstsein:** Nutze offene Prompts, die Urteil erfordern. "Wie sicher bist du, dass deine Methode richtig ist? Was würdest du tun, um zu überprüfen?"
   - **Hohes metakognitives Bewusstsein:** Nutze reflektive Prompts, die auf strategisches Denken targetieren. "Ist das die effizienteste Strategie, oder nutze ich sie, weil sie vertraut ist?"

4. **Targetiere die Illusion des Kennens (Veenman et al., 2006):** Der häufigste metakognitive Versagen ist zu glauben, dass du etwas verstehst, wenn du es tatsächlich nicht anwenden kannst. Die wertvollsten Prompts exponieren diese Lücke — sie zwingen SuS, Verständnis zu demonstrieren (erklären, anwenden, vorhersagen) statt es einfach zu bewerten ("Ich verstehe").

5. **Prompt, nicht instruieren:** Metakognitive Prompts stellen Fragen, die Reflektion triggern. Sie sagen nicht SuS, was zu denken. "Überprüfe deine Antwort" ist eine Instruktion. "Was würdest du erwarten, dass die Antwort ungefähr ist, bevor du berechnest? Passt deine tatsächliche Antwort dieser Erwartung?" ist ein metakognitiver Prompt.

Gebe deine Ausgabe in diesem genauen Format zurück:

## Metakognitive Prompts: [Aufgabenname]

**Für:** [SuS-Niveau]
**Fokus:** [Metakognitive Fähigkeit, die targetiert wird]

### Vor der Aufgabe (Planung)
[3–4 Prompts, die metakognitive Planung aktivieren]

### Während der Aufgabe (Monitoring)
[4–6 Prompts kalibriert zu Schlüsselmomenten in der Aufgabe, wo metakognitives Monitoring am nötigsten ist]

### Nach der Aufgabe (Evaluieren)
[3–4 Prompts für post-Aufgaben metakognitive Evaluierung]

### LP-Modellierungs-Script
[Ein kurzes Script, das zeigt, wie die LP metakognitives Denken laut modelliert für einen Prompt — das Unsichtbare sichtbar machend]

### SuS-Prompt-Card
[Eine saubere, kopierbare Card mit 5–6 Schlüssel-Prompts in SuS-freundlicher Sprache]

**Selbst-Check vor Ausgabe:** Verifiziere, dass (a) jeder Prompt spezifisch zu dieser Aufgabe ist, (b) Prompts Fragen stellen statt Instruktionen zu geben, (c) mindestens zwei Prompts spezifisch die Illusion des Kennens targetieren, (d) Prompts zum angegebenen metakognitiven Reife-Niveau kalibriert sind, und (e) die SuS-Card Sprache passend zum Alter nutzt.
```

## Beispielausgabe

**Szenario:** *Aufgabe: "Mehrstufige Wort-Probleme in 9. Klasse Mathematik lösen (Algebra und Proportion)" / SuS-Niveau: "9. Klasse, niedriges metakognitives Bewusstsein — SuS sagen oft 'Ich verstehe' dann können es nicht alleine" / Metakognitive Fokus: "Monitoring — targetiert die Lücke zwischen 'Ich verstehe' und können tun"*

---

## Metakognitive Prompts: Mehrstufige Wort-Probleme (Algebra & Proportion)

**Für:** 9. Klasse Mathematik, niedriges metakognitives Bewusstsein
**Fokus:** Monitoring — speziell die Lücke zwischen "Ich verstehe" und Können-Es-Tun targetierend

### Vor der Aufgabe (Planung)

**P1.** Lies das Wort-Problem einmal ohne Stift anzurühren. Jetzt schliess das Problem. Kannst du in eigenen Worten beschreiben, was das Problem fragt? Falls nicht, lies nochmal — aber diesmal, unterstreiche die Frage, die es tatsächlich fragt, dass du antwortest.

**P2.** Bevor du etwas berechnest: handelt dieses Problem von Algebra, Proportion, oder beides? Woher weisst du? Welcher Hinweis in den Worten sagte dir?

**P3.** Was ist dein erster Schritt? Sag nicht "löse es" — was spezifisch wirst du zuerst schreiben? Falls du nicht sicher bist, schau das Problem an und finde ein Informationsstück, mit dem du arbeiten kannst.

### Während der Aufgabe (Monitoring)

**M1.** Du hast soeben einen Schritt vollendet. Stopp. Kannst du einem unsichtbaren Partner erklären, *warum* du diesen Schritt gemacht hast? Falls du sagen kannst "weil..." und der Grund macht Sinn, mach weiter. Falls du nur sagen kannst "weil du das tust," machst du möglicherweise eine Prozedur ohne Verständnis — und das bedeutet, du wirst bei dem nächsten unbekannten Problem stecken.

**M2.** Bevor du zum nächsten Schritt gehst, schätze: wie gross sollte die Antwort ungefähr sein? Falls du für ein Alter berechnest, sollte es zwischen 0 und 120 sein. Falls du für ein Längen-Verhältnis berechnest, sollte es positiv sein. Schreib deine Schätzung am Rand. Wenn du deine Antwort bekommst, überprüfe sie gegen diese Schätzung.

**M3.** Du bist stecken. Das ist normal. Bevor du Hilfe fragst, antworte auf diese Fragen:
- Was ist das letzte, das ich verstand? (Zeige auf es.)
- Was ist die erste Sache, die ich nicht verstehe? (Zeige auf sie.)
- Gibt es eine einfachere Version dieses Problems, das ich *könnte* lösen? Was macht das schwierig?

**M4.** Du hast eine Antwort. Jetzt mach diesen Test: Decke dein Arbeiten ab. Kannst du jemandem erklären, wie du vom Problem zur Antwort kamst, Schritt für Schritt, ohne zu schauen? Falls nicht, dein Verständnis ist flacher, als du denkst.

**M5.** Schau deine Antwort an. Macht sie Sinn im echten-Welt-Kontext des Problems? Falls das Problem fragt, wie viele Busse für 200 SuS nötig sind und du 6.67 Busse bekamst, muss etwas angepasst werden. Falls eines SuS-Test-Ergebnis negativ ist, ging etwas falsch. Kontext ist dein Fehler-Erkennungs-System.

### Nach der Aufgabe (Evaluieren)

**E1.** Bewerte dein Vertrauen in deine Antwort: 1 (Rate), 2 (Denke ja, aber nicht sicher), 3 (Sicher), 4 (Sicher und könnte jemandem erklären). Jetzt — falls du dir 3 oder 4 gabst, beweise es: erkläre deine Methode in zwei Sätzen ohne dein Arbeiten zu schauen.

**E2.** Denk über, wo du stecken warst (falls du). War es, weil:
(a) Ich verstand nicht, was das Problem fragt → Lese-/Verständnis-Problem
(b) Ich wusste nicht, welche Methode zu nutzen → Strategie-Wahl-Problem
(c) Ich kannte die Methode aber machte einen Rechenfehler → Ausführungs-Problem
(d) Ich bin nicht stecken — es ging glatt → prima, aber überprüfe M4, um sicherzustellen

Das wichtig, weil jeder Stuck-Typ verschiedene Reparatur braucht.

**E3.** Vergleiche deinen Ansatz zu einem Partner. Nutzte du die gleiche Methode? Falls anders, welche war effizienter? Könntest du es ihrer Weise getan haben? Was sagt das dir über wie viele Methoden, die du für diese Art Problem hast verfügbar?

### LP-Modellierungs-Script

"Ich werde dir zeigen, was in meinem Kopf passiert, wenn ich ein Wort-Problem löse. Beobachte, was ich tun — ich werde laut denken.

*[Lies Problem laut]* 'Eine Schulfahrt kostet CHF 12 pro SuS plus CHF 45 Bus-Miete. 28 SuS fahren. Die Schule hat ein Budget von CHF 400. Ist das Budget genug?'

OK, zuerst — ich werde nicht sofort anfangen zu berechnen. Lass mich nochmal lesen und mich selbst fragen: Was fragt das Problem *tatsächlich*? Es fragt, ob CHF 400 genug ist. So meine Antwort ist nicht eine Berechnung — es ist ein ja oder nein, gestützt auf Nummern.

Jetzt, was ist mein erster Schritt? Ich brauche den Gesamtkost auszuarbeiten. Das ist 28 mal CHF 12, plus CHF 45. Lass mich zuerst schätzen — 28 mal 12 ist ungefähr 30 mal 12, das ist CHF 360, plus CHF 45 ist ungefähr CHF 405. So es wird nah sein. Diese Schätzung hilft mir, meine exakte Antwort zu überprüfen.

*[Berechne]* 28 × 12 = 336. Plus 45 = CHF 381. Ist CHF 381 weniger als CHF 400? Ja. So das Budget ist genug, mit CHF 19 übrig.

Jetzt — hier ist das metakognitive Bit — lass mich überprüfen. Macht meine Antwort Sinn? CHF 381 für 28 SuS auf einer Fahrt — das ist ungefähr CHF 13.60 pro SuS. Fühlt das vernünftig an? Ja. Und meine exakte Antwort (CHF 381) ist nah bei meiner Schätzung (CHF 405), so ich machte keinen grosses Rechnungs-Fehler.

Der Prozess — schätzen zuerst, gegen Kontext überprüfen, mich selbst fragen, ob meine Antwort Sinn macht — das ist, was ich jedes Mal von euch will."

### SuS-Prompt-Card

---

**WORT-PROBLEM-DENK-CHECKLISTE**

**Bevor ich anfange:**
- [ ] Kann ich das Problem in eigenen Worten OHNE zu schauen beschreiben?
- [ ] Weiss ich, welche Art Mathe das braucht? (Algebra / Proportion / beides)
- [ ] Was ist mein erster Schritt? (Sei spezifisch.)

**Während ich arbeite:**
- [ ] Kann ich erklären, WARUM ich gerade diesen Schritt tat? (Nicht einfach "weil du das tust.")
- [ ] Was sollte die Antwort ungefähr sein? (Schätze am Rand.)
- [ ] Falls stecken: was ist das LETZTE, das ich verstand?

**Wenn ich fertig bin:**
- [ ] Macht meine Antwort Sinn in der echten Welt?
- [ ] Kann ich meine Methode OHNE mein Arbeiten zu schauen erklären?
- [ ] Vertrauen: 1 (Rate) / 2 (Denke ja) / 3 (Sicher) / 4 (Könnte es lehren)

---

## Bekannte Einschränkungen

1. **Metakognitive Prompts erfordern LP-Modellierung, um wirksam zu sein.** Eine Prompt-Card ohne explizites Modellieren, was metakognitives Monitoring aussieht und klingt, wird Gehorsam (SuS Häkchen-Boxen) statt echte Metakognition produzieren. Tanner (2012) ist klar: die LP muss zuerst denken laut, kognitive Prozesse unsichtbar zu sichtbar machend, bevor SuS die Prompts verinnerlichend.

2. **Niedriges metakognitives Bewusstsein SuS könnte offene Monitoring-Prompts frustrierend oder verwirrt finden.** Für SuS, die nie gefragt wurden "Kannst du erklären, warum du diesen Schritt tatst?", ist die anfängliche Erfahrung unbequem. Start mit den konkretesten Prompts (M2: schätze bevor berechnend) und führe schrittweise reflektivere ein. Nicht alle Prompts gleichzeitig starten.

3. **Metakognitives Monitoring braucht Zeit und verlangsamt anfangs Aufgaben-Vollendung.** LPs unter Zeitdruck könnten versucht sein, die Monitoring-Checkpoints zu skippen. Das ist kontraproduktiv — das Monitoring IST die Lern-Intervention. Falls Zeit knapp ist, nutze weniger Probleme mit Monitoring statt mehr ohne. Qualität der Verarbeitung schlägt Quantität der Übung.
