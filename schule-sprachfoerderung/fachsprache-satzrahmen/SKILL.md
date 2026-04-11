---
# AGENT SKILLS STANDARD FIELDS (v2)
name: fachsprache-satzrahmen
description: "Generiert abgestufte Satzrahmen für fachliche Aufgaben, die Sprachproduktion auf verschiedenen Sprachniveaus stützen. Nutze diesen Skill, wenn SuS strukturelle Sprachunterstützung für Fachgespräche und Schriftliches brauchen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-sprachfoerderung/fachsprache-satzrahmen"
skill_name: "Fachsprache-Satzrahmen-Generator"
domain: "schule-sprachfoerderung"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Gibbons (2015) — Scaffolding Language, Scaffolding Learning"
  - "Zwiers (2014) — Building Academic Language: meeting Common Core standards across disciplines"
  - "Zwiers & Crawford (2011) — Academic Conversations: classroom talk that fosters critical thinking and content understandings"
  - "Kinsella (2005) — Teaching academic vocabulary to English language learners"
  - "Dutro & Moran (2003) — Rethinking English language instruction: an architectural approach"
input_schema:
  required:
    - field: "task_type"
      type: "string"
      description: "Der Typ der fachlichen Aufgabe — z. B. erklären, vergleichen, argumentieren, bewerten, hypothetisieren, zusammenfassen, Prozess beschreiben"
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
    - field: "student_level"
      type: "string"
      description: "Klassenstufe/Alter"
  optional:
    - field: "language_proficiency"
      type: "string"
      description: "DaZ-Sprachniveau — beeinflusst die Komplexität der Rahmen"
    - field: "student_profiles"
      type: "array"
      description: "Aus Kontextmodell: Muttersprachen, spezifische Sprachbedarfe"
    - field: "specific_content"
      type: "string"
      description: "Das spezifische Thema oder Fachinhalt der Aufgabe"
    - field: "output_mode"
      type: "string"
      description: "Ob SuS schreiben oder sprechen — beeinflusst Register und Formalität"
output_schema:
  type: "object"
  fields:
    - field: "sentence_frames"
      type: "array"
      description: "Abgestufte Satzrahmen für die Aufgabe von stark gestützt bis leicht gestützt"
    - field: "discourse_markers"
      type: "array"
      description: "Bindewörter und Übergangswörter passend zur Aufgabe"
    - field: "usage_guide"
      type: "string"
      description: "Wie die Rahmen effektiv eingeführt werden — Vermeidung der 'Lückenfüller'-Falle"
    - field: "progression"
      type: "string"
      description: "Wie SuS von Rahmen zu unabhängiger Fachsprachproduktion gelangen"
chains_well_with:
  - "sprachliche-anforderungen"
  - "sprachliche-aufgabenanpassung"
  - "wortschatz-stufung"
teacher_time: "2 minutes"
tags: ["satzrahmen", "fachsprache", "DaZ", "diskursmarker", "sprachliche-stützung"]
---

# Fachsprache-Satzrahmen-Generator

## Was dieser Skill leistet

Generiert Satzrahmen und Diskursmarker, die für eine bestimmte fachliche Aufgabe und ein Sprachniveau passend sind. Im Gegensatz zu generischen Satzanfang-Listen sind diese Rahmen nach Sprachniveau abgestuft (von stark gestützten Rahmen für Anfängende bis zu leichter gestützten für Fortgeschrittene), auf die spezifische Art des fachlichen Denkens abgestimmt (erklären, vergleichen, argumentieren, bewerten) und mit Diskursmarkern begleitet, die Ideen über Sätze hinweg verbinden. Das Ergebnis enthält auch eine Nutzungsanleitung, die LP hilft, die häufige Falle zu vermeiden, Satzrahmen in Lückenfüller-Arbeitsblätter zu verwandeln, die das Denken auf Lückenfüllung reduzieren. KI ist hier wertvoll, weil effektive Satzrahmen die fachliche Denkstruktur der Aufgabe kodieren müssen (Vergleich erfordert "während X..., Y..." Strukturen; Bewertung erfordert "Obwohl..., zeigen die Belege..."), gleichzeitig aber auf ein spezifisches Sprachniveau zugeschnitten sein müssen — zu komplex und unzugänglich, zu einfach und sie vermitteln keine Fachsprache.

## Evidenzgrundlage

