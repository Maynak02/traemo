import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import {
  ReadCategory,
  ListCategories,
  GetProducts,
  ListProductsMe,
  GetProductById,
} from "./services";
import { AxiosError } from "axios";

export const readCategoryServiceAction = createAsyncThunk(
  "product/readCategory",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await ReadCategory(payload);
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

export const listCategorieServiceAction = createAsyncThunk(
  "product/listCategories",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await ListCategories(payload);
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

export const getProductsServiceAction = createAsyncThunk(
  "product/getProducts",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await GetProducts(payload);
      console.log("status---", data.status);

      return { data, status, message };
    } catch (err) {
      console.log("err---", err);
      // toast.error(err?.response?.data?.message || err.message);
      if (err instanceof AxiosError) {
        return rejectWithValue(err?.response?.data?.message);
      }
      return rejectWithValue(err.message);
    }
  }
);

export const ListProductsMeServiceAction = createAsyncThunk(
  "product/listProductsMe",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await ListProductsMe(payload);
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

export const GetProductByIdServiceAction = createAsyncThunk(
  "product/getProductById",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, status, message } = await GetProductById(payload);
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
