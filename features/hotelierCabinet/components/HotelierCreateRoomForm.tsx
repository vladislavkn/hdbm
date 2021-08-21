import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import React, { Fragment } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { RoomFormDTO } from "../types";

type HotelierCreateRoomProps = {
  onSubmit: (roomFormDTO: RoomFormDTO) => void;
};

export default function HotelierCreateRoom({
  onSubmit,
}: HotelierCreateRoomProps) {
  const { register, handleSubmit, control } = useForm<RoomFormDTO>({
    defaultValues: {
      images: [{ link: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom={1}>
        <Typography variant="h6">Количество человек</Typography>
      </Box>
      <Box component={Paper} marginBottom={2} padding={1.5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Взрослых"
              fullWidth
              variant="outlined"
              type="number"
              required
              {...register("adultPlaces", {
                valueAsNumber: true,
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Детей"
              fullWidth
              variant="outlined"
              type="number"
              required
              {...register("childPlaces", {
                valueAsNumber: true,
              })}
            />
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={1}>
        <Typography variant="h6">Город и адрес</Typography>
      </Box>
      <Box component={Paper} marginBottom={2} padding={1.5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Город"
              fullWidth
              variant="outlined"
              required
              {...register("city")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Адрес"
              fullWidth
              variant="outlined"
              required
              {...register("adress")}
            />
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={1}>
        <Typography variant="h6">Название и цена</Typography>
      </Box>
      <Box component={Paper} marginBottom={2} padding={1.5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Название"
              fullWidth
              variant="outlined"
              required
              {...register("name")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Цена"
              fullWidth
              variant="outlined"
              type="number"
              required
              {...register("price", {
                valueAsNumber: true,
              })}
            />
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={1}>
        <Typography variant="h6">Описание</Typography>
      </Box>
      <Box component={Paper} marginBottom={2} padding={1.5}>
        <TextField
          multiline
          label="Описание"
          fullWidth
          variant="outlined"
          maxRows={5}
          required
          {...register("description")}
        />
      </Box>
      <Box marginBottom={1}>
        <Typography variant="h6">Изображения</Typography>
      </Box>
      <Box component={Paper} marginBottom={2} padding={1.5}>
        <Grid container spacing={2} alignItems="center">
          {fields.map((field, index) => (
            <Fragment key={field.id}>
              <Grid item xs={12} sm={8} md={4}>
                <TextField
                  label="Изображение"
                  fullWidth
                  variant="outlined"
                  required
                  {...register(`images.${index}.link` as const)}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <Button onClick={() => remove(index)}>
                  Удалить изображение
                </Button>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Button onClick={() => append({ link: "" })}>
          Добавить изображение
        </Button>
        <Button>Закончить позже</Button>
        <Button color="primary" role="submit" type="submit">
          Добавить номер
        </Button>
      </Box>
    </form>
  );
}
