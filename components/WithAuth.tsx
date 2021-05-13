import { useSelector } from "@root/lib/store-hooks";
import { User } from "@root/lib/types";

type ChildRenderFn = (user: User) => React.ReactChild;

type WithAuthProps = {
  loggedIn?: ChildRenderFn;
  guest?: React.ReactChild;
};

const WithAuth = ({ loggedIn, guest }: WithAuthProps) => {
  const user = useSelector((state) => state.auth.user);
  return <>{user ? loggedIn(user) : guest}</>;
};

export default WithAuth;
