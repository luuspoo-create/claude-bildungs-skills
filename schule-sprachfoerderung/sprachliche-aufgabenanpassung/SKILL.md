---
# AGENT SKILLS STANDARD FIELDS (v2)
name: sprachliche-aufgabenanpassung
description: "Modifiziere eine Aufgabe mit Sprach-Scaffolds, die die kognitive Anforderung für DaZ-SuS bewahren. Nutze diesen Skill bei Anpassung von Aufgaben für SuS auf verschiedenen Sprachniveaus."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-sprachfoerderung/sprachliche-aufgabenanpassung"
skill_name: "Modifier für sprachlich gestützte Aufgaben"
domain: "schule-sprachfoerderung"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Gibbons (2002, 2015) — Scaffolding Language, Scaffolding Learning: Scaffolding das herausfordert statt zu vereinfachen"
  - "Cummins (2000) — Language, Power and Pedagogy: BICS/CALP und Quadranten-Rahmen"
  - "Hammond & Gibbons (2005) — Putting scaffolding to work: Contribution of scaffolding in articulating ESL education"
  - "Vygotsky (1978) — Mind in Society: Zone der proximalen Entwicklung"
  - "Walqui (2006) — Scaffolding instruction for English language learners: a conceptual framework"
input_schema:
  required:
    - field: "original_task"
      type: "string"
      description: "Die Aufgabe wie ursprünglich für die Klasse entworfen"
    - field: "target_proficiency"
      type: "string"
      description: "Das Sprachniveau der SuS, für die der Scaffold entworfen wird — z. B. Anfangsstadium, Entwicklungsstadium, Gefestigtes Stadium"
    - field: "subject_area"
      type: "string"
      description: "Das Schulfach"
  optional:
    - field: "student_level"
      type: "string"
      description: "Klassenstufe/Alter"
    - field: "student_profiles"
      type: "array"
      description: "Aus Kontextmodell: Muttersprachen, spezifische Sprachbedarfe, kognitive Fähigkeiten"
    - field: "learning_objective"
      type: "string"
      description: "Das Lernziel — was ALLE SuS verstehen sollten, unabhängig von Sprachniveau"
    - field: "task_materials"
      type: "string"
      description: "Beschreibung von Texten, Arbeitsblättern oder Ressourcen"
output_schema:
  type: "object"
  fields:
    - field: "modified_task"
      type: "object"
      description: "Die gestützte Version der Aufgabe mit Sprachunterstützungen und bewahrter kognitiver Anforderung"
    - field: "cognitive_demand_check"
      type: "string"
      description: "Explizite Verifizierung, dass die Modifikation die kognitive Herausforderung bewahrt"
    - field: "scaffold_types_used"
      type: "array"
      description: "Liste der angewendeten Scaffold-Strategien mit Begründung für jede"
    - field: "removal_plan"
      type: "string"
      description: "Wie und wann Scaffolds zu entziehn sind, wenn Sprachniveau steigt"
chains_well_with:
  - "sprachliche-anforderungen"
  - "wortschatz-stufung"
  - "fachsprache-satzrahmen"
teacher_time: "4 minutes"
tags: ["sprachliche-stützung", "DaZ", "Differenzierung", "kognitive-anforderung", "aufgabe-anpassung"]
---

# Modifier für sprachlich gestützte Aufgaben

## Was dieser Skill leistet

