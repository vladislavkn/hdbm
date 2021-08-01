import { Section } from "@/layout";
import { Loading } from "@/utils";
import React from "react";
import useSWR from "swr";
import { fetchRooms, FETCH_ROOMS_KEY } from "../api";
import { Room, RoomFilterRecord } from "../types";
import RoomsList from "./RoomsList";

type SimilarRoomsProps = {
  filterRecord: RoomFilterRecord;
};

const SimilarRooms = ({ filterRecord }: SimilarRoomsProps) => {
  const { data, error } = useSWR<Room[], Error>(
    filterRecord ? [FETCH_ROOMS_KEY, filterRecord] : null,
    (_, filterRecord) => fetchRooms(filterRecord)
  );

  return (
    <Section title="Смотрите также">
      <Loading<Room[]> data={data} error={error}>
        {(data) => <RoomsList rooms={data} />}
      </Loading>
    </Section>
  );
};

export default SimilarRooms;
