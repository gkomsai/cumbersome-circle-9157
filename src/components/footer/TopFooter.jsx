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
        minH={"50vh"}
        display={{ base: "block", md: "block", lg: "flex" }}
        justifyContent="space-between"
        mt={"10rem"}
      >
        <VStack spacing={"4"} alignItems="flex-start">
          <Heading size="lg" color="blackAlpha.700" > Take control of your time with Everhour</Heading>

          <Text fontSize='xl' color={"grey"}>
            Beautiful integrations. Intuitive interface. No unexpected fees{" "}
          </Text>


          <Flex alignItems={"center"} w="100%" justifyContent="space-between" direction={{base:"column", sm: "row"}} gap="20">
            <Input placeholder="Working email...."  />
            <RouterLink to="/signup" style={{ textDecoration: "none" }}>
              {" "}
              <Button w="10rem" h={"3.1rem"}   bg={"green.400"}>Try free</Button>
            </RouterLink>
          </Flex>
          <Flex alignItems={"center"} gap="20px" mt="4">
            <FcGoogle size="40px" />{" "}
            <RouterLink to="/signup">Or sign up with Google Account</RouterLink>
          </Flex>
        </VStack>

        <Box
          w={{ base: "98%", md: "55%", lg: "400px" }}
          height={{ base: "370px", md: "270px", lg: "270px" }}
          lineHeight="3.5"
          ml={{ base: "0.2rem", md: "2rem", lg: "0rem" }}
          mt={{ base: "21rem", md: "15rem", lg: "0rem" }}
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
