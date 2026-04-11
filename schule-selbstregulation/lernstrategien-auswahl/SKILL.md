---
# AGENT SKILLS STANDARD FIELDS (v2)
name: lernstrategien-auswahl
description: "Wähle evidence-basierte Lernstrategien, die zu Material-Typ, Lernziel und SuS-Gewohnheiten passen. Nutze, wenn SuS zu Repetitionstech niken, Hausaufgaben, oder unabhängigem Lernen geraten wird."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-selbstregulation/lernstrategien-auswahl"
skill_name: "Lernstrategien-Auswahl & Anleitung"
domain: "schule-selbstregulation"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Dunlosky et al. (2013) — Improving students' learning with effective learning techniques: promising directions from cognitive and educational psychology"
  - "Roediger & Pyc (2012) — Inexpensive techniques to improve education: applying cognitive psychology to enhance educational practice"
  - "Kornell & Bjork (2007) — The promise and perils of self-regulated study"
  - "Hartwig & Dunlosky (2012) — Study strategies of college students: are self-testing and scheduling related to achievement?"
  - "Miyatsu et al. (2018) — Five popular study strategies: their pitfalls and optimal implementations"
input_schema:
  required:
    - field: "learning_task"
      type: "string"
      description: "Die spezifische Lernaufgabe oder Lernziel"
    - field: "student_level"
      type: "string"
      description: "Alter/Klassenstufe und aktuelle Lerngewohnheiten"
    - field: "material_type"
      type: "string"
      description: "Art des Materials: faktisch/konzeptuell/prozedural/gemischt"
  optional:
    - field: "time_available"
      type: "string"
      description: "Wie viel Lernzeit die SuS hat"
    - field: "assessment_type"
      type: "string"
      description: "Wofür gelernt: Exam, Essay, Presentation, Praktisches"
    - field: "student_profiles"
      type: "array"
      description: "Aus Context Engine: aktuelle Lerngewohnheiten, Leistungs-Daten"
    - field: "subject_area"
      type: "string"
      description: "Fachkontext für fach-spezifische Strategie-Adaptationen"
output_schema:
  type: "object"
  fields:
    - field: "recommended_strategies"
      type: "array"
      description: "Ranglisten-Liste Strategien mit Evidence-Rating, Umsetzungs-Anleitung und Zeit-Zuweisung"
    - field: "strategies_to_avoid"
      type: "array"
      description: "Häufige aber unwirksame Strategien, die SuS ersetzen sollte"
    - field: "study_plan"
      type: "string"
      description: "Ein konkreter Lernplan, der empfohlene Strategien auf diese spezifische Aufgabe anwendet"
    - field: "student_guide"
      type: "string"
      description: "Kopierbarer Schüler-Ansichts-Strategie-Anleitung"
chains_well_with:
  - "retrieval-practice-generator"
  - "spaced-practice-scheduler"
  - "metakognitive-prompts"
  - "zielvereinbarung-designer"
teacher_time: "3 minutes"
tags: ["lernfähigkeiten", "lernstrategien", "repetition", "selbstregulation", "metakognition"]
---

# Lernstrategien-Auswahl & Anleitung

## Was dieser Skill leistet

Analysiert eine spezifische Lernaufgabe und empfiehlt die am meisten evidence-gestützten Lernstrategien mit einer expliziten Umsetzungs-Anleitung für jede. Kritisch, der Skill identifiziert auch unwirksame Strategien, die die SuS wahrscheinlich nutzen (Unterstreichen, Nochmal-Lesen, Notizen Abschreiben) und bietet spezifische Ersatz-Strategien mit der Evidenz-Begründung. KI ist hier besonders wertvoll, weil SuS überwiegend zu den am wenigsten wirksamen Lernstrategien defaulten — Kornell & Bjork (2007) fand, dass die beliebtesten Strategien (Nochmal-Lesen, Unterstreichen) "Niedriges-Nutzen" von der Forschung bewertet, während die wirksamen Strategien (Abruf-Übung, Verteilte Übung) am wenigsten genutzt sind. Dieser Skill kodiert Dunlosky et al.s (2013) Meilenstein-Übersicht in umsetzbare, aufgaben-spezifische Leitung.

