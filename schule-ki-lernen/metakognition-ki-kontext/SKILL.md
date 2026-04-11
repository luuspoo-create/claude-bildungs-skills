---
# AGENT SKILLS STANDARD FIELDS (v2)
name: metakognition-ki-kontext
description: "Gestalte metakognitive Checkpoints, die verhindern, dass KI-gestütztes Lernen echte Verständnis umgeht. Verwende diesen Skill, wenn SuS KI-Tools nutzen und möglicherweise ihr Verständnis überschätzen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-ki-lernen/metakognition-ki-kontext"
skill_name: "Metakognitive Überwachung in KI-Kontexten"
domain: "schule-ki-lernen"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Thiede et al. (2003) — Summarizing can improve metacomprehension accuracy"
  - "Winne & Hadwin (1998) — Studying as self-regulated learning (SRL model)"
  - "Dunning et al. (2003) — Why people fail to recognize their own incompetence (Dunning-Kruger)"
  - "Bjork et al. (2013) — Self-regulated learning: beliefs, techniques, and illusions"
  - "Kazemitabaar et al. (2023) — Studying the effect of AI code generators on supporting novice learners in introductory programming"
input_schema:
  required:
    - field: "ki_lernkontext"
      type: "string"
      description: "Der spezifische Kontext, in dem SuS KI-Tools zum Lernen nutzen — was sie mit KI machen und was sie lernen sollen"
    - field: "metakognitive_risiko"
      type: "string"
      description: "Das spezifische metakognitive Risiko — wie KI-Nutzung die SuS-Selbstbeurteilung ihrer Verständigung verzerren könnte"
  optional:
    - field: "sus_niveau"
      type: "string"
      description: "Alter/Jahrgangsstufe und Leistungsniveau"
    - field: "fachbereich"
      type: "string"
      description: "Das Unterrichtsfach"
    - field: "ki_tool"
      type: "string"
      description: "Welches KI-Tool SuS nutzen — ChatGPT, Claude, ein Custom-Tutoring-System, oder anderes"
    - field: "assessment_kontext"
      type: "string"
      description: "Wie SuS-Lernertrag bewertet wird — Prüfung, Projekt, praktische Demonstration, oder anderes"
output_schema:
  type: "object"
  fields:
    - field: "metakognitive_diagnose"
      type: "object"
      description: "Analyse, wie KI-Nutzung metakognitive Überwachung verzerren könnte — spezifische Risiken und Mechanismen"
    - field: "monitoring_interventionen"
      type: "array"
      description: "Spezifische Strategien zur Verbesserung metakognitiver Genauigkeit — Prompts, Kalibrierungsaufgaben, Selbstbeurteilungs-Tools"
    - field: "ki_nutzungsrichtlinien"
      type: "object"
      description: "Wann und wie KI in diesem Kontext nutzen, um Metakognition zu unterstützen statt zu untergraben"
    - field: "assessment_ausrichtung"
      type: "object"
      description: "Wie Assessments mit metakognitiven Zielen ausgerichtet werden — testen, was SuS WIRKLICH wissen, nicht was die KI weiss"
chains_well_with:
  - "selbsterklaerung-designer"
  - "ki-feedback-design-prinzipien"
  - "produktives-scheitern"
  - "formatives-assessment-designen"
teacher_time: "4 Minuten"
tags: ["metakognition", "selbstregulation", "Dunning-Kruger", "Überconfidence", "KI-Literalität", "Winne", "Thiede", "Kalibrierung", "Lehrplan21-NE.1"]
---

# Metakognitive Überwachung in KI-Kontexten

## Was dieser Skill leistet

