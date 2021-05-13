import Layout from "@components/Layout";
import Section from "@components/Section";
import SearchRoomsBundle from "@components/SearchRoomsBundle";
import WayCardsBundle from "@components/WayCardsBundle";

export default function Home() {
  return (
    <Layout title="HDBM">
      <Section title="Популярные направления">
        <WayCardsBundle />
      </Section>
      <Section title="Подобрать отель" mainHeader noDivider>
        <SearchRoomsBundle />
      </Section>
    </Layout>
  );
}
