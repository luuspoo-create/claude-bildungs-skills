---
# AGENT SKILLS STANDARD FIELDS (v2)
name: ki-kollaboratives-lernen
description: "Entwerfe KI-unterstützte Gruppenaufgaben, die Gruppeninteraktion strukturieren und Partizipationsprobleme adressieren. Verwende dies, wenn SuS Schwierigkeiten haben, effektiv in Gruppen zusammenzuarbeiten."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-ki-lernen/ki-kollaboratives-lernen"
skill_name: "KI-gestütztes kollaboratives Lernen - Designer"
domain: "schule-ki-lernen"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Roschelle & Teasley (1995) — The construction of shared knowledge in collaborative problem solving"
  - "Dillenbourg (1999) — What do you mean by collaborative learning? (CSCL framework)"
  - "Järvelä & Hadwin (2013) — New frontiers: regulating learning in CSCL (socially shared regulation of learning)"
  - "Slavin (1995) — Cooperative learning: theory, research, and practice (meta-analysis)"
  - "Kirschner et al. (2018) — From cognitive load theory to collaborative cognitive load theory"
input_schema:
  required:
    - field: "gruppen_aufgabe"
      type: "string"
      description: "Die spezifische Lern-Aufgabe, an der SuS zusammen arbeiten werden — was sie zusammen erstellen oder lösen müssen"
    - field: "kooperations_herausforderung"
      type: "string"
      description: "Das spezifische Zusammenarbeitsproblem, das adressiert werden soll — was schiefgeht, wenn SuS zusammen an dieser Aufgabe arbeiten"
  optional:
    - field: "schueler_niveau"
      type: "string"
      description: "Jahrgangsstufe und Leistungsniveau"
    - field: "fachbereich"
      type: "string"
      description: "Das Schulfach"
    - field: "gruppengroe"
      type: "string"
      description: "Wie viele SuS pro Gruppe"
    - field: "ki_moeglichkeiten"
      type: "string"
      description: "Welche KI-Tools verfügbar sind — Chatbot, kollaborativer Arbeitsraum, Echtzeit-Monitoring oder anderes"
    - field: "zeit_verfuegbar"
      type: "string"
      description: "Wie lange SuS für die kollaborative Aufgabe haben"
output_schema:
  type: "object"
  fields:
    - field: "kooperations_design"
      type: "object"
      description: "Die Struktur der kollaborativen Aufgabe — Rollen, Phasen und die spezifischen Punkte, wo KI erleichtert"
    - field: "ki_erleichterungs_zueuge"
      type: "array"
      description: "Die spezifischen Dinge, die die KI während der Zusammenarbeit tut — Aufforderungen, Monitoring, Scaffolding und Interventionen"
    - field: "regulierungs_scaffolds"
      type: "object"
      description: "Wie die KI sozial geteilte Regulierung unterstützt — Planung, Monitoring und Reflexion zum Gruppenprozess"
    - field: "gerechtigkeits_mechanismen"
      type: "object"
      description: "Wie das Design sicherstellt, dass alle Gruppenmitglieder bedeutungsvoll partizipieren — verhindert Trittbrettfahren und Dominanz"
chains_well_with:
  - "intelligenter-tutoring-dialog"
  - "ki-feedback-design"
  - "formative-beurteilungsschleife"
teacher_time: "5 minutes"
tags: ["Zusammenarbeit", "CSCL", "Dillenbourg", "Järvelä", "kooperatives-Lernen", "Slavin", "Gruppenarbeit", "KI-Erleichterung", "Regulierung", "Lehrplan21", "NT-Kompetenzen"]
---

# KI-gestütztes kollaboratives Lernen - Designer

## Was diese Fähigkeit tut

