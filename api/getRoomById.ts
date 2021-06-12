import { SERVER_URL } from "@root/lib/constants";
import { ID, Room, roomDTO } from "@root/lib/types";
import axios from "axios";

const getRoomById = async (id: ID) =>
  axios
    .get<roomDTO[]>(SERVER_URL + "/room/" + id)
    .then((res) => res.data[0])
    .then(
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
    );

export default getRoomById;
