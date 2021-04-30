import Layout from "@components/Layout";
import {
  Grid,
  Box,
  makeStyles,
  Typography,
  Link,
  colors,
} from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  center: {
    height: "100%",
  },
  centeredItem: {
    maxWidth: 360,
    flex: 1,
  },
  error: {
    fontFamily: "monospace",
    color: colors.grey[700],
  },
});

const Login = () => {
  const classes = useStyles();
  const { back, push } = useRouter();

  return (
    <Layout smallTopPadding title="Ошибка 404">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.center}
      >
        <Box className={classes.centeredItem}>
          <Typography variant="h1" component="h2" className={classes.error}>
            Error
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            className={classes.error}
            gutterBottom
          >
            404
          </Typography>
          <Typography variant="subtitle1">
            Упс, это страница почему-то не работает. Пока мы исправляем
            проблему, вы можете <Link onClick={back}>Вернуться назад</Link> или{" "}
            <Link onClick={() => push("/")}>Перейти на главную страницу</Link>.
          </Typography>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Login;
