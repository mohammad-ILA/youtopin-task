import Todo from "@/components/todo";
import WriteTodo from "@/components/write-todo";
import { getTodosList, postTodo } from "@/services/todos";
import { TodoType } from "@/services/todos/index.types";
import { Box, Divider, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  useEffect(() => {
    getTodoListHandler();
  }, []);
  async function getTodoListHandler() {
    try {
      const todos = await getTodosList();
      setTodos(todos);
    } catch (err) {}
  }
  const addTodo = useCallback(async function (
    todo: TodoType,
    callback?: () => void
  ) {
    try {
      await postTodo(todo);
      callback?.();
      getTodoListHandler();
    } catch (err) {}
  },
  []);

  return (
    <Box width="600px" mx="auto">
      <Typography my={2} variant="h4" fontWeight="bold">
        Write a todo
      </Typography>
      <WriteTodo addTodo={addTodo} />
      <Divider />
      <Typography mt={2} variant="h4" fontWeight="bold">
        Todos
      </Typography>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </Box>
  );
}
