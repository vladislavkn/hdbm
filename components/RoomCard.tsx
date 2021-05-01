import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Room } from "@root/lib/types";
import Link from "next/link";

type HotelCardProps = {
  room: Room;
  href: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    height: 256,
  },
  content: {
    padding: theme.spacing(1, 2),
    margin: theme.spacing(-4, 2, 2, 0),
    position: "relative",
    zIndex: 1,
    width: "100%",
  },
  wrapper: {
    display: "flex",
  },
  detailsItem: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  detailsText: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
    marginTop: theme.spacing(1),
  },
}));

const RoomCard = (props: HotelCardProps) => {
  const {
    room: {
      title,
      description,
      rating,
      images,
      price,
      adress,
      hotel: { title: hotelTitle },
    },
    href,
  } = props;
  const classes = useStyles();

  return (
    <Link href={href}>
      <Card elevation={0}>
        <CardActionArea>
          <CardMedia className={classes.media} image={images[0]} />
          <CardContent className={classes.wrapper}>
            <Grid container>
              <Grid item xs={12} sm={5}>
                <Paper className={classes.content}>
                  <Typography variant="h6">{title}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    gutterBottom
                  >
                    {description}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    {hotelTitle}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item container xs={12} sm={7} spacing={1}>
                <Grid item xs={12} sm={4} className={classes.detailsItem}>
                  <Typography variant="caption" color="textSecondary">
                    Рейтинг (15)
                  </Typography>
                  <Rating
                    className={classes.detailsText}
                    value={rating}
                    readOnly
                  />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.detailsItem}>
                  <Typography variant="caption" color="textSecondary">
                    Стоимость
                  </Typography>
                  <Typography
                    align="center"
                    className={classes.detailsText}
                    variant="body2"
                  >
                    {price}р
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4} className={classes.detailsItem}>
                  <Typography variant="caption" color="textSecondary">
                    Адрес
                  </Typography>
                  <Typography
                    align="center"
                    className={classes.detailsText}
                    variant="body2"
                  >
                    {adress.asText}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default RoomCard;
