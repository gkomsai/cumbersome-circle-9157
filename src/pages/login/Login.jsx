import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';


import { useState } from 'react';
import { useNavigate } from "react-router";

export default function SimpleCard() {
  const navigate = useNavigate();
  // const handleClick=()=>{
  //     navigate("/signup")
  //  };
   var signupArr = JSON.parse(localStorage.getItem("signup"));
   const [loginform, setloginform] = useState({
      email: "",
      password: "",
    });
    const handchange = (e) => {
      const { name, value } = e.target;
      setloginform({ ...loginform, [name]: value });
    };
    const loginhandle = (e) => {
      e.preventDefault();
      console.log("Govind");
      for (var i = 0; i < signupArr.length; i++) {
        if (
          loginform.email === signupArr[i].email &&
          loginform.password === signupArr[i].password
        ) {
          // alert("Login Success !........");
          navigate("/");
        }
      }
    };


    return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to Everhour</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <FormControl onSubmit={loginhandle}>    
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" 
              name="email"
              value={loginform.email}
              onChange={handchange}
             />

            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" 
              name="password"
              value={loginform.password}
              onChange={handchange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={loginhandle} >
                Sign in
              </Button>
             </Stack>
          </Stack>
          </FormControl>
        </Box>
      </Stack>
     
    </Flex>
  );
}