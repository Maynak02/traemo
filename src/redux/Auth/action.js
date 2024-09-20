import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { saveData } from "@/utils/storage";
import { AuthLink, AuthToken, LoginUser, Logout, LogoutAll } from "./services";

export const loginAction = createAsyncThunk(
  "authSlice/loginAction",
  async (payload, { rejectWithValue }) => {
    try {
      console.log("🚀 ~ payload:", payload);
      const { data, status, message } = await LoginUser(payload);
      return { data, status, message };
    } catch (err) {
      console.log("🚀 ~ err:--->>>", err);
      toast.error(data?.data?.message);
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.detail);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const authTokenAction = createAsyncThunk(
  "authSlice/authTokenAction",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await AuthToken(payload);
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

export const authLinkAction = createAsyncThunk(
  "authSlice/authLinkAction",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await AuthLink(payload);
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const logoutAction = createAsyncThunk(
  "authSlice/logoutAction",
  async ({ rejectWithValue }) => {
    try {
      const { data, status, message } = await Logout();
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);
export const logoutAllAction = createAsyncThunk(
  "authSlice/logoutAllAction",
  async ({ rejectWithValue }) => {
    try {
      const { data, status, message } = await LogoutAll();
      return { data, status, message };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);
