"use client";
import React, { useState } from "react";
import LoginPage from "./(auth)/login/page";
import CustomerDashboard from "./home/page";

const Main = () => {
  return (
    <div>
      {/* <LoginPage /> */}
      <CustomerDashboard />
    </div>
  );
};

export default Main;
