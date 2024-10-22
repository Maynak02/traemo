import { createSlice } from "@reduxjs/toolkit";
import { getHistoryAction } from "./action";

const initialState = {
  isLoading: false,
  data: [],
  notification: {},
};

const HistorySlice = createSlice({
  name: "HistorySlice",
  initialState,
  reducers: {
    resetToInitialState(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Order History
      .addCase(getHistoryAction.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getHistoryAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getHistoryAction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const paymentApiSliceReducer = HistorySlice.reducer;

export const { userStore, resetToInitialState } = HistorySlice.actions;
