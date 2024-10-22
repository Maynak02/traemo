import { axiosGet, axiosPost, axiosPut } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";

export const GetUpcomingOrder = (data) => {
  return axiosGet(API_ROUTER.UPCOMING_ORDER_LIST, data);
};
export const CreateUpdateOrderPlan = (data) => {
  return axiosPut(API_ROUTER.UPCOMING_ORDER_LIST, data);
};
