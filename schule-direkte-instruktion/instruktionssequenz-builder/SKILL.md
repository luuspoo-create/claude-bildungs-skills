---
# AGENT SKILLS STANDARD FIELDS (v2)
name: instruktionssequenz-builder
description: "Erstelle eine vollständige direkte Instruktionssequenz von LP-Modellierung bis gesteuerter Übung bis Independent Work. Nutze diese Skill um neue Fähigkeiten, Prozeduren oder Konzepte durch direkte Instruktion zu unterrichten."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-direkte-instruktion/instruktionssequenz-builder"
skill_name: "Instruktionssequenz Builder (Ich mache / Wir machen / Du machst)"
domain: "schule-direkte-instruktion"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Rosenshine (2012) — Principles of Instruction: research-based strategies that all teachers should know"
  - "Pearson & Gallagher (1983) — The instruction of reading comprehension (gradual release of responsibility model)"
  - "Archer & Hughes (2011) — Explicit Instruction: Effective and Efficient Teaching"
  - "Hattie (2009) — Visible Learning: direct instruction effect size 0.59"
  - "Engelmann & Carnine (1982) — Theory of Instruction: principles and applications"
input_schema:
  required:
    - field: "zu_unterrichtende_fachigkeit"
      type: "string"
      description: "Die spezifische Fähigkeit oder das Konzept, das unterrichtet wird"
    - field: "schueler_niveau"
      type: "string"
      description: "Klassenstufe und Vorkenntnisse"
    - field: "lektionszeit"
      type: "string"
      description: "Verfügbare Lektionszeit in Minuten"
  optional:
    - field: "haeufige_missverstaendnisse"
      type: "array"
      description: "Bekannte Missverständnisse oder Fehler, die SuS mit dieser Fähigkeit machen"
    - field: "sus_profile"
      type: "array"
      description: "Fähigkeitsspektrum, DaZ-Bedarf, ISF-Profile"
    - field: "vorwissen"
      type: "string"
      description: "Was SuS bereits kennen, auf dem dies aufbaut"
    - field: "erfolgs_kriterien"
      type: "string"
      description: "Wie Erfolg gemessen wird"
output_schema:
  type: "object"
  fields:
    - field: "ich_mache"
      type: "object"
      description: "LP-Modellierungs-Phase mit Skript und lautes-Denken"
    - field: "wir_machen"
      type: "object"
      description: "Gesteuerter Übungs-Phase mit strukturierter LP-SuS-Interaktion"
    - field: "du_machst"
      type: "object"
      description: "Independent-Practice-Phase mit Monitoring-Kontrollpunkten"
    - field: "ueberpruefer_punkte"
      type: "array"
      description: "Verständnischeck-Momente während der ganzen Sequenz"
    - field: "zeitleitfaden"
      type: "string"
      description: "Vorgeschlagene Zeitzuweisung über die drei Phasen"
chains_well_with:
  - "verstaendnischeck-protokoll"
  - "arbeitetes-beispiel-verblassen-designer"
  - "lautes-denken-skript"
  - "uebungsaufgaben-sequenz"
  - "padagogisches-inhaltswissen-entwickler"
teacher_time: "5 minutes"
tags: ["direkte-instruktion", "gradual-release", "modellierung", "direkt-unterricht", "scaffolding", "lehrplan21"]
---

# Instruktionssequenz Builder (Ich mache / Wir machen / Du machst)

## Was diese Skill leistet

Generiert eine vollständige Gradual-Release-of-Responsibility-Sequenz zum Unterrichten einer spezifischen Fähigkeit: ein Skript-„Ich mache" (LP modelliert mit lautes-Denken), ein strukturiertes „Wir machen" (gesteuerter Übung mit LP-SuS-Interaktion) und ein gestaltetes „Du machst" (Independent Practice mit Monitoring-Punkten). Der Output enthält Verständnischeck-Momente bei jedem Übergang und einen Zeitleitfaden. KI ist hier besonders wertvoll, weil wirksame direkte Instruktion erfordert, dass die LP ihr Expertise-Denken sichtbar macht — eine Fähigkeit, die sie automatisch führt, in diskrete, lehrbare Schritte mit artikuliertem Denken zerlegen. Diese Zerlegung von Experten-Performance ist kognitiv anspruchsvoll und ist wo die meiste direkte Instruktion kurzfällt.

## Evidenzgrundlage

