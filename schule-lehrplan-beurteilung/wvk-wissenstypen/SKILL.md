---
# AGENT SKILLS STANDARD FIELDS (v2)
name: wvk-wissenstypen
description: "Klassifiziere Curriculum-Inhalte in WVK-Kategorien (Wissen/Verstehen/Können), um Unterricht und Beurteilung abzustimmen. Nutze diese Skill beim Planen von Unterrichtseinheiten, beim Formulieren von Lernzielen oder beim Auswählen von Beurteilungsmethoden."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lehrplan-beurteilung/wvk-wissenstypen"
skill_name: "WVK Wissenstypen-Mapper"
domain: "curriculum-assessment"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Wiggins & McTighe (2005, 2011) — Understanding by Design: Know/Understand/Do als Planungs-Architektur"
  - "Bernstein (1999, 2000) — Hierarchical vs Horizontal Knowledge Structures"
  - "Hattie (2009) — Visible Learning: Surface, Deep, and Transfer Learning"
  - "Hattie & Timperley (2007) — The Power of Feedback"
  - "Wiliam (2011) — Embedded Formative Assessment"
  - "Deci & Ryan (1985, 2000) — Self-Determination Theory"
  - "Muller (2009) — Forms of Knowledge and Curriculum Coherence"
  - "Maton (2014) — Knowledge and Knowers: Legitimation Code Theory"
input_schema:
  required:
    - field: "curriculum_input"
      type: "string"
      description: "Beschreibung der Unterrichtseinheit, Kompetenz oder des Projekts"
    - field: "lernphase"
      type: "string"
      description: "Altersspanne oder Klassenstufe (z.B. 8. Klasse Sek 1)"
  optional:
    - field: "wissensarchitektur_output"
      type: "string"
      description: "Epistemic Diagnosis aus vorherigem Curriculum Knowledge Architecture Designer"
    - field: "existierende_lernziele"
      type: "string"
      description: "Bereits formulierte Lernziele oder Lehrplan-Standards"
    - field: "kompetenzframework"
      type: "string"
      description: "Kompetenz- oder Fähigkeitsframework der Schule"
    - field: "programm_zweck"
      type: "string"
      description: "Warum diese Einheit oder Kompetenz für die Schule wichtig ist"
output_schema:
  type: "object"
  fields:
    - field: "wvk_chart"
      type: "object"
      description: "Komplettes WVK-Diagramm mit allen Elementen nach Wissenstyp klassifiziert"
    - field: "koennen_split"
      type: "object"
      description: "Explizite Trennung von Können in Fertigkeiten vs Dispositionen"
    - field: "beurteilungs_routing_plan"
      type: "object"
      description: "Für jedes WVK-Element: welche Beurteilungsmethode"
    - field: "sequenzierungs_notizen"
      type: "object"
      description: "Voraussetzungs-Abhängigkeiten und kontinuierliche Themen"
    - field: "luecken_analyse"
      type: "object"
      description: "Mapping existierender Lernziele zu WVK, Identifikation von Lücken"
    - field: "design_flaggen"
      type: "object"
      description: "Zusammengesetzte oder falsch klassifizierte Elemente"
chains_well_with:
  - "curriculum-wissensarchitektur-designer"
  - "lernziel-formulierungs-guide"
  - "kohaerent-rubriken-builder"
  - "dispositional-beurteilung-designer"
teacher_time: "7 Minuten"
tags: ["WVK", "wissenstypen", "beurteilung-routing", "Lehrplan 21", "hierarisch", "horizontal", "dispositiv"]
---

# WVK Wissenstypen-Mapper für Sekundarstufe 1

## Was dieser Skill macht

