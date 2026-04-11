---
# AGENT SKILLS STANDARD FIELDS (v2)
name: outdoor-lernsequenz-designer
description: "Konzipiere eine strukturierte Aussenunterricht-Sequenz, die Lehrplan-Ziele in einen verfügbaren Aussenraum einbettet. Verwende, wenn du Lektionen im Schulgelände, Parks oder lokalen Naturräumen planst."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-erfahrungslernen/outdoor-lernsequenz-designer"
skill_name: "Outdoor-Lernsequenz Designer"
domain: "schule-erfahrungslernen"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Education Endowment Foundation (2019) — Outdoor Adventure Learning systematic review"
  - "Rickinson, Dillon, Teamey, Morris, Choi, Sanders & Benefield (2004) — A Review of Research on Outdoor Learning"
  - "Waite (2011) — Children learning outside the classroom: from birth to eleven"
  - "Beames, Higgins & Nicol (2012) — Learning Outside the Classroom: theory and guidelines for practice"
  - "Mannion, Mattu & Wilson (2015) — Teaching, learning and play in the outdoors"
input_schema:
  required:
    - field: "lernziel"
      type: "string"
      description: "Das spezifische Lehrplan-Ziel oder die Fähigkeit, die SuS erlernen werden — wofür die Aussenaktivität ist, pädagogisch"
    - field: "aussenraum"
      type: "string"
      description: "Der verfügbare Aussenraum — Schulgelände, lokaler Park, Wald, Feld, Spielplatz, Garten"
  optional:
    - field: "schuelear"
      type: "string"
      description: "Altersgruppe / Klassenstufe"
    - field: "fachbereich"
      type: "string"
      description: "Der Lehrplan-Fachbereich"
    - field: "klassengresse"
      type: "string"
      description: "Anzahl SuS und verfügbare Erwachsenen-Unterstützung"
    - field: "verfuegbare_zeit"
      type: "string"
      description: "Wie lange die Aussenlektion dauert"
    - field: "wetter_constraints"
      type: "string"
      description: "Jahreszeit, typisches Wetter, alle Constraints"
    - field: "risiko_faktoren"
      type: "string"
      description: "Bekannte Risiken — Verkehr, Wasser, Terrain, SuS-Bedürfnisse"
output_schema:
  type: "object"
  fields:
    - field: "outdoor_sequenz"
      type: "object"
      description: "Die komplette Aussenunterricht-Sequenz — Innenvorbereitung, Aussenaktivität, Innen-Nachbearbeitung"
    - field: "lerndesign"
      type: "object"
      description: "Wie das Aussenelament das Lernziel dient — was ausserhalb gelehrt werden kann, das nicht drinnen kann"
    - field: "sicherheits_rahmen"
      type: "object"
      description: "Risiko-Nutzen-Bewertung, Sicherheits-Verfahren, Erwachsenen-Rollen"
    - field: "innen_aussen_kontinuitaet"
      type: "object"
      description: "Wie Innen- und Aussenelemente verbinden — die Aussenlektion ist kein separates Event sondern Teil einer kohärenten Sequenz"
chains_well_with:
  - "oekologische-forschungsfrage-designer"
  - "biophile-lernumgebung-designer"
teacher_time: "4 minutes"
tags: ["outdoor-learning", "EEF", "Rickinson", "aussenunterricht", "feldarbeit", "natur", "erfahrungslernen", "Lehrplan-21"]
---

# Outdoor-Lernsequenz Designer

## Was diese Skill leistet

Konzipiert eine strukturierte Aussenunterricht-Sequenz, wo das Aussenelament ein spezifisches Lehrplan-Lernziel dient — nicht als Belohnung, Szenenwechsel oder generelle Wohlbefinden-Aktivität, sondern als Lernerlebnis, das nutzt, was die Aussenumgebung unique anbietet. Das kritische Prinzip aus Rickinson et al.'s (2004) Überprüfung ist, dass Aussenunterricht am wirkungsvollsten ist, wenn es klare Lernintentionen hat, zu Innen-Lernen verbunden ist (Vorbereitung vorher, Nachbearbeitung hinterher) und SuS in aktiver Forschung mit der Aussenumgebung als primäre Ressource einbindet. Der Output beinhaltet die komplette Sequenz (Innenvorbereitung, Aussenaktivität, Innen-Nachbearbeitung), ein Lerndesign, das erklärt warum das Aussenelament das Ziel besser als Innen-Alternative dient, einen Sicherheits-Rahmen und Innen-Aussen-Kontinuitäts-Planung.

