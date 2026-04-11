---
# AGENT SKILLS STANDARD FIELDS (v2)
name: schluesselfragen-designer
description: "Gestalte eine diagnostische Schlüsselfrage, die zeigt, ob SuS verstanden haben und die Klasse fortschreiten kann. Nutze bei Checkpoints während Erklärung oder direktem Unterricht."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-fragetechniken/schluesselfragen-designer"
skill_name: "Designer für Schlüsselfragen"
domain: "schule-fragetechniken"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Wiliam (2011) — Embedded Formative Assessment: hinge questions as real-time diagnostic tools"
  - "Christodoulou (2017) — Making Good Progress? The future of Assessment for Learning"
  - "Black & Wiliam (1998) — Assessment and classroom learning"
  - "Sadler (1989) — Formative assessment and the design of instructional systems"
  - "Haladyna et al. (2002) — A review of multiple-choice item-writing guidelines for classroom assessment"
input_schema:
  required:
    - field: "konzept_wird_unterrichtet"
      type: "string"
      description: "Das spezifische Konzept oder die Fertigkeit, die die Frage diagnostizieren soll"
    - field: "sus_niveau"
      type: "string"
      description: "Klassenstufe"
    - field: "stunden_kontext"
      type: "string"
      description: "Was in dieser Stunde bisher unterrichtet wurde — die Frage checkt, ob SuS das verstanden, bevor weitergegangen wird"
  optional:
    - field: "bekannte_missverstaendnisse"
      type: "array"
      description: "Spezifische Missverständnisse, die die Distraktor-Optionen adressieren sollen"
    - field: "sus_profile"
      type: "array"
      description: "Vorherige Assessments, typische Lücken"
    - field: "antwort_methode"
      type: "string"
      description: "Wie SuS antworten — z.B. Whiteboards, Finger (A/B/C/D), Clicker"
    - field: "zeit_constraint"
      type: "string"
      description: "Max. Zeit zum Antworten — unter 2 Minuten"
output_schema:
  type: "object"
  fields:
    - field: "schlüsselfrage"
      type: "object"
      description: "Frage, Optionen und Lösung"
    - field: "diagnostischer_schlüssel"
      type: "object"
      description: "Was jede Antwort über Verständnis zeigt — welches Missverständnis jeder Distraktor adressiert"
    - field: "entscheidungshilfe"
      type: "string"
      description: "Was tun basierend auf Antwortmuster — wann fortschreiten, nachunterricht, differenzieren"
    - field: "gestaltungs_rationale"
      type: "string"
      description: "Warum Frage und Distraktor so gestaltet sind"
chains_well_with:
  - "checking-for-understanding-protocol-designer"
  - "explicit-instruction-sequence-builder"
  - "practice-problem-sequence-designer"
  - "retrieval-practice-generator"
teacher_time: "3 Minuten"
tags: ["schlüsselfrage", "formative-assessement", "missverständnisse", "diagnostik", "verständnis-check"]
---

# Designer für Schlüsselfragen

## Was dieser Skill macht

Gestaltet eine einzelne, sorgfältig konstruierte Multiple-Choice-Schlüsselfrage — eine diagnostische Frage an einem kritischen Punkt in der Stunde (dem "Scharnier"), um zu bestimmen, ob SuS das Konzept verstanden haben, um weiterzuschreiten. Im Unterschied zu Standard-Multiple-Choice ist jede falsche Antwort ein sorgfältig gestalteter Distraktor, der ein spezifisches, bekanntes Missverständnis adressiert — so die LP kann nicht nur sehen, WER nicht versteht, sondern WAS sie nicht verstehen und WARUM. Der Output umfasst die Frage, den diagnostischen Schlüssel (was jede Antwort zeigt) und eine Entscheidungshilfe (was die LP tun soll). KI ist wertvoll, weil effektive Schlüsselfragen-Gestaltung erfordert: das Konzept identifizieren, typische Missverständnisse vorhersagen, Distraktor gestalten, die SuS mit jedem Missverständnis anziehen (aber nicht korrekte SuS), und sicherstellen, dass die richtige Antwort nicht durch fehlerhafte Logik zu erreichen ist.

## Evidence Foundation

