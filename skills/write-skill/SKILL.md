---
name: write-skill
description: Use when creating, drafting, or refining a new agent skill — enforces the lean, composable pyramid skill design philosophy.
---

# Write Skill

Draft a new reusable skill following the pyramid anchor philosophy:

1. **Name & Purpose**: Pick a short, memorable kebab-case token (`align`, `risk`, `steps`). Ensure it captures a single atomic concept or fixes a specific agent failure mode.
2. **Scan & Compose**: Inspect existing skills in the repository. Actively compose with available anchors (`/align`, `/risk`, `/steps`, etc.) and refactor related skills if necessary to eliminate duplicated logic.
3. **Draft Frontmatter**:
   - `name`: unique identifier.
   - `description`: concise, model-facing trigger phrases for semantic auto-discovery ("Use when...").
4. **Draft Body (< 100 words)**:
   - **Imperative steps**: numbered workflow or tight checklist.
   - **Zero fluff**: remove no-ops, general advice, or anything the model already does natively.
5. **Save & Register**: Write to `skills/<name>/SKILL.md`, update `README.md`, and sync symlinks / plugins.
