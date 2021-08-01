import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Section } from "@/layout";
import AccountWidget from "../components/AccountWidget";
import DocumentsWidget from "../components/DocumentsWidget";
import UserInfoWidget from "../components/UserInfoWidget";
import Auth from "../components/Auth";
import { Layout } from "@/layout";

const useStyles = makeStyles((theme) => ({
  avatar: {
    border: "2px solid " + theme.palette.primary.main,
    color: theme.palette.primary.main,
    backgroundColor: "white",
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));

const ProfilePage = () => {
  const classes = useStyles();

  return (
    <Auth>
      {(user) => (
        <Layout title="Профиль">
          <Section title="Ваш профиль" dark>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <UserInfoWidget user={user} />
              </Grid>
              <Grid className={classes.container} container item spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <AccountWidget />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <DocumentsWidget user={user} />
                </Grid>
              </Grid>
            </Grid>
          </Section>
        </Layout>
      )}
    </Auth>
  );
};

export default ProfilePage;
