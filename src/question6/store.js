import { configureStore } from "@reduxjs/toolkit";
import questionReducer from questionSlice;
import { questionSlice } from "./questionSlice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
  }
})
