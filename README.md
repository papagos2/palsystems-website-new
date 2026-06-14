# PAL Systems — website

An Awwwards-grade marketing site for **PAL Systems**, an (illustrative)
independent systems studio. Built as a fast, dependency-free static site with a
dark, cinematic aesthetic and custom motion design.

> **Note on content:** PAL Systems, its projects (Helios Grid, Northwind OS,
> etc.), metrics and the `hello@palsystems.io` address are placeholder/demo
> content. Swap them for real copy before going live.

## Highlights

- **Zero dependencies** — hand-rolled smooth scroll, custom cursor, magnetic
  buttons, scroll reveals and a preloader in ~250 lines of vanilla JS.
- **Cinematic visuals** — hero, work tiles and CTA backdrops generated with
  Higgsfield (`nano_banana_pro`), then downscaled and compressed to keep the
  whole `assets/img/` folder under ~600 KB.
- **Motion design** — staggered hero typography, word-by-word lit manifesto,
  marquee, project hover previews, parallax, live clock.
- **Accessible** — honours `prefers-reduced-motion`, semantic landmarks,
  keyboard-friendly anchors.

## Structure

```
index.html        # markup
css/styles.css    # design system + layout + animation
js/main.js        # all interactions (no libraries)
assets/img/       # Higgsfield-generated, web-optimised visuals
assets/favicon.svg
```

## Run locally

It is a static site — open `index.html`, or serve it:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Any static host works (Vercel, Netlify, GitHub Pages, S3). No build step.
A `vercel.json` is included for sensible caching headers.
