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
            <h1>영어단어 시험 보기</h1>
            <h2>영어 단어 시험 보기 서비스는 단어의 의미(뜻)을 </h2>
            <h2>
              <span>정확하게 입력해야 정답</span> 처리가 됩니다!{" "}
            </h2>
            <p>
              <span>TIP!</span> 의미(뜻)가(이) 여러개라면 콤마(,)를 사용하여
              구분해주세요!
            </p>
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
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 52px;
    letter-spacing: -0.07em;

    color: #000000;
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.07em;

    color: #000000;
    span {
      color: #00b4db;
    }
  }
  p {
    margin-top: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;

    color: #000000;
    span {
      color: black;
      font-weight: bold;
    }
  }
`;

const Button = styled.button`
  width: 480px;
  height: 60px;
  padding: 17px 192px;
  margin-top: 55px;
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

  &:hover {
    background: linear-gradient(to bottom right, #00b4db, #0083b0);
  }
`;

export default WordTestSereviceModal;
