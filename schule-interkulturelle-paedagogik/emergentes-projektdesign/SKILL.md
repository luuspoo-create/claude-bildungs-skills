---
# AGENT SKILLS STANDARD FIELDS (v2)
name: emergentes-projektdesign
description: "Gestalte ein emergentes Projekt basierend auf beobachteten Interessen der SuS mit Reggio-Elementen. Nutze diesen Skill, wenn Schülerfaszinationen in tiefere Inquiry umgeleitet werden in Primar- und Sekundarschule."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-interkulturelle-paedagogik/emergentes-projektdesign"
skill_name: "Emergentes Projektdesign"
domain: "schule-interkulturelle-paedagogik"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Rinaldi (2006) — In Dialogue with Reggio Emilia: listening, researching and learning"
  - "Malaguzzi (1993) — For an education based on relationships"
  - "Helm & Katz (2016) — Young Investigators: the project approach in the early years (3rd edition)"
  - "Wien (2008) — Emergent Curriculum in the Primary Classroom: interpreting the Reggio Emilia approach in schools"
  - "Edwards, Gandini & Forman (2012) — The Hundred Languages of Children (3rd edition)"
input_schema:
  required:
    - field: "sus_interesse"
      type: "string"
      description: "Das aufkommende Interesse, die Frage oder Faszination, die bei SuS beobachtet wurde — was ihre Aufmerksamkeit gefangen hat"
    - field: "lehrperson_beobachtungen"
      type: "string"
      description: "Was die Lehrperson bemerkt hat — Fragen, Theorien, Experimente und Repräsentationen der SuS zum Interesse"
  optional:
    - field: "klassenstufe"
      type: "string"
      description: "Altersgruppe"
    - field: "lehrplan_verbindungen"
      type: "string"
      description: "Bereiche des Lehrplans, zu denen das Interesse natürlicherweise verbunden ist"
    - field: "verfuegbare_ressourcen"
      type: "string"
      description: "Materialien, Räume und Gemeinschaftsressourcen, die die Forschung unterstützen könnten"
    - field: "projektdauer"
      type: "string"
      description: "Wie lange das Projekt laufen könnte — eine Woche, mehrere Wochen, ein Quartal"
    - field: "team_kontext"
      type: "string"
      description: "Ob die Lehrperson allein oder im Team arbeitet"
output_schema:
  type: "object"
  fields:
    - field: "projekt_geruest"
      type: "object"
      description: "Das emergente Projektdesign — kein fester Plan, sondern ein flexibles Gerüst, das auf sich entwickelnde Schülerforschung reagiert"
    - field: "provokationen"
      type: "array"
      description: "Erfahrungen, Materialien und Fragen, die Schülerforschung vertiefen und erweitern"
    - field: "lehrplan_verbindungen"
      type: "object"
      description: "Wie das Projekt zu Lehrplanzielen verbindet — natürliche, nicht erzwungene Verbindungen"
    - field: "dokumentation_plan"
      type: "object"
      description: "Wie die Projektentwicklung dokumentiert wird — Lernreise der SuS erfassen"
    - field: "entscheidungspunkte"
      type: "array"
      description: "Momente, wo Lehrperson beobachtet und entscheidet: diese Richtung vertiefen, neue Provokation, oder Projekt auslaufen lassen"
chains_well_with:
  - "reggio-documentation-protocol"
  - "awe-wonder-experience-designer"
  - "agency-scaffold-generator"
  - "place-based-inquiry-anchor"
teacher_time: "4 minutes"
tags: ["Reggio-Emilia", "emergentes-Curriculum", "Projektarbeit", "Rinaldi", "Malaguzzi", "Provokationen", "Primarschule", "Sekundarschule"]
---

# Emergentes Projektdesign

## Was dieser Skill leistet

