import {
  ID,
  LoginPayload,
  PassportData,
  RegisterPayload,
  User,
} from "../types";
import httpService from "./httpService";

type UserDTO = {
  haspassportdata: boolean;
  email: string;
  firstname: string;
  id: ID;
  lastname: string;
  phone: string;
};

const authService = {
  login(payload: LoginPayload) {
    return httpService.request
      .post("/login", payload)
      .then(httpService.catchNotStatusError)
      .then((res) => res.data.token)
      .catch(httpService.handleError);
  },
  register(payload: RegisterPayload) {
    return httpService.request
      .post("/register", payload)
      .then(httpService.catchNotStatusError)
      .then((res) => res.data.token)
      .catch(httpService.handleError);
  },
  getUser(token: string) {
    return httpService.request
      .get<UserDTO[]>("/request-user", {
        params: { token },
      })
      .then(httpService.catchNotStatusError)
      .then((res) => ({
        ...res.data[0],
        hasPassportData: res.data[0].haspassportdata,
      }))
      .catch(httpService.handleError);
  },
  attachPassport(passportData: PassportData) {
    return httpService.request
      .post<{ status: string }>("/add-passport", {
        number: passportData.number,
        series: passportData.series,
        date: passportData.date,
        gov: passportData.provider,
      })
      .then(httpService.catchNotStatusError)
      .then(() => true)
      .catch(httpService.handleError);
  },
};

export default authService;
