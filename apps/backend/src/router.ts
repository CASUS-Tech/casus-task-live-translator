import { Router } from "express";

export const router = Router();

router.post("/translate", async (req, res) => {
  res.json({
    status: "not_implemented",
    message: "Add non-streaming translation logic here.",
  });
});

/* router.post("/translate/stream", async (req, res) => {
  // Set up SSE headers
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.end();
});
 */