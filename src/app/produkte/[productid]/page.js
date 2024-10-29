"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import CommonPagesBlock from "@/components/styles/common.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { GetProductByIdServiceAction } from "@/redux/Product/action";
import { toast } from "react-toastify";
import { formatPrice, formatUnit, TOAST_ALERTS } from "@/constants/keywords";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "@/utils/axios";
import { HOST_API } from "@/config";
import { API_ROUTER } from "@/services/apiRouter";
import { getData } from "@/utils/storage";
import { object } from "yup";
import { setUpdatedCartList } from "@/redux/Cart/CartReducer";
import Loader from "@/components/Loader";

const Productdetail = () => {
  var settings = {
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
  };
  var settingsThumbnail = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    swipeToSlide: true,
    verticalSwiping: true,
    focusOnSelect: true,
    infinite: false,
  };
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { productid } = useParams();

  const { t } = useTranslation("common");

  const cartData = useSelector((state) => state.cartData.cartList);

  const [productdetail, setProductDetail] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    setIsLoading(true);
    try {
      const { payload: res } = await dispatch(
        GetProductByIdServiceAction(productid)
      );
      const { data, status, message } = res;
      if (status) {
        setProductDetail(data);
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

  const renderProductList = () => {
    return (
      <div className="product-details-main">
        <div className="product-details-main-left">
          <div className="product-details-main-thumbnail">
            <Slider
              {...settingsThumbnail}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              className="setting-thumbnail"
            >
              {productdetail?.images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="product-details-main-left-thumbnail"
                  >
                    <img src={item} />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="product-details-main-slider">
            <Slider
              {...settings}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
              {productdetail?.images.map((item, index) => {
                return (
                  <div key={index} className="product-details-main-left-img">
                    <div className="product-details-main-left-img-inner">
                      <img src={item} />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="product-details-main-right">
          <div className="product-details-main-right-inner">
            <div className="product-details-main-right-inner-top">
              <div className="product-top-block">
                <div className="product-top-block-left">
                  <h2>
                    {productdetail?.title.charAt(0).toUpperCase() +
                      productdetail?.title.slice(1)}
                    &nbsp;-&nbsp;
                    {productdetail?.quantity}&nbsp;
                    {formatUnit(productdetail?.unit)}
                  </h2>
                  <p>
                    {productdetail?.quantity}&nbsp;
                    {formatUnit(productdetail?.unit)}
                  </p>
                </div>
                <div className="block-content">
                  <div className="block-content-left">
                    <h3>{formatPrice(productdetail?.price_discounted)}</h3>
                    <h3>CHF</h3>
                  </div>
                  {productdetail?.price_discounted !==
                    productdetail?.price_gross && (
                    <div className="block-content-right">
                      <h5>
                        <del>{formatPrice(productdetail?.price_gross)}</del>
                      </h5>
                      <h6>CHF</h6>
                    </div>
                  )}
                </div>
              </div>
              <div className="add-to-cart">
                <button
                  className="common-btn btn"
                  onClick={() => {
                    if (cartData.length > 0) {
                      dispatch(setUpdatedCartList(productdetail));
                    } else {
                      dispatch(setUpdatedCartList(productdetail));
                    }
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12H22M12 2V22"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t("AddToCart")}</span>
                </button>
              </div>
              <div className="accordian-block">
                <Accordion allowZeroExpanded="true">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {t("ProductInformation")}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="accordian-block-data">
                        <div className="accordian-block-data-inner">
                          <h3>{t("Description")}</h3>
                          <p>{productdetail?.description}</p>
                        </div>
                        <div className="accordian-block-data-inner diff-pad">
                          <h3>{t("Ingredients")}</h3>
                          {/* {productdetail?.ingredients != undefined &&
                        Object.entries(productdetail?.ingredients).map(
                          ([key, value]) => {
                            return (
                              <p key={key}>
                                <span>{key}</span>
                                <span>{value}</span>
                              </p>
                            );
                          }
                        )} */}
                          {productdetail?.ingredients.length > 0 &&
                            productdetail?.ingredients.map((item, index) => (
                              <p key={index}>
                                <span>{item?.name}</span>
                                <span>{item?.value}</span>
                              </p>
                            ))}
                        </div>
                        <div className="accordian-block-data-inner diff-pad">
                          <h3>{t("Nutrition")}</h3>
                          {productdetail?.nutrition != undefined &&
                            Object.entries(productdetail?.nutrition).map(
                              ([key, value]) => {
                                return (
                                  <p key={key}>
                                    <span>{key}</span>
                                    <span>{value}</span>
                                  </p>
                                );
                              }
                            )}
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <DashboardHeader open={false} />
      {isLoading ? (
        <Loader />
      ) : (
        <CommonPagesBlock>{renderProductList()}</CommonPagesBlock>
      )}
    </div>
  );
};

export default Productdetail;
