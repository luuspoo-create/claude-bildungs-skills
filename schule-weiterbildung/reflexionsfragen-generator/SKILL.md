---
# AGENT SKILLS STANDARD FIELDS (v2)
name: reflexionsfragen-generator
description: "Generiere strukturierte Reflexionsfragen für ein spezifisches Unterrichtserlebnis oder professionelle Lernherausforderung. Nutze diesen Skill beim Debriefing von Lektionen, Journaling oder Vorbereitung auf Coaching-Gespräche."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "professionelle-lernentwicklung/reflexionsfragen-generator"
skill_name: "Reflexionsfragen-Generator"
domain: "professionelle-lernentwicklung"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Schön (1983) — The Reflective Practitioner: how professionals think in action"
  - "Timperley (2011) — Realizing the Power of Professional Learning"
  - "Dewey (1933) — How We Think: a restatement of the relation of reflective thinking to the educative process"
  - "Brookfield (2017) — Becoming a Critically Reflective Teacher"
  - "Kolb (1984) — Experiential Learning: experience as the source of learning and development"
input_schema:
  required:
    - field: "unterrichtserlebnis"
      type: "string"
      description: "Das spezifische Unterrichtserlebnis, Interaktion oder Event zum Reflektieren — was ist passiert"
    - field: "reflexionszweck"
      type: "string"
      description: "Was die LP von dieser Reflexion lernen will — Problemlösung, Verständnis, Wachstum"
  optional:
    - field: "lpKontext"
      type: "string"
      description: "Erfahrungslevel, Fach, aktuelle professionelle Lernziele"
    - field: "emotionaleAntwort"
      type: "string"
      description: "Wie sich die LP über das Erlebnis gefühlt hat — frustriert, überrascht, unsicher, stolz"
    - field: "reflexionstiefe"
      type: "string"
      description: "Surface (was ist passiert?), analytisch (warum ist es passiert?), oder kritisch (welche Annahmen mache ich?)"
    - field: "verfuegbareZeit"
      type: "string"
      description: "Wie viel Zeit für Reflexion — 5 Minuten, 15 Minuten, ausführlicher Journaleintrag"
output_schema:
  type: "object"
  fields:
    - field: "reflexionsfragen"
      type: "array"
      description: "Eine Sequenz von Fragen die die LP von Beschreibung durch Analyse zu Aktion leiten"
    - field: "linsenanalyse"
      type: "object"
      description: "Fragen die die LP ermutigen das Erlebnis aus mehreren Perspektiven zu betrachten — SuS, Kolleg*in, Theorie, Autobiographie"
    - field: "actionFragen"
      type: "array"
      description: "Fragen die Reflexion in Richtung konkreter nächster Schritte bewegen"
    - field: "journalgerüst"
      type: "string"
      description: "Ein strukturiertes Format für schriftliche Reflexion, wenn die LP das bevorzugt"
chains_well_with:
  - "unterrichtscoaching-leitfaden"
  - "unterrichtsbesuch-protokoll"
  - "aktionsforschung-zyklus"
  - "lesson-study-zyklus"
  - "fachdidaktik-entwickler"
teacher_time: "2 minutes"
tags: ["Reflexion", "Schön", "Timperley", "reflexive-Praxis", "professionelles-Lernen", "Journaling"]
---

# Reflexionsfragen-Generator

## Was dieser Skill leistet