Passt eine Aufgabe für ein spezifisches Sprachniveau an, während explizit die kognitive Anforderung bewahrt wird — sicherstellend, dass DaZ-SuS mit demselben Denken wie ihre Klassenkameraden engagiert sind, auch wenn sie sprachliche Unterstützung brauchen, um das zu tun. Das kritische Design-Prinzip ist, dass Scaffolding SPRACHLICHE Barrieren reduzieren sollte, nicht DENK-Barrieren. Viele gut-gemeinte Aufgaben-Modifikationen senken unbeabsichtigt die kognitive Anforderung: DaZ-SuS eine einfachere Version geben, die analytische Komponente entfernen oder eine offene Frage durch Multiple-Choice ersetzen. Dieser Skill schützt dagegen durch Produktion einer modifizierten Aufgabe mit einer expliziten kognitiven Anforderungs-Prüfung, Verifizierung, dass die Modifikation die sprachliche Zugangsroute ändert, aber nicht das intellektuelle Ziel. KI ist hier wertvoll, weil Bewahrung kognitiver Anforderung während des Scaffoldings simultaneously Verständnis der Aufgaben-intellektuellen Ziele, des Sprachniveaus der SuS und der spezifischen Scaffold-Strategien erfordert — eine drei-Weg-Analyse, die die meisten LP nicht zeit haben zu machen.

## Evidenzgrundlage

Gibbons (2002, 2015) etablierte das fundamentale Prinzip, dass Scaffolding für DaZ-SuS herausfordern, nicht vereinfachen muss — das Ziel ist, SuS zu unterstützen, MEHR zu tun als sie allein könnten, nicht zu reduzieren, was von ihnen verlangt wird. Cummins (2000) stellte das Quadranten-Modell bereit, das zeigt, dass Aufgaben entlang zwei Dimensionen variieren: kognitive Anforderung (hoch/niedrig) und kontextueller Support (eingebettet/reduziert). Effektives DaZ-Scaffolding bewegt eine Aufgabe von Quadrant D (hohe Anforderung, reduzierter Kontext — unzugänglich) zu Quadrant B (hohe Anforderung, eingebetteter Kontext — herausfordernd aber zugänglich) — NICHT von Quadrant D zu Quadrant A (niedrige Anforderung, eingebetteter Kontext — zugänglich aber unherausfordernd). Hammond & Gibbons (2005) identifizierten zwei Scaffolding-Ebenen: designed-in scaffolding (vorab geplant — grafische Organisatoren, Satzrahmen, Vokabular-Vorunterricht) und interactional scaffolding (contingent LP-Support während Unterricht — Umformulierung, Elaboration, Guiding). Vygotsky (1978) etablierte, dass Lernen in der Zone der proximalen Entwicklung geschieht — was der Lerner mit Unterstützung, aber nicht noch unabhängig tun kann. Walqui (2006) identifizierte sechs Scaffold-Strategien für DaZ-SuS: Modellierung, Brückenbildung, Kontextualisierung, Schema-Aufbau, Textrepräsentation und Metakognitions-Entwicklung.

## Input Schema

Die LP muss bereitstellen:
- **Ursprüngliche Aufgabe:** Die für die Klasse entworfene Aufgabe. *z. B. "Schreibe einen ausgewogenen Argument-Essay, ob Schuluniformen verbindlich sein sollten" / "Analysiere die Daten in der Tabelle und erkläre, was sie über Bevölkerungswachstum zeigt" / "Lies den Auszug und antworte auf Folgerungsfragen"*
- **Ziel-Sprachniveau:** Das Sprachniveau, für das der Scaffold entworfen wird. *z. B. "Entwicklungsstadium" / "Anfangsstadium" / "Neu in der Sprache"*
- **Fach:** Das Fach. *z. B. "Deutsch" / "Geografie" / "Naturwissenschaften"*

Optional (aus Kontextmodell, falls vorhanden):
- **SuS-Niveau:** Klassenstufe
- **SuS-Profile:** Muttersprachen, kognitive Fähigkeiten, spezifische Bedarfe
- **Lernziel:** Was alle SuS lernen sollten
- **Aufgabenmaterialien:** In der ursprünglichen Aufgabe genutzte Ressourcen

## Prompt

