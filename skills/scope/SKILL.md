---
name: scope
description: Use when a GitHub issue is not ready to execute — too vague (open goal, scope, or product/UX/priority call, or decisions living only in the transcript) or too large to finish in one PR and needing sub-issues, or when an existing sub-issue turned out bigger than it looked and needs re-cutting.
---

# Scope

Take one issue from "someone should do something about this" to executable:
first **shape** (no unresolved judgment left inside it), then **cut** (break
into bite-size sub-issues) if it's still too big. Replaces the former
`/shape` and `/cut` pair; `/bite` executes the leaves.

**Read the repo's bite-size docs first** if they exist —
`docs/bite-size/predicate.md` (the target: clause 4 for shaping, the full
predicate for cutting) and `docs/bite-size/github-sub-issues.md` (filing
rules and `gh` recipes). Without a predicate doc, treat "bite-size" as: one
platform's work, one PR, judgment-free, with a stated verification path.

## Subject

```bash
gh issue view <N> --comments
```

Run inside the target repo — the issue lives where the cwd's remote points.
If the decisions exist but the issue doesn't, `gh issue create` one from
them and scope that.

## Routing

```
unresolved judgment in the issue?  →  SHAPE it first
predicate passes?                  →  done; hand to `bite` — no cut needed
predicate fails?                   →  CUT it
```

**The shaping check is a hard stop before cutting.** An issue with an open
product, UX, or priority question cannot be cut — children inherit it and
none can be executed.

**The don't-cut exit outranks the request's framing.** State the predicate
verdict on the node as written, not on hypothetical children. If it passes:
"already bite-size, no cut needed," nothing created.

## Stop if no human is here

If no human has spoken this session, or it was launched by a schedule or
cloud trigger: **do not grill and do not write a `## Shape` section** — post
the open questions as a comment on the issue and exit the shape phase. A
shape written with nobody answering is decisions nobody made, and it
switches off the cut phase's hard stop. (Cutting in background mode files
the leaves held instead — see Propose below.)

## Phase 1 — Shape

Whatever is undecided in the issue is the grill's agenda.

Invoke the Skill tool with `skill: "align"` — by name, not by writing
"run /align" in prose. If the Skill tool doesn't recognize it, read
`~/.claude/skills/align/SKILL.md` and follow it directly. It runs the
interview; the rest of this phase is what happens to the answers.

**Write back as you go.** The cut phase reads the issue cold. Anything left
in the transcript is lost, so each time the user settles a decision, put it
in the issue body — the confirmation is the trigger, not the end of the
session. `gh issue edit` replaces the entire body, so read the existing one
first; replace an existing `## Shape` section, otherwise append one.

```markdown
## Shape

**Decisions**
- <the question that was open> → <the call the user made>

**Out of scope** <include this block only if something was dismissed; omit it otherwise>
- <what came up and was dismissed> — <why>

**Appetite:** <include this line only if a budget came up; omit it otherwise>
```

**Out of scope** carries as much weight as **Decisions**: the cut phase cuts
leaves for anything it can't see was already dismissed.

Both lists hold exactly the calls the user made in this conversation. Walk
them before every write and name the turn that settled each line. A line
with no turn behind it is a question you quietly answered for yourself —
put it back on the grill's agenda and out of the body.

Verify the write landed and the pre-existing body survived it. Shape is done
when the no-unresolved-judgment target holds for the issue **as now
written** — read the body back and judge that, not your memory of the
conversation.

## Phase 2 — Cut

A `## Shape` section carries decisions already made. Its **Out of scope**
entries were dismissed deliberately — never emit a leaf for one.

Any depth can fail the predicate and be cut again. A loose first cut is fine
— `/bite` feeds context back before the finer one. **Re-cutting a
kicked-back leaf:** it becomes the parent of its own children, labelled
`needs-approval` so `/bite` cannot restart it.

### Draft the leaves

Each leaf is one platform's work, one PR, judgment-free. Tag `agent` or
`human` per the predicate's genuinely-untestable-work list; `human` never
enters `/bite`.

**Every leaf body must stand alone**: the decisions, the files/endpoints in
play, the acceptance check, and literal `execution:`, `touches:` and (agent
leaves) `verify:` lines. `/bite` reads only that issue; what you omit, it
invents.

Before proposing, **have a subagent try to falsify "an Opus agent one-shots
this"** per leaf. It survives only if the critic can't.

### Propose — never file first

```
N. <Platform>: <title>
   scope:      one line — what this leaf delivers
   execution:  agent | human
   verify:     test | diff-read  (agent leaves only)
   touches:    expected files/surfaces
   blocked by: N, N  (or: none)
```

`verify:` is yours from the predicate's table — testable is `test` however
tiny the diff. `touches:` is best-effort; leaves sharing one aren't
parallel-safe.

**Interactive:** chat only until the user approves. **Background:** file the
leaves held, per the sub-issues doc. Overridable.

### File

In dependency order, rewriting ordinals to numbers. Blocking edges are text
— GitHub models only parent/child — so they and the cross-cutting decisions
go in one parent comment. Never close or modify the parent, except a re-cut
leaf.

## Red flags — STOP

- "It was asked for as a breakdown, so I'll produce one" → the predicate
  decides, not the phrasing; "already bite-size, no cut needed" is a
  complete answer even when a split was asked for.
- "The issue says the code does X, so it does" → open the file. Both defects
  this system has shipped were leaf premises about code nobody had read.
- A `## Shape` line with no conversation turn behind it → a decision nobody
  made; back on the grill's agenda.