Entwirft eine Lern-Aufgabe mit spezifischen KI-Unterstützungspunkten — die Stellen, wo ein KI-System den Gruppenprozess unterstützt, ohne ihn zu ersetzen. Diese Fähigkeit adressiert die Grundherausforderung des kollaborativen Lernens: es KANN einer der mächtigsten Lernansätze sein (Slavins (1995) Meta-Analyse fand Effektstärken von 0,26-0,32 für gut strukturiertes kooperatives Lernen), aber es degeneriert häufig zu einer SuS, die alle Arbeit macht, während andere zuschauen, oder zu paralleler individueller Arbeit mit gemeinsamen Dokumenten. Dillenbourg (1999) etablierte, dass echte Zusammenarbeit gemeinsames Problemlösen mit gemeinsamen Verständnis erfordert, nicht nur Aufgabenteilung. Järvelä & Hadwin (2013) zeigten, dass effektive Zusammenarbeit sozial geteilte Regulierung von Lernen (SSRL) erfordert — die Fähigkeit der Gruppe, gemeinsam zu planen, zu überwachen und ihren Ansatz anzupassen. KI ist hier besonders wertvoll, weil sie kann, was LP nicht können: Mehrgruppen gleichzeitig beobachten, Zusammenbruch der Zusammenarbeit in Echtzeit erkennen und genau dann eingreifen, wenn nötig. Eine LP, die unter 8 Gruppen herumgeht, erwischt Probleme Minuten oder Stunden zu spät; eine KI, die Gruppeninteraktionen überwacht, kann in Echtzeit anstoßen. Die Ausgabe umfasst das vollständige Zusammenarbeitsdesign (Aufgabenstruktur, Rollen, Phasen), KI-Erleichterungszüge (wann und wie die KI eingreift), Regulierungs-Scaffolds (die Selbstregulierung der Gruppe unterstützend) und Gerechtigkeitsmechanismen (sichern, dass alle partizipieren).

## Evidenzgrundlage

Dillenbourg (1999) etablierte den grundlegenden Rahmen für computer-unterstützte kollaborative Lernens (CSCL) und unterschied zwischen Kooperation (Aufgabenteilung in Teilaufgaben, die Einzelne separat abschließen) und Zusammenarbeit (gemeinsames Konstruieren von gemeinsamem Verständnis eines Problems). Er argumentierte, dass echte Zusammenarbeit erfordert: (a) ein gemeinsames Ziel, (b) gegenseitige Beschäftigung mit Ideen des anderen, und (c) gemeinsames Wissenskonstrukt, das kein Einzelner allein produzieren könnte. Technologie kann Zusammenarbeit unterstützen durch Strukturierung von Interaktion, Sichtbarmachung von Denken und gemeinsame Repräsentationen — aber sie kann Zusammenarbeit auch untergraben, indem sie Aufgabenteilung zu leicht macht. Roschelle & Teasley (1995) definierten Zusammenarbeit als "eine koordinierte, synchrone Aktivität, die das Ergebnis eines fortgesetzten Versuchs ist, ein gemeinsames Konzept eines Problems zu konstruieren und zu bewahren." Sie zeigten, dass effektive Zusammenarbeit spezifische Konversationsmuster umfasst: Vorschläge, Ausarbeitungen, Herausforderungen und Reparaturen des gemeinsamen Verständnis. Wenn diese Muster zusammenbrechen, degeneriert Zusammenarbeit zu paralleler Arbeit. Järvelä & Hadwin (2013) entwickelten das Konzept der sozial geteilten Regulierung von Lernen (SSRL) — die Idee, dass effektive Gruppen nicht nur die kognitive Arbeit teilen, sondern auch die REGULIERUNGS-Arbeit: Planung, was zu tun ist, Überwachung von Fortschritt, Evaluation, ob der Ansatz funktioniert, und Anpassung, wenn nicht. Sie fanden, dass SSRL der stärkste Prädiktor für Erfolg von kooperativem Lernen ist und dass es durch Technologie gestützt werden kann — Aufforderungen, die die Gruppe bitten zu planen, Fortschritt zu überprüfen und zu reflektieren. Slavin (1995) führte einen umfassenden Review der kooperativen Lernforschung durch und fand konsistent positive Effekte (d = 0,26-0,32), wenn zwei Bedingungen erfüllt waren: (a) Gruppenziele (die Gruppe wird als Gruppe bewertet, nicht einzeln) und (b) individuelle Verantwortung (der Beitrag jedes Mitglieds ist sichtbar und bewertet). Ohne diese Bedingungen erzeugt kooperatives Lernen oft Trittbrettfahren und soziales Faulenzen.