## Evidenzgrundlage

Dunlosky et al. (2013) führt die umfassendste Übersicht von Lernstrategien jemals durch, systematisch bewertend zehn Techniken gegen vier Kriterien (Verallgemeinerbarkeit über Lernbedingungen, SuS-Charakteristiken, Materialien und Kriterium-Aufgaben). Nur zwei Strategien bekamen ein "Hohes-Nutzen"-Rating: Übungs-Testen (Abruf-Übung) und Verteilte Übung (Spacing). Drei bekamen "Moderates-Nutzen": Interleaved Übung, Elaboratives Fragen, und Selbst-Erklärung. Fünf wurden "Niedriges-Nutzen" trotz am beliebtesten unter SuS: Unterstreichen, Nochmal-Lesen, Zusammenfassung, Schlüsselwort-Mnemonic, und Bildnis für Text. Kornell & Bjork (2007) zeigte, dass SuS schlechte Beurteiler ihres eigenen Lernens sind — sie wählen Strategien, die sich wirksam fühlen (Nochmal-Lesen produziert Fliessigkeit, das sich wie Lernen anfühlt) statt wirksam (Abruf-Übung fühlt sich schwerer an, produziert aber bessere Behalts). Hartwig & Dunlosky (2012) fand, dass SuS, die selbst-testeten und Spacing nutzten, signifikant höhere Noten bekamen. Miyatsu et al. (2018) identifizierten, dass sogar "gute" Strategien Fallstricke haben — Abruf-Übung scheitert, falls SuS nicht ihre Antworten überprüfen, und Spacing scheitert, falls die Lücken zu gross sind.

## Input-Schema

Die Lehrperson muss bereitstellen:
- **Lernaufgabe:** Was die SuS lernen muss. *z.B. "Vorbereitung auf eine 9. Klasse Biologie-Exam zu Zellen und Transport (70% faktisches Abrufen, 30% Anwendungs-Fragen)" / "Repetition für 9. Klasse Geschichte Paper 2: Ursachen und Ereignisse des Kalten Krieges"*
- **SuS-Niveau:** Klassenstufe und aktuelle Gewohnheiten. *z.B. "9. Klasse, liest aktuell Notizen nochmal und unterstreicht" / "11. Klasse, nutzt Flashcards aber keine Spacing"*
- **Material-Typ:** Faktisch, konzeptuell, prozedural, oder gemischt. *z.B. "Gemischt — Schlüssel-Wörter zu merken plus Prozesse zu verstehen und anwenden plus 6-Punkte-Fragen mit strukturierter Erklärung"*

Optional (von Context Engine, falls vorhanden):
- **Zeit verfügbar:** Lernzeit verfügbar vor Assessment
- **Assessment-Typ:** Was vorbereitet (Exam, Essay, Presentation, Praktisches)
- **SuS-Profile:** Aktuelle Lerngewohnheiten, Leistungs-Daten
- **Fachgebiet:** Fachkontext

## Prompt

