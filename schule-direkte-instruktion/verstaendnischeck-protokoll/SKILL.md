---
# AGENT SKILLS STANDARD FIELDS (v2)
name: verstaendnischeck-protokoll
description: "Entwerfe ein Verständnischeck-Protokoll mit spezifischen Techniken für jede Lektionsphase. Nutze diese Skill für systematische Verständnisüberprüfungen während direkter Instruktion."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-direkte-instruktion/verstaendnischeck-protokoll"
skill_name: "Verständnischeck-Protokoll Designer"
domain: "schule-direkte-instruktion"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Rosenshine (2012) — Principles of Instruction, Principle 3: ask a large number of questions and check all student responses"
  - "Wiliam (2011) — Embedded Formative Assessment: practical strategies for checking understanding"
  - "Lemov (2015) — Teach Like a Champion 2.0: cold call, show call, and other CFU techniques"
  - "Black & Wiliam (1998) — Assessment and classroom learning: formative assessment effect size ~0.66"
  - "Christodoulou (2017) — Making Good Progress?: hinge questions and diagnostic assessment"
input_schema:
  required:
    - field: "lektionsinhalt"
      type: "string"
      description: "Was wird in der Lektion unterrichtet"
    - field: "lektionsphase"
      type: "string"
      description: "Wann der Check nötig ist: während Instruktion, nach gesteuerter Übung, Lektionsende, oder alle Phasen"
    - field: "schueler_niveau"
      type: "string"
      description: "Klassenstufe und Klasseneigenschaften"
  optional:
    - field: "klassengrossee"
      type: "integer"
      description: "Anzahl SuS — beeinflusst Technikwahl"
    - field: "haeufige_missverstaendnisse"
      type: "array"
      description: "Bekannte Missverständnisse zum Testen"
    - field: "sus_profile"
      type: "array"
      description: "Spezifische SuS zum Monitoren, Vertrauensmuster"
    - field: "verfuegbare_ressourcen"
      type: "string"
      description: "Tafeln, Geräte, Antwortkarten — was im Klassenzimmer verfügbar ist"
output_schema:
  type: "object"
  fields:
    - field: "check_techniken"
      type: "array"
      description: "Ausgewählte Techniken mit Umsetzungsskripten für jede Lektionsphase"
    - field: "schluesselfrage"
      type: "object"
      description: "Eine diagnostische Schlüsselfrage mit Distraktoren-Analyse"
    - field: "kaltanruf_plan"
      type: "object"
      description: "Strukturierte Kaltanruf-Sequenz mit Fragestämmen"
    - field: "reaktions_entscheidungsbaum"
      type: "string"
      description: "Was tun basierend auf Check-Ergebnissen: weitermachen, neu erklären, oder anpassen"
chains_well_with:
  - "instruktionssequenz-builder"
  - "schluesselfrage-designer"
  - "formatives-assessment-technik-wahler"
  - "abfragepraktiken-generator"
teacher_time: "3 minutes"
tags: ["formatives-assessment", "verstaendnischeck", "fragestellungen", "kaltanruf", "feedback", "lehrplan21"]
---

# Verständnischeck-Protokoll Designer

## Was diese Skill leistet

Generiert einen Satz von Verständnischeck-Techniken für eine spezifische Lektionsphase, einschließlich Kaltanruf-Skripte, Tafeln-Aufgaben, Lernzielkontrollen und Schlüsselfragen — jeweils mit Umsetzungsdetails und einem Entscheidungsbaum für Folgeaktionen. Der Output sagt LP nicht nur *wie* sie überprüfen, sondern *was sie mit den Informationen anfangen*. KI ist hier besonders wertvoll, weil wirksame Verständnischecks erfordern, die richtige Technik zum richtigen Moment einzusetzen (man nutzt keine Lernzielkontrolle mitten in der Erklärung) und Fragen zu stellen, die Verständnis offenbaren, nicht nur bestätigen. Die meisten Verständnischecks in der Praxis sind „Fragen?" oder „Versteht ihr?" — das prüft nichts.

## Evidenzgrundlage

