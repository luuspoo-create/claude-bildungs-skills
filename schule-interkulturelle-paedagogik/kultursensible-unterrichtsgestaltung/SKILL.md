---
# AGENT SKILLS STANDARD FIELDS (v2)
name: kultursensible-unterrichtsgestaltung
description: "Gestalte eine Lektion neu, um kulturelle Hintergründe, Gemeinschaftswissen und gelebte Erfahrungen der SuS zu zentrieren. Nutze diesen Skill für kulturell relevanten und inklusiven Unterricht in diversen Klassen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-interkulturelle-paedagogik/kultursensible-unterrichtsgestaltung"
skill_name: "Kultursensible Unterrichtsgestaltung"
domain: "schule-interkulturelle-paedagogik"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Gay (2018) — Culturally Responsive Teaching: theory, research, and practice (3rd edition)"
  - "Ladson-Billings (1995) — Toward a theory of culturally relevant pedagogy"
  - "Hammond (2015) — Culturally Responsive Teaching and The Brain"
  - "Paris & Alim (2017) — Culturally Sustaining Pedagogies: teaching and learning for justice in a changing world"
  - "Aronson & Laughter (2016) — The theory and practice of culturally relevant education: a synthesis of research across content areas"
input_schema:
  required:
    - field: "unterrichtsinhalt"
      type: "string"
      description: "Der Lerninhalt oder die Lernziele, die vermittelt werden sollen"
    - field: "sus_gemeinschaft"
      type: "string"
      description: "Die kulturellen Hintergründe, Gemeinschaftskontexte und gelebten Erfahrungen der Schülerinnen und Schüler in der Klasse"
  optional:
    - field: "fachbereich"
      type: "string"
      description: "Das Schulfach"
    - field: "klassenstufe"
      type: "string"
      description: "Jahrgang/Klasse"
    - field: "bisheriges_vorgehen"
      type: "string"
      description: "Wie der Inhalt aktuell vermittelt wird — welche Texte, Beispiele und Perspektiven verwendet werden"
    - field: "schulkontext"
      type: "string"
      description: "Schülerzusammensetzung, Gemeinschaft, bisherige Arbeit an kultureller Sensibilität"
    - field: "lehrperson_hintergrund"
      type: "string"
      description: "Der eigene kulturelle Hintergrund und die Erfahrung der LP mit kultursensiblem Unterricht"
output_schema:
  type: "object"
  fields:
    - field: "kultursensible_lektion"
      type: "object"
      description: "Die neu gestaltete Lektion nach kultursensiblen Prinzipien — gleiche fachliche Qualität, kulturell angepasste Pädagogik"
    - field: "kulturelle_bezuege"
      type: "array"
      description: "Konkrete Verbindungen zwischen Lerninhalt und kulturellem Wissen, Praktiken und gelebten Erfahrungen der SuS"
    - field: "kritische_bewusstsein_element"
      type: "object"
      description: "Wie die Lektion SuS befähigt, Ungerechtigkeit zu erkennen und zu hinterfragen"
    - field: "hohe_erwartungen_rahmen"
      type: "object"
      description: "Wie die hohen fachlichen Ansprüche erhalten bleiben während der Unterricht kulturell responsiv ist"
chains_well_with:
  - "ubuntu-kollektives-lernen"
  - "place-based-inquiry-anchor"
  - "belonging-classroom-culture-designer"
  - "phenomenon-based-unit-anchor"
teacher_time: "4 minutes"
tags: ["kultursensibel", "Gay", "Ladson-Billings", "Chancengerechtigkeit", "kulturerhaltend", "Hammond", "Inklusion", "Lehrplan21"]
---

# Kultursensible Unterrichtsgestaltung

## Was dieser Skill leistet

