import Center from "./Center";
import Layout from "./Layout";
import { Box, makeStyles, Typography } from "@material-ui/core";
import theme from "@root/theme";
import React from "react";

const useStyles = makeStyles({
  title: {
    marginBottom: theme.spacing(3),
  },
});

type FormLayoutProps = {
  children?: React.ReactElement[] | React.ReactElement;
  title?: string;
};

const CenterLayout = (props: FormLayoutProps) => {
  const classes = useStyles();
  const { children, title } = props;

  return (
    <Layout title={title}>
      <Center>
        <Box paddingX={1.5} paddingY={2}>
          {title && (
            <Typography className={classes.title} align="center" variant="h5">
              {title}
            </Typography>
          )}
          {children}
        </Box>
      </Center>
    </Layout>
  );
};

export default CenterLayout;
