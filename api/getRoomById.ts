import { fakeRooms } from "@root/lib/fake";
import { ID } from "@root/lib/types";

const getRoomById = async (id: ID) =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(fakeRooms.find((r) => r.id.toString() === id.toString())),
      2000
    )
  );

export default getRoomById;
