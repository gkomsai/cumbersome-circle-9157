import React, { useState } from "react";
import { Switch,Heading} from "@chakra-ui/react";
import "./pricing.css";
import {Box,Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Stack,Text,} from "@chakra-ui/react";


const Pricing = () => {
  const [toggle, settoggle] = useState(false);
  console.log(toggle);
  const handletoggle = () => {
    settoggle(!toggle);
  };
  return (    
    <Box style={{ marginTop: "160px" }}>   

    <Heading style={{fontFamily:"geomanist-book, sans-serif",fontColor:"#333333", fontSize:"44px" ,fontWeight:"bold"}}>
      Simple pricing with no extra fees</Heading>
             
    <p style={{fontSize:"20px", lineHeight:"4rem"}}>
    Start with no commitment. Try everything. Subscribe if you love it.  </p>                  
   
       <Stack align="center" direction="row" justify="center" marginTop="2rem"
        onChange={handletoggle}>
      {!toggle ? (
      <Text> Monthly</Text>                
        ):(             
           <Text>Monthly</Text>
        )}
        <Switch size="md" colorScheme="green" />
        {toggle ? (
        <Text> Yearly</Text>
          ):(
          <Text>Yearly</Text>
          )}
       </Stack>
          <div>
        {toggle ? (

// --------------------------------------------------------------yearly ----------------
    <Box className="carditems"style={{ marginTop:"2rem"}}>
      <div style={{border:"1 px solid blue", height:"3px",marginBottom:"40px",marginTop:"-20px",backgroundColor:"#57bb71", width:"90%"}}></div>

      <Heading style={{fontFamily:"geomanist-book, sans-serif",fontWeight:"normal", 
      color:"#333333"}}>Team plan</Heading>         
      <p>All features, plus best-in-class integrations</p>               
      <p style={{fontSize:"3rem" , color:"rgb(87,187,113)",position:"relative", float:"left"}}>
      <span style={{fontSize:"20px", marginLeft:"-20%" , position:"absolute"}}>$</span>
                
      <span style={{fontSize:"3rem"}}>8</span>
      <span style={{fontSize:"16px"}}>.50</span> </p>
      <br/><br/>  <br/>  

      <p><b style={{ opacity: 0.8 }}>/ user / month, starting at 5 users{" "}</b> </p>
                 <ul>
                  <li>Unlimited users</li>
                  <li>Unlimited projects  and clients</li>
                  <li>Track time inside</li>
                  <li>Optional screenshoot</li>
                  <li>Customizable reports</li>
                  <li>Schedule reports by email</li>
                  <li>Lock time entries certain rules</li>
                  <li>Time tracking reminders</li>
                  <li>Time approval</li>
                  <li>Single Sign-on (SSO)</li>
                  <li>Budget & estimates</li> 
                  <li>Scheduling</li>
                  <li>Fast and responsive Support</li>
                  <li>Api</li>
                </ul>
                <div className="tryforfree"> {" "}                 
                <button>Try free</button>
                </div>
              </Box>
               ):(

// -----------------------------------------------------monthly------------------------


    <Box style={{ marginTop:"2rem"}} className="carditems">
    <div style={{border:"1 px solid blue", height:"3px",marginBottom:"40px",marginTop:"-20px",backgroundColor:"#57bb71", width:"90%"}}></div>
    <Heading style={{fontFamily:"geomanist-book, sans-serif" ,
     fontWeight:"normal", color:"#333333"}}>Team plan</Heading>
    <p>All features, plus best-in-class integrations</p>
    <p style={{fontSize:"3rem" , color:"rgb(87,187,113)", position:"relative", float:"left"}}>
    <span style={{fontSize:"20px", marginLeft:"-20%" , position:"absolute"}}>$</span>
    <span style={{fontSize:"3rem"}}>10</span>  </p> <br/><br/><br/>  
    <p> <b style={{ opacity: 0.8 }}> / user / month, starting at 5 users{" "} </b></p>           
    
                <ul>
                  <li>Unlimited users</li>
                  <li>Unlimited projects  and clients</li>
                  <li>Track time inside</li>
                  <li>Optional screenshoot</li>
                  <li>Customizable reports</li>
                  <li>Schedule reports by email</li>
                  <li>Lock time entries certain rules</li>
                  <li>Time tracking reminders</li>
                  <li>Time approval</li>
                  <li>Single Sign-on (SSO)</li>
                  <li>Budget & estimates</li> 
                  <li>Scheduling</li>
                  <li>Fast and responsive Support</li>
                  <li>Api</li>
                </ul>
                <div className="tryforfree">  {" "}                
                  <button>Try free</button>
                </div>
              </Box>        
            )}
          </div>
{/*------ -----------------------------------bottom part--------------------- */}
            <Box style={{ marginTop:"2rem" , marginBottom:"8rem"}}>
              <span>
                Currency
                <select>
                  <option>INR</option>                        
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>AUD</option>
                  <option>CAD</option>
                  <option>ZIM</option>       
              </select>
              </span>
              </Box>       
       
          <Box className="faq">

            <Box  style={{ width:"45%"}}>
              <h2 style={{fontSize:"36px", fontWeight:"bold"}}>Your questions. Answered!</h2>
              <div className="pagesubtitle">
                <h3>
                  Here is a list of the most frequently asked questions. Got
                  others or some ideas? — <a href="/#">Contact us!</a>
                </h3>
               
                  <img style={{width:"100%"}}
                    src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq@2x.webp"
                    alt="faq illustration"></img>             

              </div>
            </Box>
            {/* -------------------img----------------- */}

            <Box style={{width:"50%"}}>
              <Accordion allowToggle>
              <AccordionItem borderTop={"none"}>
              <h2>
              <AccordionButton padding="20px 32px 20px 10px"fontWeight='medium' >
              <Box flex="1"textAlign="left"display="flex"fontSize="18px">
              What's the trial period purpose? </Box>
                     
              <AccordionIcon />
              </AccordionButton>
              </h2>
              <AccordionPanel pb={5}left="0%"textAlign="left"opacity={0.8}>
                    When you sign up, you get a fully-functional account for 2
                    weeks, which gives you access to everything Everhour has to
                    offer. After 14 days, you will need to pick a plan and enter
                    your credit card details. We’ll email you a couple of days
                    before your trial expires to remind you.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                  <AccordionButton padding="20px 32px 20px 10px"fontWeight='medium' >
                  <Box flex="1"textAlign="left"display="flex"fontSize="18px">
                  Can I change my plan later? </Box>
                 <AccordionIcon />
                </AccordionButton>

                  </h2>
                  <AccordionPanel pb={5}left="0%"textAlign="left"opacity={0.8}>
                    Yes, you can upgrade/downgrade your plan at any time. You
                    will be credited for the remainder of your current plan and
                    charged for your new plan when you upgrade.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                  <AccordionButton padding="20px 32px 20px 10px"fontWeight='medium' >
                  <Box flex="1"textAlign="left"display="flex"fontSize="18px">
                    Can I add or remove members at any time?
                  </Box>
                  <AccordionIcon />
                  </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5}left="0%"textAlign="left"opacity={0.8}>
                    Absolutely! Everhour is pay-as-you-go, and you can easily
                    add or remove members from your account with a couple of
                    clicks.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                  <AccordionButton padding="20px 32px 20px 10px"fontWeight='medium' >
                  <Box flex="1"textAlign="left"display="flex"fontSize="18px">
                        What if I want to cancel my service?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5}left="0%"textAlign="left"opacity={0.8}>
                    No problem. If you decide Everhour isn’t for you (or you
                    just need to pause), simply cancel before your next billing
                    period. This date is listed on your billing page.
                    Unfortunately, we can’t refund you for partial use or the
                    amount of time left in your subscription.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                  <AccordionButton padding="20px 32px 20px 10px"fontWeight='medium' >
                  <Box flex="1"textAlign="left"display="flex"fontSize="18px">
                      What kind of payment methods do you accept?
                  </Box>
                  <AccordionIcon />
                  </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5}left="0%"textAlign="left"opacity={0.8}>
                    We currently accept any credit or debit card with a
                    MasterCard, Visa, Discover Network, American Express, Diners
                    Club International or JCB logo.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                  <AccordionButton padding="20px 32px 20px 10px"fontWeight='medium' >
                  <Box flex="1"textAlign="left"display="flex"fontSize="18px">
                       Which currency will I be charged in?
                  </Box>
                  <AccordionIcon />
                  </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5}left="0%"textAlign="left"opacity={0.8}>
                    You will be charged in USD. However, our pricing page
                    displays the indicative price in other currencies based on
                    your location for your convenience.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                  <AccordionButton padding="20px 32px 20px 10px"fontWeight='medium' >
                  <Box flex="1"textAlign="left"display="flex"fontSize="18px">
                    Can I change my plan later?
                  </Box>
                  <AccordionIcon />
                  </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5}left="0%"textAlign="left"opacity={0.8}>
                    Yes, you can upgrade/downgrade your plan at any time. You
                    will be credited for the remainder of your current plan and
                    charged for your new plan when you upgrade.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            </Box>
          </Box>   
   );
};

export default Pricing;