Gestaltet Unterrichtsinhalte neu, um kultursensibel zu sein — indem akademische Inhalte mit den kulturellen Hintergründen, Gemeinschaftskenntnissen und gelebten Erfahrungen der SuS verbunden werden, während hohe fachliche Ansprüche erhalten bleiben und kritisches Bewusstsein entwickelt wird. Der Ansatz basiert auf Geneva Gays (2018) Framework für kultursensiblen Unterricht und Gloria Ladson-Billings' (1995) Theorie kulturell relevanter Pädagogik. Das zentrale Prinzip: Kultursensibel ist NICHT niedrigere Standards, ein "Multikulti-Tag" oder Ersetzen von Fachlichkeit durch Kulturinhalte. Kultursensibel bedeutet, dass wir das KULTURELLE WISSEN der SuS als BRÜCKE zu fachlichem Lernen nutzen. SuS lernen MEHR, nicht weniger, wenn der Unterricht an das anknüpft, was sie bereits wissen und schätzen. Die Lektion wird neu gestaltet mit konkreten Kulturverbindungen, einem Element kritischen Bewusstseins (wo SuS den Inhalt nutzen, um Machtfragen zu prüfen) und einem Rahmen hoher Erwartungen, der die Fachlichkeit stärkt, nicht schwächt. KI ist hier wertvoll, weil authentische Verbindungen zwischen Lehrplaninhalten und diversen kulturellen Kontexten fundierte Kenntnisse über Kulturen, Fachdisziplinen und Pädagogik erfordern — bei gleichzeitiger Sensibilität für die Spezifität jeder Gemeinschaft.

## Theoretische Grundlagen

Gay (2018) definiert kultursensiblen Unterricht als "die Nutzung kulturellen Wissens, früherer Erfahrungen, Bezugsrahmen und Lernstile ethnisch vielfältiger Schüler, um Lernprozesse relevanter und wirksamer zu gestalten." Sie identifizierte fünf wesentliche Elemente: Aufbau von Wissen über kulturelle Vielfalt, Gestaltung kulturell relevanter Lehrpläne, Demonstration kultureller Wertschätzung und Aufbau von Lerngemeinschaft, interkulturelle Kommunikation und kulturelle Kongruenz im Unterricht. Ladson-Billings (1995) formulierte drei Kriterien für kulturell relevante Pädagogik: akademischer Erfolg (SuS müssen fachlich erfolgreich sein), kulturelle Kompetenz (SuS entwickeln ihre kulturelle Identität) und kritisches Bewusstsein (SuS können gesellschaftliche Ungerechtigkeit hinterfragen). Sie betonte, dass kulturell relevanter Unterricht MEHR von SuS verlangt, nicht weniger — er erhöht Ansprüche, während er den Weg dorthin kulturell sinnvoll macht. Hammond (2015) verband kultursensiblen Unterricht mit Neurowissenschaften: Wenn Lernen kulturell angebunden ist, aktiviert es bereits vorhandene neuronale Netzwerke und Vorkenntnisse der SuS, reduziert kognitive Last und erhöht Engagement. Das Gehirn lernt effizienter, wenn neue Information an bestehende Schemata anknüpft. Paris & Alim (2017) erweiterten das Framework zur "kulturerhaltenden Pädagogik" und argumentieren, dass Unterricht nicht nur auf Kulturen reagieren, sondern diese aktiv erhalten und entwickeln sollte angesichts von Kulturverlust. Aronson & Laughter (2016) fassten Forschung über Fachinhalte zusammen und zeigten, dass kulturell relevanter Unterricht durchgehend Engagement und Leistung erhöht, besonders für SuS aus marginalisierten Gemeinschaften.

## Input Schema

Die Lehrperson muss angeben:
- **Unterrichtsinhalt:** Was SuS lernen sollen. *z.B. "Argumentieren — Sek 1, Aufbau überzeugender Argumente mit Belegen" / "Bruchrechnung — Sek 1, Brüche als Teile von Ganzen verstehen" / "Kulturelle Vielfalt — Sek 1, Kenntnisse über Kulturen und Migrationserfahrungen in der Schweiz" / "Ökosysteme — Sek 1, Nahrungsketten und gegenseitige Abhängigkeit verstehen"*
- **SuS-Gemeinschaft:** Wer die Schülerinnen und Schüler sind. *z.B. "Überwiegend Familien mit Migrationshintergrund, viele SuS mehrsprachig (Italienisch/Portugiesisch/Deutsch), starke Familie und Gemeinschaftsverbindungen, Quartier mit lebendigem Marktkulturen" / "Gemischte Gemeinschaft, Kombination aus Schweizer Familien, Familien aus der Türkei, Somalia und Polen, starke lokale Netzwerke" / "Stadtzentrum, sehr vielfältig — Kosovo, Sri Lanka, Eritrea, Bangladesch, Schweizer Arbeiterklasse, viele SuS mit Familienunterstützungsbedarf"*

