import Todo from "@/components/todo";
import WriteTodo from "@/components/write-todo";
import {
  deleteTodo,
  getTodosList,
  patchTodo,
  postTodo,
  putTodo,
} from "@/services/todos";
import { StatusEnum, TodoType } from "@/services/todos/index.types";
import { Box, Divider, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [editTodoData, setEditTodoData] = useState<TodoType>();
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
  const deleteTodoHandler = useCallback(async function (todoId: string) {
    try {
      await deleteTodo(todoId);
      getTodoListHandler();
    } catch (err) {}
  }, []);
  const doneTodo = useCallback(async function (todoId: string) {
    try {
      await patchTodo({ status: StatusEnum.DONE }, todoId);
      getTodoListHandler();
    } catch (err) {}
  }, []);
  const editTodoHandler = useCallback(async function (
    todo: TodoType,
    callback?: () => void
  ) {
    try {
      await putTodo(todo);
      callback?.();
      getTodoListHandler();
      setEditTodoData(undefined);
    } catch (err) {}
  },
  []);

  return (
    <Box width="600px" mx="auto">
      <Typography my={2} variant="h4" fontWeight="bold">
        Write a todo
      </Typography>
      <WriteTodo
        addTodo={addTodo}
        editTodo={editTodoHandler}
        editTodoData={editTodoData}
      />
      <Divider />
      <Typography mt={2} variant="h4" fontWeight="bold">
        Todos
      </Typography>
      {todos.map((todo) => (
        <Todo
          doneTodo={doneTodo}
          deleteTodoHandler={deleteTodoHandler}
          todo={todo}
          key={todo.id}
          setEditTodoData={setEditTodoData}
        />
      ))}
    </Box>
  );
}