## Input-Schema

Die LP muss bereitstellen:
- **Gruppen-Aufgabe:** Was SuS zusammen arbeiten werden. *z.B. "8. Klasse Naturwissenschaften: Entwerfe ein Experiment, um zu testen, ob Temperatur die Reaktionsgeschwindigkeit einer chemischen Reaktion beeinflusst. Jede Gruppe muss eine Methode, Risikobewertung, vorhergesagte Ergebnisse und Erklärung der zugrundeliegenden Chemie erstellen" / "7. Klasse Deutsch: Schreibe zusammen eine Zeitungstitelseite über die Ereignisse des Romeo und Julia, als würden sie heute geschehen" / "9. Klasse Berufswahl: Analysiert einen realen Fall von Marktversagen und erstellt ein Policy-Papier mit Empfehlungen für staatliche Intervention"*
- **Kooperations-Herausforderung:** Was schiefgeht, wenn SuS zusammen arbeiten. *z.B. "Eine SuS macht alle Schreib-Arbeiten, während die anderen zuschauen. Die 'Diskussions'-Phase dauert 30 Sekunden, bevor sie anfangen, die Aufgabe aufzuteilen" / "Gruppen folgen der lautesten SuS-Idee ohne Alternativen zu erwägen. Ruhigere SuS disengagieren sich" / "SuS teilen die Arbeit auf ('du machst die Methode, ich mache die Risikobewertung') und konstruieren nie gemeinsames Verständnis — das Endprodukt ist vier separate Teile zusammengeklebt"*

Optional (durch Kontextmotor eingefügt, falls verfügbar):
- **Schüler-Niveau:** Jahrgangsstufe und Leistungsniveau
- **Fachbereich:** Das Schulfach
- **Gruppengröße:** Wie viele SuS pro Gruppe
- **KI-Möglichkeiten:** Welche KI-Tools verfügbar sind
- **Zeit verfügbar:** Dauer der Gruppen-Aufgabe

## Prompt

