import { CircularProgress, Grid } from "@material-ui/core";
import { Room, RoomFilterRecord } from "@root/lib/types";
import useLoader from "@root/lib/hooks/useLoader";
import DisplayError from "./DisplayError";
import RoomCard from "./RoomCard";
import roomsService from "@root/lib/services/roomsService";

type SearchRoomsResultsProps = {
  filterRecord: RoomFilterRecord;
};

const SearchRoomsResults = ({ filterRecord }: SearchRoomsResultsProps) => {
  const { data, loading, error } = useLoader<Room[]>(
    () => roomsService.getAllRooms(filterRecord),
    []
  );

  if (loading) return <CircularProgress />;
  if (error) return <DisplayError message={error.message} />;

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