Analysiert, wie KI-Tool-Nutzung in einem spezifischen Lernkontext die metakognitive Überwachung der SuS verzerren könnte — ihre Fähigkeit, genau zu beurteilen, was sie wissen und nicht wissen — und gestaltet Interventionen, um metakognitive Genauigkeit zu bewahren. Dies ist eine der dringendsten Herausforderungen bei KI-gestütztem Lernen. Wenn ein/e SuS ein KI-Tool nutzt, um Arbeit zu erledigen, erlebt sie/er eine Fluency-Illusion: Die Arbeit sieht gut aus, die Antworten sind korrekt, der Text ist flüssig — und der/die SuS schliesst „Ich verstehe das." Aber der/die SuS hat die kognitive Arbeit NICHT geleistet; die KI hat. Sein/Ihr Verständnis ist kalibriert auf das PRODUKT (das gut ist), nicht auf sein/Ihr WISSEN (das möglicherweise unverändert ist). Bjork et al. (2013) zeigten, dass Lerner systematisch schlecht ihre eigene Lernleistung beurteilen — sie verwechseln Vertrautheit mit Verständnis und flüssige Leistung mit dauerhaftem Wissen. KI-Tools verstärken diese Fehlkalibrierung dramatisch, weil sie flüssiges, korrektes Output produzieren, das SuS als Beweis ihrer Kompetenz missdeuten könnten.

## Evidenzbasis

Winne & Hadwin (1998) entwickelten das umfassendste Modell des selbstregulierten Lernens (SRL), das metakognitive Überwachung ins Zentrum stellt. Ihr Modell beschreibt einen Zyklus: SuS setzen Ziele, wenden Strategien an, überwachen ob die Strategien funktionieren, und passen an. Effektives Lernen hängt kritisch von der ÜBERWACHUNGS-Phase ab. Wenn die Überwachung ungenau ist (der/die SuS denkt, sie/er versteht, tut aber nicht), bricht der ganze Selbstregulations-Zyklus zusammen. Thiede et al. (2003) zeigten, dass Metakomprehension-Genauigkeit typischerweise sehr niedrig ist (~r = 0.27). Aber bestimmte Aktivitäten verbessern die Genauigkeit dramatisch: verzögerte Zusammenfassungen, Schlüsselbegriff-Generierung, und jede Aufgabe, die Retrieval statt Recognition erfordert. Der Schlüsselprinzip: Metakognitive Genauigkeit verbessert sich, wenn die Überwachungsaufgabe RETRIEVAL erfordert. Dunning et al. (2003) dokumentierten den Dunning-Kruger-Effekt: Die INKOMPETENTESTEN Individuen sind ÜBERCONFIDENT, weil ihnen das Wissen fehlt, um ihre Inkompetenz zu erkennen. In KI-Kontexten könnte dieser Effekt verstärkt werden. Bjork et al. (2013) identifizierten mehrere „Kompetentz-Illusionen": Vertrautheit (etwas Bekanntes fühlt sich wie Verständnis an), Fluency (leicht zu verarbeitendes Material fühlt sich well-learned an), und Performance (gut jetzt fühlt sich wie permanentes Lernen an). KI kann alle drei gleichzeitig triggern. Kazemitabaar et al. (2023) untersuchten AI Code Generators und fanden, dass während KI-Nutzer schneller und fehlerfrei Tasks erledigen, sie schwächeres Verständnis auf nachfolgenden Tasks ohne KI zeigen. Ein direkter empirischer Beweis des metakognitiven Risikos: KI erzeugte die ILLUSION des Lernens ohne die REALITÄT.

## Input-Schema

Die LP muss bereitstellen:
- **KI-Lernkontext:** Wie SuS KI nutzen. *z.B. „8. Klasse SuS nutzen ChatGPT um Deutsch-Aufsätze zu schreiben. Sie geben die Aufgabe ein, bekommen einen gut strukturierten Text zurück, dann bearbeiten und personalisieren sie diesen."*
- **Metakognitive Risiko:** Die spezifische Besorgnis. *z.B. „SuS denken sie ‚verstehen' den Inhalt weil der Text gut aussieht, aber wenn ich im Unterricht diskutiere ohne KI-Zugang, können sie nicht artikulieren, was der Text sagt."*

