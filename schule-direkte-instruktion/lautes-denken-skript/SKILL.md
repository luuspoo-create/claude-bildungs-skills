---
# AGENT SKILLS STANDARD FIELDS (v2)
name: lautes-denken-skript
description: "Skripte ein LP-Lautes-Denken, das Experten-Denk-Prozesse für eine spezifische Aufgabe demonstriert. Nutze um Problem-Lösung, Schreiben, Leseverständnis oder analytische Prozesse zu modellieren."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-direkte-instruktion/lautes-denken-skript"
skill_name: "Lautes-Denken-Skript Generator"
domain: "schule-direkte-instruktion"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Bereiter & Scardamalia (1987) — The Psychology of Written Composition: making expert processes visible"
  - "Wilhelm (2001) — Improving Comprehension with Think-Aloud Strategies"
  - "Ericsson & Simon (1993) — Protocol Analysis: verbal reports as data (theoretical foundation)"
  - "Collins et al. (1989) — Cognitive Apprenticeship: teaching the crafts of reading, writing, and mathematics"
  - "Rosenshine (2012) — Principles of Instruction, Principle 4: provide models of worked-out problems"
input_schema:
  required:
    - field: "aufgabe_zum_modellieren"
      type: "string"
      description: "Die spezifische Aufgabe, die die LP laut denken wird durcharbeiten"
    - field: "schueler_niveau"
      type: "string"
      description: "Klassenstufe und Expertise-Niveau"
    - field: "fachbereich"
      type: "string"
      description: "Fachbereich-Kontext"
  optional:
    - field: "experten_strategien"
      type: "array"
      description: "Spezifische Strategien oder Entscheidungs-Punkte, die sichtbar gemacht werden sollen"
    - field: "haeufige_schueler_fehler"
      type: "array"
      description: "Fehler, die SuS typisch machen, die das lautes-Denken impfen sollte gegen"
    - field: "sus_profile"
      type: "array"
      description: "Verständnis-Niveaus, DaZ-Bedarf"
    - field: "lautes_denken_dauer"
      type: "string"
      description: "Ziel-Dauer in Minuten"
output_schema:
  type: "object"
  fields:
    - field: "skript"
      type: "string"
      description: "Komplettes lautes-Denken-Skript mit Entscheidungs-Punkte, Selbst-Monitoring und Fehler-Bewusstsein"
    - field: "sichtbare_strategien"
      type: "array"
      description: "Liste von Experten-Strategien, die im Skript sichtbar gemacht werden"
    - field: "pause_punkte"
      type: "array"
      description: "Momente um zu pausieren und SuS-Folgen zu überprüfen"
    - field: "liefer_notizen"
      type: "string"
      description: "Wie das lautes-Denken wirksam zu liefern ist"
chains_well_with:
  - "instruktionssequenz-builder"
  - "arbeitetes-beispiel-verblassen-designer"
  - "meta-kognitiv-prompt-library"
  - "leseverstaendnis-strategie-wahler"
  - "padagogisches-inhaltswissen-entwickler"
  - "kritisches-denken-aufgaben-designer"
teacher_time: "4 minutes"
tags: ["lautes-denken", "modellierung", "experten-denken", "kognitiv-lehrling", "leseverstaendnis", "lehrplan21"]
---

# Lautes-Denken-Skript Generator

## Was diese Skill leistet

Skriptet ein LP Lautes-Denken, das Experten-Kognitiv-Prozesse für eine spezifische Aufgabe sichtbar macht — Problem-Lösung, Lesen, Schreiben, Analyse oder jede kognitiv-Fähigkeit wo Experten-Denken üblicherweise unsichtbar ist. Das Skript artikuliert die Entscheidungs-Punkte, Selbst-Monitoring-Momente und Fehler-Erkennungs-Strategien, die Experten automatisch nutzen, aber selten verbalisieren. KI ist hier besonders wertvoll, weil die Kern-Challenge von lautes-Denken-Modellierung die „Experten-Blindspot" ist — Experten haben ihr Denken so automatisiert, dass sie sich nicht mehr die intermedialen Schritte die Novizen brauchen zu sehen artikulieren können. Ein Mathematik-LP „sieht gerade" dass ein Problem Faktorisieren erfordert; ein geschickter Leser „weiß gerade" dass eine Quelle unzuverlässig ist. Das lautes-Denken-Skript reverse-engineert diese automatisiert Expertise in lehrbare Schritte.

