import { useCallback, useRef, useEffect } from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Header from "@/components/styles/header.style";
import { useTranslation } from "react-i18next";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getUserAction, logoutAction } from "@/redux/Auth/action";
import { toast } from "react-toastify";
import { TOAST_ALERTS } from "@/constants/keywords";
import { getData, removeData, saveData } from "@/utils/storage";
import { PATH_AUTH, PATH_DASHBOARD } from "@/routes/paths";

const SingleHeader = ({ className = "" }) => {
  const router = useRouter();
  const storeDispatch = useDispatch();

  const { t } = useTranslation("common");

  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const logoutRef = useRef(null);

  const openProfileDropdown = useCallback(() => {
    setProfileDropdownOpen(true);
  }, []);

  const onTapLogin = useCallback(() => {
    // setProfileDropdownOpen(true);
    router.push(PATH_AUTH.login);
  }, []);

  const [userData, setUserData] = useState();
  const [userAuth, setUserAuth] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const token = getData("token");
    if (token) {
      setUserAuth(token?.access_token);
      getUserData();
    }
  }, []);

  const getUserData = async () => {
    try {
      const { payload: res } = await storeDispatch(getUserAction());
      const { data, status, message } = res;
      if (status) {
        setUserData(data);

        saveData("user", data);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (logoutRef.current && !logoutRef.current.contains(event.target)) {
        setIsModalVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [logoutRef]);

  const handleLogout = async () => {
    const { payload: res } = await storeDispatch(logoutAction());
    const { status, message } = res;
    if (status) {
      removeData("user");
      removeData("token");
      setIsModalVisible(false);
      onTapLogin();
    } else {
      toast.error(message);
    }
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="">
        <Header>
          <div className="header-left">
            <div className="logo-header">
              <Link href={PATH_DASHBOARD.home}>
                <img alt="logo" src="/image-1@2x.png" />
              </Link>
            </div>
          </div>
          <div className="header-right">
            {userAuth !== null ? (
              <div
                className="header-right-dropdwon"
                onClick={openProfileDropdown}
              >
                <p>
                  {userData?.firstname} {userData?.lastname}
                </p>
                <img className="arrow-icon" alt="" src="/chevrondown-2.svg" />
              </div>
            ) : (
              <div className="header-right-dropdwon" onClick={onTapLogin}>
                <p>{t("SignIn")}</p>
                <img className="arrow-icon" alt="" src="/chevrondown-2.svg" />
              </div>
            )}
          </div>
        </Header>
      </div>

      {isProfileDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-40 right-8 top-[85px] w-[240px] bg-white border-[1px] br-[8px] rounded-lg px-4 shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
        >
          <ul className="py-4">
            <Link href={PATH_DASHBOARD.guthaben}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_wallet.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("TopupNow")}
                </span>
                <span className="text-green-500 font-semibold">€0</span>
              </li>
            </Link>
            {/* <Link href={PATH_DASHBOARD.profil}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_profile.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Profile")}
                </span>
              </li>
            </Link> */}
            <Link href={PATH_DASHBOARD.bestellungen}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_premium.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("RecurringOrders")}
                </span>
              </li>
            </Link>
            {/* <Link href={PATH_DASHBOARD.adressen}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_address.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Addresses")}
                </span>
              </li>
            </Link>

            <Link href={PATH_DASHBOARD.bestellhistorie}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_history.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("OrderHistory")}
                </span>
              </li>
            </Link>
            <Link href={PATH_DASHBOARD.support}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_support.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Support")}
                </span>
              </li>
            </Link> */}
            <button
              className="w-[100%]"
              onClick={() => {
                setProfileDropdownOpen(false);
                setIsModalVisible(true);
              }}
            >
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_logout.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Logout")}
                </span>
              </li>
            </button>
          </ul>
        </div>
      )}

      {isModalVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {t("ConfirmLogout")}
            </h2>
            <p className="text-gray-700 text-center mb-6">
              {t("WantToLogout")}
            </p>

            <div className="flex justify-between space-x-4">
              <button
                onClick={() => handleClose()}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-full"
              >
                {t("Cancel")}
              </button>
              <button
                onClick={handleLogout}
                className="bg-theme text-white px-4 py-2 rounded-md w-full"
              >
                {t("Logout")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

SingleHeader.propTypes = {
  className: PropTypes.string,
};

export default SingleHeader;
