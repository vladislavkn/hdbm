import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { LoginOptions, RegisterOptions, PassportOptions, User } from "../types";
import * as api from "../api";
import { removeAuthTokenHeader, setAuthTokenHeader } from "@root/lib/http";
import { useRouter } from "next/router";
import { parseUser } from "../utils";

type AuthContext = {
  login: (options: LoginOptions) => void;
  register: (options: RegisterOptions) => void;
  attachPassport: (options: PassportOptions) => void;
  logout: () => void;
  revalidateUser: () => void;
  detachPassport: () => void;
  loading: boolean;
  user: User;
};

const authContext = createContext<AuthContext>({
  login: () => {},
  register: () => {},
  attachPassport: () => {},
  logout: () => {},
  revalidateUser: () => {},
  detachPassport: () => {},
  loading: false,
  user: null,
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!user) {
      const savedUser = localStorage.getItem("user");
      const savedToken = localStorage.getItem("access-token");
      if (savedUser && savedToken) {
        setUser(JSON.parse(savedUser));
        authenticate(savedToken);
      } else {
        logout();
      }
    }
  }, []);

  const authenticate = async (token: string) => {
    setLoading(true);
    try {
      setAuthTokenHeader(token);
      localStorage.setItem("access-token", token);

      const payload = token.split(".")[1];
      const user = parseUser(JSON.parse(atob(payload)).sub);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);

      console.info("Successfuly authenticate", user);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const revalidateUser = async () => {
    setLoading(true);
    try {
      const oldToken = localStorage.getItem("access-token");
      if (!oldToken) throw new Error("User is not authenticated");
      const { token } = await api.revalidateToken(oldToken);
      authenticate(token);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const login: AuthContext["login"] = async (options) => {
    setLoading(true);
    try {
      const token = await api.login(options);
      authenticate(token);
      push("/");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const register: AuthContext["register"] = async (options) => {
    setLoading(true);
    try {
      const token = await api.register(options);
      authenticate(token);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const attachPassport: AuthContext["attachPassport"] = async (options) => {
    setLoading(true);
    try {
      const isOk = await api.attachPassport(options);
      if (isOk) {
        setUser((user) => ({ ...user, hasPassportData: true }));
        authenticate(localStorage.getItem("access-token"));
        push("/auth/profile");
        revalidateUser();
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const detachPassport = async () => {
    setLoading(true);
    try {
      await api.detachPassport();
      await revalidateUser();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const logout = () => {
    removeAuthTokenHeader();
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("access-token");
  };

  return (
    <authContext.Provider
      value={{
        login,
        detachPassport,
        register,
        logout,
        user,
        revalidateUser,
        attachPassport,
        loading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
