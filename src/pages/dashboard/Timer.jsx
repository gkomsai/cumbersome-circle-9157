import { Box, Button, HStack, Input } from "@chakra-ui/react";
import React from "react";
import { CustomCalander } from "./Calender";

const Timer = () => {


  
  return (
    <Box>
      <HStack>
        <Input
          h="70px"
          placeholder="What are you working on"
          size="lg"
          style={{ width: "900px" }}
        />
        <div>
          <Button h="70px" w="120px" colorScheme={"green"}>
            Start Timer
          </Button>
        </div>
      </HStack>

      <CustomCalander />
    </Box>
  );
};

export default Timer;
