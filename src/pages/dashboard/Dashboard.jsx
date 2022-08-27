import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import Time from "./Time";

const Dashboard = () => {
  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Time />
      </Box>
    </Flex>
  );
};

export default Dashboard;
