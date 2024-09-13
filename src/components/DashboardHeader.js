import { useCallback, useRef, useEffect } from "react";
import React, { useMemo, useState } from "react";
import Toggle from "./toggle";
import PropTypes from "prop-types";
import Link from "next/link";
import Modal from "react-modal";
import Header from "@/components/styles/header.style";
const DashboardHeader = ({ className = "" }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const cartDropdownRef = useRef(null);

  const openProfileDropdown = useCallback(() => {
    setProfileDropdownOpen(true);
  }, []);

  const openCartDropdown = useCallback(() => {
    setCartDropdownOpen(true);
  }, []);

  const closeProfileDropdown = useCallback(() => {
    setProfileDropdownOpen(false);
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
              <Link href="/customer/wallet">
                <img alt="logo" src="/image-1@2x.png" />
              </Link>
            </div>
            <div className="map-header">
              <div className="map-header-link" onClick={openModal}>
                <img alt="" src="/location.svg" />
                <p>Enter your delivery address</p>
                <img className="arrow-icon" alt="" src="/chevrondown@2x.png" />
              </div>
            </div>
            <div className="toggle-header">
              <div className="toggle-header-inner  shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)]">
                <p>Subscription</p>
                <Toggle />
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="header-right-cart" onClick={openCartDropdown}>
              <img alt="" src="/frame.svg" />
              <p>€23,65</p>
              <img className="arrow-icon" alt="" src="/chevrondown-1@2x.png" />

              {/* <div className="cart-dropdown">
                <div className="cart-dropdown-inner">
                  <div className="cart-dropdown-inner-top">
                    <img alt="" src="/frame.svg"></img>
                    <h5>Wagen</h5>
                  </div>
                  <div className="cart-dropdown-block">
                    <div className="cart-dropdown-block-inner">
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
                    <button className="btn btn-footer">
                      <img alt="" src="/cart-img.svg" />
                      <p>Proceed to Checkout</p>
                      <h4>€8,00</h4>
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
            <div
              className="header-right-dropdwon"
              onClick={openProfileDropdown}
            >
              <p>Anwar Raza</p>
              <img className="arrow-icon" alt="" src="/chevrondown-2.svg" />
            </div>
          </div>
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
                <h2>Enter your address</h2>
                <p>Have all your favorite products delivered to your home.</p>
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="search-address">
                <h3>Please select your address</h3>
                <form>
                  <div className="form-group">
                    <button>
                      <img src="/search-icon.svg" alt="Traemo" />
                    </button>
                    <input
                      type="text"
                      className=""
                      placeholder="Adresse eingeben..."
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      {/* <header
        className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-sm text-white font-text-sm-medium ${className}`}>
        <div className='self-stretch flex flex-col items-start justify-start gap-4 max-w-full'>
          <div className='self-stretch bg-white border-gray-300 border-b-[0.5px] border-solid box-border flex flex-row items-center justify-between pt-[26px] px-8 pb-[25px] max-w-full gap-5 mq1050:flex-wrap'>
            <div className='flex flex-row items-center justify-start gap-8 max-w-full mq725:gap-4 mq725:flex-wrap'>
              <img className='h-10 w-[135.2px] relative object-cover' loading='lazy' alt='' src='/image-1@2x.png' />
              <div className='bg-theme shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] rounded-lg bg-primary-500 border-gray-300 border-[0.5px] border-solid overflow-x-auto flex flex-row items-center justify-center py-[11px] px-[15px] gap-2'>
                <img className='h-6 w-6 relative overflow-hidden shrink-0' loading='lazy' alt='' src='/location.svg' />
                <div className='relative leading-[20px] font-medium'>Geben Sie Ihre Lieferadresse ein</div>
                <img
                  className='h-5 w-5 relative shrink-0 object-contain'
                  loading='lazy'
                  alt=''
                  src='/chevrondown@2x.png'
                />
                <img className='h-5 w-5 relative overflow-hidden shrink-0 hidden' alt='' src='/chevrondown1.svg' />
              </div>
              <div className='shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] rounded-lg bg-white border-gray-300 border-[0.5px] border-solid overflow-hidden flex flex-row items-center justify-center py-[11px] px-[15px] gap-2 text-gray-500'>
                <a className='[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[87px]'>
                  Abonnement
                </a>
                <Toggle />
                <img
                  className='h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]'
                  alt=''
                  src='/chevrondown1.svg'
                />
              </div>
            </div>
            <div className='flex flex-row items-center justify-start gap-[9px] text-success-500'>
              <div className='shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] rounded-lg bg-white border-gray-300 border-[0.5px] border-solid overflow-x-auto flex flex-row items-center justify-center py-[11px] px-[15px] gap-3'>
                <img className='h-6 w-6 relative overflow-hidden shrink-0' loading='lazy' alt='' src='/frame.svg' />
                <div className='relative leading-[20px] font-semibold inline-block min-w-[49px] whitespace-nowrap text-[inherit] text-black'>
                  €23,65
                </div>
                <img className='h-5 w-5 relative shrink-0 object-contain' alt='' src='/chevrondown-1@2x.png' />
                <img className='h-5 w-5 relative overflow-hidden shrink-0 hidden' alt='' src='/chevrondown1.svg' />
              </div>
              <div
                className='shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] rounded-lg bg-white border-gray-300 border-[0.5px] border-solid overflow-hidden flex flex-row items-center justify-center py-[11px] px-[15px] gap-2 cursor-pointer text-gray-700'
                onClick={openProfileDropdown}>
                <div className='relative leading-[20px] font-medium inline-block min-w-[80px]'>Anwar Raza</div>
                <img className='h-5 w-5 relative min-h-[20px]' alt='' src='/chevrondown-2.svg' />
                <img
                  className='h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]'
                  alt=''
                  src='/chevrondown1.svg'
                />
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {isCartDropdownOpen && (
        <div className="header-right-cart" onClick={openCartDropdown}>
          <img alt="" src="/frame.svg" />
          <p>€23,65</p>
          <img className="arrow-icon" alt="" src="/chevrondown-1@2x.png" />

          <div className="cart-dropdown">
            <div className="cart-dropdown-inner">
              <div className="cart-dropdown-inner-top">
                <img alt="" src="/frame.svg"></img>
                <h5>Wagen</h5>
              </div>
              <div className="cart-dropdown-block">
                <div className="cart-dropdown-block-inner">
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
                <button className="btn btn-footer">
                  <img alt="" src="/cart-img.svg" />
                  <p>Proceed to Checkout</p>
                  <h4>€8,00</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isProfileDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-40 right-8 top-20 w-64 bg-white rounded-lg px-4 shadow-[0px_1px_3px_rgba(16,_24,_40,_0.3),_0px_1px_2px_rgba(16,_24,_40,_0.06)]"
        >
          <ul className="py-4">
            <Link href="/customer/wallet">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_wallet.svg" />
                <span className="font-inter text-black text-[16px]">
                  Jetzt aufladen
                </span>
                <span className="text-green-500 font-semibold">€0</span>
              </li>
            </Link>
            <Link href="/customer/profile">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_profile.svg" />
                <span className="font-inter text-black text-[16px]">
                  Profil
                </span>
              </li>
            </Link>
            <Link href="/customer/standingorders">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_premium.svg" />
                <span className="font-inter text-black text-[16px]">
                  Dauerbestellungen
                </span>
              </li>
            </Link>
            <Link href="/customer/address">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_address.svg" />
                <span className="font-inter text-black text-[16px]">
                  Adressen
                </span>
              </li>
            </Link>

            <Link href="/customer/history">
              <li className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 mb-2 hover:border hover:border-borderbackground rounded-md border border-transparent">
                <img className="h-6 w-6" src="/images/ic_history.svg" />
                <span className="font-inter text-black text-[16px]">
                  Bestellhistorie
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
