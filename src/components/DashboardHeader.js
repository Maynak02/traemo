import { useCallback, useRef, useEffect } from "react";
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Modal from "react-modal";
import Header from "@/components/styles/header.style";
import { useTranslation } from "react-i18next";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  resetToInitialState,
  setAddressForList,
  setConstants,
  setDecreaseQuantity,
  setUpdatedCartList,
} from "@/redux/Cart/CartReducer";
import { getUserAction, logoutAction } from "@/redux/Auth/action";
import { toast } from "react-toastify";
import {
  CONSTANT_DATA,
  formatPrice,
  formatUnit,
  TOAST_ALERTS,
} from "@/constants/keywords";
import { getData, removeAll, removeData, saveData } from "@/utils/storage";
import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";
import { GOOGLE_PLACE_API_KEY } from "@/config";
import {
  createOrUpdateAddress,
  getConstantsDataAction,
  listAddress,
} from "@/redux/Dashboard/action";
import Loader from "./Loader";
import { ThreeDots } from "react-loader-spinner";
import { FormProvider, RHFTextInput } from "@/components/hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import LoginMain from "./styles/auth.style";
import CommonPagesBlock from "./styles/common.style";
import { PATH_AUTH, PATH_DASHBOARD } from "@/routes/paths";
import { getFundServiceAction } from "@/redux/Payment/action";

const libraries = ["places"];

