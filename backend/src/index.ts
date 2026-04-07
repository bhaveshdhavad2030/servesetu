import "dotenv/config";

import { createApp } from "./app.js";

const PORT = Number.parseInt(process.env.PORT ?? "4000", 10);

const app = createApp();
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://localhost:${PORT}`);
});

