import { ID } from "@root/lib/types";

export type Booking = {
  startDate: Date;
  endDate: Date;
  roomId: ID;
  roomTitle: string;
  roomImageUrl: string;
  id: ID;
};

export type BookingDTO = {
  date_from: string;
  date_to: string;
  id: ID;
  image_url: string;
  pricePerDay: number;
  room_id: ID;
  room_name: string;
  totalPrice: number;
  user_id: ID;
};
