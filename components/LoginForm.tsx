import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import NextLink from "next/link";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2, 2, 0, 2),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  input: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
  link: {
    cursor: "pointer",
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <Typography className={classes.title} align="center" variant="h5">
          Войти в аккаунт
        </Typography>
        <Grid container spacing={3} component="form">
          <Grid item xs={12}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="Пароль"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              disableElevation
            >
              Войти
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
