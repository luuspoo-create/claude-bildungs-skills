---
# AGENT SKILLS STANDARD FIELDS (v2)
name: sokratische-fragenfolge-generator
description: "Generiere eine sokratische Fragenfolge, die konzeptliches Verständnis durch geleitete Erkundung entwickelt. Einsetzen bei philosophischen Diskussionen, Konzept-Erkundung oder kritischer Untersuchung."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-fragetechniken/sokratische-fragenfolge"
skill_name: "Generator für sokratische Fragenfolgen"
domain: "schule-fragetechniken"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Paul & Elder (2008) — The Miniature Guide to Critical Thinking Concepts and Tools"
  - "Chin (2007) — Teacher questioning in science classrooms: approaches that stimulate productive thinking"
  - "Walsh & Sattes (2005) — Quality Questioning: research-based practice to engage every learner"
  - "Nystrand et al. (1997) — Opening Dialogue: authentic questions and their effects on student engagement"
  - "Dillon (1988) — Questioning and Teaching: a manual of practice"
input_schema:
  required:
    - field: "konzept_zu_entwickeln"
      type: "string"
      description: "Das Konzept oder Verständnis, das durch Fragen entwickelt werden soll"
    - field: "sus_niveau"
      type: "string"
      description: "Klassenstufe und Vertrautheit mit dem Konzept"
    - field: "startpunkt"
      type: "string"
      description: "Was SuS aktuell verstehen oder glaube über das Konzept"
  optional:
    - field: "zielverstaendnis"
      type: "string"
      description: "Das spezifische Verständnis oder die Einsicht, auf die die Folge abzielt"
    - field: "sus_profile"
      type: "array"
      description: "Sprecherfahrung, kulturelle Faktoren zum Hinterfragen"
    - field: "zeit_verfügbar"
      type: "string"
      description: "Minuten für die Fragenfolge"
    - field: "fachbereich"
      type: "string"
      description: "Fach-Kontext für disziplin-passende Fragen"
output_schema:
  type: "object"
  fields:
    - field: "fragenfolge"
      type: "array"
      description: "Geordnete Folge mit Typbezeichnungen und antizipierter Antworten"
    - field: "folgefragen_verzweigungen"
      type: "object"
      description: "Bedingte Folgefragen basierend auf wahrscheinlicher Antwort"
    - field: "moderations_notizen"
      type: "string"
      description: "Dialog-Management — Bedenkzeit, Fehlbehandlung, Momentum halten"
    - field: "sokratisch_vs_leitend"
      type: "string"
      description: "Notizen unterscheidend sokratisch von leitend in dieser Folge"
chains_well_with:
  - "diskussionsformat-auswahl"
  - "dialogische-gesprächszüge"
  - "schluesselfragen-designer"
  - "elaborative-interrogation-generator"
teacher_time: "4 Minuten"
tags: ["fragen", "sokratisch", "kritisches-denken", "dialog", "begründung"]
---

# Generator für sokratische Fragenfolgen

## Was dieser Skill macht

Generiert eine Abfolge von Fragen, die ein Konzept durch Dialog entwickeln — SuS von ihrem aktuellen Verständnis zu tieferen oder diffus-Positionen durch ihr eigenes Reasoning bewegen. Die Folge unterscheidet genuinen sokratischen Fragen (die Reasoning untersuchen, Annahmen surface, Verständnis durch SuS-Denken entwickeln) von leitenden Fragen (die Schüler zu vorgegebener Antwort durch enge Optionen funnel). KI ist wertvoll, weil genuine sokratische Folge gestalten erfordert, mehrere mögliche SuS-Antworten anzutizipieren und Folgefragen für jede vorzubereiten, einen verzweigten Dialog-Baum zu schaffen, den die meisten LP nicht in Echtzeit konstruieren können.

## Evidence Foundation

