import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import {
  CreateOrUpdateAddressWithID,
  CREATE_UPDATE_ADDRESS,
  LIST_ADDRESS,
  GetAddressByID,
} from "./services";
import { AxiosError } from "axios";

export const createUpdateAddressWithID = createAsyncThunk(
  "address{id}/createUpdateAddressWithID",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await CreateOrUpdateAddressWithID(
        payload
      );
      return { data, status, message };
    } catch (err) {
      toast.error(err?.response?.data?.message || err.message);
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);
export const readAddressFromID = createAsyncThunk(
  "address{id}/readAddressFromID",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await CreateOrUpdateAddressWithID(
        payload
      );
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

export const createOrUpdateAddress = createAsyncThunk(
  "address/createOrUpdateAddress",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await CREATE_UPDATE_ADDRESS(payload);
      return { data, status, message };
    } catch (err) {
      toast.error(err?.response?.data?.message || err.message);
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const listAddress = createAsyncThunk(
  "listAddress/createOrUpdateAddress",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await LIST_ADDRESS(payload);
      return { data, status, message };
    } catch (err) {
      toast.error(err?.response?.data?.message || err.message);
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);
export const getAddressID = createAsyncThunk(
  "address/GetAddressByID",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await GetAddressByID(payload);
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
