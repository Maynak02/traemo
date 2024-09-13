export const API_ROUTER = {
  REGISTER_USER: "auth/register",
  LOGIN_USER: "auth/login",
  FORGET_PASSWORD_USER: "auth/login",
  RESET_PASSWORD_USER: "auth/login",

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
