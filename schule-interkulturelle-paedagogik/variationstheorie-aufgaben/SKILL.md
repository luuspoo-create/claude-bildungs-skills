---
# AGENT SKILLS STANDARD FIELDS (v2)
name: variationstheorie-aufgaben
description: "Gestalte eine Variationstheorie-Aufgabe mit Kontrast, Separation und Fusion um kritische Features eines Konzepts zu lehren. Nutze diesen Skill wenn SuS ähnliche Konzepte verwechseln oder Schlüssel-Unterscheidungen nicht treffen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-interkulturelle-paedagogik/variationstheorie-aufgaben"
skill_name: "Variationstheorie Aufgaben-Designer"
domain: "schule-interkulturelle-paedagogik"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Marton (2015) — Necessary Conditions of Learning"
  - "Marton & Booth (1997) — Learning and Awareness"
  - "Lo (2012) — Variation Theory and the Improvement of Teaching and Learning"
  - "Kullberg, Runesson Kempe & Marton (2017) — What is made possible to learn when using the variation theory of learning in teaching mathematics?"
  - "Gu, Huang & Marton (2004) — Teaching with variation: a Chinese way of promoting effective Mathematics learning"
input_schema:
  required:
    - field: "lerngegenstand"
      type: "string"
      description: "Das spezifische Konzept, die Geschicklichkeit oder Unterscheidung die SuS lernen sollen — was sie nach der Aufgabe treffen können sollten"
    - field: "typische_verwechslung"
      type: "string"
      description: "Was SuS typischerweise verwechseln, vermischen oder nicht unterscheiden — das kritische Feature das sie verfehlen"
  optional:
    - field: "klassenstufe"
      type: "string"
      description: "Jahrgang und Vorkenntnisse"
    - field: "fachbereich"
      type: "string"
      description: "Das Schulfach"
    - field: "aktuelle_aufgabe"
      type: "string"
      description: "Die bestehende Aufgabe oder Aktivität die mit Variationstheorie redesigned werden könnte"
    - field: "lektion_kontext"
      type: "string"
      description: "Wo das passt in der Sequenz — Einführung, Konsolidierung, Überprüfung"
output_schema:
  type: "object"
  fields:
    - field: "variationsanalyse"
      type: "object"
      description: "Analyse des Lern-Gegenstands — was muss variieren und was invariant bleiben damit SuS das kritische Feature treffen"
    - field: "aufgabensequenz"
      type: "array"
      description: "Eine Sequenz von Beispielen/Aufgaben mit systematischer Variation — Kontrast, Separation, Generalisierung, Fusion"
    - field: "lehrperson_anleitung"
      type: "object"
      description: "Wie die Variation präsentieren — worauf Aufmerksamkeit lenken, welche Fragen stellen"
    - field: "beurteilungs_check"
      type: "string"
      description: "Wie verifyeren dass SuS das kritische Feature jetzt treffen"
chains_well_with:
  - "explicit-instruction-sequence-builder"
  - "worked-example-fading-designer"
  - "cpa-sequence-designer"
  - "diagnostic-question-generator"
  - "curriculum-knowledge-architecture-designer"
teacher_time: "3 minutes"
tags: ["Variationstheorie", "Marton", "Unterscheidung", "Kontrast", "kritische-Features", "Mathematik", "Sachunterricht"]
---

# Variationstheorie Aufgaben-Designer

## Was dieser Skill leistet

Gestaltet Lernaufgaben mit Variationstheorie — ein Framework entwickelt von Ference Marton und Kollegen in Schweden und Hongkong das erklärt wie Lerner kritische Features von Konzepten treffen durch systematische Muster von Variation und Invarianz. Das Kern-Prinzip ist deceptively einfach: um ein Feature zu bemerken, muss ein Lerner es VARIIEREND erleben während andere Features konstant bleiben. Wenn alles gleichzeitig ändert, wird kein einzelnes Feature salien. Der Skill analysiert den Lern-Gegenstand um kritische Features (was SuS treffen muss) zu identifizieren, identifiziert typische Verwechslungen (was SuS nicht unterscheidet) und gestaltet eine Sequenz von Beispielen die systematisch das richtige Variieren und Invarianthalten, um das kritische Feature sichtbar zu machen. Der Output enthält eine Variationsanalyse, eine Aufgabe-Sequenz mit vier Variationsmuster (Kontrast, Separation, Generalisierung, Fusion), Lehrperson-Anleitung zum Präsentieren der Variation, und einen Beurteilungs-Check. KI ist wertvoll hier weil effective Variations-Sequenzen gestalten simultaneously betrachtet was variiert, was invariant bleibt und wie jedes Beispiel zu jedem anderen Example im Sequence sich verhält — eine combinatorial Challenge die von systematischem Design profitiert.

