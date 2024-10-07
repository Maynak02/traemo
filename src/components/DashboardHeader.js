import { useCallback, useRef, useEffect } from "react";
import React, { useMemo, useState } from "react";
import Toggle from "./toggle";
import PropTypes from "prop-types";
import Link from "next/link";
import Modal from "react-modal";
import Header from "@/components/styles/header.style";
import { useTranslation } from "react-i18next";

import { useRouter } from "next/navigation";

const DashboardHeader = ({ className = "" }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const { t } = useTranslation("common");

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const dropdownRef = useRef(null);
  const cartDropdownRef = useRef(null);

  const openProfileDropdown = useCallback(() => {
    setProfileDropdownOpen(true);
  }, []);

  const openCartDropdown = useCallback(() => {
    setCartDropdownOpen(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target)
      ) {
        setCartDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartDropdownRef]);

  return (
    <>
      <div className="">
        <Header>
          <div className="header-left">
            <div className="logo-header">
              <Link href="/customer/home">
                <img alt="logo" src="/image-1@2x.png" />
              </Link>
            </div>
            <div className="map-header">
              <div className="map-header-link" onClick={openModal}>
                <img alt="" src="/location.svg" />
                <p>{t("EnterDeliveryAddress")}</p>
                <img className="arrow-icon" alt="" src="/chevrondown@2x.png" />
              </div>
            </div>
            <div className="toggle-header">
              <div className="toggle-header-inner  shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]">
                <span className="mr-3 text-gray-700">{t("Subscription")}</span>
                <button
                  type="button"
                  aria-pressed={enabled ? "true" : "false"}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ${
                    enabled ? "bg-theme" : "bg-gray-300"
                  }`}
                  onClick={() => setEnabled(!enabled)}
                >
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="header-right-cart" onClick={openCartDropdown}>
              <img alt="" src="/frame.svg" />
              <p>€23,65</p>
              <img className="arrow-icon" alt="" src="/chevrondown-1@2x.png" />
            </div>

            <div
              className="header-right-dropdwon"
              onClick={openProfileDropdown}
            >
              <p>Anwar Raza</p>
              <img className="arrow-icon" alt="" src="/chevrondown-2.svg" />
            </div>
          </div>
          {isCartDropdownOpen && (
            <div className="cart-dropdown" ref={cartDropdownRef}>
              <div className="cart-dropdown-inner">
                <div className="cart-dropdown-inner-top">
                  <img alt="" src="/frame.svg"></img>
                  <h5>{t("Cart")}</h5>
                </div>
                <div className="cart-dropdown-block">
                  <div className="cart-dropdown-block-inner">
                    {/* array.map */}
                    <div className="cart-dropdown-block-inner-block">
                      <div className="img-block">
                        <img alt="" src="/cheeseball.png" />
                      </div>
                      <div className="cart-block">
                        <div className="cart-block-left">
                          <h5>Cheese Sandwiches</h5>
                          <p>12 Piece ( 500g )</p>
                        </div>
                        <div className="cart-price">
                          <h3>€3,00</h3>
                          <input type="text" placeholder="1"></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-footer">
                  <button
                    className="btn btn-footer"
                    onClick={() => {
                      router.push("/customer/cart");
                      console.log("Tap to buy");
                    }}
                  >
                    <img alt="" src="/cart-img.svg" />
                    <p>{t("ProceedToCheckout")}</p>
                    <h4>€8,00</h4>
                  </button>
                </div>
              </div>
            </div>
          )}
        </Header>
        <Modal
          isOpen={modalIsOpen}
          className="common-modal-block"
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div className="two-block-modal-inner">
            <div className="two-block-modal-inner-left">
              <div className="top-block-top">
                <h2>{t("EnterYourAddress")}</h2>
                <p>{t("DeliverAtHome")}</p>
              </div>
              <div className="top-block-bottom">
                <img src="/modal-product-img.png" alt="Traemo" />
              </div>
            </div>
            <div className="two-block-modal-inner-right">
              <div className="btn-close-block">
                <button onClick={closeModal}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#101828"
                      // stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="search-address">
                <h3>{t("SelectAddress")}</h3>
                <form>
                  <div className="form-group">
                    <button>
                      <img src="/search-icon.svg" alt="Traemo" />
                    </button>
                    <input
                      type="text"
                      className=""
                      placeholder={t("EnterAddress")}
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>

      {isProfileDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-40 right-8 top-[85px] w-[240px] bg-white border-[1px] br-[8px] rounded-lg px-4 shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
        >
          <ul className="py-4">
            <Link href="/customer/wallet">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_wallet.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("TopupNow")}
                </span>
                <span className="text-green-500 font-semibold">€0</span>
              </li>
            </Link>
            <Link href="/customer/profile">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_profile.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Profile")}
                </span>
              </li>
            </Link>
            <Link href="/customer/standingorders">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_premium.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("RecurringOrders")}
                </span>
              </li>
            </Link>
            <Link href="/customer/address">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_address.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("Addresses")}
                </span>
              </li>
            </Link>

            <Link href="/customer/history">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_history.svg" />
                <span className="font-inter text-black text-[16px]">
                  {t("OrderHistory")}
                </span>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

DashboardHeader.propTypes = {
  className: PropTypes.string,
};

export default DashboardHeader;