Gestaltet ein flexibles Gerüst für ein emergentes Projekt — eine anhaltende Forschung geleitet von Schülerinteressen, Fragen und Theorien, folgende dem Reggio-Emilia-Ansatz zum Curriculum. Anders als vorgeplante Projekte (wo die Lehrperson das Thema, die Aktivitäten und Ergebnisse voraus plant), beginnen emergente Projekte mit echten Schülerinteressen und entwickeln sich durch einen Zyklus von Beobachtung, Provokation, Dokumentation und Reaktion. Die Rolle der Lehrperson ist nicht, die Reise zu planen, sondern zu GERÜSTEN — indem Materialien, Provokationen und Umgebungen bereitgestellt werden, die Schülerforschung vertiefen und erweitern, während Verbindung zu Lehrplanzielen beibehalten wird. Das zentrale Prinzip von Rinaldi ist, dass die Lehrperson eine Forscherin NEBEN den Schülern ist, echte Neugier auf wohin die Forschung führt. Der Output enthält ein Projekt-Gerüst (kein fester Plan, aber flexibler Rahmen mit Entscheidungspunkten), Provokationen zur Vertiefung von Forschung, Lehrplan-Verbindungen, einen Dokumentationsplan und identifizierte Entscheidungspunkte wo die Lehrperson beobachtet und reagiert. KI ist wertvoll hier, weil Provokationen gestalten, die echte Reaktion auf Schülerdenkweise sind, sowohl die Entwicklungstrajektorie von Schülertheories verstehen als auch die Breite von Materialien, Erfahrungen und Fragen kennen braucht, die Denken voranbringen können.

## Theoretische Grundlagen

Rinaldi (2006) beschrieb emergentes Curriculum als "ein Prozess verhandelten Lernens" — das Curriculum entsteht aus der Intersection von Schülerinteressen, Lehrwissen und Umgebung. Die Lehrperson gibt Planung nicht auf, sondern plant ANDERS: statt Aktivitäten voraus zu planen, plant die Lehrperson Provokationen (Materialien, Erfahrungen, Fragen), die reagieren auf was Schüler aktuell forschen. Malaguzzi (1993) artikulierte die Umgebung als "dritte Lehrerin" — neben der Erwachsenen und den Klassenkameraden, die physische Umgebung provoziert, unterstützt und dokumentiert Lernen. Emergente Projekte erfordern durchdachtes Umgebungsdesign: Materialien, die Forschung einladen, Räume, die Zusammenarbeit unterstützen, und Displays, die das Projekt dokumentieren und aufrecht erhalten. Helm & Katz (2016) gaben praktische Anleitung für den "Projektansatz" in Primar und Sekundarschule, indem sie drei Phasen beschrieben: Phase 1 (Projekt beginnen — Interesse identifizieren, Vorwissen teilen, Fragen entwickeln), Phase 2 (Projekt entwickeln — forschen, repräsentieren, revidieren), und Phase 3 (Projekt abschliessen — teilen, reflektieren, feiern). Wien (2008) adaptierte Reggio-Prinzipien für Primarklassenzimmer und zeigte, dass emergentes Curriculum nicht nur für Vorschule ist, sondern auf jeder Stufe praktiziert werden kann wenn Lehrpersonen bereit sind, Schülerfragen zu folgen. Edwards, Gandini & Forman (2012) dokumentierten wie Reggio-Pädagoginnen "Progettazione" planen — nicht Lektionenpläne, sondern durchdachtes Design von Umgebungen, Provokationen und Encounters, die Forschung katalysieren könnten, kombiniert mit sorgfältiger Dokumentation, die den nächsten Schritt informiert.

## Input Schema

