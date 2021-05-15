import Layout from "@components/Layout";
import { Link, Typography } from "@material-ui/core";
import { LOGIN_ROUTE } from "@root/lib/routes";
import NextLink from "next/link";
import { useSelector } from "../../lib/store-hooks";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const title = user
    ? user.firstname + " " + user.lastname
    : "Не выполнен вход в аккаунт";

  return (
    <Layout title={title}>
      {user ? (
        <>
          <Typography>Страница профиля</Typography>
          <Typography>
            {user.firstname} {user.lastname}
          </Typography>
        </>
      ) : (
        <Typography>
          Не выполнен вход в аккаунт. Вы можете{" "}
          <NextLink href={LOGIN_ROUTE.href}>
            <a>
              <Link>Войти в аккаунт</Link>
            </a>
          </NextLink>{" "}
          или{" "}
          <NextLink href="/">
            <a>
              <Link>Вернуться на главную</Link>
            </a>
          </NextLink>
          .
        </Typography>
      )}
    </Layout>
  );
};

export default Profile;
