"use client";
import React, { useEffect, useMemo, useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import CommonPagesBlock from "@/components/styles/common.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DatePicker from "react-datepicker";
import Link from "next/link";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import RadioButton from "@/components/RadioButton";
import { registerLocale } from "react-datepicker";
import de from "date-fns/locale/de";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TOAST_ALERTS } from "@/constants/keywords";
import { listAddress } from "@/redux/Dashboard/action";
import { useRouter } from "next/navigation";
import {
  setDecreaseQuantity,
  setUpdatedCartList,
} from "@/redux/Cart/CartReducer";
import { CreateUpdateOrderPlanAction } from "@/redux/Order/action";
import { now } from "moment";
registerLocale("de", de);

const ShoppingCart = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [locale, setLocale] = useState("de");

  const [selectedValue, setSelectedValue] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [instruction, setInstruction] = useState("");

  const cartData = useSelector((state) => state.cartData.cartList);
  const fetchAddressData = useSelector((state) => state.cartData.fetchAddress);
  let hasAddress = false;
  if (fetchAddressData && Object.keys(fetchAddressData).length > 0) {
    hasAddress = true;
  } else {
    hasAddress = false;
  }

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [selectedDays, setSelectedDays] = useState([]);
  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  useEffect(() => {
    listAddressData();
  }, []);

  const handleInstructionChange = (e) => {
    setInstruction(e.target.value);
  };

  const onTapCreateOrder = () => {
    console.log("cartData", cartData);

    // const addRecurring = (weekday, products) => {
    let recurringArray = [];
    let recurringTemp = [];
    let onceDataArray = [];
    cartData.map((product) => {
      let recurring = {};
      let once = {};
      recurring.quantity = product.givenQuantity;
      recurring.product_id = product.id;
      recurring.address_id = fetchAddressData?.id;
      recurringTemp.push(recurring);

      once.quantity = product.givenQuantity;
      once.product_id = product.id;
      once.address_id = fetchAddressData?.id;
      once.ts_start = startDate;
      onceDataArray.push(once);
    });

    console.log("productData", recurringTemp);

    selectedDays.map((days) => {
      let abc = {};
      abc.weekday = days.charAt(0).toLowerCase() + days.slice(1);
      abc.products = recurringTemp;
      recurringArray.push(abc);
    });
    console.log("recurring", recurringTemp);

    const orderData = {
      recurring: selectedDays.length > 0 ? recurringArray : [],
      once: selectedDays.length > 0 ? [] : onceDataArray,
      ts_start: startDate,
      // pause_plan: true,
      ts_paused_start: new Date(),
      // ts_paused_end: "",
    };
    CreateOrUpdateOrderApi(orderData);
    console.log("Tap Order Now", orderData);
    // router.push("/customer/wallet");
  };

  const CreateOrUpdateOrderApi = async (orderData) => {
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(
        CreateUpdateOrderPlanAction(orderData)
      );
      const { data, status, message } = res;
      if (status) {
        console.log("Create Order=-", data);
        toast.success("Order Create Successfully");
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

  // const handleRadioChange = (e) => {
  //   console.log("target value:", e.target.value);
  //   setSelectedValue(e.target.value);
  // };

  const listAddressData = async () => {
    setIsLoading(true);
    const objParam = {
      offset: 0,
      limit: 10,
      sort_direction: "desc",
    };
    try {
      const { payload: res } = await dispatch(listAddress());
      const { data, status, message } = res;
      if (status) {
        setAddressList(
          data.map((address) => {
            const fullAddress = `${address?.house}, ${address?.street}, ${address?.city}, ${address?.country}`;
            return { ...address, full_address: fullAddress };
          })
        );

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

  const renderCart = () => {
    return (
      <div>
        {cartData.map((data, idx) => {
          const calculatedPrice = (
            (data.price_discounted * data.givenQuantity) /
            100
          ).toLocaleString("de-DE");
          const totalSum = (
            (data.price_discounted * data.givenQuantity + 499) /
            100
          ).toLocaleString("de-DE");
          return (
            <div key={idx} className="common-cart-pages-block-left-inner">
              <div className="top-block-cart">
                <div className="top-block-cart-left">
                  <h2>{data?.hub?.name}</h2>
                  <p>
                    {t("DeliveryBy")}
                    <span>9:00 am</span>
                  </p>
                </div>
                <div className="top-block-cart-right">
                  <img alt="" src={data?.hub?.logo} />
                </div>
              </div>
              <div className="cart-dropdown-block-inner">
                <div className="cart-dropdown-block-inner-block">
                  <div className="img-block">
                    <img alt="" src={data?.images[0]} />
                  </div>
                  <div className="cart-block">
                    <div className="cart-block-left">
                      <h5>
                        {data?.title.charAt(0).toUpperCase() +
                          data?.title.slice(1)}
                      </h5>
                      <p>
                        {data?.quantity}&nbsp;
                        {data?.unit}
                      </p>
                    </div>
                    <div className="cart-price">
                      <h3>
                        €
                        {(data?.price_discounted / 100).toLocaleString("de-DE")}
                      </h3>
                      <div className="flex items-center">
                        <button
                          onClick={() => dispatch(setDecreaseQuantity(data))}
                          className="bg-gray-100 -mr-2 px-2 py-1 text-lg rounded-l-lg z-20"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          placeholder="1"
                          value={data?.givenQuantity}
                          disabled
                        />
                        <button
                          onClick={() => dispatch(setUpdatedCartList(data))}
                          className="bg-gray-100 -ml-2 px-2 py-1 text-lg rounded-r-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-toal-block">
                <p>
                  <span>{t("Sum")}</span>
                  <span>€{calculatedPrice}</span>
                </p>
                <p>
                  <span>{t("Deliveryfees")}</span>
                  <span>€4,99</span>
                </p>
                <div className="cart-total-bold">
                  <p>
                    <span>{t("Intotal")}</span>
                    <span>€{totalSum}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const selectedAddressOption = (selectedValue) => {
    setSelectedAddress(selectedValue?.value);
  };

  return (
    <div>
      <DashboardHeader />
      <CommonPagesBlock>
        <div className="common-cart-pages-block">
          <div className="common-cart-pages-block-left">{renderCart()}</div>
          <div className="common-cart-pages-block-right">
            <div className="common-cart-pages-block-right-inner">
              <div className="common-cart-search">
                <input
                  type="text"
                  placeholder="Brandenburger Tor Pariser Platz 10117 Berlin Germany"
                  // disabled
                  value={`${fetchAddressData?.house}, ${fetchAddressData?.street}, ${fetchAddressData?.city}, ${fetchAddressData?.country}`}
                />
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 9L7 11L11 7M15 8.2C15 12.1764 11.5 15.4 8 19C4.5 15.4 1 12.1764 1 8.2C1 4.22355 4.13401 1 8 1C11.866 1 15 4.22355 15 8.2Z"
                    stroke="#1D2939"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="datepiker-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V9M3 9H21M3 9V5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V9M16 3V6M8 3V6M12 13V17"
                    stroke="#1D2939"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 15L12 17L14 15"
                    stroke="#1D2939"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  locale={locale}
                  className="custom-datepicker-input"
                  wrapperClassName="custom-datepicker-wrapper"
                />
              </div>
              <div className="tooltip-block-radio">
                <div className="tooltip-block-radio-top">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_850_2456)">
                      <path
                        d="M10 18.3346C14.6024 18.3346 18.3334 14.6037 18.3334 10.0013C18.3334 5.39893 14.6024 1.66797 10 1.66797C5.39765 1.66797 1.66669 5.39893 1.66669 10.0013C1.66669 14.6037 5.39765 18.3346 10 18.3346Z"
                        stroke="#475467"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10 14.168V9.16797"
                        stroke="#475467"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10 5.83333C10.4603 5.83333 10.8334 6.20643 10.8334 6.66667C10.8334 7.1269 10.4603 7.5 10 7.5C9.53978 7.5 9.16669 7.1269 9.16669 6.66667C9.16669 6.20643 9.53978 5.83333 10 5.83333Z"
                        fill="#475467"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_850_2456">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{t("SelectDeliveryDate")}</p>
                </div>
                <div className="radio-buttons-main-data">
                  {days.map((day) => (
                    <div className="radio-buttons" key={day}>
                      <button
                        className={`button ${
                          selectedDays.includes(day) ? "active" : ""
                        }`}
                        onClick={() => toggleDay(day)}
                      >
                        {day}
                      </button>
                    </div>
                  ))}
                </div>
                {/* <div className="radio-buttons-main">
                  <RadioButton
                    id="1"
                    name="day"
                    value="monday"
                    label={t("Monday")}
                    onChange={handleRadioChange}
                    selectedValue={selectedValue}
                  />
                  <RadioButton
                    id="2"
                    name="day"
                    value="tuesday"
                    label={t("Tuesday")}
                    onChange={handleRadioChange}
                    selectedValue={selectedValue}
                  />
                  <RadioButton
                    id="3"
                    name="day"
                    value="wednesday"
                    label={t("Wednesday")}
                    onChange={handleRadioChange}
                    selectedValue={selectedValue}
                  />
                  <RadioButton
                    id="4"
                    name="day"
                    value="thursday"
                    label={t("Thursday")}
                    onChange={handleRadioChange}
                    selectedValue={selectedValue}
                  />
                  <RadioButton
                    id="5"
                    name="day"
                    value="friday"
                    label={t("Friday")}
                    onChange={handleRadioChange}
                    selectedValue={selectedValue}
                  />
                  <RadioButton
                    id="6"
                    name="day"
                    value="saturday"
                    label={t("Saturday")}
                    onChange={handleRadioChange}
                    selectedValue={selectedValue}
                  />
                  <RadioButton
                    id="7"
                    name="day"
                    value="sunday"
                    label={t("Sunday")}
                    onChange={handleRadioChange}
                    selectedValue={selectedValue}
                  />
                </div> */}
                <div className="delivery-intruction-block">
                  <input
                    type="text"
                    placeholder={t("AddInstruction")}
                    value={instruction}
                    onChange={handleInstructionChange}
                  ></input>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33334 15.8346H4.16667V11.668M11.6667 4.16797H15.8333V8.33464"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="add-to-cart">
                  <button
                    className="common-btn btn"
                    onClick={() => onTapCreateOrder()}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5777 3.38197L17.5777 4.43152C19.7294 5.56066 20.8052 6.12523 21.4026 7.13974C22 8.15425 22 9.41667 22 11.9415V12.0585C22 14.5833 22 15.8458 21.4026 16.8603C20.8052 17.8748 19.7294 18.4393 17.5777 19.5685L15.5777 20.618C13.8221 21.5393 12.9443 22 12 22C11.0557 22 10.1779 21.5393 8.42229 20.618L6.42229 19.5685C4.27063 18.4393 3.19479 17.8748 2.5974 16.8603C2 15.8458 2 14.5833 2 12.0585V11.9415C2 9.41667 2 8.15425 2.5974 7.13974C3.19479 6.12523 4.27063 5.56066 6.42229 4.43152L8.42229 3.38197C10.1779 2.46066 11.0557 2 12 2C12.9443 2 13.8221 2.46066 15.5777 3.38197Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M21 7.5L12 12M12 12L3 7.5M12 12V21.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{t("OrderNowForFee")}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonPagesBlock>
    </div>
  );
};

export default ShoppingCart;
