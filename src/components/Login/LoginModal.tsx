import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import ModalPortal from "../ModalPortal";
import { apis } from "../../shared/api";
import CustomSelect from "../CustomSelect";

type ModalProps = {
  openLoginModal: () => void;
};

const age_list = [
  { filterCategory: "나이", value: "10대" },
  { filterCategory: "나이", value: "20대" },
  { filterCategory: "나이", value: "30대" },
  { filterCategory: "나이", value: "40대 이상" },
];

const gender_list = [
  { filterCategory: "성별", value: "남성" },
  { filterCategory: "성별", value: "여성" },
];

const LoginModal = ({ openLoginModal }: ModalProps) => {
  const [nickname, setNickname] = useState<string>("");
  const [validNickname, setValidNickname] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);

  const [addWordStorageSelect, setAddWordStorageSelect] = useState({
    category: "",
    status: "",
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const checkNickName = async () => {
    if (nickname) {
      try {
        if (!isClick) {
          setIsClick(true);
        }

        await apis.checkNickname(nickname).then(data => {
          if (!data.data) {
            setValidNickname(false);
          } else {
            setValidNickname(true);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSubmitHandler = () => {
    console.log(
      nickname,
      addWordStorageSelect.category,
      addWordStorageSelect.status,
    );
  };

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
                  <input
                    id="nickname"
                    value={nickname}
                    placeholder="닉네임을 입력해주세요"
                    onChange={onChangeHandler}
                  />
                  <button>
                    <span onClick={checkNickName}>확인</span>
                  </button>
                  {isClick ? (
                    validNickname ? (
                      <div>다른 닉네임을 입력해주세요.</div>
                    ) : (
                      <div>사용 가능한 닉네임입니다.</div>
                    )
                  ) : (
                    ""
                  )}
                </Nickname>
                <UserInfo>
                  <Div>
                    <p>나이</p>
                    <CustomSelect
                      props={age_list}
                      addWordStorageSelect={addWordStorageSelect}
                      setAddWordStorageSelect={setAddWordStorageSelect}
                    />
                  </Div>
                  <Div>
                    <p>성별</p>
                    <CustomSelect
                      props={gender_list}
                      addWordStorageSelect={addWordStorageSelect}
                      setAddWordStorageSelect={setAddWordStorageSelect}
                    />
                  </Div>
                </UserInfo>
                <Button>
                  <span onClick={onSubmitHandler}>회원가입 완료</span>
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
    letter-spacing: -0.07em;
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
    letter-spacing: -0.07em;
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

    border: none;
    border-bottom: 1px solid;
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
