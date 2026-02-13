Casus - Live Document Translator (90 min)
=========================================

Problem
-------

Users lose trust in translation tools when updates are slow, inconsistent, or fail without clear feedback.

Your goal is to ship the smallest end-to-end improvement that increases trust in a live document translation experience.

* * * * *

What exists
-----------

The repository contains a minimal full-stack starting point and a sample document at `apps/frontend/src/sampleDoc.json`.

You are free to choose your implementation approach.

* * * * *

Requirements
------------

1. Render and translate the sample document into a user-selected target language.
2. Show live progress so the user can understand what is happening.
3. Preserve placeholders (`{{TOKEN}}`), legal references, numbers, and URLs.
4. Handle partial failures gracefully and keep the flow usable.
5. Keep the implementation maintainable enough for a teammate to continue.

* * * * *

Deliverables
------------

1. A working implementation in this repository.
2. A short `DECISIONS.md` covering:
   - What you prioritized.
   - What you intentionally skipped.
   - Key tradeoffs and risks.

* * * * *

Run locally
-----------

```bash
pnpm i
pnpm dev
```

Use `apps/backend/.env` for required runtime secrets.

* * * * *

Timebox
-------

You have 90 minutes. Prioritize user impact and clear tradeoffs over breadth.
