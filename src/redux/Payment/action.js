import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import {
  GetFunds,
  CreatePayment,
  ChargeUser,
  ListPaymentMethod,
  CreateRefund,
  GetTransaction,
  GetAutoTopup,
  CreateUpdateAutoTopup,
  DisburseFunds,
} from "./services";
import { AxiosError } from "axios";

export const getFundServiceAction = createAsyncThunk(
  "payment/getfunds",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await GetFunds(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const createPaymentServiceAction = createAsyncThunk(
  "payment/createpayment",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await CreatePayment(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const chargeUserServiceAction = createAsyncThunk(
  "payment/chargeUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await ChargeUser(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const listPaymentServiceAction = createAsyncThunk(
  "payment/listPayment",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await ListPaymentMethod(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const createRefundServiceAction = createAsyncThunk(
  "payment/createRefund",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await CreateRefund(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const getTransactionServiceAction = createAsyncThunk(
  "payment/getTransaction",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await GetTransaction(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const getAutoTopupServiceAction = createAsyncThunk(
  "payment/getAutoTopup",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await GetAutoTopup(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const createUpdateAutoTopupAction = createAsyncThunk(
  "payment/createUpdateAutoTopup",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await CreateUpdateAutoTopup(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);
export const DisburseFundAction = createAsyncThunk(
  "payment/DisburseFunds",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await DisburseFunds(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);
