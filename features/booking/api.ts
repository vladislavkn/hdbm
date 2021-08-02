import http from "@root/lib/http";
import { BookingDTO } from "./types";
import { transformBooking } from "./utils";

export const getBookings = () =>
  http
    .get<BookingDTO[]>("/get-bookings")
    .then((res) => res.data.map(transformBooking));
