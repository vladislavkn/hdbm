import { Container, makeStyles, Theme } from "@material-ui/core";
import { joinClasses } from "@root/lib/utils";
import Head from "next/head";
import { ReactNode } from "react";
import Navigation from "./Navigation";

type LayoutProps = {
  title?: string;
  children?: ReactNode | ReactNode[];
  navigation?: () => JSX.Element;
  paddingTop?: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
  },
  paddingTop: {
    paddingTop: theme.spacing(4),
  },
}));

const Layout = (props: LayoutProps) => {
  const {
    title,
    children,
    navigation: CustomNavigation,
    paddingTop = true,
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
          paddingTop && classes.paddingTop
        )}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
