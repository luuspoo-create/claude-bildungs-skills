---
name: system-wiki
description: >
  Verwalte die zentrale Wissensdatenbank (Wiki) des KI-Betriebssystems nach dem Agent-Wiki/Karpathy-Prinzip.
  Verwende diesen Skill IMMER wenn der Nutzer Wissen nachschlagen, hinzufügen, aktualisieren oder organisieren möchte.
  Trigger bei: 'Wiki', 'Wissensdatenbank', 'nachschlagen', 'Knowledge Base', 'was wissen wir über',
  'Wiki-Eintrag', 'Wissen aktualisieren', 'Wiki-Seite', 'ins Wiki schreiben', 'Wiki durchsuchen',
  'was steht im Wiki', 'Entscheidung dokumentieren', 'Quelle hinzufügen', 'Wiki-Health', 'Wiki-Status',
  'was haben wir entschieden', 'Kontext laden', 'session start', 'session finish'.
  Auch triggern wenn der Nutzer eine Frage stellt, die das Wiki beantworten könnte, oder wenn eine Entscheidung
  getroffen wurde, die dokumentiert werden sollte. Dieser Skill ist die zentrale Wissensverwaltung des
  KI-Betriebssystems und sorgt dafür, dass Wissen nicht verloren geht.
---

# System-Wiki — Wissensdatenbank des KI-Betriebssystems

## Grundprinzip

> "The correct way to use LLMs is not Q&A, it's compilation." — Andrej Karpathy

Dieses Wiki folgt dem Compile-First-Prinzip: Rohdaten und Informationen werden nicht einfach abgefragt, sondern in strukturiertes, verlinktes Wissen kompiliert. Jede Erkenntnis, Entscheidung und Information wird zurück ins Wiki geschrieben (Writeback).

## Wiki-Pfad

Das Wiki liegt im Obsidian-Vault oder im KI-Betriebssystem-Ordner. Suche in dieser Reihenfolge:

1. Prüfe ob ein gemounteter Ordner `wiki/` enthält
2. Falls nicht, suche nach `~/Documents/Obsidian/KI-Betriebssystem/wiki/`
3. Erstelle die Struktur falls nötig

## Verzeichnisstruktur

```
wiki/                          # Kompilierte Wissensbasis
├── index.md                   # Inhaltsverzeichnis aller Wiki-Seiten
├── log.md                     # Chronologisches Protokoll (append-only)
├── schule/                    # Unterricht, Lehrplan, Bewertung, Schulleitung
├── content/                   # Workshops, Instagram, Newsletter
├── system/                    # KI-Betriebssystem, Tools, Workflows
├── decisions/                 # Architektur- und Strategieentscheidungen
└── sources/                   # Zusammenfassungen externer Quellen

raw/                           # Rohdaten (unverarbeitete Quellen)
outputs/                       # Generierte Berichte und Antworten
```

## Kommandos (Session-Workflow)

### /wiki-start — Session beginnen
Zu Beginn einer Arbeitssession:
1. Lies `wiki/index.md` um den aktuellen Stand zu kennen
2. Lies `wiki/log.md` (letzte 20 Zeilen) für aktuelle Entwicklungen
3. Identifiziere relevante Wiki-Seiten für die aktuelle Aufgabe
4. Lies diese Seiten und lade den Kontext
5. Melde dem Nutzer: aktueller Stand, offene Punkte, erkannte Lücken

### /wiki-ingest — Quelle hinzufügen
Wenn neue Informationen oder Quellen verarbeitet werden sollen:
1. Analysiere die Quelle (Datei, URL, Text)
2. Extrahiere Kernaussagen, Fakten, Entscheidungen
3. Prüfe ob eine passende Wiki-Seite existiert → aktualisiere sie
4. Oder erstelle eine neue Seite in der richtigen Kategorie
5. Erstelle einen Eintrag in `sources/` mit Zusammenfassung
6. Aktualisiere `index.md` und `log.md`
7. Verlinke verwandte Seiten mit [[wiki-links]]

