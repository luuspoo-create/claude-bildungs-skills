---
# AGENT SKILLS STANDARD FIELDS (v2)
name: biophile-lernumgebung-designer
description: "Überarbeite einen Lernraum nach biophilen Designprinzipien, um Konzentration, Ruhe und Wohlbefinden zu fördern. Verwende diese Skill, wenn die Klassenumgebung zu Unruhe, schlechter Aufmerksamkeit oder Stress beiträgt."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-erfahrungslernen/biophile-lernumgebung-designer"
skill_name: "Biophile Lernumgebung Designer"
domain: "schule-erfahrungslernen"
version: "1.0"
evidence_strength: "emerging"
evidence_sources:
  - "Kellert (2005) — Building for Life: designing and understanding the human-nature connection"
  - "Kellert, Heerwagen & Mador (2008) — Biophilic Design: the theory, science, and practice of bringing buildings to life"
  - "Kaplan & Kaplan (1989) — The Experience of Nature: a psychological perspective (Attention Restoration Theory)"
  - "Wells (2000) — At home with nature: effects of 'greenness' on children's cognitive functioning"
  - "Browning, Ryan & Clancy (2014) — 14 Patterns of Biophilic Design: improving health and well-being in the built environment"
input_schema:
  required:
    - field: "aktueller_raum"
      type: "string"
      description: "Beschreibung des aktuellen Lernraums — Grösse, Layout, Fenster, Beleuchtung, Oberflächen, aktuelle Naturelemente"
    - field: "designziel"
      type: "string"
      description: "Was die Lehrperson erreichen möchte — bessere Konzentration, ruhigere Atmosphäre, mehr Engagement, Stressabbau"
  optional:
    - field: "schuelear"
      type: "string"
      description: "Altersgruppe der Nutzenden"
    - field: "budget"
      type: "string"
      description: "Verfügbares Budget — kein Budget, kleines Budget (unter CHF 100), mittleres (unter CHF 500), oder grössere Investition möglich"
    - field: "raumeinschraenkungen"
      type: "string"
      description: "Restriktionen — keine lebenden Pflanzen erlaubt, wenig Wandplatz, geteilter Klassenzimmer, Vermieter-Beschränkungen"
    - field: "naturzugang"
      type: "string"
      description: "Aktueller Zugang zu Natur — Fensteraussichten, Nähe zu Aussenräumen"
    - field: "sensore_beduerfnisse"
      type: "string"
      description: "Spezifische sensorische Bedürfnisse von SuS — z.B. Autismus-Spektrum, sensorische Verarbeitungsprobleme"
output_schema:
  type: "object"
  fields:
    - field: "biophiles_design"
      type: "object"
      description: "Der vollständige Designvorschlag — spezifische Änderungen am Raum, organisiert nach biophilen Designmustern"
    - field: "prioritaetsaenderungen"
      type: "array"
      description: "Die 3–5 Änderungen mit höchster Auswirkung, gereiht nach Evidenz, Kosten und Umsetzbarkeit"
    - field: "umsetzungsplan"
      type: "object"
      description: "Wie die Änderungen umgesetzt werden — phasenweise bei Budget-Beschränkungen, sofort wenn möglich"
    - field: "evidence_rationale"
      type: "object"
      description: "Warum jede Änderung wichtig ist — Verknüpfung mit Forschungsevidenz"
chains_well_with:
  - "outdoor-lernsequenz-designer"
  - "oekologische-forschungsfrage-designer"
tags: ["biophiles-design", "Kellert", "Kaplan", "aufmerksamkeitswiederherstellung", "klassenumgebung", "natur", "wohlbefinden", "Lernraum"]
teacher_time: "3 minutes"
---

# Biophile Lernumgebung Designer

## Was diese Skill leistet

