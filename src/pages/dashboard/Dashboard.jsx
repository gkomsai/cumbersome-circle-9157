import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <Box>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </Box>
  );
};

export default Dashboard;
