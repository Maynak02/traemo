"use client";
import React, { useEffect, useMemo, useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import CommonPagesBlock from "@/components/styles/common.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DatePicker from "react-datepicker";
import Link from "next/link";

import "react-datepicker/dist/react-datepicker.css";
import { getUpcomingOrderAction } from "@/redux/Order/action";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Loader from "@/components/Loader";
import { GetProductByIdServiceAction } from "@/redux/Product/action";
import { toast } from "react-toastify";
import { TOAST_ALERTS } from "@/constants/keywords";
import { getAddressID, readAddressFromID } from "@/redux/Dashboard/action";
import moment from "moment";
const StandingOrders = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [orderHistory, setOrderHistory] = useState([]);
  const [recurringOrder, setRecurringOrder] = useState([]);
  const [singleOrder, setSingleOrder] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetUpcomingOrderList();
  }, []);

  const GetUpcomingOrderList = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(getUpcomingOrderAction());
      const { data, status, message } = res;
      if (status) {
        console.log("data---", data);
        console.log("recurring---", data.recurring);
        console.log("once---", data.once);

        const recurringOrderData = combineRecurringData(
          data.recurring,
          data.products
        );
        console.log("combinedData-==", recurringOrderData);
        setRecurringOrder(recurringOrderData);

        const singleOrderData = combineOnceData(data.once, data.products);
        console.log("singleOrderData-==", singleOrderData);
        setSingleOrder(singleOrderData);

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

  const combineOnceData = (once, products) => {
    return once.map((item) => {
      const productDetails = products.find(
        (product) => product.id === item.product_id
      );
      return {
        ...item,
        ...productDetails,
      };
    });
  };

  const combineRecurringData = (recurring, products) => {
    return recurring.map((rec) => {
      const combinedProducts = rec.products.map((product) => {
        const productDetails = products.find(
          (p) => p.id === product.product_id
        );
        return {
          ...product,
          ...productDetails,
        };
      });

      return {
        ...rec,
        products: combinedProducts,
      };
    });
  };

  const recurringOrderData = () => {
    return (
      <div>
        {recurringOrder.map((data, idx) => {
          return (
            <div key={idx} className="common-cart-pages-block-left-inner">
              <div className="label-block-days">
                <span>
                  {data?.weekday.charAt(0).toUpperCase() +
                    data?.weekday.slice(1)}
                </span>
              </div>
              {data.products.map((item, index) => {
                return (
                  <div key={index} className="cart-dropdown-block-inner">
                    <div className="title-inner-cart-block">
                      <h4>{item?.hub?.name}</h4>
                    </div>
                    <div className="cart-dropdown-block-inner-block">
                      <div className="img-block">
                        <img src={item?.images[0]} />
                      </div>
                      <div className="cart-block">
                        <div className="cart-block-left">
                          <h5>
                            {item?.title.charAt(0).toUpperCase() +
                              item?.title.slice(1)}
                          </h5>
                          <p>
                            {item?.quantity}&nbsp;
                            {item?.unit}
                          </p>
                        </div>
                        <div className="cart-price">
                          <h3>
                            €
                            {(item?.price_discounted / 100).toLocaleString(
                              "de-DE"
                            )}
                          </h3>
                          <input
                            type="text"
                            placeholder="1"
                            value={item.quantity}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="last-btn">
                <button>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M12 6V18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>Add more</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const singleOrderData = () => {
    return (
      <div>
        {singleOrder.map((data, idx) => {
          const calculatedPrice = (
            (data.price_discounted * data.quantity) /
            100
          ).toLocaleString("de-DE");
          const totalSum = (
            (data.price_discounted * data.quantity + 499) /
            100
          ).toLocaleString("de-DE");
          return (
            <div key={idx} className="common-cart-pages-block-left-inner">
              <div className="label-block-days">
                <span>
                  {moment
                    .utc(data.ts_start)
                    .local()
                    .format("dddd, MMM Do, YYYY")}
                </span>
              </div>
              <div className="cart-dropdown-block-inner">
                <div className="top-block-cart">
                  <div className="top-block-cart-left">
                    <h2>{data?.hub?.name}</h2>
                    <p>
                      {t("DeliveryBy")}
                      <span>9:00 am</span>
                    </p>
                  </div>
                  <div className="top-block-cart-right">
                    <img src={data?.hub?.logo} />
                  </div>
                </div>
                <div className="title-inner-cart-block">
                  <h4>{data?.hub?.name}</h4>
                </div>
                <div className="cart-dropdown-block-inner-block">
                  <div className="img-block">
                    <img src={data?.images[0]} />
                  </div>
                  <div className="cart-block">
                    <div className="cart-block-left">
                      <h5>
                        {data?.title.charAt(0).toUpperCase() +
                          data?.title.slice(1)}
                      </h5>
                      <p>
                        {data?.quantity}&nbsp;{data?.unit}
                      </p>
                    </div>
                    <div className="cart-price">
                      <h3>
                        €
                        {(data?.price_discounted / 100).toLocaleString("de-DE")}
                      </h3>
                      <input
                        type="text"
                        placeholder="1"
                        value={data.quantity}
                        disabled
                      />
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
  return (
    <div>
      <DashboardHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <CommonPagesBlock>
          <div className="common-cart-pages-block">
            <div className="common-cart-pages-block-left">
              <div className="top-shoping-title">
                <div className="top-shoping-title-inner">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.812 16.0834L27.1176 12.8364C27.3576 10.2862 27.4776 9.01116 27.0413 8.48406C26.8053 8.19894 26.4844 8.02423 26.1413 7.9941C25.507 7.93839 24.7105 8.84517 23.1174 10.6587C22.2936 11.5966 21.8817 12.0656 21.4221 12.1382C21.1676 12.1784 20.9081 12.137 20.6729 12.0188C20.2486 11.8052 19.9657 11.2255 19.3998 10.066L16.4174 3.95444C15.3482 1.76346 14.8136 0.667969 14 0.667969C13.1864 0.667969 12.6517 1.76346 11.5825 3.95445L8.60005 10.066C8.03422 11.2255 7.7513 11.8052 7.32697 12.0188C7.09185 12.137 6.83241 12.1784 6.57778 12.1382C6.11825 12.0656 5.70632 11.5966 4.88245 10.6587C3.2894 8.84517 2.49286 7.93839 1.85861 7.9941C1.5155 8.02423 1.1946 8.19894 0.95861 8.48406C0.522356 9.01116 0.642356 10.2862 0.88237 12.8364L1.18796 16.0834C1.69149 21.4336 1.94326 24.1086 3.52008 25.7216C5.0969 27.3346 7.46018 27.3346 12.1868 27.3346H15.8132C20.5397 27.3346 22.903 27.3346 24.4798 25.7216C26.0566 24.1086 26.3084 21.4336 26.812 16.0834Z"
                      fill="#FAB300"
                    />
                    <path
                      d="M10 22H18"
                      stroke="url(#paint0_linear_850_2661)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_850_2661"
                        x1="10"
                        y1="22"
                        x2="10.2462"
                        y2="23.9692"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.269" stopColor="#FFA035" />
                        <stop offset="1" stopColor="#FFC93C" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h2>{t("StandingOrders")}</h2>
                </div>
                <div className="btn-block">
                  <div className="btn-block-inner">
                    <button>{t("Pause")}</button>
                  </div>
                  <div className="btn-block-inner">
                    <button>{t("Finish")}</button>
                  </div>
                </div>
              </div>
              {recurringOrderData()}
            </div>
            <div className="common-cart-pages-block-left">
              <div className="title-left">
                <h2>Next orders</h2>
              </div>
              {singleOrderData()}
            </div>
          </div>
        </CommonPagesBlock>
      )}
    </div>
  );
};

export default StandingOrders;
