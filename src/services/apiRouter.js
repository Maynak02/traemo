export const API_ROUTER = {
  // LOGIN
  LOGIN_USER: "/auth/login",
  AUTH_TOKEN: "/auth/token",
  AUTH_LINK: "/auth/link",
  AUTH_LOGOUT: "/auth/logout",
  AUTH_LOGOUT_ALL: "/auth/logoutall",

  // PAYMENTS
  GET_FUNDS: "/payments/funds",
  CREATE_PAYMENT: "/payments",
  CHARGE_USER: "/payments/topup",
  LIST_PAYMENT_METHODS: "/payments/methods",
  CREATE_REFUND: "/payments/refunds",
  GET_TRANSACTIONS: "/payments/transactions",
  // AUTO TOPUP
  GET_AUTO_TOPUP: "/autotopup",
  CREATE_UPDATE_AUTO_TOPUP: "/autotopup",
};
