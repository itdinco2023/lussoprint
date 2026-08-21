
# Handoff: LussoPrint — Landing Page

## Overview
One-page marketing site for **SC LUSSO PRINT SRL**, a print and advertising-materials company in Slobozia, Ialomița, Romania. Sections: header/nav, hero banner with tagline + CTAs, about, services (6 items with photos), contact, footer with legal data.

## About the Design Files
The files in `reference/` are **design references built in HTML** (a prototyping format, not production code). Do not copy the HTML/inline-styles directly into the app. The task is to **recreate this design in Next.js** (React + whatever styling approach the project uses — plain CSS/CSS Modules or Tailwind, your call) using idiomatic Next.js patterns: components, the App Router, `next/image` for images, `next/font` for the Google Fonts below, etc.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy and layout below are final — recreate pixel-close, not just "in the spirit of."

## Target stack
Next.js, deployed on Vercel. No CMS/backend specified — the contact "Trimite un mesaj" link is currently a plain `mailto:` anchor; keep it simple unless the client asks for a real form + email service (e.g. Resend, Formspree) later.

## Screens / Views
Single page, five stacked sections plus a sticky-optional header. All copy is in Romanian — do not translate or rewrite it.

### 1. Header
- Full-width row, `padding: 22px 8vw`, background transparent (page background `#FAF6EE`).
- Left: crest logo (`assets/logo-crest.png`, circular medallion) at 52×52px + wordmark "LUSSO PRINT" in Playfair Display, 600 weight, 26px, color `#241B14`, in a row with 14px gap.
- Right: nav links, 36px gap, 17px font (Cormorant Garamond, the page's body font): **Prima pagină**, **Despre noi** (→ `#despre`), **Servicii** (→ `#servicii`), **Contact** (→ `#contact`). Link color `#6B0F1A`, hover `#C6A15B`.
- Wraps on narrow screens (`flex-wrap: wrap`).

### 2. Hero banner
- Full-bleed image `assets/banner-hero.png` shown **at its native aspect ratio** (`width:100%; height:auto`) — never cropped.
- A dark gradient overlay across the image: `linear-gradient(180deg, rgba(36,10,10,0.1) 0%, rgba(36,10,10,0.7) 100%)`.
- Centered content block (absolute, centered both axes):
  - A glass-like plate behind the tagline: `padding: 48px 64px`, background `linear-gradient(180deg, rgba(36,10,10,0.05) 0%, rgba(36,10,10,0.3) 100%)`, `backdrop-filter: blur(6px)`, thin gold rule top and bottom (`1px solid rgba(198,161,91,0.55)`), max-width 880px.
  - Above/below the text inside the plate: a 1px, 36px-tall vertical gold gradient line (fades to transparent away from the text).
  - Tagline text (uppercase, italic): **"PRINT DE EXCEPȚIE PENTRU BRANDURI CARE NU FAC COMPROMISURI."** — Cormorant Garamond, italic, 500 weight, `clamp(26px, 3.6vw, 40px)`, letter-spacing 0.04em, color `#FAF6EE`, text-shadow `0 6px 28px rgba(0,0,0,0.55)`.
  - Two buttons below, 18px gap: **"Solicită ofertă"** (solid gold `#C6A15B` bg, text `#3D0810`, drop shadow) and **"Contact"** (outline `1px solid #FAF6EE`, text `#FAF6EE`). Both: Playfair Display 15px, uppercase, letter-spacing 0.16em, padding `17px 44px`. Both currently point at `#contact`.

### 3. Despre noi (`id="despre"`)
- Centered single paragraph, max-width 660px, 23px, line-height 1.6, color `#3a2c20`:
  > "SC Lusso Print SRL este un atelier de print și materiale publicitare din Slobozia, Ialomița. Lucrăm cu hârtii, textile și suporturi premium, pentru companii care vor ca fiecare material tipărit să reprezinte fidel calitatea brandului lor."
- Section padding `100px 8vw`. A 1px hairline (`#E8D9B0`, max-width 1200px, centered) separates sections throughout the page.

### 4. Servicii (`id="servicii"`)
- Centered kicker label "SERVICII" — Playfair Display, 15px, uppercase, letter-spacing 0.16em, color `#C6A15B`, margin-bottom 56px.
- 3-column grid (`repeat(3, 1fr)`, gap 48px, max-width 1100px, centered). 6 items, each: square photo (aspect-ratio 1/1, `object-fit: cover`) → roman numeral (I–VI, Playfair Display, `#C6A15B`, 18px) + title (Playfair Display, 21px, `#241B14`) on one line → one-line description (16px, `#6b5c4a`).
  1. **Print digital** / photo `assets/service-print-digital.png` — "Tiraje mici, calitate constantă"
  2. **Print offset** / `assets/service-print-offset.png` — "Tiraje mari, cost optimizat"
  3. **Materiale publicitare** / `assets/service-materiale-publicitare.png` — "Bannere, roll-up, panouri"
  4. **Cărți de vizită & papetărie** / `assets/service-carti-vizita-papetarie.png` — "Hârtii premium, finisaje fine"
  5. **Ambalaje personalizate** / `assets/service-ambalaje-personalizate.png` — "Cutii, pungi, etichete"
  6. **Print pe textile** / `assets/service-print-textile.png` — "Tricouri, materiale promoționale"
- On mobile, collapse the grid to 1 column.

### 5. Contact (`id="contact"`)
- Centered column, gap 10px, padding `100px 8vw`.
- Kicker "CONTACT" (same style as Servicii kicker).
- `office@lussoprint.com` (22px), `0743.201.030` (22px), "Luni – Vineri, 08:00–17:00" (17px, `#6b5c4a`).
- Button **"Trimite un mesaj"** — outline style (`1px solid #C6A15B`, text `#6B0F1A`), Playfair Display 15px uppercase, `mailto:office@lussoprint.com`.

### Footer
- Full-width bar, background `#3D0810`, text `#E8D9B0`, centered, 14px, Cormorant Garamond.
- Content: `SC LUSSO PRINT SRL · J2026033005005/2026 · CUI 54724789 · Aleea Nordului, nr. 16, Slobozia, Ialomița`

## Interactions & Behavior
- Nav links and the "Despre noi"/"Servicii"/"Contact" anchors are same-page smooth scroll (or plain anchor jump — either is fine).
- No animations in the current design; the two hero buttons could get a subtle hover state (slight lighten/darken) if useful, but none is specified — don't invent motion beyond that.
- Fully responsive: header wraps, hero text/plate should shrink gracefully (the `clamp()` sizes already do this), services grid should go to 1–2 columns under ~900px/600px.

## Design Tokens

**Colors** (extracted from the LussoPrint logo):
- Burgundy (primary): `#6B0F1A`
- Burgundy, deep (footer/overlay base): `#3D0810`
- Ink (body text): `#241B14`
- Gold (accent): `#C6A15B`
- Gold, pale/light: `#E8D9B0`
- Cream (page background): `#FAF6EE`
- Muted brown (secondary text): `#6b5c4a` / `#3a2c20`

**Typography** (Google Fonts):
- Headings / labels / buttons: **Playfair Display**, weights 400/500/600
- Body / nav / tagline: **Cormorant Garamond**, weights 400/500, italic variant used for the tagline
- Load via `next/font/google` in `layout.tsx` rather than a `<link>` tag.

**Spacing**: sections use `100px 8vw` vertical/horizontal padding; header uses `22px 8vw`. Grid/flex gaps range 10–48px depending on density (see each section above).

**Radius / shadows**: no border-radius anywhere in this design — everything is square-edged. The only shadow is the hero CTA button's `0 8px 24px rgba(0,0,0,0.3)` and the hero text's `text-shadow`.

## State Management
No app state — this is a static marketing page. No forms with client-side state (the contact "button" is a `mailto:` link, not a form).

## Assets
All in `assets/`:
- `logo-crest.png` — circular medallion mark (header)
- `logo-lockup.png` — full horizontal logo lockup (not used on this page, kept for reference/other pages)
- `banner-hero.png` — hero banner photo
- `service-print-digital.png`, `service-print-offset.png`, `service-materiale-publicitare.png`, `service-carti-vizita-papetarie.png`, `service-ambalaje-personalizate.png`, `service-print-textile.png` — one photo per service card

Serve these through `next/image` for optimization; keep filenames or rename to match your asset pipeline, just update the README's mapping if you do.

## Files
- `reference/LussoPrint - Landing Minimal.dc.html` — the full design reference (view source for exact markup/inline styles if any wording above is ambiguous).
- `screenshots/` — full-page screenshots at 5 scroll positions, top to bottom, showing the finished design.
