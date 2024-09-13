"use client";
import CardList from "@/components/CardList";
import CategoryTabs from "@/components/CategoryTabs";
import DashboardHeader from "@/components/DashboardHeader";
import SubCategoryTabs from "@/components/SubCategoryTabs";
import React, { useMemo, useState } from "react";

const CustomerDashboard = () => {
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
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[58px] box-border gap-3 leading-[normal] tracking-[normal]">
      {/* Header Start */}
      <DashboardHeader />
      {/* Header End */}
      <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full px-8">
        <div className="flex flex-row items-start justify-start gap-2 mq1000:flex-wrap text-xs text-gray-400">
          <CategoryTabs />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center pt-1 px-8 w-[100%] relative">
          <span className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] border-b-[0.5px] border-gray-300"></span>
        </div>

        <div className="flex flex-row items-start justify-start gap-2 mq1000:flex-wrap text-xs text-gray-400">
          <SubCategoryTabs />
        </div>
      </div>
      <div className="self-stretch bg-gray-25 border-gray-300 border-b-[0.5px] border-solid overflow-hidden flex flex-col items-start justify-center pt-2 px-8" />
      {/* Lines */}
      <main className="self-start flex flex-row items-start justify-end py-0 pl-10 pr-10 box-border max-w-full">
        <section className="items-center justify-start max-w-full">
          {/* Product List */}
          <div className="flex-1 flex-row items-center justify-start gap-8 max-w-full grid grid-cols-6">
            {productList.map((item) => {
              return (
                <CardList
                  key={item.productid}
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
    </div>
  );
};

export default CustomerDashboard;
