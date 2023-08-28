import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: [],
};

const storySlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // test: (state, action) => {
    //   console.log("testing redux...");
    //   state.id = action.payload;
    //   console.log(state.id);
    // },
  },
});

export const { test } = storySlice.actions;
export default storySlice.reducer;
