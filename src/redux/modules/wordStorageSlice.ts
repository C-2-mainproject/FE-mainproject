import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

const initialState = {
  wordStorage: [],
  isLoading: false,
  isFinish: false,
  error: null,
};

export const __getWordStorageList = createAsyncThunk(
  "wordStorageSlice/__getWordStorageList",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getWordStorages();
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
    [__getWordStorageList.pending.type]: (state, action) => {
      // console.log(state, action);
    },
    [__getWordStorageList.fulfilled.type]: (state, action) => {
      // console.log("hahahah", state, action);
      state.wordStorage = action.payload;
    },
    [__getWordStorageList.rejected.type]: (state, action) => {
      // console.log(state, action);
    },
  },
});

// export const {} = wordStorageSlice.actions;

export default wordStorageSlice.reducer;
