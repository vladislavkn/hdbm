import { RoomFilterRecord } from "./types";

export const joinClasses = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");

export const createIfDayDisabledChecker =
  (dates: { startDate: Date; endDate: Date }[]) => (day: Date) =>
    dates.every(
      ({ startDate, endDate }) =>
        day.getTime() < startDate.getTime() && day.getTime() > endDate.getTime()
    );
