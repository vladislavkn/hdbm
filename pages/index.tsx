import Layout from "@components/Layout";
import Section from "@components/Section";
import SearchRoomsBundle from "@components/SearchRoomsBundle";
import WayCardsBundle from "@components/WayCardsBundle";

export default function Home() {
  return (
    <Layout title="HDBM" noHorizontalPadding>
      <Section title="Популярные направления" dark>
        <WayCardsBundle />
      </Section>
      <Section title="Подобрать отель">
        <SearchRoomsBundle />
      </Section>
    </Layout>
  );
}
