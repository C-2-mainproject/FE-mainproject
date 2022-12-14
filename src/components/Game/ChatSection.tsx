import { useEffect, useLayoutEffect, useState } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import styled from "styled-components";
import { GameInput, ChatList } from "../index";
import { main_ildan } from "../../images";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { getQuizInfo, getReadyInfo } from "../../redux/modules/gameInfoSlice";
import { apis } from "../../shared/api";
import { getCookie } from "../../shared/Cookie";

type IReady = {
  readyStatus: boolean;
};

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

  const socket = new SockJS(`${process.env.REACT_APP_SOCKET_SERVER}/wss`);
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

  useEffect(() => {
    // dispatch(__getSharedWordStorage(gameInfo.roomId));
  }, []);

  const finishGame = async (result: boolean) => {
    await apis.postGameResult(result).then(data => console.log(data));
  };

  const onConnected = () => {
    try {
      stompClient.connect(headers, () => {
        reSubscribe();
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
          setReturnMsg(returnMsg => [...returnMsg, returnMessage.message]);
          setNickname(nickname => [...nickname, returnMessage.myNickname]);
          setProfile(profile => [...profile, returnMessage.myProfileImage]);

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
          if (returnMessage.messageType === "VICTORY") {
            if (returnMessage.myNickname !== userInfo.nickname) {
              finishGame(true);
            }
            dispatch(getQuizInfo(returnMessage));
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
        myNickname: gameInfo.myNickname,
        myProfileImage: gameInfo.myProfileImage,
        otherNickname: gameInfo.otherNickname,
        otherProfileImage: gameInfo.otherProfileImage,
        cookie: gameInfo.cookie,
        roomId: gameInfo.roomId,
        messageType: isReady ? "GAME" : "CHAT",
        quizNumber: 0,
        message: message,
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
            message: "????????? ???????????????",
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
            message: `${winner} ?????? ?????????????????????`,
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
            message: `${winner} ?????? ?????????????????????`,
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
          <img src={main_ildan} onClick={ready} />
        </div>
        <p>???????????? ?????? ?????? ????????? ??????</p>
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
