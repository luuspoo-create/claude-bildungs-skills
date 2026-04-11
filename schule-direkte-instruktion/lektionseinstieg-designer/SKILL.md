---
# AGENT SKILLS STANDARD FIELDS (v2)
name: lektionseinstieg-designer
description: "Entwerfe einen Lektionseinstieg, der Vorwissen aktiviert und vorheriges Lernen mit heutiger Lektion verbindet. Nutze für Lektion-Starter, Abfrage-Einstiege oder Advance-Organizer."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-direkte-instruktion/lektionseinstieg-designer"
skill_name: "Lektionseinstieg Designer"
domain: "schule-direkte-instruktion"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Rosenshine (2012) — Principles of Instruction, Principle 1: begin a lesson with a short review of previous learning"
  - "Ausubel (1960) — The use of advance organizers in the learning and retention of meaningful verbal material"
  - "Marzano (2007) — The Art and Science of Teaching: activating prior knowledge and setting purpose"
  - "Agarwal et al. (2012) — Classroom-based retrieval practice improves learning with minimal lesson time"
  - "Hattie (2009) — Visible Learning: prior knowledge activation as foundational to new learning"
input_schema:
  required:
    - field: "heutiges_thema"
      type: "string"
      description: "Was wird heute unterrichtet"
    - field: "vorheriges_lernen"
      type: "string"
      description: "Was in vorheriger Lektion oder kürzlich gelehrt wurde das verbindet"
    - field: "schueler_niveau"
      type: "string"
      description: "Klassenstufe"
  optional:
    - field: "einstiegszeit"
      type: "string"
      description: "Verfügbare Minuten für Lektionseinstieg (Standard: 10 Minuten)"
    - field: "sus_profile"
      type: "array"
      description: "Einbehaltungs-Daten, häufige Lücken von letzter Lektion"
    - field: "lektionsziele"
      type: "string"
      description: "Spezifische Lernziele für heute"
    - field: "beurteilungs_daten"
      type: "string"
      description: "Lernzielkontrolle-Daten von letzter Lektion"
output_schema:
  type: "object"
  fields:
    - field: "abfrage_starter"
      type: "object"
      description: "Ein Abfrage-Praktik-Aktivität, die vorheriges Lernen überprüft"
    - field: "vorwissen_bruecke"
      type: "string"
      description: "Wie vorheriges Lernen mit heutigem neuen Inhalt verbunden wird"
    - field: "lernziel_intention"
      type: "string"
      description: "Wie heutiges Lernziel gerahmt wird"
    - field: "einstieg_skript"
      type: "string"
      description: "Ein vollständiges, getimtes Skript für Lektionseinstieg"
chains_well_with:
  - "abfragepraktiken-generator"
  - "instruktionssequenz-builder"
  - "spaced-practice-scheduler"
  - "verstaendnischeck-protokoll"
teacher_time: "3 minutes"
tags: ["lektionseinstieg", "abfrage", "vorwissen", "advance-organizer", "lektionsplanung", "lehrplan21"]
---

# Lektionseinstieg Designer

## Was diese Skill leistet

Generiert einen evidenzgestützten Lektionseinstieg bestehend aus drei Komponenten: eine Abfrage-Praktik-Aktivität, die vorheriges Lernen überprüft, eine Vorwissen-Brücke, die das was SuS bereits wissen mit heutigem neuen Inhalt verbindet, und eine Lernziel-Rahmung, die Zweck setzt ohne alle Antworten zu offenbaren. Der Output ist ein komplettes getimtes Skript für die ersten 8–12 Minuten einer Lektion. KI ist hier besonders wertvoll, weil wirksame Lektionseinstiege müssen gleichzeitig drei Funktionen erfüllen (Abfrage, Aktivierung, Rahmung) in einem engen Zeit-Fenster, und die Abfrage-Fragen müssen sorgfältig gewählt sein, um das wichtigste Vorwissen für heutige Lektion zu zielen — nicht nur „was wir letzte Woche machten" sondern spezifisch das Wissen, auf dem heutige Lektion aufbauen wird.

## Evidenzgrundlage

