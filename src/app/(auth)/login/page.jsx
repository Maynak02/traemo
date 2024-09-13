"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LoginMain from "@/components/styles/auth.style";
import "../../globals.css";

const LoginPage = () => {
  return (
    <LoginMain>
      <div className="login-main">
        <div className="login-main-inner">
          <h1>Login</h1>
          <div className="form-login">
            <form>
              <div className="form-group">
                <input type="email" placeholder="Email address" required />
              </div>
              <div className="btn-form">
                <button
                  className="btn button-common"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle login logic here
                  }}
                >
                  Register
                </button>
              </div>
              <div className="last-link">
                <p>
                  Don’t have an account? <Link href="/register">Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginMain>
  );
};

export default LoginPage;
