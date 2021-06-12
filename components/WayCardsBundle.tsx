import { CircularProgress, Grid, makeStyles, Theme } from "@material-ui/core";
import getWays from "@root/api/getWays";
import { Way } from "@root/lib/types";
import useLoader from "@root/lib/hooks/useLoader";
import { useMemo } from "react";
import Carousel from "react-material-ui-carousel";
import WayCard from "./WayCard";
import DisplayError from "./DisplayError";

const useStyles = makeStyles((theme: Theme) => ({
  carouselDisplay: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  gridDisplay: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const WayCardsBundle = () => {
  const classes = useStyles();
  const { data, loading, error } = useLoader<Way[]>(getWays, []);

  const wayCards = useMemo(
    () => data.map((way) => <WayCard way={way} key={way.id} />),
    [data]
  );

  if (loading) return <CircularProgress />;
  if (error) return <DisplayError message={error.message} />;

  return (
    <>
      <Carousel
        animation="slide"
        autoPlay={false}
        navButtonsAlwaysInvisible
        className={classes.carouselDisplay}
      >
        {wayCards}
      </Carousel>
      <Grid container spacing={2} className={classes.gridDisplay}>
        {data.map(({ id }, i) => (
          <Grid item sm={6} md={3} key={id}>
            {wayCards[i]}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WayCardsBundle;
