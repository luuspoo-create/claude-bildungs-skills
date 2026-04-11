---
# AGENT SKILLS STANDARD FIELDS (v2)
name: dialogische-gespraechszuege-generator
description: "Generiere Folgezüge, die das Denken der SuS nach einer Schüleräusserung vertiefen. Einsetzen, wenn eine SuS etwas Wertvolles sagt und die LP den Dialog vertieft."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-fragetechniken/dialogische-gespraechszuege"
skill_name: "Generator für dialogische Gesprächszüge"
domain: "schule-fragetechniken"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Mercer (2000) — Words and Minds: how we use language to think together"
  - "Alexander (2008, 2020) — Towards Dialogic Teaching: rethinking classroom talk"
  - "Michaels et al. (2008) — Deliberative discourse idealized and realized: accountable talk in the classroom"
  - "Resnick et al. (2015) — Accountable talk: instructional dialogue that builds the mind"
  - "Cazden (2001) — Classroom Discourse: the language of teaching and learning"
input_schema:
  required:
    - field: "sus_aeusserung"
      type: "string"
      description: "Die genaue Äusserung der SuS, auf die die LP folgen möchte"
    - field: "lernziel"
      type: "string"
      description: "Was die SuS verstehen oder können sollen"
    - field: "fachkontext"
      type: "string"
      description: "Fachbereich und Thema"
  optional:
    - field: "sus_niveau"
      type: "string"
      description: "Klassenstufe und verbale Sicherheit"
    - field: "sus_profile"
      type: "array"
      description: "Sprachniveau, Diskussionssicherheit, kulturelle Faktoren"
    - field: "antwort_qualitaet"
      type: "string"
      description: "Bewertung der Antwort: korrekt, teilweise korrekt, inkorrekt, unklar oder oberflächlich"
    - field: "klassenkontekt"
      type: "string"
      description: "Plenum, Kleingruppe oder 1:1; Phase der Stunde"
output_schema:
  type: "object"
  fields:
    - field: "gesprächszuege"
      type: "array"
      description: "3-5 Folgezüge mit exaktem Wortlaut, Typbezeichnung und Begründung"
    - field: "auswahlhilfe"
      type: "string"
      description: "Anleitung zur Auswahl des passenden Zuges"
    - field: "dialog_vertiefung"
      type: "object"
      description: "Wie der Dialog nach jedem Zug fortgeführt werden kann"
    - field: "vermeidbare_zuege"
      type: "string"
      description: "Strategien, die kontraproduktiv wären"
chains_well_with:
  - "sokratische-fragenfolge"
  - "diskussionsformat-auswahl"
  - "checking-for-understanding-protocol-designer"
  - "think-aloud-script-generator"
teacher_time: "2 Minuten"
tags: ["dialogisch", "gesprächszüge", "umformulierung", "klassengespräch", "rechenschaftspflichtige-rede"]
---

# Generator für dialogische Gesprächszüge

## Was dieser Skill macht

Nimmt eine spezifische Schüleräusserung während eines Klasse ngesprächs und generiert hochwertige Folgezüge der Lehrperson — Formulierungen, die das Denken vertiefen, Begründungen einfordern, weitere Stimmen einbinden oder Annahmen hinterfragen. Jeder Zug wird nach Typ gekennzeichnet (Umformulierung, Begründungseinfordern, Partizipation einladen, Herausforderung, Anknüpfung), mit einer Begründung für die Angemessenheit in diesem Moment. KI ist hier wertvoll, weil dialogisches Unterrichten spontane Entscheidungen erfordert — entscheidungen, die von der gleichzeitigen Analyse der Schülerantwort, des Lernziels, der Raumdynamik und einem Repertoire produktiver Redewendungen abhängen. Selbst erfahrene Lehrpersonen fallen auf Evaluation ("Gute Antwort!") oder Weiterleitung zurück, statt die Äusserung als Sprungbrett für tiefere kollektive Überlegungen zu nutzen.

## Evidence Foundation