## Evidenzgrundlagen

Das Education Endowment Foundation (2019) führte eine systematische Überprüfung des Aussenabenteuerlernens durch, findet moderate aber konsistente positive Effekte auf akademische Outcomes (besonders für benachteiligte SuS) und stärkere Effekte auf nicht-akademische Outcomes inklusive Selbstvertrauen, Selbst-Wirksamkeit, Motivation und Teamfähigkeit. Kritisch, die EEF fand, dass strukturiertes Aussenunterricht mit klaren Lernzielen bessere Outcomes produzierte als unstrukturierte Aussenzeit. Rickinson et al. (2004) produzierte die umfassendste Überprüfung der Aussenunterricht-Forschung, identifiziert drei Schlüssel-Kontexte: Feldarbeit und Aussenbesuche (mit Fächern verknüpft), Abenteuer-Aussenbildung (Residential, Team-Building) und Schulgelände- und Gemeinschafts-Projekte. Sie fanden, dass gut-designte Feldarbeit langfristiges Gedächtnis des Fach-Inhalts, praktische Forschungs-Fähigkeiten und erhöhtes Engagement verbessert — aber schlecht-designte Aussenaktivitäten (unklar Absicht, schwache Lehrplan-Verbindung) produzierten wenig Lernvorteil ausser Vergnügen. Waite (2011) fokussiert auf jüngere Kinder, zeigt dass Aussenumgebungen natürlich aktives, sensorisches, exploratives Lernen unterstützen, die durch Innenklassenzimmer eingeschränkt sind. Beames, Higgins & Nicol (2012) schlugen eine „Pädagogik des Ortes" vor, argumentierend dass der physische Raum der Anfang-Punkt für Planung sein sollte — nicht der Lehrplan auf einen Aussenort mappiert, sondern die Lernchancen, die der Ort selbst anbietet. Mannion, Mattu & Wilson (2015) dokumentierte effektives Aussenunterricht in schottischen Schulen, emphasiert dass beste Aussenunterricht-Sequenzen drei Phasen einbinden: Antizipation (Vorbereitung), Begegnung (die Aussenserfahrung) und Rückbesinnung (Reflexion und Nachbearbeitung).

## Input Schema

Die Lehrperson muss bereitstellen:
- **Lernziel:** Was SuS erlernen werden. *z.B. „Winkel und Distanzen messen — 8. Klasse Mathematik" / „Habitate und Anpassung verstehen — 6. Klasse Science" / „Beschreibendes Schreiben mit sensorischen Details — 7. Klasse Deutsch" / „Karten-Fähigkeiten und Kompass-Gebrauch — 8. Klasse Geographie"*
- **Aussenraum:** Was verfügbar ist. *z.B. „Schulspielfeld — flaches Grasgelände, einige Bäume am Perimeter, ein Weiher im Schutzgebiet" / „Lokaler Wald — 15 Minuten Spaziergang von der Schule, Wege, Bach, unterschiedliches Terrain" / „Schulspielplatz — Tarmac, Bänke, einige Pflanzer, Aussicht auf die lokale Gegend"*

Optional:
- **Schülerart:** Klassenstufe
- **Fachbereich:** Der Lehrplan-Fachbereich
- **Klassengrösse:** Zahlen und Erwachsenen-Unterstützung
- **Verfügbare Zeit:** Dauer der Aussenlektion
- **Wetter-Constraints:** Jahreszeit und Bedingungen
- **Risiko-Faktoren:** Bekannte Gefahren

## Prompt

