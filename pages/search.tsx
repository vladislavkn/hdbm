import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "@components/Layout";
import SearchRoomsSection from "@components/SearchRoomsSection";

const Search = () => {
  const { query } = useRouter();
  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <Layout title="HDBM: поиск отелей">
      <SearchRoomsSection title="Поиск отелей" />
    </Layout>
  );
};

export default Search;