```
Du bist ein Experte im Entwurf von kooperativem Lernen und KI-erleichtertem CSCL (computergestütztem kooperativem Lernen), mit tiefem Wissen von Dillenboargs (1999) Zusammenarbeitsrahmen, Roschelle & Teasley (1995) Forschung zum Konstruieren gemeinsamen Wissens, Järvelä & Hadwin (2013) sozial geteilter Regulierung von Lernen (SSRL), Slavins (1995) Meta-Analyse kooperativen Lernens und Kirschner et al. (2018) kooperativer kognitiver Belastungstheorie. Du verstehst, dass Zusammenarbeit einer der mächtigsten — und am häufigsten missbrauchten — Lernstrategien ist. Du weißt, dass der Unterschied zwischen produktiver Zusammenarbeit und zeitvergeudender Gruppenarbeit vollständig vom DESIGN abhängt, nicht von den SuS.

KRITISCHE PRINZIPIEN:
- **Zusammenarbeit erfordert eine Aufgabe, die wirklich zu komplex für eine Person ist.** Kirschner et al. (2018): falls eine SuS die Aufgabe allein kann, addiert Zusammenarbeit Transaktionskosten ohne kognitiven Benefit. Die Aufgabe muss mehrere Perspektiven, Fähigkeiten oder Wissenbasen erfordern, die kein Einzelner besitzt. Falls die Aufgabe einzeln gemacht werden könnte, mache sie nicht kollaborativ.
- **Strukturiere die Interaktion, nicht nur die Aufgabe.** Dillenbourg (1999): SuS eine Aufgabe geben und sagen "arbeitet zusammen" ist nicht kollaboratives Lernen-Design. Die Interaktion muss strukturiert sein: wer spricht wann, was sie in jeder Phase diskutieren, wie sie Entscheidungen treffen und wie sie aufeinander aufbauen. KI kann diese Struktur durchsetzen ohne dass die LP anwesend ist.
- **Individuelle Verantwortung verhindert Trittbrettfahren.** Slavin (1995): jedes Gruppenmitglied muss einen sichtbaren, bewertbaren Beitrag haben. Falls eine SuS passiv sitzen und trotzdem die Note bekommen kann, wird sie. Entwerfe Rollen, individuelle Deliverables oder Verantwortungsmechanismen, die jeden Beitrag sichtbar machen.
- **KI sollte erleichtern, nicht partizipieren.** Die KI-Rolle ist es, den GRUPPENPROZESS zu unterstützen — Planung anstoßen, unausgeglichene Partizipation flaggen, Regulierungsfragen stellen ("Wie läuft dein Ansatz? Musst du anpassen?"). Die KI sollte NICHT Ideen beitragen, Probleme für die Gruppe lösen oder Gruppenmitglied werden. Falls SuS mit der KI sprechen statt untereinander, ist das Design fehlgeschlagen.
- **Sozial geteilte Regulierung ist das höchste Ziel.** Järvelä & Hadwin (2013): die Gruppen, die am meisten lernen, sind die, die ihren Prozess gemeinsam regulieren — Planung, Überwachung und Anpassung. KI-Scaffolds für Regulierung (Planungsaufforderungen, Fortschritts-Checks, Reflexions-Aufforderungen) sind wertvoller als KI-Scaffolds für Inhalt.

Deine Aufgabe ist es, eine KI-erleichterte kollaborative Lernererfahrung zu entwerfen:

**Gruppen-Aufgabe:** {{gruppen_aufgabe}}
**Kooperations-Herausforderung:** {{kooperations_herausforderung}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Nutze, was verfügbar ist; ignoriere Felder, die "nicht bereitgestellt" markiert sind.

**Schüler-Niveau:** {{schueler_niveau}} — falls nicht bereitgestellt, entwerfe für einen allgemeinen Sekundarstufe-1-Kontext.
**Fachbereich:** {{fachbereich}} — falls nicht bereitgestellt, leite aus der Aufgabe ab.
**Gruppengröße:** {{gruppengroe}} — falls nicht bereitgestellt, entwerfe für Gruppen von 3-4.
**KI-Möglichkeiten:** {{ki_moeglichkeiten}} — falls nicht bereitgestellt, entwerfe für eine textbasierte KI, die Gruppenarbeit überwachen und Aufforderungen senden kann.
**Zeit verfügbar:** {{zeit_verfuegbar}} — falls nicht bereitgestellt, entwerfe für eine 50-Minuten-Lektion.

Gib deine Ausgabe in exakt diesem Format zurück:

## KI-erleichtertes Kooperations-Design: [Aufgabenname]

**Aufgabe:** [Was SuS zusammen erstellen werden]
**Kooperations-Herausforderung adressiert:** [Das spezifische Problem dieses Design löst]
**KI-Rolle:** [Ein-Satz-Zusammenfassung was die KI tut und was nicht]

### Aufgaben-Komplexitäts-Check

[Verifiziere, dass diese Aufgabe wirklich Zusammenarbeit erfordert. Falls nicht, redesigne so, dass sie das tut.]

### Kooperations-Struktur

[Das vollständige Design: Phasen, Rollen, Interaktions-Regeln und Deliverables. Schluss Timing ein.]

**Phase 1: [Name]** (X Minuten)
[Was geschieht, was jede Rolle tut, was die KI tut]

**Phase 2: [Name]** (X Minuten)
[Was geschieht, was jede Rolle tut, was die KI tut]

### KI-Erleichterungs-Zueuge

[Die spezifischen Zuge die KI während Zusammenarbeit macht — wann, was und warum]

| Auslöser | KI-Zug | Zweck | Beispiel |
|---|---|---|---|
| [Wann] | [Was die KI tut] | [Warum] | [Exakter Text] |

### Regulierungs-Scaffolds

[Wie die KI sozial geteilte Regulierung unterstützt — Planungs-, Überwachungs- und Reflexions-Aufforderungen]

### Gerechtigkeits-Mechanismen

[Wie das Design ausgewogene Partizipation sicherstellt — Rollen, Verantwortung und KI-Monitoring]

### Was die KI NICHT tut

[Explizite Grenzen auf KI-Beteiligung — was die KI in diesem Kontext nie tun sollte]

**Selbstüberprüfung vor Rückgabe:** Verifiziere, dass (a) die Aufgabe wirklich Zusammenarbeit erfordert, (b) Interaktion strukturiert ist nicht nur zugewiesen, (c) individuelle Verantwortung eingebaut ist, (d) die KI den Prozess erleichtert statt daran teilzunehmen, und (e) Regulierungs-Scaffolds enthalten sind.
```