Gibbons (2015) zeigte, dass Satzrahmen einer der wirksamsten Scaffolds für DaZ-SuS sind, wenn sie die Denkstruktur der Aufgabe kodieren, nicht nur grammatische Struktur. Ein Rahmen wie "Die Belege deuten darauf hin, dass ___ weil ___" vermittelt sowohl die Sprache der akademischen Vorsicht als auch das Muster evidenzgestützter Argumentation. Zwiers (2014) identifizierte Schlüsselfunktionen der Fachsprache — beschreiben, erklären, vergleichen, überzeigen, bewerten, hypothetisieren — und zeigte, dass jede Funktion spezifische grammatische Strukturen und Vokabeln erfordert, die explizit unterrichtet werden müssen. Zwiers & Crawford (2011) betonten, dass Fachsprache für mündliche Diskurse genauso wichtig ist wie für schriftliche Arbeiten und dass Satzrahmen für das Sprechen (Accountable Talk Frames) genauso wichtig sind wie Rahmen fürs Schreiben. Kinsella (2005) zeigte, dass strukturiertes Sprachtraining mit Satzrahmen DaZ-SuS deutlich erhöhte die Nutzung fachlicher Vokabeln und komplexer Satzstrukturen. Dutro & Moran (2003) schlugen einen "architektonischen" Ansatz zum Sprachunterricht vor und argumentierten, dass Fachsprache systematische, lehrbare Merkmale hat — "Steine" (fachspezifisches Vokabular) und "Mörtel" (allgemeine Sprachstrukturen, die Ideen verbinden) — und dass der meiste Unterricht sich auf Steine konzentriert während der Mörtel, der Fachsprache zusammenhält, vernachlässigt wird.

## Input Schema

Die LP muss bereitstellen:
- **Aufgabentyp:** Das erforderliche fachliche Denken. *z. B. "Zwei Gedichte vergleichen" / "Einen wissenschaftlichen Prozess erklären" / "Die Zuverlässigkeit einer Quelle bewerten" / "Für oder gegen eine Position argumentieren" / "Hypothetisieren, was passieren könnte" / "Einen Text zusammenfassen"*
- **Fach:** Das Schulfach. *z. B. "Deutsch" / "Naturwissenschaften" / "Geschichte" / "Geografie"*
- **SuS-Niveau:** Klassenstufe. *z. B. "7. Klasse Sek 1"*

Optional (aus Kontextmodell, falls vorhanden):
- **Sprachniveau:** DaZ-Sprachniveau
- **SuS-Profile:** Muttersprachen, spezifische Bedarfe
- **Spezifischer Inhalt:** Das Thema, an dem SuS arbeiten
- **Ausgabemodus:** Schreiben oder Sprechen

## Prompt

