---
name: content-instagram-carousel
description: >
  Generiert vollständig swipeable Instagram-Carousels als self-contained HTML (4:5-Format, 7 Slides,
  IG-Vorschau-Frame, export-ready). Verwende diesen Skill IMMER wenn der Nutzer ein Instagram-Carousel,
  IG-Slides, eine Slideshow für Social Media oder ein visuelles Posting-Format erstellen möchte — auch
  wenn er nur sagt "mach mir ein Carousel zu X", "erstelle Slides für Y" oder "bereite das für Instagram
  auf". Ebenfalls triggern bei: "Carousel generieren", "IG-Post", "Slides bauen", "Instagram-Beitrag",
  "Swipe-Post", "Social-Media-Slides". Dieser Skill erzeugt das vollständige HTML-Carousel inkl.
  Swipe-Logik, Fortschrittsbalken, IG-Vorschau, Logo-Corner, @handle-Footer und
  thematische Hintergrundbilder (semi-transparent, farblich integriert via mix-blend-mode).
---

# Instagram Carousel Generator

Erstellt professionelle, export-ready Instagram-Carousels als self-contained HTML. Jeder Slide
exportierbar als 1080×1350px PNG. Enthält IG-Frame-Vorschau, Swipe-Interaktion, Logo in der
Ecke und Handle-Footer auf jedem Slide.

---

## Pflichtregeln (IMMER einhalten, ohne Ausnahme)

### 1. Farben: Claude wählt immer selbst
Nutzer muss KEINE Farbe angeben. Claude wählt eigenständig passend zu Thema und Tonalität.
Wenn ein Preset existiert → Preset-Farben verwenden.
Bei neuem Thema → selbst wählen und kurz nennen (z.B. "Ich nutze Grün für diesen Bildungs-Content").
→ Farbwahl-Anleitung: `references/presets.md`, Abschnitt "Farbwahl-Anleitung"

### 2. Handle
Frage den Nutzer nach dem gewünschten Instagram-Handle. Im Beispielcode steht `@handle` als Platzhalter — ersetze ihn im finalen Carousel durch den tatsächlichen Handle.
→ Preset-Details: `references/presets.md`

### 3. Footer @handle auf JEDEM Slide
```html
<!-- Hell: -->
<div style="position:absolute;bottom:28px;left:0;right:0;text-align:center;z-index:8;
font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;
color:rgba(0,0,0,0.35)">@handle</div>

<!-- Dunkel/Gradient: -->
<div style="position:absolute;bottom:28px;left:0;right:0;text-align:center;z-index:8;
font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;
color:rgba(255,255,255,0.35)">@handle</div>
```

### 4. Logo in der oberen rechten Ecke — auf JEDEM Slide
36×36px, border-radius 8px, box-shadow. Base64 aus `references/presets.md` laden.
```html
<div style="position:absolute;top:14px;right:14px;z-index:20;width:36px;height:36px;
border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.18)">
  <img src="data:image/jpeg;base64,{LOGO_B64_AUS_PRESETS_MD}"
       style="width:100%;height:100%;object-fit:cover" alt="Logo">
</div>
```
Auf dem CTA-Slide (letzter): zusätzlich Logo-Lockup gross im Zentrum (48px).

### 5. Thematische Hintergrundbilder — wenn möglich auf jedem Slide

**Optional, aber immer anstreben.** Für jeden Slide ein passendes Bild via `image_search` suchen
und als semi-transparente, farblich integrierte Textur einsetzen — so dass die Slide-Farbe
vollständig erhalten bleibt, aber das Bild Tiefe und Kontext gibt.

#### Technik: mix-blend-mode + opacity

```html
<!-- Slide-Hintergrundbild — IMMER vor dem Content-Layer platzieren -->
<img src="{BILD_URL}"
     style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
     opacity:0.10;
     mix-blend-mode:{BLEND_MODE};
     pointer-events:none;z-index:1">
```

**Blend-Mode-Tabelle nach Slide-Hintergrund:**