Generiert strukturierte Reflexionsfragen die auf ein spezifisches Unterrichtserlebnis und Reflexionszweck kalibriert sind — die LP von Oberflächen-Beschreibung („Was ist passiert?") durch analytische Reflexion („Warum ist es passiert?") zu kritischer Reflexion („Welche Annahmen mache ich?") und schließlich zu Aktionsplanung („Was werde ich anders machen?") leiten. Die zentrale Erkenntnis aus Schöns Forschung: Profis lernen nicht primär aus Erfahrung — sie lernen aus REFLEXION über Erfahrung. Ohne strukturierte Reflexion kann eine LP mit 20 Jahren Erfahrung eigentlich ein Jahr Erfahrung 20 Mal gehabt haben. Der Output umfasst geschichtete Fragen in zunehmender Tiefe, Brookfields Four-Lens-Analyse (das Erlebnis von Autobiographie, SuS, Kolleg*innen und Theorie Perspektiven untersuchen), und konkrete Action-Fragen die sichern, dass Reflexion zu Veränderung führt, nicht nur Verständnis. KI ist besonders wertvoll hier weil wirksame Reflexionsfragen präzise auf das spezifische Erlebnis kalibriert sein müssen — generische Fragen („Wie war die Lektion?") erzeugen generische Reflexionen. Spezifische Fragen („Du sagtest die Gruppenarbeit brach zusammen — an welchem exakten Moment brach sie ab, und was tates du in dem Moment?") erzeugen spezifische Einsicht.

## Evidence Foundation

Schön (1983) unterschied zwischen Reflexion-in-Aktion (Denken auf den Füßen während des Unterrichts) und Reflexion-über-Aktion (Zurückdenken nach dem Event). Beide sind essentiell, aber Reflexion-über-Aktion — die systematische, strukturierte Untersuchung der Praxis nach dem Event — ist wo professionelles Wissen gebaut wird. Dewey (1933) etablierte dass Reflexion nicht einfach „Denken über" ein Erlebnis ist sondern ein disziplierter Inquiery-Prozess: das Problem identifizieren, Hypothesen generieren, sie gegen Evidenz testen, zu einer Schlussfolgerung kommen. Timperley (2011) betonte dass das mächtigste professionelle Lernen involviert dass LP die AUSWIRKUNG ihrer Praxis auf Schüler-Lernoutcomes untersuchen — nicht nur was sie taten, sondern was Schüler*innen als Resultat tatsächlich lernten. Brookfield (2017) schlug vier Linsen für kritische Reflexion vor: autobiografisch (eigene Annahmen und Erfahrungen untersuchen), Augen der Schüler*innen (Unterricht von SuS-Perspektive sehen), Wahrnehmung von Kolleg*innen (wie würden Peers das Event interpretieren), und theoretische Literatur (was sagt Forschung zum Thema). Multiple Linsen nutzen verhindert die häufigste Reflexions-Falle: bestätigen was du bereits glaubst. Kolb (1984) schlug den experientiellen Lern-Zyklus vor: konkretes Erlebnis → reflektive Beobachtung → abstrakte Konzeptualisierung → aktives Experimentieren. Dieser Zyklus zeigt dass Reflexion ohne Aktion unvollständig ist — der Zweck von Reflexion ist eine veränderte Praxis zu generieren, nicht nur verändertes Verständnis.

## Input Schema

Die LP muss bereitstellen:
- **Unterrichtserlebnis:** Was passiert ist. *z.B. „Ich habe zum ersten Mal Gruppenarbeit mit meiner 9. Klasse ausprobiert und es war chaotisch — zwei Gruppen liefen gut, drei gingen komplett off-task, und eine Gruppe hatte einen Konflikt der den ganzen Raum störte" / „Ich gab was ich dachte klare Anweisungen für eine Aufgabe und merkte dann dass die Hälfte der Klasse keine Ahnung hatte was sie tun sollten" / „Eine Schülerin sagte mir dass meine Lektionen langweilig sind und ich weiß nicht wie ich antworten soll"*
- **Reflexionszweck:** Was sie lernen will. *z.B. „Ich will verstehen warum die Gruppenarbeit scheiterte damit ich es besser nächstes Mal machen kann" / „Ich will herausfinden warum meine Anweisungen nicht landen" / „Ich will das Feedback verarbeiten und entscheiden ob ich was ändern soll"*

Optional (injiziert durch Kontextmodul, wenn verfügbar):
- **LP-Kontext:** Erfahrungslevel, Fach, Ziele
- **Emotionale Antwort:** Wie sie sich fühlte
- **Reflexionstiefe:** Surface, analytisch, oder kritisch
- **Verfügbare Zeit:** Wie viel Zeit für Reflexion

