import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  Box,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";
import styles from "./footer.module.css";

import { FcGoogle } from "react-icons/fc";
import { Link as RouterLink } from "react-router-dom";

const TopFooter = () => {
  return (
    <>
      <Box
        w="90%"
        m="auto"
        display={{ base: "block", md: "block", lg: "flex" }}
        justifyContent="space-between"
        mt={{ base: "-4rem", md: "4rem", lg: "5rem" }}
      >
        <VStack spacing={"4"} alignItems="flex-start">
          <Heading size="lg" color="blackAlpha.700">
            {" "}
            Take control of your time with Everhour
          </Heading>

          <Text fontSize="xl" color={"grey"}>
            Beautiful integrations. Intuitive interface. No unexpected fees{" "}
          </Text>

          <Flex
            alignItems={"center"}
            w="100%"
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
            gap="20"
          >
            <Input
              w={["90vw", null, "20rem"]}
              placeholder="Working email...."
            />
            <a target={"blank"} href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&access_type=online&client_id=958866595674-p0c2it7hs162uect120dmoev1innnlf0.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapi.everhour.com%2Fauth%2Fgoogle%2Fauthorize&state=%7B%22user%22%3Anull%2C%22onError%22%3A%22https%3A%5C%2F%5C%2Feverhour.com%5C%2F%3Fstate%3Dsignup%22%2C%22onSuccess%22%3A%22https%3A%5C%2F%5C%2Fapp.everhour.com%22%2C%22isSignIn%22%3Anull%7D&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&prompt=select_account&flowName=GeneralOAuthFlow" style={{ textDecoration: "none" }}>
              {" "}
              <Button
                w={["90vw", null, "10rem"]}
                h={"3.1rem"}
                colorScheme={"green"}
              >
                Try free
              </Button>
            </a>
          </Flex>
          <Flex
            alignItems={"center"}
            w={["90vw", null, "20rem"]}
            justifyContent="center"
            gap="20px"
            mt="8rem"
          >
            <FcGoogle size="40px" />{" "}
            <RouterLink to="/signup">Or sign up with Google Account</RouterLink>
          </Flex>
        </VStack>

        <Box
          w={{ base: "100%", md: "55%", lg: "400px" }}
          height={{ base: "370px", md: "270px", lg: "270px" }}
          ml={{ base: "0.2rem", md: "2rem", lg: "0rem" }}
          mt={{ base: "4rem", md: "4rem", lg: "0rem" }}
        >
          <List spacing={1} className={styles.dotlist}>
            <ListItem>
              <ListIcon
                fontSize={"13px"}
                bg={"#57bb71"}
                borderRadius={"50%"}
                color="green.500"
              />
              Track time from the apps you already use
            </ListItem>
            <ListItem>
              <ListIcon
                fontSize={"13px"}
                bg={"#57bb71"}
                borderRadius={"50%"}
                color="green.500"
              />
              Know where your team’s time is going
            </ListItem>
            <ListItem>
              <ListIcon
                fontSize={"13px"}
                bg={" #57bb71"}
                borderRadius={"50%"}
                color="green.500"
              />
              Keep projects on budget
            </ListItem>

            <ListItem>
              <ListIcon
                fontSize={"13px"}
                bg={"#57bb71"}
                borderRadius={"50%"}
                color="green.500"
              />
              Increase transparency
            </ListItem>

            <ListItem>
              <ListIcon
                fontSize={"13px"}
                bg={"#57bb71"}
                borderRadius={"50%"}
                color="green.500"
              />
              Make your workflow more efficient
            </ListItem>
            <ListItem>
              <ListIcon
                fontSize={"13px"}
                bg={"#57bb71"}
                borderRadius={"50%"}
                color="green.500"
              />
              Spot burnout before it happens
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};
export default TopFooter;
