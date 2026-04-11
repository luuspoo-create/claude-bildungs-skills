---
# AGENT SKILLS STANDARD FIELDS (v2)
name: medienanalyse-protokoll
description: "Entwurf eines Protokolls zur Medienanalyse, das Überzeugungstechniken, Bias oder Darstellung in Medientexten analysiert. Einsatz beim Unterrichten von kritischem Lesen von Werbung, Nachrichten oder Social-Media-Inhalten."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-medienkompetenz/medienanalyse-protokoll"
skill_name: "Protokoll zur Mediendekonstruktion"
domain: "schule-medienkompetenz"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Hobbs (2010) — Digital and Media Literacy: a plan of action"
  - "Buckingham (2003) — Media Education: literacy, learning and contemporary culture"
  - "Kellner & Share (2007) — Critical media literacy, democracy, and the reconstruction of education"
  - "Aufderheide (1993) — Media Literacy: a report of the national leadership conference on media literacy"
  - "Hobbs & Jensen (2009) — The past, present, and future of media literacy education"
input_schema:
  required:
    - field: "medientyp"
      type: "string"
      description: "Der Typ des Medientextes, der analysiert wird — z.B. Werbeanzeige, Nachrichtenartikel, Social-Media-Post, Kampagnenmaterial, Filmclip, Infografik, Podcast"
    - field: "analysefokus"
      type: "string"
      description: "Was die LP SuS bemerken möchte — z.B. Überzeugungstechniken, Darstellung, Bias, Zielgruppen-Targeting, Auslassung"
    - field: "sus_niveau"
      type: "string"
      description: "Jahrgangsstufe/Klasse"
  optional:
    - field: "spezifischer_text"
      type: "string"
      description: "Beschreibung des spezifischen Medientextes, der analysiert wird"
    - field: "sus_profile"
      type: "array"
      description: "Aus Kontextmotor: vorherige Medienliteracy-Erfahrung, kultureller Hintergrund"
    - field: "fachgebiet"
      type: "string"
      description: "Der Curriculums-Fachkontext — z.B. Deutsch, PICTS, Medienbildung, Citizenship"
    - field: "lernziele"
      type: "string"
      description: "Spezifische Lernziele für diese Analyse"
output_schema:
  type: "object"
  fields:
    - field: "dekonstruktions_protokoll"
      type: "object"
      description: "Strukturiertes Analyse-Framework mit medientypspezifischen Fragen, organisiert nach analytischen Kategorien"
    - field: "lehrpersonen_modellierung"
      type: "string"
      description: "Skript, das die LP-Modellierung der Analyse mit einem spezifischen Beispiel zeigt"
    - field: "sus_aktivitaet"
      type: "object"
      description: "Strukturierte Aktivität, die SuS mit dem Protokoll durchführen"
    - field: "vertiefungsfragen"
      type: "array"
      description: "Tiefere analytische Fragen für SuS, die das Basisprotokoll abschließen"
chains_well_with:
  - "quellenbewertung-protokoll"
  - "kritisches-denken-aufgaben"
  - "argument-struktur-scaffolds"
  - "sokrates-fragenseq-generator"
teacher_time: "3 minutes"
tags: ["medienliteracy", "kritisches-denken", "darstellung", "überzeugung", "dekonstruktion", "Lehrplan-21", "MI.1"]
---

# Protokoll zur Mediendekonstruktion

## Was diese Skill tut

