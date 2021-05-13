import { useSelector } from "@root/lib/store-hooks";
import { useRouter } from "next/router";

const AuthController = () => {
  const { push } = useRouter();
  const user = useSelector((state) => state.auth.user);
  if (user) push("/");

  return null;
};

export default AuthController;
