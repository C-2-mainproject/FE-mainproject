import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";
import { IAnswerInitialState } from "../../types/types";

const initialState: IAnswerInitialState = {
  answerStorage: [],
  wrongStorage: {
    index: 0,
    words: [],
    meanings: [],
  },

  testWordStorage: [],
  isLoading: false,
  isFinish: false,
};

export const __makeWordTest = createAsyncThunk(
  "answerSlice/__makeWordTest",
  async (payload: number, thunkAPI) => {
    try {
      const data = await apis.makeWordTest(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const answerSlice = createSlice({
  name: "answerSlice",
  initialState,
  reducers: {
    submitStorage: (state, action) => {
      state.answerStorage = [...state.answerStorage, action.payload];
    },
    wrongStorage: (state, action) => {
      state.wrongStorage = {
        ...state.wrongStorage,
        words: [...state.wrongStorage.words, action.payload.word],
        meanings: [...state.wrongStorage.meanings, action.payload.mean],
      };
    },
    reset: state => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: {
    [__makeWordTest.pending.type]: state => {
      state.isLoading = true;
    },
    [__makeWordTest.fulfilled.type]: (state, action) => {
      state.testWordStorage = [action.payload];
      state.isLoading = false;
      state.isFinish = true;
    },
    [__makeWordTest.rejected.type]: state => {
      state.isFinish = true;
    },
  },
});

export const { submitStorage, wrongStorage, reset } = answerSlice.actions;

export default answerSlice.reducer;