Optional:
- **SuS-Niveau:** Jahrgangsstufe und Leistungsniveau
- **Fachbereich:** Das Fach
- **KI-Tool:** Welches spezifische Tool
- **Assessment-Kontext:** Wie Lernertrag bewertet wird

## Prompt

```
Du bist Experte in Metakognition und selbstreguliertem Lernen mit tiefem Verständnis von Winne & Hadwin (1998), Thiede et al. (2003), Dunning et al. (2003), Bjork et al. (2013) und KI-Forschung (Kazemitabaar et al., 2023). Du verstehst, dass KI-Tools ein spezifisches Risiko für metakognitive Überwachung darstellen: sie produzieren flüssiges, korrektes Output, das SuS als Beweis ihres Verständnisses missdeuten.

KRITISCHE PRINZIPIEN:
- **Das Kern-Problem ist KALIBRIERUNG.** Metakognitive Überwachung funktioniert, wenn Vertrauen der Kompetenz entspricht. KI verzerrt Kalibrierung, indem sie Vertrauen erhöht (die Arbeit sieht toll aus) ohne notwendigerweise Kompetenz zu erhöhen.
- **Fluency ≠ Verständnis.** Material das leicht zu verarbeiten ist, fühlt sich gut gelernt an. Aber einfach zu verarbeitendes Material führt NICHT zu tiefem Lernen. Schwierigere Material (disfluent Fonts, herausfordernde Sprache) führt zu BESSEREM Lernen.
- **Die Lösung ist nicht KI-Banning.** Es ist, den Lernprozess so neu zu gestalten, dass SuS IHREN EIGENEN WISSENS-STATUS ERLEBEN.
- **Retrieval-basierte Überwachung ist der Standard.** Nach KI-Nutzung sollten SuS: die KI schliessen, die Aufgabe aus dem Gedächtnis versuchen, und vergleichen. Dies offenbart die Lücke.

Deine Aufgabe ist es, metakognitive Risiken zu analysieren und Interventionen zu gestalten für:

**KI-Lernkontext:** {{ki_lernkontext}}
**Metakognitive Risiko:** {{metakognitive_risiko}}

Optionale Kontexte:
**SuS-Niveau:** {{sus_niveau}}
**Fachbereich:** {{fachbereich}}
**KI-Tool:** {{ki_tool}}
**Assessment-Kontext:** {{assessment_kontext}}

Gib deine Ausgabe in diesem Format zurück:

## Metakognitive Überwachungs-Analyse: [Kontext-Beschreibung]

**Kontext:** [Wie SuS KI nutzen]
**Kern-Risiko:** [Die spezifische metakognitive Verzerrung — ein Satz]
**Schwere:** [Wie wahrscheinlich und wie schädlich — hoch/mittel/niedrig]

### Metakognitive Diagnose

[Detaillierte Analyse wie KI-Nutzung metakognitive Überwachung verzerrt. Nenne spezifische Kompetentz-Illusionen. Erkläre den Mechanismus.]

### Monitoring-Interventionen

[Spezifische Strategien zur Verbesserung metakognitiver Genauigkeit. Für jede:]

**Intervention [N]: [Name]**
- **Was:** [Was der/die SuS macht]
- **Wann:** [Zu welchem Punkt im Lernprozess]
- **Warum es funktioniert:** [Das metakognitive Prinzip]
- **Beispiel:** [Ein konkretes Beispiel in diesem Kontext]

### KI-Nutzungsrichtlinien

[Wann KI nutzen und wann nicht — spezifische, praktische Richtlinien]

### Assessment-Ausrichtung

[Wie Assessment gestaltet wird, sodass es SuS-Wissen misst, nicht KI-Leistung]

### Rotflag-Signale

[Observable Zeichen dass metakognitive Verzerrung stattfindet — was die LP beobachten sollte]

**Selbstcheck:** (a) Diagnose identifiziert spezifischen metakognitiven Mechanismus, (b) Interventionen zielen auf Kalibrierung, nicht nur Vertrauen, (c) Retrieval-basierte Überwachung ist einbezogen, (d) KI wird nicht gebannt aber strategisch managed, (e) Assessment ist metakognitiv ausgerichtet.
```

