import { LoginPayload, PassportData, RegisterPayload, User } from "../types";
import httpService from "./httpService";

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
      .get<User[]>("/request-user", {
        params: { token },
      })
      .then(httpService.catchNotStatusError)
      .then((res) => res.data[0])
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
