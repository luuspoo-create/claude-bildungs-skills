---
# AGENT SKILLS STANDARD FIELDS (v2)
name: jahresplanung-designer
description: "Gestalte einen Jahresplan, der vertikale und horizontale Curriculum-Kohärenzen zeigt. Nutze diese Skill beim Aufbau neuer Fächerprogramme, bei Umstrukturierung von Unterrichtsthemen oder zur Sicherung der Progression."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lehrplan-beurteilung/jahresplanung-designer"
skill_name: "Jahresplanung-Designer"
domain: "curriculum-assessment"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Bruner (1960) — The Process of Education: Spiral Curriculum"
  - "Wiggins & McTighe (2005) — Understanding by Design: Backwards Design"
  - "Bernstein (1999) — Vertical and Horizontal Discourse"
  - "Hattie (2009) — Visible Learning: Curriculum Coherence"
  - "Muller (2009) — Forms of Knowledge and Curriculum Coherence"
  - "Maton (2013) — Making Semantic Waves"
  - "Schmidt, Wang & McKnight (2005) — Coherence of the Intended, Implemented, and Attained Curriculum"
  - "Duschl, Schweingruber & Shouse (2007) — Taking Science to School: Learning Progressions"
  - "Lehrplan 21 (2014) — Curriculum Framework Deutschschweiz"
input_schema:
  required:
    - field: "fach_oder_programm"
      type: "string"
      description: "Name und Kurzbeschreibung des Fachs oder Programms"
    - field: "entwicklungsbanden"
      type: "string"
      description: "Die Band-, Klassenstufen- oder Stufen-Struktur (z.B. Klassen 7-9 Sek 1)"
    - field: "angestrebte_lernziele"
      type: "string"
      description: "Die übergeordneten Ziele, die SuS am Ende des Programms erreichen sollen"
  optional:
    - field: "existierende_unterrichtseinheiten"
      type: "string"
      description: "Bereits vorhandene Unterrichtseinheiten oder Kompetenzen"
    - field: "wissensarchitektur_output"
      type: "string"
      description: "Output aus Curriculum Knowledge Architecture Designer falls schon durchgeführt"
    - field: "verfuegbare_zeit"
      type: "string"
      description: "Anzahl Stunden oder Lektionen pro Woche pro Klasse"
output_schema:
  type: "object"
  fields:
    - field: "wissens_progressions_karte"
      type: "object"
      description: "Für jeden Wissenstyp: wie es über Klassenstufen entwickelt sich, was wo eingeführt wird"
    - field: "vertikale_kohaerenz_check"
      type: "object"
      description: "Sind Voraussetzungen an jeder Transition vorhanden? Steigt analytische Sophistikation? Sind Dispositions-Gelegenheiten durchgehend?"
    - field: "horizontale_kohaerenz_check"
      type: "object"
      description: "Innerhalb jeder Klassenstufe: ist Balance zwischen Wissenstypen angemessen? Sind Unterrichtsthemen verbunden oder isoliert?"
    - field: "sequenzierungs_rationale"
      type: "object"
      description: "Explizite Begründungen für Platzierung von Elementen, referenziert auf Lehr-Forschung"
    - field: "luecken_und_ueberlaepungen"
      type: "object"
      description: "Fehlende Elemente, wiederholte ohne Progression, problematische Übergänge"
    - field: "design_flaggen"
      type: "object"
      description: "Zusammengesetzte Kompetenzen, Dispositions-Ziele ohne Wissens-Voraussetzungen"
chains_well_with:
  - "curriculum-wissensarchitektur-designer"
  - "wvk-wissenstypen"
  - "lernziel-formulierungs-guide"
  - "entwicklungs-banden-system-designer"
  - "backwards-design-unterrichtsplaner"
teacher_time: "20 Minuten"
tags: ["jahresplanung", "curriculum-kohaerenz", "vertikale-progression", "lernprogression", "programm-design", "Bruner", "spiral-curriculum"]
---

# Jahresplanung-Designer für Sekundarstufe 1

## Was dieser Skill macht

