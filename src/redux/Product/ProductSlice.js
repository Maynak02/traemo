import { createSlice } from "@reduxjs/toolkit";
import {
  readCategoryServiceAction,
  listCategorieServiceAction,
  getProductsServiceAction,
  ListProductsMeServiceAction,
  GetProductByIdServiceAction,
} from "./action";

const initialState = {
  isLoading: false,
  data: [],
  categoryList: [],
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    resetToInitialState(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      // readCategoryServiceAction
      .addCase(readCategoryServiceAction.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(readCategoryServiceAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(readCategoryServiceAction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   listCategorieServiceAction
      .addCase(listCategorieServiceAction.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(listCategorieServiceAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categoryList = payload;
        state.error = null;
      })
      .addCase(listCategorieServiceAction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   getProductsServiceAction
      .addCase(getProductsServiceAction.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductsServiceAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProductsServiceAction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   ListProductsMeServiceAction
      .addCase(ListProductsMeServiceAction.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(ListProductsMeServiceAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(ListProductsMeServiceAction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   GetProductByIdServiceAction
      .addCase(GetProductByIdServiceAction.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GetProductByIdServiceAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(GetProductByIdServiceAction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const productApiSliceReducer = ProductSlice.reducer;
export const authState = (state) => state.auth;
export const { userStore, resetToInitialState } = ProductSlice.actions;
