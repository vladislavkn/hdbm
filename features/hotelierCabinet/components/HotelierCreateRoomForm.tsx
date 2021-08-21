import { Room } from "@/rooms/types";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";

type roomData = Omit<Room, "id" | "reviews" | "rating">;

type HotelierCreateRoomProps = {
  onSubmit: (roomData: roomData) => void;
};

export default function HotelierCreateRoom({
  onSubmit,
}: HotelierCreateRoomProps) {
  const [roomData, setRoomData] = useState<roomData>({
    title: "",
    description: "",
    adress: {
      city: "",
      asText: "",
    },
    images: [""],
    price: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(roomData);
  };

  return (
    <>
      <Box marginBottom={1}>
        <Typography variant="h6">Количество человек</Typography>
      </Box>
      <Box component={Paper} marginBottom={2} padding={1.5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Взрослых" fullWidth variant="outlined" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Детей" fullWidth variant="outlined" required />
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={1}>
        <Typography variant="h6">Город и адрес</Typography>
      </Box>
      <Box component={Paper} marginBottom={2} padding={1.5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Город" fullWidth variant="outlined" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Адрес" fullWidth variant="outlined" required />
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={1}>
        <Typography variant="h6">Название и цена</Typography>
      </Box>
      <Box component={Paper} marginBottom={2} padding={1.5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Название" fullWidth variant="outlined" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Цена" fullWidth variant="outlined" required />
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
        />
      </Box>
      <Box marginBottom={1}>
        <Typography variant="h6">Изображения</Typography>
      </Box>
      <Box component={Paper} marginBottom={2} padding={1.5}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8} md={4}>
            <TextField
              label="Изображение"
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Button>Удалить изображение</Button>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Button>Добавить изображение</Button>
        <Button>Закончить позже</Button>
        <Button color="primary">Добавить номер</Button>
      </Box>
    </>
  );
}
