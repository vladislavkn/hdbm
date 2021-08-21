import { Layout, Section } from "@/layout";
import React from "react";
import { RoomFormDTO } from "../types";
import HotelierCreateRoomForm from "../components/HotelierCreateRoomForm";
import { createRoom } from "../api";
import { toast } from "material-react-toastify";

export default function HotelierCreateRoom() {
  return (
    <Layout title="Создать комнату">
      <Section title="Новая комната">
        <HotelierCreateRoomForm
          onSubmit={(data) =>
            createRoom(data, "1")
              .then(() => toast.success("Комната успешно создана"))
              .catch((e) => toast.error("Ошибка при создании комнаты"))
          }
        />
      </Section>
    </Layout>
  );
}
