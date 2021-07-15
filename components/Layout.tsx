import { Box, Container, makeStyles, Theme } from "@material-ui/core";
import { joinClasses } from "@root/lib/utils";
import Head from "next/head";
import { ReactNode } from "react";
import Navigation from "./Navigation";

type LayoutProps = {
  title?: string;
  children?: ReactNode | ReactNode[];
  navigation?: () => JSX.Element;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
  },
}));

const Layout = (props: LayoutProps) => {
  const { title, children, navigation: CustomNavigation } = props;
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {CustomNavigation ? <CustomNavigation /> : <Navigation />}
      <Box className={classes.container}>{children}</Box>
    </>
  );
};

export default Layout;
