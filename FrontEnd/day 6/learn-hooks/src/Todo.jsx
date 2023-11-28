/** @format */
/* eslint-disable react/prop-types */

import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { memo, useCallback, useState } from "react";

function TodoDisplay(props) {
  return (
    <Box>
      {props.todoList.map((todo, index) => {
        return (
          <Box key={`todo-${index}`}>
            {index + 1}.{todo}
          </Box>
        );
      })}
      <Button onClick={props.addTodo}>Add Todo</Button>
    </Box>
  );
}

const TodoDisplayComponent = memo(TodoDisplay);

export default function Todo() {
  const [todoList, setTodolist] = useState(["Laundry", "Mowing"]);
  const [counter, setCounter] = useState(2);

  const handleAddTodo = useCallback(() => {
    setTodolist([...todoList, "new Todo"]);
  }, [todoList]);

  const handleAddCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <Container mt={5}>
      <Heading onClick={handleAddCounter}>Todo: {counter}</Heading>
      <TodoDisplayComponent todoList={todoList} addTodo={handleAddTodo} />
    </Container>
  );
}
