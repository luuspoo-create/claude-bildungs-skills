---
name: schule-lehrmittel
description: >
  Erstelle professionelle, lehrmittelgerechte Unterrichtsmaterialien als PDF: Arbeitsblätter,
  Dossiers, Prüfungen, Bewertungsraster, Lehrmittelseiten und Informationsblätter für die
  Sekundarstufe 1. Verwende diesen Skill immer wenn der Nutzer ein Arbeitsblatt, Dossier,
  eine Prüfung, ein Bewertungsraster, eine Lernzielkontrolle, ein Informationsblatt oder
  eine Lehrmittelseite erstellen möchte – auch wenn er nur sagt "mach mir etwas zum Thema X"
  oder "erstelle Aufgaben zu Y". Dieser Skill erzeugt druckfertige, typografisch hochwertige
  A4-PDFs mit Farbakzenten je nach Schulfach, Aufgabennummern, Lösungsfeldern, Infoboxen
  und allem was ein professionelles Schweizer Lehrmittel auszeichnet. Trigger auch bei:
  "Aufgabenblatt", "Übungsblatt", "Lernblatt", "Test", "Quiz", "Lernzielkontrolle", "LZK".
---

# Skill: Lehrmittel-Generator

Dieser Skill erzeugt **druckfertige, typografisch professionelle A4-PDFs** für den Unterricht
auf Sekundarstufe 1 (Schweiz). Die Materialien sehen aus wie echte Verlagsprodukte – klar,
strukturiert, ansprechend für Schüler:innen.

---

## 1. Vorgehensweise

### Schritt 1: Inhalte und Typ klären

Ermittle aus dem Nutzer-Input:
- **Dokumenttyp** (→ Abschnitt 2)
- **Fach** (→ Farbschema in Abschnitt 3)
- **Klasse** (8. oder 9. Klasse, oder gemischt)
- **Lernziel** / Thema
- **Differenzierung** (Basis / Erweitert / Beide) falls gewünscht

Wenn unklar: kurz nachfragen, aber bevorzuge eigenständige sinnvolle Annahmen.

### Schritt 2: HTML generieren

Erstelle ein vollständiges HTML-Dokument nach den Vorgaben in Abschnitt 4.
Speichere es als `/home/claude/lehrmittel.html`.

### Schritt 3: PDF erzeugen via WeasyPrint

```bash
pip install weasyprint --break-system-packages -q
python3 -c "
from weasyprint import HTML
HTML(filename='/home/claude/lehrmittel.html').write_pdf('/mnt/user-data/outputs/lehrmittel.pdf')
print('PDF erstellt.')
"
```

Falls WeasyPrint fehlschlägt, Fallback auf `wkhtmltopdf`:
```bash
wkhtmltopdf --page-size A4 --margin-top 20mm --margin-bottom 20mm \
  --margin-left 20mm --margin-right 20mm \
  /home/claude/lehrmittel.html /mnt/user-data/outputs/lehrmittel.pdf
```

### Schritt 4: Datei übergeben

Nutze `present_files` mit dem PDF-Pfad.

---

## 2. Dokumenttypen

| Typ | Beschreibung | Besonderheiten |
|-----|-------------|----------------|
| **Arbeitsblatt** | 1–2 Seiten, Aufgaben zum Thema | Aufgabennummern, Lösungsfelder |
| **Dossier** | 3–8 Seiten, mehrteiliges Thema | Inhaltsverzeichnis, Kapitelstruktur |
| **Prüfung / LZK** | 1–3 Seiten | Punkteangaben, Namensfeld, Zeit |
| **Bewertungsraster** | 1 Seite | Kriterientabelle, Punkteskala |
| **Lehrmittelseite** | 1 Seite Theorie + Aufgaben | Infobox prominent, Merkkasten |
| **Informationsblatt** | 1 Seite reine Theorie | Kein Lösungsfeld, Tabellen/Grafiken |

---

## 3. Fach-Farbschemata

