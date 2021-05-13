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
  hotel: Hotel;
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
  imageUrl: string;
  title: string;
  text: string;
  href: string;
  objectsCount: number;
  id: ID;
};

export type WayDTO = {
  way_name: string;
  way_id: ID;
  way_description: string;
  photo_url: string;
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
