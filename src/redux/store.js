"use client";

import rootReducers from "./rootReducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducers,
});

export { store };
