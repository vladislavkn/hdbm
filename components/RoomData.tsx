import { joinClasses, createIfDayDisabledChecker } from "@root/lib/utils";
import { addDays, subDays, addMonths } from "date-fns";
import { Grid, Button, Typography, makeStyles, Theme } from "@material-ui/core";
import { Room, DateRange } from "@root/lib/types";
import Carousel from "react-material-ui-carousel";
import RoomDatePicker from "@components/RoomDatePicker";
import { Rating } from "@material-ui/lab";
import { LocationOnOutlined } from "@material-ui/icons";
import { useMemo, useState } from "react";

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
  datePickerParent: {
    "&>*": {
      width: "100%",
    },
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
  const [selectedDates, setSelectedDates] = useState<DateRange>({
    startDate: today,
    endDate: today,
  });

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
          <Grid item className={classes.datePickerParent}>
            <Typography variant="h6" gutterBottom>
              Выберите дату
            </Typography>
            <RoomDatePicker
              startDate={selectedDates.startDate}
              endDate={selectedDates.endDate}
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
              onSelect={setSelectedDates}
            />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              disableElevation
              fullWidth
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
    </Grid>
  );
};

export default RoomData;