| Hintergrund | mix-blend-mode | opacity | Wirkung |
|-------------|---------------|---------|---------|
| LIGHT_BG (hell) | `multiply` | 0.08–0.14 | Bild tönt sich in Slide-Farbe ein, Weisses verschwindet |
| DARK_BG (dunkel) | `screen` | 0.07–0.12 | Bild leuchtet subtil aus dem Dunkel, Schwarzes verschwindet |
| Gradient | `overlay` | 0.08–0.12 | Bild fügt sich in den Farbverlauf ein |

**Wichtig:**
- Immer **vor** dem Content-`<div>` platzieren (z-index:1, Content z-index:2+)
- Kein eigener Hintergrund auf dem `<img>`-Element — nur das Bild, transparent eingeblendet
- Das Logo-Corner-`<div>` hat z-index:20 → bleibt immer sichtbar
- `pointer-events:none` — Bild reagiert nicht auf Maus/Touch

#### Suchstrategie (image_search)

Pro Slide ein thematisch passendes Bild suchen — bevorzugt auf weissem oder neutralem Hintergrund
(Icons, Illustrationen, Diagramme) da diese mit `multiply`/`screen` am besten verschwinden:

| Slide-Typ | Suchbegriffe (Beispiele) |
|-----------|--------------------------|
| Hero | `"{thema} illustration minimal"`, `"{thema} icon flat white background"` |
| Problem | `"frustration digital technology flat"`, `"{thema} problem concept"` |
| Lösung / Gradient | `"{thema} solution glowing"`, `"technology abstract circuit"` |
| Features | `"features checklist minimal illustration"`, `"{tool} interface screenshot"` |
| Details / Specs | `"data analysis chart minimal"`, `"technical diagram {thema}"` |
| How-to / Steps | `"step by step process illustration"`, `"workflow arrows flat"` |
| CTA | `"{thema} success celebration"`, `"digital future abstract"` |

#### Beispiel: Vollständige Slide-Struktur mit Bild

```html
<div style="width:420px;height:525px;flex-shrink:0;position:relative;
overflow:hidden;background:{LIGHT_BG}">

  <!-- [0] Hintergrundbild (optional, wenn verfügbar) -->
  <img src="{BILD_URL}"
       style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;
       opacity:0.10;mix-blend-mode:multiply;pointer-events:none;z-index:1">

  <!-- [1] Logo Corner -->
  <div style="position:absolute;top:14px;right:14px;z-index:20; ..."> ... </div>

  <!-- [2] Content -->
  <div style="position:absolute;inset:0;display:flex;flex-direction:column;
  justify-content:flex-end;padding:0 36px 52px;z-index:2"> ... </div>

  <!-- [3] Footer Handle -->
  <div style="position:absolute;bottom:28px; ... z-index:8"> ... </div>

  <!-- [4] Fortschrittsbalken -->
  <div style="position:absolute;bottom:0; ... z-index:10"> ... </div>

  <!-- [5] Swipe-Pfeil -->
  <div style="position:absolute;right:0; ... z-index:9"> ... </div>
</div>
```

#### Fallback wenn kein passendes Bild gefunden
Kein Bild erzwingen. Slide ohne Hintergrundbild ist vollständig korrekt — die Pflichtregeln
1–4 sind erfüllt. Lieber kein Bild als ein unpassendes oder ablenkedes.

---

## Markendetails-Check

| Feld | Standard | Übersteuern möglich? |
|------|----------|---------------------|
| Handle | @handle | Ja |
| Farbe | Claude wählt selbst | Ja, optional |
| Logo | Sandwich-Logo (Preset) | Ja |
| Font | Plus Jakarta Sans | Ja |
| Tonalität | freundlich, bildungsorientiert | Ja |

Einzige Pflichtangabe vom Nutzer: **Thema / Inhalt des Carousels.**

---

## Schritt 2: Farbsystem

6-Token-Palette aus Primärfarbe ableiten:

