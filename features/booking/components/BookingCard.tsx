import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { formatDateHumanReadable } from "@root/lib/utils";
import React from "react";
import { Booking } from "../types";

type BookingCardProps = {
  booking: Booking;
  onClick: () => void;
};

const useStyles = makeStyles({
  media: {
    height: 192,
  },
});

const BookingCard = (props: BookingCardProps) => {
  const classes = useStyles();
  const { booking, onClick } = props;

  return (
    <Card onClick={onClick}>
      <CardMedia className={classes.media} image={booking.roomImageUrl} />
      <Box paddingX={1.5} paddingY={2} component={CardActionArea}>
        <Typography variant="h6" gutterBottom>
          {booking.roomTitle}
        </Typography>
        <Typography variant="body2">
          {formatDateHumanReadable(booking.startDate)} -{" "}
          {formatDateHumanReadable(booking.endDate)}
        </Typography>
      </Box>
    </Card>
  );
};

export default BookingCard;