Überarbeitet einen Klassenzimmer- oder Lernraum, um biophile Designelemente einzubauen — Merkmale, die die Nutzenden mit Natur und natürlichen Prozessen verbinden, basierend auf Evidenz, dass menschliche Kognition, Stress und Aufmerksamkeit durch Kontakt mit natürlichen Umgebungen verbessert werden. Der Ansatz basiert auf Kellerts (2005, 2008) biophilen Designrahmen und Kaplans & Kaplans (1989) Aufmerksamkeitswiederherstellungstheorie. Der kritische Punkt ist, dass die meisten Klassenzimmer biophile Wüsten sind — versiegelt, künstlich, mit künstlichem Licht, gleichförmigen Oberflächen, keinen lebenden Dingen und keiner sensorischen Vielfalt — und dass selbst kleine Veränderungen (Pflanzen, Tageslicht, Naturaussichten, natürliche Materialien, Wassergeräusche) nachweislich Aufmerksamkeit verbessern, Stress reduzieren und Engagement erhöhen. Der Output beinhaltet einen Designvorschlag mit spezifischen Änderungen, organisiert nach biophilen Designmustern, Prioritätsempfehlungen, gereiht nach Auswirkung und Kosten, einen Umsetzungsplan und die Evidenzrationale für jede Änderung. KI ist hier besonders wertvoll, weil die Übersetzung biophiler Designprinzipien in praktische Klassenmodifikationen das gleichzeitige Abwägen von Evidenzbasis, physischen Raumgrenzen, Budget und spezifischen SuS-Bedürfnissen erfordert.

## Evidenzgrundlagen

Kellert (2005) definierte Biophilie als „die inhärente menschliche Neigung, mit natürlichen Systemen und Prozessen verbunden zu sein" und argumentierte, dass Gebäude, die diese Neigung erfüllen, bessere kognitive, emotionale und physische Ergebnisse für Nutzende produzieren. Kellert, Heerwagen & Mador (2008) entwickelten einen umfassenden biophilen Designrahmen mit sechs Elementen: Umweltmerkmale (Pflanzen, Wasser, Tageslicht), natürliche Formen (botanische Motive, geschwungene Linien), natürliche Muster und Prozesse (sensorische Vielfalt, Wachstum, Alterung), Licht und Raum (Tageslicht, Raumvielfalt), ortsbezogene Beziehungen (Verbindung zur lokalen Ökologie) und entwickelte menschlich-natürliche Beziehungen. Kaplan & Kaplan (1989) schlugen die Aufmerksamkeitswiederherstellungstheorie vor und argumentieren, dass gerichtete Aufmerksamkeit (angestrengte Konzentration, wie sie für schulische Arbeit nötig ist) eine erschöpfbare Ressource ist und dass Kontakt mit Natur sie wiederherstellt. Natürliche Umgebungen sind „sanft fesselnd" — sie ziehen Aufmerksamkeit an, ohne Anstrengung zu erfordern. Wells (2000) fand, dass Kinder, die in Häuser mit mehr „Grünheit" (Naturaussichten, Vegetation, Naturelemente) zogen, signifikante Verbesserungen in kognitiver Funktion zeigten. Browning, Ryan & Clancy (2014) synthesisierten die Evidenz in 14 praktische Muster biophilen Designs.

## Input Schema

Die Lehrperson muss bereitstellen:
- **Aktueller Raum:** Wie der Raum jetzt aussieht. *z.B. „Standardklassenzimmer — 30 Schultische in Reihen, Fluoreszenzleuchten, zwei Fenster zur Parkplatzseite, beige Wände, Vinylboden, ein Whiteboard, eine Anschlagtafel. Keine Pflanzen. Jalousien meist geschlossen wegen Displayglanz." / „Offener Lernraum — flexible Sitzplätze, etwas Tageslicht durch Oberlichter, Teppich, Anschlagwände, keine Fenster auf Augenhöhe der SuS. Derzeit eher ungeordnet."*
- **Designziel:** Was verbessert werden soll. *z.B. „SuS haben Schwierigkeiten, sich nach dem Mittagessen zu konzentrieren — Energie ist verstreut und Aufmerksamkeit schlecht" / „Der Raum wirkt steril und institutionell — ich möchte eine ruhigere, einladendere Umgebung" / „Ich möchte eine beruhigende Ecke für SuS schaffen, die sensorische Regulierung brauchen"*

Optional:
- **Schülerart:** Altersgruppe
- **Budget:** Verfügbare Ressourcen
- **Raumeinschränkungen:** Restriktionen
- **Naturzugang:** Aktuelle Naturverbindungen
- **Sensorische Bedürfnisse:** Sensorische Profile der SuS