## Evidenzgrundlage

Collins et al. (1989) etablierten kognitiv Lehrlingschaft als ein Rahmen zum Sichtbar-Machen von Experten-Denken zu Novizen. Die Schlüssel-Einsicht: in traditionellen Handwerken, Lernen ist sichtbar (du kannst einen Tischler Holz hobeln schauen), aber in akademischen Fächern, die kritische Arbeit passiert in der Experten-Kopf und ist unsichtbar zu SuS. Lautes-Denken macht das Unsichtbare sichtbar. Bereiter & Scardamalia (1987) wandte dies auf Schreiben an, demonstrierend dass Experten-Schreiber einen „Wissen-Transformierens"-Prozess (Planung, Monitoring, Überarbeitung) einbinden, dass Novizen ganz überspringen — und dass Modellierung diesen Prozess durch lautes-Denken deutlich SuS-Schreiben verbessert. Wilhelm (2001) zeigten dass LP-Lautes-Denken Leseverständnis über mehreren Studien verbesserte, besonders für kämpfende Leser, die Metacognitiv-Monitoring-Strategien fehlten. Ericsson & Simon (1993) gaben die theoretische Grundlage, demonstrierend dass Verbal-Berichte von Denken (wenn concurrent statt rückwirkend gemacht) gültig Repräsentationen von kognitiv Prozessen sind. Rosenshine (2012) identifizierte Modelle Geben als Principle 4 von wirksamer Instruktion, notierend dass die wirksamsten LP „dachten laut und Schritte modellieren" statt gerade Prozeduren zu erklären.

## Input-Schema

Die LP muss bereitstellen:
- **Aufgabe zum Modellieren:** Die spezifische Aufgabe zum laut denken durcharbeiten. *z.B. „Lesen und annotieren ein unbekanntes Gedicht zum ersten Mal" / „Ein mehrstufiges Trigonometrie-Problem lösen" / „Die Zuverlässigkeit einer historischen Quelle evaluieren"*
- **SuS-Niveau:** Klassenstufe und Expertise. *z.B. „10. Klasse, entwicklung-Leser — können dekodieren aber monitoren nicht aktiv Verständnis" / „8. Klasse, Novizen Problem-Löser"*
- **Fachbereich:** Fachbereich-Kontext. *z.B. „GCSE Englisch-Literatur" / „9. Klasse Mathematik"*

Optional (vom Kontextsystem bereitgestellt):
- **Experten-Strategien:** Spezifische Strategien zu sichtbar machen
- **Häufige SuS-Fehler:** Fehler zum impfen gegen
- **SuS-Profile:** Verständnis-Niveaus, DaZ-Bedarf
- **Lautes-Denken-Dauer:** Ziel-Dauer in Minuten

## Prompt

