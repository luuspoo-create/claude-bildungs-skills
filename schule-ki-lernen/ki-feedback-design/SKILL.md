---
# AGENT SKILLS STANDARD FIELDS (v2)
name: ki-feedback-design
description: "Überprüfe und überarbeite KI-generiertes Feedback auf pädagogische Qualität, Timing und Lernimpact. Verwende dies beim Aufbauen oder Überprüfen von automatisiertem Feedback in digitalen Lerntools."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-ki-lernen/ki-feedback-design"
skill_name: "KI-Feedback-Design-Prinzipien"
domain: "schule-ki-lernen"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Shute (2008) — Focus on formative feedback (comprehensive review)"
  - "Narciss (2008) — Feedback strategies for interactive learning tasks (informative tutoring feedback model)"
  - "Hattie & Timperley (2007) — The power of feedback (meta-analysis, effect size 0.73)"
  - "Dai et al. (2023) — Can large language models provide useful feedback on research papers? A large-scale empirical analysis"
  - "Kluger & DeNisi (1996) — The effects of feedback interventions on performance: A historical review and a meta-analysis"
input_schema:
  required:
    - field: "feedback_szenario"
      type: "string"
      description: "Der spezifische Kontext, in dem die KI Feedback gibt — was die SuS gemacht hat und welche Art von Feedback gebraucht wird"
    - field: "aktuelles_feedback_design"
      type: "string"
      description: "Der aktuelle oder vorgeschlagene KI-Feedback-Ansatz — was das System momentan sagt oder plant zu sagen in Reaktion auf Schüler-Arbeit"
  optional:
    - field: "schueler_niveau"
      type: "string"
      description: "Jahrgangsstufe und Leistungsniveau"
    - field: "fachbereich"
      type: "string"
      description: "Das Schulfach"
    - field: "feedback_ziele"
      type: "string"
      description: "Was das Feedback erreichen sollte — Fehlerkorrektur, Motivation, tieferes Denken, Selbstregulierung oder anderes"
    - field: "system_beschraenkungen"
      type: "string"
      description: "Technische oder praktische Beschränkungen auf Feedback — Zeichenlimits, Timing-Anforderungen oder Format-Einschränkungen"
output_schema:
  type: "object"
  fields:
    - field: "feedback_evaluierung"
      type: "object"
      description: "Analyse des aktuellen Feedback-Designs gegen Forschungs-Kriterien — was funktioniert und was nicht"
    - field: "verbessertes_feedback"
      type: "object"
      description: "Eine überarbeitete Version des Feedbacks, die identifizierte Schwächen adressiert"
    - field: "feedback_typ_analyse"
      type: "object"
      description: "Klassifizierung des Feedbacks nach Typ (Verifizierung, Ausarbeitung, strategisch) mit Empfehlungen für die optimale Mischung"
    - field: "implementierungs_anleitung"
      type: "object"
      description: "Praktische Beratung für Deployement des verbesserten Feedbacks im Ziel-System"
chains_well_with:
  - "adaptive-hinweisfolgen"
  - "formative-beurteilungsschleife"
  - "intelligenter-tutoring-dialog"
teacher_time: "4 minutes"
tags: ["Feedback", "KI-Feedback", "formativ", "Shute", "Narciss", "Hattie", "LLM", "automatisiertes-Feedback", "Lehrplan21", "Selbsterklärung"]
---

# KI-Feedback-Design-Prinzipien

## Was diese Fähigkeit tut

