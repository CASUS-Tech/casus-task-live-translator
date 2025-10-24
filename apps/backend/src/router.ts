import { Router } from "express";

export const router = Router();

router.post("/translate", async (req, res) => {
  // SSE boilerplate only — candidate will implement actual streaming logic
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.end();
});

router.get("/translate/stream", async (_req, res) => {
  // Alternative SSE endpoint for EventSource consumers (logic to be added by candidate)
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.end();
});
