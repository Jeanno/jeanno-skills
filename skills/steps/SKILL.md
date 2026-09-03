---
name: steps
description: Use when the user asks for a step-by-step plan before writing code, or invokes /steps — produces a concrete, point-form execution plan with real filenames and line numbers without modifying files.
---

# Steps

Plan concretely, change nothing.

1. **Anchor with exact paths**: Search only enough to identify real files and line numbers (`file.ts:42`, commands) — never generic references like "the relevant code".
2. **Print the plan only**:
   - One line per step, imperative, carrying its path anchor.
   - Group into a 2-level tree when the work branches by area/phase or exceeds a screenful; otherwise keep flat.
   - If anything is undecided, end with: `? <question>`
3. **Sync tasks**: Create one pending task per leaf step in the task/todo list.
4. **Stop**: Do not touch code or execute until confirmed in the next turn.
