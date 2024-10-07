import {
  axiosGet,
  axiosGetProductID,
  axiosPost,
  axiosPut,
} from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";

export const ReadCategory = (data) => {
  return axiosGet(API_ROUTER.READ_CATEGORY, data);
};
export const ListCategories = (data) => {
  return axiosGet(API_ROUTER.LIST_CATEGORIES, data);
};
export const GetProducts = (data) => {
  return axiosGet(API_ROUTER.GET_PRODUCTS, data);
};
export const ListProductsMe = (data) => {
  return axiosGet(API_ROUTER.LIST_PRODUCTS_ME, data);
};
export const GetProductById = (productid) => {
  return axiosGetProductID(API_ROUTER.GET_PRODUCT_BY_ID, productid);
};
