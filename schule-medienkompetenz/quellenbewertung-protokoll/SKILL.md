---
# AGENT SKILLS STANDARD FIELDS (v2)
name: quellenbewertung-protokoll
description: "Entwurf eines Protokolls zur Quellen-Evaluierung mit lateralem Lesen und Glaubwürdigkeits-Checks für digitale Information. Nutze diese Skill, wenn SuS Websites, Online-Quellen oder Social-Media-Aussagen evaluieren brauchen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-medienkompetenz/quellenbewertung-protokoll"
skill_name: "Protokoll zur Quellen-Glaubwürdigkeits-Bewertung"
domain: "schule-medienkompetenz"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Wineburg & McGrew (2017) — Lateral reading: reading less and learning more when evaluating digital information"
  - "Wineburg & McGrew (2019) — Lateral reading and the nature of expertise"
  - "Breakstone et al. (2021) — Students' civic online reasoning: a national portrait"
  - "Caulfield (2019) — SIFT: the four moves (Stop, Investigate, Find better coverage, Trace claims)"
  - "Hobbs (2010) — Digital and media literacy: a plan of action"
input_schema:
  required:
    - field: "quellentyp"
      type: "string"
      description: "Der Typ der Quelle, die SuS evaluieren — z.B. Website, Nachrichtenartikel, Social-Media-Post, Wikipedia-Artikel, YouTube-Video, Infografik"
    - field: "evaluierungs_kontext"
      type: "string"
      description: "Warum SuS diese Quelle evaluieren — die Aufgaben- oder Auftrags-Kontext"
    - field: "sus_niveau"
      type: "string"
      description: "Jahrgangsstufe/Klasse"
  optional:
    - field: "spezifische_quelle"
      type: "string"
      description: "Beschreibung der aktuellen Quelle, die evaluiert wird — Thema, Herausgeber, URL-Typ"
    - field: "sus_profile"
      type: "array"
      description: "Aus Kontextmotor: digitale Literacy-Niveaus, vorherige Quellen-Evaluierungs-Erfahrung"
    - field: "fachgebiet"
      type: "string"
      description: "Der Disziplin-Kontext — beeinflusst, was als glaubwürdig zählt"
    - field: "haeufige_fehler"
      type: "array"
      description: "Quellen-Evaluierungs-Fehler, die die LP in dieser Klasse beobachtet hat"
output_schema:
  type: "object"
  fields:
    - field: "evaluierungs_protokoll"
      type: "object"
      description: "Schritt-für-Schritt-Protokoll zum Evaluieren dieser Quellentyp, mit lateralem Lesen"
    - field: "lehrpersonen_modellierung"
      type: "string"
      description: "Skript, das die LP das Protokoll mit spezifischem Beispiel modelliert"
    - field: "rote_flags_gruene_flags"
      type: "object"
      description: "Quellentyp-spezifische Indikatoren von Zuverlässigkeit und Unzuverlässigkeit"
    - field: "sus_checkliste"
      type: "string"
      description: "Eine prägnante Checkliste, die SuS unabhängig nutzen können"
chains_well_with:
  - "kritisches-denken-aufgaben"
  - "medienanalyse-protokoll"
  - "lesestrategien-auswahl"
  - "sokrates-fragenseq-generator"
teacher_time: "3 minutes"
tags: ["quellen-bewertung", "laterales-lesen", "SIFT", "digitale-literacy", "kritisches-denken", "Lehrplan-21", "MI.1"]
---

# Protokoll zur Quellen-Glaubwürdigkeits-Bewertung

## Was diese Skill tut

Generiert ein strukturiertes Protokoll zum lateralen Lesen zur Evaluierung einer spezifischen Quellentyp — sie lehrt SuS zu prüfen, was ANDERE Quellen über eine Quelle sagen, statt die Quelle selbst isoliert zu analysieren. Dieser Ansatz folgt direkt der Forschungs-Feststellung, dass professionelle Fact-Checker sowohl SuS als auch Universitäts-Professoren an Quellen-Evaluierung überleisten, weil sie lateral lesen (neue Tabs öffnen, um zu prüfen, wer hinter eine Quelle steckt) statt vertikal (die Quelle selbst sorgfältiger lesen auf "Hinweise" über Zuverlässigkeit). Die Ausgabe enthalten ein Schritt-für-Schritt-Protokoll, ein LP-Modellierungs-Skript, quellentyp-spezifische rote und grüne Flags, und eine SuS-Checkliste. KI ist besonders wertvoll, weil effektive Quellen-Evaluierung sowohl allgemeine Prinzipien (laterales Lesen, Claim-Verfolgung) als auch quellentyp-spezifisches Wissen erfordert (was eine News-Artikel glaubwürdig macht unterscheidet sich von das macht eine wissenschaftliche Studie glaubwürdig) — eine Kombination, die schwierig ist zu unterrichten ohne Domain-Expertise.

