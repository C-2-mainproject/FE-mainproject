import styled from "styled-components";
import { game_ildan } from "../../images";
import ModalPortal from "../Common/ModalPortal";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { getGameInfo } from "../../redux/modules/gameInfoSlice";
import { apis } from "../../shared/api";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

type ModalProps = {
  openWattingModal: () => void;
};

// const SOCKET_SERVER = process.env.REACT_APP_SOCKET_SERVER as string;

const GameWaitting = ({ openWattingModal }: ModalProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(state => state.userInfoSlice);

  const socket = new SockJS("https://newlno.com/wss");
  const stompClient = Stomp.over(socket);

  const headers = {
    nickname: userInfo.nickname,
    cookie: getCookie(),
    profileImage: userInfo.profileImage,
  };

  useEffect(() => {
    getTicketStr();

    return () => {
      stompClient.disconnect(() => {
        stompClient.unsubscribe("sub-0");
      });
    };
  }, []);

  const getTicketStr = async () => {
    await apis.getTicket().then(data => {
      checkTicketStr(data.data.ticket);
    });
  };

  const checkTicketStr = async (ticketStr: string) => {
    await axios
      .post("https://newlno.com/api/game/ticket/check", {
        ticket: ticketStr,
        cookie: getCookie(),
      })
      .then(data => {
        if (data.data) {
          onConnected();
        }
      });
  };

  const onConnected = () => {
    const cook = getCookie();

    try {
      stompClient.connect(headers, () => {
        stompClient.subscribe(
          `/sub/chat/join/${cook}`,
          data => {
            const returnMessage = JSON.parse(data.body);
            dispatch(
              getGameInfo({
                roomId: returnMessage.roomId,
                cookie: returnMessage.cookie,
                myNickname: returnMessage.myNickname,
                myProfileImage: returnMessage.myProfileImage,
                otherNickname: returnMessage.otherNickname,
                otherProfileImage: returnMessage.otherProfileImage,
              }),
            );

            if (returnMessage.messageType === "ERROR") {
              stompClient.disconnect(() => {
                stompClient.unsubscribe("sub-0");
              });
              navigate("/game");
            }

            // dispatch(__getGameWordStorage(returnMessage.roomId));

            navigate("/playgame");
          },
          headers,
        );
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={openWattingModal}>X</CloseButton>
          <Contents>
            <img src={game_ildan} alt="game_ildan" />
            <div>
              <h1>랜덤 매칭중...</h1>
              <h2>잠시만 기다려주세요!</h2>
            </div>
          </Contents>
        </ModalWrap>
      </Overlay>
    </ModalPortal>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

const ModalWrap = styled.div`
  width: 640px;
  height: fit-content;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 30px;
  margin: 20px;
  padding-right: 150px;
  padding-top: 30px;
  cursor: pointer;
  color: white;
`;

const Contents = styled.div`
  margin: 50px 30px;
  padding: 50px;
  text-align: center;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 46px;
    letter-spacing: -0.07em;
    color: #ffffff;
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;
    color: #ffffff;
  }

  div {
    margin: auto;
    width: 319px;
    height: 100px;
    text-align: center;
    padding-top: 15px;
    background: #00b4db;
    box-shadow: 10px 10px 60px rgba(0, 0, 0, 0.16);
  }
`;
export default GameWaitting;
