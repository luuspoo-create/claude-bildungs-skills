---
# AGENT SKILLS STANDARD FIELDS (v2)
name: produktives-scheitern
description: "Redesigne eine direkte Instruktions-Sequenz um produktiven Kampf vor der Erklär-Phase einzubauen. Verwende diesen Skill beim Unterrichten von Konzepten die von Fehler-Zuerst Ansätzen profitieren."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-ki-lernen/produktives-scheitern"
skill_name: "Produktives Scheitern & Wünschenswerte Schwierigkeit Designer"
domain: "schule-ki-lernen"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Kapur (2008) — Productive failure"
  - "Kapur (2016) — Examining productive failure, productive success, unproductive failure, and unproductive success in learning"
  - "Bjork (1994) — Memory and metamemory considerations in the training of human beings"
  - "Bjork & Bjork (2011) — Making things hard on yourself, but in a good way: creating desirable difficulties to enhance learning"
  - "Soderstrom & Bjork (2015) — Learning versus performance: an integrative review"
input_schema:
  required:
    - field: "zielkonzept"
      type: "string"
      description: "Das spezifische Konzept oder die Fähigkeit die SuS tief lernen müssen — der Inhalt der von produktivem Scheitern profitiert statt direkter Instruktion"
    - field: "aktueller_ansatz"
      type: "string"
      description: "Wie dieses Konzept aktuell unterrichtet wird — typischerweise direkte Instruktion gefolgt von Praxis"
  optional:
    - field: "sus_niveau"
      type: "string"
      description: "Alter/Jahrgangsstufe und Leistungsniveau"
    - field: "fachbereich"
      type: "string"
      description: "Das Unterrichtsfach"
    - field: "zeitverhaeltnis"
      type: "string"
      description: "Wie viel Unterrichtszeit für die produktive-Scheitern-Sequenz verfügbar ist"
    - field: "vorwissen"
      type: "string"
      description: "Was SuS bereits kennen was sie während der Generierungs-Phase nutzen können"
    - field: "risikotoleranz"
      type: "string"
      description: "Wie komfortabel ist die LP mit SuS-Kampf und Fehler — wichtig für Umsetzung"
output_schema:
  type: "object"
  fields:
    - field: "produktives_scheitern_sequenz"
      type: "object"
      description: "Die komplette Sequenz — Generierungs-Phase, Konsolidierungs-Phase, und kritischer Übergang"
    - field: "wuenschenswerte_schwierigkeiten"
      type: "array"
      description: "Die spezifischen Schwierigkeiten in der Aufgabe und warum jede das Lernen verstärkt"
    - field: "fehler_vorkehrungen"
      type: "object"
      description: "Wie man sicherstellt dass Fehler PRODUKTIV ist nicht unproduktiv — die notwendigen Bedingungen"
    - field: "ki_risiken"
      type: "object"
      description: "Wie KI-Tools die wünschenserten Schwierigkeiten untergraben könnten und wie man das managt"
chains_well_with:
  - "adaptive-hint-sequenzen"
  - "worked-example-transition-designer"
  - "selbsterklaerung-designer"
  - "ki-tutoring-dialog-designer"
teacher_time: "5 Minuten"
tags: ["produktives-scheitern", "wünschenswerte-schwierigkeit", "Kapur", "Bjork", "kampf", "generierung", "konsolidierung", "kognitive-offloading", "Lehrplan21-MA.1", "Lehrplan21-NT.1"]
---

# Produktives Scheitern & Wünschenswerte Schwierigkeit Designer

## Was dieser Skill leistet

