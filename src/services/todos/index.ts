import { Api, Method } from "../api";
import { TodoType } from "./index.types";

export const getTodosList = async (): Promise<TodoType[]> => {
  return (
    await Api<TodoType[]>({
      method: Method.GET,
      url: "/todos",
    })
  ).data;
};

export const postTodo = async (body: TodoType): Promise<any> => {
  return (
    await Api<any>({
      method: Method.POST,
      url: "/todos",
      body,
    })
  ).data;
};

export const putTodo = async (body: TodoType): Promise<any> => {
  return (
    await Api<any>({
      method: Method.PUT,
      url: `/todos/${body.id}`,
      body,
    })
  ).data;
};

export const patchTodo = async (
  body: Partial<Omit<TodoType, "id">>,
  todoId: string
): Promise<any> => {
  return (
    await Api<any>({
      method: Method.PATCH,
      url: `/todos/${todoId}`,
      body,
    })
  ).data;
};

export const deleteTodo = async (todoId: string): Promise<any> => {
  return (
    await Api<any>({
      method: Method.DELETE,
      url: `/todos/${todoId}`,
    })
  ).data;
};
