import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

const initialState = {
  userInfo: {
    nickname: "",
    profileImage: "",
    username: "",
  },
  isCheckUser: false,
  isLoading: false,
  isFinish: false,
};

export const __getUserInfo = createAsyncThunk(
  "userInfoSlice/__getUserInfo",
  async (payload, thunkAPI) => {
    const data = await apis.getUserInfo();
    return thunkAPI.fulfillWithValue(data.data);
  },
);

export const __checkUser = createAsyncThunk(
  "userInfoSlice/__checkUser",
  async (payload, thunkAPI) => {
    const data = await apis.getUserTest();
    return thunkAPI.fulfillWithValue(data);
  },
);

export const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getUserInfo.pending.type]: state => {
      state.isLoading = true;
    },
    [__getUserInfo.fulfilled.type]: (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false;
      state.isFinish = true;
    },
    [__getUserInfo.rejected.type]: state => {
      state.isFinish = true;
    },
    [__checkUser.fulfilled.type]: (state, action) => {
      if (action.payload.headers.cookie) {
        state.isCheckUser = true;
      }
    },
  },
});

export default userInfoSlice.reducer;
