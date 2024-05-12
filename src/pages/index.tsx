import TodoList from "@/components/todo-list";
import WriteTodo from "@/components/write-todo";
import { Box, Divider, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box width="600px" mx="auto">
      <Typography my={2} variant="h4" fontWeight="bold">
        Write a todo
      </Typography>
      <WriteTodo />
      <Divider />
      <Typography mt={2} variant="h4" fontWeight="bold">
        Todos
      </Typography>
      <TodoList />
    </Box>
  );
}
