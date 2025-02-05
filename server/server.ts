import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";

import { appRouter as router } from "./router";
import { createContext } from "./context";
import { initMockDb } from "./mock";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
initMockDb();

app.use("/trpc", createExpressMiddleware({ router, createContext }));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
