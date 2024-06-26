import { Button, Stack, Typography } from "@mui/material";
import { TodoProps } from "./index.types";
import { StatusEnum } from "@/services/todos/index.types";
import { memo } from "react";
import { deleteTodo, patchTodo } from "@/services/todos";

function Todo(props: TodoProps) {
  const { todo, doneTodo, deleteTodoHandler, setEditTodoData } = props;

  return (
    <Stack
      direction="column"
      spacing={2}
      mt={5}
      border="1px solid #00000010"
      p={2}
      borderRadius={1}
    >
      <Stack direction="row" spacing={1}>
        <Typography fontWeight="bold" variant="h5">
          Title:
        </Typography>
        <Typography variant="h5">{todo.title}</Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Typography fontWeight="bold" variant="h5">
          Description:
        </Typography>
        <Typography variant="h5">{todo.description}</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" spacing={1}>
          {todo.status !== StatusEnum.DONE && (
            <Button
              onClick={() => doneTodo(todo.id)}
              variant="contained"
              color="success"
            >
              Done
            </Button>
          )}
          <Button onClick={() => setEditTodoData(todo)} variant="outlined">
            Edit
          </Button>
          <Button
            onClick={() => deleteTodoHandler(todo.id)}
            variant="text"
            color="error"
          >
            Delete
          </Button>
        </Stack>
        {todo.status === StatusEnum.DONE ? (
          <Typography color="greenyellow" bgcolor="green">
            انجام شده
          </Typography>
        ) : todo.status === StatusEnum.TODO ? (
          <Typography color="red" bgcolor="yellow">
            انجام نشده
          </Typography>
        ) : null}
      </Stack>
    </Stack>
  );
}

export default memo(Todo);
