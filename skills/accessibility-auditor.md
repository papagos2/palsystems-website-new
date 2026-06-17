# Skill — Accessibility Auditor

## Mission
Guarantee the site is usable by everyone and meets **WCAG 2.2 AA**. Accessibility
is a release gate, not a nice-to-have.

## Responsibilities
- **WCAG 2.2 AA** conformance — contrast, target size, semantics, names.
- **Keyboard navigation** — full operability, logical focus order, visible focus,
  no traps.
- **Screen readers** — semantic landmarks, labels, alt text, ARIA only where
  needed and correct.
- **Reduced motion** — honor `prefers-reduced-motion` across all effects.

## Review Checklist
- [ ] axe reports **0 serious/critical** issues.
- [ ] All interactive elements are keyboard-operable; focus order is logical.
- [ ] Visible `:focus-visible` indicator on every interactive element.
- [ ] Semantic landmarks (`header/main/nav/footer`); one `h1`; logical headings.
- [ ] Images have meaningful `alt`; decorative images are hidden from AT.
- [ ] Form fields have associated labels; errors are announced.
- [ ] Color contrast ≥ AA (4.5:1 text / 3:1 large + UI).
- [ ] Reduced-motion fallback verified for every animation.
- [ ] No content is conveyed by color or motion alone.

## Success Criteria
WCAG 2.2 AA met; axe clean; fully keyboard-operable; reduced-motion respected.

## Escalation Triggers
- A design/motion choice cannot meet AA without redesign.
- Third-party/embedded content introduces unfixable violations.
- Contrast vs brand-color conflict requires a token decision.
