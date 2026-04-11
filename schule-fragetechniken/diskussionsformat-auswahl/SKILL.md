---
# AGENT SKILLS STANDARD FIELDS (v2)
name: diskussionsformat-auswahl
description: "Wähle und konfiguriere ein strukturiertes Diskussionsformat passend zum Zweck, Thema und Klassenbereitschaft. Einsetzen bei der Planung von Klassendiskussionen, sokratischen Seminaren oder strukturiertem Debate."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-fragetechniken/diskussionsformat-auswahl"
skill_name: "Wähler für Diskussionsformate & Moderationsanleitung"
domain: "schule-fragetechniken"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Resnick et al. (2015) — Accountable Talk: instructional dialogue that builds the mind"
  - "Michaels et al. (2008) — Deliberative discourse idealized and realized: accountable talk in the classroom"
  - "Howe & Abedin (2013) — Classroom dialogue: a systematic review across four decades of research"
  - "Mercer & Dawes (2014) — The study of talk between teachers and students, from the 1970s to the 2010s"
  - "Alexander (2008) — Towards Dialogic Teaching: rethinking classroom talk"
input_schema:
  required:
    - field: "diskussionszweck"
      type: "string"
      description: "Was die Diskussion erreichen soll — erforschen, argumentieren, Konsens erarbeiten, analysieren"
    - field: "thema_oder_frage"
      type: "string"
      description: "Das spezifische Thema oder die Leitfrage"
    - field: "sus_niveau"
      type: "string"
      description: "Klassenstufe und Erfahrung mit strukturierter Diskussion"
  optional:
    - field: "klassengrösse"
      type: "integer"
      description: "Anzahl SuS — beeinflusst Formateignung"
    - field: "zeit_verfügbar"
      type: "string"
      description: "Minuten für die Diskussion"
    - field: "sus_profile"
      type: "array"
      description: "Sprecherfahrung, Dominanzmuster, DaZ-Bedarf"
    - field: "fachbereich"
      type: "string"
      description: "Fachkontext"
output_schema:
  type: "object"
  fields:
    - field: "empfohlenes_format"
      type: "string"
      description: "Das ausgewählte Format mit Begründung"
    - field: "moderationsanleitung"
      type: "object"
      description: "Schritt-für-Schritt-Anleitung mit Setup, LP-Züge, Timing, Reflexion"
    - field: "redewendungen"
      type: "array"
      description: "Sprechrahmen für SuS während der Diskussion"
    - field: "häufige_fallstricke"
      type: "array"
      description: "Was typischerweise schiefgeht und wie man es verhindert"
chains_well_with:
  - "sokratische-fragenfolge"
  - "dialogische-gesprächszüge"
  - "academic-language-sentence-frame-generator"
  - "schluesselfragen-designer"
teacher_time: "4 Minuten"
tags: ["diskussion", "dialog", "rechenschaftsrede", "formate", "mündlichkeit"]
---

# Wähler für Diskussionsformate & Moderationsanleitung

## Was dieser Skill macht

Wählt das passendste Diskussionsformat für einen gegebenen Zweck, ein Thema und eine Klasse — dann generiert eine komplette Moderationsanleitung einschliesslich Setup-Anweisungen, LP-Züge während der Diskussion, Redewendungen für SuS, Timing und eine Reflexionsstruktur. Formate umfassen Sokratisches Seminar, Harkness-Diskussion, Fishbowl, Think-Pair-Share, Philosophische Stühle und strukturierte akademische Kontroverse. KI ist wertvoll, weil die Formatauswahl erfordert, Diskussionsform auf Diskussionszweck abzustimmen (ein Debattenformat für Konsensbildung ist kontraproduktiv), und effektive Moderation erfordert, LP-Züge im Voraus zu planen — zu wissen, wann eingreifen, wann schweigen, wie umleiten, ohne zu dominieren.

## Evidence Foundation

