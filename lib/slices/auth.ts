import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginPayload, PassportData, RegisterPayload, User } from "../types";
import { RootState } from "../store";
import tokenService from "../services/tokenService";
import authService from "../services/authService";
import { NextRouter } from "next/router";
import { notify } from "../utils";

export const fetchUser = createAsyncThunk(
  "auth/fetch-user",
  (token: string, { rejectWithValue }) => {
    if (!token) return rejectWithValue(null);
    return authService.getUser(token).catch(() => rejectWithValue(null));
  }
);

export const tryToLoginWithSavedToken = createAsyncThunk(
  "auth/tryToLoginWithSavedToken",
  (_, { getState, rejectWithValue, dispatch }) => {
    // Check if user is already logged in
    if ((getState() as RootState).auth.user) return rejectWithValue(null);

    const token = tokenService.getAccessToken();
    if (!token) return rejectWithValue(null);
    tokenService.setAccessToken(token);

    return dispatch(fetchUser(token));
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  (payload: LoginPayload, { rejectWithValue, dispatch }) =>
    authService
      .login(payload)
      .then((accessToken) => {
        if (!accessToken) throw new Error("Token is empty");
        tokenService.setAccessToken(accessToken);
        return dispatch(tryToLoginWithSavedToken());
      })
      .catch(() => rejectWithValue(null))
);

export const registerUser = createAsyncThunk(
  "auth/register",
  (payload: RegisterPayload, { rejectWithValue, dispatch }) =>
    authService
      .register(payload)
      .then((token) => {
        if (!token) throw new Error("Token is empty");
        tokenService.setAccessToken(token);
        return dispatch(tryToLoginWithSavedToken());
      })
      .catch(() => rejectWithValue(null))
);

export const attachPassport = createAsyncThunk(
  "auth/attach-passport",
  (
    payload: {
      data: PassportData;
      router: NextRouter;
    },
    { rejectWithValue, dispatch }
  ) => {
    const { data, router } = payload;
    return authService
      .attachPassport(data)
      .then((res) => {
        if (!res) throw new Error("Passport request failed");
        router.back();
        notify("Паспорт успешно привязан");
        return dispatch(fetchUser(tokenService.getAccessToken()));
      })
      .catch(() => rejectWithValue(null));
  }
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
      .addCase(fetchUser.fulfilled, onFulfilled)
      // Rejected
      .addCase(loginUser.rejected, onRejected)
      .addCase(registerUser.rejected, onRejected)
      .addCase(tryToLoginWithSavedToken.rejected, onRejected)
      .addCase(attachPassport.rejected, onRejected)
      .addCase(fetchUser.rejected, onRejected);
  },
});

export const { logout } = auth.actions;

export default auth.reducer;
