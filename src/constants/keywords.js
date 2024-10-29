export const TOAST_ALERTS = {
  LOGIN_SUCCESS: "Login Successfully",
  REGISTER_SUCCESS: "Registered Successfully",
  RESET_PASSWORD: "Verify Otp",
  VERIFIED_SUCCESSFULLY: "Verified Successfully",
  RESET_SUCCESSFULLY: "Password set Successfully. Please Login.",
  ERROR_MESSAGE: "Something went wrong",
};

export const TOAST_TYPES = {
  SUCCESS: "success",
  WARN: "warn",
  INFO: "info",
  ERROR: "error",
};
export const CONSTANT_DATA = {
  DELIVERY_FEE: 0,
  MIN_DISBURSEMENT_VALUE: 0,
  MIN_ORDER_VALUE: 0,
  MIN_TOPUP_VALUE: 0,
  MOBILE_CUSTOMER_VERSION: "",
  MOBILE_HUB_VERSION: "",
  WEB_CUSTOMER_VERSION: "",
  WEB_HUB_VERSION: "",
};
export function formatPrice(price) {
  return (price / 100).toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
export function capitalizeTitle(title) {
  return title.charAt(0).toUpperCase() + title.slice(1);
}
export function formatUnit(unit) {
  const unitMap = {
    KG: "kg",
    K: "g",
    L: "l",
    ML: "ml",
    PIECE: "Stück",
  };
  return unitMap[unit] || unit;
}
