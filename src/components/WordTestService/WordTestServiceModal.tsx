import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ModalPortal from "../ModalPortal";

type ModalProps = {
  id: number;
  openWordTestServiceModal: () => void;
};

const WordTestSereviceModal = ({
  id,
  openWordTestServiceModal,
}: ModalProps) => {
  const navigate = useNavigate();

  const moveToTestService = () => {
    navigate(`/wordtest/${id}`);
  };

  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={openWordTestServiceModal}>X</CloseButton>
          <Contents>
            <p>시험지 만들기</p>
            <Button>
              <span onClick={moveToTestService}>시험 보러 가기</span>
            </Button>
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
  }
`;

const Button = styled.button`
  width: 480px;
  height: 60px;
  padding: 17px 192px;
  margin-top: 60px;
  background-color: #d4d4d4;

  span {
    width: 96px;
    height: 26px;
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #fff;
  }
`;

export default WordTestSereviceModal;
