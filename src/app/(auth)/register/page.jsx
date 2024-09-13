/** @format */

"use client";
import React, { useEffect, useMemo } from "react";

import Link from "next/link";
import LoginMain from "@/components/styles/auth.style";
import "../../globals.css";

const RegisterPage = () => {
  return (
    <LoginMain>
      <div className="login-main">
        <div className="login-main-inner">
          <h1>Register</h1>
          <div className="form-login">
            <form>
              <div className="two-from-group">
                <div className="form-group">
                  <input type="text" placeholder="First Name"></input>
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Last Name"></input>
                </div>
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email address"></input>
              </div>
              <div className="btn-form">
                <button className="btn button-common">Register</button>
              </div>
              <div className="last-link">
                <p>
                  Already have an account? <Link href="/login">Sign In</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginMain>
  );
};

export default RegisterPage;
