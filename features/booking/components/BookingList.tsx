import { Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { Booking } from "../types";
import BookingCard from "./BookingCard";

type BookingListProps = {
  bookings: Booking[];
};

const BookingList = ({ bookings }: BookingListProps) => {
  const { push } = useRouter();

  return (
    <Grid container spacing={3}>
      {bookings.map((booking) => (
        <Grid item key={booking.id} xs={12} sm={6} md={4}>
          <BookingCard
            booking={booking}
            onClick={() => push("/bookings/" + booking.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookingList;
