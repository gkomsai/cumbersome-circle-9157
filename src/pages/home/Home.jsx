import { Box } from '@chakra-ui/react';
import React from 'react'
import Carousel from './carouselSection/carousel';
import TopSection from './carouselSection/TopSection';



import styles from "./home.module.css";

const Home = () => {
  return (
    <Box>
      <TopSection />
      <Carousel />
    </Box>
  )
}

export default Home