### /wiki-finish — Session beenden
Am Ende einer Arbeitssession:
1. Prüfe welche neuen Erkenntnisse oder Entscheidungen entstanden sind
2. Schreibe alles Relevante zurück ins Wiki (Writeback!)
3. Aktualisiere betroffene Wiki-Seiten
4. Ergänze `log.md` mit Session-Zusammenfassung
5. Aktualisiere `index.md` falls neue Seiten entstanden sind

### /wiki-health — Gesundheitsprüfung
Periodischer Check (z.B. wöchentlich):
1. Prüfe alle Wiki-Links: Gibt es tote Links ([[seite]] ohne Datei)?
2. Identifiziere verwaiste Seiten (nicht in index.md gelistet)
3. Suche nach Widersprüchen zwischen Seiten
4. Identifiziere veraltete Informationen
5. Schlage Verbesserungen und neue Seiten vor
6. Erstelle einen Health-Report in `outputs/`

### /wiki-search — Wiki durchsuchen
Wenn der Nutzer eine Frage stellt oder Wissen sucht:
1. Durchsuche alle Wiki-Seiten nach relevanten Inhalten
2. Priorisiere: decisions/ > aktive Seiten > geplante Seiten
3. Gib eine strukturierte Antwort mit Quellenverweisen
4. Falls das Wiki die Frage nicht beantworten kann → markiere die Lücke

## Wiki-Seiten-Format

Jede Wiki-Seite folgt diesem Format:

```markdown
# Titel der Seite

> Kurzbeschreibung in einem Satz
> Letzte Aktualisierung: YYYY-MM-DD

## Inhalt

[Strukturierter Inhalt der Seite]

## Verwandte Seiten

- [[kategorie/verwandte-seite]]
- [[decisions/relevante-entscheidung]]
```

## Regeln

1. **Compile-first**: Informationen nicht nur beantworten, sondern ins Wiki schreiben
2. **Writeback obligatorisch**: Jede Entscheidung, jedes neue Wissen → zurück ins Wiki
3. **Wiki vor RAG**: Das Wiki direkt lesen, keine Vector-DB nötig bei <100 Dokumenten
4. **Obsidian-kompatibel**: Wiki-Links mit [[doppelten Klammern]], kein proprietäres Format
5. **Log ist append-only**: Einträge in log.md werden nur hinzugefügt, nie gelöscht
6. **Index ist aktuell**: Jede neue Seite muss in index.md eingetragen werden
7. **Entscheidungen sind permanent**: decisions/ Einträge werden nicht gelöscht, nur mit "Superseded by" markiert
8. **Human Review**: Grössere Strukturänderungen am Wiki erst nach Rückfrage mit dem Nutzer

## Automatisches Writeback

Wenn du in einer normalen Conversation (ohne explizites Wiki-Kommando) merkst, dass relevantes Wissen entsteht, schlage proaktiv vor: "Soll ich das ins Wiki schreiben?" — Beispiele:
- Eine Entscheidung über Unterrichtsmethoden wird getroffen
- Ein neues Tool wird evaluiert und gewählt
- Ein Workshop-Konzept wird entwickelt
- Ein Workflow wird erstellt oder verändert

## Kategorien-Leitfaden

| Kategorie | Gehört hierhin | Gehört NICHT hierhin |
|-----------|---------------|---------------------|
| schule/ | Lehrplan, Fächer, Methoden, SuS, Bewertung, Schulleitung | Persönliche To-Dos |
| content/ | Workshops, Instagram, Newsletter, Best Practices | Rohdaten von Quellen |
| system/ | KI-OS Architektur, Tools, Skills, Workflows | Fachinhaltliches Wissen |
| decisions/ | Architekturentscheidungen, Strategiewahl | Tagesgeschäft |
| sources/ | Zusammenfassungen externer Quellen | Originaldokumente (→ raw/) |
