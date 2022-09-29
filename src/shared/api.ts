import axios from "axios";
import { IAddWordStorage, IEndWordTestItem, IUpdateWord } from "../types/types";

const api = axios.create({
  baseURL: "https://jdh3340.shop",

  withCredentials: true,
});

export const apis = {
  // 나의 단어장 관리
  getWordStorages: (num: number) =>
    api.get(`/api/user/wordstorage/my?page=${num}`),

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

  // chart
  getChartData: () => api.get("/api/wordstorage/statistic"),

  // 마이페이지
  getUserInfo: () => api.get("/api/user"),

  // 공인 단어장
  suggestionWordStorage: (id: number) =>
    api.post(`/api/wordstorage/like/${id}`),

  // 1대1 영단어 게임
  getRecord: () => api.get("/api/game/my/record"),

  getGameWordStorage: (roomId: string) =>
    api.get(`/api/game/word?roomId=${roomId}`),

  getRank: () => api.get("/api/game/rank"),
};