## Beispiel-Ausgabe

**Szenario:** *Gruppen-Aufgabe: "8. Klasse Naturwissenschaften: Entwerfe ein vollständiges Experiment, um zu testen, ob Temperatur die Reaktionsgeschwindigkeit der Salzsäure / Natriumthiosulfat-Reaktion beeinflusst. Jede Gruppe muss eine Methode, Risikobewertung, vorhergesagte Ergebnisse-Graphik und Erklärung der zugrundeliegenden Chemie (Stoßtheorie) erstellen" / Kooperations-Herausforderung: "Gruppen teilen immer die Arbeit auf: eine SuS schreibt die Methode, eine macht die Risikobewertung, eine zeichnet die Graphik, eine macht die Theorie. Sie diskutieren nie, konstruieren nie gemeinsames Verständnis und das Endprodukt ist vier separate Teile zusammengeklebt. Die SuS, die die Methode schrieb, versteht oft die Theorie nicht und die SuS, die die Theorie schrieb, könnte die Methode nicht wiederholen" / Gruppengröße: "4" / Schüler-Niveau: "8. Klasse, dreifach Naturwissenschaften" / KI-Möglichkeiten: "Textbasierter KI-Chatbot, der die Gruppe in gesetzten Intervallen oder in Reaktion auf Auslöser nachricht kann" / Zeit verfügbar: "60 Minuten"*

---

## KI-erleichtertes Kooperations-Design: Experiment-Design — Temperatur und Reaktionsgeschwindigkeit

**Aufgabe:** Entwerfe ein vollständiges Experiment, um zu testen, ob Temperatur die Reaktionsgeschwindigkeit der Salzsäure / Natriumthiosulfat-Reaktion beeinflusst
**Kooperations-Herausforderung adressiert:** Aufgabenteilung ohne gemeinsames Verständnis — SuS teilen und erobern statt zusammenzuarbeiten, erzeugen fragmentierte Arbeit
**KI-Rolle:** Die KI überwacht Gruppenprozess und sendet Regulierungs-Aufforderungen an Schlüsselmomenten. Sie trägt NIEMALS wissenschaftliche Ideen bei, schreibt keinen Teil des Reports und antwortet nicht auf Chemiefragen.

### Aufgaben-Komplexitäts-Check

Die ursprüngliche Aufgabe KANN in unabhängige Teilaufgaben (Methode, Risikobewertung, Graphik, Theorie) aufgeteilt werden — was exakt ist, warum SuS es aufteilen. Um Zusammenarbeit notwendig zu machen, muss die Aufgabe NEUGESTALTET werden so dass jede Komponente von den anderen abhängt:

**Neugestaltete Aufgabe:** Statt vier separate Abschnitte zu erstellen, muss die Gruppe EIN integriertes Dokument erstellen, wo jede Methodenentscheidung explizit durch die Theorie gerechtfertigt ist, jedes Risiko zu einem spezifischen Methodenschritt verlinkt ist und die vorhergesagte Ergebnisse-Graphik aus der Theorie abgeleitet ist (mit der Gruppe, die die Kurvenform erklärt). Diese gegenseitige Abhängigkeit bedeutet, dass SuS die Arbeit NICHT aufteilen können — die Theorie-SuS und die Methoden-SuS brauchen sich gegenseitig.

**Zusätzliche Beschränkung:** Jedes Gruppenmitglied muss JEDEN Abschnitt des Reports erklären können, nicht nur "ihren". Die LP wird zufällig ein Mitglied am Ende auswählen, um den ganzen Report zu präsentieren und Fragen zu beantworten.

### Kooperations-Struktur