```
Du bist ein Experte in kognitiv Lehrlingschaft und lautes-Denken-Modellierung, mit tiefem Wissen von Collins et al.s (1989) kognitiv Lehrlingschaft-Rahmen, Bereiters & Scardamalias (1987) Arbeit zum Sichtbar-Machen von Experten-Schreib-Prozessen und Wilhelms (2001) Forschung zu lautes-Denken-Strategien für Lesen. Du verstehst die „Experten-Blindspot" — das Phänomen wo Experten ihr Denken so gründlich automatisiert haben, dass sie sich nicht mehr die intermedialen Schritte Novizen brauchen artikulieren können.

Deine Aufgabe ist, ein lautes-Denken-Skript für folgende zu schreiben:

**Aufgabe:** {{aufgabe_zum_modellieren}}
**SuS-Niveau:** {{schueler_niveau}}
**Fachbereich:** {{fachbereich}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt sein. Nutze, was verfügbar ist; ignoriere Felder, die als „nicht bereitgestellt" gekennzeichnet sind.

**Experten-Strategien:** {{experten_strategien}} — wenn nicht bereitgestellt, identifiziere die 3–5 wichtigsten Experten-Strategien für diesen Aufgaben-Typ und mache sie im Skript sichtbar.
**Häufige SuS-Fehler:** {{haeufige_schueler_fehler}} — wenn nicht bereitgestellt, identifiziere die häufigsten Fehler SuS mit diesem Aufgaben-Typ machen und include Momente im Skript wo der Experte sie fängt und vermeidet.
**SuS-Profile:** {{sus_profile}} — wenn nicht bereitgestellt, designen für eine Mischklasse mit SuS, die die Aufgabe mechanisch führen ohne ihren Denken zu monitorn.
**Lautes-Denken-Dauer:** {{lautes_denken_dauer}} — wenn nicht bereitgestellt, designen für 8–10 Minuten (lang genug um den vollen Prozess zu modellieren, kurz genug um Aufmerksamkeit zu behalten).

Wende diese evidenzgestützten Prinzipien an:

1. **Mache Entscheidungen sichtbar, nicht nur Aktionen (Collins et al., 1989):**
   - Eine Aktion: „Jetzt unterstreiche ich diesen Satz."
   - Eine Entscheidung sichtbar gemacht: „Ich lese diesen Linie neu, weil etwas noch nicht sinn macht. Ich erwartete der Dichter, die positive Bilder weiterzuführen, aber dieses Wort ‚zersplittert' bricht die Muster. Das ist wichtig — lass mich unterstreichen und ‚Ton-Wechsel?' in den Rand schreiben."
   - Jede Aktion im Skript muss durch das Begründung vorgegeben werden, das sie fahren.

2. **Zeige Selbst-Monitoring (Bereiter & Scardamalia, 1987):**
   - Experten monitorn konstant ihr eigenes Verständnis und Fortschritt. Mache dies sichtbar:
   - „Warte — verstehe ich wirklich diese Linie? Lass mich versuchen es umzuformulieren... Nein, ich kann nicht. Das bedeutet ich brauche es sorgfältig neu zu lesen."
   - „Ich habe für 5 Minuten gearbeitet und ich habe gerade einen Absatz getan. Verbring ich zu lange oder ist das die richtige Tiefe für diese Aufgabe?"

3. **Zeige Fehler-Erkennung und Wiederherstellung (Wilhelm, 2001):**
   - Experten machen Fehler und fangen sie. Zeige dies:
   - „Mein erster Gedanke ist diese zwei Zahlen zu addieren, aber warte — das scheint nicht richtig zu sein, weil die Antwort würde sein größer als... Lass mich die Frage neu lesen."
   - NICHT präsentiere eine fehlerlose Leistung. Zeige einen realistisch Prozess mit falschen Biegungen und Korrektionen.

4. **Unterscheide „die Aufgabe tun" von „wie man durch die Aufgabe denken":**
   - Eine LP, die ein Mathematik-Problem an der Tafel löst, während sag „und dann multiplizieren wir durch 3" ist die Aufgabe tuen, nicht laut denken.
   - Eine LP, die sag „Jetzt muss ich raus finden was als nächstes zu tun ist. Ich habe zwei Optionen — ich könnte multiplizieren oder zuerst faktorisieren. Lass mich denken welche besser ist... Multiplizieren würde mir größere Zahlen geben, und faktorisieren könnte Dinge vereinfachen, also ich werde zuerst faktorisieren versuchen" ist laut denken.

5. **Include Pause-Punkte (Rosenshine, 2012):**
   - Baue 2–3 Momente ein, wo die LP pausiert und überprüft: „Kannst du folgen was ich tue? Was habe ich gerade entschieden zu tun und warum?"
   - Diese Pausen verhindern, dass das lautes-Denken ein Monolog wird.

6. **Nutze natürliche Sprache, nicht LP-Sprech:**
   - Lautes-Denken sollte sich wie echtes Denken anfühlen, nicht ein Vortrag. Nutze „Hmm," „OK also," „Warte," „Lass mich denken," „Ich bin nicht sicher über dies noch."
   - Vermeide: „SuS, beachte wie ich die Strategie von... nutzend bin."

Gib deinen Output in exakt diesem Format zurück:

## Lautes-Denken-Skript: [Aufgabe]

**Für:** [SuS-Niveau]
**Dauer:** [Minuten]
**Setup:** [Was dem lautes-Denken zu SuS zu sagen ist]

### Das Skript

[Das komplette lautes-Denken, geschrieben in erster Person wie die LP würde sprechen. Include Bühnen-Richtungen in Klammern. Mark Entscheidungs-Punkte, Selbst-Monitoring-Momente und Fehler-Wiederherstellungs-Momente deutlich.]

### Sichtbare Strategien

[Nummerierte Liste von Experten-Strategien, die in diesem Skript sichtbar gemacht werden — was SuS sollten nehmen weg]

### Pause-Punkte

[2–3 Momente im Skript, wo die LP sollte pausieren und SuS-Folgen überprüfen]

### Liefer-Notizen

[Praktische Ratschläge über wie das lautes-Denken wirksam zu liefern ist — Geschwindigkeit, Authentizität, was zu vermeiden]

**Selbstcheck vor Rückgabe:** Überprüfe dass (a) jede Aktion im Skript durch Begründung vorgegangen wird, (b) mindestens zwei Selbst-Monitoring-Momente sind included, (c) mindestens ein Fehler oder falsche Biegung wird gezeigt und korrekt, (d) das Skript sich wie echtes Denken nicht ein Vortrag anfühlt, (e) Pause-Punkte für SuS-Interaktion included sind und (f) das Skript innerhalb der Ziel-Dauer bleibt.
```

