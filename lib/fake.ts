import { Hotel, Room } from "./types";

export const fakeHotel: Hotel = {
  title: "Test hotel",
  id: 0,
};

export const fakeRoom: Room = {
  title: "Lorem ipsum",
  description:
    "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  images: ["https://picsum.photos/1300"],
  rating: 4,
  id: 0,
  price: 1440,
  hotel: fakeHotel,
  adress: {
    asText: "Улица им. Зубенко Михаила",
    city: "Москва",
  },
};

export const fakeWays = new Array(4).fill(null).map((_, index) => ({
  title: "Сочи",
  text: "Lorem ipsum dolor sit amet",
  imageUrl: "https://picsum.photos/1200",
  href: `/search?way_id=${index}`,
  objectsCount: index * 100,
  id: index,
}));
