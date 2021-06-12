import { CircularProgress, Grid, makeStyles, Theme } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import getWays from "@root/api/getWays";
import { fakeWays } from "@root/lib/fake";
import { Way } from "@root/lib/types";
import useLoadData from "@root/lib/hooks/useLoadData";
import { useMemo } from "react";
import Carousel from "react-material-ui-carousel";
import WayCard from "./WayCard";

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
  const { data, loading, error } = useLoadData<Way[]>(getWays, []);

  const wayCards = useMemo(
    () => data.map((way) => <WayCard way={way} key={way.id} />),
    [data]
  );

  if (loading) return <CircularProgress />;
  if (error)
    return (
      <Alert severity="error">
        Ошибка: <pre style={{ display: "inline" }}>{error.message}</pre>
      </Alert>
    );

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
        {fakeWays.map(({ id }, i) => (
          <Grid item sm={6} md={3} key={id}>
            {wayCards[i]}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WayCardsBundle;
