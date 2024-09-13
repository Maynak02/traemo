"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Home = () => {
  // States
  return (
    <>
      <div className="grid grid-cols-1 grid-div">
        <div className="right-div mb-[100px] ml-[100px]">
          <div className="container">
            <p className="started-div">{"Let's Get Started"}</p>
            {/* <Image
              src="/images/get-started-bar.svg"
              className="get-started-bar"
              alt="get-started-bar"
              width={200}
              height={5}
            /> */}
            <div className="profile-question-text-div mt-[60px]">
              <span className="text-question">
                Do you want a fully customised programme (around 10 minutes) or
                quick setup (around 3 minutes) ?
              </span>
              <p className="text-question mt-[2.12rem]">
                You can still get a customised programme later!
              </p>
            </div>

            <div className="flex justify-between mr-[10px]">
              <div className="button-div mt-[147px] ">
                <Link href="/register">
                  <button className="button !w-[400px]">Signup</button>
                </Link>
              </div>

              <div className="button-div mt-[147px] mr-[20px]">
                <Link href="/login">
                  <button className="button !w-[400px]">Login</button>
                </Link>
              </div>
            </div>
            <div className="flex justify-between mr-[10px]">
              <div className="button-div mt-[147px] mr-[20px]">
                {/* <Link href="/forgotpassword">
                  <a>
                    <button className="button !w-[400px]">
                      Forgot Password
                    </button>
                  </a>
                </Link> */}
              </div>
              <div className="button-div mt-[147px] mr-[20px]">
                <Link href="/resetpassword">
                  <button className="button !w-[400px]">Reset Password</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="left-div relative mt-[-150px]">
          <div className="img absolute  right-0">
            <Image
              src="/images/homepage.svg"
              className=""
              alt="homepage"
              width={840}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