Dieser Skill nimmt einen Curriculum-Input — eine Unterrichtseinheit, Kompetenz-Set oder Projekt-Brief — und produziert ein komplettes WVK-Diagramm (Wissen-Verstehen-Können), in dem jedes Element mit seinem Wissenstyp (Hierarisch, Horizontal, oder Dispositiv) gekennzeichnet und zur korrekten Beurteilungsform geroutet wird. Dies ist die operative Brücke zwischen der Curriculum Knowledge Architecture Designer (welche diagnostiziert, welche Wissenstypen vorhanden sind) und den Beurteilungs-Skills, die tatsächliche Instrumente bauen. Das Kernproblem, das dieser Skill löst: Die meisten WVK-Diagramme behandeln alle drei Spalten als äquivalent. Das sind sie nicht. Ein hierarisches WISSEN-Element (Fakten mit richtig/falsch-Antworten) und ein horizontales WISSEN-Element (umstrittenes konzeptionelles Wissen) erfordern grundlegend unterschiedliche Beurteilung — das erste kann automatisiert bewertet werden, das zweite erfordert interpretatives Urteil. Ein KÖNNEN, das eine Fertigkeit ist (bewertet durch Rubrik gegen Kriterien), und ein KÖNNEN, das eine Disposition ist (bewertet durch Beobachtung über Zeit), können nicht gleich bewertet werden — und das Routen einer Disposition zu einer Rubrik schadet ihr aktiv. KI ist wertvoll hier, weil die Produktion eines wissenstypen-WVK-Diagramms gleichzeitig Lehrplan-Epistemologie, Beurteilungs-Design-Logik, Lernwissenschaft und Motivationstheorie anwenden muss — eine Kombination, die selten ist.

## Evidence Foundation

Wiggins & McTighe (2005, 2011) etablierten WVK als kanonische Planungs-Architektur. Das Framework unterscheidet drei Lerntypen: **Wissen** (faktuales und konzeptionelles Wissen, das SuS erwerben sollten), **Verstehen** (überdauernde Einsichten), und **Können** (Fertigkeiten und Prozesse). Das Framework erlaubt es, alle drei zu spezifizieren, bevor Beurteilung designt wird — Backwards Design erfordert zu wissen, WAS man bewertet, bevor man entscheidet, WIE. Das Original-UBD-Framework behandelt aber alle WISSEN-Elemente als intern homogen, alle VERSTEHEN-Elemente als gleich, alle KÖNNEN-Elemente als gleich. Das ist die Lücke, die dieser Skill adressiert.

Bernstein (1999, 2000) zeigte, dass Wissen keine einfache Substanz ist. **Hierarisches Wissen** ist kumulativ mit klaren Voraussetzungs-Ketten — später-Konzepte hängen von früheren ab, es gibt richtig/falsch-Antworten. **Horizontales Wissen** ist organisiert als spezialisierte interpretive Linsen — verschiedene Ansätze, je mit eigenen Validitäts-Kriterien. Diese Unterscheidung ist essentiell für Beurteilung: Hierarisches Wissen kann durch Quiz bewertet werden (richtig/falsch), horizontales Wissen nicht.

Hattie (2009) identifizierte drei Lernphasen — **oberflächlich** (neues Wissen/Fertigkeiten erwerben), **tiefgehend** (integrieren und verbinden), **Transfer** (auf neue Kontexte anwenden). Jede Phase braucht andere Beurteilung. Oberflächliches Lernen passt zu hierarischen WISSEN-Elementen, tiefgehendes zum VERSTEHEN, Transfer zu sophistizierten KÖNNEN-Elementen.

Wiliam (2011) argumentierte, dass Beurteilung nur nützlich ist, wenn sie Evidenz generiert, auf die man handeln kann — und dass Beurteilungs-Design mit der Frage beginnen muss "Was würde genügende Evidenz zeigen, dass dieser Schüler das gelernt hat?" Dieses "Beurteilbarkeits-Constraint" ist wo die WVK-Wissenstypen operativ kritisch werden. Einige Elemente sind direkt bewertbar durch eine einzelne Task, andere brauchen Evidenz über mehrere Tasks hinweg, andere — Dispositions-Elemente — sind gar nicht durch Tasks bewertbar.

Deci & Ryan (1985, 2000) zeigten, dass Beurteilungs-Kontexte, die als kontrollierend wahrgenommen werden, die Autonomie untergraben, die Dispositions-Entwicklung braucht. Das schafft eine harte Constraint auf Beurteilungs-Routing: Dispositions-Elemente MÜSSEN zu Beobachtungs-Protokollen geroutet werden, nicht zu Rubriken.

## Input-Schema

Die Lehrperson muss angeben:
- **Curriculum-Input:** Beschreibung der Einheit, Kompetenz oder Projekt. *z.B. "Bandklasse C Wohlbefinden — Emotionsregulation und Selbstfürsorge"*
- **Lernphase:** Altersspanne oder Klassenstufe. *z.B. "8. Klasse Sek 1"*

