"use client";
import React, { useEffect, useRef, useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import CommonPagesBlock from "@/components/styles/common.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import {
  chargeUserServiceAction,
  createPaymentServiceAction,
  createUpdateAutoTopupAction,
  DisburseFundAction,
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
import { useRouter } from "next/navigation";
import { removeAll } from "@/utils/storage";
import Modal from "react-modal";
import { PATH_AUTH } from "@/routes/paths";

const Wallet = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation("common");

  const [isLoading, setIsLoading] = useState(false);

  const [autoTopupData, setAutoTopupData] = useState({});
  const [listPaymentMethod, setListPaymentMethod] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(0);

  const [openiFrameUrl, setOpeniFrameUrl] = useState();
  const [customAmountShow, setCustomAmountShow] = useState(false);

  const [modalIsOpen, setIssOpen] = React.useState(false);

  const [currentBalance, setCurrentBalance] = useState(0);
  const [transactionList, setTransactionList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 15;

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [isAutoTopupOpen, setIsAutoTopupOpen] = useState(false);
  const toggleAutoTopupSelectPay = () => setIsAutoTopupOpen(!isAutoTopupOpen);

  const [activeButton, setActiveButton] = useState("lowest_quantity");

  const handleOptionClick = (option) => {
    setIsOpen(false);
    ChargeUserService(option.id);
  };

  const handlePaymentMethodForAutoTopup = (payMethod) => {
    setIsAutoTopupOpen(false);
    CreateAutoTopup("ACTIVE", payMethod);
  };

  useEffect(() => {
    GetCurrentBalance();
    GetTransactionList(0);
    GetAutoTopups();
    ListPayment();
  }, []);

  const GetCurrentBalance = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(getFundServiceAction());
      const { data, status, message } = res;
      if (status) {
        setCurrentBalance(data?.total_funds);
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
  const GetTransactionList = async (newOffset) => {
    const objParam = {
      offset: newOffset,
      limit: limit,
      sort_column: "ts_created",
    };
    try {
      const { payload: res } = await dispatch(
        getTransactionServiceAction(objParam)
      );
      const { data, status, message } = res;
      if (status) {
        setTransactionList((prevList) => [...prevList, ...data]);
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
  const GetAutoTopups = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(getAutoTopupServiceAction());
      const { data, status, message } = res;
      if (status) {
        setAutoTopupData(data);
        setActiveButton(data.mode);
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
  const CreateAutoTopup = async (activeOrPaused, payMethod) => {
    const objParam = {
      payment_method_id: payMethod,
      status: activeOrPaused,
      mode: activeButton,
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
        GetAutoTopups();
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
  const ChargeUserService = async (paymentId) => {
    const objParam = {
      amount: selectedAmount,
      payment_method_id: paymentId,
    };
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(
        chargeUserServiceAction(objParam)
      );
      const { data, status, message } = res;
      if (status) {
        GetCurrentBalance();
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
  const ListPayment = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(listPaymentServiceAction());
      const { data, status, message } = res;
      if (status) {
        setListPaymentMethod(data);
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

  const DisburseFundsApi = async (amountData) => {
    const objParam = JSON.stringify({
      amount: amountData,
    });
    try {
      const { payload: res } = await dispatch(DisburseFundAction(objParam));
      console.log("Response ", res);
      const { data, status, message } = res;
      if (status) {
        closeModal();
        GetCurrentBalance();
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
        {autoTopupData.status === "active" && (
          <div className="list-block-wallet">
            <div className="list-block-wallet-outer">
              <button
                onClick={() => {
                  CreateAutoTopup("PAUSED", autoTopupData.payment_method_id);
                }}
              >
                <span>{t("Pause")}</span>
              </button>
            </div>
            <div className="list-block-wallet-finish">
              <button
                onClick={() => {
                  CreateAutoTopup("PAUSED", autoTopupData.payment_method_id);
                }}
              >
                <span>{t("Finish")}</span>
              </button>
            </div>
          </div>
        )}
        <div className="start-setup">
          <button
            onClick={() => {
              if (listPaymentMethod.length === 0) {
                CreatePayment();
              } else {
                toggleAutoTopupSelectPay();
              }
              // CreateAutoTopup("ACTIVE");
            }}
          >
            <span>{t("SelectPaymentMethod")}</span>
          </button>
        </div>

        {isAutoTopupOpen && (
          <div className="mt-2 w-[100%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1">
              {listPaymentMethod.map((method, index) => (
                <div key={index}>
                  {method.type === "paypal" ? (
                    <button
                      onClick={() => handlePaymentMethodForAutoTopup(method.id)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src="/images/paypal.png"
                        alt="Card"
                        className="w-6 h-6 mr-2 rounded"
                      />
                      {`${method.details.payer_email}`}
                    </button>
                  ) : method.type === "card" ? (
                    <button
                      onClick={() => handlePaymentMethodForAutoTopup(method.id)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src="/images/creditcard.png"
                        alt="Card"
                        className="w-6 h-6 mr-2"
                      />

                      {`${method.details.brand} ****${method.details.last4} (Exp: ${method.details.exp_month}/${method.details.exp_year})`}
                    </button>
                  ) : method.type === "googlepay" ? (
                    <button
                      onClick={() => handlePaymentMethodForAutoTopup(method.id)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src="/images/googlepay.png"
                        alt="Card"
                        className="w-6 h-6 mr-2"
                      />

                      {`${method.details.brand} ****${method.details.last4} (Exp: ${method.details.exp_month}/${method.details.exp_year})`}
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePaymentMethodForAutoTopup(method.id)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src="/images/applepay.png"
                        alt="Card"
                        className="w-6 h-6 mr-2"
                      />
                      {`${method.details.brand} ****${method.details.last4} (Exp: ${method.details.exp_month}/${method.details.exp_year})`}
                    </button>
                  )}
                  {index < listPaymentMethod.length - 1 && (
                    <div className="border-b border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="list-block-wallet-another">
          <button
            className={`list-block-wallet-inner ${
              activeButton === "lowest_quantity" ? "active" : ""
            }`}
            onClick={() => {
              // lowest_quantity
              setActiveButton("lowest_quantity");
            }}
          >
            <h3>{t("FewerTopup")}</h3>
            <h2>{t("SystemReduceTopups")}</h2>
          </button>
          <button
            className={`list-block-wallet-outer ${
              activeButton === "lowest_balance" ? "active" : ""
            }`}
            onClick={() => {
              // lowest_balance
              setActiveButton("lowest_balance");
            }}
          >
            <h3>{t("LessCredit")}</h3>
            <h2>{t("SystemAvailableTopups")}</h2>
          </button>
        </div>
      </div>
    );
  };
  const fetchMoreData = async () => {
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
              height: 900,
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            }}
            className="transition-block"
          >
            <InfiniteScroll
              dataLength={transactionList.length}
              next={fetchMoreData}
              style={{ display: "flex", flexDirection: "column" }}
              hasMore={true}
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
                      <h2>
                        CHF&nbsp;{(item.amount / 100).toLocaleString("de-DE")}
                      </h2>
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
                openModal();
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
                  {method.type === "paypal" ? (
                    <button
                      onClick={() => handleOptionClick(method)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src="/images/paypal.png"
                        alt="Card"
                        className="w-6 h-6 mr-2 rounded"
                      />
                      {`${method.details.payer_email}`}
                    </button>
                  ) : method.type === "card" ? (
                    <button
                      onClick={() => handleOptionClick(method)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src="/images/creditcard.png"
                        alt="Card"
                        className="w-6 h-6 mr-2"
                      />

                      {`${method.details.brand} ****${method.details.last4} (Exp: ${method.details.exp_month}/${method.details.exp_year})`}
                    </button>
                  ) : method.type === "googlepay" ? (
                    <button
                      onClick={() => handleOptionClick(method)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src="/images/googlepay.png"
                        alt="Card"
                        className="w-6 h-6 mr-2"
                      />

                      {`${method.details.brand} ****${method.details.last4} (Exp: ${method.details.exp_month}/${method.details.exp_year})`}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleOptionClick(method)}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src="/images/applepay.png"
                        alt="Card"
                        className="w-6 h-6 mr-2"
                      />
                      {`${method.details.brand} ****${method.details.last4} (Exp: ${method.details.exp_month}/${method.details.exp_year})`}
                    </button>
                  )}
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

  function openModal() {
    setIssOpen(true);
  }
  function closeModal() {
    setIssOpen(false);
    setAmount(0);
  }

  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (e > currentBalance) {
      toast.error(
        `Amount cannot exceed your current balance of ${(
          currentBalance / 100
        ).toLocaleString("de-DE")}.`
      );
    } else if (e < 500) {
      toast.error("Amount must be at least €5.");
    } else {
      DisburseFundsApi(e);
    }
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
      <Modal
        isOpen={modalIsOpen}
        className="disburse-amount-modal-block"
        onRequestClose={closeModal}
        contentLabel="Disburse Modal"
      >
        <div
          // onSubmit={handleSubmit}
          className="flex flex-col space-y-6 max-w-md mx-auto p-6 bg-white mt-[10%] rounded-lg"
        >
          <label className="font-semibold text-gray-700">Amount:</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="p-3 border border-gray-300 rounded-lg"
          />

          <button
            onClick={() => handleSubmit(amount)}
            className="p-3 bg-redEB text-white font-semibold rounded-lg"
          >
            Disburse Funds
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Wallet;
