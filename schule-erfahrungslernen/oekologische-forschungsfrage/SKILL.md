---
# AGENT SKILLS STANDARD FIELDS (v2)
name: oekologische-forschungsfrage-designer
description: "Konzipiere eine Forschungssequenz verankert in einem lokalen Ökosystem, die Science- oder Geografielehrplan-Inhalte einbettet. Verwende diese Skill, wenn der Unterricht durch lebende lokale Systeme wie Gärten, Weiher oder Hecken läuft."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-erfahrungslernen/oekologische-forschungsfrage-designer"
skill_name: "Ökologische Forschungsfrage Designer"
domain: "schule-erfahrungslernen"
version: "1.0"
evidence_strength: "moderate"
evidence_sources:
  - "Sobel (1996) — Beyond Ecophobia: reclaiming the heart in nature education"
  - "Sobel (2004) — Place-Based Education: connecting classrooms and communities"
  - "Orr (1992) — Ecological Literacy: education and the transition to a postmodern world"
  - "Kimmerer (2013) — Braiding Sweetgrass: Indigenous wisdom, scientific knowledge, and the teachings of plants"
  - "Chawla (1998) — Significant life experiences revisited: a review of research on sources of environmental sensitivity"
input_schema:
  required:
    - field: "lokales_oekosystem"
      type: "string"
      description: "Das spezifische lokale Ökosystem oder lebende System, das die Forschung verankert — ein Garten, Weiher, Hecke, Baum, Brache, Blumenkasten"
    - field: "lehrplanziel"
      type: "string"
      description: "Der Science- oder Geografielehrplan-Inhalt, den die Forschung adressieren muss"
  optional:
    - field: "schuelear"
      type: "string"
      description: "Altersgruppe / Klassenstufe"
    - field: "zeitrahmen"
      type: "string"
      description: "Wie lange die Forschung läuft — einzelne Lektion, eine Woche, ein Term, ein Jahr"
    - field: "schulgelaende"
      type: "string"
      description: "Welche Aussen- oder Anbauflächen die Schule hat"
    - field: "fachleute_vor_ort"
      type: "string"
      description: "Lokale Fachleute — Gärtner, Ökologen, Landwirte, Park-Ranger"
    - field: "vorwissen_sus"
      type: "string"
      description: "Existierende SuS-Beziehung zu Natur und Aussenräumen"
output_schema:
  type: "object"
  fields:
    - field: "oekologische_forschung"
      type: "object"
      description: "Das vollständige Forschungsdesign — verankert in spezifischem lokalen Ökosystem, adressiert Lehrplanziele durch direkte ökologische Untersuchung"
    - field: "forschungsfrage"
      type: "string"
      description: "Die treibende Frage, die aus dem Ökosystem emergt und sich mit dem Lehrplan verbindet"
    - field: "forschungsaktivitaeten"
      type: "array"
      description: "Was SuS tun — direkte Beobachtung, Datenerfassung, Langzeit-Monitoring, ökologische Interventionen"
    - field: "oekologische_kompetenz"
      type: "object"
      description: "Was SuS über ökologische Systeme verstehen — über Lehrplanziele hinaus, die tiefere ökologische Kompetenz"
    - field: "stewardship_dimension"
      type: "object"
      description: "Wie die Forschung zu Sorge um das Ökosystem führt — Wissen erzeugt Verantwortung"
chains_well_with:
  - "outdoor-lernsequenz-designer"
  - "biophile-lernumgebung-designer"
teacher_time: "4 minutes"
tags: ["ökologische-Kompetenz", "Sobel", "Orr", "heimatgebunden", "Umweltbildung", "Forschung", "Stewardship", "Lehrplan-21"]
---

# Ökologische Forschungsfrage Designer

## Was diese Skill leistet

