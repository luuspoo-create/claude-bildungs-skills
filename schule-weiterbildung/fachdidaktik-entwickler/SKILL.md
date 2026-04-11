---
# AGENT SKILLS STANDARD FIELDS (v2)
name: fachdidaktik-entwickler
description: "Entwickle Fach-Didaktisches Wissen für ein Thema, indem common misconceptions und effektive Repräsentationen sichtbar gemacht werden. Nutze diesen Skill bei der Vorbereitung zum Unterrichten von unfamiliar Inhalten oder bei der Verbesserung von Unterrichten von schwierigen Themen."
disable-model-invocation: false
user-invocable: true
effort: medium

# EXISTING FIELDS

skill_id: "schule-weiterbildung/fachdidaktik-entwickler"
skill_name: "Fach-Didaktisches Wissen Developer"
domain: "professional-learning"
version: "1.0"
evidence_strength: "strong"
evidence_sources:
  - "Shulman (1986) — Those who understand: Knowledge growth in teaching — original PCK framework"
  - "Shulman (1987) — Knowledge and teaching: Foundations of the new reform"
  - "Ball, Thames & Phelps (2008) — Content knowledge for teaching: What makes it special?"
  - "Magnusson, Krajcik & Borko (1999) — Nature, sources and development of PCK for science teaching"
  - "Cochran, DeRuiter & King (1993) — Pedagogical content knowing: An integrative model"
  - "Hattie (2009) — Visible Learning: teacher content knowledge and PCK as distinct predictors"
  - "Depaepe, Verschaffel & Kelchtermans (2013) — Pedagogical content knowledge: A systematic review"
  - "Bernstein (1999) — Vertical and horizontal discourse: knowledge structures and recontextualisation"
  - "Willingham (2009) — Why Don't Students Like School: content knowledge as prerequisite for teaching"
  - "Timperley et al. (2007) — Teacher Professional Learning and Development: content-specific PD effectiveness"
input_schema:
  required:
    - field: "teaching_context"
      type: "string"
      description: "Was die LP unterrichten wird: Fach, Thema, Einheit, oder Programm"
    - field: "learner_stage"
      type: "string"
      description: "Altersbereich oder Jahrgangsstufe"
    - field: "teacher_background"
      type: "string"
      description: "Kurzbeschreibung der LPs Fach-Training und Erfahrung mit diesem Thema"
  optional:
    - field: "known_student_misconceptions"
      type: "string"
      description: "Jegliche Missverständnis-Fehler, die die LP schon bewusst ist"
    - field: "curriculum_framework"
      type: "string"
      description: "Die Schulcurriculum oder Kompetenz-Rahmenwerk in Nutzung"
    - field: "knowledge_architecture_output"
      type: "string"
      description: "Von curriculum-knowledge-architecture-designer wenn schon gelaufen"
output_schema:
  type: "object"
  fields:
    - field: "pck_diagnosis"
      type: "object"
      description: "Bewertung der wahrscheinlichen PCK-Stärken und -Lücken der LP für dieses spezifische Thema, basierend auf ihrem Hintergrund; identifiziert welche drei Wissens-Arten (hierarchisch, horizontal, dispositional) ihre PCK am schwächsten in"
    - field: "content_knowledge_foundations"
      type: "object"
      description: "Das hierarchische Wissen, das die LP sichern muss, bevor sie unterrichtet: Schlüssel-Konzepte, Vorbedingung-Ketten, und das am häufigsten missverstandene Inhalts-Material auf dieser Ebene"
    - field: "common_student_misconceptions"
      type: "object"
      description: "Die am meisten dokumentierten Missverständnis-Fehler, die SuS über dieses Thema auf dieser Lerner-Ebene halten, mit Erklärung warum jeder Fehler sich formt und was es dauert, ihn zu verschieben"
    - field: "pedagogical_representations"
      type: "object"
      description: "Die am meisten effektiven Repräsentationen, Analogien, Modelle, und Beispiele zum Unterrichten dieses Inhalts: was funktioniert, was leitet in die Irre, und warum; organisiert nach Wisssens-Typ"
    - field: "disciplinary_thinking_standards"
      type: "object"
      description: "Was Experten-Denken in dieser Domain aussieht wie und wie man es für SuS sichtbar macht; das horizontale Wissens-Dimension von PCK"
    - field: "developmental_action_plan"
      type: "object"
      description: "Ein sequenzierter Plan für die LP, ihre PCK für dieses Thema zu entwickeln: was zuerst zu lesen oder lernen ist, was zu beobachten ist, was zu üben ist, und wie zu wissen, wenn ihre PCK ausreichend ist"