Rosenshine (2012) bezeichnete häufiges Überprüfen des Verständnisses als Principle 3 der wirksamen Instruktion: „Erfolgreiche LP stellen viele Fragen, prüfen die Antworten aller SuS und geben systematisches Feedback und Korrektionen." Black & Wiliam (1998) zeigten, dass formatives Assessment — der Einsatz von Überprüfungsinformationen zur Anpassung des Unterrichts — einen Effekt von etwa 0,66 hat, aber nur wenn LP auf den Ergebnissen reagieren. Wiliam (2011) operationalisierte formatives Assessment in fünf Schlüsselstrategien, mit „Engineering effektiver Klassendiskussionen, Aktivitäten und Lernaufgaben, die Lernbeweise sammeln" im Kern. Lemov (2015) gab praktische Klassenzimmertechniken wie Kaltanrufe (Aufrufen von SuS, die nicht freiwillig melden, mit Denkzeit), Show Call (Auswahl von SuS-Arbeiten zur Klassenanalyse) und standardisierte Formate, die schnelles Scannen aller SuS-Antworten erlauben. Christodoulou (2017) erweiterte das Konzept von Schlüsselfragen — einzelne diagnostische Fragen, deren Antworten offenbaren, ob SuS das kritische Konzept gut genug verstanden haben zum Fortschreiten.

## Input-Schema

Die LP muss bereitstellen:
- **Lektionsinhalt:** Was unterrichtet wird. *z.B. „Fläche eines Kreises mit πr² berechnen" / „Ursachen des Dreißigjährigen Krieges" / „Ein ausgewogenes Argument mit Gegenargumenten schreiben"*
- **Lektionsphase:** Wann Überprüfung nötig ist. *z.B. „Während Instruktion — ich möchte überprüfen, bevor ich weitermache" / „Lektionsende — Lernzielkontrolle" / „Alle Phasen — geben Sie mir volles Protokoll"*
- **SuS-Niveau:** Klassenstufe und Klasseneigenschaften. *z.B. „7. Klasse, enthusiastisch aber oft überzeugt — sie sagen, sie verstehen, wenn sie nicht verstehen"*

Optional (vom Kontextsystem bereitgestellt):
- **Klassengröße:** Anzahl SuS
- **Häufige Missverständnisse:** Missverständnisse gezielt prüfen
- **SuS-Profile:** Spezifische SuS zum Monitoren, Vertrauens-Genauigkeits-Muster
- **Verfügbare Ressourcen:** Tafeln, Geräte, Antwortkarten

## Prompt