```
Du bist Experte/Expertin für DaZ-Scaffolding und Differenzierung mit tiefem Wissen über Gibbons' (2002, 2015) Prinzip, dass Scaffolding herausfordern muss statt zu vereinfachen, Cummins' (2000) Quadranten-Modell kognitiver Anforderung und kontextueller Unterstützung und Walquis (2006) Scaffold-Strategien für Deutschlerner. Du verstehst, dass der häufigste Fehler bei DaZ-Differenzierung ist, die kognitive Anforderung zu senken — SuS eine einfachere Aufgabe geben statt derselben Aufgabe mit besserem Support.

Deine Aufgabe ist es, zu scaffolden:

**Ursprüngliche Aufgabe:** {{original_task}}
**Ziel-Sprachniveau:** {{target_proficiency}}
**Fach:** {{subject_area}}

Der folgende optionale Kontext kann bereitgestellt werden oder nicht. Nutze das, was verfügbar ist; ignoriere Felder mit "nicht vorhanden".

**SuS-Niveau:** {{student_level}} — falls nicht vorhanden, nimm eine Sekundar-SuS an.
**SuS-Profile:** {{student_profiles}} — falls nicht vorhanden, nimm an, dass die SuS Alter-entsprechende kognitive Fähigkeit aber limitierte akademische Deutsch-Sprachfähigkeit mit alltäglicher Flüssigkeit hat.
**Lernziel:** {{learning_objective}} — falls nicht vorhanden, inferiere das Lernziel aus der ursprünglichen Aufgabe. Das ist kritisch — die modifizierte Aufgabe muss das GLEICHE Ziel erreichen.
**Aufgabenmaterialien:** {{task_materials}} — falls nicht vorhanden, inferiere typische Materialien für diesen Aufgabentyp.

Wende diese evidenzgestützten Prinzipien an:

1. **Bewahre kognitive Anforderung (Gibbons, 2002; Cummins, 2000):**
   - Die modifizierte Aufgabe muss das GLEICHE Denk-Niveau wie die ursprüngliche erfordern.
   - Wenn die ursprüngliche Aufgabe Analyse erfordert, muss auch die modifizierte Aufgabe Analyse erfordern — nicht Beschreibung.
   - Wenn die ursprüngliche Aufgabe Bewertung erfordert, muss auch die modifizierte Aufgabe Bewertung erfordern — nicht Abruf.
   - Wenn die ursprüngliche Aufgabe eine erweiterte schriftliche Antwort erfordert, kann die gestützte Version sprachliche Unterstützung bieten (Satzrahmen, Wortlisten, grafische Organisatoren), muss aber trotzdem von der SuS verlangen, Sinn zu konstruieren, nicht nur Lücken zu füllen.
   - EXPLIZIT prüfen und angeben: "Die ursprüngliche Aufgabe erfordert [Denk-Typ]. Die modifizierte Aufgabe erfordert auch [gleicher Denk-Typ] weil..."

2. **Scaffold Sprache, nicht Denken (Gibbons, 2015):**
   - Identifiziere die SPRACHLICHEN Barrieren in der ursprünglichen Aufgabe (Vokabular, Grammatik, Textstruktur, Lesemenge).
   - Füge Sprach-Supports hinzu, die diese spezifischen Barrieren adressieren.
   - NICHT: die Frage vereinfachen, die Anzahl der Schritte reduzieren, die Antwort im Scaffold bereitstellen, das Verlangen nach Original-Denken entfernen oder eine niedrigere-Aufgabe ersetzen.

3. **Nutze passende Scaffold-Typen (Walqui, 2006; Hammond & Gibbons, 2005):**
   - **Modellierung:** Ein bearbeitetes Beispiel oder annotiertes Modell bereitstellen, das zeigt, wie eine gute Antwort aussieht.
   - **Brückenbildung:** Zu existierendem Wissen der SuS oder Muttersprache verbinden.
   - **Kontextualisierung:** Visuellen Support, Diagrammen oder konkreten Beispielen hinzufügen, die abstrakten Inhalt zugänglich machen.
   - **Satzrahmen:** Die sprachliche Struktur bereitstellen während von der SuS Inhalt und Denken verlangt wird.
   - **Grafische Organisatoren:** Eine visuelle Struktur zur Organisation von Ideen vor dem Schreiben bereitstellen.
   - **Wortlisten:** Schlüsselvokabular bereitstellen, aber von der SuS verlangen, Wörter sinnvoll auszuwählen und zu nutzen.
   - **Glossar/zweisprachiger Support:** Schlüsselbegriffe definieren, idealerweise mit Muttersprache-Äquivalenten.

4. **Passe Scaffold-Intensität dem Sprachniveau an:**
   - **Neu in der Sprache:** Heavy Scaffolding — visueller Support, zweisprachige Ressourcen, angepasster Text mit Glossar, Satzrahmen mit minimalen Lücken, grafische Organisatoren, die die ganze Antwort strukturieren. Die SuS antwortet möglicherweise teilweise in ihrer Muttersprache. Das Denk-Verlangen bleibt.
   - **Anfangsstadium:** Substantieller Scaffolding — angepasster Text, Satzanfänge (nicht vollständige Rahmen), Wortlisten, grafische Organisatoren, Modelle. Die SuS produziert Deutsch mit signifikantem Support.
   - **Entwicklungsstadium:** Mäßiger Scaffolding — ursprünglicher Text mit Glossar, Satzanfänge nur für komplexe Konstruktionen, optionale Wortliste. Die SuS produziert größtenteils unabhängiges Deutsch mit gezieltem Support.
   - **Gefestigtes Stadium:** Light Scaffolding — ursprünglicher Text, ein paar Satzanfänge für die komplexesten akademischen Konstruktionen, keine Wortliste (SuS sollte Unabhängigkeit aufbauen). Beinahe unabhängig.

5. **Plane Scaffold-Entzug:**
   - Scaffolds sind temporär. Jeder Scaffold sollte eine Notiz enthalten, wann und wie ihn zu entziehen.
   - Das Ziel ist Unabhängigkeit — wenn der Scaffold permanent wird, ist er zur Krücke geworden.

Gib deine Ausgabe in exakt diesem Format zurück:

## Gestützte Aufgabe: [Kurzbeschreibung]

**Ursprüngliche Aufgabe:** [Die ursprüngliche Aufgabe]
**Gestützt für:** [Ziel-Sprachniveau]
**Fach:** [Fach]
**Lernziel:** [Angegeben oder inferiert — muss für BEIDE Versionen GLEICH sein]

### Modifizierte Aufgabe

[Die komplette gestützte Version der Aufgabe — einschließlich aller Sprach-Supports, visueller Organisatoren, Satzrahmen, Wortlisten etc.]

### Prüfung der kognitiven Anforderung

**Ursprüngliche Aufgabe erfordert:** [Denk-Typ — Analyse, Bewertung, Synthese, Anwendung etc.]
**Modifizierte Aufgabe erfordert:** [GLEICHER Denk-Typ]
**Wie kognitive Anforderung bewahrt wird:** [Spezifische Erklärung, warum die gestützte Version immer noch gleiches Denken erfordert]
**Was wurde geändert:** [Nur Sprachzugang — nicht intellektuelle Anforderung]
**Was wurde NICHT geändert:** [Das Denken, das Lernziel, die analytische Anforderung]

### Genutzte Scaffold-Typen

Für jeden Scaffold:
- **[Scaffold-Typ]:** [Was wurde hinzugefügt und warum — verbunden zu einer spezifischen Sprach-Barriere]

### Plan zum Scaffold-Entzug

[Wie jeder Scaffold progressiv zu entziehen ist, wenn die SuS Sprachniveau steigt — spezifisch, praktische Schritte]

**Selbstkontrolle vor Rückgabe:** Verifiziere, dass (a) das Lernziel für beide Versionen gleich ist, (b) die modifizierte Aufgabe den gleichen TYP Denken wie die ursprüngliche erfordert, (c) Scaffolds sprachliche Barrieren spezifisch adressieren, (d) kein Scaffold unbeabsichtigt die Antwort bereitstellt oder das Verlangen nach Original-Denken entfernt, (e) die Scaffold-Intensität zum angegebenen Sprachniveau passt, und (f) der Scaffold-Entzug-Plan enthalten ist.
```

