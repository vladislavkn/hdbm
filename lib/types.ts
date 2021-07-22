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
  dateRange: DateRange;
  adultPlaces: number;
  childPlaces: number;
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
  email: string;
  hasPassportData: boolean;
  id: ID;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type DateRange = {
  startDate: Date;
  endDate: Date;
  key?: string;
};

export type PassportData = {
  number: number;
  series: number;
  provider: string;
  date: Date;
  file: FileList;
};

export type DialogProps = {
  onClose: () => void;
  isOpen: boolean;
};

/* Utils */

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/* Constants */

export const FETCH_WAYS_KEY = "FETCH_WAYS";
export const FETCH_ROOMS_KEY = "FETCH_ROOMS";
export const FETCH_ROOM_BY_ID = "FETCH_ROOM_BY_ID";
