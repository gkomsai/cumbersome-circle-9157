import React from 'react'
import {Box, Button, Grid, GridItem, Image, Input, Spacer, Stack,Text} from "@chakra-ui/react"
import ReactPlayer from 'react-player'


const TourHeader = () => {
  return (
    <Box>
    <Box marginLeft='5rem'>
        <Stack direction="row">
            <Box w='40%'>
                <Box w='80%' marginTop='2rem'><Text fontWeight='500' fontSize='5xl'>Everything your team needs to run more profitable projects</Text>
                <Stack direction='row'>
                <Input placeholder="Work email"/>
                <Button colorScheme='green'>Get started</Button>
                </Stack>
                </Box> 
            </Box>
            <Spacer/>
            <Box >
                <Image boxSize="30rem" src='https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/all-features-3.webp'/>
            </Box>
        </Stack>
        </Box>
        <Box m="0 5rem 0 5rem">
            <Text fontSize="4xl" fontWeight='500'>Time management</Text>
            <Text fontSize='xl' color='gray'>Track time spent on projects, hours of work, vacations or sick days</Text>
           <ReactPlayer width='74rem' height="50rem" controls url="https://youtu.be/jSoBagh6eIs"/>
           <Grid>
            <GridItem>
                <Text fontSize='4xl'>Seemless integrations</Text>
                <Text>Track time right inside the most popular apps, such as Asana, Basecamp, Jira, Trello, GitHub, ClickUp and more.</Text>
            </GridItem>
           </Grid>

        </Box>
      
    
    </Box>
  )
}

export default TourHeader
