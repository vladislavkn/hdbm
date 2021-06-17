import { FETCH_ROOMS_KEY_PREFIX, RoomFilterRecord } from "./types";

export const joinClasses = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");

export const generateFetchRoomsKey = (filterRecord: RoomFilterRecord) =>
  `${FETCH_ROOMS_KEY_PREFIX}_${JSON.stringify(filterRecord)}`;