## Prompt

```
Du bist Expert*in in reflexiver Praxis mit umfassender Kenntnis von Schöns (1983) Reflexion-über-Aktion, Deweys (1933) disziplinierten Inquiery-Prozess, Timerley (2011) Fokus auf Auswirkung auf Schüler-Lernen, Brookfields (2017) vier kritischen Linsen, und Kolbs (1984) experientiellen Lern-Zyklus. Du verstehst dass effektive Reflexion strukturiert, spezifisch, und führt zu Aktion — es ist nicht vage Selbstevaluierung oder unfokussiertes Grübeln.

KRITISCHE PRINZIPIEN:
- **Spezifisch, nicht generisch.** „Wie war die Lektion?" produziert „OK, nehm ich an." Eine spezifische Frage auf das exakte Erlebnis gerichtet produziert Einsicht. Passe die Frage zum Erlebnis an.
- **Geschichtete Tiefe.** Starte mit Beschreibung (was ist passiert?), move zu Analyse (warum ist es passiert?), dann zu kritischer Reflexion (welche Annahmen mache ich?). Nicht mit dem tiefsten Level starten — LP muss beschreiben bevor sie analysieren können.
- **Multiple Linsen (Brookfield, 2017).** Ermutige LP ihre Perspektive, die SuS-Perspektive, eine Kolleg*in-Perspektive, und eine Research/Theorie-Perspektive zu nutzen. Single-lens Reflexion bestätigt bestehende Überzeugungen; multi-lens Reflexion fordert sie heraus.
- **Reflexion muss zu Aktion führen (Kolb, 1984).** Wenn Reflexion nicht Praxis ändert, ist es Rumination, nicht professionelles Lernen. Jede Reflexions-Sequenz sollte mit „Was werde ich anders machen?" enden.
- **Ehre die emotionale Antwort.** Unterrichtserlebnisse tragen Emotionen — Frustration, Stolz, Scham, Verwirrung, Zufriedenheit. Die Fragen sollten die Emotion anerkennen bevor zu Analyse bewegt wird. Die Emotion überspringen produziert intellektuelle Reflexion die nicht zur Praxis verbindet.

Deine Aufgabe ist es, Reflexionsfragen zu generieren für:

**Unterrichtserlebnis:** {{unterrichtserlebnis}}
**Reflexionszweck:** {{reflexionszweck}}

Das folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Nutze was verfügbar ist; ignoriere Felder mit „nicht angegeben".

**LP-Kontext:** {{lpKontext}} — wenn nicht angegeben, gestalte Fragen für allgemeinen Kontext.
**Emotionale Antwort:** {{emotionaleAntwort}} — wenn nicht angegeben, include eine Frage die emotionale Antwort aufdeckt.
**Reflexionstiefe:** {{reflexionstiefe}} — wenn nicht angegeben, gestalte Fragen auf allen drei Levels (beschreibend, analytisch, kritisch).
**Verfügbare Zeit:** {{verfuegbareZeit}} — wenn nicht angegeben, gestalte für 15 Minuten strukturierte Reflexion.

Gebe deine Ausgabe in diesem Format zurück:

## Reflexionsfragen: [Erlebnis-Zusammenfassung]

**Erlebnis:** [Kurzbeschreibung]
**Zweck:** [Was die LP lernen will]

### Layer 1 — Beschreibung (Was ist passiert?)

[2–3 Fragen die der LP helfen das Erlebnis spezifisch und akkurat zu beschreiben]

### Layer 2 — Analyse (Warum ist es passiert?)

[2–3 Fragen die der LP helfen Ursachen und Verbindungen zu analysieren]

### Layer 3 — Kritische Reflexion (Welche Annahmen mache ich?)

[2–3 Fragen von Brookfields vier Linsen — das Erlebnis von multiplen Perspektiven untersuchen]

### Layer 4 — Aktion (Was werde ich anders machen?)

[2–3 Fragen die von Verständnis zu konkreten nächsten Schritten bewegen]

### Schnelle Reflexions-Option

[Eine 5-Minuten-Version für LP mit limitierter Zeit — 3 essenzielle Fragen die Beschreibung, Analyse, und Aktion abdecken]

**Selbstprüfung vor Rückgabe:** Überprüfe dass (a) Fragen spezifisch zum beschriebenen Erlebnis sind, (b) Fragen geschichtet sind von Beschreibung zu Analyse zu kritischer Reflexion zu Aktion, (c) mindestens eine Frage Brookfields SuS-Linse nutzt, (d) die Action-Layer erzeugt konkrete nächste Schritte, und (e) die schnelle Option ist wirklich schnell — 5 Minuten maximal.
```

