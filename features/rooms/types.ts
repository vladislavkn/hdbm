import { DateRange, ID } from "@root/lib/types";

type Adress = {
  asText: string;
  city: string;
};

export type Room = {
  title: string;
  description: string;
  rating: number;
  reviews: number;
  images: string[];
  price: number;
  adress: Adress;
  id: ID;
};

export type RoomDTO = {
  adress: string;
  description: string;
  hotel_id: number;
  photos: string[];
  places: number;
  price: number;
  rating: number;
  reviews: number;
  room_id: ID;
  room_name: string;
  services: number;
};

export type RoomFilterRecord = {
  dateRange: DateRange;
  adultPlaces: number;
  childPlaces: number;
  city: string;
};
