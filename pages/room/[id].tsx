import Layout from "@components/Layout";
import { DateRange, FETCH_ROOM_BY_ID, ID, Room } from "@root/lib/types";
import { CircularProgress } from "@material-ui/core";
import RoomsSearchResults from "@components/SearchRoomsResults";
import { fakeDefaultFilterRecord } from "@root/lib/fake";
import roomsService from "@root/lib/services/roomsService";
import Section from "@components/Section";
import useSWR from "swr";
import { useRouter } from "next/router";
import DisplayError from "@components/DisplayError";
import RoomData from "@components/Room/RoomData";
import React, { useCallback } from "react";
import DateRangeDialog from "@components/Dialogs/DateRangeDialog";
import { chainDialogs, createIsDayDisabledChecker } from "@root/lib/utils";
import { addDays, subDays } from "date-fns";
import { useSelector } from "@root/lib/hooks/typedStoreHooks";
import { useDialogs } from "@components/Dialogs/DialogsProvider";
import ActionDialog from "@components/Dialogs/ActionDialog";
import bookService from "@root/lib/services/bookService";
import { toast } from "material-react-toastify";

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
  const user = useSelector((store) => store.auth.user);
  const [open] = useDialogs();
  const router = useRouter();

  const { data, error } = useSWR<Room, Error>(FETCH_ROOM_BY_ID + id, () =>
    roomsService.loadRoomById(id as ID)
  );

  const onBook = useCallback(
    () =>
      chainDialogs((resolve) =>
        open<typeof DateRangeDialog>(DateRangeDialog, {
          title: "Выберите даты",
          onSubmit: (dateRange) => resolve(dateRange),
          onClose: () => resolve(null),
          dateRange: { startDate: today, endDate: today },
          checkIsDayDisabled: fakeChecker,
        })
      )
        .then(({ run, res }) =>
          run((resolve) => {
            if (!user)
              return open<typeof ActionDialog>(ActionDialog, {
                onClose: () => resolve(false),
                text: "Для совершения этого действия необходимо войти в аккаунт",
                title: "Войдите в аккаунт",
                onSubmit: () => router.push("/auth/login"),
                actionText: "Войти",
              });
            else if (!user.hasPassportData)
              return open<typeof ActionDialog>(ActionDialog, {
                onClose: () => resolve(false),
                text: "Для совершения этого действия необходимо привязать пасспорт к аккаунту",
                title: "Привяжите паспорт",
                onSubmit: () => router.push("/auth/attach-passport"),
                actionText: "Привязать",
              });
            else resolve(res);
          })
        )
        .then(({ run, res }) =>
          run((resolve) =>
            bookService
              .bookRoom(id as ID, res as DateRange)
              .then(() => resolve(true))
              .catch(() => toast.error("Ошибка при бронировании"))
          )
        )
        .then(({ run }) =>
          run((resolve) =>
            open<typeof ActionDialog>(ActionDialog, {
              onClose: () => resolve(false),
              text: "Комната успегно забронирована. Перейдите в раздел бронирования, чтобы узнать подробности",
              title: "Бронирование успешно",
              onSubmit: () => router.push("/bookings"),
              actionText: "Перейти",
            })
          )
        ),
    [user]
  );

  return (
    <Layout title="Страница комнаты">
      <Section>
        {error ? (
          <DisplayError message={error.message} />
        ) : data ? (
          <RoomData room={data} onClickBook={onBook} />
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
