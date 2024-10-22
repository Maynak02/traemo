"use client";

import DashboardHeader from "@/components/DashboardHeader";
import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import CommonPagesBlock from "@/components/styles/common.style";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";

import { setCartTotal, setUpdatedCartList } from "@/redux/Cart/CartReducer";
import {
  getProductsServiceAction,
  listCategorieServiceAction,
  readCategoryServiceAction,
} from "@/redux/Product/action";
import { toast } from "react-toastify";
import { TOAST_ALERTS } from "@/constants/keywords";
import Loader from "@/components/Loader";
import LoginMain from "@/components/styles/auth.style";
import InfiniteScroll from "react-infinite-scroll-component";

const CustomerDashboard = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [subCategoryType, setSubCategoryType] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [offset, setOffset] = useState(0);
  const limit = 100;

  const fetchAddressData = useSelector((state) => state.cartData.fetchAddress);

  const { t } = useTranslation("common");

  const storeDispatch = useDispatch();
  let hasAddress = false;
  useEffect(() => {
    if (fetchAddressData && Object.keys(fetchAddressData).length > 0) {
      hasAddress = true;
    } else {
      hasAddress = false;
    }
    getProductListApi(0);
    GetListCategories();
  }, []);

  useEffect(() => {
    if (productList.length > 0) {
      const filtered = productList.filter(
        (product) => subCategoryId === product.subcategory_id
      );
      setFilteredProductList(filtered);
    }
  }, [subCategoryId]);

  const GetListCategories = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await storeDispatch(
        listCategorieServiceAction()
      );
      const { data, status, message } = res;
      if (status) {
        setCategoryList(data);
        setSubCategoryList(data[0]?.subcategories);
        setSubCategoryType(data[0]?.subcategories[0]?.name);
        setSubCategoryId(data[0]?.subcategories[0]?.id);

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
  const GetCategoryById = async (id) => {
    setIsLoading(true);
    try {
      const { payload: res } = await storeDispatch(
        readCategoryServiceAction(id)
      );
      const { data, status, message } = res;
      if (status) {
        setIsLoading(false);
        setSubCategoryList(data.subcategories);
        setSubCategoryType(data?.subcategories[0]?.name);
        setSubCategoryId(data?.subcategories[0]?.id);
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
  const getProductListApi = async (newOffset) => {
    // setIsLoading(true);
    const objParam = {
      // lat: fetchAddressData.latitude,
      // long: fetchAddressData.longitude,
      offset: newOffset,
      limit: limit,
      ...(hasAddress === true && {
        filters: `lat$eq${fetchAddressData.latitude} and lon$eq${fetchAddressData.longitude}`,
      }),
    };
    console.log("objParam", objParam);

    try {
      const { payload: res } = await storeDispatch(
        getProductsServiceAction(objParam)
      );
      const { data, status, message } = res;

      if (status) {
        const list = data.map((product) => ({
          ...product,
          displayPrice: product.price_discounted,
        }));
        console.log("list======>>>", list);

        // setProductList(list);
        setProductList((prevList) => [...prevList, ...list]);
        const filtered = list.filter(
          (product) => list[0]?.subcategory_id === product.subcategory_id
        );
        // setFilteredProductList(filtered);

        setFilteredProductList((prevList) => [...prevList, ...filtered]);
        // setIsLoading(false);
      } else {
        // setIsLoading(false);
        toast.error(message);
      }
    } catch (error) {
      // setIsLoading(false);
      toast.error(TOAST_ALERTS.ERROR_MESSAGE);
      console.log("Error", error);
    }
  };

  const fetchMoreData = async () => {
    console.log("Fetch More Data");
    const newOffset = offset + limit;
    setOffset(newOffset);
    getProductListApi(newOffset);
  };

  const renderProductList = () => {
    return (
      <div className="tab-panel-block">
        <div className="tab-panel-block-inner">
          <InfiniteScroll
            dataLength={filteredProductList.length}
            next={fetchMoreData}
            style={{ display: "flex", flexDirection: "column" }}
            hasMore={true}
            scrollableTarget="scrollableDiv"
          >
            <div className="tab-panel-custom">
              <div className="tab-panel-data-block">
                {filteredProductList.map((item, index) => {
                  return (
                    <div key={index} className="tab-panel-data-block-main">
                      <Link href={`/customer/productdetail/${item.id}`}>
                        <div className="tab-panel-data-block-inner">
                          <div className="block-img-tab">
                            <img src={item?.images[0]} />
                          </div>
                          <div className="block-content">
                            <div className="block-content-left">
                              <h3>
                                {(item.price_discounted / 100).toLocaleString(
                                  "de-DE"
                                )}
                              </h3>
                              <h3>CHF</h3>
                            </div>
                            <div className="block-content-right">
                              <h5>
                                <del>
                                  {(item.price_gross / 100).toLocaleString(
                                    "de-DE"
                                  )}
                                </del>
                              </h5>
                              <h6>CHF</h6>
                            </div>
                          </div>
                          <div className="bottom-content">
                            <h3>
                              {item?.title.charAt(0).toUpperCase() +
                                item?.title.slice(1)}
                            </h3>
                            <p>
                              {item.quantity}&nbsp;{item.unit}
                            </p>
                          </div>
                        </div>
                      </Link>
                      <div className="plus-icon">
                        <button
                          className="add-icon-button"
                          onClick={() => {
                            storeDispatch(setUpdatedCartList(item));
                          }}
                        >
                          <img src="/addcard.svg" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="">
        <DashboardHeader />
        <CommonPagesBlock>
          <div className="dasborad-main">
            <div className="tabs-block">
              <Tabs>
                <TabList>
                  {categoryList.map((item, index) => {
                    return (
                      <Tab key={index}>
                        <button
                          className="tabs-block-link"
                          onClick={() => {
                            console.log("categoryList", item.id);
                            GetCategoryById(item.id);
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.99996 18.3327C14.5833 18.3327 18.3333 14.5827 18.3333 9.99935C18.3333 5.41602 14.5833 1.66602 9.99996 1.66602C5.41663 1.66602 1.66663 5.41602 1.66663 9.99935C1.66663 14.5827 5.41663 18.3327 9.99996 18.3327Z"
                              stroke="#98A2B3"
                              strokeMiterlimit="10"
                            />
                            <path
                              d="M11.25 6.66602C8.72496 6.66602 6.66663 8.73268 6.66663 11.2493C6.66663 12.391 7.59996 13.3327 8.74996 13.3327C11.2666 13.3327 13.3333 11.266 13.3333 8.74935C13.3333 7.60768 12.3916 6.66602 11.25 6.66602Z"
                              stroke="#98A2B3"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p>{item.name}</p>
                        </button>
                      </Tab>
                    );
                  })}
                </TabList>
              </Tabs>
              <div className="tab-panel-block">
                <div className="tab-panel-block-inner">
                  <div className="tab-button">
                    {subCategoryList.map((item, index) => {
                      return (
                        <button
                          key={index}
                          className={`${
                            item.name == subCategoryType ? "active" : ""
                          }`}
                          onClick={() => {
                            setSubCategoryType(item.name);
                            console.log("Sub Category ID", item.id);

                            setSubCategoryId(item.id);
                          }}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="bg-white h-screen w-[100%]">
                {isLoading ? <Loader /> : renderProductList()}
              </div>
            </div>
          </div>
        </CommonPagesBlock>
      </div>
    </div>
  );
};

export default CustomerDashboard;
