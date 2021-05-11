import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Box, colors } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import DesktopNavigationLink from "./DesktopNavigationLink";
import routes from "@root/lib/routes";
import DrawerMenu from "./DrawerMenu";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "white",
    color: colors.grey[700],
    borderBottom: "1px solid " + colors.grey[300],
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

  return (
    <>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
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
          {routes.map((route) => (
            <DesktopNavigationLink route={route} key={route.text} />
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navigation;
