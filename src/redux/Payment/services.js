import {
  axiosDeleteFunds,
  axiosGet,
  axiosPost,
  axiosPut,
} from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";

export const GetFunds = (data) => {
  return axiosGet(API_ROUTER.GET_FUNDS, data);
};

export const CreatePayment = (data) => {
  return axiosPost(API_ROUTER.CREATE_PAYMENT, data);
};

export const ChargeUser = (data) => {
  return axiosPost(API_ROUTER.CHARGE_USER, data);
};

export const ListPaymentMethod = (data) => {
  return axiosGet(API_ROUTER.LIST_PAYMENT_METHODS, data);
};
export const CreateRefund = (data) => {
  return axiosPost(API_ROUTER.CREATE_REFUND, data);
};

export const GetTransaction = (data) => {
  return axiosGet(API_ROUTER.GET_TRANSACTIONS, data);
};

export const GetAutoTopup = (data) => {
  return axiosGet(API_ROUTER.GET_AUTO_TOPUP, data);
};

export const CreateUpdateAutoTopup = (data) => {
  return axiosPut(API_ROUTER.CREATE_UPDATE_AUTO_TOPUP, data);
};
export const DisburseFunds = (data) => {
  return axiosDeleteFunds(API_ROUTER.GET_FUNDS, data);
};
