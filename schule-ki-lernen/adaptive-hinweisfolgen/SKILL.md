---
# AGENT SKILLS STANDARD FIELDS (v2)
name: adaptive-hinweisfolgen
description: "Generiere eine Hinweisfolge für einen Problemtyp, die progressive Offenlegung zeigt ohne die Antwort zu geben. Verwende dies beim Entwurf von Tutoring-Dialogen oder gestützten Arbeitsblättern."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-ki-lernen/adaptive-hinweisfolgen"
skill_name: "Adaptive Hinweisfolgen-Designer"
domain: "schule-ki-lernen"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "VanLehn (2011) — The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems (meta-analysis, effect size 0.76)"
  - "Aleven & Koedinger (2002) — An effective metacognitive strategy: learning by doing and explaining with a computer-based Cognitive Tutor"
  - "Shute (2008) — Focus on formative feedback"
  - "Wood, Bruner & Ross (1976) — The role of tutoring in problem solving"
  - "Razzaq & Heffernan (2010) — Hints: is it better to give or wait to be asked?"
input_schema:
  required:
    - field: "problemtyp"
      type: "string"
      description: "Der spezifische Problemtyp oder die Aufgabe, an der SuS arbeiten — was sie lösen oder erstellen sollen"
    - field: "typische_verstaendnisprobleme"
      type: "string"
      description: "Wo SuS steckenbleiben — die spezifischen Fehlkonzepte, Verfahrensfehler oder konzeptionellen Lücken, die den Fortschritt verhindern"
  optional:
    - field: "schueler_niveau"
      type: "string"
      description: "Jahrgangsstufe und Leistungsniveau"
    - field: "fachbereich"
      type: "string"
      description: "Das Schulfach"
    - field: "lieferkontext"
      type: "string"
      description: "Ob Hinweise von einem KI-System, einer LP oder in Unterrichtsmaterialien vermittelt werden"
    - field: "anzahl_hinweisebenen"
      type: "integer"
      description: "Wie viele Ebenen von progressiven Hinweisen entworfen werden sollen — typischerweise 3-5"
    - field: "end_hinweis_strategie"
      type: "string"
      description: "Was am Ende der Hinweisfolge geschieht — Antwort geben, LP kontaktieren oder andere Aufgabe"
output_schema:
  type: "object"
  fields:
    - field: "hinweisfolge"
      type: "array"
      description: "Die Kaskadenfolge von Hinweisen — vom Allgemeinsten zum Spezifischsten, wobei jeder die Antwort mehr offenbart, ohne sie zu geben"
    - field: "hinweis_design_rationale"
      type: "object"
      description: "Warum jede Hinweisebene so entworfen ist — welche kognitiven Funktionen sie erfüllt"
    - field: "ausloesebedinungen"
      type: "object"
      description: "Wann jeder Hinweis ausgegeben wird — zeitgesteuert, fehlergesteuert, anforderungsgesteuert oder verhaltensgesteuert"
    - field: "bottom_out_design"
      type: "object"
      description: "Was geschieht, wenn alle Hinweise erschöpft sind — die 'Bottom-Out'-Strategie"
chains_well_with:
  - "intelligenter-tutoring-dialog"
  - "formative-beurteilungsschleife"
teacher_time: "4 minutes"
tags: ["Hinweise", "Scaffolding", "ITS", "VanLehn", "Aleven", "adaptiv", "Tutoring", "Lehrplan21", "Selbsterklärung", "gestützte-probleme"]
---

# Adaptive Hinweisfolgen-Designer

## Was diese Fähigkeit tut