```
Du bist ein Experte für formatives Assessment und Verständnischecks mit tiefem Wissen von Rosenshines (2012) Principles of Instruction, Wiliams (2011) Strategien für formatives Assessment, Lemovs (2015) praktischen Techniken und Christodoulous (2017) Arbeit zu Schlüsselfragen. Du verstehst, dass der Zweck von Verständnischecks nicht ist, zu bestätigen, dass SuS aufpassen — es ist, diagnostische Evidenz zu sammeln, die bestimmt, ob weitermachen, neu erklären oder anpassen.

Deine Aufgabe ist, ein Verständnischeck-Protokoll für folgende Situation zu entwerfen:

**Lektionsinhalt:** {{lektionsinhalt}}
**Lektionsphase:** {{lektionsphase}}
**SuS-Niveau:** {{schueler_niveau}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt sein. Nutze, was verfügbar ist; ignoriere Felder, die als „nicht bereitgestellt" gekennzeichnet sind.

**Klassengröße:** {{klassengrossee}} — wenn nicht bereitgestellt, entwerfe für eine Klasse von 20–25 SuS.
**Häufige Missverständnisse:** {{haeufige_missverstaendnisse}} — wenn nicht bereitgestellt, identifiziere die 2–3 wahrscheinlichsten Missverständnisse für diese Inhalte und entwerfe Fragen, die sie aufdecken.
**SuS-Profile:** {{sus_profile}} — wenn nicht bereitgestellt, nimm eine typische Mischklasse an mit SuS, die ihr Verständnis oft überschätzen.
**Verfügbare Ressourcen:** {{verfuegbare_ressourcen}} — wenn nicht bereitgestellt, nimm an, dass Tafeln verfügbar sind (das wirksamste Überprüfungs-Ressource) und keine Geräte.

Wende diese evidenzgestützten Prinzipien an:

1. **Überprüfe ALLE SuS, nicht nur die, die sich melden (Rosenshine, 2012; Lemov, 2015):**
   - Aufmelden-Fragen überprüfen nur die SuS, die bereits wissen. Das sagt dir nichts über die anderen 80%.
   - Nutze Techniken, die erfordern, dass ALLE SuS gleichzeitig antworten: Tafeln, Antwortkarten, Fingervoting oder schriftliche Antworten.
   - Kaltanrufe (Aufrufen von SuS, die nicht freiwillig antworten) sind essentiell — aber gib immer Denkzeit (Wiliam, 2011). „Denkt 10 Sekunden... [Pause]... Sara, wie ist deine Antwort?"

2. **Entwerfe Fragen, die Verständnis offenbaren, nicht Wiederholen (Christodoulou, 2017):**
   - „Wie ist die Formel für die Fläche eines Kreises?" prüft Wiederholen.
   - „Die Fläche eines Kreises ist 50 cm². Was kannst du über den Radius sagen?" prüft Verständnis — SuS müssen rückwärts arbeiten und mit der Formel denken.
   - Die besten Verständnisfragen erfordern ANWENDEN, nicht WIEDERHOLEN.

3. **Integriere eine Schlüsselfrage (Wiliam, 2011; Christodoulou, 2017):**
   - Eine Schlüsselfrage ist eine einzelne Multiple-Choice-Frage, wo jede falsche Antwort ein spezifisches Missverständnis offenbart.
   - Die LP sollte Antworten in unter 30 Sekunden scannen können.
   - Der Angelpunkt ist die Entscheidung: wenn 80%+ korrekt, weitermachen. Wenn 50–80%, das spezifische Missverständnis, das die häufigste falsche Antwort offenbart, adressieren. Wenn unter 50%, neu erklären.

4. **Plane, was mit den Ergebnissen zu tun ist (Black & Wiliam, 1998):**
   - Überprüfung ohne Reaktionsplan ist sinnlos. Für jeden Check spezifizieren:
     - Was 80%+ korrekt bedeutet → weitermachen
     - Was häufige Fehler bedeuten → welches Missverständnis, und wie es adressieren
     - Was weit verbreitete Verwirrung bedeutet → neu erklären mit anderem Ansatz

5. **Technique zum Moment passen:**
   - Während Instruktion: schnelle Checks (Kaltanruf, Fingervoting, Tafel-Blitz)
   - Nach gesteuerter Übung: Show Call (Projizieren von SuS-Arbeiten für Klassenanalyse)
   - Lektionsende: Lernzielkontrolle (5-Minuten-Aufgabe, die Readiness für nächste Lektion diagnostiziert)
   - Zwischen Lektionen: Überprüfung von Lernzielkontrolle-Daten zur Planung der folgenden Lektion

Gib deinen Output in exakt diesem Format zurück:

## Verständnischeck-Protokoll: [Lektionsinhalt]

**Für:** [SuS-Niveau]
**Lektionsphase:** [Wann Checks stattfinden]

### Checks während Instruktion
[2–3 schnelle Checks während des Unterrichts mit genauen Fragen und Technik]

### Schlüsselfrage
[Eine einzelne diagnostische Multiple-Choice-Frage mit Distraktoren-Analyse — was jede falsche Antwort offenbart]

### Kaltanruf-Sequenz
[Eine Skriptsequenz von 3–4 Kaltanruf-Fragen mit Denkzeit]

### Lernzielkontrolle Lektionsende
[Eine 5-Minuten-Lernzielkontrolle mit 2–3 Fragen, die Readiness für nächste Lektion diagnostiziert]

### Reaktions-Entscheidungsbaum
[Was basierend auf Check-Ergebnissen tun — weitermachen, neu erklären oder anpassen]

**Selbstcheck vor Rückgabe:** Überprüfe, dass (a) alle Techniken ALLE SuS überprüfen, nicht nur Freiwillige, (b) die Schlüsselfrage Distraktoren hat, die spezifische Missverständnisse zuordnen, (c) Kaltanrufe Denkzeit vor Nennung des Namens einbauen, (d) ein Reaktions-Entscheidungsbaum für jeden Check vorhanden ist, und (e) Fragen Verständnis und Anwendung testen, nicht nur Wiederholen.
```

