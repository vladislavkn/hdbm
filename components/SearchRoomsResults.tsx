import { CircularProgress, Grid } from "@material-ui/core";
import { Room, RoomFilterRecord } from "@root/lib/types";
import DisplayError from "./DisplayError";
import RoomCard from "./RoomCard";
import roomsService from "@root/lib/services/roomsService";
import useSWR from "swr";
import { generateFetchRoomsKey } from "@root/lib/utils";

type SearchRoomsResultsProps = {
  filterRecord: RoomFilterRecord;
};

const SearchRoomsResults = ({ filterRecord }: SearchRoomsResultsProps) => {
  const { data, error } = useSWR<Room[], Error>(
    generateFetchRoomsKey(filterRecord),
    () => roomsService.loadAllRooms(filterRecord)
  );

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