Paul & Elder (2008) klassifizierten sokratische Fragen in sechs Typen: Fragen zur Klärung, Fragen zu Annahmen, Fragen zu Gründen und Belegen, Fragen zu Standpunkten und Perspektiven, Fragen zu Implikationen und Konsequenzen, Fragen über die Frage selbst. Jeder Typ dient unterschiedlichem Zweck. Chin (2007) untersuchte LP-Fragen im Wissenschafts-Unterricht und fand, dass die meisten LP-Fragen sind niedrig-kognitiv (Recall, 60–80%), obwohl höher-kognitiv-Fragen mehr Reasoning von SuS erzeugen und längere, ausgearbeiteter Antworten. Nystrand et al. (1997) identifizierten "echte Fragen" — Fragen, wo die LP keine vorgegebene Antwort hat — als stärksten Vorhersage von SuS-Engagement und dialogischem Dialog. Walsh & Sattes (2005) zeigten, dass Bedenkzeit (3–5 Sekunden nach Frage) dramatisch Länge und Qualität von Antworten erhöht. Dillon (1988) etablierte, dass Dialog-Qualität mehr von LP's Fähigkeit, auf Schüler-Antworten zu reagieren, abhängt als von der First-Frage — Folgezüge sind wo sokratischer Dialog lebt oder stirbt.

## Input-Schema

Die LP muss angeben:
- **Konzept zu entwickeln:** Die Idee oder das Verständnis, zu bauen. *z.B. "Ob der Ich-Sprecher eines Gedichts dieselbe Person wie der Dichter ist" / "Warum wir nicht einfach mehr Geld drucken, um Armut zu beenden" / "Ob ein wissenschaftliches Experiment 'fair' war"*
- **SuS-Niveau:** Klassenstufe und Vertrautheit. *z.B. "9. Klasse, haben das Gedicht gelesen aber assumieren der Ich-Sprecher = der Dichter" / "8. Klasse, kennen Geld existiert aber haben Ökonomie nicht studiert"*
- **Startpunkt:** Was SuS aktuell denken. *z.B. "SuS assumieren der Dichter beschreibt ihre eigene persönliche Erfahrung" / "SuS denken, mehr Geld drucken würde Armut beenden"*

Optional (vom Kontextsystem):
- **Zielverständnis:** Wohin die Folge abzielen sollte
- **SuS-Profile:** Sprecherfahrung, kulturelle Faktoren zum Fragen
- **Zeit verfügbar:** Minuten für die Folge
- **Fachbereich:** Fachdisziplin

## Prompt

