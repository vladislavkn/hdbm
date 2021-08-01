import { useAuth } from "../context/authContext";
import { User } from "../types";
import GuestFallback from "./GuestFallback";

type AuthProps = {
  children?: (user: User) => React.ReactChild;
  guestFallback?: React.ReactNode;
};

const Auth = (props: AuthProps) => {
  const { children, guestFallback = <GuestFallback /> } = props;

  const { user } = useAuth();
  return <>{user ? children(user) : guestFallback}</>;
};

export default Auth;
