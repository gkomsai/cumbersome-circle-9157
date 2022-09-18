import {
  Button,
  Input,
  Modal,
  ModalBody,
  Flex,
  ModalCloseButton,
  Text,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Clients() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [client, setClient] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleClientSubmit = (e) => {
    e.preventDefault();
    console.log("Inside function");
    console.log(client);
  };
  return (
    <>
      <Button
        float="right"
        onClick={onOpen}
        backgroundColor="#24be6a"
        color="white"
      >
        Create Client
      </Button>
      <form>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Client</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb="8px">Client Name</Text>
              <Input
                name="clientName"
                onChange={handleChange}
                mb="10px"
                size="sm"
              />
              <Text mb="8px">Project </Text>
              <Input
                name="projectName"
                onChange={handleChange}
                placeholder="Enter Project name"
                mb="10px"
                size="sm"
              />
              <Text mb="8px">Email</Text>
              <Input name="email" onChange={handleChange} mb="10px" size="sm" />
              <Text mb="8px">Business Details</Text>
              <Input
                name="BusinessDetails"
                onChange={handleChange}
                mb="10px"
                size="sm"
              />
              <Flex>
                <Box>
                  <Text mb="8px"> Estimated Cost </Text>
                  <Input
                    name="projectCost"
                    onChange={handleChange}
                    mb="10px"
                    size="sm"
                    width="95%"
                  />
                </Box>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                onClick={(e) => {
                  handleClientSubmit(e);
                  onClose();
                }}
                colorScheme="blue"
                mr={3}
              >
                Create Client
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
}
