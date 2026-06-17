# WORKFLOW.md — Premium Web Studio Operating System

> The operating system for designing, building, and shipping high-end
> **Next.js 15** websites with **TypeScript · Tailwind · Framer Motion**,
> delivered via **GitHub → Vercel**, executed with **Claude Code** (and Cursor
> for in-editor work). Reusable across client projects.
>
> **Team:** one human + Claude. The human owns taste, strategy sign-off, and the
> production gate. Claude executes research, strategy drafts, tokens, code,
> audits, and delivery — **inside the rules below**.

---

## 0. Operating Principles — Agency Mode

Run every project like a **$10k–$50k studio engagement**, not a template job:

- **Business outcomes over visuals** — beauty that doesn't convert is failure.
- **Conversion over decoration** — every section earns its place or is cut.
- **Clarity over complexity** — the visitor never has to think about the UI.
- **Maintainability over cleverness** — the next dev (or Claude) must understand
  it in 30 seconds.
- **Proof over claims** — assertions ship with evidence.

### Think → Research → Plan → Build (never skip)
Claude **never jumps straight to code.** Mandatory cognitive order on every task:

1. **Think** — restate the goal, surface assumptions and risks.
2. **Research** — read the codebase, the brief, competitors, prior art.
3. **Plan** — write the approach and the checkable outputs (use `/run`/Plan
   tooling for non-trivial work).
4. **Build** — only now, against an approved plan.

### Mandatory pipeline sequence
```
Research → Strategy → Design → Architecture → Build → QA → Release
```
Each stage produces an artifact and a pass/fail gate. A stage may not start
until the previous stage's gate is green or its ambiguity is human-resolved.

---

## 1. Pipeline Stages

### RESEARCH — Brief intake & decomposition  *(STEP 0)*
- **Input:** the human request (one line → full brief).
- **Work:** restate the goal; decompose into pages/sections; inventory existing
  assets, constraints, and unknowns; identify the single ambiguity that most
  changes the outcome and resolve it.
- **Output:** scoped task list + locked assumptions + open questions.
- **Gate / decision:** ambiguity that changes the build with no safe default →
  **ask the human once**, then proceed.

### STRATEGY — Business & conversion foundation
- **Input:** scoped brief + research.
- **Work:** complete **`STRATEGY.md`** — business analysis, competitor analysis,
  ICP, positioning, offer analysis, conversion goals, user journey, content
  hierarchy, website objectives.
- **Output:** human-approved `STRATEGY.md`.
- **Gate:** **Strategy is human-signed before Design.** No strategy → no design.

### DESIGN — Token system + spec
- **Input:** approved `STRATEGY.md`.
- **Work:** define the design language driven by strategy — color/type/spacing
  tokens, layout grid, component inventory, and the **motion spec** (timings,
  easing, reduced-motion behavior). Map every section from the content hierarchy
  to a layout.
- **Output:** `DESIGN_SPEC.md` + token values (Tailwind `@theme` / CSS vars).

#### ▶ Pre-Engineering Specialist Review (mandatory, blocking)
Before any code, Claude runs four review lenses over Strategy + Design and
records findings + resolutions. FAIL on any lens returns to Strategy/Design:

| Lens | Reviews for | Blocks build if… |
|------|-------------|------------------|
| **Brand Strategist** | Positioning consistency, voice, differentiation, message hierarchy | Design contradicts positioning or voice |
| **UX Architect** | Information architecture, user journey, flow, friction, cognitive load | Journey has dead ends or hidden primary action |
| **CRO Specialist** | CTA clarity/placement, offer framing, proof, objection handling, form friction | Primary conversion path is weak or buried |
| **SEO Specialist** | Keyword/intent mapping, content depth, URL/heading structure, metadata plan | Pages lack intent match or crawlable structure |

### ARCHITECTURE — Technical plan
- **Input:** `DESIGN_SPEC.md` + token values.
- **Work:** define route structure (App Router), Server vs Client component
  boundaries, data sources, rendering strategy (SSG/ISR/SSR), shared primitives,
  and the metadata/structured-data plan. Decide before building.
