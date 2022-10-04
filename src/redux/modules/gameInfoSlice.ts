import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../shared/api";

const initialState = {
  gameInfo: {
    roomId: "",
    cookie: [],
    participant: [],
    profileImg: [],
  },

  gameWordStorage: [
    {
      words: "Provide",
      meanings: "공급하다",
    },
    {
      words: "Attitude",
      meanings: "태도",
    },
    {
      words: "Occasion",
      meanings: "경우",
    },
    {
      words: "Opportunity",
      meanings: "기회",
    },
    {
      words: "Professional",
      meanings: "전문가",
    },
    {
      words: "Generate",
      meanings: "발생하다",
    },
    {
      words: "Frequent",
      meanings: "빈번한",
    },
    {
      words: "Negative",
      meanings: "부정적인",
    },
    {
      words: "Biology",
      meanings: "생물학",
    },
    {
      words: "Compose",
      meanings: "작곡하다",
    },
  ],
  isReady: false,
  isLoading: false,
  isFinish: false,
  quizProgress: {
    quizNumber: 0,
    userA: 0,
    userB: 0,
    finalWinner: "",
    disconnectUser: "",
    correctAnswer: [],
  },
};

export const __getSharedWordStorage = createAsyncThunk(
  "gameInfoSlice/__getSharedWordStorage",
  async (payload: string, thunkAPI) => {
    console.log(payload, thunkAPI);
    try {
      const data = await apis.getGameWordStorage(payload);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  },
);

export const gameInfoSlice = createSlice({
  name: "gameInfoSlice",
  initialState,
  reducers: {
    getGameInfo: (state, action) => {
      // roomId, sessionId 정보
      state.gameInfo = action.payload;
    },

    getReadyInfo: (state, action) => {
      // Ready버튼 상태
      state.isReady = action.payload;
    },

    getQuizInfo: (state, action) => {
      //
      if (action.payload.messageType === "VICTORY") {
        state.quizProgress = {
          ...state.quizProgress,
          disconnectUser: action.payload.nickname,
        };
      }
      if (
        action.payload.message ===
        state.gameWordStorage[state.quizProgress.quizNumber].meanings
      ) {
        if (state.quizProgress.userA === 4) {
          state.quizProgress = {
            ...state.quizProgress,
            finalWinner: action.payload.matchingNickname[0],
          };
        }

        if (state.quizProgress.userB === 4) {
          state.quizProgress = {
            ...state.quizProgress,
            finalWinner: action.payload.matchingNickname[1],
          };
        }

        if (action.payload.matchingNickname[0] === action.payload.nickname) {
          state.quizProgress = {
            ...state.quizProgress,
            quizNumber: state.quizProgress.quizNumber + 1,
            userA: state.quizProgress.userA + 1,

            correctAnswer: [...state.quizProgress.correctAnswer].concat(
              action.payload.nickname,
            ),
          };
        }

        if (action.payload.matchingNickname[1] === action.payload.nickname) {
          state.quizProgress = {
            ...state.quizProgress,
            quizNumber: state.quizProgress.quizNumber + 1,
            userB: state.quizProgress.userB + 1,

            correctAnswer: [...state.quizProgress.correctAnswer].concat(
              action.payload.nickname,
            ),
          };
        }
      }
    },

    finishGame: state => {
      state.quizProgress = {
        quizNumber: 0,
        userA: 0,
        userB: 0,
        disconnectUser: "",
        finalWinner: "",
        correctAnswer: [],
      };
      state.isReady = false;
    },
  },
  extraReducers: {
    [__getSharedWordStorage.pending.type]: state => {
      console.log(state);
    },
    [__getSharedWordStorage.fulfilled.type]: (state, action) => {
      console.log(state, action.payload);
      state.gameWordStorage = action.payload;
    },
    [__getSharedWordStorage.rejected.type]: state => {
      console.log(state);
    },
  },
});

export const { getGameInfo, getReadyInfo, getQuizInfo, finishGame } =
  gameInfoSlice.actions;
export default gameInfoSlice.reducer;