Resnick et al. (2015) etablierten "rechenschaftspflichtige Rede" als Framework für produktive Diskussion: Rede, die rechenschaftspflichtig gegenüber der Lerngemeinschaft (respektvoll, aufbauend auf anderen), gegenüber Standards der Begründung (evidenzbasiert, logisch kohärent) und gegenüber Wissen (korrekt, begründet) ist. Michaels et al. (2008) konkretisierten rechenschaftspflichtige Rede in LP-Zü­gen — Umformulierung, Begründungseinfordern, Herausfordern, Einladen — die Dialog-Qualität erhalten, ohne dass die LP dominiert. Howe & Abedin (2013) führten eine systematische Übersicht von 225 Studien zu Klassendialog durch und fanden: produktive Diskussion erfordert klare Struktur (nicht "just sprich drüber"), explizite Sprachnormen und echte Fragen mit mehreren gültigen Perspektiven. Alexander (2008) unterschied fünf Sprechtypen (Routine, Rezitation, Unterricht, Diskussion, Dialog) und argumentierte, dass echter Dialog — wo Teilnehmende aufeinander aufbauen zu gemeinsamer Verständigung — selten und wertvoll ist. Mercer & Dawes (2014) identifizierten, dass ohne explizites Unterrichten von Diskussionsfähigkeiten (Regeln, Redewendungen, Strukturen) Klassendiskussion zu disputativ (Aussage gegen Aussage ohne Begründung) oder kumulativ (unkritische Zustimmung) degeneriert.

## Input-Schema

Die LP muss angeben:
- **Diskussionszweck:** Was die Diskussion erreichen soll. *z.B. "Mehrere Perspektiven auf ein kontroverses Thema erforschen" / "Gemeinsame Textinterpretation erarbeiten" / "Pro und Contra zu einer These argumentieren" / "Konsens zur besten Problemlösung finden"*
- **Thema oder Frage:** Die Leitfrage. *z.B. "War der Abwurf der Atombombe auf Hiroshima gerechtfertigt?" / "Was sagt das Ende von 'Tschick' über die menschliche Natur?" / "Sollte die genetische Veränderung menschlicher Embryos erlaubt sein?"*
- **SuS-Niveau:** Klassenstufe und Diskussionserfahrung. *z.B. "9. Klasse, regelmässig Think-Pair-Share, aber noch keine längeren strukturierten Diskussionen"*

Optional (vom Kontextsystem):
- **Klassengrösse:** Anzahl SuS
- **Zeit verfügbar:** Minuten für die Diskussion
- **SuS-Profile:** Sprecherfahrung, Dominanzmuster, DaZ-Bedarf
- **Fachbereich:** Fachdisziplin

## Prompt