```
BRAND_PRIMARY  = {Claude's Wahl}
BRAND_LIGHT    = {Primary +20% heller}
BRAND_DARK     = {Primary -30% dunkler}
LIGHT_BG       = {getöntes Off-White, nie reines #fff}
LIGHT_BORDER   = {etwas dunkler als LIGHT_BG}
DARK_BG        = {Nahezu-Schwarz mit Brand-Tint}
GRADIENT       = linear-gradient(165deg, DARK 0%, PRIMARY 50%, LIGHT 100%)
```

---

## Schritt 3: Typografie

| Stil | Heading | Body |
|------|---------|------|
| Modern / Clean (Standard DP) | Plus Jakarta Sans 700 | Plus Jakarta Sans 400 |
| Tech / Scharf | Space Grotesk 700 | Space Grotesk 400 |
| Editorial | Playfair Display | DM Sans |
| Warm | Lora | Nunito Sans |

Grössen: Heading 28–34px/700/ls-0.4/lh1.1 · Body 14px/400/lh1.55 · Tag 10px/600/ls2px/CAPS
Footer-Handle: 10px/600/ls1.5px/opacity 0.35 · Corner-Logo: 36×36px/rx8

---

## Slide-Architektur

Format: **4:5** (420×525px), self-contained, hell/dunkel abwechselnd.

### Checkliste: Elemente auf jedem Slide

| # | Element | Position | Grösse |
|---|---------|---------|--------|
| ✅ | **Logo Corner** | top:14, right:14 | 36×36px |
| ✅ | **Footer @handle** | bottom:28, zentriert | 10px |
| ✅ | **Fortschrittsbalken** | absolute bottom | 3px Track |
| ✅ | **Swipe-Pfeil** | absolute right | 48px (ausser Slide 7) |
| ✅ | **Tag/Label** | über Heading | 10px CAPS |

#### Fortschrittsbalken
Füllbreite: `((n+1) / total) * 100%`
Hell: Track `rgba(0,0,0,0.08)`, Fill `BRAND_PRIMARY`, Label `rgba(0,0,0,0.3)`
Dunkel: Track `rgba(255,255,255,0.12)`, Fill `#fff`, Label `rgba(255,255,255,0.4)`

```html
<div style="position:absolute;bottom:0;left:0;right:0;padding:6px 28px 16px;z-index:10;
display:flex;align-items:center;gap:10px">
  <div style="flex:1;height:3px;background:{TRACK};border-radius:2px;overflow:hidden">
    <div style="height:100%;width:{PCT}%;background:{FILL};border-radius:2px"></div>
  </div>
  <span style="font-size:11px;color:{LABEL_COLOR};font-weight:500">{N}/{T}</span>
</div>
```

---

## Standard-Slide-Sequenz (7 Slides)

| # | Typ | BG | Zweck |
|---|-----|----|-------|
| 1 | Hero | LIGHT_BG | Hook, Logo-Lockup gross, Wasserzeichen |
| 2 | Problem | DARK_BG | Schmerzpunkt, Strikethrough-Pills |
| 3 | Lösung | Gradient | Antwort, Quote-Box |
| 4 | Features | LIGHT_BG | Feature-Liste mit Icons |
| 5 | Details | DARK_BG | Specs, Differenzierung |
| 6 | How-to | LIGHT_BG | Nummerierte Schritte |
| 7 | CTA | Gradient | Logo gross, CTA-Button. Kein Pfeil. Bar 100%. |

Content-Padding: `0 36px 52px` (Bottom frei für Fortschrittsbalken + Footer).
Hero/CTA: `justify-content: center`. Content-Slides: `justify-content: flex-end`.

---

## Grundgerüst eines Slides

