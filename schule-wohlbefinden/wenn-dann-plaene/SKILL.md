---
# AGENT SKILLS STANDARD FIELDS (v2)
name: wenn-dann-plaene
description: "Erstelle wenn-dann-Implementierungs-Pläne und WOOP-Pläne für spezifische SuS-Verhaltensänderungs-Ziele. Verwende diesen Skill, wenn SuS wissen was zu tun ist, aber Schwierigkeiten haben Gewohnheiten oder Routinen umzusetzen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-wohlbefinden/wenn-dann-plaene"
skill_name: "Implementierungs-Intention Designer"
domain: "schule-wohlbefinden"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Gollwitzer (1999) — Implementation intentions: strong effects of simple plans"
  - "Gollwitzer & Sheeran (2006) — Implementation intentions and goal attainment: a meta-analysis"
  - "Duckworth et al. (2013) — From self-control to self-regulation: a declaration of independence"
  - "Oettingen & Gollwitzer (2010) — Strategies of setting and implementing goals: mental contrasting and implementation intentions"
  - "Bettinger et al. (2012) — The role of application assistance and information in college decisions"
input_schema:
  required:
    - field: "target_behaviour"
      type: "string"
      description: "Das spezifische Verhalten oder Gewohnheit, die die SuS entwickeln muss — was sie STARTEN oder STOPPEN soll"
    - field: "student_level"
      type: "string"
      description: "Alter / Klassenstufe"
  optional:
    - field: "current_barrier"
      type: "string"
      description: "Was verhindert derzeit das Zielverhalten — das spezifische Hindernis"
    - field: "context"
      type: "string"
      description: "Ob das für Einzelne, kleine Gruppe oder ganze Klasse ist"
    - field: "student_profiles"
      type: "array"
      description: "Aus Context Engine: frühere Verhaltens-Muster, Ziele, Selbstregulations-Kapazität"
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach, falls die Implementierungs-Intention akademisch ist"
    - field: "time_horizon"
      type: "string"
      description: "Wie lange die Verhaltensänderung aufrechtzuerhalten ist — eine Lektion, eine Woche, ein Term"
output_schema:
  type: "object"
  fields:
    - field: "implementation_intention"
      type: "object"
      description: "Der spezifische wenn-dann Plan — der Trigger, das Verhalten und der Kontext"
    - field: "mental_contrasting"
      type: "object"
      description: "Das WOOP-Gerüst — Wunsch, Outcome, Hindernis, Plan"
    - field: "student_script"
      type: "string"
      description: "Die exakten Wörter für die SuS zu schreiben, sagen oder üben"
    - field: "monitoring_plan"
      type: "object"
      description: "Wie man überwacht, ob die Implementierungs-Intention genutzt wird und ob sie funktioniert"
chains_well_with:
  - "selbstwirksamkeit-aufbau"
  - "handlungsfaehigkeit-geruest"
  - "self-regulated-learning-strategy-selector"
  - "metacognitive-prompt-generator"
teacher_time: "2 minutes"
tags: ["implementierungs-intentionen", "Gollwitzer", "wenn-dann-plaene", "WOOP", "gewohnheiten", "selbstregulation", "verhaltensaenderung", "Lehrplan 21"]
---

# Implementierungs-Intention Designer

## Was dieser Skill tut