Mercer (2000) führte das Konzept des "Interthinking" ein — die Idee, dass Dialog nicht nur Kommunikation, sondern ein Werkzeug zum gemeinsamen Denken ist. Er unterschied drei Gesprächstypen: disputativ (Uneinigkeit ohne Begründung), kumulativ (unkritische Zustimmung) und explorativ (kritischer, konstruktiver Umgang mit Belegen und Reasoning). Nur exploratives Sprechen führt konsistent zu Lerngewinnen. Alexander (2008, 2020) baute darauf auf und identifizierte fünf Prinzipien dialogischen Unterrichts: kollektiv (gemeinsames Lernen), reziprok (gegenseitiges Zuhören), unterstützend (freie Äusserung ohne Angst), kumulativ (Anknüpfung an Vorbeiträge), zielgerichtet (auf Lernziele ausgerichtet). Michaels et al. (2008) konkretisierten dialogisches Unterrichten in spezifischen, trainierbaren "Redewendungen": Umformulierung ("Du sagst also..."), Begründungseinfordern ("Warum denkst du das?"), Partizipation ("Wer kann ergänzen?"), Herausforderung ("Wer sieht das anders?"). Resnick et al. (2015) zeigten, dass systematische Nutzung dieser rechenschaftspflichtigen Redewendungen signifikante Lerngewinne brachte — besonders bei benachteiligten SuS. Cazden (2001) identifizierte das dominante Unterrichtsmuster IRE (Initiation-Response-Evaluation) und zeigte, dass die Ersetzung von Evaluation durch Folgezüge die Gesprächsqualität radikal verändert.

## Input-Schema

Die LP muss angeben:
- **SuS-Äusserung:** Wort für Wort oder paraphrasiert. *z.B. "Der Charakter ist egoistisch, weil sie das Essen nicht geteilt hat" / "Ich glaube, die Antwort ist 42, weil ich 6 mal 7 genommen habe" / "Photosynthese ist, wenn Pflanzen Sonnenlicht essen"*
- **Lernziel:** Was die SuS verstehen sollen. *z.B. "SuS sollen verstehen, dass Charaktermotivation komplex ist und vom Kontext geprägt" / "SuS können die Beziehung zwischen Lichtenergie und chemischer Energie in der Photosynthese erklären"*
- **Fachkontext:** Fachbereich und Thema. *z.B. "9. Klasse Deutsch — Charakteranalyse in 'Tschick'" / "7. Klasse Biologie — Photosynthese"*

Optional (vom Kontextsystem):
- **SuS-Niveau:** Klassenstufe und verbale Sicherheit
- **SuS-Profile:** Sprachniveaus, Diskussionssicherheit, kulturelle Faktoren
- **Antwortqualität:** Einschätzung (korrekt, teilweise korrekt, inkorrekt, unklar, oberflächlich)
- **Klassenkkontext:** Plenum, Kleingruppe oder 1:1

## Prompt

