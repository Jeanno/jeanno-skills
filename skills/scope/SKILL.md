---
name: scope
description: Use when a GitHub issue is not ready to execute — too vague or too large to finish in one PR and needs breaking down into sub-issues.
---

# Scope

- **Phase 1 — Shape**: run `/align` on the issue until all product/UX decisions are settled, then record decisions and out-of-scope items to the issue body (`gh issue edit`).
- **Phase 2 — Cut**: decompose into standalone leaf sub-issues (1 PR, 1 platform, judgment-free):
  1. **Specify leaf**: title, 1-line scope, execution (`agent` | `human`), verification (`test` | `diff-read`), touches, and blocked-by dependencies.
  2. **Inspect code paths**: verify facts against actual files before proposing.
  3. **Propose & file**: get user approval, then create sub-issues in dependency order via `gh issue create`.

*Rule: If the issue is already bite-size after Phase 1, exit without cutting.*
