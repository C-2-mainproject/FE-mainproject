import axios from "axios";

const api = axios.create({
  baseURL: "https://jdh3340.shop",

  withCredentials: true,
});

export const apis = {
  // 나의 단어장 관리
  getWordStorages: () => api.get("/api/user/wordstorage/my"),

  // 로그인
  login: () =>
    api.post("/login", {
      username: "user@user.com",
      password: "1234",
    }),
};
