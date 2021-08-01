import {
  Grid,
  Link,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import createErrorMessages from "@root/lib/errorMessages";
import { LoginOptions } from "../types";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import FormSubmit from "../../shared/components/FormSubmit";
import { useAuth } from "../context/authContext";
import { CenterLayout } from "@/layout";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  button: {
    width: "100%",
  },
  link: {
    cursor: "pointer",
  },
}));

const errorMessages = createErrorMessages({
  minLength: 8,
  maxLength: 32,
});

const LoginForm = () => {
  const classes = useStyles();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LoginOptions>({ mode: "all" });
  const { push } = useRouter();
  const { login, loading, user } = useAuth();

  useEffect(() => {
    if (user !== null) {
      push("/auth/profile");
    }
  }, []);

  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <CenterLayout title="Войти">
      <Grid
        container
        spacing={3}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item xs={12}>
          <TextField
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            error={Boolean(errors?.email)}
            helperText={errors?.email && errorMessages[errors?.email?.type]}
            type="email"
            fullWidth
            variant="outlined"
            label="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
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
            fullWidth
            variant="outlined"
            label="Пароль"
          />
        </Grid>
        <Grid item xs={12}>
          <FormSubmit
            disabled={!isValid}
            isLoading={loading}
            onClick={handleSubmit(onSubmit)}
          >
            Войти
          </FormSubmit>
        </Grid>
        <Grid item xs={12}>
          <NextLink href="/auth/register">
            <Typography className={classes.link} align="center">
              <Link>Создать аккаунт</Link>
            </Typography>
          </NextLink>
        </Grid>
      </Grid>
    </CenterLayout>
  );
};

export default LoginForm;
