import { CircularProgress, Grid, makeStyles, Theme } from "@material-ui/core";
import { FETCH_WAYS_KEY, Way } from "@root/lib/types";
import WayCard from "./WayCard";
import DisplayError from "./DisplayError";
import waysService from "@root/lib/services/waysService";
import useSWR from "swr";

const useStyles = makeStyles((_: Theme) => ({
  container: {
    flexWrap: "nowrap",
    overflow: "auto",
    alignItems: "stretch",
  },
  item: {
    flexShrink: 1,
  },
}));

const WayCardsBundle = () => {
  const classes = useStyles();
  const { data, error } = useSWR<Way[], Error>(FETCH_WAYS_KEY, () =>
    waysService.loadAllWays()
  );

  if (error) return <DisplayError message={error.message} />;
  if (!data) return <CircularProgress />;

  return (
    <Grid container spacing={4} className={classes.container}>
      {data.map((way) => (
        <Grid item className={classes.item} key={way.id}>
          <WayCard way={way} href={`/search?way_id=${way.id}`} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WayCardsBundle;