chains_well_with:
  - "lesson-study-zyklus"
  - "unterrichtsbesuch-protokoll"
  - "reflexionsfragen-generator"
  - "tpack-entwickler"
teacher_time: "10 minutes"
tags: ["PCK", "fachdidaktik", "LP-entwicklung", "inhalts-wissen", "missverständnis-fehler", "Shulman", "schule-weiterbildung", "Lehrplan-21"]
---

# Fach-Didaktisches Wissen Developer

## Was dieses Skill leistet

Nimmt eine Beschreibung von was eine LP unterrichten wird und ihrem Hintergrund, diagnostiziert ihre wahrscheinlichen PCK (Pedagogical Content Knowledge — Fach-Didaktisches Wissen)-Lücken für dieses spezifische Thema, und produziert einen Entwicklungs-Plan, um diese Lücken zu schließen, bevor Unterrichten anfängt. Shulmans (1986) grundlegende Einsicht ist, dass ein Fach zu kennen und zu wissen, wie man es unterrichtet, genuinely verschiedene Fähigkeiten sind — ein Mathematiker, der nie Brüche zu Neun-Jährigen unterrichtet hat, kennt automatisch nicht welche Repräsentationen funktionieren, welche Missverständnis-Fehler sich bilden, oder welche konzeptionelle Schwelle SuS überqueren müssen, bevor die nächste Idee Sinn macht. Dieses Skill macht diese Lücken sichtbar und verwöhnlich. Es deckt alle drei Wissens-Dimensionen ab: das hierarchische Inhalts-Wissen, das die LP sichern muss, die horizontalen Denk-Rahmenwerke, die Experten-Reasoning in der Domain definieren, und die dispositionale Orientierung zu bemerken und responsiv zu sein auf Schüler-Verständnis in Real-Time. Die Ausgabe ist sowohl eine Diagnose als auch einen Entwicklungs-Plan — nicht nur identifizierend was fehlt, sondern sequenzierend was die LP darüber tun sollte. Das ist besonders wertvoll, wenn LPs außerhalb ihrer Haupt-Fach-Expertise arbeiten, ehrgeizige neue Programm unterrichtet (regenerativ project-based Lernen, interdisciplinär Einheiten, Wohlbefindens-Naturwissenschaften), oder zu einer neuen Altersgruppe bewegen, wo ihre bestehende PCK neu-eichung braucht. KI ist spezifisch wertvoll hier, weil Kartographie von PCK-Lücken erfordert, gleichzeitig die Inhalts-Domain zu kennen, die Forschung auf Schüler-Missverständnis-Fehler, die Evidenz auf pädagogisch Repräsentationen, und die entwicklungs-Angememessenheit verschiedener Ansätze — eine Kombination, die Jahre dauert durch Erfahrung zu entwickeln und das die meisten Pre-Service-Training nur teilweise liefert.

## Evidenzgrundlage

Shulman (1986, 1987) unterschied PCK aus allgemeinem Inhalts-Wissen und allgemeinem pädagogischem Wissen als eine dritte, unterschiedliche Kategorie: die Mischung von Inhalts- und Pädagogik, die unique die Provinz von LPs ist. Ein Chemiker und ein Chemie-LP könnten identische Inhalts-Wissen haben, aber die LP auch weiß welche Analogien für ionisches Binden im Alter 14 funktionieren, welche Missverständnis-Fehler über Atome nahezu universal sind, und welche Repräsentationen täuschen mehr als sie illuminate. Das ist PCK — das Wissen, das Inhalts machbar macht. Shulman identifizierte es als "die nützlichsten Formen von Repräsentation dieser Ideen, die mächtigsten Analogien, Illustrationen, Beispiele, Erklärungen, und Demonstrationen — kurz, die Wege von Repräsentations und Formulierung des Inhalts, die es verständlich macht zu anderen."