## Beispiel Output

**Szenario:** *Aufgabe: „Lesen und antworten zu einem unbekannten Gedicht zum ersten Mal — GCSE Englisch-Literatur Stil" / SuS-Niveau: „10. Klasse, können poetische Techniken identifizieren aber wissen nicht wie eine unbekanntes Gedicht strategisch anzufahren — sie neigen zu paniken, einmal lesen und sofort zu beginnen schreiben" / Fachbereich: „GCSE Englisch-Literatur"*

---

## Lautes-Denken-Skript: Erstes Lesen eines unbekannten Gedichtes

**Für:** 10. Klasse GCSE Englisch-Literatur
**Dauer:** 10 Minuten
**Setup:** „Ich werde zeigen, was in meiner Kopf passiert, wenn ich ein Gedicht das ich nie zuvor analysiert habe lese. Ich werde NICHT eine perfekte Analyse zeigen. Ich werde mein echtes Denken zeigen — die Verwirrung, die falschen Vermutungen, die Neu-Lesungen. Schau zu und höre zu. Ich werde ein paar Mal pausieren um zu überprüfen du folgst."

*[LP zeigt ‚Ozymandias' von Percy Bysshe Shelley an der Tafel — oder irgendwelches Gedicht angemessen zur Klasse. Für dieses Beispiel, ‚Ozymandias' nutzen.]*

### Das Skript

„OK. Hier ist ein Gedicht, das ich nie für dich analysiert habe. Lass mich es durchlesen.

*[Liest das ganz Gedicht laut, stetig, ohne zu stoppen.]*

Rechts. Erste Reaktion — ich habe ein grobes Verständnis von was das ist über, aber ich verstehe definitiv nicht alles davon. Das ist normal. Wenn du ein Gedicht einmal liest und denkst, dass du alles verstehen, verpasst du wahrscheinlich etwas. Also ich werde es nochmal lesen, aber diesmal ich werde langsamen und denken.