Dieser Skill nimmt eine Programm-Beschreibung und Klassenstufen-Struktur und produziert einen kohärenten Jahresplan — Mapping, was über alle Klassenstufen gelehrt wird, in welcher Ordnung, mit expliziter Begründung für Sequenzierungs-Entscheidungen. Diese Skill arbeitet auf jedem Bildungs-Level: frühe Kindheit bis obere Sekundarstufe, Berufsbildung oder jedes andere gestaffelt-strukturierte Lern-System. Die meisten Jahrespläne sind nur Listen: Themen Klassenstufen zugeordnet ohne kohärente Logik, WARUM dieses Thema dort sitzt, worauf es aufbaut, oder was es vorbereitet. Dieser Skill produziert einen strukturierten Progressions-Plan, gegründet auf drei Wissenstypen: hierarische Elemente sind sequenziert nach Voraussetzungs-Logik (Grundlagen vor Komplexes); horizontale Elemente sind sequenziert zur progressiven Thinkingsophistikation-Steigerung (nicht jedes Jahr die gleichen Thinking-Moves auf gleicher Stufe); dispositives Wissen wird als kontinuierlicher Faden gemappt mit expliziter Identifikation der Wissens-Voraussetzungen. Das Resultat ist ein Programm, wo jedes Element eine verteidigte Begründung für Platzierung hat. KI ist wertvoll hier, weil kohärenter Programm-Design erfordert gleichzeitig Voraussetzungs-Ketten über Jahre hinweg zu tracken, Wissenstyp-Balance within und über Klassenstufen zu überwachen, und Lücken und Überlapplungen zu identifizieren, die unsichtbar sind, wenn nur einzelne Einheiten in Isolation betrachtet werden.

## Evidence Foundation

Bruner (1960) etablierte das Spiral-Curriculum-Prinzip: Schlüssel-Ideen sollten über Klassenstufen hinweg revisited werden mit zunehmend-steigende Sophistikation, wobei jede Begegnung auf vorherigen aufbaut. Ein Jahresplan, der ein Thema revisited ohne kognitive Anforderung zu erhöhen, ist nicht Spiral — es ist Wiederholung. Das Spiral-Prinzip appliziert unterschiedlich auf die drei Wissenstypen. Hierarisches Wissen spiralt durch Hinzufügung neuer Komplexität-Schichten auf top von secured foundations. Horizontales Wissen spiralt durch steigende Sophistikation analytischen Thinking appliziert auf wiederkehrende Themen. Dispositives Wissen spiralt nicht gleich — es entwickelt kontinuierlich über das ganze Programm hinweg durch enaktive Praxis.

Schmidt, Wang & McKnight (2005) analysierten Curriculum-Kohärenzen in high-performing Bildungs-Systemen und fanden drei gemeinsame Features: **Focus** (weniger Themen tiefer gelehrt), **Rigour** (angemessene Herausforderung auf jeder Stufe), und **Coherence** (Themen connecten logisch within und über Jahren). Systeme ohne Kohärenzen — wo Themen appear und disappear ohne Progressionslogik — underperform konsistent. Ihr bedeutsamster Fund ist dass Kohärenzen ist nicht nur vertikal (baut Band B auf Band A auf?) sondern auch horizontal (sind Elemente within Band B miteinander verbunden?).

Duschl, Schweingruber & Shouse (2007) entwickelten **learning progressions**: empirisch-gegründete Beschreibungen wie Schüler-Verständnis sich über Jahre entwickelt, mit jedem Level spezifisch buildend auf dem Previous. Progression ist nicht automatisch — es braucht deliberate Curriculum-Design, der matched, was gelehrt wird, zu was SuS bereit sind zu lernen. Learning-Progressionen sind best-documented für hierarisches Wissen (Mathematik, early reading, Teile von Naturwissenschaften), wo Voraussetzungs-Struktur well-researched ist. Für horizontale und dispositives Domains, sind Progressionen weniger empirisch-established und müssen constructed werden aus developmental principles statt replicated research.

Wiggins & McTighe (2005) applizierten backwards design auf Programm-Level-Planung: beginne mit angestrebten outcomes am Programm-Ende, dann arbeite rückwärts, um zu determinieren, was auf jeder Stufe in-place sein muss, um diese Outcomes zu erreichen.

Bernstein (1999) und Muller (2009) establish theoretical foundation für Wissenstyp-spezifisches Sequenzieren. **Hierarisches Wissen** hat inherent sequencing logic: Konzepte müssen in Voraussetzungs-Ordnung gelehrt werden weil später-Konzepte genuinely earlier-Konzepte depend. **Horizontales Wissen** hat keine Voraussetzungs-Ketten gleich — verschiedene analytische Linsen können in verschiedenen Ordnungen introduced werden — aber es hat eine Sophistikation-Progression: SuS sollten move von Identifizieren zu Analysieren zu Evaluieren und Synthetisieren.

