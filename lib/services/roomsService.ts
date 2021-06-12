import axios from "axios";
import { SERVER_URL } from "../constants";
import { ID, Room, RoomFilterRecord } from "../types";
import httpService from "./httpService";

type RoomDTO = {
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

const roomsService = {
  getAllRooms(filterRecord: RoomFilterRecord) {
    return httpService.request
      .get<RoomDTO[]>(SERVER_URL + "/room", {
        params: filterRecord,
      })
      .then(httpService.handleNotStatusError)
      .then((res) => res.data.map(this._transformRoomDataFromDTO));
  },
  getRoomById(id: ID) {
    return httpService.request
      .get<RoomDTO[]>(`/room/${id}`)
      .then(httpService.handleNotStatusError)
      .then((res) => res.data[0])
      .then(this._transformRoomDataFromDTO)
      .catch(httpService.handleError);
  },
  _transformRoomDataFromDTO(roomDto: RoomDTO): Room {
    return {
      title: roomDto.room_name,
      description: roomDto.description,
      rating: roomDto.rating,
      reviews: roomDto.reviews,
      images: roomDto.photos,
      price: roomDto.price,
      adress: {
        asText: roomDto.adress,
        city: "Moskow",
      },
      id: roomDto.room_id,
    };
  },
};

export default roomsService;
