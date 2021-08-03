import React from "react";
import { CardMedia, makeStyles } from "@material-ui/core";
import { DialogProps } from "@root/lib/types";
import CommonDialog from "@root/components/Dialogs/CommonDialog";
import { Booking } from "../types";

type BookingInfoDialogProps = {
  booking: Booking;
} & DialogProps;

const useStyles = makeStyles((theme) => ({
  image: {
    height: 192,
    borderRadius: theme.spacing(1),
    marginBottom: 10,
  },
}));

const BookingInfoDialog = (props: BookingInfoDialogProps) => {
  const { isOpen, onClose, booking } = props;
  const classes = useStyles();

  return (
    <CommonDialog
      title="Бронирование"
      isOpen={isOpen}
      onClose={onClose}
      actions={[
        {
          text: "Отменить",
          onClick: () => {
            console.log("Отменено");
            onClose();
          },
          color: "secondary",
          variant: "contained",
          disableElevation: true,
        },
      ]}
    >
      <CardMedia image={booking.roomImageUrl} className={classes.image} />
    </CommonDialog>
  );
};

export default BookingInfoDialog;