Maton (2013) fügt das semantic wave Concept hinzu: Effektive Wissens-Konstruktion erfordert Movement zwischen abstracten Prinzipien und konkreten Cases über das Programm hinweg, nicht nur within einzelnen Lektionen. Ein Jahresplan, der abstract level durchgehend bleibt, produziert disconnected theoretical knowledge; einer der concrete level bleibt, produziert Erfahrung ohne conceptual development.

Hattie (2009) identifizierte Curriculum-Kohärenzen als high-effect variable in student achievement. Programme wo SuS lernen als connected, cumulative journey erfahren, produce bessere outcomes als Programme wo jedes Jahr fühlt sich wie fresh start an.

## Input-Schema

Die Lehrperson muss angeben:
- **Fach oder Programm:** Name und Kurzbeschreibung. *z.B. "Biologie, Klassen 7-9 Sek 1" / "Sport, Sekundarstufe 1"*
- **Entwicklungsbanden:** Die Klassenstufen-Struktur. *z.B. "Klassen 7, 8, 9 Sek 1"*
- **Angestrebte Lernziele:** Die übergeordneten Ziele am Programm-Ende. *z.B. "SuS verstehen biologische Prozesse auf Zell-, Organismus- und Populations-Ebenen; können wissenschaftliche Methoden anwenden; sind resilient gegenüber komplexem Wissen"*

Optional:
- **Existierende Unterrichtseinheiten:** Bereits vorhandene Einheiten oder Kompetenzen
- **Wissensarchitektur-Output:** Falls bereits durchgeführt
- **Verfügbare Zeit:** Lektionen pro Woche pro Klasse

## Prompt

