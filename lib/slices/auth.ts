import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginPayload, RegisterPayload, User } from "../types";
import loginUserRequest from "@root/api/loginUserRequest";
import registerUserRequest from "@root/api/registerUserRequest";
import { push } from "./notifications";
import getUserRequest from "@root/api/GetUserRequest";
import { RootState } from "../store";
import { getAccessToken, setAccessToken } from "../tokenService";

export const tryToLoginWithSavedToken = createAsyncThunk(
  "auth/tryToLoginWithSavedToken",
  async (_, { dispatch, getState, rejectWithValue }) => {
    // Check if user is already logged in
    if ((getState() as RootState).auth.user) return rejectWithValue(null);

    const token = getAccessToken();
    if (!token) return rejectWithValue(null);

    return getUserRequest(token).catch((err) => {
      dispatch(push("Ошибка при авторизации: " + err.message));
      return rejectWithValue(null);
    });
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload, { rejectWithValue, dispatch }) =>
    loginUserRequest(payload)
      .then((accessToken) => {
        if (!accessToken) throw new Error("Token is empty");
        setAccessToken(accessToken);
        return dispatch(tryToLoginWithSavedToken());
      })
      .catch((err) => {
        dispatch(push("Ошибка при авторизации: " + err.message));
        return rejectWithValue(null);
      })
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload: RegisterPayload, { rejectWithValue, dispatch }) =>
    registerUserRequest(payload)
      .then((token) => {
        if (!token) throw new Error("Token is empty");
        setAccessToken(token);
        return dispatch(tryToLoginWithSavedToken());
      })
      .catch((err) => {
        dispatch(push("Ошибка при авторизации: " + err.message));
        return rejectWithValue(null);
      })
);

const auth = createSlice({
  name: "auth",
  initialState: {
    user: null as User | null,
    loading: false as boolean,
  },
  reducers: {
    logout(state) {
      localStorage.removeItem("token");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    const onPending = (state) => {
      state.loading = true;
    };
    const onFulfilled = (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    };
    const onRejected = (state) => {
      state.loading = false;
    };

    builder
      // Pending
      .addCase(registerUser.pending, onPending)
      .addCase(loginUser.pending, onPending)
      .addCase(tryToLoginWithSavedToken.pending, onPending)
      // Fulfilled
      .addCase(tryToLoginWithSavedToken.fulfilled, onFulfilled)
      // Rejected
      .addCase(loginUser.rejected, onRejected)
      .addCase(registerUser.rejected, onRejected)
      .addCase(tryToLoginWithSavedToken.rejected, onRejected);
  },
});

export const { logout } = auth.actions;

export default auth.reducer;