```
Du bist eine Expertin in sokratischer Befragung und dialogischer Pädagogik mit tiefem Wissen über Paul & Elders (2008) sechs Frage-Typen, Chins (2007) Forschung zu produktiven Fragen im Unterricht und Nystrand et al.s (1997) Arbeit zu echten Fragen. Du verstehst die kritische Unterscheidung zwischen sokratischen Fragen (die Denken durch echte Erkundung entwickeln) und leitenden Fragen (die Schüler zu vorgegebener Antwort durch enge Wahl funnel).

Deine Aufgabe ist, eine sokratische Fragenfolge für zu generieren:

**Konzept:** {{konzept_zu_entwickeln}}
**SuS-Niveau:** {{sus_niveau}}
**Startpunkt:** {{startpunkt}}

Folgende optionale Kontexte können zur Verfügung stehen. Nutze, was vorhanden ist; ignoriere fehlende Felder.

**Zielverständnis:** {{zielverstaendnis}} — nicht angegeben: gestalte die Folge, um aktuelles Verständnis zu vertiefen und zu verkomplizieren statt zu einer einzigen "richtigen" Schlussfolgerung zu führen. Die Folge sollte Komplexität surface, nicht zu einer Antwort konvergieren.
**SuS-Profile:** {{sus_profile}} — nicht angegeben: nimm typische mixed-ability Klasse an mit sprachlich sicheren und zögerlichen Sprechern.
**Zeit verfügbar:** {{zeit_verfügbar}} — nicht angegeben: gestalte für 12–15 Minuten Befragung.
**Fachbereich:** {{fachbereich}} — nicht angegeben: leite ab vom Konzept und adaptiere Fragen zu disziplin-passenden Begründungen.

Wende diese evidenzgestützten Prinzipien an:

1. **Nutze Paul & Elders (2008) sechs Frage-Typen strategisch:**
   - **Klärung:** "Was meinst du mit...?" / "Kannst du ein Beispiel geben?" — früh nutzen um geteiltes Verständnis zu etablieren.
   - **Annahmen hinterfragen:** "Was assumierst du, wenn du das sagst?" / "Ist das immer wahr?" — nutzen um unstated Überzeugungen zu surface.
   - **Gründe und Belege:** "Was evidence unterstützt das?" / "Wie weisst du das?" — nutzen um Begründung zu fordern.
   - **Standpunkte und Perspektiven:** "Wie könnte jemand, der nicht agrees, das sehen?" / "Gibt es einen anderen Weg, das zu sehen?" — nutzen um Komplexität einführen.
   - **Implikationen und Konsequenzen:** "Wenn das wahr ist, was folgt?" / "Was würde passieren wenn...?" — nutzen um Reasoning auszudehn.
   - **Fragen über die Frage:** "Warum ist diese Frage wichtig?" / "Was macht diese hart zu antworten?" — nutzen um Bewusstsein zu entwickeln.

2. **Sequenziere von konkret zu abstrakt:**
   - Anfang mit Fragen über spezifische, konkrete Beispiele, die SuS engagement haben.
   - Fortschritt zu Fragen, die Verallgemeinerung, Abstraktion oder Prinzip-Identifikation erfordern.
   - Ende mit Fragen, die entwickelt Verständnis zu neuen Situationen applizieren oder bleibend Unsicherheiten identifizieren.

3. **Unterscheide sokratisch von leitend (Nystrand et al., 1997):**
   - Eine sokratische Frage ist eine, wo die LP genuines Interesse an Schüler-Begründung hat, selbst wenn die LP mehr Wissen hat. Mehrere Antworten sind möglich und die LP folgt Schüler-Denken.
   - Eine leitende Frage enge Optionen, um zu Single-Antwort zu funnel, die die LP im Sinn hat. "Findest du nicht, dass...?" und "Ist nicht wahr, dass...?" sind leitend, nicht sokratisch.
   - Die Folge sollte GENUINELY erkunden sein — SuS sollte fühlen, dass sie denken, nicht raten, was die LP will.

4. **Antizipiere Antworten und verzweige (Dillon, 1988):**
   - Für jede Frage, antizipiere 2–3 wahrscheinlich Schüler-Antworten.
   - Für jede Antwort, provide eine Folgefrage, die auf was die Schüler sagten aufbaut statt zur "richtigen" Pfad zu umlenken.
   - LP's Fertigkeit ist in Reagieren auf WAS SCHÜLER TATSÄCHLICH SAGEN, nicht in Fragen der nächsten Scriptierten Frage unabhängig.

5. **Baue Bedenkzeit ein (Walsh & Sattes, 2005):**
   - Nach jeder Frage, mindestens 3–5 Sekunden warten.
   - Nach einer Schüler-Antwort, 3 Sekunden warten bevor zu reagieren — das prompt oft sie zu elaborieren oder zu self-correct.
   - Stille ist nicht unangenehm — es ist Denk-Zeit.

6. **Nutze genuine Folgezug, nicht Evaluation (Chin, 2007):**
   - Nach einer Schüler-Antwort, NICHT sagen "Gut" oder "Noch nicht ganz." Stattdessen, mit Folgefrage antworten, die ihre Antwort ernst nimmt: "Interessant — so wenn das wahr ist, dann was über...?"
   - Evaluativ Antworten shut Denken. Curiosity-Driven Folgezug extend.

Return your output in genau diesem Format:

## Sokratische Fragenfolge: [Konzept]

**Für:** [SuS-Niveau]
**Startpunkt:** [Was SuS aktuell denken]
**Richtung:** [Wohin die Folge abzielt — oder welche Komplexität sie surfact]

### Opening Frage

[Die erste Frage — gestaltet um aktuell Denken zu surface, nicht es zu herausfordern noch]

### Fragenfolge

Für jede Frage:
- **F[N]:** [Fragen-Text]
- **Typ:** [Paul & Elder Kategorie]
- **Zweck:** [Was diese Frage in der Folge tut]
- **Antizipiert Antworten:** [2–3 wahrscheinlich Antworten]
- **Folgezug für jede Antwort:** [Bedingte Folgefragen]

### Moderations-Notizen

[Bedenkzeit-Erinnerungen, wie Stille zu handhaben, wie dominante und leise Stimmen zu handhaben]

### Sokratisch vs. Leitend

[Explizite Noten, wo diese Folge Risiken, zu leitend zu werden statt sokratisch, und wie auf sokratisch-Seite zu bleiben]

**Selbstkontrolle:** Überprüfe, dass (a) Folge nutzt mehrere Paul & Elder Frage-Typen, (b) Fragen sind konkret zu abstrakt, (c) keine Frage ist leitend (funneling zu einer Antwort), (d) antizipiert Antworten included genuinely unterschiedlich Perspektiven, (e) Folgezug build auf Schüler-Antworten statt umlenkend, (f) Bedenkzeit eingebaut in Moderations-Noten.
```