```
Du bist ein Experte für Programm-Level Curriculum-Design mit tiefem Wissen über Bruners (1960) Spiral-Curriculum, Wiggins & McTighe (2005) backwards design auf Programm-Ebene, Bernsteins (1999) Wissensstrukturen, Mullers (2009) Curriculum-Kohärenzen-Formen, Matons (2013) semantic wave, Schmidt, Wang & Knights (2005) Kohärenzen-Forschung, Duschl et al. (2007) learning progressions, und Hatties (2009) Evidenz auf Curriculum-Kohärenzen als predictor von SuS-Outcomes. Du verstehst, dass verschiedene Wissenstypen fundamentally unterschiedliche Sequenzierungs-Logik erfordern.

Deine Aufgabe ist es, einen kohärenten Jahresplan für folgendes Programm zu produzieren:

**Fach oder Programm:** {{fach_oder_programm}}
**Entwicklungsbanden:** {{entwicklungsbanden}}
**Angestrebte Lernziele:** {{angestrebte_lernziele}}

Optional:
**Existierende Unterrichtseinheiten:** {{existierende_unterrichtseinheiten}}
**Wissensarchitektur-Output:** {{wissensarchitektur_output}}
**Verfügbare Zeit:** {{verfuegbare_zeit}}

## Die Drei Sequenzierungs-Logiken

Du MUSST jeden Wissenstyp nach seiner eigenen Logik sequenzieren.

**Hierarisches Wissen — Voraussetzungs-Sequenzierung (Bernstein, 1999)**
Hierarisches Wissen muss nach Voraussetzungs-Abhängigkeit sequenziert werden. Konzept B kann nicht vor A gelehrt werden wenn B genuinely A depends. Mappe die volle Voraussetzungs-Kette über alle Klassenstufen. Identifiziere, wo SuS expected sind, Wissen zu nutzen, das noch nicht introduced worden ist — das ist Sequenzierungs-Fehler.

**Horizontales Wissen — Sophistikations-Sequenzierung (Muller, 2009; Maton, 2013)**
Horizontales Wissen hat keine strict prerequisites. Aber die Sophistikation des Thinking muss steigen. Mappe a clear sophistication progression:
- **Emerging:** SuS identifizieren, dass verschiedene Perspektiven/Ansätze existieren
- **Developing:** SuS beschreiben und compare Perspektiven
- **Competent:** SuS applizieren analytische Frameworks auf spezifische Cases
- **Extending:** SuS synthetisieren über Frameworks, kritisieren ihre Limits, konstruieren eigene analytische Positionen

Wenn die gleiche thinking demand wiederholt über Klassenstufen hinweg ohne Sophistikation-Steigerung, ist das plateau, nicht spiral.

**Dispositives Wissen — Kontinuierlicher Faden mit Wissens-Voraussetzungen**
Dispositives Wissen entwickelt über das ganze Programm als continuous thread. Es ist nicht "gelehrt" in spezifischen Einheiten und dann fertig. Aber Dispositionen sind nicht kontext-frei: viele brauchen sufficient domain knowledge, bevor sie authentisch manifest können. Für jedes Dispositions-Element, identifiziere die Wissens-Voraussetzungen, die in-place sein müssen, bevor die Disposition auf jeder Klassenstufe authentically entwickeln kann.

## Prozess

Folge diesen sieben Schritten genau. Jeder Schritt produziert einen named Abschnitt im Output.

**Step 1 — Wissens-Architektur-Diagnose.**
Bevor sequenzieren, identifiziere, welche Wissenstypen in diesem Programm vorhanden sind. Wenn Wissensarchitektur-Output vorhanden ist, nutze es. Falls nicht, conduct eine rapide Diagnose: Was sind die hierarischen Elemente mit Voraussetzungs-Ketten, was sind die horizontalen Elemente, was sind die dispositiven Elemente?

**Step 2 — Mappe Hierarische Voraussetzungen über Klassenstufen.**
Für alle hierarischen Wissens-Elemente, establish die Voraussetzungs-Kette explizit. Mappe diese Abhängigkeiten über die volle Struktur. Identifiziere die früheste Klassenstufe, wo jedes Konzept meaningfully introduced werden kann. Flagge jedes Element, das vor seinen Voraussetzungen platziert ist — Sequenzierungs-Fehler.

**Step 3 — Mappe Horizontale Sophistikations-Progression.**
Für alle horizontalen Wissens-Elemente, beschreibe, was steigende Sophistikation über Klassenstufen hinweg aussieht. Für jedes horizontale Element, specify: was sieht Emerging Engagement aus wie, Developing, Competent, Extending? Dann platziere jede Klassenstufe auf dem angemessenen Level dieser Progression.

**Step 4 — Mappe Dispositionale Fäden.**
Für alle dispositiven Elemente, mappe sie als kontinuierliche Fäden über das ganze Programm. Identifiziere, an welcher Klassenstufe jede Disposition erste meaningfully entwickeln kann given die Wissens-Voraussetzungen. Markiere, wo jede Disposition transitionen von emerging zu developing zu deepening.

**Step 5 — Vertikale Kohärenzen-Check.**
Lies die volle Sequenz von erster zu letzter Klassenstufe. Für hierarische Elemente: Wird jedes Konzept nach seinen Voraussetzungen introduced? Für horizontale Elemente: Steigt analytische Sophistikation genuinely, oder machen SuS die gleichen Thinking-Moves mit etwas härterer Inhalte? Für dispositionale Elemente: Sind Entwicklungs-Gelegenheiten durchgehend present?

**Step 6 — Horizontale Kohärenzen-Check.**
Lies jede Klassenstufe independently. Ist angemessene Balance zwischen Wissenstypen within dieser Stufe? Sind die Einheiten within dieser Stufe thematisch oder konzeptionell connected, oder isolierte topics?

**Step 7 — Design-Flaggen und Empfehlungen.**
Identifiziere Lücken (wichtige Elemente missing), Überlapplungen (Elemente repeated ohne Progression), problematische Klassenstufen-Transitionen, und zusammengesetzte Kompetenzen.

Gib Output in diesem exakten Format aus:

## Jahresplan: [Programm-Name]

**Programm:** [Zusammengefasst]
**Klassenstufen:** [Struktur]
**Angestrebte Lernziele:** [Zusammengefasst]
**Verfügbare Zeit:** [Falls vorhanden; sonst "Nicht angegeben"]

### 1. Wissens-Architektur-Diagnose

**Hierarische Elemente:** [Liste mit Beschreibung]
**Horizontale Elemente:** [Liste]
**Disposititive Elemente:** [Liste]
**Architektur-Zusammenfassung:** [Gesamtprofil]

### 2. Hierarische Voraussetzungs-Karte

| Konzept | Voraussetzungen | Früheste Viable Klassenstufe | Sequenzierungs-Notizen |
|---|---|---|---|
| [Konzept] | [Was muss zuerst kommen] | [Klassenstufe] | [Warum hier] |

### 3. Horizontale Sophistikations-Progression

| Horizontales Element | Emerging | Developing | Competent | Extending |
|---|---|---|---|---|
| [Element] | [Was Thinking aussieht wie] | [Was Thinking aussieht wie] | [Was Thinking aussieht wie] | [Was Thinking aussieht wie] |

### 4. Dispositionale Fäden

| Disposition | Wissens-Voraussetzungen | Früheste Meaningful Klassenstufe | Progression über Klassenstufen |
|---|---|---|---|
| [Disposition] | [Welches Wissen muss in-place sein] | [Klassenstufe] | [Wie sich entwickelt] |

### 5. Vertikale Kohärenzen-Check

**Hierarische Kohärenzen:** [Sind Voraussetzungen in-place?]
**Horizontale Kohärenzen:** [Steigt Sophistikation?]
**Dispositionale Kohärenzen:** [Sind Gelegenheiten durchgehend?]
**Gesamturteil:** [Wo ist Programm kohärent, wo bricht es?]

### 6. Horizontale Kohärenzen-Check

**[Klassenstufe]:**
- Wissenstyp-Balance: [Proportionen]
- Interne Verbindungen: [Sind Einheiten connected?]
- Readiness für nächste Stufe: [Vorbereitung]

[Wiederhole für jede Klassenstufe]

### 7. Design-Flaggen und Empfehlungen

**Lücken:** [Fehlende Elemente — mit Empfehlung, wo hinzuzufügen]
**Überlapplungen:** [Wiederholte ohne Progression — wie zu differentizieren]
**Problematische Transitionen:** [Klassenübergänge wo SuS struggeln]
**Zusammengesetzte Kompetenzen:** [Über multiple Klassenstufen ohne klare Progressionslogik]
**Prioritäts-Aktionen:** [Die 3-5 wichtigsten changes zu machen]

**Selbstcheck vor Rückgabe:** Verifiziere dass (a) jedes hierarische Element Voraussetzungen mapped hat, (b) jedes horizontale Element eine vier-Level Sophistikations-Progression hat, (c) jedes dispositionales Element Wissens-Voraussetzungen identified hat, (d) vertikale Kohärenzen-Check flagget spezifische breaks statt generic assurance, (e) horizontale Kohärenzen-Check examines jede Klassenstufe independently, (f) Design-Flaggen include spezifische Empfehlungen, nicht nur Identifikationen.
```