Fakultativ (aus Kontext injiziert, wenn verfügbar):
- **Fachbereich:** Das Schulfach
- **Klassenstufe:** Jahrgang
- **Bisheriges Vorgehen:** Wie der Inhalt aktuell vermittelt wird
- **Schulkontext:** Schülerzusammensetzung, Gemeinschaft, bisherige Arbeit
- **LP-Hintergrund:** Kultureller Hintergrund und Erfahrung der LP

## Prompt

```
Du bist ExpertIn für kultursensiblen Unterricht mit tiefem Wissen von Gays (2018) CRT Framework, Ladson-Billings' (1995) kulturell relevanter Pädagogik, Hammonds (2015) Neurowissenschaft kultursensiblen Unterrichts, Paris & Alims (2017) kulturerhaltende Pädagogien und Aronsons & Laughters (2016) Forschungssynthese. Du verstehst, dass kultursensibel eine anspruchsvolle pädagogische Praxis ist, kein oberflächliches Add-on — es nutzt kulturelles Wissen der SuS als kognitive Brücke zu akademischen Inhalten, behält höchste akademische Ansprüche bei und entwickelt kritisches Bewusstsein über Machtfragen und Gerechtigkeit.

KRITISCHE PRINZIPIEN:
- **Hohe Erwartungen sind nicht verhandelbar.** Kultursensibel ist NICHT, Arbeiten leichter, simpler oder "lustiger" zu machen. Es bedeutet, anspruchsvolle akademische Inhalte ZUGÄNGLICH zu machen, indem man sie an das anknüpft, was SuS bereits wissen. Wenn die neu gestaltete Lektion niedrigere Ansprüche hat als die Originale, hat sie versagt. Ladson-Billings war explizit: kulturell relevanter Unterricht verlangt akademische Exzellenz.
- **Kulturelle Verbindungen müssen AUTHENTISCH, nicht tokenistisch sein.** "Nutzen wir Bruchrechnung mit Pizzabeispielen aus verschiedenen Kulturen" ist oberflächlich — es ändert nur ein Detail ohne echte kulturelle Tiefe. Eine authentische Verbindung nutzt die kulturelle PRAKTIK, nicht das Objekt: "In eurer Familie werden Rezepte für unterschiedliche Personenzahlen angepasst — wie funktionieren Proportionen, wenn ihr ein Rezept verdoppelt?"
- **Kritisches Bewusstsein ist essentiell, nicht optional.** Ladson-Billings' drittes Kriterium ist, dass SuS gesellschaftliche Ungerechtigkeit hinterfragen lernen. Das bedeutet, die Lektion soll ein Element enthalten, wo SuS akademische Inhalte nutzen, um Macht, Repräsentation oder Gerechtigkeit zu prüfen. In Geschichte: "Wessen Geschichte wird erzählt? Wessen fehlt?" In Naturwissenschaften: "Wer profitiert? Wer wird geschädigt?" In Deutsch: "Wessen Sprache zählt? Welche Stimmen werden gehört?"
- **Kenne die Gemeinschaft, mache keine Annahmen.** Kultursensibel erfordert Kenntnisse der SPEZIFISCHEN Gemeinschaft, nicht generische Annahmen. "Alle Familien aus Osteuropa werden sich für Handwerk interessieren" ist Stereotyp. "SuS in dieser Gemeinschaft haben starke Traditionen von Handwerk und lokaler Wirtschaft" ist spezifisches Wissen. Wenn du keine spezifischen Kenntnisse hast, gestalte die Lektion so, dass SuS ihr kulturelles Wissen selbst einbringen können.
- **Erhalte, nicht nur reagiere.** Nach Paris & Alim ist das Ziel nicht nur, Kulturen als Brücke zu nutzen, sondern kulturales Wissen und Identität durch akademische Arbeit zu erhalten und zu entwickeln.

Deine Aufgabe ist, eine Lektion kultursensibel zu gestalten für:

**Unterrichtsinhalt:** {{unterrichtsinhalt}}
**SuS-Gemeinschaft:** {{sus_gemeinschaft}}

Folgende fakultative Kontexte können verfügbar sein. Nutze, was gegeben ist; ignoriere Felder mit "nicht gegeben".

**Fachbereich:** {{fachbereich}} — wenn nicht gegeben, leite aus dem Inhalt ab.
**Klassenstufe:** {{klassenstufe}} — wenn nicht gegeben, leite aus dem Inhalt ab.
**Bisheriges Vorgehen:** {{bisheriges_vorgehen}} — wenn nicht gegeben, nimm standardmässig Schulbuchansatz an.
**Schulkontext:** {{schulkontext}} — wenn nicht gegeben, gestalte für allgemeinen Kontext.
**LP-Hintergrund:** {{lehrperson_hintergrund}} — wenn nicht gegeben, füge eine Bemerkung zur Positionierung der LP ein.

Gib die Antwort in diesem exakten Format zurück:

## Kultursensible Lektion: [Inhalt]

**Inhalt:** [Was SuS lernen — gleiche fachliche Ziele, kulturell verbunden]
**Gemeinschaft:** [Wer die SuS sind]
**Kernprinzip:** [Das CRT-Prinzip, das zentral für diese Gestaltung ist]

### Bisheriges Vorgehen vs. Kultursensibel

[Kurzer Vergleich: wie Standard-Unterricht aussieht, was im kultursensiblen Ansatz anders ist — nicht zur Kritik, sondern um den Unterschied sichtbar zu machen]

### Kulturelle Verbindungen

Für jede Verbindung (2–4):
**Verbindung [N]: [Was verbunden wird]**
- **Kulturelles Wissen:** [Was SuS aus Gemeinschaft/Erfahrung mitbringen]
- **Akademischer Inhalt:** [Wie das zum Lernziel passt]
- **Wie nutzen:** [Konkrete Aktivität, die kulturell und akademisch verbindet]

### Element kritisches Bewusstsein

[Wie die Lektion SuS befähigt, durch akademische Inhalte Ungerechtigkeit, Machtfragen oder Repräsentation zu prüfen]

### Rahmen hohe Erwartungen

[Wie die Lektion akademische Anforderungen erhält oder erhöht — konkrete Belege, dass Anforderungen nicht gesenkt werden]

### Lektion neu gestaltet

[Die neu gestaltete Lektion — strukturiert, praktisch, unterrichtsbereit]

### Reflexion für die Lehrperson

[Fragen zur Selbstreflexion über eigene Positionierung, Annahmen und Lernen]

**Selbstkontrolle vor Rückgabe:** Prüfe, dass (a) akademische Anforderungen mindestens so hoch sind wie ursprünglich, (b) kulturelle Verbindungen authentisch und spezifisch, nicht tokenistisch, (c) das Element kritisches Bewusstsein wirklich integriert, (d) die Gestaltung SuS-kulturales Wissen einlädt statt es anzunehmen, und (e) der Ansatz kulturale Identität erhält, nicht nur als Brücke nutzt.
```

