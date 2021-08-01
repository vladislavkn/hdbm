import http from "@root/lib/http";
import {
  LoginOptions,
  PassportOptions,
  RegisterOptions,
  UserDTO,
} from "./types";

export const login = (options: LoginOptions) =>
  http.post("/login", options).then((res) => res.data.token);

export const register = (options: RegisterOptions) =>
  http.post("/register", options).then((res) => res.data.token);

export const fetchUser = (token) =>
  http
    .get<UserDTO[]>("/request-user", {
      params: {
        token,
      },
    })
    .then((res) => ({
      ...res.data[0],
      hasPassportData: res.data[0].haspassportdata,
    }));

export const attachPassport = (options: PassportOptions) =>
  http
    .post("/add-passport", {
      number: options.number,
      series: options.series,
      date: options.date,
      gov: options.provider,
    })
    .then(() => true);