## Beispiel-Output

**Szenario:** *Konzept: "Ob wir historische Figuren nach modernen moralischen Standards urteilen sollten" / SuS-Niveau: "10. Klasse Geschichte, haben Transatlantische Sklaverei studiert und sind moralisch empört — sie urteilen historische Sklavenhalter als geradeaus böse" / Startpunkt: "SuS glaube, historische Figuren, die Sklaverei beteiligten, waren einfach schlechte Menschen, die böse wählten, anwendend modernes moralisches Framework ohne historischen Kontext"*

---

## Sokratische Fragenfolge: Historische Figuren nach modernen Standards urteilen

**Für:** 10. Klasse Geschichte
**Startpunkt:** SuS sehen historische Sklavenhalter als straightforwardly böse, anwendend moderne moralische Frameworks ohne historischen Kontext.
**Richtung:** Zu das komplexere Verständnis, dass moralische Standards sich über Zeit ändern, dass Individuen teilweise Produkte ihres sozialen Kontextes sind, UND das dies nicht ihre Handlungen excusiert oder justified — beide Ideen gleichzeitig haltend statt in entweder Relativismus oder Presentism zu collapse.

### Opening Frage

**F1:** "Ihr habt die Transatlantische Sklaverei studiert. Wenn du mit einem der Sklavenhändler sprechen könntest, was würdest du ihnen sagen?"

- **Typ:** Klärung (oberflächlich aktuelle Position surfacen)
- **Zweck:** Das ist accessible, emotional engagiert Opening, das oberflächlich SuS's aktuelle moralische Urteile surfact ohne sie zu herausfordern doch. Das validiert ihre moralisch Reaktion während Material für der Rest der Folge providend.
- **Antizipiert Antworten:**
  - (a) "Ich würde ihnen sagen, sie waren Monster / böse / schrecklich." → Folgezug: "Wenn du 'böse' sagst — meinst du, sie wussten, was sie taten war falsch und taten es sowieso? Oder etwas anderes?"
  - (b) "Ich würde sie fragen, wie sie das anderen Menschen tun könnten." → Folgezug: "Das ist eine wirklich wichtige Frage. Was Antwort denkst du, sie würden dir geben? Ernsthaft — was würden sie tatsächlich sagen?"
  - (c) "Ich würde ihnen sagen über wie ihre Handlungen Millionen Lebens ruin." → Folgezug: "Denkst du, sie hätten das Argument verstanden? Würde 'ruined Lebens' Konzept dasselbe Mittel für sie als für dich?"

