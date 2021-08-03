import { Grid } from "@material-ui/core";
import { useDialogs } from "@root/components/Dialogs/DialogsProvider";
import { useRouter } from "next/router";
import React from "react";
import { Booking } from "../types";
import BookingCard from "./BookingCard";
import BookingInfoDialog from "./BookingInfoDialog";

type BookingListProps = {
  bookings: Booking[];
};

const BookingList = ({ bookings }: BookingListProps) => {
  const { push } = useRouter();
  const [openDialog] = useDialogs();

  const handleClick = (booking: Booking) =>
    openDialog<typeof BookingInfoDialog>(BookingInfoDialog, { booking });

  return (
    <Grid container spacing={3}>
      {bookings.map((booking) => (
        <Grid item key={booking.id} xs={12} sm={6} md={4}>
          <BookingCard booking={booking} onClick={() => handleClick(booking)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookingList;