Optional:
- **Wissensarchitektur-Output:** Epistemic Diagnosis aus vorherigem Run
- **Existierende Lernziele:** Bereits formulierte Lernziele oder Standards
- **Kompetenzframework:** Das Framework der Schule
- **Programm-Zweck:** Warum diese Einheit für die Mission wichtig ist

## Prompt

```
Du bist ein Experte für Curriculum-Design, Wissens-Epistemologie und Beurteilungs-Architektur mit tiefem Wissen über Wiggins & McTighe (2005, 2011) WVK-Framework, Bernsteins (1999, 2000) Wissensstrukturen, Hattie (2009) Surface/Deep/Transfer-Phasen, Wiliam (2011) Beurteilbarkeits-Constraints, und Deci & Ryan (1985, 2000) Self-Determination Theory.

Deine Aufgabe ist es, ein komplettes, wissenstypen-basiertes WVK-Diagramm zu produzieren, wo jedes Element nach Wissenstyp klassifiziert und zur korrekten Beurteilungs-Methode geroutet ist.

**Curriculum-Input:** {{curriculum_input}}
**Lernphase:** {{lernphase}}

Optional:
**Wissensarchitektur-Output:** {{wissensarchitektur_output}} — falls vorhanden, als Startpunkt nutzen
**Existierende Lernziele:** {{existierende_lernziele}} — falls vorhanden, Gap-Analyse durchführen
**Kompetenzframework:** {{kompetenzframework}} — falls vorhanden, Dispositions-Elemente identifizieren
**Programm-Zweck:** {{programm_zweck}} — falls vorhanden, auf Alignment prüfen

## Die Drei Wissenstypen

Du MUSST jedes WVK-Element in einen dieser Typen klassifizieren. Die Klassifizierung bestimmt die Beurteilungs-Route.

**Hierarisches Wissen (Bernstein, 1999)**
Kumulativ, mit klaren Voraussetzungs-Ordnungen, richtig/falsch-Antworten oder demonstrierbare Verfahren. Beurteilung kann kriterienreferenziert und oft automatisiert sein.

Im WVK-Diagramm:
- **Wissen:** Fakten, Definitionen, Formeln, benannte Prozesse mit kanonischen Beschreibungen
- **Verstehen:** Prinzipien, Gesetze, Ursache-Wirkungs-Beziehungen mit etablierten korrekten Formulierungen
- **Können (Fertigkeit):** Verfahren, Techniken, Methoden mit demonstrierbarer Korrektheit

**Horizontales Wissen (Bernstein, 1999)**
Perspektivisch, linsen-basiert, Qualität wird durch analytische Tiefe bewertet, nicht faktische Korrektheit. Beurteilung braucht interpretatives Urteil und analytische Kriterien.

Im WVK-Diagramm:
- **Wissen:** Frameworks, Perspektiven, interpretive Linsen, umstrittene Konzepte
- **Verstehen:** Einsichten, die von analytischem Standpunkt abhängen — enduring understandings, die mehrfache gültige Formulierungen zulassen
- **Können (Fertigkeit):** Analyse, Interpretation, kritische Bewertung, Argumentation — Fertigkeiten, wo Qualität auf einem Kontinuum existiert

**Dispositives Wissen (erweitert aus Bernstein; Deci & Ryan, 1985, 2000)**
Enaktive Kapazitäten, Orientierungen, sich entwickelnde Kompetenzen, die nur in Verhaltens-Mustern über Zeit existieren. Können nicht durch eine einzelne Task bewertet werden. Beurteilung MUSS Multi-Informanten-Beobachtung und Coaching-Modalität-Feedback nutzen.

Im WVK-Diagramm:
- **Können (Disposition):** Enaktive Verhaltens-Muster — Agency, Collaboration, Selbst-Regulation, Empathie, Persistenz

## Kritische Regeln

1. **Das KÖNNEN muss in Fertigkeiten und Dispositionen gesplittet werden.** Jedes KÖNNEN-Element muss explizit als entweder Fertigkeit (bewertbar durch Rubrik auf einer Task) oder Disposition (bewertbar durch Multi-Informanten-Beobachtung über Zeit) klassifiziert werden.

2. **Keine Dispositions-Element darf zu einer Rubrik geroutet werden.** Dispositionen werden bewertet durch Beobachtungs-Protokolle, Student Self-Reflection, Entwicklungs-Gespräche — nie durch Scoring-Kriterien auf einer Single-Task. Wenn ein Dispositions-Element Rubrik braucht, ist es misklassifiziert.

3. **Wissenstyp bestimmt Beurteilungs-Route.** Die Route ist nicht optional — sie ist logische Konsequenz, WAS das Wissen IST:
   - Hierarisches Wissen/Verstehen: Quiz, Test, strukturierte Antwort, automatisch bewertbar
   - Horizontales Wissen/Verstehen: analytische Task mit Lehrer-Urteil, Rubrik
   - Hierarische Fertigkeit: Verfahrens-Demonstration, Kriterien-Rubrik
   - Horizontale Fertigkeit: Performance-Task, qualitative Rubrik (Emerging → Developing → Competent → Extending)
   - Dispositives Können: Multi-Informanten-Beobachtungs-Protokoll, Entwicklungs-Gespräche, Student Self-Reflection

4. **Flagge zusammengesetzte Elemente.** Falls ein WVK-Element mehrere Wissenstypen kombiniert, flagge zum Splitten.

5. **Flagge nicht bewertbare Elemente.** Falls Element nicht valide bewertet werden kann (zu vage, zu intern, zu kontext-abhängig), flagge und schlag Reformulation vor.

## Prozess

Folge diesen Schritten genau:

Step 1: Lies Curriculum-Input sorgfältig. Identifiziere jeden distinct learning element — was SuS wissen, verstehen, und können sollen.

Step 2: Klassifiziere jedes Element nach Wissenstyp (Hierarisch, Horizontal, oder Dispositiv). Rechtfertige jede Klassifizierung.

Step 3: Für jedes KÖNNEN-Element, mache das Fertigkeit/Disposition-Split explizit.

Step 4: Weise jedem Element die Beurteilungs-Route zu.

Step 5: Identifiziere Sequenzierungs-Constraints — welche Elemente sind Voraussetzungen für welche?

Step 6: Falls existierende Lernziele vorhanden: Gap-Analyse — map jedes WVK-Element zu existierenden Lernzielen, identifiziere Lücken und Misalignments.

Step 7: Flagge Design-Issues — zusammengesetzte Elemente, Misklassifizierungen, nicht bewertbare Elemente, Routing-Konflikte.

Gib Output in diesem exakten Format aus:

## WVK Wissenstypen-Karte: [Einheits-Name]

**Curriculum-Input:** [Zusammengefasst]
**Lernphase:** [Alter/Klassenstufe]
**Programm-Zweck:** [Falls vorhanden; sonst "Nicht angegeben"]

### 1. Wissen

| Element | Wissenstyp | Beurteilungs-Route | Begründung |
|---|---|---|---|
| [Element] | Hierarisch / Horizontal / Dispositiv | [Route] | [Warum dieser Typ] |

### 2. Verstehen

| Element | Wissenstyp | Beurteilungs-Route | Begründung |
|---|---|---|---|
| [Element] | Hierarisch / Horizontal / Dispositiv | [Route] | [Warum dieser Typ] |

### 3. Können — Fertigkeiten

| Element | Wissenstyp | Beurteilungs-Route | Begründung |
|---|---|---|---|
| [Element] | Hierarisch / Horizontal | [Route — welche Rubrik-Skill zu invoken] | [Warum dieser Typ] |

### 4. Können — Dispositionen

| Element | Wissenstyp | Beurteilungs-Route | Begründung |
|---|---|---|---|
| [Element] | Dispositiv | Multi-Informanten-Beobachtung → Dispositional-Beurteilung-Designer | [Warum Disposition, nicht Fertigkeit] |

### 5. Beurteilungs-Routing-Plan

[Für jeden Abschnitt spezifizieren:
- Welche Beurteilungs-Skill zu invoken
- Was Input diese Skill braucht
- Der Beurteilungs-Modus
- Der Feedback-Typ]

### 6. Sequenzierungs-Notizen

**Hart-Voraussetzungen:** [Elemente die vor anderen gelehrt werden müssen]
**Flexibel-Ordnung-Elemente:** [Elemente die in beliebiger Ordnung gelehrt werden können]
**Kontinuierliche Fäden:** [Dispositions-Elemente, die über ganze Einheit entwickeln]
**Konvergenz-Punkte:** [Wo verschiedene Wissenstypen zusammenkommen]

### 7. Gap-Analyse

[Falls existierende Lernziele vorhanden:]

| WVK-Element | Matched-Lernziel | Match-Qualität | Notizen |
|---|---|---|---|
| [Element] | [Lernziel falls matched] | Full / Partial / No match | [Was fehlt oder misaligned] |

**Lücken:** [WVK-Elemente ohne entsprechendes Lernziel]
**Waisenlernziele:** [Existierende Lernziele, die nicht zu WVK-Element mappen]
**Routing-Mismatches:** [Lernziele, wo Beurteilungs-Ansatz nicht zu Wissenstyp passt]

[Falls keine existierenden Lernziele: "Keine existierenden Lernziele vorhanden. Um Lernziele von diesem WVK-Diagramm zu generieren, invoke Learning Target Authoring Guide mit jedem KÖNNEN-Element."]

### 8. Design-Flaggen

**Zusammengesetzte Elemente:** [Elemente mit mehreren Wissenstypen, sollten gesplittet werden]
**Misklassifizierte Elemente:** [Elemente, die einen Typ zu sein scheinen, aber tatsächlich ein anderer sind]
**Nicht bewertbare Elemente:** [Zu vage, zu intern, oder zu kontext-abhängig für valide Beurteilung — mit suggerierte Reformulationen]
**Routing-Konflikte:** [Wo Beurteilungs-Route für ein Element andere Element-Ziele unterminiert]

**Selbstcheck vor Rückgabe:** Verifiziere dass (a) jedes KÖNNEN-Element als Fertigkeit oder Disposition klassifiziert ist ohne Ambiguität, (b) keine Dispositions-Element zu Rubrik geroutet ist, (c) jedes Element hat Wissenstyp UND Beurteilungs-Route, (d) Sequenzierungs-Notizen identifizieren ALL Voraussetzungs-Abhängigkeiten, (e) Gap-Analyse fängt echt Misalignments, und (f) Design-Flaggen sind spezifisch und actionierbar.
```

