import styled from "styled-components";
import ModalPortal from "../ModalPortal";
import { expand } from "../../images";

type ModalProps = {
  openAddStorageModal: () => void;
};

const AddVocaModal = ({ openAddStorageModal }: ModalProps) => {
  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={openAddStorageModal}>X</CloseButton>
          <Contents>
            <Title>
              <h1>단어장의 기준이 되다</h1>
              <span>일단이와 함께하는 완전 단어 학습</span>
            </Title>
            <Form>
              <h1>새 단어장 만들기</h1>
              <div>
                <VocaName>
                  <p>단어장 제목</p>
                  <input placeholder="단어장 이름을 입력해주세요" />
                </VocaName>
                <UserInfo>
                  <Div>
                    <p>카테고리</p>
                    <div>
                      <span>
                        카테고리리 선택하기
                        <img src={expand} alt="expand" />
                      </span>
                    </div>
                  </Div>
                  <Div>
                    <p>공개 범위</p>
                    <div>성별을 선택해주세요</div>
                  </Div>
                </UserInfo>
                <Button>
                  <span>회원가입 완료</span>
                </Button>
              </div>
            </Form>
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

const Title = styled.div`
  width: 480px;
  padding-top: 33px;
  padding-bottom: 33px;
  border-bottom: 1px solid;

  h1 {
    font-family: NotoSansKR;
    font-size: 36px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2px;
    text-align: left;
    color: #000;
  }

  span {
    font-family: NotoSansKR;
    font-size: 36px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2px;
    text-align: left;
    color: #000;
  }
`;

const Form = styled.div`
  h1 {
    margin-top: 52px;
    font-family: NotoSansKR;
    font-size: 36px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2.52px;
    text-align: left;
    color: #000;
  }

  p {
    font-family: NotoSansKR;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.68px;
    text-align: left;
    color: #000;
  }

  span {
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.26px;
    text-align: left;
    color: #dbdbdb;
  }
`;

const VocaName = styled.div`
  margin-top: 41px;

  input {
    width: 480px;
    height: 60px;
    margin-top: 10px;
    margin-right: 20px;

    outline: 0;
    border-width: 0 0 1px;
  }

  button {
    width: 80px;
    height: 58px;
    background-color: #000;
  }
`;
const UserInfo = styled.div`
  display: flex;
  margin-top: 60px;
`;

const Div = styled.div`
  margin-right: 20px;
  width: 230px;
  height: 60px;
  border-bottom: 1px solid;

  p {
    // width: 43px;
    // height: 35px;
    // font-family: NotoSansKR;
    // font-size: 24px;
    // font-weight: 500;
    // font-stretch: normal;
    // font-style: normal;
    // line-height: normal;
    // letter-spacing: -1px;
    // text-align: left;

    width: 84px;
    height: 35px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    /* identical to box height */

    letter-spacing: -0.07em;

    color: #000000;
  }

  span {
    width: 127px;
    height: 26px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height */

    letter-spacing: -0.07em;

    color: #dbdbdb;
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
export default AddVocaModal;
