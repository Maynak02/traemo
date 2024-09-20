"use client";
import React, { useMemo, useRef, useState } from "react";
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
const Productdetail = () => {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
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
    infinite: true,
  };
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const { t } = useTranslation("common");

  const [productList, setProductList] = useState([
    {
      productid: 1,
      productName: "Käsebrötchen",
      imageUrl: "/cheeseball.png",
      finalPrice: "30.30",
      quantity: "70 gm",
    },
    {
      productid: 2,
      productName: "Rosinenbrötchen",
      imageUrl: "/raisingball.png",
      finalPrice: "30.30",
      quantity: "70 gm",
    },
    {
      productid: 3,
      productName: "Vollkornbrötchen",
      imageUrl: "/wholemealroll.png",
      finalPrice: "30.30",
      quantity: "70 gm",
    },
    {
      productid: 4,
      productName: "Laugenbrötchen",
      imageUrl: "/pretzelroll.png",
      finalPrice: "30.30",
      quantity: "70 gm",
    },
    {
      productid: 5,
      productName: "Laugenbrötchen",
      imageUrl: "/wholemealroll.png",
      finalPrice: "30.30",
      quantity: "70 gm",
    },
    {
      productid: 6,
      productName: "Laugenbrötchen",
      imageUrl: "/pretzelroll.png",
      finalPrice: "30.30",
      quantity: "70 gm",
    },
  ]);
  return (
    <div>
      <DashboardHeader />
      <CommonPagesBlock>
        <div className="product-details-main">
          <div className="product-details-main-left">
            <div className="product-details-main-thumbnail">
              <Slider
                {...settingsThumbnail}
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                className="setting-thumbnail"
              >
                {productList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="product-details-main-left-thumbnail"
                    >
                      <img alt="" src={item.imageUrl} />
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
                {productList.map((item, index) => {
                  return (
                    <div key={index} className="product-details-main-left-img">
                      <div className="product-details-main-left-img-inner">
                        <img alt="" src={item.imageUrl} />
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
                    <h2>Cheese sandwiches -500g </h2>
                    <p>12 Pieces</p>
                  </div>
                  <div className="block-content">
                    <div className="block-content-left">
                      <h3>30.30</h3>
                      <h3>CHF</h3>
                    </div>
                    <div className="block-content-right">
                      <h5>
                        <del>30.30</del>
                      </h5>
                      <h6>CHF</h6>
                    </div>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="common-btn btn">
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
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                            <p>
                              Our cheese rolls are a delicious combination of
                              airy, fresh dough and hearty cheese. They are
                              ideal as a snack between meals, for breakfast or
                              as a side dish to soups and salads.
                            </p>
                          </div>
                          <div className="accordian-block-data-inner diff-pad">
                            <h3>{t("Ingredients")}</h3>
                            <p>
                              <span>Ingredients</span>
                              <span>30% </span>
                            </p>
                            <p>
                              <span>Type of fruit</span>
                              <span>14% </span>
                            </p>
                            <p>
                              <span>another type of fruit</span>
                              <span>14% </span>
                            </p>
                            <p>
                              <span>hazelnuts</span>
                              <span>14% </span>
                            </p>
                          </div>
                          <div className="accordian-block-data-inner diff-pad">
                            <h3>{t("Nutrition")}</h3>
                            <p>
                              <span>Energy ( kg/kcal )</span>
                              <span>30% </span>
                            </p>
                            <p>
                              <span>Fett</span>
                              <span>14% </span>
                            </p>
                            <p>
                              <span>of which total fatty acids</span>
                              <span>14% </span>
                            </p>
                            <p>
                              <span>Carbohydrates</span>
                              <span>14% </span>
                            </p>
                            <p>
                              <span>of which sugar</span>
                              <span>14% </span>
                            </p>
                            <p>
                              <span>protein</span>
                              <span>14% </span>
                            </p>
                            <p>
                              <span>Salz</span>
                              <span>14% </span>
                            </p>
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
      </CommonPagesBlock>
    </div>
  );
};

export default Productdetail;
