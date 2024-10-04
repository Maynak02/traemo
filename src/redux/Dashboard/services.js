import { axiosGet, axiosPost, axiosPut } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";

export const CreateOrUpdateAddressWithID = (data) => {
  return axiosPost(API_ROUTER.UPDATE_ADDRESS + data, data);
};

export const CREATE_UPDATE_ADDRESS = (data) => {
  return axiosPost(API_ROUTER.CREATE_ADDRESS, data);
};
