import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameInfo: {
    roomId: "",
    sessionId: [],
  },
  isLoading: false,
  isFinish: false,
};

export const gameInfoSlice = createSlice({
  name: "gameInfoSlice",
  initialState,
  reducers: {
    getGameInfo: (state, action) => {
      console.log(state, action);
      state.gameInfo = action.payload;
    },
  },
  extraReducers: {},
});

export const { getGameInfo } = gameInfoSlice.actions;
export default gameInfoSlice.reducer;