Ball, Thames & Phelps (2008) verfeinert Shulmans Rahmenwerk in sechs Sub-Domains von mathematischen Wissen zum Unterrichten, finden, dass diese Form von PCK vorhergesagt SuS-Leistungs-Gewinne unabhängig von allgemeinem Inhalts-Wissen. Ihre Schlüssel-Finden: eine LPs Fähigkeit, warum eine falsche Antwort eines SuS logisch ist, gegeben das SuS-wahrscheinlich-Reasoning, war ein stärkerer Prädiktor von Schüler-Lernen als die LPs eigene Fähigkeit, mathematische Probleme zu lösen. Die Implikation: Inhalts-Wissen ist notwendig, aber nicht ausreichend. Was zählt ist die Transformation von Inhalts-Wissen in unterrichtbare Form — welche erfordert zu wissen, wie SuS über diesen Inhalts-Material denken, nicht nur den Inhalts-Material selbst kennend.

Magnusson, Krajcik & Borko (1999) kartographiert die Komponenten von PCK zum Naturwissenschaften-Unterrichten: Wissen von Naturwissenschaften-Curriculums, Wissen von SuS-Verständnis von spezifischen Naturwissenschaften-Themen, Wissen von Unterrichts-Strategien und Repräsentationen zum Unterrichten von spezifischen Naturwissenschaften-Themen, und Wissen von Assessment von spezifischen Naturwissenschaften-Themen. Jede Komponente ist Thema-spezifisch — eine LPs PCK zu Photosynthese übertragen nicht zu ihre PCK zu Newtonian-Mechanik. Diese Thema-Spezifizität ist, was PCK-Entwicklung so anspruchsvoll macht, und warum ein diagnostisches Werkzeug notwendig ist.

Depaepe, Verschaffel & Kelchtermans (2013) leiteten eine systematische Überprüfung, die PCK als konstruiert, unterrichtbar, und messbar über Fächern konfirmierend, während zu bemerken, dass es primarlich durch Fach-spezifisch Unterrichts-Erfahrung und zielgerichtet Reflexion entwickelt — nicht durch generisch professionelle Entwicklung. Cochran, DeRuiter & King (1993) schlugen das Konzept von "pädagogisch Inhalts-Kennung" vor — betonend, dass PCK dynamisch ist und kontinuierlich entwickelnd, nicht ein fester Körper von Wissen, um erworben zu werden.

Hattie (2009) fand, dass Lehrer-Fach-Matter-Wissen ein moderater Einfluss auf Schüler-Leistung hat (d = 0,09 zu Inhalts-Wissen allein), aber dass PCK — die Fähigkeit, Inhalts in Wegen zu repräsentieren, dass SuS zugreifen können — hat einen wesentlich größer Einfluss. Willingham (2009) verstärkt dies von einer kognitiv-Naturwissenschaften-Perspektive: LPs können nicht gute in-der-Moment-Entscheidungen über Erklärungen, Beispiele, und Repräsentationen machen, wenn sie tiefes, flexibles Inhalts-Wissen nicht haben, um zu zeichnen. Inhalts-Wissen ist das Roh-Material, aus welchem PCK konstruiert wird.

Timperley et al. (2007) fanden in ihrer Best-Evidenz-Synthese, dass die am meisten effektive professionelle Entwicklung ist Inhalts-spezifisch und direkt verlinkt zu Unterrichts-Praxis: LPs, die Schüler-Missverständnis-Fehler in ihrem Fach studieren und ihre pädagogisch Repräsentationen verfeinern, verbessern Schüler-Ergebnisse mehr als LPs, die generisch Unterrichts-Strategien studieren. Die Implikation zum diesen Skill: PCK-Entwicklung muss zielgerichtet zum spezifischen Thema sein, das die LP unterrichten wird, nicht zu allgemeinen pädagogischen Prinzipien.