Wiliam (2011) führte Schlüsselfragen als effizienteste In-Stunden-Formative-Assessment ein — eine Frage am "Scharnier" (wo die LP entscheiden muss, fortschreiten oder nachunterricht), gestaltet so, dass jede Antwort diagnostisch ist. Der Schlüsselprinzip ist, dass jede falsche Antwort die Antwort sein sollte, die SuS mit spezifischem Missverständnis gäben, was das Antwortmuster interpretierbar macht. Christodoulou (2017) vertiefte dieses Werk und argumentierte, dass effektive formative Assessment "diagnostische" falsche Antworten erfordert, nicht nur falsche — "Fragen, wo die falschen Antworten dir etwas sagen, sind hilfreicher als Fragen, wo die falschen Antworten dir nichts sagen." Black & Wiliam (1998) etablierten, dass formative Assessment eine der höchsten Interventionen (Effektstärke 0.4–0.7) ist, aber nur, wenn LPs auf die Information reagieren — Schlüsselfragen-Format ist für unmittelbare Aktion gestaltet, weil das Antwortmuster der LP genau sagt, was zu tun ist. Sadler (1989) identifizierte, dass effektive formative Assessment erfordert, die Lücke zwischen aktuellem Verständnis und Sollverständnis zu verstehen — Schlüsselfragen machen diese Lücke Echtzeit sichtbar. Haladyna et al. (2002) gaben technisches Framework für effektive Multiple-Choice-Items, betont, dass Distraktor-Qualität — nicht Fragen-Schwierigkeit — Item diagnostisch macht.

## Input-Schema

Die LP muss angeben:
- **Konzept wird unterrichtet:** Das spezifische Konzept. *z.B. "Der Unterschied zwischen Mittelwert und Median" / "Warum das Herz vier Kammern hat" / "Apostrophe für Besitz vs. Kontraktion nutzen"*
- **SuS-Niveau:** Klassenstufe. *z.B. "7. Klasse"*
- **Stunden-Kontext:** Was unterrichtet wurde. *z.B. "Ich habe gerade erklärt und modelliert, wie man den Mittelwert aus einem Datensatz berechnet, inklusive zwei Rechenbeispiele. SuS haben noch nicht selbst geübt."*

Optional (vom Kontextsystem):
- **Bekannte Missverständnisse:** Spezifische Missverständnisse, die Distraktor adressieren
- **SuS-Profile:** Vorherige Assessments, typische Lücken
- **Antwort-Methode:** Wie SuS antworten (Whiteboards, Finger, Clicker)
- **Zeit Constraint:** Max Antwortzeit (default: unter 2 Min)

## Prompt

