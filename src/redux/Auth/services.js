import { axiosDelete, axiosGet, axiosPost } from "@/services/axiosHelper";
import { API_ROUTER } from "@/services/apiRouter";

export const LoginUser = (data) => {
  return axiosPost(API_ROUTER.LOGIN_USER, data);
};

export const AuthToken = (data) => {
  return axiosPost(API_ROUTER.AUTH_TOKEN, data);
};

export const AuthLink = (data) => {
  return axiosGet(API_ROUTER.AUTH_LINK, data);
};

export const Logout = () => {
  return axiosDelete(API_ROUTER.AUTH_LOGOUT);
};

export const LogoutAll = () => {
  return axiosDelete(API_ROUTER.AUTH_LOGOUT_ALL);
};