Konzipiert eine nachhaltige ökologische Forschung, verankert in einem spezifischen lokalen Ökosystem — einem Weiher, Garten, Hecke, Baum oder selbst einem Blumenkasten — die Lehrplan-Science-Ziele mit direkter Untersuchung lebender Systeme verknüpft, die SuS über Zeit beobachten und pflegen können. Der Ansatz basiert auf Sobels (1996, 2004) Heimatgebundene-Bildung und seiner Kritik der „Ökophobia" (Kinder mit globaler Umweltkatastrophe erschrecken, bevor sie Liebe zu lokaler Natur entwickelt haben), und Orrs (1992) Konzept der ökologischen Kompetenz (verstehen wie natürliche Systeme funktionieren, nicht nur Fakten über Natur kennen). Das kritische Prinzip ist, dass ökologisches Verstehen aus BEZIEHUNG zu spezifischen lebenden Systemen kommt — nachhaltige Beobachtung eines Weihers unterrichtet mehr über Ökologie als Lesen über zehn Biome. Der Output beinhaltet ein Forschungsdesign, eine treibende Frage, Forschungsaktivitäten, ökologische Kompetenz-Outcomes (über den Lehrplan hinaus) und eine Stewardship-Dimension, wo SuS Verantwortung für das studierte Ökosystem übernehmen.

## Evidenzgrundlagen

Sobel (1996) argumentierte, dass Umweltbildung mit LIEBE zu lokaler Natur beginnen sollte, nicht FURCHT vor globaler Zerstörung. Premature Exposition gegenüber Umweltkatastrophe erzeugt „Ökophobia" — Angst, Hilflosigkeit, Disengagement statt Stewardship. Seine Verschreibung: Alter 4–7, erkunde Heimatumgebung; 8–11, lokale Nachbarschaft und ihre Ökosysteme; 12–15+, breitere soziale und Umwelt-Fragen. Start lokal, start positiv, start mit Beziehung. Sobel (2004) erweiterte dies in Heimatgebundene Bildung, dass der Lehrplan AUS der lokalen Umgebung wachsen sollte statt auf sie MAPPIERT zu werden. Orr (1992) definierte ökologische Kompetenz als Verstehen wie natürliche Systeme Leben sustain — Energie-Flüsse, Materie-Zyklen, Spezies-Interdependenzen und Ökosystem-Resilienz. Kimmerer (2013) schrieb aus Indigenous (Potawatomi) Perspektive von einer Beziehung zur lebenden Welt, die wissenschaftlich und reziprok ist — Lernen von Pflanzen und Ökosystemen ist untrennbar von deren Pflegen. Chawla (1998) überprüfte Forschung auf „signifikante Lebens-Erfahrungen" — formative Erfahrungen, die Erwachsene zur Umwelt-Sorge führen — findet, dass der häufigste Faktor ausgedehnte, direkte Natur-Erfahrung in Kindheit war, nicht Umweltbildungs-Unterricht.

## Input Schema

Die Lehrperson muss bereitstellen:
- **Lokales Ökosystem:** Das spezifische lebende System. *z.B. „Der Schulweiher — etwa 2m × 3m, vor 5 Jahren gegraben, hat Laichgewebe im Frühling, Libellen im Sommer, wachsendes Algenproblem (grünes Wasser), wir haben weniger Frösche als letztes Jahr bemerkt" / „Ein grosser Eichbaum auf dem Schulgelände — geschätzt 150 Jahre alt, sichtbar von unserem Klassenzimmer-Fenster" / „Drei Hochbeete im Schulgarten — wachsen derzeit Kräuter und Gemüse" / „Eine Brache hinter dem Schulzaun — verwildert, offiziell vernachlässigt, aber ökologisch interessant"*
- **Lehrplanziel:** Was erlernt werden muss. *z.B. „7. Klasse Science: Ökosysteme — Nahrungsketten, Nahrungsnetze, Interdependenz" / „8. Klasse Geographie: Ökosysteme — wie Ökosysteme funktionieren, menschlicher Einfluss" / „Lehrplan 21 NT.9: Ökosysteme erforschen"*

Optional:
- **Schülerart:** Klassenstufe
- **Zeitrahmen:** Dauer der Forschung
- **Schulgelände:** Verfügbare Aussenräume
- **Fachleute vor Ort:** Lokale Experten
- **Vorwissen SuS:** Vorhandene Naturverbindung

## Prompt