## Evidenzgrundlage

Wineburg & McGrew (2017, 2019) führten Landmark-Studien durch, zeigend, dass professionelle Fact-Checker Quellen fundamental anders evaluieren als SuS und sogar Universitäts-Professoren. Fact-Checker nutzen "laterales Lesen" — statt auf eine Quelle zu bleiben und nach "Hinweisen" über Zuverlässigkeit zu suchen, öffnen sie sofort neue Tabs zu prüfen, was andere Quellen über die Quellen-Autor, Herausgeber und Aussagen sagen. SuS und Professoren nutzen stattdessen "vertikales Lesen" — sie bleiben auf der Seite und suchen nach Oberflächlichkeits-Glaubwürdigkeits-Markern (professionelles Design, .org-Domäne, Autor-Anmeldedaten auf der Seite), die leicht manipuliert sind. Laterale Leser brauchten durchschnittlich 93 Sekunden, um eine richtige Evaluierung zu erreichen; vertikale Leser brauchten über 5 Minuten und waren öfter falsch. Breakstone et al. (2021) fanden, dass die große Mehrheit der US-Oberschüler nicht zuverlässig Online-Quellen evaluieren können — sie sind leicht deceptet von professionell-aussehenden Design und auf-Seiten-Anmeldedaten. Caulfield (2019) operationalisierte die Forschung in die SIFT-Methode: Stop (pausieren vor Engagement), Investigate the source (wer steckt hinter das?), Find better coverage (was sagen andere Quellen?), Trace claims (finde die Original-Quelle). Dieser Framework macht laterales Lesen lehrbar. Hobbs (2010) etablierte, dass digitale und Medienliteracy explizit unterrichtet werden muss — SuS entwickeln Quellen-Evaluierungs-Fähigkeiten nicht natürlicherweise durch Internet-Nutzung.

## Eingabeschema

Die Lehrperson muss bereitstellen:
- **Quellentyp:** Was für Quelle. *z.B. "Website" / "Nachrichtenartikel" / "Social-Media-Post (Instagram-Infografik)" / "YouTube-Video" / "Wikipedia-Artikel" / "Wissenschaftliche Studien-Abstract"*
- **Evaluierungs-Kontext:** Warum SuS evaluieren. *z.B. "SuS recherchieren Klimaänderungen für eine Geographie-Essay und brauchen zuverlässige Quellen zu finden" / "Ein SuS teilte ein TikTok-Video, das X behauptet, und Ich will die Klasse es evaluieren"*
- **SuS-Niveau:** Jahrgangsstufe. *z.B. "9. Klasse"*

Optional (injiziert vom Kontextmotor, falls verfügbar):
- **Spezifische Quelle:** Beschreibung der aktuellen Quelle
- **SuS-Profile:** Digitale Literacy-Niveaus, vorherige Erfahrung
- **Fachgebiet:** Der Disziplin-Kontext
- **Häufige Fehler:** Quellen-Evaluierungs-Fehler, die die LP beobachtet hat

## Prompt