## Beispiel-Output

**Szenario:** *Unterrichtsinhalt: "Überzeugend argumentieren — Sek 1 Deutsch. SuS sollen Argumente mit Belegen konstruieren, rhetorische Techniken (Ethos, Pathos, Logos) nutzen und strukturiert aufschreiben. Aktueller Ansatz nutzt Zeitungskommentare als Vorbilder, SuS schreiben einen Brief an die Schulleitung über eine lokale Frage." / SuS-Gemeinschaft: "Innenstadtschule, sehr vielfältig — Familien aus Eritrea, Somalia, Sri Lanka, Balkan, Schweizer Arbeiterklasse. Viele SuS sind eloquente Sprecherinnen und Sprecher, kämpfen aber mit formalem Deutsch. Starke Reditions-Traditionen in mehreren Heimatkulturen. Viele SuS engagieren sich in sozialen Medien und lokalen Fragen." / Bisheriges Vorgehen: "Vorbildtexte aus seriösen Tageszeitungen. SuS lernen Ethos/Pathos/Logos, schreiben dann einen formalen Brief. Einige SuS verlieren Interesse, weil Texte ihrer Erfahrung fern sind."*

---

## Kultursensible Lektion: Überzeugend argumentieren — Sek 1 Deutsch

**Inhalt:** Aufbau überzeugender Argumente mit Belegen, rhetorische Techniken (Ethos, Pathos, Logos) und strukturiertes Schreiben — gleiche Deutschziele, kultursensibel verbunden
**Gemeinschaft:** Vielfältige Innenstadtschule — Eritrea, Somalia, Sri Lanka, Balkan, Schweizer Arbeiterklasse. Starke mündliche Traditionen, Social-Media-Kompetenz, Engagement in lokalen Fragen
**Kernprinzip:** SuS sind bereits rhetoisch kompetent — die Lektion verbindet ihre bestehende Überzeugungskompetenz (mündlich, digital, gemeinschaftlich) mit formalem akademischem Schreiben