```
Du bist Expertin/Experte in ökologischer Bildung und heimatgebundener Forschung mit tiefem Wissen über Sobels (1996, 2004) Heimatgebundene-Bildung und Ökophobia-Rahmen, Orrs (1992) ökologische Kompetenz, Kimmerers (2013) reziproke Beziehung mit lebenden Systemen und Chawlas (1998) Forschung zu signifikanten Lebens-Erfahrungen. Du verstehst, dass ökologisches Verstehen nicht ein Satz von Fakten ist, sondern eine ART ZU SEHEN — Vermögen, Verbindungen, Abhängigkeiten und Zyklen in lebenden Systemen wahrzunehmen. Dieses Verstehen kommt aus nachhaltiger Beziehung mit spezifischen Ökosystemen, nicht aus Textbuch-Beschreibungen generischer Biome.

KRITISCHE PRINZIPIEN:
- **Start mit Liebe, nicht Furcht (Sobel, 1996).** Kinder müssen sich in einen spezifischen Weiher, Baum oder Garten verlieben BEVOR sie sinnvoll mit abstrakten Umwelt-Fragen engagieren können. Start nicht mit „Ökosysteme sind bedroht" — start mit „Schaut, was in unserem Weiher lebt."
- **Das Ökosystem ist die Lehrperson.** Das Lehrplanziel wird DURCH das Ökosystem erfüllt, nicht auf es gemappt. Falls das Ziel „Nahrungsketten" ist, SuS lernen nicht über Nahrungsketten und schauen dann auf den Weiher — sie untersuchen den Weiher und entdecken die Nahrungskette, die dort tatsächlich ist.
- **Langzeit-Beobachtung offenbart, was Kurz-Besuche nicht können.** Ein Ökosystem verändert sich durch Jahreszeiten, Wetter, Jahre. Ein einzelner Besuch zeigt einen Schnappschuss; ein Term wöchentlicher Beobachtungen zeigt ein lebendiges System. Design die Forschung für nachhaltige Engagement, nicht ein einmaliger Ausflug.
- **Reziprozität, nicht Extraction (Kimmerer, 2013).** SuS nehmen nicht nur WISSEN aus dem Ökosystem (beobachten, sammeln Daten, gehen). Sie geben zurück — durch Sorge, Stewardship und Respekt. Die Forschung beinhaltet eine Stewardship-Dimension: was können wir FÜR dieses Ökosystem tun?
- **Jedes Ökosystem ist komplex genug.** Ein Schulweiher ist kein „einfaches" Ökosystem. Es enthält Hunderte von Arten, mehrere trophische Ebenen, Jahreszeiten-Zyklen, Wasser-Chemie, Zersetzungs-Prozesse und Zwischenarten-Beziehungen.

Deine Aufgabe ist es, eine ökologische Forschung zu konzipieren für:

**Lokales Ökosystem:** {{lokales_oekosystem}}
**Lehrplanziel:** {{lehrplanziel}}

Folgende optionale Kontexte könnten bereitgestellt sein. Nutze, was verfügbar ist; ignoriere Felder mit „nicht angegeben".

**Schülerart:** {{schuelear}} — wenn nicht angegeben, infer aus dem Lehrplanziel.
**Zeitrahmen:** {{zeitrahmen}} — wenn nicht angegeben, design für Term-lange Forschung mit wöchentlichen Beobachtungen.
**Schulgelände:** {{schulgelaende}} — wenn nicht angegeben, nutze das beschriebene Ökosystem.
**Fachleute vor Ort:** {{fachleute_vor_ort}} — wenn nicht angegeben, schlag vor, wer helfen könnte.
**Vorwissen SuS:** {{vorwissen_sus}} — wenn nicht angegeben, annahme begrenzt aber nicht absent Natur-Erfahrung.

Gib dein Output in diesem exakten Format aus:

## Ökologische Forschung: [Ökosystem] × [Lehrplanziel]

**Ökosystem:** [Das spezifische lokale lebende System]
**Lehrplanziel:** [Was SuS erlernen müssen]
**Treibende Frage:** [Die Frage, die aus dem Ökosystem emergt und sich mit dem Lehrplan verbindet]

### Warum dieses Ökosystem

[Was dieses spezifische Ökosystem pädagogisch reich macht — was es unterrichten kann, das ein Textbuch nicht kann]

### Forschungsdesign

**Phase 1 — Ökosystem kennenlernen**
[Wie SuS das Ökosystem zuerst begegnen — Beobachtung, Wunder, Fragen]

**Phase 2 — Untersuchen**
[Was SuS untersuchen — spezifische Aktivitäten, Datenerfassung, Langzeit-Monitoring]

**Phase 3 — Verstehen**
[Wie SuS verstehen, was sie gefunden haben — Beobachtungen mit ökologischen Konzepten verbinden]

**Phase 4 — Stewardship**
[Wie SuS zurückgeben — Sorge um das Ökosystem, basierend auf Gelerntem]

### Forschungsaktivitäten

[Detaillierte Aktivitäten — was SuS tun, welche Daten sie sammeln, welche Werkzeuge sie nutzen]

### Lehrplan-Verbindungen

[Wie die Forschung das spezifische Lehrplanziel adressiert — mit Evidenz aus dem Ökosystem selbst]

### Ökologische Kompetenz-Outcomes

[Was SuS über WIE ÖKOSYSTEME FUNKTIONIEREN verstehen — über das spezifische Lehrplanziel hinaus]

### Stewardship-Plan

[Spezifische Aktionen, die SuS nehmen, um das Ökosystem zu pflegen — informiert von ihrer Forschung]

**Selbstcheck vor Output:** Vergewissere dich, dass (a) die Forschung mit Liebe und Wunder startet, nicht Furcht, (b) das Ökosystem die Forschung treibt statt der Lehrplan auf es mappiert wird, (c) nachhaltige Beobachtung eingebaut ist, (d) Stewardship natürlich aus Forschung folgt, und (e) das Lehrplanziel genuinely durch die ökologische Forschung adressiert ist.
```

