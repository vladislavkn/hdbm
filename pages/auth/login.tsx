import Centered from "@components/Centered";
import Layout from "@components/Layout";
import LoginForm from "@components/LoginForm";
import { makeStyles } from "@material-ui/core";

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
      <Centered
        containerClassName={classes.center}
        contentClassName={classes.centeredItem}
      >
        <LoginForm />
      </Centered>
    </Layout>
  );
};

export default Login;