Generiert ein strukturiertes Analyse-Framework für die Dekonstruktion eines spezifischen Medientexts — Werbeanzeige, Nachrichtenartikel, Social-Media-Post, Politische Kampagne, Filmclip, Infografik. Das Framework geht über oberflächliche Beobachtung ("Welche Farben werden verwendet?") hinaus, um SuS zu lehren, wie Medientexte konstruiert sind, um Zielgruppen zu positionieren, Menschen und Ideen darzustellen und bestimmten Zwecken zu dienen. Die Ausgabe enthält ein medientypspezifisches Dekonstruktions-Protokoll, ein LP-Modellierungs-Skript und eine strukturierte SuS-Aktivität. KI ist besonders wertvoll, weil effektive Medienliteracy sowohl allgemeine Prinzipien als auch medientypspezifisches Wissen erfordert — die Techniken in einer TV-Werbung unterscheiden sich von denen in einer Nachrichtenüberschrift oder einem Social-Media-Post, und effektive Analyse-Protokolle müssen diese Unterschiede widerspiegeln.

## Evidenzgrundlage

Hobbs (2010) etablierte, dass Medienliteracy fünf Kompetenzen erfordert: access (Medien finden und nutzen), analyse (verstehen, wie Medienbotschaften konstruiert sind), create (Medien produzieren), reflect (eigene Medienkonsum-Gewohnheiten überdenken), und act (Medien verantwortungsvoll nutzen). Diese Skill konzentriert sich auf die "analyse"-Kompetenz. Buckingham (2003) identifizierte vier Schlüsselkonzepte für Medienanalyse: production (wer machte das und warum?), language (welche Techniken werden genutzt?), representation (wie werden Menschen, Ereignisse und Ideen dargestellt?), und audience (wer ist die Zielgruppe und wie werden sie positioniert?). Diese Konzepte bilden das analytische Framework für Mediendekonstruktion. Kellner & Share (2007) betonten, dass kritische Medienliteracy über technische Analyse hinausgehen muss, um Fragen von Macht, Ideologie und sozialer Gerechtigkeit zu adressieren — nicht nur "wie ist das gemacht?" sondern "wessen Interessen dient das?" und "welche Perspektive fehlt?" Aufderheide (1993) etablierte das Grundprinzip, dass alle Medienbotschaften konstruiert sind — Ergebnis von Entscheidungen, was eingeschlossen, ausgeschlossen, betont und heruntergespielt wird. Hobbs & Jensen (2009) argumentierten, dass Medienliteracy explizit unterrichtet und strukturiert werden muss — SuS entwickeln kritische Analyse-Fähigkeiten nicht natürlicherweise durch Medienkonsum.

## Eingabeschema

Die Lehrperson muss bereitstellen:
- **Medientyp:** Der Typ des Medientextes. *z.B. "Instagram-Werbeanzeige" / "SRF-News-Artikel" / "Politisches Kampagnen-Poster" / "TikTok-Video" / "Zeitungsfront-Seite" / "Dokumentarclip"*
- **Analysefokus:** Worauf zu achten ist. *z.B. "Überzeugungstechniken für Jugendliche — wie die Anzeige Wunsch durch Lifestyle-Assoziation schafft" / "Wie der Artikel die Frage als umstritten darstellt" / "Darstellung von Geschlecht in der Werbung" / "Was eingeschlossen und was weggelassen ist"*
- **SuS-Niveau:** Jahrgangsstufe. *z.B. "9. Klasse"*

Optional (injiziert vom Kontextmotor, falls verfügbar):
- **Spezifischer Text:** Beschreibung des aktuellen Medientextes
- **SuS-Profile:** Vorherige Medienliteracy-Erfahrung, kultureller Hintergrund
- **Fachgebiet:** Der Curriculum-Fachkontext
- **Lernziele:** Spezifische Ziele für diese Analyse

## Prompt