```
Du bist Experte/Expertin für Fachsprachentwicklung und DaZ-Pädagogik mit tiefem Wissen über Gibbons' (2015) Scaffold-Ansatz für Sprachentwicklung, Zwiers' (2014) Funktionen der Fachsprache, Zwiers & Crawford's (2011) Arbeit über fachliche Gespräche und Dutro & Morans (2003) architektonischen Ansatz zum Sprachunterricht. Du verstehst, dass Satzrahmen nur dann wirksame Scaffolds sind, wenn sie die DENKSTRUKTUR der fachlichen Aufgabe kodieren, nicht nur grammatische Muster.

Deine Aufgabe ist es, Satzrahmen zu generieren für:

**Aufgabentyp:** {{task_type}}
**Fach:** {{subject_area}}
**SuS-Niveau:** {{student_level}}

Der folgende optionale Kontext kann bereitgestellt werden oder nicht. Nutze das, was verfügbar ist; ignoriere Felder mit "nicht vorhanden".

**Sprachniveau:** {{language_proficiency}} — falls nicht vorhanden, generiere Rahmen auf drei Niveaus: Anfangsstadium (stark gestützt), Entwicklungsstadium (mäßig gestützt) und Gefestigtes Stadium (leicht gestützt).
**SuS-Profile:** {{student_profiles}} — falls nicht vorhanden, entwerfe für gemischte DaZ-Sprachniveaus.
**Spezifischer Inhalt:** {{specific_content}} — falls vorhanden, bettet Rahmen in diesen spezifischen Inhalt ein. Falls nicht, nutze einen generischen fachlichen Kontext mit Notizen zum Anpassen.
**Ausgabemodus:** {{output_mode}} — falls nicht vorhanden, generiere Rahmen sowohl fürs Schreiben als auch fürs Sprechen und notiere Unterschiede im Register.

Wende diese evidenzgestützten Prinzipien an:

1. **Rahmen müssen Denken kodieren, nicht nur Grammatik (Gibbons, 2015):**
   - Jeder Rahmen sollte die Art des Denkens modellieren, die die Aufgabe erfordert.
   - Vergleichrahmen: "Während [X], unterscheidet sich [Y], weil ___" — das lehrt SuS, einen Unterschied zu identifizieren UND zu erklären.
   - Bewertungsrahmen: "Obwohl [Position], zeigen die Belege ___ weil ___" — das lehrt SuS, eine Position anzuerkennen UND sie zu bewerten.
   - Ein Rahmen, der nur grammatische Stützung bietet ("Das erste ist ___, das zweite ist ___"), vermittelt Sequenzierung, nicht fachliches Denken.

2. **Rahmen nach Sprachniveau abstufen (Zwiers, 2014):**
   - **Anfangsstadium:** Fast vollständige Sätze mit kleinen Lücken für Inhaltswörter. Der Rahmen leistet den größten Teil der sprachlichen Arbeit; die SuS liefert das Schlüsselkonzept. Z. B. "___ ähnelt ___ weil beide ___."
   - **Entwicklungsstadium:** Satzanfänge mit offeneren Enden. Die SuS muss mehr des Satzes konstruieren. Z. B. "Obwohl manche argumentieren, dass ___, zeigen die Belege..."
   - **Gefestigtes Stadium:** Strukturhinweise statt Rahmen. Die SuS konstruiert den Satz mit minimalem Support. Z. B. "Nutze: allerdings, dennoch, im Gegensatz dazu, trotz..."
   - Bereitstellung von Rahmen auf allen drei Niveaus, damit die LP einzelnen SuS zuordnen kann.

3. **Diskursmarker einbeziehen (Dutro & Moran, 2003):**
   - Fachsprache benötigt Bindewörter, die Beziehungen zwischen Ideen signalisieren: Addition (außerdem, darüber hinaus), Gegensatz (allerdings, dennoch), Ursache (folglich, daher), Sequenz (anschließend, schließlich), Konzession (obwohl, trotz).
   - Diskursmarker nach Funktion gruppieren, passend zum Aufgabentyp.
   - Diskursmarker sind der "Mörtel" — sie halten Fachsprache zusammen. Ohne sie produzieren SuS unverbundene Sätze.

4. **Zwischen Schreib- und Sprechrahmen unterscheiden (Zwiers & Crawford, 2011):**
   - Schreibrahmen sind formaler: "Die Belege zeigen, dass..."
   - Sprechrahmen sind weniger formell, aber noch akademisch: "Ich denke, die Belege zeigen, dass... weil..."
   - Fürs Sprechen: Includiere Accountable Talk Frames: "Ich stimme ___ zu weil..." / "Ich möchte auf das aufbauen, das ___ gesagt hat..."

5. **Die Lückenfüller-Falle vermeiden (Gibbons, 2015):**
   - Rahmen sollten DENKEN erfordern, nicht nur Lückenfüllung.
   - Schlechter Rahmen: "___ ist ___." (Kann ohne Denken beantwortet werden: "Der Hund ist braun.")
   - Guter Rahmen: "___ ist bedeutsam weil ___." (Erfordert bewertende Überlegung, um beantwortet zu werden.)
   - Die Anleitung muss dies adressieren: Wie nutze ich Rahmen, um Denken zu GENERIEREN, nicht es zu ersetzen?

Gib deine Ausgabe in exakt diesem Format zurück:

## Satzrahmen: [Aufgabentyp] in [Fach]

**Für:** [SuS-Niveau]
**Aufgabentyp:** [Fachliche Funktion]
**Ausgabemodus:** [Schreiben / Sprechen / Beide]

### Rahmen nach Sprachniveau

**Anfangsstadium (stark gestützt)**
[Vollständige Satzrahmen mit kleinen Lücken — SuS liefert Schlüsselinhalte]

**Entwicklungsstadium (mäßig gestützt)**
[Satzanfänge mit offenen Enden — SuS konstruiert mehr der Antwort]

**Gefestigtes Stadium (leicht gestützt)**
[Strukturhinweise und optionale Anfänge — SuS schreibt weitgehend unabhängig]

### Diskursmarker

[Bindewörter und Übergangswörter, gruppiert nach Funktion und passend zum Aufgabentyp]

### Anleitung zur Nutzung

[Wie man Rahmen effektiv einführt, wie man die Lückenfüller-Falle vermeidet und wie man sicherstellt, dass Rahmen Denken generieren]

### Progression: Von Rahmen zu Unabhängigkeit

[Wie man SuS von starker Stützung zu unabhängiger Fachsprachproduktion bewegt — spezifische, praktische Schritte]

**Selbstkontrolle vor Rückgabe:** Verifiziere, dass (a) Rahmen die Denkstruktur des Aufgabentyps kodieren, nicht nur Grammatik, (b) Rahmen nach Sprachniveau abgestuft sind, (c) Diskursmarker zum Aufgabentyp passen, (d) die Anleitung die Lückenfüller-Falle adressiert, (e) eine Progression von Rahmen zu Unabhängigkeit enthalten ist, und (f) das Ausfüllen des Rahmens echtes fachliches Denken erfordert, nicht nur Lückenfüllung.
```

