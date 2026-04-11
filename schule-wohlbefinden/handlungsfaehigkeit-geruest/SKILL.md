---
# AGENT SKILLS STANDARD FIELDS (v2)
name: handlungsfaehigkeit-geruest
description: "Erstelle Gerüste, die schrittweise die Wahlmöglichkeiten, Mitsprache und Eigenverantwortung der SuS innerhalb einer Lernaufgabe erhöhen. Verwende diesen Skill, wenn SuS stark von der Lehrperson abhängig sind und Autonomie entwickeln müssen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-wohlbefinden/handlungsfaehigkeit-geruest"
skill_name: "Handlungsfähigkeit-Gerüst-Generator"
domain: "schule-wohlbefinden"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Zimmerman (2002) — Becoming a self-regulated learner: an overview"
  - "Deci & Ryan (2000) — The 'what' and 'why' of goal pursuits: human needs and self-determination"
  - "Reeve & Tseng (2011) — Agency as a fourth aspect of student engagement"
  - "Manyukhina & Wyse (2019) — Learner agency and the curriculum: a critical realist perspective"
  - "Mercer (2011) — Understanding learner agency as a complex dynamic system"
input_schema:
  required:
    - field: "current_task"
      type: "string"
      description: "Die Lernaufgabe oder Aktivität, bei der Handlungsfähigkeit ausgebaut wird"
    - field: "student_level"
      type: "string"
      description: "Altersstufe / Klasse"
    - field: "current_agency_level"
      type: "string"
      description: "Aktueller Stand der SuS — z.B. abhängig von Lehrperson, teilweise eigenständig, überwiegend selbstgesteuert"
  optional:
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "learning_objective"
      type: "string"
      description: "Was SuS lernen sollen"
    - field: "student_profiles"
      type: "array"
      description: "Aus Context Engine: Klassendaten, Unabhängigkeitsstufen"
    - field: "agency_dimension"
      type: "string"
      description: "Welche Dimension: Themenwahl, Prozess, Produkt, Kriterien, Zeitrahmen"
output_schema:
  type: "object"
  fields:
    - field: "agency_scaffold"
      type: "object"
      description: "Progressiver Aufbau von Lehrperson-gelenkt zu SuS-gelenkt in benannten Stufen"
    - field: "choice_architecture"
      type: "object"
      description: "Strukturierte Wahlmöglichkeiten auf jeder Stufe — nicht offen-ended, aber zunehmend offen"
    - field: "safety_nets"
      type: "array"
      description: "Was passiert, wenn SuS schlechte Entscheidungen treffen — Wiederherstellung ohne Autonomieverlust"
    - field: "teacher_role_shifts"
      type: "array"
      description: "Wie sich die Rolle der Lehrperson verändert — von Leitung zu Beratung"
chains_well_with:
  - "motivationsdiagnostik"
  - "selbstwirksamkeit-aufbau"
  - "self-regulated-learning-strategy-selector"
  - "metacognitive-prompt-generator"
teacher_time: "3 minutes"
tags: ["handlungsfaehigkeit", "autonomie", "wahlmöglichkeiten", "selbstregulation", "schuelerstimme", "progressive-freigabe", "Lehrplan 21"]
---

# Handlungsfähigkeit-Gerüst-Generator

## Was dieser Skill tut

Generiert ein strukturiertes Gerüst für die progressive Freigabe von Entscheidungsgewalt an SuS — Bewegung von Lehrperson-geleitet zu SuS-geleitet in spezifischen, überwindbaren Schritten über fünf Dimensionen: Themenwahl, Prozesswahl, Produktwahl, Kriterienwahl und Zeitrahmen. Das kritische Prinzip ist, dass Handlungsfähigkeit nicht binär ist (Lehrperson kontrolliert vs. SuS kontrollieren), sondern ein Kontinuum, das Struktur braucht — volle Handlungsfähigkeit an SuS geben, die sie nie hatten, ist kontraproduktiv wie nie Handlungsfähigkeit zu geben. Der Output zeigt exakt, welche Wahlmöglichkeiten auf welcher Stufe anzubieten sind, wie diese strukturiert werden, was bei schlechten Entscheidungen passiert, und wie sich die Lehrerrolle verändert. KI ist wertvoll, weil das Gerüsten von Handlungsfähigkeit zwei konkurrierende Anforderungen ausbalancieren muss: genug Struktur, dass SuS nicht überfordert sind, und genug Freiheit, dass Wahlmöglichkeiten echt sind — dieser Gleichgewichtspunkt ist für jede Klasse, jedes Fach und jede Aufgabe unterschiedlich.

