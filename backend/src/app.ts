import cors from "cors";
import express from "express";

import { healthRouter } from "./routes/health.js";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
  app.use(express.json({ limit: "2mb" }));

  app.get("/", (_req, res) => res.json({ name: "servesetu-backend", ok: true }));
  app.use("/health", healthRouter);

  return app;
}

