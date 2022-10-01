import styled from "styled-components";
import { game_ildan } from "../../images";
import ModalPortal from "../ModalPortal";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { getGameInfo } from "../../redux/modules/gameInfoSlice";

type ModalProps = {
  openWattingModal: () => void;
};

const GameWaitting = ({ openWattingModal }: ModalProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(state => state.userInfoSlice);

  const socket = new SockJS("http://newlno.com/ws");
  const stompClient = Stomp.over(socket);

  const headers = {
    nickname: userInfo.nickname,
    profileImg: userInfo.profileImage,
  };

  useLayoutEffect(() => {
    onConnected();
  }, []);

  const onConnected = () => {
    console.log("onConnected!!");
    try {
      stompClient.connect(headers, () => {
        stompClient.subscribe(
          `/sub/chat/join`,
          data => {
            const returnMessage = JSON.parse(data.body);
            dispatch(
              getGameInfo({
                roomId: returnMessage.roomId,
                sessionId: returnMessage.sessionId,
                participant: returnMessage.matchingNickname,
              }),
            );
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

    color: #ffffff;
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;

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