Entwirft eine Kaskadenfolge von Hinweisen für einen spezifischen Problemtyp — eine Reihe von progressiv offenbarten Hinweisen, die SuS helfen, Verständnislücken zu überwinden, ohne ihnen einfach die Antwort zu geben. Dies ist eines der technisch anspruchsvollsten Aspekte des Intelligent-Tutoring-System (ITS)-Designs. Die zentrale Erkenntnis aus VanLehns (2011) Meta-Analyse ist, dass die Effektivität von Tutoring (Mensch oder KI) stark von der Qualität der Hinweisfolge abhängt — und diese sind der primäre Mechanismus zur kognitiven Unterstützung (Scaffolding). Eine fehlerhafte Folge führt entweder zu Frustration (Hinweise zu vage, zu wenige) oder zum Diebstahl von Lerngelegenheiten (Hinweise zu spezifisch, zu früh). Die Ausgabe umfasst die vollständige Hinweiskaskade (typischerweise 3–5 Ebenen von allgemeiner strategischer Anleitung bis zu spezifischem prozeduralem Nudge), eine Design-Rationale, die die kognitive Funktion jeder Ebene erklärt, Auslösebedingungen (wann jeder Hinweis wirksam wird) und eine Bottom-Out-Strategie (was geschieht, wenn Hinweise erschöpft sind). KI ist hier besonders wertvoll, weil ein effektives Hinweis-Entwerfen erfordert, studentische Fehler zu antizipieren, Hinweis-Spezifität zu kalibrieren und sicherzustellen, dass jede Hinweisebene gerade genug Information liefert, um die SuS zu entblocken, ohne die kognitive Arbeit zu umgehen, die zum Lernen führt.

## Evidenzgrundlage

VanLehn (2011) führte die umfassendste Meta-Analyse zur Effektivität von Tutoring durch und verglich Mensch-Tutoring, intelligente Tutoringsysteme und andere Ansätze. Er fand durchschnittliche ITS-Effektstärken von 0,76 — bemerkenswert nah an Mensch-Tutoring (0,79) und deutlich höher als Kontrollbedingungen ohne Tutoring. Entscheidend: ITS-Effektivität hängt von der Qualität der Schritt-Level-Interaktion ab: Systeme, die bei jedem Problemlösungsschritt Feedback und Hinweise geben (innere Schleife), waren deutlich effektiver als Systeme, die nur die Endantwort evaluieren (äußere Schleife). Aleven & Koedinger (2002) untersuchten Hinweis-Nutzungsverhalten im Carnegie Learning Cognitive Tutor und fanden, dass SuS Hinweise oft suboptimal nutzten — entweder zu schnell anfragten (vor Problemlösungsversuch) oder zu spät (unproduktiv kämpfend). Sie fanden, dass Training in einer metakognitiven Hinweis-Strategie ("erst versuchen, dann Hinweis anfragen, dann Hinweis selbst erklären") Lernergebnisse deutlich verbesserte. Razzaq & Heffernan (2010) verglichen proaktive Hinweise (automatisch gegeben) mit reaktiven Hinweisen (auf Anfrage) und fanden, dass der optimale Ansatz vom Leistungsniveau abhängt: schwächere SuS profitieren mehr von proaktiven Hinweisen, während stärkere SuS vom Kampf vor Hilfesuche profitieren.

## Input-Schema

Die LP muss bereitstellen:
- **Problemtyp:** Was SuS lösen. *z.B. "Lösen linearer Gleichungen mit einer Unbekannten — z.B. 3x + 7 = 22" / "Schreiben eines Topic Sentence für einen Überzeugungstext" / "Ausgleichen einer chemischen Gleichung" / "Fehlerbehebung einer Python-Funktion"*
- **Typische Verständnisprobleme:** Wo SuS steckenbleiben. *z.B. "SuS vergessen, die gleiche Operation auf beiden Seiten durchzuführen" / "SuS schreiben vage oder faktische Sätze statt begründeter Aussagen" / "SuS gleichen Atome zufällig statt systematisch aus"*

Optional (durch Kontextmotor eingefügt, falls verfügbar):
- **Schüler-Niveau:** Jahrgangsstufe und Leistungsniveau
- **Fachbereich:** Das Schulfach
- **Lieferkontext:** KI-System, LP oder Materialien
- **Anzahl Hinweisebenen:** Wie viele Ebenen entworfen werden sollen
- **End-Hinweis-Strategie:** Was am Ende der Folge geschieht