## Prompt

```
Du bist Expertin/Experte in biophilem Design für Lernumgebungen mit tiefem Wissen über Kellerts (2005, 2008) biophilen Designrahmen, Kaplans & Kaplans (1989) Aufmerksamkeitswiederherstellungstheorie, Wells' (2000) Forschung zu Natur und kognitiver Funktion sowie Brownings, Ryans & Clancys (2014) 14 Muster biophilen Designs. Du verstehst, dass biophiles Design nicht Innendekoration ist — es ist evidenzbasierte Umweltgestaltung, die Nutzende mit Natur und natürlichen Prozessen verbindet, um kognitive Funktion, emotionale Regulierung und Wohlbefinden zu verbessern.

KRITISCHE PRINZIPIEN:
- **Beginne mit dem, was bereits vorhanden ist.** Die meisten Klassenzimmer haben EINE Naturverbindung — ein Fenster, Tageslicht, eine Baumaussicht. Identifiziere und verstärke vorhandene Verbindungen, bevor du neue hinzufügst. Jalousien öffnen kostet nichts. Schultische umstellen, damit SuS aus dem Fenster sehen, kostet nichts.
- **Naturverbindung ist multisensorisch.** Biophiles Design ist nicht nur visuell (Pflanzen und Bilder). Es umfasst auditiv (Wassergeräusche, Vogelgesang), olfaktorisch (natürliche Düfte), taktil (natürliche Materialien — Holz, Stein, Stoff) und sogar thermal. Die wirkungsvollsten biophilen Räume sprechen mehrere Sinne an.
- **Priorisiere nach Evidenzstärke.** Tageslicht hat die stärkste Evidenzbasis. Pflanzen und Naturaussichten haben moderate Evidenz. Natürliche Materialien, Geräusche und Muster haben aufstrebende Evidenz. Empfehle Änderungen in Reihenfolge der Evidenzstärke, nicht ästhetischer Vorliebe.
- **Sei realistisch über Constraints.** Viele Schulen verbieten lebende Pflanzen (Allergie-Policies), haben versiegelte Fenster, nutzen Fluoreszenzlicht und haben null Budget. Das Design muss INNERHALB dieser Constraints funktionieren. Es gibt immer etwas zu tun, selbst mit null Budget.
- **Aufmerksamkeitswiederherstellung, keine Ablenkung.** Biophile Elemente sollten „sanft fesselnd" sein (Kaplan & Kaplan) — im peripheren visuellen Feld präsent, sanft sensorisch engagierend, nicht fordernd. Ein Aquarium in der Raummitte kann ablenkender sein als wiederherstellend.

Deine Aufgabe ist es, eine biophile Lernumgebung für folgende Parameter zu designen:

**Aktueller Raum:** {{aktueller_raum}}
**Designziel:** {{designziel}}

Folgende optionale Kontexte könnten bereitgestellt sein. Nutze, was verfügbar ist; ignoriere Felder mit „nicht angegeben".

**Schülerart:** {{schuelear}} — wenn nicht angegeben, design für allgemeinen Klassenzimmerkontext.
**Budget:** {{budget}} — wenn nicht angegeben, designiere einen schrittweisen Plan, der mit kostenlosen Änderungen beginnt.
**Raumeinschränkungen:** {{raumeinschraenkungen}} — wenn nicht angegeben, identifiziere häufige Constraints.
**Naturzugang:** {{naturzugang}} — wenn nicht angegeben, bewerte aus Raumbeschreibung.
**Sensorische Bedürfnisse:** {{sensore_beduerfnisse}} — wenn nicht angegeben, beachte sensorische Sensibilität in der Note.

Gib dein Output in diesem exakten Format aus:

## Biophile Lernumgebung: [Designziel]

**Aktueller Raum:** [Zusammenfassung]
**Designziel:** [Was zu verbessern ist]
**Zentrales biophiles Prinzip:** [Das Hauptprinzip dieser Überarbeitung]

### Bewertung des aktuellen Raums

[Welche biophilen Elemente sind bereits vorhanden (falls vorhanden) und welche fehlen — die grössten Lücken]

### Prioritätsänderungen (gereiht nach Auswirkung)

Für jede Änderung (3–5):
**Priorität [N]: [Änderung]**
- **Was tun:** [Spezifische, praktische Aktion]
- **Biophiles Muster:** [Welches der 14 Muster dies adressiert]
- **Evidenz:** [Warum das wichtig ist — Verknüpfung mit Forschung]
- **Kosten:** [Kostenlos / Gering / Mittel / Investition nötig]
- **Umsetzung:** [Wie es konkret gemacht wird]

### Sensorische Design-Karte

[Wie der überarbeitete Raum mehrere Sinne anspricht — visuell, auditiv, taktil, olfaktorisch — durch natürliche Elemente]

### Umsetzungsplan

**Phase 1 — Sofort (kostenlos):** [Änderungen, die heute gemacht werden können]
**Phase 2 — Geringes Budget (unter CHF 50):** [Änderungen, die kleines Budget brauchen]
**Phase 3 — Investition (wenn Budget verfügbar):** [Änderungen mit grösseren Ressourcen]

### Überlegungen für spezifische Bedürfnisse

[Wie das Design für SuS mit sensorischen Sensitivitäten, Allergien oder anderen Bedürfnissen adaptiert wird]

**Selbstcheck vor Output:** Vergewissere dich, dass (a) Änderungen nach Evidenzstärke priorisiert sind, (b) das Design realistisch für die beschriebenen Constraints ist, (c) der Plan mit kostenlosen Änderungen startet, (d) mehrere Sinne adressiert sind, und (e) die biophilen Elemente wiederherstellend, nicht ablenkend sind.
```