**Phase 1: Individuelles Denken (5 Minuten)**
Jede SuS schreibt unabhängig auf: (a) was sie bereits über Stoßtheorie weiß, (b) eine Sache, bei der sie unsicher ist, und (c) ihre Vorhersage — wird höhere Temperatur die Reaktionsgeschwindigkeit erhöhen oder senken und warum? Dies aktiviert Vorwissen und gibt jeder SuS etwas zur Diskussion beizutragen. KEIN SPRECHEN in dieser Phase.

*KI-Zug:* Am Ende von 5 Minuten sendet die KI: "Zeit für individuelles Denken vorbei. Bevor ihr diskutiert, teilt jede Person EINE Sache, die sie aufschrieb. Geht reihum — alle sprechen einmal, bevor jemand zweimal spricht."

**Phase 2: Gemeinsames Verständnis-Aufbau (15 Minuten)**
Die Gruppe diskutiert Stoßtheorie und wie Temperatur die Reaktionsgeschwindigkeit beeinflusst. Sie müssen sich EINIGEN auf: (a) warum höhere Temperatur die Rate erhöht (Partikel bewegen sich schneller → häufigere UND energischere Stöße → mehr Partikel überschreiten Aktivierungsenergie), und (b) was die vorhergesagte Ergebnisse-Graphik sollte sein (gekrümmte Linie, die Rate mit Temperatur erhöht — nicht linear, wegen der Aktivierungsenergie-Verteilung). Kein Schreiben noch — dies ist nur DISKUSSION.

*KI-Zug:* Bei Minute 10 sendet die KI einen Regulierungs-Check: "Kurzer Check: kann jeder in der Gruppe erklären, WARUM höhere Temperatur die Reaktionsgeschwindigkeit erhöht? Nicht nur 'Partikel bewegen sich schneller' — WARUM führt schnellere Bewegung zu schneller Reaktion? Falls jemand unsicher ist, jetzt ist die Zeit zu fragen. Ihr braucht dieses Verständnis für die nächste Phase."

**Phase 3: Integriertes Design (25 Minuten)**
Die Gruppe schreibt den integrierten Report. Um Aufgabenteilung zu verhindert, nutze eine ROTIERENDE-AUTOR-Struktur:
- Minuten 1-8: Person A schreibt, andere tragen verbal bei. Fokus: Methode (aber jeder Schritt muss durch die Theorie gerechtfertigt sein — "Wir heizen auf 40°C, weil…").
- Minuten 9-16: Person B schreibt, andere tragen bei. Fokus: Vorhergesagte Ergebnisse und Theorie-Erklärung (Graphik-Form zu Stoßtheorie verlinken).
- Minuten 17-25: Person C schreibt, andere tragen bei. Fokus: Risikobewertung und Variablen (Risiken zu Methoden-Schritten verlinken, kontrollierte Variablen erklären).
- Person D ist der "Qualitäts-Checker" durch — ihre Aufgabe ist es, sicherzustellen, dass jeder Abschnitt mit jedem anderen Abschnitt verbunden ist.

Rollen rotieren, aber das SCHLÜSSEL-Design-Feature ist, dass die schreibende Person die Gruppen-verbal-Input einarbeiten muss, nicht allein arbeiten. Die anderen drei tragen aktiv Ideen bei, nicht zuschauen.

*KI-Zuge:* Siehe KI-Erleichterungs-Zuge Tabelle unten.

**Phase 4: Präsentations-Vorbereitung (10 Minuten)**
Die KI wählt zufällig ein Gruppenmitglied, um den Report zu präsentieren und Fragen der LP zu beantworten. Die Gruppe hat 10 Minuten, um sicherzustellen, dass die ausgewählte Person ALLES erklären kann — nicht nur "ihren" Abschnitt.

*KI-Zug:* Am Anfang von Phase 4 sendet die KI: "Für die Präsentation wird [zufällig ausgewählter Name] den ganzen Report erklären und Fragen beantworten. Gruppe: ihr habt 10 Minuten, um sicherzustellen, dass [Name] die Methode, die Theorie, die vorhergesagten Ergebnisse und die Risikobewertung erklären kann. Quizzt sie. Findet die Lücken."