```
Du bist ein Experte für digitale Literacy und Quellen-Evaluierungs-Pädagogik mit tiefem Wissen von Wineburg & McGrew (2017, 2019), Caulfield (2019), und Breakstone et al. (2021). Du verstehst, dass die meisten SuS (und viele Erwachsene) Quellen mit ineffektiven vertikalen Lese-Strategien evaluieren — prüfe die Quelle selbst auf "Hinweise" über Zuverlässigkeit — und dass effektive Evaluierung laterales Lesen erfordert: prüfe, was EXTERNE Quellen über die Quelle in Frage sagen.

Deine Aufgabe ist es, ein Quellen-Evaluierungs-Protokoll für folgendes zu generieren:

**Quellentyp:** {{quellentyp}}
**Evaluierungs-Kontext:** {{evaluierungs_kontext}}
**SuS-Niveau:** {{sus_niveau}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Verwende alles Verfügbare; ignoriere alle als "nicht bereitgestellt" gekennzeichneten Felder.

**Spezifische Quelle:** {{spezifische_quelle}} — falls nicht bereitgestellt, erstelle ein plausibl Beispiel dieses Quellentyp für das Modellierungs-Skript.
**SuS-Profile:** {{sus_profile}} — falls nicht bereitgestellt, nimm an, SuS haben begrenzte formale Quellen-Evaluierungs-Training und tendieren, Glaubwürdigkeit nach Aussehen zu beurteilen (professionelles Design = vertrauenswürdig).
**Fachgebiet:** {{fachgebiet}} — falls nicht bereitgestellt, leite aus dem Evaluierungs-Kontext ab.
**Häufige Fehler:** {{haeufige_fehler}} — falls nicht bereitgestellt, enthalten die am meisten häufigen Quellen-Evaluierungs-Fehler für dieses Alter: professionell-aussehenden Design trauen, .org mit auto-Glaubwürdigkeit verwechseln, Information akzeptieren, weil es bereits bestehende Überzeugungen bestätigt.

Wende diese evidenzgestützten Prinzipien an:

1. **Laterales Lesen über vertikales Lesen (Wineburg & McGrew, 2017, 2019):**
   - Das Protokoll muss SuS LEHREN, die Quelle zu VERLASSEN und externe Verweise zu prüfen — nicht die Quelle selbst für Glaubwürdigkeits-Hinweise zu scrutinize.
   - Vertikale Lese-Hinweise, auf die SuS relieren (und nicht sollten): professionelles Design, .org-Domäne, Autor-Anmeldedaten auf der Seite, Präsenz von Verweisen, "Über Uns"-Seite-Aussagen.
   - Laterale Lese-Züge: den Autor's Namen suchen, die Organisation's Namen + "Glaubwürdigkeit" oder "Finanzierung" suchen, prüfen, ob andere ansehliche Quellen dieselbe Aussage machen, Zitate-Statistiken zum Original-Quelle verfolgend.

2. **SIFT Framework (Caulfield, 2019):**
   - **Stop:** Bevor du mit der Quelle engagierst, pausiere. Nicht anfangen zu lesen, teilen oder zitieren, bis du es evaluiert hast.
   - **Investigate the source:** Wer steckt hinter das? Was sagen ANDERE Quellen über diese Autor/Organisation? (Nicht, was die Autor/Organisation über sich selbst sagt.)
   - **Find better coverage:** Berichten andere zuverlässige Quellen dasselbe Information? Falls nur diese eine Quelle diese Aussage macht, seien vorsichtig.
   - **Trace claims:** Wenn eine Quelle eine Statistik, Zitat oder Studie zitiert, verfolgst sie zum Original. Sagt die Original, was die Quelle behauptet, dass sie sagt?

3. **Quellentyp-spezifische Guidance:**
   - Verschiedene Quellentypen haben verschiedene Glaubwürdigkeits-Indikatoren und verschiedene Manipulations-Techniken.
   - Ein Protokoll für evaluierte Nachrichtenartikel sollte verschiedene Themen adressieren statt ein für evaluierte Social-Media-Infografik.
   - Adaptiere die SIFT-Schritte zum spezifischen Quellentyp.

4. **Vermeiden falscher Sophistication:**
   - SuS lernen häufig einen Checklisten-Ansatz (CRAAP-Test, etc.), der ein falsches Gefühl der Sophistication produziert — sie prüfen Kästchen ohne tatsächlich zu evaluieren. Das Protokoll sollte DENKEN lehren, nicht Kästchen-Ticken.
   - Die wichtigste Frage ist immer: "Was sagen UNABHÄNGIGE, SACHVERSTÄNDIGE Quellen über das?" — nicht "Sieht diese Quelle ZUVERLÄSSIG aus?"

5. **Modelliere den Prozess explizit:**
   - Enthalten ein LP-Modellierungs-Skript, das laterales Lesen mit spezifischem Beispiel demonstriert.
   - Zeige den Kontrast zwischen was ein vertikaler Leser würde (und falsch verstehen) und was ein lateraler Leser würde (und richtig verstehen).

Gib deine Ausgabe in diesem exakten Format zurück:

## Quellen-Evaluierungs-Protokoll: [Quellentyp]

**Für:** [SuS-Niveau]
**Kontext:** [Warum SuS diese Quelle evaluieren]
**Methode:** Laterales Lesen (SIFT Framework)

### Das Protokoll

[Schritt-für-Schritt-Protokoll adaptiert für diesen Quellentyp — jeder Schritt sollte ERKLÄREN, WAS zu tun ist, WARUM es zählt, und WAS zu SUCHEN ist]

### LP-Modellierungs-Skript

[Ein Think-aloud-Skript, das die LP eine spezifisches Beispiel dieses Quellentyp evaluierend, laterales Lesen demonstrierend. Zeige den Kontrast mit was ein vertikaler Leser falsch machen könnte.]

### Rote Flags und Grüne Flags

**Rote Flags (Gründe vorsichtig zu sein):**
[Quellentyp-spezifische Indikatoren von Unzuverlässigkeit]

**Grüne Flags (Gründe selbstbewusster zu sein):**
[Quellentyp-spezifische Indikatoren von Zuverlässigkeit]

**Wichtig: grüne Flags sind kein Beweis.** [Kurze Notiz, dass sogar zuverlässig-aussehende Quellen falsch sein können — grüne Flags erhöhen Selbstbewusstsein aber garantieren nicht Genauigkeit]

### SuS-Checkliste

[Eine prägnante, druckbare Checkliste, die SuS selbstständig nutzen können, wenn Quellen dieses Typs evaluiert]

**Selbstkontrolle vor der Rückgabe:** Verifiziere dass (a) das Protokoll laterales Lesen über vertikales Lesen priorisiert, (b) jeder Schritt Denken lehrt, nicht Kästchen-Ticken, (c) das Modellierungs-Skript den tatsächlichen Prozess des externen Quellen-Prüfens demonstriert, (d) rote und grüne Flags sind spezifisch für diesen Quellentyp, (e) das Protokoll ist Alters-angemessen, und (f) die SuS-Checkliste ist prägnant genug zu praktisch nutzen sein.
```

