import React from "react";
import { Tabs,  Box, TabPanels, Tab, TabPanel} from "@chakra-ui/react";
import {  Accordion,  AccordionItem,  AccordionButton,  AccordionPanel,} from "@chakra-ui/react";
import TimeTrack from "./TimeTrack";
import BillingBudget from "./BillingBudget";
import TaskManage from "./TaskManage";
import VisualPlan from "./VisualPlan";
import Expences from "./Expences";
import Invoice from "./Invoice";




 



const MiddleSection = () => {
  return (
    <div>     
   
      <Tabs style={{ display:"flex" , marginTop:"10%"}}>

        <Box style={{ width:"40%", marginLeft:"8%"}}>

        <Accordion allowToggle>
        <AccordionItem  style={{border:"none"}}>
              <h2>
                <AccordionButton>
                 
                    <div>
                      <img style={{height:"50px", padding:"5px"}} src="https://cdn-icons-gif.flaticon.com/6450/6450929.gif"  alt="" /> 
                       
                    </div>
                    <Tab style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}> Time tracking</Tab>
              
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} style={{backgroundColor:"rgb(240,250,245)"}}>
                Easy-touse time tracker. Know the time spent on tasks, hours of
                work, and breaks for each employee
              </AccordionPanel>
            </AccordionItem>

  {/* ------------------------------------------------------------------2--------------------------------------- */}
            <AccordionItem  style={{border:"none"}}>
              <h2>
                <AccordionButton>
                 
                    <div>
                      <img style={{height:"50px", padding:"5px"}}
                        src="https://img.icons8.com/external-line-colors-royyan-wijaya/2x/external-billing-cryp-finance-line-colors-royyan-wijaya.png"
                        alt="icon"
                      />
                    </div>
                    <Tab style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}>Billing and budgeting</Tab>
                
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} style={{backgroundColor:"rgb(240,250,245)"}}>
                Simple and flexible projects billing. Set budgets to track
                progress in real time. Receive timely notifications
              </AccordionPanel>
            </AccordionItem>
{/* ------------------------------------------------------------3--------------------------------------- */}
            <AccordionItem  style={{border:"none"}}>
              <h2>
                <AccordionButton>
                 
                    <div>
                      <img style={{height:"50px", padding:"5px"}}
                      src="https://img.icons8.com/office/2x/live-folder.png" alt="" />
                    </div>
                    <Tab style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}>Task management</Tab>
               
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} style={{backgroundColor:"rgb(240,250,245)"}}>
                Create tasks, organize them in sections, add time estimates to
                keep everyone in the loop and on track
              </AccordionPanel>
            </AccordionItem>
            

{/* ------------------------------------------------------4---------------------------------------------- */}
            <AccordionItem  style={{border:"none"}}>
              <h2>
                <AccordionButton>
             
                    <div>
                      <img style={{height:"50px", padding:"5px"}}
                       src="https://img.icons8.com/fluency/2x/blockly-turquoise.png"  alt=""/>
                    </div>
                    <Tab style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}>Visual planning</Tab>
                 
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}  style={{backgroundColor:"rgb(240,250,245)"}} >
                View your teram's schedule, know how busy or available some is,
                compare plan to the actual time spent
              </AccordionPanel>
            </AccordionItem>
{/* --------------------------------------------------------------5--------------------------------------------- */}
            <AccordionItem  style={{border:"none"}}> 
              <h2>
                <AccordionButton>
                
                    <div>
                      <img style={{height:"50px", padding:"5px"}}
                       src="https://img.icons8.com/fluency/2x/layers.png"  alt=""/>
                    </div>
                    <Tab style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}>Expenses</Tab>
              
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}style={{backgroundColor:"rgb(240,250,245)"}}>
                Track work-related expenses with ease. Reimburse employees, use
                costs in projects budgets, add to client invoices
              </AccordionPanel>
            </AccordionItem>
{/* ---------------------------------------------6----------------------------------------------------- */}
            <AccordionItem  style={{border:"none"}}>
              <h2>
                <AccordionButton>
                
                    <div>
                      <img style={{height:"50px", padding:"5px"}}
                       src="https://cdn-icons-png.flaticon.com/128/4306/4306907.png" alt="" />
                    </div>
                    <Tab style={{fontSize:"15px" , fontWeight:"bold", padding:"20px"}}>Invoicing</Tab>
             
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} style={{backgroundColor:"rgb(240,250,245)"}}>
                Easily create an invoice based on tracked time and expenses.
                Connect with QuickBooks, Xero or FreshBooks
              </AccordionPanel>
            </AccordionItem>

           

          {/* <Tab fontWeight="bold">Time Tracking</Tab>       
          <Tab fontWeight="bold">Billing and Budgting</Tab>
          <Tab fontWeight="bold">Task management</Tab>
          <Tab fontWeight="bold">Visual planning</Tab>
          <Tab fontWeight="bold">Expences</Tab>
          <Tab fontWeight="bold">Invoice</Tab> */}

          </Accordion>

          </Box>


     <Box >  
        <TabPanels>
          <TabPanel>
            <TimeTrack/>
          </TabPanel>
          <TabPanel>
            <BillingBudget/>
          </TabPanel>
          <TabPanel>
           <TaskManage/>
          </TabPanel>

          <TabPanel>
           <VisualPlan/>
          </TabPanel>

          <TabPanel>
           <Expences/>
          </TabPanel>

          <TabPanel>
           <Invoice/>
          </TabPanel>
        </TabPanels>

        </Box>
      </Tabs>
    
    </div>
  );
};

export default MiddleSection