```
Du bist Expertin/Experte in Aussenunterricht-Design mit tiefem Wissen über das Education Endowment Foundations (2019) systematische Überprüfung des Aussenabenteuerlernens, Rickinson et al.'s (2004) umfassende Aussenunterricht-Forschungs-Überprüfung, Waites (2011) Forschung zu Kindern, die ausserhalb des Klassenzimmers lernen, Beames, Higgins & Nicols (2012) Pädagogik des Ortes und Mannions, Mattus & Wilsons (2015) drei-Phasen-Aussenunterricht-Modell. Du verstehst, dass Aussenunterricht am wirkungsvollsten ist, wenn es STRUKTURIERT ist (klare Lernziele, nicht einfach „geht raus"), VERBUNDEN (mit Innen-Unterricht vorher und nachher verknüpft) und NUTZT DIE EINZIGARTIGEN FEATURES DES AUSSENRAUMS (unterrichtet etwas, das drinnen nicht gleich gut unterrichtet werden kann).

KRITISCHE PRINZIPIEN:
- **Das Aussenelament muss das Lernziel dienen.** Falls die Lektion gleich gut drinnen unterrichtet werden könnte, gibt es keinen pädagogischen Grund, rauszugehen. Der Aussenraum muss etwas anbieten, das die Klassenzimmer nicht kann: echte Beispiele, authentische Kontexte, räumliche Skala, sensorische Erfahrung oder direkte Phänomen-Beobachtung.
- **Drei-Phasen-Design: Vorbereitung → Begegnung → Reflexion.** Nach Mannion et al. (2015), ist die Aussenlektion die Mitte einer Sequenz, nicht ein eigenständiges Event. Innenvorbereitung baut das Wissen und die Fähigkeiten, die SuS brauchen, um ausserhalb effektiv zu lernen. Die Aussenbegenung ist das Kern-Lernerlebnis. Innen-Nachbearbeitung konsolidiert, analysiert und erweitert, was ausserhalb gelernt wurde.
- **Aktive Forschung, nicht passive Beobachtung.** SuS sollten ETWAS ausserhalb tun, nicht nur Dinge schauen. Daten sammeln. Messen. Skizzieren. Sammeln. Aufzeichnen. Vergleichen. Der Aussenraum ist ein Labor, nicht ein Museum.
- **Sicherheit durch Risiko-Nutzen-Analyse, nicht Risiko-Elimination.** Aussenunterricht beinhaltet Risiken (Wetter, Terrain, Verkehr, Wasser). Der Ansatz ist nicht alle Risiken zu eliminieren (das würde auch Lernen eliminieren), sondern die VORTEILE gegen Risiken zu bewerten und Risiken auf akzeptables Niveau zu managen. Ein Kind, die never managed Risk begegnet, entwickelt nie Risk-Bewertungs-Fähigkeiten.
- **Wetter ist ein Feature, keine Bug.** Regen, Wind, Kälte und Hitze sind Lernbedingungen, nicht Kancelierungs-Bedingungen. Das norwegische Sprichwort: „Es gibt kein schlechtes Wetter, nur schlechte Kleidung." Design die Session, um bei dem wahrscheinlichen Wetter zu arbeiten, nicht nur ideal Bedingungen.

Deine Aufgabe ist es, eine Aussenunterricht-Sequenz zu konzipieren für:

**Lernziel:** {{lernziel}}
**Aussenraum:** {{aussenraum}}

Folgende optionale Kontexte könnten bereitgestellt sein. Nutze, was verfügbar ist; ignoriere Felder mit „nicht angegeben".

**Schülerart:** {{schuelear}} — wenn nicht angegeben, design für allgemeinen schulischen Kontext.
**Fachbereich:** {{fachbereich}} — wenn nicht angegeben, infer aus dem Lernziel.
**Klassengrösse:** {{klassengresse}} — wenn nicht angegeben, design für 30 SuS mit eine LP und eine TA.
**Verfügbare Zeit:** {{verfuegbare_zeit}} — wenn nicht angegeben, design für 60-Minuten-Lektion (inklusive Übergangszeit).
**Wetter-Constraints:** {{wetter_constraints}} — wenn nicht angegeben, design für gemässigtes Klima mit Regen-Contingenz.
**Risiko-Faktoren:** {{risiko_faktoren}} — wenn nicht angegeben, beine standard Aussenrisiko-Bewertungs-Guidance.

Gib dein Output in diesem exakten Format aus:

## Aussenunterricht-Sequenz: [Lernziel]

**Lernziel:** [Was SuS erlernen werden]
**Aussenraum:** [Wo]
**Warum ausserhalb?** [Spezifisch was der Aussenraum bietet, den die Klassenzimmer nicht kann]

### Phase 1 — Vorbereitung (Innen)

[Was SuS wissen, üben oder vorbereiten müssen, bevor sie rausgehen — baut das Wissen, das die Aussenaktivität effektiv macht]

### Phase 2 — Begegnung (Aussen)

**Setup:** [Wie SuS organisieren, Equipment verteilen, Grenzen etablieren]
**Aktivität:** [Schritt-für-Schritt Aussenunterricht-Aktivität — was SuS tun, in welcher Reihenfolge]
**Lehrer-Rolle:** [Was die LP während der Aussenaktivität macht — zirkulierend, fragt, handhabt]
**Schlüssel-Fragen zum fragen ausserhalb:** [Spezifisch Fragen, die SuS' Aufmerksamkeit zum Lernziel lenken]

### Phase 3 — Reflexion (Innen)

[Wie das Aussenunterricht konsolidiert wird — was SuS mit den Daten/Beobachtungen/Erfahrungen tun, die sie ausserhalb sammelt]

### Sicherheits-Rahmen

**Risiko-Nutzen-Bewertung:**
| Risiko | Wahrscheinlichkeit | Schweregrad | Vorteil | Management |
|---|---|---|---|---|
| [Risiko 1] | [G/M/H] | [G/M/H] | [Welcher Lernvorteil rechtfertigt dieses Risiko] | [Wie man das managet] |

**Wetter-Contingenz:** [Was tun, falls sich Wetter ändert — adaptieren, nicht canceln]
**Erwachsenen-Rollen:** [Wer tut was — LP, TA, Eltern-Helfer]

### Innen-Aussen-Kontinuitaet

[Wie die drei Phasen verbinden — die Aussenlektion ist nicht ein separates Event sondern die Mitte einer kohärenten Lernsequenz]

### Equipment und Ressourcen

[Was gebraucht wird — praktisch und minimal gehalten]

**Selbstcheck vor Output:** Vergewissere dich, dass (a) das Aussenelament das Lernziel spezifisch dient, (b) drei-Phasen-Design ist komplett, (c) SuS aktiv ausserhalb forscht, nicht passiv beobachtet, (d) Sicherheits-Rahmen nutzt Risiko-Nutzen-Analyse, und (e) Innen- und Aussen-Phasen sind verbunden.
```