Die Lehrperson muss angeben:
- **Schülerinteresse:** Was ihre Aufmerksamkeit gefangen hat. *z.B. "Die Schüler fanden einen Vogelnest im Schulgarten und sind fasziniert davon, wie es gebaut wurde — sie gehen immer wieder zurück zu schauen, zeichnen es und stellen Fragen über den Vogel, der es baute" / "Schüler sind besessen mit Karten nachdem sie alte Schulkarte fanden — sie wollen Karten von allem machen" / "Mehrere Schüler sind tiefgreifend mit Bauen beschäftigt — konstruieren zunehmend komplexe Strukturen und testen, ob sie stehen"*
- **Lehrperson-Beobachtungen:** Was die Lehrperson bemerkt hat. *z.B. "Zwei Schüler verbrachten 20 Minuten den Nest mit Lupe zu untersuchen. Einer sagte 'der Vogel ist wie ein Baumeister.' Ein anderer fragte 'wie trug der Vogel alle Stöcke ohne Hände?' Ein dritter deutete auf einen Plasikfaden hin und sagte 'der Vogel ging shoppen!' Mehrere Schüler sammeln Stöcke, Blätter und Faden und versuchen sie zu verweben in Nester. Die Versuche fallen auseinander, was manche frustriert und andere motiviert, anders zu versuchen."*

Fakultativ (aus Kontext injiziert, wenn verfügbar):
- **Klassenstufe:** Altersgruppe
- **Lehrplan-Verbindungen:** Relevante Lehrplan-Bereiche
- **Verfügbare Ressourcen:** Materialien, Räume, Gemeinschaftsressourcen
- **Projektdauer:** Erwartete Länge
- **Team-Kontext:** Solo oder Team

## Prompt

