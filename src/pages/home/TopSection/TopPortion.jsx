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
              w={["90vw", null, "20rem"]}
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
            <a target={"blank"} href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&access_type=online&client_id=958866595674-p0c2it7hs162uect120dmoev1innnlf0.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapi.everhour.com%2Fauth%2Fgoogle%2Fauthorize&state=%7B%22user%22%3Anull%2C%22onError%22%3A%22https%3A%5C%2F%5C%2Feverhour.com%5C%2F%3Fstate%3Dsignup%22%2C%22onSuccess%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%22%2C%22isSignIn%22%3Anull%7D&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&prompt=select_account&flowName=GeneralOAuthFlow">Or sign up with Google Account</a>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default TopPortion;