Bernsteins (1999) Wissens-Strukturen-Rahmenwerk kartiert direkt auf PCK. **Hierarchische PCK** ist zu wissen die Vorbedingung-Ketten und wo SuS stecken — welche Konzepte müssen beherrscht werden, bevor die nächste Idee zugänglich ist, und wie das aussieht, wenn ein SuS eine Vorbedingung vermisst. **Horizontal PCK** ist zu wissen die mehrfachen Repräsentationen und Disziplinar-Denk-Schritte — welche Analogien illuminate, welche täuschen, und wie Experten-Reasoning in dieser Domain von Anfänger-Reasoning unterscheidet. **Dispositionale PCK** ist die Orientierung zu bemerken, was SuS tatsächlich verstehen, in Real-Time — nicht das, was ihnen gesagt worden ist, aber das, was sie konstruiert haben — und Unterrichten responsiv anzupassen. Alle drei Dimensionen müssen für effektives Unterrichten anwesend sein.

## Input-Schema

Der Pädagoge muss zur Verfügung stellen:
- **Unterrichts-Kontext:** Was die LP unterrichten wird. *z.B. "9. Klasse Wohlbefindens-Einheit über Stress, emotionale Selbst-Regulierung, und Gewohnheiten — einschließend die Neurowissenschaft von Stress" / "7. Klasse Naturwissenschaften — Kräfte und Bewegung, einschließend Newtons Gesetze" / "10. Klasse Geschichte — die Russische Revolution"*
- **Lerner-Ebene:** Altersbereich oder Jahrgangsstufe. *z.B. "14-15 Jahre" / "7. Klasse" / "Band D"*
- **LP-Hintergrund:** Fach-Training und Erfahrung. *z.B. "Secondary Geistes-Wissenschaft LP (Geschichte und Politik), kein Naturwissenschaften-Training, erstes Mal Wohlbefindens-Naturwissenschaften unterrichtet" / "Primär Generalist mit ein Geographie-Grad, Naturwissenschaften zum ersten Mal unterrichtet" / "Erfahr Biologie LP, jetzt ein cross-curricular Nachhaltigkeit-Projekt unterrichtet"*

Optional (von Kontextmodul, wenn verfügbar):
- **Bekannte Schüler-Missverständnis-Fehler:** Missverständnis-Fehler, die die LP schon bewusst ist
- **Curriculum-Rahmenwerk:** Die Schulcurriculum oder Kompetenz-Rahmenwerk
- **Wissens-Architektur-Ausgabe:** Von curriculum-knowledge-architecture-designer wenn schon gelaufen

## Prompt