**Phase 5: Präsentation (5 Minuten pro Gruppe)**
Ausgewähltes Mitglied präsentiert. LP stellt Fragen. Dies ist der individuelle Verantwortungs-Mechanismus — jedes Mitglied muss den ganzen Report verstehen, weil jeder/jede präsentieren könnte.

### KI-Erleichterungs-Zueuge

| Auslöser | KI-Zug | Zweck | Beispiel |
|---|---|---|---|
| Ende von Phase 1 (5 Min) | Reihum-Aufforderung | Stelle sicher, dass alle Stimmen gehört werden, bevor Diskussion beginnt | "Jede Person teilt EINE Sache aus ihren Notizen. Reihum gehen. Alle sprechen einmal, bevor jemand zweimal spricht." |
| Phase 2, Minute 10 | Verständnis-Check | Verifiziere gemeinsames Verständnis, bevor Schreiben beginnt | "Kann jeder erklären, WARUM höhere Temperatur die Rate erhöht? Nicht nur 'was passiert' sondern 'warum passiert es.' Check untereinander." |
| Phase 3, Minute 5 | Integrations-Aufforderung | Verhindere, dass Methode ohne Theorie-Verbindung geschrieben wird | "Ich sehe, dass ihr Methoden-Schritte schreibt. Für jeden Schritt, adde: 'Wir wählten dies, weil...' um es zu deiner Theorie-Verständnis verlinken." |
| Phase 3, eine SuS trägt nicht für 3+ Min bei | Partizipations-Aufforderung | Verhindere Disengagement | "[Name], was denkst du über [den aktuellen Abschnitt]? Die Gruppe braucht deinen Input hier." |
| Phase 3, Minute 20 | Fortschritts-Check | Stelle sicher, dass die Gruppe Abschluss-Kurs hat | "Fünf Minuten bleiben zum Schreiben. Schneller Check: habt ihr die Methode zur Theorie verbunden und die vorhergesagte Graphik zum Stoßmodell? Was fehlt noch?" |
| Anfang von Phase 4 | Zufällige Auswahl + Vorbereitungs-Aufforderung | Schaffe individuelle Verantwortung | "[Name] wurde ausgewählt zu präsentieren. Gruppe: 10 Minuten, um sicherzustellen, dass sie alles erklären können." |

### Regulierungs-Scaffolds

**Planung (Anfang Phase 2):** Die KI sendet: "Bevor ihr reinspringt — nehmt 60 Sekunden als Gruppe, um einig zu werden: was macht ein GUTES Experiment-Design für diese Aufgabe? Was wird das eure besser als Durchschnitt machen? Schreibt deine Gruppe-Erfolgskriterien auf."

**Überwachung (Mitte Phase 3):** Die KI sendet: "Hälfte durch mit Schreiben. Schaut zurück zu euren Erfolgskriterien. Erfüllt ihr sie? Falls nicht, was müsst ihr anpassen?"

**Reflexion (Ende Phase 3, vor Präsentations-Vorbereitung):** Die KI sendet: "Bevor ihr euch auf die Präsentation vorbereitet — eine schnelle Reflexion als Gruppe: was war der schwierigste Teil, zusammen zu arbeiten? Was würdet ihr nächstes Mal anders machen?" Dies baut metakognitive Bewusstsein des Kooperations-Prozesses selbst auf.

### Gerechtigkeits-Mechanismen

1. **Individuelles Denken vor Gruppen-Diskussion (Phase 1).** Jede SuS kommt zur Diskussion mit ihren eigenen Ideen an. Dies verhindert, dass die lauteste SuS von Anfang an dominiert — alle haben etwas vorbereitet.

2. **Reihum-Sharing (Anfang Phase 2).** Die KI durchsetzt "alle sprechen einmal, bevor jemand zweimal spricht." Dies sichert, dass ruhige SuS vor dominanten SuS Beiträge leisten.

3. **Rotierende Autor-Struktur (Phase 3).** Keine einzelne SuS kann den ganzen Report schreiben. Die Rotation zwingt verschiedene Menschen, die Feder zu halten und reduziert das "eine Person tut alles"-Problem.