```
Du bist eine Expertin für dialogische Pädagogik und Klassendiskussionen mit tiefem Wissen über Resnick et al.s (2015) rechenschaftspflichtiges Sprech-Framework, Michaels et al.s (2008) LP-Redewendungen, Alexanders (2008) Sprechtyp-Taxonomie und praktische Umsetzung strukturierter Diskussionsformate. Du verstehst, dass produktive Diskussion Struktur erfordert, nicht nur Freiheit — und dass die Formatauswahl zum Diskussionszweck passen muss.

Deine Aufgabe ist es, ein Diskussionsformat auszuwählen und zu gestalten für:

**Diskussionszweck:** {{diskussionszweck}}
**Thema/Frage:** {{thema_oder_frage}}
**SuS-Niveau:** {{sus_niveau}}

Folgende optionale Kontexte können zur Verfügung stehen. Nutze, was vorhanden ist; ignoriere fehlende Felder.

**Klassengrösse:** {{klassengrösse}} — nicht angegeben: gestalte für 24–28 SuS. Notiz: Formatanpassung für grössere/kleinere Klassen.
**Zeit verfügbar:** {{zeit_verfügbar}} — nicht angegeben: gestalte für 20–25 Min. Diskussion (plus 5 Min. Setup und 5 Min. Reflexion).
**SuS-Profile:** {{sus_profile}} — nicht angegeben: nimm typische Klasse mit Mix aus sicheren und zögerlichen Sprechern an.
**Fachbereich:** {{fachbereich}} — nicht angegeben: leite vom Thema ab und adaptiere Begründungserwartungen zur Disziplin.

Wende diese evidenzgestützten Prinzipien an:

1. **Passe Format zum Zweck:**
   - **Mehrere Perspektiven erforschen:** Philosophische Stühle, Fishbowl, Sokratisches Seminar
   - **Gemeinsame Interpretation erarbeiten:** Harkness-Diskussion, Sokratisches Seminar
   - **Pro/Contra argumentieren:** Strukturierte Akademische Kontroverse, Debate mit Rollen
   - **Konsens erreichen:** Strukturierte Akademische Kontroverse, Think-Pair-Share-Quadrat
   - **Textanalyse vertiefen:** Sokratisches Seminar, Harkness-Diskussion
   Falsches Format für Zweck unterminiert die Diskussion. Debattenformat für Konsensbildung schafft Gewinner/Verlierer statt geteilter Verständigung.

2. **Sichere universale Partizipation (Mercer & Dawes, 2014):**
   - In Diskussionen mit 10+ SuS sprechen mindestens die Hälfte nicht, wenn die Struktur es nicht erzwingt.
   - Baue Mechanismen ein: Bedenkzeit vor dem Sprechen, Pair-Diskussion vor Plenum, Turn-and-Talk, Rollen, Redewendungen.
   - Monitore Redezeit: Niemand sollte über 15% der Zeit sprechen.

3. **Unterrichte die Redewendungen (Michaels et al., 2008):**
   - SuS brauchen explizite Rahmen für produktive Diskussion:
     - Zustimmung und Erweiterung: "Ich stimme [Name] zu, weil..., und ich würde hinzufügen..."
     - Respektvoller Widerspruch: "Ich sehe das anders, weil..."
     - Klärung einfordern: "Kannst du erklären, was du mit ... meinst?"
     - Aufbauen auf: "Um auf [Name]s Punkt aufzubauen..."
     - Belege bringen: "Der Beleg dafür ist..."
   - Zeige diese durchgehend an. Für Anfänger: verlange ihre Nutzung.

4. **LP-Rolle während Diskussion (Resnick et al., 2015):**
   - Die LP ist MODERATOR, nicht Teilnehmerin. Widerstehe dem Drang, zu evaluieren, zu korrigieren, zu unterrichten.
   - Nutze vier Schlüssel-Züge: Umformulierung ("Du sagst also..."), Begründungseinfordern ("Warum denkst du das?"), Antworten einladen ("Sieht das jemand anders?"), Herausfordern ("Was würde jemand sagen, der anderer Meinung ist?").
   - Die LP sollte maximal 20% der Sprechzeit haben.

5. **Reflexiere den Prozess, nicht nur den Inhalt (Alexander, 2008):**
   - Nach der Diskussion: Reflektiere, WIE SuS diskutierten, nicht nur WAS sie diskutierten.
   - "Wer hat während der Diskussion die Meinung gewechselt? Welches Argument oder welche Evidenz führte zum Wechsel?"
   - "Haben wir alle gehört? Wie können wir nächstesmal besser diskutieren?"

Gib dein Output in genau diesem Format:

## Diskussionsformat: [Formatname]

**Für:** [SuS-Niveau]
**Zweck:** [Diskussionszweck]
**Thema:** [Die Leitfrage]
**Zeit:** [Gesamtzeit inkl. Setup und Reflexion]

### Warum dieses Format

[3–4 Sätze, warum dieses Format über Alternativen gewählt wurde]

### Setup (X Minuten)

[Physische Anordnung, Materialien, zu etablierende Regeln]

### Ablauf

[Schritt-für-Schritt-Anleitung mit Timing für jede Phase]

### LP-Züge während Diskussion

[Spezifische Moderationszüge mit Beispielen — wann eingreifen, wann schweigen, wie umleiten]

### Redewendungen für SuS

[Zu zeigende oder verteilende Diskussionsrahmen]

### Reflexion (X Minuten)

[Wie die Diskussion geschlossen und reflektiert wird — Inhalt und Prozess]

### Häufige Fallstricke

[3–4 typische Probleme mit diesem Format und Prävention]

**Selbstkontrolle:** Überprüfe, dass (a) Format zum Zweck passt, (b) universale Partizipation eingebaut, (c) Redewendungen bereitgestellt, (d) LP-Rolle ist Moderation nicht Evaluation, (e) Reflexion eingebunden, (f) Fallstricke adressiert.
```

