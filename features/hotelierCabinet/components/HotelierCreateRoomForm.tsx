import { Room } from "@/rooms/types";
import {
  Card,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Divider,
  CardActions,
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
    <Card component="form" onSubmit={handleSubmit}>
      <Box paddingX={1.5} paddingY={2}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid container spacing={2} item xs={12} md={6}>
            <Grid item xs={12}>
              <TextField
                label="Название"
                fullWidth
                variant="outlined"
                onChange={(e) =>
                  setRoomData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                label="Описание"
                fullWidth
                variant="outlined"
                maxRows={5}
                onChange={(e) =>
                  setRoomData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Город"
                fullWidth
                variant="outlined"
                onChange={(e) =>
                  setRoomData((prev) => ({
                    ...prev,
                    adress: {
                      ...prev.adress,
                      city: e.target.value,
                    },
                  }))
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Адрес"
                fullWidth
                variant="outlined"
                onChange={(e) =>
                  setRoomData((prev) => ({
                    ...prev,
                    adress: {
                      ...prev.adress,
                      asText: e.target.value,
                    },
                  }))
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                label="Цена"
                type="number"
                fullWidth
                variant="outlined"
                maxRows={5}
                onChange={(e) =>
                  setRoomData((prev) => ({
                    ...prev,
                    price: parseFloat(e.target.value),
                  }))
                }
                required
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            item
            xs={12}
            md={6}
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              <Typography variant="h6">Изображения</Typography>
            </Grid>
            {roomData.images.map((image, index) => (
              <Grid item xs={12}>
                <TextField
                  label={`Изображение №${index + 1}`}
                  fullWidth
                  variant="outlined"
                  value={image}
                  onChange={(e) =>
                    setRoomData((prev) => ({
                      ...prev,
                      images: prev.images.map((img, i) =>
                        i === index ? e.target.value : img
                      ),
                    }))
                  }
                  required
                />
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    color="secondary"
                    onClick={() =>
                      setRoomData((prev) => {
                        prev.images.splice(index, 1);
                        return {
                          ...prev,
                          images: prev.images.slice(),
                        };
                      })
                    }
                  >
                    Удалить
                  </Button>
                </Box>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                onClick={() =>
                  setRoomData((prev) => ({
                    ...prev,
                    images: [...prev.images, ""],
                  }))
                }
                color="primary"
              >
                Добавить
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <CardActions>
        <Button variant="contained" color="primary" type="submit">
          Сохранить
        </Button>
      </CardActions>
    </Card>
  );
}