## Beispiel-Output (Auszug)

**Szenario:** *Fach: "Biologie, Klassen 7-9 Sek 1 (Lehrplan 21)" / Klassenstufen: "7., 8., 9. Klasse Sek 1" / Angestrebte Lernziele: "SuS verstehen biologische Systeme auf Zell-, Organismus- und Populations-Ebene; können wissenschaftliche Methoden und Modellierung anwenden; entwickeln Verständnis für Nachhaltigkeit"*

---

## Jahresplan: Biologie Sek 1 (Klassen 7-9)

**Programm:** Biologie Sekundarstufe 1 — Zellen, Organe, Systeme, Evolution, Ökologie
**Klassenstufen:** 7., 8., 9. Klasse Sek 1
**Angestrebte Lernziele:** SuS verstehen lebende Systeme auf Zell-, Organismus- und Ökosystem-Ebene; können wissenschaftlich erkunden und argumentieren; verstehen Mensch-Natur-Beziehung
**Verfügbare Zeit:** 3 Lektionen pro Woche pro Klasse

### 1. Wissens-Architektur-Diagnose

**Hierarische Elemente:**
- Zellstruktur: Kern, Mitochondrien, Chloroplasten, ihre Funktionen
- Vererbungs-Mechanismen: DNA, Gene, Zellteilung, Vererbungs-Muster
- Körper-Systeme: Verdauung, Atmung, Blutkreislauf — Struktur und Funktion
- Evolution: natürliche Selektion, Adaptation, fossile Evidenz
- Ökosystem-Prozesse: Photosynthese, Respiration, Nährstoff-Zyklen

**Horizontale Elemente:**
- Wissenschaftliches Erkunden: Frage formulieren, Hypothesen entwickeln, Evidenz sammeln, interpretieren, argumentieren
- Modellierung biologischer Prozesse: vereinfachte Darstellungen komplexer Systeme erstellen und kritisieren
- Umwelt-Perspektiven: mehrfache Perspektiven auf Mensch-Umwelt-Beziehung (ökonomisch, ökologisch, sozial)

**Disposititive Elemente:**
- Wissenschaftliche Neugier und Skepsis: Interesse an Naturphänomenen, Bereitschaft, Annahmen zu hinterfragen
- Nachhaltiges Denken: Verhältnis zu Natur und Ressourcen überdenken, Handlungs-Fähigkeit entwickeln
- Resilienz gegenüber Komplexität: Komfort mit unvollständigem Verständnis und revidierbarem Wissen

### 2. Hierarische Voraussetzungs-Karte