const DashboardHeader = ({ className = "", open }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsInnerOpen, setIsInnerOpen] = React.useState(false);
  const router = useRouter();
  const storeDispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_PLACE_API_KEY,
    libraries,
  });

  // console.log("openopen", open);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation("common");

  useEffect(() => {
    console.log("openopen", open);

    if (open === true) {
      openModal();
    }
  }, [open]);

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
    router.push(PATH_AUTH.login);
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

  const [addressList, setAddressList] = useState([]);

  const [sidemenuOpen, setSidemenuOpen] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(0);

  const getCurrentBalance = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await storeDispatch(getFundServiceAction());
      const { data, status, message } = res;
      if (status) {
        setCurrentBalance(data?.total_funds);
        if (totalPrice > data?.total_funds) {
          console.log("no need fund", totalPrice);
        } else {
          console.log("need fund", totalPrice);
        }
        console.log("totalPrice", totalPrice);
        console.log("currentBalance", data?.total_funds);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        if (data?.status === 401) {
          router.push(PATH_AUTH.login);
          removeAll();
        } else {
          toast.error(message);
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };

  useEffect(() => {
    const token = getData("token");
    if (token) {
      setUserAuth(token?.access_token);
      getUserData();
      listAddressData();
      getConstantData();
      getCurrentBalance();
    }
  }, []);

  let hasAddress = false;
  const fetchAddressData = useSelector((state) => state.cartData.fetchAddress);
  if (fetchAddressData && Object.keys(fetchAddressData).length > 0) {
    hasAddress = true;
  } else {
    hasAddress = false;
  }

  const listAddressData = async () => {
    setIsLoading(true);
    const objParam = {
      offset: 0,
      limit: 10,
      sort_direction: "desc",
    };
    try {
      const { payload: res } = await storeDispatch(listAddress());
      const { data, status, message } = res;
      if (status) {
        setAddressList(data);
        if (data.length > 0) {
          const resData = data[0];
          const tempData = {
            id: resData?.id,
            name: resData?.name,
            delivery_instructions: "",
            house: resData?.house,
            city: resData?.city,
            street: resData?.street,
            country: resData?.country,
            postcode: resData?.postcode,
            latitude: resData?.location.coordinates[1],
            longitude: resData?.location.coordinates[0],
          };
          setFormData(tempData);
          storeDispatch(setAddressForList(tempData));
        } else {
          let locationDetails = getData("tempAddress");
          console.log("HERE...", locationDetails);
          CreateAddress(locationDetails);

          setIsOpen(true);
          setIsInnerOpen(true);
        }
        setIsLoading(false);
      } else {
        setIsLoading(false);
        if (data?.status === 401) {
          router.push(PATH_AUTH.login);
          removeAll();
        } else {
          toast.error(message);
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };

  const getUserData = async () => {
    try {
      const { payload: res } = await storeDispatch(getUserAction());
      const { data, status, message } = res;
      if (status) {
        setUserData(data);

        saveData("user", data);

        // const addressData = {
        //   name: data?.firstname,
        //   country: data?.country,
        //   postcode: data?.postcode,
        //   city: data?.city,
        //   street: data?.street,
        //   house: data?.house,
        //   delivery_instructions: "",
        //   delivery_picture: "",
        // };
        // storeDispatch(setAddressForList(addressData));
      } else {
        if (data?.status === 401) {
          router.push(PATH_AUTH.login);
          removeAll();
        } else {
          toast.error(message);
        }
      }
    } catch (error) {
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };

  const CreateAddress = async (form) => {
    setIsLoading(true);
    const objParam = {
      name: form.name,
      country: form.country,
      postcode: form.postcode,
      city: form.city,
      street: form.street,
      house: form.house,
      delivery_instructions: form?.delivery_instructions
        ? form?.delivery_instructions
        : "",
      delivery_picture: "",
    };
    try {
      const { payload: res } = await storeDispatch(
        createOrUpdateAddress(objParam)
      );
      const { data, status, message } = res;
      if (status) {
        objParam.latitude = form.latitude;
        objParam.longitude = form.longitude;
        console.log("formData", formData);

        storeDispatch(setAddressForList(formData));
        setIsLoading(false);
        setIsInnerOpen(false);
        closeModal();
        listAddressData();
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
  const getConstantData = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await storeDispatch(getConstantsDataAction());
      const { data, status, message } = res;
      if (status) {
        CONSTANT_DATA.DELIVERY_FEE = data.DELIVERY_FEE;
        CONSTANT_DATA.MIN_DISBURSEMENT_VALUE = data.MIN_DISBURSEMENT_VALUE;
        CONSTANT_DATA.MIN_ORDER_VALUE = data.MIN_ORDER_VALUE;
        CONSTANT_DATA.MIN_TOPUP_VALUE = data.MIN_TOPUP_VALUE;
        CONSTANT_DATA.MOBILE_CUSTOMER_VERSION = data.MOBILE_CUSTOMER_VERSION;
        CONSTANT_DATA.MOBILE_HUB_VERSION = data.MOBILE_HUB_VERSION;
        CONSTANT_DATA.WEB_CUSTOMER_VERSION = data.WEB_CUSTOMER_VERSION;
        CONSTANT_DATA.WEB_HUB_VERSION = data.WEB_HUB_VERSION;
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
  const cartData = useSelector((state) => state.cartData.cartList);
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
    setLoading(true);
    const { payload: res } = await storeDispatch(logoutAction());
    const { status, message } = res;
    if (status) {
      setLoading(false);
      removeAll();
      storeDispatch(resetToInitialState());
      setIsModalVisible(false);
      onTapLogin();
    } else {
      setLoading(false);
      toast.error(message);
    }
  };

  const handleClose = () => {
    setIsLoading(false);
    setIsModalVisible(false);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity > 0) {
      const updatedCart = cartData.map((item, i) =>
        i === index
          ? {
              ...item,
              givenQuantity: newQuantity,
              displayPrice: item.price_discounted * newQuantity,
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
      if (userAuth !== null) {
        setFormData({
          id: "",
          name: "",
          delivery_instructions: "",
          house: locationDetails.house ? locationDetails.house : "",
          city: locationDetails.city,
          street: locationDetails.street,
          country: locationDetails.country,
          postcode: locationDetails.postal_code,
          latitude: locationDetails.latitude,
          longitude: locationDetails.longitude,
        });
        setIsInnerOpen(true);
        // CreateAddress(locationDetails);
      } else {
        console.log("locationDetails", locationDetails);
        saveData("tempAddress", locationDetails);

        storeDispatch(setAddressForList(locationDetails));
        closeModal();
      }
    }
  };

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    delivery_instructions: "",
    house: "",
    city: "",
    street: "",
    country: "",
    postcode: "",
    latitude: null,
    longitude: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const extractDetails = (place) => {
    const location = {
      country: "",
      street: "",
      city: "",
      // state: "",
      house: "",
      postal_code: "",

      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng(),
    };

    setLatitude(place.geometry.location.lat());
    setLongitude(place.geometry.location.lng());

    place.address_components.forEach((component) => {
      const types = component.types;

      if (types.includes("country")) {
        location.country = component.long_name;
      }

      if (types.includes("locality")) {
        location.city = component.long_name;
      }
      // For Get State Name
      // if (types.includes("administrative_area_level_1")) {
      //   location.state = component.short_name;
      // }

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
    return <Loader />;
  }

  // if (cartData.length === 0) {
  //   setCartDropdownOpen(false);
  // }

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
            <div className="map-header">
              <div
                className={`map-header-link  ${
                  hasAddress ? "bg-white" : "bg-theme"
                }`}
                onClick={openModal}
              >
                <img
                  alt=""
                  src={hasAddress ? "/location_black.svg" : "/location.svg"}
                />
                <p className={`${hasAddress ? "text-gray-700" : "text-white"}`}>
                  {hasAddress
                    ? `${fetchAddressData.street}, ${fetchAddressData.city}`
                    : t("EnterDeliveryAddress")}
                </p>
                <img
                  className="arrow-icon"
                  alt=""
                  src={
                    hasAddress ? "/chevrondown-1@2x.png" : "/chevrondown@2x.png"
                  }
                />
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
            <div
              className="toggle-bar-block"
              onClick={() => {
                setSidemenuOpen(true);
              }}
            >
              <button>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className={`sidebar-block ${sidemenuOpen ? "active" : ""}`}>
              <div className="sidebar-block-inner">
                <div className="logo-close-block">
                  <div className="logo-block">
                    <Link href={PATH_DASHBOARD.home}>
                      <img alt="logo" src="/image-1@2x.png" />
                    </Link>
                  </div>
                  <div
                    className="close-icon-block"
                    onClick={() => {
                      setSidemenuOpen(false);
                    }}
                  >
                    <button>
                      <img alt="logo" src="/close-icon.svg" />
                    </button>
                  </div>
                </div>
                <div className="map-header">
                  <div
                    className={`map-header-link  ${
                      hasAddress ? "bg-white text-black" : "bg-theme text-white"
                    }`}
                    onClick={openModal}
                  >
                    <img
                      alt=""
                      src={hasAddress ? "/location_black.svg" : "/location.svg"}
                    />
                    <p
                      className={`${
                        hasAddress ? "text-gray-700" : "text-white"
                      }`}
                    >
                      {hasAddress
                        ? `${fetchAddressData.street}, ${fetchAddressData.city}`
                        : t("EnterDeliveryAddress")}
                    </p>
                    {/* <img
                      className='arrow-icon'
                      alt=''
                      src={hasAddress ? '/chevrondown-1@2x.png' : '/chevrondown@2x.png'}
                    /> */}
                  </div>
                </div>
                <div className="profile-block-inner">
                  <ul className="py-4">
                    <Link href={PATH_DASHBOARD.wallet}>
                      <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                        <img className="h-6 w-6" src="/images/ic_wallet.svg" />
                        <span className="font-inter text-black text-[16px]">
                          {t("TopupNow")}
                        </span>
                        <span className="text-green-500 font-semibold">
                          CHF 0
                        </span>
                      </li>
                    </Link>
                    {/* <Link href={PATH_DASHBOARD.profile}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_profile.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Profile")}
                </span>
              </li>
            </Link> */}
                    <Link href={PATH_DASHBOARD.standingorders}>
                      <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                        <img className="h-6 w-6" src="/images/ic_premium.svg" />
                        <span className="font-inter text-black text-[16px]">
                          {t("RecurringOrders")}
                        </span>
                      </li>
                    </Link>
                    {/* <Link href={PATH_DASHBOARD.address}>
                      <li className='flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent'>
                        <img className='h-6 w-6' src='/images/ic_address.svg' />
                        <span className='font-inter text-black text-[16px]'>{t('Addresses')}</span>
                      </li>
                    </Link> */}

                    {/* <Link href={PATH_DASHBOARD.history}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_history.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("OrderHistory")}
                </span>
              </li>
            </Link> */}
                    {/* <Link href={PATH_DASHBOARD.support}>
                      <li className='flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent'>
                        <img className='h-6 w-6' src='/images/ic_support.svg' />
                        <span className='font-inter text-black text-[16px]'>{t('Support')}</span>
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
              </div>
            </div>
            {cartData.length > 0 && (
              <div className="header-right-cart" onClick={openCartDropdown}>
                <div className="header-right-cart-link-left">
                  <img alt="" src="/frame.svg" />
                  <p>CHF&nbsp;{formatPrice(totalPrice)}</p>
                </div>
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
            <div className="cart-dropdown-mobile">
              <div className="cart-dropdown" ref={cartDropdownRef}>
                <div className="cart-dropdown-inner">
                  <div className="cart-dropdown-inner-top">
                    <img alt="" src="/frame.svg"></img>
                    <h5>{t("Cart")}</h5>
                  </div>
                  {totalPrice > currentBalance ? (
                    <div className="cart-dropdown-inner-top-info">
                      <img alt="" src="/introduction-icon.svg"></img>
                      <p>
                        Noch&nbsp;
                        <span>{formatPrice(totalPrice - currentBalance)}</span>
                        &nbsp;
                        <span className="chf-text">CHF</span>&nbsp;bis zum
                        Mindestbestellwert
                      </p>
                    </div>
                  ) : (
                    <div className="cart-dropdown-inner-top-info-purple">
                      <img alt="" src="/introduction-icon.svg"></img>
                      <p>
                        Noch&nbsp;<span>11</span>&nbsp;
                        <span className="chf-text">CHF</span>&nbsp;hinzufügen um
                        1 CHF Liefergebühr zu sparen
                      </p>
                    </div>
                  )}
                  <div className="cart-dropdown-block">
                    <div className="cart-dropdown-block-inner">
                      {cartData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="cart-dropdown-block-inner-block"
                          >
                            <div className="img-block">
                              <img alt="" src={item.images[0]} />
                            </div>
                            <div className="cart-block">
                              <div className="cart-block-left">
                                <h5>
                                  {item?.title.charAt(0).toUpperCase() +
                                    item?.title.slice(1)}
                                </h5>
                                <p>
                                  {item.quantity}&nbsp;{formatUnit(item.unit)}
                                </p>
                              </div>
                              <div className="cart-price">
                                <h3>
                                  CHF&nbsp;
                                  {formatPrice(item.displayPrice)}
                                </h3>
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
                          ? router.push(PATH_DASHBOARD.cart)
                          : router.push(PATH_AUTH.login);
                      }}
                    >
                      <img alt="" src="/cart-img.svg" />
                      <p>{t("ProceedToCheckout")}</p>
                      <h4>CHF&nbsp;{formatPrice(totalPrice)}</h4>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Header>
        <Modal
          isOpen={modalIsOpen}
          className="common-modal-block"
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <div className="two-block-modal-inner">
            <div className="two-block-modal-inner-left">
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
              <div className="top-block-top">
                <h2>{t("EnterYourAddress")}</h2>
                <p>{t("DeliverAtHome")}</p>
              </div>
              <div className="top-block-bottom">
                <img src="/Brotkorb_Traemo.png" alt="Traemo" />
              </div>
            </div>

            {!modalIsInnerOpen ? (
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
                        {userAuth && (
                          <div className="mt-4">
                            {addressList.map((item, index) => {
                              return (
                                <ul
                                  className="space-y-2 mb-4"
                                  key={index}
                                  onClick={() => {
                                    setFormData({
                                      id: item.id,
                                      name: item.name,
                                      delivery_instructions: "",
                                      house: item.house,
                                      city: item.city,
                                      street: item.street,
                                      country: item.country,
                                      postcode: item.postcode,
                                      latitude: item.location.coordinates[1],
                                      longitude: item.location.coordinates[0],
                                    });
                                    setIsInnerOpen(true);

                                    // storeDispatch(setAddressForList(item));
                                  }}
                                >
                                  <li className="border-b border-gray-300 pb-2">
                                    <strong>{item.name}</strong>
                                    <p className="text-sm text-gray-500">
                                      {[
                                        item.house,
                                        item.street,
                                        item.city,
                                        item.postcode,
                                        item.country,
                                      ]
                                        .filter(Boolean)
                                        .join(", ")}
                                    </p>
                                  </li>
                                </ul>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div className="two-block-modal-inner-right">
                <CommonPagesBlock>
                  <div className="custom-container">
                    {/* Close Button */}
                    <div className="btn-close-block-left">
                      <button onClick={() => setIsInnerOpen(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="#667085"
                          class="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <h2 className="custom-title">{t("SelectedAddress")}</h2>
                    </div>
                    {/* city country postalcode */}

                    <div className="form-login">
                      <div className="form-group">
                        <label className="custom-label">{t("Name")}</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="custom-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="custom-label">
                          {t("DeliveryInstructions")}
                        </label>
                        <input
                          type="text"
                          name="delivery_instructions"
                          value={formData.delivery_instructions}
                          onChange={handleChange}
                          className="custom-input"
                        />
                      </div>
                      <div className="two-from-group">
                        <div className="form-group">
                          <label className="custom-label">{t("house")}</label>
                          <input
                            type="text"
                            name="house"
                            value={formData.house}
                            onChange={handleChange}
                            className="custom-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="custom-label">{t("Street")}</label>
                          <input
                            type="text"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            className="custom-input"
                          />
                        </div>
                      </div>
                      <div className="two-from-group">
                        <div className="form-group">
                          <label className="custom-label">{t("city")}</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="custom-input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="custom-label">
                            {t("postalcode")}
                          </label>
                          <input
                            type="text"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleChange}
                            className="custom-input"
                          />
                        </div>
                      </div>
                      <div className="from-group">
                        <div className="form-group">
                          <label className="custom-label">{t("country")}</label>
                          <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            disabled
                            className="custom-input"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="btn-form">
                      <button
                        className="btn button-common"
                        onClick={() => {
                          if (formData.name == "") {
                            toast.error("Please Enter your Name");
                          } else if (formData.house == "") {
                            toast.error("Please Enter your House");
                          } else if (formData.id == "") {
                            CreateAddress(formData);
                          } else {
                            setIsInnerOpen(false);
                            storeDispatch(setAddressForList(formData));
                            closeModal();
                          }
                        }}
                      >
                        {t("SaveAddress")}
                      </button>
                    </div>
                  </div>
                </CommonPagesBlock>
              </div>
            )}
          </div>
        </Modal>
      </div>

      {isProfileDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-40 right-8 top-[85px] w-[240px] bg-white border-[1px] br-[8px] rounded-lg px-4 shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
        >
          <ul className="py-4">
            <Link href={PATH_DASHBOARD.wallet}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_wallet.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("TopupNow")}
                </span>
                <span className="text-green-500 font-semibold">CHF 0</span>
              </li>
            </Link>
            {/* <Link href={PATH_DASHBOARD.profile}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_profile.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Profile")}
                </span>
              </li>
            </Link> */}
            <Link href={PATH_DASHBOARD.standingorders}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_premium.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("RecurringOrders")}
                </span>
              </li>
            </Link>
            {/* <Link href={PATH_DASHBOARD.address}>
              <li className='flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent'>
                <img className='h-6 w-6' src='/images/ic_address.svg' />
                <span className='font-inter text-black text-[16px]'>{t('Addresses')}</span>
              </li>
            </Link> */}

            {/* <Link href={PATH_DASHBOARD.history}>
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_history.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("OrderHistory")}
                </span>
              </li>
            </Link> */}
            {/* <Link href={PATH_DASHBOARD.support}>
              <li className='flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent'>
                <img className='h-6 w-6' src='/images/ic_support.svg' />
                <span className='font-inter text-black text-[16px]'>{t('Support')}</span>
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
        <div className="fixed mobile-block-z-index inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
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
                onClick={() => handleLogout()}
                className={`${
                  loading
                    ? "bg-theme opacity-50 cursor-not-allowed"
                    : "bg-theme"
                } text-white px-4 py-2 rounded-md w-full flex justify-center items-center`}
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-t-white border-gray-200 rounded-full animate-spin"></span>
                ) : (
                  t("Logout")
                )}
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
