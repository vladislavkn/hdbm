import { fakeRoom } from "@root/lib/fake";
import { RoomFilterRecord, Room } from "@root/lib/types";

const getRooms = async (filterRecord: RoomFilterRecord): Promise<Room[]> =>
  new Promise((resolve) => setTimeout(() => resolve([fakeRoom]), 2000));

export default getRooms;
