# DESIGN_SPEC — Landing Page (reference implementation)

> Author: design-director. Contract for frontend-engineer. If it isn't here,
> don't guess it. Status: v1 (reference implementation — brand-swappable).

## Concept

**"Systems, in motion."** PAL Systems builds the infrastructure other companies
run on. The site should feel *engineered* — precise, dark, confident, with
restrained motion that implies a system coming online. Premium through
restraint: deep near-black canvas, one electric accent, generous whitespace,
oversized typography. No decoration that doesn't carry meaning.

Reference register: Linear / Vercel / Stripe-tier polish, not startup-template.

## Art direction

- **Mood**: precise, calm, high-contrast, nocturnal.
- **Signature**: a single "signal" accent used sparingly as the system's pulse —
  on focus, key verbs, and the live status motif.
- **Texture**: a faint dotted grid + soft radial glow behind the hero, never busy.

## Design tokens

| Token | Value | Use |
|-------|-------|-----|
| `--color-ink` | `#08080A` | page background |
| `--color-surface` | `#111114` | cards / raised |
| `--color-line` | `rgba(255,255,255,.08)` | hairline borders |
| `--color-paper` | `#F4F4F0` | primary text (warm white) |
| `--color-muted` | `#8A8A93` | secondary text |
| `--color-signal` | `#CBFF4D` | accent (sparing) |
| `--color-signal-ink` | `#0A0A0A` | text on accent |
| `--font-sans` | Geist Sans | UI / body |
| `--font-mono` | Geist Mono | eyebrows / labels / data |

- **Type scale (fluid)**: display `clamp(2.75rem,6vw,6rem)`, h2
  `clamp(2rem,3.5vw,3rem)`, lead `1.25rem`, body `1rem`, mono-label `.8125rem`
  uppercase, tracking `+0.1em`.
- **Spacing rhythm**: section padding `clamp(6rem,12vh,10rem)` vertical; content
  max-width `72rem`; consistent 4/8px scale.
- **Radii**: cards `1rem`; pills `9999px`. **Borders**: 1px `--color-line`.

## Layout (sections, top→bottom)

1. **Nav** — sticky, hairline-bottom on scroll; wordmark + 3 links + signal CTA.
2. **Hero** — mono eyebrow ("● SYSTEMS ONLINE"), oversized display headline,
   muted lead, two CTAs; dotted grid + radial glow backdrop.
3. **Logo trust bar** — "Trusted by teams at" + 5 muted wordmarks.
4. **Capabilities** — 3-up card grid (Orchestration, Observability, Resilience),
   each with icon, title, copy.
5. **Stats band** — 3–4 oversized metrics (uptime, latency, scale).
6. **CTA** — full-width signal-bordered panel, headline + primary CTA.
7. **Footer** — wordmark, columns, fine print.

Responsive intent: single column < 768px (stacked, generous touch targets); grid
at ≥ 768px; display type scales fluidly.

## Motion language (Framer Motion)

> Differentiator. Every effect MUST honor `prefers-reduced-motion` (no transform/
> opacity animation; render final state). Use a global `MotionConfig
> reducedMotion="user"` plus a `useReducedMotion` guard in primitives.

- **Hero entrance**: children stagger (0.08s), each rises `y: 16→0` + fades
  `0→1`, `duration .6s`, ease `expo-out` (`cubic-bezier(.16,1,.3,1)`).
- **Scroll reveal**: sections fade+rise on enter viewport (once, `-15%` margin),
  same easing, `.5s`.
- **Signal pulse**: the hero status dot uses a slow opacity/scale pulse
  (disabled under reduced motion).
- **Hover micro-interactions**: cards lift `y:-4` + border brightens; CTA fills;
  `.2s` ease-out. Always paired with a visible focus-visible ring in `--signal`.
- **No** parallax-heavy or autoplay-video effects in v1; motion implies system
  state, never noise.

## Accessibility (design inputs)

- Contrast: paper-on-ink and signal-ink-on-signal both ≥ AA.
- Visible `:focus-visible` ring (`--signal`, 2px offset) on all interactives.
- Semantic landmarks (`header/main/footer`, one `h1`), logical heading order.
- All motion has a reduced-motion fallback; nothing essential is motion-only.
