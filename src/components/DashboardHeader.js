import { useCallback, useRef, useEffect } from "react";
import React, { useMemo, useState } from "react";
import Toggle from "./toggle";
import PropTypes from "prop-types";
import Link from "next/link";
import Modal from "react-modal";
import Header from "@/components/styles/header.style";
import { useTranslation } from "react-i18next";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddressForList,
  setDecreaseQuantity,
  setUpdatedCartList,
} from "@/redux/Cart/CartReducer";
import { getUserAction, logoutAction } from "@/redux/Auth/action";
import { toast } from "react-toastify";
import { TOAST_ALERTS } from "@/constants/keywords";
import { getData, removeData, saveData } from "@/utils/storage";
import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";
import { GOOGLE_PLACE_API_KEY } from "@/config";
import { createOrUpdateAddress } from "@/redux/Dashboard/action";
import Loader from "./Loader";
import { ThreeDots } from "react-loader-spinner";

const libraries = ["places"];

const DashboardHeader = ({ className = "" }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const storeDispatch = useDispatch();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCwgNAfoR_pFw6Bj-egPPtiaK-Myf0l4cU",
    libraries,
  });

  const { t } = useTranslation("common");

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [total, setTotal] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const dropdownRef = useRef(null);
  const cartDropdownRef = useRef(null);
  const logoutRef = useRef(null);

  const openProfileDropdown = useCallback(() => {
    setProfileDropdownOpen(true);
  }, []);

  const onTapLogin = useCallback(() => {
    // setProfileDropdownOpen(true);
    router.push("/login");
  }, []);

  const openCartDropdown = useCallback(() => {
    setTotal(100);
    setCartDropdownOpen(true);
  }, []);

  const [userData, setUserData] = useState();
  const [userAuth, setUserAuth] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [latitude, setLatitude] = useState(46.37468949473951);
  const [longitude, setLongitude] = useState(9.334408964095253);

  useEffect(() => {
    const token = getData("token");
    console.log("user", token);
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

  const CreateAddress = async (locationData) => {
    console.log("locationData", locationData);

    setIsLoading(true);
    const objParam = {
      country: locationData.country,
      postcode: locationData.postal_code,
      city: locationData.city,
      street: locationData.street,
      house: locationData.house,
    };
    try {
      const { payload: res } = await storeDispatch(
        createOrUpdateAddress(objParam)
      );
      const { data, status, message } = res;
      if (status) {
        console.log("RES-DATA->", data);

        storeDispatch(setAddressForList(locationData));
        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast.error(message);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };

  // Fetch Data
  const cartData = useSelector((state) => state.cartData.cartList);

  console.log("cartData", cartData);

  const totalPrice = cartData.reduce((acc, current) => {
    return acc + parseFloat(current.displayPrice);
  }, 0);

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
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target)
      ) {
        setCartDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartDropdownRef]);

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
    console.log("Logged out");
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

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity > 0) {
      const updatedCart = cartData.map((item, i) =>
        i === index
          ? {
              ...item,
              givenQuantity: newQuantity,
              displayPrice: item.price_net * newQuantity,
            }
          : item
      );
      storeDispatch(setUpdatedCartList(updatedCart));
    }
  };

  const [autocomplete, setAutocomplete] = useState(null);
  const [address, setAddress] = useState("");

  const onLoad = (autoC) => {
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address);

      if (!place.geometry || !place.address_components) {
        return;
      }

      const locationDetails = extractDetails(place);
      // setDetails(locationDetails);
      console.log("place-->", place.formatted_address);
      console.log("locationDetails-->", locationDetails);

      if (userAuth !== null) {
        CreateAddress(locationDetails);
      } else {
        storeDispatch(setAddressForList(locationDetails));
        closeModal();
      }
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  const extractDetails = (place) => {
    const location = {
      country: "",
      street: "",
      city: "",
      state: "",
      house: "",
      postal_code: "",

      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng(),
    };

    setLatitude(place.geometry.location.lat());
    setLongitude(place.geometry.location.lng());

    // "name": "Test",
    // "delivery_instructions": "string",
    // "delivery_picture": "string"

    place.address_components.forEach((component) => {
      const types = component.types;

      if (types.includes("country")) {
        location.country = component.long_name;
      }

      if (types.includes("locality")) {
        location.city = component.long_name;
      }

      if (types.includes("administrative_area_level_1")) {
        location.state = component.short_name;
      }

      if (types.includes("postal_code")) {
        location.postal_code = component.long_name;
      }

      if (types.includes("route")) {
        location.street = component.long_name;
      }

      if (types.includes("street_number")) {
        location.house = component.long_name;
      }
    });

    return location;
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="">
        <Header>
          <div className="header-left">
            <div className="logo-header">
              <Link href="/customer/home">
                <img alt="logo" src="/image-1@2x.png" />
              </Link>
            </div>
            <div className="map-header">
              <div className="map-header-link" onClick={openModal}>
                <img alt="" src="/location.svg" />
                <p>{t("EnterDeliveryAddress")}</p>
                <img className="arrow-icon" alt="" src="/chevrondown@2x.png" />
              </div>
            </div>
            <div className="toggle-header">
              <div className="toggle-header-inner  shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]">
                <span className="mr-3 text-gray-700">{t("Subscription")}</span>
                <button
                  type="button"
                  aria-pressed={enabled ? "true" : "false"}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ${
                    enabled ? "bg-theme" : "bg-gray-300"
                  }`}
                  onClick={() => setEnabled(!enabled)}
                >
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="header-right">
            {cartData.length > 0 && (
              <div className="header-right-cart" onClick={openCartDropdown}>
                <img alt="" src="/frame.svg" />
                <p>€{totalPrice}</p>
                <img
                  className="arrow-icon"
                  alt=""
                  src="/chevrondown-1@2x.png"
                />
              </div>
            )}
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
          {isCartDropdownOpen && (
            <div className="cart-dropdown" ref={cartDropdownRef}>
              <div className="cart-dropdown-inner">
                <div className="cart-dropdown-inner-top">
                  <img alt="" src="/frame.svg"></img>
                  <h5>{t("Cart")}</h5>
                </div>
                <div className="cart-dropdown-block">
                  <div className="cart-dropdown-block-inner">
                    {cartData.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="cart-dropdown-block-inner-block"
                        >
                          <div className="img-block">
                            <img alt="" src={item.imageUrl} />
                          </div>
                          <div className="cart-block">
                            <div className="cart-block-left">
                              <h5>{item.title}</h5>
                              <p>
                                {item.quantity}&nbsp;{item.unit}
                              </p>
                            </div>
                            <div className="cart-price">
                              <h3>CHF {item.displayPrice}</h3>
                              <div className="flex items-center">
                                <button
                                  onClick={() =>
                                    storeDispatch(setDecreaseQuantity(item))
                                  }
                                  className="bg-gray-100 -mr-2 px-2 py-1 text-lg rounded-l-lg z-20"
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  placeholder="1"
                                  disabled
                                  value={item.givenQuantity}
                                ></input>
                                <button
                                  onClick={() =>
                                    storeDispatch(setUpdatedCartList(item))
                                  }
                                  className="bg-gray-100 -ml-2 px-2 py-1 text-lg rounded-r-lg"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="cart-footer">
                  <button
                    className="btn btn-footer"
                    onClick={() => {
                      userAuth !== null
                        ? router.push("/customer/cart")
                        : router.push("/login");
                    }}
                  >
                    <img alt="" src="/cart-img.svg" />
                    <p>{t("ProceedToCheckout")}</p>
                    <h4>€{totalPrice}</h4>
                  </button>
                </div>
              </div>
            </div>
          )}
        </Header>
        <Modal
          isOpen={modalIsOpen}
          className="common-modal-block"
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div className="two-block-modal-inner">
            <div className="two-block-modal-inner-left">
              <div className="top-block-top">
                <h2>{t("EnterYourAddress")}</h2>
                <p>{t("DeliverAtHome")}</p>
              </div>
              <div className="top-block-bottom">
                <img src="/Brotkorb_Traemo.png" alt="Traemo" />
              </div>
            </div>
            <div className="two-block-modal-inner-right">
              <div className="btn-close-block">
                <button onClick={closeModal}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#101828"
                      // strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {isLoading ? (
                <div className="flex justify-center items-center h-[100%]">
                  <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#FAB300"
                    radius="18"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                <div className="search-address">
                  <h3>{t("SelectAddress")}</h3>
                  <form>
                    <div className="form-group">
                      <button>
                        <img src="/search-icon.svg" alt="Traemo" />
                      </button>
                      <Autocomplete
                        onLoad={onLoad}
                        onPlaceChanged={onPlaceChanged}
                      >
                        <input
                          type="text"
                          placeholder={t("EnterAddress")}
                        ></input>
                      </Autocomplete>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>

      {isProfileDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-40 right-8 top-[85px] w-[240px] bg-white border-[1px] br-[8px] rounded-lg px-4 shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
        >
          <ul className="py-4">
            <Link href="/customer/wallet">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_wallet.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("TopupNow")}
                </span>
                <span className="text-green-500 font-semibold">€0</span>
              </li>
            </Link>
            <Link href="/customer/profile">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_profile.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Profile")}
                </span>
              </li>
            </Link>
            <Link href="/customer/standingorders">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_premium.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("RecurringOrders")}
                </span>
              </li>
            </Link>
            <Link href="/customer/address">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_address.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Addresses")}
                </span>
              </li>
            </Link>

            <Link href="/customer/history">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_history.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("OrderHistory")}
                </span>
              </li>
            </Link>
            <Link href="/customer/support">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_support.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Support")}
                </span>
              </li>
            </Link>
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

DashboardHeader.propTypes = {
  className: PropTypes.string,
};

export default DashboardHeader;
