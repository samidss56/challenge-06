import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postDetails: null,
};

const postSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
    setPostSearch: (state, action) => {
      state.postsSearch = action.payload;
    },
  },
});

export const { setPosts, setPostDetails, setPostSearch } = postSlicer.actions;

export default postSlicer.reducer;