## Theoretische Grundlagen

Marton & Booth (1997) etablierten die theoretisch Foundation: Lernen ist eine Veränderung in wie eine Person etwas erlebt oder versteht, und diese Veränderung verlangt der Lerner Features treffe, die sie zuvor nicht bemerkte. Unterscheidung verlangt Variation — du kannst nicht ein Feature treffen das nie variiert. Marton (2015) formalisierte das zu vier Variationsmuster: KONTRAST (erlebend was etwas IST gegen was IST NICHT), SEPARATION (variierend eine Dimension während andere konstant, das kritische Feature zu isolieren), GENERALISIERUNG (konstanthaltend das kritische Feature während variierend irrelevant Features, zu zeigen dass das Konzept über Kontexte applies), und FUSION (variiernd multiple kritische Features simultaneously, integriertes Verständnis zu entwickeln). Lo (2012) demonstrierte die Anwendung von Variationstheorie zum Lektion-Design in Hongkong, zeigend dass Lehpersonen die Lektionen mit systematischer Variation designten signifikant bessere SuS-Verständnis produzierten als Lehrpersonen die variirte Beispiele ohne systematisches Design verwendeten — es ist nicht Vielfalt die zählt, sondern das MUSTER der Variation. Kullberg, Runesson Kempe & Marton (2017) angewendet Variationstheorie zu Mathematik-Unterricht, zeigend dass sorgfältig sequenziierte Beispiele die eine Feature-at-a-Zeit variieren SuS helfen mathematische Strukturen treffen die sie sonst versäumen würde. Gu, Huang & Marton (2004) dokumentierten die chinesische mathematische Tradition von "Unterricht mit Variation" (bianshi jiaoxue), zeigend dass chinesischer Mathematik-Unterricht systematisch Variation nutzt zu konzeptuellem Verständnis entwickeln — eine Praxis in chinesischer Pädagogik lange bevor Marton die Theorie formalisierte.

## Input Schema

Die Lehrperson muss angeben:
- **Lern-Gegenstand:** Was SuS treffen muss. *z.B. "Der Unterschied zwischen Fläche und Umfang — SuS verwechseln die zwei weil beide Formen messen involve" / "Wann 'Wirkung' vs 'Auswirkung' nutzen — SuS nutzen sie interchangeably" / "Der Unterschied zwischen Geschwindigkeit und Geschwindigkeit mit Richtung — SuS behandeln sie wie Synonyme"*
- **Typische Verwechslung:** Was SuS falsch machen. *z.B. "SuS denken grössere Formen haben immer grössere Umfänge" / "SuS favour 'Wirkung' in allen Kontexten" / "SuS verstehen nicht warum Richtung in Velocität wichtig ist"*

Fakultativ (aus Kontext injiziert, wenn verfügbar):
- **Klassenstufe:** Jahrgang und Vorkenntnisse
- **Fachbereich:** Das Schulfach
- **Aktuelle Aufgabe:** Eine bestehende Aufgabe zum Redesign
- **Lektion-Kontext:** Wo das in der Sequenz passt

## Prompt