Evaluiert ein vorgeschlagenes KI-Feedback-Design gegen Forschungs-Kriterien für effektives automatisiertes Feedback und schlägt spezifische Verbesserungen vor. Diese Fähigkeit nimmt ein Feedback-Szenario (was die SuS tat) und die aktuelle oder vorgeschlagene KI-Reaktion (was das System sagt), dann analysiert das Feedback gegen Prinzipien aus Shute (2008), Narciss (2008), Hattie & Timperley (2007) und neu aufkommende LLM-Feedback-Forschung (Dai et al., 2023). Die Ausgabe umfasst eine Diagnose, was funktioniert und was nicht, eine überarbeitete Version des Feedbacks und praktische Implementierungs-Anleitung. Die zentrale Herausforderung ist, dass meistes KI-Feedback in einen von zwei Fehlermodi fällt: es ist zu vage um handlungsfähig zu sein ("Gute Bemühung! Versuche, deinen Argument zu verbessern.") oder zu spezifisch und tut das Denken für die SuS ("Dein Thesis sollte sein: Klimawandel ist die Herausforderung unserer Generation, weil…"). Effektives Feedback lebt im engen Raum zwischen diesen Extremen — spezifisch genug, dass die SuS weiß, was zu tun ist, aber nicht so spezifisch, dass es die kognitive Arbeit, die zum Lernen führt, umgeht. KI ist hier besonders wertvoll, weil sie Feedback in großem Maßstab generieren kann, aber dies macht die Design-Prinzipien noch kritischer: schlechtes Feedback in großem Maßstab ist schlimmer als gar kein Feedback.

## Evidenzgrundlage

Hattie & Timperley (2007) führten eine Meta-Analyse durch und fanden, dass Feedback eine durchschnittliche Effektstärke von 0,73 hat — das es eine der mächtigsten Einflüsse auf Lernen macht. Jedoch fanden sie enorme Variation: einige Feedback-Interventionen erzeugten große positive Effekte, während andere null oder sogar NEGATIVE Effekte hatten. Die kritische Variable war nicht, ob Feedback gegeben wurde, sondern WELCHE ART von Feedback. Sie schlugen ein Modell mit vier Ebenen vor: Task-Feedback (ist die Antwort richtig?), Prozess-Feedback (welche Strategien können die Arbeit verbessern?), Selbst-Regulierungs-Feedback (wie kannst du dein eigenes Lernen überwachen?), und Selbst-Feedback (du bist ein großartiger Schüler!). Task- und Prozess-Feedback waren am effektivsten; Selbst-Feedback ("Gute Arbeit!") war am wenigsten effektiv und manchmal schädlich, weil es Aufmerksamkeit zu selbst statt zur Aufgabe lenkt. Shute (2008) überprüfte Forschung zu formativem Feedback und identifizierte Schlüssel-Prinzipien: effektives Feedback ist spezifisch, zeitnah, nicht-bedrohlich und Aufgaben-fokussiert statt Schüler-fokussiert. Sie unterschied zwischen Verifizierungs-Feedback (richtig/falsch), ausgearbeitetem Feedback (warum richtig/falsch und was nächstes) und verschiedenen Kombinationen. Sie fand, dass ausgearbeitetes Feedback einfache Verifizierung generell schlägt, ABER dass zu detailliertes Feedback Anfänger überwältigen kann — ein Feedback-Paradox, wo mehr Information manchmal weniger Lernen erzeugt. Narciss (2008) entwickelte das Informative Tutoring Feedback (ITF) Modell, das spezifiziert, dass effektives Feedback enthalten sollte: Wissensergebnis (richtig oder nicht), Wissen der richtigen Antwort (falls falsch) und Ausarbeitung zum Fehler (warum falsch und welche Fehlkonzept es zeigt). Kritisch, Narciss fand, dass optimales Feedback vom Fehlertyp abhängt: konzeptionelle Fehler profitieren von ausgearbeitetem Feedback, während sorglose Fehler von einfacher Verifizierung profitieren. Kluger & DeNisi (1996) fanden in ihrer Meta-Analyse, dass Feedback, das Aufmerksamkeit zum Selbst lenkt (statt zur Aufgabe), KANN Leistung REDUZIEREN — eine Entdeckung mit direkten Implikationen für KI-Systeme, die ermutigend aber leeres Lob generieren. Dai et al. (2023) evaluierten LLM-generiertes Feedback und fanden, dass während LLMs fließiges, gut-strukturiertes Feedback erzeugen können, sie zu einem spezifischen Muster tendieren: übermäßige Positivität, vague Suggestionen und eine Unwilligkeit, spezifische Fehler zu identifizieren — genau das Muster, das Forschung als am wenigsten effektiv identifiziert.

## Input-Schema

