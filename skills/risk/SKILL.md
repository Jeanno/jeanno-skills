---
name: risk
description: Use when assessing risk, blast radius, breaking changes, regressions, or rollback vectors for a proposed change, refactor, or migration.
---

# Risk

Analyze failure vectors and blast radius before touching code:

1. **Rate Overall Risk**: `Low` | `Med` | `High` with a 1-sentence rationale.
2. **List Key Risk Vectors** (concise bullet points):
   - **Blast radius**: callers, downstream dependencies, shared state, or schemas affected.
   - **Regressions**: potential runtime failures, edge cases, concurrency bugs, or silent breakages.
   - **Unknowns**: unverified assumptions, un-reproducible states, or missing test coverage.
3. **Mitigations**: one-line recommendation or defensive fallback per identified risk.

*Stop after presenting the assessment.*
