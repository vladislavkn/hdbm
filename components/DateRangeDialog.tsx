import {
  AppBar,
  Button,
  colors,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { DateRange } from "@root/lib/types";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";
import RoomDatePicker from "./RoomDatePicker";

type DateRangeDialogProps = {
  dateRange: DateRange;
  onSubmit: (dateRange: DateRange) => void;
  onClose: () => void;
  open: boolean;
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
  appBar: {
    backgroundColor: "white",
    color: colors.grey[700],
  },
}));

const DateRangeDialog = (props: DateRangeDialogProps) => {
  const { dateRange, onSubmit, onClose, open, title, checkIsDayDisabled } =
    props;
  const [selectedDates, setSelectedDates] = useState<DateRange>(dateRange);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const handleSubmit = () => {
    onClose();
    onSubmit(selectedDates);
  };

  return (
    <Dialog onClose={onClose} fullScreen={fullScreen} open={open}>
      {fullScreen ? (
        <>
          <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">{title}</Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </>
      ) : (
        <DialogTitle>{title}</DialogTitle>
      )}
      <DialogContent className={classes.dialogContent}>
        <RoomDatePicker
          dateRange={selectedDates}
          checkIsDayDisabled={checkIsDayDisabled}
          onSelect={setSelectedDates}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Назад
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          Далее
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DateRangeDialog;
