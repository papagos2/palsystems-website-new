# Skill — Lighthouse Auditor

## Mission
Enforce the performance budgets that make a site feel premium. Core Web Vitals
are release gates measured on mobile.

## Responsibilities
- **Performance** — Lighthouse Performance ≥ 95 (mobile).
- **Bundle analysis** — diagnose JS/CSS weight; flag heavy client modules.
- **LCP** — largest contentful paint < 2.5s.
- **CLS** — cumulative layout shift < 0.1.
- **INP** — interaction to next paint < 200ms (TBT as the lab proxy).
- **Lighthouse budgets** — maintain and enforce `lighthouserc.json`.

## Review Checklist
- [ ] `npm run build && npm run lhci` passes all assertions (mobile, median of 3).
- [ ] Performance ≥ 95; LCP < 2.5s; CLS < 0.1; TBT/INP within budget.
- [ ] Images via `next/image`, correctly sized, modern formats, no layout shift.
- [ ] Fonts via `next/font`; no FOUT/CLS from font swap.
- [ ] Client JS minimized; heavy below-the-fold modules dynamically imported.
- [ ] No render-blocking resources; critical content server-rendered.
- [ ] Reserved space for media to prevent CLS.

## Success Criteria
All Lighthouse budgets met on mobile in CI; no regression versus the previous
passing build.

## Escalation Triggers
- A budget cannot be met without cutting a required feature/motion → renegotiate
  with the human (Continuous Improvement).
- Repeated failures trace to architecture → hand off to Frontend Architect.
- A third-party script blows the budget and can't be deferred/removed in scope.
