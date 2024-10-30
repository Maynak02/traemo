export const TOAST_ALERTS = {
  LOGIN_SUCCESS: "Anmeldung erfolgreich",
  REGISTER_SUCCESS: "Erfolgreich registriert",
  RESET_PASSWORD: "OTP überprüfen",
  VERIFIED_SUCCESSFULLY: "Erfolgreich verifiziert",
  RESET_SUCCESSFULLY: "Passwort erfolgreich gesetzt. Bitte einloggen.",
  ERROR_MESSAGE: "Das hat nicht geklappt.",
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
export function formatNutritionLabel(nutritionKey) {
  const nutritionMap = {
    fat: "Fett",
    saturated_fat: "davon gesättigte Fettsäuren",
    carbohydrates: "Kohlenhydrate",
    sugar: "davon Zucker",
    protein: "Eiweiss",
    salt: "Salz",
  };
  return nutritionMap[nutritionKey] || nutritionKey; // Return mapped value or original if not found
}
export function formatDayLabel(dayName) {
  const dayMap = {
    Mo: "monday",
    Di: "tuesday",
    Mi: "wednesday",
    Do: "thursday",
    Fr: "friday",
    Sa: "saturday",
    So: "sunday",
  };
  return dayMap[dayName] || dayName; // Return mapped value or original if not found
}