## Beispielausgabe

**Szenario:** *KI-Lernkontext: „8. Klasse Deutsch: SuS nutzen Claude um Aufsätze zu schreiben. Sie geben eine Aufgabe ein, erhalten einen gut strukturierten Aufsatz mit relevanten Beispielen und Analyse, dann editieren und personalisieren sie den Output. Die meisten ändern Wording und fügen ein paar eigene Punkte ein, aber die Kernargument und Struktur sind KI-generiert." / Metakognitive Risiko: „SuS denken sie ‚verstehen' die literarische Analyse weil der Aufsatz gut aussieht. Aber wenn ich im Unterricht ohne KI diskutiere, können sie das Argument nicht artikulieren. Sie sind überrascht von dieser Diskrepanz."*

---

## Metakognitive Überwachungs-Analyse: KI-gestütztes Schreiben in Deutsch-Klasse

**Kontext:** SuS nutzen Claude/ChatGPT um Aufsätze zu generieren, dann editieren und personalisieren diese
**Kern-Risiko:** SuS verwechseln ihre Fähigkeit, gute literarische Analyse zu ERKENNEN (beim KI-Text lesen) mit ihrer Fähigkeit, diese zu PRODUZIEREN (aus eigenem Wissen)
**Schwere:** Hoch — die Lücke zwischen KI-gestützter und ungestützter Prüfungs-Leistung könnte gross sein

### Metakognitive Diagnose

Drei Kompetentz-Illusionen operieren gleichzeitig:

**1. Recognition-Production-Confusion (am schädlichsten):** Wenn der/die SuS den KI-Aufsatz liest, folgt er/sie der Argumentation. Es macht Sinn. Aber FOLGEN einer Argumentation und KONSTRUIEREN einer Argumentation sind völlig unterschiedliche kognitive Tasks. Das Lesen aktiviert Recognition (ich verstehe das wenn ich es sehe) aber nicht Production (ich kann das selbst generieren). Der/Die SuS' metakognitive Überwachung ist auf Recognition kalibriert, nicht auf Production — und die Prüfung testet Production.

**2. Fluency-Illusion:** Claude/ChatGPT produziert poliertes, gut strukturiertes Prosa. Wenn SuS diesen Output lesen und editieren, erlebten sie Processing Fluency — es fühlt sich leicht zu verstehen an. Aber leichte Verarbeitung zeigt nicht tiefes Lernen an.

**3. Effort-Fehl-Attribution:** SuS verbringen Zeit editierend — Wörter ändern, Punkte hinzufügen, Paragraphen reorganisieren. Das fühlt sich wie kognitive Arbeit an. Aber Editing von KI-Output ist fundamental verschieden von Konstruktion deiner eigenen Analyse.

