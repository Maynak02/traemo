import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { CreateUpdateOrderPlan, GetUpcomingOrder } from "./services";
import { AxiosError } from "axios";

export const getUpcomingOrderAction = createAsyncThunk(
  "order/upcomingorder",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await GetUpcomingOrder(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);
export const CreateUpdateOrderPlanAction = createAsyncThunk(
  "order/CreateUpdateOrder",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await CreateUpdateOrderPlan(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);