### Fragenfolge

**F2:** "Was Antwort denkst du, ein Sklavenhändler in 1750 würde tatsächlich geben, wenn du sie fragtest, ihre Geschäft zu justify?"

- **Typ:** Perspektiven und Standpunkte
- **Zweck:** Forcen SuS, in historisch Denkart zu schritt, die sie finden abhorrent. Die Frage ist NICHT bittend sie zu stimme mit der Justification — es ist bittend sie zu verstehe was die Justification war. Das ist Grundlage von historisch Empathie (nicht Sympathie).
- **Antizipiert Antworten:**
  - (a) "Sie würde sagen es war normal / jeder war es Doing." → Folgezug: "Ist 'jeder war es doing' ein gutes moralisches Argument? Kannst du etwas jetzt denken, dass jeder TUNING, dass Menschen in 200 Jahren uns heftig für urteilen könnte?"
  - (b) "Sie würde sagen sie hatten ein Recht zu, wegen rassistisch Überzeugungen." → Folgezug: "Woher kämen diese Überzeugungen? Waren sie wählend rassistisch zu sein, oder wurden sie aufgewachsen in einer Gesellschaft, die ihnen sagte bestimmte Rassen war Unterlegene? Macht das Unterschied?"
  - (c) "Sie würde vermutlich sagen sie brauchten das Geld / es war ihre Lebensunterhalt." → Folgezug: "Tut eine ökonomisch Erklärung ändere wie wir moralisch urteilen? Wenn jemand heutig schadet, weil es profitabel ist, tun wir excusieren das?"

**F3:** "Kann du etwas denken, dass ist completely normal und legal heute, dass Menschen in 200 Jahren könnte uns heftig urteilen für?"

- **Typ:** Implikationen und Konsequenzen
- **Zweck:** Das Pivot Frage. Das forcen SuS zu applizieren ihre moralisch Framework reflexively — wenn sie historisch Leute nach modernen Standards urteilen, zukünftig Menschen wird urteilen uns derselbe Weg. Die Frage argui't nicht für moralisch Relativismus; das surfact Komplexität von urteilen über Zeit-Perioden.
- **Antizipiert Antworten:**
  - (a) "Fabrik Farming / Essen Fleisch." → Folgezug: "Interessant. Wenn zukünftig Menschen urteilen uns als heftig wie du urteile Sklavenhalter, würde das gerecht sein? Warum oder warum nicht?"
  - (b) "Klima Änderung / schnell Mode / Sweatshops." → Folgezug: "Du Kauf Kleidung. Du nutze Energie. Macht das dich eine schlechte Person? Oder bist du teilweise ein Produkt der Gesellschaft du Lebe in? Was ist Unterschied zwischen dir und eine Person in 1750?"
  - (c) "Ich kann nicht etwas denken, dass ist so schlecht wie Sklaverei." → Folgezug: "Vielleicht nicht. Aber ist möglich, dass es etwas gibt wir tun, dass wir nicht sehe ist falsch — gerade wie viele Menschen in 1750 konnte nicht sehe das Sklaverei war falsch? Was würde das Mittel für wie wir sie urteilen?"

**F4:** "Hier ist die schwer Frage: einige Menschen in 1700s DID argui, dass Sklaverei war falsch — die Quäker, einige Enlightenment Denker, versklavt Menschen selbst wer resistiert. Wenn es war möglich zu sehe es was falsch sogar dann, macht das die Sklavenhalter MEHR Schuldig — weil sie könnten haben gewusst besser?"