## Beispielausgabe

**Szenario:** *Ursprüngliche Aufgabe: "Lies den Auszug aus 'Ein Inspektor kommt' (Akt 1, Herr Birlings Rede über die Titanic). Analysiere, wie Priestley dramatische Ironie nutzt, um Herr Birlings Autorität zu untergraben. In deiner Antwort erkläre, was dramatische Ironie ist, identifiziere spezifische Beispiele aus dem Auszug und erkläre die Wirkung auf das Publikum." / Ziel-Sprachniveau: "Entwicklungsstadium" / Fach: "Deutsch-Literatur" / SuS-Niveau: "10. Klasse Sek 1"*

---

## Gestützte Aufgabe: Dramatische Ironie in „Ein Inspektor kommt"

**Ursprüngliche Aufgabe:** Analysiere, wie Priestley dramatische Ironie in Herr Birlings Titanic-Rede (Akt 1) nutzt, um seine Autorität zu untergraben. Erkläre, was dramatische Ironie ist, identifiziere Beispiele und erkläre die Wirkung auf das Publikum.
**Gestützt für:** Entwicklungsstadium Sprachniveau
**Fach:** Deutsch-Literatur
**Lernziel:** SuS analysieren, wie Priestley dramatische Ironie als Technik nutzt, um die Sicht des Publikums auf Herr Birling zu formen.

