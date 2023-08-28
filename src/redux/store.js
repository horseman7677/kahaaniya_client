import { configureStore } from "@reduxjs/toolkit";
import storyReducer from '@/redux/reducers/StorySlice'

export default configureStore({
  reducer: {
    profile: storyReducer,
  },
});
