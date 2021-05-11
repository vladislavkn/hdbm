import { SERVER_URL } from "@root/lib/constants";
import { WayDTO, Way } from "@root/lib/types";

const getWays = () =>
  fetch(SERVER_URL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .then((res: WayDTO[]): Way[] =>
      res.map((w) => ({
        imageUrl: w.photo_url,
        title: w.way_name,
        text: w.way_description,
        href: `/search?way_id=${w.way_id}`,
        objectsCount: 0,
        id: w.way_id,
      }))
    );

export default getWays;
