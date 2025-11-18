Casus --- Live Document Translator (90 min)
=========================================

Goal
----

Build a small full-stack prototype that translates a short document into another language and updates the text live as translations arrive.

* * * * *

Provided setup
--------------

-   React + TypeScript frontend (minimal `App.tsx`).

-   Express + TypeScript backend exposing `POST /translate` (JSON) and `POST /translate/stream` (SSE) with placeholder logic.

-   Example document in `apps/frontend/src/sampleDoc.json` containing a few paragraphs with Tailwind class names.

Everything runs with **Node 24** and **pnpm**.

* * * * *

Task
----

Render the sample document on the page and let the user select a target language.\
Use the **OpenAI Node SDK** for translations.\
Keep the UI responsive, show progress or feedback while translations stream in.
Try to preserve the document structure as much as you can, including placeholders ({{TOKEN}}), legal citations (“Art. 337 CO”), numbers, and URLs.

Handle failures gracefully and continue streaming.

* * * * *

Run locally
-----------

`pnpm i
pnpm dev`

Frontend: <http://localhost:5173>\
Backend: <http://localhost:3000> (`POST /translate` returns JSON; use `POST /translate/stream` for SSE — requires `fetch`/ReadableStream since EventSource cannot send a body.)

Add `OPENAI_API_KEY` to `apps/backend/.env`.

* * * * *

Timebox
-------

You have **90 minutes**.\
Focus on a working end-to-end translation flow with live updates and clear progress.
