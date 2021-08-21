import http from "@root/lib/http";
import { RoomFormDTO } from "./types";

export const createRoom = (roomFormDTO: RoomFormDTO, hotelId: string) =>
  http.post("/hotel/" + hotelId, {
    name: roomFormDTO.name,
    adults: roomFormDTO.adultPlaces,
    children: roomFormDTO.childPlaces,
    adress: roomFormDTO.adress,
    description: roomFormDTO.description,
    services: 0,
    price: roomFormDTO.price,
    photos: roomFormDTO.images.map((img) => img.link),
  });
export const saveInLocalStorage = () => null;
export const loadFromLocalStorage = () => null;
