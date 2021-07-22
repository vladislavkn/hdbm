import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { toast } from "material-react-toastify";

const SERVER_URL = process.env.SERVER_URL;

type HttpService = {
  request: AxiosInstance;
  handleError: (e: Error) => void;
  setAuthHeader: (token: string) => void;
  unsetAuthHeader: () => void;
  catchNotStatusError: (Response: AxiosResponse) => AxiosResponse;
};

const httpService: HttpService = {
  request: axios.create({
    baseURL: SERVER_URL,
    timeout: 20000,
  }),
  handleError(e: AxiosError) {
    const message = e.response ? e.response.data.message : e.message;
    toast.error(`Ошибка: ${message}`);
  },
  setAuthHeader(header: string) {
    this.request.defaults.headers.common["Authorization"] = header;
  },
  unsetAuthHeader() {
    delete this.request.defaults.headers.common["Authorization"];
  },
  catchNotStatusError(response) {
    if (response.data?.message || response.data?.status === "error")
      throw new Error(response.data?.message || "Ошибка на стороне сервера");
    return response;
  },
};

export default httpService;
