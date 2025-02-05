import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { v4 as uuid } from "uuid";

import { Context } from "./context";
import { Todo, todoService } from "./mock";

const t = initTRPC.context<Context>().create();

const router = t.router;
const publicProcedure = t.procedure;

export const appRouter = router({
  getTodoList: publicProcedure.query(async (opts): Promise<Todo[]> => {
    if (opts.ctx.user.id === 1) {
      return todoService.index();
    } else {
      return [];
    }
  }),
  addTodo: publicProcedure.input(
    z.object({
      text: z.string(),
    })
  ).mutation(async (opts): Promise<Todo> => {
    const { text } = opts.input;
    const id = uuid();
    return todoService.create(id, text);
  }),
});

export type AppRouter = typeof appRouter;
