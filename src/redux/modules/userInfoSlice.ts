import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

const initialState = {
  userInfo: {
    nickname: "",
    profileImage: "",
    username: "",
  },
  isLoading: false,
  isFinish: false,
};

export const __getUserInfo = createAsyncThunk(
  "userInfoSlice/__getUserInfo",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getUserInfo();
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
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
  },
});

export default userInfoSlice.reducer;
