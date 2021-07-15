import { IconButton, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { remove } from "@root/lib/slices/notifications";
import { useSelector, useDispatch } from "@root/lib/hooks/typedStoreHooks";

const NotificationsSnacbar = () => {
  const message = useSelector((state) => state.notifications.messages[0]);
  const dispatch = useDispatch();
  const handleClose = (_, reason?: string) =>
    reason !== "clickaway" && dispatch(remove(message.id));

  if (!message) return null;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={true}
      autoHideDuration={message.autoHide ? 6000 : null}
      onClose={handleClose}
      message={message.text}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Close fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default NotificationsSnacbar;
