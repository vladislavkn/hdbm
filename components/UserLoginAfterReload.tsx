import { useEffect } from "react";
import { useDispatch } from "@root/lib/hooks/typedStoreHooks";
import { tryToLoginWithSavedToken } from "@root/lib/slices/auth";

const UserLoginAfterReload = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tryToLoginWithSavedToken());
  }, []);

  return null;
};

export default UserLoginAfterReload;