## Beispielausgabe

**Szenario:** *Quellentyp: "Website" / Evaluierungs-Kontext: "9. Klasse SuS recherchieren Auswirkungen von Energy-Drinks auf Gesundheit für ein Science-Projekt. Mehrere SuS haben Websites gefunden, die behaupten, Energy-Drinks sind sicher oder sogar vorteilhaft, und die LP möchte, dass sie lehren, wie man diese Quellen evaluiert bevor sie in ihre Projekte enthalten." / SuS-Niveau: "9. Klasse"*

---

## Quellen-Evaluierungs-Protokoll: Website

**Für:** 9. Klasse Science
**Kontext:** Evaluierung von Websites gefunden während Recherche auf Gesundheits-Auswirkungen von Energy-Drinks
**Methode:** Laterales Lesen (SIFT Framework)

### Das Protokoll

**Schritt 1: STOP — Nicht noch anfangen zu lesen (30 Sekunden)**

Bevor du eine einzelnes Wort des Artikels liest, pausiere. Du hast diese Website durch eine Such-Engine gefunden — aber Erscheinen in Such-Ergebnissen BEDEUTET NICHT, dass eine Quelle zuverlässig ist. Google-Ränge Seiten nach Popularität und Relevanz zu deinen Such-Terminen, nicht nach Genauigkeit.

*Was zu tun:* Notize die URL. Notize das Name der Website/Organisation. NICHT noch anfangen, den Artikel zu lesen.

*Warum das zählt:* Sobald du anfangst zu lesen, beginnst dein Hirn, die Information zu akzeptieren. Es ist viel schwieriger, eine Quelle kritisch zu evaluieren nachdem du bereits ihre Aussagen absorbiert hast. Evaluiere ERST, lese ZWEITENS.

**Schritt 2: INVESTIGATE THE SOURCE — Wer steckt hinter diese Website? (2–3 Minuten)**

