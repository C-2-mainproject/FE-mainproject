import { userInfo } from "os";
import styled from "styled-components";
import { useAppSelector } from "../../shared/reduxHooks";

const MyInfo = () => {
  const { userInfo } = useAppSelector(state => state.userInfoSlice);
  return (
    <MyInfoLayout>
      <MyInfoHeader>
        <p>회원정보</p>
        <span>고객 센터</span>
      </MyInfoHeader>

      <Info>
        <ID>
          <p>아이디</p>
          <div>
            <span>{userInfo.nickname}</span>
          </div>
        </ID>
        <Nickname>
          <p>이름</p>
          <div>
            <span>홍길동</span>
          </div>
        </Nickname>
        <Email>
          <p>이메일</p>
          <div>
            <span>apple.com</span>
          </div>
        </Email>
      </Info>
    </MyInfoLayout>
  );
};

const MyInfoLayout = styled.div``;

const MyInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 98px;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;

    letter-spacing: -0.07em;

    color: #000000;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    letter-spacing: -0.07em;

    color: #000000;
  }
`;

const Info = styled.div`
  width: 1280px;
  height: 294px;
  border-top: 2px solid;
  border-bottom: 1px solid;

  p {
    margin-right: 100px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;

    color: #000000;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;

    color: #000000;
  }
`;

const ID = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;

  div {
    width: 500px;
    height: 50px;
    border: 1px solid;
  }

  span {
    margin-top: 15px;
  }
`;

const Nickname = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  div {
    width: 500px;
    height: 50px;
    border: 1px solid;
  }
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  div {
    width: 500px;
    height: 50px;
    border: 1px solid;
  }
`;
export default MyInfo;
