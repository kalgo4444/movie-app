import { configureStore } from "@reduxjs/toolkit";
import bookmark from "../features/bookmark/store/bookmarkSlice";

export const store = configureStore({
  reducer: {
    bookmark,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
