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
  SearchAllProductsAction,
} from "@/redux/Product/action";

import { toast } from "react-toastify";
import { TOAST_ALERTS } from "@/constants/keywords";
import Loader from "@/components/Loader";
import LoginMain from "@/components/styles/auth.style";
import InfiniteScroll from "react-infinite-scroll-component";
import { PATH_DASHBOARD } from "@/routes/paths";

const CustomerDashboard = () => {
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [selectedSubCategory, setSelectedSubCategory] = useState(0);
  const fetchAddressData = useSelector((state) => state.cartData.fetchAddress);

  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelect = (index) => {
    setActiveIndex(index);
    setSelectedSubCategory(0);
  };

  const { t } = useTranslation("common");

  const storeDispatch = useDispatch();
  let hasAddress = false;
  useEffect(() => {
    if (fetchAddressData && Object.keys(fetchAddressData).length > 0) {
      hasAddress = true;
    } else {
      hasAddress = false;
    }
    GetAllDetails();
  }, []);

  const GetAllDetails = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await storeDispatch(SearchAllProductsAction());
      const { data, status, message } = res;
      if (status) {
        setIsLoading(false);
        setFilteredProductList(data.categories);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderProductList = () => {
    return (
      <>
        {filteredProductList?.length > 0 &&
          filteredProductList?.map((data, index) => (
            <TabPanel key={index}>
              <div className="tab-panel-block">
                <div className="tab-panel-block-inner ">
                  <div className={`tab-button ${isScrolled ? "scrolled" : ""}`}>
                    {filteredProductList[activeIndex]?.subcategories?.length >
                      0 &&
                      filteredProductList[activeIndex]?.subcategories?.map(
                        (data, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedSubCategory(index)}
                            className={
                              selectedSubCategory === index ? "active" : ""
                            }
                          >
                            {data.name}
                          </button>
                        )
                      )}
                  </div>
                  <div className="tab-panel-custom">
                    <div className="tab-panel-data-block">
                      {filteredProductList?.length > 0 &&
                        filteredProductList[activeIndex]?.subcategories[
                          selectedSubCategory
                        ]?.products?.map((item, index) => (
                          <div
                            key={index}
                            className="tab-panel-data-block-main"
                          >
                            <Link
                              href={`${PATH_DASHBOARD.productdetail}/${item.id}`}
                            >
                              <div className="tab-panel-data-block-inner">
                                <div className="block-img-tab">
                                  <img src={item?.images[0]} />
                                </div>
                                <div className="block-content">
                                  <div className="block-content-left">
                                    <h3>
                                      {(
                                        item.price_discounted / 100
                                      ).toLocaleString("de-DE")}
                                    </h3>
                                    <h3>CHF</h3>
                                  </div>
                                  {item.price_discounted !==
                                    item.price_gross && (
                                    <div className="block-content-right">
                                      <h5>
                                        <del>
                                          {(
                                            item.price_gross / 100
                                          ).toLocaleString("de-DE")}
                                        </del>
                                      </h5>
                                      <h6>CHF</h6>
                                    </div>
                                  )}
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
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
      </>
    );
  };

  return (
    <div className="">
      <DashboardHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <CommonPagesBlock>
          <div className="common-block-hub">
            <div className="dasborad-main">
              <div className="tabs-block">
                <Tabs selectedIndex={activeIndex} onSelect={handleSelect}>
                  <div
                    className={`tabs-block-fixed ${
                      isScrolled ? "scrolled" : ""
                    }`}
                  >
                    <TabList>
                      {filteredProductList?.length > 0 &&
                        filteredProductList.map((item, index) => (
                          <Tab key={index}>
                            <div className="tabs-block-link">
                              <p>{item?.name || ""}</p>
                            </div>
                          </Tab>
                        ))}
                    </TabList>
                  </div>
                  {renderProductList()}
                </Tabs>
              </div>
            </div>
          </div>
        </CommonPagesBlock>
      )}
    </div>
  );
};

export default CustomerDashboard;
