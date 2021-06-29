import Layout from "@components/Layout";
import { FETCH_ROOM_BY_ID, ID, Room } from "@root/lib/types";
import { CircularProgress } from "@material-ui/core";
import RoomsSearchResults from "@components/SearchRoomsResults";
import { fakeDefaultFilterRecord } from "@root/lib/fake";
import roomsService from "@root/lib/services/roomsService";
import Section from "@components/Section";
import useSWR from "swr";
import { useRouter } from "next/router";
import DisplayError from "@components/DisplayError";
import RoomData from "@components/RoomData";

const RoomPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { data, error } = useSWR<Room, Error>(FETCH_ROOM_BY_ID, () =>
    roomsService.getRoomById(id as ID)
  );

  return (
    <Layout title="Страница комнаты">
      <Section dark>
        {error ? (
          <DisplayError message={error.message} />
        ) : data ? (
          <RoomData room={data} />
        ) : (
          <CircularProgress />
        )}
      </Section>
      <Section title="Смотрите также">
        <RoomsSearchResults filterRecord={fakeDefaultFilterRecord} />
      </Section>
    </Layout>
  );
};

export default RoomPage;
