import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  colors,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import { Room } from "@root/lib/types";
import Link from "next/link";

type RoomCardProps = {
  room: Room;
  href: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  photo: {
    boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.05)",
    width: 128,
    [theme.breakpoints.down("xs")]: {
      width: 90,
    },
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
}));

const RoomCard = (props: RoomCardProps) => {
  const {
    room: { title, description, rating, images, reviews, price, adress },
    href,
  } = props;
  const classes = useStyles();

  return (
    <Link href={href}>
      <Card className={classes.root}>
        <CardActionArea>
          <Box display="flex">
            <CardMedia
              className={classes.photo}
              image={images[0]}
              title="Room photo"
            />
            <Box paddingY={2} paddingX={1.5} display="flex" flexGrow={1}>
              <Box width="100%">
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
                      value={rating}
                      readOnly
                    />
                    <Typography className={classes.greyText} variant="body2">
                      {reviews}
                    </Typography>
                  </Box>

                  <Typography variant="subtitle1" className={classes.price}>
                    {price}₽/день
                  </Typography>
                </Box>
                <Box marginBottom={1.5}>
                  <Box textOverflow="ellipsis" whiteSpace="nowrap">
                    <Typography className={classes.title} variant="h6">
                      {title}
                    </Typography>
                  </Box>
                  <Typography className={classes.greyText} variant="body1">
                    {description}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOnOutlined className={classes.locationIcon} />
                  <Typography className={classes.greyText} variant="body2">
                    {adress.asText}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default RoomCard;
