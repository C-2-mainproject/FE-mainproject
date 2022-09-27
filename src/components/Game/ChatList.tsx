import styled from "styled-components";

type MessageProps = {
  returnMsg: string[];
};

const ChatList = ({ returnMsg }: MessageProps) => {
  return (
    <ChatListLayout>
      {returnMsg.map((message, index) => {
        if (message === "게임을 시작합니다") {
          return (
            <ChatNotice key={index}>
              <span>{message}</span>
            </ChatNotice>
          );
        } else {
          return (
            <ChatBubble key={index}>
              <span>{message}</span>
            </ChatBubble>
          );
        }
      })}
    </ChatListLayout>
  );
};

const ChatListLayout = styled.div`
  width: 530px;
  height: 690px;
  overflow-y: scroll;
  padding-top: 30px;
`;

const ChatBubble = styled.div`
  width: 200px;
  height: 60px;
  margin-left: 20px;
  background: linear-gradient(
      360deg,
      rgba(0, 180, 219, 0.2) -1.83%,
      rgba(0, 180, 219, 0) 92.32%
    ),
    #ffffff;
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
  width: 458px;
  height: 60px;
  margin: auto;
  margin-bottom: 10px;
  background: #ffffff;
  border-radius: 30px;

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
export default ChatList;