```
Du bist ExpertIn in emergentes Curriculum und projektbasierte Forschung in der Reggio-Emilia-Tradition mit tiefem Wissen von Rinaldis (2006) Konzept verhandelten Lernens, Malaguzzis (1993) hundert Sprachen und Umgebung als dritte Lehrerin, Helm & Katz' (2016) Projektansatz-Phasen, Wiens (2008) emergentes Curriculum in Primar-Klassenzimmern und Edwards, Gandini & Formans (2012) Bericht von Reggio-Progettazione. Du verstehst, dass emergente Projekte WEDER unplanmässig ("lass SuS was auch immer tun") NOCH vorbestimmt ("ich habe ein Vogel-Projekt für diesen Monat geplant"). Sie sind absichtlich gerüstet — die Lehrperson beobachtet, dokumentiert, interpretiert und gestaltet dann Provokationen, die Schülerforschung vertiefen in Richtungen, die sowohl schülergeleitet als auch pädagogisch wertvoll sind.

KRITISCHE PRINZIPIEN:
- **Startet mit Schülerfrage, nicht Lehrperson-Thema.** Das Interesse gehört den Schülern — nicht ein Thema, das die Lehrperson gewählt hat. Die Rolle der Lehrperson ist, das Interesse zu erkennen, ernst zu nehmen und Gelegenheit für Entwicklung zu schaffen. Wenn die Lehrperson das Interesse umleitet, um zu vorgeplantem Thema zu passen, ist es nicht mehr emergent.
- **Provokationen, nicht Lektionen.** Die Lehrperson lehrt nicht über Vögel — sie bietet eine Lupe, Bücher über Nestkonstruktion, Baumaterialien und die Frage: "Könntet IHR ein Nest bauen, das so stabil ist wie das Vogelnest?" Eine Provokation lädt zu Forschung ein; eine Lektion liefert Inhalt. Provokationen öffnen Möglichkeiten; Lektionen schliessen.
- **Das Projekt ist ein Gespräch, nicht eine Lieferung.** Das Projekt entwickelt sich durch einen Zyklus: SuS forschen → Lehrperson dokumentiert → Lehrperson interpretiert → Lehrperson gestaltet Provokation → SuS forschen weiter. Jeder Schritt reagiert auf den vorherigen. Wenn die Lehrperson alle Provokationen voraus plant, reagiert sie nicht — sie liefert.
- **Lehrplan-Verbindungen sind gefunden, nicht erzwungen.** Ein emergentes Projekt über Nestbau verbindet natürlicherweise zu Sachunterricht (Materialien, Lebensräume), Technologie (Konstruktion, Ingenieurskunst), Sprachkunst (Geschichten über Vögel, Informationstexte, Schüler eigenes Schreiben), Mathematik (Messung, Form) und Kunst (Beobachtungszeichnung, Skulptur). Diese Verbindungen sollten erkannt und genutzt werden — aber die Forschung sollte nicht verzerrt werden, um Lehrplanziel zu "decken", das nicht passt.
- **Projekte haben eine natürliche Lebensdauer.** Nicht alle Interessen sustain ein langes Projekt. Manche dauern eine Woche und wind down; andere dauern einen Monat und vertiefen sich. Die Lehrperson sollte die Projekt-Energie bemerken — vertiefen wenn SuS engaged sind und lassen auslaufen wenn Interesse waned.

Deine Aufgabe ist, ein emergentes Projekt-Gerüst zu gestalten für:

**Schülerinteresse:** {{sus_interesse}}
**Lehrperson-Beobachtungen:** {{lehrperson_beobachtungen}}

Folgende fakultative Kontexte können verfügbar sein. Nutze, was gegeben ist; ignoriere Felder mit "nicht gegeben".

**Klassenstufe:** {{klassenstufe}} — wenn nicht gegeben, gestalte für Grundschule oder Sek 1.
**Lehrplan-Verbindungen:** {{lehrplan_verbindungen}} — wenn nicht gegeben, identifiziere natürliche Verbindungen.
**Verfügbare Ressourcen:** {{verfuegbare_ressourcen}} — wenn nicht gegeben, schlag' zugängliche Ressourcen vor.
**Projektdauer:** {{projektdauer}} — wenn nicht gegeben, gestalte mit Entscheidungspunkten, die Projekt 1–4 Wochen dauern, abhängig von SuS-Engagement.
**Team-Kontext:** {{team_kontext}} — wenn nicht gegeben, gestalte für eine solopraktizierende Person.

Gib die Antwort in diesem exakten Format zurück:

## Emergentes Projekt: [Interesse]

**Schülerinteresse:** [Was ihre Aufmerksamkeit gefangen hat]
**Lehrperson-Leitfrage:** [Was die Lehrperson neugierig ist — was sie über Schülerdenkweise durch dieses Projekt verstehen will]
**Potenzielle Dauer:** [Flexible Schätzung]

### Phase 1 — Forschung starten

[Wie beginnen — was SuS bereits wissen teilen, ihre Fragen surfacen, Bedingungen für Forschung schaffen]

### Phase 2 — Provokationen und Forschungen

Für jede Provokation (3–5):
**Provokation [N]: [Was die Lehrperson anbietet]**
- **Was:** [Material, Erfahrung oder Frage]
- **Warum:** [Was diese Provokation enthüllen oder entwickeln könnte — verbunden zu Lehrperson-Beobachtungen]
- **Beobachte:** [Was zu beobachten — Schülerreaktionen, Theorien, neue Fragen]
- **Wenn SuS reagieren mit...:** [Mögliche nächste Schritte je nach Schülerreaktion]

### Phase 3 — Vertiefen und Repräsentieren

[Wie SuS ihr Verständnis durch mehrere "Sprachen" repräsentieren — Zeichnung, Bauen, Schreiben, dramatisches Spiel, Diskussion]

### Phase 4 — Teilen und Abschliessen

[Wie das Projekt geteilt und gefeiert wird — mit Klasse, Familien, Schulgemeinschaft]

### Lehrplan-Verbindungen

[Natürliche Verbindungen zu Lehrplan-Bereichen — was SuS durch das Projekt lernen]

### Entscheidungspunkte

[Spezifische Momente wo Lehrperson pausiert, dokumentiert und entscheidet: diese Richtung vertiefen, neue Provokation einführen, oder Projekt wind down]

### Dokumentations-Plan

[Wie die Projekt-Reise dokumentiert wird — was erfassen und wie nutzen]

**Selbstkontrolle vor Rückgabe:** Prüfe, dass (a) Projekt bei echtem Schülerinteresse beginnt, (b) Provokationen reagieren auf beobachtete Gedanken, (c) Gerüst ist flexibel mit Entscheidungspunkten, (d) Lehrplan-Verbindungen natürlich sind, (e) Projekt hat Plan zum Abschliessen, nicht nur Anfangen.
```

## Beispiel-Output

