import { configureStore } from "@reduxjs/toolkit";
import wordStorageSlice from "../modules/wordStorageSlice";
import answerSlice from "../modules/answerSlice";
import userInfoSlice from "../modules/userInfoSlice";
import gameInfoSlice from "../modules/gameInfoSlice";

const store = configureStore({
  reducer: { wordStorageSlice, answerSlice, userInfoSlice, gameInfoSlice },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
