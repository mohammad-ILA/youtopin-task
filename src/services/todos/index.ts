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

export const postTodo = async (params: TodoType): Promise<any> => {
  return (
    await Api<any>({
      method: Method.GET,
      url: "/todos",
      params: params,
    })
  ).data;
};

export const putTodo = async (params: TodoType): Promise<any> => {
  return (
    await Api<any>({
      method: Method.GET,
      url: `/todos/${params.id}`,
      params: params,
    })
  ).data;
};

export const patchTodo = async (
  params: Partial<Omit<TodoType, "id">>,
  todoId: string
): Promise<any> => {
  return (
    await Api<any>({
      method: Method.GET,
      url: `/todos/${todoId}`,
      params: params,
    })
  ).data;
};

export const deleteTodo = async (todoId: string): Promise<any> => {
  return (
    await Api<any>({
      method: Method.GET,
      url: `/todos/${todoId}`,
    })
  ).data;
};
