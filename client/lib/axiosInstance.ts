import axios, { AxiosRequestConfig } from "axios";
import { Config } from "../config/config";
import { Storage } from "../config/storage.config"

const axiosInstance = axios.create({
    baseURL: Config.BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use((req: AxiosRequestConfig<any>) => {
    if (req?.headers) req.headers.user = new Storage().get("user")
    return req
})

export {
    axiosInstance
}