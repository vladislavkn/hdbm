import { createSlice } from "@reduxjs/toolkit";
import { ID } from "../types";
const crypto = require("crypto");

type Message = {
  id: ID;
  text: string;
};

const notifications = createSlice({
  name: "auth",
  initialState: {
    messages: [] as Message[],
  },
  reducers: {
    notify(state, { payload }) {
      state.messages.push({
        id: crypto.randomBytes(16).toString("hex"),
        text: payload,
      });
      return state;
    },
    remove(state, { payload }) {
      state.messages = state.messages.filter((m) => m.id !== payload);
    },
  },
});

export const { notify, remove } = notifications.actions;
export default notifications.reducer;