Rosenshine (2012) platziert tägliche Überprüfung als Principle 1 der wirksamen Instruktion: „Die wirksamsten LP begannen ihre Lektionen mit einer Fünf-zu-acht-Minuten Überprüfung früher abgedeckten Materials." Das dient zwei Zwecken — Einbehalts-Stärkung durch Abfrage-Praktik und Aktivierung der Vorwissen-Schemas, an die neues Lernen angehängt wird. Ausubel (1960) zeigten, dass Advance-Organizer — konzeptuelle Rahmen, die vor neuem Inhalt präsentiert werden — das Lernen deutlich verbessern durch „Ideenional Scaffolding", das hilft Lerner incoming Information organisieren. Marzano (2007) identifizierte, dass neue Inhalte mit Vorwissen zu verbinden ist eine Grund-Instruktions-Strategie, aber nur wenn die Verbindungen explizit gemacht werden (nicht angenommen). Agarwal et al. (2012) zeigten, dass kurze Abfrage-Praktik am Lektion-Anfang Einbehaltung verbessert mit minimalem Zeit-Kosten — sogar 5 Minuten Abfrage erzeugt messbare Vorteile. Hattie (2009) identifizierte Vorwissen als der einzelne stärkste Prädiktor von neuem Lernen — was ein SuS bereits weiß bestimmt was sie als nächstes lernen können.

## Input-Schema

Die LP muss bereitstellen:
- **Heutiges Thema:** Was wird heute unterrichtet. *z.B. „Brüche mit ungleichen Nennern addieren" / „Die Ursachen des Dreißigjährigen Krieges: das Allianz-System" / „Einen ausgewogenen Argument-Absatz mit Gegensätzen schreiben"*
- **Vorheriges Lernen:** Was kürzlich gelehrt wurde das verbindet. *z.B. „Letzte Lektion: äquivalente Brüche. Letzte Woche: Brüche mit gleichen Nennern addieren" / „Letzte Lektion: Ermordung des Archduke Franz Ferdinand"*
- **SuS-Niveau:** Klassenstufe. *z.B. „7. Klasse"*

Optional (vom Kontextsystem bereitgestellt):
- **Einstiegszeit:** Verfügbare Minuten (Standard 10)
- **SuS-Profile:** Einbehaltungs-Daten, Lücken von vorheriger Lektion
- **Lektionsziele:** Spezifische Lernziele für heute
- **Beurteilungs-Daten:** Lernzielkontrolle-Daten von letzter Lektion

## Prompt