```
Du bist ein Experte für Medienliteracy-Pädagogik mit tiefem Wissen von Hobbs (2010), Buckingham (2003), Kellner & Share (2007), und Aufderheide (1993). Du verstehst, dass effektive Medienanalyse sowohl allgemeine kritische Denk-Prinzipien als auch medientypspezifisches Wissen über die spezifischen Techniken erfordert, die bestimmte Medienformen nutzen, um Bedeutung zu konstruieren.

Deine Aufgabe ist es, ein Mediendekonstruktions-Protokoll für folgendes zu generieren:

**Medientyp:** {{medientyp}}
**Analysefokus:** {{analysefokus}}
**SuS-Niveau:** {{sus_niveau}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Verwende alles Verfügbare; ignoriere alle als "nicht bereitgestellt" gekennzeichneten Felder.

**Spezifischer Text:** {{spezifischer_text}} — falls nicht bereitgestellt, erstelle ein plausibl Beispiel dieses Medientyps für das Modellierungs-Skript.
**SuS-Profile:** {{sus_profile}} — falls nicht bereitgestellt, nimm an, dass SuS alltägliche Erfahrung mit diesem Medientyp haben, aber nicht formell unterrichtet wurden, ihn kritisch zu analysieren.
**Fachgebiet:** {{fachgebiet}} — falls nicht bereitgestellt, entwirfe für einen allgemeinen Medienliteracy-Kontext.
**Lernziele:** {{lernziele}} — falls nicht bereitgestellt, leite angemessene Ziele aus dem Medientyp und Analysefokus ab.

Wende diese evidenzgestützten Prinzipien an:

1. **Alle Medienbotschaften sind konstruiert (Aufderheide, 1993):**
   - Grundprinzip: nichts in einem Medientext ist zufällig. Jedes Element — Bild, Wort, Farbe, Winkel, Framing, Sequenz, was enthalten ist, was ausgeschlossen ist — ist Ergebnis einer Entscheidung.
   - Das Protokoll sollte SuS lehren, "Warum wurde diese Entscheidung getroffen?" zu fragen, nicht nur "Was sehe ich?"

2. **Buckinghams vier Schlüsselkonzepte (Buckingham, 2003):**
   Strukturiere die Analyse um vier Kategorien:
   - **Production:** Wer machte das? Warum? Wer finanzierte es? Was sind ihre Interessen?
   - **Language:** Welche spezifischen Techniken werden genutzt? (Das ist medientypspezifisch.) Wie erschaffen diese Bedeutung oder Emotion?
   - **Representation:** Wie werden Menschen, Ereignisse, Orte und Ideen dargestellt? Welche Stereotypen oder Annahmen sind vorhanden? Wessen Perspektive ist zentral, und wessen ist marginalisiert oder abwesend?
   - **Audience:** Wer ist die Zielgruppe? Wie versucht der Text, die Zielgruppe zu positionieren? Wie könnten verschiedene Zielgruppen unterschiedlich reagieren?

3. **Addiere die "Auslassung"-Frage (Kellner & Share, 2007):**
   - Was ist NICHT gezeigt, gesagt oder enthalten? Das ist oft die mächtigste analytische Frage.
   - Welche alternative Perspektiven, Evidenz oder Darstellungen fehlen?
   - Wessen Stimme wird nicht gehört?

4. **Medientypspezifische Techniken:**
   - Adaptiere die "Language"-Analyse auf den spezifischen Medientyp.
   - Werbung: Kamerawinkel, Beleuchtung, Farbe, Körpersprache, Musik, Slogans, Celebrity-Endorsement, Lifestyle-Assoziation, emotionaler Appeal
   - Nachrichten: Headline-Framing, Quellen-Auswahl, Zitat-Platzierung, Aktiv/Passiv-Stimme, Bild-Auswahl, Story-Positionierung
   - Social Media: Algorithm-Bewusstsein, Engagement-Techniken, parasoziale Beziehungen, Filter-Effekte, Shareability-Design
   - Film/Video: Schuss-Komposition, Schnitt, Musik, Narrativ-Struktur, Blickpunkt
   - Politisches Material: emotionaler Appeal, Uns/Ihnen-Framing, Statistik-Präsentation, visuelles Symbolismus

5. **Modelliere die Analyse explizit:**
   - Inkludiere ein LP-Modellierungs-Skript, das den analytischen Denkprozess demonstriert — nicht nur Techniken identifizieren, sondern erklären, wie sie die Zielgruppe positionieren.

Gib deine Ausgabe in diesem exakten Format zurück:

## Mediendekonstruktions-Protokoll: [Medientyp]

**Für:** [SuS-Niveau]
**Fokus:** [Analysefokus]
**Schlüsselprinzip:** Alle Medienbotschaften sind konstruiert — jede Entscheidung dient einem Zweck.

### Das Protokoll

**Kategorie 1: Production — Wer machte das und warum?**
[Fragen spezifisch für diesen Medientyp]

**Kategorie 2: Language — Welche Techniken werden genutzt?**
[Medientypspezifische Techniken-Analyse-Fragen]

**Kategorie 3: Representation — Wie werden Menschen und Ideen dargestellt?**
[Fragen zu Darstellung, Stereotypen, Perspektiven]

**Kategorie 4: Audience — Für wen ist das und wie wird es positioniert?**
[Fragen zu Zielgruppe und Zielgruppen-Positionierung]

**Kategorie 5: Omission — Was fehlt?**
[Fragen zu dem, was nicht gezeigt, gesagt oder enthalten ist]

### LP-Modellierungs-Skript

[Think-aloud-Skript, das die Analyse eines spezifischen Beispiels demonstriert, durchgearbeitet durch die Protokoll-Kategorien]

### SuS-Aktivität

[Strukturierte Aktivität, wobei SuS das Protokoll anwenden — Format angemessen für den Medientyp und SuS-Niveau]

### Vertiefungsfragen

[3–4 tiefere analytische Fragen für SuS, die das Basisprotokoll abschließen]

**Selbstkontrolle vor der Rückgabe:** Verifiziere dass (a) das Protokoll spezifisch für den genannten Medientyp ist, nicht generisch, (b) jede Kategorie Fragen enthält, die kritisches Denken lehren, nicht nur Beobachtung, (c) die "Omission"-Kategorie ist enthalten, (d) das Modellierungs-Skript analytisches Denken (Erklären WARUM Entscheidungen gemacht wurden) demonstriert, nicht nur Identifikation von Techniken, und (e) die SuS-Aktivität echte Analyse erfordert, nicht nur Beschreibung.
```

