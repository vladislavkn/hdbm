import Layout from "@components/Layout";
import RegisterForm from "@components/RegisterForm";
import { Box, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  center: {
    height: "100%",
  },
  centeredItem: {
    maxWidth: 400,
  },
});

const Register = () => {
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
          <RegisterForm />
        </Box>
      </Grid>
    </Layout>
  );
};

export default Register;
