import { createSlice } from "@reduxjs/toolkit";
import { CreateUpdateOrderPlanAction, getUpcomingOrderAction } from "./action";

const initialState = {
  isLoading: false,
  data: [],
  notification: {},
};

const OrderSlice = createSlice({
  name: "OrderSlice",
  initialState,
  reducers: {
    resetToInitialState(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Order History
      .addCase(getUpcomingOrderAction.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUpcomingOrderAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUpcomingOrderAction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // CreateUpdateOrderPlanAction
      .addCase(CreateUpdateOrderPlanAction.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(CreateUpdateOrderPlanAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(CreateUpdateOrderPlanAction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const paymentApiSliceReducer = OrderSlice.reducer;

export const { userStore, resetToInitialState } = OrderSlice.actions;