**Szenario:** *Schülerinteresse: "Primarschüler (6–7 Jahre) fanden einen Vogelnest im Schulgarten nachdem es während eines Sturms vom Baum fiel. Sie sind fasziniert davon, wie es gebaut wurde — untersuchen die Materialien (Stöcke, Moos, Federn, Faden, ein Stück Plasiktüte), stellen Fragen über den Vogel, der es machte und versuchen ihre eigenen Nester zu bauen während Aussenspiels." / Lehrperson-Beobachtungen: "Zwei Schüler verbrachten 20 Minuten den Nest mit Lupe zu untersuchen. Ein Kind sagte 'der Vogel ist wie ein Baumeister — er machte ein Haus!' Ein anderes fragte 'wie trug der Vogel all diese Stöcke mit keinen Händen?' Ein drittes deutete auf das Plastiktüten-Stück hin und sagte 'der Vogel ging Einkaufen!' Mehrere Schüler sammeln Stöcke, Blätter und Faden aus dem Garten und versuchen sie in Nester zu verweben. Die Versuche fallen immer auseinander, was manche Schüler frustriert und andere motiviert, anders zu versuchen." / Verfügbare Ressourcen: "Schulgarten, Aussenfläche, Kunstmaterialien, Ton, Lupen, iPad für Fotos, Zugang zu lokaler Naturschutzgebiet mit Ranger"*

---

## Emergentes Projekt: Die Nestbauer

**Schülerinteresse:** Wie Vögel Nester bauen — Materialien, Methoden und die bemerkenswerte Geschicklichkeit des Bauens ohne Hände
**Lehrperson-Leitfrage:** "Was verstehen die Schüler über wie Strukturen gebaut werden und wie wird ihr Verständnis wachsen, während sie selbst Strukturen bauen versuchen?"
**Potenzielle Dauer:** 2–4 Wochen, je nach anhaltendes Interesse

### Phase 1 — Forschung starten

**Tag 1 — Was wir wissen sammeln:**
Bring den Nest (sorgfältig) ins Klassenzimmer. Stell ihn auf einen Tisch mit Lupen und lad SuS ein ihn zu untersuchen. In einer Gruppe-Diskussion frag: "Was bemerkt ihr?" Schreib Beobachtungen auf (LP schreibt; SuS sprechen).

Dann: "Welche Fragen habt ihr über diesen Nest?" Schreib Fragen auf. Erwartete Fragen (basierend auf bisherigen Beobachtungen):
- Wie baute der Vogel es?
- Woraus ist es?
- Wie trug der Vogel die Stöcke?
- Wo fand der Vogel den Faden?
- Warum nutzte er Plastik?
- Ist der Vogel traurig, dass der Nest fiel?

Displays die Beobachtungen und Fragen an der Wand. Das ist der Startpunkt der Forschung — die Schülerfragen treibt das Projekt.

**Tag 2 — Was wissen wir bereits? Was wollen wir finden raus?**
Erstell ein einfaches Dokumentations-Panel: "Was Wir Über Nester Wissen" (SuS aktuelle Wissen) neben "Was Wir Finden Wollen Raus" (ihre Fragen). Das macht die Forschung sichtbar und erstellt einen Referenz-Punkt den SuS während des Projekts revisit können.

### Phase 2 — Provokationen und Forschungen

**Provokation 1: Die Nest-Material-Forschung**
- **Was:** Dekonstruier sorgfältig einen Teil des Nests (oder einen zweiten Nest, wenn möglich) und leg die einzelnen Materialien aus: Stöcke, Moos, Federn, Faden, Plastik. Stell Lupen und Zeichenmaterialien bereit. Frag: "Woraus ist der Nest? Warum denkt ihr, der Vogel wählte DIESE Materialien?"
- **Warum:** Die Lehrperson beobachtete dass SuS für die Materialien interessiert sind, aber nicht noch betrachtet haben WARUM der Vogel sie wählte. Diese Provokation fokussiert Aufmerksamkeit auf Material-Eigenschaften — Stärke, Flexibilität, Wärme, Wasserschutz.
- **Beobachte:** Beschreiben SuS Materialien durch ihre Eigenschaften ("dieser ist flexibel," "dieser ist weich") oder nur durch Namen ("es ist ein Stab")? Eigenschafts-basierte Beschreibungen zeigen aufkommende Substanz-Wissen.
- **Wenn SuS reagieren mit Material-Eigenschaften erforschen:** Erweitere mit einer Sortier-Herausforderung — "Könnt ihr diese sortieren? Was ist eure Sortier-Regel?"
- **Wenn SuS fokussieren wo Materialien herkamen:** Erweitere mit Garten-Forschung — "Könnt ihr DIESE Materialien in UNSEREM Garten finden?"

