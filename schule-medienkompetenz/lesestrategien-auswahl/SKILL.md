---
# AGENT SKILLS STANDARD FIELDS (v2)
name: lesestrategien-auswahl
description: "Wähle und sequenziere Lese-Verständnis-Strategien, die zu spezifischen Herausforderungen eines Textes passen. Nutze diese Skill, wenn SuS mit einem Text schwierig haben oder zielgerichtete Lesehilfe brauchen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-medienkompetenz/lesestrategien-auswahl"
skill_name: "Wähler für Lese-Verständnis-Strategien"
domain: "schule-medienkompetenz"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Duke & Pearson (2002) — Effective practices for developing reading comprehension"
  - "Pressley (2002) — Metacognition and self-regulated comprehension"
  - "National Reading Panel (2000) — Teaching children to read: an evidence-based assessment"
  - "Palincsar & Brown (1984) — Reciprocal teaching of comprehension-fostering and comprehension-monitoring activities"
  - "Shanahan et al. (2010) — Improving reading comprehension in kindergarten through 3rd grade: IES practice guide"
input_schema:
  required:
    - field: "textbeschreibung"
      type: "string"
      description: "Beschreibung des Textes, den SuS lesen werden — Genre, Thema, Länge und Schlüssel-Herausforderungen"
    - field: "lesausforderung"
      type: "string"
      description: "Die spezifische Verständnis-Schwierigkeit, die SuS wahrscheinlich mit diesem Text haben"
    - field: "sus_niveau"
      type: "string"
      description: "Jahrgangsstufe/Klasse und gegenwärtige Lesefertigkeit"
  optional:
    - field: "lesezweck"
      type: "string"
      description: "Warum SuS diesen Text lesen — z.B. um Information zu extrahieren, um zu analysieren, zum Genießen, zum Vergleichen"
    - field: "sus_profile"
      type: "array"
      description: "Aus Kontextmotor: Leseniveaus, Dekodierungs-Fähigkeit, DaZ-Status"
    - field: "fachgebiet"
      type: "string"
      description: "Der Curriculum-Fachkontext — Strategie-Auswahl variiert je Fach"
    - field: "textauszug"
      type: "string"
      description: "Ein kurzer Auszug aus dem aktuellen Text für präzisere Strategie-Empfehlungen"
output_schema:
  type: "object"
  fields:
    - field: "empfohlene_strategien"
      type: "array"
      description: "2–3 Strategien, die für diesen Text und diese Lesausforderung ausgewählt sind, mit Begründung"
    - field: "implementierungs_anleitung"
      type: "object"
      description: "Schritt-für-Schritt-Anleitung zum Unterrichten jeder Strategie mit diesem Text — vor, während, nach dem Lesen"
    - field: "lehrpersonen_modellierungstext"
      type: "string"
      description: "Ein kurzes Think-aloud-Skript, das die LP die Primär-Strategie modelliert"
    - field: "strategie_fallstricke"
      type: "string"
      description: "Was bei Strategie-Unterricht schiefgehen kann und wie man es vermeidet"
chains_well_with:
  - "textkomplexitaet-analyse"
  - "think-aloud-script-generator"
  - "wortschatz-tiering-tool"
  - "geruestete-aufgaben-modifizierer"
teacher_time: "3 minutes"
tags: ["lesen", "verstaendnis", "strategie-unterricht", "reziproke-lehre", "metakognition", "Lehrplan-21", "D.2"]
---

# Wähler für Lese-Verständnis-Strategien

## Was diese Skill tut

Identifiziert die geeignetsten Lese-Verständnis-Strategien für einen spezifischen Text und eine Lesausforderung, und bietet eine komplette Implementierungs-Anleitung, einschließlich eines LP-Modellierungs-Skripts. Statt standardmäßig "nutze alle Strategien" (ein häufiger aber ineffektiver Ansatz), passt diese Skill spezifische Strategien an spezifische Verständnis-Herausforderungen an — Vorhersagen, wenn Textstruktur ungewöhnlich ist, Fragen, wenn Inhalt dicht ist, Klären, wenn Wortschatz technisch ist, Zusammenfassen, wenn Text lang und detailliert ist. Die Ausgabe sagt LP nicht nur WELCHE Strategie zu nutzen, sondern WIE sie mit diesem spezifischen Text zu unterrichten ist. KI ist besonders wertvoll, weil Strategie-Auswahl das simultane Analysieren der Text-Anforderungen, der Leser-Schwierigkeiten und der Evidenz für jede Strategie erfordert — eine Dreiwege-Entsprechung, die die meisten LP zeit-weise nicht leisten können.