## Beispielausgabe

**Szenario:** *Medientyp: "Instagram-Werbeanzeige" / Analysefokus: "Überzeugungstechniken für Jugendliche — Lifestyle-Assoziation und sozialer Beweis" / SuS-Niveau: "9. Klasse" / Fachgebiet: "Deutsch / Medienliteracy"*

---

## Mediendekonstruktions-Protokoll: Instagram-Werbeanzeige

**Für:** 9. Klasse Deutsch / Medienliteracy
**Fokus:** Überzeugungstechniken für Jugendliche — Lifestyle-Assoziation und sozialer Beweis
**Schlüsselprinzip:** Alle Medienbotschaften sind konstruiert — jede Entscheidung dient einem Zweck. Eine Instagram-Anzeige, die beiläufig und "real" wirkt, ist Resultat von Dutzenden deliberaten Entscheidungen, um dich ein bestimmtes Gefühl zu lassen.

### Das Protokoll

**Kategorie 1: Production — Wer machte das und warum?**
- Wer ist die Marke? Was verkaufen sie? Was wollen sie, dass du TUST, nachdem du die Anzeige siehst? (Kaufen, folgen, teilen, ein Gefühl haben?)
- Ist dies klar als Werbung labeled, oder sieht es wie organischer Inhalt aus? Warum könnte die Marke wollen, dass es organisch aussieht?
- Falls ein Influencer ist enthalten: sind sie bezahlt? Ist es ein #ad oder #sponsored-Tag? (Viele gesponserte Posts sind nicht klar gelabelt.)
- Was ist das Business-Modell? Wie verdient die Marke Geld, wenn du die Anzeige siehst?