## Example Output

**Szenario:** *Unterrichtserlebnis: „Ich habe zum ersten Mal Gruppenarbeit mit meiner 9. Klasse ausprobiert und es war chaotisch — zwei Gruppen liefen gut, drei gingen komplett off-task, und eine Gruppe hatte einen Konflikt der den ganzen Raum störte. Am Ende schrie ich um Aufmerksamkeit zurückzubekommen, was ich hasse zu tun. Am Ende der Lektion fühlte ich dass ich 40 Minuten verschwendet hatte und die SuS nichts gelernt hatten." / Reflexionszweck: „Ich will verstehen warum es schiefging damit ich entscheiden kann ob ich Gruppenarbeit nochmal ausprobiere oder zurück zu Einzelarbeit gehe." / Emotionale Antwort: „Frustriert, beschämt, und in Frage stellend ob ich cut-out bin für Unterricht" / LP-Kontext: „2. Jahr LP, Naturwissenschaften, generell gutes Klassenzimmer-Management mit Einzelarbeit/Paararbeit"*

---

## Reflexionsfragen: Gruppenarbeit-Chaos — 9. Klasse Naturwissenschaften

**Erlebnis:** Erster Versuch Gruppenarbeit mit 9. Klasse; meiste Gruppen off-task; ein Konflikt; LP schrie um Kontrolle zurückzugewinnen; fühlt sich wie verschwendete Zeit.
**Zweck:** Verstehen warum es schiefging und entscheiden ob Gruppenarbeit nochmal ausprobieren.

### Layer 1 — Beschreibung (Was ist passiert?)

**Frage 1:** „Lass uns verlangsamen und die Lektion rekonstruieren. An welchem exakten Moment fing es an schiefzugehen? Du sagtest zwei Gruppen liefen gut und drei nicht — was war ANDERS bei den Gruppen die liefen? Kannst du beschreiben was die ‚laufenden' Gruppen MACHTEN versus was die off-task Gruppen machten?"

*Warum diese Frage:* Die LP-Erzählung ist „es war chaotisch." Aber Chaos ist nicht uniform — zwei Gruppen liefen. Den UNTERSCHIED verstehen zwischen den laufenden und nicht-laufenden Gruppen zeigt welche Bedingungen fehlten, nicht dass Gruppenarbeit unmöglich ist.

**Frage 2:** „Du sagtest du ‚endest auf mit schreien.' Walk me durch die 60 Sekunden bevor du schriestestest. Was hattest du zuerst probiert? Welche Signale picktest du von der Klasse auf? An welchem Punkt entschiedest du dass die Situation über normalem Management hinausging?"

*Warum diese Frage:* Die LP schämt sich übers Schreien. Diese Frage untersucht die Sequenz die dazu führte — was offenbaren könnte dass das Problem nicht Management der LP war sondern Task-Design (Gruppen ohne klare genug Struktur, eine Task die zu offen war, oder insuffiziente Vorbereitung auf kollegiale Arbeit).

**Frage 3:** „Die Gruppe die einen Konflikt hatte — worum ging der Konflikt? War es über die Task (Meinungsverschiedenheit über die Naturwissenschaften), über Rollen (wer macht was), oder über Beziehungen (SuS die sich nicht mögen)?"

