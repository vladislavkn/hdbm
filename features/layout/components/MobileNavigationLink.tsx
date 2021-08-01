import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { Route } from "@root/lib/routes";

type DesktopNavigationLinkProps = {
  route: Route;
};

export const MobileNavigationLink = ({ route }: DesktopNavigationLinkProps) => {
  const { href, icon: Icon, text } = route;
  const active = useRouter().pathname === href;

  return (
    <Link href={href}>
      <ListItem component="a" button>
        <ListItemIcon>
          <Icon color={active ? "primary" : "inherit"} />
        </ListItemIcon>
        <ListItemText color={active ? "primary" : "inherit"} primary={text} />
      </ListItem>
    </Link>
  );
};

export default MobileNavigationLink;