```
Du bist ein Experte in der kognitiven Psychologie des Lernens, spezialisiert auf evidence-basierte Lernstrategien. Du hast tiefes Wissen von Dunlosky et al.s (2013) umfassende Übersicht von Lerntech niken, Kornells & Bjorks (2007) Forschung zu selbst-geregelt-studieren, und Umsetzungs-Fallstricken identifiziert von Miyatsu et al. (2018).

Deine Aufgabe ist es, Lernstrategien zu empfehlen für das Folgende:

**Lernaufgabe:** {{learning_task}}
**SuS-Niveau:** {{student_level}}
**Material-Typ:** {{material_type}}

Das folgende optionale Kontext kann oder kann nicht bereitgestellt sein. Nutze alles Verfügbare; ignoriere Felder, die "nicht bereitgestellt" sind.

**Zeit verfügbar:** {{time_available}} — falls nicht vorhanden, entwerfe einen generellen Lernplan und bemerke, wie anpassen zu mehr oder weniger Zeit.
**Assessment-Typ:** {{assessment_type}} — falls nicht vorhanden, leite aus Lernaufgaben-Beschreibung ab und empfehle Strategien, die über Assessment-Typen übertragen.
**SuS-Profile:** {{student_profiles}} — falls nicht vorhanden, annahme die SuS nutzt häufige aber unwirksame Strategien (Nochmal-Lesen, Unterstreichen) und braucht Leitung zu evidence-basierten Alternativen.
**Fachgebiet:** {{subject_area}} — falls nicht vorhanden, leite ab aus Aufgabe und adaptiere Strategien zur Domain.

Wende diese evidence-basierten Prinzipien an:

1. **Rangieren Strategien nach Dunlosky et al.s (2013) Nutzen-Ratings:**
   - **Hohes Nutzen (empfehle zuerst):** Übungs-Testen (Abruf-Übung), Verteilte Übung (Spacing). Diese sollten das Gerüst jedes Lernplans bilden.
   - **Moderates Nutzen (empfehle Zweites):** Interleaved Übung, Elaboratives Fragen, Selbst-Erklärung. Nutze als Komplemente zu den Hohes-Nutzen-Strategien.
   - **Niedriges Nutzen (identifiziere und ersetze):** Unterstreichen, Nochmal-Lesen, Zusammenfassung, Schlüsselwort-Mnemonic, Bildnis für Text. Falls die SuS aktuell diese nutzt, erkläre explizit, warum sie nicht funktionieren und was stattdessen tun.

2. **Erkläre, *warum* unwirksame Strategien sich wirksam fühlen (Kornell & Bjork, 2007):** Nochmal-Lesen produziert Fliessigkeit — der Text fühlt sich vertraut an, das Gehirn interpretiert das als Verstehen. Unterstreichen fühlt sich produktiv an — die farbigen Markierungen fühlen sich wie Engagement an. Aber Vertrautheit ist nicht Lernen, und Text zu markieren ist nicht ihn zu kodieren. SuS brauchen das Illusion zu verstehen, um die Gewohnheit zu brechen.

3. **Biete Umsetzungs-Detail, nicht einfach Strategie-Namen (Miyatsu et al., 2018):** "Nutze Abruf-Übung" ist nicht eine Empfehlung. "Schliess deine Notizen. Schreib alles, das du dich an Zell-Transport erinnern kannst. Dann öffne deine Notizen und überprüfe — fokussiere deine nächste Lernstunde auf das, das du nicht zurückrufen konntest" ist eine Empfehlung. Jede Strategie muss genau wie zu tun enthalten.

4. **Flagge Fallstricke für jede Strategie (Miyatsu et al., 2018):**
   - Abruf-Übungs-Fallstrick: nicht Antworten überprüfen — SuS müssen bestätigen und korrigieren, oder Abruf-Übung kann Fehler verstärken.
   - Spacing-Fallstrick: Lücken zu gross — zu viel zwischen Sessions vergessen macht Vorteil reduziert. Start mit kurzen Lücken und erweitere.
   - Selbst-Testen-Fallstrick: nur das testen, das du bereits kennst — SuS müssen schwache Bereiche testen, nicht einfach leichte Abrufe üben.

5. **Passe Strategien zu Material-Typ an:**
   - Faktisches Abrufen (Wörter, Daten, Namen) → Flashcard-Abruf-Übung, Spacing-Wiederholung
   - Konzeptuelles Verständnis (Prozesse, Beziehungen) → Elaboratives Fragen, Selbst-Erklärung, Konzept-Abbilden aus Gedächtnis
   - Prozedural-Fähigkeiten (Berechnungen, Methoden) → Interleaved Übungs-Probleme, Gearbeitetes-Beispiel Studie
   - Anwendung/Übertragung → Übung mit variierten Problemtypen, Selbst-Erklärung, warum jeder Ansatz funktioniert

6. **Erstelle einen konkreten, zeitplanbaren Plan:** Nicht einfach Strategien listen — zeige der SuS genau was zu tun, wann und wie lange.

Gebe deine Ausgabe in diesem genauen Format zurück:

## Lernstrategie-Anleitung: [Aufgabe]

**Für:** [SuS-Niveau]
**Material-Typ:** [Typ]

### Strategien ZU STOPFEN (und Warum)
[2–3 unwirksame Strategien, die die SuS wahrscheinlich nutzt, mit ehrlicher Erklärung, warum sie nicht funktionieren trotz sich produktiv zu fühlen]

### Empfohlene Strategien (Ranglisten nach Evidenz)
Für jede Strategie:
- **Strategie-Name** — [Dunlosky-Rating]
- **Was zu tun:** [Spezifisch, Schritt-für-Schritt Umsetzung]
- **Warum es funktioniert:** [1–2 Satz evidence-basierte Erklärung]
- **Fallstrick zu vermeiden:** [Der häufige Umsetzungs-Fehler]
- **Zeit nötig:** [Wie lange pro Session]

### Lernplan
[Ein konkreter, zeitplanbarer Plan, der diese Strategien auf diese spezifische Aufgabe anwendet — angelegt nach Session oder Tag]

### SuS-Anleitung
[Kopierbarer, SuS-freundlicher Version mit praktischen Instruktionen]

**Selbst-Check vor Ausgabe:** Verifiziere, dass (a) jede empfohlene Strategie spezifische Umsetzungs-Instruktionen, nicht einfach ein Name hat, (b) unwirksame Strategien mit ehrlichen Erklärungen identifiziert sind, (c) Fallstricke für jede empfohlene Strategie geflaggt sind, (d) der Lernplan konkret und zeitplanbar ist, und (e) Strategien zu Material-Typ passen.
```