## Evidenzgrundlage

Duke & Pearson (2002) identifizierten sechs Verständnis-Strategien mit starker Evidenz: Vorhersagen, Fragen, Überwachen/Klären, Visualisieren, Verbindungen machen und Zusammenfassen. Entscheidend betonten sie, dass Strategie-Unterricht explizit sein muss — LP müssen die Strategie durch Think-aloud modellieren, SuS guided in der Anwendung anleiten, und graduell Verantwortung übertragen. Pressley (2002) zeigte, dass kompetente Leser Strategien flexibel und selektiv nutzen, verschiedene Strategien für verschiedene Lesausforderungen wählend — alle Strategien all die Zeit unterrichten produziert kognitiven Overload und oberflächliche Anwendung. Das National Reading Panel (2000) bestätigte, dass Verständnis-Strategie-Unterricht bedeutsame Effekte erzeugt (besonders Fragen und Zusammenfassen), aber warnte, dass Strategien Mittel zu Verständnis sind, nicht Zwecke per se — das Ziel ist Verständnis, nicht Strategie-Nutzung. Palincsar & Brown (1984) zeigten die Effektivität von reziprokaler Lehre — ein strukturierter Ansatz, bei dem SuS vier Strategien (Vorhersagen, Fragen, Klären, Zusammenfassen) abwechselnd nutzen — mit Effektstärken von 0,74 für Verständnis-Gewinne. Shanahan et al. (2010) notierten, dass Strategie-Unterricht am wirksamsten ist für Zwischen-Leser, die dekodieren können aber mit Bedeutung ringen; für Anfänger-Leser ist Dekodierungs-Unterricht prioritär.

## Eingabeschema

Die Lehrperson muss bereitstellen:
- **Textbeschreibung:** Was SuS lesen. *z.B. "Ein Kapitel aus Jugendroman — 1200 Wörter, narrative Fiktion mit dual timelines" / "Ein BBC-Artikel über Photosynthese — 500 Wörter, informativer Text mit Diagrammen" / "Ein Auszug aus Geschichtsmaterial — ein Brief von einem WK1-Soldat, ca. 300 Wörter"*
- **Lesausforderung:** Die spezifische Schwierigkeit. *z.B. "SuS lesen die Oberflächenereignisse aber verpassen die zugrundeliegenden Ursachen" / "SuS bemerken die Hinweise nicht, die das Ending vorhersagen" / "SuS werden von technischem Wortschatz verloren und geben auf"*
- **SuS-Niveau:** Jahrgangsstufe und Lesekompetenz. *z.B. "7. Klasse, können flüssig dekodieren aber Schwierigkeiten mit Folgerung" / "6. Klasse, gemischt — einige sichere Leser, einige entwickeln noch Flüssigkeit"*

Optional (injiziert vom Kontextmotor, falls verfügbar):
- **Lesezweck:** Warum SuS diesen Text lesen
- **SuS-Profile:** Leseniveaus, Dekodierungs-Fähigkeit, DaZ-Status
- **Fachgebiet:** Der Curriculum-Fachkontext
- **Textauszug:** Ein kurzer Auszug aus dem aktuellen Text

## Prompt

