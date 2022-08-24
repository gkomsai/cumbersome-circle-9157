import React from "react";
import { Box, Heading, Button, color } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import styles from "../demo/demo.module.css";



const Demo=()=>{
  return(
    <div>
      <Box w={{ base: "22rem", md: "30rem", lg: "45rem" }} margin="auto" marginTop="11rem">
        <Heading  color="#333" fontWeight="600" fontSize="50px" textAlign="center"> Book a 30-min live demo 🚀 </Heading>     
       
        <Heading as="h3" mt="1.5rem"fontSize="1.2rem"color="#767676"fontWeight="4"lineHeight="1.36"
          fontFamily="'geomanist-regular',sans-serif" textAlign="center">  
           10+ users? Let one of our customer success experts show you how Everhour <br/> works, with plenty of time set aside for questions         
        </Heading>
        <Box w={{ base: "100%", md: "72%", lg: "50%" }}margin="auto"mt="2rem" display="flex"justifyContent="space-between"  >
      
          <Button className={styles.schedule} bg="#57bb71" color="white" height="48px" padding="0 2rem 0 2rem" boxShadow=" rgba(0, 0, 87,187,113) 0px 5px 15px;" >                    
            Schedule time
          </Button>

          <a href="https://www.youtube.com/playlist?list=PLpi40TLI2leiI-UuWIu-19xdTuGZwtHU3"target="_blank"
          rel="noreferrer" >
         
            <Button bg="transparent" height="48px"padding="0 2rem 0 2rem"color="#57bb71"border="1px solid #57bb71"
            boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;"> Watch videos </Button> </a>             
         
        </Box>
      </Box>
      <Box width={{base: "88%", sm: "78%", lg: "67%" }}height="auto" margin="auto"className={styles.samimg}mt="100px"mb="300px">
     
        <Box width={{ base: "100%", md: "70%", lg: "60%" }}height="auto" border="0.1px solid #8fddb2"borderRadius={"6px"}
        bg="white"margin="auto"className={styles.sbox} >
       
       {/* ------------------------------------------------------------------------ */}
        
          <Box w={"80%"} margin="auto" mt="10%" mb="20%">
          <Heading as="h6" fontSize={"1rem"}fontWeight="600"textAlign={"left"} ml="29px" mb="10px"> What you’ll learn </Heading>   
                      
            <Box display={"flex"} gap="20px" mb="10px">
            <Box bg="#57bb71" w="9px" h="10px"borderRadius={"50%"} mt="1%" border="4px solid #57bb71"></Box>              

              <Box>
                <Heading as="h3"fontSize="1rem"color="#767676"fontWeight="400"lineHeight="1.36"fontFamily="'geomanist-regular',sans-serif"
                textAlign={"left"}>  We’ll briefly explain what’s so special about Everhour.  </Heading>
                                               
            </Box>
            </Box>


            <Box display={"flex"} gap="20px" mb="10px">
              <Box bg="#57bb71" width="10px"h="10px"borderRadius={"50%"}mt="1%"border="4px solid #57bb71">
             </Box>

              <Box>
                <Heading as="h3"fontSize="1rem" color="#767676"fontWeight="400"lineHeight="1.36"fontFamily="'geomanist-regular',sans-serif"
                  textAlign={"left"}>We’ll teach you the basics of using the app, with plenty of time for questions.           
                                   
                </Heading>
              </Box>
            </Box>

            <Box display={"flex"} gap="20px" mb="10px">
              <Box bg="#57bb71" width="10px"h="10px"borderRadius={"50%"} mt="1%"border="4px solid #57bb71"> </Box>             
             

              <Box> <Heading as="h3"fontSize="1.1rem"color="#767676"fontWeight="400"lineHeight="1.36"fontFamily="'geomanist-regular',sans-serif"
              textAlign={"left"}> We’ll answer all questions about setting up Everhour, using it  with your team, or anything else you’d like to ask             
              </Heading>
              </Box>
            </Box>
          </Box>
        
          <Box width={"80%"} margin="auto" mb="20%">
            <Heading as="h6"fontSize={"1rem"}fontWeight="600"textAlign={"left"}marginLeft="29px"mb="10px"> Other information  </Heading>          
          
            <Box display={"flex"} gap="20px" mb="10px">
              <Box bg="#57bb71"width="9px"height="10px" borderRadius={"50%"}mt="1%"border="4px solid #57bb71"></Box>

              <Box>
                <Heading as="h3"fontSize="1rem"color="#767676"fontWeight="400"lineHeight="1.36"fontFamily="'geomanist-regular',sans-serif"
                  textAlign={"left"}>                
                  Screenshare is done in the browser by means of Where by software using  {" "}                
                  <Link className={styles.links} to="/"> this link                   
                  </Link>{" "} . Please ensure that your mic and speakers work in advance!                 
                </Heading>
              </Box>
            </Box>
            <Box display={"flex"} gap="20px" mb="10px">

              <Box bg="#57bb71" w="10px"h="10px" borderRadius={"50%"}mt="1%"border="4px solid #57bb71"></Box>
              <Box>
                <Heading as="h3"fontSize="1rem"color="#767676"fontWeight="400"lineHeight="1.36"fontFamily="'geomanist-regular',sans-serif"
                  textAlign={"left"}>
                  Demos typically last 30 minutes, but we will adjust the time based on your needs.                  
                </Heading>
              </Box>
            </Box>
            <Box display={"flex"} gap="20px" mb="10px">
              <Box bg="#57bb71" w="10px"h="10px"borderRadius={"50%"}mt="1%"border="4px solid #57bb71"></Box>
              <Box>
                <Heading as="h3"fontSize="1rem"color="#767676"fontWeight="400"lineHeight="1.36"fontFamily="'geomanist-regular',sans-serif"
                  textAlign={"left"}>               
                  Feel free to invite other team members to join this call.
                </Heading>
              </Box>
            </Box>

            <Box display={"flex"} gap="20px" mb="10px">
              <Box bg="#57bb71"w="10px"h="10px"borderRadius={"50%"} mt="1%"border="4px solid #57bb71"></Box>
              <Box>
                <Heading as="h3"fontSize="1rem"color="#767676"fontWeight="400"lineHeight="1.36"fontFamily="'geomanist-regular',sans-serif"
                  textAlign={"left"}> No available time slots?{" "}
                  <Link to="/contact" className={styles.links}> Contact us </Link>{" "}
                  and we'll surely work something out.
                </Heading>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* // --------------------------------------------------------------------- */}



   </div>

  );
};

export default Demo;