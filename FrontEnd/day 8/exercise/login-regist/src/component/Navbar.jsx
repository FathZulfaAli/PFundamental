/** @format */

import { Button, Flex, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const count = useSelector((state) => state.user.count);
  return (
    <Flex
      w="100%"
      backgroundColor={"#008081"}
      p={"10px"}
      justifyContent={"center"}
    >
      <Flex justifyContent={"space-between"} w="100%">
        <Heading
          borderRadius={"md"}
          backgroundColor={"white"}
          color={"black"}
          p={"0px 5px"}
        >
          Network Call Practice
        </Heading>
        <Flex gap={"5px"}>
          <Button as={Link} to={"/"} variant="ghost" color="white">
            Users ({count})
          </Button>
          <Button as={Link} to={"/register"} variant="ghost" color="white">
            Register
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
