import { ID } from "@root/lib/types";

export type WayDTO = {
  way_name: string;
  way_id: ID;
  way_description: string;
  photo_url: string;
};

export type Way = {
  image: string;
  title: string;
  id: ID;
};
