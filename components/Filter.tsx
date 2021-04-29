import { Card, CardContent, makeStyles, Theme } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2, 2, 0, 2),
  },
}));

const Filter = () => {
  const classes = useStyles();
  const [fromSate, setFromDate] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <Card className={classes.root} elevation={0}>
        <CardContent>
          <DatePicker
            value={fromSate}
            onChange={setFromDate}
            inputVariant="outlined"
            label="От"
            format="MM/dd/yyyy"
          />
        </CardContent>
      </Card>
    </MuiPickersUtilsProvider>
  );
};

export default Filter;