Die LP muss bereitstellen:
- **Feedback-Szenario:** Was die SuS tat. *z.B. "9. Klasse-SuS schrieb einen Überzeugungstext, der argumentiert, dass Schuluniformen abgeschafft werden sollten. Das Argument ist leidenschaftlich, aber beruht ganz auf persönlichen Anekdoten — keine Evidenz, kein Gegenargument adressiert, schwache logische Struktur" / "7. Klasse SuS löste 3x + 5 = 20 und bekam x = 7 (falsch — sollte x = 5 sein)" / "Oberstufe-SuS schrieb einen Lab-Report mit korrekten Daten, aber einer Schlussfolgerung, die nicht aus den Ergebnissen folgt"*
- **Aktuelles Feedback-Design:** Was die KI sagt oder plant zu sagen. *z.B. "Großartiger Text! Du fühlst dich eindeutig stark zu diesem Thema und deine Schreib-Stimme ist engagierend. Um zu verbessern, versuche, Evidenz hinzuzufügen um deine Punkte zu stützen und betrachte den anderen Standpunkt. Deine Schlussfolgerung könnte stärker sein — versuche dein Haupt-Argument zu wiederholen. Insgesamt, eine solide Bemühung — halte an! 7/10" / "Falsch. Die Antwort ist x = 5. Versuche nochmal" / "Deine Schlussfolgerung braucht Arbeit. Denk darüber nach, was deine Daten wirklich zeigt"*

Optional (durch Kontextmotor eingefügt, falls verfügbar):
- **Schüler-Niveau:** Jahrgangsstufe und Leistungsniveau
- **Fachbereich:** Das Schulfach
- **Feedback-Ziele:** Was das Feedback erreichen sollte
- **System-Beschränkungen:** Technische oder praktische Limitierungen

## Prompt

