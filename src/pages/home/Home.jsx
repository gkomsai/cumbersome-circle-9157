import { Box } from '@chakra-ui/react';
import React from 'react'
import Carousel from './carousel';
// import Carousol from '../../components/carousel';

import styles from "./home.module.css";

const Home = () => {
  return (
    <Box>
      <Carousel />
    </Box>
  )
}

export default Home