## Beispielausgabe

**Szenario:** *Aufgabentyp: "Zwei Charaktere in einem Roman vergleichen" / Fach: "Deutsch-Literatur" / SuS-Niveau: "9. Klasse Sek 1" / Spezifischer Inhalt: "Charaktere Ralph und Jack in Der Herr der Fliegen vergleichen" / Ausgabemodus: "Schreiben"*

---

## Satzrahmen: Charaktere in Deutsch-Literatur vergleichen

**Für:** 9. Klasse Sek 1 Deutsch-Literatur
**Aufgabentyp:** Vergleich (Ähnlichkeiten, Unterschiede und Bedeutsamkeit identifizieren)
**Ausgabemodus:** Schreiben (mit Sprechrahmen für Diskussionen)

### Rahmen nach Sprachniveau

**Anfangsstadium (stark gestützt)**

*Diese Rahmen leisten den Großteil der sprachlichen Arbeit. Die SuS liefert Schlüsselinhalte und Ideen.*

Ähnlichkeiten identifizieren:
- "Beide Ralph und Jack ___. Zum Beispiel Ralph ___ und Jack auch ___."
- "Ralph und Jack sind sich ähnlich weil beide ___."
- "Etwas, das Ralph und Jack gemeinsam haben, ist ___."

Unterschiede identifizieren:
- "Ralph ___, aber Jack ___."
- "Während Ralph ___ ist, ist Jack ___."
- "Ralph und Jack unterscheiden sich weil Ralph ___ während Jack ___."

Bedeutsamkeit erklären:
- "Dieser Unterschied ist wichtig weil er zeigt ___."
- "Golding präsentiert Ralph als ___ und Jack als ___, um zu zeigen, dass ___."

**Entwicklungsstadium (mäßig gestützt)**

*Diese Anfänge bieten die öffnende Struktur. Die SuS muss den Rest des Satzes und die Begründung konstruieren.*

Vergleich mit Analyse:
- "Obwohl beide Ralph und Jack ___, unterscheiden sie sich stark in ___. Das deutet darauf hin, dass Golding..."
- "Auf der Oberfläche scheinen Ralph und Jack ähnlich zu sein weil ___. Ein genaueres Lesen zeigt aber, dass..."
- "Während Ralph ___ repräsentiert, repräsentiert Jack ___. Dieser Gegensatz ist zentral im Roman weil..."
- "Der bedeutsamste Unterschied zwischen Ralph und Jack ist ___. Das ist wichtig weil Golding es nutzt, um..."

Belege einbetten:
- "Dieser Unterschied wird deutlich als Ralph ___ (Kapitel ___), während Jack ___ (Kapitel ___)."
- "Golding hebt diesen Gegensatz mit [Technik] hervor: zum Beispiel wird Ralph als '___' beschrieben während Jack als '___' beschrieben wird."

Bewertender Vergleich:
- "Von beiden Charakteren wird ___ sympathischer präsentiert weil..."
- "Golding scheint ___ mehr zu [gutheißen / kritisieren] als ___, was darauf hindeutet, dass seine Aussage über die menschliche Natur..."

**Gefestigtes Stadium (leicht gestützt)**

*Strukturhinweise statt Rahmen. Die SuS schreibt unabhängig mit Bezug auf diese Muster.*

