import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Link,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import createErrorMessages from "@root/lib/errorMessages";
import { loginUser } from "@root/lib/slices/auth";
import { useDispatch, useSelector } from "@root/lib/hooks/typedStoreHooks";
import { LoginPayload } from "@root/lib/types";
import NextLink from "next/link";
import { useForm } from "react-hook-form";

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
  } = useForm<LoginPayload>({ mode: "all" });
  const dispatch = useDispatch();
  const authLoading = useSelector((state) => state.auth.loading);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography className={classes.title} align="center" variant="h5">
          Войти в аккаунт
        </Typography>
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
            <Button
              fullWidth
              color="primary"
              variant="contained"
              disableElevation
              disabled={!isValid}
              type="submit"
            >
              {!authLoading ? (
                "Войти"
              ) : (
                <CircularProgress size={24} style={{ color: "white" }} />
              )}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <NextLink href="/auth/register">
              <Typography className={classes.link} align="center">
                <Link>Создать аккаунт</Link>
              </Typography>
            </NextLink>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
