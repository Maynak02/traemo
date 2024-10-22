"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import CommonPagesBlock from "@/components/styles/common.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DatePicker from "react-datepicker";
import Link from "next/link";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import {
  chargeUserServiceAction,
  createPaymentServiceAction,
  createUpdateAutoTopupAction,
  getAutoTopupServiceAction,
  getFundServiceAction,
  getTransactionServiceAction,
  listPaymentServiceAction,
} from "@/redux/Payment/action";
import { toast } from "react-toastify";
import { TOAST_ALERTS } from "@/constants/keywords";
import Loader from "@/components/Loader";
import moment from "moment";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroll-component";

const Wallet = () => {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [autoTopupList, setAutoTopupList] = useState({});
  const [listPaymentMethod, setListPaymentMethod] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(0);

  const [openiFrameUrl, setOpeniFrameUrl] = useState();
  const [customAmountShow, setCustomAmountShow] = useState(false);

  const [currentBalance, setCurrentBalance] = useState(0);
  const [transactionList, setTransactionList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    const { brand, last4, exp_month, exp_year } = option.details;
    setSelected(
      `${brand.toUpperCase()} ****${last4} (Exp: ${exp_month}/${exp_year})`
    );
    setIsOpen(false);
    ChargeUserService(option.id);
  };

  useEffect(() => {
    GetCurrentBalance();
    GetTransactionList(0);
    GetAutoTopups();
    ListPayment();
  }, []);
  const transitionBlockRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        transitionBlockRef.current.scrollTop +
          transitionBlockRef.current.clientHeight >=
        transitionBlockRef.current.scrollHeight
      ) {
        console.log("Reached the bottom of the scroll");
        // Perform your logic here, e.g., load more transactions
      }
    };

    const refCurrent = transitionBlockRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const GetCurrentBalance = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(getFundServiceAction());
      const { data, status, message } = res;
      if (status) {
        console.log("data---", data);
        setCurrentBalance(data?.total_funds);
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
  const GetTransactionList = async (newOffset) => {
    const objParam = {
      offset: newOffset,
      limit: limit,
    };
    console.log("objParam", objParam);

    try {
      const { payload: res } = await dispatch(
        getTransactionServiceAction(objParam)
      );
      const { data, status, message } = res;
      if (status) {
        console.log("Transaction List---", data);

        // setTransactionList(data);
        setTransactionList((prevList) => [...prevList, ...data]);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };
  const GetAutoTopups = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(getAutoTopupServiceAction());
      const { data, status, message } = res;
      if (status) {
        console.log("Topup List---", data);
        setAutoTopupList(data);
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
  const CreateAutoTopup = async () => {
    const objParam = {
      payment_method_id: autoTopupList.payment_method_id,
      status: autoTopupList.status,
      mode: "lowest_quantity",
    };
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(
        createUpdateAutoTopupAction(objParam)
      );
      const { data, status, message } = res;
      if (status) {
        console.log("CreateAutoTopup", data);
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
  const ChargeUserService = async (paymentId) => {
    const objParam = {
      amount: selectedAmount,
      payment_method_id: paymentId,
    };
    console.log("objParam", objParam);

    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(
        chargeUserServiceAction(objParam)
      );
      const { data, status, message } = res;
      if (status) {
        console.log("ChargeUserService List---", data);
        GetCurrentBalance();
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
  const CreatePayment = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(createPaymentServiceAction());
      const { data, status, message } = res;
      if (status) {
        console.log("openiFrameUrl---", data);
        setOpeniFrameUrl(data);
        window.location.href = data.url;
        // setOpeniFrameModal(true);
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
  const ListPayment = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(listPaymentServiceAction());
      const { data, status, message } = res;
      if (status) {
        console.log("ListPayment List---", data);
        setListPaymentMethod(data);
        // if (data.length !== 0) {
        //   CreatePayment();
        // }
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

  const renderAutoTopup = () => {
    return (
      <div className="common-cart-pages-block-left-inner">
        <div className="wallet-title">
          <img src={"/images/automatic_topup.svg"} />
          <h2>{t("AutomaticCharging")}</h2>
        </div>
        <div className="wallet-top-block">
          <div className="wallet-top-block-left">
            <p className="autotopup-description">{t("TopupIfBalanceLow")}</p>
          </div>
        </div>
        {autoTopupList.status === "active" && (
          <div className="list-block-wallet">
            <div className="list-block-wallet-outer">
              <button onClick={() => setCustomAmountShow(true)}>
                <span>{t("Pause")}</span>
              </button>
            </div>
            <div className="list-block-wallet-finish">
              <button onClick={() => setCustomAmountShow(true)}>
                <span>{t("Finish")}</span>
              </button>
            </div>
          </div>
        )}
        <div className="start-setup">
          <button>
            <span>{t("SelectPaymentMethod")}</span>
          </button>
        </div>

        <div className="list-block-wallet-another">
          <button
            className="list-block-wallet-inner"
            onClick={() => setSelectedAmount(2000)}
          >
            <h3>{t("FewerTopup")}</h3>
            <h2>{t("SystemReduceTopups")}</h2>
          </button>
          <button
            className="list-block-wallet-outer"
            onClick={() => setSelectedAmount(5000)}
          >
            <h3>{t("LessCredit")}</h3>
            <h2>{t("SystemAvailableTopups")}</h2>
          </button>
        </div>
      </div>
    );
  };
  const fetchMoreData = async () => {
    console.log("Fetch More Data");
    const newOffset = offset + limit;
    setOffset(newOffset);
    GetTransactionList(newOffset);
  };

  const renderTransactionList = () => {
    return (
      <div className="common-cart-pages-block-right">
        <div className="common-cart-pages-block-right-inner height-full">
          <div className="title-trans">
            <img src={"/images/transaction.svg"} />
            <h2>{t("Transactions")}</h2>
          </div>
          <div
            id="scrollableDiv"
            style={{
              height: 700,
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            }}
            className="transition-block"
          >
            <InfiniteScroll
              dataLength={transactionList.length}
              next={fetchMoreData}
              style={{ display: "flex", flexDirection: "column" }} //To put endMessage and loader to the top.
              // inverse={true} //
              hasMore={true}
              // loader={<h4>Loading...</h4>}
              scrollableTarget="scrollableDiv"
            >
              {transactionList.map((item, index) => {
                const isAdd =
                  item.type === "auto_topup" ||
                  item.type === "refund" ||
                  item.type === "topup";
                return (
                  <div
                    key={index}
                    className={`transition-block-inner ${
                      isAdd ? "" : "down-transition"
                    } `}
                  >
                    <div className="transition-block-inner-left ">
                      <div className="transition-icon">
                        <img
                          alt=""
                          src={
                            isAdd ? "/up-arrow-tra.svg" : "/down-arrow-tra.svg"
                          }
                        />
                      </div>
                      <h3>
                        {moment
                          .utc(item.ts_created)
                          .local()
                          .format("MM/ DD /YYYY")}
                      </h3>
                    </div>
                    <div className="transition-block-inner-right">
                      <h2>€{(item.amount / 100).toLocaleString("de-DE")}</h2>
                    </div>
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    );
  };

  const handleChangeAmount = (e) => {
    console.log("e-->", e.target);
    setSelectedAmount(e.target.value);
  };

  const renderRecarge = () => {
    return (
      <div className="common-cart-pages-block-left-inner">
        <div className="wallet-top-block">
          <div className="wallet-top-block-left">
            <h2>CHF&nbsp;{(currentBalance / 100).toLocaleString("de-DE")}</h2>
            <p className="available-credit">{t("CreditAvailable")}</p>
          </div>
          <div className="wallet-top-block-right">
            <button
              onClick={() => {
                console.log("Tap Payout");
              }}
            >
              <span>{t("PayOut")}</span>
              <img src="/chevrondown-1@2x.png" alt="img"></img>
            </button>
          </div>
        </div>
        <div className="list-block-wallet">
          <button
            className="list-block-wallet-inner"
            onClick={() => setSelectedAmount(2000)}
          >
            <h3>
              20,00 <span>CHF</span>
            </h3>
          </button>
          <button
            className="list-block-wallet-inner"
            onClick={() => setSelectedAmount(5000)}
          >
            <h3>
              50,00 <span>CHF</span>
            </h3>
          </button>
          <button
            className="list-block-wallet-inner"
            onClick={() => setSelectedAmount(10000)}
          >
            <h3>
              100,00 <span>CHF</span>
            </h3>
          </button>
          <div className="list-block-wallet-inner">
            {customAmountShow ? (
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  placeholder="Please enter amount"
                  value={selectedAmount}
                  onChange={handleChangeAmount}
                />
                <button
                  className="another-button"
                  onClick={() => {
                    if (selectedAmount < 2000) {
                      toast.error(t("InputValidation"));
                    } else {
                      setCustomAmountShow(false);
                    }
                  }}
                >
                  <text>{t("Done")}</text>
                </button>
              </div>
            ) : (
              <button onClick={() => setCustomAmountShow(true)}>
                <img src={"/images/charge_now.svg"} />
                <span>{t("OwnAmount")}</span>
              </button>
            )}
          </div>
        </div>

        <div className="last-btn">
          <button
            onClick={() => {
              console.log("selectedAmount", selectedAmount);
              if (listPaymentMethod.length === 0) {
                CreatePayment();
              } else {
                if (selectedAmount < 2000) {
                  toast.error("Please Select amount first");
                } else {
                  toggleDropdown();
                }
              }
            }}
          >
            <img src={"/images/automatic_topup.svg"} />
            <span>{t("ChargeNow")}</span>
          </button>
        </div>
        {isOpen && (
          <div className="mt-2 w-[100%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1">
              {listPaymentMethod.map((method, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleOptionClick(method)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {`${method.details.brand.toUpperCase()} ****${
                      method.details.last4
                    } (Exp: ${method.details.exp_month}/${
                      method.details.exp_year
                    })`}
                  </button>
                  {index < listPaymentMethod.length - 1 && (
                    <div className="border-b border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
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
              {renderRecarge()}
              {renderAutoTopup()}
            </div>
            {renderTransactionList()}
          </div>
        </CommonPagesBlock>
      )}
    </div>
  );
};

export default Wallet;