Das ist der kritische Schritt. NICHT prüfe die Website's eigen "Über Uns"-Seite — jede Organisation kann schmeichelnde Dinge über sich selbst schreiben. Statt, öffne A NEW TAB und suche extern.

*Was zu tun:*
1. Suche: "[Organisations-Name]" — lese den Wikipedia-Artikel (falls einer existiert) und die oben 3–4 Ergebnisse. Wer sind sie? Was sagen unabhängige Quellen über sie?
2. Suche: "[Organisations-Name] Finanzierung" oder "[Organisations-Name] unterstützt von" — wer finanziert diese Organisation? Falls eine Website über Energy-Drink-Sicherheit von eine Energy-Drink-Firma finanziert ist, das ist kritisches Information.
3. Suche: "[Autor-Name] Anmeldedaten" — ist diese Person ein qualifizierter Experte in diesem Feld? Ein Doktor schreibend über Medizin ist verschiedenes von ein Blogger schreibend über Medizin.

*Was zu suchen:*
- Ist die Organisation unabhängig, oder hat sie ein finanzielles Interesse im Thema?
- Ist der Autor ein qualifizierter Experte in dem relevanten Feld?
- Beschreiben unabhängige Quellen diese Organisation als glaubwürdig, oder als voreingenommen/kontrovers?

**Schritt 3: FIND BETTER COVERAGE — Sagen andere zuverlässige Quellen das gleiche? (2–3 Minuten)**

Falls die Website spezifische Aussagen macht ("Energy-Drinks haben keine negativen Gesundheits-Effekte auf Jugendliche"), prüfe ob vertrauenswürdige Quellen einverstanden.

*Was zu tun:*
1. Suche die spezifische Aussage: "Energy-Drinks Gesundheits-Auswirkungen Jugendliche"
2. Suche nach Quellen von Organisationen mit kein finanzielles Interesse: NHS, WHO, Universitäts-Forschungs-Zusammenfassungen, Peer-reviewed Journale
3. Vergleiche: Macht die Website's Aussage übereinstimmende mit was diese unabhängigen Quellen sagen?

*Was zu suchen:*
- Falls nur diese eine Website diese Aussage macht und keine vertrauenswürdigen Quellen einverstanden, seien sehr vorsichtig.
- Falls vertrauenswürdigen Quellen sagen das Gegenteil, die Website's Aussage ist wahrscheinlich unzuverlässig — unabhängig von wie professionell die Website aussieht.
- Falls mehrfache unabhängige Quellen die Aussage bestätigen, dein Selbstbewusstsein kann erhöhen.

**Schritt 4: TRACE CLAIMS — Wo kommen die Statistiken her? (2–3 Minuten)**

Falls die Website Zahlen, Studien oder Expert-Zitate zitiert, verfolgst sie zum Original-Quelle.

*Was zu tun:*
1. Finde eine spezifische Aussage mit einer Zahl: "Eine Studie fand, dass 95% von Energy-Drink-Konsumenten keine Nebenwirkungen erleben."
2. Suche die Original-Studie. Existiert es? Sagt es tatsächlich, was die Website behauptet, dass es sagt?
3. Prüfe: Wer führte die Studie durch? Wer finanzierte es? War es in einem vertrauenswürdigen Journal veröffentlicht?

*Was zu suchen:*
- Vague Zitate ("Studien zeigen," "Forschung beweist") mit keiner spezifischem Quelle — das ist ein rote Flag.
- Statistiken, die nicht zu einer Original-Quelle verfolgbar sind — ein anderes rote Flag.
- Studien, die existieren aber sagen etwas Anderes von was die Website behauptet — die Website stellt die Evidenz falsch dar.

### LP-Modellierungs-Skript

"Ich werde euch zeigen, wie ich eine Website evaluiert würde, während ich nach Informationen über Energy-Drinks suche. Ich habe eine Website gefunden namens 'EnergyDrinkFacts.org' — sie sieht professionell aus, hat ein sauberes Design, und hat einen Artikel mit dem Titel 'Die Wahrheit Über Energy-Drinks und Jugend-Gesundheit.' Lass mich zeigen euch was die meisten Menschen tuen — und dann, was ich stattdessen tue.

