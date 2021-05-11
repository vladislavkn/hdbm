import { fakeRooms } from "@root/lib/fake";
import { RoomFilterRecord, Room } from "@root/lib/types";

const getRooms = async (filterRecord: RoomFilterRecord): Promise<Room[]> =>
  new Promise((resolve) => setTimeout(() => resolve(fakeRooms), 2000));

export default getRooms;
