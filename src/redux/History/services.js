import { axiosGet, axiosPost, axiosPut } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";

export const GetHistory = (data) => {
  return axiosGet(API_ROUTER.GET_ORDER_HISTORY, data);
};