Redesignt eine Unterrichts-Sequenz um produktives Scheitern (Kapur, 2008, 2016) und wünschenswerte Schwierigkeiten (Bjork, 1994; Bjork & Bjork, 2011) einzubauen, ersetzt das Standard-„Lehre-dann-Übe"-Modell mit einem „Kämpfe-dann-Konsolidiere"-Modell das tieferes, dauerhafteres Lernen produziert. Das Kern-Paradox: SuS die zuerst kämpfen und fehlschlagen lernen MEHR langfristig als SuS die klare Instruktion zuerst und sofortigen Erfolg bekommen — auch obwohl es sich schlechter anfühlt während der Lektion. Kapur (2016) zeigte dass produktives Scheitern funktioniert weil die Generierungs-Phase (wo SuS Probleme VOR Unterricht versuchen) Vorwissen aktiviert, dessen Grenzen offenbart, und „Wissenslücken" erzeugt die nachfolgende Instruktion bedeutungsvoller machen. Dies ist besonders wichtig in KI-Umgebungen weil KI-Tools versehentlich wünschenswerte Schwierigkeiten ENTFERNEN können — Tasks leichter machen, sofortige Antworten liefern, und den produktiven Kampf der tiefes Lernen treibt reduzieren.

## Evidenzbasis

Kapur (2008, 2016) entwickelte das Productive Failure Framework durch eine Serie von Mathematik-Klassen-Studien. Im kanonischen Design bekommen SuS ein komplexes, neuartiges Problem VOR jeder Instruktion — ein Problem bei dem sie erwartet werden zu scheitern. Sie arbeiten in kleinen Gruppen, generieren mehrere Lösungs-Ansätze, von denen keine vollständig korrekt sind. DANN bietet die LP Instruktion über die kanonische Lösung an, vergleicht diese explizit mit den SuS-generierten Ansätzen. Kapur (2016) fand dass SuS in der Productive Failure Bedingung significantly bessere Leistung auf Konzeptual-Verständnis und Transfer zeigten — sogar obwohl Direct-Instruction SuS besser auf immediaten Verfahrens-Tests abschnitten. Der Schlüssel-Fund: Es ist nicht das Scheitern das Lernen produziert, sondern die GENERIERUNG. Bjork (1994) und Bjork & Bjork (2011) artikulierten das breitere Prinzip wünschenswerter Schwierigkeiten: Bedingungen die Performance während Lernens reduzieren aber langfristige Retention und Transfer erhöhen. Sie identifizierten vier Schlüssel-Schwierigkeiten: (1) Spacing (Practice über Zeit verteilt), (2) Interleaving (verschiedene Problem-Typen gemischt), (3) Generation (Antworten produzieren statt lesen), und (4) Retrieval Practice (dich selbst testen). Soderstrom & Bjork (2015) machten die kritische Unterscheidung zwischen LERNEN und PERFORMANCE. Performance ist was du JETZT kannst — sichtbar und messbar im Moment. Lernen ist die langfristige Änderung — unsichtbar während der Lektion und nur später messbar. Wünschenswerte Schwierigkeiten reduzieren Performance aber verstärken Lernen.

## Input-Schema

Die LP muss bereitstellen:
- **Zielkonzept:** Was SuS lernen müssen. *z.B. „Das Konzept der Proportionalität — nicht nur Verhältnisse berechnen, sondern verstehen wenn es nutzen, und sehen wie es sich in verschiedenen Kontexten zeigt"*
- **Aktueller Ansatz:** Wie es aktuell unterrichtet wird. *z.B. „Ich unterrichte die Formel, arbeite durch Beispiele, gebe dann Praxis-Aufgaben. SuS können rechnen, aber verstehen nicht, wann man proportionale Methoden nutzen sollte und wenn nicht"*

Optional:
- **SuS-Niveau:** Jahrgangsstufe und Leistungsniveau
- **Fachbereich:** Das Unterrichtsfach
- **Zeitverhältnis:** Wie viel Unterrichtszeit verfügbar ist
- **Vorwissen:** Was SuS bereits wissen
- **Risikotoleranz:** LP's Komfort mit SuS-Kampf

## Prompt