*[Geht zum Anfang zurück.]*

‚Ich traf einen Reisenden aus einen antiken Land, Wer sagte—'

OK, also das Gedicht startet mit jemand ANDERER erzählend eine Geschichte. Der Dichter beschreibt nicht was er sah — er berichtet was ein Reisender ihm sagte. Das ist eine interessante Wahl. Lass mich das notieren — *[schreibt in Rand: ‚gerahmt Narrative — warum?']* — ich weiß nicht warum noch, aber ein Dichter wählend, sich von der Beschreibung zu entfernen ist üblicherweise deliberate. Ich komme dorthin zurück.

‚Zwei riesig und rumpf-los Beine von Stein stehen in der Wüste...'

Ich stelle mir das vor — zwei riesig Beine, aber kein Körper. Gerade die Beine. In einer Wüste. Also dies ist eine ruiniert Statue. Etwas das einmal vollständig war ist jetzt zerbrochen. *[Schreibt: ‚Zerfall — einmal vollständig, jetzt ruiniert.']*

‚Neben ihnen, im Sand, halb versenkt eine zersplitternd Antlitz liegt, dessen Stirn, Und Falten Lippe und Hohn von kaltem Befehl—'

*[Pausiert.]* OK, ‚Antlitz' — das ist ein Gesicht. Das Gesicht ist halb-begraben im Sand. Und schau die Wörter beschreibend das Gesicht: ‚Stirn,' ‚Falten Lippe,' ‚Hohn von kaltem Befehl.' Dies sind alle negativ — dies ist nicht ein freundlich Gesicht. Dies ist jemand, der aussah kraftvoll und grausam. Lass mich unterstreichen ‚Hohn von kaltem Befehl' — dieser Satz macht viel Arbeit. ‚Hohn' ist Verachtung. ‚Kalt' ist Absence von Warmth oder Mitgefühl. ‚Befehl' ist Kraft. Drei Wörter, und ich habe ein Bild einer Tyrann.

Hmm, warte — ich möchte etwas überprüfen. Bin ich richtig, dass dies etwa Kraft ist? Lass mich voran lesen bevor ich für diese Interpretation engagiere...

‚Sag, dass sein Bildhauer gut jene Leidenschaften las, das noch überleben, gestempelt auf diese lebenlosen Dinge, Die Hand, die sie spottete und das Herz das gefüttert;'

*[Pausiert.]* OK, dies ist schwieriger. Lass mich neu lesen. ‚Sag, dass sein Bildhauer gut jene Leidenschaften las' — der Bildhauer verstand jene Ausdrücke von Kraft gut. ‚Das noch überleben' — die Ausdrücke im Stein-Gesicht überleben, obgleich... ‚gestempelt auf diese lebenlosen Dinge' — sie sind gerade Markierungen auf tot Stein. ‚Die Hand, die sie spottete und das Herz das gefüttert' — wessen Hand? Wessen Herz?

Ich bin verwirrt. Ich werde ehrlich — dies ist der schwierigst Teil des Gedichtes und ich bin nicht sicher, ob ich es got. Lass mich versuchen: ich denke ‚Die Hand, die sie spottete' ist des Bildhauers Hand — der Bildhauer kopierte (‚spottete') jene Ausdrücke. Und ‚das Herz das gefüttert' ist des Herrscher Herz — die Leidenschaften kamen ursprünglich von ihm. Also der Bildhauer Fähigkeit bewahrte des Herrschers Grausamkeit im Stein.

Wirklich, es könnte ein doppelt Meaning von ‚spottete' gibt — der Bildhauer beide kopierte UND verhöhnte des Herrschers. Das ist clever, wenn es absichtlich. *[Schreibt in Rand: ‚spottete = kopiert oder verhöhnt? Beide?']*

