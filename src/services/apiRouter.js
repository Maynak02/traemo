export const API_ROUTER = {
  // LOGIN
  LOGIN_USER: "/auth/login",
  AUTH_TOKEN: "/auth/token",
  AUTH_LINK: "/auth/link",
  AUTH_LOGOUT: "/auth/logout",
  AUTH_LOGOUT_ALL: "/auth/logoutall",

  // USERS
  GET_ME: "/users",
  CREATE_USER: "/users",
  UPDATE_USER: "/users",

  // PAYMENTS
  CREATE_PAYMENT: "/paymentmethods",
  LIST_PAYMENT_METHODS: "/paymentmethods",

  GET_FUNDS: "/funds",
  CHARGE_USER: "/funds",

  SUCCESS_PAYMENT: "/webhook/success",
  CREATE_REFUND: "/webhook/refunded",

  GET_TRANSACTIONS: "/transactions",
  // AUTO TOPUP
  GET_AUTO_TOPUP: "/autotopups",
  CREATE_UPDATE_AUTO_TOPUP: "/autotopups",

  // ADDRESS
  UPDATE_ADDRESS: "/addresses/",
  CREATE_ADDRESS: "/addresses",
  GET_ADDRESS: "/addresses/",

  // Municipality
  GET_MUNICIPALITY_ID: "/municipalities/",
  GET_MUNICIPALITY_LIST: "/municipalities",

  // CATEGORY
  READ_CATEGORY: "/categories",
  LIST_CATEGORIES: "/categories",

  // CREATE_PRODUCT: "/products",
  GET_PRODUCTS: "/products",
  LIST_PRODUCTS_ME: "/products/me",
  GET_PRODUCT_BY_ID: "/products/",
  // UPDATE_PRODUCT: "/products/",
  // DELETE_PRODUCT: "/products/",
  // ORDER_HISTORY
  GET_ORDER_HISTORY: "/orders",
  UPCOMING_ORDER_LIST: "/orderplans",

  DAYS_LIST: "/days",

  GET_CONSTANTS: "/constants/",
  POST_SEARCHES: "/searches",
};