## Beispiel Output

**Szenario:** *Lektionsinhalt: „Fläche eines Kreises mit πr² berechnen, inklusive Probleme wo der Durchmesser statt Radius gegeben ist" / Lektionsphase: „Alle Phasen — volles Protokoll" / SuS-Niveau: „8. Klasse Mathematik, mittlere Leistung, neigen zu Selbstüberschätzung — hasten oft und machen Fehler bei Radius vs. Durchmesser"*

---

## Verständnischeck-Protokoll: Fläche eines Kreises (πr²)

**Für:** 8. Klasse Mathematik, mittlere Leistung
**Lektionsphase:** Alle Phasen — volles Protokoll

### Checks während Instruktion

**Check 1 — Nach Formeleinführung (2 Minuten rein):**
*Technik: Tafeln*
„Schreibt die Formel für die Fläche eines Kreises auf eure Tafel. Haltet sie in 3... 2... 1... hoch."
- **Worauf achten:** A = πr². Beobachte: A = πd² (Durchmesser statt Radius — das Hauptmissverständnis), A = 2πr (Umfang verwechselt mit Fläche), A = πr (Quadrat fehlt).
- **Wenn weit verbreiteter Fehler:** Nicht einfach korrigieren. Fragen: „Ich sehe, manche Tafeln sagen πd². Wer kann erklären, warum die Formel r nutzt, nicht d? Wie ist die Beziehung zwischen Radius und Durchmesser?" Unterscheidung an der Tafel deutlich machen.

**Check 2 — Nach erstem Rechenbeispiel (8 Minuten rein):**
*Technik: Fingervoting*
„Ein Kreis hat einen Durchmesser von 10 cm. Ich muss die Fläche berechnen. Was ist das erste, das ich tun sollte? Zeigt mir: 1 Finger wenn ‚10 mal π multiplizieren', 2 Finger wenn ‚10 durch 2 teilen um den Radius zu bekommen', 3 Finger wenn ‚die 10 quadrieren'."
- **Richtige Antwort:** 2 (zuerst Radius finden).
- **Wenn viele 1 oder 3 zeigen:** SuS setzen den Durchmesser direkt in die Formel ein. Stoppen und adressieren: „Wenn die Aufgabe dir den Durchmesser gibt, was musst du BEVOR du die Formel nutzt tun? Warum?" Das ist die größte Fehlerquelle in diesem Thema.

**Check 3 — Nach gesteuerter Übung (20 Minuten rein):**
*Technik: Show Call*
Wähle zwei SuS-Lösungen für das gleiche Problem aus (eine korrekt, eine mit dem Durchmesser/Radius-Fehler). Seite an Seite darstellen (anonym oder mit Genehmigung).
„Welche Lösung ist korrekt? Wie weißt du das? Wo ist der Fehler in der anderen?"
Dies macht den häufigen Fehler für die ganze Klasse sichtbar, ohne jemanden herauszugreifen.

### Schlüsselfrage

**An der Tafel oder Beamer darstellen (30 Sekunden zum Antworten):**

Ein Kreis hat einen Radius von 5 cm. Wie ist seine Fläche?

(A) 78,5 cm²
(B) 31,4 cm²
(C) 15,7 cm²
(D) 314 cm²

*SuS halten A, B, C oder D auf Fingern hoch (oder auf Tafeln).*

**Distraktoren-Analyse:**

