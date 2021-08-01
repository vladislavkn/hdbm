import { PopularWays } from "@/ways";
import { RoomsSearch } from "@/rooms";
import { Layout } from "@/layout";
import React from "react";

export default function Home() {
  return (
    <Layout title="Travels">
      <PopularWays />
      <RoomsSearch title="Подобрать отель" />
    </Layout>
  );
}
