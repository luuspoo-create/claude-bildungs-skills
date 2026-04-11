---
# AGENT SKILLS STANDARD FIELDS (v2)
name: feedback-qualitaet
description: "Analysiere bestehendes schriftliches Feedback auf Qualität, Spezifität, Handlungsfähigkeit und Lernwirkung. Nutze diesen Skill beim Review von Lehrpersonen- oder Peer-Feedback zur Verbesserung von Feedback-Praktiken."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-lernwissenschaft/feedback-qualitaet"
skill_name: "Feedback-Qualitätsanalyse & Umschreiber"
domain: "schule-lernwissenschaft"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Hattie & Timperley (2007) — The power of feedback: a meta-analysis (effect size ~0.73)"
  - "Shute (2008) — Focus on formative feedback: a review of the research"
  - "Kluger & DeNisi (1996) — Effects of feedback intervention on performance: a historical review and meta-analysis"
  - "Black & Wiliam (1998) — Assessment and classroom learning: formative assessment principles"
  - "Wisniewski et al. (2020) — The power of feedback revisited: a meta-analysis of educational feedback research"
input_schema:
  required:
    - field: "feedback_text"
      type: "string"
      description: "Das zu analysierende Feedback (von LP oder Peer)"
    - field: "aufgaben_kontext"
      type: "string"
      description: "Was der/die SuS machen sollte und das Lernziel"
  optional:
    - field: "sus_arbeit_zusammenfassung"
      type: "string"
      description: "Zusammenfassung der tatsächlichen SuS-Arbeit, auf die sich Feedback bezieht"
    - field: "sus_niveau"
      type: "string"
      description: "Klassenstufe und Leistungsprofil"
    - field: "sus_profile"
      type: "array"
      description: "Aus Kontext-Engine: Selbstregulations-Niveau, Sprachkompetenz, Sensibilitätsfaktoren"
    - field: "bewertungsraster"
      type: "string"
      description: "Aus Kontext-Engine: Rubrik oder Erfolgskriterien für diese Aufgabe"
output_schema:
  type: "object"
  fields:
    - field: "analyse"
      type: "object"
      description: "Diagnose von Feedback-Niveau, Spezifität und Handlungsfähigkeit"
    - field: "umgeschriebenes_feedback"
      type: "string"
      description: "Verbesserte Version, die identifizierte Schwächen behebt"
    - field: "verbesserungs_begruendung"
      type: "string"
      description: "Was geändert wurde und warum, mit Evidenz-Referenzen"
chains_well_with:
  - "lueckenanalyse-sus-arbeit"
  - "kriterium-rubrik-generator"
  - "selbstregulations-geruest-generator"
  - "metakognitives-fragenrepertoire"
  - "knowledge-use-diagram-mapper"
teacher_time: "3 Minuten"
tags: ["feedback", "formative-bewertung", "metakognition", "schreiben", "bewertung", "lernwissenschaft"]
---

# Feedback-Qualitätsanalyse & Umschreiber

## Was dieser Skill leistet

Nimmt ein Feedback-Stück, analysiert es anhand von Hattie & Timperley's (2007) Vier-Ebenen-Feedback-Modell und schreibt es um, um Niveau, Spezifität und Handlungsfähigkeit zu verbessern. Die Analyse identifiziert, ob Feedback auf Aufgaben-, Prozess-, Selbstregulations- oder Selbst-Ebene wirkt, und evaluiert, ob es dem/der SuS sagt, wo sie/er ist, wo sie/er hin soll und wie sie/er dort ankommt. KI ist besonders wertvoll, weil die meisten Lehrpersonen-Feedbacks — auch von erfahrenen — standardmäßig zu unspezifisch sind („Gute Mühe!"), zu allgemein kritisierend („Braucht mehr Detail") oder auf Selbst-Ebene („Du bist ein toller Schreiber") — all dies hat laut Forschung null oder negative Lernwirkung.

## Evidenzgrundlage