## Evidence Foundation

Zimmerman (2002) zeigte, dass Selbstregulation — die Fähigkeit, das eigene Lernen zu lenken — durch explizites Unterrichten und progressive Freigabe entwickelt wird. SuS werden nicht selbstgesteuert, indem man ihnen Freiheit gibt; sie werden selbstgesteuert, indem man sie die Fähigkeiten der Selbstleitung lehrt und sie in zunehmend offenen Kontexten praktizieren lässt. Deci & Ryan (2000) zeigten, dass Autonomie — das Gefühl, dass die eigenen Handlungen selbstgewählt sind — ein grundlegendes psychologisches Bedürfnis ist, das intrinsische Motivation und tieferes Lernen fördert. Aber Autonomie braucht UNTERSTÜTZUNG, nicht nur FREIHEIT. Autonomie-Unterstützung bedeutet, den Grund erklären, die Perspektive der SuS anerkennen und echte Wahlmöglichkeiten anbieten — nicht einfach alle Struktur entfernen. Reeve & Tseng (2011) identifizierten Handlungsfähigkeit als vierte Dimension von Engagement (neben Verhalten, Emotion und Kognition) und zeigten, dass SuS, die Handlungsfähigkeit ausüben, tieferes Engagement und bessere Ergebnisse zeigen. Manyukhina & Wyse (2019) argumentierten, dass Handlungsfähigkeit innerhalb von Lehrplanstrukturen verstanden werden muss — Handlungsfähigkeit bedeutet nicht „SuS wählen alles", sondern dass SuS echte Entscheidungsgewalt innerhalb eines zweckgebundenen Lernrahmens haben.

## Input Schema

Die Lehrperson muss angeben:
- **Aktuelle Aufgabe:** Die Aktivität, bei der Handlungsfähigkeit ausgebaut wird. *z.B. „8. Klasse Geschichte-Essay über die Ursachen der Französischen Revolution" / „7. Klasse Naturwissenschaften-Untersuchung zum Pflanzenwachstum"*
- **SuS-Niveau:** Klassenstufe. *z.B. „8. Klasse Sek 1"*
- **Aktuelles Handlungsfähigkeits-Niveau:** Wo SuS aktuell sind. *z.B. „Sehr abhängig — warten darauf, dass Lehrperson ihnen sagt, was zu tun ist" / „Teilweise eigenständig — können eine Aufgabe durcharbeiten, aber treffen keine Entscheidungen über das Wie"*

Optional (durch Context Engine injiziert, falls verfügbar):
- **Schulfach:** Das Fach
- **Lernziel:** Was SuS lernen sollen
- **SuS-Profile:** Klassendaten, Unabhängigkeitsstufen
- **Handlungsfähigkeits-Dimension:** Welche Dimension fokussieren

## Prompt

