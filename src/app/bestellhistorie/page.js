"use client";
import DashboardHeader from "@/components/DashboardHeader";
import Loader from "@/components/Loader";
import { TOAST_ALERTS } from "@/constants/keywords";
import { getHistoryAction } from "@/redux/History/action";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const StatusIcon = ({ status }) => {
  switch (status) {
    case "DELIVERED":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3L4.5 8.5L2 6"
            stroke="#12B76A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Refunded":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10"
            stroke="#667085"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Cancelled":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 3L3 9M3 3L9 9"
            stroke="#F04438"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function OrderHistory() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 4;
  const itemsPerPage = 2;

  const handleNext = async () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
    GetHistory(newOffset);
  };

  const handlePrev = async () => {
    const newOffset = offset - limit < 0 ? 0 : offset - limit;
    setOffset(newOffset);
    GetHistory(newOffset);
  };

  useEffect(() => {
    GetHistory(0);
  }, []);

  const GetHistory = async (newOffset) => {
    const objParam = {
      offset: newOffset,
      limit: limit,
    };

    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(getHistoryAction(objParam));
      const { data, status, message } = res;
      if (status) {
        setTotalPages(Math.ceil(data.length / itemsPerPage));
        setOrderHistory(data);
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

  return (
    <div>
      <DashboardHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mx-auto border mt-6 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {t("Invoice")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {t("Date")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {t("Status")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {t("OrderDetail")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {t("Purchase")}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {t("Actions")}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderHistory.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{order.id.substring(6, 10)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex-row">
                    {moment
                      .utc(order.transaction.ts_created)
                      .local()
                      .format("MMM DD, YYYY")}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex items-center text-xs leading-6 font-semibold rounded-full ${
                        order.status === "DELIVERED"
                          ? "bg-paidColor text-[#027A48]"
                          : order.status === "Refunded"
                          ? "bg-refundColor text-[#344054]"
                          : "bg-cancelColor text-[#B42318]"
                      }`}
                    >
                      <StatusIcon status={order.status} />
                      <span className="ml-[5px] pr-[6px]">{order.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={order.products[0].images[0]}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {order?.products[0]?.title.charAt(0).toUpperCase() +
                            order?.products[0]?.title.slice(1)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order?.products.length > 1
                            ? `+${order.products.length - 1} more items`
                            : ""}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    CHF{(order.sum_total / 100).toLocaleString("de-DE")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button className="text-grayText hover:text-gray-900 mr-3">
                      {t("Archive")}
                    </button>
                    <button className="text-themeColor hover:text-blue-900">
                      {t("Download")}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center border-t">
            <button
              onClick={handlePrev}
              disabled={offset === 0}
              className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 flex items-center m-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {t("Previous")}
            </button>

            <button
              onClick={() => {
                handleNext();
              }}
              disabled={totalPages === 0}
              className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 flex items-center m-4"
            >
              {t("Next")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