## Beispiel-Output

**Szenario:** *Lernziel: „Beschreibendes Schreiben mit sensorischen Details — 7. Klasse Deutsch. SuS brauchen Beschreibungen zu schreiben, die alle fünf Sinne, spezifisches Vokabular und figurative Sprache (Vergleiche, Metaphern, Personifikation) nutzen. Aktuelle Arbeit ist schwach — Beschreibungen sind generisch und bauen nur auf Sicht." / Aussenraum: „Schulgelände — ein Schutzgebiet mit einem kleinen Weiher, Bäumen (inklusive grosser Eiche), Wiesen-Bereich und Sensorischer Garten gepflanzt von 6. Klasse letztes Jahr. Auch der Haupt-Spielplatz (Tarmac) und das Schulgebäude." / Verfügbare Zeit: „60 Minuten für die Aussenlektion; Vorbereitung und Nachbearbeitung in normalen Deutsch-Lektionen entweder Seite." / Wetter-Constraints: „März — könnte sonnig, kalt, regnerisch oder jede Kombination sein. Unvorhersehbar."*

---

## Aussenunterricht-Sequenz: Sensorisches Beschreibungs-Schreiben — 7. Klasse

**Lernziel:** Beschreibungen schreiben, die alle fünf Sinne, spezifisches Vokabular und figurative Sprache nutzen
**Aussenraum:** Schulschutzgebiet — Weiher, Bäume, Wiese, Sensorischer Garten
**Warum ausserhalb?** Das Klassenzimmer ist eine Sinnes-Wüste — die gleichen Geräusche (Stuhl kratzen, Uhr ticken), die gleichen Düfte (Whiteboard-Marker, Mittagessen aus der Halle), die gleichen Texturen (Schreibtisch, Bleistift, Papier). SuS können keine reichen sensorischen Beschreibungen schreiben, falls sie nichts zu spüren haben. Der Aussenraum bietet authentisch komplexe sensorische Eingabe: Geruch feuchter Erde, Laut Wind durch Äste, Textur Rinde, Anblick Licht auf Wasser, Geschmack Wildes Knoblauch (falls vorhanden und sicher). SuS, die sensorische Reichtum ERLEBEN, schreiben spezifischer als SuS, die gesagt werden, zu „sensorische Detail imaginieren."

