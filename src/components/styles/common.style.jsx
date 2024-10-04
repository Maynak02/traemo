// components/Button.js
import styled from "styled-components";

const CommonPagesBlock = styled.div`
  position: relative;
  .dasborad-main {
    position: relative;
    .tabs-block {
      .react-tabs {
        .react-tabs__tab-list {
          margin: 0px 32px;
          padding: 16px 0px;
          border-bottom: 1px solid rgba(208, 213, 221, 0.6);
          .react-tabs__tab {
            border: none;
            padding: 0px;
            .tabs-block-link {
              display: flex;
              align-items: center;
              padding: 8px 16px;
              p {
                color: #98a2b3;
                font-size: 14px;
                padding-left: 8px;
              }
            }
            &.react-tabs__tab--selected {
              .tabs-block-link {
                border-bottom: 1px solid #ffc93c;
                svg {
                  path {
                    stroke: #ffc93c;
                  }
                }
                p {
                  color: #ffc93c;
                }
              }
            }
          }
        }
      }

      .tab-panel-block {
        .tab-panel-block-inner {
          .tab-button {
            padding: 12px 32px 16px 32px;
            border-bottom: 1px solid rgba(208, 213, 221, 0.6);
            button {
              padding: 12px 16px;
              font-size: 12px;
              line-height: 14px;
              color: #98a2b3;
              border: none;
              font-weight: 400;
              border-radius: 24px;
              transition: 0.5s;
              margin-right: 20px;
              &:hover {
                background-color: rgba(249, 201, 60, 0.15);
                color: #ffc93c;
                font-weight: 400;
              }
              &.active {
                background-color: rgba(249, 201, 60, 0.15);
                color: #ffc93c;
                font-weight: 400;
              }
            }
          }
          .tab-panel-custom {
            padding: 12px 32px;
          }
          .tab-panel-data-block {
            display: flex;
            flex-wrap: wrap;
            margin: 0px -12px;
            .tab-panel-data-block-main {
              width: 20%;
              position: relative;
              padding: 0px 12px 24px;
              .tab-panel-data-block-inner {
                background-color: #ffffff;
                box-shadow: 0px 3px 6px rgba(148, 163, 184, 0.3);
                border-radius: 12px;
                .block-img-tab {
                  width: 100%;
                  height: 266px;
                  position: relative;
                  > img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                  }
                }
                .block-content {
                  padding: 24px 12px 12px 12px;
                  display: flex;
                  align-items: center;
                  .block-content-left {
                    border-radius: 8px;
                    padding: 7px 8px;
                    border: 1px solid rgba(208, 213, 221, 0.6);
                    display: flex;
                    align-items: center;
                    margin-right: 12px;
                    h3 {
                      font-size: 18px;
                      line-height: 18px;
                      font-weight: 600;
                      color: #ffc93c;
                      &:last-child {
                        font-weight: 400;
                        font-size: 10px;
                        line-height: 10px;
                        text-transform: uppercase;
                        padding-left: 5px;
                      }
                    }
                  }
                  .block-content-right {
                    display: flex;
                    align-items: center;
                    h5 {
                      color: #667085;
                      font-weight: 600;
                      font-size: 14px;
                    }
                    h6 {
                      color: #667085;
                      padding-left: 2px;
                      font-size: 8px;
                      line-height: 8px;
                      font-weight: 400;
                      text-transform: uppercase;
                    }
                  }
                }
                .bottom-content {
                  padding: 12px 12px 24px 12px;
                  h3 {
                    font-size: 16px;
                    line-height: 20px;
                    color: #000;
                    font-weight: 700;
                    margin-bottom: 5px;
                  }
                  p {
                    color: #667085;
                    font-size: 12px;
                    line-height: 14px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .plus-icon {
      position: absolute;
      bottom: 160px;
      right: 20px;

      .add-icon-button {
        width: 52px;
        height: 52px;
        border-radius: 8px;
        background-color: #fff;
        border: 1px solid rgba(208, 213, 221, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
          0px 1px 2px rgba(16, 24, 40, 0.06);
      }
    }
    /* .block-img-tab {
      position: relative;
    } */
    /* .plus-icon {
      position: absolute;
      margin-top: 50;
      bottom: 0px;
      right: 12px;
      top: 50px;
      left: 10px;

      a {
        width: 52px;
        height: 52px;
        border-radius: 8px;
        background-color: #fff;
        border: 1px solid rgba(208, 213, 221, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
          0px 1px 2px rgba(16, 24, 40, 0.06);
      }
    } */
  }
  .product-details-main {
    position: relative;
    display: flex;
    padding: 32px;
    .product-details-main-left {
      width: 46%;
      padding-right: 15px;
      display: flex;
      .product-details-main-slider {
        width: 86%;
        padding: 0px 12px;
        .product-details-main-left-img {
          width: 100%;
          box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
            0px 1px 2px rgba(16, 24, 40, 0.06);
          height: 500px;
          padding: 16px;
          border: 1px solid rgba(208, 213, 221, 0.6);
          border-radius: 8px;
          .product-details-main-left-img-inner {
            background-color: #f8f8f8;
            padding: 16px;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            border-radius: 12px;
            justify-content: center;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      }
      .product-details-main-thumbnail {
        width: 110px;
        padding: 0px 0px;
        .product-details-main-left-thumbnail {
          width: 110px;
          height: 110px;
          display: flex;
          align-items: center;
          border-radius: 8px;
          justify-content: center;
          border: 1px solid rgba(208, 213, 221, 0.6);
          padding: 12px;
          margin-bottom: 12px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
    .product-details-main-right {
      width: 56%;
      padding-left: 15px;
      margin-left: 10px;
      .product-details-main-right-inner {
        .product-details-main-right-inner-top {
          padding: 32px 20px;
          border: 1px solid rgba(208, 213, 221, 0.6);
          border-radius: 12px;
          box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
            0px 1px 2px rgba(16, 24, 40, 0.06);
          .product-top-block {
            display: flex;
            justify-content: space-between;
            margin-bottom: 32px;
            .product-top-block-left {
              /* display: flex; */
              h2 {
                font-size: 32px;
                line-height: 40px;
                color: #000;
                font-weight: 700;
                margin-bottom: 10px;
              }
              p {
                color: #667085;
                font-size: 18px;
                line-height: 14px;
              }
            }
            .block-content {
              display: flex;
              align-items: center;
              .block-content-left {
                border-radius: 8px;
                padding: 7px 8px;
                border: 1px solid rgba(208, 213, 221, 0.6);
                display: flex;
                align-items: center;
                margin-right: 12px;
                h3 {
                  font-size: 28px;
                  line-height: 28px;
                  font-weight: 600;
                  color: #ffc93c;
                  &:last-child {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 14px;
                    text-transform: uppercase;
                    padding-left: 5px;
                  }
                }
              }
              .block-content-right {
                display: flex;
                align-items: center;
                h5 {
                  color: #667085;
                  font-weight: 600;
                  font-size: 18px;
                }
                h6 {
                  color: #667085;
                  padding-left: 2px;
                  font-size: 10px;
                  line-height: 10px;
                  font-weight: 400;
                  text-transform: uppercase;
                }
              }
            }
          }
          .add-to-cart {
            margin-bottom: 32px;
            .common-btn {
              width: 100%;
              padding: 20px;
              background-color: #ffc93c;
              border-radius: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              border: none;
              span {
                color: #fff;
                padding-left: 10px;
                font-weight: 600;
                font-size: 18px;
                line-height: 20px;
              }
            }
          }
          .accordian-block {
            .accordion {
              border: none;
              border-radius: 0px;
              .accordion__item {
                .accordion__heading {
                  .accordion__button {
                    background: none;
                    border: none;
                    position: relative;
                    padding: 16px;
                    font-size: 22px;
                    line-height: 26px;
                    color: #000;
                    &::before {
                      position: absolute;
                      right: 16px;
                      top: 24px;
                    }
                  }
                }
                .accordion__panel {
                  padding: 10px 20px;
                  .accordion__button[aria-expanded="true"]::before,
                  .accordion__button[aria-selected="true"]::before {
                    transform: rotate(-135deg);
                  }
                  .accordian-block-data-inner {
                    padding: 12px;
                    border: 1px solid rgba(208, 213, 221, 0.6);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    h3 {
                      color: #000;
                      font-weight: 600;
                      font-size: 18px;
                      line-height: 24px;
                      margin-bottom: 12px;
                    }
                    p {
                      color: #667085;
                      font-size: 14px;
                      line-height: 16px;
                    }
                    &.diff-pad {
                      p {
                        padding: 8px;
                        display: flex;
                        justify-content: space-between;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .common-cart-pages-block {
    padding: 32px;
    display: flex;
    .common-cart-pages-block-left {
      padding: 0px 15px 0px 30px;
      width: 50%;
      .title-left {
        padding: 32px 10px;
        h2 {
          font-size: 22px;
          line-height: 28px;
          color: #000;
          font-weight: 500;
        }
      }
      .top-shoping-title {
        padding: 24px 20px;
        border: 1px solid rgba(208, 213, 221, 0.6);
        border-radius: 12px;
        box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
          0px 1px 2px rgba(16, 24, 40, 0.06);
        margin-bottom: 32px;
        .top-shoping-title-inner {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          h2 {
            font-size: 22px;
            line-height: 28px;
            color: #000;
            font-weight: 500;
            padding-left: 12px;
          }
        }
        .btn-block {
          display: flex;
          margin: 0px -5px;
          .btn-block-inner {
            width: 50%;
            padding: 0px 5px;
            button {
              width: 100%;
              font-size: 14px;
              font-weight: 700;
              color: #000;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              border: 1px solid rgba(208, 213, 221, 0.6);
              border-radius: 30px;
              padding: 16px;
            }
            &:last-child {
              button {
                border-color: #fda29b;
                color: #d92d20;
              }
            }
          }
        }
      }
      .common-cart-pages-block-left-inner {
        padding: 32px 20px;
        border: 1px solid rgba(208, 213, 221, 0.6);
        border-radius: 12px;
        box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
          0px 1px 2px rgba(16, 24, 40, 0.06);
        margin-bottom: 32px;
        &.diff-shop-page {
          border: 2px dashed rgba(208, 213, 221, 0.6);
        }
        &:last-child {
          margin-bottom: 0px;
        }
        .label-block-days {
          margin-bottom: 32px;
          span {
            font-size: 16px;
            color: #175cd3;
            padding: 12px;
            border: 1px solid rgba(208, 213, 221, 0.6);
            background-color: #f5faff;
            border-radius: 8px;
          }
        }
        .top-block-cart {
          padding: 16px 12px;
          border: 1px solid rgba(208, 213, 221, 0.6);
          border-radius: 8px;
          margin-bottom: 32px;
          display: flex;
          .top-block-cart-left {
            width: 70%;
            h2 {
              color: #000;
              font-weight: 600;
              font-size: 32px;
              line-height: 40px;
              margin-bottom: 12px;
            }
            p {
              color: #667085;
              font-size: 18px;
              line-height: 20px;
              span {
                padding-left: 8px;
                color: #ffc93c;
              }
            }
          }
          .top-block-cart-right {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            width: 30%;
            img {
              width: 135px;
              height: 97px;
              object-fit: cover;
              border-radius: 8px;
            }
          }
        }
        .cart-dropdown-block-inner {
          margin-bottom: 32px;
          .title-inner-cart-block {
            position: relative;
            &::before {
              content: "";
              position: absolute;
              left: 0px;
              width: 56px;
              border: 1px dashed rgba(208, 213, 221, 0.6);
              height: 1px;
              top: 7px;
            }
            h4 {
              color: #667085;
              font-size: 12px;
              line-height: 20px;
              padding-left: 65px;
            }
          }
          .cart-dropdown-block-inner-block {
            padding: 20px 0px;
            display: flex;
            &:last-child {
              border: none;
            }
            .img-block {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 96px;
              height: 96px;
              border: 1px solid rgba(208, 213, 221, 0.6);
              padding: 10px;
              border-radius: 12px;
              > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
            .cart-block {
              display: flex;
              padding: 12px;
              width: 89%;
              justify-content: space-between;
              .cart-block-left {
                width: 70%;
                h5 {
                  color: #000;
                  font-weight: 500;
                  font-size: 22px;
                  margin-bottom: 10px;
                }
                p {
                  color: #667085;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 14px;
                  padding: 0px;
                }
              }
              .cart-price {
                width: 30%;
                display: flex;
                align-items: flex-end;
                flex-direction: column;
                h3 {
                  color: #027a48;
                  font-weight: 600;
                  font-size: 24px;
                  margin-bottom: 10px;
                }
                input {
                  width: 70px;
                  height: 34px;
                  border-radius: 8px;
                  border: 1px solid rgba(208, 213, 221, 0.6);
                  font-size: 14px;
                  line-height: 14px;
                  text-align: center;
                  outline: none;
                  color: #000;
                  font-weight: 500;
                  &::placeholder {
                    color: #000;
                  }

                  &::-ms-input-placeholder {
                    color: #000;
                  }
                }
              }
            }
          }
          .last-btn {
            button {
              padding: 17px 24px;
              border-radius: 30px;
              border: 1px solid rgba(208, 213, 221, 0.6);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              width: 100%;
              span {
                padding-left: 8px;
                font-size: 14px;
                font-weight: 500;
                color: #000;
              }
              svg {
                width: 24px;
              }
            }
          }
        }
        .cart-toal-block {
          padding: 16px 12px;
          border: 1px solid rgba(208, 213, 221, 0.6);
          border-radius: 8px;

          p {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            font-size: 18px;
            line-height: 22px;
            color: #667085;
            span {
              &:last-child {
                font-weight: 500;
              }
            }
          }
          .cart-total-bold {
            border-top: 1px solid rgba(208, 213, 221, 0.6);
            padding-top: 12px;
            p {
              margin-bottom: 0px;
              span {
                &:last-child {
                  font-weight: 500;
                  font-size: 24px;
                  line-height: 30px;
                  color: #027a4b;
                }
              }
            }
          }
        }
        .wallet-top-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(208, 213, 221, 0.6);
          margin-bottom: 32px;
          .wallet-top-block-left {
            width: 70%;
            h2 {
              font-size: 52px;
              line-height: 60px;
              font-weight: 600;
              color: #027a48;
              margin-bottom: 12px;
            }
            p {
              font-size: 18px;
              line-height: 22px;
              color: #667085;
            }
          }
          .wallet-top-block-right {
            width: 30%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            button {
              padding: 17px 24px;
              border-radius: 30px;
              border: 1px solid rgba(208, 213, 221, 0.6);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              img {
                width: 20px;
              }
              span {
                font-size: 14px;
                line-height: 14px;
                color: #000;
                font-weight: 500;
                padding-right: 8px;
              }
            }
            .chf-wallet {
              background-color: rgba(249, 201, 60, 0.1);
              border: 1px solid #ffc93c;
              color: #f79009;
              padding: 16px 24px;
              font-size: 22px;
              border-radius: 8px;
              display: flex;
              align-items: center;
              span {
                font-size: 10px;
                font-weight: 500;
                padding-left: 7px;
              }
            }
          }
        }
        .list-block-wallet {
          display: flex;
          flex-wrap: wrap;
          margin: 0px -4px 32px;
          .list-block-wallet-inner {
            width: 50%;
            padding: 0px 4px 8px;
            h3 {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 62px;
              border: 1px solid rgba(208, 213, 221, 0.6);
              border-radius: 12px;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              font-size: 18px;
              color: #027a48;
              span {
                padding-left: 8px;
                font-size: 10px;
                font-weight: 400;
              }
            }
            button {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 62px;
              border: 1px solid rgba(208, 213, 221, 0.6);
              border-radius: 12px;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              font-size: 18px;
              color: #027a48;
              width: 100%;
              span {
                padding-left: 8px;
                font-size: 14px;
                font-weight: 500;
                color: #667085;
              }
            }
          }
        }
        .last-btn {
          button {
            padding: 17px 24px;
            border-radius: 30px;
            border: 1px solid rgba(208, 213, 221, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
              0px 1px 2px rgba(16, 24, 40, 0.06);
            width: 100%;
            span {
              padding-left: 8px;
              font-size: 14px;
              font-weight: 500;
              color: #000;
            }
            svg {
              width: 24px;
            }
          }
        }
        .wallet-title {
          display: flex;
          margin-bottom: 32px;
          h2 {
            font-size: 22px;
            line-height: 30px;
            font-weight: 500;
            color: #000;
            padding-left: 12px;
          }
        }
      }
    }
    .common-cart-pages-block-right {
      width: 50%;
      padding: 0px 30px 0px 15px;

      .common-cart-pages-block-right-inner {
        padding: 16px 12px;
        border: 1px solid rgba(208, 213, 221, 0.6);
        border-radius: 8px;
        &.height-full {
          height: 100%;
        }
        .common-cart-search {
          position: relative;
          margin-bottom: 12px;
          input {
            border: 1px solid rgba(208, 213, 221, 0.6);
            height: 60px;
            width: 100%;
            padding: 20px 20px 20px 40px;
            font-size: 16px;
            line-height: 16px;
            border-radius: 8px;
            outline: none;
            color: #667085;
            font-weight: 500;
            &::placeholder {
              color: #667085;
            }
          }
          svg {
            position: absolute;
            top: 20px;
            left: 15px;
          }
        }
        .datepiker-block {
          height: 60px;
          width: 100%;
          border: 1px solid rgba(208, 213, 221, 0.6);
          border-radius: 8px;
          position: relative;
          svg {
            position: absolute;
            top: 16px;
            left: 10px;
          }
          .react-datepicker-wrapper {
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
            .react-datepicker__input-container {
              input {
                background: transparent;
                padding: 18px 20px 18px 40px;
                outline: none;
                border: none;
                font-size: 16px;
                line-height: 16px;
                color: #667085;
                font-weight: 500;
                &::placeholder {
                  color: #667085;
                }
              }
            }
          }
        }
        .tooltip-block-radio {
          padding-top: 32px;
          .tooltip-block-radio-top {
            display: flex;
            align-items: center;
            p {
              padding-left: 10px;
              color: #667085;
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
            }
          }
        }
        .radio-buttons-main {
          display: flex;
          margin-top: 18px;
          .radio-buttons {
            width: 16.66%;
            padding: 0px 5px;
            label {
              cursor: pointer;
              .radio-buttons-content {
                border: 1px solid rgba(208, 213, 221, 0.6);
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 500;
                height: 42px;
                color: #000;
              }
            }
            input[type="radio"]:checked + label {
              .radio-buttons-content {
                background-color: rgba(249, 201, 60, 0.2);
                border-color: #ffc93c;
                color: #ffc93c;
              }
            }
          }
        }
        .delivery-intruction-block {
          margin-top: 32px;
          position: relative;
          input {
            border: 1px solid rgba(208, 213, 221, 0.6);
            height: 60px;
            width: 100%;
            padding: 20px 40px 20px 20px;
            font-size: 16px;
            line-height: 16px;
            border-radius: 8px;
            outline: none;
            color: #667085;
            font-weight: 500;
            &::placeholder {
              color: #667085;
            }
          }
          button {
            position: absolute;
            top: 21px;
            background: none;
            padding: 0;
            border: none;
            outline: none;
            right: 15px;
          }
        }
        .add-to-cart {
          margin-top: 32px;
          .common-btn {
            width: 100%;
            padding: 20px;
            background-color: #ffc93c;
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            span {
              color: #fff;
              padding-left: 10px;
              font-weight: 500;
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
        .title-trans {
          display: flex;
          padding: 16px 8px 0px;
          align-items: center;
          margin-bottom: 32px;
          h2 {
            padding-left: 10px;
            font-size: 22px;
            line-height: 26px;
            color: #000;
            font-weight: 500;
          }
        }
        .transition-block {
          padding: 0px 8px;
          .transition-block-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            border-radius: 8px;
            padding: 12px;
            border: 1px solid rgba(208, 213, 221, 0.6);
            &.down-transition {
              .transition-block-inner-left {
                .transition-icon {
                  background-color: #fffbfa;
                }
              }
              .transition-block-inner-right {
                h2 {
                  color: #f04438;
                }
              }
            }
            .transition-block-inner-left {
              width: 50%;
              display: flex;
              align-items: center;
              .transition-icon {
                border: 1px solid rgba(208, 213, 221, 0.6);
                border-radius: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #f6fef9;
              }
              h3 {
                padding-left: 12px;
                font-weight: 400;
                font-size: 18px;
                color: #667085;
              }
            }
            .transition-block-inner-right {
              width: 50%;
              display: flex;
              align-items: flex-end;
              justify-content: flex-end;
              h2 {
                font-size: 24px;
                line-height: 28px;
                color: #027a48;
              }
            }
          }
        }
      }
    }
  }
  /* DatePicker Input */
  .react-datepicker__input-container input {
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 10px;
    font-size: 25px;
    border: 1px solid #ccc;
  }

  /* Calendar background */
  .react-datepicker {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Day styling */
  .react-datepicker__day {
    color: black;
    font-weight: bold;
    padding: 10px;
    border-radius: 25px;
    width: 50px;
    height: 50px;
  }

  /* Selected day */
  .react-datepicker__day--selected {
    background-color: #ffc93c;
    color: white;
  }

  /* Hover effect on day */
  .react-datepicker__day:hover {
    background-color: #ffc93c;
    color: white;
  }

  /* Navigation buttons */
  .react-datepicker__navigation {
    top: 0px;
    /* background-color: #ffc93c; */
    border-radius: 20px;
    width: 40px;
    height: 40px;
  }

  /* Month header */
  .react-datepicker__current-month {
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-around;
    background-color: #f0f0f0;
    padding: 10px;
  }

  .react-datepicker__day-name {
    font-weight: bold;
    color: black;
    font-size: 16px;
  }
`;

export default CommonPagesBlock;
