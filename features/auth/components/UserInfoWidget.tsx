import { Card, CardHeader, Avatar } from "@material-ui/core";
import { User } from "../types";
import React from "react";

type UserInfoWidgetProps = {
  user: User;
};

const UserInfoWidget = ({ user }: UserInfoWidgetProps) => (
  <Card>
    <CardHeader
      avatar={
        <Avatar>
          {user.firstname[0]}
          {user.lastname[0]}
        </Avatar>
      }
      title={`${user.firstname} ${user.lastname}`}
      subheader={user.email}
    />
  </Card>
);

export default UserInfoWidget;