```
Du bist ein Experte für Lese-Verständnis-Unterricht mit tiefem Wissen von Duke & Pearson (2002), Pressley (2002), Palincsar & Brown (1984), und dem National Reading Panel (2000). Du verstehst, dass effektiver Strategie-Unterricht SELEKTIV ist (spezifische Strategien auf spezifische Herausforderungen passen), EXPLIZIT ist (die LP modelliert vor SuS-Anwendung selbstständig), und ZIELGERICHTET ist (Strategien dienen Verständnis, nicht umgekehrt).

Deine Aufgabe ist es, Lese-Verständnis-Strategien zu wählen und Unterricht für folgendes zu planen:

**Textbeschreibung:** {{textbeschreibung}}
**Lesausforderung:** {{lesausforderung}}
**SuS-Niveau:** {{sus_niveau}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Verwende alles Verfügbare; ignoriere alle als "nicht bereitgestellt" gekennzeichneten Felder.

**Lesezweck:** {{lesezweck}} — falls nicht bereitgestellt, leite den wahrscheinlichsten Zweck aus der Text-Beschreibung und dem Fachgebiet ab.
**SuS-Profile:** {{sus_profile}} — falls nicht bereitgestellt, entwirfe für eine Klasse mit gemischter Fähigkeit, allgemein flüssiger Dekodierung aber variablem Verständnis.
**Fachgebiet:** {{fachgebiet}} — falls nicht bereitgestellt, leite aus der Text-Beschreibung ab.
**Textauszug:** {{textauszug}} — falls bereitgestellt, nutze ihn für spezifische, gegrundete Strategie-Empfehlungen. Falls nicht, erstelle ein plausibl Beispiel basierend auf der Text-Beschreibung und deinem Wissen des Genres und Themas.

Wende diese evidenzgestützten Prinzipien an:

1. **Wähle Strategien basierend auf der spezifischen Verständnis-Herausforderung (Duke & Pearson, 2002; Pressley, 2002):**
   - Empfehle NICHT alle Strategien auf einmal. Wähle 2–3 Strategien, die die genannte Lesausforderung direkt adressieren.
   - Passe Strategien zu Herausforderungen:
     - Ungewöhnliche Text-Struktur → Vorhersagen (aktiviert Erwartungen über Struktur)
     - Dichter Inhalt mit vielen Ideen → Zusammenfassen (erzwingt Identifikation Haupt-Ideen)
     - Implizite Bedeutung, Folgerung erforderlich → Fragen (fokussiert Aufmerksamkeit auf das nicht Gesagte)
     - Technischer oder ungewöhnlicher Wortschatz → Klären/Überwachen (lehrt SuS, Verwirrung zu identifizieren und zu lösen)
     - Narrativ mit komplexer Charakter-Motivation → Verbindungen machen + Fragen
     - Informativer Text mit komplexen Prozessen → Visualisieren + Zusammenfassen
   - Erkläre WARUM jede Strategie für DIESEN Text und DIESE Herausforderung geeignet ist.

2. **Explizite Unterrichtssequenz (Duke & Pearson, 2002):**
   - Für jede Strategie, gib:
     a. LP-Modellierung (Ich Mach): Die LP demonstriert die Strategie durch Think-aloud
     b. Guided Practice (Wir Machen): SuS probieren die Strategie mit LP-Unterstützung
     c. Independent Application (Du Machst): SuS nutzen die Strategie selbstständig
   - Das Modellierungs-Skript sollte der LP's aktuelle Denkprozess zeigen, nicht nur das Strategie-Label.

3. **Strategien sind Tools, nicht Rituale (National Reading Panel, 2000):**
   - Warne vor dem Drehen von Strategien in Arbeitsblatt-Aktivitäten. "Schreib drei Vorhersagen" ist keine Vorhersage-Unterricht — es ist eine Compliance-Aufgabe.
   - Das Ziel ist VERSTÄNDNIS, nicht Strategie-Performance. Falls SuS den Text ohne die Strategie verstehen können, brauchen sie die Strategie nicht.
   - Strategie-Unterricht sollte sich wie Denken anfühlen, nicht wie Form-Füllen.

4. **Entwicklungs-Angemessenheit (Shanahan et al., 2010):**
   - Für jüngere oder weniger flüssige Leser: fokussiere auf eine einzelne Strategie, mit heavyem Modellieren und unterstützter Praxis.
   - Für Zwischen-Leser: 2 Strategien, mit gradueller Releases of Responsibility.
   - Für erweiterte Leser: flexible Strategie-Nutzung — lehre SuS, ihre eigenen Strategien basierend auf Lesausforderung zu wählen.
   - Falls SuS noch mit Dekodierung ringen, ist Strategie-Unterricht verfrüht — notiere das.

5. **Vor, während, nach Struktur:**
   - Organisiere die Implementierung um den Leseprozess:
     - Vor dem Lesen: adressiere das signifikanteste Verständnis-Hindernis BEVOR SuS es begegnen.
     - Während des Lesens: biete guided Unterstützung an spezifischen Komplexitäts-Spitzenpunkten.
     - Nach dem Lesen: erweitere Verständnis durch Diskussion, Schreiben oder Anwendung.

Gib deine Ausgabe in diesem exakten Format zurück:

## Lese-Verständnis-Strategien: [Kurze Text-Beschreibung]

**Für:** [SuS-Niveau]
**Text:** [Text-Beschreibung]
**Schlüssel-Herausforderung:** [Lesausforderung]
**Lesezweck:** [Angegeben oder inferred]

### Empfohlene Strategien

Für jede Strategie (2–3):
- **Strategie [N]: [Name]**
  **Warum diese Strategie für diesen Text:** [Spezifische Begründung — was über diesen Text und diese Leser macht diese Strategie die richtige Wahl]
  **Wie es in der Praxis aussieht:** [Kurze Beschreibung von dem, was SuS tatsächlich TUN werden]

### Implementierungs-Anleitung

**Vor dem Lesen (X Minuten)**
[Was die LP tut zu Setup-Lesen — Prior-Wissen aktivieren, Strategie einführen, Zweck setzen]

**Während des Lesens (X Minuten)**
[Spezifische Textpunkte, wo die Strategie angewendet wird, und wie — LP-guided für ersten Anwendung, dann SuS-led]

**Nach dem Lesen (X Minuten)**
[Wie SuS über ihr Verständnis reflektieren und die Strategie-Effektivität evaluieren]

### LP-Modellierungs-Skript

[Ein Think-aloud-Skript, wo die LP die Primär-Strategie mit einem spezifischen Textabschnitt modelliert — zeigt den inneren Denkprozess, nicht nur das Strategie-Label]

### Strategie-Fallstricke

[2–3 Dinge, die bei Strategie-Unterricht für diesen Text schiefgehen können, und wie man es vermeidet]

**Selbstkontrolle vor der Rückgabe:** Verifiziere dass (a) Strategien zur spezifischen Verständnis-Herausforderung gebunden sind, nicht generisch empfohlen, (b) die Implementierung explizites LP-Modellieren vor SuS-Anwendung enthalten, (c) das Modellierungs-Skript tatsächliches Denken zeigt, nicht nur Strategie-Labeling, (d) der Ansatz ist entwicklungs-angemessen, und (e) die Strategien dienen Verständnis, nicht umgekehrt — eine SuS, die den Text versteht, hat erfolgreich agiert, ob oder ob nicht sie die Strategie "korrekt genutzt" hat.
```

