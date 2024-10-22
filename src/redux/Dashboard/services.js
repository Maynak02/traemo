import {
  axiosGet,
  axiosGetProductID,
  axiosPost,
  axiosPut,
} from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";

export const CreateOrUpdateAddressWithID = (data) => {
  return axiosGet(API_ROUTER.UPDATE_ADDRESS, data);
};

export const GetAddressByID = (adressID) => {
  return axiosGetProductID(API_ROUTER.GET_ADDRESS, adressID);
};

export const CREATE_UPDATE_ADDRESS = (data) => {
  return axiosPost(API_ROUTER.CREATE_ADDRESS, data);
};
export const LIST_ADDRESS = (data) => {
  return axiosGet(API_ROUTER.CREATE_ADDRESS, data);
};
