import Centered from "@components/Centered";
import Layout from "@components/Layout";
import {
  makeStyles,
  Typography,
  Link,
  colors,
  CardContent,
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
  link: {
    cursor: "pointer",
  },
});

const Login = () => {
  const classes = useStyles();
  const { back, push } = useRouter();

  return (
    <Layout title="Ошибка 404">
      <Centered
        containerClassName={classes.center}
        contentClassName={classes.centeredItem}
      >
        <CardContent>
          <Typography
            variant="h1"
            component="h2"
            className={classes.error}
            gutterBottom
          >
            Error
            <br />
            404:(
          </Typography>
          <Typography variant="subtitle1">
            Упс, это страница почему-то не работает. Пока мы исправляем
            проблему, вы можете{" "}
            <Link className={classes.link} onClick={back}>
              вернуться назад
            </Link>{" "}
            или{" "}
            <Link className={classes.link} onClick={() => push("/")}>
              перейти на главную страницу
            </Link>
            .
          </Typography>
        </CardContent>
      </Centered>
    </Layout>
  );
};

export default Login;