```
Du bist ein Experte in Lektion-Design und der Lernwissenschaft mit tiefem Wissen von Rosenshines (2012) Principles of Instruction (Principle 1: tägliche Überprüfung), Ausubels (1960) Advance-Organizer, und Agarwal et al.s (2012) Forschung zu Klassenzimmer-Abfrage-Praktik. Du verstehst, dass der Lektionseinstieg die höchste-leverage 10 Minuten jeder Lektion sind — es bestimmt ob SuS neuen Inhalt zugreifen können durch Aktivierung des Vorwissens auf dem es hängt.

Deine Aufgabe ist, einen Lektionseinstieg für folgende zu entwerfen:

**Heutiges Thema:** {{heutiges_thema}}
**Vorheriges Lernen:** {{vorheriges_lernen}}
**SuS-Niveau:** {{schueler_niveau}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt sein. Nutze, was verfügbar ist; ignoriere Felder, die als „nicht bereitgestellt" gekennzeichnet sind.

**Einstiegszeit:** {{einstiegszeit}} — wenn nicht bereitgestellt, entwerfe für 10 Minuten.
**SuS-Profile:** {{sus_profile}} — wenn nicht bereitgestellt, nimm eine typische Mischklasse an wo manche SuS Schlüssel-Inhalt von vorheriger Lektion vergessen haben.
**Lektionsziele:** {{lektionsziele}} — wenn nicht bereitgestellt, inferiere das Lernziel von heutigem Thema und rahme als klare, SuS-zugewandte Intention.
**Beurteilungs-Daten:** {{beurteilungs_daten}} — wenn bereitgestellt, nutze dies um Abfrage-Fragen auf spezifische Lücken zu zielen. Wenn nicht bereitgestellt, zielen auf das kritischste Vorwissen für heutige Lektion.

Wende diese evidenzgestützten Prinzipien an:

1. **Abfrage-Starter — nicht Neu-Unterricht (Rosenshine, 2012; Agarwal et al., 2012):**
   - Der Einstieg sollte SuS erfordern, früheres Lernen AUS SPEICHER zu ABRUFEN, nicht neu-lesen oder neu-anhören.
   - Fragen sollten das spezifische Vorwissen zielen, auf dem heutige Lektion hängt — wenn heutige Lektion auf äquivalente Brüche baut, rufe äquivalente Brüche ab, nicht alles von letzte Woche.
   - Niedrig-Einsatz: keine Noten, kein Druck. Der Zweck ist Speicher-Stärkung und Lücken-Identifikation.
   - 5–6 Minuten maximum für die Abfrage-Aktivität.

2. **Vorwissen-Brücke — Verbindungen machen explizit (Ausubel, 1960; Marzano, 2007):**
   - Nach Abfrage, verbinde vorheriges Lernen explizit mit heutigem neuem Inhalt.
   - Nicht annehmen SuS sehen die Verbindung. Erkläre sie: „Du zeigtest gerade, dass du äquivalente Brüche finden kannst. Heute brauchen wir diese Fähigkeit weil..."
   - Nutze einen Advance-Organizer wenn angemessen: ein kurzer konzeptueller Rahmen, der zeigt wo heutiger Inhalt in das größere Bild passt.

3. **Lernziel-Intention — Zweck setzen, nicht Prozedur (Hattie, 2009):**
   - Rahme was SuS lernen werden, nicht was sie tun werden. „Am Lektionsende, wirst du Brüche mit verschiedenen Nennern addieren können" (Lernen) ist besser als „Heute werden wir ein Arbeitsblatt zu Bruch-Addition machen" (Aktivität).
   - Halte es kompakt — ein Satz.
   - Optional integriere Erfolgs-Kriterien: „Du wirst wissen du hast es wenn du..."

4. **Pace und Energie:**
   - Der Einstieg setzt den Ton. Halte es zügig, zweckmäßig und interaktiv.
   - SuS sollten innerhalb der ersten 60 Sekunden denken — keine langen LP-Einführungen.
   - Ziel ist Abfrage-Starter um zu beginnen wenn SuS ins Klassenzimmer kommen (ein „Schreib jetzt" an der Tafel).

Gib deinen Output in exakt diesem Format zurück:

## Lektionseinstieg: [Heutiges Thema]

**Für:** [SuS-Niveau]
**Zeit:** [Einstiegs-Dauer]
**Baut auf:** [Vorheriges Lernen]

### An der Tafel wenn SuS reinkommen (Schreib jetzt)
[Die Abfrage-Aktivität an der Tafel — SuS beginnen sofort beim Ankommen]

### Abfrage-Starter (X Minuten)
[Die Abfrage-Fragen, erwartete Antworten, und was wenn SuS kämpfen]

### Vorwissen-Brücke (X Minuten)
[LP-Skript, das Abfrage mit heutigem neuem Inhalt verbindet]

### Lernziel-Intention (X Minuten)
[Wie man heutiges Lernen rahmt — was SuS am Lektionsende können werden und wie sie wissen sie habens]

### Komplettes getimtes Skript
[Der vollständige Einstieg als einzelne getimmte Sequenz, die die LP folgen kann]

**Selbstcheck vor Rückgabe:** Überprüfe dass (a) Abfrage-Starter echtes Abrufen aus Speicher erfordert, nicht neu-lesen, (b) Abfrage-Fragen das spezifische Vorwissen zielen, das heute Lektion braucht, (c) Brücke zwischen Vorwissen und neuem Lernen ist explizit, (d) Lernziel-Intention beschreibt Lernen, nicht Aktivität, und (e) Gesamt-Timing passt in die Einstiegs-Zeit.
```

## Beispiel Output

