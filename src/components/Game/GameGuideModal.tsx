import styled from "styled-components";
import ModalPortal from "../ModalPortal";

type ModalProps = {
  openGameGuideModal: () => void;
};

const GameGuideModal = ({ openGameGuideModal }: ModalProps) => {
  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={openGameGuideModal}>X</CloseButton>
          <Contents>
            <span>게임 방법 안내</span>
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
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 640px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
`;

const Contents = styled.div`
  margin: 50px 30px;
  padding: 50px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
    letter-spacing: -0.07em;
  }
`;
export default GameGuideModal;
