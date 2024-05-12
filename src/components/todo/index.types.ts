import { TodoType } from "@/services/todos/index.types";

export interface TodoProps {
  todo: TodoType;
  deleteTodoHandler: (todoId: string) => void;
  doneTodo: (todoId: string) => void;
  setEditTodoData: (todo: TodoType) => void;
}