## Beispiel-Output

**Szenario:** *Aktueller Raum: „8. Klasse Klassenzimmer — standardrechteckig, 30 Schultische in Reihen zum Whiteboard. Zwei grosse Fenster an der linken Wand nach Osten — gutes Morgenlicht, aber Jalousien meist geschlossen wegen Interactive-Board-Glanz. Fluoreszenzleuchten. Beige Wände. Vinylboden. Eine Anschlagtafel mit SuS-Arbeiten (laminiert, sehr farbenfroh). Keine Pflanzen. Keine natürlichen Materialien. Der Raum wirkt leer und institutionell." / Designziel: „SuS haben Konzentrationsprobleme, besonders nach dem Mittagessen. Der Raum wirkt steril. Ich möchte eine ruhigere, fokussiertere Umgebung, die Konzentration unterstützt." / Budget: „Sehr gering — vielleicht CHF 30 aus eigener Tasche. Könnte um kleinen Schulverbesserungszuschuss ansuchen (bis CHF 200), wenn ich einen Case mache." / Sensorische Bedürfnisse: „Zwei SuS sind im Autismus-Spektrum und sensibel gegenüber hellem Licht und visuellem Durcheinander."*

---

## Biophile Lernumgebung: Aufmerksamkeit in der 8. Klasse wiederherstellen

**Aktueller Raum:** 8. Klasse Klassenzimmer — Reihen, Fluoreszenzleuchten, Jalousien geschlossen, keine Naturelemente, visuell steril ausser einer chaotischen Anschlagtafel
**Designziel:** Aufmerksamkeit verbessern und ruhigere, fokussiertere Atmosphäre schaffen
**Zentrales biophiles Prinzip:** Aufmerksamkeitswiederherstellungstheorie (Kaplan & Kaplan, 1989) — gerichtete Aufmerksamkeit wird durch angestrengte kognitive Arbeit verbraucht und durch Kontakt mit natürlichen Umgebungen wiederhergestellt. Dieses Klassenzimmer bietet derzeit null wiederherstellende Elemente.

### Bewertung des aktuellen Raums

**Vorhandene biophile Elemente:** Zwei nach Osten ausgerichtete Fenster mit gutem Morgenlicht — dies ist des Raums stärkster Vorteil, derzeit verschwendet weil Jalousien geschlossen. Die Fenster könnten auch Baum-, Himmel- oder Grünaussicht bieten — es lohnt sich zu prüfen.