Hattie & Timperley (2007) fanden durch Meta-Analyse, dass Feedback eine durchschnittliche Effektstärke von 0,73 hat — eine der höchsten in Bildungsforschung — aber mit enormer Variabilität. Effektives Feedback beantwortet drei Fragen: Wohin gehe ich? (Feed up), Wie geht es mir? (Feed back), Was kommt als nächstes? (Feed forward). Sie identifizierten vier Feedback-Ebenen: Aufgabe (Korrektheit), Prozess (Strategien), Selbstregulation (Monitoring und Kontrolle), Selbst (persönliches Lob/Kritik). Aufgaben-Feedback verbessert unmittelbare Leistung; Prozess-Feedback verbessert Strategie-Nutzung; Selbstregulations-Feedback baut Unabhängigkeit auf. Selbst-Feedback („Du bist so klug" / „Enttäuschende Arbeit") hat keine positive Wirkung und kann Lernen untergraben. Kluger & DeNisi (1996) fanden, dass ein Drittel aller Feedback-Interventionen die Leistung sogar verschlechterten — normalerweise, wenn Feedback Selbstwertgefühl bedrohte. Wisniewski et al. (2020) bestätigte, dass Feedback mit Information (spezifisch, aufgabenbezogen) deutlich effektiver ist als Feedback mit nur Urteilen (Noten, Lob, Kritik).

## Input-Schema

Die Lehrperson (LP) muss bereitstellen:
- **Feedback-Text:** Das zu analysierende Feedback. *z.B. „Gute Arbeit! Du hast klar versucht. Nächstes Mal mehr Detail in deiner Analyse. 6/10."*
- **Aufgaben-Kontext:** Was der/die SuS tat und Lernziel. *z.B. „9. Klasse Deutsch-Aufsatz zu Ursachen des Ersten Weltkriegs. Ziel: begründete Argumentation mit Belegen aufbauen."*

Optional (injiziert durch Kontext-Engine wenn verfügbar):
- **SuS-Arbeit-Zusammenfassung:** Beschreibung der tatsächlichen Arbeit
- **SuS-Niveau:** Klassenstufe und Leistungsprofil
- **SuS-Profile:** Selbstregulations-Niveau, Sprachkompetenz, emotionale Faktoren
- **Bewertungsraster:** Erfolgskriterien oder Rubrik

## Prompt

