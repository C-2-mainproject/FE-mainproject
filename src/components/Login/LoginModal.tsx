import styled from "styled-components";
import ModalPortal from "../ModalPortal";
import { expand } from "../../images";

type ModalProps = {
  openLoginModal: () => void;
};

const LoginModal = ({ openLoginModal }: ModalProps) => {
  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={openLoginModal}>X</CloseButton>
          <Contents>
            <Title>
              <h1>단어장의 기준이 되다</h1>
              <span>일단이와 함께하는 완전 단어 학습</span>
            </Title>
            <Form>
              <h1>마지막 단계입니다.</h1>
              <div>
                <Nickname>
                  <p>닉네임</p>
                  <input placeholder="닉네임을 입력해주세요" />
                  <button>
                    <span>확인</span>
                  </button>
                </Nickname>
                <UserInfo>
                  <Div>
                    <p>나이</p>
                    <div>
                      <span>나이대를 선택해주세요</span>
                      <img src={expand} alt="expand" />
                    </div>
                  </Div>
                  <Div>
                    <p>성별</p>
                    <div>
                      <span>성별을 선택해주세요</span>
                      <img src={expand} alt="expand" />
                    </div>
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
`;

const Nickname = styled.div`
  margin-top: 41px;

  input {
    width: 370px;
    height: 60px;
    margin-top: 10px;
    margin-right: 20px;

    outline: 0;
    border-width: 0 0 1px;
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

  button {
    width: 80px;
    height: 58px;
    border: none;
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

  &:nth-child(2n) {
    margin-right: 0px;
  }

  p {
    width: 43px;
    height: 35px;
    font-family: NotoSansKR;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
  }

  span {
    width: 158px;
    height: 26px;
    margin-right: 22px;
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #dbdbdb;
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid;
  }
`;

const Button = styled.button`
  width: 480px;
  height: 60px;
  padding: 17px 192px;
  margin-top: 60px;
  background-color: #d4d4d4;
  border: none;

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

export default LoginModal;
