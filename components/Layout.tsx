import { Container, makeStyles, Theme } from "@material-ui/core";
import { joinClasses } from "@root/lib/utils";
import Head from "next/head";
import { ReactNode } from "react";
import Navigation from "./Navigation";

type LayoutProps = {
  title?: string;
  children?: ReactNode | ReactNode[];
  navigation?: () => JSX.Element;
  smallTopPadding?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    paddingBottom: theme.spacing(2),
  },
  normalTopPadding: {
    paddingTop: theme.spacing(4),
  },
  smallTopPadding: {
    paddingTop: theme.spacing(2),
  },
}));

const Layout = (props: LayoutProps) => {
  const {
    title,
    children,
    navigation: CustomNavigation,
    smallTopPadding = false,
  } = props;
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {CustomNavigation ? <CustomNavigation /> : <Navigation />}
      <Container
        className={joinClasses(
          classes.container,
          smallTopPadding ? classes.smallTopPadding : classes.normalTopPadding
        )}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
