"use client";
import React, { useMemo, useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import CommonPagesBlock from "@/components/styles/common.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DatePicker from "react-datepicker";
import Link from "next/link";

import "react-datepicker/dist/react-datepicker.css";
const Wallet = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    // <div className="min-h-screen bg-gray-100">
    //   <FrameComponent />

    //   <main className="container mx-auto px-4 py-8">
    //     <div className="flex gap-8">
    //       <div className="w-[150px] h-[150px]">
    //         <div className="bg-white p-2 rounded-lg shadow mb-4">
    //           <img
    //             src="https://i.ibb.co/Ltth3hP/grilled-cheese-hd-food-1366x768.jpg"
    //             alt="Thumbnail"
    //             className="w-full rounded"
    //           />
    //         </div>
    //         <div className="bg-white p-2 rounded-lg shadow mb-4">
    //           <img
    //             src="https://i.ibb.co/Ltth3hP/grilled-cheese-hd-food-1366x768.jpg"
    //             alt="Thumbnail"
    //             className="w-full rounded"
    //           />
    //         </div>
    //         <div className="bg-white p-2 rounded-lg shadow mb-4">
    //           <img
    //             src="https://i.ibb.co/Ltth3hP/grilled-cheese-hd-food-1366x768.jpg"
    //             alt="Thumbnail"
    //             className="w-full rounded"
    //           />
    //         </div>
    //         <div className="bg-white p-2 rounded-lg shadow mb-4">
    //           <img
    //             src="https://i.ibb.co/Ltth3hP/grilled-cheese-hd-food-1366x768.jpg"
    //             alt="Thumbnail"
    //             className="w-full rounded"
    //           />
    //         </div>
    //       </div>

    //       <div className="w-[600px]">
    //         <div className="bg-white p-4 rounded-lg shadow">
    //           <img src="" alt="Product" className="w-full rounded" />
    //         </div>
    //       </div>

    //       <div className="w-1/4">
    //         <div className="bg-white p-6 rounded-lg shadow">
    //           <h2 className="text-2xl font-bold mb-2">Käsebrötchen -500g</h2>
    //           <p className="text-gray-600 mb-4">12 Pieces</p>
    //           <div className="flex items-center mb-4">
    //             <span className="text-2xl font-bold text-yellow-400 mr-2">
    //               3.50 CHF
    //             </span>
    //             <span className="text-gray-500 line-through">3.50 CHF</span>
    //           </div>
    //           <button className="bg-yellow-400 text-white w-full py-3 rounded-full font-semibold mb-4">
    //             + Add to cart
    //           </button>
    //           <div className="border-t pt-4">
    //             <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
    //               Produktinformation
    //               <ChevronDown className="w-5 h-5" />
    //             </h3>
    //             <h4 className="font-semibold mb-2">Beschreibung</h4>
    //             <p className="text-sm text-gray-600 mb-4">
    //               Unsere Käsebrötchen sind eine köstliche Kombination aus
    //               luftigem, frischem Teig und herzhaftem Käse. Sie sind ideal
    //               als Snack zwischendurch, zum Frühstück oder als Beilage zu
    //               Suppen und Salaten.
    //             </p>
    //             <h4 className="font-semibold mb-2">Zutaten</h4>
    //             <div className="space-y-2">
    //               <div className="flex justify-between text-sm">
    //                 <span>Zutaten</span>
    //                 <span>30%</span>
    //               </div>
    //               <div className="flex justify-between text-sm">
    //                 <span>Fruchtsorte</span>
    //                 <span>14%</span>
    //               </div>
    //               <div className="flex justify-between text-sm">
    //                 <span>weitere Fruchtsorte</span>
    //                 <span>10%</span>
    //               </div>
    //               <div className="flex justify-between text-sm">
    //                 <span>Haselnüsse</span>
    //                 <span>15%</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <div>
      <DashboardHeader />
      <CommonPagesBlock>
        <div className="common-cart-pages-block">
          <div className="common-cart-pages-block-left">
            <div className="common-cart-pages-block-left-inner">
              <div className="wallet-top-block">
                <div className="wallet-top-block-left">
                  <h2>€30,00</h2>
                  <p>Credit available</p>
                </div>
                <div className="wallet-top-block-right">
                  <button>
                    <span>Pay out</span>
                    <img src="/chevrondown-1@2x.png" alt="img"></img>
                  </button>
                </div>
              </div>
              <div className="list-block-wallet">
                <div className="list-block-wallet-inner">
                  <h3>
                    20,00 <span>CHF</span>
                  </h3>
                </div>
                <div className="list-block-wallet-inner">
                  <h3>
                    50,00 <span>CHF</span>
                  </h3>
                </div>
                <div className="list-block-wallet-inner">
                  <h3>
                    100,00 <span>CHF</span>
                  </h3>
                </div>
                <div className="list-block-wallet-inner">
                  <button>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00004 4.66807L1.33337 11.3347V14.668H4.66671L11.3334 8.00138M8.00004 4.66807L10.3905 2.27752L10.392 2.2761C10.721 1.94703 10.8859 1.78221 11.0759 1.72048C11.2433 1.66609 11.4235 1.66609 11.591 1.72048C11.7808 1.78217 11.9455 1.9468 12.274 2.2754L13.7239 3.72523C14.0539 4.05525 14.219 4.22033 14.2808 4.41061C14.3352 4.57798 14.3351 4.75826 14.2808 4.92563C14.219 5.11577 14.0542 5.2806 13.7246 5.61014L13.7239 5.61085L11.3334 8.00138M8.00004 4.66807L11.3334 8.00138"
                        stroke="#475467"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Charge now</span>
                  </button>
                </div>
              </div>
              <div className="last-btn">
                <button>
                  <svg
                    width="30"
                    height="26"
                    viewBox="0 0 30 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.66663 8.33594H17"
                      stroke="#292D32"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M7 19H9.66667"
                      stroke="#292D32"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M13 19H18.3333"
                      stroke="#292D32"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28.3333 13.0413V18.4813C28.3333 23.1613 27.1466 24.3346 22.4133 24.3346H7.58663C2.85329 24.3346 1.66663 23.1613 1.66663 18.4813V7.5213C1.66663 2.8413 2.85329 1.66797 7.58663 1.66797H17"
                      stroke="#292D32"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g opacity="0.4">
                      <path
                        d="M21 5.33594H28.3333"
                        stroke="#292D32"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M24.6666 9.0013V1.66797"
                        stroke="#292D32"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </g>
                  </svg>
                  <span>Charge now</span>
                </button>
              </div>
            </div>
            <div className="common-cart-pages-block-left-inner">
              <div className="wallet-title">
                <svg
                  width="30"
                  height="26"
                  viewBox="0 0 30 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66663 8.33594H17"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M7 19H9.66667"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M13 19H18.3333"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.3333 13.0413V18.4813C28.3333 23.1613 27.1466 24.3346 22.4133 24.3346H7.58663C2.85329 24.3346 1.66663 23.1613 1.66663 18.4813V7.5213C1.66663 2.8413 2.85329 1.66797 7.58663 1.66797H17"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g opacity="0.4">
                    <path
                      d="M21 5.33594H28.3333"
                      stroke="#292D32"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M24.6666 9.0013V1.66797"
                      stroke="#292D32"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
                <h2>Automatic charging</h2>
              </div>
              <div className="wallet-top-block">
                <div className="wallet-top-block-left">
                  <p>Aufladen wenn Guthaben unter</p>
                </div>
                <div className="wallet-top-block-right">
                  <h2 className="chf-wallet">
                    20,00 <span>CHF</span>
                  </h2>
                </div>
              </div>
              <div className="list-block-wallet">
                <div className="list-block-wallet-inner">
                  <h3>
                    20,00 <span>CHF</span>
                  </h3>
                </div>
                <div className="list-block-wallet-inner">
                  <h3>
                    50,00 <span>CHF</span>
                  </h3>
                </div>
                <div className="list-block-wallet-inner">
                  <h3>
                    100,00 <span>CHF</span>
                  </h3>
                </div>
                <div className="list-block-wallet-inner">
                  <button>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00004 4.66807L1.33337 11.3347V14.668H4.66671L11.3334 8.00138M8.00004 4.66807L10.3905 2.27752L10.392 2.2761C10.721 1.94703 10.8859 1.78221 11.0759 1.72048C11.2433 1.66609 11.4235 1.66609 11.591 1.72048C11.7808 1.78217 11.9455 1.9468 12.274 2.2754L13.7239 3.72523C14.0539 4.05525 14.219 4.22033 14.2808 4.41061C14.3352 4.57798 14.3351 4.75826 14.2808 4.92563C14.219 5.11577 14.0542 5.2806 13.7246 5.61014L13.7239 5.61085L11.3334 8.00138M8.00004 4.66807L11.3334 8.00138"
                        stroke="#475467"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span>Charge now</span>
                  </button>
                </div>
              </div>
              <div className="last-btn">
                <button>
                  <span>Start setup</span>
                </button>
              </div>
            </div>
          </div>
          <div className="common-cart-pages-block-right">
            <div className="common-cart-pages-block-right-inner height-full">
              <div className="title-trans">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 4.5V20.5L4 15"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 20.5V4.5L20 10"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h2>Transactions</h2>
              </div>
              <div className="transition-block">
                <div className="transition-block-inner down-transition">
                  <div className="transition-block-inner-left ">
                    <div className="transition-icon">
                      <img alt="" src="/down-arrow-tra.svg" />
                    </div>
                    <h3>12/ 07 /2024</h3>
                  </div>
                  <div className="transition-block-inner-right">
                    <h2>-€5,00</h2>
                  </div>
                </div>
                <div className="transition-block-inner ">
                  <div className="transition-block-inner-left ">
                    <div className="transition-icon">
                      <img alt="" src="/up-arrow-tra.svg" />
                    </div>
                    <h3>12/ 07 /2024</h3>
                  </div>
                  <div className="transition-block-inner-right">
                    <h2>+€5,00</h2>
                  </div>
                </div>
                <div className="transition-block-inner ">
                  <div className="transition-block-inner-left ">
                    <div className="transition-icon">
                      <img alt="" src="/up-arrow-tra.svg" />
                    </div>
                    <h3>12/ 07 /2024</h3>
                  </div>
                  <div className="transition-block-inner-right">
                    <h2>+€5,00</h2>
                  </div>
                </div>
                <div className="transition-block-inner ">
                  <div className="transition-block-inner-left ">
                    <div className="transition-icon">
                      <img alt="" src="/up-arrow-tra.svg" />
                    </div>
                    <h3>12/ 07 /2024</h3>
                  </div>
                  <div className="transition-block-inner-right">
                    <h2>+€5,00</h2>
                  </div>
                </div>
                <div className="transition-block-inner ">
                  <div className="transition-block-inner-left ">
                    <div className="transition-icon">
                      <img alt="" src="/up-arrow-tra.svg" />
                    </div>
                    <h3>12/ 07 /2024</h3>
                  </div>
                  <div className="transition-block-inner-right">
                    <h2>+€5,00</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonPagesBlock>
    </div>
  );
};

export default Wallet;
