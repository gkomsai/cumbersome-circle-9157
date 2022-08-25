import React from 'react'
import {Box, Grid, GridItem,Text} from "@chakra-ui/react"
import ReactPlayer from 'react-player'



const Tourbuilding = () => {
  return (
    <Box>
        <Box m="3rem 5rem 0 5rem">
            <Text fontSize="4xl" fontWeight='500'>Billing and budgeting</Text>
            <Text fontSize='xl' color='gray'>Avoid debt and boost revenue with precise project billing and budgeting</Text>
           <ReactPlayer m="1rem 0 1rem 0" width='74rem' height="50rem" controls url="https://www.youtube.com/watch?v=WAnijyq-_4M"/>
           <Grid templateRows="repeat(3,1fr)" templateColumns="repeat(3,1fr)">
            <GridItem box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Manage clients</Text>
                <Text color="gray">Create clients, assign projects, watch budgets, spot uninvoiced time.</Text>
            </GridItem>
            <GridItem box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Flexible billing</Text>
                <Text color="gray">Choose an appropriate billing method: non-billable, time and materials or fixed fee.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Budgets</Text>
                <Text color="gray">Set up a capital or recurring budget for your projects. Don’t let finances catch you by surprise.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Labor costs</Text>
                <Text color="gray">Track what an employee or contractor costs you compared to how much you charge for their work.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Non-billable time</Text>
                <Text color="gray">Exclude certain tasks from the billable amount calculation.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Alerts</Text>
                <Text color="gray">Receive an email alert when you reach a certain percentage of the project budget.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Disallow overbudget</Text>
                <Text color="gray">Budget settings allow you to prohibit reporting time for anyone if the budget is exceeded.</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Custom task rates</Text>
                <Text color="gray">You can override the base rate for a project and assign a specific rate to each task</Text>
            </GridItem>
            <GridItem borderBottom='1px solid gray' margin='1rem 1rem 1rem 1rem'>
                <Text fontSize='2xl' fontWeight="500">Budget visibility</Text>
                <Text color="gray">Decide if members can see a project’s budget, which is visible to admins only by default</Text>
            </GridItem>
            
           </Grid>

        </Box>
      
    </Box>
  )
}

export default Tourbuilding