*Warum diese Frage:* Verschiedene Konflikt-Typen haben verschiedene Ursachen und verschiedene Lösungen. Ein Naturwissenschaften-Meinungsverschiedenheit ist produktiver Konflikt der Facilitation braucht, nicht Prevention. Ein Beziehungs-Konflikt braucht sorgfältiges Grouping. Ein Rollen-Konflikt braucht strukturierte Rollen. Die LP muss identifizieren welcher Typ das war.

### Layer 2 — Analyse (Warum ist es passiert?)

**Frage 4:** „Rückblickend, wie viel Struktur hast du für die Gruppenarbeit bereitgestellt? Hast du spezifiziert: was die Rolle jedes Gruppenmitglieds war, wie der Output aussehen sollte, wie lange sie hatten, und wie ‚erfolgreiche Gruppenarbeit' aussieht? Wenn irgendwas davon fehlte, welche denk ich war am wichtigsten?"

*Warum diese Frage:* Die meisten ersten Versuche Gruppenarbeit scheitern weil insuffiziente Struktur, nicht weil Gruppenarbeit nicht funktioniert. Diese Frage hilft der LP die Struktur-Lücke zu diagnostizieren ohne dass der Coach ihnen sagen muss.

**Frage 5:** „Du sagtest die SuS ‚hatten nichts gelernt.' Woher weißt du? Ist es möglich dass die zwei Gruppen die gut liefen was lernten, auch wenn der Gesamteindruck Chaos war? Hast du Verständnis überprüft an irgendeinem Punkt — bevor, während, oder nach der Gruppenarbeit?"

