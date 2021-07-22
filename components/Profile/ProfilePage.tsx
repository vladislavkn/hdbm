import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Section from "../Section";
import AccountWidget from "./AccountWidget";
import DocumentsWidget from "./DocumentsWidget";
import UserInfoWidget from "./UserInfoWidget";

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

const ProfilePage = ({ user }) => {
  const classes = useStyles();

  return (
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
  );
};

export default ProfilePage;
