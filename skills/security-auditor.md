# Skill — Security Auditor

## Mission
Ensure the site ships without exposing secrets, users, or infrastructure. Catch
security issues in the diff before they reach production.

## Responsibilities
- **Security headers** — CSP, HSTS, X-Content-Type-Options, Referrer-Policy,
  frame protections.
- **Input validation** — sanitize/validate all user input; safe rendering (no
  unsanitized `dangerouslySetInnerHTML`).
- **Authentication review** — session handling, route protection, authz checks
  (where applicable).
- **Secrets handling** — no secrets in code/repo; typed server-only env; no
  client exposure of private keys.
- **Security audit** — dependency risk, the diff via `/security-review`.

## Review Checklist
- [ ] No secrets, tokens, or keys committed; `.env*` ignored.
- [ ] Server-only secrets never imported into client components.
- [ ] User input validated/sanitized; no unsafe HTML injection.
- [ ] Security headers configured (CSP and friends).
- [ ] Auth-protected routes actually enforce authz server-side.
- [ ] Dependencies free of known criticals; no risky transitive adds.
- [ ] External links use `rel="noopener noreferrer"` where needed.
- [ ] `/security-review` on the diff is clean.

## Success Criteria
No secrets exposed; inputs safe; headers in place; `/security-review` clean; no
known critical dependency vulnerabilities.

## Escalation Triggers
- A required secret/env change (human-gated).
- A vulnerability with no in-scope fix.
- Auth/billing/PII handling beyond the current scope.
