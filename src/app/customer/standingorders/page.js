
"use client";
import React, { useMemo, useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import CommonPagesBlock from '@/components/styles/common.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DatePicker from 'react-datepicker';
import Link from 'next/link';

import 'react-datepicker/dist/react-datepicker.css';
const StandingOrders = () => {
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
        <div className='common-cart-pages-block'>
          <div className='common-cart-pages-block-left'>
            <div className='top-shoping-title'>
              <div className='top-shoping-title-inner'>
                <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M26.812 16.0834L27.1176 12.8364C27.3576 10.2862 27.4776 9.01116 27.0413 8.48406C26.8053 8.19894 26.4844 8.02423 26.1413 7.9941C25.507 7.93839 24.7105 8.84517 23.1174 10.6587C22.2936 11.5966 21.8817 12.0656 21.4221 12.1382C21.1676 12.1784 20.9081 12.137 20.6729 12.0188C20.2486 11.8052 19.9657 11.2255 19.3998 10.066L16.4174 3.95444C15.3482 1.76346 14.8136 0.667969 14 0.667969C13.1864 0.667969 12.6517 1.76346 11.5825 3.95445L8.60005 10.066C8.03422 11.2255 7.7513 11.8052 7.32697 12.0188C7.09185 12.137 6.83241 12.1784 6.57778 12.1382C6.11825 12.0656 5.70632 11.5966 4.88245 10.6587C3.2894 8.84517 2.49286 7.93839 1.85861 7.9941C1.5155 8.02423 1.1946 8.19894 0.95861 8.48406C0.522356 9.01116 0.642356 10.2862 0.88237 12.8364L1.18796 16.0834C1.69149 21.4336 1.94326 24.1086 3.52008 25.7216C5.0969 27.3346 7.46018 27.3346 12.1868 27.3346H15.8132C20.5397 27.3346 22.903 27.3346 24.4798 25.7216C26.0566 24.1086 26.3084 21.4336 26.812 16.0834Z'
                    fill='#FAB300'
                  />
                  <path d='M10 22H18' stroke='url(#paint0_linear_850_2661)' stroke-width='1.5' stroke-linecap='round' />
                  <defs>
                    <linearGradient
                      id='paint0_linear_850_2661'
                      x1='10'
                      y1='22'
                      x2='10.2462'
                      y2='23.9692'
                      gradientUnits='userSpaceOnUse'>
                      <stop offset='0.269' stop-color='#FFA035' />
                      <stop offset='1' stop-color='#FFC93C' />
                    </linearGradient>
                  </defs>
                </svg>
                <h2>Standing orders</h2>
              </div>
              <div className='btn-block'>
                <div className='btn-block-inner'>
                  <button>Pause</button>
                </div>
                <div className='btn-block-inner'>
                  <button>Finish</button>
                </div>
              </div>
            </div>
            <div className='common-cart-pages-block-left-inner diff-shop-page'>
              <div className='label-block-days'>
                <span>Mondays</span>
              </div>
              <div className='cart-dropdown-block-inner'>
                <div className='title-inner-cart-block'>
                  <h4>Müller Bakery</h4>
                </div>
                <div className='cart-dropdown-block-inner-block'>
                  <div className='img-block'>
                    <img alt='' src='/cheeseball.png' />
                  </div>
                  <div className='cart-block'>
                    <div className='cart-block-left'>
                      <h5>Cheese Sandwiches</h5>
                      <p>12 Piece ( 500g )</p>
                    </div>
                    <div className='cart-price'>
                      <h3>€3,00</h3>
                      <input type='text' placeholder='1'></input>
                    </div>
                  </div>
                </div>
                <div className='title-inner-cart-block'>
                  <h4>Müller Bakery</h4>
                </div>
                <div className='cart-dropdown-block-inner-block'>
                  <div className='img-block'>
                    <img alt='' src='/cheeseball.png' />
                  </div>
                  <div className='cart-block'>
                    <div className='cart-block-left'>
                      <h5>Cheese Sandwiches</h5>
                      <p>12 Piece ( 500g )</p>
                    </div>
                    <div className='cart-price'>
                      <h3>€3,00</h3>
                      <input type='text' placeholder='1'></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className='last-btn'>
                <button>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M6 12H18M12 6V18'
                      stroke='black'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>

                  <span>Add more</span>
                </button>
              </div>
            </div>
            <div className='common-cart-pages-block-left-inner'>
              <div className='label-block-days'>
                <span>Mondays</span>
              </div>
              <div className='cart-dropdown-block-inner'>
                <div className='title-inner-cart-block'>
                  <h4>Müller Bakery</h4>
                </div>
                <div className='cart-dropdown-block-inner-block'>
                  <div className='img-block'>
                    <img alt='' src='/cheeseball.png' />
                  </div>
                  <div className='cart-block'>
                    <div className='cart-block-left'>
                      <h5>Cheese Sandwiches</h5>
                      <p>12 Piece ( 500g )</p>
                    </div>
                    <div className='cart-price'>
                      <h3>€3,00</h3>
                      <input type='text' placeholder='1'></input>
                    </div>
                  </div>
                </div>
                <div className='title-inner-cart-block'>
                  <h4>Müller Bakery</h4>
                </div>
                <div className='cart-dropdown-block-inner-block'>
                  <div className='img-block'>
                    <img alt='' src='/cheeseball.png' />
                  </div>
                  <div className='cart-block'>
                    <div className='cart-block-left'>
                      <h5>Cheese Sandwiches</h5>
                      <p>12 Piece ( 500g )</p>
                    </div>
                    <div className='cart-price'>
                      <h3>€3,00</h3>
                      <input type='text' placeholder='1'></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className='last-btn'>
                <button>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M6 12H18M12 6V18'
                      stroke='black'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>

                  <span>Add more</span>
                </button>
              </div>
            </div>
          </div>
          <div className='common-cart-pages-block-left'>
            <div className='title-left'>
              <h2>Next orders</h2>
            </div>
            <div className='common-cart-pages-block-left-inner'>
              <div className='label-block-days'>
                <span>Monday, July 15th, 2024</span>
              </div>
              <div className='cart-dropdown-block-inner'>
                <div className='top-block-cart'>
                  <div className='top-block-cart-left'>
                    <h2>Müller Bakery</h2>
                    <p>
                      Delivery by <span>9:00 am</span>
                    </p>
                  </div>
                  <div className='top-block-cart-right'>
                    <img alt='' src='/cart-img.png' />
                  </div>
                </div>
                <div className='title-inner-cart-block'>
                  <h4>Müller Bakery</h4>
                </div>
                <div className='cart-dropdown-block-inner-block'>
                  <div className='img-block'>
                    <img alt='' src='/cheeseball.png' />
                  </div>
                  <div className='cart-block'>
                    <div className='cart-block-left'>
                      <h5>Cheese Sandwiches</h5>
                      <p>12 Piece ( 500g )</p>
                    </div>
                    <div className='cart-price'>
                      <h3>€3,00</h3>
                      <input type='text' placeholder='1'></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cart-toal-block'>
                <p>
                  <span>Sum</span>
                  <span>€8,00</span>
                </p>
                <p>
                  <span>Delivery fees</span>
                  <span>€4,99</span>
                </p>
                <div className='cart-total-bold'>
                  <p>
                    <span>In total</span>
                    <span>€8,00</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='common-cart-pages-block-left-inner'>
              <div className='label-block-days'>
                <span>Monday, July 15th, 2024</span>
              </div>
              <div className='cart-dropdown-block-inner'>
                <div className='top-block-cart'>
                  <div className='top-block-cart-left'>
                    <h2>Müller Bakery</h2>
                    <p>
                      Delivery by <span>9:00 am</span>
                    </p>
                  </div>
                  <div className='top-block-cart-right'>
                    <img alt='' src='/cart-img.png' />
                  </div>
                </div>
                <div className='title-inner-cart-block'>
                  <h4>Müller Bakery</h4>
                </div>
                <div className='cart-dropdown-block-inner-block'>
                  <div className='img-block'>
                    <img alt='' src='/cheeseball.png' />
                  </div>
                  <div className='cart-block'>
                    <div className='cart-block-left'>
                      <h5>Cheese Sandwiches</h5>
                      <p>12 Piece ( 500g )</p>
                    </div>
                    <div className='cart-price'>
                      <h3>€3,00</h3>
                      <input type='text' placeholder='1'></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className='cart-toal-block'>
                <p>
                  <span>Sum</span>
                  <span>€8,00</span>
                </p>
                <p>
                  <span>Delivery fees</span>
                  <span>€4,99</span>
                </p>
                <div className='cart-total-bold'>
                  <p>
                    <span>In total</span>
                    <span>€8,00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonPagesBlock>
    </div>
  );
};

export default StandingOrders;
