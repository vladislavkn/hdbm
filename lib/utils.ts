import { Message, notify as notifyAction } from "./slices/notifications";
import store from "./store";

export const joinClasses = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");

export const createIfDayDisabledChecker =
  (dates: { startDate: Date; endDate: Date }[]) => (day: Date) =>
    !dates.every(
      ({ startDate, endDate }) =>
        day.getTime() < startDate.getTime() || day.getTime() > endDate.getTime()
    );

export const clamp = (value: string | number, min: number, max: number) => {
  if (typeof value !== "number") value = parseInt(value);
  return Math.max(Math.min(value, max), min);
};

export const notify = (text: string, options?: Partial<Message>) =>
  store.dispatch(notifyAction({ text, ...options }));