```
Du bist Experte in produktivem Scheitern und wünschenswerter Schwierigkeit mit tiefem Verständnis von Kapur (2008, 2016), Bjork (1994), Bjork & Bjork (2011) und Soderstrom & Bjork (2015). Du verstehst das Kern-Paradox: Lernen SCHWERER machen (richtig) macht es BESSER — aber es fühlt sich schlechter für SuS und LP an. Du verstehst auch das spezifische KI-Risiko: indem KI Tasks leichter macht und sofortige Unterstützung bietet, kann KI den produktiven Kampf der tiefes Lernen treibt entfernen.

KRITISCHE PRINZIPIEN:
- **Generation VOR Instruktion.** Die Productive-Failure-Sequenz MUSS mit SuS-Versuchen der Aufgabe VOR Instruktion starten. Dies ist unverrückbar. Die Generierungs-Phase aktiviert Vorwissen, offenbart Lücken, erzeugt Bedingungen für sinnvolle Konsolidierung.
- **Fehler müssen PRODUKTIV sein, nicht unproduktiv.** Kapur (2016) unterscheidet vier Bedingungen: produktives Scheitern (Kampf → Lernen), unproduktives Scheitern (Kampf → kein Lernen), produktiver Erfolg (Erfolg → Lernen), unproduktiver Erfolg (Erfolg → kein Lernen). Produktives Scheitern erfordert: (a) Task ist herausfordernde aber nicht unmöglich, (b) SuS haben genug Vorwissen um Partial-Lösungen zu generieren, (c) Konsolidierungs-Phase verbindet SuS-Ideen zur kanonischen Lösung, (d) Klassen-Kultur unterstützt Kampf ohne Scham.
- **Gestalte die Konsolidierungs-Phase so sorgfältig wie die Generierungs-Phase.** Viele LPs versuchen Productive Failure und schliessen „es funktionierte nicht" weil sie Konsolidierung überspringen oder hetzen. Konsolidierung ist WO Lernen auftritt.
- **Wünschenswerte Schwierigkeiten fühlen sich unerwünscht an.** SuS werden berichten dass sie „nichts gelernt" während der Generierungs-Phase. Sie werden tiefere Satisfaction bewerten. Sie werden schlechter auf immediaten Post-Tests abschneiden. Das ist ERWARTET. Die Vorteile erscheinen später.
- **KI-gestützte Cognitive Offloading ist der Feind.** Wenn SuS ein KI um Antwort fragen während Generierungs-Phase, wird das Productive Failure zerstört. Das Design muss explizite Richtlinien für wenn/wie KI einzuschränken ist enthalten.

Deine Aufgabe ist diese Unterrichts-Sequenz für produktives Scheitern umzudesignen:

**Zielkonzept:** {{zielkonzept}}
**Aktueller Ansatz:** {{aktueller_ansatz}}

Optionale Kontexte:
**SuS-Niveau:** {{sus_niveau}}
**Fachbereich:** {{fachbereich}}
**Zeitverhältnis:** {{zeitverhaeltnis}}
**Vorwissen:** {{vorwissen}}
**Risikotoleranz:** {{risikotoleranz}}

Gib deine Ausgabe in diesem Format zurück:

## Produktive-Scheitern-Sequenz: [Zielkonzept]

**Zielkonzept:** [Was SuS lernen müssen]
**Aktueller Ansatz:** [Wie es aktuell unterrichtet wird]
**Umdesignter Ansatz:** [Ein-Satz-Zusammenfassung der Productive-Failure-Version]

### Phase 1: Generierung (Produktives Scheitern)

[Die Task die SuS VOR Instruktion versuchen. Einbeziehen die spezifische Aufgabe, erwartete SuS-Antworten (korrekt und inkorrekt), und LP-Rolle während dieser Phase (zirkulieren, NICHT helfen, Ansätze notieren).]

**Die Aufgabe:**
[Exact Task die SuS erhalten]

**Erwartete SuS-Antworten:**
[Was SuS wahrscheinlich versuchen — inklusive spezifische Partial-Lösungen und Fehler-Ansätze]

**LP-Rolle während Generierung:**
[Was die LP tut — beobachten, Ansätze sammeln, Hilfsdrang widerstehen]

### Phase 2: Konsolidierung

[Wie die LP vom Generieren zur Instruktion übergeht. Muss explizit SuS-generierte Ansätze zur kanonischen Lösung verbinden. Einbeziehen spezifische Vergleiche und Schlüssel-Insights.]

### Eingebettete Wünschenswerte Schwierigkeiten

[Liste jede Schwierigkeit in der Sequenz und erkläre warum sie Lernen verstärkt]

| Schwierigkeit | Was sie macht | Warum es hilft |
|---|---|---|
| [Schwierigkeit] | [Mechanismus] | [Lernvorteil] |

### Fehler-Vorkehrungen

[Wie man sicherstellt dass Fehler PRODUKTIV ist — Bedingungen die erfüllt sein müssen und was zu tun ist wenn SuS frustriert wird]

### KI-Offloading-Risiken

[Wie KI-Tools die wünschenswerter Schwierigkeiten untergraben könnten und spezifische Empfehlungen zum Manage]

### LP-Vorbereitungs-Notizen

[Was die LP wissen und tun muss vor dieser Sequenz — einbeziehen wie man SuS-Frustration und eigene Discomfort mit SuS-Kampf managt]

**Selbstcheck:** (a) Generierung kommt vor Instruktion, (b) Task ist herausfordernde aber nicht unmöglich, (c) Konsolidierung verbindet SuS-Ansätze zur kanonischen Lösung, (d) Wünschenswerte Schwierigkeiten sind identifiziert und gerechtfertigt, (e) KI-Risiken werden berücksichtigt.
```

