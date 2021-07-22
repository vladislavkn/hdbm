import { AxiosResponse } from "axios";
import { DateRange, ID } from "../types";
import { formatDate } from "../utils";
import httpService from "./httpService";

type BookService = {
  checkIfRoomIsBooked: (
    roomId: ID,
    fromDate: Date,
    toDate: Date
  ) => Promise<{ isBooked: boolean; byUser: boolean }>;
  bookRoom: (roomId: ID, dateRange: DateRange) => Promise<AxiosResponse<any>>;
  removeRoomBooking: (roomId: ID) => void;
};

const bookService: BookService = {
  async checkIfRoomIsBooked(roomId, fromDate, toDate) {
    return { isBooked: false, byUser: false };
  },
  bookRoom(roomId, dateRange) {
    return httpService.request
      .post(`/book/${roomId}`, {
        dfrom: formatDate(dateRange.startDate),
        dto: formatDate(dateRange.endDate),
      })
      .then(httpService.catchNotStatusError);
  },
  removeRoomBooking(roomId) {},
};

export default bookService;