## Prompt

```
Du bist ein Experte im Hinweis-Sequenz-Design für intelligente Tutoringsysteme mit tiefem Wissen von VanLehns (2011) Meta-Analyse zur ITS-Effektivität, Aleven & Koedinger (2002) Forschung zum Hinweis-Nutzungsverhalten, Razzaq & Heffernan (2010) Arbeiten zu proaktiven vs. reaktiven Hinweisen, Shutes (2008) Prinzipien für formatives Feedback und Woods, Bruner & Ross (1976) Scaffolding-Rahmen. Du verstehst, dass Hinweis-Design der schwierigste Aspekt des ITS-Designs ist: zu wenig Hilfe erzeugt Frustration und Aufgabe; zu viel Hilfe erzeugt Antwort-Kopieren ohne Lernen. Die optimale Hinweisfolge reduziert progressiv die erforderliche kognitiven Arbeits, während sie so viel produktives Streben wie möglich bewahrt.

KRITISCHE PRINZIPIEN:
- **Progressive Spezifität.** Der erste Hinweis sollte der ALLGEMEINSTE sein — auf die richtige Strategie oder das Konzept zeigend, ohne den spezifischen Schritt zu offenbaren. Jeder nachfolgende Hinweis sollte spezifischer sein und den kognitiven Suchraum verengen, während die SuS immer noch Denken erfordern. Der letzte Hinweis (der "Bottom-Out-Hinweis") kann den spezifischen Schritt offenbaren, sollte aber immer noch verlangen, dass die SuS ihn ausführen und verstehen, warum.
- **Jeder Hinweis sollte EINE Sache tun.** Ein Hinweis, der sagt "Vergiss nicht, die Variable zu isolieren, indem du 7 von beiden Seiten subtrahierst und dann durch 3 dividierst" ist kein Hinweis — er ist die Antwort verkleidet. Jede Hinweisebene sollte EINEN Aspekt der Verständnislücke adressieren.
- **Hinweise sollten die URSACHE des Fehlers adressieren, nicht nur das Symptom.** Wenn eine SuS 3x + 7 = 22 falsch löst, sollte der Hinweis nicht nur sagen "Versuch es nochmal" (zu vage) oder "x = 5" (die Antwort). Er sollte die wahrscheinliche URSACHE adressieren: "Welche Operation wird die 7 auf die andere Seite bewegen?" — zielgerichtet auf die spezifische konzeptionelle Lücke.
- **Auslösebedingungen sind genauso wichtig wie Hinweisinhalt.** Wann ein Hinweis wirksam wird ist genauso wichtig wie was er sagt. Zu früh: die SuS bekommen keine Chance produktiv zu kämpfen. Zu spät: die SuS hat aufgegeben. Gestalte Auslöser basierend auf beobachtbarem Verhalten: verstrichene Zeit, Anzahl falscher Versuche, spezifische Fehlermuster oder SuS-Anfrage.
- **Die Bottom-Out-Strategie muss immer noch Lernen erzeugen.** Wenn alle Hinweise erschöpft sind, kann das System nicht einfach aufgeben. Die Bottom-Out sollte die Antwort MIT einer Selbsterklär-Anfrage geben: "Die Antwort ist X, weil Y. Erkläre in deinen eigenen Worten, warum Y zu X führt." Dies konvertiert das Bottom-Out vom Antwort-Geben zu Lernensaufbau.

Deine Aufgabe ist es, eine Hinweisfolge für folgendes zu entwerfen:

**Problemtyp:** {{problemtyp}}
**Typische Verständnisprobleme:** {{typische_verstaendnisprobleme}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Nutze, was verfügbar ist; ignoriere Felder, die "nicht bereitgestellt" markiert sind.

**Schüler-Niveau:** {{schueler_niveau}} — falls nicht bereitgestellt, entwerfe für einen allgemeinen Sekundarstufe-1-Kontext.
**Fachbereich:** {{fachbereich}} — falls nicht bereitgestellt, leite aus dem Problemtyp ab.
**Lieferkontext:** {{lieferkontext}} — falls nicht bereitgestellt, entwerfe für ein KI-Tutoringsystem, das auch von LP verwendet werden kann.
**Anzahl Hinweisebenen:** {{anzahl_hinweisebenen}} — falls nicht bereitgestellt, entwerfe 4 Ebenen (strategisch → konzeptionell → prozedural → bottom-out).
**End-Hinweis-Strategie:** {{end_hinweis_strategie}} — falls nicht bereitgestellt, entwerfe einen Bottom-Out-Hinweis mit Selbsterklär-Anfrage.

Gib deine Ausgabe in exakt diesem Format zurück:

## Adaptive Hinweisfolge: [Problemtyp]

**Problemtyp:** [Was SuS lösen]
**Typische Verständnisprobleme:** [Wo sie steckenbleiben]
**Hinweisebenen:** [Wie viele Ebenen, von allgemein zu spezifisch]

### Hinweis-Architektur

[Übersicht der Hinweis-Strategie — was jede Ebene tut und warum die Folge so geordnet ist]

### Hinweisfolge

Für jede Ebene:
**Ebene [N]: [Hinweistyp — Strategisch / Konzeptionell / Prozedural / Bottom-Out]**
- **Hinweistext:** [Genau das, was die SuS sieht oder hört]
- **Kognitive Funktion:** [Was dieser Hinweis tut — welche kognitiven Arbeiten die SuS noch tun müssen]
- **Auslösebedingung:** [Wann dieser Hinweis wirksam wird]
- **Erwartete SuS-Reaktion:** [Was eine SuS, die von diesem Hinweis profitiert, als nächstes tun wird]
- **Wenn dieser Hinweis nicht hilft:** [Was geschieht — zur nächsten Ebene eskalieren]

### Bottom-Out-Strategie

[Was geschieht, wenn alle Hinweise erschöpft sind — das spezifische Design zur Antwort-Offenlegung, das immer noch Lernen erzeugt]

### Auslösebedinungen-Zusammenfassung

| Auslösetyp | Bedingung | Hinweisebene aktiviert |
|---|---|---|
| [Typ] | [Spezifische Bedingung] | [Welche Ebene] |

### Adaptationsnotizen

[Wie die Folge sich an verschiedene SuS-Profile anpasst — stärkere SuS können frühe Ebenen überspringen; schwächere SuS brauchen die volle Kaskade]

**Selbstüberprüfung vor Rückgabe:** Verifiziere, dass (a) Hinweise progressiv spezifischer werden, (b) jeder Hinweis EINE Sache tut, (c) Hinweise die Fehlerursache adressieren, nicht nur das Symptom, (d) Auslösebedingungen spezifiziert sind, (e) das Bottom-Out immer noch Lernen erzeugt, und (f) die Folge produktives Streben bewahrt.
```

