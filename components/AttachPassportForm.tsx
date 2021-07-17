import FormSubmit from "@components/FormSubmit";
import FormSubtitle from "@components/FormSubtitle";
import {
  ButtonBase,
  Grid,
  TextField,
  makeStyles,
  colors,
  Typography,
} from "@material-ui/core";
import { AttachFileOutlined } from "@material-ui/icons";
import { useDispatch } from "@root/lib/hooks/typedStoreHooks";
import { attachPassport } from "@root/lib/slices/auth";
import { PassportData } from "@root/lib/types";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  fileUploadButton: {
    display: "flex",
    alignItems: "center",
    justidyContent: "center",
    padding: theme.spacing(2, 1),
    border: "1px solid " + colors.grey[400],
    color: colors.grey[600],
    borderRadius: theme.spacing(0.5),
    transition: "0.2s",
    "&:hover, &:active": {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
  icon: {
    marginRight: theme.spacing(0.5),
  },
}));

const AttachPassportForm = () => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PassportData>({ mode: "all" });

  const fileInputRegistered = register("file");
  const [filename, setFilename] = useState<false | string>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleFilenameChange = (e) => {
    setFilename(e.target.files?.length > 0 && e.target.files[0].name);
    fileInputRegistered.onChange(e);
  };

  const onSubmit = async (data: PassportData) =>
    dispatch(
      attachPassport({
        data,
        router,
      })
    );

  return (
    <Grid
      container
      spacing={2}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid item xs={12}>
        <FormSubtitle text="Данные" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...register("series", { required: true })}
          label="Серия"
          variant="outlined"
          fullWidth
          error={Boolean(errors?.series)}
          helperText={errors?.series && "Это поле обязательно"}
          type="number"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          {...register("number", { required: true })}
          label="Номер"
          variant="outlined"
          fullWidth
          error={Boolean(errors?.number)}
          helperText={errors?.number && "Это поле обязательно"}
          type="number"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("provider", { required: true })}
          label="Кем выдан"
          variant="outlined"
          fullWidth
          type="text"
          error={Boolean(errors?.provider)}
          helperText={errors?.provider && "Это поле обязательно"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("date", { required: true })}
          label="Дата выдачи"
          variant="outlined"
          fullWidth
          type="date"
          error={Boolean(errors?.date)}
          helperText={errors?.date && "Это поле обязательно"}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormSubtitle text="Загрузка копии" />
      </Grid>
      <Grid item xs={12}>
        <ButtonBase component="label" className={classes.fileUploadButton}>
          <AttachFileOutlined className={classes.icon} />
          <Typography variant="body1">
            {filename ? filename : "Выбрать файл"}
          </Typography>
          <input
            {...fileInputRegistered}
            onChange={handleFilenameChange}
            type="file"
            hidden
          />
        </ButtonBase>
      </Grid>
      <Grid item xs={12}>
        <FormSubmit disabled={!isValid} onClick={handleSubmit(onSubmit)}>
          Привязать
        </FormSubmit>
      </Grid>
    </Grid>
  );
};

export default AttachPassportForm;
