import { configureStore } from "@reduxjs/toolkit";
import wordStorageSlice from "../modules/wordStorageSlice";

const store = configureStore({
  reducer: { wordStorageSlice },
});

export default store;
