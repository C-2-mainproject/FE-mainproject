// import axios from "axios";
import styled from "styled-components";
import { google_login } from "../../images";
import ModalPortal from "../ModalPortal";
type ModalProps = {
  openLoginModal: () => void;
};

const NAVER_SUPPORT = process.env.REACT_APP_NAVER_SUPPORT;
const OAUTH2_LOGIN = process.env.REACT_APP_OAUTH2_LOGIN;

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
                    <A href={OAUTH2_LOGIN}>
                      <img src={google_login} alt="google_login" />
                    </A>
                  </Button>
                  <GuideDiv>
                    <h2>
                      로그인에 도움이 필요한가요?
                      <span>
                        <A href={NAVER_SUPPORT} target="_blank">
                          고객지원 서비스
                        </A>
                      </span>
                    </h2>
                  </GuideDiv>
                </SelectLogin>
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
  height: 450px;
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
  margin: 30px 30px;
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

  p {
    text-align: center;
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
    text-align: center;
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
    text-align: center;
    color: #6b6b6b;
    border-bottom: 1px solid;
  }
`;

const Button = styled.button`
  width: 480px;
  height: 60px;
  margin-top: 20px;
  // background-color: #0199c3;
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

const A = styled.a``;
export default SocialLoginModal;