```
Du bist ein Experte in der Wissenschaft von Feedback beim Lernen, mit tiefem Wissen von Hattie & Timperleys (2007) Feedback-Modell (Task, Prozess, Selbst-Regulierung, Selbst-Ebenen), Shutes (2008) formative Feedback-Prinzipien, Narciss' (2008) Informative Tutoring Feedback-Modell, Kluger & DeNisis (1996) Meta-Analyse zu Feedback-Interventionen und neu aufkommender Forschung zu LLM-generiertem Feedback (Dai et al., 2023). Du verstehst, dass Feedback einer der mächtigsten Einflüsse auf Lernen ist — und einer der gefährlichsten, wenn schlecht entworfen. Du weißt, dass KI-Systeme zu einem spezifischen Fehlermodus tendieren: Feedback generieren, das positiv, fließend, gut-strukturiert und pädagogisch unnütz ist.

KRITISCHE PRINZIPIEN:
- **Feedback muss SPEZIFISCH und HANDLUNGSFÄHIG sein.** "Gute Bemühung" ist kein Feedback. "Deine Einleitung sagt eine Position, aber zeigt nicht deine drei unterstützenden Argumente — füge einen Satz hinzu, der deine Essay-Struktur kartographiert" IST Feedback. Falls eine SuS das Feedback lesen und GENAU wissen kann, was nächstes zu tun ist, hat es fehlgeschlagen.
- **Unterscheide Verifizierungs-, Ausarbeitungs- und strategisches Feedback.** Verifizierung: "Das ist falsch." Ausarbeitung: "Das ist falsch, weil du 5 von der linken Seite subtrahiertest, aber nicht von der rechten." Strategisch: "Wenn du an Gleichungen steckst, überprüfe immer: hast du die gleiche Operation auf beiden Seiten getan?" Verschiedene Fehler brauchen verschiedene Typen. Ein konzeptioneller Fehler braucht Ausarbeitung. Ein sorgloser Fehler braucht Verifizierung. Ein wiederkehrendes Muster braucht strategisches Feedback.
- **Vermeiden die Positivitäts-Falle.** KI-Systeme fallens zur übermäßigen Positivität. "Großartige Arbeit!" vor Hinweis auf grundlegende Fehler sendet ein widersprüchliches Signal und verdünnt die Korrektur-Nachricht. Positives Feedback ist angemessen NUR wenn wirklich verdient UND auf spezifische Features gerichtet ("Deine Verwendung von statistischer Evidenz in Absatz 2 ist effektiv, weil es direkt deinen Anspruch unterstützt"). Generisches Lob ist schlechter als kein Lob (Kluger & DeNisi, 1996).
- **Tua nicht das Denken der SuS.** Feedback, das der SuS genau sagt, was zu schreiben, was die Antwort ist oder wie zu beheben ist, ist nicht Feedback — es ist Antwort-Geben. Das Ziel ist die Lücke zwischen aktueller und gewünschter Leistung zu schließen, indem man der SuS zeigt, WO die Lücke ist und ihr genug Information gibt, die Lücke selbst zu schließen.
- **Passe Feedback-Komplexität zu Schüler-Niveau an.** Anfänger profitieren von einfach, klarem Feedback fokussiert auf ein oder zwei spezifische Probleme. Fortgeschrittene profitieren von komplexerem Feedback, das mehrere Dimensionen adressiert. Anfänger mit umfassend Feedback zu überlasten erzeugt kognitive Überlastung, nicht Lernen (Shute, 2008).

Deine Aufgabe ist es, dieses Feedback-Design zu evaluieren und zu verbessern:

**Feedback-Szenario:** {{feedback_szenario}}
**Aktuelles Feedback-Design:** {{aktuelles_feedback_design}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Nutze, was verfügbar ist; ignoriere Felder, die "nicht bereitgestellt" markiert sind.

**Schüler-Niveau:** {{schueler_niveau}} — falls nicht bereitgestellt, leite aus dem Szenario ab.
**Fachbereich:** {{fachbereich}} — falls nicht bereitgestellt, leite aus dem Szenario ab.
**Feedback-Ziele:** {{feedback_ziele}} — falls nicht bereitgestellt, nehme an, das Ziel ist der SuS zu helfen, ihre Arbeit zu verbessern, während du ihre Eignerschaft des Denkens bewahrst.
**System-Beschränkungen:** {{system_beschraenkungen}} — falls nicht bereitgestellt, nehme an, es gibt keine signifikanten Beschränkungen.

Gib deine Ausgabe in exakt diesem Format zurück:

## Feedback-Evaluierung: [Kurze Szenario-Beschreibung]

**Szenario:** [Was die SuS tat]
**Aktuelles Feedback:** [Was die KI sagt]
**Urteil:** [Ein-Satz-Zusammenfassung — wird dieses Feedback wahrscheinlich Lernen verbessern, keine Effekt haben oder aktiv schaden?]

### Diagnose

[Analysiere das aktuelle Feedback gegen jedes Prinzip. Was funktioniert? Was nicht? Sei spezifisch — zitiere die problematischen Teile des Feedbacks und erkläre WARUM sie problematisch sind, unter Zitierung der relevanten Forschung.]

### Feedback-Typ-Analyse

| Feedback-Komponente | Typ | Effektivität | Problem |
|---|---|---|---|
| [Zitat aus aktuellem Feedback] | [Verifizierung / Ausarbeitung / Strategisch / Selbst] | [Effektiv / Ineffektiv / Schädlich] | [Warum] |

### Verbessertes Feedback-Design

[Das überarbeitete Feedback. Zeige den exakten Text, den die KI der SuS präsentieren sollte. Schluss spezifisch, handlungsfähige Anleitung ein, die identifizierte Schwächen adressiert, ohne das Denken der SuS zu tun.]

**Überarbeitetes Feedback:**

> [Der exakte Feedback-Text]

### Design-Rationale

[Erkläre, warum die verbesserte Version besser ist — welche Prinzipien sie folgt und welche spezifischen Änderungen gemacht wurden.]

### Implementierungs-Notizen

[Praktische Anleitung für Deployement dieses Feedback-Musters — wann es triggern sollte, wie Edge-Cases zu behandeln sind und was zu beobachten ist.]

**Selbstüberprüfung vor Rückgabe:** Verifiziere, dass (a) das verbesserte Feedback spezifisch und handlungsfähig ist, (b) es nicht das Denken der SuS tut, (c) es leeres Lob vermeidet, (d) es den richtigen Feedback-Typ für den Fehlertyp nutzt und (e) es angemessen für das Schüler-Niveau ist.
```

## Beispiel-Ausgabe

