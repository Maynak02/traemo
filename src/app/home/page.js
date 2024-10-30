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
import {
  capitalizeTitle,
  formatPrice,
  formatUnit,
  TOAST_ALERTS,
} from "@/constants/keywords";
import Loader from "@/components/Loader";
import LoginMain from "@/components/styles/auth.style";
import InfiniteScroll from "react-infinite-scroll-component";
import { PATH_DASHBOARD } from "@/routes/paths";
import { getData } from "@/utils/storage";

const CustomerDashboard = () => {
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
  if (fetchAddressData && Object.keys(fetchAddressData).length > 0) {
    hasAddress = true;
  } else {
    hasAddress = false;
  }
  useEffect(() => {
    GetAllDetails();
  }, [fetchAddressData]);

  const GetAllDetails = async () => {
    const objParam = {
      ...(hasAddress === true && {
        lat: fetchAddressData.latitude,
      }),
      ...(hasAddress === true && {
        lon: fetchAddressData.longitude,
      }),
    };

    setIsLoading(true);
    try {
      const { payload: res } = await storeDispatch(
        SearchAllProductsAction(objParam)
      );
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
                                      {formatPrice(item.price_discounted)}
                                    </h3>
                                    <h3>CHF</h3>
                                  </div>
                                  {item.price_discounted !==
                                    item.price_gross && (
                                    <div className="block-content-right">
                                      <h5>
                                        <del>
                                          {formatPrice(item.price_gross)}
                                        </del>
                                      </h5>
                                      <h6>CHF</h6>
                                    </div>
                                  )}
                                </div>
                                <div className="bottom-content">
                                  <h3>{capitalizeTitle(item?.title)}</h3>
                                  <p>
                                    {item.quantity}&nbsp;{formatUnit(item.unit)}
                                  </p>
                                </div>
                              </div>
                            </Link>
                            <div className="plus-icon">
                              <button
                                className="add-icon-button"
                                onClick={() => {
                                  const token = getData("token");
                                  if (token) {
                                    if (hasAddress) {
                                      storeDispatch(setUpdatedCartList(item));
                                    } else {
                                      setIsOpen(!isOpen);
                                    }
                                  } else {
                                    const tempAddress = getData("tempAddress");
                                    console.log("tempAddress", tempAddress);
                                    if (tempAddress != undefined) {
                                      storeDispatch(setUpdatedCartList(item));
                                    } else {
                                      setIsOpen(!isOpen);
                                    }
                                  }
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
      <DashboardHeader open={isOpen} />
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
            <div className="f-bottom-link">
              <Link href="https://info.traemo.com/datenschutz">
                Datenschutzerklärung
              </Link>
              <Link href="https://info.traemo.com/agbs">AGB und Impressum</Link>
            </div>
          </div>
        </CommonPagesBlock>
      )}
    </div>
  );
};

export default CustomerDashboard;
