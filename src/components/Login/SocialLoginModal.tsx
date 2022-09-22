import styled from "styled-components";
import ModalPortal from "../ModalPortal";
type ModalProps = {
  openLoginModal: () => void;
};

const SocialLoginModal = ({ openLoginModal }: ModalProps) => {
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
              <div>
                <SelectLogin>
                  <p>로그인</p>
                  <Button>
                    <span>네이버 계정으로 로그인</span>
                  </Button>
                  <Button>
                    <span>Google 계정으로 로그인</span>
                  </Button>
                  <GuideDiv>
                    <h2>
                      로그인에 도움이 필요한가요?<span>고객지원 서비스</span>
                    </h2>
                  </GuideDiv>
                </SelectLogin>

                <HR data-content="또는" />
                <Button>
                  <span>10초만에 간편 회원 가입</span>
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
    margin-top: 20px;
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

const SelectLogin = styled.div`
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
    width: 480px;
    height: 60px;
    border: none;
    background-color: #000;
  }
`;

const GuideDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;

  h2 {
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.12px;
    text-align: left;
    color: #6b6b6b;
  }

  span {
    margin-left: 20px;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.12px;
    text-align: left;
    color: #6b6b6b;
    border-bottom: 1px solid;
  }
`;

const Button = styled.button`
  width: 480px;
  height: 60px;
  margin-top: 20px;
  background-color: #0199c3;
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

const HR = styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;

  &:before {
    content: "";
    background: linear-gradient(to right, transparent, black, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 0.5em;
    line-height: 1.5em;
    color: black;
    background-color: #fcfcfa;
  }
`;
export default SocialLoginModal;
