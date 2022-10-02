import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { game_lose, game_win } from "../../images";
import { useAppSelector } from "../../shared/reduxHooks";
import ModalPortal from "../ModalPortal";

type ModalProps = {
  winner: string;
};

const GameFinishModal = ({ winner }: ModalProps) => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector(state => state.userInfoSlice);

  const canelBtn = () => {
    navigate("/game");
  };
  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={canelBtn}>X</CloseButton>
          <Contents>
            {userInfo.nickname === winner ? (
              <img src={game_win} alt="game_win" />
            ) : (
              <img src={game_lose} alt="game_lose" />
            )}
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
export default GameFinishModal;
