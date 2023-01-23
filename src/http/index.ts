import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { SERVICE_URL } from "../mock/constants";

// import { authServiceRefreshToken } from "../services/authService/authService";

export const $api = axios.create({
  withCredentials: true,
  baseURL: SERVICE_URL,
});

$api.interceptors.request.use(
  (
    config: AxiosRequestConfig
  ): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    //config!.headers!.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  }
);

$api.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        // const response = await authServiceRefreshToken();
        // localStorage.setItem("token", response.data.accessToken);
        return await $api.request(originalRequest);
      } catch (err) {
        console.log(err);
      }
    }
    throw error;
  }
);

export default $api;
