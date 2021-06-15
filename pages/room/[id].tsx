import Layout from "@components/Layout";
import { ID, Room } from "@root/lib/types";
import { GetServerSideProps } from "next";
import { Button, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { LocationOnOutlined } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import RoomsSearchResults from "@components/SearchRoomsResults";
import { fakeDefaultFilterRecord } from "@root/lib/fake";
import roomsService from "@root/lib/services/roomsService";
import Section from "@components/Section";

type RoomPageProps = {
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
}));

const RoomPage = ({ room }: RoomPageProps) => {
  const classes = useStyles();

  return (
    <Layout title="Страница комнаты">
      <Section title={room.title} dark>
        <Grid container spacing={2} className={classes.content}>
          <Grid item xs={12} md={8} container spacing={1}>
            <Grid item container alignItems="center" xs={12} sm={6}>
              <LocationOnOutlined color="secondary" />
              <Typography variant="subtitle1" color="textSecondary">
                {room.adress.asText}
              </Typography>
            </Grid>
            <Grid item container alignItems="center" xs={6} sm={4}>
              <Rating value={room.rating} readOnly className={classes.rating} />
              <Typography variant="body2" color="textSecondary">
                {room.reviews}
              </Typography>
            </Grid>
            <Grid item container alignItems="center" xs={6} sm={2}>
              <Typography variant="subtitle1" color="textSecondary">
                {room.price} рублей
              </Typography>
            </Grid>
          </Grid>
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
            <Grid item xs={12}>
              <Typography paragraph>{room.description}</Typography>
            </Grid>
            <Grid item container spacing={1} xs={12}>
              <Grid item xs={6}>
                <Button
                  color="primary"
                  variant="contained"
                  disableElevation
                  fullWidth
                >
                  Оформить
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button color="primary" variant="outlined" fullWidth>
                  На карте
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section title="Смотрите также">
        <RoomsSearchResults filterRecord={fakeDefaultFilterRecord} />
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      room: await roomsService.getRoomById(context.params.id as ID),
    },
  };
};

export default RoomPage;
