import { joinClasses, createIfDayDisabledChecker } from "@root/lib/utils";
import { addDays } from "date-fns";
import { Grid, Button, Typography, makeStyles, Theme } from "@material-ui/core";
import { Room } from "@root/lib/types";
import Carousel from "react-material-ui-carousel";
import RoomDatePicker from "@components/RoomDatePicker";
import { Rating } from "@material-ui/lab";
import { LocationOnOutlined } from "@material-ui/icons";

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
              startDate={new Date()}
              endDate={new Date(new Date().getTime() + 60 * 60 * 24 * 30)}
              checkIsDayDisabled={createIfDayDisabledChecker([
                {
                  startDate: addDays(new Date(), 2),
                  endDate: addDays(new Date(), 4),
                },
                {
                  startDate: addDays(new Date(), 8),
                  endDate: addDays(new Date(), 15),
                },
              ])}
              onSelect={(from, to) => console.log(from, to)}
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