- **Output:** a short architecture note (routes, components, data, rendering).

### BUILD — Engineering with Next.js 15
- **Input:** approved architecture + spec + tokens.
- **Work:** implement to spec. **Server Components by default**; `"use client"`
  only for interactivity/motion. Tokens drive Tailwind — **no magic numbers**.
  Every motion effect ships a `prefers-reduced-motion` fallback. Reuse
  primitives; keep it type-safe.
- **Self-check (must pass before QA):**
  ```bash
  npm run typecheck   # tsc --noEmit
  npm run lint
  npm run build
  ```
- **Confirm behavior:** `/run` to see it live; `/verify` for behavioral fixes;
  `/simplify` to remove duplication before handoff.
- **Output:** built routes on a feature branch with a green self-check.

### QA — Audit against budgets
- **Input:** built branch.
- **Work:** independent audit against **Premium Quality Standards** (§2).
  ```bash
  npm run build && npm run lhci   # Lighthouse CI vs budgets (mobile)
  ```
  Then `/code-review` (correctness/quality) and `/security-review` (the diff).
- **Output:** **PASS/FAIL** report with specific findings.
- **Gate:** PASS → Pre-Release review. FAIL → Revision loop.

### REVISION LOOP — Fix → Re-audit  *(cap: 3)*
- Apply the **smallest** fix per finding; `/simplify` for cleanup; re-run the
  Build self-check, then re-run QA.
- **Iteration cap: 3 fix→audit cycles.** Still FAIL after the 3rd → **escalate**
  (§3). Never loop a 4th time silently.

### RELEASE — Deploy + final gate

#### ▶ Pre-Release Specialist Review (mandatory, blocking)
| Lens | Reviews for | Tooling |
|------|-------------|---------|
| **Senior Frontend Architect** | Code quality, reuse, type-safety, component boundaries, no dead code | `/code-review` |
| **Accessibility Auditor** | WCAG 2.2 AA, semantics, focus order, contrast, reduced-motion | axe + manual |
| **Security Auditor** | Secrets, headers, input handling, dependency risk | `/security-review` |
| **Lighthouse Performance Auditor** | Perf ≥ 95, LCP/CLS/INP budgets, bundle/image/font cost | `npm run lhci` |

- **Work (after all four PASS):** commit → push feature branch → Vercel
  **preview** deploy → verify the live preview renders all routes.
- **Gate:** **production promotion is human-approved** (see §4). Claude ships
  previews autonomously; it never self-promotes to production.

---

## 2. Premium Quality Standards (every site)

**Performance (mobile):**
- Lighthouse Performance ≥ 95 · LCP < 2.5s · CLS < 0.1 · INP < 200ms

**Accessibility:**
- WCAG 2.2 AA · axe 0 serious/critical · visible focus · full keyboard path

**SEO:**
- Metadata complete (title/description per route) · OpenGraph + Twitter cards
  complete · Structured Data (JSON-LD) complete · semantic headings · sitemap +
  robots

**Code:**
- Type-safe (no unjustified `any`) · reusable primitives · **no magic numbers** ·
  token-driven · Server Components by default

**Motion:**
- `prefers-reduced-motion` fallback on every effect · GPU-friendly (transform/
  opacity only) · no animation without a purpose · no layout-shifting motion

These are **gates, not aspirations.** A miss is a QA FAIL.

---

## 3. Escalation Rules

Stop and ask the human when:
- **Iteration cap hit** — 3 fix→audit cycles, QA still FAIL.
- **Ambiguous brief / strategy** — a decision changes the outcome with no safe
  default (ICP, offer, positioning, primary objective).
- **Aesthetic or strategic deadlock** — two valid directions; taste/business
  judgment decides.
- **Production / domain / secrets / billing** — never self-approve (§4).
- **Repeated identical failure** — same error returns unchanged after a fix;
  root cause is likely out of current scope.

