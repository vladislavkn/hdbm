import { format } from "date-fns";
import { ID, Room, RoomFilterRecord } from "../types";
import { formatDate } from "../utils";
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
  loadAllRooms(filterRecord: RoomFilterRecord) {
    return httpService.request
      .get<RoomDTO[]>("/book", {
        params: {
          dfrom: formatDate(filterRecord.dateRange.startDate),
          dto: formatDate(filterRecord.dateRange.endDate),
          city: filterRecord.city,
          adults: filterRecord.adultPlaces,
          children: filterRecord.childPlaces,
        },
      })
      .then(httpService.catchNotStatusError)
      .then((res) => res.data.map(this._transformRoomDataFromDTO));
  },
  loadRoomById(id: ID) {
    return httpService.request
      .get<RoomDTO[]>(`/room/${id}`)
      .then(httpService.catchNotStatusError)
      .then((res) => res.data[0])
      .then(this._transformRoomDataFromDTO);
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
