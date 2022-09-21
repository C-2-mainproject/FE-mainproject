import axios from "axios";
import { IAddWordStorage, IUpdateWord } from "../types/types";

const api = axios.create({
  baseURL: "https://jdh3340.shop",

  withCredentials: true,
});

export const apis = {
  // 나의 단어장 관리
  getWordStorages: () => api.get("/api/user/wordstorage/my"),

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

  // 로그인
  login: () =>
    api.post("/login", {
      username: "user@user.com",
      password: "1234",
    }),
};
