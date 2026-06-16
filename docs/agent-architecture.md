# Awwwards Website Studio — Autonomous Agent Architecture

Optimal autonomous agent structure for building premium, award-tier websites
with Claude Code → GitHub → Vercel on Next.js 15, TypeScript, Tailwind, and
Framer Motion.

> Design principle: **the minimum number of agents that maximizes quality.**
> The quality multiplier is *separation of creation and critique* with a
> *single writer of code*. Everything else is overhead and was cut.

---

## 1. Agent roster

| # | Agent | Role | Writes code? | Talks to human? |
|---|-------|------|:---:|:---:|
| 0 | **studio-director** | Orchestrator / loop driver | ✕ | ✓ (only one) |
| 1 | **design-director** | Art direction, design system, motion spec | spec+tokens only | ✕ |
| 2 | **frontend-engineer** | Sole implementer (incl. motion) | ✓ (only one) | ✕ |
| 3 | **quality-auditor** | Independent read-only quality gate | ✕ | ✕ |
| 4 | **release-engineer** | GitHub + Vercel delivery | ✕ | ✕ |

### Sub-agents (justified, on-demand)

| Sub-agent | Parent | Activates when |
|-----------|--------|----------------|
| **copy-strategist** | design-director | Real copy/microcopy/SEO content needed |
| **performance-optimizer** | quality-auditor | CWV/Lighthouse budgets FAIL + deep root-cause needed |

**Total: 5 agents + 2 sub-agents.**

---

## 2. Hierarchy

```
                        ┌─────────────────────┐
                        │   studio-director   │  ← orchestrator, sole human contact
                        │  (plan/gate/escalate)│
                        └──────────┬──────────┘
            ┌──────────────┬───────┴───────┬──────────────┐
            ▼              ▼               ▼              ▼
   ┌────────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────────────┐
   │ design-director│ │  frontend-   │ │  quality-    │ │   release-     │
   │ (spec+tokens)  │ │  engineer    │ │  auditor     │ │   engineer     │
   │                │ │ (sole writer)│ │ (read-only)  │ │ (GitHub+Vercel)│
   └───────┬────────┘ └──────────────┘ └──────┬───────┘ └────────────────┘
           │                                   │
           ▼                                   ▼
   ┌────────────────┐                  ┌────────────────────┐
   │ copy-strategist│                  │ performance-       │
   │  (sub-agent)   │                  │ optimizer (sub)    │
   └────────────────┘                  └────────────────────┘
```

---

## 3. Execution flow (autonomous loop)

```
HUMAN BRIEF
   │
   ▼
[studio-director] intake → resolve ambiguity ONCE (AskUserQuestion) → STUDIO_PLAN
   │
   ▼
[design-director] art direction + tokens + motion spec
        └─(if copy needed)→ [copy-strategist] → fold into spec
   │  DESIGN_SPEC + tokens
   ▼
[studio-director] approve spec  ──gate──►
   │
   ▼
[frontend-engineer] scaffold + implement + motion
   │  self-checks: tsc / lint / next build / dev screenshot
   ▼ (green only)
[quality-auditor] a11y · perf · responsive · visual · code  ──►  VERDICT
   │                         └─(perf fail)→ [performance-optimizer] → remediation spec
   │
   ├── FAIL ──► back to [frontend-engineer] (fix brief)  ─┐
   │                                                       │  ◄── QUALITY LOOP
   │            (iteration counter ++ , cap = 3)           │      (re-audit)
   │◄──────────────────────────────────────────────────────┘
   │
   └── PASS ──►
   ▼
[release-engineer] branch → commit → PR → Vercel PREVIEW → verify URL
   │
   ▼
[studio-director] report preview + audit summary to human
   │
   ▼
PRODUCTION  ── requires explicit HUMAN APPROVAL ──►  promote (release-engineer)
```

Independent pages/sections are dispatched **in parallel** by the director and
re-converge at the audit gate.

---

## 4. Review loops

| Loop | Participants | Exit condition |
|------|--------------|----------------|
| **Self-check (inner)** | frontend-engineer | tsc + lint + build + smoke screenshot green |
| **Quality loop (core)** | frontend-engineer ⇄ quality-auditor | VERDICT = PASS (all budgets met) |
| **Perf deep-dive** | quality-auditor → performance-optimizer → frontend-engineer | budget recovered |
| **Visual sign-off** | quality-auditor (+ design-director for taste calls) | spec conformance |
| **Deploy verify** | release-engineer | preview renders, CI green, routes 200 |

