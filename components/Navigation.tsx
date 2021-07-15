import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Box, colors, Container } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import DesktopNavigationLink from "./DesktopNavigationLink";
import {
  BOOKINGS_ROUTE,
  LOGIN_ROUTE,
  WAYS_ROUTE,
  PROFILE_ROUTE,
} from "@root/lib/routes";
import DrawerMenu from "./DrawerMenu";
import WithAuth from "./WithAuth";
import useScrollHeight from "@root/lib/hooks/useScrollHeight";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "white",
    color: colors.grey[700],
  },
  logo: {
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
  },
  logoLink: {
    alignItems: "center",
    display: "flex",
  },
});

const Navigation = () => {
  const classes = useStyles();
  const scrollHeight = useScrollHeight();

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrollHeight > 0 ? 3 : 0}
        className={classes.appBar}
      >
        <Container disableGutters>
          <Toolbar>
            <DrawerMenu />
            <Box className={classes.logo}>
              <Link href="/">
                <a className={classes.logoLink}>
                  <Image
                    src="/logo.svg"
                    width={112}
                    height={29}
                    layout="intrinsic"
                  />
                </a>
              </Link>
            </Box>
            <DesktopNavigationLink route={WAYS_ROUTE} />
            <WithAuth
              user={() => (
                <>
                  <DesktopNavigationLink route={BOOKINGS_ROUTE} />
                  <DesktopNavigationLink route={PROFILE_ROUTE} />
                </>
              )}
              guest={<DesktopNavigationLink route={LOGIN_ROUTE} />}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navigation;