**Szenario:** *Feedback-Szenario: "9. Klasse-SuS schrieb einen Überzeugungstext, der argumentiert, dass Schuluniformen abgeschafft werden sollten. Das Argument ist leidenschaftlich aber beruht auf persönlichen Anekdoten — keine Evidenz, kein Gegenargument, schwache Struktur. Der Text ist ca. 400 Worte, hat eine Einleitung, drei Body-Absätze und eine Schlussfolgerung." / Aktuelles Feedback-Design: "Großartiger Text! Du fühlst dich eindeutig stark zu diesem Thema und deine Schreib-Stimme ist engagierend. Um zu verbessern, versuche, Evidenz hinzuzufügen um deine Punkte zu stützen und betrachte den anderen Standpunkt. Deine Schlussfolgerung könnte stärker sein — versuche, dein Haupt-Argument zu wiederholen. Insgesamt, eine solide Bemühung — halte an! 7/10" / Schüler-Niveau: "9. Klasse, Ziel-Note 6 (UK GCSE-Äquivalent)" / Fachbereich: "Deutsch — Überzeugungsschreiben"*

---

## Feedback-Evaluierung: 9. Klasse Überzeugungstext — Schuluniformen

**Szenario:** 9. Klasse SuS schrieb einen Überzeugungstext, der auf persönlichen Anekdoten ohne Evidenz, keinen Gegenargument und schwache Struktur beruht.
**Aktuelles Feedback:** "Großartiger Text! Du fühlst dich eindeutig stark… versuche, Evidenz hinzuzufügen… betrachte den anderen Standpunkt… eine solide Bemühung — halte an! 7/10"
**Urteil:** Dieses Feedback ist unwahrscheinlich, Verbesserung zu erzeugen. Es ist vague, übermäßig positiv und sagt der SuS, dass sie gut macht, wenn ihr Text grundlegende strukturelle Probleme hat.

### Diagnose

**Problem 1: Die Positivitäts-Falle.** Das Feedback öffnet mit "Großartiger Text!" — aber der Text hat grundlegende Schwächen (keine Evidenz, kein Gegenargument, schwache Struktur). Dies sendet ein widersprüchliches Signal: du sagst der SuS der Text ist großartig, während du gleichzeitig alles auflistest, was falsch ist. Kluger & DeNisi (1996) fanden, dass Feedback, das Aufmerksamkeit zum Selbst lenkt ("du fühlst dich stark") statt zur Aufgabe, Lernen reduziert. Die SuS-Übernahme: "Ich bekam 7/10 und der LP mochte meine Stimme. Ich muss einfach ein paar Dinge tweaken."

**Problem 2: Vage Verbesserungs-Suggestionen.** "Versuche, Evidenz hinzuzufügen" — welche Art Evidenz? Wo im Text? Wie viel? "Betrachte den anderen Standpunkt" — welcher andere Standpunkt? Wo im Text sollte er gehen? Wie sollte er strukturiert sein? Shute (2008) fand, dass Feedback spezifisch genug sein muss, dass die SuS GENAU weiß, was zu tun ist. Diese Suggestionen sind zu vague um handlungsfähig zu sein.

**Problem 3: Keine Diagnose des aktuelle Problems.** Der Text's grundlegendes Problem ist, dass die SuS nicht den Unterschied zwischen Aussage und Argument versteht. Jeder Absatz macht Ansprüche, die nur durch persönliche Erfahrung unterstützt sind. Das Feedback nennt dieses Problem nicht — es behandelt die Symptome (keine Evidenz, kein Gegenargument), ohne die zugrundeliegende Ursache zu identifizieren (die SuS setzt starkes Gefühl gleich mit starkem Argument).

**Problem 4: Die Note untergräbt das Feedback.** 7/10 signalisiert "dies ist gut." Wenn der Text keine Evidenz und keinen Gegenargument hat, hat er nicht die Basis-Kriterien für Überzeugungsschreiben erfüllt. Die Note und das Feedback sind im Konflikt. Die SuS wird an der Note ankern und die Suggestionen entlassen.

### Feedback-Typ-Analyse