```
Du bist ein Experte in Feedback-Forschung, spezialisiert auf Hattie & Timperley's (2007) Feedback-Modell und Shute's (2008) formatives Feedback. Du kennst die Unterscheidung zwischen Feedback-Ebenen (Aufgabe, Prozess, Selbstregulation, Selbst) und verstehst, warum Spezifität und Handlungsfähigkeit die Feedback-Wirkung bestimmen.

Deine Aufgabe: Analysiere und schreibe das folgende Feedback um:

**Feedback-Text:** "{{feedback_text}}"
**Aufgaben-Kontext:** {{aufgaben_kontext}}

Der folgende optionale Kontext kann bereitgestellt werden. Nutze, was verfügbar ist; ignoriere fehlende Felder.

**SuS-Arbeit-Zusammenfassung:** {{sus_arbeit_zusammenfassung}} — wenn angegeben, nutze Details der tatsächlichen Arbeit für spezifischeres Feedback. Falls nicht, basiere Analyse auf Feedback-Text und Kontext.
**SuS-Niveau:** {{sus_niveau}} — wenn angegeben, kalibriere Sprache und Erwartungen. Falls nicht, leite aus Aufgaben-Kontext ab.
**Rubrik/Erfolgskriterien:** {{bewertungsraster}} — wenn angegeben, referenziere spezifische Kriterien. Falls nicht, referenziere Lernziel aus Kontext.
**SuS-Profile:** {{sus_profile}} — wenn angegeben, berücksichtige Selbstregulations-Niveau (hohe Selbstregulation: mehr Self-Monitoring-Prompts; niedrig: mehr spezifische Aufgaben-/Prozess-Anleitung). Falls nicht, generische Kalibierung.

Analysiere das Feedback mit diesen evidenzbasierten Kriterien:

1. **Feedback-Ebenen-Diagnose (Hattie & Timperley, 2007):**
   - **Aufgabe:** Sagt es dem/der SuS, was an ihrer spezifischen Arbeit korrekt oder inkorrekt ist? (Nützlich aber begrenzt.)
   - **Prozess:** Spricht es die Strategien, Fähigkeiten oder Prozesse an? (Mächtiger — transferiert zu zukünftigen Aufgaben.)
   - **Selbstregulation:** Prompt es den/die SuS, ihr Lernen zu monitoren, zu evaluieren oder anzupassen? (Mächtigste für Unabhängigkeit.)
   - **Selbst:** Kommentiert es den/die SuS als Person statt die Arbeit? (Keine Lernwirkung. Entfernen.)

2. **Die drei Feedback-Fragen (Hattie & Timperley, 2007):**
   - **Feed up (Wohin gehe ich?):** Referenziert Feedback das Lernziel oder Erfolgskriterien?
   - **Feed back (Wie geht es mir?):** Sagt es spezifisch, was gut oder schlecht war im Verhältnis zum Ziel?
   - **Feed forward (Was kommt als nächstes?):** Gibt es einen spezifischen, umsetzbaren nächsten Schritt?

3. **Spezifitäts-Check (Shute, 2008):** Ist Feedback spezifisch genug, dass der/die SuS genau weiß, was anders zu machen ist? „Mehr Detail" ist nicht spezifisch. „In Absatz 3 behauptest du, Militarismus verursachte WWI, gibst aber keinen Beleg. Füge ein spezifisches Beispiel militärischer Aufrüstung 1900–1914 hinzu" ist spezifisch.

4. **Bedrohungs-Check (Kluger & DeNisi, 1996):** Könnte dieses Feedback als Selbstwertbedrohung wahrgenommen werden, besonders für kämpfende SuS? Wenn ja, reframe auf die Arbeit, nicht die Person.

5. **Umsetzbarkeits-Check:** Kann der/die SuS auf dieses Feedback unabhängig handeln? Wenn Feedback Wissen/Fähigkeiten voraussetzt, die der/die SuS nicht hat, ist es nicht umsetzbar.

Gib deine Antwort in diesem Format aus:

## Feedback-Analyse

### Original-Feedback
[Reproduziere das Originalfeedback]

### Ebenen-Analyse
| Feedback-Ebene | Vorhanden? | Beispiele aus Text |
|---------------|----------|-------------------|
| Aufgabe | Ja/Nein | [Zitate] |
| Prozess | Ja/Nein | [Zitate] |
| Selbstregulation | Ja/Nein | [Zitate] |
| Selbst | Ja/Nein | [Zitate] |

**Dominante Ebene:** [Welche Ebene dominiert und ob das angemessen ist]

### Drei-Fragen-Check
- **Feed up (Wohin gehe ich?):** [Referenziert Feedback das Ziel? Ja/Nein + Detail]
- **Feed back (Wie geht es mir?):** [Sagt es, was gut/schlecht war? Ja/Nein + Detail]
- **Feed forward (Was kommt als nächstes?):** [Gibt es einen spezifischen nächsten Schritt? Ja/Nein + Detail]

### Spezifitäts-Bewertung
[Niedrig / Mittel / Hoch] — [Begründung]

### Kernprobleme
[Nummerierte Liste spezifischer Probleme]

### Umgeschriebenes Feedback
[Verbesserte Version — ähnliche Länge, deutlich bessere Qualität]

### Was sich geändert hat und warum
[Bullet-Liste mit Erklärungen und Evidenz-Referenzen]

**Selbstkontrolle vor Antwort:** Verifiziere, dass (a) umgeschriebenes Feedback alle drei Fragen beantwortet (Feed up, back, forward), (b) es auf Prozess- oder Selbstregulations-Ebene wirkt, nicht nur Aufgabe, (c) es spezifisch genug ist, dass SuS genau wissen, was zu tun ist, (d) es keine Selbst-Ebenen-Kommentare enthält, (e) es in SuS-Sprachniveau geschrieben ist.
```

## Beispiel-Output

**Szenario:** *Feedback-Text: „Gute Mühe, Nina! Ein paar wirklich schöne Punkte hier. Du brauchst an deiner Analyse zu arbeiten — versuche, nächstes Mal tiefer zu gehen. Dein Schreibstil ist schön. 6/10." / Aufgaben-Kontext: „9. Klasse Deutsch-Literatur-Aufsatz zur Analyse von Lady Macbeth's Ehrgeiz in Akt 1. Ziel: analysiere Sprache und Struktur zur Werkzeugung der Charakterpräsentation."*

---