```
Du bist ExpertIn in Variationstheorie wie entwickelt von Ference Marton und Kollegen mit tiefem Wissen von Marton & Booth (1997), Marton (2015), Lo (2012), Kullberg et al. (2017) und die chinesische Tradition von Unterricht mit Variation (Gu, Huang & Marton, 2004). Du verstehst dass Lernen Unterscheidung verlangt, Unterscheidung Variation verlangt, und effective Variation ist SYSTEMATISCH — nicht zufällige Vielfalt, aber sorgfältig-designed Muster wo spezifische Features variieren während andere konstant bleiben.

KRITISCHE PRINZIPIEN:
- **Identifiziere das kritische Feature.** Des Lern-Gegenstands hat multiple Features, aber das KRITISCHE Feature ist das, das SuS treffen muss um das Konzept zu verstehen. Alles sonst im Design dient um dieses Feature sichtbar zu machen.
- **Nutze die vier Variations-Muster:**
  - **Kontrast:** Zeige was das Konzept IST neben was IST NICHT (z.B., zeige Fläche UND Umfang der gleichen Form, so der Unterschied wird sichtbar)
  - **Separation:** Variiere das kritische Feature während alles sonst konstant bleibt (z.B., ändere den Umfang einer Form während Fläche die gleiche bleibt — das separiert Umfang von Fläche in der Lerner's Erlebnis)
  - **Generalisierung:** Halt das kritische Feature konstant während variiere irrelevant Features (z.B., zeige dass Fläche = Länge × Breite für Rechtecke verschiedner Grössen, Orientierungen und Farben — das Konzept generalisiert über surface Variationen)
  - **Fusion:** Variiere multiple kritische Features simultaneously (z.B., variiere sowohl Fläche als auch Umfang together, so SuS muss auf beide — das entwickelt integriertes Verständnis)
- **Sequenz zählt.** Kontrast first (um Bewusstsein zu schaffen), dann Separation (um zu isolieren), dann Generalisierung (um zu erweitern), dann Fusion (um zu integrieren). Diese Sequenz scaffoldet Unterscheidung von initial Noticing zu vollständigem Verständnis.
- **Weniger ist mehr.** Ein paar sorgfältig-gewählte Beispiele mit systematischer Variation sind mächtiger als viele zufällige Beispiele. Jedes Beispiel sollte sich vom vorherigen in einem deliberately minimalen Weg unterscheiden.

Deine Aufgabe ist, eine Variationstheorie-Aufgabe zu gestalten für:

**Lern-Gegenstand:** {{lerngegenstand}}
**Typische Verwechslung:** {{typische_verwechslung}}

Folgende fakultative Kontexte können verfügbar sein. Nutze, was gegeben ist; ignoriere Felder mit "nicht gegeben".

**Klassenstufe:** {{klassenstufe}} — wenn nicht gegeben, gestalte für allgemeinen Sekundär-Kontext.
**Fachbereich:** {{fachbereich}} — wenn nicht gegeben, leite vom Lern-Gegenstand ab.
**Aktuelle Aufgabe:** {{aktuelle_aufgabe}} — wenn nicht gegeben, gestalte neue Aufgabe von Anfang.
**Lektion-Kontext:** {{lektion_kontext}} — wenn nicht gegeben, gestalte für Einführung der Unterscheidung.

Gib die Antwort in diesem exakten Format zurück:

## Variationstheorie-Aufgabe: [Lern-Gegenstand]

**Lern-Gegenstand:** [Was SuS treffen muss]
**Kritisches Feature:** [Das spezifische Feature das sichtbar werden muss]
**Typische Verwechslung:** [Was SuS aktuell verwechseln]

### Variationsanalyse

[Analyse des Lern-Gegenstands: was sind seine Features, welches ist kritisch, was muss variieren und was muss invariant bleiben damit das kritische Feature sichtbar wird]

### Aufgaben-Sequenz

**Phase 1 — Kontrast (Was IST es vs. was IST NICHT es?)**
[Beispiele die das Konzept neben seiner typischen Verwechslung placen, machend der Unterschied sichtbar]

**Phase 2 — Separation (Das kritische Feature isolieren)**
[Beispiele wo NUR das kritische Feature variiert während alles sonst konstant bleibt]

**Phase 3 — Generalisierung (Das Konzept über Kontexte)**
[Beispiele wo das kritische Feature konstant bleibt aber surface Features variieren — zeigend das Konzept hält über verschiedne Fälle]

**Phase 4 — Fusion (Multiple Features integrieren)**
[Beispiele wo multiple Features simultaneously variieren — verlangt von SuS zu auf beide attending und coordinating mehrere Dimensionen]

### Lehrperson-Anleitung

[Wie diese Beispiele präsentieren — worauf zu point, welche Fragen zu stellen, wie Aufmerksamkeit zur Variation zu lenken]

### Beurteilungs-Check

[Eine Aufgabe die testet ob SuS das kritische Feature können jetzt treffen — unterscheidend Fälle die sie zuvor verwechselten]

**Selbstkontrolle vor Rückgabe:** Prüfe dass (a) das kritische Feature klär identifiziert ist, (b) jede Phase das correct Variations-Muster nutzt, (c) within jede Phase nur das beabsichtigte Feature variiert während andere konstant bleiben, (d) die Sequenz von Kontrast durch Separation und Generalisierung zu Fusion bewegt, (e) die Beispiele minimal sind — jede unterscheidet sich vom letzten in einem deliberaten Weg, und (f) der Beurteilungs-Check testet Unterscheidung des kritischen Features spezifisch.
```