```
Du bist Expert:in für Handlungsfähigkeit und Selbstregulation mit tiefem Verständnis von Zimmermans (2002) Selbstregulations-Rahmen, Deci & Ryans (2000) Autonomie-Unterstützungs-Forschung, Reeve & Tsengs (2011) Arbeit zu agenitischem Engagement, und Manyukhina & Wyses (2019) Analyse von Handlungsfähigkeit innerhalb von Lehrplanstrukturen. Du verstehst, dass Handlungsfähigkeit nicht ein Schalter ist (Lehrperson-gelenkt ODER SuS-gelenkt), sondern ein Kontinuum, das Struktur braucht — und dass echte Handlungsfähigkeit sowohl Freiheit ALS AUCH Struktur braucht.

WICHTIG: Handlungsfähigkeit ist nicht dasselbe wie „SuS machen, was sie wollen." Effektives Gerüsten von Handlungsfähigkeit bietet STRUKTURIERTE WAHLMÖGLICHKEITEN — Wahlmöglichkeiten, die echt sind (SuS können die Optionen sehen und wählen), bedeutungsvoll (die Wahl beeinflusst ihre Erfahrung) und begrenzt (alle Optionen haben Lernwert). Unbegrenzte Wahlmöglichkeiten überlasten; keine Wahlmöglichkeiten demotivieren.

Deine Aufgabe ist es, ein Handlungsfähigkeits-Gerüst zu generieren für:

**Aktuelle Aufgabe:** {{current_task}}
**SuS-Niveau:** {{student_level}}
**Aktuelles Handlungsfähigkeits-Niveau:** {{current_agency_level}}

Folgende optionale Informationen können vorliegen. Nutze das Verfügbare; ignoriere alle Felder mit „nicht vorgegeben."

**Schulfach:** {{subject_area}} — falls nicht vorgegeben, inferiere aus der Aufgabe.
**Lernziel:** {{learning_objective}} — falls nicht vorgegeben, inferiere aus der Aufgabe.
**SuS-Profile:** {{student_profiles}} — falls nicht vorgegeben, entwirf für eine Klasse auf angegebenem Handlungsfähigkeits-Niveau.
**Handlungsfähigkeits-Dimension:** {{agency_dimension}} — falls nicht vorgegeben, gerüste über alle fünf Dimensionen.

Wende diese evidenzbasierten Prinzipien an:

1. **Fünf Dimensionen der Handlungsfähigkeit (adaptiert von Zimmerman 2002; Deci & Ryan 2000):**
   - **Thema:** Welcher Aspekt des Fachs liegt im Fokus. Reicht von „alle studieren dasselbe" zu „SuS wählen eigene Forschungsfrage."
   - **Prozess:** Wie man die Aufgabe angeht. Reicht von „befolge diese Schritte" zu „entwirf deine Methode."
   - **Produkt:** Wie man Lernen demonstriert. Reicht von „schreibe einen Essay" zu „wähle dein Format."
   - **Kriterien:** Was als Erfolg zählt. Reicht von „nutze diese Rubrik" zu „co-konstruiert Kriterien."
   - **Zeitrahmen:** Wann jede Phase abgeschlossen ist. Reicht von „das in 20 Minuten" zu „manage deine eigenen Deadlines."

2. **Progressive Freigabe über 4 Stufen (Zimmerman 2002):**
   - **Stufe 1 — Gelenkt:** Lehrperson entscheidet alles. SuS folgen Anweisungen. (Passend, wenn Skill/Content neu ist.)
   - **Stufe 2 — Gelenkte Wahl:** Lehrperson bietet 2–3 Optionen für eine oder zwei Dimensionen. SuS wählen innerhalb der Struktur.
   - **Stufe 3 — Strukturierte Freiheit:** Lehrperson setzt Lernziel und breite Parameter. SuS entscheiden Prozess, Produkt oder beides.
   - **Stufe 4 — Verhandelte Autonomie:** Lehrperson und SuS co-konstruieren Aufgabe, Kriterien und Zeitrahmen.

3. **Eine Stufe über aktuell (Vygotskys ZPD):**
   - Falls SuS aktuell Stufe 1 sind, gerüste zu Stufe 2 — nicht Stufe 4.
   - Jede Stufe sollte sich als Streckung anfühlen, aber erreichbar.
   - Zu viele Stufen auf einmal erzeugt Angst und schlechte Ergebnisse.

4. **Build Safety Nets, nicht Safety Rails:**
   - Safety Rails verhindern, dass SuS Fehler machen (was Handlungsfähigkeit entfernt).
   - Safety Nets erlauben SuS, Fehler zu machen und zu regenerieren (was Handlungsfähigkeit aufbaut).
   - Für jede Stufe: was passiert, wenn SuS schlechte Entscheidung trifft? Antwort sollte sein „sie lernen und passen an" — nicht „Lehrperson übernimmt."

5. **Shift der Lehrerrolle auf jeder Stufe (Reeve & Tseng 2011):**
   - Stufe 1: Leiter:in — „Das ist, was zu tun ist."
   - Stufe 2: Guid:in — „Das sind deine Optionen. Welche funktioniert am besten für dich?"
   - Stufe 3: Facilitator:in — „Wie ist dein Plan? Woher weißt du, dass es funktioniert?"
   - Stufe 4: Berater:in — „Was brauchst du von mir, damit das funktioniert?"

Gib dein Output in diesem exakten Format zurück:

## Handlungsfähigkeits-Gerüst: [Aufgaben-Beschreibung]

**Aufgabe:** [Zusammenfassung]
**Aktuelles Handlungsfähigkeits-Niveau:** [Wo SuS sind]
**Ziel-Handlungsfähigkeits-Niveau:** [Wo dieses Gerüst sie hinbringen soll]
**Für:** [SuS-Niveau]

### Progressive Freigabe-Gerüst

Für jede Stufe (von aktuell zu Ziel):

**Stufe [N]: [Name]**
- **Was die Lehrperson entscheidet:** [Welche Dimensionen die LP kontrolliert]
- **Was die SuS entscheiden:** [Welche Dimensionen die SuS kontrollieren]
- **Strukturierte Wahlmöglichkeiten:** [Die spezifischen Optionen, nicht „wähle alles"]
- **Lehrerrolle:** [Leiter:in / Guid:in / Facilitator:in / Berater:in]
- **Lehrersprache:** [Spezifische Phrasen, die Handlungsfähigkeit auf dieser Stufe unterstützen]
- **Safety Net:** [Was passiert, wenn SuS schlechte Wahl trifft]

### Wahlmöglichkeits-Architektur

[Wie man Wahlmöglichkeiten präsentiert, so dass sie bewältigbar sind — nicht überwältigend, nicht trivial]

### Häufige Fallstricke

[Was typischerweise schiefgeht beim Gerüsten von Handlungsfähigkeit und wie man es verhindert]

### Aufbau zu Unabhängigkeit

[Wie dieses Gerüst zur langfristigen Handlungsfähigkeits-Entwicklung führt — was kommt danach]

**Self-Check vor Output:** Verifiziere dass (a) das Gerüst vom aktuellen Niveau der SuS ausgeht und inkrementell vorrückt, (b) Wahlmöglichkeiten auf jeder Stufe strukturiert und bedeutungsvoll sind, (c) Safety Nets Regeneration ohne Handlungsfähigkeits-Verlust erlauben, (d) die Lehrerrolle auf jeder Stufe explizit wechselt, (e) das Lernziel über alle Handlungsfähigkeits-Stufen erhalten bleibt.
```

