import React from "react";

import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";
import { Link as RouterLink } from "react-router-dom";

const TopPortion = () => {
  return (
    <>
      <Box
        w={["90vw", null, "60vw"]}
        m="auto"
        minH={"50vh"}
        display={{ base: "block", md: "block", lg: "flex" }}
        justifyContent="space-between"
        mt={"5rem"}
      >
        <VStack spacing={"7"}>
          <Heading w="100%" size={["lg", "xl", "2xl"]} color="blackAlpha.700">
            {" "}
            Powerful time tracking software with hassle-free integrations
          </Heading>

          <Text fontSize={["md", "md", "xl"]} color={"grey"} w="80%" m="auto">
            Accurate time tracker for budgeting, client invoicing and painless
            payroll. Works with the apps your team already use
          </Text>

          <Flex
            alignItems={"center"}
            w="70%"
            justifyContent="space-between"
            direction={{ base: "column", sm: "row" }}
            gap="10"
          >
            <Input
              w={["90vw", null, "10rem"]}
              placeholder="Working email...."
            />
            <RouterLink to="/signup" style={{ textDecoration: "none" }}>
              {" "}
              <Button
                w={["90vw", null, "10rem"]}
                h={"3.1rem"}
                colorScheme="green"
              >
                Try free
              </Button>
            </RouterLink>
          </Flex>
          <Flex alignItems={"center"} gap="20px" mt="4">
            <FcGoogle size="30px" />{" "}
            <RouterLink to="/signup">Or sign up with Google Account</RouterLink>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default TopPortion;
