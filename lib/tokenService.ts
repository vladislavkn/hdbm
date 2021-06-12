import axios from "axios";

const JWT_ACCESS_TOKEN_KEY = "JWT_ACCESS_TOKEN_KEY";
const JWT_REFRESH_TOKEN_KEY = "JWT_REFRESH_TOKEN_KEY";

export const setAccessToken = (token: string | null | false) => {
  if (token) {
    localStorage.setItem(JWT_ACCESS_TOKEN_KEY, token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    localStorage.removeItem(JWT_ACCESS_TOKEN_KEY);
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const getAccessToken = (): string | null =>
  localStorage.getItem(JWT_ACCESS_TOKEN_KEY);

export const setRefreshToken = (token: string | null | false) => {
  if (token) localStorage.setItem(JWT_REFRESH_TOKEN_KEY, token);
  else localStorage.removeItem(JWT_REFRESH_TOKEN_KEY);
};

export const getRefreshToken = (): string | null =>
  localStorage.getItem(JWT_REFRESH_TOKEN_KEY);