Angestrebte akademische Vergleichstrukturen:
- Konzessivklausel + Gegensatz: "Obwohl [Ähnlichkeit], [Schlüsselunterschied, der zählt]..."
- Eingebetteter Zitat-Vergleich: "[Zitat über X]... kontrastiert stark mit [Zitat über Y], was andeutet..."
- Bewertender Vergleich: "Während beide Charaktere [gemeinsames Merkmal teilen], ist es [Charakter], der [etwas Bedeutsameres demonstriert] weil..."

Angestrebte Verwendung: allerdings, im Gegensatz dazu, während, umgekehrt, auf der anderen Seite, dennoch, trotz, obwohl

Angestrebtes Ergebnis: Vergleich, der zu Analyse von Goldings Absicht führt — nicht nur Unterschiede auflisten, sondern erklären, was sie BEDEUTEN.

### Diskursmarker

**Für Vergleich (Kernaufgabe):**

| Funktion | Marker | Beispiel |
|----------|--------|---------|
| Ähnlichkeit | ebenso, gleichermaßen, auf gleiche Weise, sowohl...als auch, genauso | "Sowohl Ralph als auch Jack streben nach Führung. Ebenso beide..." |
| Unterschied | allerdings, im Gegensatz dazu, während, auf der anderen Seite, umgekehrt, anders als | "Ralph wertschätzt Demokratie; allerdings Jack zunehmend..." |
| Konzession | obwohl, trotz, obgleich, zwar...aber | "Obwohl Jack Mut zeigt, sein Führungsstil..." |
| Betonung | bedeutsam, entscheidend, am wichtigsten, bemerkenswert | "Am wichtigsten ist, wie sie auf Macht reagieren..." |
| Folge | daher, folglich, infolgedessen, das bedeutet, dass | "Jacks Ablehnung der Regeln bedeutet daher..." |

**Für Analyse (Vergleich mit Bedeutung verbinden):**

| Funktion | Marker |
|----------|--------|
| Autorintention | Golding nutzt das, um..., das deutet darauf hin, dass..., das zeigt..., das ist bedeutsam weil... |
| Leseerlebnis | die Leserin/der Leser wird positioniert..., das erzeugt ein Gefühl von..., die Leserin/der Leser erkennt, dass... |
| Thematische Verbindung | das verbindet sich mit dem Thema..., das reflektiert Goldings breitere Aussage über... |

### Anleitung zur Nutzung

**Wie man die Rahmen einführt:**

1. **Modelliere zuerst.** Bevor SuS die Rahmen erhalten, schreibe einen Vergleichssatz an der Tafel unter Nutzen eines Rahmens, während du laut denkst: "Ich möchte vergleichen, wie Ralph und Jack die Idee von Regeln sehen. Ich nutze den Rahmen 'Während Ralph ___, Jack ___' — also: 'Während Ralph darauf besteht, Regeln und Ordnung zu bewahren, lehnt Jack sie zunehmend als unnötig ab.' Siehst du, wie der Rahmen mir geholfen hat, einen Vergleich zu strukturieren? Jetzt muss ich hinzufügen, WARUM das zählt..."

2. **Unterscheide zwischen Rahmung und Denken.** Sage SuS: "Die Satzrahmen geben dir die WORTE. Aber du musst die IDEEN liefern. Der Rahmen 'Während Ralph ___, Jack ___' ist leer bis du entscheidest, WAS zu vergleichen ist und WARUM es zählt. Der Rahmen ist der Behälter; deine Analyse ist der Inhalt."

3. **Ordne Rahmen den SuS zu.** Gib Anfangsstadium-SuS die stark gestützten Rahmen. Gib Entwicklungsstadium-SuS die mäßigen Rahmen. Gib Gefestigtes Stadiums-SuS nur die Hinweise. Verschiedene SuS in derselben Klasse sollten verschiedene Niveaus nutzen.

**Wie man die Lückenfüller-Falle vermeidet:**

