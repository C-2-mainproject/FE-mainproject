import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setSessionId = (sessionId: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set("sessionId", sessionId, {
    sameSite: "strict",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getSessionId = () => {
  return cookies.get("sessionId");
};
