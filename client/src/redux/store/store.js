import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slicer/postSlice";
export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