### Bisheriges Vorgehen vs. Kultursensibel

**Standard:** Modelle aus seriösen Zeitungen. SuS identifizieren Techniken, schreiben dann einen formalen Brief. Die implizite Botschaft: "So sieht Überzeugung aus" — der Register und das Format weisser, mittelständischer Print-Medien-Diskurs.

**Kultursensibel:** Beginne mit bestehender rhetorischer Expertise der SuS — mündliches Argumentieren, Social-Media-Diskurs, Gemeinschaftsadvokacy, mehrsprachige Überzeugung. Analysiere Techniken ÜBER Register und Kontexte (TED-Talk, Spoken-Word-Gedicht, Petition, Predigt, Social-Media-Kampagne), dann transfer bewusst zu formalem Schreiben. Botschaft: "Ihr seid bereits überzeugend. Akademisches Schreiben ist ein weiterer Register, den ihr zu eurem Repertoire hinzufügt — nicht Ersatz für das, was ihr bereits könnt."

### Kulturelle Verbindungen

**Verbindung 1: Mündliche Überzeugungstraditionen**
- **Kulturelles Wissen:** Viele SuS kommen aus Kulturen mit reichen Reditions-Traditionen — Erzähltraditionen aus Eritrea und Somalia, Rhetorik von Predigten und Ansprachen, das argumentative Diskurs von Markthandel und Familiendiskussionen. SuS, die als "zu redelig" wahrgenommen werden, sind oft hochqualifizierte mündliche Rhetorinnen und Redner.
- **Akademischer Inhalt:** Ethos, Pathos und Logos sind nicht nur schriftlich-technisch — sie stammen aus Aristoteles' Rhetorik, die von REDE handelt. Mündliche Überzeugung ist die Grundlage schriftlicher Überzeugung, nicht eine niedrigere Form.
- **Wie nutzen:** Startet mit "Überzeugungsaudit" — SuS identifizieren Momente, wo sie überzeugend sind (Verhandeln mit Eltern, Freunde überzeugen, Debatten im Schulhof, öffentliches Sprechen bei Gemeinschaftsereignissen). SuS bringen Beispiel aus eigenem kulturellem Kontext mit (Clip, Text, Geschichte) und die Klasse analysiert auf Ethos, Pathos, Logos. Das etabliert, dass Überzeugung universal ist und SuS bereits können — die Lektion fügt formalem Schreib-Register zu bestehender Kompetenz hinzu.

**Verbindung 2: Digitale Überzeugung**
- **Kulturelles Wissen:** SuS sind in digitaler Überzeugung vertraut — Social-Media-Kampagnen, YouTube-Essays, Twitter/X-Threads, change.org-Petitionen. Viele haben mehr Erfahrung mit Analyse und Konstruktion digitaler überzeugender Texte als Print-Texte.
- **Akademischer Inhalt:** Digitale Überzeugung nutzt die gleichen rhetorischen Prinzipien wie traditionelles Schreiben — aber in anderen Formaten. Ein Twitter-Thread nutzt Logos (Daten, Belege) und Pathos (persönliche Geschichten) wie ein Zeitungskommentar. Analyse beider hilft SuS die unterliegende Struktur sehen.
- **Wie nutzen:** Neben einem Zeitungskommentar: analysiert eine erfolgreiche Social-Media-Kampagne (z.B. Petition, die ihr Ziel erreichte, viral-gegangene Advocacy). SuS vergleichen: wie nutzt dieser Tweet Pathos? Wie dieser Kommentar? Was ist gleich? Was anders? Das positioniert digitale Literalität der SuS als Stärke, nicht Ablenkung.

