---
name: qa-checklist
description: Use when completing visual, UI, animation, or mobile (iOS/Android) changes that require manual testing, or when creating a verification checklist for the user.
---

# QA Checklist

1. **Assess risk**: Run `/risk` to identify blast radius, failure vectors, and potential regressions for the changes made.
2. **Generate verification checklist**: Turn the identified risks and UI changes into a fast, actionable test script for the user:
   - **Navigation / Setup**: exact steps, screen path, or seed data needed to reach the state.
   - **Key behaviors to verify**: expected layout, animation timing/easing, transitions, and gesture responses.
   - **Risk-informed edge checks**: specific regression risks identified in step 1 (light/dark mode, rotation, rapid taps, boundary states).

*Keep checklist bulleted so the user can verify in under 60 seconds.*
