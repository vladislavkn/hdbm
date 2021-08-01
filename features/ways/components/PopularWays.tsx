import React from "react";
import { useWays } from "../hooks";
import WaysList from "./WaysList";
import Loading from "@/utils/components/Loading";
import { Way } from "../types";
import Section from "@/layout/components/Section";

const PopularWays = () => {
  const [data, error] = useWays();

  return (
    <Section title="Популярные направления" dark>
      <Loading<Way[]> data={data} error={error}>
        {(data) => <WaysList ways={data} />}
      </Loading>
    </Section>
  );
};

export default PopularWays;
