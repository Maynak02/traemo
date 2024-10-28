// components/Button.js
import styled from "styled-components";

const CommonPagesBlock = styled.div`
  position: relative;
  .dasborad-main {
    position: relative;
    .tabs-block {
      .react-tabs {
        @media (max-width: 1199px) {
          overflow-x: scroll;
        }
        .react-tabs__tab-list {
          margin: 0px 32px;
          padding: 16px 0px;
          border-bottom: 0px solid rgba(208, 213, 221, 0.6);
          @media (max-width: 1400px) {
            margin: 0px 20px;
          }
          @media (max-width: 767px) {
            margin: 0px 15px;
          }
          @media (max-width: 1199px) {
            min-width: 1215px;
          }
          .react-tabs__tab {
            border: none;
            padding: 0px;
            @media (max-width: 1400px) {
              padding: 8px 13px;
            }
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
      .tabs-block-fixed {
        transition: 0.5s;
        &.scrolled {
          position: fixed;
          top: 0px;
          left: 0px;
          right: 0px;
          z-index: 9;
          width: 100%;
          transition: 0.5s;
          background-color: #fff;
        }
      }
      /* .react-tabs {
        @media (max-width: 1199px) {
          overflow-x: scroll;
        }
        .react-tabs__tab-list {
          margin: 0px 32px;
          padding: 16px 0px;
          border-bottom: 0px solid rgba(208, 213, 221, 0.6);
          @media (max-width: 1400px) {
            margin: 0px 20px;
          }
          @media (max-width: 767px) {
            margin: 0px 15px;
          }
          @media (max-width: 1199px) {
            min-width: 1215px;
          }
          .react-tabs__tab {
            border: none;
            padding: 0px;
            .tabs-block-link {
              display: flex;
              align-items: center;
              padding: 8px 16px;
              @media (max-width: 1400px) {
                padding: 8px 13px;
              }
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
      } */

      .tab-panel-block {
        .tab-panel-block-inner {
          .tab-button {
            padding: 12px 32px 16px 32px;
            border-bottom: 1px solid rgba(208, 213, 221, 0.6);
            transition: 0.5s;
            &.scrolled {
              position: fixed;
              top: 70px;
              left: 0px;
              right: 0px;
              z-index: 9;
              width: 100%;
              transition: 0.5s;
              background-color: #fff;
              box-shadow: 0px 3px 6px rgba(148, 163, 184, 0.3);
            }
            @media (max-width: 1400px) {
              padding: 12px 20px 16px 20px;
            }
            @media (max-width: 767px) {
              padding: 12px 15px 16px;
            }
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
              @media (max-width: 767px) {
                margin-right: 5px;
              }
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
            @media (max-width: 767px) {
              padding: 12px 15px 90px 15px;
            }
          }
          .tab-panel-data-block {
            display: flex;
            flex-wrap: wrap;
            margin: 0px -12px;
            @media (max-width: 767px) {
              margin: 0px -6px;
            }
            .tab-panel-data-block-main {
              width: 20%;
              position: relative;
              padding: 0px 12px 24px;
              @media (max-width: 1199px) {
                width: 25%;
              }
              @media (max-width: 991px) {
                width: 33.33%;
              }
              @media (max-width: 767px) {
                padding: 0px 6px 12px;
                width: 50%;
              }
              .tab-panel-data-block-inner {
                background-color: #ffffff;
                box-shadow: 0px 3px 6px rgba(148, 163, 184, 0.2);
                border-radius: 12px;
                .block-img-tab {
                  width: 100%;
                  height: 266px;
                  position: relative;
                  @media (max-width: 1400px) {
                    height: 220px;
                  }
                  @media (max-width: 767px) {
                    height: 173px;
                  }
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
                      @media (max-width: 1400px) {
                        font-size: 16px;
                        line-height: 16px;
                      }
                      &:last-child {
                        font-weight: 400;
                        font-size: 10px;
                        line-height: 10px;
                        text-transform: uppercase;
                        padding-left: 5px;
                        @media (max-width: 1400px) {
                          font-size: 9px;
                          line-height: 9px;
                        }
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
                      @media (max-width: 1400px) {
                        font-size: 13px;
                        line-height: 15px;
                      }
                    }
                    h6 {
                      color: #667085;
                      padding-left: 2px;
                      font-size: 8px;
                      line-height: 8px;
                      font-weight: 400;
                      text-transform: uppercase;
                      @media (max-width: 1400px) {
                        font-size: 7px;
                        line-height: 7px;
                      }
                    }
                  }
                }
                .bottom-content {
                  padding: 12px 12px 24px 12px;
                  @media (max-width: 1400px) {
                    padding: 0px 12px 12px 12px;
                  }
                  h3 {
                    font-size: 16px;
                    line-height: 20px;
                    color: #000;
                    font-weight: 700;
                    margin-bottom: 5px;
                    @media (max-width: 1400px) {
                      font-size: 14px;
                      line-height: 18px;
                    }
                  }
                  p {
                    color: #667085;
                    font-size: 12px;
                    line-height: 14px;
                    @media (max-width: 1400px) {
                      font-size: 11px;
                      line-height: 16px;
                    }
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
      @media (max-width: 1400px) {
        bottom: 150px;
        right: 20px;
      }
      @media (max-width: 767px) {
        right: 15px;
      }
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
        @media (max-width: 1400px) {
          width: 45px;
          height: 45px;
        }
        @media (max-width: 767px) {
          width: 40px;
          height: 40px;
        }
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
    @media (max-width: 1400px) {
      padding: 15px;
    }
    @media (max-width: 991px) {
      display: block;
    }
    @media (max-width: 767px) {
      padding: 15px 15px 95px;
    }
    .product-details-main-left {
      width: 46%;
      padding-right: 15px;
      display: flex;
      @media (max-width: 1199px) {
        padding-right: 30px;
      }
      @media (max-width: 991px) {
        flex-direction: column-reverse;
        padding-right: 0px;
        width: 100%;
      }
      .product-details-main-slider {
        width: 86%;
        padding: 0px 12px;
        @media (max-width: 991px) {
          padding: 0px;
          width: 100%;
        }
        .product-details-main-left-img {
          width: 100%;
          box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
            0px 1px 2px rgba(16, 24, 40, 0.06);
          height: 500px;
          padding: 16px;
          border: 1px solid rgba(208, 213, 221, 0.6);
          border-radius: 8px;
          @media (max-width: 1400px) {
            height: 400px;
            padding: 15px;
          }
          @media (max-width: 1199px) {
            height: 330px;
          }
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
        @media (max-width: 991px) {
          padding: 0px;
          width: 100%;
          margin-top: 15px;
          .slick-slide {
            padding: 0px 3px;
          }
        }
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
          @media (max-width: 1400px) {
            height: 90px;
            padding: 10px;
            margin-bottom: 10px;
          }
          /* @media (max-width: 991px) {
            margin: 0px 3px;
          } */
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
      @media (max-width: 991px) {
        width: 100%;
        padding-left: 0px;
        margin-left: 0px;
        padding-top: 15px;
      }
      .product-details-main-right-inner {
        .product-details-main-right-inner-top {
          padding: 32px 20px;
          border: 1px solid rgba(208, 213, 221, 0.6);
          border-radius: 12px;
          box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
            0px 1px 2px rgba(16, 24, 40, 0.06);
          @media (max-width: 1400px) {
            padding: 15px;
          }
          .product-top-block {
            display: flex;
            justify-content: space-between;
            margin-bottom: 32px;
            @media (max-width: 1400px) {
              margin-bottom: 15px;
            }
            .product-top-block-left {
              /* display: flex; */
              h2 {
                font-size: 32px;
                line-height: 40px;
                color: #000;
                font-weight: 700;
                margin-bottom: 10px;
                @media (max-width: 1400px) {
                  font-size: 26px;
                  line-height: 32px;
                }
                @media (max-width: 1199px) {
                  font-size: 22px;
                  line-height: 28px;
                }
              }
              p {
                color: #667085;
                font-size: 18px;
                line-height: 18px;
                @media (max-width: 1400px) {
                  font-size: 16px;
                  line-height: 16px;
                }
                @media (max-width: 1199px) {
                  font-size: 14px;
                  line-height: 16px;
                }
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
                  @media (max-width: 1400px) {
                    font-size: 24px;
                    line-height: 28px;
                  }
                  @media (max-width: 1199px) {
                    font-size: 20px;
                    line-height: 22px;
                  }
                  &:last-child {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 14px;
                    text-transform: uppercase;
                    padding-left: 5px;
                    @media (max-width: 1400px) {
                      font-size: 12px;
                      line-height: 12px;
                    }
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
                  @media (max-width: 1400px) {
                    font-size: 15px;
                  }
                  @media (max-width: 1199px) {
                    font-size: 14px;
                  }
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
            @media (max-width: 1400px) {
              margin-bottom: 15px;
            }
            .common-btn {
              width: 100%;
              padding: 20px;
              background-color: #ffc93c;
              border-radius: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              border: none;
              @media (max-width: 1400px) {
                padding: 16px;
              }
              span {
                color: #fff;
                padding-left: 10px;
                font-weight: 600;
                font-size: 18px;
                line-height: 20px;
                @media (max-width: 1400px) {
                  font-size: 16px;
                  line-height: 20px;
                  padding-left: 8px;
                }
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
                    @media (max-width: 1400px) {
                      padding: 10px 0px;
                      font-size: 20px;
                      line-height: 24px;
                    }
                    @media (max-width: 1199px) {
                      padding: 10px 0px;
                      font-size: 18px;
                      line-height: 24px;
                    }
                    &::before {
                      position: absolute;
                      right: 16px;
                      top: 24px;
                      @media (max-width: 1400px) {
                        right: 10px;
                        top: 18px;
                      }
                    }
                  }
                }
                .accordion__panel {
                  padding: 10px 20px;
                  @media (max-width: 1400px) {
                    padding: 10px 0px;
                  }
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
                      @media (max-width: 1400px) {
                        font-size: 16px;
                        line-height: 20px;
                        margin-bottom: 8px;
                      }
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
    @media (max-width: 1400px) {
      padding: 32px 15px;
    }
    @media (max-width: 1199px) {
      padding: 30px 15px;
    }
    @media (max-width: 991px) {
      display: block;
    }
    &.mb-mobile-diff {
      @media (max-width: 767px) {
        margin-bottom: 50px;
      }
    }
    .common-cart-pages-block-left {
      padding: 0px 15px 0px 30px;
      width: 50%;
      @media (max-width: 1400px) {
        padding: 0px 15px 0px 15px;
      }
      @media (max-width: 991px) {
        width: 100%;
        padding: 0px 0px 15px;
      }
      .title-left {
        padding: 32px 10px;
        @media (max-width: 1400px) {
          padding: 20px 10px;
        }
        @media (max-width: 767px) {
          padding: 15px 10px;
        }
        h2 {
          font-size: 22px;
          line-height: 28px;
          color: #000;
          font-weight: 500;
          @media (max-width: 1400px) {
            font-size: 20px;
            line-height: 26px;
          }
          @media (max-width: 767px) {
            font-size: 17px;
            line-height: 22px;
          }
        }
      }
      .top-shoping-title {
        padding: 24px 20px;
        border: 1px solid rgba(208, 213, 221, 0.6);
        border-radius: 12px;
        box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
          0px 1px 2px rgba(16, 24, 40, 0.06);
        margin-bottom: 32px;
        @media (max-width: 1400px) {
          margin-bottom: 15px;
        }
        .top-shoping-title-inner {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          @media (max-width: 1400px) {
            margin-bottom: 15px;
          }
          h2 {
            font-size: 22px;
            line-height: 28px;
            color: #000;
            font-weight: 500;
            padding-left: 12px;
            @media (max-width: 1400px) {
              font-size: 20px;
              line-height: 26px;
            }
            @media (max-width: 767px) {
              font-size: 17px;
              line-height: 22px;
              padding-left: 7px;
            }
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
        @media (max-width: 1400px) {
          padding: 15px;
          margin-bottom: 15px;
        }
        &.diff-shop-page {
          border: 2px dashed rgba(208, 213, 221, 0.6);
        }
        &:last-child {
          margin-bottom: 0px;
        }
        .label-block-days {
          margin-bottom: 32px;
          @media (max-width: 1400px) {
            margin-top: 15px;
          }
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
          align-items: center;
          @media (max-width: 1400px) {
            margin-bottom: 15px;
          }
          .top-block-cart-left {
            width: 70%;
            h2 {
              color: #000;
              font-weight: 600;
              font-size: 32px;
              line-height: 40px;
              margin-bottom: 12px;
              @media (max-width: 1400px) {
                font-size: 28px;
                line-height: 36px;
                margin-bottom: 8px;
              }
              @media (max-width: 767px) {
                font-size: 24px;
                line-height: 30px;
                margin-bottom: 5px;
              }
            }
            p {
              color: #667085;
              font-size: 18px;
              line-height: 20px;
              @media (max-width: 1400px) {
                font-size: 16px;
                line-height: 20px;
              }
              @media (max-width: 767px) {
                font-size: 14px;
                line-height: 18px;
              }
              span {
                padding-left: 4px;
                color: #ffc93c;
              }
            }
          }
          .top-block-cart-right {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            width: 30%;
            .top-block-cart-right-complany {
              width: 135px;
              height: 97px;
              border-radius: 8px;
              @media (max-width: 767px) {
                width: 100px;
                height: 60px;
              }
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              border-radius: 8px;
            }
          }
        }
        .cart-dropdown-block-inner {
          margin-bottom: 5px;
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
              @media (max-width: 1400px) {
                top: 2px;
              }
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
            @media (max-width: 1400px) {
              padding: 10px 0px;
            }
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
              @media (max-width: 767px) {
                width: 70px;
                height: 70px;
              }
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
                  @media (max-width: 1400px) {
                    font-size: 20px;
                    margin-bottom: 8px;
                  }
                  @media (max-width: 767px) {
                    font-size: 17px;
                  }
                }
                p {
                  color: #667085;
                  font-size: 12px;
                  font-weight: 400;
                  line-height: 14px;
                  padding: 0px;
                  @media (max-width: 1400px) {
                    font-size: 11px;
                  }
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
                  @media (max-width: 1400px) {
                    font-size: 20px;
                    margin-bottom: 8px;
                  }
                  @media (max-width: 767px) {
                    font-size: 17px;
                    margin-bottom: 5px;
                  }
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
          @media (max-width: 1400px) {
            padding: 12px;
          }
          p {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            font-size: 18px;
            line-height: 22px;
            color: #667085;
            @media (max-width: 1400px) {
              margin-bottom: 10px;
              font-size: 16px;
              line-height: 20px;
            }
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
                  @media (max-width: 1400px) {
                    font-size: 20px;
                    line-height: 26px;
                  }
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
          @media (max-width: 1400px) {
            padding: 15px;
            margin-bottom: 15px;
          }
          @media (max-width: 767px) {
            display: block;
          }
          .wallet-top-block-left {
            width: 100%;
            @media (max-width: 767px) {
              margin-bottom: 15px;
            }
            h2 {
              font-size: 52px;
              line-height: 60px;
              font-weight: 600;
              color: #027a48;
              margin-bottom: 12px;
              @media (max-width: 1400px) {
                font-size: 40px;
                line-height: 50px;
                margin-bottom: 10px;
              }
              @media (max-width: 1199px) {
                font-size: 30px;
                line-height: 40px;
                margin-bottom: 10px;
              }
            }
          }
          .wallet-top-block-right {
            width: 30%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            @media (max-width: 767px) {
              width: 100%;
              align-items: flex-start;
              justify-content: flex-start;
            }
            button {
              padding: 17px 24px;
              border-radius: 30px;
              border: 1px solid rgba(208, 213, 221, 0.6);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              @media (max-width: 1400px) {
                padding: 15px 24px;
              }
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
          @media (max-width: 1400px) {
            margin: 0px -4px 10px;
          }
          .list-block-wallet-inner {
            width: 50%;
            padding: 0px 4px 8px;
            &.selected-block {
              h3 {
                background-color: #ffc93c;
                color: white;
              }
            }
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
              width: 100%;
              span {
                padding-left: 8px;
                font-size: 10px;
                font-weight: 400;
              }
              @media (max-width: 1400px) {
                height: 56px;
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
              @media (max-width: 1400px) {
                height: 56px;
              }
              span {
                padding-left: 8px;
                font-size: 14px;
                font-weight: 500;
                color: #667085;
              }
            }
            input {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 62px;
              border: 1px solid rgba(208, 213, 221, 0.6);
              border-radius: 12px;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              font-size: 18px;
              color: #ffc93c;
              width: 100%;
              text-align: center;
              &::placeholder {
                color: #667085;
              }
            }
          }
          .list-block-wallet-outer {
            width: 50%;
            padding: 0px 4px 8px;
            h3 {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 62px;
              border: 1px solid rgba(208, 213, 221, 0.6);
              border-radius: 31px;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              font-size: 18px;
              color: #027a48;
              @media (max-width: 1400px) {
                height: 56px;
                font-size: 16px;
              }
              span {
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
              border-radius: 31px;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              font-size: 18px;
              color: #027a48;
              width: 100%;
              @media (max-width: 1400px) {
                height: 56px;
                font-size: 16px;
              }
              span {
                font-size: 14px;
                font-weight: 500;
                color: #667085;
              }
            }
          }

          .list-block-wallet-finish {
            width: 50%;
            padding: 0px 4px 8px;
            h3 {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 62px;
              border: 1px solid #fda29b;
              border-radius: 31px;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              font-size: 18px;
              color: #027a48;
              @media (max-width: 1400px) {
                height: 56px;
                font-size: 16px;
              }
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
              border: 1px solid #fda29b;
              border-radius: 31px;
              box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
                0px 1px 2px rgba(16, 24, 40, 0.06);
              font-size: 18px;
              color: #027a48;
              width: 100%;
              @media (max-width: 1400px) {
                height: 56px;
                font-size: 16px;
              }
              span {
                font-size: 14px;
                font-weight: 500;
                color: #d92d20;
              }
            }
          }
        }
        .list-block-wallet-another {
          display: flex;
          flex-wrap: wrap;
          margin: 30px 0px 0px;
          @media (max-width: 1400px) {
            margin: 15px 0px 0px;
          }
          .list-block-wallet-inner {
            width: 48%;
            padding: 0px 4px 8px;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(208, 213, 221, 0.6);
            border-radius: 12px;
            box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
              0px 1px 2px rgba(16, 24, 40, 0.06);
            background-color: #fff;
            @media (max-width: 1400px) {
              font-size: 18px;
            }
            @media (max-width: 767px) {
              width: 100%;
            }
            h3 {
              margin-top: 10px;
              margin-bottom: 5px;
              align-items: center;
              justify-content: center;
              font-size: 20px;
              color: black;
              font-weight: 400;
              @media (max-width: 1400px) {
                font-size: 16px;
              }
            }
            h2 {
              align-items: center;
              justify-content: center;
              font-size: 14px;
              color: #667085;
              font-weight: 400;
              width: 75%;
              margin-left: 12.5%;
              margin-bottom: 5px;
              @media (max-width: 1400px) {
                font-size: 14px;
              }
            }
          }
          .list-block-wallet-inner.active {
            background-color: #ffc93c;
          }
          .list-block-wallet-inner.active h3,
          .list-block-wallet-inner.active h2 {
            color: #fff;
          }
          .list-block-wallet-outer {
            margin-left: 4%;
            width: 48%;
            padding: 0px 4px 8px;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(208, 213, 221, 0.6);
            border-radius: 12px;
            box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
              0px 1px 2px rgba(16, 24, 40, 0.06);
            background-color: #fff;
            @media (max-width: 767px) {
              width: 100%;
              margin: 15px 0px 0px;
            }
            h3 {
              margin-top: 10px;
              margin-bottom: 5px;
              align-items: center;
              justify-content: center;
              font-size: 20px;
              color: black;
              font-weight: 400;
              @media (max-width: 1400px) {
                font-size: 18px;
              }
            }
            h2 {
              align-items: center;
              justify-content: center;
              font-size: 14px;
              color: #667085;
              font-weight: 400;
              width: 75%;
              margin-left: 12.5%;
              margin-bottom: 5px;
            }
          }
          .list-block-wallet-outer.active {
            background-color: #ffc93c;
          }
          .list-block-wallet-outer.active h3,
          .list-block-wallet-outer.active h2 {
            color: #fff;
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
            @media (max-width: 1400px) {
              padding: 14px 24px;
            }
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
        .start-setup {
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
          @media (max-width: 1400px) {
            margin-bottom: 15px;
          }
          h2 {
            font-size: 22px;
            line-height: 30px;
            font-weight: 500;
            color: #000;
            padding-left: 12px;
            @media (max-width: 1400px) {
              font-size: 20px;
              line-height: 26px;
            }
          }
        }
      }
    }
    .common-cart-pages-block-right {
      width: 50%;
      padding: 0px 30px 0px 15px;
      @media (max-width: 1400px) {
        padding: 0px 15px 0px 15px;
      }
      @media (max-width: 991px) {
        width: 100%;
        padding: 0px 0px 15px;
      }
      .common-cart-pages-block-right-inner {
        padding: 16px 12px;
        border: 1px solid rgba(208, 213, 221, 0.6);
        border-radius: 8px;
        &.height-full {
          height: 100%;
        }
        @media (max-width: 767px) {
          margin-bottom: 50px;
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
            @media (max-width: 1400px) {
              height: 56px;
            }
            @media (max-width: 767px) {
              font-size: 14px;
              line-height: 14px;
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
          @media (max-width: 1400px) {
            height: 56px;
          }
          svg {
            position: absolute;
            top: 16px;
            left: 10px;
          }
          .react-datepicker__triangle {
            display: none;
          }
          .react-datepicker__navigation {
            top: 27px;
            @media (max-width: 767px) {
              top: 6px;
            }
          }
          .react-datepicker-popper {
            @media (max-width: 767px) {
              width: 100%;
            }
            .react-datepicker {
              border: 1px solid rgba(208, 213, 221, 0.6);
              font-family: "Public Sans", sans-serif;
              padding: 15px;
              @media (max-width: 767px) {
                padding: 0px;
              }
              .react-datepicker__header {
                background: none;
                border: none;
                .react-datepicker__day-names {
                  background: none;
                  .react-datepicker__day-name {
                    font-size: 16px;
                    line-height: 20px;
                    color: #070a13;
                    font-weight: 400;
                    font-family: var(--font-inter);
                    @media (max-width: 767px) {
                      font-size: 14px;
                      line-height: 18px;
                    }
                  }
                }
                .react-datepicker__current-month {
                  font-size: 24px;
                  line-height: 24px;
                  color: #070a13;
                  font-weight: 400;
                  font-family: var(--font-inter);
                  padding: 10px 0px;
                  @media (max-width: 767px) {
                    font-size: 18px;
                    line-height: 22px;
                    padding: 5px 0px;
                  }
                }
              }
              .react-datepicker__month {
                .react-datepicker__day {
                  font-size: 16px;
                  line-height: 30px;
                  color: #070a13;
                  font-weight: 400;
                  @media (max-width: 767px) {
                    font-size: 14px;
                    line-height: 16px;
                  }
                }
              }
            }
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
                @media (max-width: 767px) {
                  font-size: 14px;
                  line-height: 14px;
                }
              }
            }
          }
        }
        .tooltip-block-radio {
          padding-top: 32px;
          @media (max-width: 1400px) {
            padding-top: 15px;
          }
          .tooltip-block-radio-top {
            display: flex;
            align-items: center;
            p {
              padding-left: 10px;
              color: #667085;
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              @media (max-width: 767px) {
                font-size: 13px;
                line-height: 17px;
                width: 80%;
              }
            }
            /* svg {
              width: 15px;
            } */
          }
        }
        .radio-buttons-main {
          display: flex;
          margin-top: 18px;
          .radio-buttons {
            width: 16.66%;
            padding: 0px 5px;
            @media (max-width: 1400px) {
              padding: 0px 3px;
            }
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
                @media (max-width: 1400px) {
                  font-size: 11px;
                  height: 37px;
                }
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
          @media (max-width: 1400px) {
            margin-top: 15px;
          }
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
            @media (max-width: 1400px) {
              height: 56px;
              font-size: 14px;
              line-height: 14px;
              padding: 12px 40px 12px 12px;
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
            @media (max-width: 1400px) {
              top: 15px;
            }
          }
        }
        .add-to-cart {
          margin-top: 32px;
          @media (max-width: 1400px) {
            margin-top: 15px;
          }
          .common-btn {
            width: 100%;
            padding: 20px;
            background-color: #ffc93c;
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            @media (max-width: 1400px) {
              padding: 16px;
            }
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
          @media (max-width: 1400px) {
            padding: 8px 8px 0px;
            margin-bottom: 15px;
          }
          h2 {
            padding-left: 10px;
            font-size: 22px;
            line-height: 26px;
            color: #000;
            font-weight: 500;
            @media (max-width: 1400px) {
              font-size: 20px;
              line-height: 24px;
            }
          }
        }
        .transition-block {
          padding: 0px 8px;
          /* height: 400px; /* Adjust this value as needed */
          /* overflow-y: scroll; */
          .transition-block-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            border-radius: 8px;
            padding: 12px;
            border: 1px solid rgba(208, 213, 221, 0.6);
            @media (max-width: 1400px) {
              padding: 10px;
            }
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
              @media (max-width: 767px) {
                width: 60%;
              }
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
                @media (max-width: 1400px) {
                  font-size: 16px;
                }
                @media (max-width: 767px) {
                  font-size: 14px;
                }
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
                @media (max-width: 1400px) {
                  font-size: 20px;
                  line-height: 24px;
                }
                @media (max-width: 767px) {
                  font-size: 18px;
                  line-height: 22px;
                }
              }
            }
          }
        }
      }
    }
  }

  .transition-block-scroll {
    height: 400px; /* Make sure the height is fixed */
    overflow-y: scroll;
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
    @media (max-width: 767px) {
      width: 33px;
      height: 33px;
    }
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

  .custom-container {
    position: relative;
    padding: 0;
  }

  .custom-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-left: 0.5rem;
  }

  .custom-form {
    margin-bottom: 2rem;
    gap: 1rem;
  }

  .custom-label {
    display: block !important;
    font-size: 0.875rem;
    font-weight: 500;
    color: #4b5563;
    /* margin-top: 8px; */
  }

  .custom-input {
    margin-top: 0.25rem;
    height: 2rem;
    display: block;
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    font-size: 0.875rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .custom-input:focus {
    border-color: black;
    outline: none;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  }

  .form-login {
    .two-from-group {
      display: flex;
      margin: 0px -4px;
      .form-group {
        width: 50%;
        padding: 0px 4px;
      }
    }
    .form-group {
      margin-bottom: 12px;
      input {
        width: 100%;
        height: 45px;
        border: 1px solid #cbd5e1;
        border-radius: 10px;
        padding: 10px;
        font-family: "Public Sans", sans-serif;
        font-size: 13px;
        outline: none;
        box-shadow: none;
        color: #64748b;
        &::placeholder {
          color: #64748b;
        }

        &::-ms-input-placeholder {
          color: #64748b;
        }
      }
    }
  }
  .btn-form {
    margin-top: 15px;
    .button-common {
      width: 100%;
      background-color: #f9c93c;
      font-size: 16px;
      line-height: 24px;
      border-radius: 12px;
      color: #fff;
      font-weight: 700;
      border: none;
      padding: 10px;
    }
  }
  .basic-multi-select {
    .select__control {
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
    }
  }
  .radio-buttons-main-data {
    display: flex;
    margin-top: 18px;
    @media (max-width: 1400px) {
      margin-top: 15px;
    }
    @media (max-width: 767px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    .radio-buttons {
      width: 16.66%;
      padding: 0px 5px;
      @media (max-width: 1400px) {
        padding: 0px 3px;
      }
      @media (max-width: 767px) {
        width: 33.33%;
      }
      .button {
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
        background-color: white;
        @media (max-width: 1400px) {
          font-size: 11px;
          height: 37px;
        }
        @media (max-width: 767px) {
          width: 100%;
          margin-bottom: 6px;
        }
        &.active {
          background-color: rgba(249, 201, 60, 0.2);
          border-color: #ffc93c;
          color: #ffc93c;
        }
      }
    }
  }
  .available-credit {
    font-size: 18px;
    line-height: 22px;
    color: #667085;
    @media (max-width: 1400px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
  .autotopup-description {
    font-size: 12px;
    line-height: 22px;
    color: #667085;
  }
`;

export default CommonPagesBlock;
