import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameInfo: {
    roomId: "",
    sessionId: [],
    participant: [],
  },

  gameWordStorage: [
    {
      word: "Apple",
      mean: "사과",
    },
    {
      word: "Banana",
      mean: "바나나",
    },
    {
      word: "Tree",
      mean: "나무",
    },
    {
      word: "Star",
      mean: "별",
    },
    {
      word: "Fruit",
      mean: "과일",
    },
    {
      word: "Bag",
      mean: "가방",
    },
  ],
  quiz: 0,
  isReady: false,
  isLoading: false,
  isFinish: false,
  testState: {},
};

export const gameInfoSlice = createSlice({
  name: "gameInfoSlice",
  initialState,
  reducers: {
    getGameInfo: (state, action) => {
      // roomId, sessionId 정보
      console.log("getGameInfo", state, action);
      state.gameInfo = action.payload;
    },

    getReadyInfo: (state, action) => {
      // Ready버튼 상태
      console.log("getReadyInfo", state, action);
      state.isReady = action.payload;
    },

    getQuizInfo: (state, action) => {
      //
      console.log("getQuizInfo", state, action.payload.quizNumber, state.quiz);
      state.quiz = action.payload.quizNumber + 1;
    },
  },
  extraReducers: {},
});

export const { getGameInfo, getReadyInfo, getQuizInfo } = gameInfoSlice.actions;
export default gameInfoSlice.reducer;