| Fach | Primärfarbe | Akzentfarbe | Hex |
|------|------------|-------------|-----|
| Biologie | Grün | Hellgrün | `#2d7a3a` / `#e8f5e9` |
| Chemie | Orange | Hellorange | `#d4500a` / `#fff3e0` |
| Mathematik | Blau | Hellblau | `#1565c0` / `#e3f2fd` |
| Sport | Rot | Hellrot | `#c0392b` / `#fdecea` |
| Berufswahl | Lila | Helllila | `#6a1b9a` / `#f3e5f5` |
| Allgemein | Grau-Blau | Hellgrau | `#37474f` / `#eceff1` |

---

## 4. HTML-Template (vollständig)

Erstelle immer ein **vollständiges, eigenständiges HTML** nach diesem Muster.
Passe `PRIMARY`, `LIGHT`, `FACH`, Klasse und Inhalte an.

```html
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<style>
  /* ─── VARIABLEN ─── */
  :root {
    --primary: #1565c0;      /* Fachfarbe */
    --light:   #e3f2fd;      /* Helle Fachfarbe */
    --text:    #1a1a2e;
    --muted:   #546e7a;
    --border:  #cfd8dc;
    --white:   #ffffff;
    --line-height: 1.55;
  }

  /* ─── SEITE ─── */
  @page {
    size: A4;
    margin: 18mm 20mm 22mm 20mm;
    @bottom-center {
      content: counter(page) " / " counter(pages);
      font-size: 9pt;
      color: var(--muted);
      font-family: 'Segoe UI', Arial, sans-serif;
    }
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    font-size: 10.5pt;
    line-height: var(--line-height);
    color: var(--text);
    background: white;
  }

  /* ─── HEADER ─── */
  .doc-header {
    display: flex;
    align-items: stretch;
    border-bottom: 3px solid var(--primary);
    margin-bottom: 6mm;
    padding-bottom: 4mm;
    gap: 0;
  }
  .doc-header-bar {
    width: 6px;
    background: var(--primary);
    border-radius: 3px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  .doc-header-content { flex: 1; }
  .doc-fach {
    font-size: 8pt;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 1mm;
  }
  .doc-title {
    font-size: 17pt;
    font-weight: 700;
    color: var(--text);
    line-height: 1.15;
    margin-bottom: 1mm;
  }
  .doc-subtitle {
    font-size: 9.5pt;
    color: var(--muted);
  }
  .doc-meta {
    text-align: right;
    font-size: 8.5pt;
    color: var(--muted);
    line-height: 1.7;
    flex-shrink: 0;
    align-self: flex-end;
  }

  /* ─── NAMENSFELD (nur bei Prüfungen) ─── */
  .namensfeld {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4mm;
    margin-bottom: 6mm;
    padding: 4mm 5mm;
    background: var(--light);
    border-radius: 4px;
    border: 1px solid var(--border);
  }
  .namensfeld-item label {
    display: block;
    font-size: 7.5pt;
    font-weight: 600;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin-bottom: 1mm;
  }
  .namensfeld-item .line {
    border-bottom: 1.5px solid var(--primary);
    height: 6mm;
  }

  /* ─── AUFGABEN ─── */
  .aufgabe {
    margin-bottom: 7mm;
    page-break-inside: avoid;
  }
  .aufgabe-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 2mm;
  }
  .aufgabe-nr {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    font-size: 9pt;
    font-weight: 700;
    flex-shrink: 0;
  }
  .aufgabe-titel {
    font-size: 11pt;
    font-weight: 600;
    color: var(--text);
    flex: 1;
  }
  .aufgabe-punkte {
    font-size: 8pt;
    font-weight: 600;
    color: var(--primary);
    background: var(--light);
    padding: 1px 6px;
    border-radius: 10px;
    white-space: nowrap;
  }
  .aufgabe-text {
    margin-left: 30px;
    margin-bottom: 2mm;
    font-size: 10.5pt;
  }

  /* ─── TEILAUFGABEN ─── */
  .teilaufgabe {
    margin-left: 30px;
    margin-bottom: 3mm;
  }
  .teilaufgabe-label {
    font-size: 9.5pt;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 1mm;
  }

  /* ─── LÖSUNGSFELDER ─── */
  .loesungsfeld {
    margin-left: 30px;
    border: 1.5px solid var(--border);
    border-radius: 4px;
    padding: 2mm 3mm;
    margin-bottom: 3mm;
    background: #fafafa;
  }
  .loesungsfeld-lines {
    margin-left: 30px;
    margin-bottom: 3mm;
  }
  .loesungsfeld-lines .line {
    border-bottom: 1px solid var(--border);
    height: 7mm;
    margin-bottom: 1mm;
  }
  .loesungsfeld-grid {
    margin-left: 30px;
    margin-bottom: 3mm;
    border: 1.5px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
  }
  .loesungsfeld-grid table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9.5pt;
  }
  .loesungsfeld-grid th {
    background: var(--primary);
    color: white;
    padding: 2mm 3mm;
    text-align: left;
    font-weight: 600;
    font-size: 9pt;
  }
  .loesungsfeld-grid td {
    border-bottom: 1px solid var(--border);
    padding: 2mm 3mm;
    height: 8mm;
  }
  .loesungsfeld-grid tr:last-child td { border-bottom: none; }
  .loesungsfeld-grid tr:nth-child(even) td { background: #f8f9fa; }

  /* ─── INFOBOX / MERKKASTEN ─── */
  .infobox {
    background: var(--light);
    border-left: 4px solid var(--primary);
    border-radius: 0 6px 6px 0;
    padding: 4mm 5mm;
    margin-bottom: 5mm;
    page-break-inside: avoid;
  }
  .infobox-title {
    font-size: 8.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--primary);
    margin-bottom: 2mm;
  }
  .infobox p { font-size: 10pt; margin-bottom: 2mm; }
  .infobox p:last-child { margin-bottom: 0; }

  .merkkasten {
    background: #fffde7;
    border: 2px solid #f9a825;
    border-radius: 6px;
    padding: 4mm 5mm;
    margin-bottom: 5mm;
    page-break-inside: avoid;
  }
  .merkkasten-title {
    font-size: 8.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #e65100;
    margin-bottom: 2mm;
  }

  /* ─── DIFFERENZIERUNG ─── */
  .basis-label, .erweitert-label {
    display: inline-block;
    font-size: 7.5pt;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 1px 7px;
    border-radius: 10px;
    margin-bottom: 2mm;
    text-transform: uppercase;
  }
  .basis-label {
    background: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #a5d6a7;
  }
  .erweitert-label {
    background: #fff3e0;
    color: #e65100;
    border: 1px solid #ffcc80;
  }

  /* ─── BEWERTUNGSRASTER ─── */
  .raster-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9.5pt;
    margin-bottom: 5mm;
    page-break-inside: avoid;
  }
  .raster-table th {
    background: var(--primary);
    color: white;
    padding: 2.5mm 3mm;
    text-align: left;
    font-weight: 600;
    border-right: 1px solid rgba(255,255,255,0.3);
  }
  .raster-table th:last-child { border-right: none; }
  .raster-table td {
    padding: 2.5mm 3mm;
    border-bottom: 1px solid var(--border);
    border-right: 1px solid var(--border);
    vertical-align: top;
  }
  .raster-table td:last-child { border-right: none; }
  .raster-table tr:nth-child(even) td { background: #f5f5f5; }
  .raster-table .total-row td {
    background: var(--light);
    font-weight: 700;
    border-top: 2px solid var(--primary);
  }
  .note-skala {
    display: flex;
    gap: 2mm;
    flex-wrap: wrap;
    margin-bottom: 4mm;
  }
  .note-badge {
    padding: 1.5mm 4mm;
    border-radius: 4px;
    font-size: 9pt;
    font-weight: 600;
    border: 1.5px solid var(--border);
    color: var(--muted);
    text-align: center;
    min-width: 20mm;
  }
  .note-badge.highlight {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
  }

  /* ─── TRENNLINIE ─── */
  .divider {
    border: none;
    border-top: 1.5px solid var(--border);
    margin: 5mm 0;
  }

  /* ─── KAPITEL (Dossier) ─── */
  .kapitel {
    page-break-before: always;
    margin-bottom: 5mm;
  }
  .kapitel:first-of-type { page-break-before: avoid; }
  .kapitel-header {
    background: var(--primary);
    color: white;
    padding: 3mm 5mm;
    border-radius: 4px;
    margin-bottom: 5mm;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .kapitel-nr {
    font-size: 8.5pt;
    font-weight: 700;
    opacity: 0.8;
    letter-spacing: 0.08em;
  }
  .kapitel-titel {
    font-size: 12pt;
    font-weight: 700;
  }

  /* ─── TIPPS ─── */
  .tipp {
    background: #f3f3f3;
    border-radius: 4px;
    padding: 2mm 4mm;
    font-size: 9pt;
    color: var(--muted);
    margin-left: 30px;
    margin-bottom: 3mm;
  }
  .tipp::before { content: "💡 "; }

  /* ─── FOOTER ─── */
  .doc-footer {
    margin-top: 8mm;
    padding-top: 3mm;
    border-top: 1px solid var(--border);
    font-size: 8pt;
    color: var(--muted);
    display: flex;
    justify-content: space-between;
  }

  /* ─── ALLGEMEINES ─── */
  ul, ol { margin-left: 18px; margin-bottom: 2mm; }
  li { margin-bottom: 1mm; }
  p { margin-bottom: 2mm; }
  strong { font-weight: 600; color: var(--text); }
  em { font-style: italic; }
</style>
</head>
<body>

<!-- ─── HEADER ─── -->
<div class="doc-header">
  <div class="doc-header-bar"></div>
  <div class="doc-header-content">
    <div class="doc-fach">Biologie · 8. Klasse</div>
    <div class="doc-title">Zellen und Organellen</div>
    <div class="doc-subtitle">Arbeitsblatt · Grundlagen der Zellbiologie</div>
  </div>
  <div class="doc-meta">
    Datum: ________________<br>
    Zeit: 45 Min.<br>
    Punkte: ____ / 24
  </div>
</div>

<!-- ─── INFOBOX ─── -->
<div class="infobox">
  <div class="infobox-title">📖 Theorie-Überblick</div>
  <p>Alle Lebewesen bestehen aus <strong>Zellen</strong>. Man unterscheidet <strong>Prokaryoten</strong>
  (ohne Zellkern, z. B. Bakterien) und <strong>Eukaryoten</strong> (mit Zellkern, z. B. Pflanzen,
  Tiere, Pilze).</p>
</div>

<!-- ─── AUFGABE 1 ─── -->
<div class="aufgabe">
  <div class="aufgabe-header">
    <div class="aufgabe-nr">1</div>
    <div class="aufgabe-titel">Beschriften und ordnen</div>
    <div class="aufgabe-punkte">8 Punkte</div>
  </div>
  <div class="aufgabe-text">
    Benenne die Organellen der Pflanzenzelle und ordne sie der richtigen Funktion zu.
  </div>
  <div class="loesungsfeld-grid">
    <table>
      <tr>
        <th style="width:35%">Organell</th>
        <th>Funktion</th>
      </tr>
      <tr><td></td><td></td></tr>
      <tr><td></td><td></td></tr>
      <tr><td></td><td></td></tr>
    </table>
  </div>
</div>

<!-- ─── AUFGABE 2 ─── -->
<div class="aufgabe">
  <div class="aufgabe-header">
    <div class="aufgabe-nr">2</div>
    <div class="aufgabe-titel">Kurzantworten</div>
    <div class="aufgabe-punkte">6 Punkte</div>
  </div>

  <div class="teilaufgabe">
    <div class="teilaufgabe-label">a) Was ist der Unterschied zwischen tierischen und pflanzlichen Zellen?</div>
    <div class="loesungsfeld-lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>

  <div class="teilaufgabe">
    <div class="teilaufgabe-label">b) Welche Aufgabe hat das Mitochondrium?</div>
    <div class="loesungsfeld-lines">
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</div>

<!-- ─── MERKKASTEN ─── -->
<div class="merkkasten">
  <div class="merkkasten-title">⭐ Merke</div>
  <p>Die Zellmembran umgibt <em>alle</em> Zellen und regelt den Stoffaustausch.
  Pflanzenzellen besitzen zusätzlich eine <strong>Zellwand</strong> aus Zellulose.</p>
</div>

<!-- ─── FOOTER ─── -->
<div class="doc-footer">
  <span>Sekundarstufe 1</span>
  <span>Biologie 8. Klasse</span>
</div>

</body>
</html>
```

