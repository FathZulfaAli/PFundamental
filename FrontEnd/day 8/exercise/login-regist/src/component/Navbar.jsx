/** @format */

import { Box, Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex w="100%" backgroundColor={"#008081"} p={"10px"}>
      <Heading borderRadius={"md"} backgroundColor={"white"} color={"black"}>
        Network Call Practice
      </Heading>
      <Button>Users</Button>
      <Button>Register</Button>
    </Flex>
  );
}

export default Navbar;
