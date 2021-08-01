import { Layout } from "@/layout";
// import { DateRange, ID } from "@root/lib/types";
import { Room } from "../types";
import { fakeDefaultFilterRecord } from "@root/lib/fake";
import useSWR from "swr";
import { useRouter } from "next/router";
import React from "react";
import DateRangeDialog from "@components/Dialogs/DateRangeDialog";
import { createIsDayDisabledChecker, DialogsChain } from "@root/lib/utils";
import { addDays, subDays } from "date-fns";
import { useDialogs } from "@components/Dialogs/DialogsProvider";
import ActionDialog from "@components/Dialogs/ActionDialog";
import { toast } from "material-react-toastify";
import RoomDetails from "../components/RoomDetails";
import SimilarRooms from "../components/SimilarRooms";
import Loading from "@/utils/components/Loading";
import { fetchRoomById, FETCH_ROOM_BY_ID } from "../api";
import { useAuth } from "@/auth";

const today = new Date();

const fakeChecker = createIsDayDisabledChecker([
  {
    startDate: addDays(today, 2),
    endDate: addDays(today, 4),
  },
  {
    startDate: addDays(today, 8),
    endDate: addDays(today, 15),
  },
  {
    startDate: subDays(today, 11),
    endDate: subDays(today, 8),
  },
]);

const RoomPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { user } = useAuth();
  const [open] = useDialogs();
  const router = useRouter();

  const { data, error } = useSWR<Room, Error>([FETCH_ROOM_BY_ID, id], (_, id) =>
    fetchRoomById(id)
  );

  const onBook = async () => {
    await new DialogsChain((resolve) =>
      open<typeof DateRangeDialog>(DateRangeDialog, {
        title: "Выберите даты",
        onSubmit: (dateRange) => resolve(dateRange),
        onClose: () => resolve(),
        dateRange: { startDate: today, endDate: today },
        checkIsDayDisabled: fakeChecker,
      })
    )
      .then((resolve, value) => {
        if (!user)
          return open<typeof ActionDialog>(ActionDialog, {
            onClose: () => resolve(),
            text: "Для совершения этого действия необходимо войти в аккаунт",
            title: "Войдите в аккаунт",
            onSubmit: () => router.push("/auth/login"),
            actionText: "Войти",
          });
        else if (!user.hasPassportData)
          return open<typeof ActionDialog>(ActionDialog, {
            onClose: () => resolve(),
            text: "Для совершения этого действия необходимо привязать пасспорт к аккаунту",
            title: "Привяжите паспорт",
            onSubmit: () => router.push("/auth/attach-passport"),
            actionText: "Привязать",
          });
        else resolve(value);
      })
      .then((resolve) =>
        open<typeof ActionDialog>(ActionDialog, {
          onClose: () => resolve(),
          text: "Комната успегно забронирована. Перейдите в раздел бронирования, чтобы узнать подробности",
          title: "Бронирование успешно",
          onSubmit: () => router.push("/bookings"),
          actionText: "Перейти",
        })
      )
      .run();
  };

  return (
    <Layout title="Страница комнаты">
      <Loading<Room> data={data} error={error}>
        {(data) => <RoomDetails room={data} onBook={onBook} />}
      </Loading>
      <SimilarRooms filterRecord={fakeDefaultFilterRecord} />
    </Layout>
  );
};

export default RoomPage;