## Beispiel-Output

**Szenario:** *Lern-Gegenstand: "Der Unterschied zwischen Fläche und Umfang — SuS müssen verstehen dass das sind zwei verschiedene Messungen einer Form, nicht zwei Wörter für das gleiche Ding" / Typische Verwechslung: "SuS nehmen an dass wenn du eine Form grösser machst, beide Fläche und Umfang increase — sie realisieren nicht dass du eine ändern kannst ohne die andere zu ändern" / Klassenstufe: "Sek 1 Anfang Geometrie-Unit — SuS können Fläche und Umfang separat rechnen aber verwechseln die konzeptuell" / Fachbereich: "Mathematik"*

---

## Variationstheorie-Aufgabe: Fläche vs. Umfang

**Lern-Gegenstand:** Der Unterschied zwischen Fläche und Umfang — dass das sind zwei unabhängige Messungen die unabhängig voneinander ändern können
**Kritisches Feature:** Fläche und Umfang können unabhängig variieren — du kannst den Umfang erhöhen während die Fläche sinkt, oder eine konstant halte während die andere ändert
**Typische Verwechslung:** SuS glauben Fläche und Umfang sind korreliert — "grössere Form = alles grösser"

### Variationsanalyse

Fläche und Umfang sind beide Properties einer 2D-Form, aber sie messen verschiedene Dinge: Fläche misst den Raum innen (Quadrat-Einheiten), Umfang misst die Distanz um den Edge (lineare Einheiten). Das kritische Feature SuS müssen treffen ist dass diese zwei Messungen UNABHÄNGIG sind — ändern eines verursacht nicht notwendigweg Ändern des anderen. Das ist counter-intuitive weil in alltäglicher Erfahrung, "grössere" Dinge tendenziell in jeder Dimension grösser sind. Die Aufgabe muss die Unabhängigkeit sichtbar machen indem Fälle zeigt wo eine ändert während die andere nicht — etwas das SuS nie entdecken würde wenn jedes Beispiel das sie sehen hat beide Fläche und Umfang together increasing.

Die Dimensions der Variation sind:
- **Fläche** (kritische Dimension 1): der Raum innen der Form
- **Umfang** (kritische Dimension 2): die Distanz um den Edge
- **Form-Typ** (irrelevant Dimension): Rechteck, L-Form, etc.
- **Orientierung** (irrelevant Dimension): rotated, reflected
- **Gitter-Grösse** (irrelevant Dimension): visuelle Präsentation

### Aufgaben-Sequenz

**Phase 1 — Kontrast (Was IST Fläche vs. was IST Umfang?)**

Präsentiere zwei identische Rechtecke (3 × 4 auf Quadrat-Papier). Auf Rechteck A, shade die inneren Quadrate blau. Auf Rechteck B, highlight den Aussenkante rot.

| Form | Blau (innen) | Rot (Kante) |
|---|---|---|
| Rechteck A (3 × 4) | 12 Quadrate geschattiert | — |
| Rechteck B (3 × 4) | — | 14 Einheiten getraced |

Frag: "Rechteck A zeigt 12. Rechteck B zeigt 14. Das sind die GLEICHE Form — warum sind die Zahlen verschieden?"

Dieser Kontrast macht sichtbar dass Fläche und Umfang VERSCHIEDENE Messungen der GLEICHEN Form sind. Die Form ist invariant; der Messungs-Typ variiert.

**Phase 2 — Separation (Changing Umfang während Fläche gleich bleibt)**

Präsentiere vier Formen, alle gemacht aus exactly 12 Quadrat-Kacheln (so Fläche = 12 für alle), aber arrangiert verschieden:

| Form | Anordnung | Fläche | Umfang |
|---|---|---|---|
| Form A | 3 × 4 Rechteck | 12 | 14 |
| Form B | 2 × 6 Rechteck | 12 | 16 |
| Form C | 1 × 12 Rechteck | 12 | 26 |
| Form D | L-Form (3×3 mit 3×1 Erweiterung) | 12 | 16 |