Rosenshine (2012) synthetisierte Jahrzehnte von Forschung in zehn Principles of Instruction, mit direkter Instruktion im Kern: beginne mit Kurzwiederholung, präsentiere neues Material in kleinen Schritten mit Übung nach jedem Schritt, gib Modelle, führe SuS-Übung, überprüfe Verständnis und erhalte hohe Erfolgsquote. Pearson & Gallagher (1983) formalisierte das Gradual-Release-of-Responsibility-Modell — die LP beginnt mit aller kognitiver Last (Ich mache), teilt progressiv mit SuS (Wir machen), übertragen dann komplett (Du machst). Archer & Hughes (2011) operationalisierten direkte Instruktion für Praktiker, betonend dass die „Ich mache"-Phase nicht nur Demonstration sondern Artikulation des Entscheidungsprozesses erfordern — SuS brauchen hören *warum* jeder Schritt getan wird, nicht nur sehen. Hattie (2009) fand, dass direkte Instruktion einen Effect Size von 0,59 hat, konsistent unter den höchsten-Impact Lehransätzen. Engelmann & Carnine (1982) etablierten, dass die Sequenz und Struktur der Beispiele in direkter Instruktion das Lernen dramatisch beeinflusst — Beispiele müssen sorgfältig ausgewählt sein um kritische Merkmale hervorzuheben und Ambiguität zu minimieren.

## Input-Schema

Die LP muss bereitstellen:
- **Zu unterrichtende Fähigkeit:** Die spezifische Fähigkeit oder das Konzept. *z.B. „Einen Themensatz für einen analytischen Absatz schreiben" / „Zwischen Brüchen, Dezimalen und Prozenten konvertieren" / „Einen Bunsenbrenner sicher anzünden"*
- **SuS-Niveau:** Klassenstufe und Vorkenntnisse. *z.B. „8. Klasse, können Absätze schreiben aber strukturieren analytisches Schreiben nicht" / „7. Klasse, erste Mal Laborausrüstung nutzend"*
- **Lektionszeit:** Verfügbare Minuten. *z.B. „50 Minuten" / „60 Minuten"*

Optional (vom Kontextsystem bereitgestellt):
- **Häufige Missverständnisse:** Bekannte Fehler mit dieser Fähigkeit
- **SuS-Profile:** Fähigkeitsspektrum, DaZ-Bedarf, ISF-Profile
- **Vorwissen:** Was SuS bereits kennen
- **Erfolgs-Kriterien:** Wie Erfolg gemessen wird

## Prompt