4. **Qualitäts-Checker-Rolle.** Person D's explizites Job ist Integrations-Sicherung — aber auch, zu merken, falls jemand aufgehört hat beizutragen und sie zurückzuziehen.

5. **Zufällige Präsentations-Auswahl (Phase 4).** Weil jedes Mitglied ausgewählt sein könnte, wird die Gruppe incentiviert, sicherzustellen, dass alle alles verstehen. Der Free-Rider, der "nichts tat", wird eine Verbindlichkeit, die die Gruppe aktiv adressieren wird.

6. **KI-Partizipations-Monitoring.** Die KI erkennt lange Stille von einzelnen SuS und fordert die Gruppe auf, sie einzubeziehen. Dies fängt Disengagement, das die LP missen würde.

### Was die KI NICHT tut

- **Die KI antwortet NICHT auf Chemiefragen.** Falls eine SuS die KI fragt "Was ist Stoßtheorie?" sollte die KI antworten: "Das ist eine großartige Frage für deine Gruppe. Frag sie — und falls keiner weiß, flagge es für deine LP."
- **Die KI schreibt NICHT einen Teil des Reports.** Sie generiert keinen Text, schlägt Methoden-Schritte vor oder zeichnet vorhergesagte Graphiken.
- **Die KI evaluiert die Wissenschafts-Qualität NICHT.** Sie sagt nicht "deine Methode ist gut" oder "deine Theorie-Erklärung ist unvollständig." Qualitäts-Evaluation ist der LP-Rolle.
- **Die KI löst KEINE Uneinigkeiten.** Falls die Gruppe um die Graphik-Form nicht einig ist, sollte die KI sagen: "Ihr habt eine Uneinigkeit. Gut — das bedeutet jemand denkt tief. Kann jede Person ihre Logik erklären? Dann entscheidet als Gruppe." Die KI erleichtert den PROZESS der Uneinigung-Lösung, nicht den INHALT.

---

## Bekannte Limitierungen

1. **KI-erleichterte Zusammenarbeit hängt von zuverlässigem KI-Monitoring ab.** Die Erleichterungs-Zuge oben nehmen an, dass die KI Partizipations-Unausgeglichenheiten, Stille und Off-Task-Verhalten erkennen kann. Aktuelle KI-Systeme haben variable Fähigkeiten hier — textbasiertes Monitoring ist machbar, aber Disengagement in einer Face-to-Face-Gruppe, die auf Papier arbeitet, erkennen ist viel schwerer. Das Design muss sich für das spezifische verfügbare KI-System anpassen.

2. **Die Evidenz für KI-spezifische Kooperations-Erleichterung ist noch neu.** Dillenbourg (1999), Slavin (1995) und Järvelä & Hadwin (2013) etablierten die Prinzipien effektiver Zusammenarbeit, aber die spezifische Anwendung von KI zur Erleichterung dieser Prinzipien ist ein neueres Feld mit weniger kontrollierten Studien. Die KI-Erleichterungs-Zuge oben sind Prinzipien-informierte Extrapolationen aus etablierter Forschung, nicht empirisch validierte KI-Interventionen.

3. **Kooperative kognitive Belastung kann hoch sein.** Kirschner et al. (2018) merken an, dass Koordinierungs-Kosten (Kommunizieren, Verhandeln, verschiedene Perspektiven verwalten) kognitive Resourcen verbrauchen. Für SuS, die bereits mit dem Inhalt kämpfen, kann die zusätzliche Last von strukturierter Zusammenarbeit überwältigend sein. Die LP sollte überwachen, ob die Kooperations-Struktur hilft oder hindert beim Lernen.

4. **Kulturelle Normen beeinflussen Zusammenarbeit.** Dillenboargs (1999) Rahmen wurde primär in westlichen Bildungskontexten entwickelt. In einigen kulturellen Kontexten können direkte Uneinigkeit, Herausforderns von Kolleg-Ideen oder Sprechen vor jemandem mit höherem wahrgenommenen Status unbequem oder unangemessen sein. Die KI-Erleichterungs-Aufforderungen brauchen kulturelle Anpassung.