**Kategorie 2: Language — Welche Techniken werden genutzt?**
*Visuelle Techniken:*
- Welche ist die Farbpalette? Warm, kühl, gedimmt, vibrant? Welche Stimmung schafft sie?
- Welches ist das Setting? Assoziiert es das Produkt mit einem bestimmten Lifestyle (Reisen, Fitness, Luxus, Freundschaft, Kreativität)?
- Wie ist die Person fotografiert? Candid oder posiert? Nah oder Ganzkörper? Schaut die Camera an (Verbindung schaffend) oder schaut weg (Aspiration schaffend)?
- Sieht das Bild "real" oder "kuratiert" aus? Wie kannst du das sagen? Falls es effortlos natürlich aussieht, betrachte: wie viel Effort ging dahin, dass es effortlos aussieht?

*Text- und Caption-Techniken:*
- Welcher ist der Ton des Captions? Casual, funny, inspirational, urgent? Klingt es wie ein Freund, der redet, nicht wie eine Firma, die verkauft?
- Enthält der Caption einen Call-to-Action? ("Jetzt kaufen," "Link in Bio," "Markiere einen Freund, der das braucht")
- Nutzt er sozialen Beweis? ("Tausende glückliche Kunden," "Gesehen in...," Engagement-Zahlen)
- Schafft er Urgency oder Scarcity? ("Limited edition," "Nur heute verfügbar," "Verkauft sich schnell")

*Platform-spezifische Techniken:*
- Wie nutzt diese Anzeige Instagrams spezifische Features? (Stories-Format, Swipe-up, Carousel, Reels, Shopping-Tags)
- Ist sie designed, geteilt oder gespeichert zu werden? Was macht sie shareable?
- Wie interagiert sie mit dem Algorithm? (Engagement-Bait, Comment-Prompts, Save-worthy-Inhalt)

**Kategorie 3: Representation — Wie werden Menschen und Ideen dargestellt?**
- Wer ist in der Anzeige gezeigt? Was sehen sie aus? (Alter, Körpertyp, Ethnizität, Geschlecht, Stil)
- Welchen Typ Leben sind sie gezeigt, zu leben? Ist das realistisch, oder ist es eine idealisierte Version?
- Welche WERTE werden mit dem Produkt assoziiert? (Freiheit, Schönheit, Vertrauen, Popularität, Erfolg, Rebellion, Gehörigkeit)
- Sind Stereotypen wird genutzt oder herausgefordert? Wie?
- Wer ist NICHT gezeigt? Welche Körper, Identitäten, Lebensstile oder Erfahrungen sind abwesend?

**Kategorie 4: Audience — Für wen ist das und wie wird es positioniert?**
- Wer ist die Zielgruppe? Wie weißt du? (Betrachte: Alter, Interessen, Lifestyle, Werte, Unsicherheiten)
- Wie WILL die Anzeige, dass die Zielgruppe sich fühlt? (Inspiriert, inadäquat, aufgeregt, neidisch, enthalten, empowered)
- Welchen Wunsch schafft oder aktiviert die Anzeige? (Der Wunsch, so auszusehen wie das, so zu leben wie das, Teil dieser Gruppe zu sein)
- Was ist die implizite Botschaft? "Falls du dieses Produkt kaufst, wirst du..." (Vollendet den Satz — das ist die Anzeiges zugrundeliegende Versprechen.)
- Wie könnte jemand AUßERHALB der Zielgruppe anders auf diese Anzeige reagieren?

