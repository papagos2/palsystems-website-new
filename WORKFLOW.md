# WORKFLOW.md — Premium Web Studio Pipeline

## 1. Overview

This is the execution pipeline for a premium web design & development studio
running on **Next.js + TypeScript + Tailwind + Framer Motion**, shipped through
**GitHub → Vercel**. It takes a request from raw **brief → production** in
defined stages, each with explicit inputs, outputs, and a pass/fail gate.

The team is **one human + Claude**. The human owns taste, intent, and the
production sign-off; Claude executes design tokens, code, audits, and delivery.
The pipeline exists to make output **repeatable and gated** — every stage
produces a checkable artifact, nothing reaches production without passing
budgets, and ambiguity stops the line instead of guessing. It is lean by
design: no hand-offs to fictional roles, just sequential steps with loops.

## 2. Pipeline Stages

### STEP 0 — Brief intake & decomposition
- **Input:** human request (one line to a full brief).
- **Work:** restate the goal, list pages/sections, identify the *one* ambiguity
  that most changes the outcome (brand, audience, scope), and resolve it.
- **Output:** a short scoped task list + locked assumptions.
- **Decision point:** brief ambiguous on something that changes the build →
  **ask the human once** before proceeding. Otherwise continue with stated
  defaults.

### Design — Token system + spec
- **Input:** scoped brief.
- **Work:** define the design language — color/type/spacing tokens, layout grid,
  and the motion spec (timings, easing, reduced-motion behavior). Write it down.
- **Output:** `DESIGN_SPEC.md` + token values (Tailwind `@theme` / CSS vars).
- **Decision point:** no clear visual direction or two equally valid directions
  → present options to the human; don't build on a guess.

### Engineering — Build with Next.js
- **Input:** `DESIGN_SPEC.md` + tokens.
- **Work:** implement against the spec. Server Components by default;
  `"use client"` only for interactivity/motion. Tokens drive Tailwind — no magic
  numbers. Every motion effect ships a `prefers-reduced-motion` fallback.
- **Self-check (must pass before QA):**
  ```bash
  npm run typecheck   # tsc --noEmit
  npm run lint
  npm run build
  ```
- **Visual check:** run the app and confirm the change with **`/run`**; for
  behavioral fixes confirm with **`/verify`**.
- **Output:** built routes on the working branch, green self-check.

### QA — Audit against budgets
- **Input:** built branch.
- **Work:** independent audit against the quality budgets:

  | Metric | Target (mobile) |
  |--------|-----------------|
  | Lighthouse Performance | ≥ 95 |
  | LCP | < 2.5s |
  | CLS | < 0.1 |
  | INP | < 200ms |
  | Accessibility | WCAG 2.2 AA, axe 0 serious/critical |

  ```bash
  npm run build && npm run lhci   # Lighthouse CI against budgets
  ```
  Then run **`/code-review`** for correctness/quality and **`/security-review`**
  for the diff.
- **Output:** a **PASS/FAIL** report with specific findings.
- **Decision point:** PASS → Release. FAIL → Revision loop.

### Revision loop — Fix → Re-audit (cap: 3)
- **Input:** FAIL findings.
- **Work:** apply the smallest fix that addresses the finding; use **`/simplify`**
  to clean up reuse/efficiency without changing behavior. Re-run the
  Engineering self-check, then re-run QA.
- **Iteration cap:** **3 fix→audit cycles**. If still FAIL after the 3rd →
  **escalate to the human** (see §3). Do not loop a 4th time silently.
- **Output:** PASS report, or an escalation note.

### Release — Deploy + final gate
- **Input:** PASS report.
- **Work:** commit, push the branch, open the preview deploy on Vercel, verify
  the live preview renders all routes.
- **Decision point:** **production promotion is human-gated.** Claude prepares
  and deploys *previews* autonomously; promoting to production (or touching
  domains/secrets) requires explicit human approval.
- **Output:** live preview URL + (on approval) production deploy.

## 3. Escalation Rules

Stop and ask the human when:
- **Iteration cap hit** — 3 fix→audit cycles done, QA still FAIL.
- **Ambiguous brief** — a decision changes the outcome and has no safe default
  (brand voice, target audience, scope boundary).
- **Aesthetic deadlock** — two directions are equally valid and taste decides.
- **Production / domain / secrets** — any production promotion, DNS, or env
  secret. Never self-approve these.
- **Repeated identical failure** — the same error returns unchanged after a fix;
  the root cause is likely outside the current scope.

Escalation = a short note: what failed, what was tried, the options, a
recommendation. Then wait.

## 4. Handoff Rules

**Design → Engineering** passes:
- Final `DESIGN_SPEC.md`, token values, layout grid, and the motion spec
  (timings/easing + reduced-motion behavior). If it isn't in the spec,
  Engineering doesn't invent it — it asks.

**Engineering → QA** passes:
- The built branch **with a green self-check** (`typecheck`, `lint`, `build`
  all passing) and a one-line summary of what changed. A branch that fails its
  own self-check is not handed off.

**QA → Release** passes:
- A **PASS** report: Lighthouse meets budgets, `/code-review` and
  `/security-review` clean (or findings explicitly waived by the human), and a
  verified list of routes. No PASS report → no Release.

## 5. Self-Improvement Loop

The workflow learns from its own failures:
- **Recurring QA failures** (same metric/finding twice across builds) → the fix
  is promoted into `CLAUDE.md` as a standing convention so it's prevented, not
  re-caught.
- **Token thrash** (Engineering repeatedly overrides spec values) signals the
  token system is wrong → trigger a **mid-project redesign**: pause Engineering,
  return to Design, correct the tokens/spec, then resume.
- **Budget misses that aren't code bugs** (a perf target unrealistic for the
  motion brief) → renegotiate the budget with the human and record the new
  target. Budgets are gates, not folklore.

A **mid-project redesign** is triggered when: the spec contradicts itself, the
audit fails on *design* grounds (not implementation), or the human's review
rejects the visual direction. It always routes back through Design — never
patched ad hoc in Engineering.

## 6. Quick Reference Table

| Phase | Owner | Success Criteria | If FAIL |
|-------|-------|------------------|---------|
| STEP 0 — Intake | Claude + Human | Scoped task list, one key ambiguity resolved | Ask human once, then proceed |
| Design | Claude (Human signs taste) | `DESIGN_SPEC.md` + tokens complete | Present options to human |
| Engineering | Claude | `typecheck` + `lint` + `build` green; `/run` confirms | Fix in place, re-self-check |
| QA | Claude (read-only) | Lighthouse ≥ budgets; `/code-review` + `/security-review` clean | Enter Revision loop |
| Revision (×3 max) | Claude | FAIL findings resolved; `/simplify` applied | After 3 cycles → escalate |
| Release | Claude (preview) / Human (prod) | Preview verified; human approves prod | Hold; do not self-promote |
