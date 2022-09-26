import { Box, Button, HStack, Input } from "@chakra-ui/react";
import React from "react";
import { CustomCalander } from "./Calender";
import TimerFun from "./TimerFun";

const Timer = () => {
  return (
    <Box>
      <HStack>
        <Input h="70px" placeholder="What are you working on" size="lg" />
        <div>
          <TimerFun />
        </div>
      </HStack>

      <CustomCalander />
    </Box>
  );
};

export default Timer;
