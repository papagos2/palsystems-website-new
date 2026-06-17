# WORKFLOW.md — Premium Web Agency Pipeline

The phase pipeline for building and shipping high-end **Next.js 15** websites
(**TypeScript · Tailwind · Framer Motion**) via **GitHub → Vercel**, executed
with **Claude Code**. Governed by `CLAUDE.md`; reviewed through `skills/`.

**Team:** one human + Claude. **Sequence is mandatory and ordered:**

```
PHASE 0 Research → 1 Strategy → 2 Design → 3 Architecture →
4 Engineering → 5 QA → 6 Release → 7 Continuous Improvement
```

Claude **thinks → researches → plans → builds.** No phase starts until the prior
gate is green or its ambiguity is human-resolved. No coding before Strategy and
Design exist.

---

## PHASE 0 — Research
- **Purpose:** understand the request, the codebase, the market, and the
  constraints before committing to anything.
- **Inputs:** human brief; existing repo; competitor URLs; analytics if any.
- **Outputs:** scoped task list; locked assumptions; open questions; competitor
  notes; the single highest-impact ambiguity, resolved.
- **Success criteria:** goal restated; scope bounded; key unknowns identified.
- **Fail conditions:** scope vague; assumptions undocumented; jumped to solutions.
- **Escalation:** ambiguity that changes the outcome with no safe default → ask
  the human once, then proceed.

## PHASE 1 — Strategy
- **Purpose:** define why the site exists and what it must achieve.
- **Inputs:** Phase 0 outputs.
- **Outputs:** completed **`STRATEGY.md`** — business analysis, competitor
  analysis, ICP, positioning, offer, conversion goals, user journey, content
  hierarchy, website objectives.
- **Success criteria:** measurable objectives; clear ICP/positioning/offer;
  **human sign-off.**
- **Fail conditions:** decorative goals; no measurable target; no proof
  inventory.
- **Escalation:** ICP/offer/positioning unresolved → escalate; never assume the
  business model.
- **Lenses (blocking before Design):** Brand Strategist, SEO Specialist.

## PHASE 2 — Design
- **Purpose:** translate strategy into a premium, conversion-focused visual +
  motion system.
- **Inputs:** approved `STRATEGY.md`.
- **Outputs:** **`DESIGN_SPEC.md`** — tokens (color/type/spacing), layout grid,
  component inventory, motion spec (timings/easing/reduced-motion), and a
  section-by-section map from the content hierarchy.
- **Success criteria:** every section serves a strategic goal; tokens defined;
  motion specified with reduced-motion behavior.
- **Fail conditions:** magic numbers; motion without fallback; sections with no
  purpose.
- **Escalation:** two equally valid directions → present options to the human.
- **Lenses (blocking before Engineering):** Brand Strategist, UX Architect,
  Awwwards Designer, CRO Specialist, SEO Specialist. **All must PASS.**

## PHASE 3 — Architecture
- **Purpose:** decide the technical structure before writing feature code.
- **Inputs:** `DESIGN_SPEC.md` + tokens.
- **Outputs:** route map (App Router); Server/Client component boundaries; data
  sources; rendering strategy (SSG/ISR/SSR); shared primitives; metadata +
  structured-data plan.
- **Success criteria:** routes, components, data, and rendering decided and
  written down.
- **Fail conditions:** unplanned client/server split; no rendering strategy; no
  metadata plan.
- **Escalation:** architectural trade-off with business impact (cost, SEO,
  performance) → escalate.
- **Lens:** Frontend Architect (advisory).

## PHASE 4 — Engineering
- **Purpose:** implement the design to spec, type-safe and token-driven.
- **Inputs:** approved architecture + `DESIGN_SPEC.md` + tokens.
- **Work:** Server Components by default; `"use client"` only for interactivity/
  motion; reuse primitives; reduced-motion fallbacks; no magic numbers.
- **Self-check (must pass before QA):**
  ```bash
  npm run typecheck
  npm run lint
  npm run build
  ```
  Confirm live with `/run`; behavioral fixes with `/verify`; clean up with
  `/simplify`.
