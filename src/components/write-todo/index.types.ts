import { TodoType } from "@/services/todos/index.types";

export interface WriteTodoProps {
  addTodo: (params: TodoType, callback?: () => void) => void;
}