```
Du bist ein Experte in direkter Instruktion und dem Gradual-Release-of-Responsibility-Modell mit tiefem Wissen von Rosenshines (2012) Principles of Instruction, Pearsons & Gallaghers (1983) Gradual-Release-Rahmen, und Hughes & Archer (2011) Arbeit zu wirksamer Modellierung. Du verstehst, dass die kritische Qualität direkter Instruktion ist, Experten-Denken sichtbar zu machen — nicht nur SuS zeigen, was zu tun ist, sondern artikuliert den Entscheidungsprozess hinter jedem Schritt.

Deine Aufgabe ist, eine vollständige Ich mache / Wir machen / Du machst-Sequenz für folgende zu entwerfen:

**Fähigkeit:** {{zu_unterrichtende_fachigkeit}}
**SuS-Niveau:** {{schueler_niveau}}
**Lektionszeit:** {{lektionszeit}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt sein. Nutze, was verfügbar ist; ignoriere Felder, die als „nicht bereitgestellt" gekennzeichnet sind.

**Häufige Missverständnisse:** {{haeufige_missverstaendnisse}} — wenn nicht bereitgestellt, identifiziere die wahrscheinlichsten Missverständnisse für diese Fähigkeit basierend auf deinem Fachwissen und adressiere sie in der Modellierungs-Phase.
**SuS-Profile:** {{sus_profile}} — wenn nicht bereitgestellt, entwerfe für eine typische Mischklasse und notiere wo Differenzierung nötig ist.
**Vorwissen:** {{vorwissen}} — wenn nicht bereitgestellt, erkläre das angenommene Vorwissen explizit so die LP es verifizieren kann.
**Erfolgs-Kriterien:** {{erfolgs_kriterien}} — wenn nicht bereitgestellt, generiere klare Erfolgs-Kriterien, die beschreiben, wie erfolgreiche Performance am Lektionsende aussieht.

Wende diese evidenzgestützten Prinzipien an:

1. **Ich mache — LP modelliert mit lautes-Denken (Rosenshine, 2012; Archer & Hughes, 2011):**
   - Demonstriere die vollständige Fähigkeit von Anfang bis Ende.
   - Artikuliere dein Denken bei JEDEM Entscheidungspunkt — nicht nur was du tust, sondern WARUM. „Ich wähle dieses Wort weil..." / „An dieser Stelle muss ich zwischen X und Y entscheiden, und ich wähle X weil..."
   - Hebe kritische Merkmale hervor: was macht dies anders von ähnlichen Aufgaben.
   - Zeige häufige Fehler und erkläre warum sie falsch sind (Impfung gegen Missverständnisse).
   - Halte es kompakt — Modellierung sollte 10–15 Minuten maximum sein. SuS lernen durch Tun, nicht durch Ansehen.

2. **Wir machen — Gesteuerter Übung mit hoher Interaktion (Rosenshine, 2012, Principle 4):**
   - LP und SuS arbeiten zusammen durch ein NEUES Beispiel.
   - LP macht die frühen Schritte, SuS übernehmen progressiv.
   - Nutze häufige Überprüfungen: „Was sollte ich als nächstes tun?" / „Warum habe ich dies gewählt?" / Kaltanrufe für Antworten.
   - Dies ist NICHT LP, die ein weiteres Beispiel macht während SuS zusehen. SuS müssen aktiv beitragen.
   - Strebe nach 80%+ Erfolgsquote bevor zum Du machst (Rosenshine, 2012, Principle 7).

3. **Du machst — Independent Practice mit Monitoring (Rosenshine, 2012, Principles 5 & 8):**
   - SuS üben independent. LP zirkuliert und monitort.
   - Beginne mit Problemen sehr ähnlich zum modellierten Beispiel, dann variiere progressiv.
   - Integriere einen Monitoring-Plan: worauf achten, wann eingreifen, wie SuS identifizieren, die neu-Unterricht brauchen.
   - Baue einen Checkpoint ein: nach 5 Minuten independent Arbeit, Quick-Klassen-Check bevor SuS weitermachen.

4. **Verständnischeck bei jedem Übergang (Rosenshine, 2012, Principle 3):**
   - Zwischen Ich mache und Wir machen: „Bevor wir einen zusammen versuchen, erzähl deinem Partner: was ist der erste Schritt?"
   - Zwischen Wir machen und Du machst: „Gib mir einen Daumen hoch wenn du den nächsten alone machen könntest, seitwärts wenn du noch ein gesteuertes Beispiel brauchst, unten wenn du unsicher bist."
   - Während Du machst: zirkuliere und überprüfe 5 spezifische SuS-Arbeiten in den ersten 3 Minuten.

5. **Zeit-Zuweisung (Archer & Hughes, 2011):**
   - Ich mache: ~20% Lektionszeit
   - Wir machen: ~30% Lektionszeit
   - Du machst: ~40% Lektionszeit
   - Übergänge und Überprüfungen: ~10%
   - Wenn Zeit kurz ist, komprimiere Ich mache (nicht Wir machen oder Du machst — SuS brauchen Übungs-Zeit).

Gib deinen Output in exakt diesem Format zurück:

## Direkte Instruktionssequenz: [Fähigkeits-Name]

**Für:** [SuS-Niveau]
**Zeit:** [Lektionszeit]
**Erfolgs-Kriterien:** [Was SuS am Lektionsende tun können]

### Voraussetzungen
[Was SuS vor dieser Lektion kennen müssen — LP sollte verifizieren]

### Ich mache — LP modelliert (approx. X Minuten)

**Setup:** [Wie die Fähigkeit gerahmt und mit Vorwissen verbunden werden]
**Modell:** [Schritt-für-Schritt Demonstration mit lautes-Denken-Skript bei jedem Entscheidungspunkt]
**Häufiger Fehler Impfung:** [Zeige einen häufigen Fehler und erkläre warum es falsch ist]

**Überprüfungs-Kontrollpunkt:** [Quick Check bevor zum Wir machen]

### Wir machen — Gesteuerter Übung (approx. X Minuten)

**Beispiel:** [Ein neues Beispiel für gesteuerter Übung]
**Interaktions-Plan:** [Welche Schritte die LP macht, welche SuS beitragen, wie Antworten elizieren]
**Scaffolding-Notizen:** [Support für kämpfende SuS / Extension für die bereit sind]

**Überprüfungs-Kontrollpunkt:** [Check Readiness für Independent Practice]

### Du machst — Independent Practice (approx. X Minuten)

**Übungs-Set:** [4–6 Übungs-Probleme/-Aufgaben, sequenziert von ähnlich-zum-Modell bis variiert]
**Monitoring-Plan:** [Worauf achten, welche SuS zuerst überprüfen, Eingreiff-Trigger]
**Früh-Fertig Extension:** [Was tun mit SuS die schnell fertig sind]

### Differenzierungs-Notizen
[Wie für verschiedene Fähigkeitsstufen anpassen ohne Lernziel zu ändern]

**Selbstcheck vor Rückgabe:** Überprüfe dass (a) die Ich mache-Phase lautes-Denken-Begründung bei jedem Entscheidungspunkt einbauen, nicht nur Demonstration, (b) die Wir machen-Phase aktive SuS-Beitrag erfordert, nicht passives Ansehen, (c) die Du machst Übungs-Probleme von ähnlich-zum-Modell bis variiert fortschreiten, (d) Überprüfungs-Kontrollpunkte bei jedem Übergang eingebettet sind, (e) Timing realistisch für Lektionslänge ist, und (f) häufige Missverständnisse während Modellierung adressiert sind, nicht für SuS überlassen zu entdecken.
```