**Szenario:** *Heutiges Thema: „Brüche mit ungleichen Nennern addieren" / Vorheriges Lernen: „Letzte Lektion: äquivalente Brüche finden (Zähler und Nenner mit der gleichen Zahl multiplizieren). Zwei Lektionen zurück: Brüche mit gleichen Nennern addieren." / SuS-Niveau: „7. Klasse" / Einstiegszeit: „10 Minuten"*

---

## Lektionseinstieg: Brüche mit ungleichen Nennern addieren

**Für:** 7. Klasse Mathematik
**Zeit:** 10 Minuten
**Baut auf:** Äquivalente Brüche (letzte Lektion), Brüche mit gleichen Nennern addieren (2 Lektionen zurück)

### An der Tafel wenn SuS reinkommen (Schreib jetzt)

*An der Tafel oder projiziert bevor SuS ankommen:*

**ABFRAGE-CHALLENGE — keine Notizen, nicht zurückschauen. Tu was du von Speicher kannst.**

1. Finde einen äquivalenten Bruch für 3/4 mit einem Nenner von 12.
2. Finde einen äquivalenten Bruch für 2/5 mit einem Nenner von 15.
3. Berechne: 3/8 + 2/8 = ?
4. Berechne: 5/12 + 4/12 = ?
5. **Denk-Frage:** Warum kannst du die Brüche in F3 und F4 leicht addieren? Was macht sie einfach?

### Abfrage-Starter (5 Minuten)

**Fragen 1–2** zielen äquivalente Brüche — die kritische Vorbedingung für heutige Lektion. Wenn SuS nicht äquivalente Brüche fließend finden können, können sie nicht Brüche mit ungleichen Nennern addieren.

**Fragen 3–4** zielen Brüche mit gleichen Nennern addieren — die Fähigkeit, auf die heutige Lektion aufbaut. SuS brauchen sich erinnern, dass wenn Nenner gleich sind, addiere Zähler und behalte Nenner.

**Frage 5** ist eine Meta-Kognitiv-Brücken-Frage — sie fragt SuS, *warum* gleich-Nenner-Addition leicht ist, das setzt die Challenge für heute auf: was tust du wenn die Nenner NICHT gleich sind?

**Erwartete Antworten:**
1. 9/12 (multipliziere beide durch 3)
2. 6/15 (multipliziere beide durch 3)
3. 5/8
4. 9/12 (was zu 3/4 vereinfacht, aber akzeptiere 9/12)
5. „Weil die Nenner gleich sind, addiere man gerade die oberen Zahlen."

**Wenn SuS mit F1–2 kämpfen (äquivalente Brüche):**
Mach nicht Lektion-Schwellen-Material. Verbring 3 Minuten neu-unterricht: „Was multiplizieren wir mit Zähler UND Nenner um einen äquivalenten Bruch zu machen?" Nutze Tafeln für 2 weitere Übungs-Beispiele. Dann verbinde zur neuen Lektion. Heutige Inhalt macht keinen Sinn wenn äquivalente Brüche nicht sicher sind.

**Wenn SuS mit F3–4 kämpfen (gleich-Nenner-Addition):**
Quick Recap: „Wenn Nenner gleich sind, addieren wir Stücke die gleicher Größe sind. 3 Achtel + 2 Achtel = 5 Achtel, gerade wie 3 Äpfel + 2 Äpfel = 5 Äpfel." Zwei Quick weitere Beispiele, dann weitermachen.

### Vorwissen-Brücke (2 Minuten)

„Hände hoch wenn du F5 korrekt bekamst — du sagtest etwas wie ‚die Nenner sind gleich.' Genau. Wenn Nenner passen, Addition ist straightforward, weil Stücke gleicher Größe sind. Drei Achtel plus zwei Achtel — wir addieren Stücke gleicher Größe.

Aber was wenn ich dich fragte: was ist 1/3 + 1/4? Die Stücke sind VERSCHIEDENER Größen — ein Drittel ist nicht gleich ein Viertel. Du kannst nicht gerade 1 + 1 addieren und 2/7 bekommen — das funktioniert nicht. [Schreib 1/3 + 1/4 ≠ 2/7 an der Tafel.] Also was müssen wir zuerst tun?