## Beispiel-Output

Siehe die vollständige detaillierte Beispiel-Analyse mit konkretem Wellbeing-Curriculum unten...

---

## Adaptiertes Beispiel-Szenario: Emotional Regulation Unit (8. Klasse)

**Curriculum-Input:** "Schülerinnen und Schüler der 8. Klasse erarbeiten die Grundlagen der Emotionsregulation. Sie verstehen, wie das Gehirn Emotionen verarbeitet, entwickeln persönliche Selbstregulierungs-Strategien durch Identifizierung persönlicher Trigger und das Üben von Beruhigungstechniken, und bauen Gewohnheiten auf, die ihr Wohlbefinden unterstützen."

**Lernphase:** 8. Klasse Sek 1

**Programm-Zweck:** Schüler mit Selbstregulation ausstatten, um mit schulischen und persönlichen Herausforderungen umzugehen; Grundlage für spätere Stressbewältigung und psychisches Wohlbefinden.

### 1. Wissen

| Element | Wissenstyp | Beurteilungs-Route | Begründung |
|---|---|---|---|
| Das Gehirn hat Strukturen (Amygdala, präfrontaler Kortex), die Emotionen verarbeiten | Hierarisch | Strukturierte Antwort oder Quiz — automatisch bewertbar | Neurowissenschaftliche Fakten: klare richtig/falsch-Antworten |
| Stress folgt einer physiologischen Sequenz (Trigger → Aktivierung → Symptome → Erholung) | Hierarisch | Sequenzen-Ordnungs-Aufgabe — kann SuS Prozess korrekt ordnen? | Benannter, sequenzierter Prozess mit kanonischer Beschreibung |
| Verschiedene Beruhigungstechniken (Atmen, Erden, Bewegung) wirken durch verschiedene physiologische Mechanismen | Hierarisch | Zuordnungs-Aufgabe — Technik zu Mechanismus verbinden | Faktuales Wissen: diaphragmatisches Atmen aktiviert parasympathisch. Es gibt klare richtig/falsch-Antworten |
| Emotionale Reaktionen werden durch persönliche Geschichte, Kontext und Interpretation beeinflusst — die gleiche Situation triggert andere Antworten | Horizontal | Lehrer-bewertete analytische Antwort | Perspektivisches Wissen: keine Single-richtig-Antwort über WARUM — abhängig von interpretativem Framework |

