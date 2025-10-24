import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./router.js";

const app = express();
const PORT = Number(process.env.PORT ?? 3000);

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Backend on http://localhost:${PORT}`);
});