**Kategorie 5: Omission — Was fehlt?**
- Was ist NICHT gezeigt über das Produkt? (Preis, Qualität, ethische Produktion, Umweltimpact)
- Was ist NICHT gezeigt über den Lifestyle? (Die Anstrengung, Kosten, Vorrecht oder das Staging hinter dem "effortlosen" Bild)
- Was ist NICHT gezeigt über die Person in der Anzeige? (Editing, Filter, professionelle Beleuchtung, mehrere Takes, ihre aktuelle Beziehung zum Produkt)
- Welche alternative Perspektiven auf das Produkt sind abwesend? (Negative Bewertungen, Konkurrenten, Menschen, die es nicht wollen oder nicht leisten können)
- Falls dies Influencer-Inhalt ist: was ist NICHT offengelegt über die finanzielle Beziehung zwischen der Marke und dem Influencer?

### LP-Modellierungs-Skript

"Ich zeige euch, wie ich eine Instagram-Anzeige analysiere. Ich schaue eine Post von einer Fitness-Clothing-Marke an — sie zeigt eine junge Frau in Workout-Kleidung, sich auf einem Dach streckend bei Sonnenaufgang, mit einer Stadt-Skyline hinter ihr. Der Caption sagt: 'Dein einziger Konkurrenz bist du selbst. Starte deine Reise. 🌅 #NoBoundaries #FitnessGoals. Kaufe die Kollektion — Link in Bio.'

Lass mich das durcharbeiten.

**Production:** Das ist von einer Fitness-Clothing-Marke. Sie wollen, dass ich ihre Kleidung kaufe. Aber bemerke — das sieht NICHT wie eine Anzeige aus. Es gibt kein großes 'JETZT KAUFEN' in riesigen Lettern. Es sieht aus wie etwas, das eine echte Person über ihr Morgen-Workout postete. Das ist eine deliberate Entscheidung — sie wollen, dass das authentisch wirkt, nicht kommerziell, weil wir authentisch-aussehenden Inhalt mehr trauen als offensichtliche Werbung.

**Language:** Schau auf die visuellen Entscheidungen. Sonnenaufgang — warmes, goldenes Licht. Ein Dach — elevated, aspirational. Sie ist allein — das sagt 'independent, strong, self-motivated.' Die Stadt unten ihr — sie ist buchstäblich über allem. Nichts davon ist zufällig. Jemand wählte diesen Ort, diese Tageszeit, diesen Winkel, um ein Gefühl von Ruhe, Stärke und Aspiration zu schaffen.

Der Caption ist interessant: 'Dein einziger Konkurrenz bist du selbst.' Es klingt wie ein Motivations-Zitat, nicht ein Sales-Pitch. Es positioniert die Marke als über Selbstverbesserung, nicht Konsum. Aber es IST ein Sales-Pitch — es will nur nicht, dass du das bemerkst.

**Representation:** Die Frau ist jung, schlank, fit und konventionell attraktiv. Sie repräsentiert eine idealisierte Version des 'Fitness-Lifestyles.' Das ist wer die Marke dich SEIN lassen WILL. Frage dich selbst: Wie viele Menschen machen wirklich Yoga auf Dächern bei Sonnenaufgang? Das ist eine Fantasie — aber es wird präsentiert als erreichbare Realität, falls du nur die Kleidung kaufst und 'deine Reise startest.'

**Audience:** Das zielt auf junge Frauen, interessiert in Fitness und Selbstverbesserung. Es WILL mich inspiriert aber auch ein bisschen inadäquat fühlen — wie ich KÖNNTE so ruhig, so fit, so zusammen sein, falls ich nur diesen ersten Schritt nehmen würde. Und conveniently, dieser erste Schritt ist... ihre Kleidung kaufen.

**Omission:** Was ist hier NICHT? Wir sehen nicht den Fotografen, die Beleuchtungs-Rig, die zwanzig Takes, um diesen Schuss zu bekommen. Wir sehen nicht das Preisschild. Wir sehen nicht die Fabrik, wo die Kleidung gemacht wurde. Wir sehen nicht das echte Morgen dieses Modells (das wahrscheinlich um 4am für ein bezahltes Photoshoot anfing, nicht ein spontanes Dach-Workout). Das 'real'-Gefühl ist vollständig manufakturiert — aber das ist der Punkt."

