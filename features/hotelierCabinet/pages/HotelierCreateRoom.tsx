import { Layout, Section } from "@/layout";
import React from "react";
import HotelierCreateRoomForm from "../components/HotelierCreateRoomForm";

export default function HotelierCreateRoom() {
  return (
    <Layout title="Создать комнату">
      <Section title="Новая комната">
        <HotelierCreateRoomForm onSubmit={console.log} />
      </Section>
    </Layout>
  );
}
