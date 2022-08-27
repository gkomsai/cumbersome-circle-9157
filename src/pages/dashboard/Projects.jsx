import React from 'react'
import { Box ,Button,Text,Stack, Image, Flex, Checkbox,Select,Table, Input,Tbody,TableContainer,Thead,Tr,Th,Td,Tfoot} from '@chakra-ui/react'
import Sidebar from './Sidebar'
import ReactPlayer from 'react-player'

const Projects = () => {
  
  return (
    <div>
    <Stack direction="row">
      <Box></Box>
      <Box >
      <Flex >
        <Text fontSize="2xl">Projects</Text>
        <Button marginLeft="70rem" w="8rem" h="3rem" colorScheme="green">Create Project</Button>
      </Flex>
      <Stack direction="row">
        <Flex>
        <Checkbox/>
        <Text>select all</Text>
        </Flex>
        <Flex>
          <Box marginLeft="50rem" border="1px solid gray">
            <Text fontSize=".6rem">Group by</Text>
            <Select borderRadius="0" size='sm' placeholder='None'>
          <option value='option1'>Billing</option>
          <option value='option2'>Budget</option>
          </Select>
          </Box>
          <Box border="1px solid gray">
            <Text fontSize=".6rem">Filter</Text>
            <Select borderRadius="0" size='sm' placeholder='Active'>
          <option value='option1'>favorites</option>
          <option value='option2'>Recent</option>
          </Select>
          </Box>
          <Box>
            <Input placeholder='Search projects'/>
          </Box>
        </Flex>
      </Stack>
      <Box>
        <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th></Th>
        <Th></Th>
        <Th></Th>
        <Th></Th>
        <Th >MEMBERS</Th>
        <Th>BUDGET</Th>
        <Th>BILLING</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td> <Box >
            <Text >Everhour</Text>
        <Select borderRadius="0" size='2rem' placeholder='No client'>
          <option >favorites</option>
          <option >Recent</option>
          </Select>
          </Box></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td><Image boxSize='2rem' borderRadius='full' src="https://bit.ly/dan-abramov"/></Td>
        <Td></Td>
        <Td>Hourly</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
        </Box>
        <Box marginTop="5rem" marginLeft="20rem" border="1px solid gray" borderRadius="sm" w="40rem">
        <Stack  direction="row">
          <Box w="20rem"><Text fontSize="3xl"> Projects Page</Text>
          <Text fontSize=".9rem">Projects page is where you see all projects, their billing type and budget. Admins can see everything, other members only projects to which they have access.</Text>
          </Box>
          <ReactPlayer width="18rem" height="10rem" controls url="https://youtu.be/jdpnm9_t778"/> 
        </Stack>
        </Box>
      </Box>
    </Stack>
      
    </div>
  )
}

export default Projects