## Beispielausgabe

**Szenario:** *Lernaufgabe: "Vorbereitung auf 9. Klasse kombinierte Wissenschaft Exam — Biologie-Themen: Zellstruktur, Transport über Membranen, Zellteilung. 40 Punkte: 20 Abrufen, 10 Anwendung, 10 erweiterte Erklärung." / SuS-Niveau: "9. Klasse, liest aktuell Lehrbuch nochmal und macht farbenreich Notizen" / Material-Typ: "Gemischt — Wörter zum Abrufen, Prozesse zum Verstehen, 6-Punkt-Fragen mit strukturierter Erklärung"*

---

## Lernstrategie-Anleitung: 9. Klasse Biologie Exam — Zellen

**Für:** 9. Klasse, aktuell Nochmal-Lesen und dekorative Notiz-Machen nutzend
**Material-Typ:** Gemischt (Faktisches Abrufen + Konzeptuelles Verständnis + Erweiterte Erklärung)

### Strategien ZU STOPPEN (und Warum)

**1. Lehrbuch nochmal-lesen**
Du fühlst dich wie du lernst, weil der Text vertraut wird — du erkennst die Wörter und dein Gehirn interpretiert die Vertrautheit als Verstehen. Aber Kornell & Bjork (2007) zeigte das ist eine Illusion. Versuch diesen Test: schliess dein Lehrbuch gerade jetzt und erklär die Phasen von Mitose aus Gedächtnis. Falls du nicht kannst, lehrte das Nochmal-Lesen dich nicht — es machte den Text vertraut. Dunlosky et al. (2013) bewertet Nochmal-Lesen "Niedriges-Nutzen."

**2. Farbenreich, detaillierte Notizen machen**
Notizen vom Lehrbuch ins Ordner kopieren fühlt sich produktiv an — du hast Zeit verbracht, du hast etwas produziert, es sieht gut aus. Aber du machtest das intellektuelle Äquivalent von Fotokopieren. Die Information ging vom Buch zur Seite ohne durch dein Gehirn auf meaningful Weise zu gehen. Dunlosky et al. (2013) bewertet Zusammenfassung "Niedriges-Nutzen," weil passives Notizen-Machen dich nicht erfordert zu Information zu prozessieren oder sie zu abrufen.

**3. Unterstreichen**
Unterstreichen markiert Text, aber prozessiert ihn nicht. Du entscheidest, was wichtig ist (manchmal nützlich) aber tust nichts, um es zu lernen. Ein unterstrichenes Lehrbuch fühlt sich wie ein studiertes Lehrbuch an — es ist nicht. Dunlosky et al. (2013): "Niedriges-Nutzen."

### Empfohlene Strategien (Ranglisten nach Evidenz)

**1. Abruf-Übung (Übungs-Testen)** — Hohes Nutzen (Dunlosky et al., 2013)

**Was zu tun:**
1. Studiere ein Thema für 10–15 Minuten (Zellstruktur, zum Beispiel).
2. Schliess alle Notizen und Lehrbücher komplett.
3. Auf einem leeren Papier, schreib ALLES, das du dich an diesem Thema erinnern kannst. Zeichne Diagramme aus Gedächtnis. Definiere Wörter aus Gedächtnis.
4. Öffne deine Notizen. Überprüfe, was du richtig bekamst (Haken), was du verfehltest (addiere in anderer Farbe), und was du falsch bekamst (korrigiere in Rot).
5. Die Dinge, die du verfehltest oder falsch bekamst, sind jetzt deine Priorität für die nächste Lernstunde.

**Warum es funktioniert:** Das Abrufen von Information aus Gedächtnis verstärkt die Gedächtnis-Spur weit mehr als Nochmal-Lesen. Roediger & Pyc (2012) nennen das "den Test-Effekt." Die Anstrengung der Rekonstruktion ist das, was Lernen produziert.

**Fallstrick zu vermeiden:** Du MUSST deine Antworten überprüfen, nachdem du abrufst. Falls du falsche Information abrufst und nicht korrigierst, wirst du den Fehler lernen. Immer verifizieren gegen deine Notizen oder Lehrbuch.

**Zeit nötig:** 20 Minuten pro Thema (10 min studieren + 5 min Abrufen + 5 min Überprüfen und Korrektur).

---

**2. Verteilte Übung (Spacing)** — Hohes Nutzen (Dunlosky et al., 2013)

**Was zu tun:**
1. Studiere NICHT alle drei Themen in eine lange Session die Nacht davor. Stattdessen, verteile Studium über mehrere kurze Sessions über 2+ Wochen.
2. Zeitplan: Studiere jedes Thema 3-mal, mit Lücken zwischen Sessions.
   - Session 1: 2 Wochen vor dem Exam
   - Session 2: 1 Woche vor
   - Session 3: 2–3 Tage vor
3. In jeder Session, nutze Abruf-Übung (Strategie 1 oben), nicht Nochmal-Lesen.

**Warum es funktioniert:** Ebbinghaus's Vergess-Kurve zeigt, dass ohne Wiederholung, du verlierst ungefähr 70% neuen Lernens innerhalb von 24 Stunden. Spacing Wiederholungen bei erweiternden Intervallen fängt das Vergessen bevor es permanent wird. Cepeda et al. (2006): optimales Spacing hängt von Behalts-Intervall ab.

**Fallstrick zu vermeiden:** Nicht Sessions zu weit apart spacen. Falls du alles bis zur nächsten Session vergessen hast, die Lücke war zu gross — verkürze sie. Ein bisschen Vergessen ist produktiv (es macht Abrufen schwerer, das die Gedächtnis verstärkt), aber vollständiges Vergessen bedeutet von vorne anfangen.

**Zeit nötig:** 3 Sessions von 20 Minuten pro Thema = 3 Stunden total über 2 Wochen (vs. 3 Stunden in eine Session, das weniger wirksam ist).

---

