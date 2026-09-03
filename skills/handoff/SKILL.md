---
name: handoff
description: Use when the user wants to pause and continue in a fresh session, or says "handoff", "hand this off", "wrap up for next session" — writes a resumable brief, not a transcript summary.
argument-hint: "What will the next session focus on?"
disable-model-invocation: true
---

# Handoff

Write what a stranger needs to resume, nothing they can re-derive.

1. **Goal and status**: What was asked, what is done, what is not — one line each. Tailor to the argument if given.
2. **Anchor state**: Branch, uncommitted changes, failing tests, running processes, files touched (`file.ts:42`).
3. **Decisions made**: Each choice and why it won, so the next session does not relitigate.
4. **Reference, don't repeat**: Link specs, plans, issues, commits by path or URL.
5. **Next step**: The first concrete action, then open questions as `? <question>`.
6. **Deliver**: Redact secrets. Write to `$TMPDIR/handoff-<repo>-<date>.md`, print the path and the brief, then stop.
