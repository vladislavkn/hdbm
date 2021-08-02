import { addDays, format } from "date-fns";
import { DateRange } from "./types";
const crypto = require("crypto");

export const joinClasses = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");

export const createIsDayDisabledChecker =
  (dates: { startDate: Date; endDate: Date }[]) => (day: Date) =>
    !dates.every(
      ({ startDate, endDate }) =>
        day.getTime() < startDate.getTime() || day.getTime() > endDate.getTime()
    );

export const checkDateRange = (
  dateRange: DateRange,
  checker: ReturnType<typeof createIsDayDisabledChecker>
) => {
  let currentDate = dateRange.startDate;
  while (currentDate.getTime() <= dateRange.endDate.getTime()) {
    if (checker(currentDate)) return false;
    currentDate = addDays(currentDate, 1);
  }
  return true;
};

export const clamp = (value: string | number, min: number, max: number) => {
  if (typeof value !== "number") value = parseInt(value);
  return Math.max(Math.min(value, max), min);
};

export const uuid = () => crypto.randomBytes(16).toString("hex");

export const formatDate = (date: Date) => format(date, "yyyy-MM-dd");
export const formatDateHumanReadable = (date: Date) =>
  format(date, "dd.MM.yyyy");

export const parseJwt = (token: string) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

type DialogCallback = (resolve: (value?: any) => void, value: any) => any;

export class DialogsChain {
  chain: DialogCallback[] = [];
  value: any;
  constructor(initialDialog: DialogCallback) {
    return this.then(initialDialog);
  }
  then(dialog: DialogCallback) {
    this.chain.push(dialog);
    return this;
  }
  async run() {
    for (let dialogCallback of this.chain) {
      this.value = await new Promise((resolve) =>
        dialogCallback(resolve, this.value)
      );
      if (!this.value) return;
    }
  }
}

export const isObject = (value: any) =>
  value !== null && typeof value === "object" && typeof value !== "function";

export const trimObjectDeep = <T = Record<any, any>>(value: T) => {
  for (const key in value) {
    const payload = value[key];
    if (isObject(value[key]))
      value[key] = trimObjectDeep<typeof payload>(value[key]);
    else if (typeof value[key] === "string")
      value[key] = (
        value[key] as unknown as string
      ).trim() as unknown as T[Extract<keyof T, string>];
  }

  return value;
};
