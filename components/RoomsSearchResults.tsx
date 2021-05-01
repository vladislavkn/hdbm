import { CircularProgress } from "@material-ui/core";
import getRooms from "@root/api/getRooms";
import { Room, RoomFilterRecord } from "@root/lib/types";
import { useEffect, useState } from "react";
import Centered from "./Centered";
import RoomCard from "./RoomCard";

type RoomSearchResultsProps = {
  filterRecord: RoomFilterRecord;
};

const RoomsSearchResults = ({ filterRecord }: RoomSearchResultsProps) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const loadedRooms = await getRooms(filterRecord);
      setRooms(loadedRooms);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, [filterRecord]);

  return (
    <>
      {!loading ? (
        rooms.map((room) => (
          <div style={{ paddingTop: 8 }} key={room.id}>
            <RoomCard room={room} href={`/room/${room.id}`} />
          </div>
        ))
      ) : (
        <Centered>
          <CircularProgress />
        </Centered>
      )}
    </>
  );
};

export default RoomsSearchResults;