- SCHLECHT: SuS schreibt "Ralph ist mutig aber Jack ist gemein" in einem Rahmen und stoppt. Das ist Beschreibung, keine Analyse.
- GUT: SuS schreibt "Während Ralph seinen Mut nutzt, um die jüngeren Jungen zu schützen, nutzt Jack seinen, um zu dominieren und einzuschüchtern — was darauf hindeutet, dass Golding Mut als moralisch neutral sieht, definiert durch wie er genutzt wird." Das ist Vergleich, der zu Analyse führt.
- Der Unterschied: DRÜCKE auf das "weil" / "das deutet hin" / "das zeigt". Wenn eine SuS einen Rahmen mit einer einfachen Beschreibung ausfüllt, antworte: "Guter Vergleich. Jetzt sag mir, WARUM dieser Unterschied zählt. Was zeigt uns Golding?"

**Die Schlüsselerkenntnis:** Ein ausgefüllter Satzrahmen sollte NICHT das Ende des Denkens der SuS sein — er sollte der ANFANG sein. Der Rahmen hilft der SuS, mit dem Schreiben zu beginnen; das Denken passiert, während sie entscheidet, wie sie ihn ausfüllt und was sie danach schreibt.

### Progression: Von Rahmen zu Unabhängigkeit

| Stufe | Was die SuS macht | LP-Aktion |
|-------|-------------------|-----------|
| **Woche 1–2** | Nutzt stark gestützte Rahmen für jeden Vergleichssatz. Kann einfache Beschreibungen produzieren. | Akzeptiere Rahmennutzung. Drücke auf "weil..." nach jeder Ausfüllung. Modelliere analytische Ausfüllung. |
| **Woche 3–4** | Bewegt sich zu mäßig gestützten Rahmen. Beginnt, unabhängig zu begründen. | Bereitstellung von mäßigen Rahmen. Hebe gute Beispiele hervor, wo SuS über den Rahmen hinausgegangen sind. Entzug von Anfangsstadiums-Rahmen. |
| **Woche 5–6** | Nutzt Satzanfänge, konstruiert aber den meisten Satz unabhängig. Beginnt, Diskursmarker ohne Prompting zu nutzen. | Bereitstellung von Anfängen nur für komplexeste Konstruktionen (Konzessivklauseln, eingebettete Zitate). Entzug von Wortlisten. |
| **Woche 7–8** | Schreibt Vergleiche unabhängig. Kann auf Diskursmarker-Liste verweisen, braucht aber keine Rahmen. | Bereitstellung von Diskursmarker-Liste als Referenz, aber keine Rahmen. Feedback konzentriert sich auf analytische Qualität, nicht Sprache-Scaffolding. |
| **Woche 9+** | Produziert unabhängige analytische Vergleichsarbeit. | Keine Scaffolds. Feedback ist zu Inhalt, Argument und Stil — wie bei jeder SuS. |

**Schlüsselprinzip:** Entzug von Scaffolds EINS nach dem anderen, nicht alle zusammen. Wenn eine SuS bereit ist, die Satzrahmen zu verlieren, aber noch die Diskursmarker-Liste braucht, das ist in Ordnung — sie sind auf verschiedenen Unabhängigkeitsstufen für verschiedene Sprachmerkmale.

---

## Bekannte Einschränkungen

1. **Satzrahmen können eine dauerhafte Krücke werden, wenn sie nicht progressiv entzogen werden.** SuS, die immer mit Rahmen schreiben, produzieren möglicherweise strukturell korrekte, aber formulaische Fachsprache. Der Progressionsplan adressiert das, aber er erfordert, dass die LP aktiv den Scaffold-Entzug über Wochen verwaltet — es kann nicht automatisiert werden innerhalb einer einzelnen Aufgabe.

2. **Rahmen bieten die Struktur von Fachsprache, nicht den Inhalt.** Eine SuS, die die Charaktere nicht versteht, kann keinen bedeutungsvollen Vergleich schreiben, egal wie gut die Rahmen sind. Satzrahmen unterstützen Sprachproduktion, nicht Inhaltsverständnis — beide müssen vorhanden sein, damit die Aufgabe erfolgreich ist.

3. **Die Rahmen reflektieren Standard-akademische Deutsch-Konventionen, die sich möglicherweise von den Sprachmuster der Muttersprache der SuS unterscheiden.** Manche Sprachen strukturieren Vergleich, Argumentation oder Bewertung anders — zum Beispiel bevorzugen manche Sprachen indirekte Bewertung gegenüber direkten Aussagen. Die Rahmen unterrichten Deutsch-akademische Konventionen, das ist das Ziel, aber LP sollten sich bewusst sein, dass SuS ein neues rhetorisches Muster lernen, nicht nur neues Vokabular.