## Beispielausgabe

**Szenario:** *Zielkonzept: „Das Konzept von Dezimalbrüchen — nicht nur als Notations-Variante von Brüchen, sondern Verständnis dass Dezimalstellen Zehnerpotenz-Teile repräsentieren und wie man damit rechnet" / Aktueller Ansatz: „Ich unterrichte dass 0.5 = 1/2, arbeite durch Äquivalenz-Beispiele, gebe dann Konversions-Aufgaben. SuS können 3/4 in 0.75 konvertieren, aber verstehen nicht WARUM die Dezimalstelle bedeutet und können nicht 0.3 + 0.15 verstehen ohne Bruch-Umwandlung zu nutzen" / SuS-Niveau: „7. Klasse, Sek 1 Basis-Mathematik"*

---

## Produktive-Scheitern-Sequenz: Dezimalbrüche

**Zielkonzept:** Verstehen dass Dezimalstellen Zehnerpotenz-Teile repräsentieren und wie diese Struktur Rechnung leitet
**Aktueller Ansatz:** Formel lehren → Äquivalenz-Beispiele → Konversions-Praxis (erzeugt Prozedural-Flüssigkeit ohne Konzeptual-Verständnis)
**Umdesignter Ansatz:** SuS versuchen Dezimalstellen VOR Instruktion mit einer Zehner-Raster-Visualisierung zu erfinden und verstehen, indem sie ihre Strategien reflektieren — dann wird die kanonische Dezimal-Notation als LÖSUNG eines Problems vorgestellt das sie erlebten

### Phase 1: Generierung (Produktives Scheitern)

**Dauer:** 15-20 Minuten

**Die Aufgabe:**

*Zeige folgende Visualisierung:*

> **Das Gitter-Problem**
>
> Hier ist ein 10x10 Gitter, das ein „Ganzes" repräsentiert:
>
> [Zeige 10x10 Gitter, 3 Spalten ausgemalt von 10]
>
> **Deine Aufgabe (in Paaren):**
> 1. **Beschreibe wie viel des Gitters ausgemalt ist.** Verwende Brüche, Prozent, oder einen anderen Weg den du möchtest.
> 2. **Erfinde einen neuen Weg diese Menge zu SCHREIBEN.** Dein System sollte zeigen dass 3 Spalten von 10 gemeint sind. Es sollte funktionieren für JEDE Spalten-Anzahl (nicht nur 3), nicht nur für Gitter.
> 3. **Teste dein System:** Wenn 7 Spalten ausgemalt wären, wie würdest du es schreiben?
> 4. **Vergleich:** Wenn die Spalten in 10 kleinere Teile unterteilt wären (also 100 kleine Quadrate total), und 37 von diesen 100 wären ausgemalt, wie würdest du DAS mit deinem System schreiben?