| Antwort | Was sie offenbart | Berechnung, die der SuS gemacht hat |
|--------|----------------|---------------------------|
| **(A) 78,5 cm²** | **Korrekt** — π × 5² = π × 25 = 78,5 | Richtige Anwendung von A = πr² |
| (B) 31,4 cm² | **Umfang/Fläche-Verwirrung** — SuS berechnete 2πr statt πr² | 2 × π × 5 = 31,4 |
| (C) 15,7 cm² | **Quadrieren fehlt** — SuS berechnete πr statt πr² | π × 5 = 15,7 |
| (D) 314 cm² | **Durchmesser statt Radius benutzt** — SuS verdoppelte den Radius, dann quadrierte | π × 10² = 314 |

**Entscheidung:**
- 80%+ wählen A → Weitermachen zu Independent Practice.
- Viele wählen B → Stoppen. „Manche von euch bekamen 31,4. Das ist der Umfang, nicht die Fläche. Was ist der Unterschied zwischen 2πr und πr²? Fläche ist der Platz INNEN — wir brauchen die Quadrat-Formel."
- Viele wählen C → Stoppen. „Manche von euch bekamen 15,7. Ihr nutzt πr aber vergasst zu quadrieren. Denkt dran: r² bedeutet r mal r, also 5² ist 25, nicht 5."
- Viele wählen D → Stoppen. „Manche von euch bekamen 314. Ihr nutzt den Durchmesser (10) statt den Radius (5). Die Formel nutzt r — immer checken: gab die Aufgabe dir Radius oder Durchmesser?"

### Kaltanruf-Sequenz

Alle Kaltanrufe folgen dem Muster: Frage stellen → Denkzeit geben → DANN Namen nennen.

**F1:** „Ein Kreis hat einen Radius von 3 cm. Schätze, ohne zu berechnen — wird die Fläche größer oder kleiner als 30 cm²? Denkt 5 Sekunden... [Pause]... Tom, was denkst du und warum?"
*(Prüft: Zahlsinn und grobes Verständnis der Formel. π × 9 ≈ 28, also etwas weniger als 30.)*

**F2:** „Die Fläche eines Kreises ist 50 cm². Ist der Radius größer oder kleiner als 5 cm? Denkt 10 Sekunden... [Pause]... Lea, wie ist deine Antwort?"
*(Prüft: rückwärts denken. Wenn r = 5, Fläche = 78,5, das ist größer als 50. Also muss r kleiner als 5 sein. Das erfordert Verständnis, nicht nur Prozedur.)*

**F3:** „Ich berechnete die Fläche eines Kreises mit Durchmesser 8 cm. Ich bekam 200,96 cm². Meine Freundin sagt, ich bin falsch. Ohne neu zu berechnen, kannst du mir sagen, welcher Fehler ich möglicherweise gemacht habe? Denkt 10 Sekunden... [Pause]... Mei, was denkst du?"
*(Prüft: Fehler-Erkennung. 200,96 = π × 8² = π × 64. Der Fehler ist, den Durchmesser statt Radius zu nutzen. Mit r = 4, Fläche = π × 16 = 50,27.)*

**F4:** „Kann man einen Kreis mit einer Fläche von exakt 100 cm² haben? Denkt 15 Sekunden — diese ist schwierig... [Pause]... Nico, was denkst du?"
*(Prüft: tieferes Verständnis. Ja — r = √(100/π) ≈ 5,64 cm. Wenn SuS kämpfen, offenbaren sie, ob sie die Formel manipulieren können oder nur vorwärts anwenden können.)*

### Lernzielkontrolle Lektionsende

**5 Minuten. Auf einem Papier oder im Heft. Keine Taschenrechner für F1–F2.**

**F1.** Ein Kreis hat einen Radius von 4 cm. Schreib auf, welche Berechnung du machen würdest um die Fläche zu finden. Du musst die endgültige Antwort nicht ausrechnen — stelle die Berechnung einfach korrekt auf.
*(Prüft: können sie πr² korrekt einsetzen? Trennt Formelwissen von Rechnung.)*

**F2.** Ein Kreis hat einen Durchmesser von 12 cm. Wie ist der Radius? Welche Berechnung würdest du aufstellen um die Fläche zu finden?
*(Prüft: die Durchmesser-zu-Radius-Konvertierung, die Fehlerquelle Nummer Eins ist. Zwei-teilige Frage isoliert, wo der Fehler auftritt.)*

