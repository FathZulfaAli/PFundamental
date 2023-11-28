/** @format */

import { Button, Container, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";

export default function DisplayOddEventNumber() {
  const [number, setNumber] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const displayOddEven = useMemo(() => {
    for (let i = 0; i < 200; i++) {
      console.log("ini berat");
    }
    return number % 2 === 0 ? "Odd" : "Even";
  }, [number]);

  const handleIncrementNumber = () => {
    setNumber((prev) => prev + 1); //callback function one line
  };

  const handleAddClickCount = () => {
    setClickCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <Container mt={5}>
      <Text>
        Current Number: {number} {displayOddEven}
      </Text>
      <Button onClick={handleIncrementNumber}>Increment Count</Button>
      <Text onClick={handleAddClickCount}>Click Counter : {clickCount}</Text>
    </Container>
  );
}
