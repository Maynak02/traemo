// components/Button.js
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  padding: 26px 32px;
  border-bottom: 1px solid rgba(208, 213, 221, 0.6);
  justify-content: space-between;
  @media (max-width: 1199px) {
    padding: 20px;
  }
  .header-left {
    display: flex;
    align-items: center;
    .logo-header {
      padding-right: 32px;
      img {
        width: 135px;
        @media (max-width: 767px) {
          width: 90px;
        }
      }
    }
    .map-header {
      padding-right: 32px;
      @media (max-width: 767px) {
        display: none;
      }
      .map-header-link {
        display: flex;
        align-items: center;
        padding: 11px 16px;
        border: 1px solid rgba(208, 213, 221, 0.6);
        box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
          0px 1px 2px rgba(16, 24, 40, 0.06);
        /* background-color: #f9c93c; */
        border-radius: 12px;
        cursor: pointer;
        p {
          font-weight: 400;
          font-size: 14px;
          /* color: #fff; */
          padding: 0px 5px 0px 8px;
          overflow: hidden !important;
          text-overflow: ellipsis;
        }
        .arrow-icon {
          width: 26px;
        }
      }
    }
    .toggle-header {
      margin-right: 20px;
      @media (max-width: 1199px) {
        display: none;
      }
      .toggle-header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 11px 16px;
        border: 1px solid rgba(208, 213, 221, 0.6);
        border-radius: 8px;
        box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
          0px 1px 2px rgba(16, 24, 40, 0.06);
        p {
          padding-right: 8px;
          color: #667085;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .toggle-bar-block {
      display: none;
      @media (max-width: 767px) {
        display: block;
      }
      button {
        span {
          display: block;
          width: 18px;
          height: 2px;
          border-radius: 10px;
          background-color: #000;
          margin-bottom: 5px;
          &:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
    .header-right-cart {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 32px;
      position: relative;
      cursor: pointer;
      padding: 11px 16px;
      border: 1px solid rgba(208, 213, 221, 0.6);
      border-radius: 8px;
      box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
        0px 1px 2px rgba(16, 24, 40, 0.06);
      @media (max-width: 767px) {
        position: fixed;
        bottom: 24px;
        left: 0px;
        right: 0px;
        z-index: 9;
        margin: 0px 15px;
        border-radius: 30px;
        justify-content: space-between;
        background-color: #ffffff;
        box-shadow: 0px 3px 16px 6px rgba(148, 163, 184, 0.3);
      }
      .header-right-cart-link-left {
        display: flex;
        align-items: center;
      }
      p {
        padding: 0px 12px;
        font-weight: 700;
        font-size: 14px;
        color: #12b76a;
      }
      .arrow-icon {
        width: 26px;
      }
      .cart-dropdown {
        position: absolute;
        width: 455px;
        border: 1px solid rgba(208, 213, 221, 0.6);
        box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
        z-index: 9;
        background-color: #fff;
        border-radius: 12px;
        top: 74px;
        right: 0px;
        display: none;
        @media (max-width: 767px) {
          position: fixed;
          bottom: 24px;
          left: 0px;
          right: 0px;
          z-index: 99;
          margin: 0px 15px;
          border-radius: 30px;
          justify-content: space-between;
          background-color: #ffffff;
          box-shadow: 0px 3px 6px rgba(148, 163, 184, 0.3);
        }
        .cart-dropdown-inner {
          padding: 32px 24px;
          .cart-footer {
            padding: 24px 12px 0px 12px;
            .btn-footer {
              width: 100%;
              display: flex;
              align-items: center;
              border: none;
              background-color: #f9c93c;
              border-radius: 30px;
              padding: 16px;
              justify-content: center;
              outline: none;
              box-shadow: none;
              p {
                font-size: 14px;
                color: #fff;
                font-weight: 600;
                padding: 0px 8px;
              }
              h4 {
                font-size: 18px;
                color: #fff;
                font-weight: 600;
              }
            }
          }
          .cart-dropdown-inner-top {
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(208, 213, 221, 0.6);
            padding-bottom: 16px;
            h5 {
              font-size: 16px;
              padding-left: 8px;
              color: #000;
            }
          }
          .cart-dropdown-block {
            .cart-dropdown-block-inner {
              height: 274px;
              overflow-y: auto;
              .cart-dropdown-block-inner-block {
                padding: 20px 0px;
                border-bottom: 1px solid rgba(208, 213, 221, 0.6);
                display: flex;
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
                  width: 75%;
                  justify-content: space-between;
                  .cart-block-left {
                    width: 70%;
                    h5 {
                      color: #000;
                      font-weight: 500;
                      font-size: 18px;
                      margin-bottom: 8px;
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
                      color: #f9c93c;
                      font-weight: 600;
                      font-size: 18px;
                    }
                    input {
                      width: 75px;
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
            }
          }
        }
      }
    }
    .header-right-dropdwon {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 11px 16px;
      border: 1px solid rgba(208, 213, 221, 0.6);
      border-radius: 8px;
      box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
        0px 1px 2px rgba(16, 24, 40, 0.06);
      @media (max-width: 767px) {
        display: none;
      }
      p {
        padding: 0px 12px 0px 0px;
        font-weight: 600;
        font-size: 14px;
        color: #344054;
        @media (max-width: 991px) {
          width: 100px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      .arrow-icon {
        width: 26px;
      }
    }
  }
  .cart-dropdown-mobile {
    position: absolute;
    top: 85px;
    right: 215px;
    z-index: 9;
    @media (max-width: 767px) {
      position: fixed;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99;
      background: rgba(0, 0, 0, 0.7);
      top: 0px;
      left: 0px;
    }
  }
  .cart-dropdown {
    /* position: absolute; */
    width: 455px;
    border: 1px solid rgba(208, 213, 221, 0.6);
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
    z-index: 9;
    background-color: #fff;
    border-radius: 12px;
    /* top: 85px;
    right: 215px; */
    @media (max-width: 767px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 95%;
    }
    .cart-dropdown-inner {
      padding: 24px 24px;
      @media (max-width: 767px) {
        padding: 15px;
      }
      .cart-footer {
        padding: 24px 12px 0px 12px;
        .btn-footer {
          width: 100%;
          display: flex;
          align-items: center;
          border: none;
          background-color: #f9c93c;
          border-radius: 30px;
          padding: 16px;
          justify-content: center;
          outline: none;
          box-shadow: none;
          p {
            font-size: 14px;
            color: #fff;
            font-weight: 600;
            padding: 0px 8px;
          }
          h4 {
            font-size: 18px;
            color: #fff;
            font-weight: 600;
          }
        }
      }
      .cart-dropdown-inner-top {
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(208, 213, 221, 0.6);
        padding-bottom: 16px;
        h5 {
          font-size: 16px;
          padding-left: 8px;
          color: #000;
        }
      }
      .cart-dropdown-block {
        .cart-dropdown-block-inner {
          max-height: 500px;
          overflow-y: auto;
          @media (max-width: 767px) {
            max-height: 230px;
          }
          .cart-dropdown-block-inner-block {
            padding: 20px 0px;
            border-bottom: 1px solid rgba(208, 213, 221, 0.6);
            display: flex;
            @media (max-width: 767px) {
              padding: 10px 0px;
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
              width: 75%;
              justify-content: space-between;
              .cart-block-left {
                width: 70%;
                h5 {
                  color: #000;
                  font-weight: 500;
                  font-size: 18px;
                  margin-bottom: 8px;
                  @media (max-width: 767px) {
                    font-size: 16px;
                  }
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
                width: 50%;
                display: flex;
                align-items: flex-end;
                flex-direction: column;
                h3 {
                  color: #f9c93c;
                  font-weight: 600;
                  font-size: 16px;
                  @media (max-width: 767px) {
                    font-size: 14px;
                  }
                }
                input {
                  width: 75px;
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
        }
      }
    }
  }
  .sidebar-block {
    background-color: rgba(0, 0, 0, 0.45);
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 100%;
    width: 100%;
    z-index: 99;
    display: none;
    @media (max-width: 767px) {
      /* display: block; */
    }
    .sidebar-block-inner {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 100%;
      background: #fff;
      z-index: 99;
      width: 290px;
      padding: 32px 16px;
      .logo-close-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        .logo-block {
          img {
            width: 90px;
          }
        }
        .close-icon-block {
          button {
            padding: 0px;
            background: transparent;
            border: none;
            outline: none;
            box-shadow: none;
            img {
              width: 20px;
            }
          }
        }
      }
      .map-header {
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(208, 213, 221, 0.6);
        .map-header-link {
          display: flex;
          align-items: center;
          padding: 10px 0px;
          p {
            font-size: 14px;
            line-height: 17px;
            color: #000;
            padding-left: 8px;
            word-break: break-all;
          }
        }
      }
      .profile-block-inner {
        ul {
          li {
            border: 1px solid transparent;
            border-radius: 8px;
            a {
              border: 1px solid rgba(208, 213, 221, 0.6);
              background: transparent !important;
            }
          }
        }
      }
    }
  }
  .loader {
    border: 2px solid #f3f3f3; /* Light grey */
    border-top: 2px solid #ffffff; /* White */
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Header;
