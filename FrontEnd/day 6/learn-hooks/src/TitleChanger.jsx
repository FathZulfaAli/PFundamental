/** @format */

import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TitleChanger() {
  const [title, setTitle] = useState("Vite + React");
  //akan dijalnkan pertama kali di render
  //   useEffect(() => {
  //     alert("Welcome!!");
  //   }, []);

  //akan dirender ketika state title berubah
  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <Container>
      <FormControl>
        <FormLabel>Change title here</FormLabel>
        <Input value={title} onChange={handleInputChange}></Input>
      </FormControl>
    </Container>
  );
}