## Beispiel Output

**Szenario:** *Fähigkeit: „Einen Themensatz für einen analytischen Absatz in Englisch-Literatur schreiben" / SuS-Niveau: „9. Klasse, können Absätze schreiben aber Themensätze sind typisch deskriptiv statt analytisch" / Lektionszeit: „50 Minuten"*

---

## Direkte Instruktionssequenz: Analytische Themensätze Schreiben

**Für:** 9. Klasse Englisch-Literatur
**Zeit:** 50 Minuten
**Erfolgs-Kriterien:** SuS können einen Themensatz schreiben, der eine analytische Behauptung über eine Autorin-Methode oder Intention macht — nicht eine deskriptive Aussage über was im Text passiert.

### Voraussetzungen
SuS sollten können: einen vollständigen Satz schreiben, eine Zitation aus einem Text identifizieren, und den Unterschied verstehen zwischen einer Charakters Aktion und einer Autorin Wahl. LP sollte mit einer Quick-Frage verifizieren: „Was ist der Unterschied zwischen ‚Romeo tötet Tybalt' und ‚Shakespeare stellt Romeo als zunehmend von Gewalt kontrolliert dar'?"

### Ich mache — LP modelliert (10 Minuten)

**Setup (2 Minuten):**
„Heute lerne ich euch wie man den ersten Satz eines analytischen Absatzes schreibt — den Themensatz. Das ist der Satz, der dem Leser sagt, welches Argument euer Absatz machen wird. Das Schlüsselwort ist *argumentieren*. Euer Themensatz ist eine Behauptung, nicht eine Beschreibung. Schaut, was ich mache, und höret mein Denken."

**Modell (6 Minuten):**

„Ich schreibe über wie Shakespeare Lady Macbeths Ehrgeiz in Act 1 darstellt. Lass mich einen Themensatz schreiben.

Mein erster Instinkt: ‚In Act 1 ist Lady Macbeth sehr ehrgeizig.' Lass mich checken — ist das eine Behauptung oder eine Beschreibung? Es ist eine Beschreibung. Es sagt dir was Lady Macbeth wie ist, aber es sagt nichts über was Shakespeare MACHT. Ich brauche Shift von Charakter zu Autorin.

Lass mich nochmal versuchen: ‚Shakespeare stellt Lady Macbeths Ehrgeiz als skrupelloser und kalkuliert dar als Macbeths eigener, nutzt ihren Soliloquium in Act 1, Scene 5 um einen Charakter zu offenbaren, der bewusst entscheidet ihre Menschheit zu unterdrücken.'

Jetzt lass mich das gegen meine Kriterien checken:
- Nennt es den Schriftsteller? Ja — ‚Shakespeare stellt dar.'
- Macht es eine Behauptung, die argumentiert werden kann? Ja — jemand könnte argumentieren dass ihr Ehrgeiz ‚skrupelloser' ist oder dass sie ‚bewusst entscheidet.'
- Zeigt es auf eine Methode? Ja — ‚nutzt ihren Soliloquium' sagt dem Leser ich analysiere spezifische Sprache.
- Könnte ich einen ganzen Absatz diesen Gedanken entfalten? Ja — ich würde die ‚unsex mich hier' Rede analysieren.

Das ist ein starker Themensatz. Jetzt lass mich dir einen häufigen Fehler zeigen."