| Konzept | Voraussetzungen | Früheste Viable Klassenstufe | Sequenzierungs-Notizen |
|---|---|---|---|
| Zellstruktur (Kern, Mitochondrien, Chloroplasten) | Keine — direkt beobachtbar unter Lupe/Mikroskop | 7. Klasse (früh) | Entry point für Biologie. Konkret, experiential. |
| Zellfunktion (Photosynthese, Respiration) | Zellstruktur Grundverständnis | 7. Klasse (spät) / 8. Klasse (früh) | Braucht Verständnis dass Zellen Strukturen haben, die diese Prozesse machen |
| DNA als Träger von Vererbungs-Information | Zellstruktur, Mitochondrien-Konzept | 8. Klasse | Braucht Verständnis der Zelle und dass Zellen teilen sich |
| Zellteilung (Mitose, Meiosis) | DNA-Basis-Verständnis | 8. Klasse (Mitose) / 9. Klasse (Meiosis) | Mitose ist Foundation für Meiosis und Vererbung |
| Mendelsche Vererbung | DNA, Meiosis | 9. Klasse | Braucht Verständnis, dass Zellen haploid/diploid sind, dass Meiosis Gametenbildet |
| Natürliche Selektion | Variation in Populationen, Vererbung | 9. Klasse | Braucht dass SuS verstehen dass Traits vererblich sind UND dass Populationen variieren |
| Nährstoff-Zyklen (C, N, P) | Photosynthese, Respiration, Dekompositon-Prozesse | 9. Klasse | Braucht Verständnis dass Energie und Materie zwischen Organismen und Umwelt zirkulieren |

**Prerequisite-Ketten-Visualisierung:**
```
Klasse 7: Zellstruktur → Zellbeobachtung (Mikro)
          ↓
        Zellprozesse (Photo/Respiration) → Energie-Konzepte

          Klasse 8: DNA-Basis → Zellteilung (Mitose)
          ↓                         ↓
        Vererbungs-Grundlagen ← DNA/Gene-Konzept
          
        Klasse 9: Meiosis → Mendelsche Vererbung
                   ↓
          Variation in Populationen
                   ↓
          Natürliche Selektion ← Adaptation-Konzept
                   ↓
          Evolution über Zeit
```

### 3. Horizontale Sophistikations-Progression

| Horizontales Element | Emerging (7. Klasse) | Developing (8. Klasse) | Competent (9. Klasse) | Extending (über SekII) |
|---|---|---|---|---|
| **Wissenschaftliches Erkunden** | Beobachtet Phänomene und beschreibt, was passiert | Fragt "Warum?", entwickelt einfache Hypothesen, sammelt Daten systematisch | Designt einfache Experimente mit Control-Gruppen, interpretiert Daten kritisch, argumentiert mit Evidenz | Evaluiert die Qualität wissenschaftlicher Argumente, erkennt Limits der Evidenz, revidiert Verständnis wenn neue Daten kommen |
| **Modellierung biologischer Prozesse** | Verwendet bereitgestellte Modelle um Prozesse zu verstehen (z.B. Zellmodell folgen) | Erstellt einfache Modelle um Prozesse zu erklären (z.B. Zellmodell aus Materialien bauen) | Evaluiert Modelle kritisch — welche Features sind essential, welche sind Simplifikation? Welche Prozesse kann dieses Modell nicht zeigen? | Konstruiert multiple Modell-Darstellungen eines gleichen Prozesses, evaluiert trade-offs zwischen Einfachheit und Genauigkeit |
| **Umwelt-Perspektiven** | Erkennt dass Menschen die Umwelt nutzen (Ressourcen, Platz, Entsorgung) | Versteht verschiedene menschliche Needs (Essen, Energie, Transportmittel) und dass diese Umwelt-Einfluss haben | Analysiert komplexe Mensch-Umwelt-Beziehungen — wirtschaftliche, ökologische, und soziale Faktoren — und dass diese oft in Tension sind | Entwickelt eigene durchdachte Position auf nachhaltiges Leben, erkennt Werte-Dimensionen und Komplexität |

**Sophistikations-Check:**
Diese Progressionen zeigen genuine Anstieg in analytischer Anforderung, nicht nur schwerere Inhalte. Die kritischen Transitionen:
- **7. → 8. Klasse:** von Beschreiben zu Erklären (Was passiert? → Warum passiert das?)
- **8. → 9. Klasse:** von einfachen zu kritischen Perspektiven (Kann ich ein Modell erstellen? → Wie gut ist dieses Modell wirklich?)

### 4. Dispositionale Fäden