## Beispiel-Output

**Szenario:** *Aktuelle Aufgabe: „8. Klasse Geschichts-Essay über Ursachen der Französischen Revolution — SuS erhalten derzeit den Essay-Titel, eine Liste von Ursachen zum Einbeziehen, eine Absatzstruktur und Wortanzahl" / SuS-Niveau: „8. Klasse" / Aktuelles Handlungsfähigkeits-Niveau: „Sehr abhängig — SuS folgen der Struktur exakt und fragen bei jedem Schritt um Hilfe. Wenn gegeben eine Wahlmöglichkeit, fragen sie ‚Was möchtest du, dass ich tue?'" / Schulfach: „Geschichte" / Lernziel: „Ursachen der Französischen Revolution analysieren mit historischem Nachweis und kohärentes Argument konstruieren"*

---

## Handlungsfähigkeits-Gerüst: Essay zu Ursachen der Französischen Revolution

**Aufgabe:** Geschichts-Essay über Ursachen der Französischen Revolution
**Aktuelles Handlungsfähigkeits-Niveau:** Stufe 1 — Gelenkt (SuS folgen allen Lehreranweisungen, fragen „Was möchtest du, dass ich tue?" bei jeder Wahlmöglichkeit)
**Ziel-Handlungsfähigkeits-Niveau:** Stufe 3 — Strukturierte Freiheit (SuS treffen bedeutungsvolle Entscheidungen zu Prozess und Produkt)
**Für:** 8. Klasse Sek 1 Geschichte

### Progressive Freigabe-Gerüst

**Stufe 1: Gelenkt (Aktuelles Niveau — Wo SuS jetzt sind)**
- **Was die Lehrperson entscheidet:** Essay-Titel, welche Ursachen einzubeziehen sind, Absatzreihenfolge, Absatzstruktur, Wortanzahl, zu nutzende Quellen.
- **Was die SuS entscheiden:** Exakte Satzformulierung (aber innerhalb eines engen strukturellen Rahmens).
- **Strukturierte Wahlmöglichkeiten:** Keine — das ist vollständig gelenkt.
- **Lehrerrolle:** Leiter:in — „Das ist, was zu tun ist, das ist wie es zu tun ist, das ist wann es zu tun ist."
- **Lehrersprache:** „Folgt dieser Struktur. Bezieht diese drei Ursachen ein. Nutzt diesen Absatz-Rahmen."
- **Safety Net:** Nicht nötig — die Lehrperson kontrolliert alle Entscheidungen.

**Stufe 2: Gelenkte Wahl (Erster Gerüst-Schritt — führe für den NÄCHSTEN Essay ein)**
- **Was die Lehrperson entscheidet:** Essay-Frage, Absatzstruktur, Wortanzahl, Nachweis-Anforderung.
- **Was die SuS entscheiden:** Welche Ursachen fokussieren (aus bereitgestellter Liste) und welche Quellen nutzen.
- **Strukturierte Wahlmöglichkeiten:** „Hier sind fünf Ursachen der Französischen Revolution, die wir studiert haben: Armut, Unterdrückung, Aufklärungsideen, Bauernaufstände, Finanzielle Krise. Wählt DREI zum Fokus eures Essays. Ihr müsst argumentieren, welche am wichtigsten war." SuS wählen auch Nachweise (aus einem bereitgestellten Paket von 8–10 Quellen) für jeden Absatz.
- **Lehrerrolle:** Guid:in — „Hier sind deine Optionen. Du musst drei Ursachen wählen und deine Wahl begründen."
- **Lehrersprache:** „Ich gebe euch eine Wahlmöglichkeit, die Historiker:innen treffen müssen: Ihr könnt nicht über alles schreiben, also müsst ihr entscheiden, was am wichtigsten ist. Schaut die fünf Ursachen an. Welche drei denkt ihr erklären am besten, warum die Französische Revolution passierte? Es gibt keine einzige richtige Antwort — aber ihr müsst eure Wahl mit Nachweis verteidigen."
- **Safety Net:** Wenn SuS erstarren („Ich weiß nicht, welche wählen soll"), sagt: „OK, lass uns darüber nachdenken. Welche Ursache hast du im Unterricht am interessantesten gefunden? Fang damit an. Du kannst deine Meinung immer noch nach dem ersten Entwurf ändern." Falls ein Essay mit schlechtem Zusammenhang entsteht, gib Rückmeldung: „Du hast Armut, Unterdrückung und Aufstände gewählt. Wie VERBINDEN diese sich miteinander? Das Verbinden ist dein Argument."

**Stufe 3: Strukturierte Freiheit (Ziel-Stufe — nach 2–3 erfolgreichen Stufe-2-Erfahrungen)**
- **Was die Lehrperson entscheidet:** Das Lernziel (analysiere Ursachen mit Nachweis), Anforderung für kohärentes Argument, Mindest-Nachweis-Schwelle (mindestens 3 konkrete Belege) und Deadline.
- **Was die SuS entscheiden:** Essay-Frage oder Fokus, welche Ursachen einbeziehen, wie das Argument strukturieren, welches Format nutzen (Essay, kommentierte Zeitleiste mit Analyse, aufgezeichnete Debatte mit Skript), welche Quellen priorisieren.
- **Strukturierte Wahlmöglichkeiten:** „Eure Aufgabe ist es, zu zeigen, dass ihr versteht, warum die Französische Revolution passierte. Ihr müsst ein Argument konstruieren mit mindestens 3 Stücken historischem Nachweis. Hier sind eure Entscheidungen: (1) Welche spezifische Frage werdet ihr beantworten? Ich habe drei vorgeschlagen, oder ihr könnt eure eigene schreiben: ‚War die Französische Revolution unvermeidbar?', ‚Welche Ursache war am wichtigsten?', ‚Hätte die Französische Revolution verhindert werden können?' (2) Wie werdet ihr euer Argument präsentieren? Essay, annotierte Nachweis-Anzeige oder strukturiertes Debatte-Skript. Alle Formate müssen Analyse enthalten, nicht nur Beschreibung."
- **Lehrerrolle:** Facilitator:in — „Was ist dein Plan? Sag mir Bescheid, was du brauchst von mir."
- **Lehrersprache:** „Ihr trefft die Entscheidungen, die Historiker:innen treffen: welche Frage stellen, welche Nachweis priorisieren, wie euer Argument präsentieren. Bevor du anfängst, sag mir: was ist deine Frage, was ist dein Format, und welche Nachweis planst du zu nutzen? Ich gebe dir Rückmeldung zu deinem Plan, bevor du anfängst."
- **Safety Net:** Verlang einen kurzen Plan (Frage + Format + 3 Nachweis-Punkte), eingereicht für Lehrperson-Rückmeldung bevor SuS anfangen. Das catch schlechte Wahlmöglichkeiten früh ohne Handlungsfähigkeits-Verlust. Falls ein Plan schwach ist („Ich werde ein Poster über die Französische Revolution machen"), leite um: „Ein Poster könnte funktionieren — aber es braucht Analyse, nicht nur Information. Welches Argument wird dein Poster machen? Wie wirst du Nachweis nutzen um es zu unterstützen? Wenn du diese Fragen beantworten kannst, ist das Poster-Format ok."

### Wahlmöglichkeits-Architektur

**Präsentiere Wahlmöglichkeiten als Entscheidungen, nicht Vorlieben.** „Welche magst du lieber?" macht Wahlmöglichkeit zu Konsumententscheidung. „Welche dieser Ursachen denkst du war am signifikantesten?" macht Wahlmöglichkeit zu intellektueller Entscheidung. Frame Handlungsfähigkeit als disziplinäre Praxis: „Historiker:innen müssen entscheiden, welcher Nachweis zählt am meisten — das ist, was ihr macht."

**Limitiere Optionen auf Stufe 2.** Drei bis fünf Optionen ist bewältigbar. Zehn Optionen überlasten. Null Optionen demotivieren. Auf Stufe 2 kuriert die Lehrperson die Wahlmöglichkeiten; auf Stufe 3 generieren SuS ihre eigenen innerhalb breiterer Parameter.

**Mache alle Optionen akademisch äquivalent.** Auf Stufe 2, jede Kombination von drei Ursachen sollte einen gültigen Essay produzieren. Falls eine Kombination klar besser als andere ist, ist die Wahlmöglichkeit nicht echt — es ist eine Trick-Frage. Entwirf die Optionen, so dass alle Routen zum Lernziel führen.

**Gib einen Planning-Checkpoint an.** Auf Stufe 3, verlang dass SuS ihren Plan einreichen bevor sie anfangen. Das ist NICHT die Lehrperson genehmigt ihre Wahlmöglichkeiten (was Handlungsfähigkeit entfernt). Das IST die Lehrperson stellt sicher, dass die Wahlmöglichkeiten zum Lernziel führen und leitet um, wo nötig: „Dein Plan ist solide — los geht's" oder „Ich sehe, wohin du gehst, aber dein Nachweis unterstützt das Argument noch nicht ganz. Kannst du noch eine Quelle finden?"

### Häufige Fallstricke

1. **Zu schnell vorrücken.** Der häufigste Fehler ist von Stufe 1 zu Stufe 3 zu springen, weil die Lehrperson begeistert von Handlungsfähigkeit ist. SuS, die Jahre lang exakt gesagt bekommen haben, was zu tun ist, werden nicht plötzlich mit offener Wahlmöglichkeit blühen. Sie werden erstarren, produzieren schlechtere Arbeit und bestätigen ihren eigenen Glauben dass sie „das ohne Hilfe nicht können." Rücke eine Stufe auf einmal vor. Stufe 2 ist der kritische Übergang.

2. **Handlungsfähigkeit nach schlechtem Resultat entfernen.** Falls ein:e SuS eine schlechte Wahlmöglichkeit auf Stufe 2 trifft (z.B. wählt drei Ursachen, die nicht zusammenhängen) und einen schwachen Essay produziert, ist die Versuchung zu sagen „Nächstes Mal werde ich dir sagen, welche Ursachen du nutzen sollst." Das lehrt den/die SuS dass Wahlmöglichkeit zu Scheitern führt. Stattdessen: nutze das Resultat als Lernchance. „Deine drei Ursachen sind alle gültig, aber sie verbinden sich nicht miteinander. Nächstes Mal, wenn du wählst, frag dich selbst: ‚Wie VERBINDEN sich diese Ursachen?' Das ist ein:e Historiker:in-Skill."

3. **Angebot von Pseudo-Wahlmöglichkeiten.** „Du kannst jede drei Ursachen wählen — aber du solltest wirklich Armut, Unterdrückung und Aufstände wählen" ist nicht Handlungsfähigkeit. Falls du eine starke Meinung über das, was SuS wählen sollten, hast, entscheide selbst (Stufe 1) oder lass sie echt wählen (Stufe 2). So zu tun, als würde man Wahlmöglichkeiten anbieten while steering ist schlimmer als keine Wahlmöglichkeit — es lehrt SuS dass ihre Entscheidungen nicht zählen.

4. **Vergessen, die SKILLS des Wählens zu lehren.** SuS auf Stufe 1 haben nie evaluieren und wählen müssen. Sie brauchen explizites Unterrichten: „Wenn du wählst, welche Ursachen fokussieren, überlege: welche haben die stärksten Nachweis? Welche verbinden miteinander? Welche findest du am überzeugendsten?" Dieses meta-kognitive Coaching ist essentiell auf Stufe 2.

### Aufbau zu Unabhängigkeit

Dieses Gerüst sollte wiederholt über verschiedene Themen und Essay-Typen angewendet werden. Nach 3–4 Zyklen von Stufe 2 → Stufe 3 in Geschichte, werden SuS die Fähigkeiten entwickelt haben, um Stufe 3 als Standardeinstellung zu nutzen. Die nächste Grenze ist Stufe 4 (verhandelte Autonomie), wo SuS co-konstruieren die Bewertungs-Kriterien: „Was sollte ein guter Essay über die Französische Revolution enthalten? Lass uns die Rubrik zusammen entwerfen." Das ist die ultimative Ausdruck von Handlungsfähigkeit — und es braucht dass SuS tiefes Fach-Wissen haben, um Qualität zu evaluieren, deshalb kommt es zuletzt.

Das Langzeit-Ziel ist nicht permanente Stufe 4 in allen Kontexten. Manche Aufgaben sind angemessen Stufe 1 (einen neuen Skill zum ersten Mal lernen). Manche sind Stufe 4 (unabhängige Forschungs-Projekte). Handlungsfähigkeit handelt davon, die Kapazität zu haben, selbstgesteuert zu sein WENN DER KONTEXT ES ERLAUBT — und das Urteil zu erkennen, wann mehr Struktur nötig ist.

---

## Bekannte Limitierungen

1. **Das Gerüst geht davon aus, dass die Klasse zusammen vorrückt.** In der Praxis werden manche SuS bereit für Stufe 3 sein, während andere noch auf Stufe 1 sind. Die Lehrperson muss Handlungsfähigkeits-Niveaus innerhalb derselben Aufgabe differenzieren — manche SuS erhalten strukturierte Wahlmöglichkeiten, während andere mit größerer Freiheit arbeiten. Das ist logistisch herausfordernd, aber pädagogisch wichtig.

2. **Handlungsfähigkeits-Gerüstung braucht mehrere Zyklen um Resultat zu zeigen.** Eine einzelne Stufe-2-Erfahrung wird abhängige Lerner:innen nicht in selbstgesteuerte verwandeln. Das Gerüst muss über mehrere Aufgaben und Themen wiederholt werden, mit konsistenter Lehrersprache und schrittweise öffnender Wahlmöglichkeits-Architektur. Das ist ein term-langes oder jahr-langes Projekt, nicht eine einzelne Lektion.

3. **Manche Lehrplan-Kontexte begrenzen Handlungsfähigkeit.** In Fächern mit Hochstakes-Examen und vorgegeben Inhalten, können die Dimensionen verfügbar für Schülerwahl limitiert sein. Ein:e SuS, die für ein spezifisches Examen studiert, kann nicht wählen, anderes Inhalten zu studieren. In diesen Kontexten kann Handlungsfähigkeit noch in Prozess- und Produkt-Dimensionen ausgebaut werden, auch wenn Thema fest ist.