## Feedback-Analyse

### Original-Feedback
„Gute Mühe, Nina! Ein paar wirklich schöne Punkte hier. Du brauchst an deiner Analyse zu arbeiten — versuche, nächstes Mal tiefer zu gehen. Dein Schreibstil ist schön. 6/10."

### Ebenen-Analyse
| Feedback-Ebene | Vorhanden? | Beispiele aus Text |
|---------------|----------|-------------------|
| Aufgabe | Teilweise | „6/10" gibt Note aber keine Info, was korrekt/inkorrekt war |
| Prozess | Nein | Keine Referenz zu Strategien oder analytischen Prozessen |
| Selbstregulation | Nein | Keine Prompts für Ninas Selbst-Monitoring/Evaluierung |
| Selbst | Ja | „Gute Mühe, Nina!" und „Dein Schreibstil ist schön" — adressieren Nina als Person |

**Dominante Ebene:** Selbst-Ebene dominiert. Die zwei substanziellen Kommentare sind über Nina, nicht ihre Analyse. Selbst-Feedback hat keine positive Lernwirkung (Hattie & Timperley, 2007) und die Note ohne Erklärung ist ein Urteil, keine Information (Wisniewski et al., 2020).

### Drei-Fragen-Check
- **Feed up (Wohin gehe ich?):** Nein. Feedback referenziert nicht das Lernziel (wie Shakespeare Lady Macbeth durch Sprache und Struktur darstellt). Nina weiß nicht, worauf sie hinarbeitet.
- **Feed back (Wie geht es mir?):** Kaum. „Ein paar schöne Punkte" ist vage — welche Punkte? Was machte sie schön? „Du brauchst an deiner Analyse zu arbeiten" identifiziert einen Lücke aber nicht spezifisch.
- **Feed forward (Was kommt als nächstes?):** Nein. „Versuche, tiefer zu gehen" ist nicht umsetzbar. Nina hat keine Idee, was „tiefer" bedeutet oder wie es aussieht.

### Spezifitäts-Bewertung
**Niedrig** — Feedback enthält keine spezifischen Referenzen zu Ninas Arbeit. Der gleiche Kommentar könnte auf jedem Deutsch-Aufsatz stehen. Starker Indikator für schlechtes Feedback (Shute, 2008).

### Kernprobleme

1. **„Gute Mühe" ist Selbst-Ebenen-Feedback.** Es adressiert Ninas Mühe (persönliche Qualität), nicht ihre Arbeit. Keine Info, was gut war oder warum. Kluger & DeNisi (1996) fanden, dass Selbst-Feedback Aufmerksamkeit von Aufgabe zur Ego weg-lenkt.

2. **„Ein paar wirklich schöne Punkte" ist unspezifisches Aufgaben-Feedback.** Welche Punkte? Was machte sie effektiv? Ohne Spezifität kann Nina nicht replizieren, was sie gut gemacht hat.

3. **„Du brauchst an deiner Analyse zu arbeiten — versuche, tiefer zu gehen" ist vages Feed-forward.** Das häufigste Feedback-Versagen in Sekundarstufe. „Tiefer gehen" bedeutet nichts für eine 9. Klasse, die nicht weiß, wie tiefe Analyse aussieht.

4. **„Dein Schreibstil ist schön" ist Selbst-Feedback mit Geschlechts-Dimension.** Es lobt Nina als Schreiberin statt spezifischer effektiver Schreib-Entscheidungen. Forschung zu Geschlechtsmuster beim Feedback zeigt, dass Mädchen öfter Lob für Stil/Präsentation bekommen, Jungen mehr Inhalts-Feedback.

5. **„6/10" ist ein Urteil, keine Information.** Butler (1988) fand, dass wenn Kommentare von Noten begleitet sind, SuS der Note Aufmerksamkeit geben und Kommentare ignorieren. Die Note untergräbt jeden formativen Wert.

### Umgeschriebenes Feedback

Nina, dieser Aufsatz zeigt, dass du relevante Zitate wählen kannst — du wähltest starke Belege aus Akt 1, Scene 5, besonders Lady Macbeths „unsex me here"-Rede.

