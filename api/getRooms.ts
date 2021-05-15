import { fakeRooms } from "@root/lib/fake";
import { RoomFilterRecord, Room, ID } from "@root/lib/types";

type roomDTO = {
  description: string;
  hotel_id: number;
  photoes: string;
  places: number;
  room_id: ID;
  room_name: string;
  services: string;
};

const getRooms = async (filterRecord: RoomFilterRecord): Promise<Room[]> =>
  new Promise((resolve) => setTimeout(() => resolve(fakeRooms), 2000));

export default getRooms;
