import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_APP_HOST_API || "http://54.226.5.174",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer token`,
  },
});

export default axiosInstance;
