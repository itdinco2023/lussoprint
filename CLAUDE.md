@AGENTS.md

# Lusso Print — context de proiect

Site de prezentare (marketing, fără e-commerce) pentru **SC Lusso Print SRL**, atelier de print și materiale publicitare din Slobozia, Ialomița.

## Stack

- Next.js 16 (App Router), TypeScript, React 19.
- Styling: **CSS Modules simplu, fără Tailwind** — fiecare componentă are `Component.tsx` + `Component.module.css` colocate în `src/components/`.
- Fonturi: Playfair Display (titluri/butoane/kicker) + Cormorant Garamond (body/nav), încărcate via `next/font/google` în `src/app/layout.tsx`.
- Imagini: `next/image`, sursă locală în `public/images/`.
- Design tokens (culori, spațiere) definite ca variabile CSS în `src/app/globals.css` (`--burgundy`, `--gold`, `--cream` etc.). **Fără border-radius nicăieri** — tot design-ul e pe colțuri drepte.

## Structura rutelor

`Header` și `Footer` sunt în `src/app/layout.tsx` (comune tuturor paginilor). Rutele:

- `/` — prima pagină, one-page cu toate secțiunile (Hero, Despre, Servicii, Contact) — **nu s-a modificat structural** când s-a trecut la multi-page.
- `/despre`, `/servicii`, `/contact` — pagini separate, reutilizează aceleași componente ca prima pagină.
- `/gdpr`, `/cookie-uri`, `/termeni-si-conditii` — pagini legale, folosesc componenta comună `src/components/LegalPage.tsx`.

Linkurile de navigare (Header + Footer) sunt centralizate în `src/lib/nav.ts` — se modifică o singură dată acolo.

## De terminat / TODO explicit

- **Formularul de contact** (`src/app/contact/actions.ts`) e un Server Action stub: validează câmpurile și returnează succes/eroare, dar **nu trimite email real**. Trimiterea prin serverul SMTP al clientului e marcată explicit ca punct de integrare viitor — se completează direct în acea funcție, fără să se schimbe UI-ul formularului ([ContactForm.tsx](src/components/ContactForm.tsx)).
- **Textele legale** (`/gdpr`, `/cookie-uri`, `/termeni-si-conditii`) sunt un draft generic, corect structurat conform GDPR, dar **nu au fost verificate de un jurist** — de revizuit înainte de a fi considerate finale, mai ales dacă se schimbă ce date se colectează efectiv (ex. analytics).

## Deploy

- Proiectul Vercel e legat de `itdinco2023/lussoprint`, branch `main`. **Vercel face redeploy doar pe `main`** — orice lucru trebuie adus pe `main` ca să apară live.
- `.vercelignore` exclude `design-reference/` din build — nu ajunge niciodată în deployment.

## Design de referință

`design-reference/` (în repo, exclus din Vercel) conține hand-off-ul original: `README.md` cu toate specificațiile (culori, spacing, copy), `reference/*.dc.html` cu markup-ul de referință, `assets/` cu pozele originale și `screenshots/` cu paginile randate. De consultat pentru orice ambiguitate de design înainte de a improviza un stil nou.
