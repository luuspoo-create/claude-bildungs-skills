---
# AGENT SKILLS STANDARD FIELDS (v2)
name: selbstwirksamkeit-aufbau
description: "Entwirf eine Beherrschungs-Erfahrungs-Sequenz, die systematisch Schüler:innen-Vertrauen in eine Fähigkeit aufbaut, die sie vermeiden. Verwende diesen Skill, wenn SuS sagen ‚Ich kann das nicht', Aufgaben vermeiden oder gelernte Hilflosigkeit zeigen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-wohlbefinden/selbstwirksamkeit-aufbau"
skill_name: "Selbstwirksamkeit-Aufbau-Sequenz"
domain: "schule-wohlbefinden"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Bandura (1977, 1997) — Self-efficacy: toward a unifying theory of behavioural change"
  - "Bandura (1986) — Social Foundations of Thought and Action: four sources of self-efficacy"
  - "Schunk & Pajares (2009) — Self-efficacy theory in educational contexts"
  - "Hattie (2009) — Visible Learning: self-efficacy as one of the strongest predictors of achievement"
  - "Dweck (2006) — Mindset: the new psychology of success"
input_schema:
  required:
    - field: "target_skill"
      type: "string"
      description: "Die Fähigkeit oder Bereich, wo die SuS Vertrauen fehlt — was sie glauben, können nicht tun"
    - field: "student_level"
      type: "string"
      description: "Alter / Klassenstufe"
    - field: "current_avoidance"
      type: "string"
      description: "Was die SuS derzeit tut, um die Aufgabe zu vermeiden — das beobachtbare Verhalten, dass niedrig Selbstwirksamkeit signalisiert"
  optional:
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "student_profile"
      type: "string"
      description: "Aus Context Engine: frühere Erreichung, bekannt Stärken, Geschichte mit dieser Fähigkeit"
    - field: "previous_attempts"
      type: "string"
      description: "Was wurde versucht bevor, um Vertrauen aufzubauen — was funktioniert und was nicht"
    - field: "student_strengths"
      type: "string"
      description: "Was die SuS IST vertrauensvoll über — Bereich von bestehende Selbstwirksamkeit"
output_schema:
  type: "object"
  fields:
    - field: "efficacy_diagnostic"
      type: "object"
      description: "Analyse von, welche Quelle von Selbstwirksamkeit ist am zugänglichsten für diese SuS"
    - field: "task_sequence"
      type: "array"
      description: "Eine Sequenz von 4–6 Aufgaben, dass progressiv Selbstwirksamkeit aufbaut von der aktuell Startpunkt der SuS"
    - field: "attribution_coaching"
      type: "string"
      description: "Spezifisch Sprache zum Attribut Erfolg zu Anstrengung und Strategie, anstatt Fähigkeit oder Glück"
    - field: "teacher_scripts"
      type: "array"
      description: "Genau Phrasen, dass die Lehrperson zu jeder Stufe nutzen kann, um Selbstwirksamkeit zu verstärken"
chains_well_with:
  - "motivationsdiagnostik"
  - "handlungsfaehigkeit-geruest"
  - "differentiation-adapter"
  - "practice-problem-sequence-designer"
teacher_time: "3 minutes"
tags: ["selbstwirksamkeit", "vertrauen", "Bandura", "beherrschungs-erfahrungen", "attributions-coaching", "wachstums-mindset", "Lehrplan 21"]
---

# Selbstwirksamkeit-Aufbau-Sequenz

## Was dieser Skill tut

