import axios from "axios";
import { toast } from "material-react-toastify";

const http = axios.create({
  baseURL: process.env.SERVER_URL,
  timeout: 20000,
});

http.interceptors.response.use(
  (response) => {
    if (response.data?.message || response.data?.status === "error")
      throw new Error(
        response.data?.message ?? "Что-то не так с нашим сервером"
      );
    return response;
  },
  (error) => {
    console.log("Error while executing request:", error.response, error.body);
    toast.error(
      error.response?.data?.status ??
        error.response?.data?.msg ??
        error?.message ??
        "Что-то не так с нашим сервером"
    );
    return Promise.reject(error);
  }
);

export const setAuthTokenHeader = (token: string) => {
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeAuthTokenHeader = () => {
  delete http.defaults.headers.common["Authorization"];
};

export default http;
