import React from 'react'
import {Box, Button, Grid, GridItem, Image, Input, Spacer, Stack,Text} from "@chakra-ui/react"
import ReactPlayer from 'react-player'


const TourHeader = () => {
  return (
    <Box marginTop="5rem">
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
           <Grid templateRows="repeat(3,1fr)" templateColumns="repeat(3,1fr)">
            <GridItem box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Seemless integrations</Text>
                <Text color="gray">Track time right inside the most popular apps, such as Asana, Basecamp, Jira, Trello, GitHub, ClickUp and more.</Text>
            </GridItem>
            <GridItem box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Timer or manual entry</Text>
                <Text color="gray">Start and stop your timer to record activities as you work. Or log hours manually afterwards.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Clock-in, clock-out</Text>
                <Text color="gray">Know the time spent on projects as well as hours of work and breaks</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Estimates</Text>
                <Text color="gray">Set time estimates so at any time you can see the time you spend and what is left</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Reminders</Text>
                <Text color="gray">Receive notifications about long-running timers and reminders to track time.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Time off</Text>
                <Text color="gray">Track paid time off, vacations, sick days and leave types.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Auto-stop timer</Text>
                <Text color="gray">Configure to auto stop timer at the end of the workday.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Time log</Text>
                <Text color="gray">All changes and estimates made to the task time are logged and available for revision.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Automate with Zapier</Text>
                <Text color="gray">Use Zapier for automatic data transfer between Everhour and 1000+ apps with no technical knowledge.</Text>
            </GridItem>
            
           </Grid>

        </Box>
      
    
    </Box>
  )
}

export default TourHeader
