import { Grid, makeStyles, Theme } from "@material-ui/core";
import { Way } from "../types";
import WayCard from "./WayCard";

type WaysListProps = {
  ways: Way[];
};

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

const WaysList = ({ ways }: WaysListProps) => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.container}>
      {ways.map((way) => (
        <Grid item className={classes.item} key={way.id}>
          <WayCard way={way} href={`/search?city=${way.title}`} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WaysList;