```
Du bist eine Expertin für dialogisches Unterrichten und Klassengespräche mit tiefem Wissen über Mercers (2000) Interthinking-Framework, Alexanders (2008, 2020) dialogische Unterrichtsprinzipien und Michaels et al.s (2008) rechenschaftspflichtige Redewendungen. Du verstehst, dass die Reaktion der LP auf einen Schülerbeitrag der kritischste Moment ist — sie entscheidet, ob das Denken vertieft oder beendet wird.

Deine Aufgabe ist es, hochwertige Folgezüge für diese Situation zu generieren:

**SuS-Äusserung:** {{sus_aeusserung}}
**Lernziel:** {{lernziel}}
**Fachkontext:** {{fachkontext}}

Folgende optionale Kontexte können zur Verfügung stehen. Nutze, was vorhanden ist; ignoriere fehlende Felder.

**SuS-Niveau:** {{sus_niveau}} — nicht angegeben: generiere Züge für typisch sichere Schüler der Sekundarstufe 1.
**SuS-Profile:** {{sus_profile}} — nicht angegeben: nimm eine gemischte Klasse mit sicheren und zögerlichen Sprechern an.
**Antwortqualität:** {{antwort_qualitaet}} — nicht angegeben: analysiere die Antwort selbst.
**Klassenkkontext:** {{klassenkkontext}} — nicht angegeben: nimm ein Plenum an.

Wende diese Prinzipien an:

1. **Breche das IRE-Muster auf (Cazden, 2001):**
   - Das Default-Muster ist: Initiation (LP fragt) → Response (SuS antwortet) → Evaluation (LP sagt "Gut" oder "Nicht ganz").
   - NIEMALS Züge generieren, die nur evaluieren ("Gute Antwort!", "Noch nicht ganz").
   - Stattdessen Züge, die die Äusserung NUTZEN, um das Denken vorwärts zu treiben.

2. **Nutze spezifische Redewendungstypen (Michaels et al., 2008):**
   - **Umformulierung:** Idee wiederholen zur Verständnissicherung. "Du sagst also..." / "Lass mich sehen, ob ich dich verstanden habe..."
   - **Begründungseinfordern:** Student soll erklären, WARUM. "Was macht dich da so sicher?" / "Wie kommst du zu diesem Ergebnis?"
   - **Partizipation einladen:** Andere SuS in Dialog einbeziehen. "Wer stimmt zu oder sieht das anders?" / "Kann jemand ergänzen?"
   - **Herausfordern:** Gegenbeispiel, Komplikation oder Alternative einführen. "Was würde jemand sagen, der das anders sieht?" / "Aber was ist mit...?"
   - **Anknüpfen:** Idee mit Lernziel oder anderem Konzept verbinden. "Das verbindet sich mit etwas, das wir letzte Woche schauten..." / "Du hast gerade das Kernprinzip identifiziert..."

3. **Passe Zug zur Antwortqualität an:**
   - KORREKT aber OBERFLÄCHLICH: Begründung einfordern oder herausfordern zur Vertiefung.
   - TEILWEISE KORREKT: Umformulieren zur Klärung, dann das Fehlende fordern.
   - INKORREKT: Nicht negativ evaluieren. Stattdessen umformulieren, dann mit Gegenbeispiel herausfordern oder andere einladen.
   - UNKLAR: Tentativ umformulieren ("Meinst du...?"), um Gelegenheit zur Klarstellung zu geben.
   - EXZELLENT: Anknüpfen und andere zum Engagement einladen.

4. **Fördere exploratives Sprechen (Mercer, 2000):**
   - Das Ziel ist nicht, eine "richtige Antwort" herauszulocken — es ist, einen Dialog zu schaffen, wo die Klasse zusammen denkt.
   - Jeder Zug soll den Dialog offen halten, nicht beenden.
   - Züge sollen die Normen explorativen Sprechens modellieren: Begründen, Alternativen erwägen, auf anderen aufbauen.

5. **Wahre Alexanders (2008) fünf Prinzipien:**
   - Kollektiv: Züge sollten die Gesamtklasse einbeziehen, nicht nur den sprechenden Schüler.
   - Reziprok: Züge sollten echtes Zuhören zeigen, nicht nur Warten auf die richtige Antwort.
   - Unterstützend: Züge sollten psychologische Sicherheit bewahren — falsche Antworten sind wertvolle Dialogbeiträge.
   - Kumulativ: Züge sollten diesen Beitrag mit vorherigen verbinden.
   - Zielgerichtet: Züge sollten zum Lernziel steuern, ohne Zwang.

Gib dein Output in genau diesem Format:

## Dialogische Gesprächszüge: [Kurzbeschreibung der Situation]

**Die SuS sagte:** [Die Äusserung]
**Lernziel:** [Das Lernziel]
**Analyse:** [Deine Einschätzung: korrekt/teilweise/inkorrekt/unklar/oberflächlich, mit kurzer Erklärung]

### Empfohlene Züge

Für jeden Zug (4–5):
- **Zug [N]: [Typ]**
  **Sag:** "[Exakte Worte, die die LP sagen könnte]"
  **Warum dieser Zug:** [Warum er passt — was er im Denkprozess bewirkt]
  **Wahrscheinliche SuS-Reaktion:** [Was der Student oder die Klasse wahrscheinlich sagt/tut]
  **Folgezug:** [Was nach der erwarteten Reaktion folgt]

### Auswahlhilfe

[Wann welchen Zug wählen — z.B. "Zug 1, wenn die Klasse still ist und du die Idee sichtbar machen musst..."]

### Zu vermeidende Züge

[1–2 Züge, die kontraproduktiv wären, und warum]

**Selbstkontrolle vor Output:** Überprüfe, dass (a) kein Zug nur evaluiert ("Gut!", "Nicht ganz"), (b) mindestens ein Zug andere SuS einbezieht, (c) mindestens ein Zug Begründung fordert, (d) die Züge zusammen zum Lernziel steuern, (e) die Wortwahl natürlich klingt — wie etwas, das eine LP im Klassenzimmer wirklich sagen würde.
```