```
Du bist eine Expertin für formative Assessment-Gestaltung und diagnostische Fragen-Konstruktion mit tiefem Wissen über Wiliams (2011) Schlüsselfragen-Methodik, Christodoulous (2017) Arbeit zu diagnostischem Assessment und Haladynas et al.s (2002) Item-Schreib-Richtlinien. Du verstehst, dass eine Schlüsselfrage KEINE Standard-Multiple-Choice-Quiz-Frage ist — sie ist ein Präzisions-Diagnostik-Werkzeug, wo jede Antwortoption spezifische Information über SuS-Verständnis offenbart.

Deine Aufgabe ist es, eine Schlüsselfrage zu gestalten für:

**Konzept:** {{konzept_wird_unterrichtet}}
**SuS-Niveau:** {{sus_niveau}}
**Stunden-Kontext:** {{stunden_kontext}}

Folgende optionale Kontexte können zur Verfügung stehen. Nutze, was vorhanden ist; ignoriere fehlende Felder.

**Bekannte Missverständnisse:** {{bekannte_missverstaendnisse}} — nicht angegeben: identifiziere die 3–4 typischsten Missverständnisse für dieses Konzept auf diesem Niveau und gestalte Distraktor daran.
**SuS-Profile:** {{sus_profile}} — nicht angegeben: gestalte für typische mixed-ability Klasse.
**Antwort-Methode:** {{antwort_methode}} — nicht angegeben: gestalte für Whiteboards oder Finger-Voting (A/B/C/D).
**Zeit Constraint:** {{zeit_constraint}} — nicht angegeben: sicherstelle, dass Frage unter 2 Min. von verständiger SuS beantwortbar ist.

Wende diese evidenzgestützten Gestaltungs-Prinzipien an:

1. **Ein Konzept, eine Frage (Wiliam, 2011):**
   - Die Frage testet EIN spezifisches Konzept — das, das SuS verstehen müssen, bevor weitergegangen wird.
   - Die Frage sollte unter 2 Min. beantwortbar sein. Wenn länger: testet sie Verfahren oder Ausdauer, nicht Verständnis.
   - LP sollte alle Antworten in unter 30 Sek. scannen (das schliesst offene Antworten aus).

2. **Jeder Distraktor adressiert spezifisches Missverständnis (Christodoulou, 2017):**
   - Jede falsche Antwort muss die Antwort sein, die SuS MIT Missverständnis GÄBEN.
   - Distraktor sollten plausibel sein — sie sollten SuS mit Missverständnis "anziehen".
   - Zufällige falsche Antworten sind nutzlos. Wenn SuS Option C wählt, muss LP sagen können "Diese SuS denkt X" — nicht nur "Diese SuS hat falsch".
   - Die richtige Antwort sollte NICHT durch fehlerhafte Logik erreichbar sein. SuS mit Missverständnis sollte zu Distraktor angezogen werden, nicht zufällig richtig.

3. **Die Frage muss differenzieren (Haladyna et al., 2002):**
   - SuS mit Verständnis wählen zuverlässig die richtige Antwort.
   - SuS ohne Verständnis wählen zuverlässig den Distraktor, der zu ihrem Missverständnis passt.
   - Falls richtige Antwort durch Eliminierung, Mustererkennung oder Test-Gewitzheit zu erreichen ist, misslingt die Frage.

4. **Gestalte für unmittelbare Aktion (Black & Wiliam, 1998):**
   - Das Antwortmuster sollte der LP genau sagen, was zu tun ist:
     - 80%+ richtig → weiterschreiten zur Übung
     - 50–80% richtig → kurzer Nachunterricht zu häufigstem Missverständnis, dann re-check
     - Unter 50% → bedeutender Nachunterricht nötig
   - Gib spezifische Richtung für jedes Muster.

5. **Technische Qualität (Haladyna et al., 2002):**
   - Der Stamm sollte klar, prägnant sein, alle nötigen Informationen enthalten.
   - Alle Optionen sollten strukturell, längen- und grammatik-parallel sein.
   - Vermeide "alles oben" und "keines oben" — geben keine Diagnose-Information.
   - Vermeide negative Stämme ("Was ist NICHT...") — testen Leseverständnis, nicht Fach-Verständnis.
   - Optionen sollten in logischer Ordnung (numerisch, alphabetisch oder konzeptuell).

Return your output in genau diesem Format:

## Schlüsselfrage: [Konzept]

**Für:** [SuS-Niveau]
**Stellen nach:** [Was sollte unterrichtet sein]
**Geschätzte Antwortzeit:** [Zeit]

### Die Frage

[Fragen-Stamm]

A) [Option A]
B) [Option B]
C) [Option C]
D) [Option D]

**Korrekte Antwort:** [Buchstabe]

### Diagnostischer Schlüssel

Für jede Option:
- **[Buchstabe]) [Optionstext]** — [Was diese Wahl über Verständnis zeigt. Für richtige Antwort: Verständnis, das bestätigt wird. Für Distraktor: spezifisches Missverständnis.]

### Entscheidungshilfe

**Falls 80%+ wählen [richtige Antwort]:** [Was tun — normalerweise zur Übung fortschreiten]
**Falls viele wählen [Distraktor]:** [Spezifischer Nachunterricht — adressiert Missverständnis]
**Falls Antworten sich spalten:** [Was tun — normalerweise tieferer Nachunterricht]

### Gestaltungs-Rationale

[Warum Frage das Konzept effektiv testet. Warum Distraktor gewählt. Subtilitäten.]

**Selbstkontrolle:** Überprüfe, dass (a) Frage testet ein Konzept, (b) jeder Distraktor adressiert bekanntes Missverständnis (nicht zufällig falsch), (c) richtige Antwort nicht durch fehlerhafte Logik erreichbar, (d) Diagnos­tischer Schlüssel erklärt, was jede Antwort zeigt, (e) Frage unter 2 Min beantwortbar, (f) Optionen parallel in Struktur/Länge, (g) Entscheidungshilfe gibt handhabbare nächste Schritte.
```

