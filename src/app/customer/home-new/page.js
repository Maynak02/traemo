"use client";
import CardList from "@/components/CardList";
import CategoryTabs from "@/components/CategoryTabs";
import DashboardHeader from "@/components/DashboardHeader";
import SubCategoryTabs from "@/components/SubCategoryTabs";
import React, { useMemo, useState } from "react";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import CommonPagesBlock from "@/components/styles/common.style";

const CustomerDashboard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
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
      productName: "Käsebrötchen",
      imageUrl: "/cheeseball.png",
      finalPrice: "30.30",
      quantity: "70 gm",
    },
    {
      productid: 6,
      productName: "Rosinenbrötchen",
      imageUrl: "/raisingball.png",
      finalPrice: "30.30",
      quantity: "70 gm",
    },
    {
      productid: 7,
      productName: "Vollkornbrötchen",
      imageUrl: "/wholemealroll.png",
      finalPrice: "30.30",
      quantity: "70 gm",
    },
    {
      productid: 8,
      productName: "Laugenbrötchen",
      imageUrl: "/pretzelroll.png",
      finalPrice: "30.30",
      quantity: "70 gm",
    },
  ]);

  return (
    <div>
      <div className="">
        {/* Header Start */}
        <DashboardHeader />
        <CommonPagesBlock>
          <div className="dasborad-main">
            <div className="tabs-block">
              <Tabs>
                <TabList>
                  <Tab>
                    <div className="tabs-block-link">
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
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M11.25 6.66602C8.72496 6.66602 6.66663 8.73268 6.66663 11.2493C6.66663 12.391 7.59996 13.3327 8.74996 13.3327C11.2666 13.3327 13.3333 11.266 13.3333 8.74935C13.3333 7.60768 12.3916 6.66602 11.25 6.66602Z"
                          stroke="#98A2B3"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p>Discover</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tabs-block-link">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.0596 13.4468C17.3476 12.1589 17.9916 11.5149 18.2312 10.6794C18.4708 9.84385 18.266 8.95643 17.8564 7.18164L17.6203 6.15816C17.2757 4.66503 17.1034 3.91845 16.5922 3.40722C16.0809 2.89599 15.3344 2.7237 13.8412 2.37913L12.8177 2.14294C11.043 1.73338 10.1555 1.52859 9.32004 1.76822C8.48454 2.00783 7.84054 2.65181 6.55262 3.93975L5.02796 5.46445C2.78712 7.70528 1.66671 8.82568 1.66671 10.2179C1.66671 11.6102 2.78712 12.7306 5.02796 14.9714C7.26879 17.2123 8.38921 18.3327 9.78146 18.3327C11.1737 18.3327 12.2941 17.2123 14.5349 14.9714L16.0596 13.4468Z"
                          stroke="#98A2B3"
                        />
                        <path
                          d="M12.3417 7.65816C11.5657 6.88212 10.4124 6.77733 9.76562 7.42394C9.11901 8.07068 9.2238 9.224 9.99983 10C10.7759 10.7759 10.8808 11.9293 10.234 12.576C9.58731 13.2227 8.43399 13.1178 7.65809 12.3418M12.3417 7.65816L12.81 7.18973M12.3417 7.65816C12.8729 8.18938 13.0897 8.89732 12.9661 9.49862M7.65809 12.3418L7.18966 12.8102M7.65809 12.3418C7.2192 11.903 6.99506 11.3436 6.99996 10.8234"
                          stroke="#98A2B3"
                          stroke-linecap="round"
                        />
                      </svg>
                      <p>Discounts</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tabs-block-link">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.0596 13.4468C17.3476 12.1589 17.9916 11.5149 18.2312 10.6794C18.4708 9.84385 18.266 8.95643 17.8564 7.18164L17.6203 6.15816C17.2757 4.66503 17.1034 3.91845 16.5922 3.40722C16.0809 2.89599 15.3344 2.7237 13.8412 2.37913L12.8177 2.14294C11.043 1.73338 10.1555 1.52859 9.32004 1.76822C8.48454 2.00783 7.84054 2.65181 6.55262 3.93975L5.02796 5.46445C2.78712 7.70528 1.66671 8.82568 1.66671 10.2179C1.66671 11.6102 2.78712 12.7306 5.02796 14.9714C7.26879 17.2123 8.38921 18.3327 9.78146 18.3327C11.1737 18.3327 12.2941 17.2123 14.5349 14.9714L16.0596 13.4468Z"
                          stroke="#98A2B3"
                        />
                        <path
                          d="M12.3417 7.65816C11.5657 6.88212 10.4124 6.77733 9.76562 7.42394C9.11901 8.07068 9.2238 9.224 9.99983 10C10.7759 10.7759 10.8808 11.9293 10.234 12.576C9.58731 13.2227 8.43399 13.1178 7.65809 12.3418M12.3417 7.65816L12.81 7.18973M12.3417 7.65816C12.8729 8.18938 13.0897 8.89732 12.9661 9.49862M7.65809 12.3418L7.18966 12.8102M7.65809 12.3418C7.2192 11.903 6.99506 11.3436 6.99996 10.8234"
                          stroke="#98A2B3"
                          stroke-linecap="round"
                        />
                      </svg>
                      <p>Pastries</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tabs-block-link">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_850_2037)">
                          <path
                            d="M19.7669 9.15586C19.6171 8.75281 19.3985 8.37281 19.1278 8.03047C18.3076 6.99137 17.0328 6.22297 15.4813 5.69063C15.3692 5.65324 15.2539 5.61559 15.1389 5.58129C14.5403 5.3941 13.9042 5.2443 13.2392 5.13215C12.2549 4.9652 11.2074 4.87891 10.1166 4.87891H9.92662C9.28185 4.88453 8.6517 4.92219 8.04154 4.98543C6.9651 5.10039 5.94904 5.30191 5.02236 5.58973C4.48693 5.75105 3.98049 5.94387 3.51135 6.15973C3.36181 6.22887 3.21482 6.30082 3.07092 6.37559C2.16732 6.85027 1.41041 7.43465 0.866542 8.13391C0.322401 8.83344 -0.0027944 9.66516 1.80954e-05 10.5603V10.589C0.00310403 11.0266 0.0834946 11.4468 0.236112 11.8265C0.50369 12.5002 0.990213 13.0469 1.5976 13.4699C2.51275 14.1059 3.70697 14.5034 5.08865 14.7594C6.47291 15.0154 8.05021 15.122 9.72506 15.122C9.82881 15.122 9.93529 15.122 10.0387 15.1191C12.6579 15.0961 15.0411 14.837 16.8514 14.1663C17.7578 13.8268 18.5291 13.3807 19.0991 12.7678C19.381 12.4597 19.6115 12.1087 19.7669 11.72C19.9224 11.3315 20.0028 10.9086 19.9999 10.4625V10.4336C19.9972 9.99035 19.9165 9.55863 19.7669 9.15586ZM18.7048 10.4625C18.7048 10.7559 18.6559 11.0092 18.5637 11.2394C18.4026 11.6424 18.1033 12.0022 17.6342 12.3274C16.9377 12.8167 15.8669 13.2023 14.5546 13.4468C13.2423 13.6945 11.6908 13.8125 10.0303 13.824C9.92658 13.8268 9.82596 13.8268 9.72506 13.8268C7.25564 13.8296 5.04818 13.5795 3.53717 13.0123C2.78025 12.7332 2.20748 12.3791 1.8449 11.982C1.66365 11.7835 1.53123 11.5733 1.43904 11.3459C1.34713 11.1185 1.29822 10.8681 1.29514 10.5803V10.5603C1.29514 9.97602 1.49103 9.44367 1.88818 8.92848C2.3601 8.31547 3.13724 7.74828 4.14178 7.29352C4.50998 8.01023 4.80928 8.69238 5.04541 9.25648C5.47994 10.2841 6.38947 9.92707 6.15928 8.96305C6.02971 8.40457 5.8858 7.68223 5.54627 6.78145C6.46732 6.51074 7.50049 6.32355 8.60846 6.23449C8.99998 7.19289 9.28779 8.10805 9.50646 8.845C9.84908 9.99035 10.8879 9.72277 10.7614 8.66934C10.6863 8.03918 10.6203 7.22469 10.344 6.17688C11.5239 6.1884 12.6437 6.31516 13.6538 6.53102C13.8669 7.3627 14.0164 8.13984 14.1316 8.78742C14.3444 9.97606 15.395 9.81781 15.3835 8.74133C15.3807 8.27223 15.3922 7.70813 15.3346 7.01445C15.6944 7.14965 16.0311 7.29664 16.3391 7.45488C17.1131 7.85203 17.7118 8.32391 18.1062 8.8307C18.5033 9.33715 18.6992 9.86078 18.7048 10.4423L18.7048 10.4625Z"
                            fill="#98a2b3"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_850_2037">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>Outbreak</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tabs-block-link">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 8.33333V5.83333M10 5.83333C10.9205 5.83333 11.6667 5.08714 11.6667 4.16667C11.6667 3.24619 10.4167 1.25 10 1.25C9.58337 1.25 8.33337 3.24619 8.33337 4.16667C8.33337 5.08714 9.07954 5.83333 10 5.83333ZM16.6667 12.5L16.3065 13.0367C15.6958 13.947 14.3456 13.9125 13.782 12.9722L13.7494 12.9177C13.1836 11.9738 11.8159 11.9736 11.2497 12.9172C10.6837 13.8606 9.31621 13.8603 8.75021 12.9169C8.18402 11.9733 6.81623 11.973 6.25004 12.9167L6.21675 12.9722C5.65151 13.9142 4.29767 13.9464 3.68825 13.0323L3.33337 12.5M16.6667 17.5V11.6667C16.6667 9.82575 15.1743 8.33333 13.3334 8.33333H6.66671C4.82576 8.33333 3.33337 9.82575 3.33337 11.6667V17.5H16.6667Z"
                          stroke="#98A2B3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p>Cake</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tabs-block-link">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4249 11.5738C15.8042 11.3397 15.3314 10.8186 15.1602 10.1799C15.022 9.66427 15.0881 9.12246 15.3461 8.65408C15.4707 8.42806 15.4579 8.15129 15.3131 7.93768C15.1682 7.7241 14.9156 7.60996 14.6598 7.64188C14.5744 7.65259 14.4874 7.65804 14.4013 7.65804C13.8514 7.65804 13.3346 7.44415 12.9462 7.05575C12.4939 6.60347 12.2803 5.9789 12.3601 5.34221C12.3921 5.08613 12.2778 4.83375 12.0642 4.68891C11.8507 4.54413 11.5739 4.53135 11.3479 4.65582C10.8849 4.91084 10.3343 4.97891 9.82206 4.84175C9.18333 4.67064 8.66222 4.19786 8.42814 3.57708C8.30386 3.24764 7.95048 3.06565 7.61029 3.15582C6.32853 3.4952 5.15306 4.17254 4.211 5.1146C2.78526 6.54044 2 8.43616 2 10.4527C2 12.4692 2.78526 14.365 4.2111 15.7909C5.63678 17.2165 7.53257 18.0018 9.54918 18.002C9.54947 18.002 9.54963 18.002 9.54992 18.002C11.566 18.002 13.4616 17.2167 14.8874 15.7909C15.8295 14.8489 16.5068 13.6735 16.8462 12.3916C16.9363 12.0513 16.7544 11.6979 16.4249 11.5738ZM13.9169 14.8203C12.7502 15.987 11.1994 16.6295 9.54992 16.6294C9.54979 16.6294 9.54941 16.6294 9.54931 16.6294C7.89928 16.6292 6.34814 15.9867 5.18166 14.8203C4.01506 13.6537 3.3726 12.1026 3.3726 10.4527C3.3726 8.80284 4.01506 7.25177 5.18166 6.08516C5.82077 5.44608 6.59073 4.95599 7.43236 4.64896C7.88824 5.38933 8.61462 5.93921 9.46686 6.16751C9.97682 6.30423 10.5126 6.32106 11.0255 6.21821C11.148 6.89539 11.4737 7.52433 11.9756 8.02638C12.4752 8.52591 13.102 8.85235 13.7831 8.97548C13.6805 9.4871 13.6961 10.019 13.8344 10.5352C14.0628 11.3874 14.6127 12.1138 15.353 12.5697C15.0461 13.4113 14.5559 14.1812 13.9169 14.8203Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M18.123 8.99383C17.9953 8.86623 17.8182 8.79297 17.6375 8.79297C17.4568 8.79297 17.2797 8.86623 17.1521 8.99383C17.0245 9.12199 16.9512 9.29853 16.9512 9.47927C16.9512 9.66001 17.0245 9.83664 17.1521 9.96471C17.2802 10.0924 17.4568 10.1656 17.6375 10.1656C17.8183 10.1656 17.9949 10.0924 18.123 9.96471C18.2506 9.8366 18.3238 9.65998 18.3238 9.47927C18.3238 9.29904 18.2506 9.12196 18.123 8.99383Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M10.6816 2.20089C10.5535 2.07323 10.3769 2 10.1966 2C10.0159 2 9.83882 2.07327 9.71116 2.20089C9.58306 2.32855 9.50989 2.50559 9.50989 2.6863C9.50989 2.86704 9.58309 3.04367 9.71116 3.17132C9.83882 3.29939 10.0155 3.3726 10.1966 3.3726C10.3769 3.3726 10.5539 3.29939 10.6816 3.17132C10.8092 3.04367 10.8825 2.86659 10.8825 2.6863C10.8825 2.50559 10.8092 2.32893 10.6816 2.20089Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M14.8873 5.11101C14.7596 4.98336 14.583 4.91016 14.4022 4.91016C14.2215 4.91016 14.0445 4.98336 13.9168 5.11101C13.7892 5.23867 13.7159 5.41571 13.7159 5.59645C13.7159 5.77669 13.7892 5.95379 13.9168 6.08186C14.0445 6.20955 14.2215 6.28275 14.4022 6.28275C14.5825 6.28275 14.7596 6.20949 14.8873 6.08186C15.0154 5.95376 15.0885 5.77669 15.0885 5.59645C15.0885 5.41571 15.0153 5.23867 14.8873 5.11101Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M11.2926 10.5368C11.1649 10.4091 10.9879 10.3359 10.8076 10.3359C10.6264 10.3359 10.4498 10.4092 10.3222 10.5368C10.1941 10.6649 10.1208 10.8416 10.1208 11.0222C10.1208 11.203 10.1941 11.38 10.3222 11.5077C10.4498 11.6353 10.6269 11.7085 10.8076 11.7085C10.9878 11.7085 11.1649 11.6353 11.2926 11.5077C11.4202 11.38 11.4934 11.2029 11.4934 11.0222C11.4934 10.8416 11.4202 10.6649 11.2926 10.5368Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M9.46214 7.79115C9.33455 7.66305 9.15748 7.58984 8.9767 7.58984C8.79599 7.58984 8.61937 7.66311 8.49171 7.79115C8.36405 7.91836 8.29041 8.0954 8.29041 8.27614C8.29041 8.45688 8.36405 8.63393 8.49171 8.76158C8.61937 8.88924 8.79593 8.96244 8.9767 8.96244C9.15744 8.96244 9.33449 8.88924 9.46214 8.76158C9.5898 8.63348 9.663 8.45685 9.663 8.27614C9.663 8.09547 9.5898 7.91881 9.46214 7.79115Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M6.25957 9.16573C6.13197 9.03805 5.95487 8.96484 5.77413 8.96484C5.5939 8.96484 5.41679 9.03811 5.28913 9.16573C5.16103 9.29384 5.08783 9.47047 5.08783 9.65114C5.08783 9.83185 5.1611 10.0089 5.28913 10.1366C5.41679 10.2642 5.59387 10.3374 5.77413 10.3374C5.95487 10.3374 6.13191 10.2642 6.25957 10.1366C6.38722 10.0089 6.46043 9.83185 6.46043 9.65114C6.46043 9.47047 6.38722 9.29381 6.25957 9.16573Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M11.2926 13.7404C11.165 13.6123 10.9879 13.5391 10.8071 13.5391C10.6269 13.5391 10.4498 13.6123 10.3222 13.7404C10.1941 13.868 10.1208 14.0446 10.1208 14.2254C10.1208 14.4061 10.1941 14.5827 10.3222 14.7108C10.4498 14.8385 10.6269 14.9117 10.8071 14.9117C10.9879 14.9117 11.1649 14.8385 11.2926 14.7108C11.4202 14.5827 11.4934 14.4061 11.4934 14.2254C11.4934 14.0447 11.4202 13.868 11.2926 13.7404Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M8.08958 12.3689C7.96199 12.2412 7.78489 12.168 7.60414 12.168C7.4234 12.168 7.24681 12.2412 7.11915 12.3689C6.99149 12.497 6.91785 12.6736 6.91785 12.8543C6.91785 13.035 6.99149 13.2121 7.11915 13.3397C7.24681 13.4674 7.42337 13.5406 7.60414 13.5406C7.78485 13.5406 7.96193 13.4674 8.08958 13.3397C8.21724 13.2121 8.29044 13.035 8.29044 12.8543C8.29044 12.6736 8.21724 12.4969 8.08958 12.3689Z"
                          fill="#98A2B3"
                        />
                      </svg>
                      <p>Cookies</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tabs-block-link">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5706 6.04837C15.139 6.04457 14.7594 5.7446 14.626 5.30198C14.0548 3.40751 12.2931 2 10.1789 2C8.06771 2 6.30382 3.4046 5.7318 5.30198C5.59835 5.74457 5.2187 6.04457 4.7872 6.04834C2.34666 6.07042 1.07334 9.02942 2.78759 10.8092C3.20046 11.2379 3.72337 11.5171 4.29494 11.6225L5.20867 17.4961C5.25382 17.7861 5.50353 18 5.79708 18C6.15966 18 14.3386 18 14.5609 18C14.8544 18 15.1041 17.7861 15.1493 17.4961L16.063 11.6225C16.6346 11.5171 17.1575 11.2378 17.5704 10.8092C19.2853 9.02853 18.0093 6.07048 15.5706 6.04837ZM6.30695 16.8091L5.50752 11.6703H7.72283L8.26557 16.8091H6.30695V16.8091ZM10.8946 16.8091H9.46308L8.92037 11.6703H11.4374L10.8946 16.8091ZM14.0508 16.8091H12.0922L12.6349 11.6703H14.8502L14.0508 16.8091ZM16.7125 9.98297C16.4041 10.3031 15.9897 10.4793 15.5454 10.4793C15.3537 10.4793 5.0019 10.4793 4.81225 10.4793C4.368 10.4793 3.95356 10.3031 3.64522 9.98297C2.65471 8.95466 3.39564 7.25073 4.79759 7.2392C5.7535 7.23073 6.58714 6.59038 6.87193 5.64575C7.29452 4.24425 8.60043 3.19093 10.1788 3.19093C11.7495 3.19093 13.0608 4.23655 13.4857 5.64575C13.7706 6.59042 14.6042 7.23077 15.5601 7.23923C16.9685 7.25083 17.6994 8.95847 16.7125 9.98297Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M10.1788 8.93959C10.5235 8.93959 10.8029 8.66017 10.8029 8.3155C10.8029 7.97082 10.5235 7.69141 10.1788 7.69141C9.83416 7.69141 9.55475 7.97082 9.55475 8.3155C9.55475 8.66017 9.83416 8.93959 10.1788 8.93959Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M13.182 8.93959C13.5267 8.93959 13.8061 8.66017 13.8061 8.3155C13.8061 7.97082 13.5267 7.69141 13.182 7.69141C12.8373 7.69141 12.5579 7.97082 12.5579 8.3155C12.5579 8.66017 12.8373 8.93959 13.182 8.93959Z"
                          fill="#98A2B3"
                        />
                        <path
                          d="M7.17603 8.93959C7.52071 8.93959 7.80012 8.66017 7.80012 8.3155C7.80012 7.97082 7.52071 7.69141 7.17603 7.69141C6.83136 7.69141 6.55194 7.97082 6.55194 8.3155C6.55194 8.66017 6.83136 8.93959 7.17603 8.93959Z"
                          fill="#98A2B3"
                        />
                      </svg>
                      <p>Muffin</p>
                    </div>
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="tab-panel-block">
                    <div className="tab-panel-block-inner">
                      <div className="tab-button">
                        <button>Frisches Brot</button>
                        <button>Fresh Bread Rolls</button>
                        <button>Fresh Pastries</button>
                      </div>
                      <div className="tab-panel-custom">
                        <div className="tab-panel-data-block">
                          <div className="tab-panel-data-block-main">
                            <div className="tab-panel-data-block-inner">
                              <div className="block-img-tab">
                                <img alt="" src="/cheeseball.png" />
                                <div className="plus-icon">
                                  <Link href="">
                                    <img alt="" src="/addcard.svg" />
                                  </Link>
                                </div>
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
                              <div className="bottom-content">
                                <h3>Cheese Sandwiches</h3>
                                <p>12 pieces ( 500g )</p>
                              </div>
                            </div>
                          </div>
                          <div className="tab-panel-data-block-main">
                            <div className="tab-panel-data-block-inner">
                              <div className="block-img-tab">
                                <img alt="" src="/cheeseball.png" />
                                <div className="plus-icon">
                                  <Link href="">
                                    <img alt="" src="/addcard.svg" />
                                  </Link>
                                </div>
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
                              <div className="bottom-content">
                                <h3>Cheese Sandwiches</h3>
                                <p>12 pieces ( 500g )</p>
                              </div>
                            </div>
                          </div>
                          <div className="tab-panel-data-block-main">
                            <div className="tab-panel-data-block-inner">
                              <div className="block-img-tab">
                                <img alt="" src="/cheeseball.png" />
                                <div className="plus-icon">
                                  <Link href="">
                                    <img alt="" src="/addcard.svg" />
                                  </Link>
                                </div>
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
                              <div className="bottom-content">
                                <h3>Cheese Sandwiches</h3>
                                <p>12 pieces ( 500g )</p>
                              </div>
                            </div>
                          </div>
                          <div className="tab-panel-data-block-main">
                            <div className="tab-panel-data-block-inner">
                              <div className="block-img-tab">
                                <img alt="" src="/cheeseball.png" />
                                <div className="plus-icon">
                                  <Link href="">
                                    <img alt="" src="/addcard.svg" />
                                  </Link>
                                </div>
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
                              <div className="bottom-content">
                                <h3>Cheese Sandwiches</h3>
                                <p>12 pieces ( 500g )</p>
                              </div>
                            </div>
                          </div>
                          <div className="tab-panel-data-block-main">
                            <div className="tab-panel-data-block-inner">
                              <div className="block-img-tab">
                                <img alt="" src="/cheeseball.png" />
                                <div className="plus-icon">
                                  <Link href="">
                                    <img alt="" src="/addcard.svg" />
                                  </Link>
                                </div>
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
                              <div className="bottom-content">
                                <h3>Cheese Sandwiches</h3>
                                <p>12 pieces ( 500g )</p>
                              </div>
                            </div>
                          </div>
                          <div className="tab-panel-data-block-main">
                            <div className="tab-panel-data-block-inner">
                              <div className="block-img-tab">
                                <img alt="" src="/cheeseball.png" />
                                <div className="plus-icon">
                                  <Link href="">
                                    <img alt="" src="/addcard.svg" />
                                  </Link>
                                </div>
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
                              <div className="bottom-content">
                                <h3>Cheese Sandwiches</h3>
                                <p>12 pieces ( 500g )</p>
                              </div>
                            </div>
                          </div>
                          <div className="tab-panel-data-block-main">
                            <div className="tab-panel-data-block-inner">
                              <div className="block-img-tab">
                                <img alt="" src="/cheeseball.png" />
                                <div className="plus-icon">
                                  <Link href="">
                                    <img alt="" src="/addcard.svg" />
                                  </Link>
                                </div>
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
                              <div className="bottom-content">
                                <h3>Cheese Sandwiches</h3>
                                <p>12 pieces ( 500g )</p>
                              </div>
                            </div>
                          </div>
                          <div className="tab-panel-data-block-main">
                            <div className="tab-panel-data-block-inner">
                              <div className="block-img-tab">
                                <img alt="" src="/cheeseball.png" />
                                <div className="plus-icon">
                                  <Link href="">
                                    <img alt="" src="/addcard.svg" />
                                  </Link>
                                </div>
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
                              <div className="bottom-content">
                                <h3>Cheese Sandwiches</h3>
                                <p>12 pieces ( 500g )</p>
                              </div>
                            </div>
                          </div>
                          <div className="tab-panel-data-block-main">
                            <div className="tab-panel-data-block-inner">
                              <div className="block-img-tab">
                                <img alt="" src="/cheeseball.png" />
                                <div className="plus-icon">
                                  <Link href="">
                                    <img alt="" src="/addcard.svg" />
                                  </Link>
                                </div>
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
                              <div className="bottom-content">
                                <h3>Cheese Sandwiches</h3>
                                <p>12 pieces ( 500g )</p>
                              </div>
                            </div>
                          </div>
                          <div className="tab-panel-data-block-main">
                            <div className="tab-panel-data-block-inner">
                              <div className="block-img-tab">
                                <img alt="" src="/cheeseball.png" />
                                <div className="plus-icon">
                                  <Link href="">
                                    <img alt="" src="/addcard.svg" />
                                  </Link>
                                </div>
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
                              <div className="bottom-content">
                                <h3>Cheese Sandwiches</h3>
                                <p>12 pieces ( 500g )</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>3</h2>
                </TabPanel>
                <TabPanel>
                  <h2>4</h2>
                </TabPanel>
                <TabPanel>
                  <h2>5</h2>
                </TabPanel>
                <TabPanel>
                  <h2>6</h2>
                </TabPanel>
                <TabPanel>
                  <h2>7</h2>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </CommonPagesBlock>
        {/* Header End */}
        {/* <div className='self-stretch flex flex-col items-start justify-start gap-4 max-w-full px-8'>
          <div className='flex flex-row items-start justify-start gap-2 mq1000:flex-wrap text-xs text-gray-400'>
            <CategoryTabs />
          </div>
          <div className='self-stretch overflow-hidden flex flex-col items-center justify-center pt-1 px-8 w-[100%] relative'>
            <span className='absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] border-b-[0.5px] border-gray-300'></span>
          </div>

          <div className='flex flex-row items-start justify-start gap-2 mq1000:flex-wrap text-xs text-gray-400'>
            <SubCategoryTabs />
          </div>
        </div> */}
        {/* <div className='self-stretch bg-gray-25 border-gray-300 border-b-[0.5px] border-solid overflow-hidden flex flex-col items-start justify-center pt-2 px-8' />
        
        <main className='self-start flex flex-row items-start justify-end py-0 pl-10 pr-10 box-border max-w-full'>
          <section className='items-center justify-start max-w-full'>
            <div className='flex-1 flex-row items-center justify-start gap-8 max-w-full grid grid-cols-6'>
              {productList.map((item) => {
                return (
                  <CardList
                    imageUrl={item.imageUrl}
                    finalPrice={item.finalPrice}
                    productName={item.productName}
                    quantity={item.quantity}
                    productid={item.productid}
                  />
                );
              })}
            </div>
          </section>
        </main>
        
      </div> */}
      </div>
    </div>
  );
};

export default CustomerDashboard;