**3. Elaboratives Fragen** — Moderates Nutzen (Dunlosky et al., 2013)

**Was zu tun:** Für jede Tatsache, die du studierst, frag dich selbst "WARUM ist das wahr?" und generiere eine Erklärung.
- Zellmembran ist selektiv-durchlässig → WARUM? Weil sie etwas Stoffe (Nährstoffe, Sauerstoff) einlassen braucht während andere (Abfall, Toxine) heraushaltend, um die Zellen-Innen-Umwelt zu behalten.
- Mitose produziert zwei identische Zellen → WARUM identisch? Weil jedes Chromosom kopiert wird zuerst, so jede neue Zelle eine komplette Garnitur bekommt. WARUM braucht der Körper identische Kopien? Für Wachstum und Reparatur — eine Hautzelle braucht mehr Hautzellen zu produzieren, nicht verschiedene Zellen.

**Warum es funktioniert:** Das Generieren von Erklärungen erstellt zusätzliche Abruf-Wege zur Information (Pressley et al., 1992). Du verbindest neues Wissen zu Sachen, die du schon verstehst.

**Fallstrick zu vermeiden:** Das funktioniert nur falls du genug Hinter-Wissen hast, um plausible Erklärungen zu generieren. Falls du wirklich nicht weisst warum etwas wahr ist, schau es auf und dann übe es zu erklären — skip nicht einfach die Frage.

**Zeit nötig:** Addiere 5 Minuten von "warum?" zu jeder Abruf-Übungs-Session.

---

**4. Interleaved Übung** — Moderates Nutzen (Dunlosky et al., 2013)

**Was zu tun:** Wenn du Exam-Fragen übst, mische Themen. Nicht 10 Zellstruktur-Fragen, dann 10 Transport-Fragen. Stattdessen, shuffle sie: Zellstruktur, Transport, Teilung, Struktur, Transport, Teilung. Das zwingt dich, welches Thema jede Frage zu identifizieren ist bevor du sie beantworten kannst.

**Warum es funktioniert:** Im Exam, kommen Fragen aus allen Themen zusammen-gemischt. Falls du nur in Blöcken übst, entwickelst du nie die Fähigkeit zu erkennen, welches Thema getestet wird. Rohrer et al. (2015) fand, dass interleaved Übung Mathe-Scores um 25% verbessert.

**Fallstrick zu vermeiden:** Nicht interleave bevor du jedes Thema einzeln studiert hast. Du brauchst die Grundlagen zuerst zu verstehen, dann zu mischen zum Üben.

**Zeit nötig:** Wenn Exam-Fragen übst (die letzte Woche von Repetition), interleave alle Themen. Keine extra-Zeit nötig — nur ändere die Ordnung.

### Lernplan

**Annahme 2 Wochen vor dem Exam, 30 Minuten pro Tag:**

| Tag | Was zu tun |
|-----|-----------|
| Tag 1 (Mo) | Zellstruktur: Lies Notizen für 10 min, dann schliess und abrufe alles auf leeres Papier (15 min), überprüfe und korrigiere (5 min) |
| Tag 2 (Di) | Transport über Membranen: gleicher Muster — lies, schliess, abrufe, überprüfe |
| Tag 3 (Mi) | Zellteilung: gleicher Muster — lies, schliess, abrufe, überprüfe |
| Tag 4 (Do) | Zellstruktur AGAIN: nicht nochmal-lesen. Gehe direkt zu Abrufen. Leeres Papier, schreib alles. Vergleiche zu Tag 1 — was erinnert dich diesmal, das du zu Tag 1 vergessen hattest? |
| Tag 5 (Fr) | Transport AGAIN: direkt zu Abrufen. Fokus auf was du zu Tag 2 verfehltest |
| Tag 6–7 (Wochenende) | Ruhe einen Tag. Am anderen: abrufe ALLE drei Themen auf ein Blatt. Zeite dich — 20 Minuten für alle drei |
| Tag 8 (Mo) | Zellteilung Abrufen + Elaboratives Fragen: für jede Zellteilung-Phase, erkläre WARUM es passiert |
| Tag 9 (Di) | Übe Exam-Fragen — INTERLEAVED. Mische alle drei Themen. Fokus auf Fragen-Typ zu identifizieren |
| Tag 10 (Mi) | Übe 6-Punkt-Fragen: schreib ein volles erweiterte Antwort unter Zeitbedingungen. Überprüfe gegen Markierungs-Schema |
| Tag 11 (Do) | Finale Abrufen: alles auf leeres Papier. Identifiziere die 3 schwächsten Bereiche. Studiere NUR diese |
| Tag 12 (Fr) | Finale Abrufen der 3 schwächsten Bereiche. Dann stopp — du bist so vorbereitet wie Spacing erlaubt |

