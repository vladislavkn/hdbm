type ID = string | number;

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
