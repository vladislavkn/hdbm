import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { LockOpenOutlined, MailOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2, 2, 0, 2),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  emailInput: {
    marginBottom: theme.spacing(4),
  },
  passwordInput: {
    marginBottom: theme.spacing(5),
  },
  loginButton: {
    marginBottom: theme.spacing(2),
  },
  button: {
    width: "100%",
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
        <form>
          <Box className={classes.emailInput}>
            <TextField
              variant="outlined"
              label="Email"
              placeholder="example@mail.com"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutline />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box className={classes.passwordInput}>
            <TextField
              variant="outlined"
              label="Пароль"
              placeholder="qwerty123"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Button
            className={[classes.button, classes.loginButton].join(" ")}
            color="primary"
            variant="contained"
            disableElevation
          >
            Войти
          </Button>
          <Button className={classes.button} color="primary" disableElevation>
            Создать аккаунт
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
