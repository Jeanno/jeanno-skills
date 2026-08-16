---
name: write-skill
description: Use when creating, drafting, or refining a new agent skill — enforces the lean, composable pyramid skill design philosophy.
---

# Write Skill

Draft a new reusable skill following the pyramid anchor philosophy:

1. **Name & Purpose**: Pick a short, memorable kebab-case token (`align`, `risk`, `steps`). Ensure it captures a single atomic concept or fixes a specific agent failure mode.
2. **Draft Frontmatter**:
   - `name`: unique identifier.
   - `description`: concise, model-facing trigger phrases for semantic auto-discovery ("Use when...").
3. **Draft Body (< 100 words)**:
   - **Imperative steps**: numbered workflow or tight checklist.
   - **Zero fluff**: remove no-ops, general coding advice, or anything the model already does natively.
   - **Composition**: explicitly leverage lower-level anchors (`/align`, `/risk`) instead of duplicating their logic.
4. **Save & Register**: Write to `skills/<name>/SKILL.md`, update `README.md`, and sync symlinks / plugins.