### SuS-Anleitung

---

**WIE ZU TATSÄCHLICH STUDIEREN (basierend auf was die Forschung sagt funktioniert)**

**STOPPE diese** (sie fühlen sich produktiv aber sind nicht):
- Deine Notizen nochmal-lesen — Vertrautheit ist nicht Verstehen
- Schöne Notizen machen — Kopieren ist nicht Lernen
- Unterstreichen — Markieren ist nicht Erinnern

**STARTE diese:**

**Schritt 1: Abrufen, nicht Nochmal-Lesen.** Schliess deine Notizen. Schreib alles, das du dich erinnern kannst auf leeres Papier. Dann überprüfe. Die Sachen, das du vergass? Das ist, was du nächstes Mal studierst.

**Schritt 2: Verteile es.** Studiere jedes Thema 3-mal über 2 Wochen, nicht eine Mal die Nacht davor. Kurze Sessions mit Lücken dazwischen schlagen lange Sessions jedes Mal.

**Schritt 3: Frag "warum?"** Für jede Tatsache, erkläre, warum es wahr ist. Falls du es erklären kannst, verstehst du es. Falls nicht, hast du eine Lücke gefunden.

**Schritt 4: Mische es.** Wenn Übungs-Fragen tust, shuffle die Themen. Nicht alle Zell-Fragen dann alle Transport-Fragen — mische sie.

**Die goldene Regel:** Falls es sich leicht anfühlt, lernst du wahrscheinlich nicht. Abruf-Übung fühlt sich schwerer als Nochmal-Lesen an — das ist der Punkt. Je schwerer das Abrufen, desto stärker die Gedächtnis.

---

## Bekannte Einschränkungen

1. **SuS könnten sich-wohlfühlend-Strategien durch anstrengende ersetzen zu wehren.** Nochmal-Lesen fühlt sich produktiv. Abruf-Übung fühlt sich frustrierend. Kornell & Bjork (2007) zeigte, dass SuS die weniger wirksame Strategie als wirksamer bewertet wegen der Fliessigkeits-Illusion. LPs sollten Widerstand erwarten und den Evidenz-Grund bieten — SuS sind wahrscheinlicher, mit anstrengenden Strategien zu persistieren, falls sie verstehen, *warum* sie funktionieren.

2. **Die Strategie-Empfehlungen annahme SuS hat Zugang zu genaue Studium-Materialien.** Falls die Notizen einer SuS Fehler haben, könnte Abruf-Übung diese Fehler verstärken. Der "überprüfe und korrigiere"-Schritt ist essentiell, aber hängt eine zuverlässige Quelle zu überprüfen gegenüber.

3. **Dunlosky et al.s (2013) Nutzen-Ratings sind basierend auf primär Studien von Verbal-Lernen (Text-Verständnis, Faktisches Abrufen).** Übertragung zu hochpraktischen Fächern (Sport, Musik-Leistung, Kunst, Design-Technologie) ist weniger gut-etabliert. Für prozedural-Fähigkeiten, ist interleaved Übung gut-evidenziert, aber der "schliess deine Notizen und abrufe"-Ansatz braucht Adaptation — physikalisches Üben und beabsichtigte Übung könnten passender sein.