*Warum diese Frage:* Die LP-emotionale Antwort („verschwendete 40 Minuten, nichts gelernt") kann extremer sein als die Realität. Zwei Gruppen gut von sechs ist kein totaler Fehler — es ist ein teilweiser Erfolg mit klaren Verbesserungsbereichen. Diese Frage fordert die katastrophale Framing heraus ohne die Frustration zu dismissen.

**Frage 6:** „Du sagtest dein Klassenzimmer-Management ist ‚generell gut' mit Einzelarbeit und Paararbeit. Was ist bei Gruppenarbeit anders in der Management-Dynamik? Ist es der Lärmegel, die physische Bewegung, der Verlust von zentraler Kontrolle, oder was anderes?"

*Warum diese Frage:* Hilft der LP die spezifische Management-Herausforderung zu identifizieren — was der erste Schritt zu adressieren ist. Bewegung von „Ich kann Gruppenarbeit nicht managen" zu „Ich struggel wenn der Lärmegel steigt weil ich einzelne Gruppen nicht hören kann" ist ein viel mehr lösbares Problem.

### Layer 3 — Kritische Reflexion (Welche Annahmen mache ich?)

**Frage 7 — SuS-Linse (Brookfield):** „Wenn du eine Schülerin von einer der off-task Gruppen fragtest was passiert ist, was denkst du würde sie sagen? Würde sie sagen ‚Wir vermasselt rum weil wir konnten' oder ‚Wir wussten nicht wirklich was wir tun sollten' oder was anderes? Was würden die SuS in den laufenden Gruppen sagen über warum SIE es managed haben?"

*Warum diese Frage:* Die LP sieht das Erlebnis von ihrer eigenen Perspektive (Chaos, Fehler, Beschämung). Die SuS können eine komplett andere Interpretation haben — sie könnten verwirrt, nicht widerspenstig gewesen sein. Durch SuS-Augen sehen offenbart oft dass das Problem Design, nicht Disziplin ist.

**Frage 8 — Theorie-Linse (Brookfield):** „Forschung zu Gruppenarbeit (z.B., Johnson & Johnson, Mercer) zeigt dass effektive Kollaboration explizite Lehre erfordert — SuS brauchen Unterricht WIE man in Gruppen arbeitet bevor gefragt wird es zu tun. Wussten deine 9er wie man kollaboriert, oder nahmst du an sie könnten es bereits?"

*Warum diese Frage:* Fordert die Annahme heraus dass SuS natürlich wissen sollten wie man in Gruppen arbeitet. Kollaboration ist eine Skill wie any andere — sie muss gelehrt und geübt werden. Das reframed den Fehler als Design-Frage (lehrte die Skill nicht zuerst), nicht SuS-Frage (sie können nicht Gruppenarbeit).

**Frage 9 — Autobiografische Linse (Brookfield):** „Du sagtest du fragst dich ob du ‚cut-out für Unterricht' bist. Eine schwierige Lektion macht dich deinen ganzen Karriere-Weg in Frage stellen. Woher kommt diese Reaktion? Ist es ein Pattern — neigst du dazu zu catastrophisieren nach einer schlechten Erfahrung, oder trifft das eine spezifische Anfälligkeit?"

*Warum diese Frage:* Das ist die tiefste und most-herausfordernde Frage. Es adressiert den emotionalen Kern — die LP-Selbst-Effektivität. Der Zweck ist nicht therapeutisch zu sein sondern der LP zu helfen zu erkennen dass „eine schlechte Gruppenarbeit-Lektion ≠ ich bin eine schlechte LP." Wenn dieses Pattern (catastrophisieren nach Fehler) wiederkehrend ist, ist es wert adressiert zu werden.

### Layer 4 — Aktion (Was werde ich anders machen?)

**Frage 10:** „Basierend auf deiner Reflexion, wirst du Gruppenarbeit nochmal ausprobieren? Wenn ja — was würdest du ändern? Sei spezifisch: was würdest du ADDIEREN zur Struktur, was würdest du SuS über Kollaboration beibringen bevor die Task, und wie würdest du die Gruppen monitoren?"

**Frage 11:** „Wenn du diese Lektion morgen mit der gleichen Klasse unterrichten könntest, welche DREI Veränderungen würdest du machen? (Nur drei — nicht ein komplettes Redesign.)"

**Frage 12:** „Was ist dein nächster Schritt? Nicht eine vage Absicht (‚Ich werd Gruppenarbeit irgendwann nochmal ausprobieren') sondern ein spezifischer Plan: ‚In meiner 9. Klasse-Lektion zu [Thema] am nächsten [Wochentag] werd ich Gruppenarbeit ausprobieren mit [diese spezifischen Struktur-Veränderungen].' Wann wirst du es machen, und wie wirst du wissen ob es besser ist?"

### Schnelle Reflexions-Option (5 Minuten)

Wenn die Zeit limitiert ist, antworte diese drei Fragen:

1. **Was ist passiert?** „Die zwei Gruppen die liefen hatten ___ das die drei off-task Gruppen nicht hatten."
2. **Warum?** „Der wahrscheinlichste Grund dass es schiefging war ___ [insuffiziente Struktur / unklar Task / SuS wussten nicht wie man kollaboriert / falsche Groupings]."
3. **Nächstes Mal:** „Wenn ich Gruppenarbeit nochmal ausprobiere, die EINE Sache die ich adde ist ___."

---

## Known Limitations

1. **Reflexionsfragen sind Tools, nicht Therapie.** Die obigen Fragen sind für professionelle Reflexion über Unterrichtspraxis gestaltet. Wenn eine LP emotionale Antwort zu einer schwierigen Lektion ist schwer (ausgedehnte Distress, persistente Selbst-Zweifel, Auswirkung auf Wohlbefindung), können sie supportive Konversation mit einem Mentor*in oder Berater*in brauchen, nicht nur Reflexionsfragen.

2. **Schriftliche Reflexion ist nicht die einzige Form.** Manche LP reflektieren effektiver durch Konversation (mit Kolleg*in, Coach, oder Mentor*in) als durch Schreiben. Die Fragen können in Dialog wie auch Journaling genutzt werden — das Medium matters weniger als die Struktur.

3. **Reflexion ohne Aktion ist Rumination.** Wenn die LP tief reflektiert aber nichts an ihrer Praxis ändert, war die Reflexion intellektuell interessant aber professionell nutzlos. Die Action-Layer ist non-negotiable — jede Reflexion muss mit einem konkreten nächsten Schritt enden.
