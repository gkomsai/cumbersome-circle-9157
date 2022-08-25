import React, { useState } from "react";
import { Switch,Box,Heading} from "@chakra-ui/react";
import {Stack,Text,}from "@chakra-ui/react";
import "./pricing.css";


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

          

     
    </Box>
  );
};

export default Pricing;
