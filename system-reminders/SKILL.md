---
name: system-reminders
description: >
  Verwalte Apple Erinnerungen über den Browser (icloud.com/reminders). Dieser Skill ermöglicht das Lesen, Erstellen und Abhaken von Erinnerungen in Apple Reminders über die iCloud-Weboberfläche. Verwende diesen Skill immer, wenn der Nutzer nach Erinnerungen fragt, Erinnerungen erstellen, anzeigen, abhaken oder verwalten möchte. Trigger auch bei: "Erinnerung", "Reminder", "erinnere mich", "ToDo", "Aufgabe erstellen", "was steht an", "zeig mir meine Aufgaben", "meine Liste", "iCloud Erinnerungen", "Apple Reminders". Dieser Skill benötigt Claude in Chrome (Browser-Zugriff).
---

# Apple Reminders via iCloud – Browser-Skill

Dieser Skill steuert die iCloud Reminders Web-App über den Browser. Der Nutzer muss sich selbst bei iCloud anmelden (Passwörter dürfen nicht eingegeben werden). Danach kann Claude Erinnerungen lesen, erstellen und als erledigt markieren.

## Voraussetzungen

- Claude in Chrome muss aktiv und verbunden sein
- Der Nutzer muss sich selbst bei iCloud einloggen (inkl. 2FA falls nötig)
- Die iCloud-Oberfläche ist auf **Deutsch** eingestellt

## Ablauf

### Schritt 1: Browser-Tab vorbereiten

1. Rufe `tabs_context_mcp` auf, um bestehende Tabs zu prüfen
2. Erstelle einen neuen Tab mit `tabs_create_mcp`
3. Navigiere zu `https://www.icloud.com/reminders/`

### Schritt 2: Login abwarten

Nach der Navigation zu iCloud prüfe den Seitenzustand:

1. Mache einen Screenshot (`computer` tool mit `action: screenshot`)
2. Falls eine Login-Seite sichtbar ist:
   - Informiere den Nutzer: **"Bitte melde dich jetzt bei iCloud an. Sag mir Bescheid, wenn du eingeloggt bist."**
   - **WICHTIG**: Gib niemals Passwörter ein. Der Nutzer muss sich selbst anmelden.
   - Warte auf die Bestätigung des Nutzers
3. Falls die Reminders-App bereits geladen ist, fahre direkt fort

### Schritt 3: Erinnerungen-Interface erkennen

Nach dem Login mache einen Screenshot und orientiere dich:

Die iCloud Reminders Web-App hat typischerweise folgende Struktur:
- **Linke Seitenleiste**: Listen (z.B. "Erinnerungen", "Einkaufen", "Schule", etc.)
- **Hauptbereich**: Die Erinnerungen der ausgewählten Liste
- **Toolbar oben**: Buttons zum Erstellen neuer Erinnerungen

Verwende `read_page` um die Seitenstruktur zu erfassen und interaktive Elemente zu identifizieren.

## Aktionen

### A) Erinnerungen auflisten / lesen

1. Mache einen Screenshot um den aktuellen Zustand zu sehen
2. Verwende `read_page` um alle sichtbaren Erinnerungen und Listen zu erfassen
3. Falls der Nutzer eine bestimmte Liste sehen will:
   - Verwende `find` um die gewünschte Liste in der Seitenleiste zu finden
   - Klicke auf die Liste
   - Warte kurz (1-2 Sekunden) bis die Erinnerungen geladen sind
   - Mache einen neuen Screenshot
   - Verwende `read_page` um die Erinnerungen auszulesen
4. Fasse die Erinnerungen übersichtlich für den Nutzer zusammen

**Tipps zum Auslesen:**
- `read_page` mit `filter: "all"` gibt dir den vollständigen Seiteninhalt
- Erinnerungen sind typischerweise als Liste oder Checkboxen dargestellt
- Achte auf Fälligkeitsdaten, Prioritäten und Notizen

### B) Neue Erinnerung erstellen

1. Falls nötig, navigiere zur richtigen Liste (siehe Auflisten)
2. Suche den "Hinzufügen"-Button oder das "+"-Symbol:
   - Verwende `find` mit query "add" oder "hinzufügen" oder "neue Erinnerung"
   - Alternativ: Suche nach einem "+"-Button in der Toolbar
3. Klicke auf den Button
4. Warte kurz bis das Eingabefeld erscheint
5. Tippe den Text der Erinnerung mit `computer` tool (`action: type`)
6. Falls ein Datum/Uhrzeit gewünscht ist:
   - Suche nach dem Datums-/Uhrzeitfeld
   - Setze das gewünschte Datum
7. Bestätige mit Enter oder dem Speichern-Button
8. Mache einen Screenshot zur Bestätigung

**Wichtig**: Frage den Nutzer VOR dem Erstellen um Bestätigung:
- "Soll ich folgende Erinnerung erstellen: '[Text]' in der Liste '[Liste]'?"
- Erst nach Bestätigung die Erinnerung tatsächlich erstellen

### C) Erinnerung als erledigt markieren

1. Finde die Erinnerung in der aktuellen Ansicht:
   - Verwende `find` oder `read_page` um die Erinnerung zu lokalisieren
2. Jede Erinnerung hat eine Checkbox (Kreis) links vom Text
3. Klicke auf die Checkbox um die Erinnerung als erledigt zu markieren
4. Mache einen Screenshot zur Bestätigung

**Wichtig**: Frage den Nutzer VOR dem Abhaken um Bestätigung:
- "Soll ich '[Erinnerungstext]' als erledigt markieren?"

## Fehlerbehandlung

- **Seite lädt nicht**: Warte 3-5 Sekunden und mache einen neuen Screenshot. Falls die Seite immer noch nicht geladen ist, informiere den Nutzer.
- **Element nicht gefunden**: Mache einen Screenshot und verwende `read_page` um die aktuelle Seitenstruktur zu analysieren. Die Web-App kann sich je nach Bildschirmgrösse unterschiedlich verhalten.
- **Session abgelaufen**: Falls die Login-Seite erneut erscheint, bitte den Nutzer sich erneut anzumelden.
- **Langsames Laden**: iCloud-Web-Apps können langsam sein. Warte nach jeder Aktion 2-3 Sekunden bevor du den nächsten Screenshot machst.

## Allgemeine Hinweise

- Mache nach jeder wichtigen Aktion einen Screenshot, um den Erfolg zu verifizieren
- Die iCloud-Weboberfläche kann sich ändern – verlasse dich auf `read_page` und `find` statt auf feste Koordinaten
- Verwende `find` mit beschreibenden Queries statt exakten CSS-Selektoren
- Bei mehreren Listen: Frage immer nach, in welcher Liste die Erinnerung erstellt werden soll, falls nicht angegeben
- Halte den Nutzer auf dem Laufenden – teile Screenshots und beschreibe was du siehst
