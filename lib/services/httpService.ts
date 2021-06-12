import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { notify } from "../slices/notifications";
import store from "../store";

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
    store.dispatch(notify(`Ошибка: ${message}`));
  },
  setAuthHeader(header: string) {
    this.request.defaults.headers.common["Authorization"] = header;
  },
  unsetAuthHeader() {
    delete this.request.defaults.headers.common["Authorization"];
  },
  catchNotStatusError(response) {
    if (response.data.message) throw new Error(response.data.message);
    return response;
  },
};

export default httpService;