## Beispiel-Output

**Szenario:** *Lokales Ökosystem: „Der Schulweiher — etwa 2m × 3m, vor 5 Jahren gegraben von einer früheren 6. Klasse. Hat Wasserpflanzen (Seerosen, Iris, Wasser-Minze), Laichgewebe im Frühling, Libellen im Sommer, wachsendes Algenproblem (grünes Wasser), und wir haben weniger Frösche dieses Jahr als letztes bemerkt. Liegt im Schulschutzgebiet, das auch einen Holzstapel, einen Wildblumen-Streifen und einen Vogelfutterplatz hat." / Lehrplanziel: „7. Klasse Science: Ökosysteme — Nahrungsketten, Nahrungsnetze, Interdependenz und Auswirkung von Änderungen am Ökosystem" / Zeitrahmen: „Ein Term — etwa 12 Wochen, eine Session pro Woche (plus reguläre Science-Lektionen, wo Konzepte unterrichtet werden)"*

---

## Ökologische Forschung: Der Schulweiher × Ökosysteme und Interdependenz

**Ökosystem:** Schulweiher — 2m × 3m, 5 Jahre alt, etablierte Pflanzen, Frogpopulation, Algenproblem, rückläufige Biodiversitäts-Indikatoren
**Lehrplanziel:** 7. Klasse Science — Nahrungsketten, Nahrungsnetze, Interdependenz und Auswirkung von Änderungen am Ökosystem
**Treibende Frage:** „Unser Weiher wird grün und wir sehen weniger Frösche. Was passiert, und können wir helfen?"

### Warum dieses Ökosystem

Dieser Weiher ist ein komplettes Ökosystem in Miniatur. Er enthält:
- **Produzenten:** Algen, Wasserpflanzen (Seerosen, Iris, Wasser-Minze)
- **Primär-Konsumenten:** Wasserflöhe (Daphnia), Wasserschnecken, Zuckmücken-Larven, Mücken-Larven
- **Sekundär-Konsumenten:** Libellenlarven, Wasserwanzen, Tauchkäfer, Molche (falls vorhanden)
- **Tertiär-Konsumenten:** Frösche (ausgewachsen), Reiher (falls besuchend)
- **Zersetzende:** Bakterien, Pilze im Sediment

Er hat ein ECHTES Problem — Algen-Überfluss und rückläufige Frogpopulation — das ein genuines ökologisches Rätsel ist. Die Algen-Blüte könnte von Nährstoff-Anreicherung (Eutrophierung) aus Blattfall, Bodenerosion oder Überfütterung verursacht sein. Die rückläufige Frog-Population könnte verbunden sein (Algen reduziert Sauerstoff, macht den Weiher unbewohnbar) oder separate Ursache haben (Habitat-Verlust umherumgebend, Prädation, Krankheit). Das ist kein Textbuch-Problem — es ist eine echte Untersuchung mit echter Antwort, die SuS entdecken können.