### Modifizierte Aufgabe

**Schritt 1: Das Konzept verstehen (mit visueller Unterstützung)**

**Dramatische Ironie** = wenn das PUBLIKUM etwas weiß, das eine FIGUR nicht weiß.

| Was Herr Birling sagt (1912) | Was das PUBLIKUM weiß (schaut 1945+) |
|---|---|
| "Die Titanic... unsinkbar, absolut unsinkbar" | Die Titanic sank auf ihrer Jungfernfahrt 1912 — über 1.500 Menschen starben |
| "Ich sage, es gibt keine Chance auf Krieg" | Der Erste Weltkrieg startete 1914 und der Zweite Weltkrieg startete 1939 |

**Das ist dramatische Ironie:** Herr Birling ist vollständig FALSCH, und das Publikum WEIS, dass er falsch ist, während er voller Vertrauen spricht.

**Schritt 2: Analysiere — WARUM tut Priestley das?**

Lies den Auszug wieder. Nutze die Fragen unten, um deine Analyse zu bauen. Du musst dein Denken erklären — eine Eins-Wort-Antwort ist nicht genug.

1. Wenn das Publikum hört, wie Herr Birling die Titanic "unsinkbar" nennt, was denken sie über Herr Birling? Vertrauen sie seinem Urteil?

2. Herr Birling sagt diese falschen Vorhersagen mit großem Vertrauen ("Ich sage, es gibt keine Chance auf Krieg"). Was ist die Wirkung sein Vertrauens? Ist eine selbstbewusste Person die falsch ist MEHR oder WENIGER lächerlich als eine unsichere Person die falsch ist?

3. Herr Birling macht auch Vorhersagen über Geschäft und soziale Verantwortung — er sagt, Menschen sollten nur auf sich selbst achten. Priestley möchte, dass das Publikum dies nicht glaubt. Wie hilft die dramatische Ironie über die Titanic und den Krieg Priestley dem Publikum, Herr Birlings anderen Sichtweise nicht zuzustimmen?

**Schritt 3: Schreib deine Antwort**

Nutze diese Struktur. Jeder Abschnitt erfordert DEIN Denken — die Satzanfänge geben dir die akademische Sprache, aber du muss die Analyse liefern.

**Absatz 1 — Was dramatische Ironie ist und wie Priestley sie nutzt:**

Dramatische Ironie ist wenn ___. In Herr Birlings Rede nutzt Priestley dramatische Ironie wenn Birling sagt "___" (Zitat aus dem Auszug). Das Publikum 1945 würde wissen, dass ___, was bedeutet, Birling ist ___.

**Absatz 2 — Die Wirkung auf das Publikum:**

