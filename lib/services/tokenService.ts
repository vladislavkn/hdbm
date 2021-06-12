import axios from "axios";

const JWT_ACCESS_TOKEN_KEY = "JWT_ACCESS_TOKEN_KEY";
const JWT_REFRESH_TOKEN_KEY = "JWT_REFRESH_TOKEN_KEY";

const tokenService = {
  setAccessToken(token: string | null | false) {
    if (token) {
      localStorage.setItem(JWT_ACCESS_TOKEN_KEY, token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      localStorage.removeItem(JWT_ACCESS_TOKEN_KEY);
      delete axios.defaults.headers.common["Authorization"];
    }
  },
  getAccessToken(): string | null {
    return localStorage.getItem(JWT_ACCESS_TOKEN_KEY);
  },
  setRefreshToken(token: string | null | false) {
    if (token) localStorage.setItem(JWT_REFRESH_TOKEN_KEY, token);
    else localStorage.removeItem(JWT_REFRESH_TOKEN_KEY);
  },
  getRefreshToken(): string | null {
    return localStorage.getItem(JWT_REFRESH_TOKEN_KEY);
  },
};

export default tokenService;
