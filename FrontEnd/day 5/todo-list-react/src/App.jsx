/** @format */
import {
  Box,
  Heading,
  Checkbox,
  HStack,
  Container,
  Text,
  Button,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import "./App.css";
import { DeleteIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Box minH="100vh" bg="gray.800" color="white">
        <Heading as="h1" textAlign="center" p="10" fontSize="2xl">
          Chores ToDo List
        </Heading>
        <Container maxW="2xl">
          <HStack mb="5">
            <Checkbox
              colorScheme="green"
              borderColor="green.500"
              pr="5"
            ></Checkbox>
            <Text w="full" fontSize="lg">
              Item 1
            </Text>
            <Button variant="outline" colorScheme="red" p="1">
              <DeleteIcon />
            </Button>
          </HStack>
          <HStack mb="5">
            <Checkbox
              colorScheme="green"
              borderColor="green.500"
              pr="5"
            ></Checkbox>
            <Text w="full" fontSize="lg">
              Item 2
            </Text>
            <Button variant="outline" colorScheme="red" p="1">
              <DeleteIcon />
            </Button>
          </HStack>
          <HStack mb="5">
            <Checkbox
              colorScheme="green"
              borderColor="green.500"
              pr="5"
            ></Checkbox>
            <Text w="full" fontSize="lg">
              Item 3
            </Text>
            <Button variant="outline" colorScheme="red" p="1">
              <DeleteIcon />
            </Button>
          </HStack>
        </Container>
        <Box borderTopWidth="2px" borderColor="gray"></Box>
        <Container maxW="2xl">
          <Heading textAlign="center" pb="10" fontSize="xl">
            Done : 0
          </Heading>
          <FormLabel>Add to Do</FormLabel>
          <Input type="string"></Input>
          <Button mt="10px" colorScheme="blue">
            Add Chores
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default App;
