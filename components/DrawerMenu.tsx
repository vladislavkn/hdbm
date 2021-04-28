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
import routes from "@root/lib/routes";
import MobileNavigationLink from "./MobileNavigationLink";

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
          {routes.map((route) => (
            <MobileNavigationLink route={route} key={route.text} />
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