## Beispiel-Output

**Szenario:** *SuS-Äusserung: "Der Charakter ist egoistisch, weil er das Essen nicht geteilt hat" / Lernziel: "SuS verstehen, dass Charaktermotivation in 'Tschick' komplex ist — geprägt von Angst, Überlebensmechanismen und dem Zusammenbruch sozialer Normen, nicht von einfachen Persönlichkeitsmerkmalen" / Fachkontext: "9. Klasse Deutsch — Charakteranalyse in 'Tschick', Kapitel 5"*

---

## Dialogische Gesprächszüge: Charaktermotivation in Tschick

**Die SuS sagte:** "Der Charakter ist egoistisch, weil er das Essen nicht geteilt hat."
**Lernziel:** SuS verstehen, dass Charaktermotivation komplex ist — geprägt von Angst, Überlebenstrieb und dem Zusammenbruch sozialer Normen, nicht von Persönlichkeitstraits.
**Analyse:** Teilweise korrekt — die SuS hat eine relevante Handlung identifiziert (Essen nicht teilen) und ein Charakterurteil gefällt, aber die Analyse ist oberflächlich. "Egoistisch" ist ein Persönlichkeitslabel, keine Motivationserklärung. Die Antwort berücksichtigt keinen Kontext (Überlebenssituation, Angst, Gruppendynamik) und behandelt Charakter als Eigenschaft statt als Produkt von Umständen. Das ist genau die Antwort, die Druck und Herausforderung braucht, um zum Lernziel zu führen.

### Empfohlene Züge

**Zug 1: Umformulierung + Begründungseinfordern**
**Sag:** "OK, du sagst also, dass Essen nicht zu teilen eine egoistische Handlung ist. Das ist eine interessante These. Was macht dich da sicher, dass es Egoismus ist — und nicht etwas ganz anderes?"
**Warum dieser Zug:** Umformulierung validiert die SuS und macht die These für die Klasse sichtbar. Der Druck ("und nicht etwas ganz anderes?") öffnet Raum für alternative Deutungen, ohne die SuS als "falsch" zu etikettieren. Es zeigt, dass die LP die Idee ernst nimmt.
**Wahrscheinliche SuS-Reaktion:** "Weil er genug Essen hatte und sich trotzdem weigerte, es mit anderen zu teilen" — die SuS wird die These mit mehr Textbelegen verteidigen, meist an der Oberflächenebene bleibend.
**Folgezug:** "Er hatte genug und weigerte sich. Lass mich auf das Wort 'weigerte' drücken — zu diesem Punkt im Buch, wie ist die Situation? Was fühlen alle? Trauen sie sich untereinander?" Das lenkt zum Kontext hin (Angst, Zusammenbruch von Normen), ohne die SuS-Beobachtung zu verwerfen.

