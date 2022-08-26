import { Box } from '@chakra-ui/react';
import React from 'react'
import Carousel from './carouselSection/carousel';



import styles from "./home.module.css";

const Home = () => {
  return (
    <Box>
      <Carousel />
    </Box>
  )
}

export default Home