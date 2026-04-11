---
# AGENT SKILLS STANDARD FIELDS (v2)
name: zugehoerigkeit-klassenkultur
description: "Entwirf gezielte Interventionen, die Zugehörigkeit und Inklusion für spezifische Klassendynamiken stärken. Verwende diesen Skill, wenn SuS isoliert sind, sich Cliquen bilden oder neue SuS integriert werden müssen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-wohlbefinden/zugehoerigkeit-klassenkultur"
skill_name: "Zugehörigkeit & Klassenkultur-Designer"
domain: "schule-wohlbefinden"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Walton & Cohen (2011) — A brief social-belonging intervention improves academic and health outcomes of minority students"
  - "Yeager & Walton (2011) — Social-psychological interventions in education"
  - "Baumeister & Leary (1995) — The need to belong: desire for interpersonal attachments as a fundamental human motivation"
  - "Goodenow (1993) — Classroom belonging among early adolescent students"
  - "Murphy & Zirkel (2015) — Race and belonging in school: how anticipated and experienced belonging affect choice, persistence, and performance"
input_schema:
  required:
    - field: "classroom_context"
      type: "string"
      description: "Beschreibung der Klasse — Fach, Klassenstufe, relevante Gruppendynamik-Merkmale"
    - field: "belonging_concern"
      type: "string"
      description: "Das spezifische Zugehörigkeits-Anliegen — z.B. isolierte SuS, Cliquen, marginalisierte Gruppen, neue SuS"
  optional:
    - field: "student_level"
      type: "string"
      description: "Alter / Klassenstufe"
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "student_profiles"
      type: "array"
      description: "Aus Context Engine: Zusammensetzung, Sozialdynamiken, Besonderheiten"
    - field: "current_practices"
      type: "string"
      description: "Was die Lehrperson bereits tut um Zugehörigkeit aufzubauen"
    - field: "time_available"
      type: "string"
      description: "Wie viel Zeit für Zugehörigkeits-Praktiken verfügbar ist"
output_schema:
  type: "object"
  fields:
    - field: "belonging_practices"
      type: "array"
      description: "Spezifische, benannte Unterrichtspraktiken die Zugehörigkeit aufbauen"
    - field: "routine_integration"
      type: "object"
      description: "Wie man Zugehörigkeits-Praktiken in bestehende Routinen einbettet"
    - field: "language_guide"
      type: "object"
      description: "Spezifische Lehrersprache die Zugehörigkeit signalisiert vs. die sie untergräbt"
    - field: "monitoring_indicators"
      type: "array"
      description: "Beobachtbare Zeichen dass Zugehörigkeit sich verbessert"
chains_well_with:
  - "motivationsdiagnostik"
  - "trauma-informed-practice-designer"
  - "ruler-emotional-literacy-sequence"
  - "restorative-practice-protocol-designer"
teacher_time: "3 minutes"
tags: ["zugehoerigkeit", "inklusion", "klassenkultur", "beziehungen", "gleichberechtigung", "marginalisierung", "Lehrplan 21"]
---

# Zugehörigkeit & Klassenkultur-Designer

## Was dieser Skill tut

Generiert spezifische, implementierbare Klassenpraktiken, die Zugehörigkeit für alle SuS aufbauen — mit besonderem Fokus auf SuS, die am ehesten Zugehörigkeits-Unsicherheit erleben (neue SuS, Minderheits-SuS, SuS mit Spezialbedarf, DaZ-SuS, Transitions-SuS). Die kritische Einsicht von Walton & Cohens Forschung ist, dass Zugehörigkeit nicht ein Persönlichkeits-Merkmal ist — es ist eine Wahrnehmung, die hochgradig empfindlich ist gegenüber Umgebungs-Hinweisen. Kleine Signale aus dem Klassenzimmer („Du zählst hier," „Menschen wie du erfolgen hier," „Schwierigkeiten sind normal, nicht ein Zeichen, dass du nicht dazugehörst") können unverhältnismäßige Effekte auf Engagement, Durchhaltevermögen und Leistung haben. Der Output umfasst spezifische Praktiken (nicht generische Ratschläge wie „sei freundlich"), Sprachleitfäden (was zu sagen und was zu vermeiden), Integration in bestehende Routinen (damit Zugehörigkeitsaufbau keine Extra-Zeit braucht) und Monitoring-Indikatoren (wie man weiß, dass es funktioniert). KI ist wertvoll, weil Zugehörigkeits-Forschung subtile Umgebungs-Hinweise identifiziert, die die meisten Lehrpersonen nicht bewusst gestalten — und weil Praktiken, die Zugehörigkeit für marginalisierte SuS aufbauen, oft allen SuS nutzen.

