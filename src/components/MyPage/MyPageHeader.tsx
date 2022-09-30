import styled from "styled-components";
import { useAppSelector } from "../../shared/reduxHooks";

const MyPageHeader = () => {
  const { userInfo } = useAppSelector(state => state.userInfoSlice);

  return (
    <MyPageHeaderLayout>
      <Header>
        <p>마이페이지</p>
        <button>
          <span>이벤트</span>
        </button>
      </Header>
      <Info>
        <div>
          <img src={userInfo.profileImage} />
          <h1>
            <span>{userInfo.nickname} 님</span>오늘도 달려볼까요?🔥
          </h1>
        </div>

        <div>
          <p>
            나의 단어장 <span>12개</span>
          </p>
          <p>
            개인 승리 <span>99회</span>
          </p>
        </div>
      </Info>
    </MyPageHeaderLayout>
  );
};

const MyPageHeaderLayout = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-bottom: 30px;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 70px;
    letter-spacing: -0.07em;
    color: #000000;
  }

  button {
    width: 182px;
    height: 40px;

    background: #1f1f1f;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;

    color: #ffffff;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1280px;
  height: 160px;
  border: 1px solid #000000;
  padding-right: 88px;
  align-items: center;

  div:nth-child(2n + 1) {
    display: flex;
    margin-left: 100px;

    img {
      margin-right: 20px;
      width: 80px;
      height: 80px;
      border-radius: 50px;
    }
  }

  div:nth-child(2n) {
    display: flex;
  }

  h1 {
    margin-top: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;

    letter-spacing: -0.07em;

    color: #000000;
  }

  p {
    height: 24px;
    // margin-top: 68px;
    margin-left: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: -0.07em;

    color: #000000;
  }

  p:nth-child(2n + 1) {
    border-right: 1px solid;
  }

  span {
    margin-top: 68px;
    margin-left: 10px;
    margin-right: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;

    letter-spacing: -0.07em;

    color: #000000;
  }
`;
export default MyPageHeader;
