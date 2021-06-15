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
  _transformWayDataFromDTO(wayDTO: WayDTO): Way {
    return {
      image: wayDTO.photo_url,
      title: wayDTO.way_name,
      id: wayDTO.way_id,
    };
  },
};

export default waysService;
