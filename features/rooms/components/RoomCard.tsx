import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  colors,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";
import { Room } from "../types";
import Link from "next/link";

type RoomCardProps = {
  room: Room;
  href: string;
};

const RoomCard = (props: RoomCardProps) => {
  const { room, href } = props;
  const classes = useStyles();

  return (
    <Link href={href}>
      <Card className={classes.root}>
        <CardActionArea>
          <div className={classes.container}>
            <CardMedia
              className={classes.photo}
              image={room.images[0]}
              title="Room photo"
            />
            <Box
              paddingY={2}
              paddingX={1.5}
              display="flex"
              flexGrow={1}
              overflow="auto"
            >
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
                <Box marginBottom={1.5}>
                  <Typography className={classes.title} variant="h6">
                    {room.title}
                  </Typography>
                  <Typography className={classes.greyText} variant="body1">
                    {room.description.length > 100
                      ? room.description.substr(0, 100) + "..."
                      : room.description}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOnOutlined className={classes.locationIcon} />
                  <Typography className={classes.greyText} variant="body2">
                    {room.adress.asText}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
        </CardActionArea>
      </Card>
    </Link>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.only("md")]: {
      flexDirection: "row",
    },
  },
  photo: {
    boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.05)",
    flexShrink: 0,
    height: 192,
    width: "100%",
    [theme.breakpoints.only("md")]: {
      width: 128,
      height: "auto",
    },
  },
  greyText: {
    color: colors.grey[500],
  },
  title: {
    fontWeight: 600,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
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

export default RoomCard;