**Was die meisten Menschen tuen (vertikales Lesen — der FALSCHE Ansatz):**
Die meisten Menschen würden anfangen, den Artikel zu lesen. Sie würden die .org-Domäne sehen und denken 'das muss legitim sein.' Sie würden sehen, dass der Artikel einige Studien zitiert und denken 'das ist evidenzgestützt.' Sie würden das professionelle Design sehen und denken 'das sieht vertrauenswürdig aus.' Sie könnten die Seite "Über Uns" prüfen und lesen 'Wir sind eine unabhängige Forschungs-Organisation verantwortlich für bereitend faktuales Information über Energy-Getränke.' Klingt gut, richtig? Das ist vertikales Lesen — auf der Website bleibend und nach Hinweisen suchend. Und das ist genau, wie Desinformation funktioniert. JEDER kann eine .org-Domäne registrieren. JEDER kann ein professionell-aussehende Website machen. JEDER kann eine nette 'Über Uns'-Seite schreiben.

**Was ich statt tuen (laterales Lesen — der RICHTIGE Ansatz):**
Ich werde DIESE Website sofort verlassen und eine neue Tab öffnen.

[Öffne neue Tab] Ich suche: 'EnergyDrinkFacts.org' — und ich finde... interessant. Der Wikipedia-Artikel sagt diese Organisation wurde gegründet und finanziert vom Amerikanischen Getränke-Verein — das Handels-Körper, die Energy-Drink-Hersteller darstellt. Also die 'unabhängige Forschungs-Organisation' ist tatsächlich von den Firmen finanziert, die Energy-Drinks verkaufen. Das automatisch ist nicht disqualifizierend, aber es ist WESENTLICHER Kontext, dass ich nie gefunden hätte durch die Website selbst lesend.

Jetzt suche ich: 'Energy-Drinks Gesundheits-Auswirkungen Jugendliche NHS' — und die NHS-Seite sagt, dass Koffein in Energy-Drinks kann Angst, Schlaf-Störung und Herz-Palpitationen in Jugendlichen verursachen und advises gegen regelmäßige Konsum. Die WHO sagt das Gleiche. Also die Aussage auf EnergyDrinkFacts.org, dass Energy-Drinks sicher für Jugendliche sind WIDERSPRICHT was die NHS und WHO sagen.

Jetzt verfolgend ich eine spezifische Aussage. Die Website sagt 'Eine 2018-Studie fand keine bedeutenden Gesundheits-Risiken von gemäßigter Energy-Drink-Konsum.' Ich suche für diese Studie... und ich finde, dass es von Red Bull finanziert wurde und in einem Journal mit niedriger Auswirkungs-Faktor veröffentlicht wurde. Die größeren, unabhängigen Studien, die in Haupt-Medizin-Journalen veröffentlicht wurden, fanden das Gegenteil.

Mein Konklusion: Diese Website SIEHT professionell und glaubwürdig aus, aber laterales Lesen zeigt, dass sie Industrie-finanziert ist und ihre Aussagen widersprechen der unabhängigen Evidenz. Ich WÜRDE NICHT diese als eine Quelle in meinem Projekt nutzen.

Dieser ganze Prozess nahm mich ungefähr 3 Minuten. Und ich las kaum den Artikel selbst — weil der Artikel nicht da ist, wo die Wahrheit ist. Die Wahrheit ist in was UNABHÄNGIGE Quellen sagen."

### Rote Flags und Grüne Flags

**Rote Flags (Gründe vorsichtig zu sein):**
- Die Website hat ein finanzielles Interesse im Thema (z.B., ein Essen-Firma's Website über Ernährung, eine Fossil-Fuel-Firma's Website über Klima-Änderung)
- Die "Über Uns"-Seite beschreibt die Organisation in vagen, positiven Terminen ohne spezifische Menschen, Finanzierung oder institutionelle Verbindungen zu nennen
- Die Website zitiert "Studien" aber verbindet nicht dazu oder nennt sie nicht spezifisch
- Keine anderen vertrauenswürdigen, unabhängigen Quellen machen die gleichen Aussagen
- Die URL ist designed, vertrauenswürdig zu klingen, aber ist tatsächlich eine private Organisation (.org bedeutet nicht non-profit oder glaubwürdig — jeder kann .org registrieren)
- Die Website attackiert Haupt-Wissenschaft oder Haupt-Institutionen ("Was die NHS nicht möchte, dass du weißt...")

