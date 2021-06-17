import { RoomFilterRecord } from "./types";

export const joinClasses = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");
