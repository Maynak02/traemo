"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { getData } from "@/utils/storage";
import { useSelector } from "react-redux";
import { PATH_AUTH, PATH_DASHBOARD } from "@/routes/paths";

const ProtectedPageService = () => {
  const router = useRouter();
  const path = usePathname();
  const user = getData("token");
  const userAuth = user?.access_token;
  const selector = useSelector((state) => state.registerApi);

  const afterLoginProtectedPages = [
    // "/customer/wallet",
    // "/customer/profile",
    // "/customer/cart",
    // "/customer/history",
    // "/customer/productdetail/[productid]",
    // "/customer/standingorders",
  ];

  const afterLoginNotAccessiblePages = [
    // "/",
    // "/register",
    // "/login",
  ];

  useEffect(() => {
    if (afterLoginNotAccessiblePages.includes(path) && userAuth) {
      let dashboard_url = PATH_DASHBOARD.home;
      router.push(dashboard_url);
    }

    let isProtectedDynamicPath = false;
    afterLoginProtectedPages.forEach((pattern) => {
      if (
        (pattern instanceof RegExp && pattern.test(path)) ||
        path === pattern
      ) {
        isProtectedDynamicPath = true;
      }
    });

    if (isProtectedDynamicPath && !userAuth) {
      router.push(PATH_AUTH.login);
    }
  }, [userAuth, path]);

  return null;
};

export default ProtectedPageService;