## Beispiel-Ausgabe

**Szenario:** *Problemtyp: "Lösen linearer Gleichungen mit einer Unbekannten — speziell Gleichungen der Form ax + b = c, wobei SuS x isolieren müssen. Beispiel: 3x + 7 = 22" / Typische Verständnisprobleme: "SuS vergessen, die gleiche Operation auf beiden Seiten durchzuführen (sie subtrahieren 7 von links, aber nicht von rechts). SuS verstehen das Konzept der inversen Operation nicht (sie addieren, wenn sie subtrahieren sollten, oder umgekehrt). SuS führen Operationen in der falschen Reihenfolge durch (dividieren durch 3 vor Subtraktion von 7)." / Lieferkontext: "KI-Tutoringsystem — Hinweise erscheinen auf dem Bildschirm, wenn ausgelöst" / Schüler-Niveau: "8. Klasse Sek 1, erstes Algebra-Semester"*

---

## Adaptive Hinweisfolge: Lösen linearer Gleichungen (ax + b = c)

**Problemtyp:** Lösen linearer Gleichungen mit einer Unbekannten — Isolieren von x in Gleichungen wie 3x + 7 = 22
**Typische Verständnisprobleme:** Fehler bei gleicher Operation auf beiden Seiten, Verwirrtheit bei inverser Operation, falsche Operationsreihenfolge
**Hinweisebenen:** 4 (strategisch → konzeptionell → prozedural → bottom-out)