**Provokation 2: Die Bau-Herausforderung**
- **Was:** Setz eine "Nest-Bau-Werkstatt" draussen auf. Stell natürliche Materialien bereit (Stöcke, Gras, Blätter, Schlamm, Federn) und eine Herausforderung: "Könnt ihr ein Nest bauen, das ein Ei hält?" Nutzt einen kleinen Holz-Ei oder Ball als Test-Objekt. Arbeit in Paare oder kleine Gruppen.
- **Warum:** SuS frühere Versuche beim Bauen fielen auseinander. Diese Provokation gibt ihnen fokussierten Zeit, spezifische Materialien und Test-Kriterium (hält es das Ei?). Die Frustration strukturellen Versagens ist produktiv — es treibt Problemlösen und Theorie-Überprüfung.
- **Beobachte:** Wie nähern sich SuS dem Problem — starten sie zufällig oder mit Plan? Imitieren sie die echte Neststruktur? Wenn der Nest versagt, versuchen sie den gleichen Ansatz erneut oder wechseln die Strategie? Höre auf Ingenieurssprache: "Wir müssen es tighter machen," "Es muss round und round gehen."
- **Wenn SuS erfolgreich:** Frag: "Was machte EUREN Nest funktionieren? Was tat der Vogel, das ihr auch tätet?" Das verbindet ihre Erfahrung zurück zum Vogel-Nest.
- **Wenn SuS kämpfen:** Führ eine Provokation ein — zeig ein Video-Clip eines Vogels der einen Nest baut (BBC Natur-Film). Schau langsam. "Was macht der Vogel? Wie nutzt er seinen Schnabel? Welches Pattern folgt er?"

**Provokation 3: Den Nest zeichnen (Genaue Beobachtung)**
- **Was:** Bereit feine Zeichenstifte bereit und stell den Nest in Zentrum eine kleine Gruppe. Frag: "Könnt ihr den Nest GENAU so zeichnen wie ihr ihn seht — jeden Stab, jedes Moos-Stück?" Das ist Beobachtungszeichnung, nicht kreative Expression.
- **Warum:** Zeichnung verlangt genaue Beobachtung. SuS die den Nest zeichnen werden strukturelle Features bemerken, die sie missräumiert haben beim nur Anschauen — wie Stäbe verschränkt sind, die Schichtung verschiedner Materialien, die runde Form. Zeichnung ist eine Form von Forschung.
- **Beobachte:** Welche strukturellen Features erscheinen in den Zeichnungen? Zeichnen SuS einzelne Stäbe oder allgemeine Form? Bemerken sie das Verschränkungs-/Verschlungenheits-Pattern? Die Zeichnungen zeigen was SuS SEHEN, was anzeigt was sie verstehen über die Struktur.
- **Wenn SuS bemerken das Verschlungenheits-Pattern:** Das ist Schlüssel strukturelle Einsicht. Erweitere: stell Webe-Materialien bereit (Stoff-Streifen, Pfeife-Reiniger) und ein Webe-Rahmen. "Könnt ihr Materialien verschlungen machen wie der Vogel?"

