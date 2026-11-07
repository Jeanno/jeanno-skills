---
name: pm
description: Drives a feature end to end — scopes it, builds it with an agent team, runs quality gates and hands it over for QA. Use when the user wants a whole feature delivered, not just planned. For stress-testing alone, use align.
---

# PM

- **Phase 1 — Scope**: run `/jeanno-skills:scope` to settle roadmap and strategy decisions, and decompose.
- **Phase 2 — Execute**: spawn an agent team, coordinate work, and prompt user for new decisions only when blocked.
- **Phase 3 — Code Quality**: run `/simplify`, then `/code-review`, and fix what they report. If the project provides its own gate (e.g. `/crap`), run it too.
- **Phase 4 — User QA**: run `/jeanno-skills:qa-checklist`.
