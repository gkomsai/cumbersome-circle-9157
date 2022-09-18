import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [project, setProject] = useState({});

  const handleChange = (e) => {
  const {name, value}= e.target;
  setProject({...project, [name]: value});
  }
  const handleProjectSubmit = (e)=>{
    e.preventDefault();
   console.log(project);
  }
  return (
    <>
      <Button float ="right" onClick={onOpen} backgroundColor="#24be6a" color="white">
        Create Project
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="8px"> Project Name</Text>
            <Input  name="ProjectName" onChange={handleChange} mb="10px" size="sm" />
            <Text mb="8px">Members </Text>
            <Input
            type={"number"}
             name="ProjectMembers"
              onChange={handleChange}
              placeholder="Enter no of members"
              mb="10px"
              size="sm"
            />
            <Text mb="8px">Email</Text>
            <Input  name="email" onChange={handleChange} mb="10px" size="sm" />
            <Text mb="8px">Description </Text>
            <Input name="projectDescription" onChange={handleChange} mb="10px" size="sm" />
            <Box display="flex">
                <Select placeholder="Select type" name="projectType" w="150px">
                  <option value="option1">None</option>
                  <option value="option2">Client</option>
                  <option value="option3">Billing</option>
                  <option value="option3">Budget</option>
                </Select>
                <Select placeholder=" Select Status" name="projectStatus" onChange={handleChange} w="150px">
                  <option> Active </option>
                  <option> Favorites </option>
                  <option> Recent </option>
                  <option> Templates </option>
                  <option> HasBudget </option>
                </Select>
              
              </Box>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" onClick={(e) => {
                  handleProjectSubmit(e);
                  onClose();
                }} colorScheme="blue" mr={3}>
              Create Project
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Projects;
