import { configureStore } from "@reduxjs/toolkit";
import wordStorageSlice from "../modules/wordStorageSlice";

const store = configureStore({
  reducer: { wordStorageSlice },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
