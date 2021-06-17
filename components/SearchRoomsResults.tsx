import { CircularProgress, Grid } from "@material-ui/core";
import { FETCH_ROOMS_KEY, Room, RoomFilterRecord } from "@root/lib/types";
import DisplayError from "./DisplayError";
import RoomCard from "./RoomCard";
import roomsService from "@root/lib/services/roomsService";
import useSWR from "swr";
import { useEffect } from "react";

type SearchRoomsResultsProps = {
  filterRecord: RoomFilterRecord;
};

const SearchRoomsResults = ({ filterRecord }: SearchRoomsResultsProps) => {
  const { data, error, mutate } = useSWR<Room[], Error>(FETCH_ROOMS_KEY, () =>
    roomsService.loadAllRooms(filterRecord)
  );

  useEffect(() => {
    mutate();
  }, [filterRecord.toString()]);

  if (error) return <DisplayError message={error.message} />;
  if (!data) return <CircularProgress />;

  return (
    <Grid container spacing={2}>
      {data.map((room) => (
        <Grid item xs={12} md={6} key={room.id}>
          <RoomCard room={room} href={`/room/${room.id}`} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchRoomsResults;
