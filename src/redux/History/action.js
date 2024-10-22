import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { GetHistory } from "./services";
import { AxiosError } from "axios";

export const getHistoryAction = createAsyncThunk(
  "history/orderHistory",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await GetHistory(payload);
      return { data, status, message };
    } catch (err) {
      // console.log("🚀 ~ err:", err);
      toast.error(err?.response?.data?.message || err.message);
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);
