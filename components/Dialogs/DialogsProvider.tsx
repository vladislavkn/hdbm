import { PartialBy } from "@root/lib/types";
import { uuid } from "@root/lib/utils";
import React, { useContext, useState } from "react";

type CommonComponent = React.FC<Record<string, any>>;
type DialogPayload = {
  Component: CommonComponent;
  props: Record<string, any>;
  isOpen: boolean;
  id: string;
};
type DialogsContext = [
  <D extends CommonComponent>(
    dialog: D,
    props?: PartialBy<
      Omit<React.ComponentProps<D> & { onClose: () => void }, "isOpen">,
      "onClose"
    >
  ) => string,
  (id: string) => void
];

const dialogsContext = React.createContext<DialogsContext>([
  () => "",
  () => null,
]);

const DialogsProvider = ({ children }) => {
  const [dialogs, setDialogs] = useState<DialogPayload[]>([]);
  const openDialog: DialogsContext[0] = <D extends CommonComponent>(
    dialog,
    props = {}
  ) => {
    const id = uuid();
    setDialogs((dialogs) =>
      dialogs.concat({
        Component: dialog,
        props,
        isOpen: true,
        id,
      })
    );
    return id;
  };

  const closeDialog: DialogsContext[1] = (id) => {
    setDialogs((dialogs) =>
      dialogs.map((dialog) => {
        if (dialog.id === id) dialog.isOpen = false;

        return dialog;
      })
    );

    setTimeout(
      () =>
        setDialogs((dialogs) => dialogs.filter((dialog) => dialog.id !== id)),
      1000
    );
  };

  const handleClose = (dialog) => {
    if (dialog.props.onClose) dialog.props.onClose();
    closeDialog(dialog.id);
  };

  return (
    <dialogsContext.Provider value={[openDialog, closeDialog]}>
      {children}
      {dialogs.map((dialog) => (
        <dialog.Component
          key={dialog.id}
          {...dialog.props}
          onClose={() => handleClose(dialog)}
          isOpen={dialog.isOpen}
        />
      ))}
    </dialogsContext.Provider>
  );
};

export const useDialogs = () => useContext(dialogsContext);

export default DialogsProvider;
