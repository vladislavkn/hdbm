import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { FETCH_ROOMS_KEY, Room, RoomFilterRecord } from "@root/lib/types";
import DisplayError from "./DisplayError";
import RoomCard from "./RoomCard";
import roomsService from "@root/lib/services/roomsService";
import useSWR from "swr";

type SearchRoomsResultsProps = {
  filterRecord: RoomFilterRecord;
};

const SearchRoomsResults = ({ filterRecord }: SearchRoomsResultsProps) => {
  const { data, error } = useSWR<Room[], Error>(
    filterRecord ? [FETCH_ROOMS_KEY, filterRecord] : null,
    (_, filterRecord) => roomsService.loadAllRooms(filterRecord)
  );

  if (error) return <DisplayError message={error.message} />;
  if (!data) return <CircularProgress />;

  return (
    <Grid container spacing={2}>
      {data.map((room) => (
        <Grid item xs={12} md={6} lg={4} key={room.id}>
          <RoomCard room={room} href={`/room/${room.id}`} />
        </Grid>
      ))}
      {data.length === 0 && (
        <Grid item xs={12}>
          <Typography align="center" variant="body1">
            Ничего не найдено
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default SearchRoomsResults;
