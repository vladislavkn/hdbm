import { colors, Grid, makeStyles, TextField, Theme } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";
import { useEffect } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Autocomplete } from "@material-ui/lab";
import { RoomFilterRecord } from "@root/lib/types";
import useDebouncedCallBack from "@root/lib/useDebouncedCallBack";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: colors.grey[700],
    marginBottom: theme.spacing(2),
  },
}));

const cities = ["Москва", "Санкт-Петербург", "Ростов-на-Дону", "Урюпинск"];

type FilterProps = {
  onChange: (filterRecord: RoomFilterRecord) => void;
  defaultRecord: RoomFilterRecord;
};

const Filter = ({ onChange, defaultRecord }: FilterProps) => {
  const classes = useStyles();
  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm({ defaultValues: defaultRecord });

  useEffect(() => {
    register("city", { required: true });
  }, [register]);

  const handleChange = useDebouncedCallBack(
    () => onChange(formResult as RoomFilterRecord),
    2000
  );

  const formResult = useWatch({ control });

  useEffect(() => {
    handleChange();
  }, [formResult]);

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <Grid container spacing={2} component="form">
        <Grid item xs={6} md={3}>
          <Controller
            name="from"
            control={control}
            defaultValue={new Date()}
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
            name="to"
            control={control}
            defaultValue={new Date()}
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
            {...register("places", {
              valueAsNumber: true,
            })}
            fullWidth
            defaultValue={1}
            variant="outlined"
            label="Места"
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            options={cities}
            onChange={(_, value) => setValue("city", value)}
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
    </MuiPickersUtilsProvider>
  );
};

export default Filter;
