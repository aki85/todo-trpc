import { trpc } from "../../trpc";

export const TodoList = () => {
  const getTodoList = trpc.getTodoList.useQuery();

  if (getTodoList.isError) return <>load failed</>;
  if (!getTodoList.isFetched) return <>loading</>;

  return (
    <ul>
      {getTodoList.data?.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};