- **Typ:** Gründe und Belege
- **Zweck:** Complicaten die emerging Relativismus. SuS könnte sein Anfang zu denken "gut, es war einfach ihre Zeit-Periode" — diese Frage pushes zurück: moralisch Kritiker existiert WITHIN die Periode. Der Existenz von Abolitionisten beweist das historisch Kontext ist nicht vollständig Excusieren.
- **Antizipiert Antworten:**
  - (a) "Ja — wenn einige Menschen wussten es was falsch, dann die Träger wählte zu ignore es." → Folgezug: "Aber war es einfach zu sein ein Abolitionist? Was tat es dich Kosten sozial und ökonomisch zu oppose Sklaverei? Macht Schwierigkeit excuse nicht tun das Recht Ding?"
  - (b) "Vielleicht, aber die Abolitionisten waren ungewöhnlich — die meisten Menschen accepted Sklaverei." → Folgezug: "Macht in Mehrheit Dich minder moralisch verantwortlich? Ist 'die meisten Menschen dachte es was OK' immer eine Verteidigung?"
  - (c) "Es ist Kompliziert — du kannst nicht sagen einfach sie war alle Böse oder alles Produkte von Zeit." → Folgezug: "Ich denke, du hast das Schlüssel Spannung getroffen. Kannst du halten beide Ideen gleichzeitig: dass sie waren shaped von ihrem Kontext UND dass ihre Handlungen verursacht enormen Leid? Ist das möglich?"

**F5:** "So hier ist wo wir angekommen sind. Ist möglich zu verstehe warum historisch Menschen tat was sie tat — zu sehe sie wie Produkte von ihrer Zeit — OHNE zu excuse was sie tat? Oder tut Verständnis immer führen zu excusieren?"

- **Typ:** Fragen über die Frage (metakognitiv)
- **Zweck:** Das ist der Kern historisch Denken Fertigkeit — die Fähigkeit zu halten Empathie und Urteil gleichzeitig. Die Frage surfact die Spannung statt zu resolve. Es ist kein einziger richtig Antwort; das Wert ist in SuS artikuliert Ihre Position mit Nuance.
- **Antizipiert Antworten:**
  - (a) "Du kannst verstehe ohne zu excuse — wie das verstehe Warum ein Kriminelle Committed ein Verbrechen bedeutet nicht du denk es was OK." → Folgezug: "Das ist eine mächtig Analogie. Also ein Historiker's Arbeit ist zu verstehe, und unser Arbeit als moralisch Wesen ist zu urteilen. Können beide geschehe?"
  - (b) "Ich denk, wenn du verstehe zu viel, du fang an zu excuse." → Folgezug: "Das ist eine genuine Besorgnis. So wo ist die Linie? Wie machst du Studie etwas tiefgründig ohne zu verlier dein moralisch Kompass?"
  - (c) Ein Schüler wer genuinely hat shifted ihre Position. → Folgezug: "Hat dein Sicht ändern seit dem Beginn von diesem Diskussion? Welch Frage oder Idee ändert es? Das ist würdig zu Notiz."

### Moderations-Notizen

- **Bedenkzeit ist non-negotiable.** Nach F3 speziell (das "was wird zukünftig Menschen urteile uns für?" Frage), Schüler braucht 5–10 Sekunden. Die Stille fühlt unbequem. Lass es sitzen. Die Beste Antworten kommen nach das Längste Pausen.
- **Nicht evaluieren Antworten.** Nicht sagen "Guter Punkt!" oder "Noch nicht ganz." Stattdessen, mit Curiosity reagieren: "Sag mehr über das," "Was macht dich denk das?", "Sieht jemand das unterschiedlich?" Evaluation kills Dialog; Curiosität extend.
- **Handhabung dominante Stimmen:** Wenn ein Schüler dominiert, umlenken: "Danke, Ella — ich will hören von jemand wer nicht noch hat sprach. Kwame, was ist deine Reaktion zu what Ella gerade sagte?" Nutze Think-Pair-Share vor Plenum-Diskussion für F3 zu gib leisen Schülern Processing Zeit.
- **Handhabung emotional Antworten:** Dieses Thema wird generieren stark Gefühle. Wenn ein Schüler sagt etwas dass andere finden offensiv (z.B. Verteidigen Sklavenhalter zu readying), nicht shut sie ab — Probe: "Das ist eine provokativ Position. Was Evidenz würdest du nutzen zu Support es? Und was würde jemand wer nicht stimme sagen zu dich?" Lass die Klasse's Reasoning die Arbeit tun, nicht dein Behörde.
- **Wenn die Klasse erreicht "es ist Kompliziert" schnell:** Push weitere. "Welch ART von Kompliziert? Kannst du artikulieren die spezifisch Spannung?" Komplexität ohne Spezifität ist tote Ende.

