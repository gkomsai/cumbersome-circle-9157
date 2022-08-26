import {
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { TopData } from "./data";

const TopSection = () => {
  return (
    <VStack spacing={6}>
      <Heading noOfLines={2} size="lg" color="blackAlpha.700">
        Track time and watch progress inside the most popular apps
      </Heading>
      <SimpleGrid columns={[2, null, 6]} gap={"4rem"}>
        {TopData.map((el) => (
          <Flex alignItems={"center"}>
            <Image w="1.5rem" h="1.5rem" src={el.img} alt="" />
            <Text fontWeight={"bold"}>{el.title}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default TopSection;
