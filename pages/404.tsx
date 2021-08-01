import { CenterLayout } from "@/layout";
import { makeStyles, Typography, Link, colors } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  error: {
    fontFamily: "monospace",
    color: colors.grey[700],
  },
  link: {
    cursor: "pointer",
  },
});

const Error404 = () => {
  const classes = useStyles();
  const { back, push } = useRouter();

  return (
    <CenterLayout title="Ошибка 404">
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
        Упс, это страница почему-то не работает. Пока мы исправляем проблему, вы
        можете{" "}
        <Link className={classes.link} onClick={back}>
          вернуться назад
        </Link>{" "}
        или{" "}
        <Link className={classes.link} onClick={() => push("/")}>
          перейти на главную страницу
        </Link>
        .
      </Typography>
    </CenterLayout>
  );
};

export default Error404;
