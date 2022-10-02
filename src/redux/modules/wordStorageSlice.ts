import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";
import { IWordStorageInitialState } from "../../types/types";

const initialState: IWordStorageInitialState = {
  wordStorage: [],
  detailWordStorage: [],
  isLoading: false,
  isFinish: false,
  pageNum: 0,
  lastPage: false,
};

export const __getWordStorageList = createAsyncThunk(
  "wordStorageSlice/__getWordStorageList",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getWordStorages();
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const __searchWordStorage = createAsyncThunk(
  "wordStorageSlice/__searchWordStorage",
  async (payload: string, thunkAPI) => {
    try {
      const data = await apis.searchWordStorage(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const wordStorageSlice = createSlice({
  name: "wordStorageSlice",
  initialState,
  reducers: {
    getDetailWordStorage: (state, action) => {
      state.detailWordStorage = [action.payload];
    },
  },
  extraReducers: {
    [__getWordStorageList.pending.type]: state => {
      state.isLoading = true;
    },
    [__getWordStorageList.fulfilled.type]: (state, action) => {
      state.wordStorage = action.payload;
      state.pageNum = action.payload.number;
      state.lastPage = action.payload.last;
      state.isLoading = false;
      state.isFinish = true;
    },
    [__getWordStorageList.rejected.type]: state => {
      state.isFinish = true;
    },

    [__searchWordStorage.pending.type]: state => {
      state.isLoading = true;
    },
    [__searchWordStorage.fulfilled.type]: (state, action) => {
      state.wordStorage = action.payload;
      state.isLoading = false;
      state.isFinish = true;
    },
    [__searchWordStorage.rejected.type]: state => {
      state.isFinish = true;
    },
  },
});

export const { getDetailWordStorage } = wordStorageSlice.actions;

export default wordStorageSlice.reducer;