**Provokation 4: Experten-Begegnung**
- **Was:** Arrangier einen Besuch vom Naturschutz-Ranger (oder Besuch zum Naturschutzgebiet). SuS bereiten Fragen voraus. Der Ranger zeigt verschiedne Nest-Typen, erklärt wie Vögel bauen, und wenn möglich, zeigt Vögel im Garten oder Naturschutzgebiet.
- **Warum:** SuS haben den Nest selbst geforscht und Theorien entwickelt. Einen Experten zu treffen stellt neue Information zur Verfügung, die sie mit ihren eigenen Theorien vergleichen können. Der Experte sollte Schülerfragen ANTWORTEN, nicht einen Vortrag halten — die SuS Forschung treibt die Begegnung.
- **Beobachte:** Wie SuS Experten-Information mit ihren Theorien ausgleichen. Aktualisieren sie ihre Ideen? Herausfordern sie den Experten? ("Aber wir versuchtens und es funktionierte nicht!") Beide Reaktionen sind wertvoll — sie zeigen SuS engaged in echter Forschung.
- **Wenn die Begegnung neue Fragen aufwirft:** Diese werden die nächste Forschungs-Phase. "Der Ranger sagte Vögel nutzen Schlamm als Kleber — können WIR Schlamm als Kleber nutzen?"

### Phase 3 — Vertiefen und Repräsentieren

SuS repräsentieren ihr Lernen durch mehrere Sprachen:

**Zeichnung und Malerei:** Beobachtungszeichnungen des Nests, Malereien von Vögeln beim Bauen, illustrierte "Anleitungen" zum Nestbau (eine Form prozeduralen Schreibens)

**Konstruktion:** Nestbau mit zunehmend verschiedneren Materialien. Manche SuS können von natürlichen Materialien zu anderen Experimentationen — "Was wenn wir Spielmasse statt Schlamm nutztens?" Das ist Ingenieursforschung.

**Dramatisches Spiel:** Erstell eine "Vogel-Bauplatz" im Rollenspiel-Bereich — Bauhelme, Klemm-Bretter, "Baupläne" (SuS Zeichnungen) und Nest-Baumaterialien. SuS spielen den Konstruktionsprozess, was ihr Verständnis von Reihenfolge und Methode zeigt.

**Sprache und Literalität:** Diktierte Geschichten ("Der Vogel-Baumeister"), Labels für eine Nest-Anzeige, ein Klasse-Buch von "Was Wir Über Nester Lernten," Briefe zum Vogel ("Lieber Vogel, wir fanden euren Nest und wir schauen danach")

**Mathematik:** Nester-Stöcke messen ("der längste Stock ist ___ cm"), Materialien zählen, Nest-Grössen vergleichen (wenn mehrere Nester da sind), Muster im Weben

### Phase 4 — Teilen und Abschliessen

**Die Nest-Ausstellung:** Displays die Projekt-Dokumentation im Schuleingang oder Klassenzimmer — Fotos von SuS beim Forschen, ihre exakte Worte, ihre Zeichnungen, ihre konstruierten Nester neben dem echten Nest. Inkludiere die Reise: "Erst dachten wir... dann entdeckten wir... nun verstehen wir..."

**Familien-Einladung:** Lad Familien ein die Ausstellung zu besuchen. SuS erklären ihr Projekt ihren Familien — das ist die wirkungsvollste Einschätzung: kann das Kind erklären was sie lernten jemandem der nicht da war?

**Den Nest zurückgeben:** Falls angemessen, gib den Nest zurück zum Garten — oder erstelle eine permanente Anzeige. Diskutier mit SuS: "Der Vogel könnte einen neuen Nest bauen. Sollten wir helfen? Wie?"

**Natürliches Ende:** Das Projekt endet wenn SuS Interesse zu neuem Fokus bewegt. Das könnte nach 2 Wochen oder 4 sein. Die Lehrperson erkannte das wind down (weniger SuS wählen Nest-Aktivitäten, Energie shiftet anderswohin) und hilft die Gruppe das Enden mit der Ausstellung markieren.

### Lehrplan-Verbindungen

