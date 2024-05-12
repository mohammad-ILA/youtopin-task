import { TodoType } from "@/services/todos/index.types";

export interface WriteTodoProps {
  editTodoData?: TodoType;
  addTodo: (params: TodoType, callback?: () => void) => void;
  editTodo: (params: TodoType, callback?: () => void) => void;
}
