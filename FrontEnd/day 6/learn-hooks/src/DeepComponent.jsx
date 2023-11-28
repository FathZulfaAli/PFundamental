/**
 *
 *
 * @format
 */
/* eslint-disable react/prop-types */

import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { createContext, useState } from "react";

const UserContext = createContext({ name: "0", age: 0 });

export default function DeepComponent() {
  const [user] = useState({ name: "Fath", age: 22 });

  return (
    <UserContext.Provider value={user}>
      <Container mt={5}>
        <Component1 user={user} />
      </Container>
    </UserContext.Provider>
  );
}
function Component1(props) {
  return (
    <Box>
      <Heading>Data User:</Heading>
      <Component2 user={props.user} />
    </Box>
  );
}
function Component2(props) {
  return (
    <Box>
      <Text>{props.user.name}</Text>
      <Text>{props.user.age}</Text>
    </Box>
  );
}
