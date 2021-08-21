import {
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {
  AccountBalanceWalletOutlined,
  AttachFileOutlined,
  DeleteOutlineOutlined,
} from "@material-ui/icons";
import { User } from "../types";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "..";

type DocumentsWidgetProps = {
  user: User;
};

const DocumentsWidget = ({ user }: DocumentsWidgetProps) => {
  const theme = useTheme();
  const shouldBeDense = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const { detachPassport } = useAuth();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Документы</Typography>
        <List>
          <ListItem dense={shouldBeDense} button>
            <ListItemIcon>
              <AccountBalanceWalletOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Паспорт"
              secondary={
                user.hasPassportData
                  ? "Паспорт привязан"
                  : "Паспорт не привязан"
              }
            />
            <ListItemSecondaryAction>
              <Tooltip title="Привязать паспорт">
                <IconButton
                  onClick={() => router.push("/auth/attach-passport")}
                  edge="end"
                >
                  <AttachFileOutlined />
                </IconButton>
              </Tooltip>
              {user.hasPassportData && (
                <Tooltip title="Отвязать паспорт">
                  <IconButton edge="end" onClick={detachPassport}>
                    <DeleteOutlineOutlined />
                  </IconButton>
                </Tooltip>
              )}
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default DocumentsWidget;
