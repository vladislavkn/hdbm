import { Hotel, Room, RoomFilterRecord } from "./types";

export const fakeHotel: Hotel = {
  title: "Test hotel",
  id: 0,
};

export const fakeRooms: Room[] = new Array(4).fill(null).map((_, index) => ({
  title: "Lorem ipsum",
  description:
    "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  images: ["https://picsum.photos/1300", "https://picsum.photos/1301"],
  rating: 4,
  reviews: index * 14 + 2,
  id: index,
  price: 1440 * index + 100,
  hotel: fakeHotel,
  adress: {
    asText: "Улица им. Зубенко Михаила",
    city: "Москва",
  },
}));

export const fakeWays = new Array(4).fill(null).map((_, index) => ({
  title: "Сочи",
  text: "Lorem ipsum dolor sit amet",
  imageUrl: "https://picsum.photos/1200",
  href: `/search?way_id=${index}`,
  objectsCount: index * 100,
  id: index,
}));

export const fakeDefaultFilterRecord: RoomFilterRecord = {
  dateRange: { startDate: new Date(), endDate: new Date() },
  adultPlaces: 0,
  childPlaces: 0,
  city: "Москва",
};
