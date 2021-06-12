import Layout from "@components/Layout";
import Section from "@components/Section";
import { Button, Link, Typography } from "@material-ui/core";
import { LOGIN_ROUTE } from "@root/lib/routes";
import { logout } from "@root/lib/slices/auth";
import NextLink from "next/link";
import { useSelector, useDispatch } from "../../lib/store-hooks";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const title = user
    ? user.firstname + " " + user.lastname
    : "Не выполнен вход в аккаунт";

  return (
    <Layout title={title}>
      {user ? (
        <Section title="Страница профиля">
          <Typography variant="h2">
            {user.firstname} {user.lastname}
          </Typography>
          <Button onClick={() => dispatch(logout())}>Выйти из аккаунта</Button>
        </Section>
      ) : (
        <Typography>
          Не выполнен вход в аккаунт. Вы можете{" "}
          <NextLink href={LOGIN_ROUTE.href}>
            <Link>Войти в аккаунт</Link>
          </NextLink>{" "}
          или{" "}
          <NextLink href="/">
            <Link>Вернуться на главную</Link>
          </NextLink>
          .
        </Typography>
      )}
    </Layout>
  );
};

export default Profile;
