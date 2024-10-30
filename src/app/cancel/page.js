"use client";
import Link from "next/link";
import React, { useEffect, useMemo } from "react";

const Cancel = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <div className="flex justify-center mb-6">
          <svg
            class="w-16 h-16 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Payment Cancelled
        </h2>
        <p className="text-gray-600 mb-6">
          Your payment could not be processed. Please try again or contact
          support if the issue persists.
        </p>
        <p className="text-gray-600 mb-6 text-sm">
          If you are not automatically redirected, click the Home button.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href={"/"}
            className="flex items-center space-x-2 bg-gray-500 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-600 focus:outline-none"
          >
            <img src="/home.svg" className="h-5 w-5 mr-1" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