### Phase 1 — Vorbereitung (Innen, 30 Minuten, vorherige Lektion)

**Mini-Lektion: Sensorisches Vokabular-Überprüfung.**
Gebe SuS ein Diagramm mit fünf Säulen: Sehen, Hören, Berühren, Riechen, Schmecken. Herausforderung: „Beschreibe dieses Klassenzimmer mit ALLEN fünf Sinnen. Schreibe mindestens drei spezifische Details pro Sinn." SuS werden finden, dass: Sehen ist leicht, Hören ist möglich, Berühren ist begrenzt, Riechen ist begrenzt, Schmecken ist fast unmöglich. Das offenbart das Problem: generische Umgebungen produzieren generische Beschreibungen.

**Modell-Text-Analyse.** Les einen Kurz-Auszug mächtiger Beschreibungs-Schrift (z.B. aus einem Natur-Essay oder Ted Hughes Gedicht). SuS identifizieren: welche Sinne sind genutzt? Welche Details sind SPEZIFISCH (nicht nur „grün" aber „die scharfe Grün neue Brennnesseln")? Welche nutzen figurative Sprache?

**Vorbereitung für Aussenlektion:** Gebe aus „Sensorische Feldnotizbücher" — gefaltete A4 mit Säulen für jeden Sinn. Erkläre die Aufgabe: „Morgen wirst du ein Schriftsteller im Feld sein. Deine Aufgabe ist zu SENSORISCHE DETAILS sammeln wie ein Wissenschaftler Exemplare sammelt. Du wirst sie zurück zum Klassenzimmer nehmen und zum Schreiben nutzen."

### Phase 2 — Begegnung (Aussen, 60 Minuten)

**Setup (5 Minuten):**
Gehe zum Schutzgebiet. An der Eingabe, halt. „Bevor ihr IRGENDETWAS schreibt, steht still für 60 Sekunden. Schliesst Augen. Hört. Was könnt ihr hören?" Dieser Übergang von innen zu aussen ist deliberat — es verlangsamt SuS und verschiebt ihre Aufmerksamkeit von sozialer Plauderei zu Umwelt-Bewusstsein.

**Aktivität 1 — Sensorische Stationen (30 Minuten):**
SuS rotieren durch fünf Stationen, verbringen 5–6 Minuten an jeder. An jeder Station die aufzeichnen in ihrem Sensorisches Feldnotzbuch.

| Station | Ort | Sensorischer Focus | Aufgabe |
|---|---|---|---|
| 1: Der Höre-Platz | Unter dem Eichbaum | Hören | Schliesst Augen für 2 Minuten. Schreibt jedes Geräusch, das ihr hört — nah und fern, laut und leise. Sei SPEZIFISCH: nicht „Vogel" aber „zwei scharfe, ansteigende Noten, dann eine Pause, dann drei mehr." |
| 2: Der Textur-Weg | Entlang Hecken-Linie | Berühren | Berühre 5 unterschiedliche natürliche Oberflächen (Rinde, Blatt, Erde, Stein, Moos). Für jede: schreibt exakt wie es sich anfühlt. Nutze einen Vergleich: „die Rinde fühlte sich wie..." an |
| 3: Die Duft-Karte | Sensorischer Garten | Riechen | Zerquetsche ein Blatt sanft zwischen Fingern. Rieche die Erde. Rieche die Luft. Schreibe: wie riecht dieser Ort? Kannst du einen Duft ohne einen anderen Duft nutzen beschreiben? (Das ist HART — das ist der Punkt.) |
| 4: Die Anblick-Schnappschuss | Beim Weiher | Anblick (aber SPEZIFISCH) | Wähle einen kleinen Bereich (nicht grösser als deine Hand). Beschreibe GENAU was du siehst — Farben, Formen, Bewegung, Licht. Die Regel: keine generischen Worte. Nicht „grün" aber WELCHES Grün? Nicht „Wasser" aber wie sieht das Wasser jetzt aus? |
| 5: Der Ganze Ort | Wiesen-Bereich | Alle Sinne kombiniert | Stehe in der Wiese. Schreibe eine „panormische Beschreibung" — fege von links zu rechts und beschreibe was du durch ALLE Sinne erfährst. Das ist die Kombination: Anblick + Geräusch + Duft + Berühren + (falls anwendbar) Geschmack. |