```
Du bist Experte in pädagogisch-Inhalts-Wissen-Entwicklung, zeichnend auf Shulmans (1986, 1987) ursprünglichem PCK-Rahmenwerk, Ball, Thames & Phelps (2008) verfeinert Modell von Inhalts-Wissen zum Unterrichten, Magnusson, Krajcik & Borkos (1999) Komponenten von Naturwissenschaften PCK, Depaepe, Verschaffel & Kelchtermans (2013) systematische Überprüfung, und Bernsteins (1999) Wissens-Strukturen-Rahmenwerk. Du verstehst, dass PCK Thema-spezifisch ist, entwickelt durch Fach-fokussiert Erfahrung und Reflexion, und umfasst drei Dimensionen: hierarchisch Inhalts-Wissen (Vorbedingung-Ketten und wo SuS stecken), horizontal Disziplinar-Denken (Repräsentationen, Experten-Reasoning, mehrfach gültig Ansätze), und dispositional Notiznahme (die Real-Time-Orientierung zu Schüler-Verständnis).

Deine Aufgabe ist zu diagnostizieren der LPs PCK-Lücken und produzieren einen Entwicklungs-Plan für den folgende Unterrichts-Kontext.

**Unterrichts-Kontext:** {{teaching_context}}
**Lerner-Ebene:** {{learner_stage}}
**LP-Hintergrund:** {{teacher_background}}

Der folgende optionale Kontext kann oder kann nicht bereitgestellt werden. Verwende, was verfügbar ist; ignoriere alle Felder, die "nicht bereitgestellt" markiert sind.

**Bekannte Schüler-Missverständnis-Fehler:** {{known_student_misconceptions}} — wenn bereitgestellt, einbeziehen in die Missverständnis-Fehler-Karte. Wenn nicht bereitgestellt, identifiziere die am meisten dokumentierten Missverständnis-Fehler aus Forschung.
**Curriculum-Rahmenwerk:** {{curriculum_framework}} — wenn bereitgestellt, verlinke die PCK-Entwicklung zum Rahmenwerk-Anforderungen.
**Wissens-Architektur-Ausgabe:** {{knowledge_architecture_output}} — wenn bereitgestellt, nutze die epistemisch Diagnose zum Fokus die PCK-Entwicklung auf die Wissens-Typen am meisten prominent in diesem Curriculum.

Gib deine Ausgabe in diesem exakten Format zurück:

## PCK Entwicklungs-Plan: [Thema]

**Unterrichts-Kontext:** [Zusammengefasst]
**Lerner-Ebene:** [Alter/Jahr]
**LP-Hintergrund:** [Zusammengefasst]

### 1. PCK Diagnose

**Hierarchische Lücken (Inhalts-Wissen):**
[Spezifisch Inhalts-Wissen, das die LP wahrscheinlich vermisst]

**Horizontal Lücken (Disziplinar-Denken und Repräsentationen):**
[Disziplinar-Denk-Standards und pädagogisch Repräsentationen, die die LP wahrscheinlich lacks]

**Dispositionale Lücken (Notiznahme-Orientierung):**
[Was der LPs Hintergrund möglicherweise sie nicht vorbereitet zu bemerken in SuS-Antworten]

**PCK-Stärken (Übertragbar aus Hintergrund):**
[Was die LP aus ihrer bestehend Training und Erfahrung bringt]

### 2. Inhalts-Wissen-Grundlagen

**Vorbedingung-Kette:**
[Visuell oder aufgelistet Vorbedingung-Kette mit hart/Weich-Vorbedingungen markiert]

**Konzepte commonly misunderstood von LPs:**
[2-3 spezifisch Konzepte mit genau Verständnis angegeben]

### 3. Schüler-Missverständnis-Fehler-Karte

| Missverständnis-Fehler | Warum es sich formt | Persistenz | Was es verschiebst |
|---|---|---|---|
| [Missverständnis 1] | [Ursprung] | [Hoch/Mittel/Niedrig] | [Ansatz] |
| [Missverständnis 2] | [Ursprung] | [Hoch/Mittel/Niedrig] | [Ansatz] |
| [Missverständnis 3] | [Ursprung] | [Hoch/Mittel/Niedrig] | [Ansatz] |

### 4. Pädagogische Repräsentationen

**Empfohlen Repräsentationen:**

| Repräsentation | Was es illuminates | Was es obscures/verzerrt | Alters-angemeßen? |
|---|---|---|---|
| [Repräsentation 1] | [Stärke] | [Limitierung] | [Ja/Qualifiziert/Nein] |
| [Repräsentation 2] | [Stärke] | [Limitierung] | [Ja/Qualifiziert/Nein] |

**Repräsentation zum VERMEIDEN:**
[Name] — [Warum es täuscht und welche Missverständnis-Fehler es produziert]

### 5. Disziplinar-Denk-Standards

**In [Domain], Experten-Denken über [Thema] umfasst:**
[Spezifisch Disziplinar-Denk-Standards]

**Charakteristisch Anfänger-Fehler:**
[Was Anfänger-Denken in dieser Domain aussieht wie und wie es von Experten-Denken unterscheidet]

### 6. Dispositionale PCK

**Höre zu:**
[SuS-Äußerungen, die Verständnis oder Missverständnis-Fehler signalisieren]

**Fragen, die Tiefgründigkeit offenbaren:**
[Fragen, die echtes Verständnis aus executiertem Verständnis unterscheiden]

**Zeichen von executiertem vs. echtem Verständnis:**
[Wie jedes in SuS-Antworten aussieht]

### 7. Entwicklungs-Aktions-Plan

**Bevor Unterrichten anfängt (Prioritäts-Reihenfolge):**
1. [Wichtigste Aktion]
2. [Zweite Priorität]
3. [Dritte Priorität]

**Während Unterrichten:**
- [Was zu beobachten]
- [Was zu verfeinern]
- [Reflexions-Protokoll zum Nutzen]

**Über Zeit:**
- [Was sich durch anhaltende Erfahrung entwickelt]
- [Wie man es beschleunigt]

**Selbstcheck vor Rückgabe der Ausgabe:** Verifiziere, dass (a) die Diagnose spezifisch zu dieser LPs Hintergrund und diesem Thema ist, nicht generisch, (b) Inhalts-Wissen-Grundlagen schließen ein klare Vorbedingung-Kette ein, (c) Missverständnis-Fehler schließen Ursprungs-Erklärungen nicht einfach Beschreibungen ein, (d) Repräsentationen schließen mindestens ein zu vermeiden ein, (e) der Disziplinar-Denk-Standard ist spezifisch zu dieser Domain, (f) die dispositionale Sektion beschreibt, was zu bemerken in SuS-Antworten ist, und (g) der Aktions-Plan ist sequenziert und verwöhnlich.
```