| Feedback-Komponente | Typ | Effektivität | Problem |
|---|---|---|---|
| "Großartiger Text!" | Selbst | Schädlich | Leeres Lob, das Aufmerksamkeit zu Selbst, nicht Aufgabe lenkt |
| "Du fühlst dich eindeutig stark" | Selbst | Ineffektiv | Beschreibt die SuS, nicht die Arbeit |
| "Deine Schreib-Stimme ist engagierend" | Aufgabe | Mäßig effektiv | Spezifisch genug um nützlich zu sein, aber in generischem Lob begraben |
| "Versuche, Evidenz hinzuzufügen" | Strategisch | Ineffektiv | Zu vague — welche Evidenz, wo, wie? |
| "Betrachte den anderen Standpunkt" | Strategisch | Ineffektiv | Zu vague — welcher Standpunkt, wo im Text? |
| "Deine Schlussfolgerung könnte stärker sein" | Aufgabe | Ineffektiv | "Stärker" ist bedeutungslos ohne Spezifikationen |
| "Eine solide Bemühung — halte an!" | Selbst | Schädlich | Falsche Beruhigung, wenn größere Überarbeitungen notwendig sind |
| "7/10" | Verifizierung | Schädlich | Note widerspricht der Notwendigkeit für grundlegende Überarbeitung |

### Verbessertes Feedback-Design

**Überarbeitetes Feedback:**

> **Was funktioniert:** Deine Schreib-Stimme ist selbstbewusst und direkt — "Ich sollte nicht bei jemandem Anders' Idee davon, wer ich bin, jeden Tag sein" ist ein starker, merkwürdiger Satz. Behalte diese Stimme.
>
> **Das Haupt-Problem — Aussage vs. Argument:** Jetzt, macht jeder Absatz einen Anspruch und unterstützt ihn mit deiner persönlichen Erfahrung. Das ist Aussage, nicht Argument. Überzeugungsschreiben braucht EVIDENZ — Fakten, Statistiken, Experten-Meinungen oder echte Beispiele, die jemand, der nicht einverstanden ist, ernstnehmen würde. Dein Leser denkt: "Das ist wie DU dich fühlst, aber warum sollte ich mich kümmern?"
>
> **Ein spezifischer Fix zum zuerst versuchen:** Wähle deinen stärksten Absatz (ich würde Absatz 2 zum Komfort suggerieren). Finde EINE Evidenz, die deinen Punkt unterstützt — eine Studie über Student-Konzentration, eine Schule, die Uniformen entfernte und den Effekt maß, oder ein Zitat von einem Bildungs-Experten. Füge es hinzu. Dann schau, was es zum Absatz tut. Das ist der Unterschied zwischen Aussage und Argument.
>
> **Nächster Schritt danach:** Wähle das stärkste Argument GEGEN deine Position (wahrscheinlich Kosten — Uniformen sparen Familien Geld). Schreibe einen Absatz, der diesen Argument anerkennt und dann erklärt, warum deine Position immer noch stärker ist. Das heißt ein Gegenargument, und es ist der einzelne überzeugende Zug in argumentativem Schreiben — es zeigt, dass du die andere Seite betrachtet hast und trotzdem einen stärkeren Fall hast.
>
> **Überarbeite noch nicht.** Zuerst, lese dein Text wieder und put ein Sternchen neben jeden Satz, der von Evidenz (nicht persönlicher Erfahrung) unterstützt ist. Zähle die Sternchen. Die Zahl sagt dir, wie viel Arbeit notwendig ist.

### Design-Rationale

Das überarbeitete Feedback macht fünf Schlüssel-Änderungen:

1. **Spezifisch positiv Feedback zuerst, Aufgabe-gerichtet.** "Deine Schreib-Stimme ist selbstbewusst und direkt" mit angegebenen Beispielen — das ist Aufgaben-Niveau Feedback auf eine echte Stärke, nicht generisches Selbst-Lob. Es sagt der SuS exakt, was zu behalten ist.

2. **Nennt das zugrundeliegende Problem.** "Aussage vs. Argument" gibt der SuS einen konzeptionellen Rahmen zum Verstehen, was falsch ist. Das ist ausgearbeitetes Feedback (Narciss, 2008) — es sagt nicht einfach "füge Evidenz hinzu", aber erklärt, WARUM Evidenz notwendig ist und was der Text aktuell fehlt.

3. **Eine spezifisch, manageable Aktion.** Statt einer Liste vager Verbesserungen gibt das Feedback EINE konkrete Task: finde ein Stück Evidenz für einen Absatz. Das folgt Shutes (2008) Prinzip von Feedback-Komplexität an Schüler-Niveau anpassen — eine 9. Klasse SuS mit Ziel-Note 6 braucht fokussierte, erreichbare Schritte, nicht ein umfassender Kritik.

