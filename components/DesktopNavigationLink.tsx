import {
  Button,
  colors,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { Route } from "@root/lib/routes";

type DesktopNavigationLinkProps = {
  route: Route;
};

const useStyles = makeStyles((theme: Theme) => ({
  desktopNavItem: {
    marginLeft: theme.spacing(3),
    color: colors.grey[800],
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const DesktopNavigationLink = ({
  route,
}: DesktopNavigationLinkProps) => {
  const { href, icon: Icon, text } = route;
  const classes = useStyles();
  const active = useRouter().pathname === href;

  return (
    <Link href={href}>
      <Button
        startIcon={<Icon color={active ? "primary" : "inherit"} />}
        className={classes.desktopNavItem}
      >
        <Typography variant="subtitle1" color={active ? "primary" : "inherit"}>
          {text}
        </Typography>
      </Button>
    </Link>
  );
};

export default DesktopNavigationLink;
