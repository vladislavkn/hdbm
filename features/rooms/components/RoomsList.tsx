import { Grid, Typography } from "@material-ui/core";
import { Room } from "../types";
import RoomCard from "./RoomCard";

type RoomsListProps = {
  rooms: Room[];
};

const RoomsList = ({ rooms }: RoomsListProps) => (
  <Grid container spacing={2}>
    {rooms.map((room) => (
      <Grid item xs={12} sm={6} lg={4} key={room.id}>
        <RoomCard room={room} href={`/room/${room.id}`} />
      </Grid>
    ))}
    {rooms.length === 0 && (
      <Grid item xs={12}>
        <Typography align="center" variant="body1">
          Ничего не найдено
        </Typography>
      </Grid>
    )}
  </Grid>
);

export default RoomsList;