Entwirf spezifische „wenn-dann"-Pläne (Implementierungs-Intentionen), die SuS helfen, die Lücke zwischen Intention und Aktion zu überbrücken — vage Ziele („Ich werde mehr üben") in konkrete, situations-spezifische Pläne („Wenn es 16:30 nach der Schule ist, dann werde ich 25 Minuten Lückentext-Praxis für mein schwächstes Fach machen") zu drehen. Die kritische Einsicht aus Gollwitzers Forschung ist, dass die meisten Selbstregulations-Fehlschläge nicht Motivations-Fehlschläge sind — SuS wollen oft das Richtige tun, aber scheitern daran umzusetzen, weil ihnen ein spezifischer Plan für WANN, WO und WIE fehlt. Implementierungs-Intentionen automatisieren die Entscheidung durch Vor-Laden: die SuS entscheidet im Voraus genau, was sie in einer spezifischen Situation tun wird, was die Notwendigkeit für Willenskraft in dem Moment entfernt. Der Output umfasst die Implementierungs-Intention im korrekten wenn-dann Format, eine Mental-Contrasting-Übung (WOOP: Wish, Outcome, Obstacle, Plan), die Commitment stärkt, ein SuS-Skript zum Üben und einen Monitoring-Plan. KI ist wertvoll, weil das Entwerfen effektiver Implementierungs-Intentionen die spezifische situational Trigger identifizieren braucht (nicht „wenn ich Lust habe," sondern „wenn ich nach Schulschluss sitze"), Hindernisse antizipieren und das Verhalten kalibrieren, um erreichbar zu sein — Präzision, die generische Ziel-Setting-Ratschläge nicht haben.

## Evidence Foundation

Gollwitzer (1999) zeigte, dass Implementierungs-Intentionen — spezifische wenn-dann-Pläne, die situativer Hinweis an Zielverhalten verknüpfen — dramatisch die Wahrscheinlichkeit von Umgang erhöhen. Seine Meta-Analyse (Gollwitzer & Sheeran 2006) fand eine medium-to-large Effekt-Größe (d = 0.65) über 94 Studien: Menschen, die Implementierungs-Intentionen formten, waren signifikant eher ihre Ziele zu erreichen als Menschen mit äquivalenter Motivation, aber keinem spezifischen Plan. Der Mechanismus ist kognitiv: das wenn-dann-Format erstellt eine mentale Verbindung zwischen der Situation (das „wenn") und dem Verhalten (das „dann"), so dass das Treffen der Situation automatisch das beabsichtigte Verhalten aktiviert — ohne bewusste Überlegung oder Willenskraft zu brauchen. Oettingen & Gollwitzer (2010) kombinierten Implementierungs-Intentionen mit Mental-Contrasting (WOOP) und zeigten, dass die Kombination effektiver ist als eine allein: Mental-Contrasting schafft Commitment (durch die Person realisieren, das Hindernis ist real und ihr Plan ist nötig), und die Implementierungs-Intention bietet den spezifischen Aktions-Plan. Duckworth et al. (2013) wendeten das auf Bildung an, zeigend dass Implementierungs-Intentionen SuS mit Studien-Gewohnheiten, Hausaufgaben-Vollendung und Exam-Vorbereitung helfen. Bettinger et al. (2012) zeigten, dass einfache Implementierungs-Intention-Stil-Hilfe (spezifische Pläne für wann und wie Hochschul-Applikationen zu vollenden) College-Enrollment unter niedrig-Einkommen-SuS um 8 Prozentpunkte erhöhten — ein bemerkenswerter Effekt für eine minimal Intervention.

## Input Schema

Die Lehrperson muss angeben:
- **Zielverhalten:** Was die SuS tun muss. *z.B. „Hausaufgaben am Tag setzen anfangen, anstatt der Nacht zuvor" / „Retrieval-Praxis nutzen wenn Lehrplan-wiederholung, anstatt Re-Reading Notizen" / „Die Hand heben zum Beitrag in Klassendiskussion, anstatt stumm zu bleiben"*
- **SuS-Niveau:** Klassenstufe. *z.B. „9. Klasse"*

Optional (durch Context Engine injiziert, falls verfügbar):
- **Aktuelles Hindernis:** Was verhindert das Verhalten
- **Kontext:** Einzelne, kleine Gruppe oder ganze Klasse
- **SuS-Profile:** frühere Verhaltens-Muster, Ziele
- **Schulfach:** Das Fach
- **Zeitrahmen:** Wie lange die Änderung erhalten bleiben muss

## Prompt

```
Du bist Expert:in in Implementierungs-Intentionen und Verhaltensänderung mit tiefem Verständnis von Gollwitzers (1999) wenn-dann-Planungs-Forschung, Gollwitzer & Sheerans (2006) Meta-Analyse, Oettingen & Gollwitzers (2010) WOOP-Gerüst (Mental-Contrasting + Implementierungs-Intentionen), und Duckworths et al. (2013) Anwendung auf Bildung. Du verstehst, dass Implementierungs-Intentionen funktionieren, weil sie Entscheidungen automatisieren — die SuS entscheidet im Voraus, was sie in einer spezifischen Situation tun wird, was die Notwendigkeit für Willenskraft in dem Moment entfernt.

WICHTIG: Implementierungs-Intentionen müssen SPEZIFISCH sein. „Ich werde versuchender" ist ein Ziel-Intention, nicht Implementierungs-Intention. „Wenn ich nach dem Mittagessen sitze, werde ich mein Schreib-Notizbuch öffnen und 10 Minuten lang Entwürfe für das nächste Projekt schreibe" ist eine Implementierungs-Intention. Die Macht liegt in der Spezifität: ein präzis situativer Hinweis („wenn") gekoppelt mit präzisem Verhalten („dann").

WICHTIG: Das „wenn" muss eine SITUATION sein, nicht ein Gefühl. „Wenn ich mich motiviert fühle, werde ich Lehrplan-wiederholung" funktioniert nicht — Motivation ist unzuverlässig. „Wenn es 16:00 Uhr am Dienstag ist, werde ich Lehrplan-wiederholung" funktioniert, weil 16:00 Uhr am Dienstag eintritt unabhängig von wie die SuS sich fühlt.

Deine Aufgabe ist es, Implementierungs-Intentionen für folgende zu entwerfen:

**Zielverhalten:** {{target_behaviour}}
**SuS-Niveau:** {{student_level}}

Folgende optionale Informationen können vorliegen. Nutze das Verfügbare; ignoriere alle Felder mit „nicht vorgegeben."

**Aktuelles Hindernis:** {{current_barrier}} — falls nicht vorgegeben, identifiziere das wahrscheinlichste Hindernis basierend auf das Zielverhalten.
**Kontext:** {{context}} — falls nicht vorgegeben, entwirf für eine einzelne SuS.
**SuS-Profile:** {{student_profiles}} — falls nicht vorgegeben, entwirf für eine typische SuS auf diese Stufe.
**Schulfach:** {{subject_area}} — falls nicht vorgegeben, entwirf für allgemein akademisch.
**Zeitrahmen:** {{time_horizon}} — falls nicht vorgegeben, entwirf für anhaltende Verhaltensänderung (ein Term).

Wende diese Prinzipien an:

1. **Entwirf den wenn-dann-Plan (Gollwitzer 1999):**
   - **Wenn:** Ein spezifisch, beobachtbar situativer Hinweis. Zeit + Ort ist der stärkste Hinweis. „Wenn es 16:00 Uhr und ich sitze am Schreibtisch" ist besser als „Wenn ich Freizeit habe."
   - **Dann:** Eine spezifisch, erreichbar Aktion. „Dann öffne ich mein Wiederholungs-Notizbuch und vollende 5 Karteikarten" ist besser als „Dann wiederhole ich."
   - Das Verhalten muss klein genug sein, um ohne Widerstand zu starten. Anfangen ist schwerer als Weitermachen — entwirf das „dann", um das Start-Hindernis zu überwindend.

2. **Nutze Mental-Contrasting — WOOP (Oettingen & Gollwitzer 2010):**
   - **Wish:** Was möchte du erreichen? (Das Ziel.)
   - **Outcome:** Was wäre das Beste über Erreichen? (Die Motivation.)
   - **Obstacle:** Was ist das Haupt-innere Hindernis? (Nicht externe Hindernisse — innere: „Ich werde abgelenkt," „Ich fühle mich müde," „Ich glaube nicht, dass es helfen wird.")
   - **Plan:** Wenn [Hindernis], dann [Strategie]. Das ist die Implementierungs-Intention.
   - WOOP funktioniert, weil Mental-Contrasting (imaginierend das Positive Outcome UND das echte Hindernis) Commitment schafft — die SuS erkennt, dass das Hindernis real ist und dass sie einen Plan braucht.

3. **Antizipiere Hindernisse (Gollwitzer & Sheeran 2006):**
   - Für jede Implementierungs-Intention, entwirf einen „Coping Plan": Wenn Hindernis tritt auf, dann...
   - Allgemein Hindernisse: Ablenkung (Handy, Geschwister, Fernsehen), Müdigkeit, Vergessen, negatives Selbst-Gespräch („Wofür Punkt?").
   - Jedes Hindernis bekommt seinen eigenen wenn-dann-Plan.

4. **Mach es übbar:**
   - Implementierungs-Intentionen funktionieren am besten, wenn die SuS den wenn-dann-Plan wiederholt sagt oder schreibt.
   - Die SuS sollte das schreiben, sagen, visualisieren.
   - Physisch Artefakte (eine Karte am Schreibtisch, ein Handy-Alarm mit dem Plan als Label) dienen als extern Trigger.

5. **Entwirf Monitoring (Duckworth et al. 2013):**
   - Einfach Tracking: hat die SuS das Verhalten getan wenn der Hinweis auftraten? Ja/Nein.
   - Ein wöchentlich Check-in: „Wie viel Mal diese Woche trat die Situation auf? Wie viel Mal hast du folgend??"
   - Passe den Plan an, falls Umgang niedrig ist — der Plan möchte zu ehrgeizig sein, oder der Hinweis möchte nicht zuverlässig sein.

Gib dein Output in diesem exakten Format zurück:

## Implementierungs-Intention: [Zielverhalten]

**Zielverhalten:** [Was die SuS muss tun]
**Für:** [SuS-Niveau]

### Die Implementierungs-Intention

**Wenn** [spezifisch situativer Hinweis], **dann** [spezifisch Verhalten].

[Erklärung warum dieser Hinweis und dieses Verhalten gewählt sind]

### WOOP-Gerüst

**Wish:** [Das Ziel]
**Outcome:** [Bestes über Erreichen]
**Obstacle:** [Haupt-inneres Hindernis]
**Plan:** Wenn [Hindernis], dann [Strategie]

### SuS-Skript

[Die exakten Worte die SuS schreiben, sagen oder üben sollte — bereit zu nutzen]

### Coping-Pläne

Für jedes wahrscheinlich Hindernis:
**Wenn** [Hindernis], **dann** [Coping-Strategie].

### Monitoring-Plan

[Wie man überwacht, ob der Plan funktioniert — was zu messen, wann zu überprüfen, wann zu passen]

**Self-Check vor Output:** Verifiziere dass (a) das „wenn" eine spezifisch Situation, nicht ein Gefühl ist, (b) das „dann" eine spezifisch, klein, erreichbar Aktion ist, (c) WOOP eine echte inneres Hindernis enthält, (d) Coping-Pläne die wahrscheinlichsten Hindernisse adressieren, und (e) der Monitoring-Plan einfach genug ist für die SuS aufzuwarten.
```

## Beispiel-Output

**Szenario:** *Zielverhalten: „Retrieval-Praxis nutzen wenn Wiederholung, anstatt Re-Reading Notizen — die SuS derzeit „wiederholt" durch Highlighten und Re-Reading, das sich produktiv anfühlt, aber arm Gedächtnis produziert" / SuS-Niveau: „9. Klasse" / Aktuelles Hindernis: „Die SuS weiß, dass Retrieval-Praxis effektiver ist (das wurde ihnen gesagt), aber fällt zurück zu Re-Reading, weil Re-Reading einfacher anfühlt und komfortabel — Re-Reading gibt die Illusion von Vertrautheit, was wie Lernen sich anfühlt"*

---

## Implementierungs-Intention: Retrieval-Praxis während Wiederholung

**Zielverhalten:** Retrieval-Praxis (Selbst-Test) anstatt Re-Reading nutzen wenn Wiederholung
**Für:** 9. Klasse

### Die Implementierungs-Intention

**Wenn** ich sitze mein Schreibtisch zum Wiederholung, **dann** schließe ich mein Notizen, öffne eine Blank-Seite und schreibe alles auf, dass ich erinnern kann über das Thema für 5 Minuten bevor ich in meine Notizen schaue.

Dieser Hinweis wird gewählt, weil „sitze mein Schreibtisch zum Wiederholung" ein spezifisch, beobachtbar Moment ist, dass auf jede Wiederholuungs-Sitzung passiert. Das Verhalten (schließe Notizen, öffne Blank-Seite, schreibe aus Gedächtnis) ist spezifisch genug zu folgen ohne Entscheidungs-Treffen. Das „5 Minuten" Zeit-Limit macht es erreichbar-anfühlen — die SuS verpflichtet nicht für eine Stunde Retrieval-Praxis, nur 5 Minuten Gehirn-Dump bevor die etwas anderes tut. Einmal haben die angefangen, Weitermachen ist einfacher als Starten.

### WOOP-Gerüst

**Wish:** Ich möchte für meine Examen effektiv Wiederholung, so dass ich tatsächlich erinnere, was ich studierte.

**Outcome:** Das Beste würde sein, in Examen gehen, die vertrauensvoll sind, weil ich WISSEN dass ich erinnere das Material — nicht gerade es erkennung, aber tatsächlich es zurückrufen können. Ich würde mich weniger angespannt fühlen und mehr kontrollieren.

**Obstacle:** Mein Haupt-inneres Hindernis ist, dass Re-Reading einfacher anfühlt und komfortabel. Wenn ich meine Notizen Re-Read, alles sieht vertraut aus und ich fühle mich wie ich es weiß. Retrieval-Praxis fühlt schwerer und unbequemer — ich kann nicht alles erinnern, das macht mich fühlen wie ich nichts weiß. Ich vermeid das unbequem-Gefühl durch zurück zu Re-Reading zu gehen.

**Plan:** **Wenn** ich fühle den Drang Re-Read anstatt Selbst-Test, **dann** sage ich mir selbst: „Fühlen wie ich kann nicht erinnern ist der PUNKT — das ist das Gefühl meines Gehirns arbeiten schwerer, das heißt, ich bin tatsächlich lernend. Re-Reading fühlt gut, aber funktioniert nicht. Das fühlt hart, aber funktioniert."

### SuS-Skript

Schreibe das auf eine Karte und halte es an deinen Wiederholungs-Schreibtisch:

„**Jedes Mal wenn ich sitze zu Wiederholung:**
1. Schließe meine Notizen
2. Öffne eine Blank-Seite
3. Schreibe alles auf, das ich erinnern kann für 5 Minuten
4. DANN öffne meine Notizen und überprüfe, was ich verpasste
5. Fokussiere meine Wiederholung auf was ich VERPASSTE — das ist, wo das Lernen ist

**Wenn es sich hart anfühlt und ich will Re-Read stattdessen:**
Dieses Gefühl heißt, dass es funktioniert. Re-Reading ist eine Komfort-Decke. Retrieval-Praxis ist ein Workout. Das Workout ist, was mich stärker macht."

### Coping-Pläne

**Wenn** ich sitze zu Wiederholung und öffne meine Notizen sofort aus Gewöhnung, **dann** schließe ich physisch das Notizbuch, atme tief, und starte die Blank-Seite Gehirn-Dump. (Die physisch Akt von Schließen das Notizbuch ist der Trigger für das neu Verhalten.)

**Wenn** ich mache die Gehirn-Dump und kann kaum etwas erinnern (das fühlt entmutigend), **dann** erinnere ich mich selbst: „Die Gaps die ich just fand sind das wertvollste Teil dieser Wiederholuungs-Sitzung. Jetzt ich weiß GENAU, was fokussieren." Dann überprüfe ich meine Notizen und Selbst-Test mich auf die Dinge, die ich nicht erinnern konnte.

**Wenn** ich bin müde und will nicht Retrieval-Praxis machen, **dann** mache ich eine KLEINERE Version: 2 Minuten Gehirn-Dump anstatt 5. Etwas machen ist besser als nichts machen, und die Gewöhnung zählt mehr als die Dauer.

**Wenn** ich bekomme zu dem Ende der Woche und nicht Retrieval-Praxis einmal genutzt, **dann** schlag ich mich nicht selbst (das führt zu Vermeidung), aber setze einen spezifisch Alarm auf meinem Handy für Montag um 16:00 Uhr, dass sagt „Schließe deine Notizen. Blank-Seite. 5 Minuten. Los." Anfangen frisch ist besser als Aufgeben.

### Monitoring-Plan

**Täglich:** Nach jeder Wiederholuungs-Sitzung, markiere auf ein einfach Tracker: „Habe ich mit dem Gehirn-Dump angefangen? Ja / Nein." Halte den Tracker sichtbar — am Schreibtisch oder Handy Startseite.

**Wöchentlich:** Am Ende jeder Woche, zähle: wie viel Wiederholuungs-Sitzungen habe ich getan? Wie viel mit Retrieval-Praxis angefangen? Das Ziel ist nicht 100% sofort — es ist ein Trend oben. Woche 1: 2 aus 5. Woche 2: 3 aus 5. Woche 4: 5 aus 5.

**Vierzehntägig Check-in:** Die Lehrperson (oder die SuS selbst) überprüft: „Wird Retrieval-Praxis automatisch? Brauche ich immer noch die Karte, oder mache ich es ohne zu denken?" Wenn die SuS nicht länger die Karte braucht, die Implementierungs-Intention ist eine Gewöhnung geworden.

**Anpassungs-Regel:** Wenn Umgang ist unterhalb 50% nach zwei Wochen, der Plan braucht Anpassung. Mögliche Anpassungen: der Hinweis ist nicht zuverlässig (ändere die Zeit oder Ort), das Verhalten ist zu fordernd (reduziere zu 2 Minuten) oder das Hindernis hat nicht adressiert (identifiziere ein unterschiedlich inneres Hindernis und schaffe einen neu Coping-Plan).

---

## Bekannte Limitierungen

1. **Implementierungs-Intentionen funktionieren am besten, wenn Motivation bereits existiert.** Falls die SuS Wiederholung wirklich nicht interessiert, eine wenn-dann-Plan wird nicht Motivation schaffen — es bietet eine Brücke von Intention zu Aktion, nicht von Apathie zu Intention. Für SuS, die Motivation fehlt, pare das mit dem Motivations-Diagnostik & Task-Redesign Skill bevor du Implementierungs-Intentionen entwirfst.

2. **Implementierungs-Intentionen sind am effektivsten für einfach, diskrete Verhaltensweisen.** „Start Wiederholung mit Retrieval-Praxis" ist ein klar, diskrete Aktion. „Werde eine bessere SuS" ist zu kompliziert für eine einzelne Implementierungs-Intention. Komplexe Verhaltensänderung braucht mehrere Implementierungs-Intentionen die andere spezifisch Aktionen adressieren.

3. **Externe Hindernisse überreden Implementierungs-Intentionen.** Falls die Startseite-Umgebung der SuS Wiederholung verhindert (kein ruhig Platz, Betreuungs-Verantwortungen, Familie Unterbrechung), das am perfektesten entworfene Implementierungs-Intention wird nicht helfen. Die Lehrperson muss die SuS-Kontext verstehen und Umgebungs-Hindernisse adressieren bevor du Verhaltensänderung vom Planen allein erwartest.