## Beispiel-Output

**Szenario:** *Diskussionszweck: "Mehrere Perspektiven auf eine moralisch komplexe Frage erforschen — es gibt keine Einheitsantwort" / Thema: "Ist es je richtig, das Gesetz zu brechen?" / SuS-Niveau: "9. Klasse, regelmässig Think-Pair-Share, aber noch keine längeren Diskussionen mit Struktur" / Zeit: "30 Minuten Gesamt"*

---

## Diskussionsformat: Philosophische Stühle

**Für:** 9. Klasse, erste strukturierte Diskussion
**Zweck:** Mehrere Perspektiven auf eine moralisch komplexe Frage erforschen
**Thema:** "Ist es je richtig, das Gesetz zu brechen?"
**Zeit:** 30 Minuten (5 Setup + 20 Diskussion + 5 Reflexion)

### Warum dieses Format

Philosophische Stühle wurden gewählt, weil der Diskussionszweck ist, mehrere Perspektiven auf eine Frage mit keiner einzigen korrekten Antwort zu erforschen — und weil die SuS Anfängerinnen bei strukturierten Diskussionen sind. Philosophische Stühle bietet physische Struktur (SuS bewegen sich, um ihre Position zu zeigen), die abstrakte Überlegung konkret und sichtbar macht. Sie senken die verbale Einstiegsschwelle: Ein Student kann partizipieren, indem er sich positioniert, bevor er einen Grund artikuliert — weniger einschüchternd als erst zu sprechen. Das Format ist besser als ein Sokratisches Seminar (erfordert mehr Erfahrung mit längeren Dialogen) und besser als strukturierter Debate (weist Positionen zu, statt echte Erkundung zu erlauben). Philosophische Stühle oberflächlich surface die Komplexität, die die LP will, weil SuS zwischen Positionen wechseln können, wenn sie Argumente hören — Meinungswechsel ist ins Format eingebaut.

### Setup (5 Minuten)

**Physische Anordnung:** Freiraum räumen. Drei Zeichen anbringen:
- Linke Wand: "JA — Es ist manchmal richtig, das Gesetz zu brechen"
- Rechte Wand: "NEIN — Es ist nie richtig, das Gesetz zu brechen"
- Mitte: "UNENTSCHLOSSEN / ES KOMMT DRAUF AN"

**Materialien:** Redewendungen an Tafel. Jede SuS erhält kleine Karte zum Notieren der Begründung.

**Regeln (vorlesen und anschreiben):**
1. Zuhöre, um zu verstehen, nicht um zu gewinnen.
2. Sprich gegen die Idee, nicht gegen die Person. "Ich sehe das anders, weil..." statt "Du hast Unrecht."
3. Es ist OK — und beeindruckend — Meinung zu wechseln. Position zu wechseln ist Zeichen von starkem Denken.
4. Jeder spricht mindestens einmal. Ich helfe.
5. Nutze die Redewendungen an der Tafel.

**Erste Positionierung:**
"Lest die Frage: 'Ist es je richtig, das Gesetz zu brechen?' Denkt 30 Sekunden nach — kein Sprechen. Dann bewegt euch zu der Position, die eurem Denken entspricht. Ihr könnt an einem Ende stehen, überall dazwischen, oder in der Mitte, wenn ihr wirklich unentschlossen seid."

*Beobachte die Verteilung.*

### Ablauf

**Phase 1: Erste Positionen (5 Minuten)**
"Ihr habt Positionen eingenommen. Jetzt will ich hören, WARUM ihr steht, wo ihr steht. Ich frage drei — einen aus JA, einen aus NEIN, einen aus UNENTSCHLOSSEN."