Entwirf eine strukturiert Sequenz von Aufgaben, dass systematisch Selbstwirksamkeit für ein:e SuS aufbaut, das glaubt, können nicht ein spezifisch Fähigkeit — nutzend Banduras vier Quellen von Selbstwirksamkeit (Beherrschungs-Erfahrungen, Stellvertretend Erfahrung, Verbale Überzeugung und Physiologische Zustände) in die rechte Ordnung und Kombination für die spezifisch SuS. Die kritische Einsicht von Banduras Forschung ist, dass Selbstwirksamkeit nicht aufgebaut wird, indem man SuS sagt, können sie tun (Verbale Überzeugung allein ist schwach), aber durch Ingenieuring echte Erfolgs-Erfahrungen — start von, was die SuS CAN tun und baue inkrementell, so dass jedem Schritt Beweis von Fähigkeit bietet. Der Output ist eine gebrauchs-fertig Aufgaben-Sequenz plus spezifische Lehrersprache für Attributions-Coaching — hilft SuS ihr Erfolg zum Anstrengung und Strategie attribuieren (das kontrollieren können), anstatt Fähigkeit (was fest fühlt) oder Glück (was zufällig fühlt). KI ist wertvoll, weil das Entwerfen einer effektiver Selbstwirksamkeit-Sequenz das Kennen der Voraussetzungs-Struktur der Fähigkeit braucht (was simpel Version können die SuS erfolgreich), der aktuell Startpunkt der SuS und die präzis Inkremente, dass sich challenging, aber erreichbar anfühlen — eine Kalibrierung, dass variiert für jede SuS-Fähigkeit-Kombination.

## Evidence Foundation

