import { createSlice } from "@reduxjs/toolkit";
import {
  CreateOrUpdateAddressWithID,
  readAddressFromID,
  createOrUpdateAddress,
  listAddress,
  getAddressID,
} from "./action";

const initialState = {
  isLoading: false,
  data: [],
  notification: {},
};

const DashboardSlice = createSlice({
  name: "DashboardSlice",
  initialState,
  reducers: {
    resetToInitialState(state) {
      return initialState;
    },
    // setAppointmentData: (state, action) => {
    //   state.data = action.payload;
    // },
    // setNotificationData: (state, action) => {
    //   state.notification = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      //   CreateOrUpdateAddressWithID
      .addCase(CreateOrUpdateAddressWithID.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(CreateOrUpdateAddressWithID.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(CreateOrUpdateAddressWithID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // GET_ADDRESS_BY_ID
      //   readAddressFromID
      .addCase(readAddressFromID.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(readAddressFromID.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(readAddressFromID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   createOrUpdateAddress
      .addCase(createOrUpdateAddress.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createOrUpdateAddress.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createOrUpdateAddress.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   listAddress
      .addCase(listAddress.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(listAddress.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(listAddress.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getAddressID.pending, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAddressID.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAddressID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const paymentApiSliceReducer = DashboardSlice.reducer;

export const { userStore, resetToInitialState } = DashboardSlice.actions;