## Evidence Foundation

Walton & Cohen (2011) zeigten, dass eine einzelne, kurze Zugehörigkeits-Intervention — die Normalisierung der Sorge dass „Menschen wie ich gehören hier nicht dazu" — die Leistungs-Kluft zwischen Schwarzen und Weißen SuS über drei Jahre um 52% schloss. Der Mechanismus ist nicht kompliziert: wenn SuS sich sorgen, dass sie nicht dazugehören, interpretieren sie Rückschläge als Bestätigungs-Beweis („Ich bekam eine niedrige Note, weil ich nicht hierher passe"). Wenn diese Sorge adressiert wird, wird der gleiche Rückschlag als Normal-Teil des Lernens interpretiert („Jeder:e kämpft manchmal damit"). Baumeister & Leary (1995) etablierten Zugehörigkeit als grundlegendes menschliches Bedürfnis — so grundlegend wie Nahrung und Sicherheit. Wenn es unerfüllt bleibt, werden kogn. Ressourcen umgeleitet vom Lernen zu Zugehörigkeits-Überwachung: „Mag mich die Lehrperson? Akzeptieren mich andere SuS? Bin ich willkommen hier?" Diese Überwachung konsumiert Arbeitsgedächtnis und Aufmerksamkeit, die zum Lernen gerichtet sein sollten. Goodenow (1993) fand dass Klassenzimmer-Zugehörigkeit Motivation, Anstrengung und Leistung in früher Adoleszenz vorhersagte — SuS, die dazugehörten, probieren mehr, hielten länger durch und lernten mehr. Yeager & Walton (2011) zeigten dass sozialsychologische Interventionen (Zugehörigkeit, Wachstums-Mindset, Zweck) am effektivsten sind, wenn sie „versteckt" sind — eingebettet in normale Klassenpraktik, nicht angekündigt als Spezial-Programme. Murphy & Zirkel (2015) erweiterten das um zu zeigen dass antizipierte Zugehörigkeit (erwartet dazuzugehören vs. erwartet nicht) die Wahlmöglichkeiten von SuS beeinflusst, bevor sie ankommen — SuS, die nicht erwartet dazuzugehören, wählen weniger häufig herausfordernde Kurse, treten Clubs nicht bei oder suchen Hilfe nicht.

## Input Schema

Die Lehrperson muss angeben:
- **Klassenzimmer-Kontext:** Die Klasse und ihre Merkmale. *z.B. „7. Klasse Deutsch, 28 SuS, erste Woche nach Primarschul-Sekundar-Übergang. Gemischtes Niveau. Mehrere SuS aus verschiedenen Primarschulen kennen niemanden." / „9. Klasse Chemie, kleine Klasse von 18, überwiegend Jungen, drei Mädchen die selten im Unterricht sprechen."*
- **Zugehörigkeits-Anliegen:** Das spezifische Problem. *z.B. „Mehrere SuS sind isoliert — sie interagieren mit niemandem und wirken unwohl" / „Zwei SuS sind kürzlich aus einem anderen Land angekommen und sprechen begrenzt Deutsch" / „Es gibt starke Cliquen und einige SuS sind von Gruppenarbeit ausgeschlossen"*

Optional (durch Context Engine injiziert, falls verfügbar):
- **SuS-Niveau:** Klassenstufe
- **Schulfach:** Das Fach
- **SuS-Profile:** Zusammensetzung, Sozialdynamiken
- **Aktuelle Praktiken:** Was die Lehrperson bereits tut
- **Verfügbare Zeit:** Zeit, die allokiert werden kann

## Prompt

```
Du bist Expert:in in Zugehörigkeit, Klassenkultur und sozialsychologischen Interventionen im Bildungsbereich mit tiefem Verständnis von Walton & Cohens (2011) Zugehörigkeits-Interventions-Forschung, Baumeister & Learys (1995) Zugehörigkeits-Theorie, Goodenows (1993) Arbeit zu Klassenzimmer-Zugehörigkeit und Yeager & Waltons (2011) Prinzipien für effektive sozialsychologische Interventionen. Du verstehst, dass Zugehörigkeit eine Wahrnehmung ist, die durch Umgebungs-Hinweise geformt wird — und dass Lehrpersonen diese Hinweise absichtlich gestalten können.

WICHTIG: Zugehörigkeits-Interventionen sind am effektivsten, wenn sie „versteckt" (Yeager & Walton 2011) sind — eingebettet in normale Klassenpraktiken, nicht angesagt als Spezial-Programme. EMPFEHLE NICHT, isolierte SuS hervorzuheben oder Zugehörigkeit zur expliziten Lektion-Thema zu machen. Das Gegenteil funktioniert oft, weil es Aufmerksamkeit auf die gleiche Zugehörigkeits-Drohung lenkt, die die Intervention adressieren will. Stattdessen entwirf Praktiken, die Zugehörigkeit zu allen kommunizieren, mit besonderem Nutzen zu denjenigen, die es am meisten brauchen.

WICHTIG: Zugehörigkeits-Praktiken müssen echt sein, nicht performativ. SuS — besonders Jugendliche — können Unauthentizität detektieren. „Erzwungenes Spaß" das sich künstlich anfühlt, ist kontraproduktiv. Die Praktiken sollten sich wie ein natürlicher Teil anfühlen, wie das Klassenzimmer funktioniert.

Deine Aufgabe ist es, Zugehörigkeits-Praktiken für folgende zu entwerfen:

**Klassenzimmer-Kontext:** {{classroom_context}}
**Zugehörigkeits-Anliegen:** {{belonging_concern}}

Folgende optionale Informationen können vorliegen. Nutze das Verfügbare; ignoriere alle Felder mit „nicht vorgegeben."

**SuS-Niveau:** {{student_level}} — falls nicht vorgegeben, inferiere aus dem Klassenzimmer-Kontext.
**Schulfach:** {{subject_area}} — falls nicht vorgegeben, inferiere aus dem Kontext.
**SuS-Profile:** {{student_profiles}} — falls nicht vorgegeben, entwirf für das angegebene Zugehörigkeits-Anliegen.
**Aktuelle Praktiken:** {{current_practices}} — falls nicht vorgegeben, entwirf vom Standard-Klassenpraktik-Baseline.
**Verfügbare Zeit:** {{time_available}} — falls nicht vorgegeben, entwirf Praktiken, die in bestehender Unterrichtszeit passen (keine Extra-Zeit erforderlich).

Wende diese evidenzbasierten Prinzipien an:

1. **Normalisiere Schwierigkeiten (Walton & Cohen 2011):**
   - Wenn SuS kämpfen, muss die Botschaft sein „Kämpfen ist normal — jede:r findet das anfangs schwer" nicht „Du brauchst Extra-Hilfe" (was signalisieren kann „Du gehörst nicht in diese Gruppe").
   - Nutze Struggle-Geschichten: „Wenn ich das zuerst lernte, fand ich es verwirrend" oder „Letztes Jahr fand auch diese Klasse das herausfordernd anfangs."
   - Schwierigkeiten sollten als UNIVERSELL geframed werden, nicht individuell.

2. **Signalisiere dass „Menschen wie du" hier erfolgreich sind (Murphy & Zirkel 2015):**
   - SuS müssen Beispiele sehen von Menschen wie ihnen, die in diesem Fach und Klassenzimmer erfolgreich sind.
   - Repräsentation in Materialien, Beispielen und Geschichten zählt.
   - Nutze Sprache, die explizit einschliesst: „In dieser Klasse..." / „Jede:r hier..."

3. **Schaffe strukturierte Interaktion (Goodenow 1993):**
   - Isolierte SuS starten Interaktion selten selbst. Die Lehrperson muss Gelegenheiten SCHAFFEN durch strukturierte Paar/Gruppenarbeit.
   - Struktur ist essentiell: „Sprecht mit deinem:er Partner:in über..." gibt isolierten SuS Erlaubnis zu interagieren ohne sozialen Risiko des Initiierens.
   - Rotate Partner:innen regelmäßig — erlaube nicht Selbstwahl (was bestehende Cliquen verfestigt), aber mach nicht offensichtlich, dass du Beziehungen organisierst.

4. **Baue Zugehörigkeit durch Kontribution auf, nicht nur Inklusion (Yeager & Walton 2011):**
   - Inklusion (einen Platz haben, dürfen partizipieren) ist nicht dasselbe wie Zugehörigkeit (sich wertvoll, nötig, wichtig fühlen).
   - SuS fühlen Zugehörigkeit, wenn sie BEITRAGEN — wenn ihre Ideen zählen, wenn die Gruppe ihre Eingabe braucht, wenn sie etwas hinzufügen, das andere nicht haben.
   - Entwirf Aufgaben, wo jede:r SuS eine Rolle hat, auf die die Gruppe angewiesen ist.

5. **Überwache und passe an (Goodenow 1993):**
   - Zugehörigkeit wird nicht in einer Lektion gebaut. Es braucht konsistente Signale über Zeit.
   - Achte auf Indikatoren: wer spricht in der Klasse, wer macht Augenkontakt, wer kommt bereitwillig vs. widerstrebend, wer wird für Gruppenarbeit ausgewählt, wer bleibt außen vor.

Gib dein Output in diesem exakten Format zurück:

## Zugehörigkeits-Praktiken: [Klassenzimmer-Kontext]

**Kontext:** [Zusammenfassung]
**Zugehörigkeits-Anliegen:** [Das spezifische Problem]

### Empfohlene Praktiken

Für jede Praktik (4–6):
**Praktik [N]: [Name]**
- **Was zu tun ist:** [Spezifische, implementierbare Schritte]
- **Wann es zu tun ist:** [Wo es in die Lektion oder Routine passt]
- **Warum es Zugehörigkeit aufbaut:** [Welches Prinzip es adressiert]
- **Wie sieht es aus, wenn es funktioniert:** [Beobachtbare Indikatoren]

### Sprachleitfaden

**Phrasen, die Zugehörigkeit aufbauen:**
[Spezifische Lehrersprache mit Erklärung, warum jede Phrase funktioniert]

**Phrasen, die vermieden werden sollten:**
[Spezifische Lehrersprache, die Zugehörigkeit untergräbt, mit Erklärung]

### Routinen-Integration

[Wie man diese Praktiken in bestehende Klassenpraktiken einbettet — nicht als Add-ons, sondern als Teil, wie die Klasse funktioniert]

### Monitoring-Indikatoren

[Was zu beobachten ist, um zu wissen, ob Zugehörigkeit sich verbessert — beobachtbare Zeichen, nicht Survey-Daten]

**Self-Check vor Output:** Verifiziere dass (a) Praktiken spezifisch und implementierbar sind, nicht generische Ratschläge, (b) Praktiken „versteckt" sind — in normale Routinen eingebettet, nicht angesagt als Zugehörigkeits-Programme, (c) Praktiken allen SuS nutzen, während sie das angegebene Anliegen besonders adressieren, (d) keine Praktik isolierte oder zieht Aufmerksamkeit auf isolierte SuS, und (e) der Sprachleitfaden unterscheidet Zugehörigkeits-aufbauende Sprache von Zugehörigkeits-bedrohender Sprache.
```

## Beispiel-Output

**Szenario:** *Klassenzimmer-Kontext: „7. Klasse Deutsch, 28 SuS, erste Woche nach Primarschul-Übergang. Gemischtes Niveau. SuS kamen aus 6 verschiedenen Primarschulen — manche kennen mehrere Klassenkamerad:innen, andere kennen niemanden. Die Klasse ist generell gut-benommen, aber sehr leise — die meisten SuS werden nicht freiwillig Antworten geben oder zu Diskussionen beitragen." / Zugehörigkeits-Anliegen: „Mehrere SuS sind isoliert — sie sitzen allein, sprechen mit niemandem vor/nach der Klasse und wirken visibel unwohl während Gruppenarbeit. Zwei SuS haben begonnen, die Lektion zu vermeiden (verspätete Ankunft, Bitten zum Toilet-Gang häufig). Ich mache mir Sorgen, dass sie sich nicht dazugehörig fühlen."*

---

## Zugehörigkeits-Praktiken: 7. Klasse Deutsch Post-Übergang

**Kontext:** 7. Klasse Deutsch, 28 SuS, erste Woche Post-Übergang aus verschiedenen Primarschulen
**Zugehörigkeits-Anliegen:** Mehrere isolierte SuS zeigen Vermeidungs-Verhalten; Klasse sehr leise — niedrige Partizipation

### Empfohlene Praktiken

**Praktik 1: Strukturiertes Partner-Sprechen mit Rotierenden Partner:innen**
- **Was zu tun ist:** Mindestens zweimal pro Lektion nutze „sprecht mit deiner:deinem Partner:in" — aber WEISE Partner:innen zu, anstatt SuS wählen zu lassen. Nutze einen Sitzplan, der alle 2 Wochen wechselt. Paare isolierte SuS mit warmen, sozial sicheren SuS (nicht andere isolierte SuS — das verstärkt Isolation, anstatt Brücken zu bauen). Nutze einen Timer (90 Sekunden) und einen spezifischen Prompt: „Sag deiner:deinem Partner:in eine Sache, die dir am Anfang dieses Textes aufgefallen ist."
- **Wann es zu tun ist:** Nach jeder Frage, die Nachdenken braucht. Ersetze „Meldepflicht" (was 4–5 SuS dominieren lässt) mit „sprecht zuerst mit deinem:er Partner:in, dann frag ich ein paar von euch."
- **Warum es Zugehörigkeit aufbaut:** Strukturierte Paare schaffen Interaktion ohne sozialen Risiko. Die SuS muss nicht wählen mit wem zu sprechen (Angst-auslösend für isolierte SuS), die Aufgabe ist klar (keine Mehrdeutigkeit über was zu sagen) und der Timer gibt einen sicheren Endpunkt. Über 2-Wochen-Rotationen wird jede SuS mit mehreren Klassenkamerad:innen gearbeitet haben — aufbauend auf der niedriger-level-Vertrautheit, die Zugehörigkeits-Fundament ist.
- **Wie sieht es aus, wenn es funktioniert:** Isolierte SuS beginnen ohne Zögern mit ihrer:ihrem zugewiesenen Partner:in zu sprechen. Nach mehreren Wochen merkst du vielleicht, dass SuS kurz vor/nach der strukturierten Aufgabe plaudern. Das ist das Zugehörigkeits-Signal — sie sind vom „zugewiesener Interaktion" zu „freiwilliger Interaktion" vorrückt.

**Praktik 2: Kontributions-Rollen**
- **Was zu tun ist:** Während Gruppenarbeit, gib jedem:er Gruppenmitglied eine Rolle, die die Gruppe nicht ohne erfüllen kann: Leser:in (liest Text laut vor), Recorder (schreibt Gruppenideen auf), Reporter:in (teilt mit Klasse), Challenger (fragt „Aber was wäre, wenn...?"). Rotate Rollen über Lektionen. WEISE isolierte SuS NICHT früh zum:zur Reporter:in zu — fang mit Leser:in oder Recorder an (niedrige soziale Exposition) und rücke zu Reporter:in vor, wenn sie sicher sind.
- **Wann es zu tun ist:** Jedes Mal Gruppenarbeit passiert.
- **Warum es Zugehörigkeit aufbaut:** Zugehörigkeit wird durch KONTRIBUTION aufgebaut (Yeager & Walton 2011). Wenn eine SuS eine Rolle hat, die die Gruppe braucht, wechseln sie von „geduldet Präsenz" zu „wertvoll Mitglied." Die Rolle macht ihre Kontribution sichtbar ohne dass sie sich selbst einbringen muss.
- **Wie sieht es aus, wenn es funktioniert:** Isolierte SuS beginnen, Ownership ihrer Rolle zu nehmen. Gruppenmitglieder fangen an, die isolierte SuS beim Namen anzusprechen: „Was hast du aufgeschrieben?" (was signalisiert, dass sie nötig sind). Die SuS beginnt Rollen anzubieten, anstatt zu warten, um zugewiesen zu werden.

**Praktik 3: Normalisieren von Schwierigkeiten durch Geschichten**
- **Was zu tun ist:** Wenn eine herausfordernde Aufgabe einführst, normalisiere kurz die Schwierigkeit: „Das ist eine der schwersten Dinge in 7. Deutsch — jedes Jahr finden SuS das anfangs tückisch. Am Ende der Unit wirst du dich fragen, warum das so schwer schien. Aber gerade jetzt, wenn es sich verwirrend anfühlt, ist das völlig normal." Mach das VOR SuS versuchen die Aufgabe, nicht nach sie gescheitert haben.
- **Wann es zu tun ist:** Am Anfang jeder herausfordernden neuen Konzept oder Aufgabe.
- **Warum es Zugehörigkeit aufbaut:** Walton & Cohen (2011) zeigten dass SuS, die sich um Zugehörigkeit sorgen, Schwierigkeiten als Beweis interpretieren, dass sie nicht dazugehören („Ich kämpfe, weil ich nicht hier sein sollte"). Das Voraus-Normalisieren von Schwierigkeiten präemptiert das: Schwierigkeiten wird zum Beweis, dass die Aufgabe hart ist (universell), nicht dass die SuS nicht dazugehört (individuell). Der Ausdruck „jedes Jahr" ist wichtig — er signalisiert, dass kämpfende SuS Teil eines normalen Musters sind, nicht Ausreißer:innen.
- **Wie sieht es aus, wenn es funktioniert:** SuS fangen an zu sagen „Das ist hart" ohne Scham — sie haben internalisiert, dass Schwierigkeiten erwartet ist, nicht bedrohlich. SuS, die früher zusammengebrochen wären, wenn sie steckenbleiben, fangen an, um Hilfe zu bitten stattdessen — weil um Hilfe bitten nicht länger sich anfühlt wie „zugeben, ich gehöre nicht hier."

**Praktik 4: Name-reiche Klassenzimmer**
- **Was zu tun ist:** Nutze SuS-Namen konstant und korrekt. Lerne sie in der ersten Woche (nutze ein Foto des Sitzplans). Nutze Namen, wenn du Fragen stellst („Aisha, was denkst du?"), wenn du Rückmeldung gibst („Das ist ein wirklich interessanter Punkt, Marcus"), wenn du SuS begrüßt („Guten Morgen, Priya — ich freue mich, dass du hier bist") und wenn du positives Verhalten beschreibst („Ich sehe, Leon hat schon angefangen, den Text zu annotieren").
- **Wann es zu tun ist:** In jeder Interaktion, jede Lektion.
- **Warum es Zugehörigkeit aufbaut:** Der Name einer SuS ist das grundlegendste Signal, gesehen zu werden. In der Primarschule kannten Lehrpersonen den Namen jeder SuS. In der Sekundarstufe können SuS Wochen gehen ohne dass eine Lehrperson ihren Namen nutzt. Für isolierte SuS ist das Hören ihres Namens — gesprochen warm, in positivem Kontext — ein direktes Signal: „Du wirst gesehen. Du bist gekannt. Du existierst in diesem Raum."
- **Wie sieht es aus, wenn es funktioniert:** SuS machen Augenkontakt, wenn du ihren Namen sagst. SuS antworten bereitwilliger, wenn sie beim Namen angesprochen als wenn angesprochen „du" oder „alle". Isolierte SuS scheinen weniger unsichtbar — sie schauen auf, sie engagieren, sie existieren im sozialen Raum des Klassenzimmers.

**Praktik 5: Exit-Routinen, die jede:n einschließen**
- **Was zu tun ist:** Beende jede Lektion mit einer 30-Sekunden-Routine, die jede SuS einschließt: eine schnelle Runde („Ein Wort, um zu beschreiben, was du heute gelernt hast — geht um den Tisch"), ein geschriebenes Exit-Ticket, das die Lehrperson liest und antwortet (eine persönliche Verbindung), oder ein „3-2-1" (3 Dinge gelernt, 2 Fragen, 1 Sache, die du interessant fandest — geschrieben, nicht laut gesagt). Antworte auf Exit-Tickets mit kurzen persönlichen Kommentaren: „Tolle Frage, Fatima — das werden wir nächste Lektion erkunden."
- **Wann es zu tun ist:** Letzte 2 Minuten jede Lektion.
- **Warum es Zugehörigkeit aufbaut:** Eine Exit-Routine, die jede SuS berührt, sichert, dass niemand unsichtbar geht. Die Rückmeldung der Lehrperson („Tolle Frage, Fatima") ist ein Zugehörigkeits-Signal — es sagt „Ich habe gelesen, was du geschrieben hast. Deine Gedanken zählen für mich." Für isolierte SuS kann das die einzige persönliche Interaktion mit der Lehrperson in einer Lektion sein.
- **Wie sieht es aus, wenn es funktioniert:** SuS fangen an, detailliertere Exit-Tickets zu schreiben (sie wissen, die Lehrperson liest sie). SuS, die früher widerstrebend waren zu teilen, fangen an zur Runde beizutragen. Die Routine wird etwas, das SuS erwarten — und ihre Abwesenheit wird bemerkt.

### Sprachleitfaden

**Phrasen, die Zugehörigkeit aufbauen:**
- „In dieser Klasse..." — signalisiert Gruppenmitgliedschaft. „In dieser Klasse machen wir alle Fehler — das ist wie wir lernen."
- „Ich habe bemerkt, dass..." — signalisiert, dass man gesehen wird. „Ich bemerkte, du hast eine ungewöhnliche Zitat gewählt — erklär mir warum."
- „Das ist ein wirklich interessanter Weg das zu denken" — signalisiert, dass die Perspektive der SuS WERT hat, nicht nur Korrektheit.
- „Alle fanden das letztes Jahr schwer auch" — normalisiert Schwierigkeiten. Universell, nicht individuell.
- „Was denkst du?" (angesprochen zu einer spezifischen SuS beim Namen, nach Paar-Sprechen) — lädt zu Kontribution ein nach Zeit zum Vorbereiten. Das ist sicher, weil sie schon ihre Antwort mit Partner:in geübt haben.
- „Wir brauchen deine Ideen zu das" — signalisiert, dass die Kontribution der SuS nötig ist, nicht nur toleriert.

**Phrasen, die vermieden werden sollten:**
- „Komm schon, sei nicht schüchtern" — labelt die SuS als „schüchtern" (Identität), anstatt die Umgebung (Bedingung) zu adressieren. Zugehörigkeit handelt von der Umgebung, nicht der Person.
- „Will jemand...?" — Selbstwahl bevorzugt sichere SuS und zwingt isolierte SuS öffentlich zu entscheiden nicht teilzunehmen. Nutze strukturierte Züge stattdessen.
- „Du solltest versuchen, mehr Freunde zu machen" — macht Zugehörigkeit die Verantwortung der SuS. Zugehörigkeit ist ein Umgebungs-Design-Problem, nicht ein soziale-Fähigkeiten-Problem.
- „Ich weiß, das ist für manche von euch hart" — teilt die Klasse in diejenigen, die es hart finden und diejenigen, die nicht. Nutze „das ist hart" (universell) stattdessen.
- „Naja, gut versucht" (als die SuS scheiterte) — Herabsetzen. Suggeriert, die Lehrperson erwartet Scheitern. „Das ist noch nicht ganz richtig — hier ist wie du dort gelangst" ist respektvoller.

### Routinen-Integration

Diese Praktiken brauchen KEINE zusätzliche Zeit:
- **Paar-Sprechen** ersetzt „Meldepflicht" — gleiche Zeit, bessere Partizipation.
- **Kontributions-Rollen** ersetzen unstrukturierte Gruppenarbeit — gleiche Zeit, mehr Gerechtigkeit.
- **Normalisieren von Schwierigkeiten** dauert 15 Sekunden vor einer Aufgabe — keine Extra-Zeit.
- **Namen-Nutzung** wird in bestehende Interaktionen eingebettet — keine Extra-Zeit.
- **Exit-Routine** dauert 2 Minuten, ersetzt „pack auf und geh" — minimale Extra-Zeit, großer Zugehörigkeits-Gewinn.

Der Schlüssel-Wechsel ist nicht ADDING Zugehörigkeits-Aktivitäten, sondern REDESIGNING bestehende Routinen, so dass sie Zugehörigkeit aufbauen. Das ist Yeager & Waltons (2011) „versteckt"-Prinzip: die effektivsten Zugehörigkeits-Interventionen schauen nicht wie Zugehörigkeits-Interventionen aus. Sie schauen wie gutes Unterrichten.

### Monitoring-Indikatoren

Achte auf diese Veränderungen über 4–6 Wochen:
1. **Ankunfts-Verhalten:** Kommen isolierte SuS pünktlich an, oder vermeiden sie immer noch Entry? Treten sie außerhalb ein oder laufen sie herein?
2. **Körpersprache während Paar-Sprechen:** Wenden sie ihren:ihren Partner:in zu, machen Augenkontakt, sprechen mit normaler Lautstärke? Oder wenden sie ab, flüstern, schauen zur Lehrperson um Rettung?
3. **Freiwillige Interaktion:** Sprechen isolierte SuS je zu anderen SuS ungeprompted — vor der Lektion, während Übergängen, am Ende?
4. **Aufgaben-Engagement:** Fangen sie Aufgaben innerhalb der ersten Minute an, oder verzögern? Schreiben/arbeiten/annotieren sie, oder sitzen idle?
5. **Antwort auf Namen:** Schauen sie auf, wenn du ihren Namen nutzt? Wirken überrascht (waren unsichtbar) oder sicher (nutzt der Umgang)?
6. **Hilfe-Suchen:** Bitten sie um Hilfe, wenn sie steckenbleiben, oder sitzen silbern? Hilfe-Suchen braucht ein grundlegendes Level von Zugehörigkeit — das Glaube, dass die Lehrperson antwortet und nicht verurteilt.

---

## Bekannte Limitierungen

1. **Zugehörigkeits-Interventionen sind slow-burn, nicht sofort-Fixes.** Die Praktiken oben werden Klassenkultur nicht in einer Woche umwandeln. Zugehörigkeit wird über konsistente Signale über Zeit aufgebaut — Wochen und Monate, nicht Tage. Lehrpersonen, die sofortige Ergebnisse erwarten, können effektive Praktiken zu früh aufgeben.

2. **Manche Zugehörigkeits-Bedrohungen stammen außerhalb des Klassenzimmers.** Eine SuS, die Bullying in der Pause erfährt, Familie-Schwierigkeiten oder Identitäts-Ringen erlebt, wird ihre Zugehörigkeits-Bedürfnisse nicht vollständig durch Klassenpraktiken erfüllt. Die Praktiken oben adressieren die Klassenzimmer-Umgebung, die innerhalb der Lehrerkontrole ist — aber die Lehrperson sollte auch Pastoral-Systeme für SuS verbinden, deren Zugehörigkeits-Bedürfnisse über das Klassenzimmer hinaus gehen.

3. **Zugehörigkeits-Praktiken müssen echt sein.** Falls eine Lehrperson SuS-Namen nutzt, aber der Ton kalt ist, oder Rollen zuweist, aber die Kontributionen nicht wertet, werden die Praktiken performativ — und SuS werden die Unauthentizität detektieren. Die Praktiken funktionieren, weil sie echte Anerkennung kommunizieren. Sie können nicht mechanisch ohne die unterliegende Gesinnung implementiert werden.
