import { createSlice } from "@reduxjs/toolkit";
import { IAnswerInitialState } from "../../types/types";

const initialState: IAnswerInitialState = {
  answerStorage: [],
  isLoading: false,
  isFinish: false,
};

export const answerSlice = createSlice({
  name: "answerSlice",
  initialState,
  reducers: {
    answerStorage: (state, action) => {
      console.log(state, action.payload);
      state.answerStorage = [...state.answerStorage, action.payload];
    },
  },
  extraReducers: {},
});

export const { answerStorage } = answerSlice.actions;

export default answerSlice.reducer;
