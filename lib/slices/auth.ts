import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginPayload, RegisterPayload, User } from "../types";
import loginUserRequest from "@root/api/loginUserRequest";
import registerUserRequest from "@root/api/registerUserRequest";
import { push } from "./notifications";
import getUserRequest from "@root/api/GetUserRequest";
import { RootState } from "../store";

export const tryToLoginWithSavedToken = createAsyncThunk(
  "auth/tryToLoginWithSavedToken",
  async (_, { dispatch, getState, rejectWithValue }) => {
    console.group("Try to login with saved token");
    const user = (getState() as RootState).auth.user;
    if (user) {
      console.log("Already logged in:", user);
      return rejectWithValue(null);
    }
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token is empty");
      return rejectWithValue(null);
    } else console.log("Got token: " + token);

    try {
      const userData = await getUserRequest(token);
      console.log(`Logged in as ${userData.firstname} ${userData.lastname}`);
      return userData;
    } catch (e) {
      console.error(e);
      dispatch(push("Ошибка при авторизации: " + e.message));
      return;
    } finally {
      console.groupEnd();
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload, { rejectWithValue, dispatch }) => {
    console.group("Login request");
    console.log("Payload:", payload);
    try {
      const token = await loginUserRequest(payload);
      if (!token) throw new Error("Token is empty");

      localStorage.setItem("token", token);
      console.log("Got token:", token);
      return dispatch(tryToLoginWithSavedToken());
    } catch (e) {
      console.error(e);
      dispatch(push("Ошибка при авторизации: " + e.message));
      return rejectWithValue(null);
    } finally {
      console.groupEnd();
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload: RegisterPayload, { rejectWithValue, dispatch }) => {
    console.group("Register request");
    console.log("Payload:", payload);
    try {
      const token = await registerUserRequest(payload);
      if (!token) throw new Error("Token is empty");

      localStorage.setItem("token", token);
      console.log("Got token:", token);
      dispatch(tryToLoginWithSavedToken());
    } catch (e) {
      console.error(e);
      dispatch(push("Ошибка при авторизации: " + e.message));
      return rejectWithValue(null);
    } finally {
      console.groupEnd();
    }
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
      .addCase(tryToLoginWithSavedToken.fulfilled, onFulfilled)
      // Rejected
      .addCase(loginUser.rejected, onRejected)
      .addCase(registerUser.rejected, onRejected)
      .addCase(tryToLoginWithSavedToken.rejected, onRejected);
  },
});

export const { logout } = auth.actions;

export default auth.reducer;
