/** @format */

import { Box, Button, Heading } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Box bg="orange.300" py={10} textAlign="Center">
        <Heading mb={5}>Halooooooo </Heading>
        <Heading>Web Dev</Heading>
        <Button colorScheme="green">Ini Tombol</Button>
        <Button colorScheme="red">Ini Tombol</Button>
        <Button colorScheme="blue">Ini Tombol</Button>
      </Box>
    </>
  );
}

export default App;