**Häufiger Fehler Impfung (2 Minuten):**
„Hier ist was die meisten 9er schreiben: ‚In Act 1 liest Lady Macbeth einen Brief und fragt dann die Geister sie zu entmannen.'

Das ist eine Beschreibung von was passiert. Es ist genau. Es ist auch nutzlos als Themensatz weil es nichts zu argumentieren gibt — es ist gerade Plotzusammenfassung. Beachte den Unterschied:
- Beschreibung: ‚Lady Macbeth fragt die Geister sie zu entmannen.' (Was passiert)
- Analyse: ‚Shakespeare nutzt Lady Macbeths Invokation dunkler Geister um vorzuschlagen, dass Ehrgeiz in diesem Stück die Zerstörung weiblichen Mitgefühls erfordert.' (Was der Schriftsteller macht und warum)

Der Shift ist von CHARAKTER zu SCHRIFTSTELLER. Von WAS PASSIERT zu WARUM DER SCHRIFTSTELLER ES GEMACHT HAT."

**Überprüfungs-Kontrollpunkt:**
„Turn zu deinem Partner. Sag ihnen: Wie unterscheidet sich ein deskriptiver Themensatz von einem analytischen? Ihr hast 30 Sekunden." Kaltanruf 2 SuS zum Teilen. Achte auf: Referenzen zur Autorin Wahl/Methoden vs. Charakter-Aktionen/Plot.

### Wir machen — Gesteuerter Übung (15 Minuten)

**Beispiel:** „Jetzt schreib wir einen zusammen. Die Frage ist: Wie stellt Shakespeare das Thema Gewalt in Act 3, Scene 1 dar?"

**Interaktions-Plan:**

*Schritt 1 — LP führt:* „Was ist das erste was ich in meinem Themensatz brauche? Ich brauche den Schriftsteller zu nennen. Also ich starte mit ‚Shakespeare...' Was kommt als nächstes Verb? Nicht ‚schreibt über' — das ist zu vage. Gib mir ein stärkeres Verb." Elicite von Klasse: stellt dar / vermittelt / zeigt / offenbart / konstruiert. „Gut — ‚Shakespeare stellt dar...' Was stellt er dar?"

*Schritt 2 — SuS beitragen mit Support:* „Jetzt brauche ich eine Behauptung über Gewalt in Act 3, Scene 1. Nicht beschreib was passiert — mach ein Argument über was Shakespeare MIT Gewalt macht. Schreib eine Behauptung auf deiner Tafel." SuS schreiben. LP scannt Tafeln. Wähle ein starkes Beispiel und ein schwaches Beispiel (anonym). „Diese sagt ‚Gewalt als unvermeidbare Konsequenz unkontrollierter Männlichkeit.' Das ist eine Behauptung — jemand könnte argumentieren das Gegenteil. Diese sagt ‚Tybalt und Romeo kämpfen und Mercutio stirbt.' Das ist eine Beschreibung. Lass uns sie zusammen upgraden — was sagt Shakespeare über Gewalt durch diese Scene?"

*Schritt 3 — SuS führen:* „Jetzt add eine Methoden-Referenz. Wie stellt Shakespeare das dar? Welche Technik oder strukturelle Wahl? Schreib den vollständigen Themensatz." SuS schreiben. LP zirkuliert und liest 6–8 Tafeln. Klasse teilt und evaluiert: nennt es den Schriftsteller, macht eine Behauptung und zeigt auf Methode?

**Scaffolding-Notizen:**
- SuS kämpfend: biete einen Satzbau-Rahmen: „Shakespeare stellt [Thema] dar als [Behauptung] durch [Methode], suggerierend dass [Interpretation]."
- SuS ready für Challenge: können sie einen Themensatz schreiben, der ein Gegenargument anerkennt? „Während Shakespeare zuerst Gewalt als... stellt dar, offenbaren Act 3, Scene 1 dass..."

**Überprüfungs-Kontrollpunkt:**
„Daumen hoch wenn du den nächsten Themensatz alone schreiben könntest. Seitwärts wenn du noch ein gesteuertes Beispiel brauchst. Unten wenn du stuck bist." Wenn mehr als 30% seitwärts oder unten, mach noch ein gesteuertes Beispiel. Wenn 80%+ hoch, zum Du machst.

### Du machst — Independent Practice (20 Minuten)

**Übungs-Set:**