| Disposition | Wissens-Voraussetzungen | Früheste Meaningful Klassenstufe | Progression über Klassenstufen |
|---|---|---|---|
| **Wissenschaftliche Neugier und Skepsis** | Keine verpflichtenden — beginnt mit direkter Beobachtung | 7. Klasse (Emerging) | 7. Klasse: Notiert interessante biologische Phänomene, fragt "Warum?"-Fragen. 8. Klasse: Hinterfragt einfache Erklärungen, sucht nach alternativen Erklärungs-Ideen. 9. Klasse: Evaluiert Vorschläge kritisch, bleibt skeptisch gegenüber simplen Antworten |
| **Nachhaltiges Denken und Handlung** | 7./8. Klasse: Verstehen dass Menschen biologische Ressourcen nutzen. 9. Klasse: Verstehen dass Nährstoff-Zyklen und Energie-Flüsse Grenzen für menschliche Nutzung setzen | 7. Klasse (Emerging — Bewusstsein dass Menschen Natur nutzen) | 7. Klasse: Notiert menschliche Nutzung der Natur (Essen, Wasser, Luft). 8. Klasse: Versteht dass bestimmte Nutzung problematisch sein kann (Überfischung, Abfall, Emissionen). 9. Klasse: Reflektiert über eigne Praktiken und Alternativen, entwickelt Handlungs-Möglichkeiten |
| **Resilienz gegenüber Komplexität** | Keine verpflichtenden — Biologische Systeme sind intrinsisch komplex | 7. Klasse (Anfänglich: Schuldig, einfache Modelle zu nutzen) | 7. Klasse: Wird mit vereinfachten Zellen-/Prozess-Modellen komfortabel. 8. Klasse: Anerkennt dass reale Systeme komplexer sind als Modelle, findet das interessant statt frustrierend. 9. Klasse: Kann multiple compete Faktoren gleichzeitig consider, comfortable mit "es ist kompliziert" |

**Wissens-Kontingenz-Flaggen:**
- **Nachhaltiges Denken auf 9. Klasse-Ebene** braucht ausreichendes Verständnis von Nährstoff-Zyklen und Ökosystem-Limits. Diese Inhalte müssen first term 9. Klasse gelehrt werden.

### 5. Vertikale Kohärenzen-Check

**Hierarische Kohärenzen:**
Die vorgeschlagene Sequenzierung ist kohärent: Zellstruktur (7.) → Zellprozesse (7./8.) → DNA/Vererbung (8./9.) → Populationen und Evolution (9.). Jedes Konzept folgt seinen Voraussetzungen.

**Horizontale Kohärenzen:**
Wissenschaftliches Erkunden und Modellierung zeigen genuine Sophistikations-Steigerung. Umwelt-Perspektiven escalate von Bewusstsein zu kritischer Analyse. Diese sind nicht plateaus.

**Dispositionale Kohärenzen:**
Alle drei dispositiven Fäden sind präsent über alle Klassenstufen. Sie werden nicht "gelehrt", sondern entwickeln durch continuous Gelegenheit und Modellierung.

**Gesamturteil:**
Programm ist vertikal kohärent mit angemessenem Progression von Klasse 7-9. Kernrisiko: Klasse 9 ist inhalts-dicht (Evolution, Ökologie, Nährstoff-Zyklen). Zeit-Management ist kritisch.

### 6. Horizontale Kohärenzen-Check

**Klasse 7:**
- Wissenstyp-Balance: Primarily hierarisch (Zellstruktur, Zellprozesse). Horizontale Elemente emerging (einfaches Erkunden). Dispositiv: early exposure zu Neugier/Modeling.
- Interne Verbindungen: Stark. Zellstruktur verbindet zu Zellprozessen verbindet zu einfachen Modellen.
- Readiness für nächste Klasse: SuS verlassen 7. Klasse verstehend Zellstruktur/Prozess-Grundlagen, ready für Vererbungs-Konzepte.

**Klasse 8:**
- Wissenstyp-Balance: Hierarisch (DNA, Mitose, Vererbungs-Grundlagen) intensiviert. Horizontale Elemente (Erkunden-Design, Modell-Kritik) entwickeln.
- Interne Verbindungen: Moderat. DNA/Vererbungs-Unit steht separat von Zellprozess-Unit (7. Klasse) — Verbindung zwischen Zellprozessen und Zellenergie und Vererbung sollte explizit gelehrt werden.
- Readiness für nächste Klasse: SuS verstehen Vererbungs-Mechanismen, bereit für Populations-Ebene Evolution.

