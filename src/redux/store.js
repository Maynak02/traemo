"use client";

import rootReducers from "./rootReducers";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { authApiSliceReducer } from "./Auth/AuthSlice";
import storage from "redux-persist/lib/storage";
import { cartDataSliceReducer } from "./Cart/CartReducer";

const rootReducer = combineReducers({
  registerApi: authApiSliceReducer,
  cartData: cartDataSliceReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  cartList: cartDataSliceReducer,
  updatedCartList: cartDataSliceReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore actions from redux-persist that are non-serializable
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: ["register"],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
