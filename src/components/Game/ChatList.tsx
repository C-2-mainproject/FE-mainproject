import { useEffect, useRef } from "react";
import styled from "styled-components";

type MessageProps = {
  returnMsg: string[];
  nickname: string[];
  userNickname: string;
};

const ChatList = ({ returnMsg, nickname, userNickname }: MessageProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current!.scrollTop = scrollRef.current!.scrollHeight;
  }, [returnMsg]);

  return (
    <ChatListLayout ref={scrollRef}>
      {returnMsg.map((message, index) => {
        if (message === "게임을 시작합니다") {
          return (
            <ChatNotice key={index}>
              <span>{message}</span>
            </ChatNotice>
          );
        } else {
          return (
            <div key={index}>
              <ChatNickname>
                <span>{nickname[index]}</span>
              </ChatNickname>
              <ChatBubble
                className={nickname[index] === userNickname ? "IAM" : "YOU"}
              >
                <span>{message}</span>
              </ChatBubble>
            </div>
          );
        }
      })}
    </ChatListLayout>
  );
};

const ChatListLayout = styled.div`
  width: 530px;
  height: 630px;
  overflow-y: scroll;
  padding-top: 30px;
`;

const ChatNickname = styled.div`
  margin-left: 20px;
`;

const ChatBubble = styled.div`
  width: 200px;
  height: 60px;
  margin-left: 20px;

  background-color: ${props =>
    props.className === "IAM" ? "#D6F8FF" : "#FFF4D7"};
  margin-bottom: 10px;
  border-radius: 0px 30px 30px 30px;

  span {
    margin-left: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    letter-spacing: -0.07em;

    color: #666666;
  }
`;

const ChatNotice = styled.div`
  width: 460px;
  height: 60px;
  margin: auto;
  text-align: center;
  margin-bottom: 10px;
  background: #ffffff;
  border-radius: 30px;
  padding: 17px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.07em;
    color: #000000;
  }
`;
export default ChatList;
