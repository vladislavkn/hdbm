import {
  CircularProgress,
  Grid,
  makeStyles,
  Theme,
  Box,
} from "@material-ui/core";
import { Way } from "@root/lib/types";
import useLoader from "@root/lib/hooks/useLoader";
import WayCard from "./WayCard";
import DisplayError from "./DisplayError";
import waysService from "@root/lib/services/waysService";

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
  const { data, loading, error } = useLoader<Way[]>(
    () => waysService.loadAllWays(),
    []
  );

  if (loading) return <CircularProgress />;
  if (error) return <DisplayError message={error.message} />;

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