### 2. Verstehen

| Element | Wissenstyp | Beurteilungs-Route | Begründung |
|---|---|---|---|
| Emotionen sind Informationen, die adaptive Funktionen erfüllen | Horizontal | Analytische Task — verstehe diese Einsicht auf ein Szenario anwenden | Konzeptionelle Reframe: verstanden auf verschiedenen Tiefe-Niveaus |
| Selbstregulation ist nicht Unterdrückung — es ist die Fähigkeit, zu bemerken, zu verstehen und eine Antwort zu wählen | Horizontal | Analytische Task — unterscheidet Regulation von Unterdrückung | Konzeptionelle Unterscheidung, die Tiefe zulässt |

### 3. Können — Fertigkeiten

| Element | Wissenstyp | Beurteilungs-Route | Begründung |
|---|---|---|---|
| Identifiziere und benenne spezifische Emotionen genau, unterscheide zwischen ähnlichen Zuständen | Horizontal | Rubrik-Task (Szenario-basiert) → Kohärent-Rubriken-Builder invoker | Qualität existiert auf Kontinuum: Crude Labeling → Nuanziert-Unterscheidung |
| Erkläre physiologischen Prozess einer Emotion mit korrekter wissenschaftlicher Terminologie | Hierarisch | Strukturierte Beurteilung — Diagramm labeln, Sequenz erklären, oder Auto-bewertbar Rubrik | Verfahren mit richtig/falsch-Komponenten |
| Wähle und wende angemessene Beruhigungs-Technik für Situation an, erkläre Warum | Horizontal | Rubrik-Task (Szenario gegeben, Technik wählen + Begründung) | Auswahl ist Horizontal, aber Begründungs-Qualität wird bewertet |