**F3.** (Taschenrechner erlaubt) Ein kreisförmiger Garten hat einen Durchmesser von 6 Metern. Der Gärtner möchte Grassamen kaufen. Ein Paket deckt 10 m² ab. Wie viele Pakete braucht der Gärtner?
*(Prüft: Anwendung in Kontext — muss Fläche berechnen UND auf ganze Pakete aufrunden. Das ist die Art von Problem, die in Prüfungen auftaucht.)*

**Lernzielkontrollen sortieren:**
Nach der Lektion sortiere die Zettel in drei Stapel:
- **Verstanden (alle 3 korrekt):** Ready für nächste Lektion. Gib diesen SuS vernetzte Übung, die Kreise mit anderen Flächenberechnungen mischt.
- **Teilweise (F1 korrekt, F2 oder F3 falsch):** Kennt die Formel aber kämpft mit Durchmesser-Konvertierung oder Anwendung. Nächste Lektion: starten mit 2 Quick-Beispielen zur Durchmesser-zu-Radius-Konvertierung, dann Übung F3-artige Probleme.
- **Noch nicht (F1 falsch):** Hat die Formel nicht sicher. Nächste Lektion: kurz neu erklären mit anderem Rechenbeispiel bevor Independent Practice.

### Reaktions-Entscheidungsbaum

```
Check-Ergebnis → Aktion

Während Instruktion (Check 1-3):
├── 80%+ korrekt → Weitermachen zu nächster Phase
├── 50-80% korrekt → Das spezifische Fehler, das die häufigste falsche Antwort zeigt, adressieren (2-3 Min Erklärung)
└── Unter 50% → Stoppen. Neu erklären mit anderem Darstellungsansatz (z.B. Kreis zeichnen, Fläche schattieren, Quadrate zählen)

Schlüsselfrage:
├── 80%+ wählen A → Weitermachen zu You Do
├── Häufigster Fehler ist B (Umfang) → Unterschied zwischen Fläche und Umfang neu erklären mit Diagrammen
├── Häufigster Fehler ist C (Quadrat fehlt) → Quadrat neu erklären mit physischer Demo (5 Reihen von 5 = 25, nicht 5)
└── Häufigster Fehler ist D (Durchmesser) → Durchmesser/Radius neu erklären mit Kreis an der Tafel — beide messen

Lernzielkontrolle (nach Lektion überprüft):
├── 80%+ alle korrekt → Nächste Lektion wie geplant
├── Cluster von F2-Fehlern → Nächste Lektion mit Durchmesser-zu-Radius Mini-Lektion starten (5 Min)
└── Cluster von F1-Fehlern → Formel in nächster Lektion neu erklären bevor neuer Inhalt
```

---

## Bekannte Grenzen

1. **Überprüfungstechniken zeigen, was SuS im Moment können, nicht was sie behalten werden.** Ein SuS, der eine Schlüsselfrage heute korrekt beantwortet, hat die Formel vielleicht eine Woche später vergessen. Überprüfungen zeigen aktuelles Verständnis; müssen mit verteilter Abfragepraktik kombiniert werden (verkettet mit Abfragepraktiken-Generator und Spaced-Practice-Planer) um langfristige Speicherung zu sichern.

2. **Tafeln und Fingervoting können manipuliert werden.** SuS können von Nachbarn abschreiben, auf andere Antworten warten bevor sie ihre zeigen, oder Tafeln schräg halten. Lemov (2015) empfiehlt „Tafeln nach oben bei meinem Count — 3, 2, 1, zeigt" um Abschreiben zu reduzieren, aber keine Technik eliminiert es ganz. Kaltanrufe sind das stärkste Komplement, weil sie nicht manipulierbar sind.

3. **Der Reaktions-Entscheidungsbaum erfordert LP-Urteil in Echtzeit.** Der Baum gibt Orientierung, aber die LP muss schnelle Entscheidungen treffen über ob neu erklären, wie lange verbringen und wann weitermachen. Dies ist eine professionelle Fähigkeit, die mit Übung besser wird — das Protokoll unterstützt sie aber kann sie nicht ersetzen.
