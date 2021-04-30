import {
  Card,
  CardContent,
  colors,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: colors.grey[700],
    marginBottom: theme.spacing(2),
  },
}));

const cities = ["Москва", "Санкт-Петербург", "Ростов-на-Дону", "Урюпинск"];

const Filter = () => {
  const classes = useStyles();
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register("cite", {
      required: true,
    });
  }, [register]);

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" className={classes.title}>
            Фильтр поиска
          </Typography>
          <Grid container spacing={2} component="form">
            <Grid item xs={6} md={3}>
              <Controller
                name="fromDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    fullWidth
                    value={value}
                    onChange={onChange}
                    inputVariant="outlined"
                    label="Дата заезда"
                    format="dd.MM.yyyy"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Controller
                name="toDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    fullWidth
                    value={value}
                    onChange={onChange}
                    inputVariant="outlined"
                    label="Дата отъезда"
                    format="dd.MM.yyyy"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                {...register("placesCount")}
                fullWidth
                defaultValue="1"
                variant="outlined"
                label="Места"
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Autocomplete
                options={cities}
                onChange={(value) => setValue("city", value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Город"
                    variant="outlined"
                    error={Boolean(errors?.city)}
                    helperText={errors?.city?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </MuiPickersUtilsProvider>
  );
};

export default Filter;
