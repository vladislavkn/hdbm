import { useRouter } from "next/router";
import { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import Layout from "@components/Layout";
import SearchRoomsBundle from "@components/SearchRoomsBundle";
import Section from "@components/Section";

const Search = () => {
  const { query } = useRouter();
  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <Layout title="HDBM: поиск отелей">
      <Section title="Поиск отелей">
        <SearchRoomsBundle />
      </Section>
    </Layout>
  );
};

export default Search;
