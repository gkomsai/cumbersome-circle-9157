import { Box } from '@chakra-ui/react';
import React from 'react'
import BottomSection from './carouselSection/BottomSection';
import Carousel from './carouselSection/carousel';
import TopSection from './carouselSection/TopSection';
import ReviewSection from './ReviewSection/ReviewSection';




const Home = () => {


  return ( 
  <Box >
    <TopSection />
    <Carousel />
    <BottomSection / >
      <ReviewSection />
  </Box>

  )
  
  }

export default Home


