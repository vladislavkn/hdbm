import { useRouter } from "next/router";
import Layout from "@/layout/components/Layout";
import RoomsSearch from "@root/features/rooms/components/RoomsSearch";

const Search = () => {
  const {
    query: { city },
  } = useRouter();

  return (
    <Layout title="HDBM: поиск отелей">
      <RoomsSearch
        title="Поиск отелей"
        city={Array.isArray(city) ? city[0] : city}
      />
    </Layout>
  );
};

export default Search;
