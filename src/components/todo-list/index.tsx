import { Button, Stack, Typography } from "@mui/material";
import { TodoListProps } from "./index.types";

export default function TodoList(props: TodoListProps) {
  return (
    <Stack
      direction="column"
      spacing={2}
      mt={5}
      border="1px solid #00000010"
      p={2}
      borderRadius={1}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography fontWeight="bold" variant="h5">
          Title:
        </Typography>
        <Typography variant="h5">sdf</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography fontWeight="bold" variant="h5">
          Description:
        </Typography>
        <Typography variant="h5">sdf</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" spacing={1}>
          <Button variant="contained" color="success">
            Done
          </Button>
          <Button variant="outlined">Edit</Button>
          <Button variant="text" color="error">
            Delete
          </Button>
        </Stack>
        {status === StatusEnum.DONE ? (
          <Typography color="greenyellow" bgcolor="green">
            انجام شده
          </Typography>
        ) : status === StatusEnum.TODO ? (
          <Typography color="red" bgcolor="yellow">
            انجام نشده
          </Typography>
        ) : null}
      </Stack>
    </Stack>
  );
}
