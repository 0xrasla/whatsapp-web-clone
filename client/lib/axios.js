import axios from "axios";
import { Storage } from "../config/storage.config";
import { Config } from "../config/config";

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((req) => {
  req.headers.username = new Storage().get("username");
  return req;
});

export default axiosInstance;
