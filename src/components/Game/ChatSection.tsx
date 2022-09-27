import { useEffect, useLayoutEffect, useState } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import styled from "styled-components";
import { getSessionId } from "../../shared/Cookie";
import { GameInput, ChatList } from "../index";
import axios from "axios";
import { ildan } from "../../images";

// JOIN
// DISCONNECTED
// CHAT
// READY
// GAME
// NEXT
// FINISH

const quiz_list = ["aaa", "bbb", "ccc", "ddd"];
const ChatSection = () => {
  const [roomId, setRoomId] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [returnMsg, setReturnMsg] = useState<string[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [number, setNumber] = useState<number>(0);
  const [answer, setAnswer] = useState<number>(0);

  const socket = new SockJS("http://newlno.com/ws");
  const stompClient = Stomp.over(socket);

  const headers = {
    simpSessionId: getSessionId(),
  };

  useLayoutEffect(() => {
    onConnected();
    return () => {
      onDisconnect();
    };
  }, []);

  // const getGameWordStorage = async () => {
  //   try {
  //     const data = await axios.get("http://newlno.com/api/game/wordstorage", {
  //       withCredentials: true,
  //     });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getGameWordStorage();
  // }, []);

  const onConnected = () => {
    console.log("onConnected!!");
    try {
      stompClient.connect(headers, () => {
        stompClient.subscribe(
          `/sub/chat/join`,
          data => {
            const returnMessage = JSON.parse(data.body);
            setRoomId(returnMessage.roomId);

            reSubscribe(returnMessage.roomId);
          },
          headers,
        );
      });
      // stompClient.unsubscribe("sub-0");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const onDisconnect = () => {
    stompClient.disconnect(() => {
      stompClient.unsubscribe("sub-0");
    });
  };

  const reSubscribe = (room: string) => {
    try {
      stompClient.unsubscribe("sub-0");
      stompClient.subscribe(
        `/sub/chat/enter/${room}`,
        data => {
          const returnMessage = JSON.parse(data.body);
          console.log("return msg::", returnMessage);
          setReturnMsg(returnMsg => [...returnMsg, returnMessage.message]);

          if (returnMessage.messageType === "READY") {
            setIsReady(true);
          }

          if (returnMessage.messageType === "GAME") {
            if (quiz_list[returnMessage.number] === returnMessage.message) {
              console.log("정답입니다.", quiz_list[returnMessage.number]);
              setNumber(returnMessage.number + 1);
              setAnswer(returnMessage.answer + 1);
            }
          }
        },
        headers,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const sendMessage = () => {
    stompClient.send(
      `/pub/chat/enter/${roomId}`,
      headers,
      JSON.stringify({
        sessionId: getSessionId(),
        message: message,
        roomId: roomId,
        number: number,
        answer: answer,
        messageType: isReady ? "GAME" : "CHAT",
      }),
    );
  };

  const ready = () => {
    console.log("ready!!!");

    stompClient.send(
      `/pub/chat/enter/${roomId}`,
      headers,
      JSON.stringify({
        sessionId: getSessionId(),
        message: "게임을 시작합니다",
        roomId: roomId,
        messageType: "READY",
      }),
    );
  };

  return (
    <ChatBoxLayout>
      <ChatBoxHeader>
        <div>
          <img src={ildan} onClick={ready} />
        </div>
        <p>일단이의 랜덤 매칭 영단어 게임</p>
      </ChatBoxHeader>
      <ChatListWrapper>
        <ChatList returnMsg={returnMsg} />
      </ChatListWrapper>
      <GameInputWrapper>
        <GameInput setMessage={setMessage} sendMessage={sendMessage} />
      </GameInputWrapper>
    </ChatBoxLayout>
  );
};

const ChatBoxLayout = styled.div`
  width: 530px;
  height: 800px;
  margin-left: 30px;
`;

const ChatBoxHeader = styled.div`
  width: 530px;
  height: 110px;
  display: flex;
  background-color: #e4e4e4;

  img {
    overflow: hidden;
    width: 150px;
    position: relative;
    vertical-align: middle;
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;

    letter-spacing: -0.07em;
    text-transform: uppercase;

    color: #707070;
  }
`;

const ChatListWrapper = styled.div`
  width: 530px;
  height: 630px;
  background-color: #f0f0f0;
`;

const GameInputWrapper = styled.div`
  width: 530px;
  height: 60px;
`;
export default ChatSection;