Frag: "Jede Form hat exactly 12 Quadrate innen. Aber schau die Umfänge. Was passiert?"

Das separiert Umfang von Fläche: Fläche ist INVARIANT (immer 12), Umfang VARIIERT (14, 16, 26, 16). SuS müssen die Fact confronten dass gleiche Fläche nicht gleichen Umfang bedeutet. Das kritische Feature — Unabhängigkeit — ist isoliert.

Dann umgekehrt: Präsentiere vier Formen alle mit Umfang = 16, aber verschiedne Flächen:

| Form | Anordnung | Umfang | Fläche |
|---|---|---|---|
| Form E | 4 × 4 Quadrat | 16 | 16 |
| Form F | 2 × 6 Rechteck | 16 | 12 |
| Form G | 1 × 7 Rechteck | 16 | 7 |
| Form H | T-Form | 16 | 10 |

Frag: "Jede Form hat den gleichen Umfang — 16 Einheiten um den Edge. Aber schau die Flächen. Was bemerkt ihr?"

Das bestätigt die Separation von der anderen Richtung: gleicher Umfang bedeutet nicht gleiche Fläche.

**Phase 3 — Generalisierung (Unabhängigkeit hält über Form-Typen)**

Zeige dass die Unabhängigkeit von Fläche und Umfang nicht auf Rechtecke limitiert ist:

| Form | Typ | Fläche | Umfang |
|---|---|---|---|
| Form I | Dreieck auf Punkt-Papier | 6 | 12 |
| Form J | Verschiedner Dreieck | 6 | 14.5 |
| Form K | Irreguläres Vierseit | 6 | 16 |
| Form L | Fünfseit | 6 | 13.2 |

Frag: "Das sind verschiedne Typen von Formen — Dreiecke, Vierseit, Fünfseit. Die haben alle Fläche 6. Haben sie alle den gleichen Umfang?"

Das kritische Feature (Unabhängigkeit) ist konstant gehalten — es ist wahr für ALLE Formen, nicht nur Rechtecke. Die surface Feature (Form-Typ) variiert. Das generalisiert das Prinzip beyond dem spezifischen Kontext von Rechtecken.

**Phase 4 — Fusion (Variiernd beide Fläche und Umfang simultaneously)**

Präsentiere eine Set von Formen wo BEIDE Fläche und Umfang variieren, und SuS muss auf beide simultaneously attentten:

| Form | Fläche | Umfang | Fläche grösser oder kleiner als Form M? | Umfang grösser oder kleiner als Form M? |
|---|---|---|---|---|
| Form M | 12 | 14 | — | — |
| Form N | 8 | 18 | Kleiner | Grösser |
| Form O | 15 | 16 | Grösser | Grösser |
| Form P | 20 | 14 | Grösser | Gleich |
| Form Q | 6 | 14 | Kleiner | Gleich |

Frag: "Schau Form N verglichen zu Form M. Die Fläche ist kleiner aber der Umfang ist grösser. Wie ist das möglich? Kannst du Form N zeichnen?"

Dann: "Form P hat viel grössere Fläche als Form M, aber den GLEICHEN Umfang. Form Q hat viel kleinere Fläche, aber auch den gleichen Umfang. Was sagt dir das über die Beziehung zwischen Fläche und Umfang?"

Das fusst beide Dimensionen — SuS muss Fläche und Umfang unabhängig tracken und recognize dass alle Kombinationen möglich sind (grössere Fläche mit kleinerem Umfang, gleiche Fläche mit verschiednen Umfängen, etc.).

### Lehrperson-Anleitung

**Wie die Sequenz präsentieren:**
1. Nutze Quadrat-Papier oder ein Gitter displayed auf der Tafel. Mach die Formen SICHTBAR — gib nicht nur Zahlen. SuS brauchen die Fläche SEHEN (Schatten-Quadrate) und den Umfang (getraced Edge) simultaneously.
2. Auf jeder Phase, Präsentiere die Beispiele SIDE BY SIDE, nicht einen nach dem anderen. Die Power von Variation kommt von Vergleich — SuS muss die Beispiele zusammen sehen um zu bemerken was änderte und was gleich blieb.
3. Frag "Was ist gleich? Was ist verschieden?" auf JEDEM Übergang. Das ist die fundamental Variationstheorie-Frage. Train SuS zu den Pattern von Sameness und Unterschied suchen.
4. Erkläre nicht das Pattern — lass SuS es entdecken. Präsentiere die Beispiele, frag die Frage, warte. Wenn SuS kämpfen, add ein anderes Beispiel das das Pattern klarer macht. Sag nicht "Fläche und Umfang sind unabhängig" bevor sie hätten die Chance es zu sehen.

