import { Button, Stack, TextField } from "@mui/material";
import { WriteTodoProps } from "./index.types";
import { ChangeEvent, memo, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StatusEnum, TodoType } from "@/services/todos/index.types";

const initialTodo = {
  title: "",
  status: StatusEnum.TODO,
  description: "",
  id: "",
};
function WriteTodo(props: WriteTodoProps) {
  const { editTodo, addTodo, editTodoData } = props;
  const [todo, setTodo] = useState<TodoType>(initialTodo);
  useEffect(() => {
    if (editTodoData) setTodo(editTodoData);
  }, [editTodoData]);
  function updateTitle(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setTodo((prev) => ({ ...prev, title: e.target.value }));
  }
  function updateDescription(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setTodo((prev) => ({ ...prev, description: e.target.value }));
  }
  function submit() {
    if (editTodoData) editTodo({ ...todo }, () => setTodo({ ...initialTodo }));
    else addTodo({ ...todo, id: uuidv4() }, () => setTodo({ ...initialTodo }));
  }
  return (
    <Stack direction="column" spacing={2} mb={5}>
      <TextField value={todo.title} label="Title" onChange={updateTitle} />
      <TextField
        value={todo.description}
        rows={4}
        multiline
        label="Description"
        onChange={updateDescription}
      />
      <Button onClick={submit} variant="contained" fullWidth>
        Submit
      </Button>
    </Stack>
  );
}

export default memo(WriteTodo);
