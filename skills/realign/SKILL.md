---
name: realign
description: Recovers from a correction — complies, names the broken assumption, sweeps for siblings and resumes. Use when the user stops, interrupts or corrects Claude ("stop", "no", "that's not what I wanted", "undo that", "why did you do that", or a second correction on the same topic), before resuming work.
---

# Realign

A correction means your underlying assumption was wrong. Comply, diagnose, and resume:

1. **Comply immediately**: Stop, undo, or halt exactly as asked. No defending or justifying past choices.
2. **Isolate broken assumption**: State in one sentence the exact assumption that was disproved.
3. **Grill the misalignment**: If the correction leaves a decision open, invoke `/jeanno-skills:align` scoped strictly to that assumption and its dependent decisions, and follow it: one question per message, never a batch. If the correction settles everything, skip this step.
4. **Sweep for siblings**: Check other completed or planned tasks resting on the same faulty assumption.
5. **Resume**: Restate the corrected understanding in one line, then continue.
