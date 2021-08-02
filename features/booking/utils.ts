import { trimObjectDeep } from "@root/lib/utils";
import { parse } from "date-fns";
import { Booking, BookingDTO } from "./types";

export const transformBooking = (bookingDTO: BookingDTO) =>
  trimObjectDeep<Booking>({
    startDate: parse(bookingDTO.date_from, "yyyy-MM-dd", new Date()),
    endDate: parse(bookingDTO.date_to, "yyyy-MM-dd", new Date()),
    roomId: bookingDTO.room_id,
    roomTitle: bookingDTO.room_name,
    roomImageUrl: bookingDTO.image_url,
    id: bookingDTO.id,
  });
