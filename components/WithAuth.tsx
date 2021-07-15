import { useSelector } from "@root/lib/hooks/typedStoreHooks";
import { User } from "@root/lib/types";

type WithAuthProps = {
  user?: (user?: User) => React.ReactChild;
  guest?: React.ReactChild;
};

const WithAuth = ({ user: forUser, guest }: WithAuthProps) => {
  const user = useSelector((state) => state.auth.user);
  return <>{user ? forUser(user) : guest}</>;
};

export default WithAuth;
