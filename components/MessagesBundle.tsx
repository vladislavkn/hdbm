import { IconButton, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { remove } from "@root/lib/slices/notifications";
import { useSelector, useDispatch } from "@root/lib/hooks/typedStoreHooks";

const MessagesBundle = () => {
  const message = useSelector((state) => state.notifications.messages[0]);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(remove(message.id));

  if (message)
    return (
      <Snackbar
        key={message.id}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={true}
        autoHideDuration={6000}
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
  return null;
};

export default MessagesBundle;