- Rufe ein Schüler aus jeder Zone auf.
- Nach jedem: "Will jemand diesen Punkt ergänzen? Stimmt mit diesem Grund zu, aber aus anderem Grund?"
- 90 Sekunden pro Aussage.

**Phase 2: Positionen-übergreifender Dialog (10 Minuten)**
"Jetzt sprechen wir über die Positionen hinweg. Die Regel: du darfst nur sprechen, um auf etwas zu reagieren, das jemand in ANDERER Position sagte. Nutze die Redewendungen."

- LP moderiert, indem sie über Gräben einlädt: "Sarah sagte X. Will jemand aus NEIN-Seite auf diesen Punkt reagieren?"
- Nach jedem Austausch (2–3 Runden): Pause. "Hat jemand gehört, das ihn umstimmt? Falls ja, bewegt jetzt. Ihr müsst nicht erklären."
- Wenn Bewegung: "Was hat dich umgestimmt?" Wenn keine Bewegung nach 3 Runden: Szenario einführen: "Was ist mit: Rosa Parks brach das Gesetz, indem sie nicht aufstand. War sie richtig?" Beobachte Bewegung.

**Phase 3: Finale Positionen (5 Minuten)**
"5 Minuten bleiben für Diskussion. Ich will von SuS hören, die gewechselt haben. Was hat deine Meinung verschoben?"

- Rufe 2–3 Wechsler auf. Frage: "Welches Argument shift­ete dich?"
- Dann: "Ist die Frage für euch einfacher oder komplexer geworden?" 3–4 Antworten.
- "Bewegt zu eurer Endposition. 20 Sekunden."

### LP-Züge während Diskussion

| Moment | LP-Zug | Formulierung |
|--------|--------|-------------|
| Nach Aussage ohne Begründung | **Begründungseinfordern** | "Du sagtest es ist manchmal richtig. Kannst du ein konkretes Beispiel geben und erklären, warum es in diesem Fall richtig ist?" |
| Nach starkem Argument einer Seite | **Herausforderung einladen** | "Das ist ein klares Argument. Will jemand aus der anderen Seite es herausfordern? Was ist das stärkste Gegenargument?" |
| Diskussion wiederholt sich | **Szenario einführen** | "Lass mich einen Fall werfen: [Szenario]. Wo steht ihr JETZT?" |
| Ein Student dominiert | **Umlenken** | "Danke, Marcus. Ich will jemand hören, der noch nicht sprach. Fatima, was ist deine Reaktion?" |
| Student sagt etwas, das andere nicht verstehen | **Umformulieren** | "Lass mich klären. Meinst du, dass...? [Paraphrase]? Stimmt das?" |
| SuS sprechen aneinander vorbei | **Verbinden** | "Aisha, ich denke dein Punkt verbindet sich mit das, was James früher sagte. James, siehst du die Verbindung?" |
| Diskussion läuft gut | **Schweigen** | Nichts sagen. Die besten Diskussionen sind SuS-zu-SuS. Greife nur ein, wenn Dialog staut, unfokussiert wird, oder Stimmen ausgeschlossen. |

**Kritische Regel:** Enthülle deine eigene Position nicht. Sobald du es tust, hören SuS zu denken und versuchen, dir recht zu geben.

### Redewendungen für SuS

*An der Tafel anzeigen:*

**Deine Position äussern:**
- "Ich glaube..., weil..."
- "Meine Position ist..., und mein Beleg ist..."

**Auf jemand anderen reagieren:**
- "Ich stimme [Name] zu, weil..., und ich würde hinzufügen..."
- "Ich sehe das anders als [Name], weil..."
- "Ich stimme teilweise zu — ich denke [Name] hat recht bei..., aber ich stimme nicht zu bei..."

**Klärung einfordern:**
- "Kannst du erklären, was du mit ... meinst?"
- "Kannst du ein konkretes Beispiel geben für...?"

