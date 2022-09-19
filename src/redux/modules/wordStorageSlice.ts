import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";
import { IWordStorageInitialState } from "../../types/types";

const initialState: IWordStorageInitialState = {
  wordStorage: [],
  isLoading: false,
  isFinish: false,
};

export const __getWordStorageList = createAsyncThunk(
  "wordStorageSlice/__getWordStorageList",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getWordStorages();
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data.content);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const wordStorageSlice = createSlice({
  name: "wordStorageSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getWordStorageList.pending.type]: state => {
      // console.log(state, action);
      state.isLoading = true;
    },
    [__getWordStorageList.fulfilled.type]: (state, action) => {
      // console.log("hahahah", state, action);
      state.wordStorage = action.payload;
      state.isLoading = false;
      state.isFinish = true;
    },
    [__getWordStorageList.rejected.type]: state => {
      // console.log(state, action);
      state.isFinish = true;
    },
  },
});

// export const {} = wordStorageSlice.actions;

export default wordStorageSlice.reducer;
