import { addDays, format } from "date-fns";
import store from "./store";
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

type DialogsCallback = (resolve: (value: any) => void, value: any) => void;

export const chainDialogs = async (cb: DialogsCallback, value: any = null) => {
  return new Promise((resolve) => cb(resolve, value)).then((res) => {
    if (res) return { run: (cb) => chainDialogs(cb, res), res };
    throw "cancel";
  });
};

export const formatDate = (date: Date) => format(date, "yyyy-MM-dd");
