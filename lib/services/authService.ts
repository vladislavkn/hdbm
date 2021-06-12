import axios from "axios";
import { SERVER_URL } from "../constants";
import { LoginPayload, RegisterPayload, User } from "../types";

const authService = {
  login(payload: LoginPayload) {
    return axios
      .post(`${SERVER_URL}/login`, payload)
      .then((res) => res.data.token);
  },
  register(payload: RegisterPayload) {
    return axios
      .post(`${SERVER_URL}/register`, payload)
      .then((res) => res.data.token);
  },
  getUser(token: string) {
    return axios
      .get<User[]>(`${SERVER_URL}/request-user`, {
        params: { token },
      })
      .then((res) => res.data[0]);
  },
};

export default authService;
