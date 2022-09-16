import styled from "styled-components";
import ModalPortal from "../ModalPortal";

type ModalProps = {
  openEditVocaModal: () => void;
};

const EditVocaModal = ({ openEditVocaModal }: ModalProps) => {
  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={openEditVocaModal}>X</CloseButton>
          <Contents>
            <p>단어장 편집하기</p>
            <AddArea>
              <div>
                <p>영어 단어</p>
                <input id="word" placeholder="영어 단어를 입력하세요" />
              </div>
              <div>
                <p>한글 뜻</p>
                <input id="mean" placeholder="한글 뜻을 입력하세요" />
              </div>
              <button>추가</button>
            </AddArea>

            <Button>
              <span>새 단어장 추가</span>
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

const AddArea = styled.div`
  height: 200px;
  border: 1px solid;

  button {
    background-color: gray;
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
export default EditVocaModal;