**Komplexität einführen:**
- "Es kommt drauf an, weil in manchen Situationen..., aber in anderen..."
- "Das Gegenargument würde sein..."
- "Was ist mit dem Fall, wo...?"

**Position wechseln:**
- "Ich habe meine Meinung geändert, weil..."
- "Ich dachte früher..., aber jetzt denke ich..., weil..."

### Reflexion (5 Minuten)

**Inhalt-Reflexion (2 Minuten):**
"Ohne dass du deine Position verteidigst — was war das stärkste Argument, das du heute hörtest, von jeder Seite? Nicht das, das du magst — das stärkste."
Rufe 3 SuS auf.

**Prozess-Reflexion (3 Minuten):**
"Jetzt sprechen wir über WIE wir diskutierten, nicht nur WAS."
- "Wem fiel es schwer zu sprechen? Was machte es schwer? Was würde helfen nächstes Mal?"
- "Wer hat Meinung gewechselt? Ist Meinungswechsel Schwäche oder Stärke?"
- "Auf Skala 1–5: wie gut hörten wir einander zu? Ein Ziel für nächstes Mal?"

*Schreib ein Verbesserungsziel auf.*

### Häufige Fallstricke

1. **SuS sammeln sich in JA oder NEIN, Mitte ist leer.** Das bedeutet meist, die Frage ist nicht genuim komplex genug, oder es herrscht sozialer Druck zu starker Position. Fix: normalisiere Mitte. Sag: "Die mutigste Position im Raum könnte die Mitte sein — du hältst zwei Ideen gleichzeitig." Falls alle auf einer Seite: sei Advocate Diaboli mit Szenario.

2. **Diskussion wird Monolog-Serie statt echtem Dialog.** SuS äussern Position, engagieren sich nicht mit, was andere sagten. Fix: erzwinge Positionen-Übergreif-Regel — du darfst nur sprechen, um auf andere Seite zu reagieren. Nutze Redewendungen "Ich stimme/sehe anders [Name], weil..." für direkte Beteiligung.

3. **Dominante Stimmen übernehmen.** In unstrukturierter Diskussion sprechen 3–4 sichere SuS 80%. Fix: Nach je 3 Beiträgen "Ich will jemand hören, der noch nicht sprach." Nutze Think-Pair-Share vor Phase 2, um leisen SuS Zeit zu geben.

4. **LP spricht zu viel.** Das häufigste Moderationsproblem ist, LP füllt Stille, evaluiert, mini-doziert. Setz dir Ziel: sprich höchstens 5mal in 20-Min-Diskussion (exkl. Anweisungen). Zähl deine Eingriffe. Nach 5: Schweigen für Rest.

---

## Bekannte Einschränkungen

1. **Philosophische Stühle funktioniert am besten für binäre oder Spektrum-Fragen.** Fragen mit mehr als zwei klaren Positionen (z.B. "Was war die wichtigste Ursache des 1. Weltkriegs?" mit vier Optionen) brauchen anderes Format — erwäge Strukturierte Akademische Kontroverse oder Vier-Ecken-Variante.

2. **Physische Bewegung kann soziales Risiko sein.** Öffentlich Position zu wechseln bedeutet, öffentlich "falsch gewesen" zu sein. Für SuS mit Sozialangst oder in Klassen mit Mobbing kann das bedrohlich sein. Mitigation: wiederhole, dass Wechsel klug ist. "Position wechseln ist das Intelligenteste, das du tun kannst." Für Klassen, wo das ein Problem bleibt: nutze stilles Positionswechsel (SuS updaten Karte privat) statt Bewegung.

3. **Das Format entwickelt Mündlichkeit und Begründung, garantiert aber nicht Korrektheit.** SuS können überzeugend, aber faktisch falsch argumentieren. Die Reflexion ist der Moment, Fehler zu addressieren — nicht während Diskussion, wo Korrektur Dialog shut. Nach Reflexion sollte die LP Faktenfehler klären: "Während der Diskussion sagte jemand X. Die historische Evidenz zeigt eigentlich Y. Aber dein Reasoning-Prozess war genau richtig."
