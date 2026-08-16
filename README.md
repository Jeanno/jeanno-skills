# jeanno-skills

Personal agent skills for AI coding tools.

## Installation

```bash
npx skills add Jeanno/jeanno-skills
```

## Skills

- **`align`** — Stress-test plans, decisions, or proposals before acting ("grill me").
- **`realign`** — Assumption diagnosis and rapid realignment when corrected or stopped.
- **`risk`** — Blast radius analysis, regression detection, and failure vector evaluation.
- **`steps`** — Concrete, point-form step-by-step plans with exact file paths (no code changes).
- **`pm`** — Two-phase project management workflow: grill/align first, then execute with agent teams.
- **`scope`** — Scopes features, PRDs, and implementation boundaries.
- **`qa-checklist`** — Fast manual verification checklists for visual, UI, and mobile changes.
- **`write-skill`** — Framework for authoring lean, composable pyramid skills.

## Output styles

Not auto-installed. Symlink into `~/.claude/output-styles/`, then switch on with
`/output-style <name>`.

- **`copilot`** — You drive. Terse output, evidence over opinion, writes stop for
  approval. For hard problems where the agent's judgment shouldn't run unchecked.

## Philosophy

This repo is geared towards general skills, aiming to bridge the gap between agents and users.

### Skills as Anchors

As models improve, general skills should be written shorter and shorter. They will become common anchors for agents and users, preventing the user from saying one thing and agents interpreting it in their own way.

General skills are still important in the future—as stated, they are anchors. Specialized skills are obviously needed, as a general model might not have that knowledge upfront or might not be well-tuned for the job.

### The Pyramid Model

Skills should be small concepts, which might leverage other concepts (skills or not).

Skills will be built like pyramids: as we lay down the bricks for lower-level concepts, higher-level skills can be built.

With a complete set of skills, agents will be able to perform higher-level work and specific jobs.