## Beispielausgabe

**Szenario:** *Textbeschreibung: "Ein Geschichts-Lehrbuch-Auszug (600 Wörter) zum Mittelalter, das die Ursachen der Pest-Ausbreitung über Europa erklärt — der Text präsentiert mehrere kausale Faktoren (Handelsrouten, Flöhe auf Ratten, Mangel an medizinischem Wissen, überfüllte Städte) und SuS brauchen zu verstehen, wie diese Faktoren interagieren" / Lesausforderung: "SuS tendieren, die Ursachen zu listen ohne zu verstehen, wie sie verbunden sind — sie können 'Handelsrouten verbreiteten die Pest' sagen aber können nicht die Kausalkette erklären" / SuS-Niveau: "8. Klasse, flüssige Dekoder, können explizite Information identifizieren aber Schwierigkeiten mit impliziten Verbindungen zwischen Ideen"*

---

## Lese-Verständnis-Strategien: Ursachen der Pest-Ausbreitung

**Für:** 8. Klasse Geschichte
**Text:** Lehrbuch-Auszug (600 Wörter) zu Ursachen der Pest-Ausbreitung über Europa
**Schlüssel-Herausforderung:** SuS listen Ursachen individuell auf, aber verstehen nicht, wie sie interagiert — sie können nicht die Kausalkette erklären
**Lesezweck:** Die verstrickten Ursachen der Pest-Ausbreitung verstehen, vorbereitung zum Schreiben einer kausalen Erklärung

### Empfohlene Strategien

**Strategie 1: Fragen — "Wie verbindet sich das?"**
**Warum diese Strategie für diesen Text:** Die Verständnis-Herausforderung ist über Verbindungen zwischen Ideen, nicht über Verständnis einzelner Fakten. SuS können die Information extrahieren ("Handelsrouten," "Flöhe auf Ratten") aber fragen nicht spontan, wie eine Ursache sich auf die andere bezieht. Selbst-Fragen erzwingt, dass SuS Verbindungs-Fragen generieren, während sie lesen: "Wie halfen Handelsrouten Flöhen, sich auszubreiten?" / "Warum machten überfüllte Städte die Pest schlimmer?"
**Wie es in der Praxis aussieht:** SuS pausieren am Ende jedes Absatzes und fragen: "Wie verbindet sich diese Ursache zu denen, die ich bereits gelesen habe?" Sie zeichnen ihre Fragen und versuchen auf, sie zu beantworten.

