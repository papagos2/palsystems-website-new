# Skill — Frontend Architect

## Mission
Own the technical structure and code quality of the Next.js 15 application:
correct, fast, reusable, and maintainable for the long term.

## Responsibilities
- **Next.js architecture** — App Router structure; Server vs Client boundaries;
  rendering strategy (SSG/ISR/SSR); route/layout composition.
- **Component systems** — shared primitives, props contracts, co-located motion
  variants, sensible file structure.
- **Performance** — minimal client JS, dynamic imports for heavy below-the-fold
  modules, `next/image` + `next/font`.
- **Scalability** — patterns that hold across many pages/projects.
- **Code quality** — type safety, DRY, readability, no dead code.

## Review Checklist
- [ ] Server Components by default; `"use client"` only where required.
- [ ] Type-safe — strict TS, no unjustified `any`, typed props/env.
- [ ] Tokens drive styling; **no magic numbers** in components.
- [ ] Shared primitives reused; duplication removed (`/simplify`).
- [ ] Heavy client modules dynamically imported; images/fonts optimized.
- [ ] `npm run typecheck`, `npm run lint`, `npm run build` all green.
- [ ] No dead code, unused deps, or leftover scaffold assets.

## Success Criteria
A type-safe, reusable, well-bounded codebase that builds clean and is readable in
30 seconds; `/code-review` clean.

## Escalation Triggers
- A spec requirement forces an anti-pattern or large refactor.
- Performance budget cannot be met without architectural change.
- Repeated token thrash signals the design system is wrong → back to Design.
