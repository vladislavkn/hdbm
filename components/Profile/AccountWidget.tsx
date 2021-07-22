import ActionDialog from "@components/Dialogs/ActionDialog";
import { useDialogs } from "@components/Dialogs/DialogsProvider";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { SettingsOutlined, ExitToAppOutlined } from "@material-ui/icons";
import { useDispatch } from "@root/lib/hooks/typedStoreHooks";
import { logout } from "@root/lib/slices/auth";
import React from "react";

const AccountWidget = () => {
  const theme = useTheme();
  const shouldBeDense = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const [open] = useDialogs();

  const handleLogout = () =>
    open<typeof ActionDialog>(ActionDialog, {
      title: "Выход из аккаунта",
      text: "Вы точно хотите выйти из аккаунта?",
      onSubmit: () => dispatch(logout()),
      actionText: "Выйти",
    });

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Аккаунт</Typography>
        <List>
          <ListItem dense={shouldBeDense} button>
            <ListItemIcon>
              <SettingsOutlined />
            </ListItemIcon>
            <ListItemText primary="Настройки" />
          </ListItem>
          <ListItem dense={shouldBeDense} button onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppOutlined />
            </ListItemIcon>
            <ListItemText color="error" primary="Выйти" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default AccountWidget;
