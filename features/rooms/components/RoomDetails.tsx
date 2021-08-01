import {
  Box,
  Grid,
  Button,
  Card,
  Typography,
  makeStyles,
  Theme,
  colors,
} from "@material-ui/core";
import { Room } from "../types";
import Carousel from "react-material-ui-carousel";
import { Rating } from "@material-ui/lab";
import { LocationOnOutlined } from "@material-ui/icons";
import React from "react";
import { Section } from "@/layout";

type RoomDetailsProps = {
  room: Room;
  onBook: () => void;
};

const RoomDetails = (props: RoomDetailsProps) => {
  const classes = useStyles();
  const { room, onBook } = props;

  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Carousel
            animation="slide"
            className={classes.carousel}
            navButtonsAlwaysInvisible
            indicatorContainerProps={{
              className: classes.carouselButtonsWrapper,
              style: {},
            }}
          >
            {room.images.map((img) => (
              <img src={img} className={classes.img} key={img} />
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" height="100%">
            <Box marginBottom={2}>
              <Card>
                <Box paddingY={2} paddingX={1.5}>
                  <Box marginBottom={1.5}>
                    <Typography className={classes.title} variant="h5">
                      {room.title}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <LocationOnOutlined className={classes.locationIcon} />
                    <Typography
                      className={classes.greyText}
                      variant="subtitle1"
                    >
                      {room.adress.asText}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom={1.5}
            >
              <Box display="flex" alignItems="center" marginRight={1}>
                <Rating
                  className={classes.rating}
                  color="primary"
                  size="small"
                  value={room.rating}
                  readOnly
                />
                <Typography className={classes.greyText} variant="body2">
                  {room.reviews}
                </Typography>
              </Box>

              <Typography variant="subtitle1" className={classes.price}>
                {room.price}₽/день
              </Typography>
            </Box>
            <Box display="flex" flexGrow="1" marginBottom={2}>
              <Typography variant="body1">{room.description}</Typography>
            </Box>
            <Card>
              <Box
                paddingY={2}
                paddingX={1.5}
                display="flex"
                className={classes.buttonsContainer}
              >
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  className={classes.bookButton}
                  onClick={onBook}
                >
                  Забронировать
                </Button>
                <Button variant="outlined" fullWidth color="primary">
                  На карте
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  img: {
    width: "100%",
    height: "100%",
    marginBottom: -5,
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      height: 256,
    },
  },
  carousel: {
    boxShadow: theme.shadows[1],
    borderRadius: theme.spacing(1),
    overflow: "hidden",
  },
  carouselButtonsWrapper: {
    padding: theme.spacing(1),
    backgroundColor: "white",
    margin: 0,
  },
  greyText: {
    color: colors.grey[500],
  },
  title: {
    fontWeight: 600,
  },
  rating: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.light,
  },
  price: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  locationIcon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  bookButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down(375)]: {
      marginBottom: theme.spacing(1),
      marginRight: 0,
    },
    [theme.breakpoints.only("md")]: {
      marginBottom: theme.spacing(1),
      marginRight: 0,
    },
  },
  buttonsContainer: {
    [theme.breakpoints.down(375)]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
    },
  },
}));

export default RoomDetails;
