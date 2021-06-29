import { ID } from "../types";
import httpService from "./httpService";

type BookService = {
  checkIfRoomIsBooked: (
    roomId: ID,
    fromDate: Date,
    toDate: Date
  ) => Promise<{ isBooked: boolean; byUser: boolean }>;
  bookRoom: (roomId: ID) => void;
  removeRoomBooking: (roomId: ID) => void;
};

const bookService: BookService = {
  async checkIfRoomIsBooked(roomId, fromDate, toDate) {
    return { isBooked: false, byUser: false };
  },
  bookRoom(roomId) {
    return httpService.request
      .post(`/book/${roomId}`)
      .then(httpService.catchNotStatusError);
  },
  removeRoomBooking(roomId) {},
};

export default bookService;