### Hinweis-Architektur

Die Folge bewegt sich von STRATEGISCH (auf einen Ansatz zeigend) durch KONZEPTIONELL (das relevante Prinzip aktivierend) zu PROZEDURAL (den spezifischen Schritt angebend) zu BOTTOM-OUT (den Schritt mit Selbsterklärung offenbarend). Auf jeder Ebene behalten die SuS etwas kognitive Arbeit:

- **Ebene 1 (Strategisch):** "Hier ist dein ZIEL" — die SuS müssen den Ansatz herausfinden
- **Ebene 2 (Konzeptionell):** "Hier ist das PRINZIP" — die SuS müssen die spezifische Operation herausfinden
- **Ebene 3 (Prozedural):** "Hier ist der SCHRITT" — die SuS müssen ihn ausführen und überprüfen
- **Ebene 4 (Bottom-Out):** "Hier ist die ANTWORT für diesen Schritt" — die SuS müssen erklären, warum

### Hinweisfolge

**Ebene 1: Strategisch — "Was ist dein Ziel?"**
- **Hinweistext:** "Dein Ziel ist es, x allein auf einer Seite der Gleichung zu bekommen. Momentan hat x noch extra Nummern bei sich. Was könntest du tun, um damit zu beginnen, diese zu entfernen?"
- **Kognitive Funktion:** Erinnert die SuS an die Gesamtstrategie (x isolieren), ohne anzuzeigen, welche spezifische Operation durchzuführen ist oder welche Zahl zuerst bearbeitet werden soll. Die SuS müssen immer noch identifizieren, welche Zahlen zu entfernen sind und welche Operationen zu nutzen sind.
- **Auslösebedingung:** SuS hat 60 Sekunden lang keine Fortschritte gemacht, ODER hat einen falschen Wert für x eingegeben ohne zu zeigen, wie sie vorgegangen ist, ODER hat Hilfe angefordert.
- **Erwartete SuS-Reaktion:** SuS identifiziert, dass sie "die +7 oder 3 loswerden" müssen und versucht eine Operation. Selbst wenn die Operation falsch ist, lenkt die strategische Rahmung die Aufmerksamkeit auf das Ziel um.
- **Wenn dieser Hinweis nicht hilft:** Nach noch einem falschen Versuch oder 45 Sekunden ohne Fortschritt, zur Ebene 2 eskalieren.

**Ebene 2: Konzeptionell — "Welche Zahl zuerst, und was ist ihr Gegenteil?"**
- **Hinweistext:** "Schau die Gleichung an: 3x + 7 = 22. Das x wird mit 3 multipliziert UND hat 7 dazu addiert. Kümmere dich ZUERST um die ADDITION. Was ist das Gegenteil von 7 addieren?"
- **Kognitive Funktion:** Dieser Hinweis macht ZWEI Dinge: Er sagt der SuS die REIHENFOLGE (Kümmere dich mit Addition vor Multiplikation — die Umkehrung von PEMDAS) und aktiviert das INVERSE-OPERATION-Konzept (das Gegenteil von addieren). Die SuS müssen immer noch herausfinden, dass "das Gegenteil von 7 addieren ist 7 subtrahieren" und es auf beide Seiten anwenden.
- **Auslösebedingung:** SuS hat nach Ebene 1 eine falsche Operation versucht (z.B. durch 3 dividieren zuerst), ODER hat korrekt identifiziert "subtrahieren", aber nicht auf beide Seiten angewendet.
- **Erwartete SuS-Reaktion:** SuS schreibt 3x + 7 - 7 = 22 - 7, vereinfacht zu 3x = 15. Falls sie nur von einer Seite subtrahiert, adressiert Ebene 3 dies.
- **Wenn dieser Hinweis nicht hilft:** Nach noch einem Fehler oder 30 Sekunden, zur Ebene 3 eskalieren.

