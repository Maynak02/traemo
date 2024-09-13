"use client";
import React, { useMemo } from "react";
import { ChevronDown, MapPin, ShoppingCart, User } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";

const Productdetail = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="w-[150px] h-[150px]">
            <div className="bg-white p-2 rounded-lg shadow mb-4">
              <img
                src="https://i.ibb.co/Ltth3hP/grilled-cheese-hd-food-1366x768.jpg"
                alt="Thumbnail"
                className="w-full rounded"
              />
            </div>
            <div className="bg-white p-2 rounded-lg shadow mb-4">
              <img
                src="https://i.ibb.co/Ltth3hP/grilled-cheese-hd-food-1366x768.jpg"
                alt="Thumbnail"
                className="w-full rounded"
              />
            </div>
            <div className="bg-white p-2 rounded-lg shadow mb-4">
              <img
                src="https://i.ibb.co/Ltth3hP/grilled-cheese-hd-food-1366x768.jpg"
                alt="Thumbnail"
                className="w-full rounded"
              />
            </div>
            <div className="bg-white p-2 rounded-lg shadow mb-4">
              <img
                src="https://i.ibb.co/Ltth3hP/grilled-cheese-hd-food-1366x768.jpg"
                alt="Thumbnail"
                className="w-full rounded"
              />
            </div>
          </div>

          <div className="w-[600px]">
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="" alt="Product" className="w-full rounded" />
            </div>
          </div>

          <div className="w-1/4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-2">Käsebrötchen -500g</h2>
              <p className="text-gray-600 mb-4">12 Pieces</p>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-yellow-400 mr-2">
                  3.50 CHF
                </span>
                <span className="text-gray-500 line-through">3.50 CHF</span>
              </div>
              <button className="bg-yellow-400 text-white w-full py-3 rounded-full font-semibold mb-4">
                + Add to cart
              </button>
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                  Produktinformation
                  <ChevronDown className="w-5 h-5" />
                </h3>
                <h4 className="font-semibold mb-2">Beschreibung</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Unsere Käsebrötchen sind eine köstliche Kombination aus
                  luftigem, frischem Teig und herzhaftem Käse. Sie sind ideal
                  als Snack zwischendurch, zum Frühstück oder als Beilage zu
                  Suppen und Salaten.
                </p>
                <h4 className="font-semibold mb-2">Zutaten</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Zutaten</span>
                    <span>30%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Fruchtsorte</span>
                    <span>14%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>weitere Fruchtsorte</span>
                    <span>10%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Haselnüsse</span>
                    <span>15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Productdetail;
