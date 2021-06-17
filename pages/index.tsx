import Layout from "@components/Layout";
import Section from "@components/Section";
import SearchRoomsSection from "@components/SearchRoomsSection";
import WayCardsBundle from "@components/WayCardsBundle";

export default function Home() {
  return (
    <Layout title="HDBM">
      <Section title="Популярные направления" dark>
        <WayCardsBundle />
      </Section>
      <SearchRoomsSection title="Подобрать отель" />
    </Layout>
  );
}
