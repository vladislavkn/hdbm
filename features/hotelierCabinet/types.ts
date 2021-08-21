export type RoomFormDTO = Partial<{
  adultPlaces: number;
  childPlaces: number;
  price: number;
  name: string;
  description: String;
  city: string;
  adress: string;
  images: {
    link: string;
  }[];
}>;
