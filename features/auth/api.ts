import http from "@root/lib/http";
import { toast } from "material-react-toastify";
import { LoginOptions, PassportOptions, RegisterOptions } from "./types";

export const login = (options: LoginOptions) =>
  http.post("/login", options).then((res) => res.data.token);

export const register = (options: RegisterOptions) =>
  http.post("/register", options).then((res) => res.data.token);

export const attachPassport = (options: PassportOptions) =>
  http
    .post("/add-passport", {
      number: options.number,
      series: options.series,
      date: options.date,
      gov: options.provider,
    })
    .then(() => true);

export const detachPassport = () =>
  http.delete("/delete-passport").then((res) => {
    if (res.data.res !== "ok") throw new Error("Ошибка при удалении паспорта");
    else toast.success("Паспорт успешно отвязан");
  });

export const revalidateToken = (token: string) =>
  http
    .post<{ token: string }>("/update-token", { token })
    .then((res) => res.data);