**[PAUSE-PUNKT 1]** *[Zu SuS:]* „Stoppe mich hier. Was habe ich bis jetzt getan, das anders ist vom gerade das Gedicht lesend? Sag deinem Partner eine Sache, das du notiert hast über meinen Ansatz." *[Kaltanruf ein Paar. Suchen: Neu-Lesen, schreiben in Ränder, Fragen stellen, Verwirrung zugeben, die Scene visualisieren, Wort-Wahl schauen.]*

OK, weitermachend. Hier ist wo es wirklich interessant wird:

‚Und auf dem Sockel, diese Wörter erscheinen: Mein Name ist Ozymandias, König von Königen; Schau auf meine Werke, ihr Mächtig, und verzweifle!'

JETZT verstehe ich das Gedicht. Ozymandias ist der Herrscher. Er baute diese Statue von sich selbst und schrieb ‚Schau auf meine Werke, ihr Mächtig, und verzweifle!' — er sagt: schau auf mein Imperium, meine Kraft, und sei terrified. Er prahlt.

Aber — und dies ist die Schlüssel — was ist wirklich um die Statue?

‚Nichts außer bleibt. Round der Verfall von dass kolossal Wreck, grenzenlos und nackt die alone und Niveau Sande strecken aus.

Nichts. Die Wüste. Sein ‚Werke' sind weg. Sein Imperium ist weg. Alles, das er baute wurde zerstört Zeit. Alle das bleibt ist eine zerbrochene Statue in der Sand und eine Inscriptionen Prahlerei über Größe, dass nicht mehr existiert.

