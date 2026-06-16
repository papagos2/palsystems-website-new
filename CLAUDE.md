# CLAUDE.md — Awwwards Website Studio

Backbone conventions and quality bars that let the agent fleet run autonomously.
Read `docs/agent-architecture.md` for the full agent system.

## Stack

- **Next.js 15** (App Router, React Server Components by default)
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme`; token-driven; no magic numbers)
- **Framer Motion** (all motion; reduced-motion fallback mandatory)
- **GitHub** (PR workflow) → **Vercel** (preview per PR, prod human-gated)

## Agent operating model

- **studio-director** orchestrates and is the *only* agent that talks to the human.
- **frontend-engineer** is the *only* writer of application code.
- **quality-auditor** is read-only and is the independent quality gate.
- **design-director** owns taste, tokens, and the motion spec.
- **release-engineer** owns GitHub + Vercel; production is human-approved.

## Definition of Done (every page/section)

1. Matches the `DESIGN_SPEC` (type scale, spacing, color, motion timing).
2. `tsc --noEmit`, lint, and `next build` are green.
3. Quality audit **PASS** against budgets below.
4. Verified Vercel preview renders the routes.

## Quality budgets (audit gate)

| Metric | Target (mobile) |
|--------|-----------------|
| Lighthouse Performance | ≥ 95 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Accessibility | WCAG 2.2 AA, axe 0 serious/critical |

## Engineering conventions

- Server Components by default; `"use client"` only for interactivity/motion.
- `next/image` + `next/font`; dynamic-import heavy below-the-fold client modules.
- Co-locate Framer Motion variants with their component.
- Every motion effect ships a `prefers-reduced-motion` fallback.
- Tokens drive Tailwind theme + CSS variables; no hardcoded design values.
- No secrets in code; typed env config. No `any` without justification.

## Git / delivery

- Develop on the designated `claude/...` branch.
- `git push -u origin <branch>`; retry transient pushes with backoff (2/4/8/16s).
- Do **not** open a PR or promote to production without explicit human approval.

## Escalate to human

Iteration cap (3) hit · repeated identical failure · aesthetic deadlock ·
production deploy / domain / secrets · ambiguous brief.