The Quality loop is capped at **3 iterations** before escalation.

---

## 5. Escalation rules

Escalation always flows up to `studio-director`, which is the only agent that
contacts the human.

1. **Iteration cap** — 3 Build⇄Audit cycles without PASS → human.
2. **Repeated identical failure** — same finding unresolved twice → human.
3. **Aesthetic deadlock** — subjective taste dispute → design-director final
   call; if still blocked → human.
4. **Irreversible / outward-facing** — production deploy, domain/DNS, secrets,
   deleting non-self-authored work → human approval required.
5. **Ambiguous/contradictory brief** — not resolvable by defaults → human.

---

## 6. Why this many — and not more or fewer

**Challenged designs and the verdict:**

- **One mega-agent?** *Rejected.* A builder auditing its own work is biased;
  context bloats; no quality gate. Quality drops.
- **Separate "Animation/Motion" agent?** *Rejected.* Motion is tightly coupled
  to the DOM/component it lives in. A handoff seam mid-component creates
  integration bugs and split ownership. Motion stays inside frontend-engineer,
  specified by design-director. (This is the biggest reduction vs. naive setups.)
- **Separate SEO / DevOps / Testing agents?** *Rejected as redundant.* SEO copy
  → copy-strategist; technical SEO + tests → quality-auditor checklist; ops →
  release-engineer. No standalone agents needed.
- **Performance-optimizer as a full agent?** *Reduced to a sub-agent.* Deep CWV
  work is occasional and a different cadence than the standard audit — but it's
  read-only and feeds the single writer, so it's a sub-agent, not a peer.
- **Two code writers (e.g., perf-optimizer patches too)?** *Rejected.* Two
  writers = merge conflicts + split ownership. **Single-writer model** keeps the
  codebase coherent.

**The two structural invariants that produce quality:**

1. **Separation of creation and critique** — frontend-engineer builds,
   quality-auditor judges. An independent critic catches what the builder can't
   see.
2. **Single writer of application code** — only frontend-engineer edits feature
   code. Everyone else specs, audits, or ships. No conflicts, one source of
   truth.

Fewer agents lose the critique gate. More agents add handoff seams and
redundancy without adding quality. Five + two is the floor for award-tier output.

---

## 7. Implementation plan

**Phase 0 — Foundation (this commit)**
- `.claude/agents/*` definitions (done).
- `CLAUDE.md` quality bars + conventions (done).
- Architecture doc (this file).

**Phase 1 — Project scaffold (DONE)** (frontend-engineer, via studio-director)
- ✓ `create-next-app@15` (App Router, TS, src dir, ESLint, Tailwind v4),
  Framer Motion added. Next 15.5.19 / React 19.
- ✓ Self-check gate green: `tsc --noEmit`, `lint`, `next build`.
- Next: wire design tokens into the Tailwind `@theme` once the DESIGN_SPEC lands.

**Phase 2 — CI & quality gates (DONE)**
- ✓ `.github/workflows/ci.yml`: `quality` job (typecheck · lint · build) +
  `lighthouse` job (Lighthouse-CI, mobile, against `CLAUDE.md` budgets).
- ✓ `lighthouserc.json`: perf ≥ 0.95, a11y = 1, LCP < 2.5s, CLS < 0.1,
  TBT < 200ms (INP lab proxy); 3 runs, median.
- ✓ `.claude/settings.json` SessionStart hook pre-warms `pnpm install` for
  web sessions.

**Phase 3 — Vercel**
- Link project; preview deploy per PR (release-engineer via Vercel MCP);
  production gated on human approval.

**Phase 4 — First build loop**
- Run the full Design → Build → Audit → Release loop on the landing page as the
  reference implementation; tune budgets and motion conventions from results.

**Phase 5 — Scale**
- Parallel section/page builds re-converging at the audit gate.

---

## 8. Tooling map (MCP servers wired into agents)

| Capability | Server | Used by |
|------------|--------|---------|
| Figma intake / tokens / Code Connect | Figma MCP | design-director |
| Vercel deploy / logs / project mgmt | Vercel MCP | release-engineer |
| PRs / CI status / reviews | GitHub MCP | release-engineer, studio-director |

Production promotion, domain purchase, and secret/env changes via these servers
are **human-gated** per the escalation rules.
