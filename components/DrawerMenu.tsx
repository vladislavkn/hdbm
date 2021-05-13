import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListSubheader,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { useState } from "react";
import { Menu } from "@material-ui/icons";
import {
  BOOKINGS_ROUTE,
  LOGIN_ROUTE,
  WAYS_ROUTE,
  PROFILE_ROUTE,
} from "@root/lib/routes";
import MobileNavigationLink from "./MobileNavigationLink";
import WithAuth from "./WithAuth";

const useStyles = makeStyles((theme: Theme) => ({
  openMenuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const DrawerMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        edge="start"
        className={classes.openMenuButton}
      >
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List
          subheader={
            <>
              <ListSubheader>Hotel Digital Business Management</ListSubheader>
              <Divider />
            </>
          }
        >
          <MobileNavigationLink route={WAYS_ROUTE} />
          <WithAuth
            loggedIn={() => (
              <>
                <MobileNavigationLink route={BOOKINGS_ROUTE} />
                <MobileNavigationLink route={PROFILE_ROUTE} />
              </>
            )}
            guest={<MobileNavigationLink route={LOGIN_ROUTE} />}
          />
        </List>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
