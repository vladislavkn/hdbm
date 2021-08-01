import {
  Grid,
  Link,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import createErrorMessages from "@root/lib/errorMessages";
import { RegisterOptions } from "../types";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import React from "react";
import { FormSubtitle, FormSubmit } from "@/shared";
import { CenterLayout } from "@/layout";
import { useAuth } from "../context/authContext";

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    cursor: "pointer",
  },
}));

const errorMessages = createErrorMessages({
  minLength: 8,
  maxLength: 32,
});

const RegisterForm = () => {
  const classes = useStyles();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<RegisterOptions>({ mode: "all" });
  const { register: RegisterUser, loading } = useAuth();

  return (
    <CenterLayout title="Создать аккаунт">
      <Grid
        container
        component="form"
        onSubmit={handleSubmit(RegisterUser)}
        spacing={2}
      >
        <Grid item xs={12}>
          <FormSubtitle text="Аккаунт" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            error={Boolean(errors?.email)}
            helperText={errors?.email && errorMessages[errors?.email?.type]}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Пароль"
            variant="outlined"
            fullWidth
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 32,
            })}
            error={Boolean(errors?.password)}
            helperText={
              errors?.password && errorMessages[errors?.password?.type]
            }
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormSubtitle text="О вас" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register("firstname", {
              required: true,
            })}
            error={Boolean(errors?.firstname)}
            helperText={
              errors?.firstname && errorMessages[errors?.firstname?.type]
            }
            label="Имя"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            {...register("lastname", {
              required: true,
            })}
            error={Boolean(errors?.lastname)}
            helperText={
              errors?.lastname && errorMessages[errors?.lastname?.type]
            }
            label="Фамилия"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register("phone", {
              required: true,
              pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/i,
            })}
            error={Boolean(errors?.phone)}
            helperText={errors?.phone && errorMessages[errors?.phone?.type]}
            label="Телефон"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormSubmit
            disabled={!isValid}
            onClick={handleSubmit(RegisterUser)}
            isLoading={loading}
          >
            Создать
          </FormSubmit>
        </Grid>
        <Grid item xs={12}>
          <NextLink href="/auth/login">
            <Typography className={classes.link} align="center">
              <Link>У меня уже есть аккаунт</Link>
            </Typography>
          </NextLink>
        </Grid>
      </Grid>
    </CenterLayout>
  );
};

export default RegisterForm;