**Strategie 2: Zusammenfassen — Kausale-Kette-Mapping**
**Warum diese Strategie für diesen Text:** Der Text präsentiert mehrere Ursachen, und SuS brauchen nicht nur zu identifizieren, was sie sind, sondern wie sie eine Kette bilden. Zusammenfassen erzwingt, dass SuS die wichtigste Information selektieren und organisieren — in diesem Fall, es als kausale Kette statt als Liste organisieren. Das Zusammenfassen ist disziplinarisch: "Was verursachte was?" statt "Was sind die Hauptpunkte?"
**Wie es in der Praxis aussieht:** Nach alle zwei Absätzen fassen SuS in einem Satz zusammen, das Frame nutzend: "[Ursache A] führte zu [Ursache B], weil..." Das erzwingt kausale Verkettung, nicht Auflistung.

### Implementierungs-Anleitung

**Vor dem Lesen (5 Minuten)**

1. *Prior-Wissen aktivieren:* "Bevor wir lesen, was weißt du bereits über die Pest? Wann war das? Wo?" Quick brainstorm — 2 Minuten.

2. *Stellen die Lesausforderung:* "Heute's Text erklärt, WARUM die Pest sich so schnell über Europa ausbreitete. Es gibt mehrere Ursachen. Deine Aufgabe ist nicht nur, die Ursachen zu finden — Ich will, dass du verstehst, wie sie VERBINDEN. Eine Ursache hat nicht allein funktioniert — sie funktioniert zusammen wie eine Kette."

3. *Stellen die Fragen-Strategie vor:* "Während du liest, Ich möchte, dass du eine Frage fortsetzt: 'Wie verbindet sich das mit dem, das Ich gerade gelesen habe?' Wenn der Text über Handelsrouten spricht, frag: 'Wie verbanden sich Handelsrouten zu den Flöhen?' Wenn er über überfüllte Städte spricht, frag: 'Warum machten Übercrowing die anderen Ursachen schlimmer?'"

4. *Zeige das Aufzeich-Format:* Zwei Spalten — linke Spalte: "Ursache," rechte Spalte: "Wie verbindet es sich zu anderen Ursachen."

**Während des Lesens (15 Minuten)**

*Absatz 1 — LP modelliert (siehe Skript unten)*

*Absatz 2 — Guided Practice:* Lese zusammen. Pause. "OK, dieser Absatz sprach von Flöhen auf Ratten. Wie verbindet sich das zu den Handelsrouten, die wir in Absatz 1 gelesen haben? Sprich zu deinem Partner — was ist die Verbindung?" Zirkuliere. Höre auf Kausal-Sprache. Teile ein gutes Beispiel mit der Klasse.

*Absätze 3–4 — Unterstützte Unabhängigkeit:* SuS lesen in Paaren. Nach jeden Absatz, pausieren sie, fragen die Verbindungs-Frage, und addieren zu ihrem zwei-Spalten-Record. LP zirkuliert und prüft auf Verbindungs-Sprache, nicht nur Auflistung.

*Absätze 5–6 — Independent Application:* SuS lesen und zeichnen unabhängig auf. LP identifiziert 2–3 SuS zum Teilen ihrer Verbindungen am Ende.

**Nach dem Lesen (5 Minuten)**

1. *Teile Verbindungen:* "Wer fand eine Verbindung zwischen zwei Ursachen, die sie überraschte?" Nimm 2–3 Beispiele. Drücke auf Kausal-Sprache: "Teile mir nicht einfach die zwei Ursachen — teile mir, WIE sie verbunden."

2. *Baue die kausale Kette zusammen:* An der Tafel, baue eine visuelle Kausal-Kette: Handelsrouten → brachten Ratten mit Flöhen → in überfüllte Städte → wo Mangel an medizinischem Wissen bedeutet → keine effektive Antwort. "Seht wie keine dieser Ursachen allein funktioniert? Es ist die Kette, die die Pest verheerend machte."

3. *Reflektiere auf die Strategie:* "Hat das Fragen 'Wie verbindet sich das?' dir helfen, den Text unterschiedlich zu verstehen statt einfach Lese-Durchlauf? Warum?"

### LP-Modellierungs-Skript

*Modelliert die Fragen-Strategie mit Absatz 1:*

"Ich werde Absatz 1 laut lesen und zeige euch, was ich denke, während ich lese. Schaut, wie ich selbst Fragen über Verbindungen stelle.

[Liest Absatz 1 über Handelsrouten zwischen Asien und Europa]

