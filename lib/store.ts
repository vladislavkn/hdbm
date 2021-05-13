import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import notifications from "./slices/notifications";

const store = configureStore({
  reducer: {
    auth,
    notifications,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