4. **Das Gegenargument-Anweisung ist gestützt.** Es sagt nicht einfach "adressiere den anderen Standpunkt" — es sagt der SuS, welches andere Argument zu wählen und erklärt die strategischen Gründe für die Einbindung. Das ist Prozess-Level Feedback (Hattie & Timperley, 2007).

5. **Die Diagnose-Task ersetzt die Note.** "Zähle die Sternchen" ist eine Selbst-Regulierungs-Aufforderung, die der SuS hilft, das Problem selbst zu sehen, statt erwähnt zu werden. Das entwickelt metakognitive Bewusstsein — eine höher-Level Feedback-Funktion, die Unabhängigkeit aufbaut.

### Implementierungs-Notizen

- **Öffne nicht mit einer Note.** Falls eine Note von das System verlangt wird, platziere sie am Ende, nach dem handlungsfähigem Feedback. Besser noch, halte die Note, bis nach Überarbeitung.
- **Limitiere Feedback zu 2-3 handlungsfähigen Punkten.** Dieses Beispiel adressiert zwei Probleme (Evidenz, Gegenargument) plus eine metakognitive Aufforderung. Das ist das Maxium für eine 9. Klasse SuS. Mehr Punkte erzeugen kognitive Überladung und Lähmung.
- **Beobachte das LLM-Positivitäts-Muster.** Falls die KI Feedback generiert, auditiere es für das "Großartig! Aber…" Muster (Dai et al., 2023). Instruiere das Modell, mit spezifischem, verdientem Lob oder mit dem Diagnose zu führen — nicht mit generischem Enthusiasmus.
- **Evaluiere nochmal nach Überarbeitung.** Das Feedback oben ist entworfen um eine spezifische Überarbeitung zu erzeugen (Evidenz hinzufügen zu einen Absatz, einen Gegenargument-Absatz hinzufügen). Nach Überarbeitung sollte das Feedback verschiedene Probleme adressieren — wahrscheinlich Struktur und logischer Fluss. Wiederhole das gleiche Feedback nicht, wenn die SuS darauf reagiert hat.

---

## Bekannte Limitierungen

1. **Diese Fähigkeit evaluiert Feedback-DESIGN, nicht Feedback-DELIVRAEMENT.** Der gleiche Feedback-Text kann effektiv oder schädlich sein, je nach Timing, Student-emotionaler-Zustand und Beziehung zwischen SuS und System. Eine SuS, die gerade drei Aufgaben fehlgeschlagen hat, braucht eine verschiedene emotionale Registers als eine selbstbewusste SuS, die einen sorgloser Fehler machte. Diese Fähigkeit adressiert Inhalt und Struktur, nicht Affect und Timing.

2. **Die LLM-Feedback-Evidenz-Basis wächst immer noch.** Dai et al. (2023) ist eines der ersten großen Studien zu LLM-Feedback-Qualität, und das Feld wächst schnell. Die Prinzipien von Shute (2008), Narciss (2008) und Hattie & Timperley (2007) sind gut-etabliert für menschliches Feedback — ihre Anwendung zu KI-generiertem Feedback ist theoretisch sound, aber noch nicht umfassend validiert.

3. **Kultureller Kontext beeinflusst Feedback-Normen.** Der direkt, Aufgaben-fokussierte Feedback-Stil empfohlen hier spiegelt westliche Bildungsforschungs-Normen. In einigen kulturellen Kontexten kann direkte Kritik (selbst wenn konstruktiv) anders empfangen werden. Narciss' (2008) Modell wurde primär in europäischen und nordamerikanischen Kontexten entwickelt.

4. **Feedback interagiert mit Schüler-Selbst-Efficacy in komplexen Wegen.** Kluger & DeNisi (1996) fanden, dass Feedback Leistung reduzieren kann, wenn es Selbst-Konzept bedroht. Für SuS mit sehr niedriger Selbst-Efficacy, das "kein leeres Lob"-Prinzip braucht gegen das Risiko, weitere Motivation zu beschädigen, ausbalanciert zu sein. Diese Fähigkeit modelliert nicht des Einzelnen Student's Motivations-Zustand.