OK, also dieser Absatz sagt mir, dass Handelsrouten Asien mit Europa verbinden und dass die Pest in Zentral-Asien startete. Also Handelsrouten sind eine Ursache der Ausbreitung. Aber Ich werde selbst eine Frage stellen: 'Wie verbindet sich das zu anderen Ursachen?' Ich weiß, dass Handelsrouten Waren transportieren — also vielleicht transportieren sie auch etwas Anderes? Der Text sagt 'Merchants traveled with their goods along the Silk Road.' Ich denke: falls Merchants reisen, was könnte MIT ihnen reisen, das sie nicht wissen? Ich werde diese Frage halte, während ich den nächsten Absatz lese.

Seht, was ich tat? Ich sagte nicht einfach 'Handelsrouten — das ist eine Ursache.' Ich fragte, WIE Handelsrouten tatsächlich die Pest verbreiteten. Das 'wie'-Fragen ist das, das ich für jede Ursache, die du findest möchte."

### Strategie-Fallstricke

1. **Fragen wird eine Arbeitsblatt-Übung.** Falls SuS "Wie verbindet sich das?" nach jeden Absatz schreiben ohne tatsächlich über die Antwort zu denken, die Strategie ist Compliance-Aufgabe geworden. Vermeiden durch Insistieren, dass SuS IHRE FRAGEN BEANTWORTEN, nicht nur sie stellen. Während Zirkulation, prüfe nicht das SuS Fragen geschrieben haben — prüfe, dass sie ERKLÄREN KÖNNEN die Verbindungen.

2. **Zusammenfassen wird Auflistung.** SuS könnten zeichnen "Ursache 1: Handelsrouten. Ursache 2: Flöhe" — das ist Auflistung, nicht Zusammenfassen von Verbindungen. Der Satz-Frame "[Ursache A] führte zu [Ursache B], weil..." ist designed, das zu verhindern, aber es erfordert Enforcement. Falls SuS ein-Wort-Antworten schreiben, stoppe und re-modelliere: "Du hast 'Flöhe' geschrieben. Aber wie VERBANDEN sich Flöhe zu den Handelsrouten? Das ist das Zusammenfassen, das ich brauche."

3. **Die Strategie überschattet den Inhalt.** Falls SuS mehr Zeit damit verbringen, "Nutze ich die Strategie korrekt?" zu denken statt "Wie breitete sich die Pest aus?", die Strategie ist eine Hindernis, nicht eine Hilfe geworden. Das Ziel ist Verständnis des Geschichts-Inhalts, nicht perfekte Strategie-Ausführung. Falls eine SuS die Kausal-Kette erklären kann aber hat nicht formal die Strategie genutzt, diese SuS hat ERFOLGREICH agiert. Strategie ist ein Denk-Scaffold, nicht ein Anforderung.

---

## Bekannte Limitierungen

1. **Strategie-Unterricht ist am wirksamsten für Zwischen-Leser — denen, die dekodieren können aber Verständnis-Schwierigkeiten haben.** Für SuS, die noch Flüssigkeit entwickeln (lesen langsam, Wort-für-Wort dekodieren), addieren Verständnis-Strategien kognitive Last statt reduzieren. Diese SuS brauchen Flüssigkeits-Unterricht zuerst. Die Skill flaggt diese entwicklungs-überlegung aber kann nicht einzelne SuS dekodieren-Level beurteilen — die LP muss diesen Urteil treffen.

2. **Die Strategie-Empfehlungen hängen von der Genauigkeit der Text-Beschreibung und Lesausforderung.** Falls die LP die Herausforderung als "SuS können den Wortschatz nicht verstehen" beschreibt, aber die echte Herausforderung ist "SuS haben nicht das Hintergrund-Wissen, den Inhalt zu machen," werden die empfohlenen Strategien verfehlen. Strategie-Auswahl ist Diagnostisch — es erfordert genaue Identifikation von was schiefgeht.

3. **Strategie-Unterricht kann formulaisch werden falls übernutzt.** Falls jeder Text mit "Heute nutzen wir Vorhersagen und Fragen" vorangegangen wird, SuS stoppen, sich mit Strategien zu engagieren und fangen an, sie mechanisch auszuführen. Strategien sollten unterrichtet werden, wenn sie gebraucht sind, nicht als Routine für jede Lesauf-Aufgabe. Das beste Ergebnis ist SuS, die selbst Strategien auswählen, wenn sie bemerken, ihr Verständnis auseinanderbricht.
