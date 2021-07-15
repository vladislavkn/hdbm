import { joinClasses, createIfDayDisabledChecker } from "@root/lib/utils";
import { addDays, subDays } from "date-fns";
import { Grid, Button, Typography, makeStyles, Theme } from "@material-ui/core";
import { Room } from "@root/lib/types";
import Carousel from "react-material-ui-carousel";
import { Rating } from "@material-ui/lab";
import { LocationOnOutlined } from "@material-ui/icons";
import React, { useMemo, useState } from "react";
import DateRangeDialog from "./DateRangeDialog";

type RoomDataProps = {
  room: Room;
};

const useStyles = makeStyles((theme: Theme) => ({
  img: {
    width: "100%",
    objectFit: "cover",
    maxHeight: 512,
    [theme.breakpoints.down("xs")]: {
      height: 256,
    },
  },
  carousel: {
    width: "100%",
  },
  rating: {
    marginRight: theme.spacing(1),
  },
  content: {
    marginBottom: theme.spacing(2),
  },
  about: {
    height: "100%",
  },
  infoItemShrink: {
    flexShrink: 1,
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
  },
}));

const RoomData = ({ room }: RoomDataProps) => {
  const classes = useStyles();
  const today = useMemo(() => new Date(), []);
  const [open, setOpen] = useState(false);

  return (
    <Grid container spacing={2} className={classes.content}>
      <Grid item xs={12} md={8}>
        <Carousel
          animation="slide"
          navButtonsAlwaysInvisible
          className={classes.carousel}
        >
          {room.images.map((img) => (
            <img src={img} className={classes.img} key={img} />
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid item container spacing={1} direction="column">
          <Grid item>
            <Typography variant="h6" gutterBottom>
              {room.title}
            </Typography>
          </Grid>
          <Grid item container xs={12} md={8} spacing={1}>
            <Grid
              item
              className={joinClasses(classes.infoItemShrink, classes.infoItem)}
            >
              <Rating value={room.rating} readOnly className={classes.rating} />
              <Typography variant="body2" color="textSecondary">
                {room.reviews}
              </Typography>
            </Grid>
            <Grid
              item
              className={joinClasses(classes.infoItemShrink, classes.infoItem)}
            >
              <Typography variant="subtitle1" color="textSecondary">
                {room.price} рублей
              </Typography>
            </Grid>
            <Grid item className={classes.infoItem} xs={12}>
              <LocationOnOutlined color="secondary" />
              <Typography variant="subtitle1" color="textSecondary">
                {room.adress.asText}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>{room.description}</Typography>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              disableElevation
              fullWidth
              onClick={() => setOpen(true)}
            >
              Оформить
            </Button>
          </Grid>
          <Grid item>
            <Button color="primary" variant="outlined" fullWidth>
              На карте
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <DateRangeDialog
        title="Выберите даты"
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => console.log("submit")}
        dateRange={{ startDate: today, endDate: today }}
        checkIsDayDisabled={createIfDayDisabledChecker([
          {
            startDate: addDays(today, 2),
            endDate: addDays(today, 4),
          },
          {
            startDate: addDays(today, 8),
            endDate: addDays(today, 15),
          },
          {
            startDate: subDays(today, 11),
            endDate: subDays(today, 8),
          },
        ])}
      />
    </Grid>
  );
};

export default RoomData;
