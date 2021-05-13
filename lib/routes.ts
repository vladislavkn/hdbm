import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import {
  AccountCircle,
  MapOutlined,
  PersonOutlined,
  VpnKeyOutlined,
} from "@material-ui/icons";

export type Route = {
  href: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
};

export const WAYS_ROUTE = {
  text: "Направления",
  icon: MapOutlined,
  href: "/",
};

export const BOOKINGS_ROUTE = {
  text: "Бронирования",
  icon: VpnKeyOutlined,
  href: "/bookings",
};

export const LOGIN_ROUTE = {
  text: "Войти",
  icon: PersonOutlined,
  href: "/auth/login",
};

export const PROFILE_ROUTE = {
  text: "Профиль",
  icon: AccountCircle,
  href: "/auth/profile",
};
