import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginPayload, RegisterPayload, User } from "../types";
import { RootState } from "../store";
import tokenService from "../services/tokenService";
import authService from "../services/authService";

export const tryToLoginWithSavedToken = createAsyncThunk(
  "auth/tryToLoginWithSavedToken",
  async (_, { getState, rejectWithValue }) => {
    // Check if user is already logged in
    if ((getState() as RootState).auth.user) return rejectWithValue(null);

    const token = tokenService.getAccessToken();
    if (!token) return rejectWithValue(null);
    tokenService.setAccessToken(token);

    return authService.getUser(token).catch(() => rejectWithValue(null));
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload, { rejectWithValue, dispatch }) =>
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
  async (payload: RegisterPayload, { rejectWithValue, dispatch }) =>
    authService
      .register(payload)
      .then((token) => {
        if (!token) throw new Error("Token is empty");
        tokenService.setAccessToken(token);
        return dispatch(tryToLoginWithSavedToken());
      })
      .catch(() => rejectWithValue(null))
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
      state.user.hasPassportData = true;
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