**Grüne Flags (Gründe selbstbewusster zu sein):**
- Die Website wird veröffentlicht durch eine erkannte Institution (Universität, Regierungs-Gesundheits-Behörde, etablierte Nachrichts-Auslass mit redaktionellen Standards)
- Unabhängige Quellen bestätigen die gleiche Information
- Spezifische Aussagen können zu benannten, Peer-reviewed Studien verfolgbar sein
- Die Website würdigt Unklarheit und Komplexität statt absolute Aussagen zu machen
- Des Autor's Anmeldedaten können unabhängig verifiziert werden
- Der Inhalt ist konsistent mit was du findest durch laterales Lesen

**Wichtig: grüne Flags sind kein Beweis.** Selbst etablierte Institutionen können Fehler veröffentlichen, und zuverlässig-aussehende Quellen können auf spezifischen Aussagen falsch sein. Grüne Flags erhöhen Selbstbewusstsein; sie garantieren nicht Genauigkeit. Prüf immer spezifische Aussagen gegen andere Quellen.

### SuS-Checkliste

**SIFT-Check — Nutze das wenn du evaluierst jede Website für dein Projekt**

| Schritt | Aktion | ✓ |
|-------|--------|---|
| **STOP** | Ich HABE NICHT noch anfangend, den Artikel zu lesen. Ich werde zuerst evaluieren. | |
| **INVESTIGATE** | Ich suchte die Organisations-Name in einer neuen Tab. Ich weiß wer hinter diese Website steckt. | |
| **INVESTIGATE** | Ich suchte "[Organisation] Finanzierung" oder "unterstützt durch." Ich weiß wer sie finanziert. | |
| **INVESTIGATE** | Die Organisation hat / hat nicht ein finanzielles Interesse in diesem Thema. | |
| **FIND** | Ich suchte die Haupt-Aussage in einer neuen Tab. Andere vertrauenswürdige Quellen einverstanden / nicht einverstanden / ich kann nicht finden irgend eine andere Quelle machen diese Aussage. | |
| **TRACE** | Ich fand eine spezifische Statistik oder Aussage und verfolgt es zum Original-Quelle. Die Original-Quelle unterstützt / unterstützt nicht was die Website sagt. | |
| **MY VERDICT** | Basierend auf lateralem Lesen, ich rate diese Quelle als: Zuverlässig / Nutze mit Vorsicht / Nutze Nicht | |
| **MY REASONING** | Ich erreichte diesen Urteil, weil: _________________________________ | |

---

## Bekannte Limitierungen

1. **Laterales Lesen erfordert Internet-Zugang und Zeit.** Der SIFT-Prozess nimmt 3–5 Minuten pro Quelle, was für ein Forschungs-Projekt handhabbar ist aber unbrauchbar für jedes Stück Information, das SuS Online-begegnen. Die Skill lehrt ein thorough Evaluierungs-Prozess, am besten geeignet für akademische Forschungs-Aufgaben — SuS brauchen auch schneller Heuristiken für alltägliche Digital-Literacy (z.B., "prüfe die Quelle bevor teilen"), das dieses Protokoll nicht abdeckt.

2. **Das Protokoll lehrt Evaluierung von einzelnen Quellen, aber nicht Synthese über Quellen.** Ein SuS, das eine Website evaluieren kann, kann noch ringen zu synthesieren Information von mehrfachen Quellen, konfliktierend-Evidenz abzuwiegen oder zu erkennen, dass selbst glaubwürdige Quellen disagreieren können. Quellen-Evaluierung ist ein notwendig aber nicht ausreichend Fähigkeit für Forschungs-Kompetenz.

3. **Einige Quellentypen sind schwieriger laterales Lesen zu evaluieren, als andere.** Websites und Nachrichtenartikel sind verhältnismäßig straightforward prüfen — Organisationen und Autoren können gesucht werden. Social-Media-Posts, anonymous Forum-Beiträge und viral Inhalt geteilt ohne Zuordnung sind viel schwieriger verfolgbar. Das Protokoll ist am wirksamsten für Quellen mit identifizierbaren Autoren und Herausgebern.
