import { useLayoutEffect, useState } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import styled from "styled-components";
// import { getSessionId } from "../../shared/Cookie";
import { GameInput, ChatList } from "../index";
// import axios from "axios";
import { ildan } from "../../images";
import { useAppSelector } from "../../shared/reduxHooks";
// import { apis } from "../../shared/api";

// JOIN
// DISCONNECTED
// CHAT
// READY
// GAME
// NEXT
// FINISH
const quiz_list = ["aaa", "bbb", "ccc", "ddd"];
const ChatSection = () => {
  const [message, setMessage] = useState<string>("");
  // const [stringInfo, setStringInfo] = useState({
  //   roomId: "",
  //   message: "",
  //   sessionId: "",
  // });

  const [returnMsg, setReturnMsg] = useState<string[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [number, setNumber] = useState<number>(0);
  const [answer, setAnswer] = useState<number>(0);

  const { gameInfo } = useAppSelector(state => state.gameInfoSlice);
  const { userInfo } = useAppSelector(state => state.userInfoSlice);
  console.log("userInfo is :: ", userInfo);

  const socket = new SockJS("http://newlno.com/ws");
  const stompClient = Stomp.over(socket);

  const headers = {
    nickname: userInfo.nickname,
    profileImg: userInfo.profileImage,
    answerNumber: 0,
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
        reSubscribe();
        // stompClient.subscribe(
        //   `/sub/chat/join`,
        //   data => {
        //     const returnMessage = JSON.parse(data.body);
        //     // setRoomId(returnMessage.roomId);
        //     // setSessionId(returnMessage.sessionId);
        //     reSubscribe();
        //   },
        //   headers,
        // );
      });
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

  const reSubscribe = () => {
    try {
      stompClient.unsubscribe("sub-0");

      stompClient.subscribe(
        `/sub/chat/enter/${gameInfo.roomId}`,
        data => {
          const returnMessage = JSON.parse(data.body);
          console.log("return msg::", returnMessage);
          setReturnMsg(returnMsg => [...returnMsg, returnMessage.message]);

          if (returnMessage.messageType === "READY") {
            setIsReady(true);
          }

          if (returnMessage.messageType === "GAME") {
            if (quiz_list[returnMessage.quizNumber] === returnMessage.message) {
              console.log(
                "정답입니다.",
                quiz_list[returnMessage.quizNumber],
                answer,
              );

              setNumber(returnMessage.quizNumber + 1);

              if (userInfo.nickname === returnMessage.nickname) {
                console.log(
                  "12312312313123",
                  "나 : ",
                  userInfo.nickname,
                  "/ 보낸사람 :",
                  returnMessage.nickname,
                  "/ 내 점수",
                  answer,
                );
                setAnswer(prev => prev + 1);
              }
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
      `/pub/chat/enter/${gameInfo.roomId}`,
      headers,
      JSON.stringify({
        answerUser1: answer,
        answerUser2: 0,
        message: message,
        messageType: isReady ? "GAME" : "CHAT",
        nickname: userInfo.nickname,
        quizNumber: number,
        roomId: gameInfo.roomId,
        sessionId: gameInfo.sessionId,
      }),
    );
  };

  const ready = () => {
    console.log("ready!!!");
    if (!isReady) {
      stompClient.send(
        `/pub/chat/enter/${gameInfo.roomId}`,
        headers,
        JSON.stringify({
          sessionId: gameInfo.sessionId,
          message: "게임을 시작합니다",
          roomId: gameInfo.roomId,
          messageType: "READY",
        }),
      );
    }
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
