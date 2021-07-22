import { makeStyles } from "@material-ui/core";
import { DateRange } from "@root/lib/types";
import { useState } from "react";
import RoomDatePicker from "../RoomDatePicker";
import CommonDialog from "./CommonDialog";

type DateRangeDialogProps = {
  dateRange: DateRange;
  onSubmit: (dateRange: DateRange) => void;
  onClose: () => void;
  isOpen: boolean;
  title: string;
  checkIsDayDisabled?: (day: Date) => boolean;
};

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    [theme.breakpoints.down("sm")]: {
      padding: "8px",
    },
    "& > *": {
      width: "100%",
    },
    "& .rdrMonths": {
      margin: "0 auto",
    },
  },
}));

const DateRangeDialog = (props: DateRangeDialogProps) => {
  const { dateRange, onSubmit, onClose, isOpen, title, checkIsDayDisabled } =
    props;
  const [selectedDates, setSelectedDates] = useState<DateRange>(dateRange);
  const classes = useStyles();

  const handleSubmit = () => {
    onSubmit(selectedDates);
    onClose();
  };

  return (
    <CommonDialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      actions={[
        {
          text: "Далее",
          onClick: handleSubmit,
          color: "primary",
          variant: "contained",
          disableElevation: true,
        },
      ]}
      contentClassName={classes.dialogContent}
    >
      <RoomDatePicker
        dateRange={selectedDates}
        checkIsDayDisabled={checkIsDayDisabled}
        onSelect={setSelectedDates}
      />
    </CommonDialog>
  );
};

export default DateRangeDialog;
