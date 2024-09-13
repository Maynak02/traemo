"use client";

import { Inter, Outfit, Roboto, Rubik } from "next/font/google";
import { Open_Sans } from "next/font/google";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, usePathname } from "next/navigation";
import "./globals.css";
import Sidebar from "@/components/steps-bar";
import MainDiv from "@/components/styles/main.style";
import Stepbardiv from "@/components/styles/stepsbar.style.";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ToastWrapper from "@/components/ToastContainer";
import StyledJsxRegistry from "./registry";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
// import ProtectedPageService from "@/services/protectedPage";

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const open_sans = Open_Sans({ subsets: ["latin"] });
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const router = useRouter();
  // const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // const isLoginPage =
  //   pathname === "/login" ||
  //   pathname === "/register" ||
  //   pathname == "/resetPassword" ||
  //   pathname == "/forgotPassword";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/images/logo.png" />
        <title>Traemo</title>
      </head>
      <body className={`${inter.className}`}>
        <Provider store={store}>
          {/* <GoogleOAuthProvider clientId="598913711908-ps1ud5pqp6diuci99laprr35pkbqffoa.apps.googleusercontent.com"> */}
          {/* <ProtectedPageService /> */}
          {/* <ToastWrapper /> */}
          <div>
            <div>
              <MainDiv>
                {/* <Header /> */}
                <StyledJsxRegistry>{children}</StyledJsxRegistry>
              </MainDiv>
            </div>
          </div>
          {/* </GoogleOAuthProvider> */}
        </Provider>
      </body>
    </html>
  );
}