### SuS-Aktivität

**Schritt 1 — Individuelle Analyse (10 Minuten):**
Jede SuS wählt eine Instagram-Anzeige (geliefert von der LP oder von ihrem eigenen Feed gefunden). Sie arbeitet durch die Protokoll-Kategorien, die ihre Analyse in der folgenden Tabelle aufschreibend:

| Kategorie | Was ich bemerke | Welche Entscheidungen wurden gemacht und WARUM |
|----------|-----------------|-------------------------------------|
| Production | | |
| Language (visuell) | | |
| Language (text) | | |
| Representation | | |
| Audience | | |
| Omission | | |

**Schritt 2 — Pair-Vergleich (5 Minuten):**
SuS tauschen Anzeigen mit einem Partner und vergleichen Analysen. Fokus-Frage: "Bemerkte dein Partner etwas, das du verpasst hast? Was sahen sie in der 'Omission'-Kategorie?"

**Schritt 3 — Klassendisku (5 Minuten):**
"Was war die effektivste Überzeungs-Technik, die du fand? Warum ist sie effektiv? Und — jetzt, dass du siehst, wie sie funktioniert — funktioniert sie noch auf dich? Kannst du durch eine Technik überzeug werden, die du identifizieren kannst?"

### Vertiefungsfragen

1. "Finde zwei Anzeigen für ähnliche Produkte (z.B. zwei Fitness-Marken, zwei Skincare-Marken). Wie unterscheiden sie sich in ihrer Darstellung und Zielgruppen-Positionierung? Was sagt dir das über, wie Marken Identität durch Werbung schaffen?"

2. "Wähle eine Anzeige, die einen Influencer nutzt. Recherchiere den Influencer: Wie viel werden sie bezahlt? Wie viele ähnliche Brand-Deals haben sie? Ändert das Wissen das dein Lesen ihrer 'authentischen' Endorsement?"

3. "Redesigne die Anzeige aus der Perspektive, die sie auslässt. Falls die Anzeige einen idealisierten Lifestyle zeigt, erstelle eine Version, die die Realität hinter dem Bild zeigt. Was ändert sich? Was geht verloren?"

4. "Sollte Instagram alle Anzeigen klar labeln? Sollten Filter offengelegt werden? Argumentiere deine Position nutzen das analytische Framework, das wir trainiert haben."

---

## Bekannte Limitierungen

1. **Medienanalyse kann formulaisch werden.** Falls SuS das Protokoll mechanisch anwenden ("Farbe: warm. Zielgruppe: Jugendliche. Technik: Lifestyle-Assoziation") ohne zu engagieren, WARUM diese Entscheidungen zählen, wird die Analyse eine deskriptive Übung statt eine kritische. LP sollte nach dem "So what?" drücken — nicht nur "Welche Techniken werden genutzt?" sondern "Welchen Effekt haben sie auf DICH?"

2. **Das Protokoll widerspiegelt eine primär Westliche Medien-Analyse-Tradition.** Medien-Konventionen, Werbe-Techniken und Zielgruppen-Erwartungen variieren über Kulturen. SuS von verschiedenen kulturellen Hintergründen können denselben Medientext unterschiedlich lesen — diese Unterschiede sollten als Bereicherung der Analyse behandelt werden, nicht als Fehler. Das Protokoll sollte adaptiert werden, wenn nicht-Westliche Medien analysiert werden.

3. **Medien kritisch analysieren ist nicht dasselbe wie Medien ablehnen.** Ein Risiko der Medienliteracy-Anleitung ist, dass SuS zynisch werden statt kritisch — alles misstrauen statt spezifisch zu evaluieren. Das Protokoll sollte SuS helfen, zwischen legitimer Überzeugung (transparent über ihren Zweck) und Manipulation (verbirgt ihren Zweck) zu unterscheiden, nicht lehren, dass alle Medien deceptiv sind.