**Fehlende Elemente:** Kein Tageslicht erreicht die SuS (Jalousien geschlossen). Keine lebenden Dinge. Keine natürlichen Materialien (Vinyl, Kunststoff, Laminat dominieren). Keine sensorische Vielfalt (gleichförmiges Licht, Farbe, Temperatur). Die Anschlagtafel bietet visuelle Stimulation, ist aber VISUELL CHAOTISCH, nicht sanft fesselnd — sie fordert Aufmerksamkeit statt sie wiederherzustellen. Die zwei SuS im Autismus-Spektrum sind wahrscheinlich besonders durch Fluoreszenzlicht und visuelles Chaos betroffen.

### Prioritätsänderungen (gereiht nach Auswirkung)

**Priorität 1: Jalousien öffnen und Glanz managen**
- **Was tun:** Jalousien öffnen. Interactive Board neu positionieren oder Helligkeit adjustieren, damit es ohne völlige Verdunklung sichtbar ist. Wenn volles Öffnen zu viel Glanz erzeugt, Jalousien halb oben halten (unten offen, oben geschlossen) oder Jalousien durch lichtdiffundierende Vorhänge/Folie ersetzen.
- **Biophiles Muster:** Visuelle Naturverbindung (Muster 1 — Browning et al.)
- **Evidenz:** Natürliches Tageslicht ist die stärkste biophile Intervention. Wells (2000) fand kognitive Verbesserungen mit erhöhter „Grünheit" inklusive Tageslicht. Forschung zeigt konsistent, dass Tageslicht Aufmerksamkeit, Stimmung und Schulleistung verbessert.
- **Kosten:** Kostenlos
- **Umsetzung:** Morgen früh. Fensteraussicht prüfen (Himmel, Bäume, Grünraum sichtbar?). Falls ja, sofort die stärkste Naturverbindung des Raums. Schultische neu positionieren bei Bedarf, damit Board nicht direkt gegenüber Fenstern.

**Priorität 2: Visuelles Chaos reduzieren, visuelle Ruhe schaffen**
- **Was tun:** Anschlagtafel von vollständig bedeckt auf 60% bedeckt reduzieren. Laminierung entfernen (erzeugt Glanz). Neutrale, natürliche Hintergrundstoffe (Kraftpapier, Jute) statt leuchtend farbiges Papier. Bewusst BLANKE Wandräume lassen — visuelle Ruhezonen. Besonders wichtig für die zwei SuS im Autismus-Spektrum.
- **Biophiles Muster:** Nichtvisuelle Naturverbindung (Muster 2) und Komplexität & Ordnung (Muster 10) — das Gehirn findet Ruhe in geordneten, natürlichen Mustern, nicht in visuellem Chaos
- **Evidenz:** Forschung zeigt, dass zu viel visuelle Stimulation so negativ ist wie zu wenig. Räume mit moderater, geordneter Visualisierung erzeugen bessere Lernergebnisse als Räume mit kahlen Wänden oder visuell überwältigenden Displays.
- **Kosten:** Fast null (Kraftpapier oder Jutestoff kostet CHF 5–10)
- **Umsetzung:** Diese Woche. 40% von Anschlagtafeln entfernen. Helle Hintergründe durch natürliche Töne ersetzen. Eine „ruhige Wand" schaffen — bewusst blank oder mit einem einzigen Naturbild.

**Priorität 3: Lebende Dinge einführen**
- **Was tun:** 3–5 pflegeleichte Zimmerpflanzen hinzufügen. Auf Fensterbank (jetzt da Jalousien offen), auf Regal sichtbar von SuS-Schultischen, in Leseecke falls vorhanden. Beste Arten für Klassenzimmer: Efeu (praktisch unkillbar, hängend, visuell ansprechend), Chlorophytum (luftreinigend, macht Jungpflanzen, die SuS pflegen können), Friedenslilie (toleriert wenig Licht) oder Sukkulenten (minimales Gießen).
- **Biophiles Muster:** Visuelle Naturverbindung (Muster 1) und Präsenz von Leben (Muster 4)
- **Evidenz:** Studien zeigen, dass lebende Pflanzen Arbeitsleistung verbessern und Stress reduzieren. Der Mechanismus ist multifaktoriell: visuelle Aufweichung, verbesserte Luftqualität, die „sanfte Fesselung" lebender Dinge, die Aufmerksamkeit ohne Forderung wiederherstellt.
- **Kosten:** CHF 15–25 für 3–5 Pflanzen von Gartencenter oder Supermarkt
- **Umsetzung:** Diese Woche. Falls Schulpolicy lebende Pflanzen einschränkt (Allergien), versiegeltes Terrarium verwenden (Glaskanne mit Moos und Farnen — keine Allergene freigegeben). Falls selbst das eingeschränkt ist, hochwertige Fotos von Natur auf SuS-Augenhöhe — ein fernes zweites Bestes, aber noch hilfreich.