**Ebene 3: Prozedural — "Mache das gleiche auf beiden Seiten"**
- **Hinweistext:** "Subtrahiere 7 von BEIDEN Seiten der Gleichung. Die linke Seite wird 3x + 7 - 7 = 3x. Was wird die rechte Seite? 22 - 7 = ?"
- **Kognitive Funktion:** Dieser Hinweis spezifiziert die exakte Operation (7 subtrahieren) und betont das Beide-Seiten-Prinzip. Die SuS müssen immer noch 22 - 7 = 15 berechnen und dann den nächsten Schritt herausfinden (durch 3 dividieren). Der Hinweis löst den ERSTEN Schritt, lässt aber den ZWEITEN für die SuS.
- **Auslösebedingung:** SuS hat von nur einer Seite subtrahiert, oder konnte nach Ebene 2 die richtige Operation nicht identifizieren.
- **Erwartete SuS-Reaktion:** SuS schreibt 3x = 15, dann versucht, x zu isolieren, indem sie durch 3 dividiert, ankommend bei x = 5.
- **Wenn dieser Hinweis nicht hilft:** Falls SuS immer noch das Problem nach diesem Hinweis nicht abschließen kann (kann 22 - 7 nicht berechnen, oder weiß nicht, dass sie als nächstes durch 3 dividieren soll), zur Bottom-Out eskalieren.

**Ebene 4: Bottom-Out — "Hier ist der Schritt. Erkläre, warum."**
- **Hinweistext:** "Hier ist die vollständige Lösung: 3x + 7 = 22 → 7 von beiden Seiten subtrahieren → 3x = 15 → durch 3 auf beiden Seiten dividieren → x = 5. Jetzt: Erkläre in deinen eigenen Worten, WARUM wir 7 vor 3 subtrahiert haben. Was wäre geschehen, wenn wir zuerst durch 3 dividiert hätten?"
- **Kognitive Funktion:** Die Antwort ist vollständig offenbart, aber die Selbsterklär-Anfrage bewahrt das Lernen. Indem man "Warum diese Reihenfolge?" fragt, zwingt das System die SuS, sich mit der mathematischen Logik zu beschäftigen, statt einfach die Antwort zu kopieren. Die gegenteilige Frage ("Was wenn wir zuerst dividiert hätten?") entwickelt tieferes Verständnis der Operationsreihenfolge.
- **Auslösebedingung:** Alle vorherigen Hinweise gegeben und SuS kann immer noch das Problem nicht abschließen.
- **Erwartete SuS-Reaktion:** SuS erklärt (in Text oder Auswahl): "Wir subtrahieren 7 zuerst, weil es einfacher ist / weil 7 addiert wird, nicht mit x multipliziert / weil wenn wir zuerst durch 3 dividieren, müssen wir auch die 7 dividieren, was Brüche gibt." Alles davon zeigt Verständnis.

### Bottom-Out-Strategie

Der Bottom-Out-Hinweis offenbart die vollständige Lösung, aber verlangt eine Selbsterklärung, bevor die SuS zum nächsten Problem vorgehen kann. Das System präsentiert zwei Aufforderungen:

1. **Die Lösung erklären:** "Warum haben wir 7 vor 3 subtrahiert?" (freier Text oder Multiple Choice)
2. **Ähnliches Problem vorhersagen:** "Falls die Gleichung 5x + 12 = 37 wäre, was würdest du zuerst tun?" (testet, ob die SuS das Prinzip auf eine neue Instanz übertragen können)

Falls die Selbsterklärung der SuS korrekt ist, gehe zum nächsten Problem weiter (eine ähnliche Gleichung, um die sofortige Anwendung zu testen). Falls die Selbsterklärung ungenau ist ("weil 7 kleiner als 22 ist"), gib eine kurze korrektive Erklärung und gehe dann weiter. Das Bottom-Out ist KEIN Fehlerzustand — es ist ein Lern-Event. Die Selbsterklärung konvertiert Antwort-Geben in Verstehens-Aufbau.