**Klasse 9:**
- Wissenstyp-Balance: All drei Typen at most demanding. Hierarisch intensive (Meiosis, Mendelsche Vererbung, Nährstoff-Zyklen, Energie-Flüsse). Horizontal demanding (Modell-Kritik, Perspektiven-Analyse). Dispositiv: deepening (nachhaltiges Denken will be authentically tested).
- Interne Verbindungen: Stärkste potentiell. Evolution verbindet zu Ökologie verbindet zu Nachhaltigkeit verbindet zu Agency. Falls Verbindungen explizit gelehrt werden — sehr kohärent. Falls units isoliert — fragmentiert.
- Readiness für SecII: SuS verstehen biologische Systeme auf mehrfachen Skalen, verstehen wissenschaftliche Argument und Modellierungs-Limits, haben gefunden Positionierung zu Umwelt-Fragen.

### 7. Design-Flaggen und Empfehlungen

**Lücken:**
- **Mensch-Physiologie & Gesundheit:** Ist nicht explicitly gemapt. Die programme geht von Zellen zu Vererbung zu Populations-Biologie, überspringt aber Körper-Systeme-Detail. Recommendation: Add unit "Menschliche Systeme" zu Klasse 8, post-Zellprozesse, pre-DNA/Vererbung. Dies braucht 5-6 Lektionen.

**Überlapplungen:**
- **Energie-Konzepte:** Photosynthese/Respiration sind in Klasse 7 eingeführt, dann wieder in Nährstoff-Zyklen (Klasse 9). Zweite Instanz sollte sie nicht wiederholen, sondern von Zell-Ebene zu Populations-Ebene skalieren.

**Problematische Transitionen:**
- **Klasse 8 → 9:** Massive leap in content Dichte. Meiosis, Mendelsche Vererbung, dann sofort Evolution und Ökologie. Empfehlung: Starten Sie 9. Klasse mit Bridging-Unit "Variation und Selektion" die Vererbungs-Konzepte (8. Klasse) zu Populations-Konzepten (9. Klasse) verbindet.

**Zusammengesetzte Kompetenzen:**
- **Evolution ist compound:** Braucht Vererbungs-Wissen (8. Klasse), Populations-Variation-Verstehen (9. Klasse), und auch Fossilien-Evidenz und Deep-Time-Konzept. Evolution sollte nicht ein einzelnes Unit sein, sondern ein synthesizing theme der ganzen Klasse 9 sein.

**Prioritäts-Aktionen (in Impac-Ordnung):**
1. **Add Human Physiology Unit zu Klasse 8** — ohne das, fehlt SuS ein Kern-Biologie-Konzept und Connections zu eigen Körper.
2. **Design Bridging-Unit für Klasse 8→9 Transition:** Explicit connection von Vererbung zu Populations-Variation zu Selektion zu Evolution.
3. **Make Evolution a synthetic theme, nicht ein isolated Unit** — es sollte durch ganze Klasse 9 run, connecting zu Ökologie, Nährstoff-Zyklen, Anpassung.
4. **Clarify that Klasse 9 ist Zeit-dicht:** 3 Lektionen/Woche reicht möglicherweise nicht. Oder prioritize: Evolutionsbiologie & Grundlagen-Ökologie sind must-have; Advanced-Ökologie (Störungs-Management, Succession) könnte SecII sein.
5. **Integriere Nachhaltigkeit-Themen durchgehend ab Klasse 7**, nicht als separate Unit. Jede Lektion könnte small-scale Nachhaltigkeit-Verbindung haben.

---

## Bekannte Limitationen

1. **Der Jahresplan produzierte ist Planungs-Dokument, nicht Unterrichts-Realität.** Ein kohärenter geschriebener Plan garantiert nicht kohärente Unterricht — Implementation hängt ab davon, dass Lehrperson die Sequenzierungs-Logik verstehen und konsistente Entscheidungen machen.

2. **Learning-Progressionen sind empirisch-gegründet für manche Domains, dünner für andere.** Wo die Evidenz-Basis dünn ist, produziert diese Skill eine logische Progression basiert auf developmental principles — aber sie sollte getestet werden durch Implementation.

3. **Dieser Skill produziert empfohlene Sequence; kann sie nicht enforcer.** In realen Schulen, Jahresplan ist subject zu Timetabling, Staff Changes, Ressourcen-Verfügbarkeit. Der Output sollte als design target behandelt werden.

4. **Die drei-Typ-Wissensrahmen ist Simplifikation.** Echte Elemente sitzen oft an Grenzen. Klassifizierung für Sequenzierungs-Zwecke sollte explizit gemacht werden.

5. **Jahresplan-Design ist nie finished.** Als SuS durch Programm gehen, wird Assessment-Daten zeigen, wo die Sequenz funktioniert und wo sie Lücken produziert. Der Plan sollte mindestens jährlich revised werden mit SuS-Outcome-Daten.
