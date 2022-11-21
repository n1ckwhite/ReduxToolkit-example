import { configureStore} from "@reduxjs/toolkit";
import { countSlice } from "../slicers/sliceCount";
import {usersSlice} from '../slicers/placeholderSlice';
export const store = configureStore({
  reducer: {
    count: countSlice.reducer,
    users: usersSlice.reducer
  }
})