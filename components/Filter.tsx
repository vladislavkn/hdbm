import { Grid, TextField } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";
import React, { useEffect } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Autocomplete } from "@material-ui/lab";
import { RoomFilterRecord } from "@root/lib/types";
import useDebouncedCallBack from "@root/lib/hooks/useDebouncedCallBack";
import SelectDateRangeInput from "./SelectDateRangeInput";
import { clamp } from "@root/lib/utils";

const cities = ["Москва", "Санкт-Петербург", "Ростов-на-Дону", "Урюпинск"];

type FilterProps = {
  onChange: (filterRecord: RoomFilterRecord) => void;
  defaultRecord: RoomFilterRecord;
};

const Filter = ({ onChange, defaultRecord }: FilterProps) => {
  const {
    control,
    formState: { errors },
  } = useForm<RoomFilterRecord>({ defaultValues: defaultRecord });

  const formResult = useWatch({ control });

  const handleChange = useDebouncedCallBack(() => {
    onChange(formResult as RoomFilterRecord);
  }, 2000);

  useEffect(() => {
    handleChange();
  }, [formResult]);

  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <Grid container spacing={2} component="form">
        <Grid item xs={12} md={3}>
          <Controller
            name="dateRange"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SelectDateRangeInput
                onChange={(value) => onChange({ target: { value } })}
                value={value}
              />
            )}
          ></Controller>
        </Grid>
        <Grid item xs={6} md={3}>
          <Controller
            name="childPlaces"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                onChange={(e) => field.onChange(clamp(e.target.value, 0, 100))}
                fullWidth
                variant="outlined"
                label="Дети"
                type="number"
              />
            )}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Controller
            name="adultPlaces"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                onChange={(e) => field.onChange(clamp(e.target.value, 0, 100))}
                fullWidth
                variant="outlined"
                label="Взрослые"
                type="number"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Controller
            name="city"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Autocomplete
                value={value}
                options={cities}
                onChange={(_, value) => onChange({ target: { value } })}
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
            )}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default Filter;
