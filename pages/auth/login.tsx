import Layout from "@components/Layout";
import LoginForm from "@components/LoginForm";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  center: {
    height: "100%",
  },
});

const Login = () => (
  <Layout title="Зарегестрироваться">
    <Grid
      container
      justify="center"
      alignItems="center"
      className={useStyles().center}
    >
      <LoginForm />
    </Grid>
  </Layout>
);

export default Login;
