import { HOST_API } from "@/config";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: HOST_API });

export default axiosInstance;
