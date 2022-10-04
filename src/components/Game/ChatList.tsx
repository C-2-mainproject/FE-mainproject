import { useEffect, useRef } from "react";
import styled from "styled-components";

type MessageProps = {
  returnMsg: string[];
  nickname: string[];
  profile: string[];
  userNickname: string;
};

const ChatList = ({
  returnMsg,
  nickname,
  profile,
  userNickname,
}: MessageProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
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
        } else if (message.includes("승리")) {
          return (
            <ChatNotice key={index}>
              <span>{message}</span>
            </ChatNotice>
          );
        } else {
          return (
            <ChatInfoWrapper key={index}>
              <ChatProfile>
                <img src={profile[index]} alt="profile" />
              </ChatProfile>
              <div>
                <ChatNickname>
                  <p>{nickname[index]}</p>
                </ChatNickname>
                <ChatBubble
                  className={nickname[index] === userNickname ? "IAM" : "YOU"}
                >
                  <span>{message}</span>
                </ChatBubble>
              </div>
            </ChatInfoWrapper>
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

  &::-webkit-scrollbar {
    display: none;
  }
`;
const ChatInfoWrapper = styled.div`
  display: flex;
`;
const ChatNickname = styled.div`
  margin-left: 20px;
`;

const ChatBubble = styled.div`
  min-width: 150px;
  height: 60px;
  margin-left: 20px;
  padding: 17px;
  background-color: ${props =>
    props.className === "IAM" ? "#00B4DB" : "#FFFFFF"};
  margin-bottom: 10px;
  border-radius: 0px 30px 30px 30px;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;
  }

  span {
    margin-left: 15px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.07em;

    color: ${props => (props.className === "IAM" ? "#FFFFFF" : "#666666")};
  }
`;
const ChatProfile = styled.div`
  margin-left: 20px;

  img {
    width: 44px;
    height: 44px;
    border-radius: 30px;
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
