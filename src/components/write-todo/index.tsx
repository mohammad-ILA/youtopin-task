import { Button, Stack, TextField } from "@mui/material";
import { WriteTodoProps } from "./index.types";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StatusEnum, TodoType } from "@/services/todos/index.types";
export default function WriteTodo(props: WriteTodoProps) {
  const [todo, setTodo] = useState<TodoType>({
    title: "",
    status: StatusEnum.TODO,
    description: "",
    id: "",
  });
  function updateTitle(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setTodo((prev) => ({ ...prev, title: e.target.value }));
  }
  function updateDescription(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setTodo((prev) => ({ ...prev, description: e.target.value }));
  }
  function submit() {
    setTodo((prev) => ({ ...prev, id: uuidv4() }));
  }
  return (
    <Stack direction="column" spacing={2} mb={5}>
      <TextField label="Title" onChange={updateTitle} />
      <TextField
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
