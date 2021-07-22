import Centered from "@components/Centered";
import Layout from "@components/Layout";
import ProfilePage from "@components/Profile/ProfilePage";
import WithAuth from "@components/WithAuth";
import { Link, makeStyles, Typography } from "@material-ui/core";
import { LOGIN_ROUTE } from "@root/lib/routes";
import NextLink from "next/link";
import React from "react";

const useStyles = makeStyles({
  center: {
    height: "100%",
  },
  centeredItem: {
    maxWidth: 360,
    flex: 1,
  },
});

const Profile = () => {
  const classes = useStyles();

  return (
    <Layout title="Профиль">
      <WithAuth
        user={(user) => <ProfilePage user={user} />}
        guest={
          <Centered
            containerClassName={classes.center}
            contentClassName={classes.centeredItem}
          >
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
};

export default Profile;
