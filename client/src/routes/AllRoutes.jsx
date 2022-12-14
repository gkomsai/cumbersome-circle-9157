import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import Projects from "../pages/dashboard/Projects";
import Reports from "../pages/dashboard/Reports";
import Team from "../pages/dashboard/Team";
import Timer from "../pages/dashboard/Timer";
import Clients from "../pages/dashboard/Clients";
import Demo from "../pages/demo/Demo";
import Error from "../pages/Error";
import Home  from "../pages/home/Home";
import Login from "../pages/login/Login";
import Pricing from "../pages/pricing/Pricing";
import SignUp from "../pages/signUp/SignUp";
import Tour from "../pages/tour/Tour";
import DashboardHome from "../pages/dashboard/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/request-a-demo" element={<Demo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route path="home" element={<DashboardHome />} />
        <Route path="projects" element={<Projects />} />
        <Route path="team" element={<Team />} />
        <Route path="clients" element={<Clients />} />
        <Route path="timer" element={<Timer />} />
        <Route path="reports" element={<Reports />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AllRoutes;
