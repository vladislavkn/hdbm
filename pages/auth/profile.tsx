import Centered from "@components/Centered";
import Layout from "@components/Layout";
import ProfilePage from "@components/ProfilePage";
import WithAuth from "@components/WithAuth";
import { Link, Typography } from "@material-ui/core";
import { LOGIN_ROUTE } from "@root/lib/routes";
import NextLink from "next/link";
import React from "react";

const Profile = () => (
  <Layout title="Профиль">
    <WithAuth
      user={(user) => <ProfilePage user={user} />}
      guest={
        <Centered>
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
        </Centered>
      }
    />
  </Layout>
);

export default Profile;