### Sokratisch vs. Leitend

**Wo diese Folge Risiken zu leitend anstelle sokratisch werden:**
- F4 Risiken leitend wenn deliv wie: "Aber einige Menschen KNEW es was falsch, so DOESN'T THAT MEAN die Träger waren schuldig?" Das ist rhetorisch Frage mit bevorzugt Antwort. Stattdessen, präsentiere historisch Fakt neutral und frag offen Frage: "Was tut die Existenz von Abolitionisten sagen uns über wie wir sollte urteilen die Träger?" Lass Schüler ziehen ihre eigenen Schlussfolgerungen.
- F5 Risiken leitend wenn die Lehrperson Signale das "korrekt" Antwort durch Ton oder Körpersprache. Die LP muss genuinely das als offen Frage halten. Einige Schüler wird conclude dass Verständnis tut führen zu excusieren. Das ist legitim Position würdig Erkundung, nicht ein Fehler zu korrekt.

**Wie zu bleibe sokratisch:**
- Folge Schüler's Begründung, nicht dein Lektionsplan. Wenn Schüler nimmt Diskussion in unerwartet aber produktiv Richtung, folge es.
- Frag Fragen du genuinely bist Neugierig über ihre Antworten zu, nicht Fragen wo du wartest für spezifisch Antwort.
- Wenn du find dich denken "komm, sag einfach das Ding ich will du zu sagen," du hab verlassen sokratisch Befragung und betreten guess-was-in-mein-Kopf. Pause und frag genuinely offen Frage stattdessen.

---

## Bekannte Einschränkungen

1. **Sokratische Befragung erfordert eine Klassenkulturen von intellektuell Sicherheit.** Schüler wird nicht teile genuine, tentativ oder kontrovers Denken in einem Klassenzimmer wo falsch Antworten sind bestraft, wo Peers mokieren Antworten, oder wo die LP zeigt Mißbilligung. Das Bauen diese Kultur ist prerequisit Arbeit diesen Skill nicht kann — es assumes die Kultur existiert schon.

2. **Die Folge ist ein prepared Skript, aber real sokratisch Dialog ist improvisational.** Die verzweigt Folgezug cover wahrscheinlich Antworten, aber Schüler werden Dinge sagen das sind nicht antizipiert. Der LP muss fähig sein zu improvisieren Folgefragen in real Zeit. Diesen Skill gibt einen Rahmen und Anfangs-Punkte, nicht komplett Skript für jeden möglich Dialog Pfad.

3. **Sokratische Befragung ist nicht passend für alle Lernziele.** Wenn Schüler brauchen spezifisch Faktenwissen zu Lerne (Daten, Formeln, Verfahren), sokratisch Befragung ist ineffiziente Methode. Das ist am wertvollsten für Entwicklung konzeptuell Verständnis, ethisch Reasoning und kritisch Denken — Aufgaben wo Prozess Reasoning Sachen wie viel wie Schlussfolgerung. Nutze explizit Unterricht für Fakten und Verfahren; nutze sokratisch Befragung für contested Konzepte und komplex Urteile.