### Forschungsdesign

**Phase 1 — Weiher kennenlernen (Wochen 1–2)**

*Woche 1: Erstes Treffen.*
SuS besuchen den Weiher. Keine Klemmbrett, keine Arbeitsblätter. Einfach schauen. 10 Minuten am Weiher in Stille sitzen. Dann: „Was habt ihr bemerkt? Was habt ihr gesehen, das sich bewegt? Welche Fragen habt ihr?" LP notiert Fragen auf großem Blatt.

Erwartete Fragen: „Warum ist das Wasser grün?" „Wo sind die Frösche?" „Was ist das Insekt auf der Oberfläche?" „Ist der Weiher sterbend?"

Das grüne Wasser und fehlende Frösche sind genuine Haken — SuS bemerken sie sofort. Die Forschungsfrage emergt aus Beobachtung, nicht aus der LP.

*Woche 2: Baseline-Erhebung.*
SuS führen eine Biodiversitäts-Erhebung durch. Mit Weiher-Netzen und Bestimmungsschlüsseln, sie sammeln Wirbellose, identifizieren Arten (oder Arten-Gruppen) und dokumentieren. Sie notieren auch: Wasser-Farbe, Wasser-Klarheit (können sie den Boden sehen?), Pflanzen-Bedeckung und sichtbare Tiere. Das ist die Baseline, gegen die Veränderung gemessen wird.

**Phase 2 — Untersuchen (Wochen 3–8)**

*Woche 3: Nahrungsnetz bauen.*
Mit den Arten aus Woche 2 konstruieren SuS das ECHTE Nahrungsnetz DIESES Weihers — nicht ein Textbuch-Nahrungsnetz, sondern eines basierend auf was sie beobachtet haben. „Wir fanden Daphnia. Was essen Daphnia? (Algen.) Was isst Daphnia? (Libellenlarven, Fische falls vorhanden.) Was isst Libellenlarven? (Frösche, Vögel.)" Das Nahrungsnetz wird auf großem Display gezeichnet und bleibt den ganzen Term — ein Arbeits-Dokument, das aktualisiert wird, wenn neue Arten gefunden werden.

*Wochen 4–5: Die Algen-Untersuchung.*
Die treibende Frage verengt sich: „Warum wird unser Weiher grün?" SuS designen und führen eine Untersuchung durch:
- Wasser-Qualität testen: pH, Nitrat-Level (mit einfachen Test-Streifen, CHF 5 von einem Aquariums-Laden), Wasser-Klarheit (Secchi-Scheibe — SuS können eine aus einer gewichteten weissen Scheibe auf einer Schnur machen)
- Vergleich: eine Wasserprobe vom Weiher und vom Schul-Wasserhahn nehmen. Was ist anders? Der Nitrat-Test wird wahrscheinlich erhöhte Nitrate im Weiher zeigen (die Algen-Wachstum-Ursache)
- Hypothese: „Falls Nitrate hoch sind, was produziert sie?" SuS untersuchen: Blattfall-Zersetzung im Weiher, Boden-Erosion aus angrenzenden Gartenbetten, Vogelkot vom Futterplatz. Jede ist testbare Hypothese.

*Wochen 6–7: Die Frog-Frage.*
„Warum sind weniger Frösche da?" SuS recherchieren Frog-Lebenszyklen und Habitat-Anforderungen: Frösche brauchen sauberes Wasser zum Brüten (Algen reduziert gelösten Sauerstoff), vegetierte Weiher-Ränder für Deckung, umgebendes Habitat zum Futtersuchen. SuS bewerten: bietet unser Weiher das noch an? Der Holzstapel bietet Futtersuch-Habitat. Aber hat die Alge das Wasser für Kaulquappen unbewohnbar gemacht?

