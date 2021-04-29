import {
  Button,
  Card,
  CardContent,
  colors,
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
    marginBottom: theme.spacing(2),
  },
  input: {
    width: "100%",
  },
  label: {
    color: colors.grey[400],
  },
  button: {
    width: "100%",
  },
  link: {
    cursor: "pointer",
  },
}));

const RegisterForm = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent>
        <Typography className={classes.title} align="center" variant="h5">
          Создать аккаунт
        </Typography>
        <Grid container component="form" spacing={2}>
          <Grid item xs={12}>
            <Typography
              className={classes.label}
              variant="body1"
              align="center"
            >
              Аккаунт
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Пароль"
              variant="outlined"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.label}
              variant="body1"
              align="center"
            >
              О вас
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Имя"
              variant="outlined"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Фамилия"
              variant="outlined"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Телефон"
              variant="outlined"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disableElevation
            >
              Создать
            </Button>
          </Grid>
          <Grid item xs={12}>
            <NextLink href="/auth/login">
              <Typography className={classes.link} align="center">
                <Link>У меня уже есть аккаунт</Link>
              </Typography>
            </NextLink>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