## Beispiel-Output

**Szenario:** *Konzept: "Berechnung des Mittelwerts aus einem Datensatz" / SuS-Niveau: "7. Klasse Mathematik" / Stunden-Kontext: "Ich habe gerade erklärt, dass der Mittelwert berechnet wird, indem man alle Werte addiert und durch die Anzahl teilt. Ich habe zwei Rechenbeispiele gezeigt: Mittelwert von 3, 5, 7 (Antwort: 5) und Mittelwert von 10, 12, 8, 6 (Antwort: 9). SuS haben noch nicht selbst geübt."*

---

## Schlüsselfrage: Mittelwert berechnen

**Für:** 7. Klasse Mathematik
**Stellen nach:** LP-Erklärung und Rechenbeispiele zum Mittelwert
**Geschätzte Antwortzeit:** 60–90 Sekunden

### Die Frage

Fünf SuS schrieben einen Test. Ihre Noten waren:

**2, 3, 5, 8, 12**

Was ist der Mittelwert?

A) 5
B) 6
C) 10
D) 30

**Korrekte Antwort:** B) 6

### Diagnostischer Schlüssel

- **A) 5** — Das ist der **Median** (mittlerer Wert, wenn geordnet: 2, 3, 5, 8, 12). SuS, die das wählen, verwechseln Mittelwert mit Median — sie haben vielleicht die Zahlen geordnet und die mittlere gewählt, oder sie haben allgemein verwechslung zwischen den zwei Durchschnittstypen. Das ist typischer Fehler, wenn Mittelwert und Median nah beieinander unterrichtet werden.

- **B) 6** — **Korrekt.** Die SuS hat alle Werte addiert (2 + 3 + 5 + 8 + 12 = 30) und durch die Anzahl geteilt (30 ÷ 5 = 6). Das bestätigt Verständnis beider Schritte: die Summe UND die Division durch die Anzahl.

- **C) 10** — Das ist die **Spannweite** (12 – 2 = 10). SuS, die das wählen, verwechseln Mittelwert mit Spannweite — sie subtrahierten grösster von kleinster Wert. Das Fehler ist typisch bei SuS, die mehrere "Zusammenfassungs-Statistiken" kennen, aber verwirrt, welches Verfahren zu welcher Massnahme gehört. Es könnte auch bedeuten, dass die SuS nur teilweise der Stunde gefolgt ist und ein neugelernt Aber-falsches Verfahren anwendet.

- **D) 30** — Das ist die **Summe ohne Teilen** (2 + 3 + 5 + 8 + 12 = 30). SuS, die das wählen, hat den ersten Schritt (addieren) vollendet, aber den zweiten vergessen oder nicht verstanden (durch Anzahl teilen). Das ist Teilverständnis — SuS weiss, Mittelwert beinhaltet addieren, aber nicht, was mit der Summe zu tun. Das ist wertvollstes Fehler: SuS braucht kurzer Nachunterricht WARUM wir teilen (um die Summe gleich zu verteilen).

### Entscheidungshilfe

**Falls 80%+ wählen B (korrekt):** Fortschreiten zur freien Übung. SuS verstehen das Verfahren. Zur Übung mit variierender Anzahl Werte übergehen und inklusive Dezimalzahlen in Antworten.

**Falls viele A wählen (Median-Verwirrung):** Unterbruch und Klärung. "Manche von euch fanden die mittlere Zahl — das ist der Median, nicht der Mittelwert. Der Mittelwert ist, wenn wir ALLES addieren und TEILEN. Der Median ist, wenn wir ordnen und Mitte finden. Verschiedene Fragen, verschiedene Verfahren." Beide mit Label zeigen. Dann mit neuer Datensatz re-fragen.

**Falls viele D wählen (Summe ohne Teilen):** Kurzer Nachunterricht des zweiten Schritts. "Manche von euch got 30 — ihr habt den ersten Schritt perfekt getan. Aber der Mittelwert ist nicht die Summe. Denk so: wenn alle fünf SuS GLEICH score hätten, was würde jede score sein? Du teilst 30 Noten gleich zwischen 5 SuS. Das ist was Teilen tut." Re-fragen mit einfacherem Beispiel.