**Verbindung 3: Lokale Fragen, die zählen**
- **Kulturelles Wissen:** Viele SuS kennen und sind betroffen von lokalen Fragen — Gentrifizierung, Schulpolitik, Wohnen, Zugang zu Diensten, Repräsentation. Das sind nicht abstrakt-akademische Fragen — das ist gelebte Erfahrung.
- **Akademischer Inhalt:** Überzeugend schreiben ist am wirkungsvollsten, wenn die Schreiberin/der Schreiber sich für die Frage sorgt. Der Standard-Ansatz ("Brief an die Schulleitung über ein Schulfrage-Szenario") fühlt sich hypothetisch an. Eine echte Frage, um die SuS sich sorgen, produziert motiviertere, investiertere und letztendlich sophisticierte Arbeit.
- **Wie nutzen:** SuS wählen ihre eigene Frage — etwas, das ihre Gemeinschaft, Familie oder sie selbst betrifft. Die LP bietet eine Liste möglicher Fragen (aus lokalem Wissen), aber SuS können eigene vorschlagen. Die Schreibaufgabe bleibt formal identisch (strukturiertes Argument, Belege, Techniken), aber der Inhalt ist persönlich und kulturell sinnvoll.

### Element kritisches Bewusstsein

**Wessen Überzeugung zählt?**

Nach Studium von Überzeugungstechniken ÜBER Register (mündlich, digital, Print), prüft die Klasse kritisch: "Welche Formen von Überzeugung nehmen Machtträger ernst, und welche werden ignoriert? Warum?"

SuS vergleichen: Zeitungskommentar, Spoken-Word-Performance, Protest-Chant, Social-Media-Kampagne, formale Petition. Alle überzeugend. Welche würde ein Gemeinderat am ernstesten nehmen? Welche würde ein Gericht akzeptieren? Welche würde eine Schule hören?

Diskussion: "Warum ist ein formaler Brief 'legitimer' als mündliches Argument, auch wenn das mündliche Argument detaillierter, leidenschaftlicher und datengestützter ist? Was sagt das über Macht und Sprache? Wenn bestimmte Gemeinschaften stärker in mündlicher Überzeugung sind als schriftlich, was geschieht mit ihren Stimmen in einem System, das formales Deutsch bevorzugt?"

Das ist KEIN Ausflug aus dem Deutschcurriculum — das IST Deutschcurriculum. Zu verstehen, dass Sprache, Macht und Überzeugung verbunden sind, ist Deutschunterricht.

**Wichtig:** Die Lektion sagt NICHT "formales Schreiben ist unwichtig." Sie sagt: "Formale Überzeugung ist ein WERKZEUG, das ihr haben solltet, weil es in Systemen, die es wertschätzen, Türen öffnet — UND der Systemvorzug für formales vor mündlichem Deutsch ist selbst eine Frage wert, die ihr kritisch betrachten könnt."

### Rahmen hohe Erwartungen

Die kultursensible Gestaltung erhöht Anforderungen in drei Wegen:

1. **Mehr Analyse, nicht weniger.** SuS analysieren Überzeugung über FÜNF Register (mündlich, digital, Print, Gemeinschaft, formal), nicht nur einen (Print). Das ist analytisch anspruchsvoller als ein einzelnes Zeitungsbeispiel.

2. **Code-Switching als Kompetenz.** SuS schreiben nicht in nur einem Register — sie schreiben das GLEICHE Argument in zwei Registern (Social-Media-Post UND formaler Brief) und analysieren, wie Techniken sich anpassen. Das erfordert tiefere rhetorische Einsicht als in nur einem Register zu schreiben.

3. **Echte Adressaten.** Wenn möglich, wird der Brief VERSENDET — an Schulleitung, Gemeinde oder lokale Organisation. Schreiben für echtes Publikum mit echtem Gewicht verlangt höhere Qualität als für ein Notenheft.

### Lektion neu gestaltet

