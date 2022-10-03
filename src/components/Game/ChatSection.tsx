import { useEffect, useLayoutEffect, useState } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import styled from "styled-components";
// import { getSessionId } from "../../shared/Cookie";
import { GameInput, ChatList } from "../index";
// import axios from "axios";
import { top_dlfeksdl } from "../../images";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { getQuizInfo, getReadyInfo } from "../../redux/modules/gameInfoSlice";
import { apis } from "../../shared/api";
import { getCookie } from "../../shared/Cookie";
// import { apis } from "../../shared/api";

// JOIN
// DISCONNECTED
// CHAT
// READY
// GAME
// NEXT
// FINISH

type IReady = {
  readyStatus: boolean;
};

// const SOCKET_SERVER = process.env.REACT_APP_SOCKET_SERVER as string;

const ChatSection = ({ readyStatus }: IReady) => {
  const dispatch = useAppDispatch();
  const { gameInfo, quizProgress } = useAppSelector(
    state => state.gameInfoSlice,
  );
  const { userInfo } = useAppSelector(state => state.userInfoSlice);

  const [message, setMessage] = useState<string>("");
  const [returnMsg, setReturnMsg] = useState<string[]>([]);
  const [nickname, setNickname] = useState<string[]>([]);
  const [profile, setProfile] = useState<string[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);

  const socket = new SockJS("https://newlno.com/wss");
  const stompClient = Stomp.over(socket);

  const headers = {
    nickname: userInfo.nickname,
    profileImage: userInfo.profileImage,
    cookie: getCookie(),
  };

  useLayoutEffect(() => {
    onConnected();

    return () => {
      onDisconnect();
    };
  }, []);

  useEffect(() => {
    if (readyStatus) {
      ready();
    }
  }, [readyStatus]);

  useEffect(() => {
    if (quizProgress.finalWinner !== "") {
      finish(quizProgress.finalWinner);
    }
  }, [quizProgress.finalWinner]);

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
  const finishGame = async (result: boolean) => {
    await apis.postGameResult(result).then(data => console.log(data));
  };

  const onConnected = () => {
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
      console.log("ININ");
      stompClient.unsubscribe("sub-0");
    });
  };

  const reSubscribe = () => {
    console.log("!!!!!!!!!!!!!", gameInfo.roomId);
    try {
      stompClient.unsubscribe("sub-0");

      stompClient.subscribe(
        `/sub/chat/enter/${gameInfo.roomId}`,
        data => {
          const returnMessage = JSON.parse(data.body);
          setReturnMsg(returnMsg => [...returnMsg, returnMessage.message]);
          setNickname(nickname => [...nickname, returnMessage.nickname]);
          setProfile(profile => [...profile, returnMessage.profileImage]);

          if (returnMessage.messageType === "READY") {
            setIsReady(true);
            dispatch(getReadyInfo(true));
          }

          if (returnMessage.messageType === "GAME") {
            dispatch(getQuizInfo(returnMessage));
          }

          if (returnMessage.messageType === "FINISH") {
            if (quizProgress.finalWinner === userInfo.nickname) {
              finishGame(true);
            } else {
              finishGame(false);
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
        matchingNickname: gameInfo.participant,
        message: message,
        matchingProfileImage: gameInfo.profileImg,
        messageType: isReady ? "GAME" : "CHAT",
        nickname: userInfo.nickname,
        quizNumber: 0,
        profileImage: userInfo.profileImage,
        roomId: gameInfo.roomId,
        cookie: gameInfo.cookie,
      }),
    );
  };

  const ready = () => {
    setTimeout(() => {
      if (!isReady) {
        stompClient.send(
          `/pub/chat/enter/${gameInfo.roomId}`,
          headers,
          JSON.stringify({
            cookie: gameInfo.cookie,
            message: "게임을 시작합니다",
            roomId: gameInfo.roomId,
            messageType: "READY",
          }),
        );
      }
    }, 500);
  };

  const finish = (winner: string) => {
    setTimeout(() => {
      if (winner === userInfo.nickname) {
        stompClient.send(
          `/pub/chat/enter/${gameInfo.roomId}`,
          headers,
          JSON.stringify({
            cookie: gameInfo.cookie,
            message: `${winner} 님이 승리하였습니다`,
            roomId: gameInfo.roomId,
            messageType: "FINISH",
          }),
        );
      } else {
        stompClient.send(
          `/pub/chat/enter/${gameInfo.roomId}`,
          headers,
          JSON.stringify({
            cookie: gameInfo.cookie,
            message: `${winner} 님이 승리하였습니다`,
            roomId: gameInfo.roomId,
            messageType: "FINISH",
          }),
        );
      }
    }, 500);
  };

  return (
    <ChatBoxLayout>
      <ChatBoxHeader>
        <div>
          <img src={top_dlfeksdl} onClick={ready} />
        </div>
        <p>일단이의 랜덤 매칭 영단어 게임</p>
      </ChatBoxHeader>
      <ChatListWrapper>
        <ChatList
          returnMsg={returnMsg}
          nickname={nickname}
          profile={profile}
          userNickname={userInfo.nickname}
        />
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
  align-items: center;
  background: #caf3ff;

  img {
    overflow: hidden;
    width: 150px;
    margin-top: 40px;
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
  background: #e4f5fa;
`;

const GameInputWrapper = styled.div`
  width: 530px;
  height: 60px;
`;
export default ChatSection;

// 게임시작 -> http로 검증된 사람인지 파악 -> 소켓연결 -> 매칭 -> 새로운화면 넘어가자마자 검증 -> http 공인단어장 받고