| Lehrplan-Bereich | Was SuS Durch das Projekt Lernen |
|---|---|
| Sachunterricht (Lebewesen und Lebensräume) | Vogel-Lebensräume, Nestbau, Material-Eigenschaften, Beobachtungs-Fähigkeiten |
| Technologie & Handwerk | Strukturen bauen, testen, iterieren, Materialwahl für Zweck |
| Mathematik | Messen, zählen, Pattern, Form (runder Nest, Verschlungenheits-Pattern) |
| Sprachkunst | Vokabular-Entwicklung, prozedurales Schreiben (wie man einen Nest baut), Geschichtenerzählen, Labels, Informationstexte |
| Kunst | Beobachtungszeichnung, Skulptur (Nestbau als Kunst), Aufmerksamkeit auf Detail |
| Beziehungs- und Selbstkompetenzen | Respekt für Natur, Teamarbeit, Persistenz wenn Bauen versagt, Sorge für Lebewesen |

### Entscheidungspunkte

| Wann | Was zu Beobachten | Entscheidung |
|---|---|---|
| Woche-1-Ende | Wählen SuS noch Nest-verwandte Aktivitäten? Entstehen neue Fragen? | Wenn ja: Provokation 3 oder 4 einführen. Falls Interesse waned: anfangen zu wind down. |
| Nach Bau-Herausforderung | Generierte die Herausforderung neue Fragen oder Frustration? | Wenn neue Fragen: folge ihnen. Falls Frustration ohne Neugier: mehr Unterstützung oder anderer Einstieg. |
| Nach Experten-Begegnung | Zündete neue Information neue Forschung? | Wenn ja: Projekt erweitern. Falls die Begegnung "alles antwortete": Projekt bereit zum Enden. |
| Wenn neues Interesse entsteht | Shiften SuS Fragen zu neuem Thema? | Allow transition. Das Nest-Projekt kann natürlich enden während neues Interesse übernimmt. |

### Dokumentations-Plan

Dokumentiert durchgehend mit dem Reggio Dokumentations-Protokoll:
- **Täglich:** 2–3 Fotos + 2–3 exakte Zitate (im Notizbuch erfasst, am Tag-Ende erweitert)
- **Wöchentlich:** Wähle die offenbarendsten Belege. Erstelle ein Mini-Panel: "Diese Woche entdeckten wir..." Displays auf Schüler-Höhe zum Revisit.
- **Durchgehend:** Sammel SuS Zeichnungen und Konstruktionen (fotografiert wenn 3D). Notiere mit SuS Erklärungen.
- **Projekt-Ende:** Kompilier in Projektbuch oder digitales Portfolio. Das wird Teil des Klasse-"Gruppen-Gedächtnisses" und Ressource für professionelle Reflexion.

---

## Bekannte Limitierungen

1. **Emergentes Curriculum verlangt eine Lehrperson die mit Ungewissheit komfortable ist.** Es gibt keinen bestimmten Endpunkt, keine garantierte "Abdeckung" von Lehrplanzielen und keine Weise voraus zu wissen wohin das Projekt geht. Lehrpersonen gewohnt an detailliertem Planen könnten das unbequem finden. Das oben beschriebene Gerüst stellt Struktur bereit — aber within diese Struktur, muss die Lehrperson bereit sein Schülern zu folgen.

2. **Rechenschafts-Systeme können mit emergent-Ansätzen konflikt.** Schulen die detaillierte Mittelfristpläne voraus eingereicht verlangt können nicht leicht emergentes Curriculum accommodat. Die oben identifizierten Lehrplan-Verbindungen zeigen dass emergente Projekte Lehrplan-Ziele ADRESSIEREN — aber nicht in vorhersagbarer, planbarer Reihenfolge. Lehrpersonen könnten Flexibilität within ihrer Schule Planungs-Anforderungen advocat müssen.

3. **Nicht alle Interessen sustain ein Projekt.** Manche SuS Faszinationen sind momentan — intensiv einen Tag dann weg. Die Lehrperson Geschicklichkeit liegt darin eine momentane Faszination von anhaltender Interessens-forschung zu unterscheiden. Die oben genannten Entscheidungspunkte helfen — falls Interesse nach Woche 1 waned, das Projekt wird abgeschlossen statt künstlich erweitert.
