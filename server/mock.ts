import { v4 as uuid } from "uuid";

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

const mockDb = new Map<string, Todo>();

export const todoService = {
  show(id: string): Todo | undefined {
    return mockDb.get(id);
  },
  index(): Todo[] {
    return Array.from(mockDb.values());
  },
  create(id: string, text: string): Todo {
    const todo = { id, text, done: false };
    mockDb.set(id, todo);
    return todo;
  },
  update(id: string, todo: Todo): Todo {
    if (this.show(id)) {
      const updatedTodo = { ...todo, id };
      mockDb.set(id, updatedTodo);
      return updatedTodo;
    }
    return this.create(id, todo.text);
  },
  delete(id: string): boolean {
    return mockDb.delete(id);
  },
};

export const initMockDb = (): void => {
  let id = uuid();
  mockDb.set(id, { id, text: "feat update", done: false });
  id = uuid();
  mockDb.set(id, { id, text: "feat delete", done: false });
  id = uuid();
  mockDb.set(id, { id, text: "feat is done", done: false });
};