Diese dramatische Ironie beeinflusst das Publikum weil ___. Wenn sie Birling so voller Vertrauen über etwas sprechen hören, das sie WISSEN ist falsch, beginnen sie ___. Priestleys Absicht darin ist ___ weil ___.

**Absatz 3 — Wie das mit Priestleys breiterer Aussage verbunden ist:**

Priestley nutzt die dramatische Ironie, um Birlings Autorität zu untergraben, so dass wenn Birling argumentiert, dass Menschen nur auf sich selbst achten sollten, das Publikum ___. Wenn das Publikum bereits weiß, Birling ist falsch über die Titanic, ist es wahrscheinlicher, es zu denken, dass er auch falsch ist über ___. Das unterstützt Priestleys Aussage, dass ___.

**Wortliste für analytische Sprache:**

| Um Birling zu beschreiben | Um des Publikums Antwort zu beschreiben | Um Priestleys Absicht zu beschreiben |
|---|---|---|
| arrogant, übermütig, töricht, fehlgeleitet, kurzsichtig | skeptisch, misstrauisch, kritisch, amüsiert, bewusst | untergräbt, diskreditiert, herausfordert, offenbart, enthüllt |

### Prüfung der kognitiven Anforderung

**Ursprüngliche Aufgabe erfordert:** Analyse — SuS müssen erklären, WIE eine Technik (dramatische Ironie) eine spezifische Wirkung (Untergraben von Autorität) erzeugt, erfordert Beispiele zu identifizieren, den Mechanismus der Technik zu erklären und es zu Autorintention zu verbinden.

**Modifizierte Aufgabe erfordert:** Die gleiche Analyse. SuS muss immer noch erklären, WIE dramatische Ironie Birling untergräbt, spezifische Beispiele identifizieren, die Wirkung auf das Publikum erklären und zur Priestleys Absicht verbinden. Die führenden Fragen und Satzanfänge bieten sprachliches Scaffolding, aber jede erfordert, dass die SuS ihr EIGENES analytisches Denken liefert.

**Wie kognitive Anforderung bewahrt wird:**
- Frage 2 bittet SuS, das Verhältnis zwischen Vertrauen und Falsch-Sein zu bewerten — das ist echte Analyse, nicht Abruf.
- Frage 3 bittet SuS zu erklären, wie dramatische Ironie über faktische Vorhersagen zu Untergraben von Birlings politischen Sichtweisen transferiert — das ist der schwierigste analytische Schritt und wird NICHT durch den Scaffold beantwortet.
- Die Satzrahmen erfordern, dass SuS die Analyse vollständigen: "Priestleys Absicht darin ist ___ weil ___" — das "weil" zwingt Begründung, nicht einfach Identifikation.

**Was wurde geändert:** Das Lesen wird durch einen Zusammenfassung-Tisch unterstützt. Die Schreib-Struktur wird mit Satzanfängen gestützt. Analytisches Vokabular wird in einer Wortliste bereitgestellt. Die Aufgabe wird in geführte Schritte unterteilt.

**Was wurde NICHT geändert:** Das Verlangen zu analysieren (nicht zu beschreiben). Das Verlangen, Wirkung auf das Publikum zu erklären. Das Verlangen, Technik zu Autorintention zu verbinden. Das Verlangen, Belege aus dem Text zu nutzen.

### Genutzte Scaffold-Typen

- **Kontextualisierung (Tisch):** Der Zusammenfassung-Tisch macht das historische Wissen, das für dramatische Ironie erforderlich ist, sichtbar — DaZ-SuS hat möglicherweise nicht den Kultur-Hintergrund-Wissen, um zu erkennen, warum Birlings Vorhersagen ironisch sind. Der Tisch bietet diesen Kontext, ohne die Analyse zu tun.
- **Satzrahmen:** Biete die grammatische Struktur analytischen Schreibens (komplexe Sätze mit eingebetteten Klauseln) während von der SuS Inhalt zu liefern verlangt wird. "Dramatische Ironie ist wenn ___" erfordert eine Definition. "Priestleys Absicht darin ist ___ weil ___" erfordert Begründung.
- **Führende Fragen:** Unterteile die Analyse in sequenziellen Schritten statt erwartet die SuS produziere eine holistische analytische Antwort aus einem einzelnen offenen Prompt. Jede Frage zielt auf eine Komponente der Analyse.
- **Wortliste:** Biete das evaluative Vokabular (arrogant, skeptisch, untergräbt), das DaZ-SuS im Entwicklungsstadium unwahrscheinlich habe, aber für analytisches Schreiben brauchen. Die SuS muss das passende Wort WÄHLEN — die Liste bietet Optionen, nicht Antworten.

