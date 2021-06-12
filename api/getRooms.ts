import { SERVER_URL } from "@root/lib/constants";
import { RoomFilterRecord, Room, roomDTO } from "@root/lib/types";
import axios from "axios";

const getRooms = async (filterRecord: RoomFilterRecord) =>
  axios.get<roomDTO[]>(SERVER_URL + "/room").then((res) =>
    res.data.map(
      (r): Room => ({
        title: r.room_name,
        description: r.description,
        rating: r.rating,
        reviews: r.reviews,
        images: r.photos,
        price: r.price,
        adress: {
          asText: r.adress,
          city: "Moskow",
        },
        id: r.room_id,
      })
    )
  );

export default getRooms;