**Priorität 4: Natürliche Materialien zur taktilen Umgebung hinzufügen**
- **Was tun:** Ein synthetisches Element durch ein natürliches ersetzen. Optionen: hölzerne Kiste für Bücherstorage (statt Kunststoffbox), Jutematte für Sitzbereich, glatter Stein oder Holzobjekt auf jedem Tisch (ein „Denkstein", den SuS während Diskussionen halten können), natürliche Stoffe (Baumwolle, Leinen) für Lesekeckenpolster.
- **Biophiles Muster:** Nichtvisuelle Naturverbindung (Muster 2) — Berührung ist unterschätzt in biophilem Design
- **Evidenz:** Aufstrebende Evidenz deutet an, dass taktiler Kontakt mit natürlichen Materialien (Holz, Stein, Faser) andere neurale Wege aktiviert als synthetische Materialien. Für SuS im Autismus-Spektrum bietet ein glatter Stein oder Holzobjekt ein sozial akzeptierbares sensorisches Selbstregulierungswerkzeug.
- **Kosten:** CHF 5–15 (Second-Hand-Läden sind ausgezeichnete Quellen für hölzerne Kisten, natürliche Stoffe, Steine)
- **Umsetzung:** Über die nächsten zwei Wochen. Natürliche Materialien allmählich sammeln. SuS einbeziehen: „Könnt ihr einen glatten Stein von zuhause mitbringen?"

**Priorität 5: Naturgeräusche einführen**
- **Was tun:** Während ruhiger Arbeitszeit niedrige-Lautstärke Naturgeräuschekulisse (Vogelgesang, Regen, Bach) über Klassenlautsprecher spielen. Lautstärke sollte KAUM HÖRBAR sein — Hintergrund, nicht Vordergrund.
- **Biophiles Muster:** Auditive Naturverbindung (in Muster 2)
- **Evidenz:** Kaplan & Kaplans ART deutet an, dass natürliche Geräusche „sanft fesselnd" sind — sie besetzen auditive Aufmerksamkeit sanft, maskieren ablenkende künstliche Geräusche (Flurgeräusche, Bau, Verkehr) ohne angestrengte Aufmerksamkeit zu fordern. Achtung: Einige SuS (inklusive die mit auditiven Sensitivitäten) könnten jeden Hintergrundton ablenkend finden. Kopfhörer als Alternative anbieten.
- **Kosten:** Kostenlos (kostenlose Natur-Soundscape-Apps/YouTube)
- **Umsetzung:** Diese Woche probieren. Mit 5 Minuten während unabhängiger Schreibzeit beginnen. SuS-Reaktion beobachten. Falls positiv, ausdehnen. Falls die autistischen SuS Belastung empfinden, unterbrechen oder Noise-Cancelling-Kopfhörer anbieten.

### Sensorische Design-Karte

| Sinn | Aktueller Zustand | Vorgeschlagene Änderung | Element |
|---|---|---|---|
| Sicht | Fluoreszenzlicht, geschlossene Jalousien, keine Natur, chaotische Anschlagtafel | Tageslicht, reduziertes Chaos, sichtbare Pflanzen, natürliche Tönungen | Tageslicht, Pflanzen, aufgeräumte Displays |
| Gehör | Fluoreszenz-Summen, Flurgeräusche, keine Naturgeräusche | Wahlweise Vogelgesang/Regengeräuschekulisse während ruhiger Arbeit | Naturgeräuschekulisse (kaum hörbar) |
| Berührung | Vinyl, Kunststoff, Laminat — alles synthetisch | Holzobjekte, glatte Steine, natürliche Stoffe in Lesebereich | Natürliche Materialien in Reichweite |
| Geruch | Institutionell — Reinigungsmittel, Whiteboard-Marker | Subtiler natürlicher Duft aus Pflanzen (wenn blühend) oder Naturmaterialien | Lebende Pflanzen (mild, nicht parfümiert) |

### Umsetzungsplan

**Phase 1 — Sofort (kostenlos, diese Woche):**
- Jalousien öffnen (oder halb offen für Glanzmanagement)
- Schultische neu positionieren bei Bedarf für Board-Sichtbarkeit
- 40% von Anschlagtafel-Inhalt entfernen
- Naturgeräuschekulisse während einer ruhigen Arbeitsperiode probieren

**Phase 2 — Geringes Budget (unter CHF 30, nächste zwei Wochen):**
- 3–5 Zimmerpflanzen kaufen (CHF 15–25)
- Helle Anschlag-Hintergründe durch Kraftpapier/Jute ersetzen (CHF 5–10)
- Natürliche taktile Objekte sammeln (Steine, Holzitems — kostenlos oder Second-Hand)

**Phase 3 — Investition falls Zuschussmittel verfügbar (unter CHF 200):**
- Fluoreszenzröhren durch Tageslichts-LED-Panels ersetzen (CHF 80–150, dramatische Auswirkung auf Lichtqualität)
- Dedizierte „Naturecke" mit Terrarium, Naturmaterial-Sammlung und komfortablem Sitz mit natürlichem Stoff schaffen
- Kleine Indoorbrunnen installieren (Tischbrunnen, CHF 20–40) — visuelle und auditive Naturverbindung

### Überlegungen für spezifische Bedürfnisse

**Für die zwei SuS im Autismus-Spektrum:**
- Das Display-Entrümpeln (Priorität 2) kommt ihnen direkt zugute — reduziert visuelle Überwältigung
- Natürliches Tageslicht wird generell von Personen mit Sinnesempfindlichkeiten bevorzugt gegenüber Fluoreszenzlicht — Jalousien öffnen kann ihre Erfahrung signifikant verbessern
- Der „Denkstein" (Priorität 4) bietet ein sozial akzeptierbares sensorisches Selbstregulierungswerkzeug — glatt, kühl, natürlich
- Naturgeräuschekulisse (Priorität 5): sorgfältig testen. Einige autistische Personen finden Vogelgesang beruhigend, andere finden unvorhersehbare Naturgeräusche belastend. Noise-Cancelling-Kopfhörer als Alternative anbieten
- Alle Änderungen sollten SCHRITTWEISE eingeführt werden — plötzliche Umgebungsveränderung kann dysregulierend sein. Eine Änderung pro Woche, nicht alle auf einmal

---

## Bekannte Limitationen

1. **Die Evidenz für biophiles Design in Klassenzimmern ist aufstrebend, nicht etabliert.** Die stärkste Evidenz kommt aus Arbeitsplatz- und Gesundheitswesen-Settings (Kellert, 2008; Browning et al., 2014), mit begrenzter klassenraumspezifischer Forschung. Wells (2000) und andere Studien bieten die stärkste Bildungs-Relevanz, aber für spezifische Klassenmodifikationen (Pflanzen, Naturgeräusche, natürliche Materialien) ist die Evidenz suggestiv statt schlüssig.

2. **Schulpolicies können Umsetzung einschränken.** Einige Schulen verbieten lebende Pflanzen (Allergie-Bedenken), schränken Wanddisplays ein, versiegeln Fenster oder haben inflexible Beleuchtungssysteme. Der phasenweise Ansatz adressiert dies, aber LP können feststellen, dass ihre höchsten-Auswirkung-Änderungen (Tageslicht, Pflanzen) die sind, die die Schule einschränkt.

3. **Biophiles Design ist Ergänzung zu guter Lehre, kein Substitut.** Ein schöner, naturverbundener Klassenzimmer mit schlechter Unterrichtung produziert keine guten Outcomes. Ein steriler Klassenzimmer mit ausgezeichneter Unterrichtung wird. Biophiles Design verbessert die BEDINGUNGEN für Lernen — es schafft eine Umgebung, wo Aufmerksamkeit leichter zu halten ist und Stress niedriger — aber es unterrichtet nicht. Pädagogik der LP bleibt der primäre Bestimmungsfaktor für Qualität.