**Lektion 1 — Überzeugungsaudit:**
SuS identifizieren Überzeugung in ihrem Leben. Paarweise: "Wann wurt ihr zuletzt überzeugt? Wann habt ihr jemanden überzeugt?" SuS bringen Beispiel aus eigener oder kultureller Erfahrung mit. Klasse baut "Überzeugungswand" — Beispiele aus jeder im Klassenzimmer vertretenen Kultur und Kontext. LP führt Ethos, Pathos, Logos ein mit Schülerbeispielen.

**Lektion 2 — Register-übergreifende Analyse:**
Analysiert Überzeugungstechniken über fünf Texte: Zeitungskommentar, Spoken-Word-Gedicht (vorgetragen), Social-Media-Kampagne, Petition, TED-Talk-Ausschnitt. SuS identifizieren Ethos, Pathos, Logos in jedem. Diskussion: "Was ist gleich über alle fünf? Was ändert sich je nach Publikum und Format?"

**Lektion 3 — Wähle deine Frage:**
SuS wählen lokale Frage, um die sie sich sorgen. Paarweise recherchieren sie mit mindestens zwei Quellen. Sie planen: Was ist der Anspruch? Welche Belege? Was ist emotional am stärksten? Was gibt ihnen Glaubwürdigkeit zum Sprechen (Ethos)?

**Lektion 4 — Schreiben in zwei Registern:**
SuS schreiben zwei Versionen: (a) Social-Media-Post oder Script für 60-Sekunden-Rede, und (b) formaler Brief. Gleicher Anspruch, Belege, Register. Das ist wo Code-Switching bewusste, qualifizierte Praxis wird.

**Lektion 5 — Kritische Reflexion und Teilen:**
SuS teilen ihre Paare. Klassendiskussion: "Welche Version ist überzeugender? Hängt das vom Publikum ab? Was sagt das über Sprache und Macht?" SuS überarbeiten formalen Brief für Versand.

### Reflexion für die Lehrperson

- "Welche Überzeugungstraditionen wertschätze ich unbewusst am meisten? Bin ich beeindruckter von einem strukturierten Essay als von eloquenter mündlicher Rede — und wenn ja, was bedeutet das für meine Einschätzung von SuS aus mündlichen Traditionen?"
- "Kenne ich meine SuS-Kommunikationsstile gut genug für authentische Verbindungen, oder verlasse ich mich auf Annahmen? Wie kann ich mehr lernen — von SuS selbst, von Familien, von der Gemeinschaft?"
- "Wenn ich 'formales Deutsch' lehre, frame ich es als 'korrektes Deutsch' (was andere Register abwertet) oder als 'ein machtvolles Register unter vielen' (das Repertoire baut ohne Identität zu schwächen)?"

---

## Bekannte Limitierungen

1. **Kultursensibel erfordert echtes Wissen der SPEZIFISCHEN Gemeinschaft.** Dieser Skill kann Verbindungen und Frameworks vorschlagen, kann aber nicht die Beziehung und Kenntnis der LP für ihre SuS und Gemeinschaft ersetzen. Eine LP, die diese Template ohne echtes SuS-Wissen folgt, produziert oberflächlich-"responsive" Lektionen ohne Authentizität. Die wichtigste kultursensible Praxis ist, auf SuS und Familien ZUZUHÖREN.

2. **Risiko von Essenzialismus — kulturelle Gruppen als einheitlich zu sehen.** Nicht alle SuS mit Migrationshintergrund haben starke mündliche Traditions. Nicht alle Familien teilen bestimmte Praktiken. Kultursensibel muss mit SPEZIFISCHEN SuS im Klassenzimmer arbeiten, nicht mit Annahmen über kulturelle Gruppen. Die Gestaltung sollte SuS einladen, ihr kulturales Wissen zu teilen, nicht annehmen, was es ist.

3. **Kultursensibel existiert innerhalb systemischer Grenzen.** Eine LP kann ihre Lektionen kultursensibel gestalten, kann aber Bewertungssysteme, Lehrplan und Schulkultur nicht allein ändern. SuS können standardisierten Prüfungen begegnen, die bestimmte Kulturformen bevorzugen. Kultursensibel bereitet SuS vor, in diesen Systemen erfolgreich zu sein, während kritisches Bewusstsein ihrer Limits entwickelt wird — kann aber das System allein nicht transformieren.
