import axios from "axios";
import { IAddWordStorage, IEndWordTestItem } from "../types/types";
import { IUpdateWord } from "../types/MyVocaTypes";

const api = axios.create({
  baseURL: process.env.REACT_APP_MAIN_SERVER,

  withCredentials: true,
});

export const apis = {
  // 나의 단어장 관리
  getWordStorages: () => api.get(`/api/user/wordstorage/my`),

  getLikeWordStorage: () => api.get("/api/user/wordstorage/like"),

  addWordStorage: (addWordStorage: IAddWordStorage) =>
    api.post("/api/user/wordstorage", addWordStorage),

  searchWordStorage: (word: string) =>
    api.get(`/api/user/wordstorage/my/search?search=${word}`),

  getDetailWordStorage: (id: number) =>
    api.get(`/api/user/wordstorage/id/${id}`),

  editWordStorage: (id: number, addWordStorage: IAddWordStorage) =>
    api.put(`/api/user/wordstorage/id/${id}`, addWordStorage),

  deleteWordStorage: (id: number) =>
    api.delete(`/api/user/wordstorage/id/${id}`),

  editWord: (id: number, updateWord: IUpdateWord) =>
    api.put(`/api/user/wordstorage/id/${id}/word`, updateWord),

  // 단어 시험 서비스
  getWrongAnswerWordStorages: () =>
    api.get("/api/user/wordstorage/test/history"),

  makeWordTest: (wordStorageId: number) =>
    api.post("/api/user/wordstorage/test", { wordStorageId }),

  endWordTest: (endWordTestItem: IEndWordTestItem) =>
    api.post("/api/user/wordstorage/test/end", endWordTestItem),

  // 로그인
  login: () =>
    api.post("/login", {
      username: "admin@admin.com",
      password: "1234",
    }),

  checkNickname: (nickname: string) =>
    api.post("/api/check/nickname", { nickname }),

  // Main
  getChartData: () => api.get("/api/wordstorage/statistic"),

  getBestLikeVoca: (page: number) =>
    api.get(`/api/wordstorage/official/filter/like?page=${page}`),

  addMyVoca: (id: number) => api.post(`/api/wordstorage/save/id/${id}`),

  // 마이페이지
  getUserInfo: () => api.get("/api/user"),

  deleteUserInfo: () => api.delete("/api/user"),

  getUserTest: () => api.get("/oauth2"),

  // 공인 단어장
  suggestionWordStorage: (id: number) =>
    api.post(`/api/wordstorage/like/${id}`),

  // 1대1 영단어 게임
  getRecord: () => api.get("/api/game/my/record"),

  getGameWordStorage: (roomId: string) =>
    api.get(`/api/game/word?roomId=${roomId}`),

  getRank: () => api.get("/api/game/rank"),

  postGameResult: (result: boolean) =>
    api.post("/api/game/result", { result: result }),

  getTicket: () => api.get("/api/game/ticket"),
};
