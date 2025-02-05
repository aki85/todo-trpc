import type { CreateExpressContextOptions as ExpressContext } from "@trpc/server/adapters/express";

export const createContext = (ctx: ExpressContext) => {
  // check https://trpc.io/docs/server/context
  return { user: { id: 1, name: "sample user" } };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
