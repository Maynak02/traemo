"use client";
import React, { useState } from "react";
import LoginPage from "./(auth)/login/page";
import CustomerDashboard from "./customer/home/page";

const Home = () => {
  return (
    <div>
      {/* <LoginPage /> */}
      <CustomerDashboard />
    </div>
  );
};

export default Home;
