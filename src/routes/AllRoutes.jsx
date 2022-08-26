import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Demo from "../pages/demo/Demo";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Pricing from "../pages/pricing/Pricing";
import SignUp from "../pages/signUp/SignUp";
import Tour from "../pages/tour/Tour";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/request-a-demo" element={<Demo />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AllRoutes;
