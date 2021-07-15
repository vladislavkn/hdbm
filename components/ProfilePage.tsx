import {
  Typography,
  Button,
  Grid,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { useDispatch } from "@root/lib/hooks/typedStoreHooks";
import { logout } from "@root/lib/slices/auth";
import { useRouter } from "next/router";
import React from "react";
import Section from "./Section";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 130,
    height: 130,
    border: "2px solid " + theme.palette.primary.main,
    color: theme.palette.primary.main,
    backgroundColor: "white",
  },
  actions: {
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center",
      width: "100%",
      maxWidth: 420,
    },
  },
  about: {
    maxWidth: 256,
    borderRight: "1px solid " + theme.palette.primary.main,
    margin: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      borderRight: "none",
      width: "100%",
    },
  },
  attachPasswordBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const ProfilePage = ({ user }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();

  return (
    <Section title="Ваш профиль" dark>
      <Grid className={classes.container} container spacing={2}>
        <Grid item>
          <Avatar className={classes.avatar}>
            {user.firstname[0]}
            {user.lastname[0]}
          </Avatar>
        </Grid>
        <Grid item className={classes.about}>
          <Typography variant="h5" gutterBottom className={classes.text}>
            {user.firstname} {user.lastname}
          </Typography>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography>
        </Grid>
        <Grid item className={classes.actions}>
          <Button
            variant="contained"
            disableElevation
            color="primary"
            className={classes.attachPasswordBtn}
            onClick={() => router.push("/auth/attach-passport")}
          >
            Привязать паспорт
          </Button>
          <Button
            variant="outlined"
            disableElevation
            color="primary"
            onClick={() => dispatch(logout())}
          >
            Выйти из аккаунта
          </Button>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ProfilePage;