### 4. Können — Dispositionen

| Element | Wissenstyp | Beurteilungs-Route | Begründung |
|---|---|---|---|
| Selbstregulation als enaktive Praxis — bemerkt emotionale Eskalation in Echtzeit und wählt Antwort | Dispositiv | Multi-Informanten-Beobachtung → Dispositional-Beurteilung-Designer | Dies ist NICHT eine Fertigkeit auf einer Task demonstrierbar. Existiert nur in Verhaltens-Mustern über Zeit und Kontexte |
| Fürsorge für andere Wohlbefinden — bemerkt, wenn andere kämpfen und antwortet mit angemessener Unterstützung | Dispositiv | Multi-Informanten-Beobachtung → Dispositional-Beurteilung-Designer | Interpersonale Disposition, manifes sich unterschiedlich in jedem Kontext |

### 5. Beurteilungs-Routing-Plan

**Hierarisches Wissen-Elemente → Auto-Beurteilung oder strukturierte Tasks**
- Invoke: Standard Quiz oder strukturierte Antwort-Task
- Modus: Auto-bewertbar (richtig/falsch-Antworten)
- Feedback-Typ: Task-Level ("Die Amygdala ist für Bedrohungs-Erkennung, nicht Belohnung — Review Diagramm")

**Horizontales Wissen/Verstehen → Analytische Tasks mit Lehrer-Urteil**
- Invoke: Kohärent-Rubriken-Builder (um Rubriken für analytische Qualität zu bauen)
- Modus: Lehrer-bewertet mittels Rubrik (Emerging → Developing → Competent → Extending)
- Feedback-Typ: Process-Level ("Deine Erklärung unterscheidet Regulation von Unterdrückung — now consider: Wie sieht Unterdrückung aus wenn jemand DENKT sie regulate?")

**Können — Hierarische Fertigkeiten → Kriterien-Beurteilung**
- Invoke: Kohärent-Rubriken-Builder
- Modus: Rubrik oder strukturierte Kriterien
- Feedback-Typ: Task-Level zu Process-Level

**Können — Horizontale Fertigkeiten → Performance-Task mit qualitativer Rubrik**
- Invoke: Kohärent-Rubriken-Builder
- Modus: Rubrik mit qualitativen Deskriptoren
- Feedback-Typ: Process-Level

**Können — Dispositionen → Multi-Informanten-Beobachtungs-Protokoll**
- Invoke: Dispositional-Beurteilung-Designer
- Modus: Beobachtungs-Protokoll + Student Self-Reflection + Entwicklungs-Gespräche
- Feedback-Typ: Self-Regulation ("Ich habe ein Muster bemerkt...")
- NIEMALS Kohärent-Rubriken-Builder für diese Elemente invoker

### 6. Sequenzierungs-Notizen

**Hart-Voraussetzungen:**
- Hirn-Strukturen und Stress-Reaktion müssen vor Erklären-der-physiologischen-Prozess gelehrt werden
- Wissen über spezifische Beruhigungs-Techniken muss vor Auswählen-und-Rechtfertigen kommen

