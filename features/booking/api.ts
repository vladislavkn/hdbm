import http from "@root/lib/http";
import { toast } from "material-react-toastify";
import { Booking, BookingDTO } from "./types";
import { transformBooking } from "./utils";

export const getBookings = () =>
  http
    .get<BookingDTO[]>("/get-bookings")
    .then((res) => res.data.map(transformBooking));

export const removeBooking = (id: Booking["id"]) => {
  toast.success("Бронирование отменено");
};
