export interface TodoType {
  title: string;
  description: string;
  id: string;
  status: StatusEnum;
}
export enum StatusEnum {
  DONE = "done",
  TODO = "todo",
}