**Der Dunning-Kruger Amplifier:** Die schwächsten SuS profitieren am meisten von der KI (die Lücke zwischen ihrer Fähigkeit und der KI's ist am grössten) und können die Lücke am WENIGSTEN erkennen.

### Monitoring-Interventionen

**Intervention 1: Der „Laptop-Schliess-Test"**
- **Was:** Nach KI-Aufsatz-Generierung: Laptop schliessen, leeres Dokument öffnen, den Kern-Argument aus dem Gedächtnis in 3-4 Sätzen schreiben. Dann mit KI-Version vergleichen.
- **Wann:** WÄHREND des Schreib-Prozesses — nach KI-Nutzung aber vor endgültigem Entwurf
- **Warum es funktioniert:** Dies ist Retrieval-basierte Überwachung. Schreiben aus dem Gedächtnis offenbart den TATSÄCHLICHEN Wissens-Status, entfernt die Recognition-Illusion. Der Vergleich macht die Lücke sichtbar.
- **Beispiel:** SuS liest KI-Aufsatz. Schliesst Laptop. Schreibt: „Der Protagonist beginnt schwach und wird mächtig durch Mord, verliert dann Macht durch Schuld." Vergleicht mit KI-Version, die spezifische Zitate, Language-Analyse und historische Verbindungen enthält. Die Lücke ist jetzt sichtbar.

**Intervention 2: Zitat-Abruf VOR KI-Nutzung**
- **Was:** Bevor der/die SuS die KI konsultiert, schreiben sie alle relevanten Zitate auf die sie erinnern können, mit kurzen Notizen. DANN die KI konsultieren und vergleichen.
- **Wann:** VOR KI-Nutzung — um eine Baseline des SuS-Wissens zu etablieren
- **Warum es funktioniert:** Dies erzeugt ein „vorher" Bild. Wenn die KI 8 genau gewählte Zitate enthält und der/die SuS nur 2 erinnerte, ist das metakognitive Signal klar.
- **Beispiel:** SuS schreibt auf: „'Fair is foul' — Hexen zeigen dass Dinge nicht sind was sie scheinen." Dann liest KI-Essay mit 6 zusätzlichen Zitaten. SuS hat jetzt konkrete Evidenz was er/sie weiss und nicht weiss.

**Intervention 3: Explain-It-Back Protokoll**
- **Was:** Nach KI-Aufsatz editieren, muss der/die SuS die Argumentation zu einem Partner OHNE aufs Papier zu schauen erklären. Der Partner stellt Follow-up Fragen.
- **Wann:** NACH KI-Nutzung — um zu testen ob Verständnis ohne den Text überlebt
- **Warum es funktioniert:** Verbale Erklärung erfordert Production, nicht Recognition. Der/Die SuS kann sich nicht hinter KI-Prosa verstecken. Lücken werden offensichtlich.
- **Beispiel:** SuS erklärt: „Der Essay argumentiert dass Macht den Protagonisten korrumpiert." Partner: „Wie ZEIGT der Autor das durch Language?" SuS pausiert — sie/er erkannte das Language-Analysis beim Lesen, kann es aber nicht reproduzieren.

**Intervention 4: Predikion-Outcome Kalibrierung**
- **Was:** Vor der Prüfung, der/die SuS predikt ihre/seine Note auf einem Practice-Essay ohne KI. Nach dem Marking, vergleicht mit der tatsächlichen Note.
- **Wann:** In den Wochen vor der Prüfung — als Kalibrierungs-Übung
- **Warum es funktioniert:** Direkt misst metakognitive Genauigkeit. Wenn ein/e SuS „B" predickt und „D" bekommt, ist die Fehl-Kalibrierung offensichtlich.
- **Beispiel:** SuS hat KI-gestützte Essays die ganze Zeit „A" bekommen. Sie predikt ein „B" auf dem ungestützten Practice-Essay. Sie bekommt „D". Die 2-Noten-Lücke ist das metakognitive Wake-up Call.

### KI-Nutzungsrichtlinien

**KI ist hilfreich für:**
- Verschiedene analytische Winkel NACHDEM der/die SuS eine eigene Antwort entwickelt hat
- Zitate identifizieren die der/die SuS nicht betrachtete hatte (aber muss diese dann unabhängig lernen)
- Feedback auf EINEN SELBST GESCHRIEBENEN Entwurf
- Essay-Struktur modellieren (studieren WIE die KI organisiert, nicht WAS sie argumentiert)

**KI ist schädlich wenn:**
- Der/Die SuS KI VOR eigenen Gedanken konsultiert
- KI-Output als Startpunkt statt als Comparison
- Der/Die SuS editiert KI-Text statt von Grund auf zu schreiben
- Der/Die SuS nutzt KI als Substitute für genaues Textlesen

**Empfohlener Workflow:**
1. Text genau lesen. Notizen machen. Zitate auswählen.
2. Essay-Argument SELBST planen (auch wenn rau)
3. ERSTEN ENTWURF SELBST schreiben (auch wenn fehler)
4. DANN KI konsultieren: „Hier mein Argument. Was habe ich missed? Wo ist meine Analyse schwach?"
5. DEINEN Entwurf revidieren nutzen KI-Feedback — aber dein Text bleibt BASIS

### Assessment-Ausrichtung

**Die Bewertung muss testen was der/die SuS WEISS, nicht was KI-SuS System produziert:**

1. **Geschlossene-Buch zeitgesteuerte Essays** sind bereits gut ausgerichtet — der/die SuS muss aus Gedächtnis produzieren. Stelle sicher dass SuS regelmässig in diesem Format trainiert hat, nicht nur KI-gestützte Hausaufgaben.

2. **Klassen-Diskussionen** sind exzellente metakognitive Tests — verbale Analyse in Echtzeit kann nicht KI-assisted sein. Nutze diese als formative Beurteilungen die ganze Trimester.

3. **Zitat-Tests** (10 relevante Zitate aus Gedächtnis für dieses Thema) offenbaren Textkenntnis getrennt von analytischer Fähigkeit.

4. **„Laut-Denken" Analyse** — gib dem/der SuS einen Passus den er/sie nicht gesehen hat und frage ihn/sie live zu analysieren, die Gedanken aussprechend.

### Rotflag-Signale

Beobachte diese Zeichen dass metakognitive Verzerrung auftritt:

- **Hausaufgaben-Prüfungs-Lücke:** SuS produzieren exzellente KI-gestützte Essays zuhause aber significantly schlechter in zeitgesteuerten, ungestützten Bedingungen.
- **Oberflächen-Vertrauen, Tiefenangst:** SuS sagen „Ich verstehe" beim KI-Essay lesen, werden aber nervös wenn gefragt ohne Notizen zu diskutieren.
- **Zitat-Armut:** Im Unterricht können SuS Argumente artikulieren aber sie nicht mit spezifischen Zitaten unterstützen. Die KI lieferte die Zitate; der/die SuS lernte sie nicht.
- **Generische Analyse:** SuS schreiben ohne KI ist vage („Der Autor nutzt mächtige Sprache") vs. KI-gestützt (spezifisch und detailliert). Die Spezifität kam von der KI.

---

## Bekannte Limitationen

1. **Die Evidenz auf KI-spezifische metakognitive Effekte ist noch emergent.** Kazemitabaar et al. (2023) ist ein von wenigen Studien. Die breitere metakognitive Forschung bietet starke theoretische Begründung, aber spezifische LLM-Anwendung basiert auf Extrapolation.

2. **Monitoring-Interventionen fügen kognitive und Zeit-Kosten hinzu.** Der „Laptop-Schliess-Test" und Explain-It-Back benötigen zusätzliche Zeit. Unter Zeitdruck können diese Übungen sich belastend anfühlen. LP müssen metakognitive Genauigkeit gegen praktische Machbarkeit balancieren.

3. **Individuelle Unterschiede in metakognitiver Fähigkeit sind gross.** Einige SuS sind natürlich gut beim Selbst-Monitoring; andere nicht. Dunning-Kruger sagt dass die SuS die MEISTEN Überwachung brauchen LEAST wahrscheinlich das zu erkennen sind. Interventionen müssen STRUKTURELL (für alle SuS in den Workflow eingebaut) nicht BERATEND sein.

4. **Die Beziehung zwischen KI-Nutzung und Metakognition könnte nuancierter sein als „KI schadet Metakognition."** Einige KI-Nutzungen (z.B. KI Praxis-Fragen generieren, dann ohne KI versuchen) könnten metakognitive Genauigkeit VERBESSERN durch Retrieval-Chancen erzeugen. Das Risiko ist kontext-abhängig, nicht absolut.
