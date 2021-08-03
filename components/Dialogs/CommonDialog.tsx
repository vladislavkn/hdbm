import {
  AppBar,
  Button,
  ButtonProps,
  colors,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import theme from "@root/theme";
import React, { ReactChild, ReactChildren } from "react";
import CloseIcon from "@material-ui/icons/Close";

type Action = {
  text: string;
  onClick: () => void;
} & ButtonProps;

export type CommonDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactChild | ReactChildren;
  actions?: Action[];
  contentClassName?: string;
} & Omit<DialogProps, "open" | "children">;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    color: colors.grey[700],
  },
}));

const CommonDialog = (props: CommonDialogProps) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    children,
    onClose,
    isOpen,
    title,
    actions,
    contentClassName,
    ...dialogProps
  } = props;
  const classes = useStyles();

  return (
    <Dialog
      maxWidth="xs"
      onClose={onClose}
      fullScreen={fullScreen}
      open={isOpen}
      {...dialogProps}
    >
      {fullScreen ? (
        <>
          <AppBar className={classes.appBar} elevation={0}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">{title}</Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </>
      ) : (
        <DialogTitle>{title}</DialogTitle>
      )}
      <DialogContent className={contentClassName}>{children}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Закрыть
        </Button>
        {actions.length > 0 &&
          actions.map((action, index) => {
            const { text, ...buttonProps } = action;
            return (
              <Button key={index} {...buttonProps}>
                {text}
              </Button>
            );
          })}
      </DialogActions>
    </Dialog>
  );
};

export default CommonDialog;
