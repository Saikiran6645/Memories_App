import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: null,
    loading: false,
    error: null,
  },
  reducers: {
    setPost: (state, action) => {
      state.posts = action.payload;
    },
  },
});
export const { setPost } = postSlice.actions;
const postReducer = postSlice.reducer;
export default postReducer;