Deine Zitat-Wahl ist effektiv, aber deine Analyse bleibt an der Oberfläche. Z.B. schreibst du: „Das zeigt, dass Lady Macbeth ehrgeizig ist." Das ist das *Was* — aber das Lernziel fragt dich, das *Wie* zu analysieren: wie Shakespeare sie durch Sprache darstellt. Schau dir dein „unsex me here"-Zitat nochmal an. Frag dich: Warum nutzt Shakespeare das Wort „unsex"? Was sagt uns das über die Verbindung zwischen Ehrgeiz und Geschlecht in dieser Rede? Welcher Effekt entsteht beim Publikum, das eine Frau hört, die bietet, ihre Weiblichkeit für Macht zu opfern? Das ist die Analyse-Tiefe, die dieser Aufsatz braucht.

**Spezifischer nächster Schritt:** Wähle deine zwei stärksten Zitate aus diesem Aufsatz. Für jedes schreib drei Sätze: (1) Was das Zitat über Lady Macbeths Ehrgeiz zeigt, (2) warum Shakespeare dieses spezifische Wort/Image wählte, (3) welcher Effekt entsteht für das Publikum. Bring das zur nächsten Stunde mit, damit wir zusammen schauen können.

### Was sich geändert hat und warum

- **Entfernt „Gute Mühe" und „schöner Schreibstil"** — Selbst-Ebenen-Feedback, das Aufmerksamkeit zu Nina als Person weg-lenkt. Ersetzt durch spezifisches Aufgaben-Lob, das identifiziert, was sie gut machte: relevante Zitate aus Akt 1, Scene 5 wählen (Hattie & Timperley, 2007 — Aufgaben-Ebenen-Feedback).

- **Ersetzt „tiefer gehen" durch spezifisches Modell, was „tiefer" bedeutet** — zeigt Nina genau, was analytische Tiefe aussieht durch Walkthrough eines ihrer Zitate, demonstriert die Fragen, die sie stellen soll (Warum dieses Wort? Welcher Effekt?). Das ist Prozess-Ebenen-Feedback: es spricht die Strategie an, nicht nur das Ergebnis (Hattie & Timperley, 2007).

- **Fügt spezifischen, umsetzbaren nächsten Schritt hinzu** — „Wähle zwei Zitate, schreib drei Sätze mit dieser Struktur" gibt Nina etwas Konkretes zu tun. Sie kann unabhängig handeln. Das ist echtes Feed-forward (Shute, 2008).

- **Entfernt die Note** — Butler (1988) zeigte, dass reines Kommentar-Feedback mehr Lernen produziert als Kommentar-plus-Note, weil die Note Aufmerksamkeit weg-zieht. Wenn eine Note nötig ist, gib sie separat oder später.

- **Referenziert das Lernziel** — das umgeschriebene Feedback verbindet Feedback explizit zum Aufgaben-Ziel und gibt Nina einen klaren Referenzpunkt für Verbesserung (Feed up).

---

## Bekannte Grenzen

1. **Das Umschreiben benötigt die tatsächliche SuS-Arbeit.** Ohne Ninas Aufsatz zu sehen, nutzt das umgeschriebene Feedback das im Original erwähnte Zitat und macht angemessene Infetenzen. Lehrpersonen sollten das Umschreiben als Modell zum Adapten, nicht als finales Produkt, behandeln.

2. **Feedback-Effektivität hängt von LP-SuS-Beziehung ab.** Wisniewski et al. (2020) fand, dass die gleiche Feedback-Phrasing je nach Vertrauen und Schulkultur unterschiedlich empfangen wird. Das Umschreiben setzt supportives Klassenzimmer voraus. In Kontext mit Feedback-Angst brauchts möglicherweise weitere Abschwächung — aber Forschung ist klar, dass Reduktion von Spezifität zum Schutz von Gefühlen das Lernen reduziert.

3. **Dieser Skill analysiert individuelles Feedback aber kann systemische Feedback-Probleme nicht adressieren.** Wenn eine LP's Korrektur-Arbeitslast 3 Minuten pro Aufsatz bei 30 SuS bedeutet, selbst exzellente Feedback-Kenntnis hilft nicht. Systemische Lösungen (Korrektur-Volumen reduzieren, Klassen-Feedback nutzen, selektives Detail-Feedback) sind außer diesem Skill's Bereich aber oft die echte Bottleneck.
