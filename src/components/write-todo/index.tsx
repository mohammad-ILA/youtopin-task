import { Stack, TextField } from "@mui/material";
import { WriteTodoProps } from "./index.types";

export default function WriteTodo(props: WriteTodoProps) {
  return (
    <Stack direction="column" spacing={2} mb={5}>
      <TextField label="Title" />
      <TextField rows={4} multiline label="Description" />
    </Stack>
  );
}