Bandura (1977, 1997) identifiziert Selbstwirksamkeit — das Glaube in Fähigkeit zu erfolgreich an einer spezifisch Aufgabe — als zentral Determinant von Mensch-Motivation und Verhalten. Selbstwirksamkeit ist Domäne-spezifisch: eine SuS können hochgradig Selbstwirksamkeit für Lesend aber niedrig für Mathe haben. Das ist auch veränderbar — anders als Merkmal Selbst-Wert, Selbstwirksamkeit kann durch spezifisch Interventionen geändert werden. Bandura (1986) identifiziert vier Quellen von Selbstwirksamkeit in Ordnung von Macht: (1) Beherrschungs-Erfahrungen — tatsächlich erfolgreich an die Aufgabe, das ist durch weit die stärkste Quelle; (2) Stellvertretend Erfahrung — beobachtend jemand ähnlich erfolgreich („Falls können, mögen ich auch können"); (3) Verbale Überzeugung — wird gesagt, können tun, das ist die schwächste Quelle, aber kann die anderen unterstützen; und (4) Physiologisch und emotional Zustände — wie der Körper sich anfühlt während die Aufgabe (ruhig vs. angespannt). Hattie (2009) fand Selbstwirksamkeit zu sein eine der stärksten Einzelne-Level Vorhersager von akademisch Erreichen (Effekt-Größe 0.92), stärker als früher Erreichen in manche Analyse. Schunk & Pajares (2009) zeigten, dass Selbstwirksamkeit akademisch Resultat voraussagt, auch wenn kontrollierend für tatsächlich Fähigkeit — SuS, dass glaube können erfolgreich outführung gleich-fähig SuS, dass zweifeln sie. Dweck (2006) komplementiert Banduras Rahmen mit Forschung auf implizit Theorien von Intelligenz — SuS mit „Fest Mindset" (glaube Fähigkeit ist angeboren) sind mehr verletzbar zu Selbstwirksamkeit Schaden nach Scheitern als SuS mit „Wachstum Mindset" (glaube Fähigkeit ist entwickelt durch Anstrengung). Aber Mindset-Interventionen allein sind schwach (Sisk et al. 2018) — das müssen kombiniert mit echte Beherrschungs-Erfahrungen zu Selbstwirksamkeit ändern.

## Input Schema

Die Lehrperson muss angeben:
- **Ziel-Fähigkeit:** Was die SuS glaubt, können nicht tun. *z.B. „Schreiben — die SuS sagt ‚Ich kann nicht schreiben' und produziert minimal Text" / „Kopf-Rechnen — die SuS friert ein und sagt ‚Ich bin nicht gut in Mathe'" / „Vorlesen — die SuS weigert sich zu lesen in Klasse"*
- **SuS-Niveau:** Klassenstufe. *z.B. „7. Klasse"*
- **Aktuelle Vermeidung:** Was die SuS stattdessen tut. *z.B. „Schreibt einen Satz dann stopp und sagt ‚Ich weiß nicht, was zu schreiben'" / „Fragt sofort um Hilfe auf jede Frage ohne zu versuchen" / „Legt Kopf auf Schreibtisch und weigert sich zu starten"*

Optional (durch Context Engine injiziert, falls verfügbar):
- **Schulfach:** Das Fach
- **SuS-Profil:** frühere Erreichung, Stärken, Geschichte
- **Frühere Versuche:** Was wurde versucht bevor
- **SuS-Stärken:** Bereiche von bestehende Vertrauen

## Prompt

```
Du bist Expert:in in Selbstwirksamkeit und Motivation mit tiefem Verständnis von Banduras (1977, 1997) Selbstwirksamkeit-Theorie, sein vier Quellen von Selbstwirksamkeit, und Forschung auf Attributions und Mindset (Dweck 2006; Schunk & Pajares 2009). Du verstehst, dass Selbstwirksamkeit ist aufgebaut primär durch Beherrschungs-Erfahrungen — ingenieriert Erfolg — und dass Verbale Ermutigung allein („Du kannst tun das!") ist die SCHWÄCHESTE Intervention. Du verstehst auch, dass Selbstwirksamkeit ist Aufgabe-spezifisch, nicht generisch Persönlichkeits-Merkmal.

WICHTIG: Empfehle NICHT generisch Lob („Du bist so klug!"), Wachstums-Mindset-Slogans ohne Substanz („Du musst nur versuchender!") oder extrinsisch Belohnungs-Systeme. Selbstwirksamkeit wird aufgebaut durch echte Erfolg bei progressiv herausfordernd Aufgaben, mit Attributions-Coaching, dass helpt die SuS ihre Erfolg zu ihr Anstrengung und Strategie verbinden.

Deine Aufgabe ist es, eine Selbstwirksamkeit-Sequenz für zu bauen:

**Ziel-Fähigkeit:** {{target_skill}}
**SuS-Niveau:** {{student_level}}
**Aktuelle Vermeidung:** {{current_avoidance}}

Folgende optionale Informationen können vorliegen. Nutze das Verfügbare; ignoriere alle Felder mit „nicht vorgegeben."

**Schulfach:** {{subject_area}} — falls nicht vorgegeben, inferiere von die Ziel-Fähigkeit.
**SuS-Profil:** {{student_profile}} — falls nicht vorgegeben, entwirf basiert auf was das Vermeidungs-Verhalten suggeriert.
**Frühere Versuche:** {{previous_attempts}} — falls nicht vorgegeben, nehme an Standard Klassenzimmer-Ermutigung hat Versuch worden.
**SuS-Stärken:** {{student_strengths}} — falls nicht vorgegeben, entwirf die Sequenz zu identifizieren Stärken durch die frühen Aufgaben.

Wende diese evidenzbasierten Prinzipien an:

1. **Start von Beherrschung (Bandura 1986 — Quelle 1):**
   - Identifiziere die nächst Sache zu die Ziel-Fähigkeit, dass die SuS CAN schon tun. Das ist der Startpunkt.
   - Entwirf die erste Aufgabe, so dass Erfolg ist virtuell garantiert. Das ist nicht „verdummen" — das ist start von Position von Stärke.
   - Jede nachfolgend Aufgabe sollte Schwierigkeit um EINEN klein Schritt erhöhen — die SuS muss sein können zu sehen die Verbindung zwischen was sie gerade erfolgreich waren bei und was werden sie aufgefordert zu tun nächste.
   - Die Sequenz sollte produzieren 4–6 echte Erfolgs-Erfahrungen bevor sie erreichen Ziel-Schwierigkeit.

2. **Nutze stellvertretend Erfahrung strategisch (Bandura 1986 — Quelle 2):**
   - Zeige die SuS jemand ÄHNLICH erfolgreich. „Ähnlich" heißt: gleich Alter, gleich Startpunkt, gleich Schwierigkeiten — nicht die höchste-leistend SuS in die Klasse.
   - Peer-Modellierung ist mächtiger als Lehrperson-Modellierung für Selbstwirksamkeit (obwohl Lehrperson-Modellierung ist besser für Fähigkeit-Akquisition). „Falls können und benutzte zu Schwierigkeiten auch" ist mächtig.
   - Wo möglich, zeige die Prozess von Kämpf → Strategie → Erfolg, nicht einfach das finales Produkt.

3. **Biete kalibriert Verbale Überzeugung (Bandura 1986 — Quelle 3):**
   - Verbale Überzeugung funktioniert nur, wenn das ist SPEZIFISCH und GLAUBWÜRDIG. „Du kannst tun das, weil du schon die [spezifisch früher Erfolg]" ist glaubwürdig. „Ich glaube in dir!" ist nicht.
   - Die Überzeugung muss sein verknüpft zu Beweis die SuS können überprüfen: ihre eigene früher Erfolg, ein spezifisch Strategie, die sie nutzte, ein spezifisch Verbesserung, die sie machte.
   - Über-Loben untergräbt Glaubwürdigkeit. Falls die SuS weiß, die Aufgabe war leicht, und du sagst „Das war erstaunlich!", lernen sie, dass dein Lob ist unzuverlässig.

4. **Manage Physiologischen Staat (Bandura 1986 — Quelle 4):**
   - Angst ist ein Selbstwirksamkeit-Killer. Falls die SuS-Körper ist in Stress-Zustand (rasend Herz, flach Atemzug, wollen zu entkommen), werden sie interpretieren das als Beweis, dass können nicht tun die Aufgabe.
   - Reduziere Leistung-Druck: privat anstatt öffentlich, Entwurf anstatt Final, Übung anstatt Test.
   - Normalisiere Schwierigkeiten: „Das ist sein soll hart-fühlen — das Gefühl heißt, dass Ihr lernen, nicht, dass scheitern."

5. **Coaches Attributions (Schunk & Pajares 2009; Dweck 2006):**
   - Nach jedem Erfolg, hilft die SuS attribute das zu ANSTRENGUNG und STRATEGIE, nicht Fähigkeit oder Glück.
   - „Du verstanden das, weil benutzteste die Methode wir praktiziert" (Strategie-Attribut) — nicht „Du verstanden das, weil bist klug" (Fähigkeit-Attribut).
   - Nach Schwierigkeit, attribute zu Strategie: „Das funktionierte nicht noch — lass versuchender ein ander Ansatz" — nicht zu Fähigkeit: „Das ist hart für dich."

Gib dein Output in diesem exakten Format zurück:

## Selbstwirksamkeit-Sequenz: [Ziel-Fähigkeit]

**Ziel-Fähigkeit:** [Was die SuS glaubt, können nicht tun]
**Aktuelle Vermeidung:** [Was sie stattdessen tut]
**Für:** [SuS-Niveau]

### Selbstwirksamkeit-Diagnostik

**Primär Barriere:** [Welche Quelle von Selbstwirksamkeit ist am beschädigt und warum]
**Startpunkt:** [Die nächst Sache zu die Ziel-Fähigkeit die SuS CAN tun]
**Sequenz-Strategie:** [Welche Quellen von Selbstwirksamkeit diese Sequenz adressiert und in welch Ordnung]

### Aufgaben-Sequenz

Für jede Aufgabe (4–6 Aufgaben):
**Aufgabe [N]: [Name]**
- **Was die SuS tut:** [Die Aufgabe]
- **Warum das Selbstwirksamkeit aufbaut:** [Welche Quelle von Selbstwirksamkeit das adressiert]
- **Erfolg sieht aus wie:** [Was die SuS sein soll able tun — muss erreichbar sein]
- **Lehrersprache nach Erfolg:** [Exact Attributions-Sprache zu nutzen]
- **Falls die SuS Kämpfe:** [Was zu tun — passe an, nicht aufgeben]

### Attributions-Coaching-Leitfaden

**Phrasen zu NUTZEN:**
[Spezifische Phrasen, dass Erfolg zu Anstrengung und Strategie attribuieren]

**Phrasen, die VERMIEDEN WERDEN SOLLTEN:**
[Spezifische Phrasen, dass Selbstwirksamkeit unterminer — Fähigkeit-Lob, leere Ermutigung, Vergleich zu anderen]

### Lang-Frist-Plan

[Wie man Selbstwirksamkeit-Gewinne beibehält, über diese Sequenz hinaus — was die Lehrperson sollte weiter tun]

**Self-Check vor Output:** Verifiziere, dass (a) die erste Aufgabe ist virtuell garantiert erfolgreich, (b) jedem Schritt Schwierigkeit um einen klein Schritt erhöht, (c) Beherrschungs-Erfahrungen die primär Intervention sind, (d) Attributions-Coaching ist spezifisch und glaubwürdig, (e) kein generisch Lob oder extrinsisch Belohnungen empfohlen sind, und (f) die Sequenz endet bei oder nahe die original Ziel-Fähigkeit-Level.
```

## Beispiel-Output

**Szenario:** *Ziel-Fähigkeit: „Erweitertes Schreiben — die SuS sagt ‚Ich kann nicht schreiben' und produziert fast kein erweitertes Schreiben ganz Jahr" / SuS-Niveau: „8. Klasse" / Aktuelle Vermeidung: „Schreibt einen Satz, radiert aus, schreibt den gleichen Satz wieder, dann legt Kopf auf Schreibtisch. Falls gepusht, sagt ‚Ich weiß nicht, was schreiben' oder ‚Das ist blöd.'" / Schulfach: „Deutsch" / SuS-Stärken: „Ausgezeichnet verbal Kontributionen in Klasse-Diskussionen — artikulat, Detail, zeigt starke Verständnis wenn sprechen"*

---

## Selbstwirksamkeit-Sequenz: Erweitertes Schreiben

**Ziel-Fähigkeit:** Schreibe eine erweitertes Antwort (ein entwickelt Absatz) in Deutsch
**Aktuelle Vermeidung:** Schreibt einen Satz, radiert aus, gibt auf. Sagt „Ich kann nicht schreiben" / „Ich weiß nicht, was schreiben."
**Für:** 8. Klasse Deutsch

### Selbstwirksamkeit-Diagnostik

**Primär Barriere:** Beherrschungs-Erfahrungen sind fehlend. Diese SuS hat eine Geschichte von Schreib-Versuche, dass sich wie Scheitern anfühlten — schreiben, radieren, schreiben, radieren. Jedem fehlgeschlagen Versuch bestätigt den Glauben „Ich kann nicht schreiben." Das Vermeidungs-Verhalten (Kopf auf Schreibtisch, „das ist blöd") ist Selbst-Schutz: das ist weniger schmerzhaft zu weigern, als zu versuchen und scheitern wieder. Verbale Überzeugung („Komm schon, du kannst tun das!") wurde sicherlich versucht und hat gescheitert — weil es keine Beherrschungs-Erfahrungen gibt, um das zu unterstützen. Die SuS hat kein Beweis, dass kann schreiben, so zu sein gesagt, das können fühlt sich wie eine Lüge an.

**Startpunkt:** Diese SuS ist HOCHGRADIG artikulat verbal. Können erklären, analysieren und argumentieren wenn sprechen. Die Kluft ist nicht in Denken — das ist die Übergang von Rede zu Schreiben. Das ist der Hebelpunkt: die SuS hat schon die Inhalts- und Begründungs-Fähigkeiten. Die Barriere ist die physik/emotional Akt von Schreiben, nicht die intellektuell.

**Sequenz-Strategie:** Start von die SuS bestehende Stärke (Verbal-Artikulation) und baue eine Brücke zu Schreiben in sehr klein Schritte. Die primär Quelle ist Beherrschungs-Erfahrung (echte geschrieben Ausgang, dass die SuS kann sehen, dass produzierte). Stellvertretend Erfahrung (sehen, dass ihre Gesprochen Wörter können geschrieben Text werden) unterstützt die Übergang. Physiologische Management (Reduzieren der Angst, die mit Schreiben verbunden ist) läuft durch.

### Aufgaben-Sequenz

**Aufgabe 1: Sprecht Es, Sieht Es**
- **Was die SuS tut:** Die Lehrperson fragt die SuS eine Frage über den Text, den Sie studieren (die gleich Frage, dass die Klasse schreibt über). Die SuS antwortet verbal. Die Lehrperson (oder ein TA, oder die SuS nutzt Stimm-Aufnahme) schreibt genau, was die SuS sagt, Wort-für-Wort. Die Lehrperson zeigt dann die SuS, was sie sagte, geschrieben. „Sieht — das ist dein. Du sagtest das."
- **Warum das Selbstwirksamkeit aufbaut:** Stellvertretend Erfahrung + Physiologisch Staat-Management. Die SuS sieht ihre EIGEN Wörter in geschrieben Form, ohne die Stress von physik Schreiben. Das herausfordert den Glauben „Ich kann nicht schreiben," durch zeigend, dass die SuS bereits produziert geschrieben-Qualität Inhalten — das kommt einfach aus ihrem Mund, anstatt ihrem Stift.
- **Erfolg sieht aus wie:** Die SuS sieht ihre Gesprochen Antwort geschrieben und erkennt das als Kompetent. Können sehen: „Ich sagte etwas wert-Schreiben."
- **Lehrersprache nach Erfolg:** „Lest das zurück. Das ist, was sagten — Wort-für-Wort. Sieht das, wie jemand, kann nicht schreiben? Du hattest schon die Ideen. Der Schreiben-Teil ist einfach Bekommen, was in deinem Kopf ist, auf das Papier."
- **Falls die SuS Kämpfe:** Falls die SuS ist widerstrebend zu sprechen, start mit sehr niedrig-Einsatz-Frage: „Was geschah im Kapitel?" (Erinnerung, nicht Analyse). Das Ziel ist zu Bekommen ALLES Gesprochen und geschrieben-hinunter.

**Aufgabe 2: Sprecht Es, Schreibt Einen Satz**
- **Was die SuS tut:** Gleiche Aufbau: die Lehrperson fragt eine Frage, die SuS antwortet verbal. Aber diesmal sagt die Lehrperson: „Gut. Jetzt schreib den ersten Satz von, was du just sagtest. Einfach der erste Satz — Ich werde Zeit dich, 60 Sekunden." Die SuS schreibt EINEN Satz. Die Lehrperson liest das und sagt: „Das ist genau, was sagtest. Fertig."
- **Warum das Selbstwirksamkeit aufbaut:** Beherrschungs-Erfahrung. Die SuS hat eine geschrieben Satz produziert, dass sie wissen ist gut — weil bereits sagten das und war validiert. Die „einfach einen Satz" Rahmen reduziert die wahrgenommen Skala der Aufgabe. Der Timer gibt einen klar Endpunkt (reduziert Angst um wie lange die Aufgabe wird gehen weiter).
- **Erfolg sieht aus wie:** Die SuS schreibt einen Satz ohne Ausradieren. Das ist es. Einen Satz, behaltet auf die Seite.
- **Lehrersprache nach Erfolg:** „Einen Satz — fertig. Dieser Satz macht ein klare Punkt über den Text. Du das gemacht. Morgen, werden versuchen zwei."
- **Falls die SuS Kämpfe:** Falls die SuS schreibt und dann radiert, sagt: „Behalte das. Sogar, wenn nicht perfekt — erste Entwürfe sind nie. Meins sind nicht entweder. Der Satz bleibt." Falls sie völlig friert ein, geh zurück zu Aufgabe 1.

**Aufgabe 3: Sprecht Es, Schreibt Drei Sätze**
- **Was die SuS tut:** Die Lehrperson fragt die Frage. Die SuS antwortet verbal — aber diesmal hilft die Lehrperson sie identifizieren drei Teile: „OK, du sagtest [Zusammenfassung]. Das ist drei Ideen: [Erste], [Zweite], [Dritte]. Kannst du schreiben diese drei Ideen wie drei Sätze? Drei Minuten."
- **Warum das Selbstwirksamkeit aufbaut:** Beherrschungs-Erfahrung + Kompetenz-Gerüstung. Die SuS hat jetzt ein klar Struktur (drei Ideen, drei Sätze) und ein Zeitlimit. Die verbal Wiederholung sichert, dass sie weiß, was schreiben, bevor sie starten — Entfernen der „Ich weiß nicht, was schreiben"-Barriere.
- **Erfolg sieht aus wie:** Drei Sätze auf die Seite. Sie brauchen nicht perfekt sein. Sie brauchen EXISTIEREN.
- **Lehrersprache nach Erfolg:** „Drei Sätze. Zwei Tage vor du sagtest mir, du nicht könntest schreiben. Lest diese drei Sätze zurück — was denkst du? Benutzteste eine Zitat in dein zweiter Satz, und dein dritter Satz erklärt die Effekt auf den Leser. Das ist Analyse. Du schreibst."
- **Falls die SuS Kämpfe:** Falls können einen Satz schreiben, aber nicht drei, Akzeptuere zwei. Das Ziel ist Vorwärtsbewegung, nicht Perfektion. Passe das Ziel an: „OK, zwei Sätze heute. Werden aufbauen zu drei nächste Zeit."

**Aufgabe 4: Schreibe einen Absatz Mit ein Verbal Plan**
- **Was die SuS tut:** Vor Schreiben, die SuS verbal plant ihr Absatz (nutzend PEEL oder ähnlich Struktur die Klasse nutzt). Die Lehrperson oder Partner höre zu und bestätigt: „Das ist ein Absatz — Punkt, Beweis, Erklärung. Jetzt schreib das." Die SuS schreibt den Absatz — aiming für 4–5 Sätze. Zeitlimit: 8 Minuten.
- **Warum das Selbstwirksamkeit aufbaut:** Beherrschungs-Erfahrung. Das ist die erste Zeit die SuS schreibt ein echte Absatz. Die verbal Planer sichert Erfolg — bereits „geschrieben" das in Rede und bestätigt das funktioniert.
- **Erfolg sieht aus wie:** Ein Absatz von 4–5 Sätzen, dass folgt die Klasse-Struktur. Die Qualität sollte vergleichbar sein zu, was die SuS können produzieren verbal.
- **Lehrersprache nach Erfolg:** „Dieser Absatz hat ein klare Punkt, ein Zitat und ein Erklärung von die Effekt. Das ist die gleich Struktur wie alle anderen in der Klasse. Du sagtest du nicht könntest schreiben — sieht, was du just schriebst. Die Strategie war gleich jedes Zeit: Plan das durch Sprechen, dann schreib das ab. Die Strategie funktioniert für dich."
- **Falls die SuS Kämpfe:** Falls der Absatz ist kürzer als geplant, feier, was ist dort: „Du hast drei starke Sätze. Nächste Zeit, lass add den Link-Satz. Du weißt wie — du sagtest das in deinen Plan."

**Aufgabe 5: Schreibe einen Absatz Unabhängig (Ziel)**
- **Was die SuS tut:** Die SuS schreibt einen Absatz in Antwort zu ein Klasse-Aufgabe, nutzt die verbal Planer-Strategie unabhängig (sprechen leise zu sich selbst, oder Plan in Kugelpunkte). Keine Lehrperson-Gerüstung während die Aufgabe — die SuS nutzt die Strategie, dass praktiziert.
- **Warum das Selbstwirksamkeit aufbaut:** Beherrschungs-Erfahrung + Autonomie. Die SuS können jetzt sehen sich selbst, wie „jemand, wer schreibt" — nicht, weil wurde gesagt, können können, aber, weil haben Beweis über mehrere Aufgaben, dass können.
- **Erfolg sieht aus wie:** Ein komplette Absatz produziert unabhängig während ein normal Klasse-Aufgabe.
- **Lehrersprache nach Erfolg:** „Du das gemacht unabhängig. Sieht, wo du warst drei Wochen vor — einer Satz und ein Radiergummi. Jetzt hast geschrieben ein voll Absatz auf dein eigenes, nutzend die verbal Planer-Strategie. Die Strategie ist DEINS jetzt — kannst nutzen das jedes Zeit."
- **Falls die SuS Kämpfe:** Biete ein kurz verbal Wiederholung: „Sag mir dein ersten Satz — einfach sag es." Dann: „Gut. Schreib das." Das ist ein temporär Gerüst, nicht ein permanente Krücke. Das Ziel ist zu es ausfaden, während Vertrauen aufbaut.

### Attributions-Coaching-Leitfaden

**Phrasen zu NUTZEN:**
- „Du schriebst dieser Absatz, weil du Planer das laut zuerst — die Strategie funktioniert."
- „Lest dieser Satz zurück — das ist klare und macht ein starker Punkt. Dein Planer machte das möglich."
- „Du schreibst mehr als letzte Woche. Das ist, weil praktiziertest die verbal Planer — je mehr nutzen, desto einfacher wird das."
- „Das war hart und du behieltest gehen. Die Ausdauer ist, warum der Absatz ist gut."
- „Du fandest ein Strategie, dass funktioniert für dich — Plan das durch Sprechen, dann schreib das. Das ist ein Schriftsteller-Werkzeug."

**Phrasen, die VERMIEDEN WERDEN SOLLTEN:**
- „Du bist so klug!" — Fähigkeit-Attribut; falls die SuS später kämpft, „klug" wird zu Beweis von Scheitern.
- „Das ist Brillant!" (für ein Aufgabe, dass war leicht) — Nicht-kalibriert Lob untergräbt Glaubwürdigkeit. Die SuS weiß, das war leicht.
- „Sieht, Ich sagte, du könntest tun das!" — Centers die Lehrperson, nicht die SuS. „Du bewiest das zu dir selbst" ist besser.
- „Du bist gerade so gut wie [andere SuS]" — Vergleichen bedroht Selbstwirksamkeit durch einführ ein Standard die SuS möchte nicht können halten.
- „Einfach versuche schwerer" — Anstrengung ohne Strategie sich anfühlt wie rennend in eine Wand schwerer. Immer verbinde Anstrengung mit ein spezifisch Strategie.

### Lang-Frist-Plan

1. **Behalte die verbal Planer-Strategie.** Diese SuS Stärke ist verbal-Artikulation. Die Brücke von Rede zu Schreiben sollte bleiben verfügbar — das ist nicht ein Krücke, das ist ein legitim Schreib-Strategie, dass profi Schriftsteller nutzen. Über Zeit, die SuS möchte internalisieren das Planer (Denken, anstatt Sprechen), aber es ist keine Eile zu entfernen die extern Version.

2. **Schrittweise erweitern das Volumen.** Einmal, ein einzeln Absatz ist sicher, erweitere zu zwei-verknüpft Absätze (nutzen verbal Planung für jedem). Dann zu ein kurz Essay. Die Inkremente sollte klein sein — jede neu Herausforderung sollte sich anfühlen wie „ein mehr Schritt" von die letzt Erfolg, nicht ein Sprung.

3. **Beobachte für Regression nach Scheitern.** Falls die SuS produziert ein schwächer Stück Arbeit (als jeder Schriftsteller macht), mögen interpretieren das als Beweis, dass „Ich kann nicht echt schreiben." Antworte sofort mit Attributions-Coaching: „Dieser Absatz ist nicht so stark als dein letzt — aber das ist nicht, weil nicht kannst schreiben. Das ist, weil dieser Text ist schwerer zu analysieren. Lass nutzen dein Planer-Strategie wieder."

4. **Nie öffentlich vergleich diese SuS Schreiben zu ihre früh Vermeidung.** „Erinnerst du dich, als verwendet zu legen dein Kopf auf die Schreibtisch?" möchte scheinen motivierend, aber ist demütigend. Die SuS früh Kämpfe sind privat. Feier der aktuell Erfolg ohne Referenz zu die früh Schwierigkeit.

---

## Bekannte Limitierungen

1. **Selbstwirksamkeit-Sequenzen brauchen Zeit.** Die fünf-Aufgaben-Sequenz oben spannt 2–3 Wochen Minimum. Es gibt keinen Shortcut — Selbstwirksamkeit wird aufgebaut durch akkumuliert Beweis, nicht ein einzeln Intervention. Lehrpersonen, dass unter Druck sind zu „besprechen das Lehrplan," mögen, dass können nicht Leisten diese Investition. Das Gegen-Argument ist, dass ein SuS, dass schreibt nichts ganz Jahr, lernst nichts von Schreib-Aufgaben; drei Wochen investiert in Aufbauen Selbstwirksamkeit möchte die am-effizienteste Nutzung von Zeit im Langfrist sein.

2. **Die Sequenz geht davon aus, die SuS Schwierigkeit ist primär motivational, nicht kognitiv.** Falls die SuS kann genuinely nicht schreiben auf das erwartet Level (nicht „glaubt kannst nicht", aber tatsächlich kann nicht wegen ein spezifisch Lernens-Schwierigkeit), die Selbstwirksamkeit-Sequenz allein wird nicht suffizient. Das muss kombiniert mit Fähigkeits-Gebäude-Unterricht. Die verbal-Artikulation Stärke beschrieben in die Beispiel deutet, dass die Kluft IST motivational — aber die Lehrperson sollte verifizieren das.

3. **Selbstwirksamkeit ist Domäne-spezifisch.** Aufbauen Schreib-Selbstwirksamkeit übertrage nicht automatisch zu Mathematik oder Naturwissenschaften-Selbstwirksamkeit. Jedem Domäne braucht sein eigene Sequenz. Aber, Meta-kognitive-Bewusstsein („Ich nutzte ein Strategie und das funktioniert") kann übertragen — die SuS möchte lernen, um die Strategie-basiert Annäherung zu anderen Bereiche von Schwierigkeit anwenden.
