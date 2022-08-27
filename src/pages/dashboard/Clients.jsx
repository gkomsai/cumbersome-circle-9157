import { Button, Input, Modal, ModalBody,Flex,ModalCloseButton,Text, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Box, Select } from '@chakra-ui/react';
import React from 'react';

export default function Client() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)

    return (
      <>
        <Button onClick={onOpen} backgroundColor="#24be6a" color="white" >Create Client</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Client</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Text mb='8px'>Client Name: {value}</Text>
            <Input
            value={value}
            onChange={handleChange}
            mb="10px"
            size='sm'
            
            />
            <Text mb='8px'>Project {value}</Text>
            <Input
            value={value}
            onChange={handleChange}
            placeholder='Select project..' mb="10px"
            size='sm'
            />
            <Text mb='8px'>Email: {value}</Text>
            <Input
            value={value}
            onChange={handleChange}
            mb="10px"
            size='sm'
            />
            <Text mb='8px'>Business Details {value}</Text>
            <Input
            value={value}
            onChange={handleChange}
            mb="10px"
            size='sm'
            />
            <Flex >
             <Box>
             <Text mb='8px'>Tax % {value}</Text>
             <Input
             value={value}
             onChange={handleChange}
              mb="10px"
             size='sm'
             width="95%"
             />
             </Box>
             <Box>
             <Text mb='8px'>Discount % {value}</Text>
             <Input
             value={value}
             onChange={handleChange}
              mb="10px"
             size='sm'
             width="95%"
             />
             </Box>
             <Box >
             <Select placeholder='Immediately:' border="solid 1px black"  mt="28px" >
             <option value='Immediately:'>Immediately</option>
             <option value='+3 days'>+3 days</option>
             <option value='+4 days'>+5 days</option>
             </Select>
             </Box>
            </Flex>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Create Client
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }