import { ID, Way } from "../types";
import httpService from "./httpService";

type WayDTO = {
  way_name: string;
  way_id: ID;
  way_description: string;
  photo_url: string;
};

const waysService = {
  loadAllWays() {
    return httpService.request
      .get<WayDTO[]>("/")
      .then(httpService.catchNotStatusError)
      .then((res) => res.data.map(this._transformWayDataFromDTO));
  },
  _transformWayDataFromDTO(wayDTO: WayDTO) {
    return {
      imageUrl: wayDTO.photo_url,
      title: wayDTO.way_name,
      text: wayDTO.way_description,
      href: `/search?way_id=${wayDTO.way_id}`,
      objectsCount: 0,
      id: wayDTO.way_id,
    };
  },
};

export default waysService;
