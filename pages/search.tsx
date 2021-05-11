import { useRouter } from "next/router";
import { useEffect } from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import Layout from "@components/Layout";
import SearchRoomsBundle from "@components/SearchRoomsBundle";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    paddingBottom: theme.spacing(3),
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "6rem",
    },
  },
}));

const Search = () => {
  const classes = useStyles();
  const { query } = useRouter();
  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <Layout title="HDBM: поиск отелей">
      <Typography className={classes.title}>Поиск отелей</Typography>
      <SearchRoomsBundle />
    </Layout>
  );
};

export default Search;