1. Schreib einen Themensatz für: „Wie stellt Shakespeare Mercutio als Kontrast zu Romeo dar?" *(Sehr nah am modellierten Beispiel — gleicher Text, gleiche Fähigkeit)*
2. Schreib einen Themensatz für: „Wie stellt Steinbeck Einsamkeit im Anfang von Of Mice and Men dar?" *(Gleiche Fähigkeit, anderer Text — testet Transfer)*
3. Schreib einen Themensatz für: „Wie stellt der Dichter die Erfahrung von Konflikt in ‚Bayonet Charge' dar?" *(Gleiche Fähigkeit, Gedicht-Kontext — weitere Transfer)*
4. **Challenge:** Schreib zwei alternative Themensätze für die gleiche Frage. Welcher ist stärker? Annotiere warum.

**Monitoring-Plan:**
- Erste 3 Minuten: überprüfe die 5 SuS über die du am meisten besorgt bist (die waren seitwärts/unten beim Check). Lies ihren ersten Satz. Wenn er deskriptiv statt analytisch ist, greif sofort mit Satzbau-Rahmen Scaffold ein.
- Minute 5: Ganzes-Klassen-Pause. „Lies deinen ersten Themensatz zu deinem Partner. Partner, sag ihnen: nennt er den Schriftsteller, macht eine Behauptung und zeigt auf Methode? Wenn nicht, fix es jetzt."
- Minuten 5–20: zirkuliere systematisch. Achte auf häufigen Fehler (Beschreibung statt Analyse). Sammle 2–3 starke Beispiele und 1 schwaches Beispiel für Ganzes-Klassen-Feedback in den letzten 5 Minuten.

**Früh-Fertig Extension:**
Schreib einen Themensatz für ein Thema deiner Wahl (Geschichte, Naturwissenschaften, Geographie) nutzt die gleiche analytische Struktur: nennt den Creator/Autor/Grund, macht eine Behauptung und zeigt auf Methode oder Mechanismus. Dies testet ob SuS die transferierbare Fähigkeit verstanden haben, nicht nur die Englisch-Literatur-Anwendung.

### Differenzierungs-Notizen

- **Support:** Der Satzbau-Rahmen („Shakespeare stellt [Thema] dar als [Behauptung] durch [Methode]") bleibt verfügbar während Du machst für SuS die es brauchen. Das ist Scaffolding, nicht Aufgaben-Reduktion — sie machen immer noch eine analytische Behauptung, gerade mit strukturellem Support.
- **DaZ-SuS:** Pre-unterricht der analytischen Verben (stellt dar, vermittelt, offenbart, konstruiert, zeigt) mit Definitionen bevor Lektion oder gib eine Wort-Bank während der Aufgabe.
- **Extension:** Challenge SuS, Themensätze zu schreiben, die eine Konzession oder Gegenargument einbetten („Obwohl..., stellt Shakespeare letztendlich dar..."). Das addiert syntaktische Komplexität während gleiche analytische Fähigkeit bleibt.

---

## Bekannte Grenzen

1. **Direkte Instruktion ist am wirksamsten für Fähigkeiten mit identifizierbaren Schritten und klaren Erfolgs-Kriterien.** Einen analytischen Themensatz schreiben kann in Schritte zerlegt werden. Kreatives Schreiben, offene Problem-Solving und Aufgaben mit mehreren gültigen Ansätzen sind weniger geeignet für starre Ich mache / Wir machen / Du machst-Sequenzen. Für offene Aufgaben, sollte die Modellierungs-Phase den Entscheidungsprozess zeigen, nicht einen „richtigen" Ansatz.

2. **Die Qualität der Ich mache-Phase hängt ganz von der LPs Fähigkeit ab ihr Denken zu artikulieren.** Das Skript bietet ein Modell, aber die LP muss es in ihrer eigenen Stimme liefern und auf SuS-Antworten anpassen. Ein robotisch gelesenes Skript ist schlechter als ein etwas weniger poliertes aber authentisches lautes-Denken. LPs sollten das laute-Denken üben, es nicht vorlesen.

3. **Es gibt ein Risiko von über-Scaffolding in der Wir machen-Phase.** Wenn die LP zu viel macht und SuS zu wenig beitragen, wird die „gesteuerter Übung" zu einer zweiten Demonstration. Der Interaktions-Plan spezifiziert wo SuS übernehmen, aber LPs müssen dem Drang widerstehen, rein zu springen wenn SuS zögern — produktives Kämpfen während Wir machen ist angemessen solange die Erfolgsquote über 80% bleibt.
