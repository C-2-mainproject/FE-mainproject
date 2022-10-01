import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (cookie: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set("user_cookie", cookie, {
    sameSite: "strict",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getCookie = () => {
  return cookies.get("user_cookie");
};

export const removeCookie = () => {
  return cookies.remove("user_cookie", { sameSite: "strict", path: "/" });
};