**Schlüssel-Fragen:**
- Phase 1: "Sie sind die gleiche Form. Warum sind die Zahlen verschieden?"
- Phase 2: "Die Fläche ist immer 12. Was passiert mit dem Umfang?" / "Der Umfang ist immer 16. Was passiert mit der Fläche?"
- Phase 3: "Funktioniert das für alle Formen, oder nur für Rechtecke?"
- Phase 4: "Kannst du eine grosse Fläche mit kleinem Umfang haben? Eine kleine Fläche mit grossem Umfang? Prove es mit einer Zeichnung."

**Typische Schüler-Antworten und wie zu reagieren:**
- "Grössere Formen haben grössere Umfänge" → Präsentiere Form N (Fläche 8, Umfang 18) neben Form M (Fläche 12, Umfang 14). "Ist Form N 'grösser'? Ihre Fläche ist kleiner aber ihr Umfang ist grösser. Was bedeutet 'grösser' hier?"
- "Du addest einfach mehr Quadrate um mehr Umfang zu bekommen" → Präsentiere Formen E und G (beide Umfang 16, aber Flächen 16 und 7). "Form E hat mehr Quadrate aber den gleichen Umfang. Warum?"

### Beurteilungs-Check

**Der Unabhängigkeits-Test:** Gib SuS drei Paare von Statements und ask sie zu decidieren ob jedes IST IMMER WAHR, MANCHMAL WAHR oder NIEMALS WAHR:

1. "Wenn Form X eine grössere Fläche als Form Y hat, dann hat Form X einen grösseren Umfang als Form Y." (Manchmal wahr — nicht immer)
2. "Zwei Formen mit der gleichen Fläche müssen den gleichen Umfang haben." (Niemals wahr — viele Gegenbeispiele)
3. "Du kannst den Umfang einer Form ändern ohne ihre Fläche zu ändern." (Immer wahr — proven in Phase 2)

Dann: "Zeichne zwei Formen die die gleiche Fläche aber verschiedne Umfänge haben. Zeichne zwei Formen die den gleichen Umfang aber verschiedne Flächen haben."

Wenn SuS das können, haben sie das kritische Feature getroffen: Fläche und Umfang sind unabhängig.

---

## Bekannte Limitierungen

1. **Variationstheorie funktioniert am besten für gut-definierte Konzepte mit identifizierbaren kritischen Features.** Es ist am mächtigsten in Mathematik und Sachunterricht wo die Features zu treffen klar sind (Fläche vs. Umfang, Geschwindigkeit vs. Geschwindigkeit mit Richtung, Addition vs. Multiplikation). Es ist schwerer zu anwenden zu Open-Ended, interpretativen Lernen (literarische Analyse, kreatives Schreiben) wo die "kritischen Features" weniger diskret sind. Der Skill sollte nicht Variationstheorie force zu Lern-Zielen wo andere Ansätze appropriater sind.

2. **Die Theorie wurde primarily in Mathematik und Sachunterricht Kontexten entwickelt.** While die Prinzipien von Unterscheidung durch Variation domain-general sind, die spezifischen Muster (Kontrast, Separation, Generalisierung, Fusion) haben been most thoroughly researched und validated in Mathematik-Klassenzimmern in Hongkong, Schweden und Mainland China. Anwendung zu anderen Subjects und kulturellen Kontexten sollte durchdacht sein, nicht mechanisch.

3. **Variationstheorie addressiert einen Aspekt des Lernens — Unterscheidung — nicht das ganze Bild.** SuS brauchen auch Motivation, Praxis, Feedback und Anwendung. Eine perfectly-designed Variations-Sequenz wird versagen wenn SuS nicht engaged sind, haben nicht sufficient prior Wissen oder üben nicht sufficiently nach Unterscheidung. Variationstheorie ist eine mächtige Lensе für Aufgaben-Design, nicht eine complete Theorie von Instruction.