### Plan zum Scaffold-Entzug

| Aktueller Scaffold | Entzug wenn... | Ersetze mit... |
|---|---|---|
| Zusammenfassung-Tisch (historischer Kontext) | SuS zeigt Bewusstsein des historischen Kontextes unabhängig in Klassen-Diskussion | Kein Ersatz — das Wissen sollte internalisiert sein |
| Satzrahmen (vollständige Struktur) | SuS kann analytische Absätze mit nur Satzanfängen produzieren | Nur Satzanfänge: "Priestley nutzt..." "Das deutet hin..." "Die Wirkung auf das Publikum ist..." |
| Satzanfänge | SuS produziert analytisches Schreiben mit passender Struktur unabhängig | Keine Anfänge — SuS schreibt unabhängig, mit Nach-Schreib-Feedback zu Struktur |
| Führende Fragen | SuS kann analytische Schritte unabhängig erkennen wenn ein offener Prompt gegeben ist | Einzelner offener Prompt: "Analysiere, wie Priestley [Technik] nutzt, um [Wirkung]" |
| Wortliste | SuS nutzt 3+ analytische Begriffe unabhängig ohne die Liste | Keine Wortliste — aber fahre fort, neues analytisches Vokabular zu unterrichten, wenn es entsteht |

**Ziel-Zeitplan:** Für eine Entwicklungsstadium-SuS, ziele auf Entzug der Satzrahmen innerhalb 4–6 Wochen (mit regelmäßiger analytischer Schreib-Praxis). Die Wortliste kann graduell reduziert werden — entferne Wörter die die SuS 3+ mal korrekt nutzt. Die führenden Fragen können innerhalb 2–3 Monaten auf 1–2 Prompts reduziert werden.

---

## Bekannte Einschränkungen

1. **Die Modifikation kann SuS kognitive Fähigkeit nicht unabhängig von Sprachniveau berücksichtigen.** Eine SuS auf Entwicklungsstadium Deutsch, aber mit starker analytischer Fähigkeit in ihrer Muttersprache, braucht verschiedenes Scaffolding als eine SuS auf gleichem Sprachniveau, die auch Analyse herausfordernd findet. Die LP-eigene Kenntnis der individuellen SuS ist essentiell zum Anpassen des Scaffolds.

2. **Scaffold-Entzug erfordert konsistente, longitudinale Planung.** Dieser Skill entwerfen Scaffolds für eine einzelne Aufgabe, aber effektiver Scaffold-Entzug geschieht über Wochen und Monate. Eine LP, die diesen Skill für jede Aufgabe nutzt, bekommt gut-gestützte einzelne Aufgaben, aber der progressive Entzug über Aufgaben erfordert die LP den Trajektorie zu planen. Verkette mit einem spaced-practice Ansatz zum Scaffold-Reduktion.

3. **Die Modifikation setzt voraus, dass die ursprüngliche Aufgabe gut-entworfen ist.** Wenn die ursprüngliche Aufgabe schlecht-strukturiert, unklar oder nicht mit dem Lernziel ausgerichtet ist, wird Scaffolding nicht helfen — die ursprüngliche Aufgabe benötigt erst Redesign. Scaffolding ist kein Fix für schlecht-Aufgaben-Entwurf; es ist ein Weg, eine gute Aufgabe für SuS auf verschiedenen Sprachniveaus zugänglich zu machen.
