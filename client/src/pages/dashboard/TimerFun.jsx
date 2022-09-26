import React, { useEffect, useState } from "react";
import { BsPause } from "react-icons/bs";
import { Button, Stack, Box, Flex } from "@chakra-ui/react";
const TimerFun = () => {
  const [toggle, setToggle] = useState(false);
  const [isstarted, SetStarted] = useState(false);
  const [value, Setvalue] = useState(0);
  const [stop, Setistopped] = useState(false);

  const Start = () => {
    SetStarted(true);
    Setistopped(false);

    setToggle(!toggle);
    if (!stop) {
      Pause();
    }
  };

  const Pause = () => {
    if (value > 0) {
      SetStarted(false);
      Setistopped(true);
    }
  };

  useEffect(() => {
    if (isstarted) {
      const timerid = setInterval(() => {
        Setvalue((value) => value + 1);
      }, 1000);
      return () => {
        clearInterval(timerid);
      };
    }
  }, [value, isstarted]);

  const Convert = (time) => {
    let hour = Math.floor(time / 3600);
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    return `${hour}:${min}:${sec}`;
  };

  // console.log(value)
  return (
    <>
      <Box>
        {!toggle ? (
          <Button
            colorScheme="green"
            w={"160px"}
            h="68px"
            borderRadius={"none"}
            textAlign="center"
            fontSize={"25px"}
            padding="25px"
            onClick={Start}
          >
            Start Timer
          </Button>
        ) : (
          <Stack spacing={4} direction="row" align="center">
            <Button
              colorScheme="red"
              onClick={Start}
              w={"160px"}
              h="68px"
              borderRadius={"none"}
              textAlign="center"
              fontSize={"20px"}
              padding="25px"
            >
              <Flex>
                <div>
                  <BsPause />
                </div>
                <Box padding="5px">{Convert(value)}</Box>
              </Flex>
            </Button>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default TimerFun;