---

## 5. Komponenten-Referenz

### Lösungsfeld (Freies Schreiben)
```html
<div class="loesungsfeld" style="min-height: 25mm;"></div>
```

### Lösungslinien (N Linien)
```html
<div class="loesungsfeld-lines">
  <div class="line"></div>  <!-- je Linie wiederholen -->
</div>
```

### Tabelle mit Lösungsfeldern
```html
<div class="loesungsfeld-grid">
  <table>
    <tr><th>Spalte 1</th><th>Spalte 2</th></tr>
    <tr><td></td><td></td></tr>
  </table>
</div>
```

### Differenzierungsaufgabe
```html
<div class="aufgabe">
  <div class="aufgabe-header">
    <div class="aufgabe-nr">3</div>
    <div class="aufgabe-titel">Vertiefung</div>
  </div>
  <div class="aufgabe-text">
    <span class="basis-label">Basis</span><br>
    Aufgabe für alle...
  </div>
  <div class="aufgabe-text" style="margin-top:3mm">
    <span class="erweitert-label">Erweitert</span><br>
    Zusatzaufgabe...
  </div>
</div>
```

### Tipp-Feld
```html
<div class="tipp">Hinweis: Schau dir die Abbildung auf Seite 12 im Lehrmittel an.</div>
```