**Erwartete SuS-Antworten:**

SuS werden mehrere Ansätze generieren, die meisten teilweise korrekt:

- **Bruch-Ansatz (am häufigsten):** 3/10, dann 7/10. Viele SuS bleiben hier stecken weil sie nicht sehen wie dieser Ansatz für kleinere Teile (100 Quadrate) skaliert.

- **Prozent-Ansatz:** 30%, 70%. Dies funktioniert, aber ist weniger elegant als das System das wir einführen werden.

- **„Schreib die Zahl-Plus-Bruch"-Ansatz:** 3/10 geschrieben als „3 von 10 Teilen" oder „3 Zehntel". Manche SuS könnten schreiben: „Ein Punkt dann 3" oder „0:3" oder andere Notationen.

- **Stuck/Confused:** Manche Paare werden nicht vom verbalen Verständnis („drei von zehn") zu einer schriftlichen Notation kommen. Dies ist ERWARTET.

**Was SuS NICHT generieren werden:**
- Die Dezimal-Notation 0.3. Die meisten werden nicht die idea die dass man „0-Ganze und 3-Zehntel" schreiben könnte haben.

**LP-Rolle während Generierung:**

- **Zirkuliere und BEOBACHTE.** Lehre nicht. Gib keine Hints. Deine Aufgabe ist Ansätze zu sammeln.
- **Notiere welche Ansätze jedes Paar nutzte.** Du wirst 3-4 verschiedene Ansätze für Phase 2 brauchen.
- **Wenn SuS nach 8 Minuten stuck sind:** Du kannst EINE Frage stellen: „Du schreibst 3/10. Wenn das Gitter in 100 Teile unterteilt wäre, wie würdest du es schreiben?" Dies redirectet ohne die Antwort zu geben.
- **Wenn SuS frustriert sind:** „Das ist genuinely schwer. Mathematiker haben über diese Notation Jahrhunderte diskutiert. Du wirst nicht die ‚richtige' Antwort erwartet zu finden — ich will dein DENKEN sehen."
- **Halte die Zeit.** Nach 15-20 Minuten, stoppa. Unvollständige Generierung ist fine.

### Phase 2: Konsolidierung

**Dauer:** 30-35 Minuten

**Schritt 1: Teile und vergleiche (10 Minuten).** Wähle 3 SuS-Ansätze (idealerweise: Bruch 3/10, Prozent 30%, und ein anderer). Schreib jeden auf dem Board. Für jeden, frage: „Funktioniert dies System gut? Was sind die Stärken und Schwächen?" Guide die Diskussion:

- Bruch 3/10: Funktioniert, aber wie schreibt man 37/100? Wird es clunky?
- Prozent: Funktioniert, aber verliert die Information dass wir Zehntel (nicht Hundert-Teile) sprechen.
- „0 ganze, 3 Zehntel": Näher! Aber lange zu schreiben jedes Mal.

**Schritt 2: Führe die kanonische Lösung ein (10 Minuten).** „Hier ist wie Mathematiker dies gelöst haben: Sie schrieben ‚0 ganze, 3 Zehntel' aber ALS 0.3 — mit einem Punkt um zu zeigen dass alles nach dem Punkt Teile von einem Ganzen bedeutet. Schau: Der Punkt sagt ‚hier kommen die Teile'. Der erste Digit nach dem Punkt ist Zehntel. Der zweite Digit ist Hundertstel. Hier ist die Struktur:" [Zeige Verbindung zu Board:]

- 0.3 bedeutet 0 Ganze und 3 Zehntel (wie Gruppe-Y-Ansatz)
- 0.37 bedeutet 0 Ganze, 3 Zehntel und 7 Hundertstel
- Geh zurück zu SuS-Ansätzen: „Seht wie dieser Punkt? Das sagt: alles danach ist PARTS. Genau wie Gruppe X versuchte mit 3/10, aber mit einem Punkt statt Schrägstrich, weil wir zeigen wollen dass die POSITIONS bedeuten."

**Schritt 3: Verbinde zurück zur ursprünglichen Frage (10 Minuten).** Wenn 3 Spalten von 10 ausgemalt sind, schreiben wir 0.3. Wenn 37 Quadrate von 100 ausgemalt sind, schreiben wir 0.37. Die Kraft: „Die Position des Digits zeigt dir dass dies ZEHNTEL oder HUNDERTSTEL sind. Du brauchst die Wörter nicht zu schreiben — der Punkt und die Position sagen es dir."

**Schritt 4: Quick Praxis mit Verständnis-Fokus (5 Minuten).** Gib eine neue Grid-Situation. Frage SuS zu (a) beschreibe was ausgemalt ist ODER (b) interpretiere eine Dezimal-Zahl (was bedeutet 0.45?). Die Interpretation ist das assessment-Ziel, nicht die Notation.

### Eingebettete Wünschenswerte Schwierigkeiten

| Schwierigkeit | Was sie macht | Warum es hilft |
|---|---|---|
| **Generierung** (versuchen VOR Instruktion) | Zwingt SuS Vorwissen zu aktivieren und mit dem Problem „wie schreibe ich Teile" zu kämpfen | Erzeugt „Wissenslücken" die die Dezimal-Notation bedeutungsvoll machen wenn eingeführt |
| **Produktives Scheitern** (SuS erreichen nicht die korrekte Antwort) | Erzeugt kognitiven Konflikt — SuS sehen dass ihre Ansätze Limitations haben | Motivation die kanonische Lösung zu lernen ist höher weil sie das Problem erlebt haben |
| **Vergleich von Ansätzen** (Bruch vs. Prozent vs. Dezimal) | SuS müssen sehen WIE verschiedene Repräsentationen die gleiche Information zeigen | Baut flexibles Verständnis statt starres Wissen |
| **Delayed Instruktion** (lehren nach Kampf, nicht davor) | Verhindert dass SuS einfach ein Verfahren folgen ohne verstehen | Die Dezimal-Notation wird als LÖSUNG präsentiert, nicht als arbiträre Regel |

### Fehler-Vorkehrungen

**Bedingung 1: Die Task muss herausfordernde aber nicht unmöglich sein.** Das Gitter-Problem ist sorgfältig calibriert: 7. Klasse SuS verstehen Brüche und Raster. Sie haben genug Vorwissen Partial-Lösungen zu generieren. Wenn SuS Brüche nicht verstünden, wäre diese Task zu schwer.

**Bedingung 2: Klassen-Kultur muss Kampf unterstützen.** Sag VOR der Generierungs-Phase explizit: „Ich gebe euch ein Problem das ihr NICHT perfekt lösen werdet. Der Kampf IST der Punkt. Ich will dein DENKEN sehen, nicht eine korrekte Antwort."

**Bedingung 3: Frustrations-Monitoring.** Wenn mehr als halb der Klasse stuck und frustriert nach 8 Minuten sind, biete die eine Scaffold an. Wenn Frustration bei 12 Minuten persistiert, beginne Phase 2 früher.

**Bedingung 4: Konsolidierung muss thorough sein.** Wenn Zeit läuft, cut Practice-Aufgaben (Schritt 4), NICHT Konsolidierung. Productive Failure ohne Konsolidierung ist nur eine verwirrte Lektion.

### KI-Offloading-Risiken

**Risiko 1: SuS googeln „wie schreib man Dezimalstellen."** Wenn Internet-Zugang, finden SuS „Dezimalnotation" in 30 Sekunden, umgehen die ganze Generierungs-Phase. **Mitigation:** Dies ist eine no-devices Task. Rechner ja, Handys und Laptops nein. Erkläre: „Ich brauche dass ihr das selbst herausfindet."

**Risiko 2: SuS fragen ein KI-Chatbot.** In Schulen mit KI-Tools könnten SuS prompen „wie schreib man drei Zehntel?" und bekommen eine klare Erklärung. **Mitigation:** Instruktion explizit dass KI nicht während Phase 1 genutzt wird. Frame positiv: „Du machst etwas was KI nicht kann — dein DENKEN zu generieren."

**Risiko 3: Starke SuS kennen schon Dezimalstellen.** Manche könnten bereits die Dezimal-Notation wissen. **Mitigation:** Die Task fragt SuS zu ERFINDEN ein System, nicht zu FINDEN einer bestehenden Notation. Wenn ein/e SuS sagt „Ist das einfach 0.3?" antworte: „Vielleicht. Aber WARUM funktioniert 0.3? Warum der Punkt da? Das ist was ich herausfinden will."

### LP-Vorbereitungs-Notizen

**Erwarte Discomfort.** SuS-Kampf ohne Hilfe zuzuschauen ist schwer für LPs. Du wirst Drang zu erklären, Hints zu geben, zu retten fühlen. Widerstehe. Der Kampf ist das Produkt, nicht ein Problem.

**Erwarte SuS-Proteste.** SuS könnten sagen „Warum lehrst du nicht einfach die Dezimal-Notation?" Das ist NORMAL und bedeutet nicht die Lektion ist fehlgeschlagen.

**Bereite die Konsolidierung vor.** Wiss welche SuS-Ansätze du suchst (Bruch, Prozent, anderer). Habe die kanonische Dezimal-Erklärung bereit. Konsolidierung kann nicht improvvisiert werden.

**Habe einen Backup-Plan.** Wenn Generierung nur einen Ansatz erzeugt (alle machen nur Brüche), adjust die Konsolidierung: „Die meisten von euch versuchten Brüche. Das ist ein guter Start. Lass mich zeigen wie eine andere Gruppe es versuchte..." und zeige den Prozent-Ansatz selbst.

---

## Bekannte Limitationen

1. **Produktives Scheitern ist nicht für alle Inhalte geeignet.** Es funktioniert best für KONZEPTUALES Verständnis — verstehen WARUM etwas funktioniert, nicht nur WIE es zu machen. Für rein prozedurale Fähigkeiten ist direkte Instruktion oft effizienter. Produktives Scheitern ist wertvollst wenn der aktueller Ansatz Prozedural-Flüssigkeit ohne Konzeptuales Verständnis erzeugt.

2. **Die Evidenz ist stärker für Mathematik und Naturwissenschaft als andere Domains.** Kapur's Forschung war primär in Mathe-Klassen. Die Generation-vor-Instruktion Prinzip ist in anderen Domains studiert, aber die spezifische Productive-Failure-Design hat weniger Evidenz ausserhalb STEM.

3. **LP-Fähigkeit ist ein binding constraint.** Die Konsolidierungs-Phase erfordert eine fähige LP die SuS-Ansätze zur kanonischen Lösung in Echtzeit verbinden kann. Das ist signifikant schwerer als eine vorgeplante Vorlesung. LPs die Productive Failure zum ersten Mal versuchen sollten mit Topics starten die sie tiefenweise kennen.

4. **Die Performance-Lernen-Unterscheidung erzeugt ein Assessment-Problem.** SuS in Productive Failure Bedingungen performieren SCHLECHTER auf immediaten Post-Tests aber BESSER auf delayed und Transfer Tests. Wenn die LP sofort nach der Lektion bewertet, wird Productive Failure zu scheitern scheinen. Die echten Vorteile erscheinen Tage oder Wochen später.