**Zug 2: Herausfordern mit Gegenbeispiel**
**Sag:** "Interessant. Lass mich dir eine andere Lesart vorschlagen: Stell dir vor, du bist im Auto. Ihr habt kein Essen für Tage. Du weisst nicht, ob es morgen etwas gibt. Du vertraust den anderen nicht. In dieser Situation — ist Essen nicht zu teilen Egoismus oder Überlebenstrieb? Wo ist die Grenze?"
**Warum dieser Zug:** Das führt Kontextfaktoren ein (Angst, Knappheit, Misstrauen), die das Lernziel erfordert. Es ändert nicht, dass die SuS "falsch" ist — es liest dieselbe Handlung unter anderen Bedingungen. Die Frage "Wo ist die Grenze?" ist offen und lädt die Klasse zum Ringen mit Komplexität ein.
**Wahrscheinliche SuS-Reaktion:** Manche sagen "immer noch Egoismus", andere "das ist Überleben". Dieser Dissens ist produktiv — genau die Komplexität, die das Lernziel anvisiert.
**Folgezug:** "Wir haben zwei Lesarten — Egoismus und Überlebensmechanismus. Wer findet eine Stelle im Text, die uns hilft zu entscheiden, was der Autor meint?"

**Zug 3: Partizipation einladen**
**Sag:** "Fiona sagt, der Charakter ist egoistisch. Sieht das jemand anders? Gibt es noch eine Art, diese Moment zu lesen?"
**Warum dieser Zug:** Das ist der einfachste und mächtigste Zug für echten Dialog. Es positioniert die SuS-Antwort als eine Interpretation unter mehreren und lädt zum Widerspruch ein — ohne dass die LP selbst widerspricht. Es verteilt das Denken im Raum.
**Wahrscheinliche SuS-Reaktion:** Eine andere SuS könnte eine Alternative anbieten ("Ich denke, er hat Angst, nicht Egoismus") oder zustimmen und Belege hinzufügen. Beide Reaktionen vertiefen den Dialog.
**Folgezug:** Wenn Alternative: "Jetzt haben wir zwei Lesarten — egoistisch und ängstlich. Fiona, was hältst du davon? Ist Egoismus anders als Angst?" Wenn Zustimmung: "OK, alle sehen ihn als egoistisch. Lass mich einen Gegenpunkt einwerfen: Wäre es egoistisch, wenn er wirklich glaube, dass es für alle nicht genug gibt?"

**Zug 4: Anknüpfen + zum Lernziel leiten**
**Sag:** "Du hast etwas Wichtiges gefunden — die Essen-Szene ist ein Wendepunkt. Aber ich möchte, dass wir das Wort 'egoistisch' näher betrachten. Zu Anfang des Buches teilt derselbe Charakter bereitwillig. Jetzt nicht mehr. Was hat sich verändert — ist er ein anderer Mensch geworden, oder ändert die Situation, wie er sich verhält?"
**Warum dieser Zug:** Dieser Zug baut auf der SuS-Beobachtung auf (die Essens-Szene zählt) und lenkt von Persönlichkeitserklärung zu situativer. Die Frage "Ist er ein anderer Mensch oder hat die Situation ihn verändert?" spricht direkt zum Lernziel — dass Verhalten vom Kontext geprägt ist, nicht nur von Charakter.
**Wahrscheinliche SuS-Reaktion:** SuS teilen sich zwischen "er veränderte sich" und "die Situation verändert alle". Beide Antworten sind produktiv und führen zur Komplexität.
**Folgezug:** "Wenn die Situation alle verändert — was will der Autor uns über die menschliche Natur sagen? Ist Egoismus etwas, das Menschen SIND, oder etwas, das Situationen SCHAFFEN?"

**Zug 5: Begründung mit Textbelegen einfordern**
**Sag:** "Egoismus ist ein starkes Wort. Kannst du mir die genaue Stelle zeigen — die exakten Sätze — die dich zu 'egoistisch' statt z.B. zu 'verängstigt' oder 'verzweifelt' führten?"
**Warum dieser Zug:** Das fordert Belege, während subtil Alternativen einführt. Es modelliert die Fachdisziplin des genauen Lesens — Aussagen über Charaktere müssen im Text verankert sein, nicht in Impressionen. Es zwingt die SuS auch, zurück zum Text zu gehen statt sich auf allgemeine Impressionen zu verlassen.
**Wahrscheinliche SuS-Reaktion:** Die SuS findet eine Stelle (die Klasse analysiert sie dann zusammen) oder merkt, dass die These auf Impression statt auf Beleg basiert.
**Folgezug:** Wenn Stelle gefunden: "Lies sie vor. Schauen wir alle. Unterstützt diese Stelle 'egoistisch' — oder könnten wir anders lesen?" Wenn keine Stelle: "Das ist OK — manchmal ist eine erste Lesart nur eine Impression. Gehen wir zurück und schauen, was der Autor wirklich zeigt."