[Pause. Lass SuS denken. Manche sehen es.]

Wir brauchen die Nenner gleich zu machen — was bedeutet wir brauchen ÄQUIVALENTE BRÜCHE. Die Fähigkeit du gerade praktiziertest in F1 und F2? Das ist genau was wir jetzt brauchen. Heute verbinden wir zwei Fähigkeiten die du bereits hast — äquivalente Brüche finden UND addieren — um eine neue Art Problem zu lösen."

### Lernziel-Intention (1 Minute)

„Am Lektionsende wirst du Brüche mit verschiedenen Nennern addieren können durch zuerst einen gemeinsamen Nenner zu finden.

Du wirst wissen du habest wenn du ein Problem wie 2/3 + 3/5 alone lösen kannst, und jemandem erklären kannst warum du einen gemeinsamen Nenner brauchst.

Los geht's."

### Komplettes getimtes Skript

| Zeit | Was passiert |
|------|-------------|
| 0:00 | SuS kommen rein. Abfrage-Challenge ist an der Tafel. SuS beginnen sofort — kein Warten, kein Register-Pause. LP begrüßt an der Tür und dirigiert: „Starter ist an der Tafel. Beginne." |
| 0:00–5:00 | SuS arbeiten an F1–5 in Stille (Abfrage-Bedingungen — keine Notizen, keine Diskussion). LP zirkuliert, scannt F1–2 Genauigkeit. Identifiziert 2–3 SuS, die mit äquivalenten Brüchen kämpfen. |
| 5:00–5:30 | „Stifte unten. Lass uns überprüfen." Quick-Fire-Antworten: F1: „9/12 — zeig mir auf Tafeln." F2: „6/15." F3: „5/8." F4: „9/12." 30-Sekunden Scan. |
| 5:30–6:00 | „F5 — warum waren F3 und F4 leicht?" Kaltanruf ein SuS. Achte auf „die Nenner sind gleich." |
| 6:00–8:00 | Vorwissen-Brücke (Skript oben). Schreib 1/3 + 1/4 an der Tafel. Lass SuS das Problem sehen. Verbinde äquivalente Brüche zur neuen Challenge. |
| 8:00–8:30 | Erkläre Lernziel-Intention. Schreib es an der Tafel. |
| 8:30–10:00 | Übergang zu Ich-mache-Phase: „Schaut mir zu wie ich 1/3 + 1/4 löse. Ich werde laut denken so könnt ihr meinen Reasoning folgen." |

---

## Bekannte Grenzen

1. **Der Abfrage-Starter funktioniert nur wenn SuS den Vorbedingungen-Inhalt unterrichtet wurden.** Wenn SuS abwesend waren für die äquivalente-Brüche-Lektion, oder wenn die Vorbedingung nicht wirksam unterrichtet wurde, wird der Abfrage-Starter Lücken offenbaren, die vor heutiger Inhalt adressiert brauchen. Das ist ein Feature (Diagnostik-Information), nicht ein Bug — aber es kann erfordern, dass die LP mehr Zeit auf Überprüfung verbringt, als geplant, komprimierend die Hauptlektion.

2. **„Schreib jetzt"-Starter erfordern konsistent Klassenzimmer-Routinen.** Wenn SuS nicht trainiert sind um sofort beim Ankommen zu arbeiten, werden die ersten 2–3 Minuten verloren zu setzen, Instruktionen und Erinnerungen. Lektionseinstieg-Design nimmt eine etablierte Routine an. Das Aufbauen jener Routine ist eine Klassenzimmer-Management-Aufgabe, nicht eine Lektion-Design-Aufgabe.

3. **Die Vorwissen-Brücke ist Skript für diese spezifische Inhalts-Verbindung.** Wenn die LP nicht die angenommene Unterrichts-Sequenz gefolgt hat (äquivalente Brüche → gleich-Nenner-Addition → ungleich-Nenner-Addition), wird die Brücke nicht landen. LPs müssen verifizieren, dass das „vorheriges Lernen"-Feld genau das reflektiert, was unterrichtet wurde, nicht was geplant wurde.