### Kapitel-Header (Dossier)
```html
<div class="kapitel">
  <div class="kapitel-header">
    <span class="kapitel-nr">KAPITEL 1</span>
    <span class="kapitel-titel">Einführung in die Genetik</span>
  </div>
  <!-- Inhalt -->
</div>
```

### Bewertungsraster-Tabelle
```html
<table class="raster-table">
  <tr>
    <th style="width:30%">Kriterium</th>
    <th style="width:45%">Beschreibung</th>
    <th style="width:12%">Max. P.</th>
    <th style="width:13%">Erreichte P.</th>
  </tr>
  <tr>
    <td>Vollständigkeit</td>
    <td>Alle Aufgaben bearbeitet</td>
    <td>4</td>
    <td></td>
  </tr>
  <tr class="total-row">
    <td colspan="2"><strong>TOTAL</strong></td>
    <td><strong>20</strong></td>
    <td></td>
  </tr>
</table>
```

### Notenskala
```html
<div class="note-skala">
  <div class="note-badge">Note 4<br>10–12 P.</div>
  <div class="note-badge highlight">Note 5<br>13–16 P.</div>
  <div class="note-badge">Note 6<br>17–20 P.</div>
</div>
```

---

## 6. Qualitätskriterien

Vor dem PDF-Export prüfen:
- [ ] Fachfarbe korrekt aus Abschnitt 3 gewählt
- [ ] Titel, Fach, Klasse und Datum im Header vorhanden
- [ ] Aufgaben haben Nummern (Kreise), Titel, Punkte
- [ ] Lösungsfelder sind grosszügig dimensioniert (mind. 15–20mm Höhe)
- [ ] Mindestens eine Infobox oder ein Merkkasten vorhanden
- [ ] Footer mit Schulinfo und Fach
- [ ] Seitenumbrüche sinnvoll (page-break-inside: avoid bei Aufgaben)
- [ ] Keine überlappenden Elemente, klarer Weissraum
- [ ] Punkte stimmen numerisch überein

---

## 7. Benennung der Output-Datei

Verwende sprechende Dateinamen:
```
arbeitsblatt_biologie_zellen_kl8.pdf
pruefung_chemie_saeure_basen_kl9.pdf
dossier_mathe_gleichungen.pdf
bewertungsraster_sport_praesentation.pdf
```

---

## 8. Beispiel-Prompts und passende Reaktion

| Prompt | Typ | Farbe |
|--------|-----|-------|
| "Arbeitsblatt zur Fotosynthese, 8. Klasse" | Arbeitsblatt | Biologie-Grün |
| "Prüfung Säuren und Basen mit Punkten" | Prüfung | Chemie-Orange |
| "Bewertungsraster für Präsentation BW" | Bewertungsraster | Berufswahl-Lila |
| "Dossier lineare Funktionen mit Aufgaben" | Dossier | Mathe-Blau |
| "Aufwärm-Quiz Muskeln und Knochen" | Arbeitsblatt | Sport-Rot |
| "Informationsblatt Atmungssystem" | Informationsblatt | Biologie-Grün |
