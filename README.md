# THE UNICORN ARCHIVE

A dark editorial single-page app — "a record of creatures the world was never meant to forget."
Built with Vite, React and React Router.

## Pages

| Route | Section | Interactions |
| --- | --- | --- |
| `/` | Archive home | Parallax hero, scroll-triggered statistics reveal, discovery cards |
| `/unicorn` | The Unicorn | Five-era timeline selector, myth vs. record comparison toggle |
| `/species` | Species index | Six-species selector, prev/next arrows, accent theming, `?species=` deep links |
| `/realms` | Cartography | Interactive field chart with markers, location list, realm panel |
| `/magic` | Magic index | Four abilities driving an animated horn stage and accent colour |
| `/legends` | Legends | Story cards with a reader modal, plus a four-question "which unicorn" quiz |
| `/journal` | Journal | Category filters and a dispatch reader modal |
| `/field-notes` | Field notes | Observation log selector, confidence meter, mark-as-consulted |
| `/about` | About | Three archive principles with a chapter selector |

All content is static data under `src/data/` — there is no backend.

## Run with Docker (used by Alloy sessions)

```bash
docker compose -f docker-compose.alloy.yaml up
```

The dev server listens on http://localhost:5173. Inside an Alloy session the preview is
proxied at http://localhost:8080.

## Run locally

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production bundle in dist/
npm run preview
```

## Project layout

```
index.html
src/
  main.jsx              entry point: fonts, styles, BrowserRouter
  App.jsx               route table
  components/
    Navbar.jsx           fixed nav + full-screen mobile menu
    Footer.jsx           quote block + link index
    Hero.jsx             home hero with pointer parallax and video/poster fallback
    archive.jsx          ArchiveLayout, SectionLabel, EditorialButton/Header/Image
  pages/                one file per route
  data/                 navigation, species, realms, timeline, stories, journal, quiz, magic
  hooks/
    useInViewFlag.js     IntersectionObserver reveal flag
  styles/
    reset.css            minimal element reset
    archive.css          all layout, type and animation rules
```

## Design tokens

Defined as CSS custom properties at the top of `src/styles/archive.css`:

- background `#07080d`, foreground `#f4f0e7`, accent/primary `#d4af37`
- Playfair Display (display serif), Manrope (body), JetBrains Mono (labels), via Fontsource
- icons from `lucide-react`

## Notes

- The hero markup references `/videos/hero-unicorn.mp4`. No video ships in this repo, so the
  `<video>` element fails to load and the component falls back to the poster still — drop a file
  at `public/videos/hero-unicorn.mp4` to enable the motion background.
- Photography is loaded from Unsplash; `EditorialImage` swaps in a fallback image on error.

## Alloy configuration

- `docker-compose.alloy.yaml` — single `web` service on `network_mode: host`
- `.alloy/environment.json` — declares the compose path and `frontendPort: 5173`
