import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./reducer/ListReducer";

export const store = configureStore({
  reducer: {
    sinhVienItem: listReducer,
  },
});
