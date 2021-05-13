import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginPayload, RegisterPayload, User } from "../types";
import loginUserRequest from "@root/api/loginUserRequest";
import registerUserRequest from "@root/api/registerUserRequest";
import { push } from "./notifications";

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
      return {
        firstname: "Logged in",
        lastname: "Logged in",
      };
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
      return {
        firstname: "Logged in",
        lastname: "Logged in",
      };
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
    unsetUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    const onPending = (state) => {
      state.loading = true;
    };
    const onFulfilled = (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.user = payload;
    };
    const onRejected = (state) => {
      state.loading = false;
    };
    builder
      .addCase(registerUser.pending, onPending)
      .addCase(loginUser.pending, onPending)
      .addCase(loginUser.fulfilled, onFulfilled)
      .addCase(registerUser.fulfilled, onFulfilled)
      .addCase(loginUser.rejected, onRejected)
      .addCase(registerUser.rejected, onRejected);
  },
});

export const { unsetUser } = auth.actions;

export default auth.reducer;
