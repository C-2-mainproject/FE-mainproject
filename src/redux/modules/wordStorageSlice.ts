import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";
import {
  IWordStorageInitialState,
  IWordStorage,
} from "../../types/MyVocaTypes";

const initialState: IWordStorageInitialState = {
  wordStorage: [],
  detailWordStorage: {
    category: "",
    createAt: "",
    description: "",
    id: 0,
    lastTestAt: "",
    likeCount: 0,
    modifiedAt: "",
    nickname: "",
    public: false,
    title: "",
  },
  addWords: [
    {
      words: [],
      meanings: [],
    },
  ],
  isLoading: false,
  isFinish: false,
  pageNum: 0,
  lastPage: false,
};

export const __getWordStorageList = createAsyncThunk(
  "wordStorageSlice/__getWordStorageList",
  async (payload, thunkAPI) => {
    const data = await apis.getWordStorages();
    return thunkAPI.fulfillWithValue(data.data);
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

export const __getDetailWordStorage = createAsyncThunk(
  "wordStorageSlice/__getDetailWordStorage",
  async (payload: string, thunkAPI) => {
    try {
      const data = await apis.getWordStorages();
      const res = data.data.find((value: IWordStorage) => {
        return value.id === Number(payload);
      });
      return thunkAPI.fulfillWithValue(res);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const __getDetailWord = createAsyncThunk(
  "wordStorageSlice/__getDetailWord",
  async (payload: number, thunkAPI) => {
    try {
      const data = await apis.getDetailWordStorage(payload);
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
    addWord: (state, action) => {
      state.addWords = [
        {
          words: [...state.addWords[0].words, ...action.payload.words],
          meanings: [...state.addWords[0].meanings, ...action.payload.meanings],
        },
      ];
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

    [__getDetailWordStorage.fulfilled.type]: (state, action) => {
      state.isFinish = true;
      state.detailWordStorage = action.payload;
    },
    [__getDetailWord.fulfilled.type]: (state, action) => {
      state.addWords = [
        {
          words: [],
          meanings: [],
        },
      ];
      state.addWords = [
        {
          words: [...state.addWords[0].words, ...action.payload.words],
          meanings: [...state.addWords[0].meanings, ...action.payload.meanings],
        },
      ];
    },
  },
});

export const { addWord } = wordStorageSlice.actions;

export default wordStorageSlice.reducer;