Escalation format: *what failed → what was tried → options → recommendation →
wait.*

---

## 4. GitHub & Vercel Workflow

**Development flow:**
```
Feature branch → Specialist review → Commit → Push → Preview deploy
```
**Release flow:**
```
Preview verification → Human approval → Production deployment
```

**Permissions matrix:**

| Action | Claude | Requires human |
|--------|:------:|:--------------:|
| Create feature branch | ✅ | |
| Commit & push | ✅ | |
| Create preview deployment | ✅ | |
| Open / update PR | ✅ | |
| **Approve production deploy** | ❌ | ✅ |
| **Modify DNS / domains** | ❌ | ✅ |
| **Modify secrets / env** | ❌ | ✅ |
| **Modify billing** | ❌ | ✅ |

Git hygiene: develop on the designated branch; `git push -u origin <branch>`;
retry transient pushes with backoff (2/4/8/16s); never force-push shared
branches; never open a PR or promote to production without explicit approval.

---

## 5. Failure Handling

On **build / deploy / QA / audit failure**, Claude runs a fixed protocol:
```
Diagnose → Propose fix → Implement fix → Re-test
```
- Read the actual error/logs first; never guess-patch.
- One root-cause fix per cycle; re-run the relevant gate.
- **Maximum 3 repair cycles.** After the 3rd unresolved failure → **escalate**
  with diagnosis and options. Report failures faithfully — never mark a failing
  gate as passed.

---

## 6. Continuous Improvement (self-learning)

The system learns from recurring mistakes:
- **Same issue twice** (any stage) → **update `CLAUDE.md`** with a standing
  convention so it's *prevented*, not re-caught.
- **New recurring pattern** → codify it as a project convention / lint rule /
  reusable primitive.
- **Token thrash** (Build repeatedly overrides spec values) → the token system
  is wrong → trigger a **mid-project redesign**: pause Build, return to Design,
  fix tokens, resume.
- **Unrealistic budget** (a target the motion brief can't meet) → renegotiate
  with the human and record the new target.

A **mid-project redesign** routes back through Design (never ad-hoc patched in
Build) when: the spec self-contradicts, QA fails on *design* grounds, or human
review rejects the direction.

---

## 7. Handoff Rules

- **Strategy → Design:** approved `STRATEGY.md` (ICP, positioning, offer,
  conversion goals, content hierarchy). Design serves strategy; it does not
  override it.
- **Design → Architecture:** final `DESIGN_SPEC.md` + tokens + motion spec +
  passed Pre-Engineering specialist review. If it isn't specified, Architecture
  asks — it doesn't invent.
- **Architecture → Build:** approved route/component/data/rendering plan.
- **Build → QA:** feature branch with a **green self-check** + change summary.
  A branch failing its own self-check is not handed off.
- **QA → Release:** **PASS** report + clean `/code-review` & `/security-review`
  + four Pre-Release lenses PASS + verified route list. No PASS → no Release.

---

## 8. Quick Reference Table

| Phase | Owner | Success Criteria | If FAIL |
|-------|-------|------------------|---------|
| Research / Intake | Claude + Human | Scoped tasks; key ambiguity resolved | Ask human once, then proceed |
| Strategy | Claude draft → Human sign-off | `STRATEGY.md` complete & approved | Block; resolve with human |
| Design | Claude (Human owns taste) | `DESIGN_SPEC.md` + tokens; 4 pre-eng lenses PASS | Return to Strategy/Design |
| Architecture | Claude | Routes/components/data/rendering planned | Re-plan before building |
| Build | Claude | `typecheck`+`lint`+`build` green; `/run` confirms | Fix in place, re-self-check |
| QA | Claude (read-only) | Lighthouse ≥ budgets; reviews clean | Revision loop |
| Revision (×3 max) | Claude | Findings resolved; `/simplify` applied | After 3 → escalate |
| Release | Claude (preview) / Human (prod) | 4 pre-release lenses PASS; preview verified; human approves prod | Hold; never self-promote |
