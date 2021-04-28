import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import {
  MapOutlined,
  PersonOutlined,
  VpnKeyOutlined,
} from "@material-ui/icons";

export type Route = {
  href: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
};

const routes: Route[] = [
  {
    text: "Направления",
    icon: MapOutlined,
    href: "/",
  },
  {
    text: "Бронирования",
    icon: VpnKeyOutlined,
    href: "/bookings",
  },
  {
    text: "Войти",
    icon: PersonOutlined,
    href: "/auth/login",
  },
];

export default routes;
