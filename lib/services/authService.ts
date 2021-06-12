import { LoginPayload, RegisterPayload, User } from "../types";
import httpService from "./httpService";

const authService = {
  login(payload: LoginPayload) {
    return httpService.request
      .post("/login", payload)
      .then(httpService.handleNotStatusError)
      .then((res) => res.data.token)
      .catch(httpService.handleError);
  },
  register(payload: RegisterPayload) {
    return httpService.request
      .post("/register", payload)
      .then(httpService.handleNotStatusError)
      .then((res) => res.data.token)
      .catch(httpService.handleError);
  },
  getUser(token: string) {
    return httpService.request
      .get<User[]>("/request-user", {
        params: { token },
      })
      .then(httpService.handleNotStatusError)
      .then((res) => res.data[0])
      .catch(httpService.handleError);
  },
};

export default authService;
