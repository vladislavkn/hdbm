import React from "react";
import {
  Box,
  CardMedia,
  Chip,
  colors,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DialogProps } from "@root/lib/types";
import CommonDialog from "@root/components/Dialogs/CommonDialog";
import { Booking } from "../types";
import { formatDateHumanReadable } from "@root/lib/utils";
import { useRouter } from "next/router";
import { useDialogs } from "@root/components/Dialogs/DialogsProvider";
import ActionDialog from "@root/components/Dialogs/ActionDialog";
import { removeBooking } from "../api";

type BookingInfoDialogProps = {
  booking: Booking;
} & DialogProps;

const useStyles = makeStyles((theme) => ({
  image: {
    height: 192,
    marginBottom: 10,
  },
  separator: {
    backgroundColor: colors.grey[400],
  },
}));

const BookingInfoDialog = (props: BookingInfoDialogProps) => {
  const { isOpen, onClose, booking } = props;
  const classes = useStyles();
  const { push } = useRouter();
  const [openDialog] = useDialogs();

  return (
    <CommonDialog
      title="Бронирование"
      isOpen={isOpen}
      onClose={onClose}
      fullWidth
      actions={[
        {
          text: "Отменить",
          onClick: () => {
            onClose();
            openDialog<typeof ActionDialog>(ActionDialog, {
              title: "Отменить бронирование?",
              text: "Это действие нельзя отменить",
              actionText: "Отменить",
              onSubmit: () => removeBooking(booking.id),
            });
          },
          color: "primary",
          variant: "contained",
          disableElevation: true,
        },
        {
          text: "Комната",
          onClick: () => {
            push("/room/" + booking.roomId);
            onClose();
          },
          color: "primary",
          variant: "contained",
          disableElevation: true,
        },
      ]}
    >
      <>
        <CardMedia image={booking.roomImageUrl} className={classes.image} />
        <Typography variant="h6" gutterBottom>
          {booking.roomTitle}
        </Typography>
        <Box display="flex" alignItems="center">
          <Chip
            label={formatDateHumanReadable(booking.startDate)}
            color="primary"
          />
          <Box
            className={classes.separator}
            width={4}
            height={4}
            borderRadius="100%"
            marginX={1}
          />
          <Chip
            label={formatDateHumanReadable(booking.endDate)}
            color="primary"
          />
        </Box>
      </>
    </CommonDialog>
  );
};

export default BookingInfoDialog;
