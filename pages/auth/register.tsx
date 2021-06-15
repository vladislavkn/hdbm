import AuthController from "@components/AuthController";
import Centered from "@components/Centered";
import Layout from "@components/Layout";
import RegisterForm from "@components/RegisterForm";
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

const Register = () => {
  const classes = useStyles();

  return (
    <Layout title="Зарегестрироваться">
      <Centered
        containerClassName={classes.center}
        contentClassName={classes.centeredItem}
      >
        <RegisterForm />
        <AuthController />
      </Centered>
    </Layout>
  );
};

export default Register;
