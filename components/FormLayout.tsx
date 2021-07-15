import Centered from "@components/Centered";
import Layout from "@components/Layout";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import theme from "@root/theme";
import React from "react";

const useStyles = makeStyles({
  center: {
    height: "100%",
  },
  centeredItem: {
    maxWidth: 360,
    flex: 1,
  },
  title: {
    marginBottom: theme.spacing(3),
  },
});

type FormLayoutProps = {
  children?: React.ReactElement[] | React.ReactElement;
  title?: string;
};

const FormLayout = (props: FormLayoutProps) => {
  const classes = useStyles();
  const { children, title } = props;

  return (
    <Layout title={title}>
      <Centered
        containerClassName={classes.center}
        contentClassName={classes.centeredItem}
      >
        <Card elevation={0}>
          <CardContent>
            {title && (
              <Typography className={classes.title} align="center" variant="h5">
                {title}
              </Typography>
            )}
            {children}
          </CardContent>
        </Card>
      </Centered>
    </Layout>
  );
};

export default FormLayout;