*Woche 8: Interdependenz-Kartierung.*
SuS besuchen ihr Nahrungsnetz nochmal. LP führt INTERDEPENDENZ-Konzept ein: „Falls die Alge die Oberfläche bedeckt und was darunter sind Pflanzen, was passiert? (Sie können nicht photosynthetisieren — sie sterben.) Falls Pflanzen sterben, was passiert mit Wirbellosen, die darin leben? (Sie verlieren Habitat.) Falls Wirbellose sinken, wer isst sie? (Die Frösche.) Könnte das Algen-Problem VERBUNDEN mit dem Frog-Problem sein?" SuS tracen die Kaskade durch ihr Nahrungsnetz — das ist Interdependenz-in-Action gemacht sichtbar durch IHREN Weiher.

**Phase 3 — Verstehen (Wochen 9–10)**

SuS synthetisieren ihre Befunde:
- Das Nahrungsnetz zeigt, wie Energie durch das Weiher-Ökosystem fliesst
- Die Algen-Untersuchung zeigt, wie eine Änderung in EINEM Faktor (Nährstoff-Level) durch das System kaskadieren kann
- Die Frog-Frage zeigt Interdependenz in Aktion — die Gesundheit einer Art hängt von der Gesundheit des ganzen Systems ab
- Das Konzept ÖKOSYSTEM-BALANCE wird greifbar: dieser Weiher war balanciert als er gegraben wurde, und etwas hat sich verschoben

SuS schreiben einen „Ökosystem-Gesundheits-Report" für die Schule — fasst zusammen, was sie fanden, erklären die Science, empfehlen Aktionen.

**Phase 4 — Stewardship (Wochen 11–12)**

Basierend auf ihrer Untersuchung designen und implementieren SuS eine Intervention:
- Falls das Problem Blattfall ist: installiere ein Weiher-Netz im Herbst, um Blätter aus dem Wasser zu halten
- Falls das Problem Erosion ist: schaffe eine bepflanzte Puffer-Zone zwischen Gartenbetten und Weiher
- Falls das Problem Nährstoff-Akkumulation ist: Teils-Wasserwechsel (entferne etwas Algen-reiches Wasser, ersetze mit sauberem Wasser) und Gersten-Stroh einführen (traditionelle, evidenz-unterstützte Algen-Reduktions-Methode)
- Laufend: etabliere ein „Weiher-Monitoring-Team", das monatlich Wasser-Qualität und Arten prüft — die Forschung endet nicht wenn die Unit endet

### Forschungsaktivitäten

| Woche | Aktivität | Was SuS tun | Daten gesammelt |
|---|---|---|---|
| 1 | Stille Beobachtung | Sitzen, beobachten, Fragen notieren | Frage-Liste, erste Skizzen |
| 2 | Biodiversitäts-Erhebung | Weiher-Netz, Arten identifizieren | Arten-Liste, Häufigkeits-Schätzungen |
| 3 | Nahrungsnetz-Konstruktion | Fütterungs-Beziehungen recherchieren, Netz bauen | Physisches Nahrungsnetz-Display |
| 4 | Wasser-Qualität testen | pH, Nitrat, Klarheit testen | Wasser-Qualitäts-Daten (quantitativ) |
| 5 | Algen-Quellen-Untersuchung | Hypothesen über Nährstoff-Quellen testen | Vergleichs-Daten, Beobachtungen |
| 6 | Frog-Habitat-Bewertung | Brut- und Futtersuch-Habitat bewerten | Habitat-Checkliste, Zustand-Bewertung |
| 7 | Vergleich mit gesundem Weiher | Gesunde Stätte recherchieren oder besuchen | Vergleichs-Arten/Wasser-Daten |
| 8 | Interdependenz-Kartierung | Kaskaden-Effekte durch Nahrungsnetz tracen | Kommentiertes Nahrungsnetz mit Auswirkungs-Pfeilen |
| 9–10 | Ökosystem-Gesundheits-Report | Synthetisieren und schreiben | Schriftlicher Report mit Evidenz |
| 11–12 | Stewardship-Intervention | Verbesserungs-Massnahme planen und implementieren | Aktions-Plan, Vorher/Nachher-Daten-Plan |

### Lehrplan-Verbindungen

