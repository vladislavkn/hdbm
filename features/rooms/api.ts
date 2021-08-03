import http from "@root/lib/http";
import { DateRange, ID } from "@root/lib/types";
import { formatDate } from "@root/lib/utils";
import { RoomDTO, Room, RoomFilterRecord } from "./types";

export const FETCH_ROOMS_KEY = "FETCH_ROOMS";
export const fetchRooms = (filterRecord: RoomFilterRecord) =>
  http
    .get<RoomDTO[]>("/book", {
      params: {
        dfrom: formatDate(filterRecord.dateRange.startDate),
        dto: formatDate(filterRecord.dateRange.endDate),
        city: filterRecord.city,
        adults: filterRecord.adultPlaces,
        children: filterRecord.childPlaces,
      },
    })
    .then((res) => res.data.map(transformRoomDataFromDTO));

export const FETCH_ROOM_BY_ID = "FETCH_ROOM_BY_ID";
export const fetchRoomById = (id: ID) => {
  return http
    .get<RoomDTO[]>(`/room/${id}`)
    .then((res) => res.data[0])
    .then(transformRoomDataFromDTO);
};

const transformRoomDataFromDTO = (roomDto: RoomDTO): Room => ({
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
});

export const bookRoom = (roomId: ID, dateRange: DateRange) =>
  http.post("/book/" + roomId, {
    dto: formatDate(dateRange.startDate),
    dfrom: formatDate(dateRange.endDate),
  });
