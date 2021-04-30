import Layout from "@components/Layout";
import LoginForm from "@components/LoginForm";
import { Grid, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  center: {
    height: "100%",
  },
  centeredItem: {
    maxWidth: 360,
    flex: 1,
  },
});

const Login = () => {
  const classes = useStyles();

  return (
    <Layout smallTopPadding title="Зарегестрироваться">
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.center}
      >
        <Box className={classes.centeredItem}>
          <LoginForm />
        </Box>
      </Grid>
    </Layout>
  );
};

export default Login;
