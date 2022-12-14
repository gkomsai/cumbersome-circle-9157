import { Box } from "@chakra-ui/react";
import React from "react";
import BottomSection from "./carouselSection/BottomSection";
import Carousel from "./carouselSection/carousel";
import TopSection from "./carouselSection/TopSection";
import MidPart from "./MiddleSection/MiddleSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import TopPortion from "./TopSection/TopPortion";


const Home = () => {


  return (
    <Box>
      <TopPortion />
      <MidPart/>
      <TopSection/>     
      <Carousel />
      <BottomSection />
      <ReviewSection />
    </Box>
  );
};

export default Home;
