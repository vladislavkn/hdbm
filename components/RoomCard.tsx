import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  colors,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { LocationCityOutlined, LocationOnOutlined } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import { Room } from "@root/lib/types";
import Link from "next/link";

type RoomCardProps = {
  room: Room;
  href: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    minHeight: 192,
    height: "100%",
    borderRadius: 4,
  },
  content: {
    display: "flex",
    maxWidth: "100%",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
  title: {
    fontWeight: "bold",
  },
  rating: {
    marginRight: theme.spacing(1),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
}));

const RoomCard = (props: RoomCardProps) => {
  const {
    room: { title, description, rating, images, reviews, price, adress },
    href,
  } = props;
  const classes = useStyles();

  return (
    <Link href={href}>
      <CardActionArea>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <CardMedia image={images[0]} className={classes.media} />
          </Grid>
          <Grid container item xs={12} sm={7} zeroMinWidth>
            <Box className={classes.content}>
              <Box className={classes.header}>
                <Typography variant="h6" className={classes.title}>
                  {title}
                </Typography>
                <Grid container alignItems="stretch">
                  <Rating
                    value={rating}
                    readOnly
                    size="small"
                    className={classes.rating}
                  />
                  <Typography variant="caption" color="textSecondary">
                    {reviews}
                  </Typography>
                </Grid>
              </Box>
              <Typography variant="body1" noWrap gutterBottom>
                {description}
              </Typography>
              <Grid container item>
                <Grid container item xs={12} alignItems="center">
                  <LocationOnOutlined color="secondary" />
                  <Typography variant="subtitle1" color="textSecondary">
                    {adress.asText}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" color="textSecondary">
                    {price} рублей
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </CardActionArea>
    </Link>
  );
};

export default RoomCard;