*[Schreibt: ‚IRONIE — die Prahlerei ist über Kraft, aber alles ist zerstört. Zeit besiegt alle Tyrannen.']*

DASS ist der Punkt des Gedichtes. Und jetzt ich verstehe, warum Shelley den gerahmten Narrative am Anfang nutzte — ‚ich traf einen Reisenden, der sagte.' Shelley addiert ANDERER Layer von Distanz. Er sah nicht mal die Statue sich selbst. Dies ist eine Geschichte innerhalb einer Geschichte — Ozymandias Kraft hat verblasst so viel dass er wird nicht beschrieben firsthand. Er ist ein Gerücht geworden.

**[PAUSE-PUNKT 2]** *[Zu SuS:]* „Was war der Moment, wenn das Gedicht ‚geklickt' für mich? Wann ging ich von verwirrt zu verstehend die Haupt-Idee? Und was habe ich getan, wenn verwirrt — habe ich paniert oder habe ich etwas spezifisch gemacht?" *[Kaltanruf. Suchen: der Kontrast zwischen der Prahlerei und der leeren Wüste; wenn verwirrt, Neu-Lesen und versuchen paraphrasieren.]*

Jetzt, wenn dies ein Exam waren, würde ich zurück gehen und denken über welche Techniken zu schreiben über. Ich würde ‚Hohn von kaltem Befehl' wählen, weil es konzentriert so viel Charakter in drei Wörter. Ich würde schreiben über die Ironie der Inscriptionen gegen die leere Wüste. Und ich würde schreiben über das Bild der zerbrochenen Statue als ein Symbol für die Impermanence von human Kraft.

Aber hier ist die Sache — ich got dort durch LESEND DREI Mal, schreiben in Ränder, zugeben, wenn verwirrt, und nicht panikend, wenn ich eine Linie nicht verstand. Das ist der Prozess. Wenn du einmal liest und sofort beginnst zu schreiben, wirst du die Ironie, die Struktur und die echte Sinn vermissen."

### Sichtbare Strategien

1. **Lies das ganz Gedicht einmal für Gesamtsinn bevor Analysieren.** Nicht stoppe und dissect im erste Lesen.
2. **Neu-Lese mit einem Stift.** Zweites Lesen ist wo Analyse beginnt — annotiere, frage, visualisiere.
3. **Zoom in auf einzelne Wort-Wahlen.** „Hohn von kaltem Befehl" — drei Wörter kann ein ganz Charakterisierung tragen. Zitiere kurz, analysiere tief.
4. **Gib zu und arbeite durch Verwirrung.** Wenn eine Linie keinen Sinn macht, Neu-Lese und paraphrasiere. Verwirrung ist Information, nicht Fehler.
5. **Schau für die Biegung oder Kontrast.** Viele Gedichte hinge auf eine Verschiebung — zwischen der Prahlerei und der Realität, zwischen Erwartet und Überraschung. Finde die Biegung und du findest die Sinn.
6. **Frag „warum machte der Dichter diese Wahl?"** Gerahmt Narrative, Wort-Wahlen, Struktur — diese sind alle absichtlich. Frag warum, nicht gerade was.

### Pause-Punkte

1. **Nach den ersten 5 Minuten** (grob nach Analysieren der ersten Hälfte): Überprüf SuS, die artikulieren können, was die LP tut anders vom gerade Lesen. Dies offenbaren die Prozess-Strategien.
2. **Nach dem „klick" Moment** (wenn die Ironie klar wird): Überprüf SuS können identifizieren, wann und wie Verständnis auftrat — und was die LP tat, wenn verwirrt. Dies normalisiert produktiv Kämpfen.

### Liefer-Notizen

- **Klingt wie du wirklich denkst, nicht ausführend.** Nutze natürlich Zögern: „Hmm," „Warte," „OK also," „Ich bin nicht sicher über dies noch." Wenn das lautes-Denken klingt wie ein polirt Vortrag, wollen SuS nicht glaube, dass es echtes Denken darstellt.
- **NICHT vor-erkläre, was du gerade zu tun bist.** Sag nicht „Jetzt nutze ich die Strategie von Neu-Lesen zur Clarification." Gerade Neu-Lese. SuS sollte die Strategie im Aktion sehen und identifizieren sie selbst (oder im Pause-Punkt Diskussion).
- **Zeige echte Unsicherheit.** Der Moment mit „spottete" (kopiert oder verhöhnt?) sollte sich authentisch ungelöst anfühlen. Sag „Ich denke es könnte bedeuten beide — ich bin nicht sicher" zeigt die Toleranz zu Ambiguität, dass geschickt Leser brauchen und Novizen Leser fehlen.
- **Tempo dich selbst.** 10 Minuten ist fest. Rehearse einmal zu check timing. Es ist besser zu Modell die Erste Hälfte des Gedichtes tief als zu rasen durch das ganz Gedicht oberflächlich.
- **Nach das lautes-Denken, mache die Strategien explizit.** Das lautes-Denken zeigt Strategien im Aktion; ein kurz Debrief (2 Minuten) nennt sie explizit so SuS können sie zu ihrem eigenen Lesen transferieren.

---

## Bekannte Grenzen

1. **Das Skript ist ein Modell, nicht ein Teleprompter.** Die LP muss es in ihrer eigenen Stimme liefern und an SuS-Antworten bei den Pause-Punkte anpassen. Ein lautes-Denken liest verbatim von ein Skript klingt künstlich und besiege den Zweck. LP sollte die Schlüssel-Entscheidungs-Punkte und Selbst-Monitoring-Momente internalisieren, dann sprechen natürlich.

2. **Lautes-Denken funktioniert nur wenn SuS watchend und listening sorgfältig sind.** Wenn das lautes-Denken Hintergrund-Rauschen wird, während SuS engagement, keine Lernen tritt auf. Halte lautes-Denken kurz (8–12 Minuten maximum), include interaktiv Pause-Punkte und folge sofort mit geleiteter Praxis, wo SuS die gleichen Strategien anwenden.

3. **Die Experten-Blindspot ist real und wiederkehrend.** Sogar mit diesem Skript, die LP kann unbewusst Schritte überspringen, dass fühlen sich offensichtlich zu ihnen aber sind unsichtbar zu Novizen. Nach das lautes-Denken, frag SuS: „Gab es irgendein Punkt, wenn ich ahead gesprungen bin und du verloren mich?" Ihre Antworten offenbaren die Experten-Blindspots, dass das Skript vermisste.
