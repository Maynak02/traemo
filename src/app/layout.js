"use client";

import { Inter, Rubik, Open_Sans } from "next/font/google";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, usePathname, useServerInsertedHTML } from "next/navigation";
import "./globals.css";
import Sidebar from "@/components/steps-bar";
import MainDiv from "@/components/styles/main.style";
import Stepbardiv from "@/components/styles/stepsbar.style.";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ToastWrapper from "@/components/ToastContainer";
import StyledJsxRegistry from "./registry";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { appWithTranslation } from "next-i18next";
import { I18nextProvider } from "react-i18next";
import common_en from "../locales/en/common_en.json";
import common_de from "../locales/de/common_de.json";
import i18next from "i18next";
import { SessionProvider } from "next-auth/react";
import ProtectedPageService from "@/services/protectedPage";
import { PersistGate } from "redux-persist/integration/react";
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
function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // const isLoginPage =
  //   pathname === "/login" ||
  //   pathname === "/register" ||
  //   pathname == "/resetPassword" ||
  //   pathname == "/forgotPassword";

  i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: "en", // language to use
    resources: {
      en: { common: common_en },
      de: { common: common_de },
    },
  });

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <title>Traemo</title>
      </head>
      <body className={`${inter.className}`}>
        {/* <StyleSheetManager sheet={styledComponentsStyleSheet.instance}> */}
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <I18nextProvider i18n={i18next}>
              {/* <SessionProvider> */}

              <MainDiv>
                <StyledJsxRegistry>
                  <ProtectedPageService />
                  <ToastWrapper />
                  {children}
                </StyledJsxRegistry>
              </MainDiv>

              {/* </SessionProvider> */}
            </I18nextProvider>
          </PersistGate>
        </Provider>
        {/* </StyleSheetManager> */}
      </body>
    </html>
  );
}
export default appWithTranslation(RootLayout);