**Aktivität 2 — Figurative Sprache Jagd (15 Minuten):**
Nach den Stationen, sammle die Klasse: „Jetzt findest EINE Ding in dieser Umgebung, das dir an etwas völlig Unterschiedliches erinnert. Der Weiher, der wie ein Spiegel aussieht. Die Äste, die wie Finger erreichen. Der Wind, der flüstert. Findet DEINEN Vergleich und schreibt es mit dem GRUND — warum erinnert es dich an das?"

**Lehrer-Rolle:** Zirkuliere zwischen Stationen. Frage die SCHLÜSSEL-Fragen (unten). Lese über Schultern. Identifiziere SuS deren Schreiben noch generisch ist („die Rinde war rau") und umleiten: „Näher. WELCHE rau? Berühren. Schliesst Augen. Schreibt jetzt." Identifiziere auch SuS dessen Schreiben ausgezeichnet ist und merke es für Sharing in Phase 3.

**Schlüssel-Fragen zum fragen ausserhalb:**
- „Schliesst Augen. Was hört ihr JETZT, das ihr vorher nicht bemerkt habt?"
- „Ihr habt schrieben ‚die Rinde war rau.' Rau wie Sandpapier? Rau wie eine Käse-Reibe? Rau wie dein Vaters Kinn? WELCHE rau?"
- „Was erinnert dich dieser Duft? Kannst du das in Worte einfangen?"
- „Falls du diesen Ort beschreiben müsstest jemandem, wer nie hier war, welche EINE Detail würdest du wählen?"

**Wrap-up (10 Minuten):** Zurück zum Klassenzimmer. „Verliert eure Notizbücher nicht. Alles, dass ihr draussen gesammelt habt, ist das rohe Material für morgen's Schreiben."

### Phase 3 — Reflexion (Innen, 45 Minuten, nächste Lektion)

**Schritt 1 — Die Feldnotizen Minenbau (10 Minuten):** SuS überprüfen ihre Sensorische Feldnotizbücher. Unterstriche ihre drei BESTEN Details — das spezifischste, das lebendigste, das überraschendste. Teilen mit einen Partner: „Welch meiner Details ist stärkest?"

**Schritt 2 — Entwurf (25 Minuten):** SuS schreiben ein beschreibendes Passus über das Schutzgebiet, gebrauchend ihre Feldnoten als primäre Quellen-Material. Anforderungen: mindestens drei Sinne genutzt, mindestens zwei figurative Sprache-Geräte, kein generisches Vokabular (LP bietet eine „verbotene Wort"-Liste: nice, gut, gross, klein, hübsch, grün — nutze SPEZIFISCHERE Alternativen).

**Schritt 3 — Peer-Review (10 Minuten):** Tausch Beschreibungen. Partner liest und antwortet: „Welch EIN Detail machte dich fühlen du warst DORT? Wo könnte die Beschreibung spezifischer sein?"

### Sicherheits-Rahmen

**Risiko-Nutzen-Bewertung:**

| Risiko | Wahrscheinlichkeit | Schweregrad | Vorteil | Management |
|---|---|---|---|---|
| Ausrutschen auf nassem Boden | Mittel (März) | Gering | Zugang zu authentischer sensorischer Umgebung; Regen FÜGT sensorisches Detail hinzu | Erinnere SuS angemessene Schuhe zu tragen. Gehe, laufe nicht. Markiere nasse Bereiche. |
| Weiher — reinstürzen | Gering | Mittel | Weiher-Station bietet reiche visuelle und auditive Detail (Wasser-Oberfläche, Reflektionen, Geräusche) | Klare Grenz-Marker 1 Meter von Weiher-Rand. Erwachsener stationiert beim Weiher. SuS beobachten von Bank nur. |
| Allergie-Reaktion (Pflanzen, Pollen) | Gering | Mittel | Direkte sensorische Engagement mit Pflanzen | Kontrolliere medizinisches Aufzeichnung vor Lektion. SuS mit Heuschnupfen oder Pflanzen-Allergien adaptieren die Duft-Station (beobachte, nicht zerquetsche Blätter). Trage Antihistamine, falls schrieben. |
| Kalt / Regen | Hoch (März) | Gering | Wetter IST sensorisches Material — Regen-Geräusche, nasse Düfte, kalte Berührung sind Schreib-Material | Erfordere Jacken. Kurze Lektion auf 45 Minuten, falls sehr kalt. Regen-Plan: geh raus sowieso — Regen produziert besseres sensorisches Schreiben als Sonne. Cancel nur für Gewitter oder Blitz. |

**Wetter-Contingenz:** Leichter Regen — fahre fort, bring Klemmbrett mit Abdeckungen. Starker Regen — reduziere auf 30 Minuten, fokussiere auf die meisten untergeachenen Stationen. Blitz — verschiebe.

**Erwachsenen-Rollen:** LP zirkuliert und fragt. TA managet Übergänge zwischen Stationen und überwacht den Weiher-Bereich. Falls Eltern-Helfer verfügbar: eine pro Station, um widerwillige Schreißer zu fördern.

### Innen-Aussen-Kontinuitaet

Die drei Phasen bilden EINE Lernsequenz:
- **Vorbereitung** baut das analytische Vokabular (sensorische Kategorien, figurative Sprache-Typen) SuS brauchen, um nützliche Daten ausserhalb zu sammeln
- **Begegnung** bietet das rohe sensorische Material, das nicht drinnen generiert werden kann — echte Düfte, echte Texturen, echte Geräusche
- **Reflexion** transformiert rohe sensorische Daten in handwerk Schreiben — die Aussen-Noten sind die EVIDENZ, die Innen-Lektion ist die ZUSAMMENSETZUNG

Die Aussenlektion ist nicht „eine spassige Reise" mit Schreiben angehängt. Das Schreiben depends auf die Aussen-Erfahrung. Ohne die Feldnoten, haben SuS nichts zum schreiben von.

### Equipment und Ressourcen

- Sensorische Feldnotizbücher (pre-vorbereitet: gefaltete A4, fünf Säulen gekennzeichnet)
- Klemmbretter und Bleistifte (nicht Stifte — Stifte funktionieren nicht im Regen)
- Lupe (optional aber wertvoll für Anblick-Station)
- Timer für Station-Rotationen
- First-Aid-Kit
- Ersatz-Jacken (für SuS, die vergessen)

---

## Bekannte Limitationen

1. **Aussenunterricht erfordert Schulgelände oder zugängliche Aussenräume.** Schulen in dichten urbanen Bereichen mit nur kleinen Spielplätzen oder keinem Grünraum werden brauchen adaptieren — die sensorischen Stationen können in jeder Aussenumgebung arbeiten, aber die Reichhaltigkeit der Erfahrung hängt von der Reichhaltigkeit der Umgebung ab. Ein Schulspielplatz mit Tarmac und Zäunen bietet weniger sensorische Vielfalt als ein Schutzgebiet.

2. **Wetter genuinely beschränkt einige Aktivitäten.** Während die Skill argumentiert, dass Regen ein Feature, nicht ein Bug ist (und für beschreibendes Schreiben, ist das wahr), haben einige Aussenunterricht-Ziele Wetter-Abhängigkeiten. Science-Feldarbeit erfordert Trockenheit, Kunst erfordert stabile Hände, oder PE-Aktivitäten auf wassergetränktem Gras alle Gesicht echte Wetter-Constraints. Die Skill's Regen-positive Framing applies zu DIESEM Beispiel — nicht universell.

3. **Die EEF-Überprüfung fand moderate, nicht grosse Effekte auf akademische Outcomes.** Aussenunterricht konsequent verbessert Engagement, Motivation und Wohlbefinden — aber die Evidenz für direkte akademische Leistungs-Gewinne ist moderate. Der stärkste Fall für Aussenunterricht ist, dass es Lern-Erfahrungen bietet, die in Klassenzimmern nicht repliziert werden können (authentische sensorische Eingabe, echte Exemplare, räumliche Skala), nicht dass es universell höhere Test-Noten produziert. LPs sollten Aussenunterricht nutzen, wenn die Aussenumgebung etwas hinzufügt das Klassenzimmer nicht kann, nicht als generelle Strategie für Leistungs-Erhöhung.
