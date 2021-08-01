import http from "@root/lib/http";
import { WayDTO, Way } from "./types";

export const FETCH_WAYS_KEY = "FETCH_WAYS_KEY";
export const fetchWays = () =>
  http.get<WayDTO[]>("/").then((res) => res.data.map(transformWayDataFromDTO));

const transformWayDataFromDTO = (wayDTO: WayDTO): Way => ({
  image: wayDTO.photo_url,
  title: wayDTO.way_name,
  id: wayDTO.way_id,
});
