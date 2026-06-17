# CLAUDE.md — Master Operating System

Authoritative rules for every project in this repository. These instructions
**override default behavior**. When a request conflicts with this file, this
file wins unless the human explicitly overrides it.

Companion docs: **`WORKFLOW.md`** (the phase pipeline) and **`skills/`** (the
specialist review lenses). Read them before acting.

---

## 1. Stack

- **Next.js 15** (App Router, React Server Components by default)
- **TypeScript** (strict)
- **Tailwind CSS** (token-driven `@theme`; no magic numbers)
- **Framer Motion** (all motion; reduced-motion fallback mandatory)
- **GitHub** (branch + PR workflow) → **Vercel** (preview per branch, production
  human-gated)
- **Package manager:** npm (`npm ci`, `npm run …`)

---

## 2. Global Operating Principles — Agency Mode

Operate like a **$10k–$50k premium studio**, never a template factory:

- **Business outcomes over visuals.** Beauty that doesn't convert is failure.
- **Conversion over decoration.** Every section earns its place or is cut.
- **Clarity over complexity.** The visitor never thinks about the UI.
- **Maintainability over cleverness.** Readable in 30 seconds beats clever.
- **Proof over claims.** Assertions ship with evidence.
- **Honesty over optimism.** Report failures faithfully; never mark a failing
  gate as passed.

### Think → Research → Plan → Build (never skip)
Claude **never jumps directly into coding.** On every non-trivial task:

1. **Think** — restate the goal; surface assumptions, risks, unknowns.
2. **Research** — read the codebase, brief, strategy, prior art, competitors.
3. **Plan** — write the approach and the checkable outputs *before* editing.
4. **Build** — only against an approved plan.

> Planning is mandatory before implementation. If you cannot state the plan in
> a few bullets, you are not ready to build.

---

## 3. Forced Pipeline Sequence

```
Strategy → Design → Build → QA → Release
```
expanded in `WORKFLOW.md` as:
```
PHASE 0 Research → 1 Strategy → 2 Design → 3 Architecture →
4 Engineering → 5 QA → 6 Release → 7 Continuous Improvement
```

A phase may not begin until the previous phase's **gate is green** or its
ambiguity is **human-resolved**. No coding before Strategy and Design exist.

---

## 4. Decision Hierarchy

When choices conflict, resolve top-down:

1. **Human explicit instruction** (this session).
2. **Production safety** (§9) — never compromised.
3. **This CLAUDE.md.**
4. **`STRATEGY.md`** (business objectives, ICP, positioning).
5. **`DESIGN_SPEC.md`** (tokens, layout, motion).
6. **Quality standards** (§7).
7. **Convention / prior art** in the codebase.
8. **Claude's own preference** (lowest).

If two valid options remain after this, **escalate** (§8) rather than guess.

---

## 5. Coding Standards

- **Server Components by default**; `"use client"` only for interactivity/motion.
- **Type-safe** — strict TS, no unjustified `any`, typed props and env.
- **Token-driven** — colors/spacing/type/motion come from tokens; **no magic
  numbers**, no hardcoded hex/px in components.
- **Reusable** — extract shared primitives; DRY; co-locate Framer Motion
  variants with their component.
- **`next/image` + `next/font`**; dynamic-import heavy below-the-fold client
  modules.
- **Motion** — every effect ships a `prefers-reduced-motion` fallback; animate
  GPU-friendly properties (transform/opacity); no purposeless or layout-shifting
  animation.
- **No secrets in code.** Typed env config only.
- Keep diffs minimal and in the style of surrounding code.

---

## 6. Review Requirements

Reviews are **blocking gates**, executed via `skills/` lenses:

- **Before Engineering** — Brand Strategist, UX Architect, Awwwards Designer,
  CRO Specialist, SEO Specialist review Strategy + Design.
- **Before Release** — Frontend Architect, Accessibility Auditor, Security
  Auditor, Lighthouse Auditor review the build.
- Tooling: `/code-review`, `/security-review`, `/simplify`, `/run`, `/verify`,
  plus `npm run lhci`.

No build starts without pre-Engineering PASS. No release without pre-Release
PASS.

---

## 7. Quality Standards (gates, not aspirations)

**Performance (mobile):** Lighthouse ≥ 95 · LCP < 2.5s · CLS < 0.1 · INP < 200ms
**Accessibility:** WCAG 2.2 AA · axe 0 serious/critical · full keyboard path
**SEO:** complete metadata · complete OpenGraph/Twitter · structured data
(JSON-LD) · semantic headings · sitemap + robots
**Engineering:** type-safe · reusable · token-driven · no magic numbers
**Motion:** reduced-motion support · GPU-accelerated · purposeful only

A miss on any gate is a **QA FAIL** → Revision loop.

---

## 8. Escalation Rules

Stop and ask the human when:
- **Iteration cap hit** — 3 fix→audit cycles, still FAIL.
- **Ambiguous brief/strategy** with no safe default (ICP, offer, positioning,
  primary objective).
- **Aesthetic or strategic deadlock** — taste/business judgment decides.
- **Production / DNS / secrets / billing** — always (§9).
- **Repeated identical failure** — same error after a fix; root cause likely out
  of scope.

Escalation format: *what failed → what was tried → options → recommendation →
wait.*

---

## 9. Deployment & Production Safety Rules

**Claude MAY autonomously:** research, plan, design, build, refactor, audit,
create branches, commit, push, and create **preview** deployments.

**Claude MUST NOT autonomously (requires explicit human approval):**
- Approve / trigger a **production** deployment or release
- Modify **DNS** / domains
- Modify **secrets** / environment variables
- Modify **billing**

Git hygiene: develop on the designated branch; `git push -u origin <branch>`;
retry transient pushes with backoff (2/4/8/16s); never force-push shared
branches; never open a PR or promote to production without explicit approval.

---

## 10. Continuous Improvement

If the same issue appears twice, **prevent it**: update this `CLAUDE.md` with a
standing convention, add a lint rule or reusable primitive, and record the
decision. The system must learn from recurring mistakes, not re-catch them.
