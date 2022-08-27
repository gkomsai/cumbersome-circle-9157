import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Projects from "../pages/dashboard/Projects";
import Reports from "../pages/dashboard/Reports";
import Team from "../pages/dashboard/Team";
import Time from "../pages/dashboard/Timer";
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
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/projects" element={<Projects />} />
      <Route path="/dashboard/team" element={<Team />} />
      <Route path="/dashboard/time" element={<Time />} />
      <Route path="/dashboard/reports" element={<Reports />} />
    </Routes>
  );
};

export default AllRoutes;
