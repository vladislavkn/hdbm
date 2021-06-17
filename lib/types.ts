/* Types */

export type ID = string | number;

export type Hotel = {
  title: string;
  id: ID;
};

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

export type RoomFilterRecord = {
  from: Date;
  to: Date;
  places: number;
  city: string;
};

export type Way = {
  image: string;
  title: string;
  id: ID;
};

export type RegisterPayload = {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
};

export type User = {
  firstname: string;
  lastname: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

/* Constants */

export const FETCH_WAYS_KEY = "FETCH_WAYS";
export const FETCH_ROOMS_KEY_PREFIX = "FETCH_ROOMS";