### Auswahlhilfe

- **Nutze Zug 1 (Umformulierung + Begründung) als Standard** — der vielseitigste und sicherste. Validiert die SuS, macht die Idee öffentlich, öffnet Raum. Gut, wenn die SuS selbstsicher wirkt und die Klasse engagiert.
- **Nutze Zug 2 (Herausfordern)**, wenn die Klasse Debatte verträgt und du schnell zum Lernziel möchtest. Direkter und kann konfrontativ wirken — nutze es, wenn die Klassenkultur Herausforderung trägt.
- **Nutze Zug 3 (Partizipation)**, wenn du siehst, dass andere beitragen wollen oder der sprechende Schüler dominiert. Der schnellste Weg zu echtem KlassenDialog.
- **Nutze Zug 4 (Anknüpfen)**, wenn die Klasse kreist und du zum Lernziel lenken musst. Der direktive Zug — nutze ihn, wenn Dialog steuerung nötig ist, nicht wenn er fliesst.
- **Nutze Zug 5 (Belege fordern)**, wenn die These unbegründet oder vage ist. Lehrt die Fachdisziplin (evidenzgestützte Argumentation) während es analysiert.

### Zu vermeidende Züge

1. **Vermeiden: "Guter Punkt, aber eigentlich ist der Charakter nicht egoistisch — er hat Angst."** Das ist das IRE-Muster maskiert als Dialog. Das "aber eigentlich" negiert das Lob, und die LP liefert die Antwort statt die Klasse denken zu lassen. Die SuS lernt, dass ihr Job ist, zu erraten, was die LP denkt, nicht zu interpretieren.

2. **Vermeiden: "Will noch jemand etwas hinzufügen?"** Das ist zu vage. Es gibt anderen SuS nichts Konkretes zu erwidern. Es signalisiert, dass die LP nach einer anderen Antwort angelt. Vergleich mit Zug 3: "Wer sieht das anders?" — das lädt explizit zu Widerspruch ein und erlaubt SuS, eine Interpretation herauszufordern.

---

## Bekannte Einschränkungen

1. **Die Qualität der Output hängt von der Genauigkeit der erfassten Äusserung ab.** Eine paraphrasierte oder vereinfachte Version der Schüleräusserung führt zu anderen Zü­gen als die exakten Worte. LP sollten versuchen, die genaue Sprache zu erfassen — spezifische Worte offenbaren oft mehr Denken als LP-Paraphrasen.

2. **Dialogische Züge erfordern eine Klassenkultur, die sie unterstützt.** Wenn SuS nicht gewohnt sind, zu Begründungen gedrängt, herausgefordert oder aufgefordert zu werden, auf Peers zu reagieren, können diese Züge bedrohlich wirken. Eine dialogische Klassenkultur zu bauen ist langfristig — LP sollten langsam anfangen, mit Umformulierung (niedrigstes Risiko) und später Druck und Herausforderung hinzufügen. Dieser Skill generiert die Züge, aber kann die Kultur nicht bauen.

3. **Der Generator kann den Raum nicht lesen.** Im echten Klassengespräch hängt die Zug-Auswahl ab von Körpersprache, Tonfall, emotionalem Zustand, Gruppendynamik und hunderten anderen Faktoren, die im Text nicht erfasst sind. Die generierten Züge sind Startpunkte — die LP muss Professional Judgment nutzen. Ein perfekter Zug an einem guten Tag kann kontraproduktiv sein, wenn die Klasse müde oder ängstlich ist.