```html
<div style="width:420px;height:525px;flex-shrink:0;position:relative;overflow:hidden;
background:{BG}">

  <!-- PFLICHT 1: Logo Corner -->
  <div style="position:absolute;top:14px;right:14px;z-index:20;width:36px;height:36px;
  border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.18)">
    <img src="data:image/jpeg;base64,{LOGO_B64}" style="width:100%;height:100%;
    object-fit:cover" alt="DP">
  </div>

  <!-- Content -->
  <div style="position:absolute;inset:0;display:flex;flex-direction:column;
  justify-content:flex-end;padding:0 36px 52px">
    <span style="display:inline-block;font-size:10px;font-weight:600;letter-spacing:2px;
    text-transform:uppercase;color:{TAG_COLOR};margin-bottom:16px">{TAG}</span>
    <h2 style="font-size:30px;font-weight:700;line-height:1.1;letter-spacing:-0.4px;
    color:{H_COLOR}">{Titel}</h2>
    <p style="font-size:14px;line-height:1.55;margin-top:10px;color:{B_COLOR}">{Body}</p>
  </div>

  <!-- PFLICHT 2: Footer Handle -->
  <div style="position:absolute;bottom:28px;left:0;right:0;text-align:center;z-index:8;
  font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;
  color:rgba(0,0,0,0.35)">@handle</div>

  <!-- PFLICHT 3: Fortschrittsbalken -->
  <div style="position:absolute;bottom:0;left:0;right:0;padding:6px 28px 16px;z-index:10;
  display:flex;align-items:center;gap:10px">
    <div style="flex:1;height:3px;background:rgba(0,0,0,0.08);border-radius:2px;overflow:hidden">
      <div style="height:100%;width:{PCT}%;background:{BRAND_PRIMARY};border-radius:2px"></div>
    </div>
    <span style="font-size:11px;color:rgba(0,0,0,0.3);font-weight:500">{N}/{T}</span>
  </div>

  <!-- PFLICHT 4: Swipe-Pfeil (weglassen auf Slide 7) -->
  <div style="position:absolute;right:0;top:0;bottom:0;width:48px;z-index:9;display:flex;
  align-items:center;justify-content:center;
  background:linear-gradient(to right,transparent,rgba(0,0,0,0.05))">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke="rgba(0,0,0,0.22)" stroke-width="2.5"
      stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>

</div>
```

---

## Reusable Components (Kurzreferenz)

Feature-Zeile, Steps, Quote-Box, Pills, CTA-Button, Vergleichsgrid → `references/components.md`

Logo Base64 + Farbwahl-Tabelle + Preset-Details → `references/presets.md`

Playwright-Export 1080×1350px → `references/export.md`

---

## Output-Workflow

1. Recherche (bei News): web_search + web_fetch
2. Farbe wählen (selbst, kurz nennen)
3. `references/presets.md` öffnen → Logo-Base64 für Corner laden
4. **Bilder suchen:** Pro Slide ein passendes Bild via `image_search` suchen (bevorzugt
   Illustrationen/Icons auf weissem Hintergrund — diese integrieren sich am besten)
5. HTML-Carousel als Artifact generieren — alle Pflicht-Elemente + Bilder mit mix-blend-mode
6. Vorschau im Chat — User swipet
7. Gezielt einzelne Slides fixen, nicht neu bauen
8. PNG-Export anbieten → `references/export.md`

---

## IG-Frame + Swipe-JS

Frame: 420px breit (fix), Header + Viewport 420×525 + Dots + Actions + Caption.

```javascript
const track = document.getElementById('ct');
const TOTAL = 7;
let cur = 0, startX = 0, isDragging = false;
function goTo(n) {
  cur = Math.max(0, Math.min(TOTAL-1, n));
  track.style.transform = `translateX(${-cur*420}px)`;
  document.querySelectorAll('.dot').forEach((d,i) => d.classList.toggle('active', i===cur));
}
const vp = document.getElementById('cv');
vp.addEventListener('mousedown', e => { startX=e.clientX; isDragging=true; });
vp.addEventListener('touchstart', e => { startX=e.touches[0].clientX; isDragging=true; }, {passive:true});
window.addEventListener('mouseup', e => {
  if (!isDragging) return; isDragging=false;
  const dx=e.clientX-startX;
  if (dx<-40) goTo(cur+1); else if (dx>40) goTo(cur-1);
});
window.addEventListener('touchend', e => {
  if (!isDragging) return; isDragging=false;
  const dx=e.changedTouches[0].clientX-startX;
  if (dx<-40) goTo(cur+1); else if (dx>40) goTo(cur-1);
});
```
