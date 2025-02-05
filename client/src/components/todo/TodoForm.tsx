import { useRef } from "react";
import { Form, Button, InputGroup } from "react-bootstrap"
import { trpc } from "../../trpc";

export function TodoForm() {
  const mutation = trpc.addTodo.useMutation();
  const inputRef = useRef<HTMLInputElement>(null);
  const utils = trpc.useUtils();

  const handleClick = () => {
    if (inputRef.current) {
      mutation.mutate(
        { text: inputRef.current.value },
        { onSuccess: () => utils.getTodoList.invalidate() }
      );
    }
  };

  return (
    <Form onSubmit={handleClick}>
      <InputGroup className="mb-3">
        <Form.Control ref={inputRef} placeholder="add todo"/>
        <Button type="submit" variant="outline-secondary">追加</Button>
      </InputGroup>
    </Form>
  );
}