### Auslösebedinungen-Zusammenfassung

| Auslösetyp | Bedingung | Hinweisebene aktiviert |
|---|---|---|
| Zeitgesteuert | 60 Sekunden ohne Fortschritt | Ebene 1 |
| Fehlergesteuert | Falsches Endergebnis ohne gezeigten Weg | Ebene 1 |
| Fehlergesteuert | Falsche Operation (z.B. zuerst dividieren) | Ebene 2 |
| Fehlergesteuert | Richtige Operation nur auf einer Seite angewendet | Ebene 3 |
| Anforderungsgesteuert | SuS klickt "Hilfe"-Taste | Nächste Ebene in der Folge |
| Erschöpfung | Alle vorherigen Hinweise gegeben, immer noch steckengeblieben | Ebene 4 (Bottom-Out) |

### Adaptationsnotizen

**Für stärkere SuS:** Falls eine SuS erfolgreich 3+ ähnliche Gleichungen gelöst hat, überspringe Ebene 1 (sie kennen die Strategie). Starte bei Ebene 2, falls sie einen Fehler machen — ihr Verständnisproblem ist wahrscheinlich konzeptionell oder prozedural, nicht strategisch.

**Für schwächere SuS:** Falls eine SuS das Bottom-Out-Hinweis in den letzten 2 Problemen gebraucht hat, erwäge, von Hinweisen zu einem Worked Example zu wechseln — die SuS mag das Vorwissen fehlen, das Hinweise annehmen. Hinweise stützen Problemlösen; sie unterrichten keine Grundkonzepte.

**Für Hinweis-Missbraucher (Aleven & Koedinger, 2002):** Falls eine SuS schnell durch Hinweise klickt, ohne das Problem zu versuchen, füge eine "Versuch zuerst"-Aufforderung vor dem ersten Hinweis ein: "Versuch das Problem, bevor du Hilfe fragst. Was ist deine beste Vermutung für den ersten Schritt?" Dies adressiert das metakognitive Defizit: die SuS hat gelernt, Antworten aus Hinweisen zu extrahieren, statt zu denken.

---

## Bekannte Limitierungen

1. **Hinweisfolgen nehmen an, dass die SuS das Vorwissen hat, um von Hinweisen zu profitieren.** Ein Hinweis, der sagt "Was ist das Gegenteil von 7 addieren?" setzt voraus, dass die SuS inverse Operationen versteht. Falls sie das nicht tun, wird kein Hinweis in dieser Folge helfen — sie brauchen direkte Unterricht zum Vorwissenskonzept. Hinweisfolgen stützen PROBLEMLÖSEN, nicht WISSEN-AUFBAU. Eine SuS, die Grundwissen fehlt, braucht eine andere Intervention.

2. **Der optimale Hinweis-Auslöser ist immer noch eine offene Forschungsfrage.** Razzaq & Heffernan (2010) fanden, dass proaktive Hinweise schwächeren SuS helfen und reaktive Hinweise stärkeren helfen, aber das Feld hat sich nicht auf ein definitives Trigger-Modell geeinigt. Die Auslösebedingungen oben sind angemessene Defaults, nicht empirisch optimierte Schwellwerte. In einem echten ITS müssten diese durch A/B-Testing mit der realen SuS-Population kalibriert werden.

3. **Hinweis-Qualität hängt von genauer Fehlerdiagnose ab.** Die Hinweisfolge oben nimmt spezifische Fehlermuster an (falsche Operationsreihenfolge, einseitige Operation, inverse-Verwirrtheit). Falls der tatsächliche Fehler der SuS anders ist (z.B. ein Rechenfehler bei 22 - 7), werden die Hinweise vorbeilaufen. Effektive Hinweis-Systeme brauchen fehler-spezifische Verzweigung, nicht einfach lineare Kaskaden — was deutlich komplexer zu entwerfen ist.