- **Outputs:** feature branch with green self-check + change summary.
- **Success criteria:** matches spec; self-check green; primitives reused.
- **Fail conditions:** any self-check red; hardcoded values; client components
  where server would do.
- **Escalation:** spec gap discovered → return to Design, don't invent.

## PHASE 5 — QA
- **Purpose:** independently verify the build against the quality gates.
- **Inputs:** built feature branch.
- **Work:**
  ```bash
  npm run build && npm run lhci
  ```
  then `/code-review` and `/security-review`.
- **Outputs:** **PASS/FAIL** report with specific findings.
- **Success criteria:** Performance ≥ 95 · LCP < 2.5s · CLS < 0.1 · INP < 200ms;
  WCAG 2.2 AA; SEO complete; code/motion standards met.
- **Fail conditions:** any budget missed; serious/critical a11y; security finding.
- **Revision loop:** Diagnose → Propose → Fix → Re-test. **Cap: 3 cycles.** After
  the 3rd unresolved FAIL → **escalate.**
- **Lenses (blocking before Release):** Frontend Architect, Accessibility
  Auditor, Security Auditor, Lighthouse Auditor. **All must PASS.**

## PHASE 6 — Release
- **Purpose:** ship safely through the GitHub → Vercel path.
- **Development flow:**
  ```
  Branch → Build → Review → Commit → Push → Preview deploy
  ```
- **Release flow:**
  ```
  Preview verification → Human approval → Production deployment
  ```
- **Inputs:** PASS report + four pre-Release lenses PASS.
- **Outputs:** verified Vercel **preview** URL; (on approval) production deploy.
- **Success criteria:** preview renders all routes; budgets hold on preview;
  human approves production.
- **Fail conditions:** preview broken; budgets regress; attempting production
  without approval.
- **Production safety (autonomy boundary):** Claude may create branches, commit,
  push, and create **previews**. Claude may **NOT** approve production, modify
  DNS, secrets, or billing without explicit human approval.

## PHASE 7 — Continuous Improvement
- **Purpose:** make the system learn so mistakes don't recur.
- **Inputs:** QA findings; recurring failures; post-launch metrics.
- **Outputs:** updated `CLAUDE.md` conventions; new lint rules / primitives;
  renegotiated budgets where justified; mid-project redesign trigger when the
  spec fails on design grounds.
- **Success criteria:** the same issue is prevented, not re-caught.
- **Fail conditions:** identical failure recurs with no convention added.
- **Escalation:** budget unrealistic for the brief → renegotiate with the human.

---

## GitHub & Vercel — Permissions Matrix

| Action | Claude | Requires human |
|--------|:------:|:--------------:|
| Research / plan / design / build / refactor / audit | ✅ | |
| Create branch · commit · push | ✅ | |
| Create **preview** deployment | ✅ | |
| Open / update PR | ✅ | |
| **Approve production release** | ❌ | ✅ |
| **Modify DNS / domains** | ❌ | ✅ |
| **Modify secrets / env** | ❌ | ✅ |
| **Modify billing** | ❌ | ✅ |

## Quick Reference

| Phase | Owner | Success | If FAIL |
|-------|-------|---------|---------|
| 0 Research | Claude + Human | Scope bounded, ambiguity resolved | Ask human once |
| 1 Strategy | Claude → Human sign-off | `STRATEGY.md` approved | Block; resolve with human |
| 2 Design | Claude (Human taste) | `DESIGN_SPEC.md`; 5 lenses PASS | Return to Strategy/Design |
| 3 Architecture | Claude | Routes/data/rendering planned | Re-plan |
| 4 Engineering | Claude | Self-check green | Fix, re-self-check |
| 5 QA | Claude (read-only) | Budgets met; 4 lenses PASS | Revision loop (×3) → escalate |
| 6 Release | Claude (preview) / Human (prod) | Preview verified; human approves | Hold; never self-promote |
| 7 Improvement | Claude | Issue prevented | Add convention |
