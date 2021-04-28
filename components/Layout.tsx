import { Container } from "@material-ui/core";
import Head from "next/head";
import { ReactNode } from "react";
import Navigation from "./Navigation";

type LayoutProps = {
  title?: string;
  children?: ReactNode | ReactNode[];
  navigation?: () => JSX.Element;
};

const Layout = (props: LayoutProps) => {
  const { title, children, navigation: CustomNavigation } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {CustomNavigation ? <CustomNavigation /> : <Navigation />}
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
