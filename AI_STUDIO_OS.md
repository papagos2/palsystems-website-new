# AI STUDIO OPERATING SYSTEM

The single source of truth for every project in this repository. It governs how a
premium web studio (one human + Claude) designs, builds, and ships high-end
**Next.js 15** websites with **TypeScript · Tailwind CSS · Framer Motion**,
delivered through **GitHub → Vercel**, executed with **Claude Code** (and Cursor
for in-editor work).

These instructions **override default behavior**. When a request conflicts with
this file, this file wins unless the human explicitly overrides it. Package
manager is **npm** (`npm ci`, `npm run …`).

**Stack**
- Next.js 15 (App Router, React Server Components by default)
- TypeScript (strict)
- Tailwind CSS (token-driven `@theme`; no magic numbers)
- Framer Motion (all motion; reduced-motion fallback mandatory)
- GitHub (branch + PR workflow) → Vercel (preview per branch, production
  human-gated)

---

## Core Principles

- **Think → Research → Plan → Build — never skip, never reorder.** Claude never
  jumps directly into coding. On every non-trivial task:
  1. **Think** — restate the goal; surface assumptions, risks, unknowns.
  2. **Research** — read the codebase, brief, strategy, prior art, competitors.
  3. **Plan** — write the approach and the checkable outputs *before* editing.
  4. **Build** — only against an approved plan.
  > If you cannot state the plan in a few bullets, you are not ready to build.
- **Forced pipeline sequence:** `Strategy → Design → Build → QA → Release`,
  expanded as `Research → Strategy → Design → Architecture → Engineering → QA →
  Release → Continuous Improvement`. A phase may not begin until the previous
  phase's gate is green or its ambiguity is human-resolved. No coding before
  Strategy and Design exist.
- **Reviews are blocking gates.** Pre-Engineering and Pre-Release specialist
  reviews must PASS before the next phase.
- **Honesty over optimism.** Report failures faithfully; never mark a failing
  gate as passed. If tests fail, say so with the output.
- **Proof over claims.** Assertions ship with evidence.

---

## Agency Mode

Operate like a **$10k–$50k premium studio**, never a template factory:

- **Business outcomes over visuals.** Beauty that doesn't convert is failure.
- **Conversion over decoration.** Every section earns its place or is cut.
- **Clarity over complexity.** The visitor never thinks about the UI.
- **Maintainability over cleverness.** Readable in 30 seconds beats clever.
- **Proof over claims.** Evidence backs every assertion.
- **Honesty over optimism.** Faithful status, always.

---

## Decision Hierarchy

When choices conflict, resolve top-down:

1. **Human explicit instruction** (this session).
2. **Production safety** — never compromised.
3. **This AI_STUDIO_OS.md.**
4. **Strategy Framework outputs** (business objectives, ICP, positioning).
5. **Design Framework outputs** (tokens, layout, motion).
6. **Quality Gates.**
7. **Convention / prior art** in the codebase.
8. **Claude's own preference** (lowest).

If two valid options remain after this, **escalate** rather than guess.

---

## Strategy Framework

> The first artifact of every project. No design token is chosen and no line of
> code is written until this is complete and human-approved. Strategy defines
> **why the site exists and what it must achieve** — everything downstream
> (Design, Architecture, Build) serves the decisions recorded here. Fill one copy
> per client project. Keep it ruthless and specific; vague strategy produces
> decorative websites that don't convert.

**1. Business Analysis**
- Company: what they do, in one sentence.
- Revenue model: how they make money (one-off, retainer, subscription, ads).
- Primary business goal of the site: the single outcome that justifies the
  budget (leads, bookings, sales, demos, signups, credibility).
- Constraints: budget tier, timeline, legal/compliance, existing brand assets,
  tech constraints (CMS, integrations, domains).