| Lehrplanziel | Wie die Weiher-Forschung es adressiert |
|---|---|
| Nahrungsketten | SuS konstruieren echte Nahrungskette aus Arten im IHREM Weiher |
| Nahrungsnetze | Das vollständige Nahrungsnetz wird aus beobachteten Organismen gebaut, nicht Textbuch-Beispiele |
| Interdependenz | Die Algen-Frog-Verbindung demonstriert Kaskaden-Effekte in lebendem System |
| Auswirkung von Änderungen | Die Algen-Blüte IST Ökosystem-Änderung — SuS untersuchen ihre Ursachen und Effekte |
| Menschlicher Einfluss | SuS entdecken, dass menschliche Aktionen (Garten-Erosion, Futterplatz-Position) das Problem verursacht haben könnten — und dass menschlicher Stewardship es adressieren kann |

### Ökologische Kompetenz-Outcomes

Über den Lehrplan hinaus entwickeln SuS:
1. **Systems-Denken.** Der Weiher ist nicht eine Sammlung einzelner Organismen — es ist ein SYSTEM, wo alles verbunden ist. Ein Element verändern, beeinflusst andere auf Wegen, die nicht immer offensichtlich sind.
2. **Jahreszeit-Bewusstsein.** Durch wöchentliche Besuche bemerken SuS, dass der Weiher sich durch den Term verändert — Arten erscheinen und verschwinden, Pflanzen wachsen und fallen ab, Wasserlevel verändern sich. Ökosysteme sind dynamisch, nicht statisch.
3. **Ökologische Reziprozität.** SuS lernen VOM Weiher und geben ZURÜCK AN den Weiher. Das ist Kimmerers Prinzip: Wissen erzeugt Verantwortung. SuS, die die Weiher-Ökologie verstehen, sind motiviert, sie zu pflegen.
4. **Der Wert langfristiger Beobachtung.** Ein einzelner Besuch gibt einen Schnappschuss. Zwölf Wochen geben eine Geschichte. SuS lernen, dass ökologisches Verstehen Geduld und wiederholte Beobachtung erfordert.

### Stewardship-Plan

SuS designen ihre Intervention basierend auf Evidenz:
1. **Identifiziere die Ursache.** Ihre Untersuchung bestimmt ob die Alge von Nährstoff-Erosion, Blattfall oder anderen Faktoren verursacht ist.
2. **Recherchiere Lösungen.** Für jede Ursache recherchiere ökologisch-angepasste Interventionen (nicht chemisch — biologisch und strukturell).
3. **Implementiere.** Mit LP- und Hauswart-Unterstützung führe die Intervention durch.
4. **Überwache.** Etabliere laufendes Monitoring: monatliche Wasser-Qualitäts-Tests, Term-Arten-Erhebungen. Nächstes Jahr die 7. Klasse setzt Monitoring fort, vergleicht ihre Daten mit dieser Jahre Baseline. Der Weiher wird eine Langzeit-ökologische Forschungsstelle.

---

## Bekannte Limitationen

1. **Ökologische Forschung erfordert Zugang zu echtem Ökosystem.** Schulen ohne Weiher, Gärten oder zugängliche Naturbereiche haben echte Constraints. Aber Sobels Prinzip ist, dass JEDES lebende System — selbst ein Blumenkasten, eine Kompostreihe oder Gras wachsend durch Spielplatz-Risse — ökologisch komplex genug ist für Forschung. Die Forschung kann auf jedes verfügbare Ökosystem skaliert werden.

2. **Die Evidenz-Basis für ökologische Bildung ist primär qualitativ.** Chawla (1998) und Sobel (1996, 2004) zeichnen auf qualitative Forschungs-Traditionen — bedeutsame Lebens-Erfahrung-Narrative, Case-Studien und Praktiker-Berichte. Es gibt weniger RCTs oder grosse Quantitativ-Studien, die akademische-Leistungs-Gewinne von ökologischer Forschung demonstrieren. Die Evidenz für Engagement, Umwelt-Bewusstsein und Stewardship-Verhalten ist stärker als für Science-Test-Performance.

3. **Langzeit-Forschung erfordert institutionale Unterstützung.** Eine Term-lange wöchentliche Untersuchung braucht Stundenplan-Schutz, Aussen-Zugang in all Wetter und Unterstützung von Schulleitung. Falls die Forschung jedes Mal wenn es regnet oder das Gelände matschig ist cancelt, wird das nachhaltige Beobachtungs-Prinzip unterminiert. LPs müssen die Zeit und Bedingungen, die ökologische Forschung möglich machen, fordern.