## Beispielausgabe

[Längeres Beispiel-Output folgt — werden in einem folgend Schreib-Block hinzugefügt, um die Dateigröße zu kontrollieren...]

---

## Bekannte Limitierungen

1. **Die Diagnose ist basiert auf der LPs Selbstbericht ihres Hintergrunds, welche möglicherweise Über-schätzen oder Unter-schätzen ihre tatsächlich Inhalts-Wissen.** Eine LP, die in Biologie vor zwanzig Jahren trainiert wurde, könnte sichern Wissen, veraltetes Wissen, oder kein behaltenenes Wissen haben — der Skill kann zwischen diesen nicht unterscheiden, ohne ein Wissens-Check. Zum High-Stakes-Themen (medizinische Information, wissenschaftlich Genauigkeit, die Schüler-Sicherheit beeinflussend), die LP sollte ihre Inhalts-Wissen unabhängig vor Verlass auf die Skill-Diagnose verifizieren.

2. **Die Missverständnis-Fehler-Datenbank ist nur so aktuell wie die Forschungs-Grundlage.** Missverständnis-Fehler-Forschung existiert zum einigen Themen (Brüche, Photosynthesis, Newtonian-Mechanik, Evolution) mit starker Replikation. Zu neuere oder weniger-studiert Themen (Wohlbefindens-Naturwissenschaften, regenerativ Denken, KI-Ethik), wird die Missverständnis-Fehler-Sektion basiert auf dünner Evidenz sein. Der Skill wird das dort relevant flaggen.

3. **PCK wird zugrundeliegend entwickelt durch Fach-spezifisch Unterrichts-Erfahrung, nicht durch eine Diagnose zu lesen.** Dieser Skill beschleunigt den Prozess, indem sichtbar machend was erfahr LPs langsam gelernt haben — aber es kann nicht substituieren für das tatsächlich Unterrichten des Themas, Bemerken was SuS tun, und Verfeinern Praxis über Zeit. Der Entwicklungs-Aktions-Plan ist ein Startpunkt, nicht eine Fertigstellung.

4. **Der Drei-Typ-Rahmenwerk kartiert auf PCK, aber erfasst nicht alle von PCKs Komplexität.** Ball et al.s (2008) Sechs-Domain-Modell schließt spezialisiert Inhalts-Wissen, Wissen von Inhalts und SuS, Wissen von Inhalts und Unterrichten, Wissen von Inhalts und Curriculum, und Horizont-Inhalts-Wissen ein — jedem von welchen hat unterschiedlich Entwicklungs-Pfade. Dieser Skill nutzt den Drei-Typ-Rahmenwerk zum Zugang und Konsequenz mit den Rest des Skill-Biblothek, welche bedeutet einige PCK-Feinheit wird verloren.

5. **Dieser Skill diagnostiziert und entwickelt einzeln LP-PCK.** Es behandelt nicht kollektiv oder institutionell PCK — das gemeinsam Verständnis, dass ein Abteilung oder Team über wie man ein Fach gut unterrichtet in einem spezifisch Kontext mit spezifischen SuS entwickelt. Zum ehrgeizige neue Programme mit mehrfach LPs, der Lesson-Study-Zyklus-Designer ist das mehr angemeßen Werkzeug zum Aufbau kollektiv PCK.