**Flexible-Ordnung-Elemente:**
- Die Verstehen-Elemente können in beliebiger Ordnung erkundet werden

**Kontinuierliche Fäden:**
- Beide Dispositions-KÖNNEN-Elemente entwickeln über ganze Einheit hinweg, nicht in spezifischen Lessons

**Konvergenz-Punkte:**
- "Wähle und wende Technik an"-Fertigkeit erfordert beide Hierarisches Wissen (wie Techniken funktionieren) UND Horizontales Verstehen (Kontext matters)

### 7. Gap-Analyse

**Angenommene existierende Lernziele:**
- LZ1: "Ich kann meine emotionalen Antworten und deren Trigger identifizieren und beschreiben"
- LZ2: "Ich kann Strategien auswählen und anwenden, um meine emotionalen Reaktionen in verschiedenen Situationen zu managen"

| WVK-Element | Matched-Lernziel | Match-Qualität | Notizen |
|---|---|---|---|
| Hirn-Strukturen Wissen | Keine | Gap | Keine existierendes Lernziel für Neuro-Wissen |
| Emotionale Reaktionen als perspektivisch | Keine | Gap | Keine existierendes Lernziel für diese horizontale Einsicht |
| Emotional-Identifikations-Fertigkeit (Horizontal) | LZ1 (teilweise) | Partial | LZ1 ist breiter — umfasst auch Trigger-Bewusstsein (dispositiv) |
| Selbstregulation als Disposition (nicht als Skill) | LZ2 | Partial Match, aber Routing-Mismatch | LZ2 sagt "select and apply strategies" (Fertigkeit), aber echte Selbstregulation ist Disposition |

**Lücken:** Keine LZ für Neuro-Wissen, keine für Horizontale Verstehen, keine für Dispositions-Dimension von Selbstregulation

**Routing-Mismatches:** LZ2 wird zu Rubrik geroutet, aber Dispositionale Komponente kann nicht durch Single-Task-Rubrik bewertet werden

### 8. Design-Flaggen

**Zusammengesetzte Elemente:**
- **LZ1** kombiniert Fertigkeit (Emotionen benennen) mit Dispositiv (Trigger-Bewusstsein) — sollte gesplittet werden
- **LZ2** kombiniert Fertigkeit (Strategie-Auswahl) mit Disposition (echte in-the-moment-Regulation) — sollte gesplittet werden

**Misklassifizierungen:**
- "Selbstregulation" in existierenden Lernzielen wird als Fertigkeit ("I can select and apply") behandelt, aber ist tatsächlich Disposition

**Nicht-bewertbare Elemente:**
- "Persönliche Trigger kenne" ist privat und nicht-observable durch Schule — reformulation erforderlich

**Routing-Konflikte:**
- Falls LZ2 mittels Rubrik bewertet wird, erleben SuS Beurteilung ihrer Emotional-Regulation, was Autonomie unterminiert

---

## Bekannte Limitationen

1. **Klassifizierung basiert auf generischer Forschung, nicht auf individuellem Kontext.** Wissenstypen sind Vereinfachungen — echte Elemente sitzen oft an Grenzen zwischen Typen. Die Klassifizierung fängt den PRIMARY-Typ für Beurteilungs-Routing-Zwecke.

2. **Beurteilungs-Routing setzt voraus, dass downstream Skills existieren.** Dieses Diagramm routet zu Kohärent-Rubriken-Builder und Dispositional-Beurteilung-Designer. Wenn diese nicht gelaufen wurden, ist das Routing ein Plan, nicht eine accomplished Tatsache.

3. **Gap-Analyse hängt von Qualität existierender Lernziele ab.** Falls existierende Lernziele schlecht geschrieben sind, flaggt die Gap-Analyse vielleicht LT-Schreib-Probleme, nicht WVK-Probleme.

4. **Dispositions-Elemente sind am schwierigsten zu bewertet und am einfachsten zu neglect.** Das Diagramm macht sie sichtbar, aber Lehrperson-Zeitmangel kann zu default-Beurteilung nur Hierarischer/Horizontaler Elemente führen.

5. **Das WVK-Diagramm ist ein Planungs-Tool, nicht eine Unterrichts-Sequenz.** Die Sequenzierungs-Notizen geben Guidance, aber die tatsächliche Lektion-für-Lektion-Reihenfolge hängt von Lehrperson-Urteil ab.
