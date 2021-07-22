import CommonDialog from "./CommonDialog";
import React from "react";
import { Typography } from "@material-ui/core";
import { DialogProps } from "@root/lib/types";

type ActionDialogProps = {
  text: string;
  onSubmit: () => void;
  actionText: string;
  title: string;
} & DialogProps;

const ActionDialog = (props: ActionDialogProps) => {
  const { isOpen, onClose, text, onSubmit, actionText, title } = props;

  return (
    <CommonDialog
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      actions={[
        {
          text: actionText,
          onClick: () => {
            onSubmit();
            onClose();
          },
          color: "primary",
          variant: "contained",
          disableElevation: true,
        },
      ]}
    >
      <Typography>{text}</Typography>
    </CommonDialog>
  );
};

export default ActionDialog;