**Falls viele C wählen (Spannweite-Verwirrung):** Das ist ein Etikett-Problem — SuS verwechseln Namen von verschiedenen Statistik-Massnahmen. "Manche von euch subtrahierten grösster von kleinster — das gibt die Spannweite, nicht Mittelwert. Lasst uns klar sein über welch Wort zu welcher Rechnung gehört." Schnelle Referenz erstellen: Mittelwert = add und teil. Median = mittlerer Wert. Spannweite = grösster minus kleinster.

**Falls Antworten sich spalten über A, C, D:** Tieferer Nachunterricht brauchbar. SuS sind nicht sicher, was Mittelwert IST, nicht nur wie man rechnet. Geh zurück zu Konzept-Erklärung: "Der Mittelwert ist der Wert, den jede Person hätte, wenn wir alles gleich teilten." Nutze physisches Modell (Zähler zwischen Gruppen geteilt) bevor zurück zu numerischem Verfahren.

### Gestaltungs-Rationale

Diese Frage funktioniert als Schlüsselfrage, weil:

1. **Die Zahlen sind einfach genug zu rechnen** (Summe = 30, teil durch 5 = 6), so die Frage testet Konzept-Verständnis, nicht Rechenfertigkeiten. SuS mit Verständnis sollte die Antwort unter 60 Sekunden erreichen.

2. **Jeder Distraktor ist die RICHTIGE Antwort zu VERSCHIEDENER Frage** über denselben Datensatz — der Median (A), die Spannweite (C) und die Summe (D). Das bedeutet jede falsche Antwort zeigt spezifische Verwirrung über welche Statistik-Massnahme welche ist, oder welcher Schritt der Prozedur die SuS vollendet hat.

3. **Die richtige Antwort (6) ist nicht "offensichtlich" oder merkfähig** in der Menge. Das erfordert Rechnung. SuS kann nicht raten ohne das volle Verfahren durchzuführen, ungleich Median (5, das ist buchstäblich in Daten) oder Summe (30, das ist erste Zahl, die SuS rechnet).

4. **Der Datensatz wurde absichtlich gewählt** so der Mittelwert (6) und Median (5) unterschiedlich sind — wenn sie gleich wären, könnte die Frage nicht zwischen SuS unterscheiden, die richtig rechnet und die, die Median fand durch Fehler.

---

## Bekannte Einschränkungen

1. **Schlüsselfragen arbeiten nur, wenn die LP auf die Antwort-Daten reagiert.** Eine wunderbar gestaltete Schlüsselfrage ist nutzlos, wenn die LP sie fragt, sieht dass 40% falsch wählten, und fortschreitet sowieso. Die Entscheidungshilfe gibt spezifische Handlungen, aber die LP muss den Wille flexibel haben, die geplante Stunde in Echtzeit anpassen. Das erfordert Flexibilität UND Sicherheit — manche LP finden schwer, von geplantem unterricht abzuweichen, selbst wenn Daten sagen, sollte.

2. **Multiple-Choice-Format limitiert, was getestet werden kann.** Schlüsselfragen funktionieren am besten für Konzepte, wo Verständnis in einzelner Wahl offenbar wird — normalerweise faktisches Wissen, prozedurales Verständnis oder konzeptuelle Unterscheidung. Sie sind weniger effektiv für komplexes Reasoning, ausgedehnten Argument oder kreativen Anwendung, wo das interessante Information ist in der Prozess, nicht Final-Antwort. Für diese Fertigkeiten sind andere Methoden besser (Whiteboards mit Rechnung, Think-Pair-Share).

3. **Distraktor-Gestaltung erfordert tiefes Wissen von SuS-Missverständnissen.** Die Qualität einer Schlüsselfrage hängt ganz davon ab, ob Distraktor echte Missverständnisse adressieren, die ECHTE SuS halten — nicht nur plausible-aussehend falsche Antworten. Der Generator nutzt typische Missverständnisse aus Forschungs-Literatur und unterricht Erfahrung, aber spezifische SuS-Populationen könnten andere Missverständnisse halten. LP sollten die Distraktor überprüfen und modifizieren basierend auf Kenntnis ihrer eigenen SuS-typischen Fehler. Wenn ein Distraktor nicht zu echtem Missverständnis in der Klasse passt, gibt es keine Diagnose-Information — es ist just "eine falsche Antwort".