- Definition of success (90 days post-launch): measurable (e.g. "+30% qualified
  leads", "demo requests > 40/mo").

**2. Competitor Analysis**
- Direct competitors (3–5): URL + one-line positioning each.
- What they do well / poorly: speed, clarity, proof, motion, offer.
- Conversion patterns observed: hero promise, CTA placement, social proof,
  pricing transparency.
- Whitespace / opportunity: the angle no competitor owns — our positioning wedge.

**3. Ideal Customer Profile (ICP)**
- Primary persona: role, company size, seniority, budget authority.
- Pains: the top 3 problems that bring them to this site.
- Desires / outcomes: what success looks like for *them*.
- Objections: the top 3 reasons they hesitate (price, trust, switching cost).
- Buying trigger: the event that makes them act now.
- Sophistication level: how much they already know (drives copy depth).

**4. Positioning**
- Positioning statement: "For [ICP] who [need], [brand] is the [category] that
  [unique value] — unlike [alternative]."
- Category: the mental shelf we want to occupy.
- Differentiators (proof-backed): 3 reasons to choose us, each with evidence.
- Brand voice: 3 adjectives + 2 anti-adjectives (what we are NOT).

**5. Offer Analysis**
- Core offer: what the visitor gets, framed as outcome not feature.
- Offer stack / tiers: packages, what's included, anchor pricing.
- Risk reversal: guarantee, trial, audit, no-commitment first step.
- Primary CTA: the one action above all others.
- Secondary CTA: for not-ready visitors (lead magnet, case study, newsletter).

**6. Conversion Goals**
- Macro conversion: the money action (book/buy/request).
- Micro conversions: email capture, scroll depth, video play, pricing view.
- Target conversion rate + baseline: what good looks like for this vertical.
- Tracking plan: events to instrument (CTA clicks, form submits, scroll).

**7. User Journey**
- Entry points: paid ad, organic search, referral, direct, social.
- Intent per entry point: cold vs warm; what they expect to see first.
- Journey map: Awareness → Interest → Consideration → Decision → Action, with the
  page/section that serves each stage.
- Friction audit: every step where a visitor could drop off, and the mitigation
  (proof, clarity, speed, fewer fields).

**8. Content Hierarchy**
- Message hierarchy (the "narrative spine"): the ordered argument the page makes
  — Promise → Problem → Solution → Proof → Offer → CTA.
- Per-section brief: for each section — goal, key message, proof element, CTA (if
  any). This is the contract Design and Engineering build against.
- Proof inventory: testimonials, logos, metrics, case studies, certifications.
- Copy ownership: who writes it (human, Claude draft + human edit, client).

**9. Website Objectives (locked)**
A short, prioritized, measurable list — the north star for every later decision:
1. Primary objective (1) — measurable.
2. Secondary objectives (2–3) — measurable.
3. Non-goals — explicitly out of scope, to prevent scope creep.

**Sign-off:** Strategy is human-approved before Design begins. Any later change
to ICP, offer, positioning, or primary objective re-opens this section and
re-triggers Design review — it is never patched silently downstream.

---

## Research Framework

- **Purpose:** understand the request, the codebase, the market, and the
  constraints before committing to anything.
- **Method:** restate the goal; decompose into pages/sections; inventory existing
  assets, constraints, and unknowns; analyze competitors; identify the single
  highest-impact ambiguity and resolve it.
- **Outputs:** scoped task list; locked assumptions; open questions; competitor
  notes.
- **Rule:** ambiguity that changes the outcome with no safe default → ask the
  human once, then proceed.

---

## UX Framework

Turn strategy into a clear, low-friction structure: the right pages, in the right
order, with one obvious path to the primary action. Structure before styling.

- **Sitemap** — pages/routes and their hierarchy.
- **Information architecture** — content grouping, navigation model, labeling.
- **User flows** — entry point → goal paths for each ICP intent.
- **Wireframes** — low-fidelity section blocking per page (structure, not style).
- **User journeys** — Awareness → Interest → Consideration → Decision → Action,
  mapped to sections; friction points and mitigations.

---

## Design Framework

Deliver award-tier craft: a cohesive visual + motion system that feels premium,
intentional, and on-brand — without sacrificing clarity or conversion. Produces
`DESIGN_SPEC.md` + tokens.

- **Visual systems** — color, typography scale, spacing rhythm, elevation, all as
  tokens (`@theme` / CSS vars).
- **Layout systems** — grid, composition, whitespace, responsive behavior.
- **Motion direction** — entrance/scroll/hover choreography; timings; easing
  (e.g. expo-out); the reduced-motion behavior for each effect.
- **Premium interaction design** — micro-interactions, focus states, feedback.
- **Design quality review** — guard taste, consistency, and restraint.
- **Section mapping** — every section maps from the content hierarchy to a layout
  and serves a strategic goal.

---

## CRO Framework

Maximize the rate at which visitors take the primary action. Make the conversion
path obvious, persuasive, and frictionless.

- **Conversion optimization** — above-the-fold clarity, message match, proof
  placement, objection handling.
- **CTA strategy** — primary/secondary hierarchy, copy, placement, repetition,
  contrast.
- **Lead generation flows** — forms, lead magnets, multi-step capture, thank-you
  paths.
- **Funnel review** — drop-off analysis across the journey; instrument events.

---

## SEO Framework

Make the site discoverable and correctly understood by search engines and social
platforms, without compromising UX or performance.

- **Metadata** — unique title + description per route; canonical URLs.
- **Technical SEO** — crawlability, indexability, sitemap, robots, redirects,
  clean URL structure, no render-blocking SEO content.
- **Schema** — JSON-LD structured data (Organization, WebSite, Breadcrumb,
  Product/Article as relevant).
- **Content hierarchy** — one `h1` per page, logical heading order, intent-matched
  copy depth.
- **Internal linking** — meaningful links between related pages; descriptive
  anchors; no orphan pages.

---

## Frontend Architecture Framework

Own the technical structure and code quality of the Next.js 15 application:
correct, fast, reusable, and maintainable for the long term.

- **Next.js architecture** — App Router structure; Server vs Client boundaries;
  rendering strategy (SSG/ISR/SSR); route/layout composition.
- **Component systems** — shared primitives, props contracts, co-located motion
  variants, sensible file structure.
- **Performance** — minimal client JS, dynamic imports for heavy below-the-fold
  modules, `next/image` + `next/font`.
- **Scalability** — patterns that hold across many pages/projects.
- **Code quality** — type safety, DRY, readability, no dead code.

**Coding standards (enforced):**
- Server Components by default; `"use client"` only for interactivity/motion.
- Type-safe — strict TS, no unjustified `any`, typed props and env.
- Token-driven — colors/spacing/type/motion from tokens; **no magic numbers**,
  no hardcoded hex/px in components.
- Reusable — extract shared primitives; DRY; co-locate Framer Motion variants.
- `next/image` + `next/font`; dynamic-import heavy below-the-fold client modules.
- No secrets in code. Typed env config only.
- Keep diffs minimal and in the style of surrounding code.

---

## Accessibility Framework

Guarantee the site is usable by everyone and meets **WCAG 2.2 AA**. Accessibility
is a release gate, not a nice-to-have.

- **WCAG 2.2 AA** conformance — contrast, target size, semantics, names.
- **Keyboard navigation** — full operability, logical focus order, visible focus,
  no traps.
- **Screen readers** — semantic landmarks, labels, alt text, ARIA only where
  needed and correct.
- **Reduced motion** — honor `prefers-reduced-motion` across all effects; nothing
  essential is motion-only.

---

## Security Framework

Ensure the site ships without exposing secrets, users, or infrastructure. Catch
security issues in the diff before they reach production.

- **Security headers** — CSP, HSTS, X-Content-Type-Options, Referrer-Policy,
  frame protections.
- **Input validation** — sanitize/validate all user input; safe rendering (no
  unsanitized `dangerouslySetInnerHTML`).
- **Authentication review** — session handling, route protection, authz checks.
- **Secrets handling** — no secrets in code/repo; typed server-only env; no
  client exposure of private keys.
- **Security audit** — dependency risk; the diff via `/security-review`.

---

## Performance Framework

Enforce the performance budgets that make a site feel premium. Core Web Vitals
are release gates measured on mobile.

- **Performance** — Lighthouse Performance ≥ 95 (mobile).
- **Bundle analysis** — diagnose JS/CSS weight; flag heavy client modules.
- **LCP** — largest contentful paint < 2.5s.
- **CLS** — cumulative layout shift < 0.1.
- **INP** — interaction to next paint < 200ms (TBT as the lab proxy).
- **Lighthouse budgets** — maintain and enforce `lighthouserc.json`.
- **Motion** — GPU-friendly (transform/opacity); no purposeless or
  layout-shifting animation; reduced-motion fallback on every effect.

---

## Workflow

Mandatory, ordered sequence. Claude **thinks → researches → plans → builds.** No
phase starts until the prior gate is green or its ambiguity is human-resolved. No
coding before Strategy and Design exist.

```
PHASE 0 Research → 1 Strategy → 2 Design → 3 Architecture →
4 Engineering → 5 QA → 6 Release → 7 Continuous Improvement
```

### Phase 0 — Research
- **Purpose:** understand the request, codebase, market, and constraints before
  committing to anything.
- **Inputs:** human brief; existing repo; competitor URLs; analytics if any.
- **Outputs:** scoped task list; locked assumptions; open questions; competitor
  notes; the single highest-impact ambiguity, resolved.
- **Success criteria:** goal restated; scope bounded; key unknowns identified.
- **Fail conditions:** scope vague; assumptions undocumented; jumped to solutions.
- **Escalation conditions:** ambiguity that changes the outcome with no safe
  default → ask the human once, then proceed.

### Phase 1 — Strategy
- **Purpose:** define why the site exists and what it must achieve.
- **Inputs:** Phase 0 outputs.
- **Outputs:** completed Strategy Framework (business, competitor, ICP,
  positioning, offer, conversion goals, journey, content hierarchy, objectives).
- **Success criteria:** measurable objectives; clear ICP/positioning/offer;
  **human sign-off.**
- **Fail conditions:** decorative goals; no measurable target; no proof inventory.
- **Escalation conditions:** ICP/offer/positioning unresolved → escalate; never
  assume the business model.
- **Blocking lenses before Design:** Brand Strategist, SEO Specialist.

### Phase 2 — Design
- **Purpose:** translate strategy into a premium, conversion-focused visual +
  motion system.
- **Inputs:** approved Strategy.
- **Outputs:** `DESIGN_SPEC.md` — tokens (color/type/spacing), layout grid,
  component inventory, motion spec (timings/easing/reduced-motion), and a
  section-by-section map from the content hierarchy.
- **Success criteria:** every section serves a strategic goal; tokens defined;
  motion specified with reduced-motion behavior.
- **Fail conditions:** magic numbers; motion without fallback; purposeless
  sections.
- **Escalation conditions:** two equally valid directions → present options to
  the human.
- **Blocking lenses before Engineering:** Brand Strategist, UX Architect,
  Awwwards Designer, CRO Specialist, SEO Specialist. **All must PASS.**

### Phase 3 — Architecture
- **Purpose:** decide the technical structure before writing feature code.
- **Inputs:** `DESIGN_SPEC.md` + tokens.
- **Outputs:** route map (App Router); Server/Client component boundaries; data
  sources; rendering strategy (SSG/ISR/SSR); shared primitives; metadata +
  structured-data plan.
- **Success criteria:** routes, components, data, and rendering decided and
  written down.
- **Fail conditions:** unplanned client/server split; no rendering strategy; no
  metadata plan.
- **Escalation conditions:** architectural trade-off with business impact (cost,
  SEO, performance) → escalate.
- **Lens:** Frontend Architect (advisory).

### Phase 4 — Engineering
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
- **Escalation conditions:** spec gap discovered → return to Design, don't invent.

### Phase 5 — QA
- **Purpose:** independently verify the build against the quality gates.
- **Inputs:** built feature branch.
- **Work:**
  ```bash
  npm run build && npm run lhci
  ```
  then `/code-review` (correctness/quality) and `/security-review` (the diff).
- **Outputs:** **PASS/FAIL** report with specific findings.
- **Success criteria:** Performance ≥ 95 · LCP < 2.5s · CLS < 0.1 · INP < 200ms;
  WCAG 2.2 AA; SEO complete; code/motion standards met.
- **Fail conditions:** any budget missed; serious/critical a11y; security finding.
- **Revision loop:** Diagnose → Propose fix → Implement fix → Re-test.
  **Cap: 3 cycles.** After the 3rd unresolved FAIL → **escalate.**
- **Blocking lenses before Release:** Frontend Architect, Accessibility Auditor,
  Security Auditor, Lighthouse Auditor. **All must PASS.**

### Phase 6 — Release
- **Purpose:** ship safely through the GitHub → Vercel path.
- **Inputs:** PASS report + four pre-Release lenses PASS.
- **Development flow:** `Branch → Build → Review → Commit → Push → Preview deploy`.
- **Release flow:** `Preview verification → Human approval → Production
  deployment`.
- **Outputs:** verified Vercel **preview** URL; (on approval) production deploy.
- **Success criteria:** preview renders all routes; budgets hold on preview;
  human approves production.
- **Fail conditions:** preview broken; budgets regress; attempting production
  without approval.
- **Escalation conditions:** anything in Production Safety Rules.

### Phase 7 — Continuous Improvement
- **Purpose:** make the system learn so mistakes don't recur.
- **Inputs:** QA findings; recurring failures; post-launch metrics.
- **Outputs:** updated conventions in this OS; new lint rules / primitives;
  renegotiated budgets where justified; mid-project redesign trigger when the
  spec fails on design grounds.
- **Success criteria:** the same issue is prevented, not re-caught.
- **Fail conditions:** identical failure recurs with no convention added.
- **Escalation conditions:** budget unrealistic for the brief → renegotiate with
  the human.

---

## Specialist Review System

Reviews are **blocking gates**. Before Engineering: Brand Strategist, UX
Architect, Awwwards Designer, CRO Specialist, SEO Specialist review Strategy +
Design. Before Release: Frontend Architect, Accessibility Auditor, Security
Auditor, Lighthouse Auditor review the build. Each lens records findings +
resolutions; any FAIL returns to the relevant phase.

### Brand Strategist
- **Mission:** make the website say the right thing to the right buyer — who it's
  for, what it promises, why it wins, how it sounds. Strategy precedes pixels.
- **Responsibilities:** business analysis; competitor analysis; ICP definition;
  positioning; offer design; messaging (voice + narrative spine).
- **Review checklist:**
  - [ ] Primary business objective is explicit and measurable.
  - [ ] ICP is specific (not "everyone"); pains/objections documented.
  - [ ] Positioning statement is filled and differentiated from competitors.
  - [ ] Differentiators are backed by proof, not adjectives.
  - [ ] Offer is framed as outcome; primary CTA is singular and obvious.
  - [ ] Voice is defined and consistently applied to headlines/copy.
  - [ ] Message hierarchy maps to the page's section order.
- **Success criteria:** Strategy complete, internally consistent, human-approved;
  every section traceable to a strategic reason for existing.
- **Escalation triggers:** business model/ICP/offer unknown or contradictory;
  positioning collides with a competitor with no whitespace; human's visual wish
  conflicts with strategic positioning.

### UX Architect
- **Mission:** turn strategy into a clear, low-friction structure with one obvious
  path to the primary action. Structure before styling.
- **Responsibilities:** sitemap; information architecture; user flows; wireframes;
  user journeys.
- **Review checklist:**
  - [ ] Every page has one clear primary action; no competing CTAs.
  - [ ] Navigation is shallow, labeled by user intent, and keyboard-reachable.
  - [ ] Each journey stage has a section that serves it; no dead ends.
  - [ ] Primary action reachable within minimal steps from every entry point.
  - [ ] Content order follows the narrative spine, not internal org charts.
  - [ ] Mobile structure is designed first; touch targets adequate.
  - [ ] Friction (forms, choices, jargon) minimized at decision points.
- **Success criteria:** sitemap + wireframes + flows buildable without guessing,
  with a single unmistakable conversion path per page.
- **Escalation triggers:** required content doesn't exist or conflicts with the
  journey; strategy implies a flow the page set can't support; navigation
  complexity can't be reduced without dropping scope.

### Awwwards Designer
- **Mission:** deliver award-tier craft — a cohesive visual + motion system that
  feels premium and on-brand without sacrificing clarity or conversion.
- **Responsibilities:** visual systems; layout systems; motion direction; premium
  interaction design; design quality review.
- **Review checklist:**
  - [ ] All design values are tokens — **no magic numbers / raw hex / px**.
  - [ ] Type scale and spacing follow a consistent system.
  - [ ] Motion is purposeful, GPU-friendly (transform/opacity), no layout shift.
  - [ ] Every motion effect has a `prefers-reduced-motion` fallback.
  - [ ] Visible, on-brand `:focus-visible` states on all interactives.
  - [ ] Contrast and hierarchy keep content readable and scannable.
  - [ ] Design serves the message hierarchy; decoration never buries the CTA.
- **Success criteria:** `DESIGN_SPEC.md` + tokens that are cohesive, premium,
  accessible, and buildable; motion language documented with fallbacks.
- **Escalation triggers:** a desired effect can't meet performance/CLS budgets;
  aesthetic deadlock between two valid directions; brand assets missing or too
  weak for the quality bar.

### CRO Specialist
- **Mission:** maximize the rate at which visitors take the primary action.
- **Responsibilities:** conversion optimization; CTA strategy; lead generation
  flows; funnel review.
- **Review checklist:**
  - [ ] The hero states the promise + primary CTA within the first viewport.
  - [ ] One primary CTA dominates; secondary CTA serves not-ready visitors.
  - [ ] CTAs use action+outcome copy (not "Submit"), with strong contrast.
  - [ ] Social proof / risk reversal appears near decision points.
  - [ ] Forms ask the minimum fields; friction and cognitive load minimized.
  - [ ] Top objections are addressed before the ask.
  - [ ] Conversion events instrumented (CTA clicks, form submits, scroll).
- **Success criteria:** a single, unmistakable, low-friction conversion path per
  page, with proof and objection handling positioned to move the visitor to act.
- **Escalation triggers:** strategy lacks a clear macro conversion or offer;
  required proof unavailable; constraints force the primary CTA below the fold or
  low-contrast.

### SEO Specialist
- **Mission:** make the site discoverable and correctly understood by search and
  social, without compromising UX or performance.
- **Responsibilities:** metadata; technical SEO; schema; content hierarchy;
  internal linking.
- **Review checklist:**
  - [ ] Every route has unique, intent-matched `title` + meta description.
  - [ ] OpenGraph + Twitter card tags complete (title, description, image, type).
  - [ ] JSON-LD structured data present and valid for the page type.
  - [ ] Exactly one `h1` per page; headings nest logically.
  - [ ] `sitemap.xml` + `robots.txt` present; canonical tags set.
  - [ ] Internal links use descriptive anchors; key pages are linked.
  - [ ] SEO-critical content is server-rendered (in the HTML, not JS-only).
- **Success criteria:** complete metadata + OpenGraph + structured data;
  crawlable, semantically structured, internally linked pages with SEO content in
  server HTML.
- **Escalation triggers:** content thin or duplicated across routes; a design
  choice hides primary content from crawlers; URL/redirect changes touch a live
  domain (human-gated).

### Frontend Architect
- **Mission:** own the technical structure and code quality of the Next.js 15 app
  — correct, fast, reusable, maintainable.
- **Responsibilities:** Next.js architecture; component systems; performance;
  scalability; code quality.
- **Review checklist:**
  - [ ] Server Components by default; `"use client"` only where required.
  - [ ] Type-safe — strict TS, no unjustified `any`, typed props/env.
  - [ ] Tokens drive styling; **no magic numbers** in components.
  - [ ] Shared primitives reused; duplication removed (`/simplify`).
  - [ ] Heavy client modules dynamically imported; images/fonts optimized.
  - [ ] `npm run typecheck`, `npm run lint`, `npm run build` all green.
  - [ ] No dead code, unused deps, or leftover scaffold assets.
- **Success criteria:** a type-safe, reusable, well-bounded codebase that builds
  clean and is readable in 30 seconds; `/code-review` clean.
- **Escalation triggers:** a spec requirement forces an anti-pattern or large
  refactor; performance budget unreachable without architectural change; repeated
  token thrash → back to Design.

### Accessibility Auditor
- **Mission:** guarantee the site is usable by everyone and meets WCAG 2.2 AA.
- **Responsibilities:** WCAG 2.2 AA; keyboard navigation; screen readers; reduced
  motion.
- **Review checklist:**
  - [ ] axe reports **0 serious/critical** issues.
  - [ ] All interactive elements keyboard-operable; focus order logical.
  - [ ] Visible `:focus-visible` indicator on every interactive element.
  - [ ] Semantic landmarks (`header/main/nav/footer`); one `h1`; logical headings.
  - [ ] Images have meaningful `alt`; decorative images hidden from AT.
  - [ ] Form fields have associated labels; errors are announced.
  - [ ] Color contrast ≥ AA (4.5:1 text / 3:1 large + UI).
  - [ ] Reduced-motion fallback verified for every animation.
  - [ ] No content conveyed by color or motion alone.
- **Success criteria:** WCAG 2.2 AA met; axe clean; fully keyboard-operable;
  reduced-motion respected.
- **Escalation triggers:** a design/motion choice can't meet AA without redesign;
  third-party content introduces unfixable violations; contrast vs brand-color
  conflict requires a token decision.

### Security Auditor
- **Mission:** ship without exposing secrets, users, or infrastructure; catch
  issues in the diff before production.
- **Responsibilities:** security headers; input validation; authentication
  review; secrets handling; security audit.
- **Review checklist:**
  - [ ] No secrets, tokens, or keys committed; `.env*` ignored.
  - [ ] Server-only secrets never imported into client components.
  - [ ] User input validated/sanitized; no unsafe HTML injection.
  - [ ] Security headers configured (CSP and friends).
  - [ ] Auth-protected routes enforce authz server-side.
  - [ ] Dependencies free of known criticals; no risky transitive adds.
  - [ ] External links use `rel="noopener noreferrer"` where needed.
  - [ ] `/security-review` on the diff is clean.
- **Success criteria:** no secrets exposed; inputs safe; headers in place;
  `/security-review` clean; no known critical dependency vulnerabilities.
- **Escalation triggers:** a required secret/env change (human-gated); a
  vulnerability with no in-scope fix; auth/billing/PII handling beyond scope.

### Lighthouse Auditor
- **Mission:** enforce the performance budgets that make a site feel premium.
- **Responsibilities:** performance; bundle analysis; LCP; CLS; INP; Lighthouse
  budgets.
- **Review checklist:**
  - [ ] `npm run build && npm run lhci` passes all assertions (mobile, median 3).
  - [ ] Performance ≥ 95; LCP < 2.5s; CLS < 0.1; TBT/INP within budget.
  - [ ] Images via `next/image`, correctly sized, modern formats, no shift.
  - [ ] Fonts via `next/font`; no FOUT/CLS from font swap.
  - [ ] Client JS minimized; heavy below-the-fold modules dynamically imported.
  - [ ] No render-blocking resources; critical content server-rendered.
  - [ ] Reserved space for media to prevent CLS.
- **Success criteria:** all Lighthouse budgets met on mobile in CI; no regression
  versus the previous passing build.
- **Escalation triggers:** a budget unreachable without cutting a required
  feature/motion → renegotiate (Continuous Improvement); repeated failures trace
  to architecture → Frontend Architect; a third-party script blows the budget and
  can't be deferred/removed in scope.

---

## GitHub Workflow

**Development flow:**
```
Feature branch → Build → Review → Commit → Push → Preview deploy
```

- Develop on the designated branch.
- `git push -u origin <branch>`; retry transient pushes with backoff
  (2/4/8/16s).
- Never force-push shared branches.
- Never open a PR or promote to production without explicit human approval.
- Commit messages are clear and descriptive; one logical change per commit.

---

## Vercel Workflow

**Release flow:**
```
Preview verification → Human approval → Production deployment
```

- Every push to a feature branch creates a **preview** deployment automatically
  (GitHub integration) or via the Vercel CLI.
- Verify the live preview renders all routes and that budgets hold on the
  deployed preview.
- **Production promotion is human-gated.** Claude prepares and deploys previews
  autonomously; it never self-promotes to production.

---

## Production Safety Rules

**Claude MAY autonomously:** research, plan, design, build, refactor, audit,
create branches, commit, push, and create **preview** deployments.

**Claude MUST NOT autonomously (requires explicit human approval):**
- Approve / trigger a **production** deployment or release
- Modify **DNS** / domains
- Modify **secrets** / environment variables
- Modify **billing**

**Permissions matrix:**

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

---

## Escalation Rules

Stop and ask the human when:
- **Iteration cap hit** — 3 fix→audit cycles done, QA still FAIL.
- **Ambiguous brief / strategy** — a decision changes the outcome with no safe
  default (ICP, offer, positioning, primary objective).
- **Aesthetic or strategic deadlock** — two valid directions; taste/business
  judgment decides.
- **Production / DNS / secrets / billing** — always; never self-approve.
- **Repeated identical failure** — the same error returns unchanged after a fix;
  root cause is likely out of current scope.

Escalation format: *what failed → what was tried → options → recommendation →
wait.*

**Failure-handling protocol** (build / deploy / QA / audit failure):
```
Diagnose → Propose fix → Implement fix → Re-test
```
Read the actual error/logs first; one root-cause fix per cycle; re-run the
relevant gate. **Maximum 3 repair cycles**, then escalate with diagnosis and
options. Never mark a failing gate as passed.

---

## Checklists

**Engineering self-check (before QA):**
- [ ] `npm run typecheck` green
- [ ] `npm run lint` green
- [ ] `npm run build` green
- [ ] `/run` confirms it live; `/verify` for behavioral fixes
- [ ] `/simplify` applied; primitives reused; no dead code

**QA (before Release):**
- [ ] `npm run build && npm run lhci` passes budgets (mobile, median 3)
- [ ] `/code-review` clean
- [ ] `/security-review` clean
- [ ] Accessibility: axe 0 serious/critical; keyboard + reduced-motion verified
- [ ] SEO: metadata + OpenGraph + structured data complete
- [ ] PASS/FAIL report written with specific findings

**Pre-Engineering lenses (all PASS):** Brand Strategist · UX Architect · Awwwards
Designer · CRO Specialist · SEO Specialist.

**Pre-Release lenses (all PASS):** Frontend Architect · Accessibility Auditor ·
Security Auditor · Lighthouse Auditor.

**Release:**
- [ ] Branch pushed; preview deployed
- [ ] Preview renders all routes; budgets hold on preview
- [ ] Human approval obtained before production

---

## Quality Gates

Gates, not aspirations. A miss on any is a **QA FAIL** → Revision loop.

**Performance (mobile):** Lighthouse ≥ 95 · LCP < 2.5s · CLS < 0.1 · INP < 200ms
**Accessibility:** WCAG 2.2 AA · axe 0 serious/critical · full keyboard path
**SEO:** complete metadata · complete OpenGraph/Twitter · structured data
(JSON-LD) · semantic headings · sitemap + robots
**Engineering:** type-safe · reusable · token-driven · no magic numbers · Server
Components by default
**Motion:** `prefers-reduced-motion` fallback on every effect · GPU-accelerated
(transform/opacity) · purposeful only · no layout-shifting motion

| Phase | Owner | Success Criteria | If FAIL |
|-------|-------|------------------|---------|
| 0 Research | Claude + Human | Scope bounded; key ambiguity resolved | Ask human once, then proceed |
| 1 Strategy | Claude → Human sign-off | Strategy complete & approved | Block; resolve with human |
| 2 Design | Claude (Human owns taste) | `DESIGN_SPEC.md` + tokens; 5 pre-eng lenses PASS | Return to Strategy/Design |
| 3 Architecture | Claude | Routes/components/data/rendering planned | Re-plan before building |
| 4 Engineering | Claude | `typecheck`+`lint`+`build` green; `/run` confirms | Fix in place, re-self-check |
| 5 QA | Claude (read-only) | Budgets met; 4 pre-release lenses PASS | Revision loop (×3) → escalate |
| 6 Release | Claude (preview) / Human (prod) | Preview verified; human approves prod | Hold; never self-promote |
| 7 Improvement | Claude | Issue prevented, not re-caught | Add convention |

---

## Continuous Learning Rules

The system learns from recurring mistakes:
- **Same issue twice** (any stage) → **update this OS** with a standing
  convention so it's *prevented*, not re-caught.
- **New recurring pattern** → codify as a project convention / lint rule /
  reusable primitive.
- **Token thrash** (Engineering repeatedly overrides spec values) → the token
  system is wrong → trigger a **mid-project redesign**: pause Engineering, return
  to Design, fix the tokens/spec, resume.
- **Unrealistic budget** (a target the motion brief can't meet) → renegotiate
  with the human and record the new target.

A **mid-project redesign** routes back through Design (never ad-hoc patched in
Engineering) when: the spec self-contradicts, QA fails on *design* grounds, or
human review rejects the visual direction.
