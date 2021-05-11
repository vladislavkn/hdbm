import { CircularProgress, Grid } from "@material-ui/core";
import getRooms from "@root/api/getRooms";
import { Room, RoomFilterRecord } from "@root/lib/types";
import useLoadData from "@root/lib/useLoadData";
import Error from "./Error";
import RoomCard from "./RoomCard";

type SearchRoomsResultsProps = {
  filterRecord: RoomFilterRecord;
};

const SearchRoomsResults = ({ filterRecord }: SearchRoomsResultsProps) => {
  const { data, loading, error } = useLoadData<Room[]>(
    () => getRooms(filterRecord),
    []
  );

  if (loading) return <CircularProgress />;

  if (error) return <Error message={error.message} />;

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
