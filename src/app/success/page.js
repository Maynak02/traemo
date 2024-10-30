"use client";
import Link from "next/link";
import React, { useEffect, useMemo } from "react";

const Success = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/success.gif" className="h-40 w-40" />
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment was successfully processed.
        </p>
        <p className="text-gray-600 mb-6 text-sm">
          If you are not automatically redirected, click the Home button.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href={"/"}
            className="flex items-center space-x-2 bg-greenDC text-white px-6 py-2 rounded-lg shadow focus:outline-none"
          >
            <img src="/home.svg" className="h-5 w-5 mr-1" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
